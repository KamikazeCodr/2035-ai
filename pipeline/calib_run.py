"""
Bayesian Sequential Importance Resampling (SIR) Calibration Filter
Author: Aditya Singh (refined with Sonnet)

Conditions 800,000 prior Monte Carlo trajectories against audited 2024-2025 FBI IC3 
and IBM Cost of a Data Breach observations, computing posterior particle weights.
"""
import sys
import json
import math
import numpy as np

import params as P
import run_model as R
import model2 as V
from model2 import wq, ess, SECT, YEARS

N = int(sys.argv[1]) if len(sys.argv) > 1 else 200_000
SEED = int(sys.argv[2]) if len(sys.argv) > 2 else 7
OUT = sys.argv[3] if len(sys.argv) > 3 else "v2_results.json"

# Standard mechanism switches:
# S1: Correlated macro-shocks
# S5: Geopolitical dynamics & chokepoints
# S6: Branch taxonomy alignment
# S7: Incrementality haircuts
# S4dep: Surface depletion
# S4def: Adaptive defense
SW = dict(
    S1=True,
    S5=True,
    S6=True,
    S7=True,
    S4dep=True,
    S4def=True,
)

O2 = 0.8933
AS35 = math.sqrt(1.0 * 10.0)
O5C = 0.13

# Global GDP ceiling constraint: $3,450B baseline scaling at 3.0% real growth
ceiling = {y: 3450.0 * (1.03 ** (y - 2025)) for y in YEARS}


def weights(out, use_as35=True, use_o5=True, use_o2=True, normalise=True):
    """Compute Bayesian importance weights based on empirical observation likelihoods."""
    lw = np.zeros(len(out["us"]))
    pf = out["parts"][("fraud", 2025)]
    Lf = out["L"]["fraud"][2025]
    usrep = Lf / pf["reporting_multiplier"] * out["us"]

    if use_o2:
        lw += -0.5 * ((np.log(O2) - np.log(usrep)) / 0.7) ** 2
    if use_as35:
        lw += -0.5 * ((np.log(AS35) - np.log(out["b"]["it"][2025])) / 0.9) ** 2
    if use_o5:
        lw += -0.5 * ((np.log(O5C) - np.log(1.0 - out["parts"][("it", 2025)]["defense_containment"])) / 0.5) ** 2

    if not normalise:
        return np.exp(lw)

    w = np.exp(lw - lw.max())
    return w / w.sum()


def baseline_post(n, seed, growth_discount=0.0):
    """
    Resample the baseline posterior distribution fit to historical FBI IC3 data (2015-2022).
    Returns real global non-AI counterfactual baseline per year.
    """
    rng = np.random.default_rng(seed + 1000)
    M = 2_000_000
    Z = V.Z

    def logit(p):
        return np.log(p / (1.0 - p))

    def inv_logit(x):
        return 1.0 / (1.0 + np.exp(-x))

    r = np.random.default_rng(2026)
    A0 = 360.0 * np.exp((math.log(800.0) - math.log(150.0)) / (2.0 * Z) * r.standard_normal(M))
    g = 0.08 + (0.14 - 0.02) / (2.0 * Z) * r.standard_normal(M)
    us = (1.0 / 3.8) * np.exp(math.log(1.5) / (2.0 * Z) * r.standard_normal(M))
    c = logit(0.14) + (logit(0.25) - logit(0.08)) / (2.0 * Z) * r.standard_normal(M)
    d = 0.15 + 0.15 * r.standard_normal(M)

    YRb = np.arange(2015, 2023)
    NOM = np.array([1.1, 1.45, 1.4, 2.7, 3.5, 4.2, 6.9, 10.3])
    CPI = np.array([237.0, 240.0, 245.1, 251.1, 255.7, 258.8, 271.0, 292.7])
    LR = np.log(NOM * 322.0 / CPI)
    ll = np.zeros(M)

    for t, y in zip(YRb, LR):
        mu_pred = np.log(A0) + g * (t - 2024) + np.log(us) + np.log(inv_logit(c + d * (t - 2024)))
        ll += -0.5 * ((y - mu_pred) / 0.20) ** 2

    w = np.exp(ll - ll.max())
    w = w / w.sum()
    idx = rng.choice(M, size=n, p=w)
    g_eff = g[idx] * (1.0 - growth_discount)

    return {y: A0[idx] * np.exp(g_eff * (y - 2024)) for y in YEARS}, ess(w)


def summarize(out, w, base):
    """Summarize quantiles and risk metrics from calibrated simulation draws."""
    res = {
        "ess": ess(w),
        "n": len(w),
    }

    def calc_quantiles(arr):
        return dict(zip(("p10", "p25", "p50", "p75", "p90"), wq(arr, w)))

    tb = {y: V.total(out, "b", y) for y in YEARS}
    ta = {y: base[y] + tb[y] for y in YEARS}

    res["b"] = {str(y): {**calc_quantiles(tb[y]), "mean": float((w * tb[y]).sum())} for y in YEARS}
    res["a"] = {str(y): calc_quantiles(ta[y]) for y in YEARS}
    res["L"] = {str(y): calc_quantiles(V.total(out, "L", y)) for y in YEARS}
    res["rep_global"] = {str(y): calc_quantiles(V.total(out, "rep", y)) for y in YEARS}
    res["rep_us"] = {str(y): calc_quantiles(V.total(out, "rep", y) * out["us"]) for y in YEARS}
    res["sector_b"] = {s: {str(y): calc_quantiles(out["b"][s][y]) for y in (2025, 2030, 2035)} for s in SECT}
    res["baseline"] = {str(y): calc_quantiles(base[y]) for y in YEARS}

    res["ai_share"] = {
        str(y): dict(
            ratio_of_medians=float(wq(tb[y], w, (0.5,))[0] / wq(ta[y], w, (0.5,))[0]),
            frac_worlds_gt_50=float((w * (tb[y] / ta[y] > 0.5)).sum()),
        )
        for y in YEARS
    }

    res["p_a_above_ceiling"] = {str(y): float((w * (ta[y] > ceiling[y])).sum()) for y in YEARS}

    bshare = dict(fraud=1.0 / 3.0, it=1.0 / 2.0, ics=1.0 / 3.0)
    res["p_sector_above_bound"] = {
        s: {str(y): float((w * (out["L"][s][y] > bshare[s] * ceiling[y])).sum()) for y in (2030, 2035)}
        for s in SECT
    }

    return res


def main():
    """Execute calibration filter and write posterior summary JSON."""
    pilot = V.run(N, SEED, {**SW, "S4def": False, "S4dep": False})
    w0 = weights(pilot)
    ref = {(s, y): wq(pilot["L"][s][y], w0, (0.5,))[0] for s in SECT for y in YEARS}

    out = V.run(N, SEED, SW, ref=ref, keep=(2025, 2026, 2030, 2035))
    w = weights(out)
    base, bess = baseline_post(N, SEED)

    res = summarize(out, w, base)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(res, f, indent=2)

    print(f"Calibration completed: ESS = {res['ess']:.0f}, output saved to {OUT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

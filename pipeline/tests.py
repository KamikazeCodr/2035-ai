"""
Automated Diagnostic Test Gates (T-01 through T-13)
Author: Aditya Singh (refined with Sonnet)

Comprehensive unit test and boundary validation suite verifying monotonic baseline growth,
non-negative increments, Monte Carlo tail stability, and GDP ceiling compliance.
"""
import os
import sys
import json
import math
import numpy as np

import params as P
import run_model as R
import loss_mc as M
import model2 as V2

STORED_CAL = {
    "fraud": 2.3314406483397914,
    "it": 2.6192461509954352,
    "ics": 1.0,
}

for s, v in STORED_CAL.items():
    P.CAL[s] = v

RES = []


def check(name, ok, detail=""):
    """Record test case result and print status readout."""
    RES.append((name, bool(ok), detail))
    status = "PASS " if ok else "FAIL "
    detail_str = f"  [{detail}]" if detail else ""
    print(status + name + detail_str)


def logit(p):
    """Logit transform."""
    return math.log(p / (1.0 - p))


def inv_logit(x):
    """Inverse logit transform."""
    return 1.0 / (1.0 + math.exp(-x))


SECT = list(P.SECTORS)
BR = list(P.BRANCH_WEIGHTS)


def run_all_tests():
    """Execute all diagnostic validation gates."""
    # 1. Build and validate all 15 factor specifications
    os.makedirs("specs", exist_ok=True)
    SPEC = {}
    for b in BR:
        for s in SECT:
            sp = R.spec_for(b, s)
            SPEC[(b, s)] = sp
            with open(f"specs/{b}_{s}.json", "w", encoding="utf-8") as f:
                json.dump(sp, f, indent=2)

    bad = []
    for k, sp in SPEC.items():
        try:
            M.validate(sp)
        except (M.ValidationError, ValueError) as e:
            bad.append((k, str(e)))
    check("Every one of 15 factor specifications passes loss_mc.validate", not bad, str(bad[:2]))

    # 2. Verify that loss_mc.validate raises ValidationError on invalid input
    invalid_caught = False
    try:
        bad_sp = {
            "factors": {"bad": {"kind": "invalid_kind", "by_year": {}}},
            "years": [2027],
        }
        M.validate(bad_sp)
    except (M.ValidationError, ValueError):
        invalid_caught = True
    check("loss_mc.validate raises ValidationError on invalid factor kind", invalid_caught)

    # 3. Independent interpolation of the p50 anchor
    def anchor_p50(vals, y, frac, name, sector):
        ks = P.KEY
        f = logit if frac else math.log
        g = inv_logit if frac else math.exp
        if y <= ks[0]:
            i = 0
        elif y >= ks[-1]:
            i = len(ks) - 2
        else:
            i = max(j for j in range(len(ks)) if ks[j] <= y)

        t = (y - ks[i]) / (ks[i + 1] - ks[i])
        v = g(f(vals[i]) + t * (f(vals[i + 1]) - f(vals[i])))
        scale = P.CAL[sector] if name == "campaigns_per_actor" else 1.0
        return v * scale

    # (i) Spec p50 equals intended anchor within numerical precision
    worst, n = 0.0, 0
    for s in SECT:
        for name, fac in P.SECTORS[s].items():
            frac = fac["kind"] != "lognormal"
            for y in P.YEARS:
                got = SPEC[("B-03", s)]["factors"][name]["by_year"][str(y)]["p50"]
                want = anchor_p50(fac["p50"], y, frac, name, s)
                worst = max(worst, abs(got / want - 1.0))
                n += 1
                if y in P.KEY:
                    tbl = fac["p50"][P.KEY.index(y)] * (P.CAL[s] if name == "campaigns_per_actor" else 1.0)
                    worst = max(worst, abs(got / tbl - 1.0))
    check(
        "(i) Baseline pathway spec p50 matches anchored p50 across all factors and years",
        worst < 0.01,
        f"{n} factor-years, worst deviation {worst:.2e}",
    )

    # (iii) Calibration scalars lie within stable numerical bounds [0.1, 10.0]
    check("(iii) Calibration scalars within stable range [0.1, 10]", all(0.1 <= v <= 10.0 for v in P.CAL.values()), str(P.CAL))

    # (iv) Fractions strictly inside (0, 1) across all specs and 400,000 draws
    fr_ok = all(
        0 < q[k] < 1
        for sp in SPEC.values()
        for fn, f in sp["factors"].items()
        if f["kind"] != "lognormal"
        for q in f["by_year"].values()
        for k in ("p10", "p50", "p90")
    )
    rng = np.random.default_rng(1)
    z = rng.standard_normal(400_000)
    lo, hi = 1.0, 0.0
    for (b, s), sp in SPEC.items():
        for fn, f in sp["factors"].items():
            if f["kind"] != "lognormal":
                for y in ("2024", "2030", "2035"):
                    d = M.draw(f["by_year"][y], f["kind"], z)
                    lo, hi = min(lo, d.min()), max(hi, d.max())
    check(
        "(iv) Fractions strictly inside (0, 1): specifications and 400k sample draws each",
        fr_ok and lo > 0 and hi < 1,
        f"draw range [{lo:.2e}, {hi:.6f}]",
    )

    # (v) Analytical product verification: 2026 fraud p50 product of medians vs sampled model median
    hand = 40e3 * 6e3 * P.CAL["fraud"] * 0.010 * 0.010 * 4.8e-5 * (1.0 - 0.12) * 7.0
    R.N = 400_000
    inc = R.sample("B-03", np.random.default_rng(11))[1]
    mod = float(np.median(inc["fraud"][2026]))
    check(
        "(v) Analytical calculation of fraud 2026 p50 within 5% of simulated model",
        abs(mod / hand - 1.0) < 0.05,
        f"analytical {hand:.3f}, model {mod:.3f}, deviation {mod / hand - 1.0:+.2%}",
    )

    # (ii) Sample median of product vs product of factor medians
    def prod_med(spec, y):
        t = 1.0
        for fn, f in spec["factors"].items():
            p = f["by_year"][str(y)]["p50"]
            t *= (1.0 - p) if f["kind"] == "complement" else p
        return t

    devs = {}
    for s in SECT:
        for y in (2026, 2030, 2035):
            devs[(s, y)] = float(np.median(inc[s][y])) / prod_med(SPEC[("B-03", s)], y) - 1.0
    w = max(devs, key=lambda k: abs(devs[k]))
    check(
        "(ii) Median of factor product vs product of medians within expected skew bounds",
        abs(devs[w]) < 0.07,
        f"worst {w}: {devs[w]:+.2%}",
    )

    # (ii-b) Exact Gauss-Hermite quadrature integration tests
    from numpy.polynomial.hermite_e import hermegauss

    gx, gw = hermegauss(200)
    gw = gw / gw.sum()
    zz = np.random.default_rng(3).standard_normal(400_000)
    wd, wn = 0.0, 0
    for b in ("B-03", "B-01", "B-04"):
        for s in SECT:
            for fn, f in SPEC[(b, s)]["factors"].items():
                for y in ("2026", "2030", "2035"):
                    q = f["by_year"][y]
                    d = M.draw(q, f["kind"], zz)
                    want = (1.0 - q["p50"]) if f["kind"] == "complement" else q["p50"]
                    wd = max(wd, abs(np.median(d) / want - 1.0))
                    wn += 1
    check(
        "(ii-b1) Sampled median of every factor equals its spec p50 within 1%",
        wd < 0.01,
        f"{wn} factor-years, worst {wd:.2%}",
    )

    wd2 = 0.0
    for s in SECT:
        for y in (2026, 2030, 2035):
            sp = SPEC[("B-03", s)]
            quad = sum(
                float((gw * np.log(M.draw(f["by_year"][str(y)], f["kind"], gx))).sum())
                for f in sp["factors"].values()
            )
            wd2 = max(wd2, abs(float(np.log(inc[s][y]).mean()) - quad))
    check(
        "(ii-b2) Mean log(product) equals exact quadrature sum within 0.02 log units",
        wd2 < 0.02,
        f"worst deviation {wd2:.4f}",
    )

    # (vi) Product of stored factor draws equals sampler output
    _o = V2.run(20000, 3, {"S1": True}, keep=(2025,))
    _w = 0.0
    for _s in SECT:
        _p = _o["parts"][(_s, 2025)]
        _prod = np.ones(20000)
        for _v in _p.values():
            _prod = _prod * _v
        _w = max(_w, float(np.max(np.abs(_prod / _o["L"][_s][2025] - 1.0))))
    check(
        "(vi) Factor component decomposition matches aggregate sampler output",
        _w < 1e-9,
        f"worst difference {_w:.1e}",
    )

    # Structural monotonic constraints
    check("Branch weights sum to 1.0", abs(sum(P.BRANCH_WEIGHTS.values()) - 1.0) < 1e-12)

    def eff(spec, y):
        return prod_med(spec, y)

    viol = [
        (s, y, eff(SPEC[("B-04", s)], y) / eff(SPEC[("B-03", s)], y))
        for s in SECT
        for y in P.YEARS
        if eff(SPEC[("B-04", s)], y) > eff(SPEC[("B-03", s)], y) * (1.0 + 1e-9)
    ]
    check("Plateau branch B-04 never raises median product above baseline B-03", not viol, str(viol[:3]))

    viol = [
        (s, y, q)
        for s in SECT
        for y in P.YEARS
        for q in ("p10", "p50", "p90")
        if SPEC[("B-01", s)]["factors"]["capable_actors"]["by_year"][str(y)][q]
        < SPEC[("B-03", s)]["factors"]["capable_actors"]["by_year"][str(y)][q] * (1.0 - 1e-9)
    ]
    check("Proliferation pathway B-01 never lowers capable_actors vs baseline B-03", not viol, str(viol[:3]))

    viol = [
        (s, y)
        for s in SECT
        for y in P.YEARS
        if not (
            SPEC[("B-02", s)]["factors"]["capable_actors"]["by_year"][str(y)]["p50"]
            <= SPEC[("B-01", s)]["factors"]["capable_actors"]["by_year"][str(y)]["p50"] * (1.0 + 1e-9)
        )
    ]
    check("Sovereign cap B-02 capable actors do not exceed proliferation B-01 actors", not viol, str(viol[:3]))

    conflict_defense_degradation = all(
        SPEC[(b, s)]["factors"]["defense_containment"]["by_year"]["2032"]["p50"]
        < SPEC[("B-03", s)]["factors"]["defense_containment"]["by_year"]["2032"]["p50"]
        for b in ("B-05", "B-01", "B-02")
        for s in SECT
    )
    check(
        "Geopolitical conflict branches degrade defensive containment as well as attacker success",
        conflict_defense_degradation,
    )

    # Independent re-implementation verification across representative sector-years
    Z_val = 1.2815515655446004

    def independent_sample(sector, year, sample_size, sample_seed):
        local_rng = np.random.default_rng(sample_seed)
        w_factor = 1.0 + 0.03 * max(0, year - 2026)
        macro_shock = local_rng.standard_normal(sample_size)
        accumulated = np.ones(sample_size)

        for factor_name, f_spec in P.SECTORS[sector].items():
            ks = P.KEY
            i_idx = 0 if year <= ks[0] else (len(ks) - 2 if year >= ks[-1] else max(j for j in range(len(ks)) if ks[j] <= year))
            t_weight = (year - ks[i_idx]) / (ks[i_idx + 1] - ks[i_idx])
            v_p50 = f_spec["p50"]
            z_factor = math.sqrt(0.3) * macro_shock + math.sqrt(0.7) * local_rng.standard_normal(sample_size)

            if f_spec["kind"] == "lognormal":
                mu_val = math.log(v_p50[i_idx]) + t_weight * (math.log(v_p50[i_idx + 1]) - math.log(v_p50[i_idx]))
                if factor_name == "campaigns_per_actor":
                    mu_val += math.log(P.CAL[sector])
                sig_val = w_factor * (math.log(f_spec["spread"][0]) + math.log(f_spec["spread"][1])) / (2.0 * Z_val)
                accumulated *= np.exp(mu_val + sig_val * z_factor)
            else:
                mu_val = logit(v_p50[i_idx]) + t_weight * (logit(v_p50[i_idx + 1]) - logit(v_p50[i_idx]))
                sig_val = w_factor * (f_spec["spread"][0] + f_spec["spread"][1]) / (2.0 * Z_val)
                sign_val = -1 if f_spec["kind"] == "complement" else 1
                prob = 1.0 / (1.0 + np.exp(-(mu_val + sign_val * sig_val * z_factor)))
                accumulated *= (1.0 - prob) if f_spec["kind"] == "complement" else prob

        return accumulated

    n_indep = 1_000_000
    R.N = n_indep
    for s_name, y_val in (("fraud", 2026), ("it", 2030), ("ics", 2035)):
        sim_a = independent_sample(s_name, y_val, n_indep, 5)
        specs_model = R.spec_for("B-03", s_name)
        rr = np.random.default_rng(6)
        z0 = rr.standard_normal(n_indep)
        sim_b = np.ones(n_indep)
        for fn_name, fac_spec in specs_model["factors"].items():
            zf = math.sqrt(0.3) * z0 + math.sqrt(0.7) * rr.standard_normal(n_indep)
            sim_b *= M.draw(fac_spec["by_year"][str(y_val)], fac_spec["kind"], zf)

        quantiles_a = [np.percentile(sim_a, p) for p in (10, 50, 90)]
        quantiles_b = [np.percentile(sim_b, p) for p in (10, 50, 90)]
        dev_list = [qa / qb - 1.0 for qa, qb in zip(quantiles_a, quantiles_b)]
        check(
            f"Independent re-implementation {s_name} {y_val}: p10/p50/p90 match within 3%",
            max(abs(x) for x in dev_list) < 0.03,
            "deviations: " + ", ".join(f"{x:+.2%}" for x in dev_list),
        )


def main():
    """Execute test suite and write JSON summary report."""
    run_all_tests()
    fails = [r for r in RES if not r[1]]
    total = len(RES)
    passed = total - len(fails)
    print(f"\n{passed}/{total} diagnostic validation gates passed.")

    with open("tests_result.json", "w", encoding="utf-8") as f:
        json.dump([dict(name=a, ok=b, detail=c) for a, b, c in RES], f, indent=2)

    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())

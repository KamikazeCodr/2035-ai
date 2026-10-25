"""
Disaggregated Correlated Factor Sampling Engine (2024-2035)
Author: Aditya Singh (refined with Sonnet)

Executes correlated normal-shock sampling across disaggregated sectors, mapping
shock vectors through lognormal and logit marginal distributions with GDP ceilings
and empirical incrementality haircuts.
"""
import math
import numpy as np

import params as P
import run_model as R
import loss_mc as M

Z = M.Z90


def logit(p):
    """Logit transform: mapping (0, 1) to real line."""
    return np.log(p / (1.0 - p))


def inv_logit(x):
    """Inverse logit (logistic sigmoid): mapping real line to (0, 1)."""
    return 1.0 / (1.0 + np.exp(-x))


SECT = list(P.SECTORS)
YEARS = P.YEARS
CODES = {
    "B-03": 0,
    "B-04": 1,
    "B-01": 2,
    "B-05": 3,
    "B-02": 4,
}

# Sensitivity & Mechanism Ablation Switches:
# S1: cross-sector correlated shocks; S5: dynamic geopolitical onset & compute chokepoints;
# S7: empirical incrementality haircuts; S4dep: target surface depletion; S4def: adaptive defense.
SW_ALL_OFF = dict(
    S1=False,
    S5=False,
    S6=True,
    S7=False,
    S4dep=False,
    S4def=False,
)
SW_ALL_ON = dict(
    S1=True,
    S5=True,
    S6=True,
    S7=True,
    S4dep=True,
    S4def=True,
)

PHI_CHOICES = (0.8, 0.9, 0.95)
PHI_OFFSET = {
    "capable_actors": 0.0,
    "defense_containment": 0.0,
    "exposed_share": 0.0,
    "campaigns_per_actor": -0.05,
    "success_given_exposure": -0.05,
    "reporting_multiplier": -0.05,
    "loss_per_success": -0.10,
}

HYP = {
    "hazard": (0.02, 0.04, 0.08),
    "tp": (0.08, 0.15, 0.25),
    "recov": (1, 3, 6),
    "split": ((0.15, 0.30, 0.45), (0.20, 0.35, 0.50), (0.20, 0.35, 0.45)),
    "d10": (0.05, 0.15, 0.30),
    "us_share": (1 / 3.8 / (1.5 ** 0.5), 1 / 3.8, 1 / 3.8 * (1.5 ** 0.5)),
}

D07_SD = {
    "fraud": 0.0,
    "it": math.log(10) / Z,
    "ics": (math.log(10) + math.log(40)) / (2 * Z),
}

INCR = {
    "fraud": (0.15, 0.30, 0.60),
    "it": (0.10, 0.30, 0.60),
    "ics": (0.20, 0.50, 0.90),
}

VPOOL = {
    "fraud": (1e8, 3e8, 1e9),
    "it": (1e7, 3e7, 1e8),
    "ics": (3e4, 1e5, 3e5),
}

BETA = (0.03, 0.10, 0.30)
L0 = {"fraud": 10.0, "it": 10.0, "ics": 1.0}
CAPM = {
    "ics": (0.25, 0.55, 1.0),
    "it": (0.40, 0.70, 1.0),
    "fraud": (0.70, 0.90, 1.0),
}
CAMP_CAP = (0.6, 0.8, 1.0)
SUCC_CAP = (-0.4, -0.2, 0.0)
PROLIF_ACT = {"ics": 3.0, "it": 2.5, "fraud": 1.6}


def lnorm(rng, n, q):
    """Sample from lognormal distribution specified by p10, p50, p90 quantiles."""
    lo, mid, hi = q
    scale = (math.log(hi) - math.log(lo)) / (2.0 * Z)
    return mid * np.exp(scale * rng.standard_normal(n))


def lgnorm(rng, n, q):
    """Sample from logit-normal distribution specified by p10, p50, p90 quantiles."""
    lo, mid, hi = q
    scale = (logit(hi) - logit(lo)) / (2.0 * Z)
    return inv_logit(logit(mid) + scale * rng.standard_normal(n))


def assign_branches(n, rng_s5, S5, h_independent=0.0, seed=7):
    """
    Assign per-sample geopolitical branch, conflict onset year W, and recovery duration R.
    When S5 is disabled, reproduces baseline allocation (weights: B-02 = 0.7 cap / 0.3 B-01).
    """
    if not S5:
        weights = P.BRANCH_WEIGHTS
        order = ["B-03", "B-04", "B-01", "B-05", "B-02"]
        probs = [weights[b] for b in order]
        br = rng_s5.choice(5, size=n, p=probs)
        capfail = (br == 4) & (rng_s5.random(n) > 0.7)
        br = np.where(capfail, 2, br)
        return br, np.full(n, 2032), np.full(n, 4.0), {}

    h = np.minimum(lnorm(rng_s5, n, HYP["hazard"]), 0.5)
    hit = rng_s5.random((n, 9)) < h[:, None]
    has = hit.any(1)
    W = np.where(has, 2027 + hit.argmax(1), 9999)

    plateau = rng_s5.random(n) < lnorm(rng_s5, n, HYP["tp"])
    sp = np.vstack([lnorm(rng_s5, n, q) for q in HYP["split"]])
    sp = sp / sp.sum(0)

    u = rng_s5.random(n)
    cat = np.where(u < sp[0], 0, np.where(u < sp[0] + sp[1], 1, 2))

    d10 = lnorm(rng_s5, n, HYP["d10"])
    pcap = np.interp(d10, [0.05, 0.15, 0.30], [0.9, 0.7, 0.5])
    holds = rng_s5.random(n) < pcap
    R_ = lnorm(rng_s5, n, HYP["recov"])

    br = np.zeros(n, dtype=int)
    war = has & ~plateau

    br[plateau] = 1
    br[war & (cat == 0)] = 2
    br[war & (cat == 1)] = 3
    br[war & (cat == 2)] = np.where(holds[war & (cat == 2)], 4, 2)

    # Sovereign containment failure dynamics: early reversion profile
    late = rng_s5.random(n) > 1.0 / (2.0 - d10)
    failcap = war & (cat == 2) & ~holds

    # Autonomous diffusion hazard: independent state release/cap probability
    if h_independent > 0.0:
        r_ind = np.random.default_rng(seed + 8888)
        hit_ind = r_ind.random((n, 9)) < h_independent
        has_ind = hit_ind.any(1) & ~has & ~plateau
        W_ind = np.where(has_ind, 2027 + hit_ind.argmax(1), 9999)
        W = np.where(has_ind, W_ind, W)
        br[has_ind & (cat == 0)] = 2
        br[has_ind & (cat == 2)] = np.where(holds[has_ind & (cat == 2)], 4, 2)
        ind_late = r_ind.random(n) > 1.0 / (2.0 - d10)
        failcap_ind = has_ind & (cat == 2) & ~holds
        late = late | (ind_late & failcap_ind)

    return br, W, R_, {
        "h": h,
        "plateau": plateau,
        "has_war": has,
        "cat": cat,
        "holds": holds,
        "d10": d10,
        "late": late & failcap,
    }


def weights_year(y, br, W, Rr, S5, late=None):
    """
    Calculate time-dependent weights for conflict, proliferation, and sovereign containment.
    """
    war = np.where(y >= W, np.clip(1.0 - (y - W) / Rr, 0.0, 1.0), 0.0)

    if S5:
        # Dynamic onset: compute shock starts at W; policy response manifests with one-year lag
        prolif = np.where(y == W + 1, 0.3, np.where(y > W + 1, 1.0, 0.0))
        cap = np.where(y == W + 1, 0.5, np.where(y > W + 1, 1.0, 0.0))
        lateyr = (y == W + 1) & (late if late is not None else False)
    else:
        # Baseline profile
        prolif = np.where(y == W, 0.3, np.where(y > W, 1.0, 0.0))
        cap = np.where(y == W, 0.5, np.where(y > W, 1.0, 0.0))
        lateyr = np.zeros(len(br), dtype=bool)

    slow = min(1.0, max(0.0, (y - 2026) / 5.0))
    return war, prolif, cap, slow, lateyr


def modifiers(sector, name, kind, br, war, prolif, cap, slow, lateyr):
    """
    Calculate location shift (log multiplier or logit shift) and spread addition per sample world.
    """
    n = len(br)
    m = [np.zeros(n) for _ in range(3)]
    isw = (br >= 2)
    b4 = (br == 1)
    b1 = (br == 2) & ~lateyr
    b2 = (br == 4) | ((br == 2) & lateyr)

    if kind == "lognormal":
        if name == "capable_actors":
            for i in range(3):
                m[i] += b4 * slow * math.log(0.4 if sector == "ics" else 0.6)
                m[i] += b1 * prolif * math.log(PROLIF_ACT[sector]) + b2 * cap * math.log(CAPM[sector][i])
        if name == "campaigns_per_actor":
            for i in range(3):
                m[i] += (
                    b4 * slow * math.log(0.5)
                    + isw * war * math.log(0.75)
                    + b1 * prolif * math.log(1.3)
                    + b2 * cap * math.log(CAMP_CAP[i])
                )
    else:
        if name == "success_given_exposure":
            for i in range(3):
                m[i] += -0.5 * slow * b4 - 0.25 * isw * war + 0.4 * prolif * b1 + SUCC_CAP[i] * cap * b2
        if name == "defense_containment":
            for i in range(3):
                m[i] += -0.2 * slow * b4 - 0.25 * isw * war

    return m[1], (m[2] - m[0]) / (2.0 * Z)


def base_ms(sector, name, y, cal):
    """Compute base distribution parameters (mu, sigma) and factor distribution kind."""
    fac = P.SECTORS[sector][name]
    q, kind = R.base_q(fac, y, cal, name)

    if kind == "lognormal":
        return math.log(q[1]), (math.log(q[2]) - math.log(q[0])) / (2.0 * Z), kind

    return logit(q[1]), (logit(q[2]) - logit(q[0])) / (2.0 * Z), kind


def run(
    n,
    seed=7,
    SW=None,
    ref=None,
    cal=None,
    keep=(2025,),
    diffusion_uplift=1.0,
    defender_uplift=1.0,
    patch_lag_factor=1.0,
    h_independent=0.0,
):
    """
    Main Monte Carlo sampler. Returns loss trajectories and quantile decompositions.
    """
    SW = {**SW_ALL_OFF, **(SW or {})}
    cal = cal or {s: 1.0 for s in SECT}

    ss = np.random.SeedSequence(seed)
    st = [np.random.default_rng(x) for x in ss.spawn(6)]
    rng, r5, r7, r4, rus, rd7 = st

    br, W, Rr, h5 = assign_branches(n, r5, SW["S5"], h_independent=h_independent, seed=seed)
    incr = {s: (lgnorm(r7, n, INCR[s]) if SW["S7"] else np.ones(n)) for s in SECT}
    us = lnorm(rus, n, HYP["us_share"])
    zD = rd7.standard_normal(n)
    Vp = {s: lnorm(r4, n, VPOOL[s]) for s in SECT}
    beta = lnorm(r4, n, BETA)

    phi_w = rng.choice(np.array(PHI_CHOICES), size=n) if SW["S1"] else None
    c = rng.standard_normal(n) if SW["S1"] else None
    idio = {(s, f): rng.standard_normal(n) for s in SECT for f in P.SECTORS[s]} if SW["S1"] else {}

    out = {
        "L": {s: {} for s in SECT},
        "b": {s: {} for s in SECT},
        "rep": {s: {} for s in SECT},
        "parts": {},
        "br": br,
        "W": W,
        "us": us,
        "incr": incr,
        "hyper": h5,
        "zD": zD,
        "phi": phi_w,
        "beta": beta,
        "Vp": Vp,
    }

    cumS = {s: np.zeros(n) for s in SECT}
    Lprev = {s: None for s in SECT}

    for k, y in enumerate(YEARS):
        if SW["S1"]:
            if k > 0:
                c = phi_w * c + np.sqrt(1.0 - phi_w ** 2) * rng.standard_normal(n)
        else:
            c = rng.standard_normal(n)

        war, prolif, cap, slow, lateyr = weights_year(y, br, W, Rr, SW["S5"], h5.get("late"))
        itact = None

        sector_order = [x for x in SECT if x != "ics"] + [x for x in SECT if x == "ics"]
        for s in sector_order:
            tot = np.ones(n)
            d = {}

            for name in P.SECTORS[s]:
                mu, sg, kind = base_ms(s, name, y, cal[s])
                loc, spr = modifiers(s, name, kind, br, war, prolif, cap, slow, lateyr)
                mu = mu + loc
                sg = sg + spr

                if SW["S1"]:
                    if k > 0:
                        ph = np.clip(phi_w + PHI_OFFSET[name], 0.0, 0.999)
                        idio[(s, name)] = ph * idio[(s, name)] + np.sqrt(1.0 - ph ** 2) * rng.standard_normal(n)
                    zi = idio[(s, name)]
                else:
                    zi = rng.standard_normal(n)

                z = math.sqrt(R.RHO) * c + math.sqrt(1.0 - R.RHO) * zi

                if SW["S5"] and name == "capable_actors" and D07_SD[s] > 0:
                    sdy = D07_SD[s] * min(1.0, max(0.0, (y - 2025) / 2.0))
                    extra = np.sqrt(np.maximum(0.0, sdy ** 2 - sg ** 2)) if sdy > 0 else 0.0
                    mu = mu + extra * zD

                if name == "defense_containment" and SW["S4def"] and k > 0 and ref is not None:
                    sh = beta * (np.log1p(Lprev[s] / L0[s]) - math.log1p(ref[(s, y - 1)] / L0[s]))
                    mu = mu + np.clip(sh, -1.5, 1.5)

                # Scenario perturbation parameters for defense uplift and exploit diffusion
                if diffusion_uplift != 1.0 and name == "capable_actors":
                    mu = mu + math.log(diffusion_uplift)
                if defender_uplift != 1.0 and name == "defense_containment":
                    mu = mu + math.log(defender_uplift)
                if patch_lag_factor != 1.0 and name == "success_given_exposure":
                    mu = mu + math.log(patch_lag_factor)

                if kind == "lognormal":
                    part = np.exp(mu + sg * z)
                elif kind == "fraction":
                    part = inv_logit(mu + sg * z)
                    if name == "exposed_share" and SW["S4dep"]:
                        part = part * np.exp(-cumS[s] / Vp[s])
                else:
                    part = 1.0 - inv_logit(mu - sg * z)

                # Consistency hierarchy: ICS operators are bounded by general IT operators
                if SW["S5"] and name == "capable_actors":
                    if s == "it":
                        itact = part
                    elif s == "ics" and itact is not None:
                        part = np.minimum(part, itact)

                d[name] = part
                tot = tot * part

            cnt = d["capable_actors"] * d["campaigns_per_actor"] * d["exposed_share"] * d["success_given_exposure"]
            cumS[s] = cumS[s] + cnt
            L = tot
            Lprev[s] = L

            out["L"][s][y] = L
            out["b"][s][y] = L * incr[s]
            out["rep"][s][y] = L / d["reporting_multiplier"]

            if y in keep:
                out["parts"][(s, y)] = d

    return out


def total(out, key, y):
    """Aggregate total across all sectors for a specified metric and year."""
    return sum(out[key][s][y] for s in SECT)


def wq(a, w, qs=(0.1, 0.25, 0.5, 0.75, 0.9)):
    """Calculate weighted quantiles."""
    idx = np.argsort(a)
    cw = np.cumsum(w[idx])
    cw = cw / cw[-1]
    return [float(a[idx][np.searchsorted(cw, q)]) for q in qs]


def ess(w):
    """Compute Kish effective sample size."""
    return float(w.sum() ** 2 / (w ** 2).sum())

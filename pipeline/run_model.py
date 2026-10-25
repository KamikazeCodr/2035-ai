import json, math, subprocess, sys, copy
import numpy as np
sys.path.insert(0, "/home/claude/stage4")
import params as P
import loss_mc as M

lg = lambda p: math.log(p / (1 - p))
ilg = lambda x: 1 / (1 + math.exp(-x))
N, SEED, RHO = 20000, 7, 0.3

def interp(vals, y, logit=False):
    f = (lambda v: lg(v)) if logit else math.log
    g = ilg if logit else math.exp
    ks = P.KEY
    if y <= ks[0]: y0, y1, v0, v1 = ks[0], ks[1], vals[0], vals[1]
    elif y >= ks[-1]: y0, y1, v0, v1 = ks[-2], ks[-1], vals[-2], vals[-1]
    else:
        i = max(j for j in range(len(ks)) if ks[j] <= y)
        if ks[i] == y: return vals[i]
        y0, y1, v0, v1 = ks[i], ks[i+1], vals[i], vals[i+1]
    t = (y - y0) / (y1 - y0)
    return g(f(v0) + t * (f(v1) - f(v0)))

def base_q(fac, y, cal=1.0, name=""):
    k = fac["kind"]; w = 1 + P.WIDEN * max(0, y - 2026)
    if k == "lognormal":
        p50 = interp(fac["p50"], y) * (cal if name == "campaigns_per_actor" else 1)
        lo, hi = fac["spread"]
        return [p50 / lo ** w, p50, p50 * hi ** w], k
    p50 = lg(interp(fac["p50"], y, True)); dl, dh = fac["spread"]
    return [ilg(p50 - dl * w), ilg(p50), ilg(p50 + dh * w)], k

def wts(branch, y):
    war = {2032: 1, 2033: .75, 2034: .5, 2035: .25}.get(y, 0)
    prolif = {2032: .3, 2033: 1, 2034: 1, 2035: 1}.get(y, 0)
    cap = {2032: .5, 2033: 1, 2034: 1, 2035: 1}.get(y, 0)
    slow = min(1, max(0, (y - 2026) / 5)) if branch == "B-04" else 0
    return war, prolif, cap, slow

def modify(branch, sector, name, q, kind, y):
    war, prolif, cap, slow = wts(branch, y)
    m = [1, 1, 1]; d = [0, 0, 0]
    def mul(v, w, t=(1, 1, 1)):
        for i in range(3): m[i] *= v[i] ** w if hasattr(v, "__len__") else v ** w
    if branch == "B-04":
        if name == "capable_actors": mul(0.4 if sector == "ics" else 0.6, slow)
        if name == "campaigns_per_actor": mul(0.5, slow)
        if name == "success_given_exposure": d = [-0.5 * slow] * 3
        if name == "defense_containment": d = [-0.2 * slow] * 3
    if branch in ("B-05", "B-01", "B-02") and war:
        if name == "campaigns_per_actor": mul(0.75, war)
        if name == "success_given_exposure": d = [-0.25 * war] * 3
        if name == "defense_containment": d = [-0.25 * war] * 3   # same compute shock hits defenders (L6)
    if branch == "B-01" and prolif:
        if name == "capable_actors": mul({"ics": 3, "it": 2.5, "fraud": 1.6}[sector], prolif)
        if name == "campaigns_per_actor": mul(1.3, prolif)
        if name == "success_given_exposure": d = [d[i] + 0.4 * prolif for i in range(3)]
    if branch == "B-02" and cap:
        capm = {"ics": (0.25, 0.55, 1.0), "it": (0.4, 0.7, 1.0), "fraud": (0.7, 0.9, 1.0)}[sector]
        if name == "capable_actors":
            for i in range(3): m[i] *= capm[i] ** cap
        if name == "campaigns_per_actor":
            for i, v in enumerate((0.6, 0.8, 1.0)): m[i] *= v ** cap
        if name == "success_given_exposure":
            d = [d[i] + (-0.4, -0.2, 0)[i] * cap for i in range(3)]
    if kind == "lognormal":
        out = [q[i] * m[i] for i in range(3)]
    else:
        out = [ilg(lg(q[i]) + d[i]) for i in range(3)]
    return sorted(out)

def spec_for(branch, sector):
    facs = {}
    for name, fac in P.SECTORS[sector].items():
        by = {}
        for y in P.YEARS:
            q, kind = base_q(fac, y, P.CAL[sector], name)
            q = modify(branch, sector, name, q, kind, y)
            by[str(y)] = dict(p10=q[0], p50=q[1], p90=q[2], anchor=fac["anchor"])
        facs[name] = dict(kind=fac["kind"], by_year=by)
    return {"metric": f"AI-attributable increment, {sector}, branch {branch}", "unit": "USD bn per year, constant 2025 prices",
            "years": P.YEARS, "n_samples": N, "seed": SEED, "rho": RHO, "factors": facs,
            "reference": {str(y): v for y, v in P.ORIGINAL.items()}}

def sample(branch, rng):
    """Increment samples per sector per year, shared world shock across sectors; returns dict."""
    specs = {s: spec_for(branch, s) for s in P.SECTORS}
    inc = {s: {} for s in specs}; parts = {}
    for y in P.YEARS:
        common = rng.standard_normal(N)
        for s, sp in specs.items():
            tot = np.ones(N)
            for name, fac in sp["factors"].items():
                z = math.sqrt(RHO) * common + math.sqrt(1 - RHO) * rng.standard_normal(N)
                part = M.draw(fac["by_year"][str(y)], fac["kind"], z)
                tot = tot * part; parts[(s, name, y)] = part
            inc[s][y] = tot
    return specs, inc, parts

def baseline(rng):
    lo, mid, hi = P.BASE_LEVEL; g0, g1, g2 = P.BASE_GROWTH
    lvl = np.exp(math.log(mid) + (math.log(hi) - math.log(lo)) / (2 * M.Z90) * rng.standard_normal(N))
    g = np.maximum(-0.02, g1 + (g2 - g0) / (2 * M.Z90) * rng.standard_normal(N))
    return {y: lvl * (1 + g) ** (y - 2024) for y in P.YEARS}

def pct(a): return {k: float(v) for k, v in zip(("p10", "p50", "p90"), np.percentile(a, [10, 50, 90]))} | {"mean": float(np.mean(a))}

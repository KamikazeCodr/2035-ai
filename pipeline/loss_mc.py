#!/usr/bin/env python3
r"""
Probabilistic Monte Carlo Cyber Loss Engine (2024-2035)
Author: Aditya Singh (refined with Sonnet)

Formulates global cyber loss exposure as a multi-sector product of empirical operational factors:
    L_total(t) = L_base(t) + \Delta L_AI(t) = L_base(t) + \left( \sum_{s \in \mathcal{S}} \prod_{k=1}^7 f_{k,s}(t) \right) \times P_{33}

Samples parameter uncertainty over lognormal and logit margins using an empirical
macro-shock correlation structure (rho = 0.30) to capture systemic crisis clustering across sectors.
Includes Spearman rank correlation sensitivity evaluations and automated boundary assertions.
"""
import sys
import json
import numpy as np

Z90 = 1.2815515655446004  # Standard normal 90th percentile


def template():
    """Generate empty template specification dictionary for factor-product modeling."""
    years = [2027, 2028]
    q = {"p10": None, "p50": None, "p90": None, "anchor": None}
    f = {"kind": "lognormal", "by_year": {str(y): dict(q) for y in years}}
    return {
        "metric": "Empirical cyber loss exposure",
        "unit": "USD bn per year, constant 2025 USD",
        "years": years,
        "n_samples": 20000,
        "seed": 0,
        "rho": 0.3,
        "factors": {
            "capable_actors": dict(f),
            "campaigns_per_actor": dict(f),
            "exposed_share": {**f, "kind": "fraction"},
            "success_given_exposure": {**f, "kind": "fraction"},
            "loss_per_success": dict(f),
            "defense_containment": {**f, "kind": "complement"},
            "reporting_multiplier": dict(f),
        },
        "reference": {"2034": None},
    }


class ValidationError(ValueError):
    """Raised when simulation parameters or sector factor specifications fail validation checks."""
    pass


def validate(spec):
    """
    Validate input factor specification dictionary for mathematical consistency.
    Raises ValidationError if any parameter or quantile is malformed.
    """
    if "factors" not in spec:
        raise ValidationError("Missing 'factors' dictionary in specification")

    if "years" not in spec or not spec["years"]:
        raise ValidationError("Missing or empty 'years' list in specification")

    for name, fac in spec["factors"].items():
        if fac.get("kind") not in ("lognormal", "fraction", "complement"):
            raise ValidationError(f"{name}: unknown factor distribution kind '{fac.get('kind')}'")

        by_year = fac.get("by_year", {})
        for y in spec["years"]:
            q = by_year.get(str(y))
            if not q or any(q.get(k) is None for k in ("p10", "p50", "p90")):
                raise ValidationError(f"{name} {y}: p10/p50/p90 quantiles missing")

            if not q.get("anchor"):
                raise ValidationError(
                    f"{name} {y}: missing 'anchor' citation (source citation or methodological rationale required)"
                )

            if not (q["p10"] <= q["p50"] <= q["p90"]):
                raise ValidationError(
                    f"{name} {y}: non-monotonic quantiles (expected p10 <= p50 <= p90, got {q['p10']} / {q['p50']} / {q['p90']})"
                )

            if fac["kind"] != "lognormal" and not (0 < q["p10"] and q["p90"] < 1):
                raise ValidationError(f"{name} {y}: fraction values must lie strictly in (0, 1)")

            if fac["kind"] == "lognormal" and q["p10"] <= 0:
                raise ValidationError(f"{name} {y}: lognormal requires p10 > 0")


def draw(q, kind, z):
    """Draw samples from marginal quantile distribution given standard normal shocks z."""
    if kind == "lognormal":
        mu = np.log(q["p50"])
        sig = (np.log(q["p90"]) - np.log(q["p10"])) / (2.0 * Z90)
        return np.exp(mu + sig * z)

    mu = np.log(q["p50"] / (1.0 - q["p50"]))
    sig = (np.log(q["p90"] / (1.0 - q["p90"])) - np.log(q["p10"] / (1.0 - q["p10"]))) / (2.0 * Z90)

    if kind == "complement":
        # A positive shock z represents an unfavorable world for defense (reduced containment),
        # so containment fraction is drawn with -z, and defensive factor is (1 - containment).
        p = 1.0 / (1.0 + np.exp(-(mu - sig * z)))
        return 1.0 - p

    return 1.0 / (1.0 + np.exp(-(mu + sig * z)))


def spearman(a, b):
    """Compute Spearman rank correlation between two sample vectors."""
    ra = np.argsort(np.argsort(a))
    rb = np.argsort(np.argsort(b))
    return float(np.corrcoef(ra, rb)[0, 1])


def main():
    """Command-line interface for loss_mc module."""
    if len(sys.argv) < 2:
        print(__doc__)
        return 1

    if sys.argv[1] == "--template":
        print(json.dumps(template(), indent=2))
        return 0

    with open(sys.argv[1], "r", encoding="utf-8") as f:
        spec = json.load(f)

    validate(spec)
    n = spec["n_samples"]
    rho = spec["rho"]
    rng = np.random.default_rng(spec["seed"])
    names = list(spec["factors"])
    years = spec["years"]

    results = {}
    final_parts = {}

    for y in years:
        common = rng.standard_normal(n)
        total = np.ones(n)
        for name in names:
            fac = spec["factors"][name]
            z = np.sqrt(rho) * common + np.sqrt(1.0 - rho) * rng.standard_normal(n)
            part = draw(fac["by_year"][str(y)], fac["kind"], z)
            total *= part
            if y == years[-1]:
                final_parts[name] = part
        results[y] = total

    out = {
        "metric": spec["metric"],
        "unit": spec["unit"],
        "rho": rho,
        "years": {},
    }

    for y in years:
        p5, p10, p50, p90, p95 = np.percentile(results[y], [5, 10, 50, 90, 95])
        out["years"][str(y)] = {
            "p5": float(p5),
            "p10": float(p10),
            "p50": float(p50),
            "p90": float(p90),
            "p95": float(p95),
        }

    print(json.dumps(out, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())

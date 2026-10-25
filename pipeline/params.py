"""
Model Parameters & Empirical Evidence Anchors (2024-2035)
Author: Aditya Singh (refined with Sonnet)

Master parameter dictionary (P-01 through P-45) across three economic sectors:
Consumer/SME Fraud, Enterprise IT/Cloud Extortion, and Industrial Control Systems (ICS/OT).
All loss values denominated in billions of constant 2025 USD.
"""
import math

YEARS = list(range(2024, 2036))
KEY = [2024, 2026, 2028, 2031, 2035]

# Cap fraud growth tail post-2026 baseline calibration
WIDEN = 0.03  # Annual variance expansion factor for post-2026 projection interval

# Factor distribution specifications:
#   lognormal   -> spread=(lo_ratio, hi_ratio)
#   fraction    -> spread=(logit_lo, logit_hi)
#   complement  -> spread=(logit_lo, logit_hi), factor = 1 - containment
SECTORS = {
    "fraud": {  # Consumer fraud, investment scams, BEC, impersonation (cyber-enabled fraud)
        "capable_actors": dict(
            kind="lognormal",
            p50=[15e3, 40e3, 90e3, 150e3, 200e3],
            spread=(2.0, 2.0),
            anchor="Calibrated Prior: AI-using fraud operators; upper bound set by scam-compound workforce 370k-500k (GovAI App. B, USIP); S-36",
            tier="A",
        ),
        "campaigns_per_actor": dict(
            kind="lognormal",
            p50=[1.5e3, 6e3, 1.5e4, 4e4, 8e4],
            spread=(2.5, 3.0),
            anchor="Calibrated Prior: AI-enabled victim approaches per operator-year; calibrated to 2025 IC3 AI-referenced losses (S-37), grows with C1->C3 automation",
            tier="A",
        ),
        "exposed_share": dict(
            kind="fraction",
            p50=[0.010, 0.010, 0.008, 0.006, 0.004],
            spread=(0.5, 0.5),
            anchor="Calibrated Prior: reachable and susceptible share; AI-related complaints are 4.9% of cyber-enabled fraud complaints, 2025 (S-37: 22,364 of 452,868)",
            tier="A",
        ),
        "success_given_exposure": dict(
            kind="fraction",
            p50=[0.008, 0.010, 0.012, 0.012, 0.010],
            spread=(0.6, 0.6),
            anchor="Calibrated Prior: incremental success attributable to AI; IC3 AI-referenced share of investment losses 632M of 8.65B (S-37)",
            tier="A",
        ),
        "loss_per_success": dict(
            kind="lognormal",
            p50=[4.5e-5, 4.8e-5, 5.2e-5, 5.8e-5, 6.4e-5],
            spread=(2.0, 3.0),
            anchor="S-37: IC3 AI-referenced average $39.9k per complaint (893.3M / 22,364), 2025; gross of defense baseline; +3%/yr",
            tier="E2",
        ),
        "defense_containment": dict(
            kind="complement",
            p50=[0.08, 0.12, 0.18, 0.28, 0.35],
            spread=(0.5, 0.5),
            anchor="S-38 IBM 2026: AI/automation saves $1.93M per breach (about 35%), about one-third of firms use it extensively; adoption path following empirical defense curve",
            tier="E2->A",
        ),
        "reporting_multiplier": dict(
            kind="lognormal",
            p50=[7.0, 7.0, 7.0, 7.0, 7.0],
            spread=(1.4, 1.45),
            anchor="S-39 GovAI: reporting rate 10-18% (IC3 head 10-12%, NCA 14%); multiplier 5-10",
            tier="E2",
        ),
    },
    "it": {  # Enterprise IT: intrusion, ransomware, data theft, downtime (BEC counted in fraud)
        "capable_actors": dict(
            kind="lognormal",
            p50=[2e3, 6e3, 1.2e4, 2.4e4, 5e4],
            spread=(2.0, 2.0),
            anchor="D-07 (>=C3 operators 2k/20k/100k in 2027/29/31) plus lower-tier crews; calibrated workforce baseline",
            tier="A",
        ),
        "campaigns_per_actor": dict(
            kind="lognormal",
            p50=[1.5e3, 2.8e3, 3.5e3, 4.2e3, 6e3],
            spread=(3.0, 4.0),
            anchor="Calibrated Prior: AI-enabled intrusion attempts per operator-year, saturating at target population; C3->C6 parallelism",
            tier="A",
        ),
        "exposed_share": dict(
            kind="fraction",
            p50=[0.30, 0.30, 0.28, 0.22, 0.15],
            spread=(0.5, 0.5),
            anchor="S-40 DBIR 2026: exploitation is #1 vector (31%), median patch 43 days (32 in 2025), 26% of KEVs fully patched; falls as AI find-and-fix scales",
            tier="E2->A",
        ),
        "success_given_exposure": dict(
            kind="fraction",
            p50=[0.001, 0.003, 0.006, 0.009, 0.012],
            spread=(0.7, 0.7),
            anchor="Stage 2 TLO solves 6-7/10 undefended (S-07, S-22); defended range unmeasured, discount empirical defense factor",
            tier="F->A",
        ),
        "loss_per_success": dict(
            kind="lognormal",
            p50=[6e-5, 6.2e-5, 6.6e-5, 7.2e-5, 8e-5],
            spread=(4.0, 8.0),
            anchor="S-38 IBM avg breach $4.99M (large, surveyed firms) vs UK survey mean about $1k-8k for all firms (S-39); mixture median $60k, mean about $120k; heavy tail",
            tier="E2",
        ),
        "defense_containment": dict(
            kind="complement",
            p50=[0.10, 0.14, 0.22, 0.32, 0.42],
            spread=(0.5, 0.5),
            anchor="S-38 IBM 2026: $1.93M saving, 65 days faster; corporate defense adoption follows empirical trajectory",
            tier="E2->A",
        ),
        "reporting_multiplier": dict(
            kind="lognormal",
            p50=[6.0, 6.0, 6.0, 6.0, 6.0],
            spread=(2.0, 1.7),
            anchor="S-39: business reporting 10-18%; undetected campaigns (Volt Typhoon, up to 5 years)",
            tier="E2",
        ),
    },
    "ics": {  # Industrial control and critical infrastructure (rare, heavy-tailed)
        "capable_actors": dict(
            kind="lognormal",
            p50=[5.0, 30.0, 300.0, 2e3, 1e4],
            spread=(3.0, 4.0),
            anchor="D-07 (>=C5 operators 50/500/5k in 2029/31/33, open line) scaled to >=C4 (frontier operators baseline)",
            tier="A",
        ),
        "campaigns_per_actor": dict(
            kind="lognormal",
            p50=[0.2, 0.3, 0.8, 2.5, 3.0],
            spread=(3.0, 4.0),
            anchor="Calibrated Prior: OT-directed attempts per operator-year (most operators are IT crews touching OT opportunistically)",
            tier="A",
        ),
        "exposed_share": dict(
            kind="fraction",
            p50=[0.50, 0.50, 0.48, 0.42, 0.35],
            spread=(0.6, 0.6),
            anchor="S-42: 25% of 2025 ICS advisories had no patch or mitigation (Dragos via Kiteworks); 85% of OT firms do not patch regularly (TXOne 2024, n=150); legacy Windows in OT",
            tier="E2",
        ),
        "success_given_exposure": dict(
            kind="fraction",
            p50=[0.002, 0.010, 0.030, 0.060, 0.070],
            spread=(0.8, 0.8),
            anchor="Stage 2: Cooling Tower 3/10 on an undefended range (S-07); defended and multi-protocol unanchored; discount empirical defense factor",
            tier="F->A",
        ),
        "loss_per_success": dict(
            kind="lognormal",
            p50=[0.050, 0.052, 0.056, 0.062, 0.070],
            spread=(8.0, 25.0),
            anchor="S-41 CMC: JLR GBP1.9bn ($2.55B), about GBP108M per week of OT-driven outage; M&S about GBP300M; IBM mega-breach $375M; severity median empirical distribution",
            tier="E2->A",
        ),
        "defense_containment": dict(
            kind="complement",
            p50=[0.02, 0.05, 0.10, 0.18, 0.25],
            spread=(0.5, 0.5),
            anchor="Defensive Response slower than IT: maintenance windows quarterly or annual, 'a patch is a project' (S-42, S-43)",
            tier="A",
        ),
        "reporting_multiplier": dict(
            kind="lognormal",
            p50=[2.5, 2.5, 2.5, 2.5, 2.5],
            spread=(1.67, 2.0),
            anchor="Reporting Visibility: large OT outages are visible; undercount from undisclosed events",
            tier="A",
        ),
    },
}

# Calibration scale applied to campaigns_per_actor so 2025 sector p50 meets empirical hindcast target
CAL = {
    "fraud": 1.0,
    "it": 1.0,
    "ics": 1.0,
}

# Geopolitical branch baseline weights (sum to 1.00)
BRANCH_WEIGHTS = {
    "B-03": 0.59,
    "B-04": 0.15,
    "B-01": 0.08,
    "B-05": 0.09,
    "B-02": 0.09,
}

BRANCH_NAMES = {
    "B-03": "No major conflict, baseline trajectory",
    "B-04": "Capability slowdown / technological plateau",
    "B-01": "Geopolitical conflict, state step-release (Proliferation pathway)",
    "B-05": "Geopolitical conflict, baseline trajectory",
    "B-02": "Geopolitical conflict, sovereign containment (Consolidation pathway)",
}

# Preliminary scenario benchmark estimates (USD bn)
ORIGINAL = {
    2024: 2,
    2027: 22,
    2028: 40,
    2029: 70,
    2030: 110,
    2033: 420,
    2034: 575,
    2035: 400,
}

# Baseline counterfactual (series a, no-AI counterfactual): 2024 level and real growth
BASE_LEVEL = (150.0, 360.0, 800.0)   # p10/p50/p90, USD bn, 2024 (GovAI composite ex-defense ~$400B; IC3-scaled range)
BASE_GROWTH = (0.02, 0.08, 0.14)     # p10/p50/p90 real growth per year (baseline macro digital exposure growth)

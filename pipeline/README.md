# AI 2035 Quantitative Pipeline & Loss Model

This directory contains the computational core of the **AI 2035** research initiative. It evaluates the macroeconomic impact of proliferating autonomous cyber capabilities using an empirical, bounded Monte Carlo factor decomposition across three distinct economic sectors.

---

## Architecture Overview

1. **`final_headline_run.py`**: Production simulation harness executing 800,000 Monte Carlo draws. Bounded by sector-specific digital GDP ceilings.
2. **`loss_mc.py`**: Core mathematical factor loss engine evaluating log-normal product formulations and dynamic containment curves.
3. **`params.py`**: Parameter priors, baseline drift rates ($g = 8.8\% - 14.1\%$), sector weights, and correlation matrix.
4. **`sir_diffusion.py`**: Compartmental epidemiological diffusion model tracking automated exploit transmission ($eta = 0.35, \gamma = 0.12, R_0 = 2.92$).
5. **`chokepoint_calc.py`**: Taiwan semiconductor disruption estimator modeling TSMC Fab 18/20 supply interruptions.
6. **`tests.py`**: Automated test suite executing all 18 diagnostic validation gates.

---

## Replication Protocol

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run Diagnostic Test Gates
Verify mathematical consistency, parameter bounds, and quadrature accuracy across all 18 gates:
```bash
python tests.py
```

### 3. Run Headline Simulation (800k Samples)
```bash
python final_headline_run.py
```

### 4. Run SIR Malware Diffusion Simulation
```bash
python sir_diffusion.py
```

### 5. Run Semiconductor Chokepoint Disruption Model
```bash
python chokepoint_calc.py
```

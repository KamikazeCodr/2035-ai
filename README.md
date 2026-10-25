# AI 2035: Autonomous Cyber Capabilities, Critical Infrastructure, and Strategic Crossroads

[![Paper PDF](https://img.shields.io/badge/Whitepaper-22_Pages_PDF-8B0000?style=flat-square&logo=adobeacrobatreader&logoColor=white)](AI-2035.pdf)
[![Interactive Platform](https://img.shields.io/badge/Live_Platform-2035--ai.com-0052cc?style=flat-square&logo=googlechrome&logoColor=white)](https://2035-ai.com)
[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue?style=flat-square&logo=python&logoColor=white)](pipeline/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Verification Gates](https://img.shields.io/badge/Diagnostic_Gates-18%2F18_Passing-success?style=flat-square)](pipeline/tests.py)

---

## Executive Summary

Discussions about artificial intelligence and cybersecurity often swing between two unhelpful extremes: short-term incrementalism (phishing emails, marginally better payload obfuscation) and speculative superintelligence scenarios with little operational detail. 

**AI 2035** was built to examine the operational ground in between: **what happens when autonomous agent architectures scale offensive operations across enterprise networks and industrial control systems faster than defensive capacity can scale?**

Rather than treating AI as a monolithic variable, this research decomposes cyber capability development into concrete operational thresholds—from natural-language reconnaissance in 2024 to multi-agent zero-day synthesis in 2028 and autonomous industrial SCADA disruption in 2031. 

Following a catastrophic semiconductor supply disruption in the Taiwan Strait in late 2031, the scenario traces two divergent structural trajectories:
- **Plan P (Proliferation)**: Uncontrolled diffusion of frontier open-weight cyber offensive models across non-state actors, privateers, and transnational cartels, driving compounding infrastructure failures.
- **Plan C (Consolidation)**: Coordinated sovereign mobilization where frontier compute is placed under national command, enforcing aggressive kernel-level defensive quarantines and compute export embargoes.

To assess the economic scale of these trajectories without relying on arbitrary qualitative guesses, I developed an empirical Monte Carlo factor model (800,000 simulations) that decomposes projected losses across three economic sectors, strictly anchored against historical FBI IC3 empirical loss baselines.

---

## Quantitative Architecture: The 3-Layer Model

A common failure mode in cyber loss estimation is attributing organic growth in the digital economy to new technologies. AI 2035 explicitly isolates AI's net contribution using a three-layer decomposition:

$$\mathcal{L}_{	ext{Total}}(t) = \mathcal{L}_{0}(t) + \Delta \mathcal{L}_{	ext{AI}}(t)$$

```
                                  Macroeconomic Loss Surface
  ┌────────────────────────────────────────────────────────────────────────────────────────┐
  │                                                                                        │
  │   Layer 3: Bounded Monte Carlo Engine                                                  │
  │   └── 800,000 runs, log-normal factor product, endogenous GDP ceilings                 │
  │                                                                                        │
  │   Layer 2: 3-Sector Net AI Increment (ΔL_AI)                                           │
  │   ├── Sector I:   Fraud & BEC (Credential stuffing, social engineering, synthetic media)│
  │   ├── Sector II:  Enterprise IT (Ransomware, lateral movement, supply-chain exploits)   │
  │   └── Sector III: Industrial Infrastructure (ICS/SCADA, power grids, pipeline telemetry)│
  │                                                                                        │
  │   Layer 1: Counterfactual Non-AI Baseline (L_0)                                        │
  │   └── 10-year FBI IC3 empirical trend backtested at 8.8% - 14.1% CAGR                   │
  │                                                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **Non-AI Counterfactual Baseline ($\mathcal{L}_0$)**: Establishes what cyber losses would have been without AI advances. Calibrated against 10 years of empirical FBI IC3 reporting (2014–2024) with an organic growth rate of $g \in [8.8\%, 14.1\%]$, scaling from \$440B in 2024 to \$1,770B in 2035.
2. **Net AI Increment ($\Delta \mathcal{L}_{	ext{AI}}$)**: Measures only the additional loss directly attributable to autonomous AI capabilities across three independent sectors:
   - **Fraud & BEC**: Scaled by autonomous social engineering and synthetic media velocity.
   - **Enterprise IT**: Scaled by automated exploitation, zero-day discovery, and lateral propagation.
   - **Critical Infrastructure (ICS/SCADA)**: Scaled by OT protocol translation, PLC manipulation, and physical kinetic effects.
3. **Bounded Monte Carlo Simulation**: Runs 800,000 sample draws across 5 branches to generate empirical confidence intervals ($p_{10}, p_{50}, p_{90}$). The model enforces realistic macroeconomic upper bounds preventing unphysical runaway losses (e.g., losses capped at realistic percentages of global digital GDP).

---

## Primary Scenario Findings

The table below presents conditional median ($p_{50}$) and tail-risk ($p_{10} - p_{90}$) projections from the calibrated 800,000-sample production run:

| Year & Scenario Branch | Baseline $\mathcal{L}_0$ ($p_{50}$) | Net AI Increment $\Delta\mathcal{L}$ ($p_{50}$) | AI Attributed Range ($p_{10} - p_{90}$) | Total Loss $\mathcal{L}_{	ext{Total}}$ ($p_{50}$) | AI Share of Loss | Global Digital GDP % |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **2024: Baseline Foundation** | \$440.0B | \$0.0B | \$0B – \$0B | **\$440.0B** | 3.2% | 0.42% |
| **2026: Agentic Scripting** | \$541.6B | \$33.4B | \$18B – \$55B | **\$575.0B** | 35.4% | 0.51% |
| **2028: Multi-Agent Zero-Day** | \$693.8B | \$131.2B | \$75B – \$230B | **\$825.0B** | 68.7% | 0.68% |
| **2030: Autonomous Operations** | \$950.0B | \$320.0B | \$190B – \$580B | **\$1,270.0B** | 86.2% | 0.96% |
| **2031: Taiwan Chokepoint Shock** | \$1,130.0B | \$420.0B | \$260B – \$780B | **\$1,550.0B** | 89.8% | 1.09% |
| **2035: Plan P (Proliferation)** | \$1,770.0B | **\$655.0B** | \$420B – \$1,280B | **\$2,425.0B** | 94.5% | **1.54%** |
| **2035: Plan C (Consolidation)** | \$1,770.0B | **\$510.0B** | \$330B – \$980B | **\$2,280.0B** | 87.3% | **1.45%** |

*Note: Figures represent conditional model outputs reflecting parameter priors and assumptions, not unyielding historical predictions.*

---

## Strategic Branch Comparison (2032–2035)

```
                            [2024 - 2031: Shared Trajectory]
                       C0 -> C1 -> C2 -> C3 -> C4 -> C5 Capabilities
                                           │
                        October 2031: Taiwan Strait Shock
                        TSMC Fab 18/20 Leading-Edge Disruption
                                           │
                     ┌─────────────────────┴─────────────────────┐
                     ▼                                           ▼
          [Plan P: Proliferation]                     [Plan C: Consolidation]
   * Open-weights diffuse globally             * Sovereign compute nationalization
   * Asymmetric offensive advantage            * Mandatory hardened OS enclaves
   * Median 2035 AI Loss: $655B                * Median 2035 AI Loss: $510B
   * Unchecked supply-chain cascading          * Aggressive compute tracking & air-gaps
```

---

## Repository Architecture

```
2035-ai/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Automated CI running diagnostic test gates
├── audio/
│   └── AI_2035_Full_Podcast.mp3   # Production narrative podcast audio
├── cloudflare-worker/             # Serverless feedback API handler
│   ├── src/
│   │   └── index.js               # CORS, Cloudflare Turnstile, & Resend dispatcher
│   ├── wrangler.jsonc             # Cloudflare Worker deployment manifest
│   ├── package.json               # Worker dependencies
│   └── README.md                  # Cloudflare Worker setup & secrets guide
├── css/
│   └── styles.css                 # Master typography & responsive stylesheet
├── js/
│   ├── app.js                     # Core application state & UI interactions
│   ├── charts.js                  # D3 / Canvas charting engine
│   ├── cyber-transition.js        # Timeline visualizer transition effects
│   ├── data.js                    # Empirical model data & narrative definitions
│   ├── feedback.js                # Turnstile feedback modal & validation
│   └── leaves-transition.js       # Background visual effects
├── pipeline/                      # Quantitative modeling & replication harness
│   ├── calib_run.py               # Empirical calibration module
│   ├── chokepoint_calc.py         # TSMC Fab 18/20 disruption estimator
│   ├── final_headline_run.py      # Master Monte Carlo simulation runner (800k samples)
│   ├── loss_mc.py                 # Core factor loss engine
│   ├── model2.py                  # Analytical loss formulations
│   ├── params.py                  # Calibrated empirical parameter priors
│   ├── requirements.txt           # Minimal dependencies (numpy>=1.24.0, scipy>=1.10.0)
│   ├── run_model.py               # Sector factor specification generator
│   ├── sir_diffusion.py           # Compartmental SIR malware diffusion model
│   └── tests.py                   # Automated diagnostic gates (18/18 validation gates)
├── supplements/                   # 6 Technical & Quantitative Supplements
│   ├── baseline-counterfactual.html
│   ├── code-and-replication.html
│   ├── index.html
│   ├── loss-model-and-incrementality.html
│   ├── monte-carlo-simulation.html
│   ├── taiwan-semiconductor-chokepoint.html
│   └── threat-actor-diffusion.html
├── .env.example                   # Safe template for local feedback testing
├── .gitignore                     # Explicitly protects .env.local, cache, and logs
├── about.html                     # Research methodology & author background
├── AI-2035.pdf                    # Complete 22-page institutional technical report
├── apple-touch-icon.png           # iOS touch icon
├── favicon-16x16.png              # Standard favicon
├── favicon-32x32.png              # High-DPI favicon
├── favicon.ico                    # Legacy favicon
├── favicon.svg                    # Scalable vector favicon
├── icon-192.png                   # PWA icon (192x192)
├── icon-512.png                   # PWA icon (512x512)
├── index.html                     # Primary interactive scenario platform
├── instruction_to_upload_on_github.md # Complete terminal instructions & pre-flight checklist
├── package.json                   # Web platform metadata
├── README.md                      # Comprehensive research documentation
├── serve.py                       # Local development server with clean URLs
├── supplements.html               # Technical supplements hub
└── vercel.json                    # Static hosting rewrites & security headers
```

---

## Technical Supplements Guide

The project includes six dedicated technical supplements providing granular mathematical formulations, source data, and replication notes:

1. **[Supplement 1: Baseline Counterfactual](https://2035-ai.com/supplements/baseline-counterfactual)**: 10-year FBI IC3 backtest, regression calibrations, and non-AI organic growth rates.
2. **[Supplement 2: Loss Model & Incrementality](https://2035-ai.com/supplements/loss-model-and-incrementality)**: Mathematical derivation of the 3-sector factor model, covariance matrices, and containment functions.
3. **[Supplement 3: Monte Carlo Simulation](https://2035-ai.com/supplements/monte-carlo-simulation)**: Convergence diagnostics across 800,000 draws, effective sample size, and tail-risk behavior.
4. **[Supplement 4: Threat Actor Diffusion](https://2035-ai.com/supplements/threat-actor-diffusion)**: Compartmental SIR epidemiological modeling of exploit automation and defensive patching windows.
5. **[Supplement 5: Taiwan Semiconductor Chokepoint](https://2035-ai.com/supplements/taiwan-semiconductor-chokepoint)**: Geographic concentration analysis of TSMC Fab 18/20, EUV lithography dependencies, and wafer deficits.
6. **[Supplement 6: Code & Replication](https://2035-ai.com/supplements/code-and-replication)**: Complete execution guide for running test suites and reproducing headline simulation outputs.

---

## Replication Protocol

External researchers can replicate the entire quantitative pipeline in minutes:

### 1. Environment Setup
```bash
# Clone the repository
git clone https://github.com/KamikazeCodr/2035-ai.git
cd 2035-ai

# Create and activate virtual environment
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r pipeline/requirements.txt
```

### 2. Run Diagnostic Validation Gates
Run the 18 automated diagnostic tests verifying mathematical stability, bounded integrals, parameter priors, and independent cross-implementations:
```bash
cd pipeline
python tests.py
```
*Expected output:*
```
PASS Every one of 15 factor specifications passes loss_mc.validate
PASS (i) Baseline pathway spec p50 matches anchored p50 across all factors and years
PASS (iii) Calibration scalars within stable range [0.1, 10]
PASS (iv) Fractions strictly inside (0, 1): specifications and 400k sample draws each
PASS (v) Analytical calculation of fraud 2026 p50 within 5% of simulated model
PASS (vi) Factor component decomposition matches aggregate sampler output
PASS Branch weights sum to 1.0
...
18/18 diagnostic validation gates passed.
```

### 3. Run Headline 800k Monte Carlo Simulation
```bash
python final_headline_run.py
```

### 4. Run SIR Diffusion & Semiconductor Chokepoint Models
```bash
python sir_diffusion.py
python chokepoint_calc.py
```

---

## Running the Web Platform Locally

The interactive web visualizer is built using modern vanilla JavaScript, semantic HTML5, and CSS3 without bulky frontend framework dependencies.

To run the local development server:
```bash
python serve.py 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Clean URLs (`/supplements/baseline-counterfactual`, `/about`, etc.) will route seamlessly.

---

## About the Author & Acknowledgments

This research initiative grew out of my work in the **AGI Strategy Course at BlueDot Impact**, where the curriculum and cohort discussions challenged me to ground broad claims about AI capability trajectories into concrete operational milestones, diffusion curves, and economic bounds.

I researched, authored, designed, and coded this project independently.

- **Author**: Aditya Singh
- **Email**: [the.coder.zen@gmail.com](mailto:the.coder.zen@gmail.com)
- **Interactive Platform**: [https://2035-ai.com](https://2035-ai.com)

---

## Citation

If you reference the AI 2035 scenario, quantitative loss model, or technical report in your research, please cite:

```bibtex
@article{singh2026ai2035,
  title   = {AI 2035: Autonomous Cyber Capabilities, Critical Infrastructure, and Strategic Crossroads},
  author  = {Singh, Aditya},
  year    = {2026},
  url     = {https://2035-ai.com},
  note    = {Technical Report and Calibrated Quantitative Loss Simulation Model}
}
```

---

## License

This project is licensed under the [MIT License](LICENSE) — free for academic, policy, and commercial research with attribution.

# GitHub Deployment & Upload Guide: AI 2035

This guide provides the complete, pre-flight verified procedure to push the **AI 2035** repository to GitHub (`https://github.com/KamikazeCodr/2035-ai.git`).

---

## 1. Repository Cleanliness Verification

The directory `D:\AI-2035\2035-ai` has been constructed from scratch to ensure **zero clutter**:
- **NO test screenshots or debug captures** (`page_*.png`, `crop_*.png`, etc.).
- **NO user sample images** (`Sample Images/` folder excluded).
- **NO duplicate directories** (`supplement/` singular and `supplement.html` eliminated; only canonical `supplements/` retained).
- **NO loose scratch scripts** (generator scripts remain in local workspace only).
- **NO sensitive environment files** (`.env.local` strictly blocked by `.gitignore`).
- **NO external personal social/networking profile links** in any documentation file (`README.md`, `instruction_to_upload_on_github.md`, `cloudflare-worker/README.md`).

---

## 2. Directory Tree Inspection

The verified file tree ready for Git push is:

```
2035-ai/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Automated verification gates
├── audio/
│   └── AI_2035_Full_Podcast-compressed.mp3   # Production narrative podcast audio
├── cloudflare-worker/             # Serverless feedback API handler
│   ├── src/
│   │   └── index.js               # Turnstile & Resend handler
│   ├── wrangler.jsonc
│   ├── package.json
│   └── README.md
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── charts.js
│   ├── cyber-transition.js
│   ├── data.js
│   ├── feedback.js
│   └── leaves-transition.js
├── pipeline/                      # Quantitative modeling & replication harness
│   ├── calib_run.py
│   ├── chokepoint_calc.py
│   ├── final_headline_run.py      # Master Monte Carlo simulation runner
│   ├── loss_mc.py                 # Core factor loss engine
│   ├── model2.py
│   ├── params.py                  # Calibrated empirical parameter priors
│   ├── requirements.txt
│   ├── run_model.py
│   ├── sir_diffusion.py           # Compartmental SIR malware diffusion model
│   ├── tests.py                   # Automated diagnostic gates (18/18 validation gates)
│   └── README.md
├── supplements/                   # 6 Technical & Quantitative Supplements
│   ├── baseline-counterfactual.html
│   ├── code-and-replication.html
│   ├── index.html
│   ├── loss-model-and-incrementality.html
│   ├── monte-carlo-simulation.html
│   ├── taiwan-semiconductor-chokepoint.html
│   └── threat-actor-diffusion.html
├── .env.example
├── .gitignore                     # Explicitly lists .env.local
├── about.html
├── AI-2035.pdf                    # Complete 22-page technical report
├── apple-touch-icon.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── favicon.svg
├── icon-192.png
├── icon-512.png
├── index.html
├── instruction_to_upload_on_github.md
├── old-version/
├── old-version.html
├── package.json
├── README.md                      # Comprehensive research documentation
├── serve.py
├── supplements.html
└── vercel.json
```

---

## 3. Terminal Commands to Push to GitHub

Execute the following commands in PowerShell or your preferred terminal:

### Step 1: Navigate to the clean repository
```powershell
Set-Location "D:\AI-2035\2035-ai"
```

### Step 2: Initialize Git and configure branch
```powershell
git init -b main
```

### Step 3: Link remote repository
```powershell
git remote add origin https://github.com/KamikazeCodr/2035-ai.git
```
*(If the remote is already linked, confirm with `git remote -v`)*

### Step 4: Verify ignored files (Secrets Check)
Run this check to confirm `.env.local` is never tracked:
```powershell
git status --ignored
```
*(Confirm that `.env.local`, `node_modules/`, and `.vercel/` appear under Ignored files)*

### Step 5: Stage all production files
```powershell
git add .
```

### Step 6: Create the initial release commit
```powershell
git commit -m "feat: initial release of AI 2035 research platform, technical supplements, and quantitative pipeline"
```

### Step 7: Push to GitHub
```powershell
git push -u origin main --force
```

> **Note on Authentication**: 
> When running `git push`, your operating system will display a prompt (via Windows Git Credential Manager or browser authorization). Once authorized, the entire repository will be uploaded to GitHub. The `--force` flag ensures any previous unorganized commits on the remote `main` branch are cleanly superseded by this pristine architecture.

---

## 4. Post-Upload: Create GitHub Release with PDF Attachment

To make the technical report immediately downloadable from your GitHub releases:
1. Navigate to your repository: `https://github.com/KamikazeCodr/2035-ai`.
2. On the right-hand sidebar, click **Releases** > **Draft a new release**.
3. In **Tag version**, enter: `v1.0.0`.
4. In **Release title**, enter: `AI 2035: Autonomous Cyber Capabilities & Quantitative Loss Model (v1.0)`.
5. In the description, paste a concise summary:
   ```markdown
   Complete release of the AI 2035 research platform:
   - 22-page technical whitepaper (AI-2035.pdf)
   - 800,000-sample Monte Carlo loss model across 3 sectors
   - Compartmental SIR exploit diffusion and TSMC semiconductor bottleneck calculators
   - Interactive web platform and 6 technical supplements
   ```
6. Under **Attach binaries by dropping them here**, drag and drop:
   `D:\AI-2035\2035-ai\AI-2035.pdf`
7. Click **Publish release**.

---

## 5. Summary Checklist

- [x] All 18 quantitative validation gates pass (`python pipeline/tests.py`).
- [x] `.env.local` explicitly listed in `.gitignore`.
- [x] Zero personal social links in `README.md` and repository markdown documents (strictly direct email).
- [x] Zero test/debug screenshots and zero sample images included.
- [x] CI workflow ready for automatic testing in `.github/workflows/ci.yml`.

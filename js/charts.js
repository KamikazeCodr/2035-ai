/**
 * AI-2035 (Cybersecurity Standpoint)
 * Author: Aditya Singh
 * Interactive SVG Chart Engine with continuous curves, dual-lens economic loss models,
 * clean tooltips, touch scrubbing, and click-to-jump navigation.
 */

import { CAPABILITY_CURVES, LOSS_CURVES, TIMELINE_DATA, BRANCH_L_DATA, BRANCH_W_DATA } from './data.js';

export class ScenarioVisualizationDock {
  constructor(containerId, options = {}) {
    this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    this.options = options; // e.g. { isModal: true, onYearSelect: callback }
    this.activeMode = options.defaultMode || 'capabilities';
    this.activeLens = options.defaultLens || 'operational'; // 'operational' or 'econometric'
    this.activeBranch = 'branch_l';
    this.activeYear = 2024;
    this.hoveredYear = null;
    this.width = options.width || 460;
    this.height = options.height || 240;
    this.margin = options.margin || { top: 34, right: 26, bottom: 32, left: 44 };

    if (this.container) {
      this.init();
    }
  }

  init() {
    this.render();
    this.setupInteractions();
  }

  setupInteractions() {
    if (!this.container) return;

    this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.container.addEventListener('mouseleave', () => this.onMouseLeave());
    this.container.addEventListener('click', (e) => this.onClick(e));

    // Touch events for mobile scrubbing
    this.container.addEventListener('touchstart', (e) => this.onTouch(e), { passive: true });
    this.container.addEventListener('touchmove', (e) => this.onTouch(e), { passive: true });
    this.container.addEventListener('touchend', () => this.onMouseLeave());
  }

  getActiveMargin() {
    return this.activeMode === 'capabilities'
      ? this.margin
      : { top: 34, right: 26, bottom: 32, left: 52 };
  }

  getPlotX(yr) {
    const m = this.getActiveMargin();
    const plotW = this.width - m.left - m.right;
    return m.left + ((yr - 2024) / (2035 - 2024)) * plotW;
  }

  getEventYear(clientX) {
    const svgEl = this.container.querySelector('svg');
    if (!svgEl) return null;
    const svgRect = svgEl.getBoundingClientRect();
    const scaleX = this.width / svgRect.width;
    const mouseX = (clientX - svgRect.left) * scaleX;
    const m = this.getActiveMargin();
    const plotW = this.width - m.left - m.right;
    const pct = (mouseX - m.left) / plotW;
    if (pct < -0.05 || pct > 1.05) return null;
    const clampedPct = Math.max(0, Math.min(1, pct));
    return Math.round(2024 + clampedPct * 11);
  }

  onMouseMove(e) {
    const yr = this.getEventYear(e.clientX);
    if (yr !== null && yr !== this.hoveredYear) {
      this.hoveredYear = yr;
      this.updateInteractiveOverlay();
    }
  }

  onTouch(e) {
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const yr = this.getEventYear(touch.clientX);
    if (yr !== null && yr !== this.hoveredYear) {
      this.hoveredYear = yr;
      this.updateInteractiveOverlay();
      if (this.options.onYearSelect) {
        this.options.onYearSelect(yr);
      }
    }
  }

  onMouseLeave() {
    this.hoveredYear = null;
    this.updateInteractiveOverlay();
  }

  onClick(e) {
    const yr = this.getEventYear(e.clientX);
    if (yr !== null) {
      if (this.options.onYearSelect) {
        this.options.onYearSelect(yr);
      }

      // Jump to chapter
      let chapterEl = document.querySelector(`.story-chapter[data-year="${yr}"]`);
      if (!chapterEl && yr >= 2032) {
        const branchPrefix = this.activeBranch === 'branch_l' ? 'branch-l' : 'branch-w';
        chapterEl = document.getElementById(`story-${branchPrefix}-${yr}`);
      }
      if (chapterEl) {
        chapterEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  setMode(mode) {
    if (this.activeMode === mode) return;
    this.activeMode = mode;
    this.render();
  }

  setLens(lens) {
    if (this.activeLens === lens) return;
    this.activeLens = lens;
    if (this.activeMode === 'losses') {
      this.renderLosses();
    }
  }

  setBranch(branch) {
    if (this.activeBranch === branch) return;
    this.activeBranch = branch;
    this.render();
  }

  setYear(year) {
    this.activeYear = year;
    this.updateScrubber();
  }

  render() {
    if (!this.container) return;
    if (this.activeMode === 'capabilities') {
      this.renderCapabilities();
    } else {
      this.renderLosses();
    }
  }

  renderCapabilities() {
    const w = this.width, h = this.height, m = this.margin;
    const plotW = w - m.left - m.right;
    const plotH = h - m.top - m.bottom;
    const maxY = 8.0;
    const getX = (yr) => m.left + ((yr - 2024) / 11) * plotW;
    const getY = (val) => m.top + plotH - (val / maxY) * plotH;

    const cnCurve = this.activeBranch === 'branch_l' ? CAPABILITY_CURVES.china_l : CAPABILITY_CURVES.china_w;
    const cnLabel = this.activeBranch === 'branch_l' ? "China (Plan P Proliferate)" : "China (Plan C Consolidate)";

    const makeContinuousPath = (pts) => {
      let d = '';
      for (let i = 0; i < pts.length; i++) {
        const x = getX(pts[i].year), y = getY(pts[i].val);
        d += (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
      }
      return d;
    };

    const containerId = this.container.id || 'chart';
    let svg = `<svg viewBox="0 0 ${w} ${h}" class="dock-chart-svg" preserveAspectRatio="xMidYMid meet" style="cursor:crosshair; background:transparent;">`;

    // Legend
    svg += `<g transform="translate(${m.left}, 15)" class="chart-legend">`;
    svg += `<line x1="0" y1="0" x2="12" y2="0" stroke="#1e3a5f" stroke-width="2.5"/>`;
    svg += `<text x="16" y="3" class="legend-text" font-weight="600">US Frontier</text>`;
    svg += `<line x1="94" y1="0" x2="106" y2="0" stroke="#9e1b1b" stroke-width="2.5"/>`;
    svg += `<text x="110" y="3" class="legend-text" font-weight="600">${cnLabel}</text>`;
    svg += `<line x1="280" y1="0" x2="292" y2="0" stroke="#2d5a3f" stroke-width="2.5"/>`;
    svg += `<text x="296" y="3" class="legend-text">Europe (~12m lag)</text>`;
    svg += `</g>`;

    // Y-axis gridlines & labels
    for (let c = 0; c <= 7; c += 1) {
      const y = getY(c);
      svg += `<line x1="${m.left}" y1="${y}" x2="${w - m.right}" y2="${y}" stroke="#e0dbcb" stroke-width="0.8"/>`;
      svg += `<text x="${m.left - 6}" y="${y + 3}" text-anchor="end" class="chart-axis-label">C${c}</text>`;
    }

    // X-axis labels
    [2024, 2026, 2028, 2030, 2032, 2035].forEach((yr) => {
      svg += `<text x="${getX(yr)}" y="${h - 6}" text-anchor="middle" class="chart-axis-label">${yr}</text>`;
    });

    // Zone separators
    const x26 = getX(2026.5), x31 = getX(2031);
    svg += `<line x1="${x26}" y1="${m.top}" x2="${x26}" y2="${m.top + plotH}" stroke="#000000" stroke-opacity="0.25" stroke-dasharray="3,3"/>`;
    svg += `<text x="${x26 - 4}" y="${m.top + 10}" text-anchor="end" class="chart-zone-tag">OBSERVED</text>`;
    svg += `<text x="${x26 + 4}" y="${m.top + 10}" text-anchor="start" class="chart-zone-tag">FORECAST</text>`;
    svg += `<line x1="${x31}" y1="${m.top}" x2="${x31}" y2="${m.top + plotH}" stroke="#000000" stroke-opacity="0.35" stroke-dasharray="3,3"/>`;
    svg += `<text x="${x31 + 4}" y="${m.top + 10}" text-anchor="start" class="chart-zone-tag" fill="#000000">2031 CROSSROADS</text>`;

    // Continuous Curves
    svg += `<path d="${makeContinuousPath(CAPABILITY_CURVES.europe)}" fill="none" stroke="#2d5a3f" stroke-width="2.5" stroke-linecap="round"/>`;
    svg += `<path d="${makeContinuousPath(cnCurve)}" fill="none" stroke="#9e1b1b" stroke-width="2.5" stroke-linecap="round"/>`;
    svg += `<path d="${makeContinuousPath(CAPABILITY_CURVES.us)}" fill="none" stroke="#1e3a5f" stroke-width="2.5" stroke-linecap="round"/>`;

    // Interactive layers
    svg += `<g class="chart-interactive-layer" id="${containerId}-interactive-layer"></g>`;
    svg += `<g class="chart-scrubber-layer" id="${containerId}-scrubber-layer"></g>`;
    svg += `</svg>`;

    this.container.innerHTML = svg;
    this.updateScrubber();
  }

  renderLosses() {
    const w = this.width, h = this.height;
    const m = { top: 34, right: 26, bottom: 32, left: 52 };
    const plotW = w - m.left - m.right;
    const plotH = h - m.top - m.bottom;

    const isOperational = this.activeLens === 'operational';
    const maxY = isOperational ? 4000 : 2500;
    const getX = (yr) => m.left + ((yr - 2024) / 11) * plotW;
    const getY = (val) => m.top + plotH - (val / maxY) * plotH;

    const branchData = this.activeBranch === 'branch_l' ? LOSS_CURVES.branch_l : LOSS_CURVES.branch_w;
    const lineColor = "#9e1b1b"; // Both Plan P and Plan C render in uniform crimson red under Extra Damage from AI
    const allPoints = [...LOSS_CURVES.common, ...branchData];
    const containerId = this.container.id || 'chart';

    let svg = `<svg viewBox="0 0 ${w} ${h}" class="dock-chart-svg" preserveAspectRatio="xMidYMid meet" style="cursor:crosshair; background:transparent;">`;

    if (isOperational) {
      // OPERATIONAL LENS: Total Cyber Loss Exposure ($0 - $4000B)
      const branchLabel = this.activeBranch === 'branch_l'
        ? "Plan P: AI-Driven Cyber Operations ($2,425B, 94.5% AI Share)"
        : "Plan C: State-Sanctioned Enclaves ($2,280B, 87.3% AI Share)";

      let bandUpper = '', bandLower = '';
      allPoints.forEach((pt, i) => {
        const x = getX(pt.year), yT = getY(pt.maxP90 || pt.max), yB = getY(pt.minP10 || pt.min);
        bandUpper += (i === 0 ? `M ${x} ${yT}` : ` L ${x} ${yT}`);
        bandLower = ` L ${x} ${yB}` + bandLower;
      });

      let pathMain = '';
      allPoints.forEach((pt, i) => {
        const x = getX(pt.year), y = getY(pt.totalP50 || pt.central);
        pathMain += (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
      });

      svg += `<defs><linearGradient id="${containerId}-loss-band-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${lineColor}" stop-opacity="0.22"/><stop offset="100%" stop-color="${lineColor}" stop-opacity="0.03"/></linearGradient></defs>`;

      // Legend
      svg += `<g transform="translate(${m.left}, 15)">`;
      svg += `<line x1="0" y1="0" x2="12" y2="0" stroke="${lineColor}" stroke-width="2.5"/>`;
      svg += `<text x="16" y="3" class="legend-text" font-weight="600">${branchLabel}</text>`;
      svg += `</g>`;

      // Y-axis gridlines & labels
      for (let v = 0; v <= 4000; v += 1000) {
        const y = getY(v);
        svg += `<line x1="${m.left}" y1="${y}" x2="${w - m.right}" y2="${y}" stroke="#e0dbcb" stroke-width="0.8"/>`;
        svg += `<text x="${m.left - 6}" y="${y + 3}" text-anchor="end" class="chart-axis-label">$${v}B</text>`;
      }

      // X-axis
      [2024, 2026, 2028, 2030, 2032, 2035].forEach((yr) => {
        svg += `<text x="${getX(yr)}" y="${h - 6}" text-anchor="middle" class="chart-axis-label">${yr}</text>`;
      });

      // 2031 Crossroads line
      const x31 = getX(2031);
      svg += `<line x1="${x31}" y1="${m.top}" x2="${x31}" y2="${m.top + plotH}" stroke="#000000" stroke-opacity="0.35" stroke-dasharray="3,3"/>`;
      svg += `<text x="${x31 + 4}" y="${m.top + 10}" text-anchor="start" class="chart-zone-tag" fill="#000000">2031 CROSSROADS</text>`;

      // Band + continuous line
      svg += `<path d="${bandUpper + bandLower} Z" fill="url(#${containerId}-loss-band-grad)" stroke="${lineColor}" stroke-opacity="0.25" stroke-width="0.5"/>`;
      svg += `<path d="${pathMain}" fill="none" stroke="${lineColor}" stroke-width="2.5" stroke-linecap="round"/>`;

      // Data points
      allPoints.forEach((pt) => {
        svg += `<circle cx="${getX(pt.year)}" cy="${getY(pt.totalP50 || pt.central)}" r="3" fill="${lineColor}" stroke="#000000" stroke-width="1.2"/>`;
      });

      // Terminal badge removed per user specification

    } else {
      // COUNTERFACTUAL LENS: Traditional Baseline ($1,770B) vs. Extra Damage from AI ($655B / $510B)
      const incLabel = this.activeBranch === 'branch_l'
        ? "Extra Damage from AI ($655B)"
        : "Extra Damage from AI ($510B)";

      let pathBase = '', pathInc = '', pathIncArea = '';
      allPoints.forEach((pt, i) => {
        const x = getX(pt.year);
        const yBase = getY(pt.baselineLoss);
        const yInc = getY(pt.netAiIncrement);
        pathBase += (i === 0 ? `M ${x} ${yBase}` : ` L ${x} ${yBase}`);
        pathInc += (i === 0 ? `M ${x} ${yInc}` : ` L ${x} ${yInc}`);
        pathIncArea += (i === 0 ? `M ${x} ${yInc}` : ` L ${x} ${yInc}`);
      });
      const xStart = getX(allPoints[0].year), xEnd = getX(allPoints[allPoints.length - 1].year), yZero = getY(0);
      pathIncArea += ` L ${xEnd} ${yZero} L ${xStart} ${yZero} Z`;

      svg += `<defs><linearGradient id="${containerId}-inc-band-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${lineColor}" stop-opacity="0.25"/><stop offset="100%" stop-color="${lineColor}" stop-opacity="0.04"/></linearGradient></defs>`;

      // Legend
      svg += `<g transform="translate(${m.left}, 15)">`;
      svg += `<line x1="0" y1="0" x2="10" y2="0" stroke="#4a5568" stroke-width="2" stroke-dasharray="2,2"/>`;
      svg += `<text x="14" y="3" class="legend-text" fill="#4a5568">Traditional Baseline ($1,770B)</text>`;
      svg += `<line x1="226" y1="0" x2="236" y2="0" stroke="${lineColor}" stroke-width="2.5"/>`;
      svg += `<text x="240" y="3" class="legend-text" font-weight="600">${incLabel}</text>`;
      svg += `</g>`;

      // Y-axis gridlines & labels
      for (let v = 0; v <= 2500; v += 500) {
        const y = getY(v);
        svg += `<line x1="${m.left}" y1="${y}" x2="${w - m.right}" y2="${y}" stroke="#e0dbcb" stroke-width="0.8"/>`;
        svg += `<text x="${m.left - 6}" y="${y + 3}" text-anchor="end" class="chart-axis-label">$${v}B</text>`;
      }

      // X-axis
      [2024, 2026, 2028, 2030, 2032, 2035].forEach((yr) => {
        svg += `<text x="${getX(yr)}" y="${h - 6}" text-anchor="middle" class="chart-axis-label">${yr}</text>`;
      });

      // 2031 Crossroads line
      const x31 = getX(2031);
      svg += `<line x1="${x31}" y1="${m.top}" x2="${x31}" y2="${m.top + plotH}" stroke="#000000" stroke-opacity="0.35" stroke-dasharray="3,3"/>`;
      svg += `<text x="${x31 + 4}" y="${m.top + 10}" text-anchor="start" class="chart-zone-tag" fill="#000000">2031 CROSSROADS</text>`;

      // Shaded area under Extra Damage from AI
      svg += `<path d="${pathIncArea}" fill="url(#${containerId}-inc-band-grad)"/>`;

      // Paths
      svg += `<path d="${pathBase}" fill="none" stroke="#4a5568" stroke-width="2" stroke-dasharray="4,3"/>`;
      svg += `<path d="${pathInc}" fill="none" stroke="${lineColor}" stroke-width="2.5" stroke-linecap="round"/>`;

      // Data points
      allPoints.forEach((pt) => {
        svg += `<circle cx="${getX(pt.year)}" cy="${getY(pt.baselineLoss)}" r="2.8" fill="#4a5568" stroke="#000000" stroke-width="1"/>`;
        svg += `<circle cx="${getX(pt.year)}" cy="${getY(pt.netAiIncrement)}" r="3" fill="${lineColor}" stroke="#000000" stroke-width="1.2"/>`;
      });

      // Terminal badges removed per user specification
    }

    svg += `<g class="chart-interactive-layer" id="${containerId}-interactive-layer"></g>`;
    svg += `<g class="chart-scrubber-layer" id="${containerId}-scrubber-layer"></g>`;
    svg += `</svg>`;

    this.container.innerHTML = svg;
    this.updateScrubber();
  }

  updateInteractiveOverlay() {
    const containerId = this.container.id || 'chart';
    const layer = this.container.querySelector(`#${containerId}-interactive-layer`);
    if (!layer) return;

    if (this.hoveredYear === null) {
      layer.innerHTML = '';
      return;
    }

    const yr = Math.round(this.hoveredYear);
    const m = this.getActiveMargin();
    const plotH = this.height - m.top - m.bottom;
    const x = this.getPlotX(yr);

    if (this.activeMode === 'capabilities') {
      const maxY = 8.0;
      const getY = (val) => m.top + plotH - (val / maxY) * plotH;
      const usPt = CAPABILITY_CURVES.us.find(p => p.year === yr);
      const euPt = CAPABILITY_CURVES.europe.find(p => p.year === yr);
      const cnCurve = this.activeBranch === 'branch_l' ? CAPABILITY_CURVES.china_l : CAPABILITY_CURVES.china_w;
      const cnPt = cnCurve.find(p => p.year === yr);
      if (!usPt) { layer.innerHTML = ''; return; }

      let html = `<line x1="${x}" y1="${m.top}" x2="${x}" y2="${m.top + plotH}" stroke="#000000" stroke-width="1" stroke-dasharray="2,2" opacity="0.7"/>`;

      const tipX = x > 300 ? x - 124 : x + 10;
      const tipY = m.top + 8;
      html += `<rect x="${tipX}" y="${tipY}" width="114" height="58" rx="3" fill="#000000" fill-opacity="0.95"/>`;
      html += `<text x="${tipX + 8}" y="${tipY + 14}" fill="#FFFFF8" style="font-size:10px;font-family:'JetBrains Mono',monospace;font-weight:600;">${yr} Capability</text>`;
      html += `<text x="${tipX + 8}" y="${tipY + 27}" fill="#90caf9" style="font-size:9px;font-family:'Inter',sans-serif;font-weight:500;">US: C${usPt.val.toFixed(1)}</text>`;
      html += `<text x="${tipX + 8}" y="${tipY + 39}" fill="#ef9a9a" style="font-size:9px;font-family:'Inter',sans-serif;font-weight:500;">China: C${cnPt.val.toFixed(1)}</text>`;
      html += `<text x="${tipX + 8}" y="${tipY + 51}" fill="#a5d6a7" style="font-size:9px;font-family:'Inter',sans-serif;font-weight:500;">Europe: C${euPt.val.toFixed(1)}</text>`;

      html += `<circle cx="${x}" cy="${getY(usPt.val)}" r="4.5" fill="#1e3a5f" stroke="#000000" stroke-width="1.5"/>`;
      html += `<circle cx="${x}" cy="${getY(cnPt.val)}" r="4.5" fill="#9e1b1b" stroke="#000000" stroke-width="1.5"/>`;
      html += `<circle cx="${x}" cy="${getY(euPt.val)}" r="4.5" fill="#2d5a3f" stroke="#000000" stroke-width="1.5"/>`;

      layer.innerHTML = html;
    } else {
      const isOperational = this.activeLens === 'operational';
      const maxY = isOperational ? 4000 : 2500;
      const getY = (val) => m.top + plotH - (val / maxY) * plotH;
      const branchData = this.activeBranch === 'branch_l' ? LOSS_CURVES.branch_l : LOSS_CURVES.branch_w;
      const allLosses = [...LOSS_CURVES.common, ...branchData];
      const pt = allLosses.find(p => p.year === yr);
      if (!pt) { layer.innerHTML = ''; return; }

      let html = `<line x1="${x}" y1="${m.top}" x2="${x}" y2="${m.top + plotH}" stroke="#000000" stroke-width="1" stroke-dasharray="2,2" opacity="0.7"/>`;

      const tipX = x > 280 ? x - 138 : x + 10;
      const tipY = m.top + 8;

      if (isOperational) {
        html += `<rect x="${tipX}" y="${tipY}" width="134" height="62" rx="3" fill="#000000" fill-opacity="0.95"/>`;
        html += `<text x="${tipX + 8}" y="${tipY + 14}" fill="#FFFFF8" style="font-size:10px;font-family:'JetBrains Mono',monospace;font-weight:600;">${yr} Total Loss Exposure</text>`;
        html += `<text x="${tipX + 8}" y="${tipY + 28}" fill="#ef9a9a" style="font-size:9.5px;font-family:'Inter',sans-serif;font-weight:600;">Total P50: $${pt.totalP50 || pt.central}B/yr</text>`;
        html += `<text x="${tipX + 8}" y="${tipY + 41}" fill="#e0e0e0" style="font-size:8.5px;font-family:'Inter',sans-serif;">Range: $${pt.minP10 || pt.min}B - $${pt.maxP90 || pt.max}B</text>`;
        html += `<text x="${tipX + 8}" y="${tipY + 54}" fill="#90caf9" style="font-size:8.5px;font-family:'Inter',sans-serif;font-weight:600;">Attacks Involving AI: ${pt.aiAttackShare}%</text>`;

        html += `<circle cx="${x}" cy="${getY(pt.totalP50 || pt.central)}" r="5.5" fill="#9e1b1b" stroke="#000000" stroke-width="2"/>`;
      } else {
        html += `<rect x="${tipX}" y="${tipY}" width="134" height="62" rx="3" fill="#000000" fill-opacity="0.95"/>`;
        html += `<text x="${tipX + 8}" y="${tipY + 14}" fill="#FFFFF8" style="font-size:10px;font-family:'JetBrains Mono',monospace;font-weight:600;">${yr} Damage Attribution</text>`;
        html += `<text x="${tipX + 8}" y="${tipY + 28}" fill="#b0bec5" style="font-size:9px;font-family:'Inter',sans-serif;">Base Loss: $${pt.baselineLoss.toFixed(0)}B</text>`;
        html += `<text x="${tipX + 8}" y="${tipY + 41}" fill="#ef9a9a" style="font-size:9.5px;font-family:'Inter',sans-serif;font-weight:600;">Extra AI: +$${pt.netAiIncrement.toFixed(0)}B/yr</text>`;
        html += `<text x="${tipX + 8}" y="${tipY + 54}" fill="#a5d6a7" style="font-size:8.5px;font-family:'Inter',sans-serif;">Extra AI Share: ${(100 - parseFloat(pt.baselineShare || (pt.baselineLoss/(pt.totalP50||pt.central)*100))).toFixed(1)}%</text>`;

        html += `<circle cx="${x}" cy="${getY(pt.baselineLoss)}" r="4" fill="#4a5568" stroke="#000000" stroke-width="1.5"/>`;
        html += `<circle cx="${x}" cy="${getY(pt.netAiIncrement)}" r="5.5" fill="#9e1b1b" stroke="#000000" stroke-width="2"/>`;
      }

      layer.innerHTML = html;
    }
  }

  updateScrubber() {
    const containerId = this.container.id || 'chart';
    const layer = this.container.querySelector(`#${containerId}-scrubber-layer`);
    if (!layer) return;

    const yr = Math.min(2035, Math.max(2024, Math.round(this.activeYear)));
    const m = this.getActiveMargin();
    const plotH = this.height - m.top - m.bottom;
    const currentX = this.getPlotX(yr);

    if (this.activeMode === 'capabilities') {
      const maxY = 8.0;
      const getY = (val) => m.top + plotH - (val / maxY) * plotH;
      const usPt = CAPABILITY_CURVES.us.find(p => p.year === Math.floor(yr)) || CAPABILITY_CURVES.us[0];
      const euPt = CAPABILITY_CURVES.europe.find(p => p.year === Math.floor(yr)) || CAPABILITY_CURVES.europe[0];
      const cnCurve = this.activeBranch === 'branch_l' ? CAPABILITY_CURVES.china_l : CAPABILITY_CURVES.china_w;
      const cnPt = cnCurve.find(p => p.year === Math.floor(yr)) || cnCurve[0];

      layer.innerHTML = `
        <line x1="${currentX}" y1="${m.top}" x2="${currentX}" y2="${m.top + plotH}" stroke="#000000" stroke-width="1.2" stroke-dasharray="2,3" opacity="0.4"/>
        <circle cx="${currentX}" cy="${getY(usPt.val)}" r="4" fill="#1e3a5f" stroke="#000000" stroke-width="1.2"/>
        <circle cx="${currentX}" cy="${getY(cnPt.val)}" r="4" fill="#9e1b1b" stroke="#000000" stroke-width="1.2"/>
        <circle cx="${currentX}" cy="${getY(euPt.val)}" r="4" fill="#2d5a3f" stroke="#000000" stroke-width="1.2"/>
      `;
    } else {
      const isOperational = this.activeLens === 'operational';
      const maxY = isOperational ? 4000 : 2500;
      const getY = (val) => m.top + plotH - (val / maxY) * plotH;
      const branchData = this.activeBranch === 'branch_l' ? LOSS_CURVES.branch_l : LOSS_CURVES.branch_w;
      const allLosses = [...LOSS_CURVES.common, ...branchData];
      const currentPt = allLosses.find(p => p.year === Math.floor(yr)) || allLosses[0];

      if (isOperational) {
        layer.innerHTML = `
          <line x1="${currentX}" y1="${m.top}" x2="${currentX}" y2="${m.top + plotH}" stroke="#000000" stroke-width="1.2" stroke-dasharray="2,3" opacity="0.4"/>
          <circle cx="${currentX}" cy="${getY(currentPt.totalP50 || currentPt.central)}" r="5" fill="#9e1b1b" stroke="#000000" stroke-width="1.5"/>
        `;
      } else {
        layer.innerHTML = `
          <line x1="${currentX}" y1="${m.top}" x2="${currentX}" y2="${m.top + plotH}" stroke="#000000" stroke-width="1.2" stroke-dasharray="2,3" opacity="0.4"/>
          <circle cx="${currentX}" cy="${getY(currentPt.baselineLoss)}" r="3.5" fill="#4a5568" stroke="#000000" stroke-width="1.2"/>
          <circle cx="${currentX}" cy="${getY(currentPt.netAiIncrement)}" r="5" fill="#9e1b1b" stroke="#000000" stroke-width="1.5"/>
        `;
      }
    }
  }
}

/**
 * Render mobile floating graph bar with continuous curves,
 * dynamic capability label above curve, date label below, and active scrubber dot.
 */
export function renderMobileBottomBarGraph(containerId, branch = 'branch_l', year = 2024, activeItem = null) {
  const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
  if (!container) return;

  const w = 240, h = 46;
  const cnCurve = branch === 'branch_l' ? CAPABILITY_CURVES.china_l : CAPABILITY_CURVES.china_w;
  const usCurve = CAPABILITY_CURVES.us;
  const euCurve = CAPABILITY_CURVES.europe;

  // Margin inside the mini graph
  const leftPad = 8, rightPad = 8;
  const topPad = 13, bottomPad = 11;
  const plotW = w - leftPad - rightPad;
  const plotH = h - topPad - bottomPad;

  const getX = (yr) => leftPad + ((yr - 2024) / 11) * plotW;
  const getY = (val) => topPad + plotH - (val / 7.5) * plotH;

  const makePath = (pts) => {
    let d = '';
    pts.forEach((p, i) => {
      d += (i === 0 ? `M ${getX(p.year)} ${getY(p.val)}` : ` L ${getX(p.year)} ${getY(p.val)}`);
    });
    return d;
  };

  const clampedYear = Math.min(2035, Math.max(2024, year));
  const currX = getX(clampedYear);
  const currentUsVal = usCurve.find(p => p.year === Math.floor(clampedYear))?.val || 0;
  const currY = getY(currentUsVal);

  // Dynamic capability level & title from active item or timeline dataset
  let levelTitle = '';
  if (activeItem && activeItem.level && activeItem.levelName) {
    levelTitle = `${activeItem.level} - ${activeItem.levelName}`;
  } else {
    const allMilestones = [...TIMELINE_DATA, ...(branch === 'branch_l' ? BRANCH_L_DATA : BRANCH_W_DATA)];
    const found = allMilestones.find(d => d.year === Math.floor(clampedYear));
    levelTitle = found ? `${found.level} - ${found.levelName}` : 'C0 - AI Research Assistant';
  }

  const dateLabel = activeItem?.displayDate || `${Math.floor(year)}`;

  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" style="width:100%; height:100%; display:block; overflow:visible;">`;

  // Capability label text sitting directly above curve
  svg += `<text x="${w / 2}" y="8.5" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="600" fill="#000000">${levelTitle}</text>`;

  // Date label sitting underneath
  svg += `<text x="${w / 2}" y="${h - 1}" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="7" fill="#555550">${dateLabel}</text>`;

  // 3 Continuous Curve lines
  // Bottom: China (dark grey)
  svg += `<path d="${makePath(cnCurve)}" fill="none" stroke="#555550" stroke-width="1.6" stroke-linecap="round"/>`;
  // Middle: Europe (medium grey)
  svg += `<path d="${makePath(euCurve)}" fill="none" stroke="#777770" stroke-width="1.6" stroke-linecap="round"/>`;
  // Top: US Frontier (dark green)
  svg += `<path d="${makePath(usCurve)}" fill="none" stroke="#2d5a3f" stroke-width="2.0" stroke-linecap="round"/>`;

  // Active Scrubber Dot
  svg += `<circle cx="${currX}" cy="${currY}" r="2.5" fill="#FFFFF8" stroke="#000000" stroke-width="1.3"/>`;

  svg += `</svg>`;

  container.innerHTML = svg;
}

export function renderMobileSparkline(containerId, branch = 'branch_l', year = 2024, activeItem = null) {
  return renderMobileBottomBarGraph(containerId, branch, year, activeItem);
}

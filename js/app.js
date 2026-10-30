/**
 * SPDX-License-Identifier: AGPL-3.0-only
 * Copyright (c) 2026 Aditya Singh
 */

import { initLeavesTransition } from './leaves-transition.js';
/**
 * AI 2035: Plan P & C
 * Author: Aditya Singh
 * Scrollytelling engine, decision tree, HUD dock manager, dual-lens economic loss switcher,
 * and AI 2027-style source references.
 */

import {
  TIMELINE_DATA,
  BRANCH_L_DATA,
  BRANCH_W_DATA,
  INTRO_CARDS_DATA,
  FOOTNOTES_DATA,
  CARD_TERMS_DICTIONARY
} from './data.js';
import { ScenarioVisualizationDock, renderMobileSparkline } from './charts.js';
class CybersecurityAppEngine {
  constructor() {
    this.currentYear = 2024;
    this.currentBranch = 'branch_l'; // 'branch_l' = Plan P (Proliferate), 'branch_w' = Plan C (Consolidate)
    this.activeChartMode = 'losses'; // Default to Econometric Loss Decomposition
    this.activeLens = 'econometric'; // Default to Net AI Increment
    this.chartDock = null;
    this.modalChartDock = null;
    this.activeIntroCardId = null;
    this.activeFootnoteRef = null;
    this.popoverHideTimeout = null;
    this.isModalOpen = false;

    this.init();
  }

  init() {
    this.renderLeftTimelineRail();
    this.renderNarrativeStory();
    
    // Initialize Desktop Dock Chart
    this.chartDock = new ScenarioVisualizationDock('dock-chart-container', {
      defaultMode: this.activeChartMode,
      defaultLens: this.activeLens
    });
    
    // Initialize Modal Fullscreen Chart
    this.modalChartDock = new ScenarioVisualizationDock('modal-chart-container', {
      isModal: true,
      width: 660,
      height: 310,
      margin: { top: 38, right: 30, bottom: 36, left: 52 },
      defaultMode: this.activeChartMode,
      defaultLens: this.activeLens,
      onYearSelect: (yr) => this.onModalYearSelect(yr)
    });

    this.setupScrollytelling();
    this.setupBranchSwitchers();
    this.setupChartSwitchers();
    this.setupLensSwitchers();
    this.setupModalInteractions();
    this.setupMobileDock();
    this.renderNumberedFootnotes();
    this.setupIntroCards();
    this.setupTopNav();
    this.setupAudioBriefing();
    this.setupFullscreenGraphBtn();
    this.setupFootnotePopovers();
    this.setupCardTermPopovers();
    this.setChartMode('losses');
    this.setLens('econometric');
    this.updateHUD(TIMELINE_DATA[0]);
  }

  setupMobileDock() {
    const mobileDock = document.getElementById('mobile-bottom-dock');
    if (mobileDock) {
      mobileDock.addEventListener('click', () => {
        this.openFullscreenModal();
      });
      mobileDock.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openFullscreenModal();
        }
      });
    }

    // Double clicking desktop chart opens modal for deep examination
    const desktopChartBox = document.getElementById('dock-chart-container');
    if (desktopChartBox) {
      desktopChartBox.addEventListener('dblclick', () => {
        this.openFullscreenModal();
      });
    }
  }

  setupModalInteractions() {
    const modal = document.getElementById('fullscreen-graph-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeFullscreenModal());
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isModalOpen) {
        this.closeFullscreenModal();
      }
    });

    // Modal Chart Switcher Tabs
    const modalBtnCap = document.getElementById('modal-btn-toggle-cap');
    const modalBtnLoss = document.getElementById('modal-btn-toggle-loss');

    if (modalBtnCap && modalBtnLoss) {
      modalBtnCap.addEventListener('click', () => {
        this.setChartMode('capabilities');
      });

      modalBtnLoss.addEventListener('click', () => {
        this.setChartMode('losses');
      });
    }
  }

  openFullscreenModal() {
    const modal = document.getElementById('fullscreen-graph-modal');
    if (!modal) return;

    this.isModalOpen = true;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Synchronize mode, lens, branch, and year
    if (this.modalChartDock) {
      this.modalChartDock.setBranch(this.currentBranch);
      this.modalChartDock.setMode(this.activeChartMode);
      this.modalChartDock.setLens(this.activeLens);
      this.modalChartDock.setYear(this.currentYear);
      this.modalChartDock.render();
    }

    const modalLensBar = document.getElementById('modal-lens-switcher-bar');
    if (modalLensBar) {
      modalLensBar.style.display = this.activeChartMode === 'losses' ? 'flex' : 'none';
    }
  }

  closeFullscreenModal() {
    const modal = document.getElementById('fullscreen-graph-modal');
    if (!modal) return;

    this.isModalOpen = false;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  onModalYearSelect(year) {
    this.currentYear = Math.floor(year);
    let item = TIMELINE_DATA.find(d => d.year === this.currentYear);
    if (!item) {
      const branchItems = this.currentBranch === 'branch_l' ? BRANCH_L_DATA : BRANCH_W_DATA;
      item = branchItems.find(d => d.year === this.currentYear);
    }
    if (item) {
      this.updateHUD(item);
    }
  }

  setChartMode(mode) {
    this.activeChartMode = mode;

    // Desktop buttons
    const btnCap = document.getElementById('btn-toggle-cap');
    const btnLoss = document.getElementById('btn-toggle-loss');
    if (btnCap && btnLoss) {
      if (mode === 'capabilities') {
        btnCap.classList.add('active');
        btnLoss.classList.remove('active');
      } else {
        btnLoss.classList.add('active');
        btnCap.classList.remove('active');
      }
    }

    // Modal buttons
    const modalBtnCap = document.getElementById('modal-btn-toggle-cap');
    const modalBtnLoss = document.getElementById('modal-btn-toggle-loss');
    if (modalBtnCap && modalBtnLoss) {
      if (mode === 'capabilities') {
        modalBtnCap.classList.add('active');
        modalBtnLoss.classList.remove('active');
      } else {
        modalBtnLoss.classList.add('active');
        modalBtnCap.classList.remove('active');
      }
    }

    // Show/hide dual lens switcher bars (only pop up when Annual Cyber Losses is selected)
    const desktopLensBar = document.getElementById('lens-switcher-bar');
    if (desktopLensBar) {
      if (mode === 'losses') {
        desktopLensBar.style.display = 'flex';
        desktopLensBar.style.animation = 'none';
        desktopLensBar.offsetHeight; /* trigger reflow */
        desktopLensBar.style.animation = '';
      } else {
        desktopLensBar.style.display = 'none';
      }
    }
    const modalLensBar = document.getElementById('modal-lens-switcher-bar');
    if (modalLensBar) {
      if (mode === 'losses') {
        modalLensBar.style.display = 'flex';
        modalLensBar.style.animation = 'none';
        modalLensBar.offsetHeight; /* trigger reflow */
        modalLensBar.style.animation = '';
      } else {
        modalLensBar.style.display = 'none';
      }
    }

    if (mode === 'losses') {
      this.setLens('econometric');
    }

    // Update charts
    if (this.chartDock) this.chartDock.setMode(mode);
    if (this.modalChartDock) this.modalChartDock.setMode(mode);
  }

  setupLensSwitchers() {
    const btnOp = document.getElementById('btn-lens-operational');
    const btnEcon = document.getElementById('btn-lens-econometric');
    if (btnOp) {
      btnOp.addEventListener('click', () => this.setLens('operational'));
    }
    if (btnEcon) {
      btnEcon.addEventListener('click', () => this.setLens('econometric'));
    }

    const modalBtnOp = document.getElementById('modal-btn-lens-operational');
    const modalBtnEcon = document.getElementById('modal-btn-lens-econometric');
    if (modalBtnOp) {
      modalBtnOp.addEventListener('click', () => this.setLens('operational'));
    }
    if (modalBtnEcon) {
      modalBtnEcon.addEventListener('click', () => this.setLens('econometric'));
    }
  }

  setLens(lens) {
    if (this.activeLens === lens) return;
    this.activeLens = lens;

    // Desktop lens buttons
    const btnOp = document.getElementById('btn-lens-operational');
    const btnEcon = document.getElementById('btn-lens-econometric');
    if (btnOp && btnEcon) {
      if (lens === 'operational') {
        btnOp.classList.add('active');
        btnEcon.classList.remove('active');
      } else {
        btnEcon.classList.add('active');
        btnOp.classList.remove('active');
      }
    }

    // Modal lens buttons
    const modalBtnOp = document.getElementById('modal-btn-lens-operational');
    const modalBtnEcon = document.getElementById('modal-btn-lens-econometric');
    if (modalBtnOp && modalBtnEcon) {
      if (lens === 'operational') {
        modalBtnOp.style.background = '#000000';
        modalBtnOp.style.color = '#FFFFF8';
        modalBtnOp.style.borderColor = '#000000';
        modalBtnEcon.style.background = '#FFFFF8';
        modalBtnEcon.style.color = '#222222';
        modalBtnEcon.style.borderColor = '#999999';
      } else {
        modalBtnEcon.style.background = '#000000';
        modalBtnEcon.style.color = '#FFFFF8';
        modalBtnEcon.style.borderColor = '#000000';
        modalBtnOp.style.background = '#FFFFF8';
        modalBtnOp.style.color = '#222222';
        modalBtnOp.style.borderColor = '#999999';
      }
    }

    // Update charts
    if (this.chartDock) this.chartDock.setLens(lens);
    if (this.modalChartDock) this.modalChartDock.setLens(lens);

    // Refresh HUD metrics for currently active item
    let currentItem = TIMELINE_DATA.find(d => d.year === this.currentYear);
    if (!currentItem) {
      const branchItems = this.currentBranch === 'branch_l' ? BRANCH_L_DATA : BRANCH_W_DATA;
      currentItem = branchItems.find(d => d.year === this.currentYear);
    }
    if (currentItem) {
      this.updateHUD(currentItem);
    }
  }

  setupTopNav() {
    const sourcesLink = document.getElementById('nav-sources-link');
    if (sourcesLink) {
      sourcesLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('sources');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    const footnotesLink = document.getElementById('nav-footnotes-link');
    if (footnotesLink) {
      footnotesLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('sources') || document.getElementById('footnotes');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  setupIntroCards() {
    const buttons = document.querySelectorAll('.intro-card-btn');
    const box = document.getElementById('intro-expandable-box');
    const contentEl = document.getElementById('intro-box-content');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-card-id');
        
        if (this.activeIntroCardId === id) {
          this.activeIntroCardId = null;
          btn.classList.remove('active');
          if (box) box.style.display = 'none';
        } else {
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeIntroCardId = id;

          const cardData = INTRO_CARDS_DATA.find(c => c.id === id);
          if (cardData && box && contentEl) {
            contentEl.innerHTML = cardData.contentHtml;
            box.style.display = 'block';
          }
        }
      });
    });
  }

  renderLeftTimelineRail() {
    const railEl = document.getElementById('left-timeline-rail');
    if (!railEl) return;

    const branchItems = this.currentBranch === 'branch_l' ? BRANCH_L_DATA : BRANCH_W_DATA;
    const allMilestones = [...TIMELINE_DATA, ...branchItems];

    railEl.innerHTML = allMilestones.map((m) => `
      <div class="rail-item ${m.year === this.currentYear ? 'active' : ''}" data-id="${m.id}" data-year="${m.year}">
        <span class="rail-dot ${m.year <= this.currentYear ? 'filled' : 'hollow'}"></span>
        <span class="rail-label">${m.navLabel || m.displayDate}</span>
      </div>
    `).join('');

    railEl.querySelectorAll('.rail-item').forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const targetSec = document.getElementById(`story-${id}`);
        if (targetSec) {
          targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  renderNarrativeStory() {
    const container = document.getElementById('narrative-stream');
    if (!container) return;

    let html = '';

    // Common timeline 2024-2031
    TIMELINE_DATA.forEach((item) => {
      html += `
        <article class="story-chapter" id="story-${item.id}" data-id="${item.id}" data-year="${item.year}">
          <h2 class="chapter-title">${item.title}</h2>
          <div class="chapter-body">
            ${item.storyHtml}
          </div>
        </article>
      `;
    });

    // Plan transition quote dynamically rendered before 2032
    const transitionQuoteHtml = this.currentBranch === 'branch_l' ? `
      <div class="branch-transition-quote-slot">
        <div class="transition-quote-text">“Sharing is caring. Unfortunately.”</div>
        <div class="transition-quote-attribution">Sun Tzu, after discovering open weights</div>
      </div>
    ` : `
      <div class="branch-transition-quote-slot">
        <div class="transition-quote-text">“Why release the advantage when you can negotiate with it?”</div>
        <div class="transition-quote-attribution">Xi Jinping, after deciding open source was getting a little too open</div>
      </div>
    `;

    // Render 2031 Decision Crossroads Section (Exact Clean Flowchart Architecture)
    html += `
      <section class="story-chapter" id="story-choose-path" data-id="choose-path" data-year="2031">
        <h2 class="chapter-title">2031: Choose a Path</h2>

        <div class="chapter-body">
          <p class="story-lead cross-narrative-text">
            The scenario splits in 2031, after the Taiwan conflict, into two very different strategic paths for China. Click a plan below to explore the diverging cyber-physical pathways through 2035:
          </p>
          
          <div class="ai2040-flowchart-container">
            
            <!-- Top Root Box (White rounded card with 1px border) -->
            <div class="ai2040-root-box font-serif">
              China cannot have everything at once. Does it protect its strongest capabilities, close the gap, or spread the capability?
            </div>

            <!-- 2-Column Branching System with Unified Contiguous Connectors -->
            <div class="ai2040-branches-grid">
              
              <!-- LEFT BRANCH: Plan P (Proliferate / China Loses) -->
              <div class="ai2040-col left-col">
                <!-- Top Horizontal Arm & Center Upward Stem (anchored from left col to center) -->
                <div class="ai2040-col-top-arm left-arm">
                  <div class="ai2040-arm-line"></div>
                  <div class="ai2040-center-stem-up"></div>
                </div>

                <!-- Upper Stem with Italic Quote Badge -->
                <div class="ai2040-stem-badge-wrap">
                  <div class="ai2040-vert-stem-line"></div>
                  <div class="ai2040-branch-quote font-serif">“China loses the Taiwan Strait War.”</div>
                </div>

                <!-- Mid Decision Box -->
                <div class="ai2040-mid-box font-serif">
                  China remains behind the US frontier. Can it reduce the value of that lead by spreading powerful cyber capability worldwide?
                </div>

                <!-- Lower Stem with Decision Label Badge -->
                <div class="ai2040-stem-badge-wrap">
                  <div class="ai2040-vert-stem-line"></div>
                  <div class="ai2040-branch-quote font-serif">“Release weaker open weights”</div>
                </div>

                <!-- Plan Button Box -->
                <div class="ai2040-plan-wrapper">
                  <button class="ai2040-plan-btn plan-select-card ${this.currentBranch === 'branch_l' ? 'active' : ''}" data-branch="branch_l" id="btn-branch-p" aria-label="Select Plan P Proliferate">
                    <div class="ai2040-btn-tag font-mono">PLAN</div>
                    <div class="ai2040-btn-letter">P</div>
                    <div class="ai2040-btn-name">PROLIFERATE</div>
                  </button>
                  <div class="ai2040-rec-label font-serif">${this.currentBranch === 'branch_l' ? '(Selected Scenario)' : '(Click to Select)'}</div>
                </div>
              </div>

              <!-- RIGHT BRANCH: Plan C (Consolidate / China Wins) -->
              <div class="ai2040-col right-col">
                <!-- Top Horizontal Arm (anchored from center to right col) -->
                <div class="ai2040-col-top-arm right-arm">
                  <div class="ai2040-arm-line"></div>
                </div>

                <!-- Upper Stem with Italic Quote Badge -->
                <div class="ai2040-stem-badge-wrap">
                  <div class="ai2040-vert-stem-line"></div>
                  <div class="ai2040-branch-quote font-serif">“China wins the Taiwan Strait War.”</div>
                </div>

                <!-- Mid Decision Box -->
                <div class="ai2040-mid-box font-serif">
                  China has gained geopolitical leverage, but major semiconductor bottlenecks remain. Can it turn victory into technological catch up?
                </div>

                <!-- Lower Stem with Decision Label Badge -->
                <div class="ai2040-stem-badge-wrap">
                  <div class="ai2040-vert-stem-line"></div>
                  <div class="ai2040-branch-quote font-serif">“Consolidate closed frontier”</div>
                </div>

                <!-- Plan Button Box -->
                <div class="ai2040-plan-wrapper">
                  <button class="ai2040-plan-btn plan-select-card ${this.currentBranch === 'branch_w' ? 'active' : ''}" data-branch="branch_w" id="btn-branch-c" aria-label="Select Plan C Consolidate">
                    <div class="ai2040-btn-tag font-mono">PLAN</div>
                    <div class="ai2040-btn-letter">C</div>
                    <div class="ai2040-btn-name">CONSOLIDATE</div>
                  </button>
                  <div class="ai2040-rec-label font-serif">${this.currentBranch === 'branch_w' ? '(Selected Scenario)' : '(Click to Select)'}</div>
                </div>
              </div>

            </div>
          </div>

          <!-- Dynamic Transition Quote Slot (Below Plan Cards, Above 2032) -->
          ${transitionQuoteHtml}
        </div>
      </section>
    `;

    // Render Branch-specific post-2031 items (ONLY chosen scenario appears)
    const branchItems = this.currentBranch === 'branch_l' ? BRANCH_L_DATA : BRANCH_W_DATA;
    branchItems.forEach((item) => {
      html += `
        <article class="story-chapter branch-chapter ${this.currentBranch}" id="story-${item.id}" data-id="${item.id}" data-year="${item.year}">
          <h2 class="chapter-title">${item.title}</h2>
          <div class="chapter-body">
            ${item.storyHtml}
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
  }

  setupScrollytelling() {
    const chapters = document.querySelectorAll('.story-chapter');
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -45% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          const yr = parseFloat(entry.target.getAttribute('data-year'));
          this.onSectionIntersect(id, yr);
        }
      });
    }, observerOptions);

    chapters.forEach((ch) => observer.observe(ch));
  }

  onSectionIntersect(id, year) {
    this.currentYear = Math.floor(year);

    let item = TIMELINE_DATA.find(d => d.id === id);
    if (!item) {
      const branchItems = this.currentBranch === 'branch_l' ? BRANCH_L_DATA : BRANCH_W_DATA;
      item = branchItems.find(d => d.id === id);
    }

    if (item) {
      this.updateHUD(item);
    }

    if (this.chartDock) this.chartDock.setYear(year);
    if (this.modalChartDock) this.modalChartDock.setYear(year);

    // Update Left Rail
    const railItems = document.querySelectorAll('.rail-item');
    railItems.forEach((ri) => {
      const rYr = parseFloat(ri.getAttribute('data-year'));
      const rId = ri.getAttribute('data-id');
      const dot = ri.querySelector('.rail-dot');

      if (rYr <= year) {
        dot.classList.add('filled');
        dot.classList.remove('hollow');
      } else {
        dot.classList.remove('filled');
        dot.classList.add('hollow');
      }

      if (rId === id) {
        ri.classList.add('active');
      } else {
        ri.classList.remove('active');
      }
    });
  }

  updateHUD(item) {
    if (!item) return;

    const displayYear = item.displayDate || item.year;
    const levelTitle = `${item.level} · ${item.levelName}`;
    const branchLabel = this.currentBranch === 'branch_l' ? 'Plan P · Proliferate' : 'Plan C · Consolidate';

    // Desktop HUD Date & Badges
    const datePill = document.getElementById('hud-date-pill');
    if (datePill) datePill.textContent = displayYear;

    const levelBadge = document.getElementById('hud-level-badge');
    if (levelBadge) levelBadge.textContent = levelTitle;

    const statusBadge = document.getElementById('hud-status-badge');
    if (statusBadge) {
      statusBadge.textContent = item.status;
      statusBadge.className = 'status-pill font-mono status-monochrome';
    }

    // Mobile Bottom Floating Bar
    const mobileDate = document.getElementById('mobile-dock-date');
    if (mobileDate) mobileDate.textContent = displayYear;

    renderMobileSparkline('mobile-dock-sparkline', this.currentBranch, item.year, item);

    // Fullscreen Modal Elements
    const modalDatePill = document.getElementById('modal-date-pill');
    if (modalDatePill) modalDatePill.textContent = displayYear;

    const modalLevelBadge = document.getElementById('modal-level-badge');
    if (modalLevelBadge) modalLevelBadge.textContent = levelTitle;

    const modalStatusBadge = document.getElementById('modal-status-badge');
    if (modalStatusBadge) modalStatusBadge.textContent = item.status;

    const modalBranchTag = document.getElementById('modal-active-branch-tag');
    if (modalBranchTag) modalBranchTag.textContent = branchLabel;

    const modalMilestone = document.getElementById('modal-key-milestone');
    if (modalMilestone) modalMilestone.textContent = item.keyMilestone || '';

    const milestoneEl = document.getElementById('hud-key-milestone');
    if (milestoneEl) milestoneEl.textContent = item.keyMilestone || '';

    // Dynamic Lens Buttons Update (Numbers update on scroll)
    const aiShareText = item.aiAttackShare || '3.2%';
    const netIncVal = item.netAiIncrement !== undefined ? item.netAiIncrement : 0;
    const netIncText = `+$${netIncVal}B`;

    const showBaseline = (item.year === 2024 || netIncVal === 0);
    const baselineHtml = showBaseline ? `<span class="lens-btn-baseline">Baseline</span>` : '';

    const btnOp = document.getElementById('btn-lens-operational');
    if (btnOp) {
      btnOp.innerHTML = `<span class="lens-btn-main"><i class="fa-solid fa-crosshairs"></i> Attacks Involving AI (${aiShareText})</span>`;
    }
    const btnEcon = document.getElementById('btn-lens-econometric');
    if (btnEcon) {
      btnEcon.innerHTML = `<span class="lens-btn-main"><i class="fa-solid fa-scale-balanced"></i> Extra Damage from AI (${netIncText})</span>${baselineHtml}`;
    }

    const modalBtnOp = document.getElementById('modal-btn-lens-operational');
    if (modalBtnOp) {
      modalBtnOp.innerHTML = `<span class="lens-btn-main"><i class="fa-solid fa-crosshairs"></i> Attacks Involving AI (${aiShareText})</span>`;
    }
    const modalBtnEcon = document.getElementById('modal-btn-lens-econometric');
    if (modalBtnEcon) {
      modalBtnEcon.innerHTML = `<span class="lens-btn-main"><i class="fa-solid fa-scale-balanced"></i> Extra Damage from AI (${netIncText})</span>${baselineHtml}`;
    }

    // Dual-Lens Loss Metrics
    let lossLabelText = '';
    let lossExposureText = '';
    let pillTagText = '';

    const isEcon = this.activeLens === 'econometric';
    if (this.activeLens === 'operational') {
      lossLabelText = 'Total Loss (Attacks Involving AI)';
      lossExposureText = `$${item.totalLossP50 || item.lossCentral} Billion / year`;
      pillTagText = `${aiShareText} attacks involve AI`;
    } else {
      lossLabelText = 'Extra Damage from AI (Net AI Increment)';
      lossExposureText = `+$${netIncVal} Billion / year`;
      pillTagText = ''; // Completely delete redundant Net AI Increment text
    }

    // Update Desktop Threat Summary Card
    const hudLossLabel = document.getElementById('hud-loss-label');
    if (hudLossLabel) hudLossLabel.textContent = lossLabelText;

    const hudLossExposure = document.getElementById('hud-loss-exposure');
    if (hudLossExposure) {
      hudLossExposure.textContent = lossExposureText;
      hudLossExposure.classList.toggle('is-net-ai', isEcon);
    }

    const hudLossTag = document.getElementById('hud-loss-tag');
    if (hudLossTag) {
      hudLossTag.textContent = pillTagText;
      hudLossTag.style.display = pillTagText ? 'inline-block' : 'none';
    }

    const hudLossSubrow = document.getElementById('hud-loss-subrow');
    if (hudLossSubrow) {
      hudLossSubrow.style.display = pillTagText ? 'flex' : 'none';
    }

    // Update Modal Threat Metrics
    const modalLossLabel = document.getElementById('modal-loss-label');
    if (modalLossLabel) modalLossLabel.textContent = lossLabelText;

    const modalLoss = document.getElementById('modal-loss-exposure');
    if (modalLoss) {
      modalLoss.textContent = lossExposureText;
      modalLoss.classList.toggle('is-net-ai', isEcon);
    }

    const modalLossTag = document.getElementById('modal-loss-tag');
    if (modalLossTag) {
      modalLossTag.textContent = pillTagText;
      modalLossTag.style.display = pillTagText ? 'inline-block' : 'none';
    }

    const modalLossSubrow = document.getElementById('modal-loss-subrow');
    if (modalLossSubrow) {
      modalLossSubrow.style.display = pillTagText ? 'flex' : 'none';
    }

    // Desktop Country Models & Statuses
    const usContent = `<strong>${item.usModel || 'Mythos-class'}</strong><br><span class="status-sub">${item.usStatus || ''}</span>`;
    const cnContent = `<strong>${item.chinaModel || 'DeepSeek / GLM'}</strong><br><span class="status-sub">${item.chinaStatus || ''}</span>`;
    const euContent = `<strong>${item.europeModel || 'Mistral-class'}</strong><br><span class="status-sub">${item.europeStatus || ''}</span>`;

    const usEl = document.getElementById('hud-us-status');
    if (usEl) usEl.innerHTML = usContent;

    const cnEl = document.getElementById('hud-china-status');
    if (cnEl) cnEl.innerHTML = cnContent;

    const euEl = document.getElementById('hud-europe-status');
    if (euEl) euEl.innerHTML = euContent;

    // Modal Country Models & Statuses
    const modalUsEl = document.getElementById('modal-us-status');
    if (modalUsEl) modalUsEl.innerHTML = usContent;

    const modalCnEl = document.getElementById('modal-china-status');
    if (modalCnEl) modalCnEl.innerHTML = cnContent;

    const modalEuEl = document.getElementById('modal-europe-status');
    if (modalEuEl) modalEuEl.innerHTML = euContent;
  }

  setupBranchSwitchers() {
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.plan-select-card');
      if (card) {
        const branch = card.getAttribute('data-branch');
        if (branch && branch !== this.currentBranch) {
          this.setBranch(branch);
        }
      }
    });
  }

  setBranch(branch) {
    this.currentBranch = branch;
    if (this.chartDock) this.chartDock.setBranch(branch);
    if (this.modalChartDock) this.modalChartDock.setBranch(branch);

    this.renderLeftTimelineRail();
    this.renderNarrativeStory();
    this.setupScrollytelling();

    // Re-render sparkline and HUD for current item
    let currentItem = TIMELINE_DATA.find(d => d.year === this.currentYear);
    if (!currentItem) {
      const branchItems = this.currentBranch === 'branch_l' ? BRANCH_L_DATA : BRANCH_W_DATA;
      currentItem = branchItems.find(d => d.year === this.currentYear);
    }
    if (currentItem) {
      this.updateHUD(currentItem);
    }

    const crossroads = document.getElementById('story-choose-path');
    if (crossroads) {
      crossroads.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setupChartSwitchers() {
    const btnCap = document.getElementById('btn-toggle-cap');
    const btnLoss = document.getElementById('btn-toggle-loss');

    if (btnCap && btnLoss) {
      btnCap.addEventListener('click', () => {
        this.setChartMode('capabilities');
      });

      btnLoss.addEventListener('click', () => {
        this.setChartMode('losses');
      });
    }
  }

  setupCardTermPopovers() {
    let popover = document.getElementById('card-term-popover');
    if (!popover) {
      popover = document.createElement('div');
      popover.id = 'card-term-popover';
      popover.className = 'card-term-popover';
      popover.style.display = 'none';
      popover.setAttribute('role', 'tooltip');
      document.body.appendChild(popover);
    }

    const hideTermPopover = () => {
      popover.style.display = 'none';
      popover.setAttribute('aria-hidden', 'true');
      this.activeCardTermEl = null;
    };

    const showTermPopover = (termEl) => {
      const termName = termEl.getAttribute('data-term') || termEl.textContent.trim();
      const termData = CARD_TERMS_DICTIONARY && CARD_TERMS_DICTIONARY[termName];
      if (!termData) return;

      this.activeCardTermEl = termEl;

      // Populate content: NO heading, start directly with plain-language explanation
      let sourcesHtml = '';
      if (termData.sources && termData.sources.length > 0) {
        const linksHtml = termData.sources.map(s => `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="card-term-source-link">
            ${s.title}
          </a>
        `).join('');
        sourcesHtml = `
          <div class="card-term-popover-readmore">
            <div class="card-term-readmore-label">Read more at:</div>
            <div class="card-term-popover-links">
              ${linksHtml}
            </div>
          </div>
        `;
      }

      popover.innerHTML = `
        <div class="card-term-popover-text">${termData.explanation}</div>
        ${sourcesHtml}
      `;

      popover.style.display = 'flex';
      popover.style.visibility = 'hidden';
      popover.setAttribute('aria-hidden', 'false');

      // Top-left of popover aligns with where the text ends
      const termRect = termEl.getBoundingClientRect();
      const popRect = popover.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth || window.innerWidth;

      let left = termRect.right + 8 + window.scrollX;
      let top = termRect.top + window.scrollY;

      // If overflowing on the right, position to the left or clamp
      if (left + popRect.width > viewportWidth - 16) {
        const leftAlternative = termRect.left - popRect.width - 8 + window.scrollX;
        if (leftAlternative > 16) {
          left = leftAlternative;
        } else {
          left = Math.max(16, viewportWidth - popRect.width - 16);
        }
      }

      popover.style.left = `${left}px`;
      popover.style.top = `${top}px`;
      popover.style.visibility = 'visible';
    };

    // Use event delegation for dynamic timeline and branch chapters
    document.addEventListener('click', (e) => {
      const termEl = e.target.closest('.nc-item-term');
      if (termEl) {
        e.preventDefault();
        e.stopPropagation();
        if (this.activeCardTermEl === termEl && popover.style.display !== 'none') {
          hideTermPopover();
        } else {
          showTermPopover(termEl);
        }
        return;
      }

      if (!e.target.closest('#card-term-popover')) {
        hideTermPopover();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        hideTermPopover();
      }
    });
  }

  setupFootnotePopovers() {
    const popover = document.getElementById('footnote-popover');
    if (!popover) return;

    const badgeEl = document.getElementById('footnote-popover-badge');
    const typeEl = document.getElementById('footnote-popover-type');
    const textEl = document.getElementById('footnote-popover-text');
    const sourcesEl = document.getElementById('footnote-popover-sources');

    const showNote = (refEl) => {
      clearTimeout(this.popoverHideTimeout);
      const noteNum = refEl.getAttribute('data-note');
      const noteData = FOOTNOTES_DATA[noteNum];
      if (!noteData) return;

      this.activeFootnoteRef = refEl;
      if (badgeEl) badgeEl.textContent = `#${noteData.number}`;
      if (typeEl) typeEl.textContent = noteData.type;
      if (textEl) textEl.textContent = noteData.text;

      if (sourcesEl) {
        if (noteData.sources && noteData.sources.length > 0) {
          sourcesEl.innerHTML = noteData.sources.map(s => `
            <div class="popover-source-item">
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="popover-source-link">
                ${s.title}
              </a>
            </div>
          `).join('');
          sourcesEl.style.display = 'block';
        } else {
          sourcesEl.innerHTML = '';
          sourcesEl.style.display = 'none';
        }
      }

      popover.style.display = 'flex';
      popover.setAttribute('aria-hidden', 'false');

      const rect = refEl.getBoundingClientRect();
      const popRect = popover.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left = rect.left + window.scrollX - 20;
      let top = rect.bottom + window.scrollY + 6;

      if (left + popRect.width > viewportWidth - 20) {
        left = viewportWidth - popRect.width - 24;
      }
      if (left < 16) left = 16;

      if (rect.bottom + popRect.height + 16 > viewportHeight) {
        top = rect.top + window.scrollY - popRect.height - 8;
      }

      popover.style.left = `${left}px`;
      popover.style.top = `${top}px`;
    };

    const scheduleHide = () => {
      clearTimeout(this.popoverHideTimeout);
      this.popoverHideTimeout = setTimeout(() => {
        popover.style.display = 'none';
        popover.setAttribute('aria-hidden', 'true');
        this.activeFootnoteRef = null;
      }, 220);
    };

    // Event delegation ensures dynamic footnote refs (e.g. in intro drawer) always work
    document.addEventListener('mouseover', (e) => {
      const ref = e.target.closest('.footnote-ref');
      if (ref) showNote(ref);
    });

    document.addEventListener('mouseout', (e) => {
      const ref = e.target.closest('.footnote-ref');
      if (ref) scheduleHide();
    });

    document.addEventListener('focusin', (e) => {
      const ref = e.target.closest('.footnote-ref');
      if (ref) showNote(ref);
    });

    document.addEventListener('focusout', (e) => {
      const ref = e.target.closest('.footnote-ref');
      if (ref) scheduleHide();
    });

    document.addEventListener('click', (e) => {
      const ref = e.target.closest('.footnote-ref');
      if (ref) {
        e.preventDefault();
        e.stopPropagation();
        if (this.activeFootnoteRef === ref && popover.style.display !== 'none') {
          popover.style.display = 'none';
          this.activeFootnoteRef = null;
        } else {
          showNote(ref);
        }
      }
    });

    popover.addEventListener('mouseenter', () => {
      clearTimeout(this.popoverHideTimeout);
    });
    popover.addEventListener('mouseleave', scheduleHide);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        popover.style.display = 'none';
        this.activeFootnoteRef = null;
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.footnote-ref') && !e.target.closest('#footnote-popover')) {
        popover.style.display = 'none';
        this.activeFootnoteRef = null;
      }
    });
  }

    setupFullscreenGraphBtn() {
    const navGraphBtn = document.getElementById('nav-fullscreen-graph-btn');
    if (navGraphBtn) {
      navGraphBtn.addEventListener('click', () => {
        this.openFullscreenModal();
      });
    }
  }

  setupAudioBriefing() {
    const audio = document.getElementById('podcast-audio');
    const playBtn = document.getElementById('podcast-play-btn');
    const playIcon = document.getElementById('podcast-play-icon');
    const chapterName = document.getElementById('podcast-chapter-name');
    const trackWrapper = document.getElementById('podcast-track-wrapper');
    const trackFill = document.getElementById('podcast-track-fill');
    const dividersContainer = document.getElementById('podcast-track-dividers');
    const tooltip = document.getElementById('podcast-hover-tooltip');
    const rewindBtn = document.getElementById('podcast-rewind-btn');
    const forwardBtn = document.getElementById('podcast-forward-btn');
    const speedBtn = document.getElementById('podcast-speed-btn');
    const timeReadout = document.getElementById('podcast-time-readout');
    const navAudioBtn = document.getElementById('nav-audio-btn');
    const navAudioBtnMobile = document.getElementById('nav-audio-btn-mobile');
    const closeBtn = document.getElementById('podcast-close-btn');

    if (!audio) return;

    const PODCAST_CHAPTERS = [
      { time: 0, title: "Introduction" },
      { time: 41, title: "Methodology & 3 Layers" },
      { time: 153, title: "The 6 Technical Supplements" },
      { time: 247, title: "2024: Level C-0 (Research Assistant)" },
      { time: 286, title: "2025: Level C-1 (One-Person Team)" },
      { time: 323, title: "2026: Level C-2 (Autonomous Chaining)" },
      { time: 353, title: "2027: Level C-3 (Defended Networks)" },
      { time: 386, title: "2028: Level C-4 (Industrial Sabotage)" },
      { time: 426, title: "2029: Level C-5 (Stealth Persistence)" },
      { time: 470, title: "2030: Level C-6 (Parallel Cloud Agents)" },
      { time: 508, title: "2031: The Taiwan Crossroads" },
      { time: 650, title: "Plan P: Proliferation Pathway (2032-2035)" },
      { time: 832, title: "Plan C: Sovereign Consolidation (2032-2035)" },
      { time: 922, title: "Synthesis: The Core Dilemma" },
      { time: 959, title: "Empirical Replication & Code Audit" }
    ];

    const PLAY_SVG = `<polygon points="6,4 20,12 6,20"/>`;
    const PAUSE_SVG = `<rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/>`;

    const formatTime = (secs) => {
      if (isNaN(secs) || secs < 0) return "0:00";
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const renderDividers = () => {
      if (!dividersContainer) return;
      dividersContainer.innerHTML = '';
      const totalDur = audio.duration || 980.52;
      PODCAST_CHAPTERS.forEach((ch, idx) => {
        if (idx === 0) return;
        const pct = (ch.time / totalDur) * 100;
        const tick = document.createElement('div');
        tick.className = 'podcast-divider-tick';
        tick.style.left = `${pct}%`;
        tick.setAttribute('data-time', ch.time);
        dividersContainer.appendChild(tick);
      });
    };

    audio.addEventListener('loadedmetadata', () => {
      renderDividers();
      if (timeReadout) {
        timeReadout.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration || 980.52)}`;
      }
    });

    // Fallback render of dividers immediately
    renderDividers();

    const togglePlay = () => {
      if (audio.paused) {
        audio.play().then(() => {
          if (playIcon) playIcon.innerHTML = PAUSE_SVG;
          if (navAudioBtn) navAudioBtn.classList.add('is-podcast-playing');
          if (navAudioBtnMobile) navAudioBtnMobile.classList.add('is-podcast-playing');
        }).catch(err => {
          console.warn("Audio play prevented:", err);
        });
      } else {
        audio.pause();
        if (playIcon) playIcon.innerHTML = PLAY_SVG;
        if (navAudioBtn) navAudioBtn.classList.remove('is-podcast-playing');
        if (navAudioBtnMobile) navAudioBtnMobile.classList.remove('is-podcast-playing');
      }
    };

    if (playBtn) playBtn.addEventListener('click', togglePlay);

    audio.addEventListener('play', () => {
      if (playIcon) playIcon.innerHTML = PAUSE_SVG;
      if (navAudioBtn) navAudioBtn.classList.add('is-podcast-playing');
      if (navAudioBtnMobile) navAudioBtnMobile.classList.add('is-podcast-playing');
    });

    audio.addEventListener('pause', () => {
      if (playIcon) playIcon.innerHTML = PLAY_SVG;
      if (navAudioBtn) navAudioBtn.classList.remove('is-podcast-playing');
      if (navAudioBtnMobile) navAudioBtnMobile.classList.remove('is-podcast-playing');
    });

    audio.addEventListener('ended', () => {
      if (playIcon) playIcon.innerHTML = PLAY_SVG;
      if (navAudioBtn) navAudioBtn.classList.remove('is-podcast-playing');
      if (navAudioBtnMobile) navAudioBtnMobile.classList.remove('is-podcast-playing');
    });

    let isSeeking = false;
    let seekTimeout = null;

    audio.addEventListener('seeked', () => {
      isSeeking = false;
      if (seekTimeout) clearTimeout(seekTimeout);
    });

    const updateActiveChapter = (curTime) => {
      let activeCh = PODCAST_CHAPTERS[0];
      for (let i = PODCAST_CHAPTERS.length - 1; i >= 0; i--) {
        if (curTime >= PODCAST_CHAPTERS[i].time - 0.4) {
          activeCh = PODCAST_CHAPTERS[i];
          break;
        }
      }
      if (chapterName && chapterName.textContent !== activeCh.title) {
        chapterName.textContent = activeCh.title;
        chapterName.title = `Current: ${activeCh.title} (Click to jump to next chapter)`;
      }
    };

    audio.addEventListener('timeupdate', () => {
      if (isSeeking) return;
      const cur = audio.currentTime;
      const dur = audio.duration || 980.52;
      const pct = Math.min(100, (cur / dur) * 100);

      if (trackFill) trackFill.style.width = `${pct}%`;
      if (timeReadout) timeReadout.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
      updateActiveChapter(cur);
    });

    // Centralized seek helper for click, scrub, chapter jump, and skip buttons
    const performSeek = (targetTime) => {
      const dur = audio.duration && !isNaN(audio.duration) && audio.duration > 0 ? audio.duration : 980.52;
      const clampedTime = Math.max(0, Math.min(dur, targetTime));
      const pct = Math.min(100, (clampedTime / dur) * 100);

      // Lock UI optimistically to prevent timeupdate from snapping back mid-seek
      isSeeking = true;
      if (seekTimeout) clearTimeout(seekTimeout);
      seekTimeout = setTimeout(() => { isSeeking = false; }, 800);

      if (trackFill) trackFill.style.width = `${pct}%`;
      if (timeReadout) timeReadout.textContent = `${formatTime(clampedTime)} / ${formatTime(dur)}`;
      updateActiveChapter(clampedTime);

      try {
        audio.currentTime = clampedTime;
      } catch (err) {
        console.warn("Audio seek error:", err);
      }

      if (audio.paused) {
        togglePlay();
      }
    };

    // Seek helper for click and scrub
    const seekToClientX = (clientX) => {
      if (!trackWrapper) return;
      const rect = trackWrapper.getBoundingClientRect();
      if (rect.width <= 0) return;
      const clickX = clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const dur = audio.duration && !isNaN(audio.duration) && audio.duration > 0 ? audio.duration : 980.52;
      performSeek(pct * dur);
    };

    if (trackWrapper) {
      let isScrubbing = false;

      trackWrapper.addEventListener('click', (e) => {
        seekToClientX(e.clientX);
      });

      trackWrapper.addEventListener('mousedown', (e) => {
        isScrubbing = true;
        seekToClientX(e.clientX);
      });

      window.addEventListener('mousemove', (e) => {
        if (isScrubbing) {
          seekToClientX(e.clientX);
        }
      });

      window.addEventListener('mouseup', () => {
        isScrubbing = false;
      });

      // Mobile Touch Scrubbing
      trackWrapper.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length > 0) {
          isScrubbing = true;
          seekToClientX(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (isScrubbing && e.touches && e.touches.length > 0) {
          seekToClientX(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchend', () => {
        isScrubbing = false;
      });

      // Hover Tooltip
      trackWrapper.addEventListener('mousemove', (e) => {
        const rect = trackWrapper.getBoundingClientRect();
        const hoverX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, hoverX / rect.width));
        const dur = audio.duration || 980.52;
        const hoverTime = pct * dur;

        let hoveredCh = PODCAST_CHAPTERS[0];
        for (let i = PODCAST_CHAPTERS.length - 1; i >= 0; i--) {
          if (hoverTime >= PODCAST_CHAPTERS[i].time) {
            hoveredCh = PODCAST_CHAPTERS[i];
            break;
          }
        }

        if (tooltip) {
          tooltip.classList.add('active');
          const clampedX = Math.max(50, Math.min(rect.width - 50, hoverX));
          tooltip.style.left = `${clampedX}px`;
          tooltip.textContent = `${hoveredCh.title} • ${formatTime(hoverTime)}`;
        }
      });

      trackWrapper.addEventListener('mouseleave', () => {
        if (tooltip) tooltip.classList.remove('active');
      });
    }

    // Click Chapter Title to Advance to Next Chapter
    if (chapterName) {
      chapterName.style.cursor = 'pointer';
      chapterName.title = "Current: Introduction (Click to jump to next chapter)";
      chapterName.addEventListener('click', (e) => {
        e.stopPropagation();
        const cur = audio.currentTime || 0;
        let currIdx = 0;
        for (let i = PODCAST_CHAPTERS.length - 1; i >= 0; i--) {
          if (cur >= PODCAST_CHAPTERS[i].time - 0.5) {
            currIdx = i;
            break;
          }
        }
        const nextIdx = (currIdx + 1) % PODCAST_CHAPTERS.length;
        const nextCh = PODCAST_CHAPTERS[nextIdx];
        performSeek(nextCh.time);
      });
    }

    // Rewind 10s
    if (rewindBtn) {
      rewindBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        performSeek(Math.max(0, audio.currentTime - 10));
      });
    }

    // Forward 10s
    if (forwardBtn) {
      forwardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dur = audio.duration || 980.52;
        performSeek(Math.min(dur, audio.currentTime + 10));
      });
    }

    // Speed cycle: 1x -> 1.25x -> 1.5x -> 2x -> 0.75x
    const SPEEDS = [1.0, 1.25, 1.5, 2.0, 0.75];
    let speedIdx = 0;
    if (speedBtn) {
      speedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speedIdx = (speedIdx + 1) % SPEEDS.length;
        const rate = SPEEDS[speedIdx];
        audio.playbackRate = rate;
        speedBtn.textContent = rate === 1.0 ? '1x' : `${rate}x`;
      });
    }

    // Close button dismisses player
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.pause();
        const playerEl = document.getElementById('inbuilt-podcast-player');
        if (playerEl) {
          playerEl.classList.remove('is-visible');
          playerEl.style.display = 'none';
        }
        if (navAudioBtn) navAudioBtn.classList.remove('is-podcast-playing');
        if (navAudioBtnMobile) navAudioBtnMobile.classList.remove('is-podcast-playing');
      });
    }

    // Nav Headphone Button: Reveals player just below card & starts playback
    const triggerAudioFromNav = () => {
      const playerEl = document.getElementById('inbuilt-podcast-player');
      if (!playerEl) return;

      const isHidden = playerEl.style.display === 'none' || !playerEl.classList.contains('is-visible');

      if (isHidden) {
        playerEl.style.display = 'block';
        playerEl.classList.add('is-visible');
        playerEl.classList.remove('pulse-highlight');
        void playerEl.offsetWidth; // trigger reflow
        playerEl.classList.add('pulse-highlight');

        if (audio.paused) {
          togglePlay();
        }

        playerEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        // Already visible: toggle play/pause
        togglePlay();
      }
    };

    if (navAudioBtn) {
      navAudioBtn.addEventListener('click', (e) => {
        e.preventDefault();
        triggerAudioFromNav();
      });
    }

    if (navAudioBtnMobile) {
      navAudioBtnMobile.addEventListener('click', (e) => {
        e.preventDefault();
        const drawerOverlay = document.getElementById('mobile-drawer-overlay');
        if (drawerOverlay && drawerOverlay.classList.contains('open')) {
          drawerOverlay.classList.remove('open');
          document.body.style.overflow = '';
        }
        triggerAudioFromNav();
      });
    }
  }

  renderNumberedFootnotes() {
    const listEl = document.getElementById('footnotes-list');
    if (!listEl) return;

    let html = '';
    for (let i = 1; i <= 17; i++) {
      const note = FOOTNOTES_DATA[i];
      if (!note) continue;

      if (note.sources && note.sources.length > 0) {
        const linksHtml = note.sources.map(s => `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="source-list-link">
            ${s.title}
          </a>
        `).join('; ');
        html += `<li class="source-list-item" value="${i}">${linksHtml}</li>`;
      } else {
        html += `<li class="source-list-item plain-assumption" value="${i}">${note.text}</li>`;
      }
    }

    listEl.innerHTML = html;
  }


}


/**
 * Podcast Recommendation Speech Bubble Controller
 * - Automatically shown when landing on homepage
 * - Auto-dismisses smoothly after exactly 6 seconds
 * - Clicking '×' dismisses immediately
 * - Clicking headphone icon dismisses immediately (and triggers player)
 * - Session-guarded so it doesn't reappear on same visit after dismissed
 * - Respects prefers-reduced-motion
 */
function initPodcastRecommendationBubble() {
  if (window.__podcastBubbleInitialized) return;
  window.__podcastBubbleInitialized = true;

  if (sessionStorage.getItem('ai2035_podcast_bubble_dismissed') === '1') {
    return;
  }

  const isMobile = window.innerWidth <= 768;
  const targetAnchor = isMobile 
    ? document.getElementById('podcast-bubble-anchor-mobile') 
    : document.getElementById('podcast-bubble-anchor-desktop');

  if (!targetAnchor) return;

  const bubble = document.createElement('div');
  bubble.id = 'podcast-speech-bubble';
  bubble.className = 'podcast-speech-bubble';
  bubble.setAttribute('role', 'status');
  bubble.setAttribute('aria-live', 'polite');
  bubble.innerHTML = `
    <button type="button" class="podcast-bubble-close" id="podcast-bubble-close" aria-label="Dismiss podcast recommendation">&times;</button>
    <span class="podcast-bubble-text">&ldquo;I highly recommend listening to the podcast!&rdquo;</span>
    <svg class="podcast-bubble-tail" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 10 L12 0 L14 10 Z" fill="#FFFFF8"/>
      <path d="M0 10 L12 0" stroke="rgba(0,0,0,0.22)" stroke-width="1"/>
      <path d="M12 0 L14 10" stroke="rgba(0,0,0,0.12)" stroke-width="1"/>
    </svg>
  `;

  targetAnchor.appendChild(bubble);

  // Trigger smooth fade-in
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    bubble.style.opacity = '0';
    requestAnimationFrame(() => {
      bubble.style.transition = 'opacity 0.28s ease';
      bubble.style.opacity = '1';
    });
  } else {
    bubble.style.opacity = '1';
  }

  let dismissTimeout = null;

  const dismissBubble = () => {
    if (dismissTimeout) clearTimeout(dismissTimeout);
    sessionStorage.setItem('ai2035_podcast_bubble_dismissed', '1');
    if (prefersReducedMotion) {
      bubble.remove();
    } else {
      bubble.style.transition = 'opacity 0.35s ease';
      bubble.style.opacity = '0';
      bubble.style.pointerEvents = 'none';
      setTimeout(() => {
        bubble.remove();
      }, 360);
    }
  };

  // 6 seconds visibility timer
  dismissTimeout = setTimeout(() => {
    dismissBubble();
  }, 6000);

  // Close button click
  const closeBtn = bubble.querySelector('#podcast-bubble-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dismissBubble();
    });
  }

  // Dismiss if headphone button is clicked
  const audioBtnDesktop = document.getElementById('nav-audio-btn');
  const audioBtnMobile = document.getElementById('nav-audio-btn-mobile');
  if (audioBtnDesktop) audioBtnDesktop.addEventListener('click', () => dismissBubble(), { once: true });
  if (audioBtnMobile) audioBtnMobile.addEventListener('click', () => dismissBubble(), { once: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initPodcastRecommendationBubble();
  window.app = new CybersecurityAppEngine();
  // Timed publication metadata swap: after exactly 15 seconds, swap instantly with zero transition
  setTimeout(() => {
    const statusEl = document.getElementById('hero-metadata-status');
    if (statusEl) {
      statusEl.textContent = 'Updated Oct 26th 2026';
    }
  }, 15000);

  initLeavesTransition('#nav-old-version-btn', '/old-version');
  initLeavesTransition('#nav-old-version-btn-mobile', '/old-version');

  // Mobile Drawer toggle handlers (matching Edit Mobile)
  const burgerBtn = document.getElementById('hero-burger-btn');
  const drawerOverlay = document.getElementById('mobile-drawer-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close-btn');

  if (burgerBtn && drawerOverlay) {
    burgerBtn.addEventListener('click', () => {
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      drawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  // Mobile audio briefing button triggers executive audio modal
  const mobileAudioBtn = document.getElementById('nav-audio-btn-mobile');
  const desktopAudioBtn = document.getElementById('nav-audio-btn');
  if (mobileAudioBtn && desktopAudioBtn) {
    mobileAudioBtn.addEventListener('click', () => desktopAudioBtn.click());
  }
});

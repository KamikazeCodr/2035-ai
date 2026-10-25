/**
 * AI-2035 (Cybersecurity Standpoint)
 * Author: Aditya Singh
 * Scrollytelling engine, decision tree, HUD dock manager, footnote popover, and numbered footnotes list
 */

import {
  TIMELINE_DATA,
  BRANCH_L_DATA,
  BRANCH_W_DATA,
  INTRO_CARDS_DATA,
  FOOTNOTES_DATA
} from './data.js';
import { ScenarioVisualizationDock, renderMobileSparkline } from './charts.js';

class CybersecurityAppEngine {
  constructor() {
    this.currentYear = 2024;
    this.currentBranch = 'branch_l'; // 'branch_l' = Plan P (Proliferate), 'branch_w' = Plan C (Consolidate)
    this.activeChartMode = 'capabilities'; // 'capabilities' or 'losses'
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
    this.chartDock = new ScenarioVisualizationDock('dock-chart-container');
    
    // Initialize Modal Fullscreen Chart
    this.modalChartDock = new ScenarioVisualizationDock('modal-chart-container', {
      isModal: true,
      width: 660,
      height: 310,
      margin: { top: 38, right: 30, bottom: 36, left: 48 },
      onYearSelect: (yr) => this.onModalYearSelect(yr)
    });

    this.setupScrollytelling();
    this.setupBranchSwitchers();
    this.setupChartSwitchers();
    this.setupModalInteractions();
    this.setupMobileDock();
    this.renderNumberedFootnotes();
    this.setupIntroCards();
    this.setupTopNav();
    this.setupFootnotePopovers();
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

    // Also clicking desktop chart opens modal for deep examination
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

    // Modal 2-Graph Switcher Tabs
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

    // Synchronize mode, branch, and year
    if (this.modalChartDock) {
      this.modalChartDock.setBranch(this.currentBranch);
      this.modalChartDock.setMode(this.activeChartMode);
      this.modalChartDock.setYear(this.currentYear);
      this.modalChartDock.render();
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

    // Update charts
    if (this.chartDock) this.chartDock.setMode(mode);
    if (this.modalChartDock) this.modalChartDock.setMode(mode);
  }

  setupTopNav() {
    const footnotesLink = document.getElementById('nav-footnotes-link');
    if (footnotesLink) {
      footnotesLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('footnotes');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // About link is now a direct anchor to ./about.html — no JS handler needed
  }


  setupIntroCards() {
    const buttons = document.querySelectorAll('.intro-card-btn');
    const box = document.getElementById('intro-expandable-box');
    const contentEl = document.getElementById('intro-box-content');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-card-id');
        
        if (this.activeIntroCardId === id) {
          // Toggle off
          this.activeIntroCardId = null;
          btn.classList.remove('active');
          if (box) box.style.display = 'none';
        } else {
          // Toggle on
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

    // Render common timeline items (2024 - 2031)
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

    // Render 2031 Decision Crossroads Section (Exact AI 2040 Flowchart Architecture)
    html += `
      <section class="story-chapter" id="story-choose-path" data-id="choose-path" data-year="2031.5">
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
        <article class="story-chapter branch-chapter" id="story-${item.id}" data-id="${item.id}" data-year="${item.year}">
          <h2 class="chapter-title">${item.title}</h2>
          <div class="chapter-body">
            ${item.storyHtml}
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
    this.setupFootnotePopovers();
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
    const lossText = `$${item.lossCentral} Billion / year`;
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

    // Mobile Bottom Floating Bar (Pass active item for exact dynamic title and year)
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

    const modalLoss = document.getElementById('modal-loss-exposure');
    if (modalLoss) modalLoss.textContent = lossText;

    const modalMilestone = document.getElementById('modal-key-milestone');
    if (modalMilestone) modalMilestone.textContent = item.keyMilestone || '';

    // Desktop Threat Summary Card
    const milestoneEl = document.getElementById('hud-key-milestone');
    if (milestoneEl) milestoneEl.textContent = item.keyMilestone || '';

    const lossEl = document.getElementById('hud-loss-exposure');
    if (lossEl) lossEl.textContent = lossText;

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

  setupFootnotePopovers() {
    const popover = document.getElementById('footnote-popover');
    const badgeEl = document.getElementById('footnote-popover-badge');
    const typeEl = document.getElementById('footnote-popover-type');
    const textEl = document.getElementById('footnote-popover-text');
    const sourcesEl = document.getElementById('footnote-popover-sources');

    if (!popover) return;

    const showNote = (refEl) => {
      clearTimeout(this.popoverHideTimeout);
      const noteNum = refEl.getAttribute('data-note');
      const noteData = FOOTNOTES_DATA[noteNum];
      if (!noteData) return;

      this.activeFootnoteRef = refEl;
      badgeEl.textContent = `#${noteData.number}`;
      typeEl.textContent = noteData.type;
      textEl.textContent = noteData.text;

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

      popover.style.display = 'flex';
      popover.setAttribute('aria-hidden', 'false');

      // Positioning logic
      const rect = refEl.getBoundingClientRect();
      const popRect = popover.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left = rect.left + window.scrollX - 20;
      let top = rect.bottom + window.scrollY + 6;

      // Avoid clipping right
      if (left + popRect.width > viewportWidth - 20) {
        left = viewportWidth - popRect.width - 24;
      }
      if (left < 16) left = 16;

      // Avoid clipping bottom
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

    document.querySelectorAll('.footnote-ref').forEach((ref) => {
      ref.addEventListener('mouseenter', () => showNote(ref));
      ref.addEventListener('mouseleave', scheduleHide);
      ref.addEventListener('focus', () => showNote(ref));
      ref.addEventListener('blur', scheduleHide);

      ref.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.activeFootnoteRef === ref && popover.style.display !== 'none') {
          popover.style.display = 'none';
          this.activeFootnoteRef = null;
        } else {
          showNote(ref);
        }
      });

      ref.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showNote(ref);
        } else if (e.key === 'Escape') {
          popover.style.display = 'none';
          this.activeFootnoteRef = null;
        }
      });
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

document.addEventListener('DOMContentLoaded', () => {
  window.app = new CybersecurityAppEngine();
});

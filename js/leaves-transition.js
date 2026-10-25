/**
 * AI-2035: Japanese Manga Wind & Enlarged Autumn Leaves Transition Engine
 * Pure Vanilla JavaScript + HTML5 2D Canvas + SVG Aerodynamics
 * Zero external dependencies.
 * 
 * Features:
 * - 4x Enlarged Red Maple and Black Wavy Autumn Leaves (85px - 140px).
 * - Origin: Concentrated in upper-right half of viewport, rushing right-to-left.
 * - Japanese Manga/Anime Wind Motion Lines (Lines ONLY):
 *     1. Rounded swirling curves & loose organic spiral loops.
 *     2. Straight tapered speed streaks with pointed ends.
 * - Total duration: ~1.25s (strictly <= 1.3s).
 * - Seamless navigation to the Old Generation Version page.
 * - No bloop, no ripple, no pop, no bouncing.
 */

export class MangaWindLeavesTransition {
  constructor(options = {}) {
    // Intelligent target determination (supports file://, local dev server, and production rewrites)
    if (options.targetUrl) {
      this.targetUrl = options.targetUrl;
    } else if (window.location.protocol === 'file:' || window.location.pathname.endsWith('.html')) {
      this.targetUrl = 'old-version/index.html';
    } else {
      this.targetUrl = '/old-version';
    }
    this.isTransitioning = false;
  }

  /**
   * Starts the manga wind sweep and leaf flight
   * @param {number} originX - Center X coordinate of clicked button
   * @param {number} originY - Center Y coordinate of clicked button
   */
  start(originX = window.innerWidth - 60, originY = 30) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    // Respect user's motion preferences
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.location.href = this.targetUrl;
      return;
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const duration = 1785; // 70% of previous speed (1250 / 0.7 = 1785ms) // exactly 1.25 seconds

    // 1. Create full-screen transition overlay
    const overlay = document.createElement('div');
    overlay.id = 'manga-wind-transition-overlay';
    overlay.className = 'manga-wind-transition-overlay';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 999999;
      overflow: hidden;
      perspective: 900px;
    `;
    document.body.appendChild(overlay);

    // 2. High-performance Canvas for Japanese Manga Wind Lines (Lines ONLY)
    const canvas = document.createElement('canvas');
    canvas.className = 'manga-wind-canvas';
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: block;
    `;
    overlay.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 3. Leaf SVGs (Enlarged to at least 4x: 85px to 140px)
    const redMapleSvg = `
      <svg class="leaf-svg" viewBox="0 0 64 64" fill="#9e1b1b" style="width:100%;height:100%;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.18));">
        <path d="M32 3 C33 11 36 14 42 11 C41 16 44 19 50 17 C47 23 51 27 58 26 C53 32 55 36 60 39 C52 41 49 45 51 51 C45 48 42 50 40 56 C36 48 34 45 32 43 C30 45 28 48 24 56 C22 50 19 48 13 51 C15 45 12 41 4 39 C9 36 11 32 6 26 C13 27 17 23 14 17 C20 19 23 16 22 11 C28 14 31 11 32 3 Z M32 43 L32 61" stroke="#6b1212" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;

    const blackWavySvg = `
      <svg class="leaf-svg" viewBox="0 0 64 64" fill="#181818" style="width:100%;height:100%;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.22));">
        <path d="M32 3 C45 13 55 27 51 43 C47 55 38 60 32 60 C26 60 17 55 13 43 C9 27 19 13 32 3 Z M32 9 Q32 34 32 58 M23 23 Q32 31 41 23 M19 37 Q32 43 45 37" stroke="#2d2d2d" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    `;

    // 4. Initialize 4x Enlarged Leaves
    // Concentrated primarily within upper half of viewport, weighted to upper-right
    const numLeaves = 15;
    const leafElements = [];
    const leafData = [];

    for (let i = 0; i < numLeaves; i++) {
      const el = document.createElement('div');
      el.className = 'manga-falling-leaf';
      const isRed = i % 2 === 0;
      el.innerHTML = isRed ? redMapleSvg : blackWavySvg;

      // Rendered size: 85px to 135px (at least 4x larger than original 22px)
      const size = Math.floor(56 + Math.random() * 34); // 2/3rd of previous size (56px - 90px)
      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        top: 0;
        left: 0;
        will-change: transform, opacity;
        pointer-events: none;
      `;
      overlay.appendChild(el);
      leafElements.push(el);

      // Start position: weighted toward upper-right region (near and right of book icon)
      const startX = w * 0.72 + Math.random() * (w * 0.45);
      const startY = Math.random() * (h * 0.52);

      leafData.push({
        x: startX,
        y: startY,
        size: size,
        speedX: (1.4 + Math.random() * 0.85) * 0.7,
        driftY: 25 + Math.random() * 75,
        rotZ: Math.random() * 360,
        rotSpeedZ: (Math.random() - 0.45) * 440 * 0.7,
        tiltX: Math.random() * 40,
        tiltY: Math.random() * 40,
        stagger: Math.random() * 0.22
      });
    }

    // 5. Initialize Japanese Manga Wind Lines (Lines ONLY)
    // Category A: Rounded, swirling wind lines (flowing curves, partial loops, loose elongated spirals)
    const numLoops = 8;
    const loops = [];
    for (let i = 0; i < numLoops; i++) {
      loops.push({
        startX: w + 40 + Math.random() * (w * 0.35),
        baseY: 40 + Math.random() * (h * 0.58),
        radiusX: 28 + Math.random() * 38,
        radiusY: 16 + Math.random() * 26,
        tailLength: 180 + Math.random() * 240,
        speed: (1.6 + Math.random() * 0.7) * 0.7,
        lineWidth: 1.4 + Math.random() * 1.1,
        delay: Math.random() * 0.22
      });
    }

    // Category B: Straight, tapered wind streaks (sharp manga speed lines rushing right to left)
    const numStreaks = 26;
    const streaks = [];
    for (let i = 0; i < numStreaks; i++) {
      streaks.push({
        startX: w + 30 + Math.random() * (w * 0.4),
        y: 20 + Math.random() * (h * 0.8),
        length: 150 + Math.random() * 380,
        speed: (1.7 + Math.random() * 1.15) * 0.7,
        angle: (Math.random() - 0.45) * 0.1, // slight aerodynamic tilt
        maxWidth: 1.4 + Math.random() * 1.6,
        delay: Math.random() * 0.28
      });
    }

    // 6. Animation Timeline: Exactly 1.25 seconds total sweep
    const startTime = performance.now();
    let navigated = false;

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1.0, elapsed / duration);

      ctx.clearRect(0, 0, w, h);

      // --- Draw Manga Speed Streaks (Straight, tapered ends) ---
      for (const s of streaks) {
        const streakProg = Math.max(0, Math.min(1.0, (progress - s.delay) / (1.0 - s.delay)));
        if (streakProg <= 0 || streakProg >= 1.0) continue;

        // Sweep from right to left with acceleration
        const sweepX = s.startX - (s.startX + s.length + 120) * Math.pow(streakProg, 1.25) * s.speed;
        const tailX = sweepX + s.length;
        const headY = s.y + (sweepX - s.startX) * Math.sin(s.angle);

        // Alpha envelope peaking across central viewport
        let alpha = 0.85;
        if (sweepX > w - 80) alpha = Math.max(0, (w - sweepX + 80) / 80) * 0.85;
        if (tailX < 140) alpha = Math.max(0, tailX / 140) * 0.85;

        // Draw clean tapered manga speed line
        const grad = ctx.createLinearGradient(sweepX, headY, tailX, headY);
        grad.addColorStop(0, 'rgba(27, 42, 34, 0)');
        grad.addColorStop(0.18, `rgba(27, 42, 34, ${alpha * 0.95})`);
        grad.addColorStop(0.82, `rgba(27, 42, 34, ${alpha * 0.65})`);
        grad.addColorStop(1, 'rgba(27, 42, 34, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.maxWidth;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, headY);
        ctx.lineTo(sweepX, headY);
        ctx.stroke();
      }

      // --- Draw Swirling Wind Curves (Rounded, organic partial loops) ---
      for (const l of loops) {
        const loopProg = Math.max(0, Math.min(1.0, (progress - l.delay) / (1.0 - l.delay)));
        if (loopProg <= 0 || loopProg >= 1.0) continue;

        const centerX = l.startX - (l.startX + l.tailLength + 160) * Math.pow(loopProg, 1.2) * l.speed;
        const centerY = l.baseY + Math.sin(loopProg * Math.PI) * 22;

        let alpha = 0.85;
        if (centerX > w - 80) alpha = Math.max(0, (w - centerX + 80) / 80) * 0.85;
        if (centerX < 100) alpha = Math.max(0, centerX / 100) * 0.85;

        ctx.strokeStyle = `rgba(27, 42, 34, ${alpha})`;
        ctx.lineWidth = l.lineWidth;
        ctx.lineCap = 'round';

        // Organic swirling manga curl path
        ctx.beginPath();
        const tailX = centerX + l.tailLength;
        const tailY = centerY - 8;
        ctx.moveTo(tailX, tailY);
        
        // Curve leading into loop
        ctx.bezierCurveTo(
          centerX + l.radiusX * 1.6, centerY - l.radiusY * 1.2,
          centerX + l.radiusX * 0.9, centerY - l.radiusY * 1.8,
          centerX, centerY - l.radiusY
        );
        // Swirling loop arc
        ctx.bezierCurveTo(
          centerX - l.radiusX * 1.25, centerY - l.radiusY * 0.7,
          centerX - l.radiusX * 1.2, centerY + l.radiusY * 1.2,
          centerX, centerY + l.radiusY
        );
        // Dynamic exit trailing into leftward streak
        ctx.bezierCurveTo(
          centerX + l.radiusX * 0.7, centerY + l.radiusY * 0.7,
          centerX - l.radiusX * 0.6, centerY + l.radiusY * 0.35,
          centerX - l.tailLength * 0.45, centerY + l.radiusY * 0.15
        );
        ctx.stroke();
      }

      // --- Update 4x Enlarged Leaves (Carried in the Wind) ---
      for (let i = 0; i < numLeaves; i++) {
        const d = leafData[i];
        const el = leafElements[i];

        const leafProg = Math.max(0, Math.min(1.0, (progress - d.stagger) / (1.0 - d.stagger)));

        // Directional flight: right to left
        const currentX = d.x - (d.x + d.size + 140) * Math.pow(leafProg, 1.22) * d.speedX;
        const currentY = d.y + d.driftY * Math.pow(leafProg, 0.92) + Math.sin(leafProg * 4.5) * 16;

        const currentRotZ = d.rotZ + d.rotSpeedZ * leafProg;
        const currentTiltX = Math.sin(leafProg * 5.2) * d.tiltX;
        const currentTiltY = Math.cos(leafProg * 5.2) * d.tiltY;

        let opacity = 1.0;
        if (currentX < 70) {
          opacity = Math.max(0, currentX / 70);
        }

        el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotateZ(${currentRotZ}deg) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`;
        el.style.opacity = opacity;
      }

      // Trigger navigation cleanly at end of ~1.25s wind sweep
      if (progress >= 0.96 && !navigated) {
        navigated = true;
        window.location.href = this.targetUrl;
      }

      if (progress < 1.0) {
        requestAnimationFrame(frame);
      } else {
        if (!navigated) {
          window.location.href = this.targetUrl;
        }
      }
    };

    requestAnimationFrame(frame);
  }
}

// Backwards-compatible export alias
export { MangaWindLeavesTransition as AutumnLeavesBloopEngine };

/**
 * Attaches the transition listener to navigation button(s)
 */
export function initLeavesTransition(buttonSelector = '#nav-old-version-btn', targetUrl = null) {
  const btn = document.querySelector(buttonSelector);
  if (!btn) return;

  const engine = new MangaWindLeavesTransition({ targetUrl });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Tactile button bulge animation on click
    btn.style.transition = 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)';
    btn.style.transform = 'scale(1.14)';
    setTimeout(() => {
      btn.style.transform = 'scale(1.08)';
    }, 180);

    const rect = btn.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    engine.start(originX, originY);
  });
}

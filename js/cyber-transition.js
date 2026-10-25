/**
 * AI-2035: Tron Cybernetic Evolution Transition Engine
 * Pure Vanilla JavaScript + HTML5 Canvas (Hardware-Accelerated 60 FPS)
 * Zero external dependencies. Zero audio.
 * Creates an instantaneous deep bluish-green metal wiring and circuit trace evolution effect.
 */

export class CyberneticTransitionEngine {
  constructor(canvasId = 'cyber-transition-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = canvasId;
      document.body.appendChild(this.canvas);
    }
    this.ctx = this.canvas.getContext('2d');
    this.animId = null;
    this.isRunning = false;
    this.setupCanvas();
    window.addEventListener('resize', () => this.resize());
  }

  setupCanvas() {
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '999999';
    this.canvas.style.display = 'none';
    this.resize();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  /**
   * Triggers the 750ms Tron Cybernetic Evolution
   * @param {number} originX - Starting X coordinate of transition (button center)
   * @param {number} originY - Starting Y coordinate of transition (button center)
   * @param {function} onMidpoint - Callback fired at peak mutation (375ms) to swap content
   */
  start(originX = window.innerWidth - 60, originY = 30, onMidpoint = null) {
    if (this.isRunning) return;
    this.isRunning = true;
    this.resize();
    this.canvas.style.display = 'block';

    const duration = 750; // Total duration in ms
    const startTime = performance.now();
    let midpointFired = false;

    // Generate circuit wiring traces
    const traces = this.generateCircuitTraces(originX, originY);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1.0);

      // Midpoint trigger: swap underlying content at peak digital pulse
      if (progress >= 0.5 && !midpointFired) {
        midpointFired = true;
        if (typeof onMidpoint === 'function') {
          onMidpoint();
        }
      }

      this.ctx.clearRect(0, 0, this.width, this.height);

      // Render the Tron cybernetic aesthetic
      this.renderFrame(progress, originX, originY, traces);

      if (progress < 1.0) {
        this.animId = requestAnimationFrame(animate);
      } else {
        // Transition finished
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.canvas.style.display = 'none';
        this.isRunning = false;
      }
    };

    this.animId = requestAnimationFrame(animate);
  }

  generateCircuitTraces(startX, startY) {
    const traces = [];
    const numTraces = 36;
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];

    for (let i = 0; i < numTraces; i++) {
      const points = [{ x: startX, y: startY }];
      let currX = startX;
      let currY = startY;
      const segments = 3 + Math.floor(Math.random() * 4);

      // Predominantly radiate downward and to the left across the viewport
      let preferredAngle = 180 + (Math.random() * 120 - 40); // 140 deg to 260 deg

      for (let s = 0; s < segments; s++) {
        // Pick 45-degree or 90-degree orthogonal branch
        const dist = 60 + Math.random() * 160;
        const rad = (preferredAngle * Math.PI) / 180;
        currX += Math.cos(rad) * dist;
        currY += Math.sin(rad) * dist;
        points.push({ x: currX, y: currY });

        // Shift angle by 45 or 90 deg
        preferredAngle += (Math.random() > 0.5 ? 45 : -45);
      }

      traces.push({
        points,
        color: i % 3 === 0 ? '#00ffcc' : '#00e5ff',
        width: i % 4 === 0 ? 2.5 : 1.4,
        speed: 0.8 + Math.random() * 0.4
      });
    }
    return traces;
  }

  renderFrame(progress, originX, originY, traces) {
    const ctx = this.ctx;

    // Intensity envelope: climbs to 1.0 at 0.5, then drops to 0 at 1.0
    const intensity = progress < 0.5 ? progress * 2 : (1.0 - progress) * 2;

    // 1. Cybernetic Deep Bluish-Green Gradient Background Wash
    const bgGrad = ctx.createRadialGradient(
      originX, originY, 20,
      originX, originY, Math.max(this.width, this.height) * 1.2
    );
    bgGrad.addColorStop(0, `rgba(0, 229, 255, ${0.35 * intensity})`);
    bgGrad.addColorStop(0.3, `rgba(4, 28, 36, ${0.45 * intensity})`);
    bgGrad.addColorStop(1, `rgba(2, 14, 20, ${0.60 * intensity})`);

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // 2. High-Tech Orthogonal Grid Overlay
    ctx.save();
    ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * intensity})`;
    ctx.lineWidth = 1;
    const gridSize = 40;
    const gridOffsetX = (progress * 80) % gridSize;

    ctx.beginPath();
    for (let x = gridOffsetX; x < this.width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
    }
    for (let y = 0; y < this.height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
    }
    ctx.stroke();
    ctx.restore();

    // 3. Tron Metal Wiring & Neon Circuit Bus Traces
    ctx.save();
    for (const trace of traces) {
      const traceProgress = Math.min(progress * trace.speed * 2, 1.0);
      if (traceProgress <= 0) continue;

      ctx.beginPath();
      ctx.strokeStyle = trace.color;
      ctx.lineWidth = trace.width;
      ctx.shadowColor = trace.color;
      ctx.shadowBlur = 10 * intensity;
      ctx.globalAlpha = intensity;

      const totalPoints = trace.points.length;
      const currentSegments = (totalPoints - 1) * traceProgress;
      const fullSegments = Math.floor(currentSegments);
      const partialSegment = currentSegments - fullSegments;

      ctx.moveTo(trace.points[0].x, trace.points[0].y);

      for (let i = 1; i <= fullSegments; i++) {
        ctx.lineTo(trace.points[i].x, trace.points[i].y);
      }

      if (fullSegments < totalPoints - 1 && partialSegment > 0) {
        const p1 = trace.points[fullSegments];
        const p2 = trace.points[fullSegments + 1];
        const interpX = p1.x + (p2.x - p1.x) * partialSegment;
        const interpY = p1.y + (p2.y - p1.y) * partialSegment;
        ctx.lineTo(interpX, interpY);

        // Leading head node (glowing pulse dot)
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.arc(interpX, interpY, 2.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.stroke();
      }

      // Circuit node pads at vertices
      for (let i = 0; i <= fullSegments; i++) {
        const pt = trace.points[i];
        ctx.beginPath();
        ctx.fillStyle = trace.color;
        ctx.arc(pt.x, pt.y, 2.0, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();

    // 4. Horizontal Holographic Scanline Sweep
    const scanlineY = progress * this.height * 1.2;
    const scanGrad = ctx.createLinearGradient(0, scanlineY - 40, 0, scanlineY + 40);
    scanGrad.addColorStop(0, 'rgba(0, 229, 255, 0)');
    scanGrad.addColorStop(0.5, `rgba(0, 255, 204, ${0.45 * intensity})`);
    scanGrad.addColorStop(1, 'rgba(0, 229, 255, 0)');

    ctx.fillStyle = scanGrad;
    ctx.fillRect(0, scanlineY - 40, this.width, 80);

    // Glowing core scanline
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 * intensity})`;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur = 12;
    ctx.moveTo(0, scanlineY);
    ctx.lineTo(this.width, scanlineY);
    ctx.stroke();
  }
}

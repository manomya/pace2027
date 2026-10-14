/**
 * PACE-2027 Authentic Natural Voronoi Interlocking Stone Preloader
 * ─────────────────────────────────────────────────────────────────────────────
 * Key Requirements:
 * 1. ZERO RED/COLORED BACKGROUND:
 *    - The overlay background is neutral dark charcoal stone cleft (#141619).
 *    - Absolutely NO red/maroon or jarring background colors.
 *    - Once deconstruction starts, background is transparent so the real website
 *      is directly revealed behind the dropping stones.
 * 2. SEAMLESS INTERLOCKING STONES (TIGHT EDGE-TO-EDGE FIT):
 *    - Strict Voronoi tessellation where stones share exact identical boundary
 *      vertices and edges without chipping gaps.
 *    - Stones fit together like a precision hand-laid polygonal stone wall.
 *    - Thin realistic stone joints (#181A1F) delineate adjoining stones.
 * 3. MULTI-SIDED NATURAL STONE FACES:
 *    - True organic polygons (5 to 9 natural sides).
 *    - NO artificial lines connecting to centers.
 *    - Beautiful natural gray stone gradient with top-left ambient sunlight.
 * 4. CASCADE GRAVITY DECONSTRUCTION:
 *    - Cascades top-down under gravity ($g \cdot t^2$) with independent rotations
 *      and gentle lateral drift, cleanly uncovering the PACE-2027 website.
 */
(function PaceInterlockingStonePreloader() {
  'use strict';

  // Guard: play once per browser session
  if (sessionStorage.getItem('pace_preloader_shown')) {
    const el = document.getElementById('pace-gravel-preloader');
    if (el) el.remove();
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Authentic mineral gray stone palette (basalt, slate, medium granite, trap rock, quartzite)
  const STONE_PALETTES = [
    { base: '#393C42', stroke: '#14161A', highlight: '#555B66' }, // Basalt Slate
    { base: '#464A53', stroke: '#181A1F', highlight: '#666C7A' }, // Dark Granite
    { base: '#515660', stroke: '#1F2228', highlight: '#737A88' }, // Medium Stone Gray
    { base: '#5E646E', stroke: '#262930', highlight: '#818896' }, // Natural Crushed Stone
    { base: '#6B717D', stroke: '#2F333C', highlight: '#8F96A5' }, // Light Quartzite
    { base: '#3F434C', stroke: '#16181D', highlight: '#5E6370' }, // Charcoal Trap Rock
    { base: '#4C515B', stroke: '#1B1E24', highlight: '#6E7482' }, // Riverbed Slate
    { base: '#575C67', stroke: '#22252C', highlight: '#7A8190' }, // Dolomite Aggregate
    { base: '#747A87', stroke: '#353943', highlight: '#9CA3B3' }  // Light Limestone
  ];

  // Lock scrolling during preloader
  document.documentElement.style.overflow = 'hidden';
  if (document.body) document.body.style.overflow = 'hidden';

  // Obtain or create preloader overlay
  let overlay = document.getElementById('pace-gravel-preloader');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'pace-gravel-preloader';
    if (document.body) {
      document.body.insertBefore(overlay, document.body.firstChild);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.insertBefore(overlay, document.body.firstChild);
      });
    }
  }

  // Failsafe safety timeout
  const failsafeTimeout = setTimeout(() => {
    cleanup();
  }, 7500);

  function cleanup() {
    clearTimeout(failsafeTimeout);
    sessionStorage.setItem('pace_preloader_shown', '1');
    document.documentElement.style.overflow = '';
    if (document.body) document.body.style.overflow = '';
    if (overlay && overlay.parentNode) {
      overlay.style.transition = 'opacity 0.4s ease-out';
      overlay.style.opacity = '0';
      setTimeout(() => {
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 420);
    }
  }

  if (prefersReducedMotion) {
    window.addEventListener('load', () => {
      setTimeout(cleanup, 600);
    });
    return;
  }

  function initInterlockingStones() {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    overlay.innerHTML = '';

    const canvas = document.createElement('canvas');
    canvas.id = 'pace-gravel-vector-canvas';
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:10;';
    overlay.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Architectural Monogram Keystone Plaque in center
    const plaque = document.createElement('div');
    plaque.id = 'gravel-preloader-plaque';
    plaque.style.cssText = [
      'position: absolute',
      'top: 50%',
      'left: 50%',
      'transform: translate(-50%, -50%)',
      'z-index: 50',
      'background: #FBF4E4',
      'border: 3px solid #5E0F1E',
      'outline: 2px solid #C9A227',
      'outline-offset: 4px',
      'padding: 20px 36px',
      'border-radius: 4px',
      'box-shadow: 0 20px 50px rgba(0,0,0,0.5)',
      'text-align: center',
      'pointer-events: none',
      'user-select: none',
      'transition: opacity 0.35s ease, transform 0.35s ease'
    ].join(';');
    plaque.innerHTML = `
      <div style="font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:600;letter-spacing:2.8px;color:#C9A227;text-transform:uppercase;margin-bottom:3px;">Poornima University, Jaipur</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:32px;font-weight:700;letter-spacing:2px;color:#5E0F1E;line-height:1.1;">PACE – 2027</div>
      <div style="font-family:'Space Grotesk',sans-serif;font-size:9.5px;letter-spacing:2px;color:#5E0F1E;text-transform:uppercase;margin-top:5px;font-weight:500;">International Civil Engineering Conference</div>
    `;
    overlay.appendChild(plaque);

    // ─────────────────────────────────────────────────────────────────
    // STRICT VORONOI TESSELLATION (PERFECT INTERLOCKING FIT)
    // ─────────────────────────────────────────────────────────────────
    const stoneSpacing = Math.max(110, Math.min(160, Math.floor(W / 11)));
    const cols = Math.ceil(W / stoneSpacing);
    const rows = Math.ceil(H / stoneSpacing);

    // Jittered seed distribution
    const sites = [];
    for (let r = -2; r <= rows + 2; r++) {
      for (let c = -2; c <= cols + 2; c++) {
        const xOffset = (r % 2 === 1) ? 0.5 : 0;
        const x = (c + xOffset + (Math.random() - 0.5) * 0.75) * (W / cols);
        const y = (r + 0.5 + (Math.random() - 0.5) * 0.75) * (H / rows);
        sites.push({ x, y });
      }
    }

    // Sutherland-Hodgman convex polygon clipper
    function clipPolygon(poly, a, b, c) {
      if (poly.length === 0) return [];
      const res = [];
      for (let i = 0; i < poly.length; i++) {
        const cur = poly[i];
        const next = poly[(i + 1) % poly.length];
        const d1 = a * cur.x + b * cur.y + c;
        const d2 = a * next.x + b * next.y + c;

        if (d1 <= 0) {
          res.push(cur);
          if (d2 > 0) {
            const t = d1 / (d1 - d2);
            res.push({
              x: cur.x + t * (next.x - cur.x),
              y: cur.y + t * (next.y - cur.y)
            });
          }
        } else if (d2 <= 0) {
          const t = d1 / (d1 - d2);
          res.push({
            x: cur.x + t * (next.x - cur.x),
            y: cur.y + t * (next.y - cur.y)
          });
        }
      }
      return res;
    }

    // Unified screen rectangle bounds [0, 0, W, H]
    const initialBounds = [
      { x: 0, y: 0 },
      { x: W, y: 0 },
      { x: W, y: H },
      { x: 0, y: H }
    ];

    const stones = [];

    // Calculate Voronoi cells without corner gaps so stones fit edge-to-edge
    for (let i = 0; i < sites.length; i++) {
      const s = sites[i];
      if (s.x < -stoneSpacing || s.x > W + stoneSpacing || s.y < -stoneSpacing || s.y > H + stoneSpacing) {
        continue;
      }

      let cellPoly = initialBounds.map(pt => ({ x: pt.x, y: pt.y }));

      // Find nearby neighbors to compute exact bisectors
      const neighbors = [];
      for (let j = 0; j < sites.length; j++) {
        if (i === j) continue;
        const other = sites[j];
        const dx = other.x - s.x;
        const dy = other.y - s.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < (stoneSpacing * 3.2) * (stoneSpacing * 3.2)) {
          neighbors.push({ other, dx, dy, distSq });
        }
      }

      neighbors.sort((a, b) => a.distSq - b.distSq);

      for (let k = 0; k < neighbors.length; k++) {
        const n = neighbors[k];
        const midX = (s.x + n.other.x) * 0.5;
        const midY = (s.y + n.other.y) * 0.5;
        const a = n.dx;
        const b = n.dy;
        const c = -(a * midX + b * midY);

        cellPoly = clipPolygon(cellPoly, a, b, c);
        if (cellPoly.length === 0) break;
      }

      // Valid natural polygon (strictly preserves shared boundary edges with neighbors)
      if (cellPoly.length >= 4) {
        // Calculate centroid
        let cx = 0, cy = 0;
        for (let p = 0; p < cellPoly.length; p++) {
          cx += cellPoly[p].x;
          cy += cellPoly[p].y;
        }
        cx /= cellPoly.length;
        cy /= cellPoly.length;

        // Relative polygon vertices around centroid (clean shared-edge Voronoi faces)
        const relPoly = cellPoly.map(pt => ({
          x: pt.x - cx,
          y: pt.y - cy
        }));

        const palette = STONE_PALETTES[Math.floor(Math.random() * STONE_PALETTES.length)];

        // Top-to-bottom falling cascade delay
        const rowFraction = Math.max(0, Math.min(1, cy / H));
        const colFraction = Math.max(0, Math.min(1, cx / W));
        const organicNoise = Math.sin(cx * 0.015) * 0.12 + (Math.random() * 0.18);
        const dropDelay = (rowFraction * 0.58) + organicNoise;

        stones.push({
          cx: cx,
          cy: cy,
          baseX: cx,
          baseY: cy,
          x: cx,
          y: cy,
          poly: relPoly,
          palette: palette,
          rotation: 0,
          currentRot: 0,
          rotSpeed: (Math.random() - 0.5) * (1.8 + Math.random() * 2.8),
          vx: (Math.random() - 0.5) * 60 + (colFraction - 0.5) * 45,
          vy: 80 + Math.random() * 120,
          gravity: 1650 + Math.random() * 600,
          dropDelay: Math.max(0, dropDelay)
        });
      }
    }

    // Sort stones by vertical position
    stones.sort((a, b) => a.baseY - b.baseY);

    // Initial render and frame update
    function renderStones(timeElapsed) {
      ctx.clearRect(0, 0, W, H);

      let allFallen = true;

      for (let i = 0; i < stones.length; i++) {
        const s = stones[i];

        if (timeElapsed >= s.dropDelay) {
          const t = timeElapsed - s.dropDelay;
          s.y = s.baseY + s.vy * t + 0.5 * s.gravity * t * t;
          s.x = s.baseX + s.vx * t;
          s.currentRot = s.rotSpeed * t;
        } else {
          s.y = s.baseY;
          s.x = s.baseX;
          s.currentRot = 0;
        }

        if (s.y < H + 220) {
          allFallen = false;

          ctx.save();
          ctx.translate(s.x, s.y);
          if (s.currentRot !== 0) {
            ctx.rotate(s.currentRot);
          }

          const pts = s.poly;

          // 1. Natural Interlocking Stone Polygon
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let p = 1; p < pts.length; p++) {
            ctx.lineTo(pts[p].x, pts[p].y);
          }
          ctx.closePath();

          // Organic directional sunlight gradient across stone surface
          const minX = Math.min(...pts.map(p => p.x));
          const minY = Math.min(...pts.map(p => p.y));
          const maxX = Math.max(...pts.map(p => p.x));
          const maxY = Math.max(...pts.map(p => p.y));

          const grad = ctx.createLinearGradient(minX, minY, maxX, maxY);
          grad.addColorStop(0, s.palette.highlight);
          grad.addColorStop(0.35, s.palette.base);
          grad.addColorStop(1, s.palette.stroke);

          ctx.fillStyle = grad;
          ctx.fill();

          // 2. Realistic interlocking cleft joint line
          ctx.strokeStyle = '#14161A';
          ctx.lineWidth = 2.0;
          ctx.lineJoin = 'round';
          ctx.stroke();

          // 3. Subtle illuminated top-left stone rim
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          ctx.lineTo(pts[1].x, pts[1].y);
          ctx.strokeStyle = s.palette.highlight;
          ctx.lineWidth = 1.0;
          ctx.stroke();

          ctx.restore();
        }
      }

      return allFallen;
    }

    // Render frame 0 immediately (seamless hand-laid interlocking stones covering 100% of viewport)
    renderStones(0);

    // Gravity drop animation once page finishes loading
    function startFallingAnimation() {
      // Immediately clear overlay background so website is visible behind falling stones
      overlay.style.backgroundColor = 'transparent';

      if (plaque) {
        plaque.style.opacity = '0';
        plaque.style.transform = 'translate(-50%, -65%) scale(0.92)';
      }

      let animStartTime = null;

      function step(now) {
        if (!animStartTime) animStartTime = now;
        const elapsed = (now - animStartTime) / 1000;

        const allFallen = renderStones(elapsed);

        if (allFallen || elapsed > 2.6) {
          cleanup();
        } else {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    if (document.readyState === 'complete') {
      setTimeout(startFallingAnimation, 550);
    } else {
      window.addEventListener('load', () => {
        setTimeout(startFallingAnimation, 450);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInterlockingStones);
  } else {
    initInterlockingStones();
  }

})();

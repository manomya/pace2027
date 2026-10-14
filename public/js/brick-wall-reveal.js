/**
 * PACE-2027 Architectural Brick Wall Sponsor Reveal
 * Programmatic masonry construction with GSAP & ScrollTrigger scroll-driven deconstruction
 */

(function () {
  'use strict';

  // Palette of varied terracotta, burnt-orange, and weathered-red tones
  const BRICK_PALETTE = [
    '#9E3825', // Classic Terracotta
    '#882B1C', // Dark Clay Red
    '#B54D34', // Warm Ochre Red
    '#722217', // Deep Kiln Red
    '#AB432D', // Burnt Orange Clay
    '#BF573B', // Sun-baked Indian Adobe
    '#641C13', // Aged Roman Brick
    '#933320'  // Weathered Brick
  ];

  let currentTimeline = null;
  let dustCanvas = null;
  let dustCtx = null;
  let dustParticles = [];
  let isDustRunning = false;
  let lastWidthCategory = null;
  let isInitialized = false;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (!isInitialized) {
        isInitialized = true;
        initBrickWallReveal();
      }
    });
  } else {
    isInitialized = true;
    initBrickWallReveal();
  }
  window.addEventListener('load', () => {
    // Refresh ScrollTrigger once images finish loading
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
  window.initBrickWallReveal = initBrickWallReveal;

  function initBrickWallReveal() {
    const stage = document.getElementById('brick-stage');
    const matrix = document.getElementById('brick-wall-matrix');
    if (!stage || !matrix) return;

    // Wait for GSAP and ScrollTrigger
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded. Retrying in 100ms...');
      setTimeout(initBrickWallReveal, 100);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    initDustCanvas();
    buildAndAnimateWall();

    // Cue button click handler for smooth inspection/play
    const cueBtn = document.getElementById('cue-pill-btn');
    if (cueBtn && !cueBtn.dataset.bound) {
      cueBtn.dataset.bound = 'true';
      cueBtn.addEventListener('click', () => {
        const stageWrapper = document.querySelector('.brick-stage-wrapper');
        if (stageWrapper) {
          const rect = stageWrapper.getBoundingClientRect();
          const targetY = window.pageYOffset + rect.top - 80;
          window.scrollTo({ top: targetY + 300, behavior: 'smooth' });
        }
      });
    }

    // Ensure dimensions adjust after sponsor logo images load
    const backdrop = document.getElementById('brick-sponsor-backdrop');
    if (backdrop) {
      const imgs = backdrop.querySelectorAll('img');
      imgs.forEach(img => {
        if (!img.complete) {
          img.addEventListener('load', () => {
            const currentH = backdrop.offsetHeight;
            if (matrix && currentH > 100) {
              matrix.style.height = currentH + 'px';
            }
            ScrollTrigger.refresh();
          });
        }
      });
    }

    // Debounced Resize Listener
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const cat = getWidthCategory();
        if (cat !== lastWidthCategory) {
          buildAndAnimateWall();
        } else {
          const bd = document.getElementById('brick-sponsor-backdrop');
          if (bd && matrix) {
            matrix.style.height = bd.offsetHeight + 'px';
          }
          ScrollTrigger.refresh();
        }
      }, 250);
    });
  }

  function getWidthCategory() {
    const w = window.innerWidth;
    if (w < 600) return 'mobile';
    if (w < 980) return 'tablet';
    return 'desktop';
  }

  function buildAndAnimateWall() {
    const stage = document.getElementById('brick-stage');
    const matrix = document.getElementById('brick-wall-matrix');
    const backdrop = document.getElementById('brick-sponsor-backdrop');
    const stageWrapper = document.querySelector('.brick-stage-wrapper');
    const progressBar = document.getElementById('brick-meter-progress');
    const statusText = document.getElementById('brick-meter-text');

    if (!stage || !matrix || !backdrop || !stageWrapper) return;

    lastWidthCategory = getWidthCategory();

    // Clean up existing timeline and ScrollTriggers
    if (currentTimeline) {
      currentTimeline.kill();
      currentTimeline = null;
    }
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger === stageWrapper || st.vars.trigger === stageWrapper) {
        st.revert();
        st.kill();
      }
    });

    // Reset backdrop state
    gsap.set(backdrop, { clearProps: 'all' });
    gsap.set(matrix, { clearProps: 'all' });

    // Sync matrix height exactly with backdrop
    const backdropH = Math.max(500, backdrop.offsetHeight);
    matrix.style.height = backdropH + 'px';
    matrix.style.display = 'flex';
    matrix.style.opacity = '1';
    matrix.style.visibility = 'visible';

    // Determine grid resolution
    const category = getWidthCategory();
    let rows, cols;
    if (category === 'mobile') {
      rows = 13;
      cols = 7;
    } else if (category === 'tablet') {
      rows = 11;
      cols = 11;
    } else {
      rows = 11;
      // Scale columns for wide/full-width viewports
      cols = window.innerWidth >= 1400 ? 17 : 14;
    }

    const rowHeight = Math.max(38, Math.floor(backdropH / rows));

    // Clear existing bricks
    matrix.innerHTML = '';

    const allBricks = [];
    const centerRow = (rows - 1) / 2;
    const centerCol = (cols - 1) / 2;

    // Build Masonry Grid with authentic Running Bond (staggered alternate rows)
    for (let r = 0; r < rows; r++) {
      const rowEl = document.createElement('div');
      rowEl.className = 'brick-row';
      rowEl.style.height = rowHeight + 'px';
      rowEl.style.minHeight = rowHeight + 'px';
      rowEl.style.display = 'flex';
      rowEl.style.width = '100%';

      const isOddRow = (r % 2 === 1);
      const totalColsInRow = isOddRow ? cols + 1 : cols;

      for (let c = 0; c < totalColsInRow; c++) {
        const brick = document.createElement('div');
        brick.className = 'brick';
        brick.style.display = 'block';
        brick.style.height = '100%';
        brick.style.minHeight = (rowHeight - 4) + 'px';

        // Stagger logic: odd rows start and end with half-bricks
        const isHalf = isOddRow && (c === 0 || c === totalColsInRow - 1);
        if (isHalf) {
          brick.classList.add('half-brick');
          brick.style.flex = '0.5 1 0';
        } else {
          brick.style.flex = '1 1 0';
        }

        // Color selection: balanced distribution of terracotta tones
        const colorIdx = (r * 4 + c * 7 + (isHalf ? 3 : 0)) % BRICK_PALETTE.length;
        const color = BRICK_PALETTE[colorIdx];
        brick.style.backgroundColor = color;

        // Subtle random surface brightness variation
        const brightness = 0.95 + ((r * 13 + c * 17) % 11) * 0.01;
        brick.style.filter = `brightness(${brightness})`;

        // Positioning math for top-to-bottom deconstruction animation
        const normCol = isOddRow ? (c - 0.5) : c;
        const normX = (normCol - centerCol) / centerCol; // -1 to +1

        // Top-down demolition order: Row 0 (top) dismantles first, cascading downward
        const rowProgress = r / rows;
        // Subtle organic stagger across bricks in the same course for a natural masonry break
        const organicJitter = (((c * 7 + r * 13) % 9) / 9) * (0.8 / rows);
        const removalPriority = rowProgress + organicJitter;

        // Edge framing: outermost bricks remain near margins as architectural frame
        const isFrameBrick = (c === 0 || c === totalColsInRow - 1);

        rowEl.appendChild(brick);
        allBricks.push({
          element: brick,
          row: r,
          col: c,
          normX: normX,
          priority: removalPriority,
          isFrameBrick: isFrameBrick
        });
      }
      matrix.appendChild(rowEl);
    }

    // Sort bricks by removal priority: courses dismantle progressively from top to bottom
    allBricks.sort((a, b) => a.priority - b.priority);

    // Initial state of sponsor backdrop (dimmed and slightly scaled)
    gsap.set(backdrop, {
      scale: 0.97,
      filter: 'blur(4px) brightness(0.85)',
      opacity: 0.92
    });

    const stageWidth = stage.offsetWidth || window.innerWidth;

    // Create Master Scrubbed Timeline (calibrated scroll length)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stageWrapper,
        pin: true,
        start: 'top top+=75',
        end: '+=750', // Calibrated pin scroll distance (eliminates huge blank space)
        scrub: 0.65,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          if (progressBar) {
            progressBar.style.width = (p * 100).toFixed(1) + '%';
          }
          if (statusText) {
            if (p < 0.08) {
              statusText.textContent = 'Masonry Intact';
            } else if (p < 0.88) {
              statusText.textContent = `Dismantling Top-Down (${Math.round(p * 100)}%)`;
            } else {
              statusText.textContent = 'Partners Revealed';
            }
          }
          // Emit subtle mortar dust on scroll motion
          if (Math.abs(self.getVelocity()) > 60) {
            spawnDust(stage.offsetWidth, stage.offsetHeight, p);
          }
        }
      }
    });

    // 0.5. Plaque dissolve & lift on early scroll (0.02 to 0.16)
    const plaque = document.getElementById('brick-wall-plaque');
    if (plaque) {
      tl.to(plaque, {
        opacity: 0,
        y: -30,
        scale: 0.94,
        duration: 0.14,
        ease: 'power2.out'
      }, 0.03);
    }

    // 1. Initial tremor on early scroll (0.00 to 0.08)
    const earlyTremorBricks = allBricks.slice(0, Math.floor(allBricks.length * 0.25)).map(b => b.element);
    tl.to(earlyTremorBricks, {
      x: () => (Math.random() - 0.5) * 3,
      y: () => (Math.random() - 0.5) * 2,
      duration: 0.08,
      ease: 'none'
    }, 0);

    // 2. Progressive Brick Removal (0.08 to 0.88)
    const totalBricks = allBricks.length;
    allBricks.forEach((bObj, idx) => {
      const el = bObj.element;
      const progressFraction = idx / totalBricks;
      // Stagger start time across 0.08 -> 0.75
      const startTime = 0.08 + progressFraction * 0.65;
      const animDuration = 0.22 + Math.random() * 0.12;

      const isLeft = bObj.normX < 0;
      const flySign = isLeft ? -1 : 1;

      if (bObj.isFrameBrick && Math.random() > 0.4) {
        // Architectural framing bricks: settle slightly outward at edges
        tl.to(el, {
          x: flySign * (25 + Math.random() * 35),
          y: (Math.random() - 0.4) * 25,
          z: 20 + Math.random() * 30,
          rotateZ: flySign * (4 + Math.random() * 8),
          rotateY: flySign * (8 + Math.random() * 12),
          opacity: 0.35,
          duration: animDuration * 1.2,
          ease: 'power1.out'
        }, startTime);
      } else {
        // Primary wall bricks: fly outwards left or right with 3D rotation and depth
        const travelDist = stageWidth * (0.42 + Math.random() * 0.55);
        const targetX = flySign * travelDist;
        const targetY = (Math.random() - 0.2) * 110;
        const targetZ = 50 + Math.random() * 120; // 3D pop forward toward camera
        const targetRotZ = flySign * (18 + Math.random() * 32);
        const targetRotY = flySign * (25 + Math.random() * 40);
        const targetRotX = (Math.random() - 0.5) * 30;

        tl.to(el, {
          x: targetX,
          y: targetY,
          z: targetZ,
          rotateZ: targetRotZ,
          rotateY: targetRotY,
          rotateX: targetRotX,
          scale: 0.88,
          duration: animDuration,
          ease: 'power2.inOut'
        }, startTime);

        // Fade out as brick flies away
        tl.to(el, {
          opacity: 0,
          duration: animDuration * 0.5,
          ease: 'power1.out'
        }, startTime + animDuration * 0.5);
      }
    });

    // 3. Reveal Sponsor Content Behind Wall (0.15 to 0.85)
    tl.to(backdrop, {
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      opacity: 1,
      duration: 0.70,
      ease: 'power1.out'
    }, 0.15);

    // 4. Matrix Mortar Background & Plinth Dissolve (0.78 to 0.90)
    const plinth = document.querySelector('.brick-wall-plinth');
    if (plinth) {
      tl.to(plinth, {
        opacity: 0,
        y: 15,
        duration: 0.12,
        ease: 'power1.out'
      }, 0.78);
    }

    tl.to(matrix, {
      background: 'transparent',
      boxShadow: 'none',
      border: 'none',
      outline: 'none',
      duration: 0.15,
      ease: 'power1.out'
    }, 0.82);

    currentTimeline = tl;
  }

  // --- Lightweight Dust Particle Canvas Simulation ---
  function initDustCanvas() {
    dustCanvas = document.getElementById('brick-dust-canvas');
    if (!dustCanvas) return;
    dustCtx = dustCanvas.getContext('2d');
    updateCanvasSize();
  }

  function updateCanvasSize() {
    if (!dustCanvas) return;
    const stage = document.getElementById('brick-stage');
    if (!stage) return;
    dustCanvas.width = stage.offsetWidth + 60;
    dustCanvas.height = stage.offsetHeight + 60;
  }

  function spawnDust(stageW, stageH, scrollProgress) {
    if (!dustCtx || dustParticles.length > 55) return;

    // Particle colors: lime mortar beige, terracotta brick dust, warm sand
    const dustColors = ['#D2C4AE', '#B54D34', '#9E3825', '#F5E9CF', '#C9A227'];

    const activeDemolitionY = Math.min(stageH, Math.max(20, scrollProgress * stageH));

    for (let i = 0; i < 5; i++) {
      dustParticles.push({
        x: 20 + Math.random() * stageW,
        y: activeDemolitionY + (Math.random() - 0.4) * 45,
        vx: (Math.random() - 0.5) * 3,
        vy: 1.2 + Math.random() * 2.6, // natural downward gravity
        radius: 1.2 + Math.random() * 2.4,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
        alpha: 0.8,
        decay: 0.025 + Math.random() * 0.03
      });
    }

    if (!isDustRunning) {
      isDustRunning = true;
      requestAnimationFrame(renderDust);
    }
  }

  function renderDust() {
    if (!dustCtx) return;
    dustCtx.clearRect(0, 0, dustCanvas.width, dustCanvas.height);

    for (let i = dustParticles.length - 1; i >= 0; i--) {
      const p = dustParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        dustParticles.splice(i, 1);
        continue;
      }

      dustCtx.save();
      dustCtx.globalAlpha = Math.max(0, p.alpha);
      dustCtx.fillStyle = p.color;
      dustCtx.beginPath();
      dustCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      dustCtx.fill();
      dustCtx.restore();
    }

    if (dustParticles.length > 0) {
      requestAnimationFrame(renderDust);
    } else {
      isDustRunning = false;
      dustCtx.clearRect(0, 0, dustCanvas.width, dustCanvas.height);
    }
  }

})();

/* ======================================================
   SPACE & SCI-FI PRESENTATION SLIDER — script.js
   Exact replica of sliderrevolution.com template
   ====================================================== */
'use strict';

/* ── CONFIG ── */
const AUTOPLAY  = 6000;   // ms between slides
const FADE_DUR  = 900;    // ms fade duration

/* ── STAR CANVAS ── */
(function Stars() {
  const canvas = document.getElementById('starCanvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = innerWidth;
    canvas.height = innerHeight;
  }
  resize();
  addEventListener('resize', resize);

  const STAR_COUNT = 320;
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x:   Math.random(),
    y:   Math.random(),
    r:   Math.random() * 1.5 + 0.2,
    o:   Math.random() * 0.6 + 0.1,
    sp:  Math.random() * 0.00035 + 0.00005,
    ph:  Math.random() * Math.PI * 2
  }));

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.018;
    stars.forEach(s => {
      const twinkle = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t + s.ph));
      ctx.globalAlpha = s.o * twinkle;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
      ctx.fill();
      // slow drift downward
      s.y += s.sp;
      if (s.y > 1) { s.y = 0; s.x = Math.random(); }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── KEN-BURNS (zoom) per active slide ── */
(function KenBurns() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    const bg = slide.querySelector('.slide-bg');
    if (!bg) return;
    const obs = new MutationObserver(() => {
      if (slide.classList.contains('active')) {
        bg.style.transition = `transform ${AUTOPLAY + 400}ms linear`;
        bg.style.transform  = 'scale(1.07)';
      } else {
        bg.style.transition = 'none';
        bg.style.transform  = 'scale(1)';
      }
    });
    obs.observe(slide, { attributes: true, attributeFilter: ['class'] });
  });
})();

/* ── SLIDER CORE ── */
const slides    = [...document.querySelectorAll('.slide')];
const dots      = [...document.querySelectorAll('.dot')];
const prevBtn   = document.getElementById('prevBtn');
const nextBtn   = document.getElementById('nextBtn');
const curLabel  = document.querySelector('.counter .cur');
const pfill     = document.getElementById('pfill');
const TOTAL     = slides.length;

let current  = 0;
let busy     = false;
let autoTimer = null;
let progAnim  = null;

function pad(n) { return String(n + 1).padStart(2, '0'); }

/* ── CHAR SPLIT ANIMATION for title ── */
function splitTitle(slide) {
  const h1 = slide.querySelector('.title');
  if (!h1 || h1.dataset.split) return;
  h1.dataset.split = '1';
  const text = h1.textContent;
  h1.innerHTML = text.split('').map((ch, i) =>
    ch === ' '
      ? '<span class="sp"> </span>'
      : `<span class="ch" style="--i:${i}">${ch}</span>`
  ).join('');
}

/* ── TRANSITION ── */
function goTo(idx) {
  if (busy) return;
  idx = ((idx % TOTAL) + TOTAL) % TOTAL;
  if (idx === current) return;
  busy = true;

  // Leaving slide fades out
  const leaving = slides[current];
  leaving.classList.remove('active');

  // Remove active dot
  dots[current].classList.remove('active');

  current = idx;
  const entering = slides[current];

  // Split the title chars for animation if not done
  splitTitle(entering);

  entering.classList.add('active');
  dots[current].classList.add('active');
  curLabel.textContent = pad(current);

  setTimeout(() => { busy = false; }, FADE_DUR);

  resetProgress();
  scheduleAuto();
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

/* ── PROGRESS BAR ── */
function resetProgress() {
  pfill.style.transition = 'none';
  pfill.style.width = '0%';
  // Force reflow
  void pfill.offsetWidth;
  pfill.style.transition = `width ${AUTOPLAY}ms linear`;
  pfill.style.width = '100%';
}

function scheduleAuto() {
  clearTimeout(autoTimer);
  autoTimer = setTimeout(next, AUTOPLAY);
}

/* ── EVENTS ── */
nextBtn.addEventListener('click', () => { clearTimeout(autoTimer); next(); });
prevBtn.addEventListener('click', () => { clearTimeout(autoTimer); prev(); });

dots.forEach(d => {
  d.addEventListener('click', () => {
    clearTimeout(autoTimer);
    goTo(parseInt(d.dataset.i));
  });
});

/* Keyboard */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { clearTimeout(autoTimer); next(); }
  if (e.key === 'ArrowLeft')  { clearTimeout(autoTimer); prev(); }
});

/* Touch / Swipe */
let tx = null;
document.querySelector('.slider').addEventListener('touchstart', e => {
  tx = e.touches[0].clientX;
}, { passive: true });
document.querySelector('.slider').addEventListener('touchend', e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx;
  tx = null;
  if (Math.abs(dx) < 50) return;
  clearTimeout(autoTimer);
  dx < 0 ? next() : prev();
}, { passive: true });

/* Hamburger */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));

/* ── INIT ── */
splitTitle(slides[0]);
slides[0].classList.add('active');
dots[0].classList.add('active');
curLabel.textContent = pad(0);

// Kick off Ken-Burns on first slide manually
const firstBg = slides[0].querySelector('.slide-bg');
if (firstBg) {
  firstBg.style.transition = `transform ${AUTOPLAY + 400}ms linear`;
  firstBg.style.transform  = 'scale(1.07)';
}

resetProgress();
scheduleAuto();

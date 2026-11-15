// Terra Tone journey: GAME → MOON ORBIT → WEBSITE
// The live game is embedded unchanged; this file only adds the wrapper UI and
// the 1.5 s transition, then navigates to the unchanged website at ./site/.
import { renderMoon, pixelsToCanvas } from './moon.js';
import './journey.css';

const GAME_URL = 'https://terra-earth-jukebox-playtest.blossomingbutterfly8.chatgpt.site/browser/';
const GAME_ORIGIN = new URL(GAME_URL).origin;
const SITE_URL = new URL('site/', document.baseURI).href;
const DURATION = 1500; // ms — exact length of the moon transition
// The website's own first-paint background (same rule as App.jsx), so the
// hand-off lands on exactly the colour the site is about to show: no flash.
function siteBackground() {
  let theme = null;
  try { theme = localStorage.getItem('terra-tone-theme'); } catch {}
  if (theme !== 'light' && theme !== 'dark') theme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  return theme === 'light' ? [240, 246, 255] : [8, 11, 26];
}
const AUTO_CONTINUE_MS = 8000; // after the game reports its ending

const frame = document.getElementById('game');
const canvas = document.getElementById('space');
const live = document.getElementById('journey-live');
const ctx = canvas.getContext('2d');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

let moonSprite = null;
let starsLayer = null;
let running = false;
let autoTimer = null;

frame.src = GAME_URL;
frame.addEventListener('load', () => {
  document.body.classList.add('game-ready');
  try { frame.focus({ preventScroll: true }); } catch {}
}, { once: true });

// ---------- precomputation (idle, so the click starts instantly) ----------
function sizes() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth, h = window.innerHeight;
  const base = Math.min(w, h);
  const moonCss = Math.round(Math.max(64, Math.min(170, base * 0.19)));
  return { dpr, w, h, base, moonCss, moonPx: Math.min(400, Math.round(moonCss * dpr)) };
}

// Moon texture is computed in a Web Worker while the player is in the game.
function requestMoon() {
  const { moonPx } = sizes();
  if (moonSprite && moonSprite.width >= moonPx) return;
  try {
    const worker = new Worker(new URL('./moon-worker.js', import.meta.url), { type: 'module' });
    worker.onmessage = (e) => {
      if (!moonSprite || moonSprite.width < e.data.size) moonSprite = pixelsToCanvas(e.data.data, e.data.size);
      worker.terminate();
    };
    worker.onerror = () => worker.terminate();
    worker.postMessage({ size: moonPx });
  } catch {
    /* falls back to synchronous render when the transition starts */
  }
}

function prepare() {
  const s = sizes();
  // Synchronous only if the worker has not delivered yet (e.g. instant click).
  if (!moonSprite) moonSprite = renderMoon(Math.min(s.moonPx, 280));
  starsLayer = renderStars(s);
}

function renderStars({ dpr, w, h }) {
  const c = document.createElement('canvas');
  c.width = Math.round(w * dpr * 1.1);
  c.height = Math.round(h * dpr * 1.1);
  const g = c.getContext('2d');
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const count = Math.round(Math.min(140, (w * h) / 9000));
  for (let i = 0; i < count; i++) {
    const x = rnd() * c.width, y = rnd() * c.height;
    const r = (rnd() < 0.12 ? 1.25 : 0.7) * dpr * (0.6 + rnd() * 0.5);
    g.globalAlpha = 0.25 + rnd() * 0.5;
    g.fillStyle = rnd() < 0.2 ? '#cfe3ff' : '#ffffff';
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  return c;
}

const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 600));
requestMoon();
idle(() => { starsLayer = starsLayer || renderStars(sizes()); }, { timeout: 2500 });

// Warm the website's files while the player is in the game, so it appears
// immediately after the moon. Skipped when the user asked to save data.
function prefetchSite() {
  if (navigator.connection?.saveData) return;
  fetch(SITE_URL, { credentials: 'same-origin' })
    .then((r) => (r.ok ? r.text() : ''))
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const urls = new Set();
      doc.querySelectorAll('script[src], link[rel="stylesheet"][href], link[rel="modulepreload"][href]').forEach((el) => {
        urls.add(new URL(el.getAttribute('src') || el.getAttribute('href'), SITE_URL).href);
      });
      urls.forEach((href) => {
        const l = document.createElement('link');
        l.rel = 'prefetch';
        l.crossOrigin = 'anonymous'; // Vite loads these with crossorigin; match so the cache entry is reused
        l.href = href;
        document.head.appendChild(l);
      });
    })
    .catch(() => {});
}
setTimeout(() => idle(prefetchSite, { timeout: 5000 }), 4000);

// ---------- triggers ----------
// Optional: the game can announce its ending with
//   parent.postMessage({ type: 'terra-tone:ending' }, '*')
// Only messages from the game's own origin are accepted.
window.addEventListener('message', (event) => {
  if (event.origin !== GAME_ORIGIN || event.source !== frame.contentWindow) return;
  const type = event.data && event.data.type;
  if (type === 'terra-tone:continue') startTransition();
  // Let the final reward screen stay up for a moment before the journey continues.
  if (type === 'terra-tone:ending' && !autoTimer && !running) {
    autoTimer = setTimeout(startTransition, AUTO_CONTINUE_MS);
  }
});

// ---------- the 1.5 s moon orbit ----------
const easeInOutSine = (t) => 0.5 - 0.5 * Math.cos(Math.PI * t);
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const ramp = (t, a, b) => clamp01((t - a) / (b - a));

function startTransition() {
  if (running) return;
  running = true;
  if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  if (!moonSprite || !starsLayer) prepare();

  const s = sizes();
  const SITE_BG = siteBackground();
  canvas.width = Math.round(s.w * s.dpr);
  canvas.height = Math.round(s.h * s.dpr);
  try { sessionStorage.setItem('terra-journey', '1'); } catch {}

  document.body.classList.add('traveling');
  live.textContent = 'Leaving the game. Opening the Terra Tone website.';

  const cx = canvas.width / 2, cy = canvas.height / 2;
  const portrait = s.h > s.w;
  const rx = s.base * (portrait ? 0.3 : 0.27) * s.dpr;
  const ry = rx * 0.36;
  const tilt = -0.2;
  const sweep = reducedMotion ? Math.PI * 0.35 : Math.PI * 1.3;
  const theta0 = Math.PI * 0.5 - sweep * 0.15;
  const moonSize = s.moonCss * s.dpr;
  const trail = [];
  const t0 = performance.now();
  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    document.body.dataset.transitionMs = String(Math.round(performance.now() - t0));
    // Stop game audio and hand over to the real website.
    frame.src = 'about:blank';
    window.location.assign(SITE_URL);
  };

  function draw(now) {
    if (done) return;
    const elapsed = now - t0;
    const t = clamp01(elapsed / DURATION);
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Deep-space background fades in over the game, then settles on the site colour.
    const bgA = easeInOutSine(ramp(t, 0, 0.32));
    const settle = easeInOutSine(ramp(t, 0.72, 1));
    ctx.globalAlpha = bgA;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.hypot(W, H) * 0.6);
    const mix = (a, b) => Math.round(a + (b - a) * settle);
    grad.addColorStop(0, `rgb(${mix(18, SITE_BG[0])},${mix(26, SITE_BG[1])},${mix(56, SITE_BG[2])})`);
    grad.addColorStop(1, `rgb(${mix(3, SITE_BG[0])},${mix(5, SITE_BG[1])},${mix(14, SITE_BG[2])})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Subtle stars with a slow parallax drift.
    ctx.globalAlpha = easeInOutSine(ramp(t, 0.08, 0.45)) * (1 - 0.45 * settle);
    const drift = (reducedMotion ? 0 : 1) * t * 0.04;
    ctx.drawImage(starsLayer, -drift * W - W * 0.04, -drift * H * 0.4 - H * 0.04, starsLayer.width, starsLayer.height);

    // Moon on a tilted elliptical orbit around the invisible centre.
    const theta = theta0 + sweep * (0.55 * t + 0.45 * easeInOutSine(t));
    const ex = Math.cos(theta) * rx, ey = Math.sin(theta) * ry;
    const mx = cx + ex * Math.cos(tilt) - ey * Math.sin(tilt);
    const my = cy + ex * Math.sin(tilt) + ey * Math.cos(tilt);
    const depth = Math.sin(theta); // +1 = nearest to viewer
    const scale = (0.86 + 0.22 * ramp(t, 0, 0.35)) * (1 + 0.14 * depth);
    const moonA = easeInOutSine(ramp(t, 0.06, 0.34)) * (1 - easeInOutSine(ramp(t, 0.8, 1)));
    const d = moonSize * scale;

    // Faint orbit trail.
    trail.push([mx, my]);
    if (trail.length > 2) {
      ctx.globalAlpha = moonA * 0.22;
      ctx.lineWidth = Math.max(1, d * 0.02);
      ctx.lineCap = 'round';
      for (let i = Math.max(1, trail.length - 18); i < trail.length; i++) {
        const k = (i - (trail.length - 18)) / 18;
        ctx.strokeStyle = `rgba(190,214,255,${clamp01(k) * 0.9})`;
        ctx.beginPath(); ctx.moveTo(trail[i - 1][0], trail[i - 1][1]); ctx.lineTo(trail[i][0], trail[i][1]); ctx.stroke();
      }
    }

    // Atmospheric glow.
    ctx.globalAlpha = moonA;
    const glow = ctx.createRadialGradient(mx, my, d * 0.46, mx, my, d * 1.05);
    glow.addColorStop(0, 'rgba(205,222,255,0.22)');
    glow.addColorStop(0.4, 'rgba(150,185,255,0.07)');
    glow.addColorStop(1, 'rgba(120,160,255,0)');
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(mx, my, d * 1.05, 0, Math.PI * 2); ctx.fill();

    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(moonSprite, mx - d / 2, my - d / 2, d, d);

    ctx.globalAlpha = 1;
    if (elapsed >= DURATION) finish();
    else requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
  // Safety net if the tab is backgrounded and rAF pauses.
  setTimeout(finish, DURATION + 120);
}

// Returning with Back (bfcache) must show the game again, not a frozen transition.
window.addEventListener('pageshow', (e) => {
  if (!e.persisted) return;
  running = false;
  document.body.classList.remove('traveling');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  autoTimer = null;
  if (frame.src === 'about:blank' || !frame.src.startsWith(GAME_ORIGIN)) frame.src = GAME_URL;
});

let resizeTimer = null;
window.addEventListener('resize', () => {
  if (running) return;
  starsLayer = null; // rebuilt for the new size when the transition starts
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(requestMoon, 400);
});

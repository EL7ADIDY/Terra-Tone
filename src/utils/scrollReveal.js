// Scroll-reveal: content inside <main id="main-content"> slides in as it enters the viewport.
// Self-contained — no component changes. Elements are hidden only while waiting to be
// revealed; once shown, every class and inline style added here is removed, so the
// site's own hover effects, transforms and fixed elements behave exactly as before.

const ROOT_SELECTOR = '#main-content';
const CANDIDATES = [
  '.section-header-block',
  '.card',
  '[class*="-card"]:not(button):not(a)',
  '.about-section',
  '#main-content > section > *',
].join(',');
const SKIP = 'button, a, input, select, textarea, [role="dialog"], dialog, .leaflet-pane, .leaflet-control';

const STAGGER_MS = 90;
const MAX_STAGGER_MS = 360;

export function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const seen = new WeakSet();
  let batch = [];
  let batchScheduled = false;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        batch.push(entry.target);
      }
      if (batch.length && !batchScheduled) {
        batchScheduled = true;
        requestAnimationFrame(flushBatch);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  function flushBatch() {
    batchScheduled = false;
    // Reveal in reading order with a small stagger, so a row of cards cascades in.
    batch.sort((a, b) => {
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      return ra.top - rb.top || ra.left - rb.left;
    });
    batch.forEach((el, i) => reveal(el, Math.min(i * STAGGER_MS, MAX_STAGGER_MS)));
    batch = [];
  }

  function reveal(el, delay) {
    el.style.transitionDelay = `${delay}ms`;
    el.classList.add('sr-in');
    let done = false;
    const onEnd = (e) => { if (e.target === el && e.propertyName === 'transform') cleanup(); };
    const cleanup = () => {
      if (done) return;
      done = true;
      el.removeEventListener('transitionend', onEnd);
      el.classList.remove('sr-hidden', 'sr-in', 'sr-from-left');
      el.style.transitionDelay = '';
    };
    el.addEventListener('transitionend', onEnd);
    setTimeout(cleanup, delay + 1200); // safety net if transitionend never fires
  }

  function isEligible(el) {
    if (seen.has(el) || el.matches(SKIP) || el.closest('dialog,[role="dialog"]')) return false;
    const cs = getComputedStyle(el);
    if (cs.position === 'fixed' || cs.position === 'sticky' || cs.display === 'none' || cs.display === 'contents') return false;
    return true;
  }

  // Animate the finest-grained blocks: drop any candidate that contains another one,
  // so a grid animates card-by-card instead of all at once.
  function collect(scope) {
    const list = [];
    if (scope.matches?.(CANDIDATES)) list.push(scope);
    scope.querySelectorAll?.(CANDIDATES).forEach((el) => list.push(el));
    const set = new Set(list.filter(isEligible));
    return [...set].filter((el) => {
      for (const other of set) if (other !== el && el.contains(other)) return false;
      return true;
    });
  }

  function prepare(scope) {
    for (const el of collect(scope)) {
      if (el.closest('.sr-hidden')) continue;
      seen.add(el);
      el.classList.add('sr-hidden');
      if (el.matches('.section-header-block')) el.classList.add('sr-from-left');
      io.observe(el);
    }
  }

  function start(root) {
    prepare(root);
    // Content that mounts later (tabs, toggles, loaded data) gets the same treatment.
    new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => { if (node.nodeType === 1) prepare(node); });
      }
    }).observe(root, { childList: true, subtree: true });
  }

  const existing = document.querySelector(ROOT_SELECTOR);
  if (existing) { start(existing); return; }
  // Wait for React to mount <main>; MutationObserver callbacks run before paint, so there is no flash.
  const waiter = new MutationObserver(() => {
    const root = document.querySelector(ROOT_SELECTOR);
    if (root) { waiter.disconnect(); start(root); }
  });
  waiter.observe(document.body, { childList: true, subtree: true });
}

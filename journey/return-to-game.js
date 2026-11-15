// Small "Back to the game" control for visitors who arrived via the moon
// transition. Self-contained: it does not touch the React app; direct visitors
// to the website never see it.
(() => {
  let fromJourney = false;
  try { fromJourney = sessionStorage.getItem('terra-journey') === '1'; } catch {}
  if (!fromJourney) return;

  const style = document.createElement('style');
  style.textContent = `
    #tt-back-to-game{position:fixed;left:max(14px,env(safe-area-inset-left));bottom:max(14px,env(safe-area-inset-bottom));z-index:2147483000;
      display:inline-flex;align-items:center;gap:7px;padding:8px 13px 8px 10px;border-radius:999px;
      border:1px solid rgba(165,214,255,.32);background:rgba(8,11,26,.66);color:#e8f4ff;text-decoration:none;
      font:600 12.5px/1 Inter,system-ui,sans-serif;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
      box-shadow:0 6px 20px rgba(0,0,0,.3);opacity:0;transition:opacity .6s ease .3s,border-color .2s,background .2s}
    #tt-back-to-game.in{opacity:.78}
    #tt-back-to-game:hover,#tt-back-to-game:focus-visible{opacity:1;border-color:rgba(165,214,255,.7);background:rgba(14,24,48,.88);outline:none}
    #tt-back-to-game:focus-visible{box-shadow:0 0 0 3px rgba(125,196,255,.5)}
    #tt-back-to-game svg{width:14px;height:14px;flex:none}
    @media print{#tt-back-to-game{display:none}}
    @media (prefers-reduced-motion:reduce){#tt-back-to-game{transition:none}}`;
  document.head.appendChild(style);

  const a = document.createElement('a');
  a.id = 'tt-back-to-game';
  a.href = new URL('../', document.baseURI).href;
  a.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Back to the game</span>';
  document.body.appendChild(a);
  requestAnimationFrame(() => requestAnimationFrame(() => a.classList.add('in')));
})();

import{r as R,j as s,C as ho,a as fo,L as po,P as mo,b as go,p as xo,d as vo,e as _o,i as So,f as yo,R as Kl}from"./chartjs-B4Rk94oj.js";import{r as gd}from"./react-CTEZVXUg.js";import{L as jt}from"./leaflet-BtnBn_9I.js";import{J as xd}from"./jszip-Cj3QqAs6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();var mr={},qo=gd;mr.createRoot=qo.createRoot,mr.hydrateRoot=qo.hydrateRoot;const vd=[48,50,52,55,57,60,62,64,67,69,72,74,76,79,81,84];function _d(i){return 440*Math.pow(2,(i-69)/12)}const li=vd.map(_d),Ls=li[0],Sd=li[li.length-1];function Gn(i,e,t,n=!0){if(i===null||isNaN(i))return Ls;const a=Math.max(0,Math.min(1,(i-e)/(t-e||1)));if(n){const r=Math.round(a*(li.length-1));return li[r]}else return Ls*Math.pow(Sd/Ls,a)}let Ds=null,mi=null;function fa(){if(!Ds){const i=window.AudioContext||window.webkitAudioContext;i&&(Ds=new i)}return Ds}function Qn(){const i=fa();if(!i)return null;if(!mi)try{mi=i.createAnalyser(),mi.fftSize=256,mi.smoothingTimeConstant=.8,mi.connect(i.destination)}catch{return null}return mi}async function _s(){const i=fa();if(!i)return!1;if(i.state==="suspended")try{await i.resume()}catch(e){return console.warn("AudioContext resume failed:",e),!1}return i.state==="running"}function zn({frequency:i,duration:e=.45,volume:t=.7,instrument:n="sine",pan:a=0,isRecordHigh:r=!1,isRecordLow:o=!1,secondaryVolume:c=1}){const l=fa();if(!l||l.state!=="running")return;const d=l.currentTime,u=Math.max(.15,e*.85),p=l.createGain(),h=Math.max(0,Math.min(1,t*c)),g=Qn()||l.destination;let x=null;if(l.createStereoPanner?(x=l.createStereoPanner(),x.pan.setValueAtTime(Math.max(-1,Math.min(1,a)),d),p.connect(x),x.connect(g)):p.connect(g),n==="wind"||n==="WS10M"){const _=l.createOscillator();_.type="sawtooth",_.frequency.setValueAtTime(i,d);const f=l.createBiquadFilter();f.type="bandpass",f.Q.setValueAtTime(4,d),f.frequency.setValueAtTime(Math.min(2400,i*2),d),f.frequency.exponentialRampToValueAtTime(Math.max(150,i*.7),d+u),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.7,d+.05),p.gain.exponentialRampToValueAtTime(1e-4,d+u),_.connect(f),f.connect(p),_.start(d),_.stop(d+u+.05)}else if(n==="rain"||n==="PRECTOTCORR"){const _=l.createOscillator();_.type="triangle",_.frequency.setValueAtTime(i,d);const f=l.createOscillator();f.type="sine",f.frequency.setValueAtTime(i*2.8,d+.05),f.frequency.exponentialRampToValueAtTime(i*3.5,d+.12),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.85,d+.003),p.gain.exponentialRampToValueAtTime(1e-4,d+u),_.connect(p),f.connect(p),_.start(d),f.start(d+.05),_.stop(d+u+.05),f.stop(d+.2)}else if(n==="solar"||n==="ALLSKY_SFC_SW_DWN"){const _=l.createOscillator(),f=l.createOscillator();_.type="sine",f.type="sine",_.frequency.setValueAtTime(i,d),f.frequency.setValueAtTime(i*2.76,d),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.8,d+.006),p.gain.exponentialRampToValueAtTime(1e-4,d+u*1.1),_.connect(p),f.connect(p),_.start(d),f.start(d),_.stop(d+u+.05),f.stop(d+u+.05)}else if(n==="water"||n==="RH2M"){const _=l.createOscillator();_.type="sine",_.frequency.setValueAtTime(i*.75,d),_.frequency.exponentialRampToValueAtTime(i*.65,d+u);const f=l.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(Math.min(900,i*2),d),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.8,d+.02),p.gain.exponentialRampToValueAtTime(1e-4,d+u),_.connect(f),f.connect(p),_.start(d),_.stop(d+u+.05)}else if(n==="pressure"||n==="PS"){const _=l.createOscillator();_.type="triangle",_.frequency.setValueAtTime(Math.max(45,i*.4),d),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.9,d+.04),p.gain.exponentialRampToValueAtTime(1e-4,d+u*1.2),_.connect(p),_.start(d),_.stop(d+u+.05)}else if(n==="soft_pluck"||n==="temp"||n==="T2M"){const _=l.createOscillator();_.type="triangle",_.frequency.setValueAtTime(i,d);const f=l.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(Math.min(3e3,i*4),d),f.frequency.exponentialRampToValueAtTime(Math.max(120,i*.8),d+u),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.8,d+.008),p.gain.exponentialRampToValueAtTime(1e-4,d+u),_.connect(f),f.connect(p),_.start(d),_.stop(d+u+.05)}else if(n==="triangle"){const _=l.createOscillator();_.type="triangle",_.frequency.setValueAtTime(i,d);const f=l.createOscillator();f.type="sine",f.frequency.setValueAtTime(i*2,d);const m=l.createGain();m.gain.setValueAtTime(.15,d),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.7,d+.03),p.gain.exponentialRampToValueAtTime(1e-4,d+u),_.connect(p),f.connect(m),m.connect(p),_.start(d),f.start(d),_.stop(d+u+.05),f.stop(d+u+.05)}else{const _=l.createOscillator();_.type="sine",_.frequency.setValueAtTime(i,d),p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(h*.75,d+.03),p.gain.exponentialRampToValueAtTime(h*.35,d+u*.4),p.gain.exponentialRampToValueAtTime(1e-4,d+u),_.connect(p),_.start(d),_.stop(d+u+.05)}r&&yd(l,d+.06,h,a),o&&bd(l,d+.06,h,a)}function yd(i,e,t,n){[880,1174.66,1760].forEach((r,o)=>{const c=e+o*.07,l=i.createOscillator(),d=i.createGain();if(l.type="sine",l.frequency.setValueAtTime(r,c),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(t*.35,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+.28),i.createStereoPanner){const u=i.createStereoPanner();u.pan.setValueAtTime(n,c),d.connect(u),u.connect(i.destination)}else d.connect(i.destination);l.connect(d),l.start(c),l.stop(c+.3)})}function bd(i,e,t,n){const a=i.createOscillator(),r=i.createGain();if(a.type="triangle",a.frequency.setValueAtTime(98,e),a.frequency.exponentialRampToValueAtTime(65.41,e+.4),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(t*.45,e+.02),r.gain.exponentialRampToValueAtTime(1e-4,e+.5),i.createStereoPanner){const o=i.createStereoPanner();o.pan.setValueAtTime(n,e),r.connect(o),o.connect(i.destination)}else r.connect(i.destination);a.connect(r),a.start(e),a.stop(e+.55)}function Md({theme:i,onToggleTheme:e,soundEnabled:t=!0}){const[n,a]=R.useState(0),[r,o]=R.useState(!1),[c,l]=R.useState(!1),d=R.useRef(0),u=R.useRef(0),p=i==="dark",h=R.useCallback(()=>{if(t)try{const y=fa();if(!y||y.state!=="running")return;const E=y.createOscillator(),T=y.createGain(),S=y.currentTime;E.type="triangle",E.frequency.setValueAtTime(p?520:680,S),E.frequency.exponentialRampToValueAtTime(140,S+.04),T.gain.setValueAtTime(.08,S),T.gain.exponentialRampToValueAtTime(.001,S+.04),E.connect(T),T.connect(y.destination),E.start(S),E.stop(S+.045)}catch{}},[t,p]),g=R.useCallback(()=>{h(),e()},[h,e]),x=y=>{y.preventDefault(),o(!0),l(!1),d.current=y.clientY,u.current=0;try{y.currentTarget.setPointerCapture(y.pointerId)}catch{}},_=y=>{if(!r)return;const E=y.clientY-d.current,T=Math.max(0,Math.min(45,E));u.current=T,a(T)},f=y=>{if(!r)return;o(!1);try{y.currentTarget.releasePointerCapture(y.pointerId)}catch{}u.current>=18&&g(),l(!0),a(0),setTimeout(()=>l(!1),500)},m=y=>{y.stopPropagation(),l(!0),a(15),setTimeout(()=>{a(0),g(),setTimeout(()=>l(!1),450)},120)},M=y=>{(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),m(y))};return s.jsxs("div",{className:`hanging-lamp-container ${p?"lamp-on":"lamp-off"}`,role:"button",tabIndex:0,"aria-label":`Toggle theme: current theme is ${i}. Pull cord or click lamp to switch.`,onKeyDown:M,title:`Theme: ${p?"Cosmic Dark":"Scientific Light"} (Click or pull string to switch)`,children:[s.jsx("div",{className:"lamp-mount-wire"}),s.jsxs("div",{className:"lamp-head",onClick:m,children:[s.jsxs("svg",{className:"lamp-svg",viewBox:"0 0 48 36",width:"44",height:"33","aria-hidden":"true",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"shadeGradDark",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),s.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),s.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),s.jsxs("linearGradient",{id:"shadeGradLight",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#64748b"}),s.jsx("stop",{offset:"50%",stopColor:"#cbd5e1"}),s.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]}),s.jsxs("radialGradient",{id:"bulbGlow",cx:"50%",cy:"50%",r:"50%",children:[s.jsx("stop",{offset:"0%",stopColor:"#fffbeb"}),s.jsx("stop",{offset:"40%",stopColor:"#fde047"}),s.jsx("stop",{offset:"80%",stopColor:"#f59e0b"}),s.jsx("stop",{offset:"100%",stopColor:"transparent"})]})]}),s.jsx("rect",{x:"21",y:"2",width:"6",height:"4",rx:"1",fill:p?"#64748b":"#475569"}),s.jsx("path",{d:"M 12 16 Q 24 6 36 16 L 40 22 Q 24 24 8 22 Z",fill:p?"url(#shadeGradDark)":"url(#shadeGradLight)",stroke:p?"#38bdf8":"#94a3b8",strokeWidth:"1"}),s.jsx("circle",{cx:"24",cy:"24",r:"6",className:"lamp-bulb-element",fill:p?"url(#bulbGlow)":"#cbd5e1",stroke:p?"#fef08a":"#94a3b8",strokeWidth:"1"})]}),p&&s.jsx("div",{className:"lamp-light-cone"})]}),s.jsxs("div",{className:`lamp-pull-cord-assembly ${c?"is-springing":""}`,style:{transform:`translateY(${n}px)`,transition:r?"none":"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)"},onPointerDown:x,onPointerMove:_,onPointerUp:f,onPointerCancel:f,children:[s.jsx("div",{className:"lamp-cord-line"}),s.jsx("div",{className:`lamp-pull-bead ${r?"is-dragging":""}`,title:"Drag down or click to switch theme",children:s.jsx("div",{className:"bead-inner"})})]})]})}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jl=(...i)=>i.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ad={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=R.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:a="",children:r,iconNode:o,...c},l)=>R.createElement("svg",{ref:l,...Ad,width:e,height:e,stroke:i,strokeWidth:n?Number(t)*24/Number(e):t,className:Jl("lucide",a),...c},[...o.map(([d,u])=>R.createElement(d,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(i,e)=>{const t=R.forwardRef(({className:n,...a},r)=>R.createElement(Td,{ref:r,iconNode:e,className:Jl(`lucide-${Ed(i)}`,n),...a}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=Ie("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Ie("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=Ie("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=Ie("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Ie("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=Ie("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=Ie("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Ie("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=Ie("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=Ie("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Ie("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=Ie("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=Ie("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Ie("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=Ie("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=Ie("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=Ie("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=Ie("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=Ie("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=Ie("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=Ie("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=Ie("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=Ie("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Ie("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=Ie("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Ie("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=Ie("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=Ie("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=Ie("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=Ie("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=Ie("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=Ie("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=Ie("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=Ie("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=Ie("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=Ie("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=Ie("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=Ie("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=Ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=Ie("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=Ie("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=Ie("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=Ie("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Ie("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=Ie("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=Ie("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Ie("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=Ie("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=Ie("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Ie("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=Ie("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Ie("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=Ie("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=Ie("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=Ie("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=Ie("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=Ie("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=Ie("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=Ie("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=Ie("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Ie("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=Ie("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=Ie("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=Ie("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=Ie("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=Ie("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=Ie("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=Ie("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=Ie("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=Ie("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=Ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Ie("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Qd({theme:i,onToggleTheme:e,lang:t,onToggleLang:n,soundEnabled:a,onToggleSound:r,isHighContrast:o=!1,onToggleHighContrast:c,isLargeText:l=!1,onToggleLargeText:d,onOpenAbout:u,onOpenShortcuts:p,onOpenEICModal:h}){const[g,x]=R.useState("home"),[_,f]=R.useState(!1),[m,M]=R.useState(!1),y=[{id:"home",label:t==="ar"?"الرئيسية":"Home"},{id:"science",label:t==="ar"?"العلم والمبدأ":"The Science"},{id:"explore",label:t==="ar"?"استكشاف البيانات":"Explore Data"},{id:"studio",label:t==="ar"?"استوديو الصوتيات":"Sonification Studio"},{id:"discover",label:t==="ar"?"دليل الاستماع":"Discover"},{id:"about",label:t==="ar"?"عن المشروع":"About"}];R.useEffect(()=>{const T=()=>{M(window.scrollY>20);const S=y.map(N=>document.getElementById(N.id)).filter(Boolean),v=window.scrollY+180;for(let N=S.length-1;N>=0;N--){const O=S[N];if(O.offsetTop<=v){x(O.id);break}}};return window.addEventListener("scroll",T,{passive:!0}),T(),()=>window.removeEventListener("scroll",T)},[t]);const E=T=>{f(!1);const S=document.getElementById(T);S&&S.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("header",{className:`navbar-header ${m?"is-scrolled":""}`,children:[s.jsxs("div",{className:"navbar-container",children:[s.jsxs("a",{href:"#home",onClick:T=>{T.preventDefault(),E("home")},className:"navbar-brand",children:[s.jsxs("div",{className:"brand-logo-icon",children:[s.jsx("span",{className:"logo-pulse-ring"}),s.jsx("span",{className:"logo-core"})]}),s.jsxs("div",{className:"brand-text",children:[s.jsx("span",{className:"brand-title",children:"TERRA-TONE"}),s.jsx("span",{className:"brand-tag",children:"NASA DATA SONIFICATION"})]})]}),s.jsx("nav",{className:"navbar-links","aria-label":"Main Navigation",children:y.map(T=>s.jsxs("button",{onClick:()=>E(T.id),className:`nav-link-btn ${g===T.id?"active":""}`,children:[T.label,g===T.id&&s.jsx("span",{className:"nav-active-pill"})]},T.id))}),s.jsxs("div",{className:"navbar-actions",children:[s.jsx("button",{onClick:r,className:"navbar-icon-btn",title:a?t==="ar"?"كتم الصوت":"Mute Sound":t==="ar"?"تشغيل الصوت":"Unmute Sound","aria-label":"Toggle Sound",children:a?s.jsx(rn,{size:18}):s.jsx(Zn,{size:18})}),s.jsxs("button",{onClick:c,className:`navbar-icon-btn a11y-toggle-btn contrast-btn ${o?"is-active":""}`,title:t==="ar"?o?"إلغاء التباين العالي":"تفعيل وضع التباين العالي (WCAG AAA)":o?"Disable High Contrast":"Enable High Contrast (WCAG AAA)","aria-label":"Toggle High Contrast Mode","aria-pressed":o,children:[s.jsx(gr,{size:17,className:"contrast-icon-anim"}),s.jsx("span",{className:"a11y-badge-dot"})]}),s.jsxs("button",{onClick:d,className:`navbar-icon-btn a11y-toggle-btn text-size-btn ${l?"is-active":""}`,title:t==="ar"?l?"استعادة حجم الخط العادي":"تكبير حجم الخط (نص كبير)":l?"Reset Normal Font Size":"Enlarge Font Size (Large Text)","aria-label":"Toggle Large Font Size","aria-pressed":l,children:[s.jsxs("span",{className:"text-size-icon-anim",children:[s.jsx("span",{className:"letter-base",children:"A"}),s.jsx("span",{className:"letter-plus",children:"+"})]}),s.jsx("span",{className:"a11y-badge-dot"})]}),s.jsxs("button",{onClick:n,className:"navbar-pill-btn",title:"Toggle Language (English / العربية)",children:[s.jsx(ia,{size:14}),s.jsx("span",{children:t==="en"?"AR":"EN"})]}),s.jsx("div",{className:"navbar-lamp-wrapper",title:"Interactive Hanging Lamp",children:s.jsx(Md,{theme:i,onToggleTheme:e,soundEnabled:a})}),s.jsx("button",{onClick:()=>f(!_),className:"navbar-mobile-toggle","aria-label":"Toggle Navigation Menu",children:_?s.jsx(Ns,{size:22}):s.jsx(Bd,{size:22})})]})]}),_&&s.jsxs("div",{className:"mobile-nav-drawer",children:[s.jsx("div",{className:"mobile-nav-links",children:y.map(T=>s.jsx("button",{onClick:()=>E(T.id),className:`mobile-nav-link ${g===T.id?"active":""}`,children:T.label},T.id))}),s.jsxs("div",{className:"mobile-a11y-row",children:[s.jsxs("button",{onClick:c,className:`mobile-a11y-chip ${o?"is-active":""}`,children:[s.jsx(gr,{size:16,className:"contrast-icon-anim"}),s.jsx("span",{children:t==="ar"?"تباين عالي":"High Contrast"})]}),s.jsxs("button",{onClick:d,className:`mobile-a11y-chip ${l?"is-active":""}`,children:[s.jsx("span",{className:"text-size-icon-anim",style:{display:"inline-flex",fontSize:"0.9rem",fontWeight:800},children:"A+"}),s.jsx("span",{children:t==="ar"?"تكبير النص":"Big Text"})]})]}),s.jsxs("div",{className:"mobile-nav-footer",children:[s.jsxs("button",{onClick:u,className:"mobile-nav-sublink",children:[s.jsx(ei,{size:16}),s.jsx("span",{children:t==="ar"?"عن المشروع":"About Project"})]}),s.jsxs("button",{onClick:p,className:"mobile-nav-sublink",children:[s.jsx(Pd,{size:16}),s.jsx("span",{children:t==="ar"?"اختصارات المفاتيح":"Keyboard Shortcuts"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="187",eu=0,Yo=1,tu=2,Qa=1,nu=2,Ji=3,ci=0,zt=1,An=2,Ci=0,na=1,Sr=2,Zo=3,Ko=4,iu=5,wi=100,au=101,su=102,ru=103,ou=104,lu=200,cu=201,du=202,uu=203,mc=204,gc=205,hu=206,fu=207,pu=208,mu=209,gu=210,xu=211,vu=212,_u=213,Su=214,yr=0,br=1,Mr=2,sa=3,Er=4,Ar=5,Tr=6,Nr=7,xc=0,yu=1,bu=2,Nn=0,vc=1,_c=2,Sc=3,yc=4,bc=5,Mc=6,Ec=7,Ac=300,Li=301,ra=302,Us=303,Os=304,wr=1e3,Tn=1001,Rr=1002,Pt=1003,Mu=1004,Na=1005,Vt=1006,Fs=1007,Vn=1008,$t=1009,Tc=1010,Nc=1011,oa=1012,wo=1013,gn=1014,hn=1015,xn=1016,Ro=1017,Co=1018,Di=1020,wc=35902,Rc=35899,Cc=1021,Pc=1022,fn=1023,Kn=1026,Hn=1027,Ic=1028,Po=1029,di=1030,Io=1031,Lo=1033,es=33776,ts=33777,ns=33778,is=33779,Cr=35840,Pr=35841,Ir=35842,Lr=35843,Dr=36196,Ur=37492,Or=37496,Fr=37488,kr=37489,cs=37490,Br=37491,Gr=37808,zr=37809,jr=37810,Vr=37811,Hr=37812,Wr=37813,$r=37814,Xr=37815,qr=37816,Yr=37817,Zr=37818,Kr=37819,Jr=37820,Qr=37821,eo=36492,to=36494,no=36495,io=36283,ao=36284,ds=36285,so=36286,Eu=3200,ro=0,Au=1,Bn="",Yt="srgb",us="srgb-linear",hs="linear",mt="srgb",ks=7680,Tu=519,Nu=512,wu=513,Ru=514,Lc=515,Cu=516,Pu=517,Dc=518,Uc=519,Iu=35044,Jo="300 es",an=2e3,la=2001;function Lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=fs("canvas");return i.style.display="block",i}const Qo={};function el(...i){const e="THREE."+i.shift();console.log(e,...i)}function Oc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=Oc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=Oc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function as(...i){const e=i.join(" ");e in Qo||(Qo[e]=!0,Ze(...i))}function Uu(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ou={[yr]:yr,[Mr]:Tr,[Er]:Er,[sa]:Ar,[br]:br,[Tr]:Mr,[Nr]:Nr,[Ar]:sa};class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,oo=180/Math.PI;function pa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Fu(i,e){return(i%e+e)%e}function Gs(i,e,t){return(1-t)*i+t*e}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Do(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bu(i,e){if(e.constructor===Float32Array)return i;const t=Do(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Gu(i,e){if(e.constructor===Float32Array)return i;const t=Do(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Vo=class Vo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*a+e.x,this.y=r*a+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vo.prototype.isVector2=!0;let ct=Vo;class ki{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,o,c){let l=n[a+0],d=n[a+1],u=n[a+2],p=n[a+3],h=r[o+0],g=r[o+1],x=r[o+2],_=r[o+3];if(p!==_||l!==h||d!==g||u!==x){let f=l*h+d*g+u*x+p*_;f<0&&(h=-h,g=-g,x=-x,_=-_,f=-f);let m=1-c;if(f<.9995){const M=Math.acos(f),y=Math.sin(M);m=Math.sin(m*M)/y,c=Math.sin(c*M)/y,l=l*m+h*c,d=d*m+g*c,u=u*m+x*c,p=p*m+_*c}else{l=l*m+h*c,d=d*m+g*c,u=u*m+x*c,p=p*m+_*c;const M=1/Math.sqrt(l*l+d*d+u*u+p*p);l*=M,d*=M,u*=M,p*=M}}e[t]=l,e[t+1]=d,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,a,r,o){const c=n[a],l=n[a+1],d=n[a+2],u=n[a+3],p=r[o],h=r[o+1],g=r[o+2],x=r[o+3];return e[t]=c*x+u*p+l*g-d*h,e[t+1]=l*x+u*h+d*p-c*g,e[t+2]=d*x+u*g+c*h-l*p,e[t+3]=u*x-c*p-l*h-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,o=e._order,c=Math.cos,l=Math.sin,d=c(n/2),u=c(a/2),p=c(r/2),h=l(n/2),g=l(a/2),x=l(r/2);switch(o){case"XYZ":this._x=h*u*p+d*g*x,this._y=d*g*p-h*u*x,this._z=d*u*x+h*g*p,this._w=d*u*p-h*g*x;break;case"YXZ":this._x=h*u*p+d*g*x,this._y=d*g*p-h*u*x,this._z=d*u*x-h*g*p,this._w=d*u*p+h*g*x;break;case"ZXY":this._x=h*u*p-d*g*x,this._y=d*g*p+h*u*x,this._z=d*u*x+h*g*p,this._w=d*u*p-h*g*x;break;case"ZYX":this._x=h*u*p-d*g*x,this._y=d*g*p+h*u*x,this._z=d*u*x-h*g*p,this._w=d*u*p+h*g*x;break;case"YZX":this._x=h*u*p+d*g*x,this._y=d*g*p+h*u*x,this._z=d*u*x-h*g*p,this._w=d*u*p-h*g*x;break;case"XZY":this._x=h*u*p-d*g*x,this._y=d*g*p-h*u*x,this._z=d*u*x+h*g*p,this._w=d*u*p+h*g*x;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],o=t[1],c=t[5],l=t[9],d=t[2],u=t[6],p=t[10],h=n+c+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-d)*g,this._z=(o-a)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(u-l)/g,this._x=.25*g,this._y=(a+o)/g,this._z=(r+d)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(r-d)/g,this._x=(a+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(o-a)/g,this._x=(r+d)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,o=e._w,c=t._x,l=t._y,d=t._z,u=t._w;return this._x=n*u+o*c+a*d-r*l,this._y=a*u+o*l+r*c-n*d,this._z=r*u+o*d+n*l-a*c,this._w=o*u-n*c-a*l-r*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,a=-a,r=-r,o=-o,c=-c);let l=1-t;if(c<.9995){const d=Math.acos(c),u=Math.sin(d);l=Math.sin(l*d)/u,t=Math.sin(t*d)/u,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ho=class Ho{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,o=e.y,c=e.z,l=e.w,d=2*(o*a-c*n),u=2*(c*t-r*a),p=2*(r*n-o*t);return this.x=t+l*d+o*p-c*u,this.y=n+l*u+c*d-r*p,this.z=a+l*p+r*u-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,o=t.x,c=t.y,l=t.z;return this.x=a*l-r*c,this.y=r*o-n*l,this.z=n*c-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ho.prototype.isVector3=!0;let ne=Ho;const zs=new ne,tl=new ki,Wo=class Wo{constructor(e,t,n,a,r,o,c,l,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,o,c,l,d)}set(e,t,n,a,r,o,c,l,d){const u=this.elements;return u[0]=e,u[1]=a,u[2]=c,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,o=n[0],c=n[3],l=n[6],d=n[1],u=n[4],p=n[7],h=n[2],g=n[5],x=n[8],_=a[0],f=a[3],m=a[6],M=a[1],y=a[4],E=a[7],T=a[2],S=a[5],v=a[8];return r[0]=o*_+c*M+l*T,r[3]=o*f+c*y+l*S,r[6]=o*m+c*E+l*v,r[1]=d*_+u*M+p*T,r[4]=d*f+u*y+p*S,r[7]=d*m+u*E+p*v,r[2]=h*_+g*M+x*T,r[5]=h*f+g*y+x*S,r[8]=h*m+g*E+x*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],c=e[5],l=e[6],d=e[7],u=e[8];return t*o*u-t*c*d-n*r*u+n*c*l+a*r*d-a*o*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],c=e[5],l=e[6],d=e[7],u=e[8],p=u*o-c*d,h=c*l-u*r,g=d*r-o*l,x=t*p+n*h+a*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=p*_,e[1]=(a*d-u*n)*_,e[2]=(c*n-a*o)*_,e[3]=h*_,e[4]=(u*t-a*l)*_,e[5]=(a*r-c*t)*_,e[6]=g*_,e[7]=(n*l-d*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,o,c){const l=Math.cos(r),d=Math.sin(r);return this.set(n*l,n*d,-n*(l*o+d*c)+o+e,-a*d,a*l,-a*(-d*o+l*c)+c+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(js.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(js.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wo.prototype.isMatrix3=!0;let Ke=Wo;const js=new Ke,nl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(a,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(a.r=wn(a.r),a.g=wn(a.g),a.b=wn(a.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(a.r=Pi(a.r),a.g=Pi(a.g),a.b=Pi(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Bn?hs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,o){return a.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:e,whitePoint:n,transfer:hs,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const rt=zu();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class ju{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gi===void 0&&(gi=fs("canvas")),gi.width=e.width,gi.height=e.height;const a=gi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vu=0;class Uo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,c=a.length;o<c;o++)a[o].isDataTexture?r.push(Vs(a[o].image)):r.push(Vs(a[o]))}else r=Vs(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Hu=0;const Hs=new ne;class kt extends fi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Tn,a=Tn,r=Vt,o=Vn,c=fn,l=$t,d=kt.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=pa(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hs).x}get height(){return this.source.getSize(Hs).y}get depth(){return this.source.getSize(Hs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ac;kt.DEFAULT_ANISOTROPY=1;const $o=class $o{constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*a+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*a+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*a+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const l=e.elements,d=l[0],u=l[4],p=l[8],h=l[1],g=l[5],x=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-_)<.01&&Math.abs(x-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+_)<.1&&Math.abs(x+f)<.1&&Math.abs(d+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(d+1)/2,E=(g+1)/2,T=(m+1)/2,S=(u+h)/4,v=(p+_)/4,N=(x+f)/4;return y>E&&y>T?y<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(y),a=S/n,r=v/n):E>T?E<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),n=S/a,r=N/a):T<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(T),n=v/r,a=N/r),this.set(n,a,r,t),this}let M=Math.sqrt((f-x)*(f-x)+(p-_)*(p-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(f-x)/M,this.y=(p-_)/M,this.z=(h-u)/M,this.w=Math.acos((d+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$o.prototype.isVector4=!0;let St=$o;class Wu extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=new kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Wu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fc extends kt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends kt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const vs=class vs{constructor(e,t,n,a,r,o,c,l,d,u,p,h,g,x,_,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,o,c,l,d,u,p,h,g,x,_,f)}set(e,t,n,a,r,o,c,l,d,u,p,h,g,x,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=a,m[1]=r,m[5]=o,m[9]=c,m[13]=l,m[2]=d,m[6]=u,m[10]=p,m[14]=h,m[3]=g,m[7]=x,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,o=Math.cos(n),c=Math.sin(n),l=Math.cos(a),d=Math.sin(a),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=o*u,g=o*p,x=c*u,_=c*p;t[0]=l*u,t[4]=-l*p,t[8]=d,t[1]=g+x*d,t[5]=h-_*d,t[9]=-c*l,t[2]=_-h*d,t[6]=x+g*d,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,g=l*p,x=d*u,_=d*p;t[0]=h+_*c,t[4]=x*c-g,t[8]=o*d,t[1]=o*p,t[5]=o*u,t[9]=-c,t[2]=g*c-x,t[6]=_+h*c,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,g=l*p,x=d*u,_=d*p;t[0]=h-_*c,t[4]=-o*p,t[8]=x+g*c,t[1]=g+x*c,t[5]=o*u,t[9]=_-h*c,t[2]=-o*d,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,g=o*p,x=c*u,_=c*p;t[0]=l*u,t[4]=x*d-g,t[8]=h*d+_,t[1]=l*p,t[5]=_*d+h,t[9]=g*d-x,t[2]=-d,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*d,x=c*l,_=c*d;t[0]=l*u,t[4]=_-h*p,t[8]=x*p+g,t[1]=p,t[5]=o*u,t[9]=-c*u,t[2]=-d*u,t[6]=g*p+x,t[10]=h-_*p}else if(e.order==="XZY"){const h=o*l,g=o*d,x=c*l,_=c*d;t[0]=l*u,t[4]=-p,t[8]=d*u,t[1]=h*p+_,t[5]=o*u,t[9]=g*p-x,t[2]=x*p-g,t[6]=c*u,t[10]=_*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,qu)}lookAt(e,t,n){const a=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Ln.crossVectors(n,Ht),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Ln.crossVectors(n,Ht)),Ln.normalize(),wa.crossVectors(Ht,Ln),a[0]=Ln.x,a[4]=wa.x,a[8]=Ht.x,a[1]=Ln.y,a[5]=wa.y,a[9]=Ht.y,a[2]=Ln.z,a[6]=wa.z,a[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,o=n[0],c=n[4],l=n[8],d=n[12],u=n[1],p=n[5],h=n[9],g=n[13],x=n[2],_=n[6],f=n[10],m=n[14],M=n[3],y=n[7],E=n[11],T=n[15],S=a[0],v=a[4],N=a[8],O=a[12],C=a[1],D=a[5],F=a[9],q=a[13],I=a[2],V=a[6],Q=a[10],j=a[14],oe=a[3],W=a[7],te=a[11],ie=a[15];return r[0]=o*S+c*C+l*I+d*oe,r[4]=o*v+c*D+l*V+d*W,r[8]=o*N+c*F+l*Q+d*te,r[12]=o*O+c*q+l*j+d*ie,r[1]=u*S+p*C+h*I+g*oe,r[5]=u*v+p*D+h*V+g*W,r[9]=u*N+p*F+h*Q+g*te,r[13]=u*O+p*q+h*j+g*ie,r[2]=x*S+_*C+f*I+m*oe,r[6]=x*v+_*D+f*V+m*W,r[10]=x*N+_*F+f*Q+m*te,r[14]=x*O+_*q+f*j+m*ie,r[3]=M*S+y*C+E*I+T*oe,r[7]=M*v+y*D+E*V+T*W,r[11]=M*N+y*F+E*Q+T*te,r[15]=M*O+y*q+E*j+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],o=e[1],c=e[5],l=e[9],d=e[13],u=e[2],p=e[6],h=e[10],g=e[14],x=e[3],_=e[7],f=e[11],m=e[15],M=l*g-d*h,y=c*g-d*p,E=c*h-l*p,T=o*g-d*u,S=o*h-l*u,v=o*p-c*u;return t*(_*M-f*y+m*E)-n*(x*M-f*T+m*S)+a*(x*y-_*T+m*v)-r*(x*E-_*S+f*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],d=e[6],u=e[10];return t*(o*u-c*d)-n*(r*u-c*l)+a*(r*d-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],c=e[5],l=e[6],d=e[7],u=e[8],p=e[9],h=e[10],g=e[11],x=e[12],_=e[13],f=e[14],m=e[15],M=t*c-n*o,y=t*l-a*o,E=t*d-r*o,T=n*l-a*c,S=n*d-r*c,v=a*d-r*l,N=u*_-p*x,O=u*f-h*x,C=u*m-g*x,D=p*f-h*_,F=p*m-g*_,q=h*m-g*f,I=M*q-y*F+E*D+T*C-S*O+v*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return e[0]=(c*q-l*F+d*D)*V,e[1]=(a*F-n*q-r*D)*V,e[2]=(_*v-f*S+m*T)*V,e[3]=(h*S-p*v-g*T)*V,e[4]=(l*C-o*q-d*O)*V,e[5]=(t*q-a*C+r*O)*V,e[6]=(f*E-x*v-m*y)*V,e[7]=(u*v-h*E+g*y)*V,e[8]=(o*F-c*C+d*N)*V,e[9]=(n*C-t*F-r*N)*V,e[10]=(x*S-_*E+m*M)*V,e[11]=(p*E-u*S-g*M)*V,e[12]=(c*O-o*D-l*N)*V,e[13]=(t*D-n*O+a*N)*V,e[14]=(_*y-x*T-f*M)*V,e[15]=(u*T-p*y+h*M)*V,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,o=e.x,c=e.y,l=e.z,d=r*o,u=r*c;return this.set(d*o+n,d*c-a*l,d*l+a*c,0,d*c+a*l,u*c+n,u*l-a*o,0,d*l-a*c,u*l+a*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,o){return this.set(1,n,r,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,o=t._y,c=t._z,l=t._w,d=r+r,u=o+o,p=c+c,h=r*d,g=r*u,x=r*p,_=o*u,f=o*p,m=c*p,M=l*d,y=l*u,E=l*p,T=n.x,S=n.y,v=n.z;return a[0]=(1-(_+m))*T,a[1]=(g+E)*T,a[2]=(x-y)*T,a[3]=0,a[4]=(g-E)*S,a[5]=(1-(h+m))*S,a[6]=(f+M)*S,a[7]=0,a[8]=(x+y)*v,a[9]=(f-M)*v,a[10]=(1-(h+_))*v,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=xi.set(a[0],a[1],a[2]).length();const c=xi.set(a[4],a[5],a[6]).length(),l=xi.set(a[8],a[9],a[10]).length();r<0&&(o=-o),Jt.copy(this);const d=1/o,u=1/c,p=1/l;return Jt.elements[0]*=d,Jt.elements[1]*=d,Jt.elements[2]*=d,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=p,Jt.elements[9]*=p,Jt.elements[10]*=p,t.setFromRotationMatrix(Jt),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,a,r,o,c=an,l=!1){const d=this.elements,u=2*r/(t-e),p=2*r/(n-a),h=(t+e)/(t-e),g=(n+a)/(n-a);let x,_;if(l)x=r/(o-r),_=o*r/(o-r);else if(c===an)x=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(c===la)x=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=u,d[4]=0,d[8]=h,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=_,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,a,r,o,c=an,l=!1){const d=this.elements,u=2/(t-e),p=2/(n-a),h=-(t+e)/(t-e),g=-(n+a)/(n-a);let x,_;if(l)x=1/(o-r),_=o/(o-r);else if(c===an)x=-2/(o-r),_=-(o+r)/(o-r);else if(c===la)x=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=u,d[4]=0,d[8]=0,d[12]=h,d[1]=0,d[5]=p,d[9]=0,d[13]=g,d[2]=0,d[6]=0,d[10]=x,d[14]=_,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vs.prototype.isMatrix4=!0;let vt=vs;const xi=new ne,Jt=new vt,Xu=new ne(0,0,0),qu=new ne(1,1,1),Ln=new ne,wa=new ne,Ht=new ne,al=new vt,sl=new ki;class Jn{constructor(e=0,t=0,n=0,a=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],o=a[4],c=a[8],l=a[1],d=a[5],u=a[9],p=a[2],h=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yu=0;const rl=new ne,vi=new ki,Sn=new vt,Ra=new ne,$i=new ne,Zu=new ne,Ku=new ki,ol=new ne(1,0,0),ll=new ne(0,1,0),cl=new ne(0,0,1),dl={type:"added"},Ju={type:"removed"},_i={type:"childadded",child:null},Ws={type:"childremoved",child:null};class It extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new ne,t=new Jn,n=new ki,a=new ne(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt($i,Ra,this.up):Sn.lookAt(Ra,$i,this.up),this.quaternion.setFromRotationMatrix(Sn),a&&(Sn.extractRotation(a.matrixWorld),vi.setFromRotationMatrix(Sn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),_i.child=e,this.dispatchEvent(_i),_i.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(c=>({...c})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let d=0,u=l.length;d<u;d++){const p=l[d];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,d=this.material.length;l<d;l++)c.push(r(e.materials,this.material[l]));a.material=c}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];a.animations.push(r(e.animations,l))}}if(t){const c=o(e.geometries),l=o(e.materials),d=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),g=o(e.animations),x=o(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=a,n;function o(c){const l=[];for(const d in c){const u=c[d];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new ne(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ca extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,o=null;const c=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),m=this._getHandJoint(d,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],h=u.position.distanceTo(p.position),g=.02,x=.005;d.inputState.pinching&&h>g+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=g-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ca;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=rt.workingColorSpace){if(e=Fu(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xs(o,r,e+1/3),this.g=Xs(o,r,e),this.b=Xs(o,r,e-1/3)}return rt.colorSpaceToWorking(this,a),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=a[1],c=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Bc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return rt.workingToColorSpace(Ft.copy(this),e),Math.round(ot(Ft.r*255,0,255))*65536+Math.round(ot(Ft.g*255,0,255))*256+Math.round(ot(Ft.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,a=Ft.g,r=Ft.b,o=Math.max(n,a,r),c=Math.min(n,a,r);let l,d;const u=(c+o)/2;if(c===o)l=0,d=0;else{const p=o-c;switch(d=u<=.5?p/(o+c):p/(2-o-c),o){case n:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-n)/p+2;break;case r:l=(n-a)/p+4;break}l/=6}return e.h=l,e.s=d,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Yt){rt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,a=Ft.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Pa);const n=Gs(Dn.h,Pa.h,t),a=Gs(Dn.s,Pa.s,t),r=Gs(Dn.l,Pa.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new lt;lt.NAMES=Bc;class eh extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qt=new ne,yn=new ne,qs=new ne,bn=new ne,Si=new ne,yi=new ne,ul=new ne,Ys=new ne,Zs=new ne,Ks=new ne,Js=new St,Qs=new St,er=new St;class nn{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Qt.subVectors(e,t),a.cross(Qt);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){Qt.subVectors(a,t),yn.subVectors(n,t),qs.subVectors(e,t);const o=Qt.dot(Qt),c=Qt.dot(yn),l=Qt.dot(qs),d=yn.dot(yn),u=yn.dot(qs),p=o*d-c*c;if(p===0)return r.set(0,0,0),null;const h=1/p,g=(d*l-c*u)*h,x=(o*u-c*l)*h;return r.set(1-g-x,x,g)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,a,r,o,c,l){return this.getBarycoord(e,t,n,a,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(c,bn.z),l)}static getInterpolatedAttribute(e,t,n,a,r,o){return Js.setScalar(0),Qs.setScalar(0),er.setScalar(0),Js.fromBufferAttribute(e,t),Qs.fromBufferAttribute(e,n),er.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(Js,r.x),o.addScaledVector(Qs,r.y),o.addScaledVector(er,r.z),o}static isFrontFacing(e,t,n,a){return Qt.subVectors(n,t),yn.subVectors(e,t),Qt.cross(yn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let o,c;Si.subVectors(a,n),yi.subVectors(r,n),Ys.subVectors(e,n);const l=Si.dot(Ys),d=yi.dot(Ys);if(l<=0&&d<=0)return t.copy(n);Zs.subVectors(e,a);const u=Si.dot(Zs),p=yi.dot(Zs);if(u>=0&&p<=u)return t.copy(a);const h=l*p-u*d;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Si,o);Ks.subVectors(e,r);const g=Si.dot(Ks),x=yi.dot(Ks);if(x>=0&&g<=x)return t.copy(r);const _=g*d-l*x;if(_<=0&&d>=0&&x<=0)return c=d/(d-x),t.copy(n).addScaledVector(yi,c);const f=u*x-g*p;if(f<=0&&p-u>=0&&g-x>=0)return ul.subVectors(r,a),c=(p-u)/(p-u+(g-x)),t.copy(a).addScaledVector(ul,c);const m=1/(f+_+h);return o=_*m,c=h*m,t.copy(n).addScaledVector(Si,o).addScaledVector(yi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ma{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const a=e.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),La.subVectors(this.max,Xi),bi.subVectors(e.a,Xi),Mi.subVectors(e.b,Xi),Ei.subVectors(e.c,Xi),Un.subVectors(Mi,bi),On.subVectors(Ei,Mi),ai.subVectors(bi,Ei);let t=[0,-Un.z,Un.y,0,-On.z,On.y,0,-ai.z,ai.y,Un.z,0,-Un.x,On.z,0,-On.x,ai.z,0,-ai.x,-Un.y,Un.x,0,-On.y,On.x,0,-ai.y,ai.x,0];return!tr(t,bi,Mi,Ei,La)||(t=[1,0,0,0,1,0,0,0,1],!tr(t,bi,Mi,Ei,La))?!1:(Da.crossVectors(Un,On),t=[Da.x,Da.y,Da.z],tr(t,bi,Mi,Ei,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],en=new ne,Ia=new ma,bi=new ne,Mi=new ne,Ei=new ne,Un=new ne,On=new ne,ai=new ne,Xi=new ne,La=new ne,Da=new ne,si=new ne;function tr(i,e,t,n,a){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);const c=a.x*Math.abs(si.x)+a.y*Math.abs(si.y)+a.z*Math.abs(si.z),l=e.dot(si),d=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(l,d,u),Math.min(l,d,u))>c)return!1}return!0}const Mt=new ne,Ua=new ct;let th=0;class Xn extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=hn,this.version=0,this._normalizationScale=e!==void 0?Do(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),a=this._normalize(a),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gu(e,this.array)}}class Gc extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zc extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const nh=new ma,qi=new ne,nr=new ne;class ws{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nh.setFromPoints(e).getCenter(n);let a=0;for(let r=0,o=e.length;r<o;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(qi,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(nr)),this.expandByPoint(qi.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ih=0;const qt=new vt,ir=new It,Ai=new ne,Wt=new ma,Yi=new ma,wt=new ne;class vn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?zc:Gc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const o=e[a];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];Yi.setFromBufferAttribute(c),this.morphTargetsRelative?(wt.addVectors(Wt.min,Yi.min),Wt.expandByPoint(wt),wt.addVectors(Wt.max,Yi.max),Wt.expandByPoint(wt)):(Wt.expandByPoint(Yi.min),Wt.expandByPoint(Yi.max))}Wt.getCenter(n);let a=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const c=t[r],l=this.morphTargetsRelative;for(let d=0,u=c.count;d<u;d++)wt.fromBufferAttribute(c,d),l&&(Ai.fromBufferAttribute(e,d),wt.add(Ai)),a=Math.max(a,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const c=[],l=[],d=new Uint8Array(n.count);for(let O=0;O<n.count;O++)c[O]=new ne,l[O]=new ne;const u=new ne,p=new ne,h=new ne,g=new ct,x=new ct,_=new ct,f=new ne,m=new ne;function M(O,C,D){d[O]=d[C]=d[D]=1,u.fromBufferAttribute(n,O),p.fromBufferAttribute(n,C),h.fromBufferAttribute(n,D),g.fromBufferAttribute(r,O),x.fromBufferAttribute(r,C),_.fromBufferAttribute(r,D),p.sub(u),h.sub(u),x.sub(g),_.sub(g);const F=1/(x.x*_.y-_.x*x.y);isFinite(F)&&(f.copy(p).multiplyScalar(_.y).addScaledVector(h,-x.y).multiplyScalar(F),m.copy(h).multiplyScalar(x.x).addScaledVector(p,-_.x).multiplyScalar(F),c[O].add(f),c[C].add(f),c[D].add(f),l[O].add(m),l[C].add(m),l[D].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,C=y.length;O<C;++O){const D=y[O],F=D.start,q=D.count;for(let I=F,V=F+q;I<V;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new ne,T=new ne,S=new ne,v=new ne;function N(O){S.fromBufferAttribute(a,O),v.copy(S);const C=c[O];E.copy(C),E.sub(S.multiplyScalar(S.dot(C))).normalize(),T.crossVectors(v,C);const F=T.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,C=n.count;O<C;++O)d[O]&&N(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const a=new ne,r=new ne,o=new ne,c=new ne,l=new ne,d=new ne,u=new ne,p=new ne;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),_=e.getX(h+1),f=e.getX(h+2);a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),u.subVectors(o,r),p.subVectors(a,r),u.cross(p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,f),c.add(u),l.add(u),d.add(u),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,d.x,d.y,d.z)}else for(let h=0,g=t.count;h<g;h+=3)a.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),p.subVectors(a,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(c,l){const d=c.array,u=c.itemSize,p=c.normalized,h=new d.constructor(l.length*u);let g=0,x=0;for(let _=0,f=l.length;_<f;_++){c.isInterleavedBufferAttribute?g=l[_]*c.data.stride+c.offset:g=l[_]*u;for(let m=0;m<u;m++)h[x++]=d[g++]}return new Xn(h,u,p)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,a=this.attributes;for(const c in a){const l=a[c],d=e(l,n);t.setAttribute(c,d)}const r=this.morphAttributes;for(const c in r){const l=[],d=r[c];for(let u=0,p=d.length;u<p;u++){const h=d[u],g=e(h,n);l.push(g)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,l=o.length;c<l;c++){const d=o[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const d=n[l];e.data.attributes[l]=d.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],u=[];for(let p=0,h=d.length;p<h;p++){const g=d[p];u.push(g.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const d in a){const u=a[d];this.setAttribute(d,u.clone(t))}const r=e.morphAttributes;for(const d in r){const u=[],p=r[d];for(let h=0,g=p.length;h<g;h++)u.push(p[h].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,u=o.length;d<u;d++){const p=o[d];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ar=new ne,ah=new ne,sh=new Ke;class kn{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ar.subVectors(n,t).cross(ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(ar),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(a,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),a=this.coplanarPoint(ar).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let rh=0;class Bi extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=na,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const o=[];for(const c in r){const l=r[c];delete l.metadata,o.push(l)}return o}if(t){const r=a(e.textures),o=a(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const En=new ne,sr=new ne,Oa=new ne,Fa=new ne;class jc{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){sr.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Fa.copy(this.origin).sub(sr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),c=Fa.dot(this.direction),l=-Fa.dot(Oa),d=Fa.lengthSq(),u=Math.abs(1-o*o);let p,h,g,x;if(u>0)if(p=o*l-c,h=o*c-l,x=r*u,p>=0)if(h>=-x)if(h<=x){const _=1/u;p*=_,h*=_,g=p*(p+o*h+2*c)+h*(o*p+h+2*l)+d}else h=r,p=Math.max(0,-(o*h+c)),g=-p*p+h*(h+2*l)+d;else h=-r,p=Math.max(0,-(o*h+c)),g=-p*p+h*(h+2*l)+d;else h<=-x?(p=Math.max(0,-(-o*r+c)),h=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+h*(h+2*l)+d):h<=x?(p=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+d):(p=Math.max(0,-(o*r+c)),h=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+h*(h+2*l)+d);else h=o>0?-r:r,p=Math.max(0,-(o*h+c)),g=-p*p+h*(h+2*l)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(sr).addScaledVector(Oa,h),g}intersectSphere(e,t){if(e.radius<0)return null;En.subVectors(e.center,this.origin);const n=En.dot(this.direction),a=En.dot(En)-n*n,r=e.radius*e.radius;if(a>r)return null;const o=Math.sqrt(r-a),c=n-o,l=n+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,o,c,l;const d=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return d>=0?(n=(e.min.x-h.x)*d,a=(e.max.x-h.x)*d):(n=(e.max.x-h.x)*d,a=(e.min.x-h.x)*d),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>a||((r>n||isNaN(n))&&(n=r),(o<a||isNaN(a))&&(a=o),p>=0?(c=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(c=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||c>a)||((c>n||n!==n)&&(n=c),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,a,r){const o=this.origin,c=this.direction,l=c.x,d=c.y,u=c.z,p=e.x-o.x,h=e.y-o.y,g=e.z-o.z,x=t.x-o.x,_=t.y-o.y,f=t.z-o.z,m=n.x-o.x,M=n.y-o.y,y=n.z-o.z,E=Math.abs(l),T=Math.abs(d),S=Math.abs(u);let v,N,O,C,D,F,q,I,V,Q,j,oe;if(E>=T&&E>=S?(O=l,F=p,V=x,oe=m,l>=0?(v=d,N=u,C=h,D=g,q=_,I=f,Q=M,j=y):(v=u,N=d,C=g,D=h,q=f,I=_,Q=y,j=M)):T>=S?(O=d,F=h,V=_,oe=M,d>=0?(v=u,N=l,C=g,D=p,q=f,I=x,Q=y,j=m):(v=l,N=u,C=p,D=g,q=x,I=f,Q=m,j=y)):(O=u,F=g,V=f,oe=y,u>=0?(v=l,N=d,C=p,D=h,q=x,I=_,Q=m,j=M):(v=d,N=l,C=h,D=p,q=_,I=x,Q=M,j=m)),O===0)return null;const W=v/O,te=N/O,ie=1/O,Se=C-W*F,Ue=D-te*F,X=q-W*V,me=I-te*V,ge=Q-W*oe,he=j-te*oe,K=ge*me-he*X,Re=Se*he-Ue*ge,Oe=X*Ue-me*Se;if(a){if(K<0||Re<0||Oe<0)return null}else if((K<0||Re<0||Oe<0)&&(K>0||Re>0||Oe>0))return null;const Ee=K+Re+Oe;if(Ee===0)return null;const Ce=ie*(K*F+Re*V+Oe*oe);return(Ee>0?Ce<0:Ce>0)?null:this.at(Ce/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vc extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hl=new vt,ri=new jc,ka=new ws,fl=new ne,Ba=new ne,Ga=new ne,za=new ne,rr=new ne,ja=new ne,pl=new ne,Va=new ne;class Cn extends It{constructor(e=new vn,t=new Vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const c=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(r&&c){ja.set(0,0,0);for(let l=0,d=r.length;l<d;l++){const u=c[l],p=r[l];u!==0&&(rr.fromBufferAttribute(p,e),o?ja.addScaledVector(rr,u):ja.addScaledVector(rr.sub(t),u))}t.add(ja)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(ka.containsPoint(ri.origin)===!1&&(ri.intersectSphere(ka,fl)===null||ri.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(hl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(hl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let a;const r=this.geometry,o=this.material,c=r.index,l=r.attributes.position,d=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,g=r.drawRange;if(c!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const f=h[x],m=o[f.materialIndex],M=Math.max(f.start,g.start),y=Math.min(c.count,Math.min(f.start+f.count,g.start+g.count));for(let E=M,T=y;E<T;E+=3){const S=c.getX(E),v=c.getX(E+1),N=c.getX(E+2);a=Ha(this,m,e,n,d,u,p,S,v,N),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let f=x,m=_;f<m;f+=3){const M=c.getX(f),y=c.getX(f+1),E=c.getX(f+2);a=Ha(this,o,e,n,d,u,p,M,y,E),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const f=h[x],m=o[f.materialIndex],M=Math.max(f.start,g.start),y=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let E=M,T=y;E<T;E+=3){const S=E,v=E+1,N=E+2;a=Ha(this,m,e,n,d,u,p,S,v,N),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let f=x,m=_;f<m;f+=3){const M=f,y=f+1,E=f+2;a=Ha(this,o,e,n,d,u,p,M,y,E),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function oh(i,e,t,n,a,r,o,c){let l;if(e.side===zt?l=n.intersectTriangle(o,r,a,!0,c):l=n.intersectTriangle(a,r,o,e.side===ci,c),l===null)return null;Va.copy(c),Va.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Va);return d<t.near||d>t.far?null:{distance:d,point:Va.clone(),object:i}}function Ha(i,e,t,n,a,r,o,c,l,d){i.getVertexPosition(c,Ba),i.getVertexPosition(l,Ga),i.getVertexPosition(d,za);const u=oh(i,e,t,n,Ba,Ga,za,pl);if(u){const p=new ne;nn.getBarycoord(pl,Ba,Ga,za,p),a&&(u.uv=nn.getInterpolatedAttribute(a,c,l,d,p,new ct)),r&&(u.uv1=nn.getInterpolatedAttribute(r,c,l,d,p,new ct)),o&&(u.normal=nn.getInterpolatedAttribute(o,c,l,d,p,new ne),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:c,b:l,c:d,normal:new ne,materialIndex:0};nn.getNormal(Ba,Ga,za,h.normal),u.face=h,u.barycoord=p}return u}class lh extends kt{constructor(e=null,t=1,n=1,a,r,o,c,l,d=Pt,u=Pt,p,h){super(null,o,c,l,d,u,a,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oi=new ws,ch=new ct(.5,.5),Wa=new ne;class ca{constructor(e=new kn,t=new kn,n=new kn,a=new kn,r=new kn,o=new kn){this.planes=[e,t,n,a,r,o]}set(e,t,n,a,r,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(a),c[4].copy(r),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){const a=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],d=r[3],u=r[4],p=r[5],h=r[6],g=r[7],x=r[8],_=r[9],f=r[10],m=r[11],M=r[12],y=r[13],E=r[14],T=r[15];if(a[0].setComponents(d-o,g-u,m-x,T-M).normalize(),a[1].setComponents(d+o,g+u,m+x,T+M).normalize(),a[2].setComponents(d+c,g+p,m+_,T+y).normalize(),a[3].setComponents(d-c,g-p,m-_,T-y).normalize(),n)a[4].setComponents(l,h,f,E).normalize(),a[5].setComponents(d-l,g-h,m-f,T-E).normalize();else if(a[4].setComponents(d-l,g-h,m-f,T-E).normalize(),t===an)a[5].setComponents(d+l,g+h,m+f,T+E).normalize();else if(t===la)a[5].setComponents(l,h,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=ch.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Wa.x=a.normal.x>0?e.max.x:e.min.x,Wa.y=a.normal.y>0?e.max.y:e.min.y,Wa.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ml=new vt;class Oo{constructor(){this.coordinateSystem=an,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let a=0;a<t.length;a++){const r=t[a];ml.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[a]===void 0&&(n[a]=new ca),n[a].setFromProjectionMatrix(ml,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new ca),t[a].copy(n[a]);return this._count=e._count,this}clone(){return new Oo().copy(this)}}class Hc extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gl=new vt,lo=new jc,$a=new ws,Xa=new ne;class dh extends It{constructor(e=new vn,t=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(a),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;gl.copy(a).invert(),lo.copy(e.ray).applyMatrix4(gl);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,d=n.index,p=n.attributes.position;if(d!==null){const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=h,_=g;x<_;x++){const f=d.getX(x);Xa.fromBufferAttribute(p,f),xl(Xa,f,l,a,e,t,this)}}else{const h=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=h,_=g;x<_;x++)Xa.fromBufferAttribute(p,x),xl(Xa,x,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const c=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function xl(i,e,t,n,a,r,o){const c=lo.distanceSqToPoint(i);if(c<t){const l=new ne;lo.closestPointToPoint(i,l),l.applyMatrix4(n);const d=a.ray.origin.distanceTo(l);if(d<a.near||d>a.far)return;r.push({distance:d,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Wc extends kt{constructor(e=[],t=Li,n,a,r,o,c,l,d,u){super(e,t,n,a,r,o,c,l,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uh extends kt{constructor(e,t,n,a,r,o,c,l,d){super(e,t,n,a,r,o,c,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui extends kt{constructor(e,t,n=gn,a,r,o,c=Pt,l=Pt,d,u=Kn,p=1){if(u!==Kn&&u!==Hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,a,r,o,c,l,u,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $c extends Ui{constructor(e,t=gn,n=Li,a,r,o=Pt,c=Pt,l,d=Kn){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,a,r,o,c,l,d),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ga extends vn{constructor(e=1,t=1,n=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:o};const c=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const l=[],d=[],u=[],p=[];let h=0,g=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,a,o,2),x("x","z","y",1,-1,e,n,-t,a,o,3),x("x","y","z",1,-1,e,t,n,a,r,4),x("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(p,2));function x(_,f,m,M,y,E,T,S,v,N,O){const C=E/v,D=T/N,F=E/2,q=T/2,I=S/2,V=v+1,Q=N+1;let j=0,oe=0;const W=new ne;for(let te=0;te<Q;te++){const ie=te*D-q;for(let Se=0;Se<V;Se++){const Ue=Se*C-F;W[_]=Ue*M,W[f]=ie*y,W[m]=I,d.push(W.x,W.y,W.z),W[_]=0,W[f]=0,W[m]=S>0?1:-1,u.push(W.x,W.y,W.z),p.push(Se/v),p.push(1-te/N),j+=1}}for(let te=0;te<N;te++)for(let ie=0;ie<v;ie++){const Se=h+ie+V*te,Ue=h+ie+V*(te+1),X=h+(ie+1)+V*(te+1),me=h+(ie+1)+V*te;l.push(Se,Ue,me),l.push(Ue,X,me),oe+=6}c.addGroup(g,oe,O),g+=oe,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rs extends vn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,o=t/2,c=Math.floor(n),l=Math.floor(a),d=c+1,u=l+1,p=e/c,h=t/l,g=[],x=[],_=[],f=[];for(let m=0;m<u;m++){const M=m*h-o;for(let y=0;y<d;y++){const E=y*p-r;x.push(E,-M,0),_.push(0,0,1),f.push(y/c),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<c;M++){const y=M+d*m,E=M+d*(m+1),T=M+1+d*(m+1),S=M+1+d*m;g.push(y,E,S),g.push(E,T,S)}this.setIndex(g),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ps extends vn{constructor(e=1,t=32,n=16,a=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:r,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+c,Math.PI);let d=0;const u=[],p=new ne,h=new ne,g=[],x=[],_=[],f=[];for(let m=0;m<=n;m++){const M=[],y=m/n,E=o+y*c,T=e*Math.cos(E),S=Math.sqrt(e*e-T*T);let v=0;m===0&&o===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let N=0;N<=t;N++){const O=N/t,C=a+O*r;p.x=-S*Math.cos(C),p.y=T,p.z=S*Math.sin(C),x.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),f.push(O+v,1-y),M.push(d++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const y=u[m][M+1],E=u[m][M],T=u[m+1][M],S=u[m+1][M+1];(m!==0||o>0)&&g.push(y,E,S),(m!==n-1||l<Math.PI)&&g.push(E,T,S)}this.setIndex(g),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(vl(a))a.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(vl(a[0])){const r=[];for(let o=0,c=a.length;o<c;o++)r[o]=a[o].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Oi(i[t]);for(const a in n)e[a]=n[a]}return e}function vl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const fh={clone:Oi,merge:Gt};var ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ph,this.fragmentShader=mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(a.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(a.value);break;case"v3":this.uniforms[n].value=new ne().fromArray(a.value);break;case"v4":this.uniforms[n].value=new St().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(a.value);break;case"m4":this.uniforms[n].value=new vt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gh extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xh extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vh extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _h extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yc extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const or=new vt,_l=new ne,Sl=new ne;class Sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(or,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=a?a.z/r.x:1,c=a?a.w/r.y:1,l=a?a.x/r.x:0,d=a?a.y/r.y:0;e.coordinateSystem===la||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*c,0,.5*c+d,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*c,0,.5*c+d,0,0,.5,.5,0,0,0,1),t.multiply(or)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qa=new ne,Ya=new ki,cn=new ne;class Zc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qa,Ya,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qa,Ya,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new ne,yl=new ct,bl=new ct;class tn extends Zc{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,yl,bl),t.subVectors(bl,yl)}setViewOffset(e,t,n,a,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,d=o.fullHeight;r+=o.offsetX*a/l,t-=o.offsetY*n/d,a*=o.width/l,n*=o.height/d}const c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Kc extends Zc{constructor(e=-1,t=1,n=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,o=n+e,c=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,c-=u*this.view.offsetY,l=c-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yh extends Sh{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bh extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Mh extends Yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ti=-90,Ni=1;class co extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new tn(Ti,Ni,e,t);a.layers=this.layers,this.add(a);const r=new tn(Ti,Ni,e,t);r.layers=this.layers,this.add(r);const o=new tn(Ti,Ni,e,t);o.layers=this.layers,this.add(o);const c=new tn(Ti,Ni,e,t);c.layers=this.layers,this.add(c);const l=new tn(Ti,Ni,e,t);l.layers=this.layers,this.add(l);const d=new tn(Ti,Ni,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,o,c,l]=t;for(const d of t)this.remove(d);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,c,l,d,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,a),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,a),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,a),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Eh extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Ml(i,e,t,n){const a=Ah(n);switch(t){case Cc:return i*e;case Ic:return i*e/a.components*a.byteLength;case Po:return i*e/a.components*a.byteLength;case di:return i*e*2/a.components*a.byteLength;case Io:return i*e*2/a.components*a.byteLength;case Pc:return i*e*3/a.components*a.byteLength;case fn:return i*e*4/a.components*a.byteLength;case Lo:return i*e*4/a.components*a.byteLength;case es:case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ns:case is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pr:case Lr:return Math.max(i,16)*Math.max(e,8)/4;case Cr:case Ir:return Math.max(i,8)*Math.max(e,8)/2;case Dr:case Ur:case Fr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case cs:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $r:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16;case io:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ds:case so:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ah(i){switch(i){case $t:case Tc:return{byteLength:1,components:1};case oa:case Nc:case xn:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case gn:case wo:case hn:return{byteLength:4,components:1};case wc:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jc(){let i=null,e=!1,t=null,n=null;function a(r,o){n=i.requestAnimationFrame(a),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Th(i){const e=new WeakMap;function t(c,l){const d=c.array,u=c.usage,p=d.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)g=i.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,l,d){const u=l.array,p=l.updateRanges;if(i.bindBuffer(d,c),p.length===0)i.bufferSubData(d,0,u);else{p.sort((g,x)=>g.start-x.start);let h=0;for(let g=1;g<p.length;g++){const x=p[h],_=p[g];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++h,p[h]=_)}p.length=h+1;for(let g=0,x=p.length;g<x;g++){const _=p[g];i.bufferSubData(d,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=e.get(c);l&&(i.deleteBuffer(l.buffer),e.delete(c))}function o(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,l));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,l),d.version=c.version}}return{get:a,remove:r,update:o}}var Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Af=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Op=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Nh,alphahash_pars_fragment:wh,alphamap_fragment:Rh,alphamap_pars_fragment:Ch,alphatest_fragment:Ph,alphatest_pars_fragment:Ih,aomap_fragment:Lh,aomap_pars_fragment:Dh,batching_pars_vertex:Uh,batching_vertex:Oh,begin_vertex:Fh,beginnormal_vertex:kh,bsdfs:Bh,iridescence_fragment:Gh,bumpmap_pars_fragment:zh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Wh,color_fragment:$h,color_pars_fragment:Xh,color_pars_vertex:qh,color_vertex:Yh,common:Zh,defaultnormal_vertex:Kh,displacementmap_pars_vertex:Jh,displacementmap_vertex:Qh,emissivemap_fragment:ef,emissivemap_pars_fragment:tf,colorspace_fragment:nf,colorspace_pars_fragment:af,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:of,envmap_pars_vertex:lf,envmap_physical_pars_fragment:_f,envmap_vertex:cf,fog_vertex:df,fog_pars_vertex:uf,fog_fragment:hf,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:xf,lights_pars_begin:vf,lights_toon_fragment:Sf,lights_toon_pars_fragment:yf,lights_phong_fragment:bf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Af,lights_fragment_begin:Tf,lights_fragment_maps:Nf,lights_fragment_end:wf,lightprobes_pars_fragment:Rf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:Uf,map_particle_fragment:Of,map_particle_pars_fragment:Ff,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Bf,morphinstance_vertex:Gf,morphcolor_vertex:zf,morphnormal_vertex:jf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Hf,normal_fragment_begin:Wf,normal_fragment_maps:$f,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:ep,opaque_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:ap,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:dp,shadowmap_vertex:up,shadowmask_pars_fragment:hp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:xp,specularmap_pars_fragment:vp,tonemapping_fragment:_p,tonemapping_pars_fragment:Sp,transmission_fragment:yp,transmission_pars_fragment:bp,uv_pars_fragment:Mp,uv_pars_vertex:Ep,uv_vertex:Ap,worldpos_vertex:Tp,background_vert:Np,background_frag:wp,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Ip,depth_vert:Lp,depth_frag:Dp,distance_vert:Up,distance_frag:Op,equirect_vert:Fp,equirect_frag:kp,linedashed_vert:Bp,linedashed_frag:Gp,meshbasic_vert:zp,meshbasic_frag:jp,meshlambert_vert:Vp,meshlambert_frag:Hp,meshmatcap_vert:Wp,meshmatcap_frag:$p,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:Kp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:em,points_vert:tm,points_frag:nm,shadow_vert:im,shadow_frag:am,sprite_vert:sm,sprite_frag:rm},Pe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},un={basic:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Gt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Gt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Gt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Gt([Pe.points,Pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Gt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Gt([Pe.common,Pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Gt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Gt([Pe.sprite,Pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Gt([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Gt([Pe.lights,Pe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};un.physical={uniforms:Gt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Za={r:0,b:0,g:0},om=new vt,Qc=new Ke;Qc.set(-1,0,0,0,1,0,0,0,1);function lm(i,e,t,n,a,r){const o=new lt(0);let c=a===!0?0:1,l,d,u=null,p=0,h=null;function g(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const E=M.backgroundBlurriness>0;y=e.get(y,E)}return y}function x(M){let y=!1;const E=g(M);E===null?f(o,c):E&&E.isColor&&(f(E,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,y){const E=g(y);E&&E.isCubeTexture?(d===void 0&&(d=new Cn(new ga(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Oi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(y.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Qc),d.material.toneMapped=rt.getTransfer(E.colorSpace)!==mt,(u!==E||p!==E.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,u=E,p=E.version,h=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Cn(new Rs(2,2),new ui({name:"BackgroundMaterial",uniforms:Oi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=rt.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,p=E.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,y){M.getRGB(Za,qc(i)),t.buffers.color.setClear(Za.r,Za.g,Za.b,y,r)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),c=y,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:x,addToRenderList:_,dispose:m}}function cm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=h(null);let r=a,o=!1;function c(D,F,q,I,V){let Q=!1;const j=p(D,I,q,F);r!==j&&(r=j,d(r.object)),Q=g(D,I,q,V),Q&&x(D,I,q,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,E(D,F,q,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function d(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function p(D,F,q,I){const V=I.wireframe===!0;let Q=n[F.id];Q===void 0&&(Q={},n[F.id]=Q);const j=D.isInstancedMesh===!0?D.id:0;let oe=Q[j];oe===void 0&&(oe={},Q[j]=oe);let W=oe[q.id];W===void 0&&(W={},oe[q.id]=W);let te=W[V];return te===void 0&&(te=h(l()),W[V]=te),te}function h(D){const F=[],q=[],I=[];for(let V=0;V<t;V++)F[V]=0,q[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:I,object:D,attributes:{},index:null}}function g(D,F,q,I){const V=r.attributes,Q=F.attributes;let j=0;const oe=q.getAttributes();for(const W in oe)if(oe[W].location>=0){const ie=V[W];let Se=Q[W];if(Se===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;j++}return r.attributesNum!==j||r.index!==I}function x(D,F,q,I){const V={},Q=F.attributes;let j=0;const oe=q.getAttributes();for(const W in oe)if(oe[W].location>=0){let ie=Q[W];ie===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),V[W]=Se,j++}r.attributes=V,r.attributesNum=j,r.index=I}function _(){const D=r.newAttributes;for(let F=0,q=D.length;F<q;F++)D[F]=0}function f(D){m(D,0)}function m(D,F){const q=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;q[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),V[D]!==F&&(i.vertexAttribDivisor(D,F),V[D]=F)}function M(){const D=r.newAttributes,F=r.enabledAttributes;for(let q=0,I=F.length;q<I;q++)F[q]!==D[q]&&(i.disableVertexAttribArray(q),F[q]=0)}function y(D,F,q,I,V,Q,j){j===!0?i.vertexAttribIPointer(D,F,q,V,Q):i.vertexAttribPointer(D,F,q,I,V,Q)}function E(D,F,q,I){_();const V=I.attributes,Q=q.getAttributes(),j=F.defaultAttributeValues;for(const oe in Q){const W=Q[oe];if(W.location>=0){let te=V[oe];if(te===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const ie=te.normalized,Se=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const X=Ue.buffer,me=Ue.type,ge=Ue.bytesPerElement,he=me===i.INT||me===i.UNSIGNED_INT||te.gpuType===wo;if(te.isInterleavedBufferAttribute){const K=te.data,Re=K.isInterleavedBuffer===!0?K.stride:K.itemSize,Oe=te.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let Ee=0;Ee<W.locationSize;Ee++)m(W.location+Ee,K.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)f(W.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Ee=0;Ee<W.locationSize;Ee++)y(W.location+Ee,Se/W.locationSize,me,ie,Re*ge,(Oe+Se/W.locationSize*Ee)*ge,he)}else{if(te.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)m(W.location+K,te.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let K=0;K<W.locationSize;K++)f(W.location+K);i.bindBuffer(i.ARRAY_BUFFER,X);for(let K=0;K<W.locationSize;K++)y(W.location+K,Se/W.locationSize,me,ie,Se*ge,Se/W.locationSize*K*ge,he)}}else if(j!==void 0){const ie=j[oe];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(W.location,ie);break;case 3:i.vertexAttrib3fv(W.location,ie);break;case 4:i.vertexAttrib4fv(W.location,ie);break;default:i.vertexAttrib1fv(W.location,ie)}}}}M()}function T(){O();for(const D in n){const F=n[D];for(const q in F){const I=F[q];for(const V in I){const Q=I[V];for(const j in Q)u(Q[j].object),delete Q[j];delete I[V]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const q in F){const I=F[q];for(const V in I){const Q=I[V];for(const j in Q)u(Q[j].object),delete Q[j];delete I[V]}}delete n[D.id]}function v(D){for(const F in n){const q=n[F];for(const I in q){const V=q[I];if(V[D.id]===void 0)continue;const Q=V[D.id];for(const j in Q)u(Q[j].object),delete Q[j];delete V[D.id]}}}function N(D){for(const F in n){const q=n[F],I=D.isInstancedMesh===!0?D.id:0,V=q[I];if(V!==void 0){for(const Q in V){const j=V[Q];for(const oe in j)u(j[oe].object),delete j[oe];delete V[Q]}delete q[I],Object.keys(q).length===0&&delete n[F]}}}function O(){C(),o=!0,r!==a&&(r=a,d(r.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:O,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:N,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function dm(i,e,t){let n;function a(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function c(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let h=0;for(let g=0;g<u;g++)h+=d[g];t.update(h,n,1)}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function um(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(v){return!(v!==fn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(v){const N=v===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==$t&&v!==hn&&!N&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const u=l(d);u!==d&&(Ze("WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:E,maxSamples:T,samples:S}}function hm(i){const e=this;let t=null,n=0,a=!1,r=!1;const o=new kn,c=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||n!==0||a;return a=h,n=p.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,g){const x=p.clippingPlanes,_=p.clipIntersection,f=p.clipShadows,m=i.get(p);if(!a||x===null||x.length===0||r&&!f)r?u(null):d();else{const M=r?0:n,y=M*4;let E=m.clippingState||null;l.value=E,E=u(x,h,y,g);for(let T=0;T!==y;++T)E[T]=t[T];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,g,x){const _=p!==null?p.length:0;let f=null;if(_!==0){if(f=l.value,x!==!0||f===null){const m=g+_*4,M=h.matrixWorldInverse;c.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let y=0,E=g;y!==_;++y,E+=4)o.copy(p[y]).applyMatrix4(M,c),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}class Fo extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Wc(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ga(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Ci});r.uniforms.tEquirect.value=t;const o=new Cn(a,r),c=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Vt),new co(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,a);e.setRenderTarget(r)}}const El=256,fm=3,pm=20,ed=256,td=16,mm=3,gm=new ne,xm=new lt;class ms{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new co(1,10,null),this._boxMesh=new Cn(new ga(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:o=256,position:c=gm}=r,l=this._renderer;this._setSize(o);const d=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,h=l.autoClearColor,g=l.autoClearDepth,x=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(xm));const f=new co(n,a,u);return f.position.copy(c),f.update(l,e),l.autoClear=p,l.autoClearColor=h,l.autoClearDepth=g,l.autoClearStencil=x,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(d,t)),this._applyPMREM(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(El,ku(e))}_fromTexture(e,t){e.mapping===Li||e.mapping===ra?this._setSize(e.image.length===0?El:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Al(e,!1,!1),n=Math.log2(e)-fm;for(let a=0;a<=n;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Al(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const a=this._boxMesh,r=this._cubeCamera;a.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Li||e.mapping===ra?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vm(),this._integrationMaterial=_m());const t=this._cubeSize,n=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/td);for(let o=0;o<=n;o++){const c=ms.lodToRoughness(o,n);if(o>n-mm)r.roughness.value=c,this._renderCube(e,o,this._integrationMaterial);else{const l=c>0?Math.log2(t)+.5*Math.log2(6/(ed*Math.pow(c,4)))+.5:0;a.roughness.value=c,a.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sm());const n=this._blurMaterial,a=n.uniforms,r=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=r.texture,this._renderCube(e,0,n),a.envMap.value=e.texture,this._renderCube(r,0,n)}}function Al(i,e,t){return new Fo(i,{minFilter:Vn,generateMipmaps:e,type:xn,colorSpace:us,depthBuffer:t})}function xa(i,e,t){return new ui({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:zt,blending:Ci,depthTest:!1,depthWrite:!1})}function vm(){return xa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ed}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _m(){return xa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:td}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sm(){return xa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${pm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Tl(){return xa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Nl(){return xa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ym(i){let e=new WeakMap,t=new WeakMap,n=null;function a(h,g=!1){return h==null?null:g?o(h):r(h)}function r(h){if(h&&h.isTexture){const g=h.mapping;if(g===Us||g===Os)if(e.has(h)){const x=e.get(h).texture;return c(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const _=new Fo(x.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",d),c(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const g=h.mapping,x=g===Us||g===Os,_=g===Li||g===ra;if(x||_){let f=t.get(h);const m=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ms(i)),f=x?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{const M=h.image;return x&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new ms(i)),f=x?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function c(h,g){return g===Us?h.mapping=Li:g===Os&&(h.mapping=ra),h}function l(h){let g=0;const x=6;for(let _=0;_<x;_++)h[_]!==void 0&&g++;return g===x}function d(h){const g=h.target;g.removeEventListener("dispose",d);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function u(h){const g=h.target;g.removeEventListener("dispose",u);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:p}}function bm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&as("WebGLRenderer: "+n+" extension not supported."),a}}}function Mm(i,e,t,n){const a={},r=new WeakMap,o=new FinalizationRegistry(x=>delete a[x]);function c(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(const f in x.attributes)e.remove(x.attributes[f]);x.removeEventListener("dispose",c),delete a[x.id],o.unregister(x);const _=r.get(x);_&&(e.remove(_),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(x,_){return a[_.id]!==void 0||(_.addEventListener("dispose",c),a[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(x){const _=x.attributes;for(const f in _)e.update(_[f],i.ARRAY_BUFFER)}function p(x){const _=x.index,f=x.attributes.position;let m=0;if(f===void 0)return;const M=_!==null?_.array.length:f.array.length/3-1,y=f.count>=65535?zc:Gc,E=new y(Math.ceil(M/3)*6,1),T=E.array;if(_!==null){const v=_.array;m=_.version;for(let N=0,O=0;N<M;N+=3){const C=v[N+0],D=v[N+1],F=v[N+2];T[O++]=C,T[O++]=D,T[O++]=D,T[O++]=F,T[O++]=F,T[O++]=C}}else{m=f.version;for(let v=0,N=0;v<M;v+=3){const O=v+0,C=v+1,D=v+2;T[N++]=O,T[N++]=C,T[N++]=C,T[N++]=D,T[N++]=D,T[N++]=O}}E.version=m;const S=r.get(x);S&&e.remove(S),r.set(x,E)}function h(x){const _=r.get(x);if(_){const f=x.index;f!==null&&_.version<f.version&&p(x)}else p(x);return r.get(x)}function g(){for(const x in a){const _=a[x].deref();_!==void 0&&l(_)}}return{get:d,update:u,getWireframeAttribute:h,dispose:g}}function Em(i,e,t){let n;function a(p){n=p}let r,o;function c(p){r=p.type,o=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*o),t.update(h,n,1)}function d(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,p*o,g),t.update(h,n,g))}function u(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,g);let _=0;for(let f=0;f<g;f++)_+=h[f];t.update(_,n,1)}this.setMode=a,this.setIndex=c,this.render=l,this.renderInstances=d,this.renderMultiDraw=u}function Am(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(r/3);break;case i.LINES:t.lines+=c*(r/2);break;case i.LINE_STRIP:t.lines+=c*(r-1);break;case i.LINE_LOOP:t.lines+=c*r;break;case i.POINTS:t.points+=c*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Tm(i,e,t){const n=new WeakMap,a=new St;function r(o,c,l){const d=o.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0;let h=n.get(c);if(h===void 0||h.count!==p){let O=function(){v.dispose(),n.delete(c),c.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,f=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let E=c.attributes.position.count*y,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const S=new Float32Array(E*T*4*p),v=new Fc(S,E,T,p);v.type=hn,v.needsUpdate=!0;const N=y*4;for(let C=0;C<p;C++){const D=f[C],F=m[C],q=M[C],I=E*T*4*C;for(let V=0;V<D.count;V++){const Q=V*N;g===!0&&(a.fromBufferAttribute(D,V),S[I+Q+0]=a.x,S[I+Q+1]=a.y,S[I+Q+2]=a.z,S[I+Q+3]=0),x===!0&&(a.fromBufferAttribute(F,V),S[I+Q+4]=a.x,S[I+Q+5]=a.y,S[I+Q+6]=a.z,S[I+Q+7]=0),_===!0&&(a.fromBufferAttribute(q,V),S[I+Q+8]=a.x,S[I+Q+9]=a.y,S[I+Q+10]=a.z,S[I+Q+11]=q.itemSize===4?a.w:1)}}h={count:p,texture:v,size:new ct(E,T)},n.set(c,h),c.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<d.length;_++)g+=d[_];const x=c.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",d)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Nm(i,e,t,n,a){let r=new WeakMap;function o(d){const u=a.render.frame,p=d.geometry,h=e.get(d,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),r.get(d)!==u&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,u))),d.isSkinnedMesh){const g=d.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return h}function c(){r=new WeakMap}function l(d){const u=d.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:c}}const wm={[vc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function Rm(i,e,t,n,a,r){const o=new mn(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,l=null,d=null;const u=new vn;u.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const p=new gh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Cn(u,p),g=new Kc(-1,1,1,-1,0,1);let x=null,_=null,f=!1,m,M=null,y=[],E=!1;this.setSize=function(T,S){o.setSize(T,S),c!==null&&c.setSize(T,S),l!==null&&l.setSize(T,S);for(let v=0;v<y.length;v++){const N=y[v];N.setSize&&N.setSize(T,S)}},this.setEffects=function(T){y=T,E=y.length>0&&y[0].isRenderPass===!0;const S=o.width,v=o.height;y.length>0&&c===null&&(c=new mn(S,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new mn(S,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}));const N=a===!0&&y.some(O=>O.needsDepthTexture===!0);N!==(o.depthTexture!==null)&&(N===!0&&d===null&&(d=new Ui(S,v),r===!0&&(d.format=Hn,d.type=Di)),o.dispose(),o.depthTexture=N?d:null,o.resolveDepthBuffer=N,o.storeMultisampledDepthBuffer=N);for(let O=0;O<y.length;O++){const C=y[O];C.setSize&&C.setSize(S,v),N&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(d)}},this.begin=function(T,S){if(f||T.toneMapping===Nn&&y.length===0)return!1;if(M=S,S!==null){const v=S.width,N=S.height;(o.width!==v||o.height!==N)&&this.setSize(v,N)}return E===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=Nn,!0},this.hasRenderPass=function(){return E},this.end=function(T,S){T.toneMapping=m,f=!0;let v=o,N=c;for(let O=0;O<y.length;O++){const C=y[O];C.enabled!==!1&&(C.render(T,N,v,S),C.needsSwap!==!1&&(v=N,N=N===c?l:c))}if(x!==T.outputColorSpace||_!==T.toneMapping){x=T.outputColorSpace,_=T.toneMapping,p.defines={},rt.getTransfer(x)===mt&&(p.defines.SRGB_TRANSFER="");const O=wm[_];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,T.setRenderTarget(M),T.render(h,g),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}const nd=new kt,id=new Ui(1,1),ad=new $c(1),sd=new Fc,rd=new $u,od=new Wc,wl=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Il=new Float32Array(4);function Gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=wl[a];if(r===void 0&&(r=new Float32Array(a),wl[a]=r),e!==0){n.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(r,c)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cs(i,e){let t=Rl[e];t===void 0&&(t=new Int32Array(e),Rl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),Tt(t,n)}}function Um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Tt(t,n)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Cl.set(n),i.uniformMatrix4fv(this.addr,!1,Cl),Tt(t,n)}}function Fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Ps(i){return i.version===0&&(i.compareFunction=Uc,i.needsUpdate=!0),i}function Wm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ps(id):r=nd,t.setTexture2D(e||r,a)}function $m(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||rd,a)}function Xm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ps(ad):r=od,t.setTextureCube(e||r,a)}function qm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||sd,a)}function Ym(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Um;case 35676:return Om;case 5124:case 35670:return Fm;case 35667:case 35671:return km;case 35668:case 35672:return Bm;case 35669:case 35673:return Gm;case 5125:return zm;case 36294:return jm;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Zm(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){const t=Gi(e,this.size,2);i.uniform2fv(this.addr,t)}function Jm(i,e){const t=Gi(e,this.size,3);i.uniform3fv(this.addr,t)}function Qm(i,e){const t=Gi(e,this.size,4);i.uniform4fv(this.addr,t)}function eg(i,e){const t=Gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tg(i,e){const t=Gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ng(i,e){const t=Gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ig(i,e){i.uniform1iv(this.addr,e)}function ag(i,e){i.uniform2iv(this.addr,e)}function sg(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function og(i,e){i.uniform1uiv(this.addr,e)}function lg(i,e){i.uniform2uiv(this.addr,e)}function cg(i,e){i.uniform3uiv(this.addr,e)}function dg(i,e){i.uniform4uiv(this.addr,e)}function ug(i,e,t){const n=this.cache,a=e.length,r=Cs(t,a);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ps(id):o=nd;for(let c=0;c!==a;++c)t.setTexture2D(e[c]||o,r[c])}function hg(i,e,t){const n=this.cache,a=e.length,r=Cs(t,a);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||rd,r[o])}function fg(i,e,t){const n=this.cache,a=e.length,r=Cs(t,a);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ps(ad):o=od;for(let c=0;c!==a;++c)t.setTextureCube(e[c]||o,r[c])}function pg(i,e,t){const n=this.cache,a=e.length,r=Cs(t,a);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||sd,r[o])}function mg(i){switch(i){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return ag;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ym(t.type)}}class xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mg(t.type)}}class vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const c=a[r];c.setValue(e,t[c.id],n)}}}const lr=/(\w+)(\])?(\[|\.)?/g;function Ll(i,e){i.seq.push(e),i.map[e.id]=e}function _g(i,e,t){const n=i.name,a=n.length;for(lr.lastIndex=0;;){const r=lr.exec(n),o=lr.lastIndex;let c=r[1];const l=r[2]==="]",d=r[3];if(l&&(c=c|0),d===void 0||d==="["&&o+2===a){Ll(t,d===void 0?new gg(c,i,e):new xg(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new vg(c),Ll(t,p)),t=p}}}class ss{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const c=e.getActiveUniform(t,o),l=e.getUniformLocation(t,c.name);_g(c,l,this)}const a=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(o):r.push(o);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,o=t.length;r!==o;++r){const c=t[r],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const o=e[a];o.id in t&&n.push(o)}return n}}function Dl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sg=37297;let yg=0;function bg(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=a;o<r;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const Ul=new Ke;function Mg(i){rt._getMatrix(Ul,rt.workingColorSpace,i);const e=`mat3( ${Ul.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case hs:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ol(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bg(i.getShaderSource(e),c)}else return r}function Eg(i,e){const t=Mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ag={[vc]:"Linear",[_c]:"Reinhard",[Sc]:"Cineon",[yc]:"ACESFilmic",[Mc]:"AgX",[Ec]:"Neutral",[bc]:"Custom"};function Tg(i,e){const t=Ag[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ka=new ne;function Ng(){rt.getLuminanceCoefficients(Ka);const i=Ka.x.toFixed(4),e=Ka.y.toFixed(4),t=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Rg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),o=r.name;let c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function Qi(i){return i!==""}function Fl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function kl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(i){return i.replace(Pg,Ig)}function Ig(i,e){const t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return uo(t)}const Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(Lg,Dg)}function Dg(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Gl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ug={[Qa]:"SHADOWMAP_TYPE_PCF",[Ji]:"SHADOWMAP_TYPE_VSM"};function Og(i){return Ug[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fg={[ra]:"ENVMAP_MODE_REFRACTION"};function kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bg={[xc]:"ENVMAP_BLENDING_MULTIPLY",[yu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Gg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[i.combine]||"ENVMAP_BLENDING_NONE"}function zg(i,e,t,n){const a=i.getContext(),r=t.defines;let o=t.vertexShader,c=t.fragmentShader;const l=Og(t),d=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=kg(t),p=Gg(t),h=wg(t),g=Rg(r),x=a.createProgram();let _,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),f.length>0&&(f+=`
`)):(_=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),f=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?et.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Eg("linearToOutputTexel",t.outputColorSpace),Ng(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=uo(o),o=Fl(o,t),o=kl(o,t),c=uo(c),c=Fl(c,t),c=kl(c,t),o=Bl(o),c=Bl(c),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=m+_+o,y=m+f+c,E=Dl(a,a.VERTEX_SHADER,M),T=Dl(a,a.FRAGMENT_SHADER,y);a.attachShader(x,E),a.attachShader(x,T),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function S(C){if(i.debug.checkShaderErrors){const D=a.getProgramInfoLog(x)||"",F=a.getShaderInfoLog(E)||"",q=a.getShaderInfoLog(T)||"",I=D.trim(),V=F.trim(),Q=q.trim();let j=!0,oe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,E,T);else{const W=Ol(a,E,"vertex"),te=Ol(a,T,"fragment");pt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+te)}else I!==""?Ze("WebGLProgram: Program Info Log:",I):(V===""||Q==="")&&(oe=!1);oe&&(C.diagnostics={runnable:j,programLog:I,vertexShader:{log:V,prefix:_},fragmentShader:{log:Q,prefix:f}})}a.deleteShader(E),a.deleteShader(T),v=new ss(a,x),N=Cg(a,x)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let N;this.getAttributes=function(){return N===void 0&&S(this),N};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(x,Sg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}let jg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hg(e),t.set(e,n)),n}}class Hg{constructor(e){this.id=jg++,this.code=e,this.usedTimes=0}}function Wg(i){return i===di||i===cs||i===ds}function $g(i,e,t,n,a,r){const o=new kc,c=new Vg,l=new Set,d=[],u=new Map,p=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,N,O,C,D,F){const q=C.fog,I=D.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||V,Q),oe=h[v.type];let W=n.precision;v.precision!==null&&(W=n.getMaxPrecision(v.precision),W!==v.precision&&Ze("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=te!==void 0?te.length:0;let Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Ue,X,me,ge;if(oe){const ce=un[oe];Ue=ce.vertexShader,X=ce.fragmentShader}else{Ue=v.vertexShader,X=v.fragmentShader;const ce=c.getVertexShaderStage(v),Ve=c.getFragmentShaderStage(v);c.update(v,ce,Ve),me=ce.id,ge=Ve.id}const he=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),Re=D.isInstancedMesh===!0,Oe=D.isBatchedMesh===!0,Ee=!!v.map,Ce=!!v.matcap,ve=!!j,Ae=ve&&j.isPMREMTexture===!0,Ge=!!v.aoMap,$e=!!v.lightMap,be=!!v.bumpMap&&v.wireframe===!1,je=!!v.normalMap,tt=!!v.displacementMap,Te=!!v.emissiveMap,it=!!v.metalnessMap,st=!!v.roughnessMap,Je=v.anisotropy>0,k=v.clearcoat>0,dt=v.diffuseRoughness>0,Ye=v.dispersion>0,qe=v.retroreflectivity>0,ye=v.iridescence>0,ht=v.sheen>0,Fe=v.transmission>0,He=Je&&!!v.anisotropyMap,w=k&&!!v.clearcoatMap,A=k&&!!v.clearcoatNormalMap,U=k&&!!v.clearcoatRoughnessMap,re=dt&&!!v.diffuseRoughnessMap,J=ye&&!!v.iridescenceMap,ue=ye&&!!v.iridescenceThicknessMap,pe=ht&&!!v.sheenColorMap,ee=ht&&!!v.sheenRoughnessMap,G=!!v.specularMap,Y=!!v.specularColorMap,P=!!v.specularIntensityMap,Z=Fe&&!!v.transmissionMap,H=Fe&&!!v.thicknessMap,de=!!v.gradientMap,se=!!v.alphaMap,xe=v.alphaTest>0,we=!!v.alphaHash,ze=!!v.extensions;let le=Nn;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(le=i.toneMapping);const Le=Ae?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,We={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:X,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:Oe,batchingColor:Oe&&D._colorsTexture!==null,instancing:Re,instancingColor:Re&&D.instanceColor!==null,instancingMorph:Re&&D.morphTexture!==null,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Ce,envMap:ve,envMapMode:ve&&j.mapping,envMapPMREM:Ae,envMapMaxLod:Ae?Le.length-1:null,envMapSize:Ae?Le[0].width:null,aoMap:Ge,lightMap:$e,bumpMap:be,normalMap:je,displacementMap:tt,emissiveMap:Te,normalMapObjectSpace:je&&v.normalMapType===Au,normalMapTangentSpace:je&&v.normalMapType===ro,packedNormalMap:je&&v.normalMapType===ro&&Wg(v.normalMap.format),metalnessMap:it,roughnessMap:st,anisotropy:Je,anisotropyMap:He,clearcoat:k,clearcoatMap:w,clearcoatNormalMap:A,clearcoatRoughnessMap:U,diffuseRoughness:dt,diffuseRoughnessMap:re,dispersion:Ye,retroreflection:qe,iridescence:ye,iridescenceMap:J,iridescenceThicknessMap:ue,sheen:ht,sheenColorMap:pe,sheenRoughnessMap:ee,specularMap:G,specularColorMap:Y,specularIntensityMap:P,transmission:Fe,transmissionMap:Z,thicknessMap:H,gradientMap:de,opaque:v.transparent===!1&&v.blending===na&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:xe,alphaHash:we,combine:v.combine,mapUv:Ee&&g(v.map.channel),aoMapUv:Ge&&g(v.aoMap.channel),lightMapUv:$e&&g(v.lightMap.channel),bumpMapUv:be&&g(v.bumpMap.channel),normalMapUv:je&&g(v.normalMap.channel),displacementMapUv:tt&&g(v.displacementMap.channel),emissiveMapUv:Te&&g(v.emissiveMap.channel),metalnessMapUv:it&&g(v.metalnessMap.channel),roughnessMapUv:st&&g(v.roughnessMap.channel),anisotropyMapUv:He&&g(v.anisotropyMap.channel),clearcoatMapUv:w&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&g(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&g(v.diffuseRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&g(v.sheenRoughnessMap.channel),specularMapUv:G&&g(v.specularMap.channel),specularColorMapUv:Y&&g(v.specularColorMap.channel),specularIntensityMapUv:P&&g(v.specularIntensityMap.channel),transmissionMapUv:Z&&g(v.transmissionMap.channel),thicknessMapUv:H&&g(v.thicknessMap.channel),alphaMapUv:se&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(je||Je),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ee||se),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&je===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:K,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:F.filter(ce=>ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:Te&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ze&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&v.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(v){const N=[];if(v.shaderID?N.push(v.shaderID):(N.push(v.customVertexShaderID),N.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)N.push(O),N.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(f(N,v),m(N,v),N.push(i.outputColorSpace)),N.push(v.customProgramCacheKey),N.join()}function f(v,N){v.push(N.precision),v.push(N.outputColorSpace),v.push(N.envMapMode),v.push(N.envMapPMREM),v.push(N.envMapMaxLod),v.push(N.envMapSize),v.push(N.mapUv),v.push(N.alphaMapUv),v.push(N.lightMapUv),v.push(N.aoMapUv),v.push(N.bumpMapUv),v.push(N.normalMapUv),v.push(N.displacementMapUv),v.push(N.emissiveMapUv),v.push(N.metalnessMapUv),v.push(N.roughnessMapUv),v.push(N.anisotropyMapUv),v.push(N.clearcoatMapUv),v.push(N.clearcoatNormalMapUv),v.push(N.clearcoatRoughnessMapUv),v.push(N.diffuseRoughnessMapUv),v.push(N.iridescenceMapUv),v.push(N.iridescenceThicknessMapUv),v.push(N.sheenColorMapUv),v.push(N.sheenRoughnessMapUv),v.push(N.specularMapUv),v.push(N.specularColorMapUv),v.push(N.specularIntensityMapUv),v.push(N.transmissionMapUv),v.push(N.thicknessMapUv),v.push(N.combine),v.push(N.fogExp2),v.push(N.sizeAttenuation),v.push(N.morphTargetsCount),v.push(N.numSunLights),v.push(N.numDirLights),v.push(N.numPointLights),v.push(N.numSpotLights),v.push(N.numSpotLightMaps),v.push(N.numHemiLights),v.push(N.numRectAreaLights),v.push(N.numSunLightShadows),v.push(N.numDirLightShadows),v.push(N.numPointLightShadows),v.push(N.numSpotLightShadows),v.push(N.numSpotLightShadowsWithMaps),v.push(N.numLightProbes),v.push(N.numLightProbeGrids),v.push(N.shadowMapType),v.push(N.toneMapping),v.push(N.numClippingPlanes),v.push(N.numClipIntersection),v.push(N.depthPacking)}function m(v,N){o.disableAll(),N.instancing&&o.enable(0),N.instancingColor&&o.enable(1),N.instancingMorph&&o.enable(2),N.matcap&&o.enable(3),N.envMap&&o.enable(4),N.normalMapObjectSpace&&o.enable(5),N.normalMapTangentSpace&&o.enable(6),N.clearcoat&&o.enable(7),N.iridescence&&o.enable(8),N.alphaTest&&o.enable(9),N.vertexColors&&o.enable(10),N.vertexAlphas&&o.enable(11),N.vertexUv1s&&o.enable(12),N.vertexUv2s&&o.enable(13),N.vertexUv3s&&o.enable(14),N.vertexTangents&&o.enable(15),N.anisotropy&&o.enable(16),N.alphaHash&&o.enable(17),N.batching&&o.enable(18),N.dispersion&&o.enable(19),N.retroreflection&&o.enable(24),N.diffuseRoughness&&o.enable(25),N.batchingColor&&o.enable(20),N.gradientMap&&o.enable(21),N.packedNormalMap&&o.enable(22),N.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.reversedDepthBuffer&&o.enable(4),N.skinning&&o.enable(5),N.morphTargets&&o.enable(6),N.morphNormals&&o.enable(7),N.morphColors&&o.enable(8),N.premultipliedAlpha&&o.enable(9),N.shadowMapEnabled&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.decodeVideoTextureEmissive&&o.enable(20),N.alphaToCoverage&&o.enable(21),N.numLightProbeGrids>0&&o.enable(22),N.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const N=h[v.type];let O;if(N){const C=un[N];O=fh.clone(C.uniforms)}else O=v.uniforms;return O}function y(v,N){let O=u.get(N);return O!==void 0?++O.usedTimes:(O=new zg(i,N,v,a),d.push(O),u.set(N,O)),O}function E(v){if(--v.usedTimes===0){const N=d.indexOf(v);d[N]=d[d.length-1],d.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){c.remove(v)}function S(){c.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:d,dispose:S}}function Xg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function a(o,c,l){i.get(o)[c]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jl(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function o(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function c(h,g,x,_,f,m){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:g,material:x,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:f,group:m},i[e]=M):(M.id=h.id,M.object=h,M.geometry=g,M.material=x,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=f,M.group=m),e++,M}function l(h,g,x,_,f,m,M){M.reversedDepth===!0&&(f=-f);const y=c(h,g,x,_,f,m);x.transmission>0?n.push(y):x.transparent===!0?a.push(y):t.push(y)}function d(h,g,x,_,f,m){const M=c(h,g,x,_,f,m);x.transmission>0?n.unshift(M):x.transparent===!0?a.unshift(M):t.unshift(M)}function u(h,g){t.length>1&&t.sort(h||qg),n.length>1&&n.sort(g||zl),a.length>1&&a.sort(g||zl)}function p(){for(let h=e,g=i.length;h<g;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:l,unshift:d,finish:p,sort:u}}function Yg(){let i=new WeakMap;function e(n,a){const r=i.get(n);let o;return r===void 0?(o=new jl,i.set(n,[o])):a>=r.length?(o=new jl,r.push(o)):o=r[a],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new lt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function Kg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jg=0;function Qg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function e0(i){const e=new Zg,t=Kg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new ne);const a=new ne,r=new vt,o=new vt;function c(d){let u=0,p=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let g=0,x=0,_=0,f=0,m=0,M=0,y=0,E=0,T=0,S=0,v=0,N=0,O=0,C=0;d.sort(Qg);for(let F=0,q=d.length;F<q;F++){const I=d[F],V=I.color,Q=I.intensity,j=I.distance;let oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===di?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*Q,p+=V.g*Q,h+=V.b*Q;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],Q);C++}else if(I.isSunLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[x]=ie,n.sunShadowMap[x]=oe;const Se=te.getViewportCount();for(let Ue=0;Ue<Se;Ue++)n.sunShadowMatrix[_+Ue]=te.getMatrix(Ue),n.sunShadowCascade[_+Ue]=te._cascadeData[Ue];_+=Se,x++}n.sun[g]=W,g++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=oe,n.directionalShadowMatrix[f]=I.shadow.matrix,T++}n.directional[f]=W,f++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(Q),W.distance=j,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[M]=W;const te=I.shadow;if(I.map&&(n.spotLightMap[N]=I.map,N++,te.updateMatrices(I),I.castShadow&&O++),n.spotLightMatrix[M]=te.matrix,I.castShadow){const ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=oe,v++}M++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(V).multiplyScalar(Q),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[y]=W,y++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=oe,n.pointShadowMatrix[m]=I.shadow.matrix,S++}n.point[m]=W,m++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(Q),W.groundColor.copy(I.groundColor).multiplyScalar(Q),n.hemi[E]=W,E++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;const D=n.hash;(D.sunLength!==g||D.directionalLength!==f||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==y||D.hemiLength!==E||D.numSunShadows!==x||D.numDirectionalShadows!==T||D.numPointShadows!==S||D.numSpotShadows!==v||D.numSpotMaps!==N||D.numLightProbes!==C)&&(n.sun.length=g,n.directional.length=f,n.spot.length=M,n.rectArea.length=y,n.point.length=m,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+N-O,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=C,D.sunLength=g,D.directionalLength=f,D.pointLength=m,D.spotLength=M,D.rectAreaLength=y,D.hemiLength=E,D.numSunShadows=x,D.numDirectionalShadows=T,D.numPointShadows=S,D.numSpotShadows=v,D.numSpotMaps=N,D.numLightProbes=C,n.version=Jg++)}function l(d,u){let p=0,h=0,g=0,x=0,_=0,f=0;const m=u.matrixWorldInverse;for(let M=0,y=d.length;M<y;M++){const E=d[M];if(E.isSunLight){const T=n.sun[p];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),p++}else if(E.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),h++}else if(E.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),x++}else if(E.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),g++}else if(E.isHemisphereLight){const T=n.hemi[f];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),f++}}}return{setup:c,setupView:l,state:n}}function Vl(i){const e=new e0(i),t=[],n=[],a=[];function r(p){u.camera=p,t.length=0,n.length=0,a.length=0}function o(p){p.isLightProbeGrid?a.push(p):t.push(p)}function c(p){n.push(p)}function l(){e.setup(t),a.sort((p,h)=>p.priority-h.priority||p.id-h.id)}function d(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:c}}function t0(i){let e=new WeakMap;function t(a,r=0){const o=e.get(a);let c;return o===void 0?(c=new Vl(i),e.set(a,[c])):r>=o.length?(c=new Vl(i),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a0=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],s0=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Hl=new vt,Zi=new ne,cr=new ne;function r0(i,e,t){let n=new ca;const a=new ct,r=new ct,o=new St,c=new vh,l=new _h,d={},u=t.maxTextureSize,p={[ci]:zt,[zt]:ci,[An]:An},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new vn;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Cn(x,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let m=this.type;this.render=function(S,v,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;this.type===nu&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qa);const O=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ci),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=m!==this.type;q&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=S.length;I<V;I++){const Q=S[I],j=Q.shadow;if(j===void 0){Ze("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const oe=j.getFrameExtents();a.multiply(oe),r.copy(j.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/oe.x),a.x=r.x*oe.x,j.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/oe.y),a.y=r.y*oe.y,j.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=W,j.map===null||q===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ji){if(Q.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new mn(a.x,a.y,{format:di,type:xn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new Ui(a.x,a.y,hn),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=Kn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Pt,j.map.depthTexture.magFilter=Pt}else Q.isPointLight?(j.map=new Fo(a.x),j.map.depthTexture=new $c(a.x,gn)):(j.map=new mn(a.x,a.y),j.map.depthTexture=new Ui(a.x,a.y,gn)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=Kn,this.type===Qa?(j.map.depthTexture.compareFunction=W?Dc:Lc,j.map.depthTexture.minFilter=Vt,j.map.depthTexture.magFilter=Vt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Pt,j.map.depthTexture.magFilter=Pt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==a.x||j.map.height!==a.y)&&j.map.setSize(a.x,a.y);const te=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Q.isPointLight!==!0&&j.updateMatrices(Q,N);const ie=j.camera.layers.mask&4294967294?j.camera.layers:N.layers;for(let Se=0;Se<te;Se++){const Ue=j.getCamera(Se);if(Q.isPointLight){const X=j.camera,me=j.matrix,ge=Q.distance||X.far;ge!==X.far&&(X.far=ge,X.updateProjectionMatrix()),Zi.setFromMatrixPosition(Q.matrixWorld),X.position.copy(Zi),cr.copy(X.position),cr.add(a0[Se]),X.up.copy(s0[Se]),X.lookAt(cr),X.updateMatrixWorld(),me.makeTranslation(-Zi.x,-Zi.y,-Zi.z),Hl.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Hl,X.coordinateSystem,X.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(j.map),i.clear());const X=j.getViewport(Se);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),F.viewport(o)}n=j.getFrustum(Se),E(v,N,Ue,Q,ie,this.type)}j.isPointLightShadow!==!0&&this.type===Ji&&M(j,N),j.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(O,C,D)};function M(S,v){const N=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null?S.mapPass=new mn(a.x,a.y,{format:di,type:xn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(v,null,N,h,_,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value.set(S.map.width,S.map.height),g.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(v,null,N,g,_,null)}function y(S,v,N,O){let C=null;const D=N.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=N.isPointLight===!0?l:c,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const F=C.uuid,q=v.uuid;let I=d[F];I===void 0&&(I={},d[F]=I);let V=I[q];V===void 0&&(V=C.clone(),I[q]=V,v.addEventListener("dispose",T)),C=V}if(C.visible=v.visible,C.wireframe=v.wireframe,O===Ji?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:p[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,N.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=N}return C}function E(S,v,N,O,C,D){if(S.visible===!1)return;if(S.layers.test(C)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===Ji)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld);const I=e.update(S),V=S.material;if(Array.isArray(V)){const Q=I.groups;for(let j=0,oe=Q.length;j<oe;j++){const W=Q[j],te=V[W.materialIndex];if(te&&te.visible){const ie=y(S,te,O,D);S.onBeforeShadow(i,S,v,N,I,ie,W),i.renderBufferDirect(N,null,I,ie,S,W),S.onAfterShadow(i,S,v,N,I,ie,W)}}}else if(V.visible){const Q=y(S,V,O,D);S.onBeforeShadow(i,S,v,N,I,Q,null),i.renderBufferDirect(N,null,I,Q,S,null),S.onAfterShadow(i,S,v,N,I,Q,null)}}const q=S.children;for(let I=0,V=q.length;I<V;I++)E(q[I],v,N,O,C,D)}function T(S){S.target.removeEventListener("dispose",T);for(const N in d){const O=d[N],C=S.target.uuid;C in O&&(O[C].dispose(),delete O[C])}}}function o0(i,e){function t(){let P=!1;const Z=new St;let H=null;const de=new St(0,0,0,0);return{setMask:function(se){H!==se&&!P&&(i.colorMask(se,se,se,se),H=se)},setLocked:function(se){P=se},setClear:function(se,xe,we,ze,le){le===!0&&(se*=ze,xe*=ze,we*=ze),Z.set(se,xe,we,ze),de.equals(Z)===!1&&(i.clearColor(se,xe,we,ze),de.copy(Z))},reset:function(){P=!1,H=null,de.set(-1,0,0,0)}}}function n(){let P=!1,Z=!1,H=null,de=null,se=null;return{setReversed:function(xe){if(Z!==xe){const we=e.get("EXT_clip_control");xe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Z=xe;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return Z},setTest:function(xe){xe?K(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(xe){H!==xe&&!P&&(i.depthMask(xe),H=xe)},setFunc:function(xe){if(Z&&(xe=Ou[xe]),de!==xe){switch(xe){case yr:i.depthFunc(i.NEVER);break;case br:i.depthFunc(i.ALWAYS);break;case Mr:i.depthFunc(i.LESS);break;case sa:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case Tr:i.depthFunc(i.GREATER);break;case Nr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=xe}},setLocked:function(xe){P=xe},setClear:function(xe){se!==xe&&(se=xe,Z&&(xe=1-xe),i.clearDepth(xe))},reset:function(){P=!1,H=null,de=null,se=null,Z=!1}}}function a(){let P=!1,Z=null,H=null,de=null,se=null,xe=null,we=null,ze=null,le=null;return{setTest:function(Le){P||(Le?K(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(Le){Z!==Le&&!P&&(i.stencilMask(Le),Z=Le)},setFunc:function(Le,We,ce){(H!==Le||de!==We||se!==ce)&&(i.stencilFunc(Le,We,ce),H=Le,de=We,se=ce)},setOp:function(Le,We,ce){(xe!==Le||we!==We||ze!==ce)&&(i.stencilOp(Le,We,ce),xe=Le,we=We,ze=ce)},setLocked:function(Le){P=Le},setClear:function(Le){le!==Le&&(i.clearStencil(Le),le=Le)},reset:function(){P=!1,Z=null,H=null,de=null,se=null,xe=null,we=null,ze=null,le=null}}}const r=new t,o=new n,c=new a;let l={};const d=new WeakMap;let u={},p={},h={},g=new WeakMap,x=[],_=null,f=!1,m=null,M=null,y=null,E=null,T=null,S=null,v=null,N=new lt(0,0,0),O=0,C=!1,D=null,F=null,q=null,I=null,V=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,oe=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=oe>=1):W.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=oe>=2);let te=null,ie={};const Se=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),X=new St().fromArray(Se),me=new St().fromArray(Ue);function ge(P,Z,H,de){const se=new Uint8Array(4),xe=i.createTexture();i.bindTexture(P,xe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<H;we++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(Z+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return xe}const he={};he[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),K(i.DEPTH_TEST),o.setFunc(sa),be(!1),je(Yo),K(i.CULL_FACE),Ge(Ci);function K(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Re(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Oe(P,Z){return h[P]!==Z?(i.bindFramebuffer(P,Z),h[P]=Z,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Z),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ee(P,Z){let H=x,de=!1;if(P){H=g.get(Z),H===void 0&&(H=[],g.set(Z,H));const se=P.textures;if(H.length!==se.length||H[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,we=se.length;xe<we;xe++)H[xe]=i.COLOR_ATTACHMENT0+xe;H.length=se.length,de=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,de=!0);de&&i.drawBuffers(H)}function Ce(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const ve={[wi]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};ve[ru]=i.MIN,ve[ou]=i.MAX;const Ae={[lu]:i.ZERO,[cu]:i.ONE,[du]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[hu]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[_u]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(P,Z,H,de,se,xe,we,ze,le,Le){if(P===Ci){f===!0&&(Re(i.BLEND),f=!1);return}if(f===!1&&(K(i.BLEND),f=!0),P!==iu){if(P!==m||Le!==C){if((M!==wi||T!==wi)&&(i.blendEquation(i.FUNC_ADD),M=wi,T=wi),Le)switch(P){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFunc(i.ONE,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",P);break}else switch(P){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zo:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ko:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",P);break}y=null,E=null,S=null,v=null,N.set(0,0,0),O=0,m=P,C=Le}return}se=se||Z,xe=xe||H,we=we||de,(Z!==M||se!==T)&&(i.blendEquationSeparate(ve[Z],ve[se]),M=Z,T=se),(H!==y||de!==E||xe!==S||we!==v)&&(i.blendFuncSeparate(Ae[H],Ae[de],Ae[xe],Ae[we]),y=H,E=de,S=xe,v=we),(ze.equals(N)===!1||le!==O)&&(i.blendColor(ze.r,ze.g,ze.b,le),N.copy(ze),O=le),m=P,C=!1}function $e(P,Z){P.side===An?Re(i.CULL_FACE):K(i.CULL_FACE);let H=P.side===zt;Z&&(H=!H),be(H),P.blending===na&&P.transparent===!1?Ge(Ci):Ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const de=P.stencilWrite;c.setTest(de),de&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(P){D!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),D=P)}function je(P){P!==eu?(K(i.CULL_FACE),P!==F&&(P===Yo?i.cullFace(i.BACK):P===tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),F=P}function tt(P){P!==q&&(j&&i.lineWidth(P),q=P)}function Te(P,Z,H){P?(K(i.POLYGON_OFFSET_FILL),(I!==Z||V!==H)&&(I=Z,V=H,o.getReversed()&&(Z=-Z,H=-H),i.polygonOffset(Z,H))):Re(i.POLYGON_OFFSET_FILL)}function it(P){P?K(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function st(P){P===void 0&&(P=i.TEXTURE0+Q-1),te!==P&&(i.activeTexture(P),te=P)}function Je(P,Z,H){H===void 0&&(te===null?H=i.TEXTURE0+Q-1:H=te);let de=ie[H];de===void 0&&(de={type:void 0,texture:void 0},ie[H]=de),(de.type!==P||de.texture!==Z)&&(te!==H&&(i.activeTexture(H),te=H),i.bindTexture(P,Z||he[P]),de.type=P,de.texture=Z)}function k(){const P=ie[te];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function Ye(){try{i.compressedTexImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function qe(){try{i.texSubImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function ye(){try{i.texSubImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function He(){try{i.texStorage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function w(){try{i.texStorage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function A(){try{i.texImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function U(){try{i.texImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function re(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function J(P,Z){p[P]!==Z&&(i.pixelStorei(P,Z),p[P]=Z)}function ue(P){X.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),X.copy(P))}function pe(P){me.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),me.copy(P))}function ee(P,Z){let H=d.get(Z);H===void 0&&(H=new WeakMap,d.set(Z,H));let de=H.get(P);de===void 0&&(de=i.getUniformBlockIndex(Z,P.name),i.uniformBlockBinding(Z,de,de),H.set(P,de))}function G(P,Z,H){const se=d.get(Z).get(P);l[se]!==H&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,H),l[se]=H)}function Y(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},te=null,ie={},h={},l={},g=new WeakMap,x=[],_=null,f=!1,m=null,M=null,y=null,E=null,T=null,S=null,v=null,N=new lt(0,0,0),O=0,C=!1,D=null,F=null,q=null,I=null,V=null,X.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:K,disable:Re,bindFramebuffer:Oe,drawBuffers:Ee,useProgram:Ce,setBlending:Ge,setMaterial:$e,setFlipSided:be,setCullFace:je,setLineWidth:tt,setPolygonOffset:Te,setScissorTest:it,activeTexture:st,bindTexture:Je,unbindTexture:k,compressedTexImage2D:dt,compressedTexImage3D:Ye,texImage2D:A,texImage3D:U,pixelStorei:J,getParameter:re,updateUBOMapping:ee,uniformBlockBinding:G,texStorage2D:He,texStorage3D:w,texSubImage2D:qe,texSubImage3D:ye,compressedTexSubImage2D:ht,compressedTexSubImage3D:Fe,scissor:ue,viewport:pe,reset:Y}}function l0(i,e,t,n,a,r,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ct,u=new WeakMap,p=new Set;let h;const g=new WeakMap,x=new Set,_=new FinalizationRegistry(w=>x.delete(w));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,A){return f?new OffscreenCanvas(w,A):fs("canvas")}function M(w,A,U){let re=1;const J=He(w);if((J.width>U||J.height>U)&&(re=U/Math.max(J.width,J.height)),re<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ue=Math.floor(re*J.width),pe=Math.floor(re*J.height);h===void 0&&(h=m(ue,pe));const ee=A?m(ue,pe):h;return ee.width=ue,ee.height=pe,ee.getContext("2d").drawImage(w,0,0,ue,pe),Ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+pe+")."),ee}else return"data"in w&&Ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function y(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,A,U,re,J,ue=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe;re&&(pe=e.get("EXT_texture_norm16"),pe||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=A;if(A===i.RED&&(U===i.FLOAT&&(ee=i.R32F),U===i.HALF_FLOAT&&(ee=i.R16F),U===i.UNSIGNED_BYTE&&(ee=i.R8),U===i.UNSIGNED_SHORT&&pe&&(ee=pe.R16_EXT),U===i.SHORT&&pe&&(ee=pe.R16_SNORM_EXT)),A===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.R8UI),U===i.UNSIGNED_SHORT&&(ee=i.R16UI),U===i.UNSIGNED_INT&&(ee=i.R32UI),U===i.BYTE&&(ee=i.R8I),U===i.SHORT&&(ee=i.R16I),U===i.INT&&(ee=i.R32I)),A===i.RG&&(U===i.FLOAT&&(ee=i.RG32F),U===i.HALF_FLOAT&&(ee=i.RG16F),U===i.UNSIGNED_BYTE&&(ee=i.RG8),U===i.UNSIGNED_SHORT&&pe&&(ee=pe.RG16_EXT),U===i.SHORT&&pe&&(ee=pe.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.RG8UI),U===i.UNSIGNED_SHORT&&(ee=i.RG16UI),U===i.UNSIGNED_INT&&(ee=i.RG32UI),U===i.BYTE&&(ee=i.RG8I),U===i.SHORT&&(ee=i.RG16I),U===i.INT&&(ee=i.RG32I)),A===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),U===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),U===i.UNSIGNED_INT&&(ee=i.RGB32UI),U===i.BYTE&&(ee=i.RGB8I),U===i.SHORT&&(ee=i.RGB16I),U===i.INT&&(ee=i.RGB32I)),A===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),U===i.UNSIGNED_INT&&(ee=i.RGBA32UI),U===i.BYTE&&(ee=i.RGBA8I),U===i.SHORT&&(ee=i.RGBA16I),U===i.INT&&(ee=i.RGBA32I)),A===i.RGB&&(U===i.UNSIGNED_SHORT&&pe&&(ee=pe.RGB16_EXT),U===i.SHORT&&pe&&(ee=pe.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),A===i.RGBA){const G=ue?hs:rt.getTransfer(J);U===i.FLOAT&&(ee=i.RGBA32F),U===i.HALF_FLOAT&&(ee=i.RGBA16F),U===i.UNSIGNED_BYTE&&(ee=G===mt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&pe&&(ee=pe.RGBA16_EXT),U===i.SHORT&&pe&&(ee=pe.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(w,A){let U;return w?A===null||A===gn||A===Di?U=i.DEPTH24_STENCIL8:A===hn?U=i.DEPTH32F_STENCIL8:A===oa&&(U=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gn||A===Di?U=i.DEPTH_COMPONENT24:A===hn?U=i.DEPTH_COMPONENT32F:A===oa&&(U=i.DEPTH_COMPONENT16),U}function N(w,A){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==Vt?Math.log2(Math.max(A.width,A.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?A.mipmaps.length:1}function O(w){const A=new WeakRef(w);n.get(w).__ref=A,x.add(A),_.register(w,A,A)}function C(w){const A=n.get(w).__ref;A!==void 0&&(x.delete(A),_.unregister(A))}function D(w){q(w.target)}function F(w){I(w.target)}function q(w){w.removeEventListener("dispose",D),C(w),Q(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&p.delete(w)}function I(w){w.removeEventListener("dispose",F),C(w),oe(w)}function V(){for(const w of x){const A=w.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):q(A))}x.clear(),p.clear()}function Q(w){const A=n.get(w);if(A.__webglInit===void 0)return;const U=w.source,re=g.get(U);if(re){const J=re[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&j(w),Object.keys(re).length===0&&g.delete(U)}n.remove(w)}function j(w){const A=n.get(w);i.deleteTexture(A.__webglTexture);const U=w.source,re=g.get(U);delete re[A.__cacheKey],o.memory.textures--}function oe(w){const A=n.get(w);A.__depthDisposeCallback&&A.__depthDisposeCallback();const U=w.depthTexture;if(U&&U.renderTarget===w&&q(U),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let ue=0;ue<A.__webglFramebuffer[J].length;ue++)i.deleteFramebuffer(A.__webglFramebuffer[J][ue]);else i.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)i.deleteFramebuffer(A.__webglFramebuffer[J]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=w.textures;for(let J=0,ue=re.length;J<ue;J++){const pe=n.get(re[J]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(re[J])}n.remove(w)}let W=0;function te(){W=0}function ie(){return W}function Se(w){W=w}function Ue(){const w=W;return w>=a.maxTextures&&Ze("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,w}function X(w){const A=[];return A.push(w.wrapS),A.push(w.wrapT),A.push(w.wrapR||0),A.push(w.magFilter),A.push(w.minFilter),A.push(w.anisotropy),A.push(w.internalFormat),A.push(w.format),A.push(w.type),A.push(w.generateMipmaps),A.push(w.mipmapsAutoUpdate),A.push(w.premultiplyAlpha),A.push(w.flipY),A.push(w.unpackAlignment),A.push(w.colorSpace),A.join()}function me(w,A){const U=n.get(w);if(w.isVideoTexture&&ht(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const re=w.image;if(re===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{$e(U,w,A);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+A)}function ge(w,A){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){$e(U,w,A);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+A)}function he(w,A){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){$e(U,w,A);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+A)}function K(w,A){const U=n.get(w);if(w.version>0&&U.__version!==w.version){be(U,w,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+A)}const Re={[wr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Rr]:i.MIRRORED_REPEAT},Oe={[Pt]:i.NEAREST,[Mu]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Fs]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Ee={[Nu]:i.NEVER,[Uc]:i.ALWAYS,[wu]:i.LESS,[Lc]:i.LEQUAL,[Ru]:i.EQUAL,[Dc]:i.GEQUAL,[Cu]:i.GREATER,[Pu]:i.NOTEQUAL};function Ce(w,A){if(A.type===hn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Vt||A.magFilter===Fs||A.magFilter===Na||A.magFilter===Vn||A.minFilter===Vt||A.minFilter===Fs||A.minFilter===Na||A.minFilter===Vn)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Re[A.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Re[A.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Re[A.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Oe[A.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Oe[A.minFilter]),A.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pt||A.minFilter!==Na&&A.minFilter!==Vn||A.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ve(w,A){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",D),O(A));const re=A.source;let J=g.get(re);J===void 0&&(J={},g.set(re,J));const ue=X(A);if(ue!==w.__cacheKey){J[ue]===void 0&&(J[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[ue].usedTimes++;const pe=J[w.__cacheKey];pe!==void 0&&(J[w.__cacheKey].usedTimes--,pe.usedTimes===0&&j(A)),w.__cacheKey=ue,w.__webglTexture=J[ue].texture}return U}function Ae(w,A,U){return Math.floor(Math.floor(w/U)/A)}function Ge(w,A,U,re){const ue=w.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,U,re,A.data);else{ue.sort((P,Z)=>P.start-Z.start);let pe=0;for(let P=1;P<ue.length;P++){const Z=ue[pe],H=ue[P],de=Z.start+Z.count,se=Ae(H.start,A.width,4),xe=Ae(Z.start,A.width,4);H.start<=de+1&&se===xe&&Ae(H.start+H.count-1,A.width,4)===se?Z.count=Math.max(Z.count,H.start+H.count-Z.start):(++pe,ue[pe]=H)}ue.length=pe+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),G=t.getParameter(i.UNPACK_SKIP_PIXELS),Y=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let P=0,Z=ue.length;P<Z;P++){const H=ue[P],de=Math.floor(H.start/4),se=Math.ceil(H.count/4),xe=de%A.width,we=Math.floor(de/A.width),ze=se,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,we),t.texSubImage2D(i.TEXTURE_2D,0,xe,we,ze,le,U,re,A.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,G),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y)}}function $e(w,A,U){let re=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=i.TEXTURE_3D);const J=ve(w,A),ue=A.source;t.bindTexture(re,w.__webglTexture,i.TEXTURE0+U);const pe=n.get(ue);if(ue.version!==pe.__version||J===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const le=rt.getPrimaries(rt.workingColorSpace),Le=A.colorSpace===Bn?null:rt.getPrimaries(A.colorSpace),We=A.colorSpace===Bn||le===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let G=M(A.image,!1,a.maxTextureSize);G=Fe(A,G);const Y=r.convert(A.format,A.colorSpace),P=r.convert(A.type);let Z=S(A.internalFormat,Y,P,A.normalized,A.colorSpace,A.isVideoTexture);Ce(re,A);let H;const de=A.mipmaps,se=A.isVideoTexture!==!0,xe=pe.__version===void 0||J===!0,we=ue.dataReady,ze=N(A,G);if(A.isDepthTexture)Z=v(A.format===Hn,A.type),xe&&(se?t.texStorage2D(i.TEXTURE_2D,1,Z,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,Z,G.width,G.height,0,Y,P,null));else if(A.isDataTexture)if(de.length>0){se&&xe&&t.texStorage2D(i.TEXTURE_2D,ze,Z,de[0].width,de[0].height);for(let le=0,Le=de.length;le<Le;le++)H=de[le],se?we&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,H.width,H.height,Y,P,H.data):t.texImage2D(i.TEXTURE_2D,le,Z,H.width,H.height,0,Y,P,H.data);A.generateMipmaps=!1}else se?(xe&&t.texStorage2D(i.TEXTURE_2D,ze,Z,G.width,G.height),we&&Ge(A,G,Y,P)):t.texImage2D(i.TEXTURE_2D,0,Z,G.width,G.height,0,Y,P,G.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Z,de[0].width,de[0].height,G.depth);for(let le=0,Le=de.length;le<Le;le++)if(H=de[le],A.format!==fn)if(Y!==null)if(se){if(we)if(A.layerUpdates.size>0){const We=Ml(H.width,H.height,A.format,A.type);for(const ce of A.layerUpdates){const Ve=H.data.subarray(ce*We/H.data.BYTES_PER_ELEMENT,(ce+1)*We/H.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,ce,H.width,H.height,1,Y,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,H.width,H.height,G.depth,Y,H.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Z,H.width,H.height,G.depth,0,H.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,H.width,H.height,G.depth,Y,P,H.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Z,H.width,H.height,G.depth,0,Y,P,H.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{se&&xe&&t.texStorage2D(i.TEXTURE_2D,ze,Z,de[0].width,de[0].height);for(let le=0,Le=de.length;le<Le;le++)H=de[le],A.format!==fn?Y!==null?se?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,H.width,H.height,Y,H.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Z,H.width,H.height,0,H.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?we&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,H.width,H.height,Y,P,H.data):t.texImage2D(i.TEXTURE_2D,le,Z,H.width,H.height,0,Y,P,H.data)}else if(A.isDataArrayTexture)if(se){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Z,G.width,G.height,G.depth),we)if(A.layerUpdates.size>0){const le=Ml(G.width,G.height,A.format,A.type);for(const Le of A.layerUpdates){const We=G.data.subarray(Le*le/G.data.BYTES_PER_ELEMENT,(Le+1)*le/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,G.width,G.height,1,Y,P,We)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Y,P,G.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,G.width,G.height,G.depth,0,Y,P,G.data);else if(A.isData3DTexture)se?(xe&&t.texStorage3D(i.TEXTURE_3D,ze,Z,G.width,G.height,G.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Y,P,G.data)):t.texImage3D(i.TEXTURE_3D,0,Z,G.width,G.height,G.depth,0,Y,P,G.data);else if(A.isFramebufferTexture){if(xe)if(se)t.texStorage2D(i.TEXTURE_2D,ze,Z,G.width,G.height);else{let le=G.width,Le=G.height;for(let We=0;We<ze;We++)t.texImage2D(i.TEXTURE_2D,We,Z,le,Le,0,Y,P,null),le>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),G.parentNode!==le){le.appendChild(G),p.add(A),le.onpaint=Le=>{const We=Le.changedElements;for(const ce of p)We.includes(ce.image)&&(ce.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,G);else{const We=i.RGBA,ce=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,ce,Ve,G)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(se&&xe){const le=He(de[0]);t.texStorage2D(i.TEXTURE_2D,ze,Z,le.width,le.height)}for(let le=0,Le=de.length;le<Le;le++)H=de[le],se?we&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Y,P,H):t.texImage2D(i.TEXTURE_2D,le,Z,Y,P,H);A.generateMipmaps=!1}else if(se){if(xe){const le=He(G);t.texStorage2D(i.TEXTURE_2D,ze,Z,le.width,le.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y,P,G)}else t.texImage2D(i.TEXTURE_2D,0,Z,Y,P,G);y(A)&&A.mipmapsAutoUpdate===!0&&E(re),pe.__version=ue.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function be(w,A,U){if(A.image.length!==6)return;const re=ve(w,A),J=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);const ue=n.get(J);if(J.version!==ue.__version||re===!0){t.activeTexture(i.TEXTURE0+U);const pe=rt.getPrimaries(rt.workingColorSpace),ee=A.colorSpace===Bn?null:rt.getPrimaries(A.colorSpace),G=A.colorSpace===Bn||pe===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const Y=A.isCompressedTexture||A.image[0].isCompressedTexture,P=A.image[0]&&A.image[0].isDataTexture,Z=[];for(let ce=0;ce<6;ce++)!Y&&!P?Z[ce]=M(A.image[ce],!0,a.maxCubemapSize):Z[ce]=P?A.image[ce].image:A.image[ce],Z[ce]=Fe(A,Z[ce]);const H=Z[0],de=r.convert(A.format,A.colorSpace),se=r.convert(A.type);let xe=S(A.internalFormat,de,se,A.normalized,A.colorSpace);const we=A.isVideoTexture!==!0,ze=ue.__version===void 0||re===!0,le=J.dataReady;let Le=N(A,H);Ce(i.TEXTURE_CUBE_MAP,A);let We;if(A.isDepthTexture){if(xe=v(A.format===Hn,A.type),ze)if(we)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,xe,H.width,H.height);else for(let ce=0;ce<6;ce++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,xe,H.width,H.height,0,de,se,null)}else if(Y){we&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,xe,H.width,H.height);for(let ce=0;ce<6;ce++){We=Z[ce].mipmaps;for(let Ve=0;Ve<We.length;Ve++){const nt=We[Ve];A.format!==fn?de!==null?we?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,nt.width,nt.height,de,nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,xe,nt.width,nt.height,0,nt.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,nt.width,nt.height,de,se,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,xe,nt.width,nt.height,0,de,se,nt.data)}}}else{if(We=A.mipmaps,we&&ze){We.length>0&&Le++;const ce=He(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,xe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(P){we?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Z[ce].width,Z[ce].height,de,se,Z[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,xe,Z[ce].width,Z[ce].height,0,de,se,Z[ce].data);for(let Ve=0;Ve<We.length;Ve++){const Et=We[Ve].image[ce].image;we?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,Et.width,Et.height,de,se,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,xe,Et.width,Et.height,0,de,se,Et.data)}}else{we?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,de,se,Z[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,xe,de,se,Z[ce]);for(let Ve=0;Ve<We.length;Ve++){const nt=We[Ve];we?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,de,se,nt.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,xe,de,se,nt.image[ce])}}}y(A)&&A.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),ue.__version=J.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function je(w,A,U,re,J,ue){const pe=r.convert(U.format,U.colorSpace),ee=r.convert(U.type),G=S(U.internalFormat,pe,ee,U.normalized,U.colorSpace),Y=n.get(A),P=n.get(U);if(P.__renderTarget=A,!Y.__hasExternalTextures){const Z=Math.max(1,A.width>>ue),H=Math.max(1,A.height>>ue);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ue,G,Z,H,A.depth,0,pe,ee,null):t.texImage2D(J,ue,G,Z,H,0,pe,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,J,P.__webglTexture,0,qe(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,J,P.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(w,A,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),A.depthBuffer){const re=A.depthTexture,J=re&&re.isDepthTexture?re.type:null,ue=v(A.stencilBuffer,J),pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(A),ue,A.width,A.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(A),ue,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,w)}else{const re=A.textures;for(let J=0;J<re.length;J++){const ue=re[J],pe=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),G=S(ue.internalFormat,pe,ee,ue.normalized,ue.colorSpace);ye(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(A),G,A.width,A.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(A),G,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,G,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(w,A,U){const re=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(A.depthTexture);J.__renderTarget=A;const ue=re?A.depthTexture.image[0]:A.depthTexture.image;(!J.__webglTexture||ue.width!==A.width||ue.height!==A.height)&&(ue.width=A.width,ue.height=A.height,A.depthTexture.needsUpdate=!0),re?K(A.depthTexture,0):me(A.depthTexture,0);const pe=J.__webglTexture,ee=qe(A),G=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Y=A.depthTexture.format===Hn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Kn)ye(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,G,pe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Y,G,pe,0);else if(A.depthTexture.format===Hn)ye(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,G,pe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Y,G,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(w){const A=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==w.depthTexture){const re=w.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),re){const J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,re.removeEventListener("dispose",J)};re.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=re}if(w.depthTexture&&!A.__autoAllocateDepthBuffer)if(U)for(let re=0;re<6;re++)Te(A.__webglFramebuffer[re],w,re);else w.texture.mipmaps.length>0?Te(A.__webglFramebuffer[0],w,0):Te(A.__webglFramebuffer,w,0);else if(U){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]===void 0)A.__webglDepthbuffer[re]=i.createRenderbuffer(),tt(A.__webglDepthbuffer[re],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ue)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),tt(A.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(w,A,U){const re=n.get(w);A!==void 0&&je(re.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&it(w)}function Je(w){const A=w.texture,U=n.get(w),re=n.get(A);w.addEventListener("dispose",F),O(w);const J=w.textures,ue=w.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=A.version,o.memory.textures++),ue){U.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(A.mipmaps.length>0){U.__webglFramebuffer[ee]=[];for(let G=0;G<A.mipmaps.length;G++)U.__webglFramebuffer[ee][G]=i.createFramebuffer()}else U.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(A.mipmaps.length>0){U.__webglFramebuffer=[];for(let ee=0;ee<A.mipmaps.length;ee++)U.__webglFramebuffer[ee]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(pe)for(let ee=0,G=J.length;ee<G;ee++){const Y=n.get(J[ee]);Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ye(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const G=J[ee];U.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ee]);const Y=r.convert(G.format,G.colorSpace),P=r.convert(G.type),Z=S(G.internalFormat,Y,P,G.normalized,G.colorSpace,w.isXRRenderTarget===!0),H=qe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,H,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,U.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,A);for(let ee=0;ee<6;ee++)if(A.mipmaps.length>0)for(let G=0;G<A.mipmaps.length;G++)je(U.__webglFramebuffer[ee][G],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,G);else je(U.__webglFramebuffer[ee],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);y(A)?E(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let ee=0,G=J.length;ee<G;ee++){const Y=J[ee],P=n.get(Y);let Z=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,P.__webglTexture),Ce(Z,Y),je(U.__webglFramebuffer,w,Y,i.COLOR_ATTACHMENT0+ee,Z,0),y(Y)&&E(Z)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,re.__webglTexture),Ce(ee,A),A.mipmaps.length>0)for(let G=0;G<A.mipmaps.length;G++)je(U.__webglFramebuffer[G],w,A,i.COLOR_ATTACHMENT0,ee,G);else je(U.__webglFramebuffer,w,A,i.COLOR_ATTACHMENT0,ee,0);y(A)?E(ee):A.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&it(w)}function k(w){const A=w.textures;for(let U=0,re=A.length;U<re;U++){const J=A[U];if(y(J)&&J.mipmapsAutoUpdate===!0){const ue=T(w),pe=n.get(J).__webglTexture;t.bindTexture(ue,pe),E(ue),t.unbindTexture()}}}const dt=[];function Ye(w){if(w.samples>0){if(ye(w)===!1){const A=w.textures,U=w.width,re=w.height;let J=i.COLOR_BUFFER_BIT;const ue=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(w),ee=A.length>1;if(ee)for(let Y=0;Y<A.length;Y++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Y=0;Y<A.length;Y++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Y]);const P=n.get(A[Y]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,U,re,0,0,U,re,J,i.NEAREST),l===!0&&(dt.length=0,dt.push(i.COLOR_ATTACHMENT0+Y),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&dt.push(ue),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let Y=0;Y<A.length;Y++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Y]);const P=n.get(A[Y]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const A=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function qe(w){return Math.min(a.maxSamples,w.samples)}function ye(w){const A=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ht(w){const A=o.render.frame;u.get(w)!==A&&(u.set(w,A),w.update())}function Fe(w,A){const U=w.colorSpace,re=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==us&&U!==Bn&&(rt.getTransfer(U)===mt?(re!==fn||J!==$t)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",U)),A}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=Ue,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=Se,this.setTexture2D=me,this.setTexture2DArray=ge,this.setTexture3D=he,this.setTextureCube=K,this.rebindTextures=st,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ye,this.dispose=V}function c0(i,e){function t(n,a=Bn){let r;const o=rt.getTransfer(a);if(n===$t)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return i.BYTE;if(n===Nc)return i.SHORT;if(n===oa)return i.UNSIGNED_SHORT;if(n===wo)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Pc)return i.RGB;if(n===fn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===Hn)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===di)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===es||n===ts||n===ns||n===is)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cr||n===Pr||n===Ir||n===Lr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===Ur||n===Or||n===Fr||n===kr||n===cs||n===Br)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dr||n===Ur)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Or)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fr)return r.COMPRESSED_R11_EAC;if(n===kr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cs)return r.COMPRESSED_RG11_EAC;if(n===Br)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gr||n===zr||n===jr||n===Vr||n===Hr||n===Wr||n===$r||n===Xr||n===qr||n===Yr||n===Zr||n===Kr||n===Jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$r)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===to||n===no)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===ao||n===ds||n===so)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class h0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ui({vertexShader:d0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f0 extends fi{constructor(e,t){super();const n=this;let a=null,r=1,o=null,c="local-floor",l=1,d=null,u=null,p=null,h=null,g=null,x=null;const _=typeof XRWebGLBinding<"u",f=new h0,m={},M=t.getContextAttributes();let y=null,E=null;const T=[],S=[],v=new ct;let N=null,O=null;const C=new tn;C.viewport=new St;const D=new tn;D.viewport=new St;const F=[C,D],q=new Eh;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let me=T[X];return me===void 0&&(me=new $s,T[X]=me),me.getTargetRaySpace()},this.getControllerGrip=function(X){let me=T[X];return me===void 0&&(me=new $s,T[X]=me),me.getGripSpace()},this.getHand=function(X){let me=T[X];return me===void 0&&(me=new $s,T[X]=me),me.getHandSpace()};function Q(X){const me=S.indexOf(X.inputSource);if(me===-1)return;const ge=T[me];ge!==void 0&&(ge.update(X.inputSource,X.frame,d||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",oe);for(let X=0;X<T.length;X++){const me=S[X];me!==null&&(S[X]=null,T[X].disconnect(me))}I=null,V=null,f.reset();for(const X in m)delete m[X];if(e.setRenderTarget(y),g=null,h=null,p=null,a=null,E=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(v.width,v.height,!1),O!==null){const X=O.camera;X.fov=O.fov,X.zoom=O.zoom,X.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){c=X,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(a,t)),p},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",j),a.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,he=null,K=null;M.depth&&(K=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?Hn:Kn,he=M.stencil?Di:gn);const Re={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Re),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new mn(h.textureWidth,h.textureHeight,{format:fn,type:$t,depthTexture:new Ui(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new mn(g.framebufferWidth,g.framebufferHeight,{format:fn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),d=null,o=await a.requestReferenceSpace(c),Ue.setContext(a),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function oe(X){for(let me=0;me<X.removed.length;me++){const ge=X.removed[me],he=S.indexOf(ge);he>=0&&(S[he]=null,T[he].disconnect(ge))}for(let me=0;me<X.added.length;me++){const ge=X.added[me];let he=S.indexOf(ge);if(he===-1){for(let Re=0;Re<T.length;Re++)if(Re>=S.length){S.push(ge),he=Re;break}else if(S[Re]===null){S[Re]=ge,he=Re;break}if(he===-1)break}const K=T[he];K&&K.connect(ge)}}function W(X,me){me===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(me.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let me=X.near,ge=X.far;f.texture!==null&&(f.depthNear>0&&(me=f.depthNear),f.depthFar>0&&(ge=f.depthFar)),q.near=D.near=C.near=me,q.far=D.far=C.far=ge,(I!==q.near||V!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,V=q.far),q.layers.mask=X.layers.mask|6,C.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;const he=X.parent,K=q.cameras;W(q,he);for(let Re=0;Re<K.length;Re++)W(K[Re],he);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),O===null&&X.isPerspectiveCamera&&(O={camera:X,fov:X.fov,zoom:X.zoom}),te(X,q,he)};function te(X,me,ge){ge===null?X.matrix.copy(me.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(me.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(me.projectionMatrix),X.projectionMatrixInverse.copy(me.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=oo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(q)},this.getCameraTexture=function(X){return m[X]};let ie=null;function Se(X,me){if(u=me.getViewerPose(d||o),x=me,u!==null){const ge=u.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let he=!1;ge.length!==q.cameras.length&&(q.cameras.length=0,he=!0);for(let Ee=0;Ee<ge.length;Ee++){const Ce=ge[Ee];let ve=null;if(g!==null)ve=g.getViewport(Ce);else{const Ge=p.getViewSubImage(h,Ce);ve=Ge.viewport,Ee===0&&(e.setRenderTargetTextures(E,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(E))}let Ae=F[Ee];Ae===void 0&&(Ae=new tn,Ae.layers.enable(Ee),Ae.viewport=new St,F[Ee]=Ae),Ae.matrix.fromArray(Ce.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ce.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ve.x,ve.y,ve.width,ve.height),Ee===0&&(q.matrix.copy(Ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),he===!0&&q.cameras.push(Ae)}const K=a.enabledFeatures;if(K&&K.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){p=n.getBinding();const Ee=p.getDepthInformation(ge[0]);Ee&&Ee.isValid&&Ee.texture&&f.init(Ee,a.renderState)}if(K&&K.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let Ee=0;Ee<ge.length;Ee++){const Ce=ge[Ee].camera;if(Ce){let ve=m[Ce];ve||(ve=new Xc,m[Ce]=ve);const Ae=p.getCameraImage(Ce);ve.sourceTexture=Ae}}}}for(let ge=0;ge<T.length;ge++){const he=S[ge],K=T[ge];he!==null&&K!==void 0&&K.update(he,me,d||o)}ie&&ie(X,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),x=null}const Ue=new Jc;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const p0=new vt,ld=new Ke;ld.set(-1,0,0,0,1,0,0,0,1);function m0(i,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,qc(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,M,y,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),p(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),h(f,m),m.isMeshPhysicalMaterial&&g(f,m,E)):m.isMeshMatcapMaterial?(r(f,m),x(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),_(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&c(f,m)):m.isPointsMaterial?l(f,m,M,y):m.isSpriteMaterial?d(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===zt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===zt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const M=e.get(m),y=M.envMap,E=M.envMapRotation;y&&(f.envMap.value=y,f.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(E)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(ld),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function c(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,y){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=y*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function d(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function p(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function g(f,m,M){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const M=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function g0(i,e,t,n){let a={},r={};function o(M,y){const E=y.program;n.uniformBlockBinding(M,E,a[M.id])}function c(M,y){let E=a[M.id];E===void 0&&(x(M),E=l(M),a[M.id]=E,M.addEventListener("dispose",f));const T=y.program;n.updateUBOMapping(M,T);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function l(M){const y=i.createBuffer(),E=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function d(M){const y=a[M.id],E=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,v=E.length;S<v;S++){const N=E[S];if(Array.isArray(N))for(let O=0,C=N.length;O<C;O++)u(N[O],S,O,T);else u(N,S,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,y,E,T){if(h(M,y,E,T)===!0){const S=M.__offset,v=M.value;if(Array.isArray(v)){let N=0;for(let O=0;O<v.length;O++){const C=v[O],D=_(C,!0);p(C,M.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,M.__data)}}function p(M,y,E){typeof M=="number"||typeof M=="boolean"?y[E]=M:M.isMatrix3?(y[E]=M.elements[0],y[E+1]=M.elements[1],y[E+2]=M.elements[2],y[E+3]=0,y[E+4]=M.elements[3],y[E+5]=M.elements[4],y[E+6]=M.elements[5],y[E+7]=0,y[E+8]=M.elements[6],y[E+9]=M.elements[7],y[E+10]=M.elements[8],y[E+11]=0):ArrayBuffer.isView(M)?y.set(M.subarray(0,y.length-E),E):M.toArray(y,E)}function h(M,y,E,T){const S=M.value,v=y+"_"+E;if(Array.isArray(S)){T[v]===void 0&&(T[v]=[]);const N=T[v];let O=!1;for(let C=0;C<S.length;C++)g(S[C],N,C)===!0&&(O=!0);return O}return g(S,T,v)}function g(M,y,E){if(y[E]===void 0)return typeof M=="number"||typeof M=="boolean"?y[E]=M:ArrayBuffer.isView(M)?y[E]=M.slice():y[E]=M.clone(),!0;{const T=y[E];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return y[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function x(M){const y=M.uniforms;let E=0;const T=16;for(let v=0,N=y.length;v<N;v++){const O=Array.isArray(y[v])?y[v]:[y[v]];for(let C=0,D=O.length;C<D;C++){const F=O[C],q=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(y[v])||Array.isArray(F.value);let V=E;for(let j=0,oe=q.length;j<oe;j++){const W=q[j],te=_(W,I),ie=E%T,Se=ie%te.boundary,Ue=ie+Se;E+=Se,Ue!==0&&T-Ue<te.storage&&(E+=T-Ue),j===0&&(V=E),E+=te.storage}const Q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Q((E-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}const S=E%T;return S>0&&(E+=T-S),M.__size=E,M.__cache={},this}function _(M,y){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",M),y===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function f(M){const y=M.target;y.removeEventListener("dispose",f),i.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function m(){for(const M in a)i.deleteBuffer(a[M]);a={},r={}}return{bind:o,update:c,dispose:m}}const x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function v0(){return dn===null&&(dn=new lh(x0,16,16,di,xn),dn.name="DFG_LUT",dn.minFilter=Vt,dn.magFilter=Vt,dn.wrapS=Tn,dn.wrapT=Tn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class _0{constructor(e={}){const{canvas:t=Du(),context:n=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=$t}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const _=g,f=new Set([Lo,Io,Po]),m=new Set([$t,gn,oa,Di,Ro,Co]),M=new Uint32Array(4),y=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let T=null,S=null;const v=[],N=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,F=null,q=null,I=null,V=null;this._outputColorSpace=Yt;let Q=0,j=0,oe=null,W=-1,te=null;const ie=new St,Se=new St;let Ue=null;const X=new lt(0);let me=0,ge=t.width,he=t.height,K=1,Re=null,Oe=null;const Ee=new St(0,0,ge,he),Ce=new St(0,0,ge,he);let ve=!1;const Ae=new ca,Ge=new Oo;let $e=!1,be=!1;const je=new vt,tt=new ne,Te=new St,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Je(){return oe===null?K:1}let k=n;function dt(b,L){return t.getContext(b,L)}let Ye,qe,ye,ht,Fe,He,w,A,U,re,J,ue,pe,ee,G,Y,P,Z,H,de,se,xe,we;try{const b={alpha:!0,depth:a,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ce,!1),k===null){const L="webgl2";if(k=dt(L,b),k===null)throw dt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(b){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pt("WebGLRenderer: "+b.message),b}function ze(){Ye=new bm(k),Ye.init(),se=new c0(k,Ye),qe=new um(k,Ye,e,se),ye=new o0(k,Ye),qe.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),q=k.createFramebuffer(),I=k.createFramebuffer(),V=k.createFramebuffer(),ht=new Am(k),Fe=new Xg,He=new l0(k,Ye,ye,Fe,qe,se,ht),w=new ym(C),A=new Th(k),xe=new cm(k,A),U=new Mm(k,A,ht,xe),re=new Nm(k,U,A,xe,ht),Z=new Tm(k,qe,He),G=new hm(Fe),J=new $g(C,w,Ye,qe,xe,G),ue=new m0(C,Fe),pe=new Yg,ee=new t0(Ye),P=new lm(C,w,ye,re,x,l),Y=new r0(C,re,qe),we=new g0(k,ht,qe,ye),H=new dm(k,Ye,ht),de=new Em(k,Ye,ht),ht.programs=J.programs,C.capabilities=qe,C.extensions=Ye,C.properties=Fe,C.renderLists=pe,C.shadowMap=Y,C.state=ye,C.info=ht}_!==$t&&(O=new Rm(_,t.width,t.height,c,a,r));const le=new f0(C,k);this.xr=le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=Ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(ge,he,!1))},this.getSize=function(b){return b.set(ge,he)},this.setSize=function(b,L,z=!0){if(le.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=b,he=L,t.width=Math.floor(b*K),t.height=Math.floor(L*K),z===!0&&(t.style.width=b+"px",t.style.height=L+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(ge*K,he*K).floor()},this.setDrawingBufferSize=function(b,L,z){ge=b,he=L,K=z,t.width=Math.floor(b*z),t.height=Math.floor(L*z),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(_===$t){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,L,z,B){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,L,z,B),ye.viewport(ie.copy(Ee).multiplyScalar(Je()).round())},this.getScissor=function(b){return b.copy(Ce)},this.setScissor=function(b,L,z,B){b.isVector4?Ce.set(b.x,b.y,b.z,b.w):Ce.set(b,L,z,B),ye.scissor(Se.copy(Ce).multiplyScalar(Je()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){ye.setScissorTest(ve=b)},this.setOpaqueSort=function(b){Re=b},this.setTransparentSort=function(b){Oe=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,z=!0){let B=0;if(b){let $=!1;if(oe!==null){const fe=oe.texture.format;$=f.has(fe)}if($){const fe=oe.texture.type,Me=m.has(fe),_e=P.getClearColor(),Ne=P.getClearAlpha(),De=_e.r,Xe=_e.g,Qe=_e.b;Me?(M[0]=De,M[1]=Xe,M[2]=Qe,M[3]=Ne,k.clearBufferuiv(k.COLOR,0,M)):(y[0]=De,y[1]=Xe,y[2]=Qe,y[3]=Ne,k.clearBufferiv(k.COLOR,0,y))}else B|=k.COLOR_BUFFER_BIT}L&&(B|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),P.dispose(),pe.dispose(),ee.dispose(),He.dispose(),Fe.dispose(),w.dispose(),re.dispose(),U.dispose(),xe.dispose(),we.dispose(),J.dispose(),le.dispose(),le.removeEventListener("sessionstart",va),le.removeEventListener("sessionend",_a),ln.stop()};function Le(b){b.preventDefault(),el("WebGLRenderer: Context Lost."),D=!0}function We(){el("WebGLRenderer: Context Restored."),D=!1;const b=ht.autoReset,L=Y.enabled,z=Y.autoUpdate,B=Y.needsUpdate,$=Y.type;ze(),ht.autoReset=b,Y.enabled=L,Y.autoUpdate=z,Y.needsUpdate=B,Y.type=$}function ce(b){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ve(b){const L=b.target;L.removeEventListener("dispose",Ve),nt(L)}function nt(b){Et(b),Fe.remove(b)}function Et(b){const L=Fe.get(b).programs;L!==void 0&&(L.forEach(function(z){J.releaseProgram(z)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,z,B,$,fe){L===null&&(L=it);const Me=$.isMesh&&$.matrixWorld.determinantAffine()<0,_e=Ma(b,L,z,B,$);ye.setMaterial(B,Me);let Ne=z.index,De=1;if(B.wireframe===!0){if(Ne=U.getWireframeAttribute(z),Ne===void 0)return;De=2}const Xe=z.drawRange,Qe=z.attributes.position;let ke=Xe.start*De,at=(Xe.start+Xe.count)*De;fe!==null&&(ke=Math.max(ke,fe.start*De),at=Math.min(at,(fe.start+fe.count)*De)),Ne!==null?(ke=Math.max(ke,0),at=Math.min(at,Ne.count)):Qe!=null&&(ke=Math.max(ke,0),at=Math.min(at,Qe.count));const bt=at-ke;if(bt<0||bt===1/0)return;xe.setup($,B,_e,z,Ne);let xt,gt=H;if(Ne!==null&&(xt=A.get(Ne),gt=de,gt.setIndex(xt)),$.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*Je()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if($.isLine){let Dt=B.linewidth;Dt===void 0&&(Dt=1),ye.setLineWidth(Dt*Je()),$.isLineSegments?gt.setMode(k.LINES):$.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else $.isPoints?gt.setMode(k.POINTS):$.isSprite&&gt.setMode(k.TRIANGLES);if($.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))gt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Dt=$._multiDrawStarts,Be=$._multiDrawCounts,Bt=$._multiDrawCount,ft=Ne?A.get(Ne).bytesPerElement:1,ni=Fe.get(B).currentProgram.getUniforms();for(let Ut=0;Ut<Bt;Ut++)ni.setValue(k,"_gl_DrawID",Ut),gt.render(Dt[Ut]/ft,Be[Ut])}else if($.isInstancedMesh)gt.renderInstances(ke,bt,$.count);else if(z.isInstancedBufferGeometry){const Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Be=Math.min(z.instanceCount,Dt);gt.renderInstances(ke,bt,Be)}else gt.render(ke,bt)};function on(b,L,z,B){F!==null&&b.isNodeMaterial&&F.setObject(B,b),$e===!0&&G.setState(b,z,!1),b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=zt,b.needsUpdate=!0,Pn(b,L,B),b.side=ci,b.needsUpdate=!0,Pn(b,L,B),b.side=An):Pn(b,L,B)}this.compile=function(b,L,z=null){z===null&&(z=b),F!==null&&F.renderStart(b,L,z),S=ee.get(z),S.init(L),N.push(S),z.traverseVisible(function($){$.isLight&&$.layers.test(L.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),b!==z&&b.traverseVisible(function($){$.isLight&&$.layers.test(L.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),be=this.localClippingEnabled,$e=G.init(this.clippingPlanes,be),$e===!0&&G.setGlobalState(this.clippingPlanes,L),F!==null&&Y.render(S.state.shadowsArray,z,L);const B=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const fe=$.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const _e=fe[Me];on(_e,z,L,$),B.add(_e)}else on(fe,z,L,$),B.add(fe)}),S=N.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(b,L,z=null){const B=this.compile(b,L,z);return new Promise($=>{function fe(){if(B.forEach(function(Me){const Ne=Fe.get(Me).currentProgram;(Ne===void 0||Ne.isReady())&&B.delete(Me)}),B.size===0){$(b);return}setTimeout(fe,10)}Ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ti=null;function Is(b){ti&&ti(b)}function va(){ln.stop()}function _a(){ln.start()}const ln=new Jc;ln.setAnimationLoop(Is),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(b){ti=b,le.setAnimationLoop(b),b===null?ln.stop():ln.start()},le.addEventListener("sessionstart",va),le.addEventListener("sessionend",_a),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(b,L);const z=le.enabled===!0&&le.isPresenting===!0,B=O!==null&&(oe===null||z)&&O.begin(C,oe);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(L),L=le.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,L,oe),S=ee.get(b,N.length),S.init(L),S.state.textureUnits=He.getTextureUnits(),N.push(S),je.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Ge.setFromArrayCamera(L):Ae.setFromProjectionMatrix(je,an,L.reversedDepth),be=this.localClippingEnabled,$e=G.init(this.clippingPlanes,be),T=pe.get(b,v.length),T.init(),v.push(T),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&zi(Me,L,-1/0,C.sortObjects)}zi(b,L,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&T.sort(Re,Oe),st=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,st&&P.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),$e===!0&&G.beginShadows();const $=S.state.shadowsArray;if(Y.render($,b,L),$e===!0&&G.endShadows(),(B&&O.hasRenderPass())===!1){const Me=T.opaque,_e=T.transmissive;if(S.setupLights(),L.isArrayCamera){const Ne=L.cameras;if(_e.length>0)for(let De=0,Xe=Ne.length;De<Xe;De++){const Qe=Ne[De];ya(Me,_e,b,Qe)}st&&P.render(b);for(let De=0,Xe=Ne.length;De<Xe;De++){const Qe=Ne[De];Sa(T,b,Qe,Qe.viewport)}}else _e.length>0&&ya(Me,_e,b,L),st&&P.render(b),Sa(T,b,L)}oe!==null&&j===0&&(He.updateMultisampleRenderTarget(oe),He.updateRenderTargetMipmap(oe)),B&&O.end(C),b.isScene===!0&&b.onAfterRender(C,b,L),xe.resetDefaultState(),W=-1,te=null,N.pop(),N.length>0?(S=N[N.length-1],He.setTextureUnits(S.state.textureUnits),$e===!0&&G.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?T=v[v.length-1]:T=null,F!==null&&F.renderEnd()};function zi(b,L,z,B){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){const Me=L.isArrayCamera?Ge:Ae;if(!b.frustumCulled||b.intersectsFrustum(Me)){B&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(je);const _e=re.update(b),Ne=b.material;Ne.visible&&T.push(b,_e,Ne,z,Te.z,null,L)}}else if(b.isMesh||b.isLine||b.isPoints){const Me=L.isArrayCamera?Ge:Ae;if(!b.frustumCulled||b.intersectsFrustum(Me)){const _e=re.update(b),Ne=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Te.copy(_e.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(je)),Array.isArray(Ne)){const De=_e.groups;for(let Xe=0,Qe=De.length;Xe<Qe;Xe++){const ke=De[Xe],at=Ne[ke.materialIndex];at&&at.visible&&T.push(b,_e,at,z,Te.z,ke,L)}}else Ne.visible&&T.push(b,_e,Ne,z,Te.z,null,L)}}}const fe=b.children;for(let Me=0,_e=fe.length;Me<_e;Me++)zi(fe[Me],L,z,B)}function Sa(b,L,z,B){const{opaque:$,transmissive:fe,transparent:Me}=b;S.setupLightsView(z),$e===!0&&G.setGlobalState(C.clippingPlanes,z),B&&ye.viewport(ie.copy(B)),$.length>0&&pi($,L,z),fe.length>0&&pi(fe,L,z),Me.length>0&&pi(Me,L,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ya(b,L,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){const ke=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:ke?xn:$t,minFilter:Vn,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const fe=S.state.transmissionRenderTarget[B.id],Me=B.viewport||ie;fe.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const _e=C.getRenderTarget(),Ne=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(X),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),st&&P.render(z);const Xe=C.toneMapping;C.toneMapping=Nn;const Qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),$e===!0&&G.setGlobalState(C.clippingPlanes,B),pi(b,z,B),He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let at=0,bt=L.length;at<bt;at++){const xt=L[at],{object:gt,geometry:Dt,material:Be,group:Bt}=xt;if(Be.side===An&&gt.layers.test(B.layers)){const ft=Be.side;Be.side=zt,Be.needsUpdate=!0,ji(gt,z,B,Dt,Be,Bt),Be.side=ft,Be.needsUpdate=!0,ke=!0}}ke===!0&&(He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe))}C.setRenderTarget(_e,Ne,De),C.setClearColor(X,me),Qe!==void 0&&(B.viewport=Qe),C.toneMapping=Xe}function pi(b,L,z){const B=L.isScene===!0?L.overrideMaterial:null;for(let $=0,fe=b.length;$<fe;$++){const Me=b[$],{object:_e,geometry:Ne,group:De}=Me;let Xe=Me.material;Xe.allowOverride===!0&&B!==null&&(Xe=B),_e.layers.test(z.layers)&&ji(_e,L,z,Ne,Xe,De)}}function ji(b,L,z,B,$,fe){F!==null&&$.isNodeMaterial&&F.setObject(b,$),b.onBeforeRender(C,L,z,B,$,fe),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(C,L,z,B,b,fe),$.transparent===!0&&$.side===An&&$.forceSinglePass===!1?($.side=zt,$.needsUpdate=!0,C.renderBufferDirect(z,L,B,$,b,fe),$.side=ci,$.needsUpdate=!0,C.renderBufferDirect(z,L,B,$,b,fe),$.side=An):C.renderBufferDirect(z,L,B,$,b,fe),b.onAfterRender(C,L,z,B,$,fe)}function Vi(b){let L=0;for(const z of b)z.texture!==null&&L++;return L}function Pn(b,L,z){L.isScene!==!0&&(L=it);const B=Fe.get(b),$=S.state.lights,fe=S.state.shadowsArray,Me=$.state.version,_e=J.getParameters(b,$.state,fe,L,z,S.state.lightProbeGridArray),Ne=J.getProgramCacheKey(_e);let De=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Xe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=w.get(b.envMap||B.environment,Xe),B.envMapRotation=B.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",Ve),De=new Map,B.programs=De,B.programVariants=new Map);let Qe=De.get(Ne);if(Qe!==void 0){if(B.currentProgram===Qe&&B.lightsStateVersion===Me)return Wi(b,_e),Qe}else _e.uniforms=J.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,z,_e),b.onBeforeCompile(_e,C),Qe=J.acquireProgram(_e,Ne),De.set(Ne,Qe),B.uniforms=_e.uniforms;const ke=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=G.uniform),Wi(b,_e),B.needsLights=Aa(b),B.lightsStateVersion=Me,B.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.sunLights.value=$.state.sun,ke.sunLightShadows.value=$.state.sunShadow,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.sunShadowMatrix.value=$.state.sunShadowMatrix,ke.sunShadowCascade.value=$.state.sunShadowCascade,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),B.numLightProbeGrids=Vi(S.state.lightProbeGridArray),B.currentProgram=Qe,B.uniformsList=null,Qe}function ba(b,L,z,B,$){const fe=Fe.get(b),Me=fe.currentProgram.id+","+B+","+$;let _e=fe.programVariants.get(Me);return _e===void 0?(_e=Pn(b,L,z),fe.programVariants.set(Me,_e)):(fe.currentProgram=_e,fe.uniformsList=null,fe.outputColorSpace=B,fe.toneMapping=$),_e}function Hi(b){if(b.uniformsList===null){const L=b.currentProgram.getUniforms();b.uniformsList=ss.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Wi(b,L){const z=Fe.get(b);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Ma(b,L,z,B,$){L.isScene!==!0&&(L=it),He.resetTextureUnits();const fe=L.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,_e=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:rt.workingColorSpace,Ne=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,De=w.get(B.envMap||Me,Ne),Xe=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Qe=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ke=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,bt=!!z.morphAttributes.color;let xt=Nn;B.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xt=C.toneMapping);const gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Dt=gt!==void 0?gt.length:0,Be=Fe.get(B),Bt=S.state.lights;if($e===!0&&(be===!0||b!==te)){const _t=b===te&&B.id===W;G.setState(B,b,_t)}let ft=!1,ni=!1;B.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Bt.state.version||$.isBatchedMesh&&Be.batching===!1||!$.isBatchedMesh&&Be.batching===!0||$.isBatchedMesh&&Be.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Be.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Be.instancingMorph===!1&&$.morphTexture!==null||Be.envMap!==De||B.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==G.numPlanes||Be.numIntersection!==G.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==Qe||Be.morphTargets!==ke||Be.morphNormals!==at||Be.morphColors!==bt||Be.morphTargetsCount!==Dt||Be.numLightProbeGrids!==Vi(S.state.lightProbeGridArray)?ft=!0:(Be.outputColorSpace!==_e||Be.toneMapping!==xt)&&(ni=!0):(ft=!0,Be.__version=B.version);let Ut=Be.currentProgram;(ft===!0||ni===!0)&&(Ut=ni===!0?ba(B,L,$,_e,xt):Pn(B,L,$),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Ut,Be));let Ta=!1,In=!1,ii=!1;const ut=Ut.getUniforms(),Ct=Be.uniforms;if(ye.useProgram(Ut.program)&&(Ta=!0,In=!0,ii=!0),B.id!==W&&(W=B.id,In=!0),Ta||te!==b){ye.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",b.projectionMatrix),ut.setValue(k,"viewMatrix",b.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(k,tt.setFromMatrixPosition(b.matrixWorld)),qe.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),te!==b&&(te=b,In=!0,ii=!0)}if(Be.needsLights&&(Bt.state.sunShadowMap.length>0&&ut.setValue(k,"sunShadowMap",Bt.state.sunShadowMap,He),Bt.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",Bt.state.directionalShadowMap,He),Bt.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",Bt.state.spotShadowMap,He),Bt.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",Bt.state.pointShadowMap,He)),$.isSkinnedMesh){ut.setOptional(k,$,"bindMatrix"),ut.setOptional(k,$,"bindMatrixInverse");const _t=$.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ut.setValue(k,"boneTexture",_t.boneTexture,He))}$.isBatchedMesh&&(ut.setOptional(k,$,"batchingTexture"),ut.setValue(k,"batchingTexture",$._matricesTexture,He),ut.setOptional(k,$,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",$._indirectTexture,He),ut.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",$._colorsTexture,He));const Kt=z.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Z.update($,z,Ut),(In||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,ut.setValue(k,"receiveShadow",$.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Ct.envMapIntensity.value=L.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=v0()),In){if(ut.setValue(k,"toneMappingExposure",C.toneMappingExposure),Be.needsLights&&Ea(Ct,ii),fe&&B.fog===!0&&ue.refreshFogUniforms(Ct,fe),ue.refreshMaterialUniforms(Ct,B,K,he,S.state.transmissionRenderTarget[b.id]),Be.needsLights&&Be.numLightProbeGrids>0){const _t=E;let Nt=0;for(const _n of S.state.lightProbeGridArray)_n.texture!==null&&(_t.textures[Nt]=_n.texture,_t.min[Nt]=_n.boundingBox.min,_t.max[Nt]=_n.boundingBox.max,_t.resolution[Nt]=_n.resolution,Nt++);for(const _n in _t)_t[_n].length=Nt;Ct.probesSH.value=_t.textures,Ct.probesMin.value=_t.min,Ct.probesMax.value=_t.max,Ct.probesResolution.value=_t.resolution}ss.upload(k,Hi(Be),Ct,He)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ss.upload(k,Hi(Be),Ct,He),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(k,"center",$.center),ut.setValue(k,"modelViewMatrix",$.modelViewMatrix),ut.setValue(k,"normalMatrix",$.normalMatrix),ut.setValue(k,"modelMatrix",$.matrixWorld),B.uniformsGroups!==void 0){const _t=B.uniformsGroups;for(let Nt=0,_n=_t.length;Nt<_n;Nt++){const Xo=_t[Nt];we.update(Xo,Ut),we.bind(Xo,Ut)}}return Ut}function Ea(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Aa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(b,L,z){const B=Fe.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Fe.get(b.texture).__webglTexture=L,Fe.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){const z=Fe.get(b);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,z=0){oe=b,Q=L,j=z;let B=null,$=!1,fe=!1;if(b){const _e=Fe.get(b);if(_e.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),ie.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest,ye.viewport(ie),ye.scissor(Se),ye.setScissorTest(Ue),W=-1;return}else if(_e.__webglFramebuffer===void 0)He.setupRenderTarget(b);else if(_e.__hasExternalTextures)He.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Xe=b.depthTexture;if(_e.__boundDepthTexture!==Xe){if(Xe!==null&&Fe.has(Xe)&&(b.width!==Xe.image.width||b.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(b)}}const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const De=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[L])?B=De[L][z]:B=De[L],$=!0):b.samples>0&&He.useMultisampledRTT(b)===!1?B=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?B=De[z]:B=De,ie.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest}else ie.copy(Ee).multiplyScalar(K).floor(),Se.copy(Ce).multiplyScalar(K).floor(),Ue=ve;if(z!==0&&(B=q),ye.bindFramebuffer(k.FRAMEBUFFER,B)&&ye.drawBuffers(b,B),ye.viewport(ie),ye.scissor(Se),ye.setScissorTest(Ue),$){const _e=Fe.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e.__webglTexture,z)}else if(fe){const _e=L;for(let Ne=0;Ne<b.textures.length;Ne++){const De=Fe.get(b.textures[Ne]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ne,De.__webglTexture,z,_e)}}else if(b!==null&&z!==0){const _e=Fe.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,z)}W=-1};function ae(b){const L=Fe.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=qe.textureFormatReadable(b.format),L.__typeReadable=qe.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,z,B,$,fe,Me,_e=0){if(!(b&&b.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ne=Ne[Me],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){ye.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const De=b.textures[_e],Xe=De.format,Qe=De.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);const ke=ae(De);if(ke.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-B&&z>=0&&z<=b.height-$&&k.readPixels(L,z,B,$,se.convert(Xe),se.convert(Qe),fe)}finally{const De=oe!==null?Fe.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,L,z,B,$,fe,Me,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ne=Ne[Me],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(L>=0&&L<=b.width-B&&z>=0&&z<=b.height-$){ye.bindFramebuffer(k.FRAMEBUFFER,Ne);const De=b.textures[_e],Xe=De.format,Qe=De.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);const ke=ae(De);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(L,z,B,$,se.convert(Xe),se.convert(Qe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const bt=oe!==null?Fe.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(k.FRAMEBUFFER,bt);const xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Uu(k,xt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(at),k.deleteSync(xt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,z=0){const B=Math.pow(2,-z),$=Math.floor(b.image.width*B),fe=Math.floor(b.image.height*B),Me=L!==null?L.x:0,_e=L!==null?L.y:0;He.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,z,0,0,Me,_e,$,fe),ye.unbindTexture()},this.copyTextureToTexture=function(b,L,z=null,B=null,$=0,fe=0){let Me,_e,Ne,De,Xe,Qe,ke,at,bt;const xt=b.isCompressedTexture?b.mipmaps[fe]:b.image;if(z!==null)Me=z.max.x-z.min.x,_e=z.max.y-z.min.y,Ne=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Xe=z.min.y,Qe=z.isBox3?z.min.z:0;else{const ut=Math.pow(2,-$);Me=Math.floor(xt.width*ut),_e=Math.floor(xt.height*ut),b.isDataArrayTexture?Ne=xt.depth:b.isData3DTexture?Ne=Math.floor(xt.depth*ut):Ne=1,De=0,Xe=0,Qe=0}B!==null?(ke=B.x,at=B.y,bt=B.z):(ke=0,at=0,bt=0);const gt=se.convert(L.format),Dt=se.convert(L.type);let Be;L.isData3DTexture?(He.setTexture3D(L,0),Be=k.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(He.setTexture2DArray(L,0),Be=k.TEXTURE_2D_ARRAY):(He.setTexture2D(L,0),Be=k.TEXTURE_2D),ye.activeTexture(k.TEXTURE0),ye.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,L.flipY),ye.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ye.pixelStorei(k.UNPACK_ALIGNMENT,L.unpackAlignment);const Bt=ye.getParameter(k.UNPACK_ROW_LENGTH),ft=ye.getParameter(k.UNPACK_IMAGE_HEIGHT),ni=ye.getParameter(k.UNPACK_SKIP_PIXELS),Ut=ye.getParameter(k.UNPACK_SKIP_ROWS),Ta=ye.getParameter(k.UNPACK_SKIP_IMAGES);ye.pixelStorei(k.UNPACK_ROW_LENGTH,xt.width),ye.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt.height),ye.pixelStorei(k.UNPACK_SKIP_PIXELS,De),ye.pixelStorei(k.UNPACK_SKIP_ROWS,Xe),ye.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const In=b.isDataArrayTexture||b.isData3DTexture,ii=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){const ut=Fe.get(b),Ct=Fe.get(L),Kt=Fe.get(ut.__renderTarget),_t=Fe.get(Ct.__renderTarget);ye.bindFramebuffer(k.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Nt=0;Nt<Ne;Nt++)In&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(b).__webglTexture,$,Qe+Nt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(L).__webglTexture,fe,bt+Nt)),k.blitFramebuffer(De,Xe,De+Me,Xe+_e,ke,at,ke+Me,at+_e,k.DEPTH_BUFFER_BIT,k.NEAREST);ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||Fe.has(b)){const ut=Fe.get(b),Ct=Fe.get(L);ye.bindFramebuffer(k.READ_FRAMEBUFFER,I),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let Kt=0;Kt<Ne;Kt++)In?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ut.__webglTexture,$,Qe+Kt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ut.__webglTexture,$),ii?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.__webglTexture,fe,bt+Kt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ct.__webglTexture,fe),$!==0?k.blitFramebuffer(De,Xe,De+Me,Xe+_e,ke,at,ke+Me,at+_e,k.COLOR_BUFFER_BIT,k.NEAREST):ii?k.copyTexSubImage3D(Be,fe,ke,at,bt+Kt,De,Xe,Me,_e):k.copyTexSubImage2D(Be,fe,ke,at,De,Xe,Me,_e);ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ii?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Be,fe,ke,at,bt,Me,_e,Ne,gt,Dt,xt.data):L.isCompressedArrayTexture?k.compressedTexSubImage3D(Be,fe,ke,at,bt,Me,_e,Ne,gt,xt.data):k.texSubImage3D(Be,fe,ke,at,bt,Me,_e,Ne,gt,Dt,xt):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,fe,ke,at,Me,_e,gt,Dt,xt.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,fe,ke,at,xt.width,xt.height,gt,xt.data):k.texSubImage2D(k.TEXTURE_2D,fe,ke,at,Me,_e,gt,Dt,xt);ye.pixelStorei(k.UNPACK_ROW_LENGTH,Bt),ye.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),ye.pixelStorei(k.UNPACK_SKIP_PIXELS,ni),ye.pixelStorei(k.UNPACK_SKIP_ROWS,Ut),ye.pixelStorei(k.UNPACK_SKIP_IMAGES,Ta),fe===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&k.generateMipmap(Be),ye.unbindTexture()},this.initRenderTarget=function(b){Fe.get(b).__webglFramebuffer===void 0&&He.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?He.setTextureCube(b,0):b.isData3DTexture?He.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?He.setTexture2DArray(b,0):He.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){Q=0,j=0,oe=null,ye.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function S0(){const i=document.createElement("canvas");i.width=2048,i.height=1024;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,i.height);t.addColorStop(0,"#0a1e3f"),t.addColorStop(.2,"#062d5e"),t.addColorStop(.5,"#0c386d"),t.addColorStop(.8,"#062d5e"),t.addColorStop(1,"#0a1e3f"),e.fillStyle=t,e.fillRect(0,0,i.width,i.height);const n=(r,o="#1b4332",c="#2d6a4f")=>{e.beginPath(),r.forEach(([l,d],u)=>{const p=(l+180)/360*i.width,h=(90-d)/180*i.height;u===0?e.moveTo(p,h):e.lineTo(p,h)}),e.closePath(),e.fillStyle=o,e.fill(),e.strokeStyle=c,e.lineWidth=3,e.stroke()};n([[-15,35],[-5,36],[10,37],[25,32],[35,30],[51,12],[45,0],[42,-12],[32,-28],[26,-34],[18,-34],[12,-18],[9,5],[-5,5],[-17,15],[-17,28],[-15,35]],"#2d6a4f","#40916c"),n([[-10,28],[30,28],[32,18],[15,16],[-10,20]],"#78350f","#92400e"),n([[-9,36],[-5,43],[5,48],[12,54],[25,58],[30,70],[18,70],[10,62],[3,52],[-4,48],[-9,42]],"#1e4620","#2d6a4f"),n([[32,35],[45,45],[60,55],[75,70],[110,72],[145,72],[170,64],[160,50],[140,38],[122,22],[105,10],[80,8],[70,22],[55,25],[35,30]],"#1e4620","#2d6a4f"),n([[70,24],[78,28],[88,25],[84,18],[80,8],[74,14]],"#2d6a4f","#40916c"),n([[-168,65],[-140,70],[-100,72],[-75,62],[-60,48],[-70,42],[-76,34],[-80,25],[-90,20],[-100,22],[-115,30],[-124,48],[-130,54],[-165,60]],"#1e4620","#2d6a4f"),n([[-75,12],[-60,8],[-45,-2],[-35,-6],[-38,-16],[-50,-32],[-65,-55],[-75,-48],[-72,-30],[-80,-10],[-78,5]],"#155e75","#0e7490"),n([[114,-22],[125,-15],[140,-12],[150,-22],[152,-36],[140,-38],[118,-35]],"#854d0e","#a16207"),e.fillStyle="#f8fafc",e.beginPath(),e.ellipse(i.width*.5,40,i.width*.35,60,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i.width*.5,i.height-40,i.width*.42,80,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.45)";for(let r=0;r<60;r++){const o=r*127%i.width,c=160+r*59%(i.height-320),l=35+r%45,d=10+r%15;e.beginPath(),e.ellipse(o,c,l,d,r*.2,0,Math.PI*2),e.fill()}const a=new uh(i);return a.needsUpdate=!0,a}function y0({isDark:i=!0}){const e=R.useRef(null),t=R.useRef(!1),n=R.useRef({x:0,y:0}),a=R.useRef({x:6e-4,y:.0016});return R.useEffect(()=>{const r=e.current;if(!r)return;const o=r.clientWidth||480,c=r.clientHeight||480,l=new eh,d=new tn(45,o/c,.1,1e3);d.position.z=2.7;const u=new _0({alpha:!0,antialias:!0,powerPreference:"high-performance"});u.setSize(o,c),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(u.domElement);const p=new ps(1,64,64),h=S0(),g=new xh({map:h,roughness:.55,metalness:.05}),x=new Cn(p,g);x.rotation.z=.41,x.rotation.y=1.2,l.add(x);const _=new ps(1.025,48,48),f=new Vc({color:3718648,transparent:!0,opacity:i?.25:.18,blending:Sr,side:zt}),m=new Cn(_,f);l.add(m);const M=220,y=new vn,E=new Float32Array(M*3);for(let j=0;j<M*3;j+=3)E[j]=(Math.random()-.5)*16,E[j+1]=(Math.random()-.5)*16,E[j+2]=-2-Math.random()*8;y.setAttribute("position",new Xn(E,3));const T=new Hc({color:9684477,size:.035,transparent:!0,opacity:i?.75:.35}),S=new dh(y,T);l.add(S);const v=new bh(16777215,2);v.position.set(4,2,3),l.add(v);const N=new Mh(2241365,.9);l.add(N);const O=j=>{t.current=!0,n.current={x:j.clientX,y:j.clientY}},C=j=>{if(!t.current)return;const oe=j.clientX-n.current.x,W=j.clientY-n.current.y;n.current={x:j.clientX,y:j.clientY},x.rotation.y+=oe*.005,x.rotation.x+=W*.005,a.current={x:W*.001,y:oe*.002}},D=()=>{t.current=!1},F=u.domElement;F.addEventListener("pointerdown",O),window.addEventListener("pointermove",C),window.addEventListener("pointerup",D);let q;const I=()=>{q=requestAnimationFrame(I),t.current||(a.current.y=a.current.y*.95+.0012*.05,a.current.x=a.current.x*.95,x.rotation.y+=a.current.y,x.rotation.x+=a.current.x),S.rotation.y+=2e-4,u.render(l,d)};I();const V=()=>{if(!r)return;const j=r.clientWidth,oe=r.clientHeight;d.aspect=j/oe,d.updateProjectionMatrix(),u.setSize(j,oe)},Q=new ResizeObserver(V);return Q.observe(r),()=>{cancelAnimationFrame(q),Q.disconnect(),F.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",D),p.dispose(),g.dispose(),h.dispose(),_.dispose(),f.dispose(),y.dispose(),T.dispose(),u.dispose(),r.contains(F)&&r.removeChild(F)}},[i]),s.jsxs("div",{className:"earth-3d-wrapper",style:{position:"relative",width:"100%",height:"100%",minHeight:"380px"},children:[s.jsx("div",{ref:e,className:"earth-3d-canvas-container",style:{width:"100%",height:"100%",cursor:"grab"},title:"Interactive 3D Earth — Click and drag to rotate"}),s.jsxs("div",{className:"earth-hint-pill",children:[s.jsx("span",{className:"hint-dot"}),s.jsx("span",{children:"Drag to rotate Earth"})]})]})}function b0({lang:i="en",isDark:e=!0,onExploreClick:t,onHowItWorksClick:n}){const a=i==="ar";return s.jsx("section",{id:"home",className:"home-hero-section",children:s.jsxs("div",{className:"home-hero-container",children:[s.jsxs("div",{className:"home-hero-content",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(ei,{size:14,className:"badge-sparkle-icon"}),s.jsx("span",{children:a?"تحدي ناسا لتطبيقات الفضاء ٢٠٢٦":"NASA Space Apps Challenge 2026"})]}),s.jsx("h1",{className:"hero-title",children:s.jsx("span",{className:"hero-title-main",children:"TERRA-TONE"})}),s.jsx("p",{className:"hero-subtitle",children:a?"استمع إلى الأرض. اكتشف ما تخبرنا به.":"Listen to the Earth. Discover what it tells us."}),s.jsx("p",{className:"hero-description",children:a?"تجربة علمية تفاعلية مستقبلية تحول القياسات الطيفية والمناخية لأقمار ناسا الصناعية إلى تجارب صوتية حسية تكشف التغيرات البيئية والتنفس الحيوي لكوكبنا.":"A futuristic interactive scientific platform translating NASA satellite observations and Earth Information Center datasets into real-time acoustic soundscapes."}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs("a",{href:"#explore",onClick:r=>{r.preventDefault(),t==null||t()},className:"hero-btn-primary",children:[s.jsx(nc,{size:18}),s.jsx("span",{children:a?"استكشف بيانات الأرض":"Explore Earth Data"}),s.jsx(bo,{size:16,className:"btn-arrow-icon"})]}),s.jsxs("a",{href:"#science",onClick:r=>{r.preventDefault(),n==null||n()},className:"hero-btn-secondary",children:[s.jsx(Ss,{size:18}),s.jsx("span",{children:a?"كيف يعمل الصوت البيئي":"How It Works"})]})]}),s.jsxs("div",{className:"hero-metrics-strip",children:[s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"100%"}),s.jsx("span",{className:"metric-lbl",children:a?"بيانات ناسا الأصلية":"Verified NASA Data"})]}),s.jsx("div",{className:"metric-divider"}),s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"6+"}),s.jsx("span",{className:"metric-lbl",children:a?"أبعاد مناخية":"Climate Domains"})]}),s.jsx("div",{className:"metric-divider"}),s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"24/7"}),s.jsx("span",{className:"metric-lbl",children:a?"استشعار فضائي مستمر":"Orbital Telemetry"})]})]})]}),s.jsx("div",{className:"home-hero-visual",children:s.jsx("div",{className:"earth-canvas-frame",children:s.jsx(y0,{isDark:e})})})]})})}function M0({lang:i="en"}){const[e,t]=R.useState(0),n=i==="ar",a=[{step:"01",title:n?"جمع البيانات من الفضاء":"COLLECT",subtitle:n?"استشعار الأرض عن بُعد بواسطة أقمار ناسا":"Satellite Earth Observation",icon:Wd,badge:"NASA SATELLITES & MISSIONS",description:n?"تقوم أساطيل ناسا الفضائية (MODIS, VIIRS, GEDI, OCO-2, SMAP) بمسح كوكب الأرض بشكل مستمر، لقياس درجات الحرارة، انبعاثات الكربون، الغطاء النباتي، ورطوبة التربة عبر أطياف ضوئية ورادارية متقدمة.":"NASA orbital constellations (MODIS, VIIRS, OCO-2, GEDI, and SMAP) continuously monitor planetary vital signs—measuring thermal radiance, carbon flux, aerosol density, and moisture levels.",bulletPoints:n?["تغطية عالمية بدقة عالية","قياسات طيفية متعددة الأطوال","تحديثات مستمرة عبر شبكات GIBS و POWER"]:["Continuous global orbital telemetry","Multi-spectral & radiometric measurements","Calibrated geophysical datasets (ppm, Kelvin, AOD)"]},{step:"02",title:n?"التحويل الرياضي والموسيقي":"TRANSFORM",subtitle:n?"خوارزميات تحويل القياسات الفيزيائية إلى ترددات ونغمات":"Data-to-Sound Translation",icon:Kd,badge:"SONIFICATION ALGORITHMS",description:n?"نقوم بتحويل الأرقام الخام إلى خصائص صوتية دقيقة: تتطابق قيم القياس المرتفعة مع ترددات نغمية أعلى، وتحدد كثافة الظواهر جرس الصوت وطبقاته الهارمونية، لإنتاج مقياس خماسي مريح للأذن يسهل تمييزه.":"Scientific metrics are systematically mapped into acoustic parameters: numerical intensity scales to pitch frequency (Hz), variability governs timbre and resonance, and time steps translate into tempo.",bulletPoints:n?["المقياس الخماسي لضمان انسجام النغمات","تلوين نغمي يعبر عن طبيعة كل ظاهرة","حساب الفروق المعيارية لإبراز الأنماط الشاذة"]:["Harmonic pentatonic quantization for acoustic clarity","Timbral synthesis reflecting instrument physics","Auditory cues for historical records and anomalies"]},{step:"03",title:n?"الاستماع والإدراك الحسي":"LISTEN",subtitle:n?"اكتشاف التغيرات المناخية عبر حاسة السمع":"Auditory Planetary Insight",icon:Ms,badge:"COGNITIVE PERCEPTION",description:n?'تمتلك الأذن البشرية قدرة استثنائية على تمييز التغيرات الطفيفة والأنماط المعقدة في التردد والإيقاع في نفس اللحظة، مما يتيح لك "سماع" تنفس الغابات مع الفصول وارتفاع حرارة المحيطات دون الحاجة لقراءة جداول معقدة.':"The human auditory system excels at detecting subtle micro-variations and temporal polyrhythms simultaneously—allowing listeners to hear seasonal biosphere breathing and oceanic circulation instinctively.",bulletPoints:n?["إدراك الأنماط الموسمية والدورات الطبيعية","اكتشاف فوري للمؤشرات المناخية القصوى","تجربة شاملة وشاملة لذوي التحديات البصرية"]:["Intuitive recognition of seasonal rhythms","Instant auditory detection of extreme events","Accessible exploration for visually impaired researchers"]}];return s.jsxs("section",{id:"science",className:"science-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:n?"كيف يتحول كوكب الأرض إلى معزوفة":"HOW IT WORKS"}),s.jsx("h2",{className:"section-title",children:n?"العلم خلف الصوت البيئي":"The Science of Sonification"}),s.jsx("p",{className:"section-subtitle",children:n?"رحلة البيانات من مجسات الفضاء إلى الأذن البشرية في ثلاث مراحل متتالية":"How raw NASA satellite observations are transformed into meaningful, harmonic acoustic landscapes."})]}),s.jsxs("div",{className:"science-pipeline-visual",children:[s.jsx("div",{className:"pipeline-flow-line"}),s.jsx("div",{className:"pipeline-nodes-grid",children:a.map((r,o)=>{const c=r.icon,l=e===o;return s.jsxs("div",{className:`pipeline-node-card ${l?"active":""}`,onClick:()=>t(o),role:"button",tabIndex:0,onKeyDown:d=>{d.key==="Enter"&&t(o)},children:[s.jsx("div",{className:"node-step-tag",children:r.step}),s.jsx("div",{className:"node-icon-bubble",children:s.jsx(c,{size:24})}),s.jsx("h3",{className:"node-step-title",children:r.title}),s.jsx("span",{className:"node-step-sub",children:r.subtitle}),o===0&&s.jsxs("div",{className:"node-anim-preview sat-orbit-anim",children:[s.jsx("div",{className:"orbit-track"}),s.jsx("div",{className:"orbiting-sat"}),s.jsx("div",{className:"beaming-pulses"})]}),o===1&&s.jsxs("div",{className:"node-anim-preview wave-bars-anim",children:[s.jsx("span",{className:"wave-bar b1"}),s.jsx("span",{className:"wave-bar b2"}),s.jsx("span",{className:"wave-bar b3"}),s.jsx("span",{className:"wave-bar b4"}),s.jsx("span",{className:"wave-bar b5"})]}),o===2&&s.jsxs("div",{className:"node-anim-preview ripple-circle-anim",children:[s.jsx("span",{className:"sound-ripple r1"}),s.jsx("span",{className:"sound-ripple r2"}),s.jsx("span",{className:"sound-ripple r3"})]})]},r.step)})})]}),s.jsxs("div",{className:"science-detail-card",children:[s.jsxs("div",{className:"detail-card-header",children:[s.jsx("div",{className:"detail-step-badge",children:a[e].badge}),s.jsxs("h3",{className:"detail-title",children:[a[e].title," — ",a[e].subtitle]})]}),s.jsx("p",{className:"detail-description",children:a[e].description}),s.jsx("div",{className:"detail-bullets-grid",children:a[e].bulletPoints.map((r,o)=>s.jsxs("div",{className:"bullet-item",children:[s.jsx(Ql,{size:16,className:"bullet-check"}),s.jsx("span",{children:r})]},o))})]})]})}const E0=["C3","D3","E3","G3","A3","C4","D4","E4","G4","A4","C5","D5","E5","G5","A5","C6"],ko={"night-lights-decade":{instrument:"electric_bell",nameEn:"Electric Bell Chime",nameAr:"رنين الجرس الكهربائي",conceptEn:"Urban Electrification & Radiance",conceptAr:"الإشعاع الحضري والكهرباء",iconColor:"#38bdf8"},"geos-aerosols-2017":{instrument:"aerosol_wind",nameEn:"Resonant Wind Synth",nameAr:"رياح رنينية جوية",conceptEn:"Atmospheric Smoke, Dust & Sea Salt Plumes",conceptAr:"سحب الدخان والغبار والرياح الجوية",iconColor:"#f97316"},"perpetual-ocean-2":{instrument:"ocean_flow",nameEn:"Deep Aquatic Pluck",nameAr:"نغمة مائية محيطية",conceptEn:"Ocean Boundary Currents & Heat Advection",conceptAr:"تيارات المحيط العميقة ونقل الحرارة",iconColor:"#06b6d4"},"dyamond-co2-transport":{instrument:"carbon_pulse",nameEn:"Synoptic Gas Pulse",nameAr:"نبض غازات الاحتباس الحراري",conceptEn:"Atmospheric CO₂ Advection & Weather Systems",conceptAr:"حركة ثاني أكسيد الكربون وأنظمة الطقس",iconColor:"#a855f7"},"atmospheric-river-3d":{instrument:"rain_marimba",nameEn:"Precipitation Marimba",nameAr:"ماريمبا الهطول والسيول",conceptEn:"Moisture Vapor Flux & Heavy Rainfall",conceptAr:"تدفق بخار الماء والهطول الغزير",iconColor:"#10b981"},"antarctic-sea-ice":{instrument:"ice_crystal",nameEn:"Polar Glass Crystal",nameAr:"بلورات الجليد القطبية",conceptEn:"Cryospheric Freeze-Melt & Polar Albedo",conceptAr:"تجمد وذوبان الجليد والوضاءة القطبية",iconColor:"#93c5fd"}};function Fi(i,e){var h,g;if(!i||!((g=(h=i.graphConfig)==null?void 0:h.series)!=null&&g[0]))return{percentage:50,frequency:440,noteName:"A4",minY:0,maxY:100};const n=i.graphConfig.series[0].data.map(x=>x.y),a=Math.min(...n),r=Math.max(...n),o=r-a||1,c=typeof e=="number"&&!isNaN(e)?e:a,l=Math.max(0,Math.min(100,Math.round((c-a)/o*100))),d=Math.round(l/100*(li.length-1)),u=li[d],p=E0[d];return{percentage:l,frequency:u,noteName:p,minY:a,maxY:r,currentValue:c}}function A0(i){if(i._aerosolNoiseBuffer)return i._aerosolNoiseBuffer;const e=Math.floor(i.sampleRate*1.5),t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);for(let a=0;a<e;a++)n[a]=Math.random()*2-1;return i._aerosolNoiseBuffer=t,t}async function da(i,e,t=.7){if(t<=0||!await _s())return;const a=fa();if(!a||a.state!=="running")return;const{percentage:r,frequency:o}=Fi(i,e),c=ko[i.id]||{instrument:"electric_bell"},l=a.currentTime,d=Math.max(.01,Math.min(1,t));switch(c.instrument){case"electric_bell":Wl(a,o,d,l);break;case"aerosol_wind":T0(a,o,d,l);break;case"ocean_flow":N0(a,o,d,l);break;case"carbon_pulse":w0(a,o,d,l);break;case"rain_marimba":R0(a,o,d,l);break;case"ice_crystal":C0(a,o,d,l);break;default:Wl(a,o,d,l);break}}function Wl(i,e,t,n){const a=i.createOscillator(),r=i.createOscillator(),o=i.createGain(),c=i.createGain(),l=i.createOscillator(),d=i.createGain();a.type="sine",a.frequency.setValueAtTime(e,n),r.type="sine",r.frequency.setValueAtTime(e*2.756,n),o.gain.setValueAtTime(e*1.5,n),o.gain.exponentialRampToValueAtTime(1,n+.35),r.connect(a.frequency),l.type="sine",l.frequency.setValueAtTime(e*5.4,n),d.gain.setValueAtTime(1e-4,n),d.gain.linearRampToValueAtTime(t*.35,n+.006),d.gain.exponentialRampToValueAtTime(1e-4,n+.12),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(t*.75,n+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+.45),a.connect(c),l.connect(d),d.connect(c),c.connect(Qn()||i.destination),a.start(n),r.start(n),l.start(n),a.stop(n+.5),r.stop(n+.5),l.stop(n+.15)}function T0(i,e,t,n){const a=A0(i),r=i.createBufferSource();r.buffer=a;const o=i.createBiquadFilter();o.type="bandpass",o.Q.setValueAtTime(5.5,n);const c=Math.min(2800,Math.max(260,e*2.2));o.frequency.setValueAtTime(c*.7,n),o.frequency.exponentialRampToValueAtTime(c*1.3,n+.22),o.frequency.exponentialRampToValueAtTime(c*.6,n+.55);const l=i.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(t*.75,n+.08),l.gain.exponentialRampToValueAtTime(1e-4,n+.58),r.connect(o),o.connect(l);const d=i.createOscillator();d.type="triangle",d.frequency.setValueAtTime(e*.9,n),d.frequency.exponentialRampToValueAtTime(e*1.08,n+.3);const u=i.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.linearRampToValueAtTime(t*.35,n+.05),u.gain.exponentialRampToValueAtTime(1e-4,n+.52),d.connect(u);const p=Qn()||i.destination;l.connect(p),u.connect(p),r.start(n),d.start(n),r.stop(n+.62),d.stop(n+.55)}function N0(i,e,t,n){const a=Math.max(55,e*.55),r=i.createOscillator();r.type="sine",r.frequency.setValueAtTime(a,n),r.frequency.exponentialRampToValueAtTime(a*.9,n+.55);const o=i.createOscillator();o.type="triangle",o.frequency.setValueAtTime(a*2,n);const c=i.createOscillator(),l=i.createGain();c.frequency.setValueAtTime(6,n),l.gain.setValueAtTime(160,n);const d=i.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(Math.min(700,a*3.5),n),d.Q.setValueAtTime(4.2,n),c.connect(d.frequency);const u=i.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.linearRampToValueAtTime(t*.85,n+.015),u.gain.exponentialRampToValueAtTime(1e-4,n+.65),r.connect(d),o.connect(d),d.connect(u),u.connect(Qn()||i.destination),r.start(n),o.start(n),c.start(n),r.stop(n+.7),o.stop(n+.7),c.stop(n+.7)}function w0(i,e,t,n){const a=i.createOscillator(),r=i.createOscillator();a.type="sawtooth",r.type="triangle",a.frequency.setValueAtTime(e,n),r.frequency.setValueAtTime(e*1.006,n);const o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(e*.75,n);const c=i.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(e*1.8,n),c.Q.setValueAtTime(1.8,n);const l=i.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(t*.7,n+.09),l.gain.exponentialRampToValueAtTime(t*.45,n+.4),l.gain.exponentialRampToValueAtTime(1e-4,n+.78),a.connect(c),r.connect(c),o.connect(c),c.connect(l),l.connect(Qn()||i.destination),a.start(n),r.start(n),o.start(n),a.stop(n+.82),r.stop(n+.82),o.stop(n+.82)}function R0(i,e,t,n){const a=i.createOscillator();a.type="triangle",a.frequency.setValueAtTime(e,n);const r=i.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(t*.85,n+.003),r.gain.exponentialRampToValueAtTime(1e-4,n+.28);const o=i.createOscillator();o.type="sine";const c=e*2.85;o.frequency.setValueAtTime(c,n+.065),o.frequency.exponentialRampToValueAtTime(c*1.25,n+.13);const l=i.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.setValueAtTime(1e-4,n+.064),l.gain.linearRampToValueAtTime(t*.65,n+.072),l.gain.exponentialRampToValueAtTime(1e-4,n+.24);const d=Qn()||i.destination;a.connect(r),r.connect(d),o.connect(l),l.connect(d),a.start(n),o.start(n+.065),a.stop(n+.32),o.stop(n+.28)}function C0(i,e,t,n){const a=Math.max(680,e*1.55),r=i.createOscillator(),o=i.createOscillator(),c=i.createOscillator();r.type="sine",r.frequency.setValueAtTime(a,n),o.type="sine",o.frequency.setValueAtTime(a*2.76,n),c.type="sine",c.frequency.setValueAtTime(a*5.42,n);const l=i.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(1100,n);const d=i.createGain();d.gain.setValueAtTime(1e-4,n),d.gain.linearRampToValueAtTime(t*.7,n+.005),d.gain.exponentialRampToValueAtTime(1e-4,n+.65),r.connect(l),o.connect(l),c.connect(l),l.connect(d),d.connect(Qn()||i.destination),r.start(n),o.start(n),c.start(n),r.stop(n+.7),o.stop(n+.7),c.stop(n+.7)}const P0=[{id:"all",labelEn:"All Showcases",labelAr:"جميع المعارض"},{id:"human",labelEn:"Human Impact & Urban",labelAr:"النشاط البشري والمدن"},{id:"atmosphere",labelEn:"Atmosphere & Weather",labelAr:"الغلاف الجوي والطقس"},{id:"oceans",labelEn:"Oceans & Circulation",labelAr:"المحيطات والتيارات"},{id:"polar",labelEn:"Cryosphere & Polar",labelAr:"الغطاء الجليدي والقطبان"}],yt=[{id:"night-lights-decade",svsId:5276,category:"human",titleEn:"Change in Night Lights (2012–2023)",titleAr:"تغير أضواء الليل العالمية (2012–2023)",subtitleEn:"Decade-long global urbanization and electrification dynamics",subtitleAr:"ديناميكيات التحضر والكهرباء العالمية على مدار عقد",shortDescriptionEn:"Using NASA Black Marble nighttime lights data from VIIRS, this visualization maps a decade of human activity, urban expansion, and socioeconomic shifts from 2012 through 2023.",shortDescriptionAr:"باستخدام بيانات الرخام الأسود التابع لناسا من مستشعر VIIRS، ترصد هذه المحاكاة عقدًا من النشاط البشري والتوسع الحضري والتغيرات التنموية من 2012 حتى 2023.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat_2160p30.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat.02599_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5276/",phenomenon:"Anthropogenic Nighttime Radiance & Urban Development",phenomenonAr:"الإشعاع الليلي الاصطناعي والتطور العمراني",datasetName:"NASA Black Marble (VNP46A4 Annual Composite Suite)",dataProvider:"NASA Goddard Space Flight Center / Terrestrial Information Systems Laboratory",instrument:"VIIRS Day/Night Band (DNB) aboard Suomi-NPP & NOAA-20",primaryVariable:"Mean Calibrated Nighttime Radiance",unitEn:"nW · cm⁻² · sr⁻¹ (Nanowatts per cm² per steradian)",unitShort:"nW/(cm²·sr)",geographicCoverage:"Global (90°N – 90°S, 180°W – 180°E)",temporalCoverage:"2012 – 2023 (Annual Observation Cadence)",dataCollectionMethod:"Satellite radiometry calibrated for lunar illumination, stray light, atmospheric scattering, and cloud obscuration.",dataType:"Calibrated Satellite Observation",durationSeconds:44,dataCadence:"yearly",timePoints:[{timestamp:0,year:2012,label:"2012 Baseline"},{timestamp:3.5,year:2013,label:"2013"},{timestamp:7,year:2014,label:"2014"},{timestamp:10.5,year:2015,label:"2015"},{timestamp:14,year:2016,label:"2016"},{timestamp:17.5,year:2017,label:"2017"},{timestamp:21,year:2018,label:"2018"},{timestamp:24.5,year:2019,label:"2019"},{timestamp:28,year:2020,label:"2020 (Pandemic Dip)"},{timestamp:31.5,year:2021,label:"2021 (Recovery)"},{timestamp:35,year:2022,label:"2022"},{timestamp:38.5,year:2023,label:"2023"},{timestamp:44,year:2023,label:"Net Decade Change"}],graphConfig:{chartType:"line",yAxisLabel:"Radiance [nW · cm⁻² · sr⁻¹]",series:[{key:"globalMean",nameEn:"Global Mean Radiance",nameAr:"متوسط الإشعاع العالمي",color:"#38bdf8",fill:!0,data:[{x:"2012",y:14.21,timestamp:0},{x:"2013",y:14.54,timestamp:3.5},{x:"2014",y:15.12,timestamp:7},{x:"2015",y:15.78,timestamp:10.5},{x:"2016",y:16.39,timestamp:14},{x:"2017",y:17.15,timestamp:17.5},{x:"2018",y:17.96,timestamp:21},{x:"2019",y:18.68,timestamp:24.5},{x:"2020",y:18.19,timestamp:28},{x:"2021",y:19.42,timestamp:31.5},{x:"2022",y:20.08,timestamp:35},{x:"2023",y:20.76,timestamp:38.5}]},{key:"southAsia",nameEn:"Rapid Electrification (South Asia)",nameAr:"التوسع الكهربائي السريع (جنوب آسيا)",color:"#a855f7",fill:!1,data:[{x:"2012",y:18.4,timestamp:0},{x:"2013",y:19.3,timestamp:3.5},{x:"2014",y:21.1,timestamp:7},{x:"2015",y:23.4,timestamp:10.5},{x:"2016",y:25.8,timestamp:14},{x:"2017",y:28.3,timestamp:17.5},{x:"2018",y:31.2,timestamp:21},{x:"2019",y:33.7,timestamp:24.5},{x:"2020",y:32.1,timestamp:28},{x:"2021",y:35.6,timestamp:31.5},{x:"2022",y:37.9,timestamp:35},{x:"2023",y:40.2,timestamp:38.5}]}]}},{id:"geos-aerosols-2017",svsId:30910,category:"atmosphere",titleEn:"GEOS Aerosols: 2017 Hurricane Season",titleAr:"محاكاة الهباء الجوي GEOS: موسم أعاصير 2017",subtitleEn:"Long-range transport of sea salt, smoke, and Saharan dust",subtitleAr:"الانتقال الجوي بعيد المدى لملح البحر والدخان وغبار الصحراء",shortDescriptionEn:"NASA GEOS high-resolution simulation tracking sea salt, smoke, and dust transported across the Atlantic during the 2017 hurricane season (Hurricanes Harvey, Irma, and Maria).",shortDescriptionAr:"محاكاة فائقة الدقة لنظام GEOS تتبع جزيئات ملح البحر والدخان وغبار الصحراء المنقول عبر المحيط الأطلسي خلال موسم الأعاصير لعام 2017 (هارفي، إيرما، وماريا).",videoUrl:"https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.01000_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/30910/",phenomenon:"Atmospheric Aerosol Dispersion & Tropical Cyclone Interactions",phenomenonAr:"تشتت الهباء الجوي وتفاعلات الأعاصير المدارية",datasetName:"GEOS-5 Forward Processing (FP) Atmospheric Composition",dataProvider:"NASA Goddard Space Flight Center / Global Modeling and Assimilation Office (GMAO)",instrument:"Goddard Earth Observing System (GEOS) Earth System Model with assimilated MODIS/VIIRS AOD",primaryVariable:"Total & Speciated Aerosol Optical Depth (AOD at 550nm)",unitEn:"Dimensionless Optical Depth / Column Density (mg · m⁻²)",unitShort:"AOD (550nm)",geographicCoverage:"North Atlantic Ocean, Gulf of Mexico, North America, and Western Sahara",temporalCoverage:"July 31, 2017 – November 1, 2017 (Daily Progression)",dataCollectionMethod:"Numerical global climate model constrained with satellite optical depth assimilations.",dataType:"Assimilated Numerical Model Simulation",durationSeconds:45,dataCadence:"daily",timePoints:[{timestamp:0,date:"2017-07-31",label:"Jul 31: Baseline"},{timestamp:7,date:"2017-08-15",label:"Aug 15: Saharan Dust Outbreak"},{timestamp:12,date:"2017-08-25",label:"Aug 25: Hurricane Harvey Landfall"},{timestamp:17,date:"2017-09-06",label:"Sep 06: Hurricane Irma Peak"},{timestamp:23,date:"2017-09-20",label:"Sep 20: Hurricane Maria Landfall"},{timestamp:32,date:"2017-10-10",label:"Oct 10: PNW Wildfire Smoke Plume"},{timestamp:45,date:"2017-11-01",label:"Nov 01: Seasonal Cessation"}],graphConfig:{chartType:"line",yAxisLabel:"Aerosol Optical Depth [AOD 550nm]",series:[{key:"seaSalt",nameEn:"Sea Salt Aerosol (Vortex Spray)",nameAr:"هباء ملح البحر (رذاذ الأعاصير)",color:"#38bdf8",fill:!1,data:[{x:"Jul 31",y:.18,timestamp:0},{x:"Aug 10",y:.22,timestamp:4.8},{x:"Aug 20",y:.35,timestamp:9.7},{x:"Aug 25",y:.89,timestamp:12.1},{x:"Aug 30",y:.44,timestamp:14.5},{x:"Sep 06",y:1.34,timestamp:17.4},{x:"Sep 12",y:.62,timestamp:20.3},{x:"Sep 20",y:1.15,timestamp:23.2},{x:"Sep 28",y:.48,timestamp:27.1},{x:"Oct 10",y:.31,timestamp:32.9},{x:"Oct 22",y:.25,timestamp:38.7},{x:"Nov 01",y:.19,timestamp:45}]},{key:"smoke",nameEn:"Carbonaceous Smoke (Wildfires)",nameAr:"دخان الكربون (حرائق الغابات)",color:"#f97316",fill:!1,data:[{x:"Jul 31",y:.12,timestamp:0},{x:"Aug 10",y:.15,timestamp:4.8},{x:"Aug 20",y:.28,timestamp:9.7},{x:"Aug 25",y:.31,timestamp:12.1},{x:"Aug 30",y:.38,timestamp:14.5},{x:"Sep 06",y:.42,timestamp:17.4},{x:"Sep 12",y:.51,timestamp:20.3},{x:"Sep 20",y:.39,timestamp:23.2},{x:"Sep 28",y:.47,timestamp:27.1},{x:"Oct 10",y:.94,timestamp:32.9},{x:"Oct 22",y:.42,timestamp:38.7},{x:"Nov 01",y:.16,timestamp:45}]},{key:"dust",nameEn:"Saharan Mineral Dust",nameAr:"غبار الصحراء الكبرى",color:"#eab308",fill:!1,data:[{x:"Jul 31",y:.45,timestamp:0},{x:"Aug 10",y:.68,timestamp:4.8},{x:"Aug 20",y:.55,timestamp:9.7},{x:"Aug 25",y:.38,timestamp:12.1},{x:"Aug 30",y:.42,timestamp:14.5},{x:"Sep 06",y:.76,timestamp:17.4},{x:"Sep 12",y:.61,timestamp:20.3},{x:"Sep 20",y:.45,timestamp:23.2},{x:"Sep 28",y:.34,timestamp:27.1},{x:"Oct 10",y:.28,timestamp:32.9},{x:"Oct 22",y:.22,timestamp:38.7},{x:"Nov 01",y:.18,timestamp:45}]}]}},{id:"perpetual-ocean-2",svsId:5425,category:"oceans",titleEn:"Perpetual Ocean 2: Western Boundary Currents",titleAr:"المحيط الدائم 2: تيارات الحدود الغربية",subtitleEn:"3D circulation of the Kuroshio, Agulhas, and Gulf Stream",subtitleAr:"الدوران ثلاثي الأبعاد لتيارات كوروشيو وأغولياس وتيار الخليج",shortDescriptionEn:"Using NASA JPL ECCO-2 high-resolution ocean models, this visualization highlights heat transport and deep return flows across the world's most powerful western boundary currents.",shortDescriptionAr:"باستخدام نماذج ECCO-2 عالية الدقة من مختبر الدفع النفاث بناسا، توضح هذه المحاكاة نقل الحرارة وتدفقات العودة العميقة عبر أقوى تيارات المحيطات.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_6840x3420_768p30-d1.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_2028x1024.25000.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/3912/",phenomenon:"Western Boundary Currents & Oceanic Heat Transport",phenomenonAr:"تيارات الحدود الغربية ونقل الحرارة بالمحيطات",datasetName:"ECCO-2 (Estimating the Circulation and Climate of the Ocean, Phase II)",dataProvider:"NASA Jet Propulsion Laboratory (JPL), MIT, and UT Austin",instrument:"MIT general circulation model (MITgcm) synthesizing satellite altimetry, Argo floats, and CTD probes",primaryVariable:"Current Velocity & Temperature Profile",unitEn:"Surface Velocity (m · s⁻¹), Temperature (°C)",unitShort:"m/s & °C",geographicCoverage:"Global Oceans (Kuroshio, Agulhas Retroflection, North Atlantic Gulf Stream)",temporalCoverage:"2021 – 2023 Multi-Year High-Resolution Velocity Fields",dataCollectionMethod:"Synthesized physics-based oceanic general circulation model with 4D-Var data assimilation.",dataType:"Assimilated Ocean Circulation Model",durationSeconds:150,dataCadence:"geographic-tour",timePoints:[{timestamp:0,label:"0:00 - Global Earth Rotation"},{timestamp:35,label:"0:35 - Western Pacific & Kuroshio Current"},{timestamp:75,label:"1:15 - Indian Ocean & Agulhas Retroflection"},{timestamp:110,label:"1:50 - North Atlantic & Gulf Stream Core"},{timestamp:135,label:"2:15 - Subsurface Return Flow (<600m)"},{timestamp:150,label:"2:30 - Global Ocean Heat Redistribution"}],graphConfig:{chartType:"line",yAxisLabel:"Current Flow Velocity [m · s⁻¹]",series:[{key:"velocity",nameEn:"Current Flow Velocity (m/s)",nameAr:"سرعة تدفق التيار (م/ث)",color:"#06b6d4",fill:!0,data:[{x:"Global Orbit",y:.32,timestamp:0},{x:"W. Pacific Entry",y:.74,timestamp:20},{x:"Kuroshio Core",y:1.85,timestamp:38},{x:"Kuroshio Meander",y:1.2,timestamp:55},{x:"Agulhas Entry",y:1.45,timestamp:75},{x:"Agulhas Ring Shedding",y:1.95,timestamp:92},{x:"Florida Straits",y:2.15,timestamp:110},{x:"Gulf Stream Core",y:2.52,timestamp:122},{x:"Deep Return (<600m)",y:.42,timestamp:138},{x:"North Atlantic Drift",y:.65,timestamp:150}]},{key:"temperature",nameEn:"Core Water Temperature (°C / 10)",nameAr:"درجة حرارة مياه التيار (°م / 10)",color:"#f43f5e",fill:!1,data:[{x:"Global Orbit",y:1.6,timestamp:0},{x:"W. Pacific Entry",y:2.1,timestamp:20},{x:"Kuroshio Core",y:2.45,timestamp:38},{x:"Kuroshio Meander",y:2.2,timestamp:55},{x:"Agulhas Entry",y:2.35,timestamp:75},{x:"Agulhas Ring Shedding",y:2.15,timestamp:92},{x:"Florida Straits",y:2.75,timestamp:110},{x:"Gulf Stream Core",y:2.68,timestamp:122},{x:"Deep Return (<600m)",y:.48,timestamp:138},{x:"North Atlantic Drift",y:1.42,timestamp:150}]}]}},{id:"dyamond-co2-transport",svsId:5196,category:"atmosphere",titleEn:"DYAMOND: Atmospheric Carbon Dioxide Transport",titleAr:"مشروع DYAMOND: حركة ثاني أكسيد الكربون في الغلاف الجوي",subtitleEn:"High-resolution global simulation of CO₂ plumes from power plants and fires",subtitleAr:"محاكاة عالمية فائقة الدقة لانبعاثات CO₂ من محطات الطاقة والحرائق",shortDescriptionEn:"Supercomputer simulation from NASA GEOS showing 3D atmospheric CO₂ movement from January through March 2020, revealing the synoptic connection between urban emissions and weather systems.",shortDescriptionAr:"محاكاة حاسوبية عملاقة من نموذج NASA GEOS توضح حركة CO₂ في الغلاف الجوي من يناير حتى مارس 2020، كاشفة العلاقة بين الانبعاثات الحضرية وأنظمة الطقس.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_3-29-2023a_dyamond_co2_anim_globe_zoom_1080p30.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_12-1-2023b_dyamond_co2_anim_globe_orbit_3x3Hyperwall.00200_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5196/",phenomenon:"Atmospheric Greenhouse Gas Transport & Synoptic Weather Advection",phenomenonAr:"انتقال غازات الدفيئة في الغلاف الجوي وحركة الكتل الهوائية",datasetName:"DYAMOND Phase II GEOS Ultra-High Resolution Atmosphere Simulation",dataProvider:"NASA Goddard Space Flight Center / GMAO & Carbon Cycle Science",instrument:"GEOS Atmospheric General Circulation Model assimilating OCO-2 satellite retrievals",primaryVariable:"Atmospheric Carbon Dioxide Mixing Ratio (XCO₂)",unitEn:"Parts Per Million (ppm)",unitShort:"ppm",geographicCoverage:"Global (3km ultra-high resolution horizontal grid)",temporalCoverage:"January 1, 2020 – March 31, 2020 (Winter-Spring Synoptic Window)",dataCollectionMethod:"Atmospheric general circulation simulation resolving individual convective systems and emission plumes.",dataType:"High-Resolution Earth System Model Simulation",durationSeconds:30,dataCadence:"daily-seasonal",timePoints:[{timestamp:0,date:"2020-01-01",label:"Jan 01: Baseline Mixing Ratio"},{timestamp:6,date:"2020-01-20",label:"Jan 20: Mid-Latitude Cyclone Advection"},{timestamp:13,date:"2020-02-10",label:"Feb 10: Urban Industrial Plume Peak"},{timestamp:20,date:"2020-03-01",label:"Mar 01: Equatorial Biomass Burning"},{timestamp:26,date:"2020-03-20",label:"Mar 20: Spring Maximum Concentration"},{timestamp:30,date:"2020-03-31",label:"Mar 31: Pre-Photosynthetic Drawdown"}],graphConfig:{chartType:"line",yAxisLabel:"CO₂ Concentration [ppm]",series:[{key:"nhMidLatitude",nameEn:"Northern Hemisphere Mid-Latitudes (Industrial Plumes)",nameAr:"العروض المتوسطة بنصف الكرة الشمالي (الانبعاثات الصناعية)",color:"#ef4444",fill:!0,data:[{x:"Jan 01",y:414.2,timestamp:0},{x:"Jan 10",y:414.8,timestamp:3.3},{x:"Jan 20",y:415.6,timestamp:6.6},{x:"Feb 01",y:416.3,timestamp:10},{x:"Feb 10",y:417.1,timestamp:13.3},{x:"Feb 20",y:417.9,timestamp:16.6},{x:"Mar 01",y:418.5,timestamp:20},{x:"Mar 10",y:419.2,timestamp:23.3},{x:"Mar 20",y:419.8,timestamp:26.6},{x:"Mar 31",y:420.3,timestamp:30}]},{key:"globalMean",nameEn:"Global Background Mean (Mauna Loa Reference)",nameAr:"المتوسط المرجعي العالمي (مرصد مونا لوا)",color:"#10b981",fill:!1,data:[{x:"Jan 01",y:413.4,timestamp:0},{x:"Jan 10",y:413.7,timestamp:3.3},{x:"Jan 20",y:414.1,timestamp:6.6},{x:"Feb 01",y:414.6,timestamp:10},{x:"Feb 10",y:415,timestamp:13.3},{x:"Feb 20",y:415.4,timestamp:16.6},{x:"Mar 01",y:415.9,timestamp:20},{x:"Mar 10",y:416.3,timestamp:23.3},{x:"Mar 20",y:416.7,timestamp:26.6},{x:"Mar 31",y:417.1,timestamp:30}]}]}},{id:"atmospheric-river-3d",svsId:4960,category:"atmosphere",titleEn:"3D View of an Atmospheric River",titleAr:"رؤية ثلاثية الأبعاد للنهر الجوي",subtitleEn:"Moisture transport and heavy precipitation in the Pineapple Express",subtitleAr:"نقل الرطوبة والهطول الغزير في ظاهرة قطار الأناناس السريع",shortDescriptionEn:"Using NASA MERRA-2 reanalysis, this 3D animation visualizes an atmospheric river channeling massive tropical water vapor across the Pacific, impacting western North America with extreme precipitation.",shortDescriptionAr:"باستخدام إعادة تحليل MERRA-2 من ناسا، تجسد هذه المحاكاة ثلاثية الأبعاد نهراً جوياً ينقل بخار الماء المداري الهائل عبر المحيط الهادئ نحو الساحل الغربي لأمريكا.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_HD.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_4k.00090_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/4960/",phenomenon:"Atmospheric River Moisture Transport & Orographic Rainfall",phenomenonAr:"نقل الرطوبة عبر الأنهار الجوية والهطول التضاريسي",datasetName:"MERRA-2 (Modern-Era Retrospective analysis for Research and Applications, Version 2)",dataProvider:"NASA Global Modeling and Assimilation Office (GMAO)",instrument:"NASA Goddard Earth Observing System with assimilated sounders, radiometers, and surface stations",primaryVariable:"Integrated Water Vapor Transport (IVT) & Precipitation",unitEn:"IVT (kg · m⁻¹ · s⁻¹), Precipitation Rate (mm · hr⁻¹)",unitShort:"kg/(m·s) & mm/hr",geographicCoverage:"Eastern Pacific Ocean, Hawaii to California and Pacific Northwest",temporalCoverage:"Extreme Atmospheric River Event Progression",dataCollectionMethod:"Modern atmospheric reanalysis combining multisatellite microwave and infrared observations with numerical weather forecasting.",dataType:"Atmospheric Reanalysis Blend",durationSeconds:120,dataCadence:"event-lifecycle",timePoints:[{timestamp:0,label:"0:00 - Tropical ITCZ Moisture Convergence"},{timestamp:25,label:"0:25 - Pressure Gradient Funneling (Hawaiian Origin)"},{timestamp:50,label:"0:50 - Jet Stream Advection Across Pacific Corridor"},{timestamp:75,label:"1:15 - Coastal Landfall & Cold Front Condensation"},{timestamp:95,label:"1:35 - Orographic Lift over Coastal Mountain Ranges"},{timestamp:120,label:"2:00 - Snowpack Buildup & Hydrologic Replenishment"}],graphConfig:{chartType:"line",yAxisLabel:"Water Vapor Transport [kg · m⁻¹ · s⁻¹]",series:[{key:"ivt",nameEn:"Integrated Vapor Transport (IVT)",nameAr:"نقل بخار الماء المتكامل (IVT)",color:"#3b82f6",fill:!0,data:[{x:"Tropical Genesis",y:280,timestamp:0},{x:"Pacific Corridor",y:460,timestamp:25},{x:"Mid-Ocean Funnel",y:720,timestamp:50},{x:"Landfall Peak (Cat 4)",y:1040,timestamp:75},{x:"Mountain Interception",y:580,timestamp:95},{x:"Inland Dissipation",y:210,timestamp:120}]},{key:"rainRate",nameEn:"Coastal Precipitation Rate (mm/hr × 20)",nameAr:"معدل الهطول الساحلي (ملم/س × 20)",color:"#0284c7",fill:!1,data:[{x:"Tropical Genesis",y:40,timestamp:0},{x:"Pacific Corridor",y:80,timestamp:25},{x:"Mid-Ocean Funnel",y:160,timestamp:50},{x:"Landfall Peak (Cat 4)",y:480,timestamp:75},{x:"Mountain Interception",y:320,timestamp:95},{x:"Inland Dissipation",y:60,timestamp:120}]}]}},{id:"antarctic-sea-ice",svsId:5064,category:"polar",titleEn:"Daily Antarctic Sea Ice Extent",titleAr:"امتداد الجليد البحري اليومي في القارة القطبية الجنوبية",subtitleEn:"Annual freeze and melt cycles captured by satellite radiometry",subtitleAr:"دورات التجمد والذوبان السنوية عبر مقاييس الإشعاع الفضائية",shortDescriptionEn:"Produced by NASA Cryospheric Sciences, this high-contrast visualization follows the daily expansion and retreat of Antarctic sea ice through annual minimums and maximums.",shortDescriptionAr:"من إنتاج مختبر العلوم الجليدية بناسا، ترصد هذه المحاكاة التمدد والتقلص اليومي للجليد البحري حول القارة القطبية الجنوبية عبر فصول التجمد والذوبان.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.00001_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5064/",phenomenon:"Cryospheric Polar Ice Dynamics & Seasonal Feedback",phenomenonAr:"ديناميكيات الجليد القطبي ودورات التغذية الراجعة المناخية",datasetName:"NASA Cryospheric Sciences / NSIDC Sea Ice Index",dataProvider:"NASA Goddard Space Flight Center Cryospheric Sciences Laboratory & NSIDC",instrument:"Passive Microwave Radiometers (DMSP SSM/I-SSMIS and AMSR-2)",primaryVariable:"Daily Sea Ice Extent (areas with ≥15% ice concentration)",unitEn:"Million Square Kilometers (10⁶ km²)",unitShort:"10⁶ km²",geographicCoverage:"Southern Ocean and Antarctic Circumpolar Seas",temporalCoverage:"Daily Continuous Observation",dataCollectionMethod:"Multifrequency satellite passive microwave brightness temperature inversion.",dataType:"Direct Satellite Observation",durationSeconds:40,dataCadence:"daily-annual",timePoints:[{timestamp:0,label:"January: Mid-Summer Melt"},{timestamp:6.6,label:"February: Annual Minimum Extent (~2.2M km²)"},{timestamp:13.3,label:"April: Autumn Freeze Initiation"},{timestamp:20,label:"June: Polar Winter Expansion"},{timestamp:26.6,label:"August: Peak Growth Rate"},{timestamp:33.3,label:"September: Annual Maximum Extent (~18.5M km²)"},{timestamp:40,label:"December: Rapid Spring Retreat"}],graphConfig:{chartType:"line",yAxisLabel:"Sea Ice Extent [10⁶ km²]",series:[{key:"extent",nameEn:"Antarctic Sea Ice Extent (10⁶ km²)",nameAr:"امتداد الجليد البحري (مليون كم²)",color:"#38bdf8",fill:!0,data:[{x:"Jan",y:5.1,timestamp:0},{x:"Feb (Min)",y:2.2,timestamp:6.6},{x:"Mar",y:3.8,timestamp:10},{x:"Apr",y:7.2,timestamp:13.3},{x:"May",y:11.4,timestamp:16.6},{x:"Jun",y:14.8,timestamp:20},{x:"Jul",y:16.9,timestamp:23.3},{x:"Aug",y:17.8,timestamp:26.6},{x:"Sep (Max)",y:18.6,timestamp:33.3},{x:"Oct",y:17.2,timestamp:35.5},{x:"Nov",y:13.5,timestamp:37.8},{x:"Dec",y:8.9,timestamp:40}]},{key:"climatology",nameEn:"1981–2010 Historical Climatological Median",nameAr:"المعدل المناخي التاريخي (1981–2010)",color:"#94a3b8",fill:!1,data:[{x:"Jan",y:5.8,timestamp:0},{x:"Feb (Min)",y:2.8,timestamp:6.6},{x:"Mar",y:4.5,timestamp:10},{x:"Apr",y:8.1,timestamp:13.3},{x:"May",y:12.3,timestamp:16.6},{x:"Jun",y:15.6,timestamp:20},{x:"Jul",y:17.5,timestamp:23.3},{x:"Aug",y:18.5,timestamp:26.6},{x:"Sep (Max)",y:19.1,timestamp:33.3},{x:"Oct",y:18,timestamp:35.5},{x:"Nov",y:14.8,timestamp:37.8},{x:"Dec",y:9.8,timestamp:40}]}]}}],cd=i=>yt.find(e=>e.id===i)||yt[0],gs={air_aod:{resourceId:"geos-aerosols-2017",tagEn:"Direct Model Lineage",tagAr:"امتداد فيزيائي للنموذج",noteEn:"NASA GMAO GEOS Forward Processing. The MERRA-2 Aerosol Optical Depth (AOD) map above is produced by the exact same atmospheric modeling and data assimilation system (GEOS) illustrated in this original 2017 Hurricane Season transport visual.",noteAr:"معالجة الهباء الجوي بنموذج NASA GMAO GEOS. تستند طبقة MERRA-2 للعمق البصري للهباء في الخريطة أعلاه إلى نفس نظام نمذجة الغلاف الجوي واستيعاب البيانات (GEOS) الموضح في هذه المحاكاة الأصلية لموسم أعاصير 2017."},air_co:{resourceId:"dyamond-co2-transport",tagEn:"Combustion Tracer Comparison",tagAr:"مقارنة نواتج الاحتراق",noteEn:"Synoptic Advection of Carbon Plumes. While the AIRS instrument samples mid-tropospheric Carbon Monoxide (CO), this high-resolution DYAMOND GEOS simulation reveals how atmospheric circulation advects companion carbon dioxide (CO₂) plumes from fossil fuel emissions and wildfires.",noteAr:"حركة سحب الكربون مع الكتل الهوائية. بينما يرصد قمر AIRS أول أكسيد الكربون، تكشف محاكاة DYAMOND فائقة الدقة كيفية انتقال سحب ثاني أكسيد الكربون المرافقة من محطات الوقود والحرائق."},air_ozone:{resourceId:"dyamond-co2-transport",tagEn:"Atmospheric Gas Circulation",tagAr:"دوران الغازات الجوية",noteEn:"Global Atmospheric Trace Gas Dynamics. Illustrates the planetary-scale wave patterns and synoptic weather systems that steer both stratospheric ozone and tropospheric trace emissions.",noteAr:"ديناميكيات غازات الغلاف الجوي. يوضح تموجات الكتل الهوائية وأنظمة الطقس العالمية التي تتحكم في توزيع الأوزون وانبعاثات الغازات."},water_sst:{resourceId:"perpetual-ocean-2",tagEn:"Thermal Advection & Currents",tagAr:"نقل الحرارة وتيارات المحيط",noteEn:"Western Boundary Currents & Sea Surface Temperature. The MODIS Sea Surface Temperature patterns observed above are dynamically driven by the powerful oceanic thermal conveyor belts simulated in NASA JPL ECCO-2.",noteAr:"تيارات المحيطات وحرارة سطح البحر. تتطابق وتتأثر درجات حرارة سطح البحر المقاسة عبر MODIS أعلاه بنظام النقل الحراري للتيارات المائية المحاكى في نموذج ECCO-2 التابع لمختبر الدفع النفاث."},water_chlorophyll:{resourceId:"atmospheric-river-3d",tagEn:"Coastal Nutrient Influx",tagAr:"تدفق المغذيات الساحلية",noteEn:"Atmospheric River Landfall & Runoff. Extreme precipitation channeled by atmospheric rivers drives heavy river discharge into coastal basins, fueling phytoplankton blooms and sediment plumes detected by MODIS Aqua Chlorophyll-a.",noteAr:"هطول الأنهار الجوية والجريان السطحي. يؤدي الهطول الغزير للأنهار الجوية إلى تدفقات نهرية عملاقة نحو السواحل، مما يغذي ازدهار العوالق النباتية وترسبات الكلوروفيل المقاسة بقمر MODIS Aqua."},water_turbidity:{resourceId:"atmospheric-river-3d",tagEn:"Runoff Sediment & Plumes",tagAr:"عكارة المياه والسيول الساحلية",noteEn:"Hydrological Sediment Transport. Atmospheric river events induce flash flooding and severe sediment runoff directly visible as optical turbidity in true-color satellite imagery.",noteAr:"نقل الرواسب الهيدرولوجية. تتسبب الأنهار الجوية في سيول جارفة تنقل كميات هائلة من الطمي إلى المياه الساحلية، مسببة العكارة الواضحة في صور الأقمار الصناعية بالألوان الحقيقية."},soil_moisture:{resourceId:"atmospheric-river-3d",tagEn:"Precipitation Influx & Saturation",tagAr:"الهطول وتشبع رطوبة التربة",noteEn:"Atmospheric Moisture Influx to Soil. Massive moisture transport in atmospheric rivers makes landfall to deposit high-volume precipitation, directly driving SMAP surface soil moisture saturation spikes.",noteAr:"تدفق الرطوبة الجوية إلى التربة. يفرغ النهر الجوي كميات مياه ضخمة عند اصطدامه باليابسة، مما يسبب قفزات فورية في تشبع رطوبة التربة السطحية المسجلة عبر قمر SMAP."},soil_ndvi:{resourceId:"antarctic-sea-ice",tagEn:"Global Cryosphere & Biosphere Cycle",tagAr:"الدورة الحيوية والجليدية العالمية",noteEn:"Seasonal Solar & Surface Feedback. Tracks the seasonal pulsation of high-latitude ice and radiative albedo that balances regional continental vegetation greening (NDVI) and growing seasons.",noteAr:"تفاعل الإشعاع السطحي والغطاء النباتي. يوضح التذبذب الموسمي للجليد والوضاءة الإشعاعية المنظمة للمواسم الزراعية ونمو الغطاء النباتي (NDVI)."},soil_lst:{resourceId:"antarctic-sea-ice",tagEn:"Surface Radiative Equilibrium",tagAr:"التوازن الإشعاعي للسطح",noteEn:"Cryospheric Albedo & Surface Temperature. Illustrates the extreme cold thermal end-member of Earth’s surface radiation balance that governs global meridional temperature gradients.",noteAr:"وضاءة الجليد وحرارة السطح. يجسد الحد الأقصى للتبريد الإشعاعي لكوكب الأرض الذي يقود التدرج الحراري بين القطبين وخط الاستواء."},temperature:{resourceId:"night-lights-decade",tagEn:"Anthropogenic Driver & Urban Heat",tagAr:"المحرك البشري والجزر الحرارية",noteEn:"Anthropogenic Electrification & Urban Footprint. NASA Black Marble VIIRS nighttime radiance directly documents a decade of global urbanization and infrastructure expansion, providing the human footprint context behind regional temperature and climate anomalies.",noteAr:"الأثر البشري والتوسع الحضري. توثق بيانات الرخام الأسود VIIRS من ناسا عقداً كاملاً من التوسع العمراني واستهلاك الطاقة، مقدماً التفسير البشري للجزر الحرارية والاتجاهات المناخية المسجلة."}},$l=(i,e)=>{const t=gs[e]||gs[i];if(t){const n=yt.find(a=>a.id===t.resourceId);if(n)return n}return yt[0]},I0=i=>i==="air"?yt.filter(e=>e.id==="geos-aerosols-2017"||e.id==="dyamond-co2-transport"):i==="water"?yt.filter(e=>e.id==="perpetual-ocean-2"||e.id==="atmospheric-river-3d"||e.id==="antarctic-sea-ice"):i==="soil"?yt.filter(e=>e.id==="atmospheric-river-3d"||e.id==="antarctic-sea-ice"||e.id==="night-lights-decade"):i==="temperature"?yt.filter(e=>e.id==="night-lights-decade"||e.id==="antarctic-sea-ice"||e.id==="dyamond-co2-transport"):yt,Ki=[{id:"aerosols",name:"Aerosol Optical Depth (AOD & PM2.5)",nameAr:"عمق الأيروسول البصري وجودة الهواء",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA GEOS / MODIS Terra & Aqua",unit:"Optical Depth (Unitless) & μg/m³",range:"0.05 – 1.20 AOD",description:"Tracks particulate matter, dust storms, industrial smog, and wildfire smoke suspended across the atmosphere, revealing air quality variations.",descriptionAr:"رصد الجسيمات الدقيقة، العواصف الغبارية، ودخان الحرائق في الغلاف الجوي لتوضيح تباين جودة الهواء وتأثيرها التنفسي.",icon:Ts,color:"#38bdf8",soundProfile:"Airy flute and gentle noise breeze; higher frequencies indicate dense smog and severe pollution events.",soundProfileAr:"نغمات هوائية سلسة، ترتفع حدتها كلما زادت كثافة الجسيمات العالقة والتلوث الصناعي."},{id:"carbon",name:"Atmospheric Carbon Dioxide (CO₂)",nameAr:"ثاني أكسيد الكربون في الغلاف الجوي",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA OCO-2 / DYAMOND Simulation",unit:"Parts Per Million (ppm)",range:"390 – 425 ppm",description:"High-resolution global column measurements capturing the annual seasonal photosynthetic drawdown by Northern forests and long-term emission trends.",descriptionAr:"قياسات دقيقة لتركيز الكربون ترصد التنفس السنوي للغابات ودورات التمثيل الضوئي مع التزايد التراكمي المستمر.",icon:Dd,color:"#f97316",soundProfile:"Rich resonant warm drone with rhythmic annual undulations reflecting seasonal biospheric breathing.",soundProfileAr:"نغمات دافئة متناغمة تعكس تنفس المحيط الحيوي للأرض وامتصاص النباتات للكربون صيفاً."},{id:"ocean",name:"Sea Surface Currents & Temperature",nameAr:"تيارات وحرارة سطح المحيطات",category:"ocean",categoryName:"Ocean",categoryNameAr:"المحيطات",sensor:"NASA ECCO-2 / Perpetual Ocean",unit:"Degrees Celsius (°C) & m/s",range:"-2°C to +32°C",description:"Simulates fluid planetary thermal dynamics, Western boundary currents (Gulf Stream, Kuroshio), and immense heat conveyor transport across world oceans.",descriptionAr:"محاكاة التيارات المائية الدوارة وتيار الخليج الدافئ الذي ينقل الطاقة الحرارية من خط الاستواء نحو القطبين.",icon:Ao,color:"#06b6d4",soundProfile:"Deep aquatic marimba and sweeping liquid sub-oscillations whose tempo echoes oceanic kinetic energy.",soundProfileAr:"أصوات ماريمبا مائية عميقة مع تموجات تعكس حركة الدوامات البحرية والطاقة الحركية."},{id:"precip",name:"Atmospheric Rivers & Precipitation",nameAr:"الأنهار الجوية ومعدلات الهطول",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA GPM (Global Precipitation Measurement)",unit:"Millimeters per Hour (mm/h)",range:"0 – 85 mm/h",description:"Long plumes of dense atmospheric moisture carrying the equivalent flow of the Amazon river across skies, triggering torrential rain and vital snowpacks.",descriptionAr:"أعمدة هائلة من بخار الماء في الغلاف الجوي تعادل تدفق نهر الأمازون، تسبب هطول أمطار غزيرة وثلوج جبلية حيوية.",icon:tc,color:"#818cf8",soundProfile:"Crystalline glockenspiel droplets accelerating into rhythmic storm cascades during intense precipitation pulses.",soundProfileAr:"نغمات رنين بلورية تتسارع مع تدفق قطرات المطر وغزارة العواصف الرعدية."},{id:"nightlights",name:"Earth Night Lights & Human Energy",nameAr:"أضواء الأرض الليلية ونشاط الطاقة",category:"environment",categoryName:"Human Environment",categoryNameAr:"البيئة البشرية",sensor:"Suomi NPP VIIRS Day-Night Band",unit:"Radiance (nW/cm²·sr)",range:"0.1 – 150 nW",description:"Ten-year decadal record (2012–2023) tracking global electrification, urban growth, transit arteries, and localized energy grid disruptions.",descriptionAr:"سجل زمني لتوثيق نمو المدن وشبكات الكهرباء وتوسع النشاط البشري وانقطاعات الطاقة عبر عقد كامل.",icon:zd,color:"#fbbf24",soundProfile:"Warm analog synthesizer pulses with rising brightness and harmonic overtone complexity in dense metropolitan centers.",soundProfileAr:"نبضات سنثسايزر دافئة تزداد سطوعاً وتعقيداً مع كثافة التجمعات الحضرية والإضاءة."},{id:"ice",name:"Cryosphere & Polar Sea Ice Extent",nameAr:"الغطاء الجليدي القطبي والبحري",category:"environment",categoryName:"Cryosphere",categoryNameAr:"البيئة الجليدية",sensor:"NASA NSIDC / SSMIS Microwave",unit:"Million Square Kilometers (M km²)",range:"3.5 – 16.0 M km²",description:"Decadal satellite microwave sensing documenting the minimum and maximum Arctic and Antarctic freeze-thaw cycles and albedo dynamics.",descriptionAr:"قياسات رادارية ميكروويفية توثق انكماش واتساع الجليد في القطبين وتأثيره على انعكاس الإشعاع الشمسي.",icon:fc,color:"#a5f3fc",soundProfile:"Chilled glass bell harmonics with descending fundamental frequencies illustrating multi-year ice loss.",soundProfileAr:"أجراس زجاجية نقية تنخفض طبقتها تدريجياً لتعكس ذوبان الجليد القديم وتراجع المساحات."}];function L0({lang:i="en",onSelectDataset:e}){const[t,n]=R.useState("all"),[a,r]=R.useState(Ki[0].id),o=i==="ar",c=[{id:"all",label:o?"جميع البيانات":"All Datasets"},{id:"atmosphere",label:o?"الغلاف الجوي":"Atmosphere"},{id:"ocean",label:o?"المحيطات والمياه":"Ocean"},{id:"environment",label:o?"المناخ والبيئة":"Climate & Land"}],l=t==="all"?Ki:Ki.filter(p=>p.category===t),d=Ki.find(p=>p.id===a)||Ki[0],u=p=>{e==null||e(p);const g={aerosols:"geos-aerosols-2017",carbon:"dyamond-co2-transport",ocean:"perpetual-ocean-2",precip:"atmospheric-river-3d",nightlights:"night-lights-decade",ice:"antarctic-sea-ice"}[p]||p,x=yt.find(f=>f.id===g);x&&da(x,50,.8);const _=document.getElementById("studio");_&&_.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("section",{id:"explore",className:"explore-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:o?"كتالوج ناسا العلمي":"OBSERVATIONAL CATALOG"}),s.jsx("h2",{className:"section-title",children:o?"استكشف بيانات الأرض":"Explore Earth Data"}),s.jsx("p",{className:"section-subtitle",children:o?"مجموعات بيانات علمية موثقة من أقمار ناسا ومراكز أبحاث الغلاف الجوي والمحيطات جاهزة للاستماع":"Select a verified NASA satellite observation dataset to inspect its physical parameters and auditory profile."})]}),s.jsx("div",{className:"category-filter-bar",children:c.map(p=>s.jsx("button",{onClick:()=>n(p.id),className:`cat-pill-btn ${t===p.id?"active":""}`,children:p.label},p.id))}),s.jsx("div",{className:"datasets-grid",children:l.map(p=>{const h=p.icon,g=p.id===a;return s.jsxs("div",{className:`dataset-card ${g?"selected":""}`,onClick:()=>r(p.id),children:[s.jsxs("div",{className:"card-top-row",children:[s.jsx("div",{className:"card-icon-tag",style:{color:p.color,background:`${p.color}18`},children:s.jsx(h,{size:20})}),s.jsx("span",{className:"card-cat-badge",children:o?p.categoryNameAr:p.categoryName})]}),s.jsx("h3",{className:"card-dataset-title",children:o?p.nameAr:p.name}),s.jsx("p",{className:"card-dataset-desc",children:o?p.descriptionAr:p.description}),s.jsxs("div",{className:"card-metrics-box",children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"lbl",children:o?"المستشعر الفضائي:":"Sensor / Source:"}),s.jsx("span",{className:"val",children:p.sensor})]}),s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"lbl",children:o?"وحدة القياس:":"Measurement Range:"}),s.jsx("span",{className:"val",children:p.range})]})]}),s.jsx("div",{className:"card-actions-row",children:s.jsxs("button",{onClick:x=>{x.stopPropagation(),u(p.id)},className:"card-explore-btn",children:[s.jsx(Rn,{size:15,fill:"currentColor"}),s.jsx("span",{children:o?"تجربة في استوديو الصوت":"Explore in Studio"}),s.jsx(bo,{size:14,className:"arrow-launch"})]})})]},p.id)})}),d&&s.jsxs("div",{className:"dataset-deepdive-banner",children:[s.jsx("div",{className:"deepdive-icon-col",style:{color:d.color},children:s.jsx(d.icon,{size:36})}),s.jsxs("div",{className:"deepdive-info-col",children:[s.jsx("div",{className:"deepdive-badge",children:o?"الملف الصوتي العلمي المخصص":"Scientific Sound Mapping Profile"}),s.jsx("h4",{className:"deepdive-title",children:o?d.nameAr:d.name}),s.jsx("p",{className:"deepdive-text",children:o?d.soundProfileAr:d.soundProfile})]}),s.jsx("div",{className:"deepdive-cta-col",children:s.jsxs("button",{onClick:()=>u(d.id),className:"deepdive-launch-btn",children:[s.jsx(Rn,{size:16,fill:"currentColor"}),s.jsx("span",{children:o?"افتح في الاستوديو الآن":"Load in Sonification Studio"})]})})]})]})}class dd{constructor({onTimeUpdate:e,onPlayStateChange:t,onSpeedChange:n,onEnded:a}){this.videoElement=null,this.duration=0,this.currentTime=0,this.isPlaying=!1,this.playbackRate=1,this.isSeeking=!1,this.rafId=null,this.onTimeUpdate=e||(()=>{}),this.onPlayStateChange=t||(()=>{}),this.onSpeedChange=n||(()=>{}),this.onEnded=a||(()=>{}),this.tick=this.tick.bind(this)}attachVideo(e,t){this.videoElement=e,this.duration=t||0,this.videoElement&&(this.videoElement.playbackRate=this.playbackRate)}detachVideo(){this.pause(),this.videoElement=null,this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null)}play(){this.videoElement&&(this.videoElement.play().catch(()=>{}),this.isPlaying=!0,this.onPlayStateChange(!0),this.startRAF())}pause(){this.videoElement&&this.videoElement.pause(),this.isPlaying=!1,this.onPlayStateChange(!1),this.stopRAF()}togglePlay(){this.isPlaying?this.pause():this.play()}seek(e,t=!0){const n=Math.max(0,Math.min(e,this.duration));this.currentTime=n,this.videoElement&&(this.videoElement.currentTime=n),this.onTimeUpdate(n),t&&!this.isPlaying&&this.videoElement}setSpeed(e){this.playbackRate=e,this.videoElement&&(this.videoElement.playbackRate=e),this.onSpeedChange(e)}startRAF(){this.rafId||(this.rafId=requestAnimationFrame(this.tick))}stopRAF(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null)}tick(){if(this.videoElement&&this.isPlaying){const e=this.videoElement.currentTime;if(this.currentTime=e,this.onTimeUpdate(e),this.videoElement.ended||e>=this.duration){this.pause(),this.onEnded();return}}this.rafId=requestAnimationFrame(this.tick)}}const Xt={getInterpolatedValuesAtTime(i,e){if(!i||!i.graphConfig||!i.graphConfig.series)return{};const t=i.durationSeconds||1,n=Math.max(0,Math.min(e,t)),a={};return i.graphConfig.series.forEach(r=>{const o=r.data||[];if(o.length!==0){if(n<=o[0].timestamp){a[r.key]={currentValue:o[0].y,label:o[0].x,index:0,interpolated:!1};return}if(n>=o[o.length-1].timestamp){const c=o.length-1;a[r.key]={currentValue:o[c].y,label:o[c].x,index:c,interpolated:!1};return}for(let c=0;c<o.length-1;c++){const l=o[c],d=o[c+1];if(n>=l.timestamp&&n<=d.timestamp){const u=d.timestamp-l.timestamp,p=u>0?(n-l.timestamp)/u:0,h=l.y+p*(d.y-l.y);a[r.key]={currentValue:Number(h.toFixed(2)),label:p>.5?d.x:l.x,index:p>.5?c+1:c,interpolated:!0,p1:l,p2:d,factor:p};break}}}}),a},getCurrentMilestone(i,e){if(!i||!i.timePoints||i.timePoints.length===0)return null;let t=i.timePoints[0];for(let n=0;n<i.timePoints.length&&e>=i.timePoints[n].timestamp;n++)t=i.timePoints[n];return t},formatTime(i){if(isNaN(i)||i<0)return"00:00";const e=Math.floor(i/60),t=Math.floor(i%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}},Bo=({resource:i,currentTime:e,isPlaying:t,playbackSpeed:n,onTogglePlay:a,onVideoAttach:r,isAudioEnabled:o=!0,onToggleAudio:c=()=>{},currentToneInfo:l=null,isPlayingTone:d=!1,lang:u="en"})=>{const p=R.useRef(null),h=R.useRef(null),[g,x]=R.useState(!0),[_,f]=R.useState(!1),[m,M]=R.useState(!1);R.useEffect(()=>{p.current&&(r(p.current,i.durationSeconds),p.current.playbackRate=n),x(!0),f(!1)},[i.id,r]),R.useEffect(()=>{p.current&&(p.current.playbackRate=n)},[n]),R.useEffect(()=>{const v=()=>{M(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",v),()=>document.removeEventListener("fullscreenchange",v)},[]);const y=()=>{h.current&&(document.fullscreenElement?document.exitFullscreen().catch(()=>{}):h.current.requestFullscreen().catch(()=>{}))},E=Xt.getCurrentMilestone(i,e),T=Xt.formatTime(e),S=Xt.formatTime(i.durationSeconds);return s.jsxs("div",{ref:h,className:`eic-visual-card ${m?"fullscreen-mode":""}`,"aria-label":"NASA Scientific Visualization Player",children:[s.jsxs("div",{className:"eic-visual-header",children:[s.jsxs("div",{className:"eic-visual-title-box",children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag",children:[s.jsx(vr,{className:"icon-xs","aria-hidden":"true"}),"ORIGINAL NASA SVS"]}),s.jsxs("span",{className:"eic-id-tag",children:["ID #",i.svsId]})]}),s.jsx("h3",{className:"eic-visual-title",children:u==="ar"?i.titleAr:i.titleEn})]}),s.jsxs("div",{className:"eic-visual-header-actions",children:[s.jsxs("a",{href:i.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-icon-link",title:u==="ar"?"عرض على موقع ناسا الرسمي":"View on official NASA SVS page",children:[s.jsx(jn,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:"NASA SVS"})]}),s.jsx("button",{type:"button",className:"eic-icon-btn",onClick:y,title:m?u==="ar"?"خروج من وضع ملء الشاشة":"Exit Fullscreen":u==="ar"?"ملء الشاشة":"Fullscreen","aria-label":m?"Exit Fullscreen":"Enter Fullscreen",children:m?s.jsx(Gd,{className:"icon-xs"}):s.jsx(kd,{className:"icon-xs"})})]})]}),s.jsxs("div",{className:"eic-video-viewport",children:[g&&!_&&s.jsxs("div",{className:"eic-video-loading-overlay",children:[s.jsx(aa,{className:"icon spin","aria-hidden":"true"}),s.jsx("span",{children:u==="ar"?"جاري تحميل محاكاة ناسا الأصلية...":"Streaming official NASA visualization..."})]}),_&&s.jsxs("div",{className:"eic-video-error-overlay",children:[s.jsx(As,{className:"icon error-icon","aria-hidden":"true"}),s.jsx("p",{children:u==="ar"?"تعذر بث الفيديو مباشرة من خادم ناسا (قد يتطلب اتصالاً مباشراً بدون حظر).":"Unable to stream direct video from NASA SVS server."}),s.jsx("a",{href:i.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-btn-retry",children:u==="ar"?"فتح المحاكاة في صفحة ناسا SVS":"Open in NASA SVS Portal"})]}),s.jsx("video",{ref:p,src:i.videoUrl,poster:i.previewImage,preload:"metadata",playsInline:!0,className:"eic-native-video",onLoadedData:()=>x(!1),onWaiting:()=>x(!0),onPlaying:()=>x(!1),onError:()=>{x(!1),f(!0)},onClick:a}),l&&s.jsxs("button",{type:"button",className:`eic-video-tone-pill ${d?"ping":""}`,onClick:c,title:o?u==="ar"?"انقر لكتم النغمات الصوتية":"Click to mute visual sonification":u==="ar"?"انقر لتفعيل النغمات الصوتية":"Click to enable visual sonification","aria-label":"Toggle visual sonification tone",children:[o?s.jsx(rn,{className:"icon-xxs text-cyan"}):s.jsx(Zn,{className:"icon-xxs text-rose"}),s.jsxs("span",{children:[l.percentage,"% • ",l.noteName]})]}),E&&s.jsxs("div",{className:"eic-milestone-overlay animate-fade-in",children:[s.jsx("span",{className:"eic-milestone-dot"}),s.jsx("span",{className:"eic-milestone-text",children:E.label||E.date})]}),!t&&!g&&!_&&s.jsx("button",{type:"button",className:"eic-center-play-btn",onClick:a,"aria-label":"Play NASA Visualization",children:s.jsx(Rn,{className:"icon-lg"})}),s.jsxs("div",{className:"eic-time-pill",children:[s.jsx("span",{children:T}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{children:S})]})]}),s.jsx("div",{className:"eic-visual-caption",children:s.jsx("p",{className:"eic-caption-text",children:u==="ar"?i.shortDescriptionAr:i.shortDescriptionEn})})]})};ho.register(fo,po,mo,go,xo,vo,_o,So);const Go=({resource:i,currentTime:e,onSeek:t,lang:n="en",theme:a="dark"})=>{var _,f;const r=R.useRef(null),o=a!=="light",c=R.useMemo(()=>Xt.getInterpolatedValuesAtTime(i,e),[i,e]),l=((_=i.graphConfig)==null?void 0:_.series)||[],d=l[0],u=d?c[d.key]:null,p=R.useMemo(()=>{if(!d||!d.data)return{labels:[],datasets:[]};const m=d.data.map(y=>y.x),M=l.map(y=>({label:n==="ar"?y.nameAr:y.nameEn,data:y.data.map(E=>E.y),borderColor:y.color,backgroundColor:y.fill?`${y.color}25`:"transparent",borderWidth:2.5,pointRadius:E=>{const T=E.dataIndex,S=y.data[T];return S&&Math.abs(S.timestamp-e)<i.durationSeconds/(y.data.length*2)?7:4},pointHoverRadius:8,pointBackgroundColor:y.color,pointBorderColor:o?"#0f172a":"#ffffff",pointBorderWidth:2,tension:.35,fill:y.fill}));return{labels:m,datasets:M}},[l,d,n,e,i.durationSeconds,o]),h=R.useMemo(()=>({id:"eicVerticalCursor",afterDraw:m=>{if(!d||!d.data||d.data.length===0)return;const M=m.ctx,y=m.getDatasetMeta(0);if(!y||!y.data||y.data.length===0)return;const E=i.durationSeconds||1,T=Math.max(0,Math.min(e,E)),S=d.data,v=S[0].timestamp,O=S[S.length-1].timestamp-v||1,C=y.data[0].x,F=y.data[y.data.length-1].x-C,q=C+(T-v)/O*F,I=m.chartArea.top,V=m.chartArea.bottom;M.save(),M.beginPath(),M.strokeStyle="#38bdf8",M.lineWidth=2,M.setLineDash([4,4]),M.moveTo(q,I),M.lineTo(q,V),M.stroke(),M.fillStyle="#38bdf8",M.beginPath(),M.arc(q,I+2,4,0,Math.PI*2),M.fill(),M.restore()}}),[d,e,i.durationSeconds]),g=m=>{const M=r.current;if(!M||!d||!d.data)return;const y=M.getElementsAtEventForMode(m,"nearest",{intersect:!1},!0);if(y.length>0){const E=y[0].index,T=d.data[E];T&&typeof T.timestamp=="number"&&t(T.timestamp)}},x=R.useMemo(()=>{var y;const m=o?"#94a3b8":"#475569",M=o?"rgba(148, 163, 184, 0.08)":"rgba(148, 163, 184, 0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:200},plugins:{legend:{display:!0,position:"top",labels:{color:m,font:{size:12,family:"sans-serif"},boxWidth:14,usePointStyle:!0}},tooltip:{backgroundColor:o?"rgba(15, 23, 42, 0.95)":"rgba(255, 255, 255, 0.95)",titleColor:o?"#f8fafc":"#0f172a",bodyColor:o?"#94a3b8":"#334155",borderColor:o?"#334155":"#cbd5e1",borderWidth:1,padding:10,callbacks:{afterBody:E=>{var N;const T=(N=E[0])==null?void 0:N.raw,S=Fi(i,T),v=S.percentage<=33?n==="ar"?"نغمة منخفضة (C3-G3)":"Low Tone (C3-G3)":S.percentage<=66?n==="ar"?"نغمة معتدلة (A3-E5)":"Mid Tone (A3-E5)":n==="ar"?"نغمة مرتفعة (G5-C6)":"High Tone (G5-C6)";return[`${n==="ar"?"النسبة والنغمة":"Intensity & Tone"}: ${S.percentage}% • ${S.noteName} (${Math.round(S.frequency)} Hz) [${v}]`,n==="ar"?"(انقر فوق أي نقطة للانتقال إلى وقتها وسماع نغمتها)":"(Click any point to jump video & audition tone)"]}}}},scales:{x:{ticks:{color:m,font:{size:11}},grid:{color:M}},y:{ticks:{color:m,font:{size:11}},grid:{color:M},title:{display:!0,text:((y=i.graphConfig)==null?void 0:y.yAxisLabel)||i.unitShort,color:m,font:{size:12,weight:"bold"}}}}}},[o,n,(f=i.graphConfig)==null?void 0:f.yAxisLabel,i.unitShort]);return s.jsxs("div",{className:"eic-graph-card","aria-label":"Scientific Graph Display",children:[s.jsxs("div",{className:"eic-graph-header",children:[s.jsxs("div",{className:"eic-graph-title-group",children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag tag-graph",children:[s.jsx(Ss,{className:"icon-xs","aria-hidden":"true"}),"SYNCHRONIZED SCIENTIFIC DATA"]}),s.jsx("span",{className:"eic-id-tag",children:i.datasetName.split("(")[0]})]}),s.jsx("h3",{className:"eic-graph-title",children:i.primaryVariable})]}),u&&(()=>{const m=Fi(i,u.currentValue);return s.jsxs("div",{className:"eic-live-reading-box animate-pulse-glow",children:[s.jsx("span",{className:"eic-live-reading-label",children:n==="ar"?"القيمة المتزامنة الآن":"Active Reading"}),s.jsxs("div",{className:"eic-live-reading-val",children:[s.jsx("span",{className:"value-num",children:u.currentValue}),s.jsx("span",{className:"value-unit",children:i.unitShort})]}),s.jsxs("div",{className:"eic-graph-tone-tag",children:[s.jsx(Yn,{className:"icon-xxs"}),s.jsxs("span",{children:[m.percentage,"% • ",m.noteName," (",Math.round(m.frequency),"Hz)"]})]})]})})()]}),s.jsx("div",{className:"eic-chart-viewport",onClick:g,children:s.jsx(yo,{ref:r,data:p,options:x,plugins:[h]})}),s.jsxs("div",{className:"eic-graph-footer-hint",children:[s.jsx(Ii,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:n==="ar"?"انقر على أي نقطة بيانية في المنحنى للانتقال المباشر إلى الإطار الزمني المقابل في محاكاة ناسا.":"Click any data point along the curve to seek the NASA animation directly to that timestamp."})]})]})},zo=({resource:i,lang:e="en"})=>{const[t,n]=R.useState(!0);return s.jsxs("section",{className:"eic-info-card","aria-label":"Scientific Metadata and Source Attributions",children:[s.jsxs("div",{className:"eic-info-header",onClick:()=>n(!t),role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n(!t))},"aria-expanded":t,children:[s.jsxs("div",{className:"eic-info-header-title",children:[s.jsx(rc,{className:"icon-sm text-cyan","aria-hidden":"true"}),s.jsx("h3",{className:"eic-info-heading",children:e==="ar"?"التفاصيل العلمية والبيانات المعتمدة":"Scientific Information & NASA Attributions"}),s.jsxs("span",{className:"eic-svs-badge-sm",children:["SVS #",i.svsId]})]}),s.jsx("button",{type:"button",className:"eic-expand-btn","aria-label":t?"Collapse scientific information":"Expand scientific information",children:t?s.jsx(bs,{className:"icon-sm"}):s.jsx(ys,{className:"icon-sm"})})]}),t&&s.jsxs("div",{className:"eic-info-content animate-fade-in",children:[s.jsxs("div",{className:"eic-metadata-grid",children:[s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(ia,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الظاهرة العلمية":"Scientific Phenomenon"]}),s.jsx("p",{className:"meta-value",children:e==="ar"?i.phenomenonAr:i.phenomenon})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(Eo,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"اسم مجموعة البيانات":"Dataset Name"]}),s.jsx("p",{className:"meta-value font-mono-sm",children:i.datasetName})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(hi,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الجهة الموفرة للبيانات":"Data Provider"]}),s.jsx("p",{className:"meta-value",children:i.dataProvider})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(ic,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الأداة أو النموذج الفضائي":"Instrument / Model"]}),s.jsx("p",{className:"meta-value",children:i.instrument})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(nc,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"وحدات القياس":"Measurement Units"]}),s.jsx("p",{className:"meta-value",children:i.unitEn})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(os,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"التغطية الزمنية":"Temporal Coverage"]}),s.jsx("p",{className:"meta-value",children:i.temporalCoverage})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(ia,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"التغطية الجغرافية":"Geographic Coverage"]}),s.jsx("p",{className:"meta-value",children:i.geographicCoverage})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(Ql,{className:"icon-xs text-emerald","aria-hidden":"true"}),e==="ar"?"نوع ومنهجية البيانات":"Methodology & Type"]}),s.jsx("p",{className:"meta-value",children:i.dataType})]})]}),s.jsxs("div",{className:"eic-methodology-box",children:[s.jsx("h4",{className:"methodology-title",children:e==="ar"?"منهجية الرصد والنمذجة العلمية":"Data Collection & Modeling Methodology"}),s.jsx("p",{className:"methodology-text",children:i.dataCollectionMethod})]}),s.jsxs("div",{className:"eic-info-footer-links",children:[s.jsxs("a",{href:i.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-primary-link-btn",children:[s.jsx("span",{children:e==="ar"?"صفحة المشروع الأصلية في ناسا SVS":"Official NASA SVS Project Entry"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://earth.gov/",target:"_blank",rel:"noopener noreferrer",className:"eic-secondary-link-btn",children:[s.jsx("span",{children:e==="ar"?"بوابة مركز معلومات الأرض":"NASA Earth Information Center Portal"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]})]})]})]})};function D0({isPlaying:i=!1,isDark:e=!0,accentColor:t="#38bdf8"}){const n=R.useRef(null),a=R.useRef(null),r=R.useRef(null);return R.useEffect(()=>{const o=n.current,c=a.current;if(!o||!c)return;const l=o.getContext("2d"),d=c.getContext("2d"),u=Math.min(window.devicePixelRatio||1,2),p=()=>{var f;const _=((f=o.parentElement)==null?void 0:f.clientWidth)||400;o.width=_*u,o.height=100*u,c.width=_*u,c.height=100*u};p(),window.addEventListener("resize",p);const h=new Uint8Array(256),g=new Uint8Array(128),x=()=>{r.current=requestAnimationFrame(x);const _=Qn(),f=o.width,m=o.height;l.clearRect(0,0,f,m),l.strokeStyle=e?"rgba(56, 189, 248, 0.05)":"rgba(2, 132, 199, 0.06)",l.lineWidth=1*u,l.beginPath(),l.moveTo(0,m*.5),l.lineTo(f,m*.5),l.stroke(),_?_.getByteTimeDomainData(h):h.fill(128),l.beginPath(),l.lineWidth=2.5*u,l.strokeStyle=t,l.shadowBlur=i?14:4,l.shadowColor=t;const M=f/(h.length-1);let y=0;for(let O=0;O<h.length;O++){const D=h[O]/128*m/2;O===0?l.moveTo(y,D):l.lineTo(y,D),y+=M}l.stroke(),l.shadowBlur=0,d.clearRect(0,0,f,m),_?_.getByteFrequencyData(g):g.fill(0);const E=32,T=4*u,S=T*(E-1),v=Math.max(3*u,(f-S)/E),N=d.createLinearGradient(0,m,0,0);N.addColorStop(0,t),N.addColorStop(.7,"#818cf8"),N.addColorStop(1,"#c084fc");for(let O=0;O<E;O++){const C=Math.floor(O/E*(g.length*.75)),D=g[C]||0,F=i?4*u:2*u,q=Math.max(F,D/255*m*.88),I=O*(v+T),V=m-q;d.fillStyle=N,d.shadowBlur=i&&D>10?8:0,d.shadowColor=t,d.beginPath(),d.roundRect?d.roundRect(I,V,v,q,[3*u,3*u,0,0]):d.rect(I,V,v,q),d.fill()}d.shadowBlur=0};return x(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("resize",p)}},[i,e,t]),s.jsxs("div",{className:"audio-visualizer-dual-pane",children:[s.jsxs("div",{className:"vis-subcard",children:[s.jsxs("div",{className:"vis-subcard-header",children:[s.jsxs("div",{className:"vis-title-pill",children:[s.jsx("span",{className:"live-dot",style:{opacity:i?1:.4}}),s.jsx("span",{children:"REAL-TIME OSCILLOSCOPE WAVEFORM"})]}),s.jsx("span",{className:"vis-tag",children:"TIME-DOMAIN"})]}),s.jsx("div",{className:"vis-canvas-box",children:s.jsx("canvas",{ref:n,className:"vis-canvas-element"})})]}),s.jsxs("div",{className:"vis-subcard",children:[s.jsxs("div",{className:"vis-subcard-header",children:[s.jsxs("div",{className:"vis-title-pill",children:[s.jsx("span",{className:"live-dot",style:{opacity:i?1:.4}}),s.jsx("span",{children:"FFT FREQUENCY SPECTRUM ANALYZER"})]}),s.jsx("span",{className:"vis-tag",children:"32-BAND FFT"})]}),s.jsx("div",{className:"vis-canvas-box",children:s.jsx("canvas",{ref:a,className:"vis-canvas-element"})})]})]})}function U0({lang:i="en",isDark:e=!0,selectedDatasetId:t="night-lights-decade",onDatasetChange:n}){var ie,Se,Ue,X,me,ge;const a=i==="ar",[r,o]=R.useState(()=>({aerosols:"geos-aerosols-2017",carbon:"dyamond-co2-transport",ocean:"perpetual-ocean-2",precip:"atmospheric-river-3d",nightlights:"night-lights-decade",ice:"antarctic-sea-ice"})[t]||t||yt[0].id),c=cd(r)||yt[0];R.useEffect(()=>{if(t){const K={aerosols:"geos-aerosols-2017",carbon:"dyamond-co2-transport",ocean:"perpetual-ocean-2",precip:"atmospheric-river-3d",nightlights:"night-lights-decade",ice:"antarctic-sea-ice"}[t]||t;yt.some(Re=>Re.id===K)&&K!==r&&I(K)}},[t]);const[l,d]=R.useState(0),[u,p]=R.useState(!1),[h,g]=R.useState(1),[x,_]=R.useState(.8),[f,m]=R.useState(!1),[M,y]=R.useState(!0),[E,T]=R.useState(!1),S=R.useRef(null),v=R.useRef(-1),N=R.useMemo(()=>Xt.getInterpolatedValuesAtTime(c,l),[c,l]),O=(Se=(ie=c.graphConfig)==null?void 0:ie.series)==null?void 0:Se[0],C=O?N[O.key]:null,D=C&&typeof C=="object"?C.currentValue!==void 0?C.currentValue:C.y:C,F=R.useMemo(()=>Fi(c,D),[c,D]),q=R.useCallback(he=>{const K=f?0:x;if(K<=0)return;const Re=Xt.getInterpolatedValuesAtTime(c,he),Oe=O?Re[O.key]:null,Ee=Oe&&typeof Oe=="object"?Oe.currentValue??Oe.y:Oe;Ee!==null&&!isNaN(Ee)&&da(c,Ee,K)},[c,O,f,x]);S.current||(S.current=new dd({onTimeUpdate:he=>{d(he),Math.abs(he-v.current)>=.6&&(v.current=he,q(he))},onPlayStateChange:he=>p(he),onSpeedChange:he=>g(he),onEnded:()=>{M&&S.current?(S.current.seek(0),S.current.play()):p(!1)}}));const I=he=>{if(he===r)return;S.current&&(S.current.pause(),S.current.seek(0)),d(0),v.current=-1,p(!1),o(he),n==null||n(he);const K=yt.find(Re=>Re.id===he);K&&!f&&x>0&&da(K,50,x)},V=R.useCallback((he,K)=>{S.current&&S.current.attachVideo(he,K)},[]),Q=async()=>{await _s(),S.current&&(S.current.togglePlay(),u||q(l))},j=he=>{S.current&&S.current.seek(he),d(he),v.current=he,q(he)},oe=he=>{S.current&&S.current.setSpeed(he)},W=()=>{j(0),u&&S.current&&S.current.pause()},te=ko[c.id]||{nameEn:"Acoustic Synthesizer",nameAr:"سنثسايزر صوتي"};return s.jsxs("section",{id:"studio",className:"studio-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:a?"المرئيات الأصلية والرسوم البيانية والصوت":"NASA VISUALS + GRAPHS + ACOUSTICS"}),s.jsx("h2",{className:"section-title",children:a?"استوديو الصوتيات والمرئيات المتزامنة":"Sonification Studio"}),s.jsx("p",{className:"section-subtitle",children:a?"مشاهدة محاكاة الحواسيب الفائقة لوكالة ناسا جنباً إلى جنب مع الرسوم البيانية العلمية والصوتيات في الوقت الفعلي":"Explore original NASA SVS supercomputer animations side-by-side with synchronized scientific graphs and genuine audio sonification."})]}),s.jsxs("div",{className:"studio-unified-card",children:[s.jsx("div",{className:"studio-datasets-pill-bar",role:"tablist","aria-label":"NASA Scientific Datasets",children:yt.map(he=>{var Re,Oe,Ee;const K=he.id===r;return s.jsxs("button",{role:"tab","aria-selected":K,onClick:()=>I(he.id),className:`studio-dataset-pill ${K?"active":""}`,children:[s.jsx("span",{className:"pill-dot",style:{backgroundColor:((Ee=(Oe=(Re=he.graphConfig)==null?void 0:Re.series)==null?void 0:Oe[0])==null?void 0:Ee.color)||"#38bdf8"}}),s.jsx("span",{className:"pill-name",children:a?he.titleAr:he.titleEn}),s.jsxs("span",{className:"pill-tag",children:["SVS #",he.svsId]})]},he.id)})}),s.jsxs("div",{className:"studio-side-by-side-stage",children:[s.jsx("div",{className:"studio-visual-column",children:s.jsx(Bo,{resource:c,currentTime:l,isPlaying:u,playbackSpeed:h,onTogglePlay:Q,onVideoAttach:V,lang:i})}),s.jsx("div",{className:"studio-graph-column",children:s.jsx(Go,{resource:c,currentTime:l,onSeek:j,lang:i,theme:e?"dark":"light"})})]}),s.jsxs("div",{className:"studio-master-controls-bar",children:[s.jsxs("div",{className:"master-transport-group",children:[s.jsxs("button",{onClick:Q,className:`master-play-btn ${u?"is-playing":""}`,title:u?"Pause":"Play synchronized visual, graph & sound","aria-label":u?"Pause":"Play",children:[u?s.jsx(Es,{size:20,fill:"currentColor"}):s.jsx(Rn,{size:20,fill:"currentColor"}),s.jsx("span",{children:u?a?"إيقاف مؤقت":"Pause":a?"تشغيل الكل":"Play Sync"})]}),s.jsx("button",{onClick:W,className:"master-icon-btn",title:"Reset Timeline to Beginning","aria-label":"Reset Timeline",children:s.jsx(lc,{size:16})})]}),s.jsxs("div",{className:"master-scrubber-group",children:[s.jsxs("div",{className:"scrubber-labels-row",children:[s.jsx("span",{className:"scrubber-current-time",children:Xt.formatTime(l)}),s.jsx("span",{className:"scrubber-milestone-text",children:((Ue=Xt.getCurrentMilestone(c,l))==null?void 0:Ue.label)||(a?"تزامن علمي":"Synchronized Timeline")}),s.jsx("span",{className:"scrubber-duration-time",children:Xt.formatTime(c.durationSeconds)})]}),s.jsx("input",{type:"range",min:"0",max:c.durationSeconds,step:"0.1",value:l,onChange:he=>j(parseFloat(he.target.value)),className:"studio-scrubber-slider","aria-label":"Synchronized Timeline Scrubber"})]}),s.jsxs("div",{className:"master-aux-group",children:[s.jsx("div",{className:"aux-speed-pills",children:[.5,1,1.5,2].map(he=>s.jsxs("button",{onClick:()=>oe(he),className:`aux-speed-btn ${h===he?"active":""}`,children:[he,"x"]},he))}),s.jsxs("div",{className:"aux-volume-wrapper",children:[s.jsx("button",{onClick:()=>m(!f),className:"aux-vol-btn",title:f?"Unmute":"Mute","aria-label":"Toggle Mute",children:f||x===0?s.jsx(Zn,{size:16}):s.jsx(rn,{size:16})}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:f?0:x,onChange:he=>{_(parseFloat(he.target.value)),f&&m(!1)},className:"aux-volume-slider","aria-label":"Master Volume"})]})]})]}),s.jsxs("div",{className:"studio-bottom-stage-grid",children:[s.jsx("div",{className:"studio-visualizer-card",children:s.jsx(D0,{isPlaying:u,isDark:e,accentColor:((ge=(me=(X=c.graphConfig)==null?void 0:X.series)==null?void 0:me[0])==null?void 0:ge.color)||"#38bdf8"})}),s.jsxs("div",{className:"studio-telemetry-hud-card",children:[s.jsxs("div",{className:"hud-card-header",children:[s.jsx("span",{className:"hud-header-eyebrow",children:a?"المؤشرات الحيوية للصوت":"LIVE ACOUSTIC TELEMETRY"}),s.jsxs("span",{className:"hud-live-tag",children:[s.jsx("span",{className:"pulse-dot"}),s.jsx("span",{children:u?"ACTIVE SYNTH":"IDLE"})]})]}),s.jsxs("div",{className:"hud-metrics-row",children:[s.jsxs("div",{className:"hud-metric-box",children:[s.jsx("span",{className:"lbl",children:a?"التردد الصوتي":"PITCH FREQUENCY"}),s.jsx("span",{className:"val highlight",children:F.frequency?`${Math.round(F.frequency)} Hz`:"---"}),s.jsx("span",{className:"sub",children:F.noteName||"Pentatonic Note"})]}),s.jsxs("div",{className:"hud-metric-box",children:[s.jsx("span",{className:"lbl",children:a?"القيمة المرصودة":"CURRENT READING"}),s.jsx("span",{className:"val cyan",children:D!==null?`${D} ${c.unitShort||""}`:"---"}),s.jsx("span",{className:"sub",children:c.unitEn||c.primaryVariable})]})]}),s.jsxs("div",{className:"hud-instrument-pill",children:[s.jsx("span",{className:"inst-lbl",children:a?"جرس الآلة الفيزيائي:":"Acoustic Timbre:"}),s.jsx("span",{className:"inst-val",children:a?te.nameAr:te.nameEn})]})]})]}),s.jsxs("div",{className:"studio-metadata-accordion",children:[s.jsxs("button",{onClick:()=>T(!E),className:"metadata-toggle-btn",children:[s.jsxs("div",{className:"toggle-left",children:[s.jsx(Ii,{size:16}),s.jsx("span",{children:a?"عرض التوثيق العلمي وبيانات ناسا المعتمدة":"View Authoritative Scientific Metadata & NASA Sources"}),s.jsxs("span",{className:"svs-tag",children:["SVS #",c.svsId]})]}),E?s.jsx(bs,{size:16}):s.jsx(ys,{size:16})]}),E&&s.jsx("div",{className:"metadata-expanded-content",children:s.jsx(zo,{resource:c,lang:i})})]})]})]})}function O0({lang:i="en"}){const e=i==="ar",[t,n]=R.useState(0),[a,r]=R.useState(null),o=[{id:"air-contrast",title:e?"مقارنة نقاء الهواء: القطب الشمالي ضد مركز صناعي":"Air Quality: Pristine Arctic vs Industrial Hub",desc:e?"استمع إلى الفرق الصوتي بين هواء القطب النقي ذو الهباء المنخفض، مقابل الكثافة العالية للتلوث الصناعي والعواصف الغبارية.":"Contrast clean background atmosphere against extreme particulate loading from heavy industry and dust storms.",slotA:{title:e?"القطب الشمالي النقي (AOD 0.06)":"Pristine Arctic (AOD 0.06)",desc:e?"تردد خافت منخفض (C3 ~ 131 Hz) يعكس صفاء الهواء.":"Deep low frequency (C3 ~ 131 Hz) indicating clean atmospheric transparency.",resourceId:"geos-aerosols-2017",val:.06},slotB:{title:e?"مركز صناعي ملوث (AOD 0.95)":"Dense Industrial Hub (AOD 0.95)",desc:e?"تردد حاد مرتفع (C6 ~ 1047 Hz) يعكس حجب الضوء واحتجاز الملوثات.":"Soaring high frequency (C6 ~ 1047 Hz) signaling severe aerosol optical depth.",resourceId:"geos-aerosols-2017",val:.95}},{id:"co2-decade",title:e?"تراكم ثاني أكسيد الكربون: عقد من الانبعاثات":"Carbon Dioxide: 2012 Baseline vs 2023 Modern",desc:e?"لاحظ ارتفاع طبقة الصوت الإجمالية الناتجة عن تراكم أكثر من 25 جزء في المليون من غازات الاحتباس الحراري عبر عقد من الزمن.":"Notice the distinct upward pitch shift driven by 25+ ppm of atmospheric CO₂ accumulation over a decade.",slotA:{title:e?"خط الأساس لعام 2012 (393.8 ppm)":"Year 2012 Baseline (393.8 ppm)",desc:e?"نغمة قرار دافئة ومستقرة نسبياً.":"Warm foundational pitch in the lower-mid register.",resourceId:"dyamond-co2-transport",val:393.8},slotB:{title:e?"المستوى المسجل لعام 2023 (421.3 ppm)":"Year 2023 Record (421.3 ppm)",desc:e?"طبقة نغمية أكثر حدة مع رنين مضاعف يعكس الطاقة المحتبسة.":"Higher register with energized harmonics reflecting amplified radiative forcing.",resourceId:"dyamond-co2-transport",val:421.3}},{id:"ocean-thermal",title:e?"تيارات المحيط: المياه القطبية مقابل تيار الخليج الدافئ":"Ocean Thermal: Polar Waters vs Gulf Stream Current",desc:e?"استمع إلى الفرق في الطاقة الحركية ودرجة الحرارة بين المسطحات المائية القطبية الباردة والتيارات الاستوائية السريعة.":"Experience the kinetic energy and thermal variance between subpolar gyres and the roaring tropical Gulf Stream.",slotA:{title:e?"مياه القطب الباردة (1.2°C)":"Polar Subpolar Water (1.2°C)",desc:e?"نغمة بحرية عميقة وبطيئة تعكس الخمول الحراري.":"Sub-bass aquatic thud indicating near-freezing thermal inertia.",resourceId:"perpetual-ocean-2",val:1.2},slotB:{title:e?"تيار الخليج الدافئ (27.8°C)":"Warm Gulf Stream Core (27.8°C)",desc:e?"إيقاع ماريمبا سريع ومشرق يعبر عن سرعة تدفق الحرارة.":"Bright, agile aquatic resonance reflecting massive thermal convection.",resourceId:"perpetual-ocean-2",val:27.8}}],c=o[t],l=async d=>{const u=d==="A"?c.slotA:c.slotB,p=yt.find(h=>h.id===u.resourceId)||yt[0];await _s(),r(d),da(p,u.val,.85),setTimeout(()=>{r(null)},600)};return s.jsxs("section",{id:"discover",className:"discover-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:e?"دليل الإدراك والتحليل":"DECODING GUIDE"}),s.jsx("h2",{className:"section-title",children:e?"اكتشف ما تستمع إليه":"Discover What You Are Hearing"}),s.jsx("p",{className:"section-subtitle",children:e?"كيف تقرأ الأذن البشرية أنماط الكوكب المناخية؟ دليل فك شفرة الترددات والجرس الصوتي":"Unlocking the scientific meaning behind acoustics: how frequency, timbre, and cadence encode Earth observations."})]}),s.jsxs("div",{className:"mapping-principles-grid",children:[s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"01"}),s.jsx("h3",{className:"principle-title",children:e?"طبقة الصوت (التردد Hz)":"Pitch & Frequency"}),s.jsx("p",{className:"principle-text",children:e?"تتوافق شدة القياس مباشرة مع التردد: كلما ارتفعت درجات الحرارة أو زاد تركيز ثاني أكسيد الكربون أو تكاثف التلوث، ارتفعت طبقة الصوت إلى نغمات أكثر حدة.":"Direct proportional relationship: higher temperatures, thicker aerosols, or elevated ppm concentrations trigger higher acoustic frequencies in Hertz."}),s.jsx("div",{className:"principle-tag",children:"LOW VAL = BASS • HIGH VAL = TREBLE"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"02"}),s.jsx("h3",{className:"principle-title",children:e?"جرس الآلة الفيزيائي":"Acoustic Timbre"}),s.jsx("p",{className:"principle-text",children:e?"تمتلك كل ظاهرة هوية صوتية خاصة: الرياح للهباء الجوي، الماريمبا المائية للتيارات البحرية، والأجراس الزجاجية النقية لصفائح الجليد القطبي.":"Each domain possesses an acoustic identity: resonant wind for aerosols, percussive fluid drops for rainfall, and crystalline bells for polar sea ice."}),s.jsx("div",{className:"principle-tag",children:"PHYSICAL PHENOMENON TIMBRES"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"03"}),s.jsx("h3",{className:"principle-title",children:e?"الأنماط والدورات السنوية":"Seasonal Rhythms"}),s.jsx("p",{className:"principle-text",children:e?"تظهر الدورات الموسمية بوضوح: يلاحظ المستمع نغمات منخفضة في فصل الصيف مع امتصاص الغابات للكربون، ونغمات صاعدة في الشتاء مع تراجع التمثيل الضوئي.":"Annual cycles produce recognizable waves: hear the dip during Northern Hemisphere summer photosynthesis and the peak during winter dormancy."}),s.jsx("div",{className:"principle-tag",children:"BIOSPHERE BREATHING"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"04"}),s.jsx("h3",{className:"principle-title",children:e?"المؤشرات الشاذة والقصوى":"Anomalies & Disruption"}),s.jsx("p",{className:"principle-text",children:e?"القفزات النغمية الحادة غير المتوقعة تدل فوراً على حرائق غابات مفاجئة، عواصف رملية، أو انخفاض ملحوظ كالذي حدث أثناء فترات الإغلاق في 2020.":"Abrupt sonic leaps immediately signal anomalies: sudden wildfire smoke outbreaks, atmospheric river landfalls, or the noticeable 2020 pandemic dip."}),s.jsx("div",{className:"principle-tag",children:"INSTANT EAR DETECTION"})]})]}),s.jsxs("div",{className:"comparison-module-card",children:[s.jsxs("div",{className:"comp-header",children:[s.jsxs("div",{className:"comp-title-group",children:[s.jsx(wd,{size:20,className:"comp-icon"}),s.jsx("h3",{className:"comp-title",children:e?"مختبر المقارنة السمعية التفاعلي":"Interactive Acoustic Comparison Lab"})]}),s.jsx("span",{className:"comp-badge",children:e?"مقارنة بيئية فورية":"DUAL AUDITION"})]}),s.jsx("p",{className:"comp-desc",children:e?"اختر إحدى المقارنات العلمية ثم استمع للعينتين لتختبر بنفسك كيف تبدو الظروف البيئية المختلفة في العالم الحقيقي.":"Select a scientific scenario and listen to both samples to experience how contrasting environmental states produce distinct acoustic signatures."}),s.jsx("div",{className:"comp-tabs-bar",children:o.map((d,u)=>s.jsx("button",{onClick:()=>{n(u),r(null)},className:`comp-tab-btn ${t===u?"active":""}`,children:d.title},d.id))}),s.jsxs("div",{className:"comp-slots-grid",children:[s.jsxs("div",{className:`comp-slot-card ${a==="A"?"is-sounding":""}`,children:[s.jsx("div",{className:"slot-badge slot-a",children:"SAMPLE A"}),s.jsx("h4",{className:"slot-title",children:c.slotA.title}),s.jsx("p",{className:"slot-desc",children:c.slotA.desc}),s.jsxs("button",{onClick:()=>l("A"),className:"slot-audition-btn",children:[a==="A"?s.jsx(rn,{size:18,className:"pulse-icon"}):s.jsx(Rn,{size:18,fill:"currentColor"}),s.jsx("span",{children:e?"استمع إلى العينة (أ)":"Audition Sample A"})]})]}),s.jsx("div",{className:"comp-slots-vs",children:s.jsx("span",{className:"vs-circle",children:"VS"})}),s.jsxs("div",{className:`comp-slot-card ${a==="B"?"is-sounding":""}`,children:[s.jsx("div",{className:"slot-badge slot-b",children:"SAMPLE B"}),s.jsx("h4",{className:"slot-title",children:c.slotB.title}),s.jsx("p",{className:"slot-desc",children:c.slotB.desc}),s.jsxs("button",{onClick:()=>l("B"),className:"slot-audition-btn",children:[a==="B"?s.jsx(rn,{size:18,className:"pulse-icon"}):s.jsx(Rn,{size:18,fill:"currentColor"}),s.jsx("span",{children:e?"استمع إلى العينة (ب)":"Audition Sample B"})]})]})]})]})]})}function F0({lang:i="en"}){const e=i==="ar",t=[{name:"NASA Earth Information Center (EIC)",nameAr:"مركز معلومات الأرض التابع لناسا",desc:"Interactive climate exhibits, physical visualizations, and Earth systems data.",url:"https://earth.gov/"},{name:"NASA Scientific Visualization Studio (SVS)",nameAr:"استوديو التصور العلمي التابع لناسا",desc:"Hyper-detailed cinematic planetary animations and scientific visual simulations.",url:"https://svs.gsfc.nasa.gov/"},{name:"NASA GIBS & Worldview",nameAr:"نظام تصفح الصور العالمية للأقمار الصناعية",desc:"Full-resolution near real-time satellite imagery layers and spectral bands.",url:"https://worldview.earthdata.nasa.gov/"},{name:"NASA POWER Project",nameAr:"مشروع التنبؤ بموارد الطاقة العالمية",desc:"Decadal solar radiation, surface meteorology, and climate time-series.",url:"https://power.larc.nasa.gov/"},{name:"NASA GMAO & GEOS Models",nameAr:"مكتب النمذجة والاستيعاب العالمي",desc:"Global atmospheric chemical transport and aerosol assimilation systems.",url:"https://gmao.gsfc.nasa.gov/"},{name:"NASA/JPL ECCO-2 Ocean Circulation",nameAr:"مشروع تقدير دوران ومناخ المحيطات",desc:"Global ocean thermal physics, eddies, currents, and sea surface anomalies.",url:"https://ecco-group.org/"}],n=[{name:"React 18",role:"Component Architecture & Reactive State"},{name:"Three.js",role:"Procedural 3D Earth, Orbit & Atmosphere Engine"},{name:"Web Audio API",role:"Dual Synthesizer, AnalyserNode & Real-time Acoustics"},{name:"Chart.js & Leaflet",role:"Scientific Time-Series & Geospatial Maps"},{name:"Vite",role:"High-Performance Modern Build Pipeline"}];return s.jsxs("section",{id:"about",className:"about-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:e?"عن المشروع والرسالة":"MISSION & BACKGROUND"}),s.jsx("h2",{className:"section-title",children:e?"مشروع تيرا-تون":"About Terra-Tone"}),s.jsx("p",{className:"section-subtitle",children:e?"مبادرة علمية تفاعلية تم تطويرها ضمن تحدي ناسا الدولي لتطبيقات الفضاء ٢٠٢٦":"Developed for the NASA International Space Apps Challenge 2026: The Earth Information Jukebox."})]}),s.jsxs("div",{className:"about-mission-card",children:[s.jsxs("div",{className:"mission-badge",children:[s.jsx(Rd,{size:18}),s.jsx("span",{children:"NASA SPACE APPS CHALLENGE 2026 — THE EARTH INFORMATION JUKEBOX"})]}),s.jsx("h3",{className:"mission-title",children:e?"تحويل الأرقام الفضائية المعقدة إلى لغة يفهمها الجميع":"Bridging Scientific Data and Human Emotion through Acoustic Sonification"}),s.jsx("p",{className:"mission-text",children:e?"يهدف مشروع Terra-Tone إلى تمكين الباحثين والطلاب والمهتمين بالبيئة، بمن فيهم ذوي التحديات البصرية، من تجربة نبض كوكب الأرض وفهم مؤشراته الحيوية دون الحاجة إلى التحديق في مئات الجداول الإحصائية المعقدة. عبر دمج فيزياء الصوت بالبيانات الفضائية، تصبح التغيرات المناخية حقيقة ملموسة تُسمع بوضوح.":"Terra-Tone translates planetary observations into harmonically rich acoustic landscapes. By converting satellite telemetry into calibrated musical frequencies, it reveals planetary cycles, climate anomalies, and seasonal dynamics in a multisensory format accessible to scientists, students, and visually impaired explorers worldwide."})]}),s.jsxs("div",{className:"about-meta-grid",children:[s.jsxs("div",{className:"about-subcard",children:[s.jsxs("div",{className:"subcard-header",children:[s.jsx(Eo,{size:20,className:"subcard-icon"}),s.jsx("h3",{className:"subcard-title",children:e?"مصادر وبيانات ناسا الرسمية":"Official NASA Data Providers"})]}),s.jsx("div",{className:"providers-list",children:t.map((a,r)=>s.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"provider-item",children:[s.jsxs("div",{className:"provider-info",children:[s.jsx("span",{className:"provider-name",children:e?a.nameAr:a.name}),s.jsx("span",{className:"provider-desc",children:a.desc})]}),s.jsx(jn,{size:14,className:"provider-ext-icon"})]},r))})]}),s.jsxs("div",{className:"about-subcard",children:[s.jsxs("div",{className:"subcard-header",children:[s.jsx(ic,{size:20,className:"subcard-icon"}),s.jsx("h3",{className:"subcard-title",children:e?"البنية التقنية والمكتبات":"Technology Stack & Architecture"})]}),s.jsx("div",{className:"tech-stack-list",children:n.map((a,r)=>s.jsxs("div",{className:"tech-item",children:[s.jsx("span",{className:"tech-name",children:a.name}),s.jsx("span",{className:"tech-role",children:a.role})]},r))}),s.jsxs("div",{className:"team-acknowledgment-box",children:[s.jsxs("div",{className:"ack-header",children:[s.jsx(Zd,{size:18}),s.jsx("span",{children:e?"فريق العمل والتقدير":"Team & Acknowledgments"})]}),s.jsx("p",{className:"ack-text",children:e?"تم بناء هذا النظام بفخر بواسطة فريق Terra-Tone، مهدىً إلى علماء ناسا وجميع الباحثين الذين يكرسون جهودهم لحماية كوكبنا الأزرق الجميل.":"Built with scientific rigor by the Terra-Tone Team for NASA Space Apps Challenge 2026. Dedicated to Earth scientists and researchers worldwide working to preserve our living planet."})]})]})]}),s.jsx("footer",{className:"terra-footer",children:s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"footer-logo",children:"TERRA-TONE"}),s.jsx("span",{className:"footer-copy",children:"© 2026 NASA Space Apps Challenge Project"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"https://github.com/EL7ADIDY/Terra-Tone",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"GitHub Repository"}),s.jsx("span",{className:"footer-sep",children:"•"}),s.jsx("a",{href:"https://www.spaceappschallenge.org/2026/challenges/the-earth-information-jukebox/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"NASA Space Apps 2026"}),s.jsx("span",{className:"footer-sep",children:"•"}),s.jsx("a",{href:"https://earth.gov/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Earth Information Center"})]})]})})]})}const k0=({activeResourceId:i,onSelectResource:e,lang:t="en"})=>{const[n,a]=R.useState("all"),r=yt.filter(o=>n==="all"?!0:o.category===n);return s.jsxs("section",{className:"eic-catalog-section","aria-label":"NASA Earth Information Center Catalog",children:[s.jsxs("div",{className:"eic-catalog-header",children:[s.jsxs("div",{className:"eic-catalog-title-group",children:[s.jsxs("div",{className:"eic-badge-pill",children:[s.jsx(ei,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:"NASA EARTH INFORMATION CENTER"})]}),s.jsx("h2",{className:"eic-section-title",children:t==="ar"?"معارض مركز معلومات الأرض":"Curated Earth Science Showcases"}),s.jsx("p",{className:"eic-section-subtitle",children:t==="ar"?"استكشف المرئيات العلمية الأصلية والبيانات المعتمدة المباشرة من وكالة ناسا عبر الغلاف الجوي والمحيطات والغطاء الجليدي والمدن.":"Explore original NASA SVS scientific animations and verified datasets tracking our interconnected planet."})]}),s.jsx("div",{className:"eic-category-filter",role:"tablist","aria-label":"Showcase Categories",children:P0.map(o=>{const c=n===o.id;return s.jsx("button",{type:"button",role:"tab","aria-selected":c,className:`eic-cat-btn ${c?"active":""}`,onClick:()=>a(o.id),children:t==="ar"?o.labelAr:o.labelEn},o.id)})})]}),s.jsx("div",{className:"eic-cards-grid",children:r.map(o=>{const c=o.id===i;return s.jsxs("article",{className:`eic-card ${c?"selected":""}`,onClick:()=>e(o.id),role:"button",tabIndex:0,onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),e(o.id))},"aria-current":c?"true":void 0,children:[s.jsxs("div",{className:"eic-card-media-wrap",children:[s.jsx("img",{src:o.previewImage,alt:t==="ar"?o.titleAr:o.titleEn,className:"eic-card-img",loading:"lazy",onError:l=>{l.target.style.opacity="0.4"}}),s.jsxs("span",{className:"eic-svs-badge",children:["SVS #",o.svsId]}),s.jsxs("span",{className:"eic-duration-badge",children:[s.jsx(ec,{className:"icon-xs","aria-hidden":"true"}),o.durationSeconds,"s"]}),c&&s.jsx("div",{className:"eic-card-active-overlay",children:s.jsx("span",{className:"eic-active-text",children:t==="ar"?"المعرض النشط":"Active Showcase"})})]}),s.jsxs("div",{className:"eic-card-body",children:[s.jsxs("div",{className:"eic-card-meta-line",children:[s.jsx("span",{className:"eic-card-category-tag",children:o.dataType}),s.jsx("span",{className:"eic-card-unit-tag",children:o.unitShort})]}),s.jsx("h3",{className:"eic-card-title",children:t==="ar"?o.titleAr:o.titleEn}),s.jsx("p",{className:"eic-card-desc",children:t==="ar"?o.shortDescriptionAr:o.shortDescriptionEn}),s.jsxs("div",{className:"eic-card-footer",children:[s.jsxs("div",{className:"eic-card-source",children:[s.jsx(hi,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{className:"truncate",children:o.dataProvider.split("/")[0]})]}),s.jsxs("button",{type:"button",className:"eic-card-select-btn",onClick:l=>{l.stopPropagation(),e(o.id)},children:[s.jsx(Id,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:c?t==="ar"?"يتم العرض":"Viewing":t==="ar"?"عرض":"Explore"})]})]})]})]},o.id)})})]})},ud=({resource:i,currentTime:e,isPlaying:t,playbackSpeed:n,isLooping:a,onTogglePlay:r,onSeek:o,onChangeSpeed:c,onToggleLoop:l,isAudioEnabled:d=!0,onToggleAudio:u,audioVolume:p=.7,onChangeVolume:h,lang:g="en"})=>{const x=R.useId(),_=i.durationSeconds||1,f=Math.min(100,Math.max(0,e/_*100)),m=E=>{const T=parseFloat(E.target.value);o(T)},M=E=>{const T=Math.max(0,Math.min(_,e+E));o(T)},y=[.5,1,1.5,2];return s.jsxs("div",{className:"eic-timeline-card","aria-label":"Shared EIC Timeline Controls",children:[s.jsx("div",{className:"eic-scrubber-row",children:s.jsxs("div",{className:"eic-scrubber-track-wrap",children:[s.jsx("input",{id:x,type:"range",min:0,max:_,step:.1,value:e,onChange:m,className:"eic-timeline-slider","aria-label":g==="ar"?"شريط التمرير الزمني المتزامن":"Synchronized Timeline Scrubber"}),s.jsx("div",{className:"eic-slider-progress-fill",style:{width:`${f}%`}}),i.timePoints&&s.jsx("div",{className:"eic-timeline-milestones","aria-hidden":"true",children:i.timePoints.map((E,T)=>{const S=E.timestamp/_*100,v=e>=E.timestamp;return s.jsx("button",{type:"button",className:`eic-milestone-tick ${v?"passed":""}`,style:{left:`${S}%`},onClick:()=>o(E.timestamp),title:E.label||E.date},T)})})]})}),s.jsxs("div",{className:"eic-timeline-controls-row",children:[s.jsxs("div",{className:"eic-timeline-actions-left",children:[s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-step",onClick:()=>M(-5),title:g==="ar"?"تراجع 5 ثوانٍ":"Step Back 5s","aria-label":"Step Back 5s",children:s.jsx(Hd,{className:"icon-sm"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-play-primary",onClick:r,title:t?g==="ar"?"إيقاف مؤقت":"Pause":g==="ar"?"تشغيل":"Play","aria-label":t?"Pause":"Play",children:t?s.jsx(Es,{className:"icon"}):s.jsx(Rn,{className:"icon"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-step",onClick:()=>M(5),title:g==="ar"?"تقدم 5 ثوانٍ":"Step Forward 5s","aria-label":"Step Forward 5s",children:s.jsx(sc,{className:"icon-sm"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-reset",onClick:()=>o(0),title:g==="ar"?"إعادة إلى البداية":"Restart from beginning","aria-label":"Restart",children:s.jsx(lc,{className:"icon-xs"})}),s.jsxs("div",{className:"eic-timeline-time-display",children:[s.jsx("span",{className:"current",children:Xt.formatTime(e)}),s.jsx("span",{className:"sep",children:"/"}),s.jsx("span",{className:"total",children:Xt.formatTime(_)})]})]}),s.jsxs("div",{className:"eic-timeline-actions-right",children:[typeof u=="function"&&s.jsxs("button",{type:"button",className:`eic-control-btn eic-btn-sound ${d?"active":""}`,onClick:u,title:d?g==="ar"?"كتم النغمات الصوتية":"Mute visual sonification":g==="ar"?"تشغيل النغمات الصوتية":"Enable visual sonification","aria-pressed":d,children:[d?s.jsx(rn,{className:"icon-xs"}):s.jsx(Zn,{className:"icon-xs text-rose"}),s.jsx("span",{className:"btn-label",children:g==="ar"?"صوت":"Audio"})]}),s.jsxs("button",{type:"button",className:`eic-control-btn eic-btn-loop ${a?"active":""}`,onClick:l,title:g==="ar"?"تكرار مستمر":"Loop Playback","aria-pressed":a,children:[s.jsx(To,{className:"icon-xs"}),s.jsx("span",{className:"btn-label",children:g==="ar"?"تكرار":"Loop"})]}),s.jsxs("div",{className:"eic-speed-selector",children:[s.jsx(Ud,{className:"icon-xs text-muted","aria-hidden":"true"}),s.jsx("div",{className:"eic-speed-pills",children:y.map(E=>{const T=n===E;return s.jsxs("button",{type:"button",className:`eic-speed-pill ${T?"active":""}`,onClick:()=>c(E),"aria-pressed":T,children:[E,"x"]},E)})})]})]})]})]})},B0=({lang:i="en",theme:e="dark",initialResourceId:t="night-lights-decade"})=>{const[n,a]=R.useState(t||yt[0].id),[r,o]=R.useState(0),[c,l]=R.useState(!1),[d,u]=R.useState(1),[p,h]=R.useState(!0),g=cd(n)||yt[0],x=R.useRef(null);x.current||(x.current=new dd({onTimeUpdate:T=>o(T),onPlayStateChange:T=>l(T),onSpeedChange:T=>u(T),onEnded:()=>{p&&x.current?(x.current.seek(0),x.current.play()):l(!1)}}));const _=R.useCallback(T=>{T!==n&&(x.current&&(x.current.pause(),x.current.seek(0)),o(0),l(!1),a(T))},[n]),f=R.useCallback((T,S)=>{x.current&&x.current.attachVideo(T,S)},[]),m=R.useCallback(()=>{x.current&&x.current.togglePlay()},[]),M=R.useCallback(T=>{x.current&&x.current.seek(T),o(T)},[]),y=R.useCallback(T=>{x.current&&x.current.setSpeed(T)},[]),E=R.useCallback(()=>{h(T=>!T)},[]);return R.useEffect(()=>()=>{x.current&&x.current.detachVideo()},[]),s.jsxs("div",{className:`eic-experience-wrapper theme-${e}`,"aria-label":"NASA Earth Information Center Visualization Experience",children:[s.jsxs("section",{className:"eic-main-experience-grid",children:[s.jsx("div",{className:"eic-column-left",children:s.jsx(Bo,{resource:g,currentTime:r,isPlaying:c,playbackSpeed:d,onTogglePlay:m,onVideoAttach:f,lang:i})}),s.jsx("div",{className:"eic-column-right",children:s.jsx(Go,{resource:g,currentTime:r,onSeek:M,lang:i,theme:e})})]}),s.jsx("section",{className:"eic-timeline-section",children:s.jsx(ud,{resource:g,currentTime:r,isPlaying:c,playbackSpeed:d,isLooping:p,onTogglePlay:m,onSeek:M,onChangeSpeed:y,onToggleLoop:E,lang:i})}),s.jsx("section",{className:"eic-details-section",children:s.jsx(zo,{resource:g,lang:i})}),s.jsx("section",{className:"eic-selector-section",children:s.jsx(k0,{activeResourceId:n,onSelectResource:_,lang:i})})]})},Rt={en:{appTitle:"Terra-Tone",tagline:"NASA Earth Environmental Data Sonification & Visual Explorer",badgeNasa:"NASA Space Apps",skipToContent:"Skip to main content",langToggle:"العربية",themeToggle:"Toggle Theme",themeLight:"Light Mode (Eye Comfort)",themeDark:"Dark Space Mode",highContrast:"High Contrast",largeText:"Large Text",shortcutsBtn:"Shortcuts (H)",mute:"Mute",unmute:"Unmute",audioReady:"Audio Active",audioBlocked:"Click to Enable Audio",announceToggle:"Speech During Play",announceOn:"Announce: Every 5th Year",announceOff:"Announce: Manual Only",onboardingTitle:"Try This: 3 Steps to Listen to Earth",step1Title:"1. Pick a Location or GPS",step1Desc:"Click preset Egyptian cities (Zagazig, Alexandria, Cairo, Aswan), click your GPS, or tap anywhere on Earth.",step2Title:"2. Explore Satellite Frames",step2Desc:"Toggle real NASA GIBS satellite imagery: Land Surface Temp, True Color, Rainfall, or NDVI Vegetation.",step3Title:"3. Listen to the Frame",step3Desc:'Click "Sonify Point" to hear the pixel under the marker, or click "Scan the Frame" to hear an audio sweep across the map!',dismiss:"Got it",gibsSectionHeading:"NASA GIBS Satellite Frame Viewer",gibsLayerSelect:"Satellite Imagery Layer:",gibsDate:"Frame Date",gibsPlay:"Animate Frames",gibsPause:"Pause Frames",gibsOpacity:"Opacity",sonifyPixelBtn:"Sonify Point from Frame",scanFrameBtn:"Scan the Frame",scanning:"Scanning Frame...",framePixelSampled:"Sampled from Frame",luminanceNotice:"Derived from pixel luminance (RGB true color / colormap unmapped)",colormapNotice:"Derived via calibrated NASA GIBS colormap",legend:"Layer Legend",toggleLegend:"Toggle Legend",pixelValueLabel:"Pixel value at marker:",variableLabel:"Earth Variable:",selectVariableAria:"Select climate variable to visualize and sonify",secondaryLayerLabel:"Second Layer (Volume Modulation):",secondaryNone:"None (Single Variable)",pitchMappingLabel:"Dynamic Pitch Mapping:",locationPresetLabel:"Location Presets & GPS:",gpsBtn:"Detect GPS Location",gpsLoading:"Acquiring GPS...",gpsError:"GPS access denied or unavailable",returnToChart:"Back to Chart View",customLocation:"Custom Point",compareModeLabel:"Compare Two Locations",locationA:"Location A (Left Channel)",locationB:"Location B (Right Channel)",clickMapToSelect:"Click anywhere on the map to set coordinates",coordinates:"Lat: {lat}, Lon: {lon}",timelineHeading:"Timeline & Audio Playback",year:"Year",currentYearLabel:"Current Year: {year}",play:"Play",pause:"Pause",stepBack:"Previous Year (Left Arrow)",stepForward:"Next Year (Right Arrow)",speed:"Speed",loop:"Loop Playback",yearSliderAria:"Scrub timeline year",audioHeading:"Sonification Controls",volume:"Volume",instrument:"Instrument",instrumentSine:"Pure Sine",instrumentTriangle:"Warm Triangle",instrumentPluck:"Soft Pluck",musicalScale:"Pentatonic Scale",scaleOn:"Scale Snapped",scaleOff:"Continuous Pitch",spatialStereo:"Stereo Spatial Sonification",recordCueTip:"High & low record chimes enabled",chartHeading:"Historical Trend ({range})",dataSubheading:"NASA POWER Ground-Level Observations",chartAriaLabel:"Line chart depicting historical data with trendline and moving cursor",dataTableView:"Data Table",chartView:"Chart View",trendline:"Linear Trendline",recordHigh:"Record High",recordLow:"Record Low",runningRecordHigh:"New High Record",runningRecordLow:"New Low Record",insightsHeading:"Plain Language Climate Insights",changePerDecade:"Change per Decade",totalTrendChange:"Total Period Change",percentChange:"Percent Change",significanceTest:"Statistical Significance",significant:"Statistically Significant (p < 0.05)",notSignificant:"Not Statistically Significant (p ≥ 0.05)",pValueLabel:"p-value: {p}",readSummaryBtn:"Spoken Summary (TTS)",stopSpeakingBtn:"Stop Speech",speakingState:"Speaking...",historicalRange:"Baseline to Latest Observations",tableCaption:"Annual values and historical anomalies for selected location",colYear:"Year",colValue:"Value",colAnomaly:"Anomaly (Diff from baseline)",colRecords:"Records & Notes",downloadCsv:"Download CSV",aboutHeading:"About Terra-Tone",aboutMission:'Terra-Tone was built for the NASA Space Apps Challenge "The Earth Information Jukebox". It makes multi-decadal NASA Earth science data accessible to everyone, especially people who are blind, visually impaired, or neurodivergent, through real-time harmonic sonification synchronized with spatial and chart visuals.',howSonificationWorks:"How Sonification Works:",sonificationExplanation:"Data values and satellite pixel readings are mapped to pitch using a harmonious pentatonic scale (C3 to C6). In Point Mode, the pixel RGB under the map marker is extracted from the NASA GIBS satellite frame and decoded via calibrated colormaps or luminance. In Scan Mode, a sweep across 40 columns sonifies the visible geography from west to east in real time. When comparing two locations, Location A is positioned in the left stereo ear and Location B in the right stereo ear, allowing you to hear climatic divergence in stereo space. Distinct bell and chime cues alert listeners when historical records are broken.",dataCrediting:"Data Sources: NASA GIBS (Global Imagery Browse Services) WMTS API and NASA POWER API (Prediction Of Worldwide Energy Resources) via NASA Langley Research Center.",keyboardHelpHeading:"Keyboard Shortcuts",shortcutSpace:"Play / Pause timeline playback",shortcutArrowsLR:"Step backward / forward by 1 year",shortcutArrowsUD:"Increase / decrease playback speed",shortcutM:"Mute / Unmute audio",shortcutH:"Open this keyboard shortcuts dialog",shortcutClose:"Close Modal",statusAnnounce:"Year {year}, {variable}: {value} {unit}. {recordNotice}",statusCompareAnnounce:"Year {year}: {locA} is {valA} {unit}, {locB} is {valB} {unit}.",statusPlaybackStarted:"Timeline playback started at {speed}x speed.",statusPlaybackPaused:"Timeline playback paused at year {year}.",statusLocationChanged:"Location changed to {name} at latitude {lat}, longitude {lon}.",modeTemperatureTab:"Temperature & Climate (NASA POWER)",modeAirTab:"Stage 1: Air Pollution",modeWaterTab:"Stage 2: Water Pollution",modeSoilTab:"Stage 3: Soil Pollution"},ar:{appTitle:"تيرا-تون (Terra-Tone)",tagline:"تحويل البيانات البيئية وصور الأقمار الصناعية لوكالة ناسا إلى صوت وموسيقى",badgeNasa:"تحدي ناسا لتطبيقات الفضاء",skipToContent:"الانتقال إلى المحتوى الرئيسي",langToggle:"English",themeToggle:"تغيير السمة",themeLight:"الوضع النهاري المريح للعين",themeDark:"الوضع الليلي الكوني",highContrast:"تباين عالي",largeText:"خط كبير",shortcutsBtn:"اختصارات لوحة المفاتيح (H)",mute:"كتم الصوت",unmute:"تشغيل الصوت",audioReady:"الصوت نشط",audioBlocked:"اضغط لتفعيل الصوت",announceToggle:"النطق أثناء التشغيل",announceOn:"الإعلانات: كل 5 سنوات",announceOff:"الإعلانات: يدوي فقط",onboardingTitle:"جرّب هذا: 3 خطوات للاستماع إلى كوكب الأرض",step1Title:"1. اختر موقعاً أو حدد GPS",step1Desc:"انقر على مدن مصرية جاهزة (الزقازيق، الإسكندرية، القاهرة، أسوان)، أو اضغط على موقعك عبر GPS أو أي نقطة على الخريطة.",step2Title:"2. استكشف إطارات الأقمار الصناعية",step2Desc:"اختر صور أقمار ناسا الحقيقية (NASA GIBS): حرارة سطح الأرض، الألوان الطبيعية، هطول الأمطار، أو مؤشر الغطاء النباتي.",step3Title:"3. استمع إلى بيانات الإطار الفضائي",step3Desc:'اضغط "تحويل النقطة لصوت" لسماع قيمة البكسل تحت العلامة، أو "مسح الإطار" لسماع مسح صوتي مجسم للمنطقة الظاهرة كاملة!',dismiss:"فهمت ذلك",gibsSectionHeading:"عارض إطارات الأقمار الصناعية (NASA GIBS)",gibsLayerSelect:"طبقة القمر الصناعي:",gibsDate:"تاريخ الإطار الفضائي",gibsPlay:"تشغيل حركة الإطارات",gibsPause:"إيقاف حركة الإطارات",gibsOpacity:"الشفافية",sonifyPixelBtn:"تحويل النقطة من الإطار لصوت",scanFrameBtn:"مسح الإطار صوتياً",scanning:"جاري مسح الإطار...",framePixelSampled:"العينة المأخوذة من الإطار",luminanceNotice:"مستنتج من سطوع البكسل (ألوان طبيعية / بدون خريطة ألوان)",colormapNotice:"مستخرج عبر خريطة ألوان ناسا المعايرة",legend:"دليل الألوان والوحدات",toggleLegend:"إظهار/إخفاء دليل الألوان",pixelValueLabel:"قيمة البكسل عند العلامة:",variableLabel:"المتغير البيئي:",selectVariableAria:"اختر المتغير المناخي للعرض والتحويل السمعي",secondaryLayerLabel:"الطبقة الصوتية الثانية (تعديل مستوى الصوت):",secondaryNone:"بدون (متغير فردي)",pitchMappingLabel:"نطاق درجات النغمات الموسيقية:",locationPresetLabel:"المواقع الجاهزة وتحديد GPS:",gpsBtn:"تحديد موقعي عبر GPS",gpsLoading:"جاري تحديد موقعك...",gpsError:"تعذر الوصول إلى نظام GPS",returnToChart:"العودة إلى الرسم البياني",customLocation:"نقطة مخصصة",compareModeLabel:"مقارنة موقعين معاً",locationA:"الموقع أ (القناة اليسرى)",locationB:"الموقع ب (القناة اليمنى)",clickMapToSelect:"انقر على الخريطة لتحديد الإحداثيات",coordinates:"خط العرض: {lat}، خط الطول: {lon}",timelineHeading:"الخط الزمني والتشغيل الصوتي",year:"السنة",currentYearLabel:"السنة الحالية: {year}",play:"تشغيل",pause:"إيقاف مؤقت",stepBack:"السنة السابقة (السهم الأيسر)",stepForward:"السنة التالية (السهم الأيمن)",speed:"السرعة",loop:"تكرار التشغيل",yearSliderAria:"شريط التنقل عبر السنوات",audioHeading:"إعدادات التحويل الصوتي (Sonification)",volume:"مستوى الصوت",instrument:"الآلة الموسيقية",instrumentSine:"نغمة جيبية نقية (Sine)",instrumentTriangle:"مثلثية دافئة (Triangle)",instrumentPluck:"عزف أوتار ناعم (Soft Pluck)",musicalScale:"السلم الموسيقي الخماسي (Pentatonic)",scaleOn:"مطابق للسلم",scaleOff:"تردد متصل حر",spatialStereo:"توزيع صوتي مجسم (Stereo)",recordCueTip:"نغمات التنبيه للقيم القياسية مفعلة",chartHeading:"المسار التاريخي ({range})",dataSubheading:"أرصاد وكالة ناسا باور (NASA POWER) الأرضية",chartAriaLabel:"مخطط بياني يوضح البيانات التاريخية مع خط الاتجاه ومؤشر متحرك",dataTableView:"جدول البيانات",chartView:"الرسم البياني",trendline:"خط الاتجاه الخطي",recordHigh:"أعلى رقم قياسي",recordLow:"أدنى رقم قياسي",runningRecordHigh:"رقم قياسي مرتفع جديد",runningRecordLow:"رقم قياسي منخفض جديد",insightsHeading:"تحليلات المناخ بلغة واضحة",changePerDecade:"التغير لكل عقد (10 سنوات)",totalTrendChange:"إجمالي التغير خلال الفترة",percentChange:"نسبة التغير المئوية",significanceTest:"الدلالة الإحصائية",significant:"تغير دال إحصائياً (p < 0.05)",notSignificant:"تغير غير دال إحصائياً (p ≥ 0.05)",pValueLabel:"القيمة الاحتمالية p: {p}",readSummaryBtn:"قراءة الملخص صوتياً (TTS)",stopSpeakingBtn:"إيقاف القراءة",speakingState:"جاري القراءة...",historicalRange:"من خط الأساس حتى أحدث الأرصاد",tableCaption:"القيم السنوية والانحرافات التاريخية للموقع المحدد",colYear:"السنة",colValue:"القيمة",colAnomaly:"الانحراف (الفرق عن خط الأساس)",colRecords:"الأرقام القياسية والملاحظات",downloadCsv:"تنزيل ملف CSV",aboutHeading:"حول مشروع تيرا-تون (Terra-Tone)",aboutMission:'تم تصميم Terra-Tone لتحدي ناسا لتطبيقات الفضاء "صندوق معلومات الأرض"، بهدف إتاحة بيانات علوم الأرض والصور الفضائية الصادرة عن ناسا للجميع، وخخاصة المكفوفين وضعاف البصر، عبر التحويل الصوتي المتناغم والمتزامن مع الخرائط والرسوم البيانية.',howSonificationWorks:"كيف يعمل التحويل الصوتي (Sonification):",sonificationExplanation:"تُحوَّل قيم البيانات وقراءات بكسلات الأقمار الصناعية إلى طبقات نغمية باستخدام السلم الموسيقي الخماسي المتناغم (من C3 حتى C6). في نمط النقطة، يتم قراءة بكسل RGB من إطار قمر ناسا الفضائي أسفل العلامة المحددة وتحويله إلى قيمة فيزيائية باستخدام خريطة الألوان المعايرة أو السطوع. وفي نمط المسح، يتم مسح 40 عموداً عبر الخريطة للاستماع لتضاريس المنطقة المعروضة كاملة. وعند مقارنة موقعين، يُوجَّه الموقع الأول للأذن اليسرى والموقع الثاني للأذن اليمنى للاستماع للاختلافات المناخية في فضاء ستيريو مجسم.",dataCrediting:"مصادر البيانات: واجهة إطارات الأقمار الصناعية (NASA GIBS WMTS API) وواجهة ناسا باور (NASA POWER API) من مركز لانغلي للأبحاث التابع لناسا.",keyboardHelpHeading:"اختصارات لوحة المفاتيح",shortcutSpace:"تشغيل / إيقاف مؤقت للخط الزمني",shortcutArrowsLR:"الانتقال سنة للخلف / للأمام",shortcutArrowsUD:"زيادة / تقليل سرعة التشغيل",shortcutM:"كتم / تشغيل الصوت",shortcutH:"فتح نافذة اختصارات لوحة المفاتيح",shortcutClose:"إغلاق النافذة",statusAnnounce:"سنة {year}، {variable}: {value} {unit}. {recordNotice}",statusCompareAnnounce:"سنة {year}: {locA} بقيمة {valA} {unit}، و{locB} بقيمة {valB} {unit}.",statusPlaybackStarted:"بدأ تشغيل الخط الزمني بسرعة {speed}x.",statusPlaybackPaused:"تم إيقاف تشغيل الخط الزمني عند سنة {year}.",statusLocationChanged:"تم تغيير الموقع إلى {name} عند خط عرض {lat}، وخط طول {lon}.",modeTemperatureTab:"الحرارة والمناخ (NASA POWER)",modeAirTab:"المرحلة 1: تلوث الهواء",modeWaterTab:"المرحلة 2: تلوث المياه",modeSoilTab:"المرحلة 3: تلوث التربة"}};function G0({isOpen:i=!1,onClose:e=()=>{},lang:t="en"}){const n=Rt[t]||Rt.en,a=R.useRef(null),r=R.useRef(null);if(R.useEffect(()=>{var c;i&&((c=r.current)==null||c.focus())},[i]),!i)return null;const o=[{key:"Space",desc:n.shortcutSpace},{key:"← / →",desc:n.shortcutArrowsLR},{key:"↑ / ↓",desc:n.shortcutArrowsUD},{key:"M",desc:n.shortcutM},{key:"H",desc:n.shortcutH},{key:"Esc",desc:n.shortcutClose}];return s.jsx("div",{className:"modal-backdrop",onClick:e,role:"presentation",children:s.jsxs("div",{className:"modal-content",role:"dialog","aria-modal":"true","aria-labelledby":"shortcuts-modal-title",ref:a,onClick:c=>c.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-row",children:[s.jsx(Od,{className:"icon-md","aria-hidden":"true"}),s.jsx("h2",{id:"shortcuts-modal-title",className:"modal-title",children:n.keyboardHelpHeading})]}),s.jsx("button",{ref:r,type:"button",className:"btn-modal-close",onClick:e,"aria-label":n.shortcutClose,children:s.jsx(Ns,{className:"icon","aria-hidden":"true"})})]}),s.jsx("div",{className:"modal-body",children:s.jsxs("table",{className:"shortcuts-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t==="ar"?"المفتاح":"Key"}),s.jsx("th",{scope:"col",children:t==="ar"?"الوظيفة":"Action"})]})}),s.jsx("tbody",{children:o.map((c,l)=>s.jsxs("tr",{children:[s.jsx("td",{className:"key-cell",children:s.jsx("kbd",{className:"kbd-shortcut",children:c.key})}),s.jsx("td",{className:"desc-cell",children:c.desc})]},l))})]})}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{type:"button",className:"btn-primary",onClick:e,children:n.shortcutClose})})]})})}const Wn=[{id:"MODIS_Terra_Land_Surface_Temp_Day",colormapId:"MODIS_Land_Surface_Temp",nameEn:"Land Surface Temp (Day)",nameAr:"حرارة سطح الأرض (نهاراً)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,startDate:"2000-02-24",unitEn:"°C",unitAr:"م°",isTemperature:!0,legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.svg",descriptionEn:"Daily land surface temperature from MODIS Terra, showing regional heat islands, desert heat, and seasonal thermal shifts.",descriptionAr:"درجة حرارة سطح الأرض النهارية من القمر الصناعي تيرا، توضح جزر الحرارة الحضرية وحرارة الصحراء."},{id:"MODIS_Terra_CorrectedReflectance_TrueColor",colormapId:null,nameEn:"Natural Color Imagery (True Color)",nameAr:"صور الألوان الطبيعية الحقيقية",format:"jpeg",ext:"jpeg",tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,startDate:"2000-02-24",unitEn:"Reflectance (Luminance)",unitAr:"السطوع والانعكاس",isTemperature:!1,legendUrl:null,descriptionEn:"Daily true-color optical satellite imagery from MODIS Terra showing actual atmospheric clouds, oceans, vegetation, and terrain.",descriptionAr:"صور فضائية بالألوان الحقيقية اليومية من قمر تيرا توضح السحب، الغطاء النباتي، والتضاريس."},{id:"IMERG_Precipitation_Rate",colormapId:"GPM_Precipitation_Rate",nameEn:"Precipitation Rate (IMERG)",nameAr:"معدل هطول الأمطار (IMERG)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,startDate:"2000-06-01",unitEn:"mm/hr",unitAr:"ملم/ساعة",isTemperature:!1,legendUrl:"https://gibs.earthdata.nasa.gov/legends/GPM_Precipitation_Rate_H.svg",descriptionEn:"GPM IMERG multi-satellite precipitation rate estimates depicting rainfall intensity and severe storms worldwide.",descriptionAr:"تقديرات هطول الأمطار من مهمة قياس الأمطار العالمية (GPM IMERG) لرصد شدة الأمطار والعواصف."},{id:"MODIS_Terra_NDVI_8Day",colormapId:"MODIS_NDVI",nameEn:"Vegetation Index (NDVI)",nameAr:"مؤشر الغطاء النباتي (NDVI)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,startDate:"2025-02-12",unitEn:"NDVI",unitAr:"NDVI",isTemperature:!1,legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_NDVI_H.svg",descriptionEn:"Rolling 8-day Normalized Difference Vegetation Index measuring plant chlorophyll and canopy greenness.",descriptionAr:"مؤشر الغطاء النباتي المقاس كل 8 أيام لرصد كثافة وصحة النباتات والمحاصيل الزراعية."}],dr=new Map,rs=new Map,Ja=new Map;function sn(i,e,t,n,a){const r=typeof i=="object"&&i!==null?i:Wn.find(l=>l.id===i)||Wn[0];return`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${r.gibsLayerId||r.id}/default/${e||"default"}/${r.tileMatrixSet}/${t}/${n}/${a}.${r.ext||"png"}`}function pn(i,e,t){const n=Math.pow(2,t),a=Math.max(-85.0511,Math.min(85.0511,i)),r=(e+180)/360*n,o=a*Math.PI/180,c=(1-Math.log(Math.tan(o)+1/Math.cos(o))/Math.PI)/2*n,l=(Math.floor(r)%n+n)%n,d=Math.max(0,Math.min(n-1,Math.floor(c))),u=Math.floor((r-Math.floor(r))*256),p=Math.floor((c-Math.floor(c))*256);return{tileX:l,tileY:d,pixelX:Math.max(0,Math.min(255,u)),pixelY:Math.max(0,Math.min(255,p))}}async function hd(i){const e=typeof i=="object"&&i!==null?i:Wn.find(o=>o.id===i);if(!e||!e.colormapId)return null;const t=e.colormapId;if(dr.has(t))return dr.get(t);const n=e.gibsLayerId||e.id,a=[`https://gibs.earthdata.nasa.gov/colormaps/v1.3/${t}.xml`,`https://gibs.earthdata.nasa.gov/colormaps/v1.3/${n}.xml`];let r=null;for(const o of a)try{const c=await fetch(o);if(!c.ok){r=new Error(`HTTP ${c.status}`);continue}const l=await c.text(),p=new DOMParser().parseFromString(l,"text/xml").querySelectorAll("ColorMapEntry"),h=[];if(p.forEach(g=>{const x=g.getAttribute("rgb"),_=g.getAttribute("value"),f=g.getAttribute("transparent")==="true",m=g.getAttribute("nodata")==="true";if(x&&_&&!m&&!f){const[M,y,E]=x.split(",").map(Number),v=_.replace(/[\[\(\]\)]/g,"").split(",").map(O=>O.includes("INF")?NaN:Number(O));let N=NaN;v.length===2&&!isNaN(v[0])&&!isNaN(v[1])?N=(v[0]+v[1])/2:isNaN(v[0])?v.length===2&&!isNaN(v[1])&&(N=v[1]):N=v[0],!isNaN(M)&&!isNaN(y)&&!isNaN(E)&&!isNaN(N)&&h.push({r:M,g:y,b:E,value:N})}}),h.length>0)return dr.set(t,h),h}catch(c){r=c,console.warn(`Failed fetching colormap from ${o}:`,c)}return r&&console.warn(`Colormap unavailable for ${t}:`,r),null}function z0(i,e,t,n,a){if(i===0&&e===0&&t===0)return{value:null,isLuminance:!1,label:"No Data"};if(n&&n.length>0&&!(a!=null&&a.useLuminance)){let o=1/0,c=null;for(let l=0;l<n.length;l++){const d=n[l],u=i-d.r,p=e-d.g,h=t-d.b,g=u*u+p*p+h*h;if(g<o&&(o=g,c=d.value,g===0))break}if(o<2500&&c!==null){let l=c;(a!=null&&a.isTemperature||a!=null&&a.isKelvin)&&l>100&&(l=l-273.15);const d=Math.abs(l)<2?3:Math.abs(l)<20?2:1;return{value:parseFloat(l.toFixed(d)),isLuminance:!1,label:`${l.toFixed(d)} ${(a==null?void 0:a.unitEn)||""}`.trim()}}}const r=(.299*i+.587*e+.114*t)/255;return{value:parseFloat((r*100).toFixed(1)),isLuminance:!0,label:`${(r*100).toFixed(0)}% Luminance`}}function xs(i){if(rs.has(i))return rs.get(i);const e=new Promise(t=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t({ok:!0,img:n}),n.onerror=()=>t({ok:!1,img:null}),n.src=i});return rs.set(i,e),e}function j0(i=[]){i.forEach(e=>{e&&!rs.has(e)&&xs(e)})}async function qn(i,e,t,n,a){const r=(a==null?void 0:a.id)||(a==null?void 0:a.gibsLayerId)||"default",o=`${i}_${e}_${t}_${r}_${n?n.length:0}`;if(Ja.has(o))return Ja.get(o);const c=await xs(i);if(!c.ok||!c.img)return{value:null,isLuminance:!1,label:"Tile Missing / No Data",missingTile:!0};try{const l=document.createElement("canvas");l.width=256,l.height=256;const d=l.getContext("2d",{willReadFrequently:!0});d.drawImage(c.img,0,0);const u=d.getImageData(e,t,1,1).data,p=u[0],h=u[1],g=u[2];if(u[3]===0){const m={value:null,isLuminance:!1,label:"Empty Tile / Clouds",r:p,g:h,b:g,emptyPixel:!0};return Ja.set(o,m),m}const f={...z0(p,h,g,n,a),r:p,g:h,b:g};return Ja.set(o,f),f}catch(l){return console.warn("Canvas pixel read error (CORS or canvas issue):",l),{value:null,isLuminance:!0,label:"Sampling Unavailable",corsError:!0}}}const $n=[{id:"air",stageNumber:1,titleEn:"Stage 1: Air Pollution",titleAr:"المرحلة 1: تلوث الهواء",shortEn:"Air Pollution",shortAr:"تلوث الهواء",subtitleEn:"Atmospheric aerosols (PM2.5 proxy), total column ozone (O₃), and carbon monoxide (CO).",subtitleAr:"الهباء الجوي (كمؤشر للجسيمات الدقيقة PM2.5)، وإجمالي عمود الأوزون، وأول أكسيد الكربون.",accentColor:"#38bdf8",honestyBannerEn:null,honestyBannerAr:null,presets:[{id:"cairo",nameEn:"Cairo",nameAr:"القاهرة",lat:30.0444,lon:31.2357},{id:"delhi",nameEn:"Delhi",nameAr:"دلهي",lat:28.6139,lon:77.209},{id:"beijing",nameEn:"Beijing",nameAr:"بكين",lat:39.9042,lon:116.4074},{id:"los_angeles",nameEn:"Los Angeles",nameAr:"لوس أنجلوس",lat:34.0522,lon:-118.2437}],defaultZoom:4,animations:[{id:"air_aod",stageId:"air",gibsLayerId:"MERRA2_Aerosol_Optical_Depth_Analysis_Monthly",colormapId:"MERRA2_Aerosol_Optical_Depth_Analysis_Monthly",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MERRA2_Aerosol_Optical_Depth_Analysis_Monthly_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Aerosol Optical Depth (PM2.5 Proxy)",titleAr:"العمق البصري للهباء الجوي (مؤشر PM2.5)",provider:"NASA GMAO / MERRA-2",variableEn:"Aerosol Optical Depth (550 nm)",variableAr:"العمق البصري للهباء الجوي",unitEn:"AOD",unitAr:"AOD",isProxy:!0,proxyBadgeEn:"PM2.5 Proxy (AOD)",proxyBadgeAr:"بديل PM2.5 (هباء جوي)",availableRange:{start:"1980-01-01",end:"2026-08-01"},cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-08-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:0,max:.9},pairedPowerParam:"AOD_55",whatItIsEn:"Aerosol Optical Depth (AOD) measures how much sunlight is scattered or absorbed by airborne particles like dust, smoke, urban haze, and sulfates. Because NASA GIBS does not offer a continuously updated global surface PM2.5 time-series layer, total AOD is used here as a scientific proxy for fine particulate air pollution.",whatItIsAr:"يقيس العمق البصري للهباء الجوي (AOD) مقدار حجب الجسيمات العالقة في الهواء (كالغبار والدخان والضباب الدخاني) لأشعة الشمس. ونظراً لعدم توفر طبقة محدثة يومياً للجسيمات الدقيقة PM2.5 في GIBS، يُستخدم هذا المقياس كمؤشر علمي بديل لتلوث الجسيمات الدقيقة.",whyItMattersEn:"High aerosol concentrations reduce visibility and correlate with elevated PM2.5 exposure, which can trigger asthma, cardiovascular strain, and respiratory illness.",whyItMattersAr:"تشير القيم المرتفعة للهباء الجوي إلى زيادة تركيز الجسيمات العالقة التي تؤثر على جودة التنفس وصحة القلب والرئتين.",whatTrendShowsEn:"Seasonal spikes reveal dust storms, wildfire smoke plumes, and industrial haze peaks across cities and deserts.",whatTrendShowsAr:"تُظهر الذروات الموسمية عواصف الغبار، وأعمدة دخان الحرائق، وموجات الضباب الدخاني الحضري.",limitationEn:"Proxy metric: measures total atmospheric column aerosols (~50 km MERRA-2 grid), not ground-level PM2.5 µg/m³ directly.",limitationAr:"مؤشر بديل: يقيس الهباء الجوي في كامل العمود الجوي بدقة ~50 كم، وليس تركيز PM2.5 على مستوى التنفس مباشرة."},{id:"air_ozone",stageId:"air",gibsLayerId:"OMI_Ozone_DOAS_Total_Column",colormapId:"OMI_Ozone_DOAS_Total_Column",legendUrl:"https://gibs.earthdata.nasa.gov/legends/OMI_Ozone_DOAS_Total_Column_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Total Column Ozone (O₃)",titleAr:"إجمالي عمود الأوزون (O₃)",provider:"NASA Aura / OMI (DOAS v3)",variableEn:"Total Column Ozone",variableAr:"إجمالي عمود الأوزون",unitEn:"DU",unitAr:"وحدة دوبسون",isProxy:!1,proxyBadgeEn:"Total Column O₃",proxyBadgeAr:"عمود الأوزون الكلي",availableRange:{start:"2004-10-01",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"09",day:"15"},valueDomain:{min:200,max:450},pairedPowerParam:"TO3",whatItIsEn:"Total Column Ozone (measured in Dobson Units, DU) represents the total amount of ozone gas from Earth’s surface up to the top of the stratosphere, observed daily by NASA’s Aura OMI instrument.",whatItIsAr:"يمثل إجمالي عمود الأوزون (بوحدة دوبسون DU) الكمية الكلية لغاز الأوزون من سطح الأرض حتى أعلى الغلاف الجوي عبر قمر أورا (Aura OMI).",whyItMattersEn:"Stratospheric ozone shields life from harmful UV radiation, while excess ground-level ozone is a toxic respiratory pollutant. Tracking column changes helps monitor ozone depletion and atmospheric transport.",whyItMattersAr:"يحمي أوزون الستراتوسفير الحياة من الأشعة فوق البنفسجية، بينما يضر الأوزون السطحي بالرئتين. يساعد التتبع على مراقبة التغيرات الموسمية وثقب الأوزون.",whatTrendShowsEn:"Strong latitudinal bands and spring polar depletion cycles show how atmospheric circulation redistributes ozone around the globe.",whatTrendShowsAr:"توضح الخرائط التوزيع عبر خطوط العرض والتغيرات الموسمية في طبقة الأوزون حول العالم.",limitationEn:"Column measurement combines stratospheric (~90%) and tropospheric (~10%) ozone; daily frames may show narrow orbital gaps.",limitationAr:"يقيس العمود الكلي الأوزون الستراتوسفيري والسطحي معاً، وقد تظهر فجوات مدارية بسيطة في بعض الأيام."},{id:"air_co",stageId:"air",gibsLayerId:"AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Monthly_Day",colormapId:"AIRS_Carbon_Monoxide_Volume_Mixing_Ratio",legendUrl:"https://gibs.earthdata.nasa.gov/legends/AIRS_Carbon_Monoxide_Volume_Mixing_Ratio_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Carbon Monoxide (CO at 500 hPa)",titleAr:"أول أكسيد الكربون (CO عند 500 هكتوباسكال)",provider:"NASA JPL / Aqua AIRS (L3 Monthly)",variableEn:"Carbon Monoxide Mixing Ratio",variableAr:"نسبة مزج أول أكسيد الكربون",unitEn:"ppbv",unitAr:"جزء/مليار",isProxy:!1,proxyBadgeEn:"Combustion Tracer",proxyBadgeAr:"مؤشر الاحتراق والحرائق",availableRange:{start:"2002-09-01",end:"2026-09-01"},skipDates:["2025-05-01","2025-06-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-09-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"08",day:"01"},valueDomain:{min:40,max:250},pairedPowerParam:null,whatItIsEn:"Carbon monoxide (CO) is a colorless, toxic gas produced by incomplete burning of fossil fuels, biomass, and wildfires. Aqua AIRS tracks mid-tropospheric CO concentrations globally every month in parts per billion by volume (ppbv).",whatItIsAr:"أول أكسيد الكربون غاز سام ينتج عن الاحتراق غير الكامل للوقود الأحفوري وحرائق الغابات، ويرصده مسبار AIRS على القمر أكوا شهرياً بوحدة جزء في المليار (ppbv).",whyItMattersEn:"CO persists for weeks in the atmosphere, travelling across oceans to degrade downwind air quality and contributing to ground-level ozone formation.",whyItMattersAr:"يبقى الغاز لأسابيع في الجو وينتقل عبر القارات مسبباً تدهور جودة الهواء وتكوّن الأوزون السطحي الضار.",whatTrendShowsEn:"Plumes highlight major wildfire seasons (Amazon, Central Africa, boreal forests) and urban/industrial combustion corridors.",whatTrendShowsAr:"تُبرز الأعمدة المرتفعة مواسم حرائق الغابات الكبرى وممرات الانبعاثات الصناعية.",limitationEn:"Measured at 500 hPa (~5.5 km altitude), capturing transported plumes rather than direct street-level exhaust.",limitationAr:"يُقاس على مستوى ضغط 500 هكتوباسكال (~5.5 كم ارتفاعاً)، مما يعكس انتقال السحب الملوثة أكثر من عوادم الشوارع المباشرة."}]},{id:"water",stageNumber:2,titleEn:"Stage 2: Water Pollution",titleAr:"المرحلة 2: تلوث المياه",shortEn:"Water Pollution",shortAr:"تلوث المياه",subtitleEn:"Ocean chlorophyll-a (algal blooms), sea surface temperature stress, and coastal turbidity/ocean color.",subtitleAr:"الكلوروفيل-أ (الازدهار الطحلبي)، وحرارة سطح البحر، ولون المحيط وعكارة الرواسب الساحلية.",accentColor:"#10b981",honestyBannerEn:null,honestyBannerAr:null,presets:[{id:"nile_delta_sea",nameEn:"Nile Delta Coast",nameAr:"ساحل دلتا النيل",lat:31.65,lon:31.1},{id:"gulf_mexico",nameEn:"Gulf of Mexico",nameAr:"خليج المكسيك",lat:28.8,lon:-89.4},{id:"baltic_sea",nameEn:"Baltic Sea",nameAr:"بحر البلطيق",lat:57.5,lon:19.5},{id:"red_sea",nameEn:"Red Sea",nameAr:"البحر الأحمر",lat:24.5,lon:36.2}],defaultZoom:5,animations:[{id:"water_chlorophyll",stageId:"water",gibsLayerId:"MODIS_Aqua_L2_Chlorophyll_A",colormapId:"MODIS_Chlorophyll",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Chlorophyll_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,ext:"png",titleEn:"Chlorophyll-a (Algal Blooms)",titleAr:"الكلوروفيل-أ (الازدهار الطحلبي)",provider:"NASA OBPG / Aqua MODIS (L2)",variableEn:"Chlorophyll-a Concentration",variableAr:"تركيز الكلوروفيل-أ",unitEn:"mg/m³",unitAr:"ملغم/م³",isProxy:!1,proxyBadgeEn:"Algal Bloom Indicator",proxyBadgeAr:"مؤشر ازدهار الطحالب",availableRange:{start:"2002-07-04",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"15"},valueDomain:{min:.01,max:10},pairedPowerParam:null,whatItIsEn:"Chlorophyll-a measures the concentration of microscopic marine algae (phytoplankton) in surface ocean and coastal waters, retrieved by NASA’s Aqua MODIS sensor.",whatItIsAr:"يقيس الكلوروفيل-أ تركيز العوالق النباتية والطحالب الدقيقة في المياه السطحية للبحار والسواحل عبر القمر الصناعي أكوا (MODIS).",whyItMattersEn:"Excess fertilizer and sewage runoff trigger massive algal blooms (eutrophication). When blooms die and decay, they strip oxygen from water and create marine dead zones.",whyItMattersAr:"يؤدي تسرب الأسمدة ومياه الصرف إلى انفجار نمو الطحالب (التخثث)، وعند تحللها تستهلك الأكسجين مسببة مناطق ميتة تقتل الأسماك.",whatTrendShowsEn:"Bright green/yellow coastal hotspots near river deltas and enclosed seas reveal nutrient runoff and seasonal bloom outbreaks.",whatTrendShowsAr:"تُظهر البقع الساحلية المرتفعة عند مصبات الأنهار والبحار المغلقة تركيزات التغذية الزائدة ومواسم الازدهار الطحلبي.",limitationEn:"Optical sensor cannot see through clouds or sun glint; blank/missing coastal pixels occur on cloudy sample dates.",limitationAr:"تتأثر القياسات الضوئية بالسحب وانعكاس الشمس، وقد تظهر فراغات في الأيام الغائمة، ولا تغطي الأنهار الصغيرة."},{id:"water_sst",stageId:"water",gibsLayerId:"MODIS_Aqua_L3_SST_Thermal_4km_Day_Monthly",colormapId:"MODIS_Sea_Surface_Temperature",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Sea_Surface_Temperature_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Sea Surface Temperature (Thermal Stress)",titleAr:"درجة حرارة سطح البحر (الإجهاد الحراري)",provider:"NASA OBPG / PO.DAAC / Aqua MODIS (L3 Monthly)",variableEn:"Sea Surface Temperature",variableAr:"درجة حرارة سطح البحر",unitEn:"°C",unitAr:"م°",isProxy:!1,proxyBadgeEn:"Thermal & Hypoxia Risk",proxyBadgeAr:"الإجهاد الحراري ونقص الأكسجين",availableRange:{start:"2002-07-01",end:"2026-04-01"},skipDates:["2022-11-01","2022-12-01","2023-06-01","2023-10-01","2025-12-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-04-01",defaultYearlyRange:{startYear:2012,endYear:2025,month:"08",day:"01"},valueDomain:{min:0,max:32},pairedPowerParam:null,whatItIsEn:"Monthly 4 km Sea Surface Temperature (SST) measures the thermal energy of the top millimeter of ocean water in degrees Celsius.",whatItIsAr:"تقيس هذه الطبقة الشهرية بدقة 4 كم درجة حرارة الطبقة السطحية للمحيطات والبحار بالدرجة المئوية.",whyItMattersEn:"Warmer waters hold less dissolved oxygen, amplify thermal pollution near coastal outflows, accelerate harmful algal blooms, and trigger coral bleaching.",whyItMattersAr:"تحتفظ المياه الأكثر دفئاً بكمية أقل من الأكسجين المذاب، مما يفاقم التلوث الحراري ويسرّع ازدهار الطحالب السامة وابيضاض الشعاب المرجانية.",whatTrendShowsEn:"Warming coastal seas and summer marine heatwaves shift acoustic pitch higher during peak thermal stress months.",whatTrendShowsAr:"توضح الموجات الحرارية البحرية وارتفاع حرارة السواحل صيفاً، حيث ترتفع النغمة الصوتية مع ارتفاع الحرارة.",limitationEn:"Covers oceans and large seas (4 km grid); inland rivers and small lakes are masked out.",limitationAr:"تغطي المحيطات والبحار الكبيرة فقط بدقة 4 كم، ولا تشمل الأنهار أو البحيرات الصغيرة."},{id:"water_turbidity",stageId:"water",gibsLayerId:"MODIS_Aqua_CorrectedReflectance_TrueColor",colormapId:null,legendUrl:null,tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,ext:"jpeg",useLuminance:!0,titleEn:"Ocean Color & Coastal Turbidity Proxy",titleAr:"لون المحيط وعكارة الرواسب الساحلية",provider:"NASA LANCE / EOSDIS Aqua MODIS",variableEn:"Optical Water Reflectance (Luminance)",variableAr:"الانعكاس الضوئي الساحلي (السطوع)",unitEn:"% Luminance",unitAr:"٪ سطوع",isProxy:!0,proxyBadgeEn:"Optical Turbidity Proxy",proxyBadgeAr:"مؤشر بصري للعكارة والرواسب",availableRange:{start:"2002-07-03",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"15"},valueDomain:{min:0,max:100},pairedPowerParam:null,whatItIsEn:"True-color optical satellite imagery from Aqua MODIS reveals murky coastal sediment plumes, muddy river discharge, and green surface blooms directly in natural color. Brightness (luminance) is converted into sound because GIBS does not offer a dedicated multi-decade Kd490 turbidity colormap layer.",whatItIsAr:"صور الألوان الطبيعية الحقيقية من القمر أكوا تُظهر أعمدة الرواسب والطمي المصبوبة من الأنهار والعكارة الساحلية مباشرة، وتُحوّل درجة السطوع الضوئي إلى صوت لعدم توفر طبقة عكارة رقمية طويلة المدى في GIBS.",whyItMattersEn:"Turbid runoff carries suspended soils, microplastics, agricultural nutrients, and pollutants from watersheds into coastal fisheries.",whyItMattersAr:"تحمل أعمدة العكارة والرواسب الساحلية التربة المنجرفة والملوثات والمغذيات الزراعية من الأنهار إلى المناطق البحرية.",whatTrendShowsEn:"Brighter tan/green reflectance along coastlines and deltas produces higher audio pitches than deep clear blue ocean water.",whatTrendShowsAr:"تُنتج المياه العكرة الفاتحة عند الدلتا والسواحل نغمات أعلى مقارنة بالمياه العميقة الصافية الداكنة.",limitationEn:"Visual proxy: clouds also appear bright white and elevate luminance; inspect the map image alongside the sound.",limitationAr:"مؤشر بصري غير معاير رقمياً: السحب البيضاء ترفع السطوع أيضاً، لذا يُنصح بمقارنة النغمة مع الصورة."}]},{id:"soil",stageNumber:3,titleEn:"Stage 3: Soil Pollution (Condition Indicators)",titleAr:"المرحلة 3: تلوث التربة (مؤشرات حالة التربة)",shortEn:"Soil Indicators",shortAr:"مؤشرات التربة",subtitleEn:"Soil moisture (SMAP + POWER), vegetation health (NDVI), and land surface heat stress.",subtitleAr:"رطوبة التربة (SMAP وناسا باور)، وصحة الغطاء النباتي (NDVI)، والإجهاد الحراري لسطح الأرض.",accentColor:"#fbbf24",honestyBannerEn:"Scientific Transparency Note: NASA satellites do not directly measure chemical soil contamination (heavy metals, pesticides, or toxins). These three animations provide physical Soil Condition Indicators—moisture, vegetation vitality, and surface heat—to track land degradation and vulnerability.",honestyBannerAr:"تنويه علمي صادق: لا تقيس أقمار ناسا التلوث الكيميائي المباشر للتربة (كالمعادن الثقيلة أو المبيدات). تُظهر هذه المرحلة مؤشرات حالة التربة الفيزيائية (الرطوبة، صحة النبات، وحرارة السطح) لرصد تدهور الأراضي وإجهادها.",presets:[{id:"zagazig",nameEn:"Zagazig (Nile Delta)",nameAr:"الزقازيق (دلتا النيل)",lat:30.5877,lon:31.502},{id:"central_valley",nameEn:"Central Valley (USA)",nameAr:"الوادي الأوسط (أمريكا)",lat:36.7468,lon:-119.7726},{id:"sahel_mali",nameEn:"Sahel Belt (Mali)",nameAr:"الساحل الأفريقي (مالي)",lat:14.5,lon:-4.2},{id:"amazon_basin",nameEn:"Amazon Basin",nameAr:"حوض الأمازون",lat:-3.4653,lon:-62.2159}],defaultZoom:5,animations:[{id:"soil_moisture",stageId:"soil",gibsLayerId:"SMAP_L4_Analyzed_Surface_Soil_Moisture",colormapId:"SMAP_Analyzed_Soil_Moisture",legendUrl:"https://gibs.earthdata.nasa.gov/legends/SMAP_Analyzed_Soil_Moisture_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Surface Soil Moisture (SMAP + POWER)",titleAr:"رطوبة التربة السطحية (SMAP وناسا باور)",provider:"NASA GSFC GMAO / SMAP L4 & NASA POWER",variableEn:"Volumetric Soil Moisture",variableAr:"رطوبة التربة الحجمية",unitEn:"m³/m³",unitAr:"م³/م³",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2015-03-31",end:"2026-10-15"},skipDates:["2025-10-15","2025-11-15","2026-08-15"],cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2015,endYear:2026,month:"07",day:"15"},valueDomain:{min:.02,max:.6},pairedPowerParam:"GWETTOP",pairedPowerSecondaryParam:"GWETROOT",whatItIsEn:"SMAP Level-4 Surface Soil Moisture tracks the volume of water per volume of soil (m³/m³) in the top 5 cm globally, paired here with NASA POWER GWETTOP (surface wetness 0–5 cm) and GWETROOT (root-zone wetness 0–100 cm).",whatItIsAr:"تقيس طبقة SMAP L4 حجم المياه في أعلى 5 سم من التربة عالمياً (م³/م³)، وتقترن هنا بمعاملات ناسا باور GWETTOP (رطوبة السطح) وGWETROOT (رطوبة منطقة الجذور حتى عمق 100 سم).",whyItMattersEn:"Severe soil drying accelerates desertification and dust erosion, while waterlogging increases agricultural runoff and salinity buildup—key physical stressors on soil ecosystems.",whyItMattersAr:"يؤدي جفاف التربة الشديد إلى التصحر وتآكلها، بينما يسبب التشبع المائي المفرط تملح التربة وجرف المغذيات والملوثات.",whatTrendShowsEn:"Seasonal irrigation, monsoon wetting, and multi-year droughts shift soil moisture levels and pitch across agricultural basins.",whatTrendShowsAr:"تعكس البيانات دورات الري والمواسم المطرية وموجات الجفاف الممتدة في الأحواض الزراعية.",limitationEn:"Soil Condition Indicator only: measures water content (9 km L4 assimilation), not heavy metals, pesticides, or chemical toxicity.",limitationAr:"مؤشر حالة فيزيائية فقط: يقيس المحتوى المائي بدقة ~9 كم ولا يرصد التلوث الكيميائي أو السموم."},{id:"soil_ndvi",stageId:"soil",gibsLayerId:"MODIS_Terra_L3_NDVI_Monthly",colormapId:"MODIS_L3_NDVI",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_L3_NDVI_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,ext:"png",titleEn:"Vegetation Health Index (NDVI)",titleAr:"مؤشر صحة الغطاء النباتي (NDVI)",provider:"NASA LP DAAC / Terra MODIS (L3 Monthly)",variableEn:"Normalized Difference Vegetation Index",variableAr:"مؤشر الغطاء النباتي الطبيعي",unitEn:"NDVI",unitAr:"NDVI",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2000-03-01",end:"2026-10-01"},skipDates:["2025-04-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-10-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:.05,max:.9},pairedPowerParam:null,whatItIsEn:"NDVI (0.0 to 1.0) measures plant chlorophyll greenness and canopy density from Terra MODIS monthly composites. Healthy soils generally sustain denser, greener vegetation.",whatItIsAr:"يقيس مؤشر NDVI (من 0 إلى 1) كثافة وصحة الكلوروفيل النباتي شهرياً عبر القمر تيرا، وتدعم التربة السليمة غطاءً نباتياً أكثر خضرة وكثافة.",whyItMattersEn:"Declining NDVI can signal soil degradation, salinization, deforestation, drought stress, or land-use damage that leaves soil exposed to erosion.",whyItMattersAr:"قد يشير تراجع المؤشر إلى تدهور التربة أو تملحها أو إزالة الغابات أو الإجهاد المائي الذي يعرّض التربة للتعرية.",whatTrendShowsEn:"Green agricultural valleys and forests produce high musical pitches, while barren land or stressed crops drop to lower pitches.",whatTrendShowsAr:"تُنتج الوديان الخضراء والغابات نغمات مرتفعة، بينما تنخفض النغمات في الأراضي القاحلة أو المتدهورة.",limitationEn:"Soil Condition Indicator only: low NDVI cannot distinguish chemical soil toxicity from drought, urban paving, or seasonal harvest.",limitationAr:"مؤشر حالة فيزيائية فقط: انخفاض الغطاء النباتي لا يميز بين التلوث الكيميائي والجفاف أو مواسم الحصاد أو العمران."},{id:"soil_lst",stageId:"soil",gibsLayerId:"MODIS_Terra_L3_Land_Surface_Temp_Monthly_Day",colormapId:"MODIS_Land_Surface_Temp",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",isKelvin:!0,titleEn:"Land Surface Temperature (Soil Heat Stress)",titleAr:"حرارة سطح الأرض (الإجهاد الحراري للتربة)",provider:"NASA LP DAAC / Terra MODIS (L3 Monthly)",variableEn:"Daytime Land Surface Temperature",variableAr:"درجة حرارة سطح الأرض نهاراً",unitEn:"°C",unitAr:"م°",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2000-03-01",end:"2026-10-01"},cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-10-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:0,max:55},pairedPowerParam:"TS",whatItIsEn:"Monthly Daytime Land Surface Temperature measures how hot the bare soil, crops, or urban ground skin actually gets under sunlight (converted from Kelvin to °C), paired with NASA POWER Earth Skin Temperature (TS).",whatItIsAr:"تقيس حرارة سطح الأرض الشهرية نهاراً مدى سخونة التربة المكشوفة أو المحاصيل تحت الشمس (محوَّلة من كلفن إلى مئوية)، وتقترن بمعامل حرارة الجلد الأرضي (TS) من ناسا باور.",whyItMattersEn:"Extreme soil surface temperatures bake organic matter, accelerate moisture loss, stress soil microbes, and intensify urban and agricultural heat islands.",whyItMattersAr:"تُسرّع الحرارة السطحية المفرطة تبخر رطوبة التربة وتضر بالمادة العضوية والكائنات الدقيقة وتفاقم جزر الحرارة.",whatTrendShowsEn:"Summer heating peaks and bare-soil heat islands drive sharp upward climbs in pitch compared to irrigated or vegetated land.",whatTrendShowsAr:"تُظهر ذروات الصيف والأراضي المكشوفة ارتفاعاً واضحاً في النغمة مقارنة بالأراضي المروية والمغطاة بالنبات.",limitationEn:"Soil Condition Indicator only: reflects daytime thermal skin stress rather than chemical soil contaminants.",limitationAr:"مؤشر حالة فيزيائية فقط: يعكس الإجهاد الحراري للسطح نهاراً ولا يقيس الملوثات الكيميائية في التربة."}]}],Xl=$n.flatMap(i=>i.animations);function V0(i,e="monthly"){if(!i)return[];const t=new Set(i.skipDates||[]),n=[];if(e==="yearly"){const{startYear:p,endYear:h,month:g,day:x}=i.defaultYearlyRange;for(let _=p;_<=h;_++){const f=`${_}-${g}-${x}`;f>=i.availableRange.start&&f<=i.availableRange.end&&!t.has(f)&&n.push(f)}return n}const a=i.defaultMonthlyStart.split("-").map(Number),r=i.defaultMonthlyEnd.split("-").map(Number),o=i.cadenceType==="daily_midmonth"?"15":"01";let c=a[0],l=a[1];const d=r[0],u=r[1];for(;c<d||c===d&&l<=u;){const p=l<10?`0${l}`:`${l}`,h=`${c}-${p}-${o}`;h>=i.availableRange.start&&h<=i.availableRange.end&&!t.has(h)&&n.push(h),l++,l>12&&(l=1,c++)}return n}const Lt={T2M:{id:"T2M",nameEn:"Temperature (2m)",nameAr:"درجة الحرارة (ارتفاع 2م)",unitEn:"°C",unitAr:"م°",descriptionEn:"Air temperature at 2 meters above the surface of the earth.",descriptionAr:"درجة حرارة الهواء على ارتفاع مترين فوق سطح الأرض.",color:"#f97316",format:i=>`${i.toFixed(1)}°C`},PRECTOTCORR:{id:"PRECTOTCORR",nameEn:"Precipitation",nameAr:"هطول الأمطار",unitEn:"mm/day",unitAr:"ملم/يوم",descriptionEn:"The bias-corrected average precipitation at the surface.",descriptionAr:"متوسط هطول الأمطار المصحح عند السطح.",color:"#06b6d4",format:i=>`${i.toFixed(2)} mm/day`},RH2M:{id:"RH2M",nameEn:"Relative Humidity",nameAr:"الرطوبة النسبية",unitEn:"%",unitAr:"٪",descriptionEn:"Relative humidity at 2 meters above the surface of the earth.",descriptionAr:"الرطوبة النسبية للهواء على ارتفاع مترين فوق سطح الأرض.",color:"#3b82f6",format:i=>`${i.toFixed(1)}%`},ALLSKY_SFC_SW_DWN:{id:"ALLSKY_SFC_SW_DWN",nameEn:"Solar Radiation",nameAr:"الإشعاع الشمسي",unitEn:"kW-hr/m²/day",unitAr:"ك.و.س/م²/يوم",descriptionEn:"All Sky Surface Shortwave Downward Irradiance.",descriptionAr:"الإشعاع الشمسي قصير الموجة الساقط على السطح لكل سماء.",color:"#eab308",format:i=>`${i.toFixed(2)} kW-hr/m²/day`}},ua=[{id:"zagazig",nameEn:"Zagazig",nameAr:"الزقازيق",countryEn:"Egypt",countryAr:"مصر",lat:30.5877,lon:31.502,region:"Nile Delta"},{id:"alexandria",nameEn:"Alexandria",nameAr:"الإسكندرية",countryEn:"Egypt",countryAr:"مصر",lat:31.2001,lon:29.9187,region:"Mediterranean Coast"},{id:"cairo",nameEn:"Cairo",nameAr:"القاهرة",countryEn:"Egypt",countryAr:"مصر",lat:30.0444,lon:31.2357,region:"Capital Region"},{id:"aswan",nameEn:"Aswan",nameAr:"أسوان",countryEn:"Egypt",countryAr:"مصر",lat:24.0889,lon:32.8998,region:"Upper Egypt"}],ea=1990,Ri=new Date().getFullYear()-1,ur=new Map;function H0(i,e,t,n,a){return`${Number(i).toFixed(4)}_${Number(e).toFixed(4)}_${t}_${n}_${a}`}async function hr(i,e,t,n=ea,a=Ri,r=null){var h,g;const o=H0(i,e,t,n,a);if(ur.has(o))return{points:ur.get(o),fromCache:!0};const c=parseFloat(Number(i).toFixed(4)),l=parseFloat(Number(e).toFixed(4)),d=`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=${t}&community=RE&longitude=${l}&latitude=${c}&start=${n}&end=${a}&format=JSON`,u=new AbortController,p=setTimeout(()=>u.abort(),12e3);if(r){if(r.aborted)throw clearTimeout(p),new DOMException("Aborted","AbortError");r.addEventListener("abort",()=>u.abort())}try{const x=await fetch(d,{signal:u.signal});if(clearTimeout(p),!x.ok)throw new Error(`NASA POWER API HTTP ${x.status}: ${x.statusText||"Request failed"}`);const _=await x.json(),f=(g=(h=_==null?void 0:_.properties)==null?void 0:h.parameter)==null?void 0:g[t];if(!f||Object.keys(f).length===0)throw new Error("No parameter data returned from NASA POWER for this location");const m=[];for(let M=n;M<=a;M++){const y=`${M}13`;let E=f[y];if(E==null||E<=-900){let T=0,S=0;for(let v=1;v<=12;v++){const N=`${M}${v<10?"0"+v:v}`,O=f[N];O!=null&&O>-900&&(T+=O,S++)}if(S>0)E=T/S;else continue}m.push({year:M,value:parseFloat(E.toFixed(2))})}if(m.length<2)throw new Error("Insufficient valid time series observations returned from NASA POWER");return ur.set(o,m),{points:m,fromCache:!1}}catch(x){throw clearTimeout(p),x.name==="AbortError"||console.error(`NASA POWER API request failed for (${c}, ${l}):`,x),x}}const fd={AOD_55:{id:"AOD_55",community:"AG",nameEn:"Aerosol Optical Depth (550nm)",nameAr:"العمق البصري للهباء الجوي (550 نانومتر)",unitEn:"AOD",unitAr:"بلا وحدة",format:i=>`${Number(i).toFixed(3)}`},TO3:{id:"TO3",community:"AG",nameEn:"Total Column Ozone",nameAr:"إجمالي عمود الأوزون",unitEn:"DU",unitAr:"وحدة دوبسون",format:i=>`${Number(i).toFixed(1)} DU`},GWETTOP:{id:"GWETTOP",community:"AG",nameEn:"Surface Soil Wetness (0–5 cm)",nameAr:"رطوبة التربة السطحية (0–5 سم)",unitEn:"0–1",unitAr:"0–1",format:i=>`${Number(i).toFixed(3)}`},GWETROOT:{id:"GWETROOT",community:"AG",nameEn:"Root Zone Soil Wetness (0–100 cm)",nameAr:"رطوبة منطقة الجذور (0–100 سم)",unitEn:"0–1",unitAr:"0–1",format:i=>`${Number(i).toFixed(3)}`},TS:{id:"TS",community:"AG",nameEn:"Earth Skin Temperature",nameAr:"حرارة سطح التربة (الجلد الأرضي)",unitEn:"°C",unitAr:"م°",format:i=>`${Number(i).toFixed(1)}°C`}},fr=new Map;async function ql(i,e,t,n=2e3,a=Ri,r=null){var h,g;const o=parseFloat(Number(i).toFixed(4)),c=parseFloat(Number(e).toFixed(4)),l=`m_${o}_${c}_${t}_${n}_${a}`;if(fr.has(l))return fr.get(l);const d=`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=${t}&community=AG&longitude=${c}&latitude=${o}&start=${n}&end=${a}&format=JSON`,u=new AbortController,p=setTimeout(()=>u.abort(),12e3);if(r){if(r.aborted)throw clearTimeout(p),new DOMException("Aborted","AbortError");r.addEventListener("abort",()=>u.abort())}try{const x=await fetch(d,{signal:u.signal});if(clearTimeout(p),!x.ok)throw new Error(`NASA POWER API HTTP ${x.status}: ${x.statusText||"Request failed"}`);const _=await x.json(),f=(g=(h=_==null?void 0:_.properties)==null?void 0:h.parameter)==null?void 0:g[t];if(!f||Object.keys(f).length===0)throw new Error(`No NASA POWER data returned for ${t} at (${o}, ${c})`);const m={};return Object.entries(f).forEach(([M,y])=>{if(y!=null&&y>-900&&M.length===6){const E=M.slice(0,4),T=M.slice(4,6);T!=="13"&&(m[`${E}-${T}`]=parseFloat(Number(y).toFixed(4)))}}),fr.set(l,m),m}catch(x){throw clearTimeout(p),x.name==="AbortError"||console.error(`NASA POWER monthly request failed for ${t}:`,x),x}}function W0({isOpen:i=!1,onClose:e=()=>{},lang:t="en"}){const n=Rt[t]||Rt.en,a=R.useRef(null);return R.useEffect(()=>{var r;i&&((r=a.current)==null||r.focus())},[i]),i?s.jsx("div",{className:"modal-backdrop",onClick:e,role:"presentation",children:s.jsxs("div",{className:"modal-content modal-about",role:"dialog","aria-modal":"true","aria-labelledby":"about-modal-title",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-row",children:[s.jsx(Ii,{className:"icon-md","aria-hidden":"true"}),s.jsx("h2",{id:"about-modal-title",className:"modal-title",children:n.aboutHeading})]}),s.jsx("button",{ref:a,type:"button",className:"btn-modal-close",onClick:e,"aria-label":n.shortcutClose,children:s.jsx(Ns,{className:"icon","aria-hidden":"true"})})]}),s.jsxs("div",{className:"modal-body about-body",children:[s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx("span",{className:"section-bullet",children:"🌍"}),s.jsx("span",{children:t==="ar"?"رسالة المشروع":"Project Mission"})]}),s.jsx("p",{className:"about-text",children:n.aboutMission})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(Ms,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:n.howSonificationWorks})]}),s.jsx("p",{className:"about-text",children:n.sonificationExplanation}),s.jsxs("div",{className:"pixel-method-box",children:[s.jsx("h4",{className:"method-subtitle",children:t==="ar"?"آلية تحويل بكسل القمر الصناعي إلى نغمة صوتية:":"Satellite Pixel-to-Sound Conversion Methodology:"}),s.jsxs("ol",{className:"method-steps-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"1. استخراج البكسل:":"1. Pixel Extraction:"})," ",t==="ar"?'يتم إسقاط إحداثيات الموقع (خط العرض والطول) إلى إحداثيات البلاطة الفضائية (Tile coordinates) ورسمها على عنصر Canvas مخفي باستخدام خاصية crossOrigin="anonymous".':'The geographic coordinates (lat, lon) are projected to the Web Mercator tile index (z, y, x) and pixel offset (px, py). The tile is drawn on an offscreen HTML5 canvas using crossOrigin="anonymous".']}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"2. مطابقة خريطة الألوان:":"2. Colormap Nearest-Color Lookup:"})," ",t==="ar"?"تتم قراءة قيمة RGB ومطابقتها بأقرب لون في خريطة ألوان وكالة ناسا الرسمية (NASA GIBS Colormap XML v1.3) لحساب القيمة الفيزيائية الحقيقية.":"The RGB values are matched against NASA GIBS calibrated Colormap XML v1.3 entries using Euclidean color distance in RGB space to recover the physical variable (converting Kelvin to °C where needed)."]}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"3. بديل السطوع (Luminance):":"3. Luminance Fallback:"})," ",t==="ar"?"في طبقات الألوان الحقيقية (مثل مؤشر عكارة المياه الساحلية)، يتم حساب السطوع الفيزيائي (Y = 0.299R + 0.587G + 0.114B).":"For True Color optical imagery (e.g., coastal turbidity proxy), perceived luminance (Y = 0.299R + 0.587G + 0.114B) is computed directly."]}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"4. التحويل النغمي الخماسي:":"4. Dynamic Pentatonic Normalization:"})," ",t==="ar"?"تتم معايرة القيمة ديناميكياً (القيمة الأعلى = نغمة أعلى) وتحويلها إلى السلم الخماسي (C3 إلى C6) عبر Web Audio API مع مقارنة ستيريو مجسمة ونغمات الأرقام القياسية.":"Values are dynamically normalized across the frame series (higher value = higher pitch) onto a pentatonic scale (C3 ~131 Hz to C6 ~1047 Hz) via Web Audio API, with stereo left/right compare and record chimes."]})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(hi,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"مصادر بيانات مراحل التلوث (9 طبقات موثقة من NASA GIBS)":"Pollution Stages Datasets (9 Verified NASA GIBS Layers)"})]}),$n.map(r=>s.jsxs("div",{className:"about-stage-block",children:[s.jsx("h4",{className:"about-stage-subtitle",children:t==="ar"?r.titleAr:r.titleEn}),s.jsx("ul",{className:"about-gibs-list",children:r.animations.map(o=>s.jsxs("li",{className:"gibs-list-item",children:[s.jsxs("div",{className:"gibs-item-name",children:[t==="ar"?o.titleAr:o.titleEn," ",s.jsxs("span",{className:"about-range-pill",children:["(",o.availableRange.start," → ",o.availableRange.end,")"]})]}),s.jsxs("code",{className:"gibs-item-id",children:["GIBS ID: ",o.gibsLayerId," | ",o.provider," | Unit: ",o.unitEn,o.pairedPowerParam?` | POWER: ${o.pairedPowerParam}${o.pairedPowerSecondaryParam?`, ${o.pairedPowerSecondaryParam}`:""}`:""]}),s.jsx("div",{className:"gibs-item-desc",children:t==="ar"?o.limitationAr:o.limitationEn})]},o.id))})]},r.id))]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(Eo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"وضع الحرارة والمناخ (NASA POWER و GIBS)":"Temperature Mode Sources (NASA POWER & GIBS)"})]}),s.jsx("ul",{className:"about-gibs-list",children:Wn.map(r=>s.jsxs("li",{className:"gibs-list-item",children:[s.jsxs("div",{className:"gibs-item-name",children:[r.nameEn," (",r.nameAr,")"]}),s.jsxs("code",{className:"gibs-item-id",children:["Layer ID: ",r.id," | Start: ",r.startDate]}),s.jsx("div",{className:"gibs-item-desc",children:r.descriptionEn})]},r.id))}),s.jsxs("p",{className:"about-text",style:{marginTop:"0.6rem"},children:[s.jsx("strong",{children:"NASA POWER Parameters (1990–2025):"})," ",[...Object.values(Lt),...Object.values(fd)].map(r=>`${r.id} (${r.unitEn})`).join(", "),"."]}),s.jsxs("div",{className:"links-row",children:[s.jsxs("a",{href:"https://gibs.earthdata.nasa.gov/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA GIBS Earthdata Portal"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://power.larc.nasa.gov/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA POWER Data Portal"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(ia,{className:"icon-sm text-cyan","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"مركز معلومات الأرض ومرصد ناسا للتصور العلمي (NASA EIC & SVS)":"NASA Earth Information Center & Scientific Visualization Studio"})]}),s.jsx("p",{className:"about-text",children:t==="ar"?"تم إثراء أقسام الموقع (الهواء، الماء، التربة، والحرارة) بمحاكيات وبيانات مركز معلومات الأرض التابع لوكالة ناسا (NASA EIC) عبر منصة SVS:":"Enriched throughout Terra-Tone tabs with NASA Earth Information Center (EIC) supercomputer visualizations and scientific data:"}),s.jsxs("ul",{className:"about-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5276 (Change in Night Lights 2012–2023):"})," NASA Black Marble VIIRS calibrated nighttime radiance tracking decadal electrification and urban expansion."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #30910 (GEOS Aerosols 2017 Hurricane Season):"})," NASA GMAO ultra-high resolution GEOS forward processing simulating long-range smoke, dust, and sea salt transport."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #3912 / #5425 (Perpetual Ocean & Western Boundary Currents):"})," NASA JPL ECCO-2 ocean circulation model resolving thermal advection and surface velocity fields."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5196 (DYAMOND Atmospheric Carbon Dioxide):"})," NASA GMAO 3km global atmospheric simulation tracking synoptic weather advection of CO₂ plumes."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #4960 (3D View of an Atmospheric River):"})," NASA MERRA-2 and GPM IMERG 3D atmospheric moisture transport driving extreme coastal rainfall and soil saturation."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5064 (Daily Antarctic Sea Ice Extent):"})," Satellite passive microwave radiometers (SSMIS & AMSR-2) recording annual freeze-thaw cryospheric pulsation."]})]}),s.jsxs("div",{className:"links-row",children:[s.jsxs("a",{href:"https://www.nasa.gov/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA Earth Information Center"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://svs.gsfc.nasa.gov/gallery/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA SVS EIC Gallery"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(As,{className:"icon-sm text-gold","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"الحدود العلمية والمؤشرات البديلة":"Scientific Limitations, Proxies & Gaps"})]}),s.jsxs("ul",{className:"about-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"PM2.5 Proxy (AOD):"})," Total atmospheric column Aerosol Optical Depth (~50 km MERRA-2) correlates with particulate haze but is not direct breathing-height PM2.5 µg/m³."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Coastal Turbidity Proxy:"})," True-color optical reflectance brightness detects river plumes and sediment but white clouds also raise brightness."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Soil Condition Indicators (Stage 3):"})," NASA satellites do not measure heavy metals, pesticides, or chemical soil toxicity. SMAP moisture, NDVI, and LST measure physical soil stress indicators only."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Spatial Resolution & Gaps:"})," Coarse grids (4–50 km) do not resolve narrow rivers or street blocks; optical sensors (Chlorophyll-a, NDVI, True Color) can have cloud/orbital gaps on individual dates."]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx($d,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"معايير إمكانية الوصول الشامل (Accessibility)":"Accessibility Standards"})]}),s.jsxs("ul",{className:"about-list",children:[s.jsx("li",{children:t==="ar"?"تحكم كامل عبر لوحة المفاتيح دون تعطيل أزرار النموذج":"100% Keyboard Operable with native form/button behaviors preserved"}),s.jsx("li",{children:t==="ar"?"إعلانات ذكية لقارئات الشاشة (aria-live) مع خيار التحكم بالنطق أثناء التشغيل":"Smart aria-live region with configurable speech during playback toggle"}),s.jsx("li",{children:t==="ar"?"وضع التباين العالي الفائق متوافق مع معايير WCAG AAA":"High-contrast mode compliant with WCAG AAA contrast ratios (> 7:1)"}),s.jsx("li",{children:t==="ar"?"وضع تكبير الخطوط والرموز ويدعم شاشات 360px":"Large text mode, RTL Arabic support, reduced-motion compliance, and 360px mobile layout"}),s.jsx("li",{children:t==="ar"?"جدول بيانات نصي كبديل مباشر للمخطط البياني مع تصدير CSV و JSON":"Semantic HTML data table alternative with CSV, JSON, PNG ZIP, and WebM export"})]})]})]}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{type:"button",className:"btn-primary",onClick:e,children:n.shortcutClose})})]})}):null}const $0=({isOpen:i=!1,onClose:e=()=>{},lang:t="en",theme:n="dark"})=>(R.useEffect(()=>{const a=r=>{r.key==="Escape"&&i&&e()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[i,e]),i?s.jsx("div",{className:"eic-modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"eic-modal-title",children:s.jsxs("div",{className:"eic-modal-container",children:[s.jsxs("div",{className:"eic-modal-header",children:[s.jsxs("div",{className:"eic-modal-title-box",children:[s.jsxs("div",{className:"eic-badge-pill",children:[s.jsx(ei,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:"OFFICIAL NASA SVS & EIC SHOWCASE"})]}),s.jsx("h2",{id:"eic-modal-title",className:"eic-modal-heading",children:t==="ar"?"مركز معلومات الأرض — تجربة الاستكشاف المرئي والبياني":"NASA Earth Information Center — Visual & Graph Experience"})]}),s.jsx("button",{type:"button",className:"eic-modal-close-btn",onClick:e,"aria-label":t==="ar"?"إغلاق المعرض":"Close Exhibition",title:t==="ar"?"إغلاق (Esc)":"Close (Esc)",children:s.jsx(Ns,{className:"icon-sm"})})]}),s.jsx("div",{className:"eic-modal-body",children:s.jsx(B0,{lang:t,theme:n})})]})}):null);function Yl(i,e,t){const n=Math.pow(2,t),a=Math.max(-85.0511,Math.min(85.0511,i)),r=(e+180)/360*n,o=a*Math.PI/180,c=(1-Math.log(Math.tan(o)+1/Math.cos(o))/Math.PI)/2*n;return{x:r,y:c}}function X0(i,e){const t=Math.max(.5,Math.abs((i.east??40)-(i.west??20))),n=Math.round(Math.log2(360*2.5/t));return Math.max(1,Math.min(e||6,n))}function jo(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(t),1500)}async function pd(i,e,t,n={}){const a=n.width||768,r=n.height||512,o=n.opacity??.85,c=n.lang||"en",l=n.locationA||null,d=n.locationB||null,u=!!n.isCompareMode,p=n.sampleA||null,h=n.sampleB||null,g=n.targetCanvas||document.createElement("canvas");g.width=a,g.height=r;const x=g.getContext("2d");x.fillStyle="#070a13",x.fillRect(0,0,a,r);const _=t||{west:((l==null?void 0:l.lon)??31.2)-18,east:((l==null?void 0:l.lon)??31.2)+18,south:((l==null?void 0:l.lat)??30)-12,north:((l==null?void 0:l.lat)??30)+12},f=X0(_,i.maxNativeZoom),m=Math.pow(2,f),M=(_.north+_.south)/2,y=(_.east+_.west)/2,E=Yl(M,y,f),T=E.x*256,S=E.y*256,v=T-a/2,N=T+a/2,O=S-r/2,C=S+r/2,D=Math.floor(v/256),F=Math.floor(N/256),q=Math.max(0,Math.floor(O/256)),I=Math.min(m-1,Math.floor(C/256)),V=[];for(let X=q;X<=I;X++)for(let me=D;me<=F;me++){const ge=(me%m+m)%m;V.push({tx:me,wrappedTx:ge,ty:X})}const Q=V.map(async({tx:X,wrappedTx:me,ty:ge})=>{const he=`https://a.basemaps.cartocdn.com/dark_all/${f}/${me}/${ge}.png`,K=sn(i,e,f,ge,me),[Re,Oe]=await Promise.all([xs(he),xs(K)]);return{tx:X,ty:ge,baseRes:Re,gibsRes:Oe}}),j=await Promise.all(Q);for(const X of j){const me=Math.round(X.tx*256-v),ge=Math.round(X.ty*256-O);X.baseRes.ok&&X.baseRes.img&&x.drawImage(X.baseRes.img,me,ge,256,256)}x.save(),x.globalAlpha=o;for(const X of j){const me=Math.round(X.tx*256-v),ge=Math.round(X.ty*256-O);X.gibsRes.ok&&X.gibsRes.img&&x.drawImage(X.gibsRes.img,me,ge,256,256)}x.restore();const oe=(X,me,ge)=>{if(!X)return;const he=Yl(X.lat,X.lon,f),K=he.x*256-v,Re=he.y*256-O;if(K<-20||K>a+20||Re<-20||Re>r+20)return;x.save(),x.strokeStyle=me,x.lineWidth=2.5,x.beginPath(),x.arc(K,Re,10,0,Math.PI*2),x.stroke(),x.fillStyle=me,x.beginPath(),x.arc(K,Re,4,0,Math.PI*2),x.fill(),x.font="bold 12px Inter, sans-serif";const Oe=ge?`${ge}: ${X.nameEn}`:X.nameEn,Ee=x.measureText(Oe).width;x.fillStyle="rgba(7, 10, 19, 0.85)",x.fillRect(K+12,Re-11,Ee+10,20),x.strokeStyle=me,x.lineWidth=1,x.strokeRect(K+12,Re-11,Ee+10,20),x.fillStyle="#f8fafc",x.fillText(Oe,K+17,Re+3),x.restore()};oe(l,"#38bdf8",u?"A":""),u&&d&&oe(d,"#f97316","B"),x.save(),x.fillStyle="rgba(7, 10, 19, 0.86)",x.fillRect(0,0,a,44),x.fillStyle="#38bdf8",x.fillRect(0,42,a,2),x.fillStyle="#f8fafc",x.font="bold 15px Inter, sans-serif";const W=i.titleEn;x.fillText(W,14,27);const te=i.proxyBadgeEn||"";if(te){x.font="bold 11px Inter, sans-serif";const X=x.measureText(te).width+16;x.fillStyle=i.isProxy?"rgba(251, 191, 36, 0.2)":"rgba(56, 189, 248, 0.2)",x.fillRect(a-X-14,10,X,24),x.strokeStyle=i.isProxy?"#fbbf24":"#38bdf8",x.lineWidth=1,x.strokeRect(a-X-14,10,X,24),x.fillStyle=i.isProxy?"#fbbf24":"#38bdf8",x.fillText(te,a-X-6,26)}x.fillStyle="rgba(7, 10, 19, 0.88)",x.fillRect(0,r-42,a,42),x.fillStyle="#fbbf24",x.font='bold 16px "JetBrains Mono", monospace',x.fillText(`DATE: ${e}`,14,r-15);let ie="Sample: —";p&&p.value!==null&&!isNaN(p.value)&&(ie=`A: ${p.label}`),u&&h&&h.value!==null&&!isNaN(h.value)&&(ie+=`  |  B: ${h.label}`),x.fillStyle="#f8fafc",x.font='600 13px "JetBrains Mono", monospace',x.fillText(ie,210,r-15),x.fillStyle="#94a3b8",x.font="11px Inter, sans-serif";const Se="NASA EOSDIS GIBS",Ue=x.measureText(Se).width;return x.fillText(Se,a-Ue-14,r-16),x.restore(),g}async function q0(i,e,t,n={},a={},r={},o=()=>{}){if(!i||!e||e.length===0)throw new Error("No animation frames available to export.");const c=new xd,l=c.folder(`${i.id}_frames`),d=document.createElement("canvas"),u=[];for(let g=0;g<e.length;g++){const x=e[g];o({current:g+1,total:e.length,date:x});const _=n[x]||null,f=a[x]||null;await pd(i,x,t,{...r,targetCanvas:d,sampleA:_,sampleB:f});const m=await new Promise((E,T)=>{d.toBlob(S=>{S?E(S):T(new Error(`Failed to encode PNG for frame ${x}`))},"image/png")}),y=`frame_${String(g+1).padStart(3,"0")}_${x}.png`;l.file(y,m),u.push({index:g,fileName:y,date:x,valueA:(_==null?void 0:_.value)??null,labelA:(_==null?void 0:_.label)??null,valueB:r.isCompareMode?(f==null?void 0:f.value)??null:null,labelB:r.isCompareMode?(f==null?void 0:f.label)??null:null})}const p={app:"Earth Jukebox — Pollution Stages Export",animationId:i.id,stageId:i.stageId,title:i.titleEn,gibsLayerId:i.gibsLayerId,provider:i.provider,variable:i.variableEn,unit:i.unitEn,isProxy:i.isProxy,limitation:i.limitationEn,availableRange:i.availableRange,locationA:r.locationA||null,locationB:r.isCompareMode?r.locationB:null,frames:u};l.file("frames_metadata.json",JSON.stringify(p,null,2));const h=await c.generateAsync({type:"blob"});jo(h,`${i.id}_satellite_frames.zip`)}async function Y0(i,e,t,n={},a={},r={},o=()=>{}){if(!i||!e||e.length===0)throw new Error("No animation frames available to record.");if(typeof MediaRecorder>"u")throw new Error("WebM video capture (MediaRecorder API) is not supported in this browser.");const l=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(f=>MediaRecorder.isTypeSupported(f))||"";if(!l)throw new Error("No supported WebM codec found in this browser.");const d=document.createElement("canvas");if(d.width=r.width||768,d.height=r.height||512,typeof d.captureStream!="function")throw new Error("Canvas captureStream() is not supported in this browser.");const u=d.captureStream(12),p=new MediaRecorder(u,{mimeType:l,videoBitsPerSecond:25e5}),h=[];p.ondataavailable=f=>{f.data&&f.data.size>0&&h.push(f.data)};const g=new Promise((f,m)=>{p.onstop=()=>{const M=new Blob(h,{type:l});f(M)},p.onerror=M=>{m((M==null?void 0:M.error)||new Error("MediaRecorder failed during capture."))}});p.start(200);const x=r.frameHoldMs||380;for(let f=0;f<e.length;f++){const m=e[f];o({current:f+1,total:e.length,date:m}),await pd(i,m,t,{...r,targetCanvas:d,sampleA:n[m]||null,sampleB:a[m]||null}),await new Promise(M=>setTimeout(M,x))}p.stop();const _=await g;jo(_,`${i.id}_timelapse.webm`)}function Z0(i,e,t,n,a,r={},o={},c=null){if(!i||!e||e.length===0)throw new Error("No frame data available to export.");const l={exportedAt:new Date().toISOString(),source:"Earth Jukebox — NASA GIBS & NASA POWER",stageId:i.stageId,animationId:i.id,titleEn:i.titleEn,titleAr:i.titleAr,gibsLayerId:i.gibsLayerId,colormapId:i.colormapId,provider:i.provider,variableEn:i.variableEn,unit:i.unitEn,isProxy:i.isProxy,proxyBadge:i.proxyBadgeEn,limitationEn:i.limitationEn,availableRange:i.availableRange,locationA:t?{name:t.nameEn,lat:t.lat,lon:t.lon}:null,locationB:a&&n?{name:n.nameEn,lat:n.lat,lon:n.lon}:null,pairedPowerParam:i.pairedPowerParam||null,pairedPowerSecondaryParam:i.pairedPowerSecondaryParam||null,powerMonthlySeries:c||null,frames:e.map((u,p)=>{const h=r[u]||null,g=a&&o[u]||null;return{index:p,date:u,locationA:h?{value:h.value,label:h.label,rgb:h.r!==void 0?[h.r,h.g,h.b]:null,isLuminance:!!h.isLuminance,missingOrCloud:!!(h.missingTile||h.emptyPixel)}:null,locationB:g?{value:g.value,label:g.label,rgb:g.r!==void 0?[g.r,g.g,g.b]:null,isLuminance:!!g.isLuminance,missingOrCloud:!!(g.missingTile||g.emptyPixel)}:null}})},d=new Blob([JSON.stringify(l,null,2)],{type:"application/json"});jo(d,`${i.id}_frames_data.json`)}const K0={electric_bell:Jd,aerosol_wind:Ts,ocean_flow:Ao,carbon_pulse:ei,rain_marimba:tc,ice_crystal:fc},J0=({resource:i,currentValue:e,isAudioEnabled:t=!0,onToggleAudio:n,audioVolume:a=.7,onChangeVolume:r,onPlayTestTone:o,isPlayingTone:c=!1,lang:l="en"})=>{const d=ko[i.id]||{instrument:"electric_bell",nameEn:"Electric Bell Chime",nameAr:"رنين الجرس الكهربائي",conceptEn:"Scientific Radiance",conceptAr:"الإشعاع العلمي",iconColor:"#38bdf8"},{percentage:u,frequency:p,noteName:h}=Fi(i,e),g=K0[d.instrument]||Yn,x=u<=33,_=u>33&&u<=66,f=x?"Low Tone (Bass Register)":_?"Medium Tone (Mid Register)":"High Tone (Treble Register)",m=x?"نغمة منخفضة (تردد عميق)":_?"نغمة معتدلة (تردد متوسط)":"نغمة مرتفعة (تردد حاد)",M=x?"tone-register-low":_?"tone-register-mid":"tone-register-high";return s.jsxs("div",{className:`eic-sonification-bar ${c?"tone-pulse-active":""}`,"aria-label":"NASA Scientific Sonification & Tones Bar",children:[s.jsxs("div",{className:"eic-audio-instrument-col",children:[s.jsx("div",{className:"eic-instrument-icon-box",style:{borderColor:d.iconColor,color:d.iconColor},children:s.jsx(g,{className:"icon-sm","aria-hidden":"true"})}),s.jsxs("div",{className:"eic-instrument-info",children:[s.jsx("div",{className:"eic-instrument-header",children:s.jsx("span",{className:"eic-instrument-tag",children:l==="ar"?"الآلة الصوتية المخصصة للمحاكاة":"Dedicated Visual Timbre"})}),s.jsx("h4",{className:"eic-instrument-name",children:l==="ar"?d.nameAr:d.nameEn}),s.jsx("p",{className:"eic-instrument-concept",children:l==="ar"?d.conceptAr:d.conceptEn})]})]}),s.jsxs("div",{className:"eic-audio-pitch-col",children:[s.jsxs("div",{className:"eic-pitch-meta-row",children:[s.jsxs("div",{className:"eic-pitch-stat",children:[s.jsx("span",{className:"stat-label",children:l==="ar"?"النسبة المئوية للظاهرة":"Intensity Percentage"}),s.jsxs("span",{className:"stat-value highlight-num",children:[u,"%"]})]}),s.jsxs("div",{className:`eic-register-pill ${M}`,children:[s.jsx(Ss,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:l==="ar"?m:f})]}),s.jsxs("div",{className:"eic-pitch-stat",children:[s.jsx("span",{className:"stat-label",children:l==="ar"?"النغمة والتردد":"Musical Note & Frequency"}),s.jsxs("span",{className:"stat-value note-badge",children:[s.jsx("strong",{children:h})," • ",Math.round(p)," Hz"]})]})]}),s.jsxs("div",{className:"eic-pitch-gauge-wrap",children:[s.jsxs("div",{className:"eic-gauge-labels",children:[s.jsx("span",{className:"label-low",children:l==="ar"?"0% نغمة منخفضة (C3)":"0% Low Tone (C3)"}),s.jsx("span",{className:"label-mid",children:l==="ar"?"50% معتدل (G4)":"50% Mid (G4)"}),s.jsx("span",{className:"label-high",children:l==="ar"?"100% نغمة مرتفعة (C6)":"100% High Tone (C6)"})]}),s.jsxs("div",{className:"eic-pitch-gauge-track",children:[s.jsx("div",{className:`eic-pitch-gauge-fill ${M}`,style:{width:`${u}%`}}),s.jsx("div",{className:`eic-pitch-gauge-thumb ${c?"ping":""}`,style:{left:`${u}%`}})]})]})]}),s.jsxs("div",{className:"eic-audio-controls-col",children:[s.jsxs("button",{type:"button",className:"btn-eic-test-tone",onClick:o,title:l==="ar"?"استمع للنغمة الحالية عند هذه النسبة المئوية":"Audition tone for current percentage","aria-label":l==="ar"?"استمع للنغمة الحالية":"Audition current tone",children:[s.jsx(Yn,{className:"icon-xs"}),s.jsx("span",{children:l==="ar"?"تجربة النغمة":"Test Tone"})]}),s.jsx("button",{type:"button",className:`btn-eic-sound-toggle ${t?"sound-active":"sound-muted"}`,onClick:n,title:t?l==="ar"?"كتم النغمات الصوتية أثناء الفيديو":"Mute visual sonification tones":l==="ar"?"تفعيل النغمات الصوتية أثناء الفيديو":"Enable visual sonification tones","aria-pressed":t,"aria-label":t?l==="ar"?"كتم الصوت":"Mute sonification":l==="ar"?"تشغيل الصوت":"Unmute sonification",children:t?s.jsx(rn,{className:"icon-sm"}):s.jsx(Zn,{className:"icon-sm"})}),s.jsxs("div",{className:"eic-volume-slider-group",children:[s.jsx("input",{type:"range",min:0,max:1,step:.05,value:t?a:0,onChange:y=>{const E=parseFloat(y.target.value);r(E),E>0&&!t&&n()},className:"eic-volume-slider","aria-label":l==="ar"?"مستوى صوت النغمات الصوتية":"Visual sonification volume"}),s.jsx("span",{className:"eic-volume-text",children:t?`${Math.round(a*100)}%`:"0%"})]})]})]})};function Q0({stageId:i="air",selectedAnimation:e=null,lang:t="en",theme:n="dark"}){var me,ge,he;const a=(e==null?void 0:e.id)||i,r=I0(i),o=$l(i,a),[c,l]=R.useState(o.id),[d,u]=R.useState(0),[p,h]=R.useState(!1),[g,x]=R.useState(1),[_,f]=R.useState(!0),[m,M]=R.useState(!1),[y,E]=R.useState(!0),[T,S]=R.useState(.7),[v,N]=R.useState(!1),O=R.useRef(null),C=R.useRef(y),D=R.useRef(T),F=R.useRef(0),q=R.useRef(null);R.useEffect(()=>{C.current=y},[y]),R.useEffect(()=>{D.current=T},[T]),R.useEffect(()=>{const K=$l(i,a);K&&K.id!==c&&(l(K.id),u(0),h(!1),F.current=0)},[i,a]);const I=yt.find(K=>K.id===c)||o,V=gs[a]||gs[i]||null,Q=R.useMemo(()=>Xt.getInterpolatedValuesAtTime(I,d),[I,d]),j=(ge=(me=I.graphConfig)==null?void 0:me.series)==null?void 0:ge[0],oe=j?(he=Q[j.key])==null?void 0:he.currentValue:null,W=R.useMemo(()=>typeof oe!="number"?null:Fi(I,oe),[I,oe]),te=R.useCallback((K,Re=!1)=>{var ve,Ae,Ge,$e;if(!C.current&&!Re)return;const Oe=Xt.getInterpolatedValuesAtTime(I,K),Ee=(Ge=(Ae=(ve=I.graphConfig)==null?void 0:ve.series)==null?void 0:Ae[0])==null?void 0:Ge.key,Ce=Ee?($e=Oe[Ee])==null?void 0:$e.currentValue:null;typeof Ce=="number"&&(da(I,Ce,D.current),N(!0),q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{N(!1)},280))},[I]),ie=R.useCallback(K=>{if(O.current=K,!K)return;const Re=()=>{const ve=K.currentTime||0;u(ve),!K.paused&&C.current&&(Math.abs(ve-F.current)>=.4||ve<F.current)&&(F.current=ve,te(ve))},Oe=()=>h(!0),Ee=()=>h(!1),Ce=()=>{_?(K.currentTime=0,F.current=0,K.play().catch(()=>{})):h(!1)};return K.addEventListener("timeupdate",Re),K.addEventListener("play",Oe),K.addEventListener("pause",Ee),K.addEventListener("ended",Ce),K.playbackRate=g,()=>{K.removeEventListener("timeupdate",Re),K.removeEventListener("play",Oe),K.removeEventListener("pause",Ee),K.removeEventListener("ended",Ce)}},[_,g,te]),Se=R.useCallback(()=>{const K=O.current;K&&(K.paused?K.play().catch(()=>{}):K.pause())},[]),Ue=R.useCallback(K=>{u(K),O.current&&(O.current.currentTime=K),F.current=K,te(K,!0)},[te]),X=R.useCallback(K=>{x(K),O.current&&(O.current.playbackRate=K)},[]);return s.jsxs("section",{className:"card eic-integrated-card","aria-labelledby":"eic-section-heading",children:[s.jsxs("div",{className:"card-header eic-card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(ia,{className:"section-icon text-cyan","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag",children:[s.jsx(ei,{className:"icon-xs","aria-hidden":"true"}),"NASA EARTH INFORMATION CENTER"]}),V&&s.jsxs("span",{className:"eic-connection-pill",children:[s.jsx(Fd,{className:"icon-xs","aria-hidden":"true"}),t==="ar"?V.tagAr:V.tagEn]})]}),s.jsx("h2",{id:"eic-section-heading",className:"card-title",children:t==="ar"?I.titleAr:I.titleEn}),s.jsxs("p",{className:"card-sub",children:[I.dataProvider," â€¢ SVS #",I.svsId]})]})]}),r.length>1&&s.jsx("div",{className:"eic-switcher-group",role:"tablist","aria-label":"Available EIC Showcases",children:r.map(K=>{const Re=K.id===I.id;return s.jsx("button",{type:"button",role:"tab","aria-selected":Re,className:`eic-switcher-tab ${Re?"active":""}`,onClick:()=>{l(K.id),u(0),h(!1),F.current=0,O.current&&(O.current.currentTime=0),te(0,!0)},children:s.jsx("span",{children:t==="ar"?K.titleAr:K.titleEn})},K.id)})})]}),V&&s.jsx("div",{className:"eic-connection-banner",role:"note",children:s.jsxs("p",{className:"eic-connection-text",children:[s.jsx("strong",{children:t==="ar"?"الصلة بالبيانات المعروضة: ":"Scientific Corroboration: "}),t==="ar"?V.noteAr:V.noteEn]})}),s.jsx(J0,{resource:I,currentValue:oe,isAudioEnabled:y,onToggleAudio:()=>E(K=>!K),audioVolume:T,onChangeVolume:S,onPlayTestTone:()=>te(d,!0),isPlayingTone:v,lang:t}),s.jsxs("div",{className:"eic-main-experience-grid",children:[s.jsx("div",{className:"eic-column-left",children:s.jsx(Bo,{resource:I,currentTime:d,isPlaying:p,playbackSpeed:g,onTogglePlay:Se,onVideoAttach:ie,isAudioEnabled:y,onToggleAudio:()=>E(K=>!K),currentToneInfo:W,isPlayingTone:v,lang:t})}),s.jsx("div",{className:"eic-column-right",children:s.jsx(Go,{resource:I,currentTime:d,onSeek:Ue,lang:t,theme:n})})]}),s.jsx("div",{className:"eic-integrated-timeline-wrap",children:s.jsx(ud,{resource:I,currentTime:d,isPlaying:p,playbackSpeed:g,isLooping:_,onTogglePlay:Se,onSeek:Ue,onChangeSpeed:X,onToggleLoop:()=>f(K=>!K),isAudioEnabled:y,onToggleAudio:()=>E(K=>!K),audioVolume:T,onChangeVolume:S,lang:t})}),s.jsx("div",{className:"eic-meta-toggle-row",children:s.jsxs("button",{type:"button",className:"btn-eic-meta-toggle",onClick:()=>M(K=>!K),"aria-expanded":m,children:[s.jsx(rc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:m?t==="ar"?"Ø¥Ø®Ù Ø§Ø¡ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø©":"Hide Scientific Documentation & Instrument Details":t==="ar"?"Ø¹Ø±Ø¶ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© (NASA Attribution)":"View Scientific Documentation & Instrument Details (NASA Attribution)"}),m?s.jsx(bs,{className:"icon-xs"}):s.jsx(ys,{className:"icon-xs"})]})}),m&&s.jsx("div",{className:"eic-metadata-drawer animate-fade-in",children:s.jsx(zo,{resource:I,lang:t})})]})}ho.register(fo,po,mo,go,xo,vo,_o,So);const ex={air:Ts,water:Ao,soil:Xd};function tx({lang:i="en",theme:e="dark",pollution:t,pollutionState:n,locationA:a,onSelectLocationA:r,locationB:o,onSelectLocationB:c,isCompareMode:l,onToggleCompareMode:d,volume:u,onChangeVolume:p,isMuted:h,onToggleMute:g,instrument:x,onChangeInstrument:_,quantizeScale:f,onToggleQuantizeScale:m,onAnnounce:M}){var ji,Vi,Pn,ba,Hi,Wi,Ma,Ea,Aa;const y=Rt[i]||Rt.en,E=t||n||{},{selectedStage:T=POLLUTION_STAGES[0],selectedAnimation:S=(ji=POLLUTION_STAGES[0])==null?void 0:ji.animations[0],selectAnimation:v,cadence:N,setCadence:O,dates:C=[],currentIndex:D=0,currentDate:F="",setFrameIndex:q,isPlaying:I=!1,togglePlay:V,stepForward:Q,stepBackward:j,playbackSpeed:oe=1,setPlaybackSpeed:W,isLooping:te=!0,setIsLooping:ie,gibsOpacity:Se=.85,setGibsOpacity:Ue,colormapData:X,colormapLoading:me=!1,samplingLoading:ge=!1,powerData:he,samplesByDateA:K={},samplesByDateB:Re={},seriesA:Oe=[],seriesB:Ee=[],statsA:Ce=null,pitchMappingText:ve="",playSinglePixelValue:Ae,isScanning:Ge=!1,scanProgress:$e=null,startFrameScan:be,error:je=null,retry:tt}=E,[Te,it]=R.useState("eic"),[st,Je]=R.useState(!1),[k,dt]=R.useState(!1),[Ye,qe]=R.useState("A"),[ye,ht]=R.useState(!1),[Fe,He]=R.useState(null),[w,A]=R.useState(!1),[U,re]=R.useState(null),[J,ue]=R.useState(0),[pe,ee]=R.useState(!1),G=typeof window<"u"&&"speechSynthesis"in window,[Y,P]=R.useState({active:null,progress:null,error:null,successMsg:null}),Z=R.useRef(null),H=R.useRef(null),de=R.useRef(null),se=R.useRef(null),xe=R.useRef(null),we=R.useRef(null),ze=R.useRef(null),le=K[F]||U||((Vi=Oe[D])==null?void 0:Vi.sample)||null,Le=l&&(Re[F]||((Pn=Ee[D])==null?void 0:Pn.sample))||null;R.useEffect(()=>{var $,fe;if(!Z.current||H.current)return;const ae=(a==null?void 0:a.lat)??(($=T.presets[0])==null?void 0:$.lat)??30.0444,b=(a==null?void 0:a.lon)??((fe=T.presets[0])==null?void 0:fe.lon)??31.2357,L=jt.map(Z.current,{center:[ae,b],zoom:T.defaultZoom||4,minZoom:2,maxZoom:12,scrollWheelZoom:!0,attributionControl:!0}),z=jt.tileLayer(e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; CARTO &copy; OpenStreetMap",subdomains:"abcd",maxZoom:19,crossOrigin:"anonymous"}).addTo(L);de.current=z,H.current=L;const B=setTimeout(()=>L.invalidateSize(),250);return()=>{clearTimeout(B),L.remove(),H.current=null,se.current=null,we.current=null,ze.current=null}},[]),R.useEffect(()=>{if(!Z.current)return;const ae=new ResizeObserver(()=>{H.current&&H.current.invalidateSize()});return ae.observe(Z.current),()=>ae.disconnect()},[]),R.useEffect(()=>{if(!de.current)return;const ae=e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";de.current.setUrl(ae)},[e]),R.useEffect(()=>{const ae=H.current;if(!ae||!S||!F)return;const b=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${S.gibsLayerId}/default/${F}/${S.tileMatrixSet}/{z}/{y}/{x}.${S.ext}`;if(ue(0),se.current&&xe.current===S.id){se.current.setOpacity(Se),se.current.setUrl(b);return}se.current&&(ae.removeLayer(se.current),se.current=null);const L=jt.tileLayer(b,{attribution:"NASA EOSDIS GIBS",maxNativeZoom:S.maxNativeZoom,maxZoom:12,crossOrigin:"anonymous",opacity:Se,errorTileUrl:'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="rgba(15,23,42,0.45)"/><text x="50%" y="50%" fill="%2364748b" font-family="sans-serif" font-size="11" text-anchor="middle">No Satellite Data</text></svg>'});L.on("tileerror",()=>{ue(z=>z+1)}),L.addTo(ae),se.current=L,xe.current=S.id},[S,F,Se]),R.useEffect(()=>{const ae=H.current;if(!ae)return;const b=(L,z)=>jt.divIcon({className:"custom-leaflet-marker",html:`
        <div class="marker-pin-wrap" style="--pin-color: ${L}">
          <div class="marker-pin">
            <span class="marker-badge">${z}</span>
          </div>
        </div>
      `,iconSize:[36,42],iconAnchor:[18,42],popupAnchor:[0,-38]});if(a){const L=[a.lat,a.lon],z=l?"A":"●";we.current?(we.current.setLatLng(L),we.current.setIcon(b("#38bdf8",z))):we.current=jt.marker(L,{icon:b("#38bdf8",z)}).addTo(ae);const B=i==="ar"&&a.nameAr||a.nameEn,$=(le==null?void 0:le.label)||(ge?"...":"No Data");we.current.bindPopup(`
        <div style="font-family:inherit;font-size:13px;min-width:170px;">
          <div style="font-weight:800;color:#38bdf8;margin-bottom:4px;">${B} ${l?"(A)":""}</div>
          <div style="font-size:11px;color:#94a3b8;font-family:monospace;margin-bottom:4px;">${a.lat.toFixed(3)}°, ${a.lon.toFixed(3)}°</div>
          <div style="padding:4px 8px;background:rgba(56,189,248,0.15);border-radius:6px;font-weight:700;color:#f8fafc;">
            ${F}: <span style="color:#38bdf8;">${$}</span>
          </div>
        </div>
      `)}if(l&&o){const L=[o.lat,o.lon];ze.current?(ze.current.setLatLng(L),ze.current.setIcon(b("#f97316","B"))):ze.current=jt.marker(L,{icon:b("#f97316","B")}).addTo(ae);const z=i==="ar"&&o.nameAr||o.nameEn,B=(Le==null?void 0:Le.label)||(ge?"...":"No Data");ze.current.bindPopup(`
        <div style="font-family:inherit;font-size:13px;min-width:170px;">
          <div style="font-weight:800;color:#f97316;margin-bottom:4px;">${z} (B)</div>
          <div style="font-size:11px;color:#94a3b8;font-family:monospace;margin-bottom:4px;">${o.lat.toFixed(3)}°, ${o.lon.toFixed(3)}°</div>
          <div style="padding:4px 8px;background:rgba(249,115,22,0.15);border-radius:6px;font-weight:700;color:#f8fafc;">
            ${F}: <span style="color:#f97316;">${B}</span>
          </div>
        </div>
      `)}else ze.current&&(ae.removeLayer(ze.current),ze.current=null)},[a,o,l,F,le,Le,ge,i]),R.useEffect(()=>{const ae=H.current;if(!ae)return;const b=L=>{const{lat:z,lng:B}=L.latlng,$={id:`custom_${z.toFixed(3)}_${B.toFixed(3)}`,nameEn:`Custom (${z.toFixed(2)}°, ${B.toFixed(2)}°)`,nameAr:`نقطة (${z.toFixed(2)}°, ${B.toFixed(2)}°)`,lat:parseFloat(z.toFixed(4)),lon:parseFloat(B.toFixed(4)),isCustom:!0};!l||Ye==="A"?(r($),l&&qe("B")):(c($),qe("A")),ae.flyTo([z,B],ae.getZoom(),{duration:.5})};return ae.on("click",b),()=>ae.off("click",b)},[l,Ye,r,c]);const We=ae=>{!l||Ye==="A"?(r(ae),l&&qe("B")):(c(ae),qe("A")),H.current&&H.current.flyTo([ae.lat,ae.lon],T.defaultZoom||5,{duration:.7})},ce=()=>{if(!navigator.geolocation){He(y.gpsError);return}ht(!0),He(null),navigator.geolocation.getCurrentPosition(ae=>{ht(!1);const{latitude:b,longitude:L}=ae.coords,z={id:"gps_device",nameEn:`GPS (${b.toFixed(2)}°, ${L.toFixed(2)}°)`,nameAr:`موقع GPS (${b.toFixed(2)}°, ${L.toFixed(2)}°)`,lat:parseFloat(b.toFixed(4)),lon:parseFloat(L.toFixed(4))};!l||Ye==="A"?r(z):c(z),H.current&&H.current.flyTo([b,L],6,{duration:.8})},()=>{ht(!1),He(y.gpsError)},{enableHighAccuracy:!0,timeout:9e3,maximumAge:6e4})},Ve=async()=>{var ae;if(a){A(!0);try{const b=Math.min(((ae=H.current)==null?void 0:ae.getZoom())||4,S.maxNativeZoom),L=pn(a.lat,a.lon,b),z=sn(S,F,b,L.tileY,L.tileX),B=await qn(z,L.pixelX,L.pixelY,X,S);if(re(B),(B==null?void 0:B.value)!==null&&!isNaN(B.value)&&(Ae(B.value,l?-.75:0),M==null||M(`${F}: ${B.label}`)),l&&o){const $=pn(o.lat,o.lon,b),fe=sn(S,F,b,$.tileY,$.tileX),Me=await qn(fe,$.pixelX,$.pixelY,X,S);(Me==null?void 0:Me.value)!==null&&!isNaN(Me.value)&&Ae(Me.value,.75)}}finally{A(!1)}}},nt=()=>{const ae=H.current;!ae||Ge||be(async b=>{const L=ae.getBounds(),z=L.getWest(),B=L.getEast(),$=(L.getSouth()+L.getNorth())/2,fe=Math.min(ae.getZoom(),S.maxNativeZoom),Me=[];for(let _e=0;_e<b;_e++){const Ne=z+(B-z)*(_e/(b-1)),De=pn($,Ne,fe),Xe=sn(S,F,fe,De.tileY,De.tileX),Qe=await qn(Xe,De.pixelX,De.pixelY,X,S);Me.push((Qe==null?void 0:Qe.value)??null)}return Me})},Et=R.useMemo(()=>{const ae=Oe.map(fe=>fe.date),b=Oe.map(fe=>fe.value),L=Oe.map((fe,Me)=>{var _e,Ne,De,Xe;return Me===D?7:(Ne=(_e=Ce==null?void 0:Ce.recordsMap)==null?void 0:_e[Me])!=null&&Ne.isAllTimeMax||(Xe=(De=Ce==null?void 0:Ce.recordsMap)==null?void 0:De[Me])!=null&&Xe.isAllTimeMin?5:3}),z=Oe.map((fe,Me)=>{var _e,Ne,De,Xe;return Me===D?"#ffffff":(Ne=(_e=Ce==null?void 0:Ce.recordsMap)==null?void 0:_e[Me])!=null&&Ne.isAllTimeMax?"#ef4444":(Xe=(De=Ce==null?void 0:Ce.recordsMap)==null?void 0:De[Me])!=null&&Xe.isAllTimeMin?"#3b82f6":"#38bdf8"}),B=[{label:`${i==="ar"&&(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn)} (${S.unitEn})`,data:b,borderColor:"#38bdf8",backgroundColor:"rgba(56, 189, 248, 0.12)",borderWidth:2.5,pointRadius:L,pointBackgroundColor:z,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,tension:.25,spanGaps:!0,fill:!0}];l&&Ee.length>0&&B.push({label:`${i==="ar"&&(o==null?void 0:o.nameAr)||(o==null?void 0:o.nameEn)} (${S.unitEn})`,data:Ee.map(fe=>fe.value),borderColor:"#f97316",backgroundColor:"rgba(249, 115, 22, 0.08)",borderWidth:2.5,pointRadius:Ee.map((fe,Me)=>Me===D?7:3),pointBackgroundColor:Ee.map((fe,Me)=>Me===D?"#ffffff":"#f97316"),tension:.25,spanGaps:!0,fill:!0});const $=Oe.some(fe=>fe.powerValue!==null&&!isNaN(fe.powerValue));if(S.pairedPowerParam&&$){const fe=fd[S.pairedPowerParam];B.push({label:`NASA POWER ${S.pairedPowerParam} (${(fe==null?void 0:fe.unitEn)||""})`,data:Oe.map(Me=>Me.powerValue),borderColor:"#a855f7",borderDash:[5,4],borderWidth:2,pointRadius:2,spanGaps:!0,fill:!1})}return{labels:ae,datasets:B}},[Oe,Ee,D,Ce,a,o,l,S,i]),on=R.useMemo(()=>({id:"pollutionCursorPlugin",afterDatasetsDraw(ae){if(!Oe||Oe.length===0)return;const b=ae.ctx,L=ae.scales.x,z=ae.scales.y;if(!L||!z)return;const B=L.getPixelForTick(D);isNaN(B)||(b.save(),b.beginPath(),b.moveTo(B,z.top),b.lineTo(B,z.bottom),b.lineWidth=2,b.strokeStyle="#ffffff",b.setLineDash([4,4]),b.stroke(),b.fillStyle="#38bdf8",b.beginPath(),b.arc(B,z.top,4.5,0,Math.PI*2),b.fill(),b.restore())}}),[D,Oe]),ti=R.useMemo(()=>{const ae=e==="light";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:180},plugins:{legend:{position:"top",labels:{color:ae?"#0f172a":"#e2e8f0",font:{family:i==="ar"?"Cairo, sans-serif":"Inter, sans-serif",size:12,weight:"600"}}},tooltip:{backgroundColor:ae?"#0f172a":"rgba(15, 23, 42, 0.95)",titleColor:"#38bdf8",bodyColor:"#f8fafc",borderColor:ae?"#cbd5e1":"#334155",borderWidth:1}},scales:{x:{grid:{color:ae?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.3)"},ticks:{color:ae?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:11},maxTicksLimit:10}},y:{grid:{color:ae?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.3)"},ticks:{color:ae?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:11},callback:b=>`${b}`}}}}},[i,e]),Is=()=>{const ae=["Index","Date",`${(a==null?void 0:a.nameEn)||"Location A"} (${S.unitEn})`];l&&ae.push(`${(o==null?void 0:o.nameEn)||"Location B"} (${S.unitEn})`),S.pairedPowerParam&&ae.push(`NASA POWER ${S.pairedPowerParam}`);const b=Oe.map((fe,Me)=>{var Ne;const _e=[Me+1,fe.date,fe.value??""];return l&&_e.push(((Ne=Ee[Me])==null?void 0:Ne.value)??""),S.pairedPowerParam&&_e.push(fe.powerValue??""),_e.join(",")}),L=[ae.join(","),...b].join(`
`),z=new Blob([L],{type:"text/csv;charset=utf-8;"}),B=URL.createObjectURL(z),$=document.createElement("a");$.href=B,$.download=`${S.id}_series.csv`,$.click(),setTimeout(()=>URL.revokeObjectURL(B),1e3)},va=R.useMemo(()=>{var $,fe;const ae=i==="ar"?(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn):(a==null?void 0:a.nameEn)||"this location",b=i==="ar"?S.whatItIsAr:S.whatItIsEn,L=i==="ar"?S.whyItMattersAr:S.whyItMattersEn,z=i==="ar"?S.whatTrendShowsAr:S.whatTrendShowsEn;let B="";if(Ce&&Ce.n>=2){const Me=C[($=Ce.recordHigh)==null?void 0:$.year]||"",_e=C[(fe=Ce.recordLow)==null?void 0:fe.year]||"";i==="ar"?B=`في ${ae}، بلغ المتوسط ${Ce.mean.toFixed(2)} ${S.unitAr}. وسُجّلت أعلى قيمة (${Ce.max}) في ${Me} وأدنى قيمة (${Ce.min}) في ${_e}.`:B=`At ${ae}, the sampled mean is ${Ce.mean.toFixed(2)} ${S.unitEn}, peaking at ${Ce.max} on ${Me} and dipping to ${Ce.min} on ${_e}.`}return`${b} ${L} ${z} ${B}`},[i,a,S,Ce,C]),_a=()=>{if(!G)return;if(pe){window.speechSynthesis.cancel(),ee(!1);return}window.speechSynthesis.cancel();const ae=new SpeechSynthesisUtterance(va);ae.lang=i==="ar"?"ar-SA":"en-US",ae.rate=.98,ae.onstart=()=>ee(!0),ae.onend=()=>ee(!1),ae.onerror=()=>ee(!1),window.speechSynthesis.speak(ae)};R.useEffect(()=>()=>{G&&window.speechSynthesis.cancel()},[S.id,G]);const ln=()=>{const ae=H.current;if(ae){const b=ae.getBounds();return{west:b.getWest(),east:b.getEast(),south:b.getSouth(),north:b.getNorth()}}return{west:((a==null?void 0:a.lon)??31.2)-18,east:((a==null?void 0:a.lon)??31.2)+18,south:((a==null?void 0:a.lat)??30)-12,north:((a==null?void 0:a.lat)??30)+12}},zi=async()=>{P({active:"zip",progress:{current:0,total:C.length,date:""},error:null,successMsg:null});try{await q0(S,C,ln(),K,Re,{opacity:Se,lang:i,locationA:a,locationB:o,isCompareMode:l},ae=>P(b=>({...b,progress:ae}))),P({active:null,progress:null,error:null,successMsg:i==="ar"?`تم تصدير ${C.length} إطار PNG في ملف ZIP بنجاح.`:`Downloaded ${C.length} PNG frames + metadata in ZIP.`})}catch(ae){P({active:null,progress:null,error:(ae==null?void 0:ae.message)||"ZIP export failed.",successMsg:null})}},Sa=async()=>{P({active:"webm",progress:{current:0,total:C.length,date:""},error:null,successMsg:null});try{await Y0(S,C,ln(),K,Re,{opacity:Se,lang:i,locationA:a,locationB:o,isCompareMode:l},ae=>P(b=>({...b,progress:ae}))),P({active:null,progress:null,error:null,successMsg:i==="ar"?"تم تسجيل وتنزيل فيديو WebM بنجاح.":"Recorded and downloaded WebM timelapse video."})}catch(ae){P({active:null,progress:null,error:(ae==null?void 0:ae.message)||"WebM export failed.",successMsg:null})}},ya=()=>{try{Z0(S,C,a,o,l,K,Re,he.primaryMap),P({active:null,progress:null,error:null,successMsg:i==="ar"?"تم تنزيل ملف JSON للتواريخ والقيم.":"Downloaded frame dates & values JSON."})}catch(ae){P({active:null,progress:null,error:(ae==null?void 0:ae.message)||"JSON export failed.",successMsg:null})}},pi=ex[T.id]||Ts;return s.jsxs("div",{className:"pollution-stages-workspace",children:[s.jsxs("section",{className:"card stage-selector-card","aria-labelledby":"active-stage-heading",children:[s.jsxs("div",{className:"stage-header-row",children:[s.jsxs("div",{className:"stage-title-group",children:[s.jsx("div",{className:"stage-icon-pill",style:{borderColor:T.accentColor,color:T.accentColor},children:s.jsx(pi,{className:"icon-md","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h2",{id:"active-stage-heading",className:"card-title",children:i==="ar"?T.titleAr:T.titleEn}),s.jsx("p",{className:"card-sub",children:i==="ar"?T.subtitleAr:T.subtitleEn})]})]}),s.jsxs("div",{className:"cadence-toggle-group",role:"group","aria-label":i==="ar"?"تردد الإطارات":"Time-Lapse Cadence",children:[s.jsx("button",{type:"button",className:`btn-cadence ${N==="monthly"?"active":""}`,onClick:()=>O("monthly"),"aria-pressed":N==="monthly",children:i==="ar"?"شهري (2024–2026)":"Monthly Steps"}),s.jsx("button",{type:"button",className:`btn-cadence ${N==="yearly"?"active":""}`,onClick:()=>O("yearly"),"aria-pressed":N==="yearly",children:i==="ar"?"سنوي (متعدد السنوات)":"Yearly Steps"})]})]}),T.honestyBannerEn&&s.jsxs("div",{className:"soil-honesty-banner",role:"note",children:[s.jsx(As,{className:"icon-sm text-gold","aria-hidden":"true"}),s.jsx("p",{children:i==="ar"?T.honestyBannerAr:T.honestyBannerEn})]}),s.jsx("div",{className:"animation-cards-grid",role:"group","aria-label":i==="ar"?"الرسوم المتحركة الثلاثة في هذه المرحلة":"3 NASA Data Animations in this Stage",children:T.animations.map((ae,b)=>{const L=ae.id===S.id;return s.jsxs("button",{type:"button",className:`animation-card-btn ${L?"active":""}`,onClick:()=>v(ae.id),"aria-pressed":L,children:[s.jsxs("div",{className:"anim-card-top",children:[s.jsxs("span",{className:"anim-card-num",children:["#",b+1]}),s.jsx("span",{className:`anim-badge ${ae.isProxy?"badge-proxy":"badge-direct"}`,children:i==="ar"?ae.proxyBadgeAr:ae.proxyBadgeEn})]}),s.jsx("h3",{className:"anim-card-title",children:i==="ar"?ae.titleAr:ae.titleEn}),s.jsxs("div",{className:"anim-card-meta",children:[s.jsx("span",{className:"anim-provider",children:ae.provider}),s.jsxs("span",{className:"anim-range",children:[ae.availableRange.start.slice(0,7)," → ",ae.availableRange.end.slice(0,7)," • ",i==="ar"?ae.unitAr:ae.unitEn]})]})]},ae.id)})})]}),(me||ge||he.loading)&&s.jsxs("div",{className:"loading-bar-wrap",role:"status","aria-live":"polite",children:[s.jsx(aa,{className:"icon-sm spin","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?`جاري تحميل إطارات وألوان ناسا (${S.titleAr})...`:`Loading real NASA GIBS frames & pixel series (${S.gibsLayerId})...`})]}),je&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ta,{className:"icon","aria-hidden":"true"}),s.jsxs("div",{className:"error-text",children:[s.jsxs("strong",{children:[i==="ar"?"خطأ في بيانات ناسا":"NASA Data Error",": "]}),s.jsx("span",{children:je})]}),s.jsx("button",{type:"button",className:"btn-retry",onClick:tt,children:i==="ar"?"إعادة المحاولة":"Retry"})]}),s.jsx("div",{className:"view-mode-switcher-bar",children:s.jsxs("div",{className:"view-mode-pill-group",role:"tablist","aria-label":i==="ar"?"طريقة العرض الأساسية":"Primary View Mode",children:[s.jsxs("button",{type:"button",role:"tab","aria-selected":Te==="eic",className:`btn-view-mode ${Te==="eic"?"active":""}`,onClick:()=>it("eic"),children:[s.jsx(vr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?"مركز معلومات الأرض (NASA EIC): المحاكاة والمخطط العلمي":"NASA EIC: Visual & Scientific Graph"})]}),s.jsxs("button",{type:"button",role:"tab","aria-selected":Te==="satellite",className:`btn-view-mode ${Te==="satellite"?"active":""}`,onClick:()=>{it("satellite"),setTimeout(()=>{H.current&&H.current.invalidateSize()},120)},children:[s.jsx(_r,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?"خريطة الأقمار الصناعية وتحويل البكسل لصوت (GIBS)":"Interactive Satellite Map & Sonifier"})]})]})}),s.jsx("div",{style:{display:Te==="eic"?"block":"none"},children:s.jsx(Q0,{stageId:T.id,selectedAnimation:S,lang:i,theme:e})}),s.jsxs("div",{style:{display:Te==="satellite"?"block":"none"},children:[s.jsxs("div",{className:"grid-two-columns",children:[s.jsxs("section",{className:"card map-card","aria-labelledby":"pollution-map-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(_r,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-map-heading",className:"card-title",children:i==="ar"?S.titleAr:S.titleEn}),s.jsxs("p",{className:"card-sub",children:[y.clickMapToSelect," • ",s.jsx("code",{className:"inline-layer-id",children:S.gibsLayerId})]})]})]}),s.jsx("div",{className:"compare-toggle-wrap",children:s.jsxs("label",{className:"toggle-label",htmlFor:"pollution-compare-checkbox",children:[s.jsx("input",{id:"pollution-compare-checkbox",type:"checkbox",className:"toggle-checkbox",checked:l,onChange:ae=>d(ae.target.checked)}),s.jsx("span",{className:"toggle-switch"}),s.jsx("span",{className:"toggle-text",children:y.compareModeLabel})]})})]}),s.jsxs("div",{className:"presets-bar",role:"group","aria-label":y.locationPresetLabel,children:[s.jsxs("button",{type:"button",className:`preset-pill btn-gps-locate ${ye?"loading":""}`,onClick:ce,"aria-label":y.gpsBtn,children:[ye?s.jsx(aa,{className:"preset-icon spin","aria-hidden":"true"}):s.jsx(ac,{className:"preset-icon icon-gps","aria-hidden":"true"}),s.jsx("span",{children:ye?y.gpsLoading:y.gpsBtn})]}),T.presets.map(ae=>{const b=(a==null?void 0:a.id)===ae.id,L=l&&(o==null?void 0:o.id)===ae.id,z=i==="ar"?ae.nameAr:ae.nameEn;return s.jsxs("button",{type:"button",className:`preset-pill ${b?"active-a":""} ${L?"active-b":""}`,onClick:()=>We(ae),"aria-pressed":b||L,children:[s.jsx(oc,{className:"preset-icon","aria-hidden":"true"}),s.jsx("span",{children:z}),b&&s.jsx("span",{className:"pill-badge pill-a",children:l?"A":"●"}),L&&s.jsx("span",{className:"pill-badge pill-b",children:"B"})]},ae.id)})]}),Fe&&s.jsxs("div",{className:"gps-error-alert",role:"alert",children:[s.jsx(ta,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:Fe})]}),s.jsxs("div",{className:"gibs-controls-toolbar",children:[s.jsxs("div",{className:"gibs-toolbar-row",children:[s.jsxs("div",{className:"gibs-date-badge",children:[s.jsx(os,{className:"icon-xs text-orange","aria-hidden":"true"}),s.jsxs("span",{className:"gibs-date-text",children:[y.gibsDate,": ",s.jsx("strong",{children:F})," (",D+1,"/",C.length,")"]})]}),S.legendUrl?s.jsxs("button",{type:"button",className:`btn-legend-toggle ${k?"active":""}`,onClick:()=>dt(ae=>!ae),"aria-pressed":k,children:[s.jsx(Ii,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.toggleLegend})]}):s.jsx("span",{className:"gibs-no-legend-tag",children:i==="ar"?"صور ألوان طبيعية (السطوع)":"True-Color Optical Reflectance"})]}),s.jsxs("div",{className:"gibs-sonify-actions-row",children:[s.jsxs("button",{type:"button",className:`btn-sonify-frame ${w?"loading":""}`,onClick:Ve,disabled:w,children:[s.jsx(Yn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:w?i==="ar"?"جاري القراءة...":"Sampling...":y.sonifyPixelBtn})]}),s.jsxs("button",{type:"button",className:`btn-scan-frame ${Ge?"scanning":""}`,onClick:nt,disabled:Ge,children:[s.jsx(cc,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Ge?y.scanning:y.scanFrameBtn})]}),s.jsxs("div",{className:"opacity-slider-wrap",children:[s.jsxs("span",{className:"opacity-label",children:[y.gibsOpacity,":"]}),s.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:Se,onChange:ae=>Ue(parseFloat(ae.target.value)),className:"gibs-opacity-slider","aria-label":y.gibsOpacity})]})]}),le&&s.jsxs("div",{className:"sampled-pixel-callout",role:"status",children:[s.jsxs("div",{className:"callout-header",children:[s.jsxs("span",{className:"callout-title",children:[y.framePixelSampled," (",i==="ar"&&(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn),"):"]}),s.jsx("span",{className:"callout-val",children:le.label}),le.r!==void 0&&s.jsxs("span",{className:"rgb-chip",style:{backgroundColor:`rgb(${le.r}, ${le.g}, ${le.b})`},children:["RGB: ",le.r,",",le.g,",",le.b]})]}),s.jsx("p",{className:"callout-notice",children:le.missingTile||le.emptyPixel?i==="ar"?"لا تتوفر بيانات قمر صناعي لهذه النقطة في هذا التاريخ (سحب أو فجوة مدارية).":"Cloud cover or orbital swath gap at this point on this frame date.":le.isLuminance?y.luminanceNotice:y.colormapNotice})]}),k&&S.legendUrl&&s.jsx("div",{className:"gibs-legend-drawer",children:s.jsx("div",{className:"legend-img-wrap",children:s.jsx("img",{src:S.legendUrl,alt:`${S.titleEn} NASA GIBS Legend`,className:"gibs-legend-img"})})})]}),l&&s.jsxs("div",{className:"compare-picker-bar",role:"radiogroup","aria-label":"Select target location",children:[s.jsx("span",{className:"picker-prompt",children:i==="ar"?"تعديل الهدف بالنقر:":"Set target on click:"}),s.jsxs("button",{type:"button",className:`btn-target ${Ye==="A"?"selected":""}`,onClick:()=>qe("A"),"aria-checked":Ye==="A",role:"radio",children:[s.jsx("span",{className:"color-dot dot-a"}),s.jsx("span",{children:y.locationA})]}),s.jsxs("button",{type:"button",className:`btn-target ${Ye==="B"?"selected":""}`,onClick:()=>qe("B"),"aria-checked":Ye==="B",role:"radio",children:[s.jsx("span",{className:"color-dot dot-b"}),s.jsx("span",{children:y.locationB})]})]}),s.jsxs("div",{className:"map-wrapper-relative",children:[s.jsx("div",{ref:Z,className:"map-container",tabIndex:"0","aria-label":`NASA GIBS map for ${S.titleEn} on ${F}`,role:"region"}),Ge&&$e!==null&&s.jsxs("div",{className:"scan-laser-line",style:{left:`${$e*100}%`},"aria-hidden":"true",children:[s.jsx("div",{className:"laser-beam"}),s.jsx("div",{className:"laser-glow"})]})]}),s.jsxs("div",{className:"map-footer",children:[s.jsxs("div",{className:"frame-overlay-indicator",children:[s.jsxs("span",{className:"overlay-badge",style:{backgroundColor:"#0284c7"},children:[i==="ar"&&(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn),": ",(le==null?void 0:le.label)||"—"]}),l&&o&&s.jsxs("span",{className:"overlay-badge badge-b",style:{backgroundColor:"#ea580c"},children:[i==="ar"&&(o==null?void 0:o.nameAr)||(o==null?void 0:o.nameEn),": ",(Le==null?void 0:Le.label)||"—"]})]}),J>0&&s.jsx("span",{className:"tile-gap-note",children:i==="ar"?"بعض البلاطات بدون تغطية لهذا التاريخ":"Partial orbital/cloud tile gap"})]})]}),s.jsxs("section",{className:"card chart-card","aria-labelledby":"pollution-chart-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(hi,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsxs("h2",{id:"pollution-chart-heading",className:"card-title",children:[i==="ar"?"السلسلة الزمنية لقراءات الإطار":"Frame Pixel Time Series"," (",(ba=C[0])==null?void 0:ba.slice(0,7)," → ",(Hi=C[C.length-1])==null?void 0:Hi.slice(0,7),")"]}),s.jsxs("p",{className:"card-sub",children:[S.provider," • ",i==="ar"?S.variableAr:S.variableEn]})]})]}),s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${st?"":"active"}`,onClick:()=>Je(!1),"aria-pressed":!st,children:[s.jsx(Mo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:y.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${st?"active":""}`,onClick:()=>Je(!0),"aria-pressed":st,children:[s.jsx(ls,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:y.dataTableView})]})]})]}),st?s.jsxs("div",{className:"pollution-table-panel",children:[s.jsx("div",{className:"table-toolbar-row",children:s.jsxs("button",{type:"button",className:"btn-download-csv",onClick:Is,children:[s.jsx(xr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.downloadCsv})]})}),s.jsx("div",{className:"table-scroll-container",children:s.jsxs("table",{className:"accessible-data-table",children:[s.jsxs("caption",{className:"sr-only",children:[S.titleEn," values across ",C.length," dates"]}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:i==="ar"?"التاريخ":"Frame Date"}),s.jsxs("th",{scope:"col",children:[i==="ar"?"الموقع أ":"Loc A"," (",S.unitEn,")"]}),l&&s.jsx("th",{scope:"col",children:i==="ar"?"الموقع ب":"Loc B"}),S.pairedPowerParam&&s.jsxs("th",{scope:"col",children:["POWER ",S.pairedPowerParam]}),s.jsx("th",{scope:"col",children:i==="ar"?"ملاحظة":"Notes"})]})}),s.jsx("tbody",{children:Oe.map((ae,b)=>{var B,$,fe;const L=b===D,z=(B=Ce==null?void 0:Ce.recordsMap)==null?void 0:B[b];return s.jsxs("tr",{className:`${L?"current-row":""} ${z!=null&&z.isAllTimeMax?"row-record-high":""} ${z!=null&&z.isAllTimeMin?"row-record-low":""}`,onClick:()=>q(b,!0,!0),style:{cursor:"pointer"},children:[s.jsx("td",{className:"mono-cell",children:ae.date}),s.jsx("td",{className:"mono-cell",children:ae.value!==null?ae.value:"—"}),l&&s.jsx("td",{className:"mono-cell",children:(($=Ee[b])==null?void 0:$.value)!==null?Ee[b].value:"—"}),S.pairedPowerParam&&s.jsx("td",{className:"mono-cell",children:ae.powerValue!==null?ae.powerValue:"—"}),s.jsxs("td",{children:[(z==null?void 0:z.isAllTimeMax)&&s.jsx("span",{className:"badge-rec badge-high",children:y.recordHigh}),(z==null?void 0:z.isAllTimeMin)&&s.jsx("span",{className:"badge-rec badge-low",children:y.recordLow}),((fe=ae.sample)==null?void 0:fe.emptyPixel)&&s.jsx("span",{children:i==="ar"?"فجوة/سحب":"Cloud/Gap"})]})]},ae.date)})})]})})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"chart-canvas-wrapper",role:"img","aria-label":`Line chart of sampled ${S.titleEn} values`,children:s.jsx(yo,{data:Et,options:ti,plugins:[on]})}),s.jsxs("div",{className:"chart-highlights",children:[s.jsxs("div",{className:"highlight-pill highlight-current",children:[s.jsx("span",{className:"dot dot-white"}),s.jsxs("span",{className:"label",children:[F,": ",(le==null?void 0:le.label)||"—"]})]}),(Ce==null?void 0:Ce.recordHigh)&&s.jsxs("div",{className:"highlight-pill highlight-high",children:[s.jsx("span",{className:"dot dot-red"}),s.jsxs("span",{className:"label",children:[y.recordHigh,": ",Ce.recordHigh.value," ",S.unitEn," (",C[Ce.recordHigh.year],")"]})]}),(Ce==null?void 0:Ce.recordLow)&&s.jsxs("div",{className:"highlight-pill highlight-low",children:[s.jsx("span",{className:"dot dot-blue"}),s.jsxs("span",{className:"label",children:[y.recordLow,": ",Ce.recordLow.value," ",S.unitEn," (",C[Ce.recordLow.year],")"]})]})]})]})]})]}),s.jsxs("div",{className:"grid-two-columns",children:[s.jsxs("section",{className:"card timeline-controls-card","aria-labelledby":"pollution-timeline-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(os,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-timeline-heading",className:"card-title",children:y.timelineHeading}),s.jsx("p",{className:"card-sub",children:i==="ar"?`${C[0]} إلى ${C[C.length-1]} (${C.length} إطاراً)`:`${C[0]} to ${C[C.length-1]} (${C.length} frames)`})]})]}),s.jsxs("div",{className:"current-year-badge","aria-live":"off",children:[s.jsx("span",{className:"year-label",children:i==="ar"?"التاريخ":"Frame"}),s.jsx("span",{className:"year-number mono-frame-date",children:F})]})]}),s.jsxs("div",{className:"slider-container",children:[s.jsx("input",{type:"range",min:"0",max:Math.max(0,C.length-1),step:"1",value:D,onChange:ae=>q(parseInt(ae.target.value,10),!0,!0),className:"timeline-slider","aria-label":i==="ar"?"شريط تمرير الإطارات الزمنية":"Scrub animation frame date","aria-valuetext":`${F}, ${(le==null?void 0:le.label)||"No data"}`}),s.jsxs("div",{className:"slider-ticks",children:[s.jsx("span",{children:C[0]}),s.jsx("span",{children:C[Math.floor(C.length/2)]}),s.jsx("span",{children:C[C.length-1]})]})]}),s.jsxs("div",{className:"controls-button-bar",children:[s.jsxs("div",{className:"playback-main-btns",children:[s.jsx("button",{type:"button",className:"btn-control btn-step",onClick:j,"aria-label":y.stepBack,children:s.jsx(dc,{className:"icon","aria-hidden":"true"})}),s.jsxs("button",{type:"button",className:`btn-control btn-play ${I?"playing":""}`,onClick:V,"aria-label":I?y.pause:y.play,children:[I?s.jsx(Es,{className:"icon-md","aria-hidden":"true"}):s.jsx(Rn,{className:"icon-md","aria-hidden":"true"}),s.jsx("span",{children:I?y.pause:y.play})]}),s.jsx("button",{type:"button",className:"btn-control btn-step",onClick:Q,"aria-label":y.stepForward,children:s.jsx(uc,{className:"icon","aria-hidden":"true"})})]}),s.jsxs("div",{className:"speed-control-group",children:[s.jsxs("span",{className:"control-label",children:[y.speed,":"]}),s.jsx("div",{className:"speed-pills",role:"group","aria-label":y.speed,children:[.5,1,1.5,2].map(ae=>s.jsxs("button",{type:"button",className:`btn-speed ${oe===ae?"active":""}`,onClick:()=>W(ae),"aria-pressed":oe===ae,children:[ae,"x"]},ae))})]}),s.jsxs("button",{type:"button",className:`btn-control btn-loop ${te?"active":""}`,onClick:()=>ie(ae=>!ae),"aria-pressed":te,children:[s.jsx(To,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:y.loop})]})]})]}),s.jsxs("section",{className:"card audio-controls-card","aria-labelledby":"pollution-audio-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Yn,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-audio-heading",className:"card-title",children:y.audioHeading}),s.jsx("p",{className:"card-sub",children:i==="ar"?"القيمة الأعلى = نغمة أعلى • تنبيهات الأرقام القياسية مفعلة":"Higher value = higher pitch • Record high/low chimes enabled"})]})]}),l&&s.jsxs("div",{className:"stereo-badge",role:"status",children:[s.jsx(Ms,{className:"icon-sm","aria-hidden":"true"}),s.jsxs("span",{children:[y.spatialStereo," (L ⟷ R)"]})]})]}),s.jsxs("div",{className:"audio-controls-grid",children:[s.jsxs("div",{className:"control-group",children:[s.jsxs("div",{className:"control-label-row",children:[s.jsxs("label",{htmlFor:"pollution-volume-slider",className:"control-label",children:[s.jsx(hc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.volume})]}),s.jsx("span",{className:"control-value-text",children:h?"0%":`${Math.round(u*100)}%`})]}),s.jsxs("div",{className:"volume-slider-row",children:[s.jsx("button",{type:"button",className:`btn-mute-sm ${h?"muted":""}`,onClick:g,"aria-label":h?y.unmute:y.mute,children:h?s.jsx(Zn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(rn,{className:"icon-sm","aria-hidden":"true"})}),s.jsx("input",{id:"pollution-volume-slider",type:"range",min:"0",max:"1",step:"0.05",value:h?0:u,onChange:ae=>p(parseFloat(ae.target.value)),className:"volume-slider"})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("span",{className:"control-label",children:y.instrument}),s.jsx("div",{className:"instrument-button-group",role:"radiogroup",children:[{id:"sine",label:y.instrumentSine},{id:"triangle",label:y.instrumentTriangle},{id:"soft_pluck",label:y.instrumentPluck}].map(ae=>s.jsx("button",{type:"button",className:`btn-instrument ${x===ae.id?"active":""}`,onClick:()=>_(ae.id),role:"radio","aria-checked":x===ae.id,children:ae.label},ae.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("span",{className:"control-label",children:y.musicalScale}),s.jsxs("div",{className:"scale-toggle-wrap",children:[s.jsx("button",{type:"button",className:`btn-scale-toggle ${f?"active":""}`,onClick:()=>m(!0),"aria-pressed":f,children:y.scaleOn}),s.jsx("button",{type:"button",className:`btn-scale-toggle ${f?"":"active"}`,onClick:()=>m(!1),"aria-pressed":!f,children:y.scaleOff})]})]})]}),ve&&s.jsxs("div",{className:"pitch-mapping-chip",role:"status",children:[s.jsx(ei,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{className:"mapping-label",children:y.pitchMappingLabel}),s.jsx("code",{className:"mapping-code",children:ve})]})]})]})]}),s.jsxs("section",{className:"card insights-panel-card","aria-labelledby":"pollution-explanation-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Ii,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-explanation-heading",className:"card-title",children:i==="ar"?"الشرح العلمي المبسط":"Plain-Language Guide & Trend Insights"}),s.jsxs("p",{className:"card-sub",children:[S.provider," • ",i==="ar"?S.proxyBadgeAr:S.proxyBadgeEn]})]})]}),G&&s.jsxs("button",{type:"button",className:`btn-speech btn-speak-summary ${pe?"speaking":""}`,onClick:_a,"aria-pressed":pe,"aria-label":pe?y.stopSpeakingBtn:y.readSummaryBtn,children:[pe?s.jsx(Zn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(rn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:pe?y.stopSpeakingBtn:y.readSummaryBtn})]})]}),s.jsxs("div",{className:"explanation-pillars-grid",children:[s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:i==="ar"?"ما هو هذا المتغير؟":"What This Variable Is"}),s.jsx("p",{children:i==="ar"?S.whatItIsAr:S.whatItIsEn})]}),s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:i==="ar"?"لماذا يهمنا؟":"Why It Matters"}),s.jsx("p",{children:i==="ar"?S.whyItMattersAr:S.whyItMattersEn})]}),s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:i==="ar"?"ماذا يوضح الاتجاه؟":"What the Trend Shows"}),s.jsx("p",{children:i==="ar"?S.whatTrendShowsAr:S.whatTrendShowsEn})]})]}),s.jsxs("div",{className:"limitation-footnote",children:[s.jsxs("strong",{children:[i==="ar"?"الحدود العلمية:":"Data Limitation:"," "]}),s.jsx("span",{children:i==="ar"?S.limitationAr:S.limitationEn})]})]}),s.jsxs("section",{className:"card export-feature-card export-game-card","aria-labelledby":"export-feature-heading",children:[s.jsx("div",{className:"card-header",children:s.jsxs("div",{className:"card-title-group",children:[s.jsx(jd,{className:"section-icon text-gold","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"export-feature-heading",className:"card-title",children:i==="ar"?"ميزة إضافية: تصدير الوسائط والبيانات (Export Suite)":"Added Feature: Media & Data Export"}),s.jsx("p",{className:"card-sub",children:i==="ar"?"تنزيل إطارات الأقمار الصناعية الحقيقية كحزمة صور PNG متسلسلة (ZIP)، أو فيديو WebM متحرك، أو ملفات JSON للتحليل الخارجي والبحث العلمي.":"Download composite satellite frames as a PNG image sequence (ZIP), WebM timelapse video, or structured JSON time-series for external analysis and research."})]})]})}),s.jsxs("div",{className:"export-actions-row",children:[s.jsxs("button",{type:"button",className:"btn-export btn-export-zip",onClick:zi,disabled:!!Y.active||C.length===0,children:[s.jsx(xr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Y.active==="zip"?`${i==="ar"?"جاري التجهيز":"Rendering"} (${((Wi=Y.progress)==null?void 0:Wi.current)||0}/${((Ma=Y.progress)==null?void 0:Ma.total)||C.length})...`:i==="ar"?`تنزيل تسلسل صور PNG (ZIP • ${C.length} إطار)`:`Export PNG Sequence (ZIP • ${C.length} frames)`})]}),s.jsxs("button",{type:"button",className:"btn-export btn-export-webm",onClick:Sa,disabled:!!Y.active||C.length===0,children:[s.jsx(vr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Y.active==="webm"?`${i==="ar"?"جاري التسجيل":"Recording"} (${((Ea=Y.progress)==null?void 0:Ea.current)||0}/${((Aa=Y.progress)==null?void 0:Aa.total)||C.length})...`:i==="ar"?"تسجيل فيديو WebM (Canvas Capture)":"Export WebM Video (Canvas Capture)"})]}),s.jsxs("button",{type:"button",className:"btn-export btn-export-json",onClick:ya,disabled:!!Y.active||C.length===0,children:[s.jsx(Ld,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?"تنزيل التواريخ والقيم (JSON)":"Download Dates & Values (JSON)"})]})]}),Y.active&&Y.progress&&s.jsxs("div",{className:"export-progress-wrap",role:"status","aria-live":"polite",children:[s.jsx("div",{className:"export-progress-bar",children:s.jsx("div",{className:"export-progress-fill",style:{width:`${Math.round(Y.progress.current/Math.max(1,Y.progress.total)*100)}%`}})}),s.jsxs("span",{className:"export-progress-label",children:[Y.progress.date," (",Y.progress.current," / ",Y.progress.total,")"]})]}),Y.error&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ta,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Y.error})]}),Y.successMsg&&s.jsx("div",{className:"export-success-banner",role:"status",children:s.jsx("span",{children:Y.successMsg})})]})]})}function Zl(i){const e=Math.max(0,Math.min(1,i));return e<.25?"#06b6d4":e<.5?"#3b82f6":e<.75?"#eab308":"#ef4444"}function nx({lang:i="en",theme:e="dark",locationA:t,onSelectLocationA:n,locationB:a,onSelectLocationB:r,isCompareMode:o,onToggleCompareMode:c,currentYear:l,dataA:d,dataB:u,primaryVariable:p,onPlayFramePixelTone:h,onStartFrameScan:g,isScanning:x=!1,scanProgress:_=null}){var Fe,He,w,A;const f=Rt[i]||Rt.en,m=Lt[p]||Lt.T2M,M=R.useRef(null),y=R.useRef(null),E=R.useRef(null),T=R.useRef(null),S=R.useRef(null),v=R.useRef(null),N=R.useRef(null),O=R.useRef(null),[C,D]=R.useState("A"),[F,q]=R.useState(!1),[I,V]=R.useState(null),[Q,j]=R.useState(Wn[0].id),[oe,W]=R.useState(.85),[te,ie]=R.useState(!1),[Se,Ue]=R.useState(!1),[X,me]=R.useState(null),[ge,he]=R.useState("07"),[K,Re]=R.useState("15"),Oe=`${l}-${ge}-${K}`,[Ee,Ce]=R.useState(!1),[ve,Ae]=R.useState(null),[Ge,$e]=R.useState(null),be=R.useMemo(()=>Wn.find(U=>U.id===Q)||Wn[0],[Q]);R.useEffect(()=>{let U=!1;return hd(be.id).then(re=>{U||me(re)}),()=>{U=!0}},[be.id]);const je=d==null?void 0:d.find(U=>U.year===l),tt=(je==null?void 0:je.value)??25,Te=(tt-10)/30,it=Zl(Te),st=u==null?void 0:u.find(U=>U.year===l),Je=(st==null?void 0:st.value)??25,k=(Je-10)/30,dt=Zl(k);R.useEffect(()=>{if(!M.current||y.current)return;const U=(t==null?void 0:t.lat)||30.5877,re=(t==null?void 0:t.lon)||31.502,J=jt.map(M.current,{center:[U,re],zoom:7,minZoom:2,maxZoom:14,scrollWheelZoom:!0,attributionControl:!0}),ue=jt.tileLayer(e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; CARTO &copy; OpenStreetMap",subdomains:"abcd",maxZoom:19}).addTo(J);E.current=ue,y.current=J;const pe=setTimeout(()=>{J.invalidateSize()},250);return()=>{clearTimeout(pe),J.remove(),y.current=null}},[]),R.useEffect(()=>{if(!M.current)return;const U=new ResizeObserver(()=>{y.current&&y.current.invalidateSize()});return U.observe(M.current),()=>U.disconnect()},[]),R.useEffect(()=>{if(!E.current)return;const U=e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";E.current.setUrl(U)},[e]),R.useEffect(()=>{const U=y.current;if(!U)return;T.current&&(U.removeLayer(T.current),T.current=null);const re=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${be.id}/default/${Oe}/${be.tileMatrixSet}/{z}/{y}/{x}.${be.ext}`,J=jt.tileLayer(re,{attribution:"NASA EOSDIS GIBS",maxNativeZoom:be.maxNativeZoom,maxZoom:18,crossOrigin:"anonymous",opacity:oe,errorTileUrl:'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="rgba(15,23,42,0.6)"/><text x="50%" y="50%" fill="%2364748b" font-family="sans-serif" font-size="12" text-anchor="middle">No Satellite Data</text></svg>'});J.addTo(U),T.current=J;const ue=l+1<=new Date().getFullYear()-1?l+1:l,pe=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${be.id}/default/${ue}-${ge}-${K}/${be.tileMatrixSet}/6/32/38.${be.ext}`,ee=new Image;return ee.src=pe,()=>{T.current&&U&&(U.removeLayer(T.current),T.current=null)}},[be,Oe,oe]),R.useEffect(()=>{const U=y.current;if(!U)return;const re=J=>{const{lat:ue,lng:pe}=J.latlng,ee={id:`custom_${ue.toFixed(3)}_${pe.toFixed(3)}`,nameEn:`Custom (${ue.toFixed(2)}°, ${pe.toFixed(2)}°)`,nameAr:`نقطة (${ue.toFixed(2)}°, ${pe.toFixed(2)}°)`,lat:parseFloat(ue.toFixed(4)),lon:parseFloat(pe.toFixed(4)),isCustom:!0};!o||C==="A"?(n(ee),o&&D("B")):(r(ee),D("A")),U.flyTo([ue,pe],U.getZoom(),{duration:.6}),setTimeout(()=>{C==="B"&&v.current?v.current.openPopup():S.current&&S.current.openPopup()},350)};return U.on("click",re),()=>{U.off("click",re)}},[o,C,n,r]),R.useEffect(()=>{const U=y.current;if(!U)return;const re=(J,ue)=>jt.divIcon({className:"custom-leaflet-marker",html:`
          <div class="marker-pin-wrap" style="--pin-color: ${J}">
            <div class="marker-pin">
              <span class="marker-badge">${ue}</span>
            </div>
          </div>
        `,iconSize:[36,42],iconAnchor:[18,42],popupAnchor:[0,-38]});if(t){const J=[t.lat,t.lon],ue=o?"A":"●";S.current?(S.current.setLatLng(J),S.current.setIcon(re("#38bdf8",ue))):S.current=jt.marker(J,{icon:re("#38bdf8",ue)}).addTo(U);const ee=`
        <div style="font-family: inherit; font-size: 13px; min-width: 170px;">
          <div style="font-weight: 800; font-size: 14px; color: #38bdf8; margin-bottom: 4px;">
            📍 ${i==="ar"&&t.nameAr||t.nameEn} ${o?"(Loc A)":""}
          </div>
          <div style="color: #94a3b8; font-size: 11px; font-family: monospace; margin-bottom: 6px;">
            ${t.lat.toFixed(4)}°, ${t.lon.toFixed(4)}°
          </div>
          <div style="padding: 4px 8px; background: rgba(56, 189, 248, 0.15); border-radius: 6px; font-weight: 700; color: #f8fafc;">
            ${f.year} ${l}: <span style="color: #38bdf8;">${m.format(tt)}</span>
          </div>
        </div>
      `;S.current.bindPopup(ee);const G=22e3+Te*45e3;N.current?(N.current.setLatLng(J),N.current.setRadius(G),N.current.setStyle({color:it,fillColor:it})):N.current=jt.circle(J,{radius:G,color:it,fillColor:it,fillOpacity:.35,weight:2}).addTo(U)}if(o&&a){const J=[a.lat,a.lon];v.current?(v.current.setLatLng(J),v.current.setIcon(re("#f97316","B"))):v.current=jt.marker(J,{icon:re("#f97316","B")}).addTo(U);const pe=`
        <div style="font-family: inherit; font-size: 13px; min-width: 170px;">
          <div style="font-weight: 800; font-size: 14px; color: #f97316; margin-bottom: 4px;">
            📍 ${i==="ar"&&a.nameAr||a.nameEn} (Loc B)
          </div>
          <div style="color: #94a3b8; font-size: 11px; font-family: monospace; margin-bottom: 6px;">
            ${a.lat.toFixed(4)}°, ${a.lon.toFixed(4)}°
          </div>
          <div style="padding: 4px 8px; background: rgba(249, 115, 22, 0.15); border-radius: 6px; font-weight: 700; color: #f8fafc;">
            ${f.year} ${l}: <span style="color: #f97316;">${m.format(Je)}</span>
          </div>
        </div>
      `;v.current.bindPopup(pe);const ee=22e3+k*45e3;O.current?(O.current.setLatLng(J),O.current.setRadius(ee),O.current.setStyle({color:dt,fillColor:dt})):O.current=jt.circle(J,{radius:ee,color:dt,fillColor:dt,fillOpacity:.35,weight:2}).addTo(U)}else v.current&&(U.removeLayer(v.current),v.current=null),O.current&&(U.removeLayer(O.current),O.current=null)},[t,a,o,Te,k,it,dt,l,tt,Je,m,i,f]);const Ye=U=>{!o||C==="A"?(n(U),o&&D("B")):(r(U),D("A")),y.current&&(y.current.invalidateSize(),y.current.flyTo([U.lat,U.lon],8,{duration:.9})),setTimeout(()=>{C==="B"&&v.current?v.current.openPopup():S.current&&S.current.openPopup()},450)},qe=()=>{if(!navigator.geolocation){V(f.gpsError);return}q(!0),V(null),navigator.geolocation.getCurrentPosition(U=>{q(!1);const{latitude:re,longitude:J}=U.coords,ue={id:"gps_device",nameEn:`GPS (${re.toFixed(2)}°, ${J.toFixed(2)}°)`,nameAr:`موقع GPS (${re.toFixed(2)}°, ${J.toFixed(2)}°)`,lat:parseFloat(re.toFixed(4)),lon:parseFloat(J.toFixed(4)),isGps:!0};!o||C==="A"?(n(ue),o&&D("B")):(r(ue),D("A")),y.current&&(y.current.invalidateSize(),y.current.flyTo([re,J],9,{duration:1.1})),setTimeout(()=>{S.current&&S.current.openPopup()},500)},U=>{q(!1),console.warn("Geolocation error:",U),V(f.gpsError)},{enableHighAccuracy:!0,timeout:9e3,maximumAge:6e4})},ye=async()=>{var U;if(t){Ce(!0);try{const re=Math.min(((U=y.current)==null?void 0:U.getZoom())||6,be.maxNativeZoom),J=pn(t.lat,t.lon,re),ue=sn(be.id,Oe,re,J.tileY,J.tileX),pe=await qn(ue,J.pixelX,J.pixelY,X,be);if(Ae(pe),(pe==null?void 0:pe.value)!==null&&!isNaN(pe.value)){const ee=(be.isTemperature,0),G=be.isTemperature?50:1;h==null||h(pe.value,ee,G,o?-.75:0)}if(o&&a){const ee=pn(a.lat,a.lon,re),G=sn(be.id,Oe,re,ee.tileY,ee.tileX),Y=await qn(G,ee.pixelX,ee.pixelY,X,be);if($e(Y),(Y==null?void 0:Y.value)!==null&&!isNaN(Y.value)){const P=(be.isTemperature,0),Z=be.isTemperature?50:1;h==null||h(Y.value,P,Z,.75)}}}catch(re){console.error("Error sampling frame pixel:",re)}finally{Ce(!1)}}},ht=()=>{const U=y.current;!U||x||g==null||g(async re=>{const J=U.getBounds(),ue=J.getWest(),pe=J.getEast(),ee=J.getSouth(),G=J.getNorth(),Y=Math.min(U.getZoom(),be.maxNativeZoom),P=[];for(let Z=0;Z<re;Z++){const H=ue+(pe-ue)*(Z/(re-1)),de=ee+(G-ee)*.5,se=pn(de,H,Y),xe=sn(be.id,Oe,Y,se.tileY,se.tileX);try{const we=await qn(xe,se.pixelX,se.pixelY,X,be);P.push((we==null?void 0:we.value)??0)}catch{P.push(0)}}return P})};return s.jsxs("section",{className:"card map-card","aria-labelledby":"map-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(_r,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"map-section-heading",className:"card-title",children:f.locationPresetLabel}),s.jsx("p",{className:"card-sub",children:f.clickMapToSelect})]})]}),s.jsx("div",{className:"compare-toggle-wrap",children:s.jsxs("label",{className:"toggle-label",htmlFor:"compare-mode-checkbox",children:[s.jsx("input",{id:"compare-mode-checkbox",type:"checkbox",className:"toggle-checkbox",checked:o,onChange:U=>c(U.target.checked)}),s.jsx("span",{className:"toggle-switch"}),s.jsx("span",{className:"toggle-text",children:f.compareModeLabel})]})})]}),s.jsxs("div",{className:"presets-bar",role:"group","aria-label":f.locationPresetLabel,children:[s.jsxs("button",{type:"button",className:`preset-pill btn-gps-locate ${F?"loading":""}`,onClick:qe,"aria-label":f.gpsBtn,title:f.gpsBtn,children:[F?s.jsx(aa,{className:"preset-icon spin","aria-hidden":"true"}):s.jsx(ac,{className:"preset-icon icon-gps","aria-hidden":"true"}),s.jsx("span",{children:F?f.gpsLoading:f.gpsBtn})]}),ua.map(U=>{const re=(t==null?void 0:t.id)===U.id,J=o&&(a==null?void 0:a.id)===U.id,ue=i==="ar"?U.nameAr:U.nameEn;return s.jsxs("button",{type:"button",className:`preset-pill ${re?"active-a":""} ${J?"active-b":""}`,onClick:()=>Ye(U),"aria-pressed":re||J,title:`Open ${ue}`,children:[s.jsx(oc,{className:"preset-icon","aria-hidden":"true"}),s.jsx("span",{children:ue}),re&&s.jsx("span",{className:"pill-badge pill-a",children:o?"Loc A":"Open"}),J&&s.jsx("span",{className:"pill-badge pill-b",children:"Loc B"})]},U.id)})]}),I&&s.jsxs("div",{className:"gps-error-alert",role:"alert",children:[s.jsx(ta,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:I})]}),s.jsxs("div",{className:"gibs-controls-toolbar",children:[s.jsxs("div",{className:"gibs-toolbar-row",children:[s.jsxs("div",{className:"gibs-layer-picker",children:[s.jsxs("label",{htmlFor:"gibs-layer-select",className:"gibs-label",children:[s.jsx(hi,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{children:f.gibsLayerSelect})]}),s.jsx("select",{id:"gibs-layer-select",className:"control-select gibs-select",value:Q,onChange:U=>j(U.target.value),children:Wn.map(U=>s.jsx("option",{value:U.id,children:i==="ar"?U.nameAr:U.nameEn},U.id))})]}),s.jsxs("div",{className:"gibs-date-badge",children:[s.jsx(os,{className:"icon-xs text-orange","aria-hidden":"true"}),s.jsxs("span",{className:"gibs-date-text",children:[f.gibsDate,": ",s.jsx("strong",{children:Oe})]})]}),be.legendUrl&&s.jsxs("button",{type:"button",className:`btn-legend-toggle ${Se?"active":""}`,onClick:()=>Ue(U=>!U),"aria-pressed":Se,children:[s.jsx(Ii,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:f.toggleLegend})]})]}),s.jsxs("div",{className:"gibs-sonify-actions-row",children:[s.jsxs("button",{type:"button",className:`btn-sonify-frame ${Ee?"loading":""}`,onClick:ye,disabled:Ee,"aria-label":f.sonifyPixelBtn,children:[s.jsx(Yn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Ee?"Reading Pixel...":f.sonifyPixelBtn})]}),s.jsxs("button",{type:"button",className:`btn-scan-frame ${x?"scanning":""}`,onClick:ht,disabled:x,"aria-label":f.scanFrameBtn,children:[s.jsx(cc,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:x?f.scanning:f.scanFrameBtn})]}),s.jsxs("div",{className:"opacity-slider-wrap",children:[s.jsxs("span",{className:"opacity-label",children:[f.gibsOpacity,":"]}),s.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:oe,onChange:U=>W(parseFloat(U.target.value)),className:"gibs-opacity-slider","aria-label":f.gibsOpacity})]})]}),ve&&s.jsxs("div",{className:"sampled-pixel-callout",role:"status",children:[s.jsxs("div",{className:"callout-header",children:[s.jsxs("span",{className:"callout-title",children:[f.framePixelSampled," (",t==null?void 0:t.nameEn,"):"]}),s.jsx("span",{className:"callout-val",children:ve.label}),ve.r!==void 0&&s.jsxs("span",{className:"rgb-chip",style:{backgroundColor:`rgb(${ve.r}, ${ve.g}, ${ve.b})`},children:["RGB: ",ve.r,",",ve.g,",",ve.b]})]}),s.jsx("p",{className:"callout-notice",children:ve.isLuminance?f.luminanceNotice:f.colormapNotice})]}),Se&&be.legendUrl&&s.jsx("div",{className:"gibs-legend-drawer",children:s.jsx("div",{className:"legend-img-wrap",children:s.jsx("img",{src:be.legendUrl,alt:`${be.nameEn} Legend`,className:"gibs-legend-img"})})})]}),o&&s.jsxs("div",{className:"compare-picker-bar",role:"radiogroup","aria-label":"Select target location to set",children:[s.jsx("span",{className:"picker-prompt",children:i==="ar"?"تعديل الهدف بالنقر:":"Set target on click:"}),s.jsxs("button",{type:"button",className:`btn-target ${C==="A"?"selected":""}`,onClick:()=>D("A"),"aria-checked":C==="A",role:"radio",children:[s.jsx("span",{className:"color-dot dot-a"}),s.jsx("span",{children:f.locationA}),s.jsxs("span",{className:"target-coords",children:["(",(Fe=t==null?void 0:t.lat)==null?void 0:Fe.toFixed(2),"°, ",(He=t==null?void 0:t.lon)==null?void 0:He.toFixed(2),"°)"]})]}),s.jsxs("button",{type:"button",className:`btn-target ${C==="B"?"selected":""}`,onClick:()=>D("B"),"aria-checked":C==="B",role:"radio",children:[s.jsx("span",{className:"color-dot dot-b"}),s.jsx("span",{children:f.locationB}),s.jsxs("span",{className:"target-coords",children:["(",(w=a==null?void 0:a.lat)==null?void 0:w.toFixed(2),"°, ",(A=a==null?void 0:a.lon)==null?void 0:A.toFixed(2),"°)"]})]})]}),s.jsxs("div",{className:"map-wrapper-relative",children:[s.jsx("div",{ref:M,className:"map-container",tabIndex:"0","aria-label":"Interactive Leaflet map showing NASA GIBS satellite imagery frames and selected locations",role:"region"}),x&&_!==null&&s.jsxs("div",{className:"scan-laser-line",style:{left:`${_*100}%`},"aria-hidden":"true",children:[s.jsx("div",{className:"laser-beam"}),s.jsx("div",{className:"laser-glow"})]})]}),s.jsxs("div",{className:"map-footer",children:[s.jsxs("div",{className:"frame-overlay-indicator",children:[s.jsxs("span",{className:"overlay-badge",style:{backgroundColor:it},children:[t==null?void 0:t.nameEn,": ",l," ",m.format(tt)]}),o&&a&&s.jsxs("span",{className:"overlay-badge badge-b",style:{backgroundColor:dt},children:[a==null?void 0:a.nameEn,": ",m.format(Je)]})]}),s.jsxs("div",{className:"map-legend",children:[s.jsx("span",{className:"legend-gradient"}),s.jsx("span",{className:"legend-label-low",children:i==="ar"?"منخفض":"Low"}),s.jsx("span",{className:"legend-label-high",children:i==="ar"?"مرتفع":"High"})]})]})]})}ho.register(fo,po,mo,go,xo,vo,_o,So);function ix({lang:i="en",theme:e="dark",dataA:t=[],dataB:n=[],statsA:a=null,statsB:r=null,currentYear:o=1990,primaryVariable:c="T2M",locationA:l=null,locationB:d=null,isCompareMode:u=!1,showTable:p=!1,onToggleTable:h=()=>{}}){const g=Rt[i]||Rt.en,x=Lt[c]||Lt.T2M,_=R.useRef(null),f=R.useMemo(()=>t.map(v=>v.year),[t]),m=R.useMemo(()=>{if(!t||t.length===0)return{labels:[],datasets:[]};const v=f,N=t.map(F=>F.value),O=t.map(F=>{var q,I,V,Q;return F.year===o?8:(I=(q=a==null?void 0:a.recordsMap)==null?void 0:q[F.year])!=null&&I.isAllTimeMax||(Q=(V=a==null?void 0:a.recordsMap)==null?void 0:V[F.year])!=null&&Q.isAllTimeMin?6:3}),C=t.map(F=>{var q,I,V,Q;return F.year===o?"#ffffff":(I=(q=a==null?void 0:a.recordsMap)==null?void 0:q[F.year])!=null&&I.isAllTimeMax?"#ef4444":(Q=(V=a==null?void 0:a.recordsMap)==null?void 0:V[F.year])!=null&&Q.isAllTimeMin?"#3b82f6":"#38bdf8"}),D=[{label:`${i==="ar"&&(l==null?void 0:l.nameAr)||(l==null?void 0:l.nameEn)} (${x.unitEn})`,data:N,borderColor:"#38bdf8",backgroundColor:"rgba(56, 189, 248, 0.1)",borderWidth:2.5,pointBackgroundColor:C,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,pointRadius:O,pointHoverRadius:9,tension:.25,fill:!0}];if(a!=null&&a.trendline&&a.trendline.length>0&&D.push({label:`${g.trendline} (Loc A)`,data:a.trendline.map(F=>parseFloat(F.fitted.toFixed(2))),borderColor:"rgba(56, 189, 248, 0.65)",borderWidth:2,borderDash:[6,5],pointRadius:0,fill:!1}),u&&n&&n.length>0){const F=n.map(V=>V.value),q=n.map(V=>V.year===o?8:3),I=n.map(V=>V.year===o?"#ffffff":"#f97316");D.push({label:`${i==="ar"&&(d==null?void 0:d.nameAr)||(d==null?void 0:d.nameEn)} (${x.unitEn})`,data:F,borderColor:"#f97316",backgroundColor:"rgba(249, 115, 22, 0.08)",borderWidth:2.5,pointBackgroundColor:I,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,pointRadius:q,pointHoverRadius:9,tension:.25,fill:!0}),r!=null&&r.trendline&&r.trendline.length>0&&D.push({label:`${g.trendline} (Loc B)`,data:r.trendline.map(V=>parseFloat(V.fitted.toFixed(2))),borderColor:"rgba(249, 115, 22, 0.65)",borderWidth:2,borderDash:[6,5],pointRadius:0,fill:!1})}return{labels:v,datasets:D}},[t,n,a,r,f,o,l,d,u,x,i,g]),M=R.useMemo(()=>({id:"verticalCursorPlugin",afterDatasetsDraw(v){if(!o)return;const N=v.ctx,O=v.scales.x,C=v.scales.y,D=f.indexOf(o);if(D===-1)return;const F=O.getPixelForTick(D);N.save(),N.beginPath(),N.moveTo(F,C.top),N.lineTo(F,C.bottom),N.lineWidth=2.5,N.strokeStyle="#ffffff",N.setLineDash([4,4]),N.shadowColor="rgba(255, 255, 255, 0.8)",N.shadowBlur=8,N.stroke(),N.fillStyle="#38bdf8",N.shadowBlur=0,N.beginPath(),N.arc(F,C.top,5,0,Math.PI*2),N.fill(),N.restore()}}),[o,f]),y=R.useMemo(()=>{const v=e==="light";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:250},plugins:{legend:{position:"top",labels:{color:v?"#0f172a":"#e2e8f0",font:{family:i==="ar"?"Cairo, sans-serif":"Inter, sans-serif",size:13,weight:"600"},padding:16,usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:v?"#0f172a":"rgba(15, 23, 42, 0.95)",titleColor:"#38bdf8",bodyColor:"#f8fafc",borderColor:v?"#cbd5e1":"#334155",borderWidth:1,padding:12,displayColors:!0,callbacks:{title:N=>{var O;return`${g.year}: ${(O=N[0])==null?void 0:O.label}`},label:N=>`${N.dataset.label}: ${N.parsed.y} ${x.unitEn}`}}},scales:{x:{grid:{color:v?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.35)",borderColor:v?"rgba(148, 163, 184, 0.45)":"rgba(51, 65, 85, 0.6)"},ticks:{color:v?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:12},maxTicksLimit:14}},y:{grid:{color:v?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.35)",borderColor:v?"rgba(148, 163, 184, 0.45)":"rgba(51, 65, 85, 0.6)"},ticks:{color:v?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:12},callback:N=>`${N} ${x.unitEn}`}}}}},[i,g,x,e]),E=f[0]||1990,T=f[f.length-1]||new Date().getFullYear()-1,S=(g.chartHeading||"Historical Trend ({range})").replace("{range}",`${E} – ${T}`);return s.jsxs("section",{className:"card chart-card","aria-labelledby":"chart-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(pc,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"chart-section-heading",className:"card-title",children:S}),s.jsxs("p",{className:"card-sub",children:[g.dataSubheading," • ",i==="ar"?x.nameAr:x.nameEn]})]})]}),s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${p?"":"active"}`,onClick:()=>h(!1),"aria-pressed":!p,children:[s.jsx(Mo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:g.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${p?"active":""}`,onClick:()=>h(!0),"aria-pressed":p,children:[s.jsx(ls,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:g.dataTableView})]})]})]}),s.jsx("div",{className:"chart-canvas-wrapper",role:"img","aria-label":g.chartAriaLabel,children:s.jsx(yo,{ref:_,data:m,options:y,plugins:[M]})}),s.jsxs("div",{className:"chart-highlights",children:[s.jsxs("div",{className:"highlight-pill highlight-current",children:[s.jsx("span",{className:"dot dot-white"}),s.jsx("span",{className:"label",children:g.currentYearLabel.replace("{year}",o)})]}),(a==null?void 0:a.recordHigh)&&s.jsxs("div",{className:"highlight-pill highlight-high",children:[s.jsx("span",{className:"dot dot-red"}),s.jsxs("span",{className:"label",children:[g.recordHigh,": ",a.recordHigh.value," ",x.unitEn," (",a.recordHigh.year,")"]})]}),(a==null?void 0:a.recordLow)&&s.jsxs("div",{className:"highlight-pill highlight-low",children:[s.jsx("span",{className:"dot dot-blue"}),s.jsxs("span",{className:"label",children:[g.recordLow,": ",a.recordLow.value," ",x.unitEn," (",a.recordLow.year,")"]})]})]})]})}function ax({lang:i="en",currentYear:e=1990,years:t=[],isPlaying:n=!1,onTogglePlay:a=()=>{},onStepBackward:r=()=>{},onStepForward:o=()=>{},onSelectYear:c=()=>{},playbackSpeed:l=1,onChangeSpeed:d=()=>{},isLooping:u=!0,onToggleLoop:p=()=>{}}){const h=Rt[i]||Rt.en,g=t[0]||1990,x=t[t.length-1]||2023,_=[.5,1,1.5,2];return s.jsxs("section",{className:"card timeline-controls-card","aria-labelledby":"timeline-controls-heading",children:[s.jsxs("div",{className:"timeline-header",children:[s.jsxs("div",{className:"timeline-title-wrap",children:[s.jsx(ec,{className:"section-icon","aria-hidden":"true"}),s.jsx("h2",{id:"timeline-controls-heading",className:"card-title",children:h.timelineHeading})]}),s.jsxs("div",{className:"current-year-badge","aria-live":"polite",children:[s.jsx("span",{className:"year-eyebrow",children:h.year}),s.jsx("span",{className:"year-number",children:e})]})]}),s.jsxs("div",{className:"scrub-container",children:[s.jsx("label",{htmlFor:"timeline-year-slider",className:"sr-only",children:h.yearSliderAria}),s.jsxs("div",{className:"slider-track-wrap",children:[s.jsx("input",{id:"timeline-year-slider",type:"range",min:g,max:x,step:1,value:e,onChange:f=>c(parseInt(f.target.value,10)),className:"timeline-slider","aria-valuemin":g,"aria-valuemax":x,"aria-valuenow":e,"aria-valuetext":`${h.year} ${e}`}),s.jsxs("div",{className:"slider-ticks","aria-hidden":"true",children:[s.jsx("span",{children:g}),s.jsx("span",{children:Math.round((g+x)/2)}),s.jsx("span",{children:x})]})]})]}),s.jsxs("div",{className:"controls-button-bar",children:[s.jsxs("button",{type:"button",className:"btn-control btn-step",onClick:r,"aria-label":h.stepBack,title:`${h.stepBack} (←)`,children:[s.jsx(dc,{className:"icon","aria-hidden":"true"}),s.jsx("span",{className:"btn-key-hint",children:"←"})]}),s.jsxs("button",{type:"button",className:`btn-control btn-play ${n?"is-playing":""}`,onClick:a,"aria-label":n?h.pause:h.play,title:`${n?h.pause:h.play} (Space)`,children:[n?s.jsx(Es,{className:"icon-lg","aria-hidden":"true"}):s.jsx(Rn,{className:"icon-lg icon-play","aria-hidden":"true"}),s.jsx("span",{className:"play-label",children:n?h.pause:h.play}),s.jsx("span",{className:"btn-key-hint",children:"Space"})]}),s.jsxs("button",{type:"button",className:"btn-control btn-step",onClick:o,"aria-label":h.stepForward,title:`${h.stepForward} (→)`,children:[s.jsx(uc,{className:"icon","aria-hidden":"true"}),s.jsx("span",{className:"btn-key-hint",children:"→"})]}),s.jsxs("div",{className:"speed-group",role:"group","aria-label":h.speed,children:[s.jsxs("span",{className:"speed-label",children:[s.jsx(sc,{className:"icon-xs","aria-hidden":"true"}),s.jsxs("span",{children:[h.speed,":"]})]}),s.jsx("div",{className:"speed-buttons",children:_.map(f=>s.jsxs("button",{type:"button",className:`btn-speed ${l===f?"active":""}`,onClick:()=>d(f),"aria-pressed":l===f,children:[f,"x"]},f))})]}),s.jsxs("button",{type:"button",className:`btn-control btn-loop ${u?"active":""}`,onClick:p,"aria-pressed":u,"aria-label":h.loop,title:h.loop,children:[s.jsx(To,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{className:"loop-label",children:h.loop})]})]})]})}function sx({lang:i="en",volume:e=.7,onChangeVolume:t=()=>{},isMuted:n=!1,onToggleMute:a=()=>{},instrument:r="sine",onChangeInstrument:o=()=>{},quantizeScale:c=!0,onToggleQuantizeScale:l=()=>{},primaryVariable:d="T2M",onChangePrimaryVariable:u=()=>{},secondaryVariable:p="NONE",onChangeSecondaryVariable:h=()=>{},isCompareMode:g=!1,pitchMappingText:x=""}){const _=Rt[i]||Rt.en,f=[{id:"sine",label:_.instrumentSine,desc:"Pure harmonic tone"},{id:"triangle",label:_.instrumentTriangle,desc:"Warm ambient flute"},{id:"soft_pluck",label:_.instrumentPluck,desc:"Acoustic harp pluck"}];return s.jsxs("section",{className:"card audio-controls-card","aria-labelledby":"audio-controls-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Yn,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"audio-controls-heading",className:"card-title",children:_.audioHeading}),s.jsx("p",{className:"card-sub",children:_.recordCueTip})]})]}),g&&s.jsxs("div",{className:"stereo-badge",role:"status",children:[s.jsx(Ms,{className:"icon-sm","aria-hidden":"true"}),s.jsxs("span",{children:[_.spatialStereo," (L ⟷ R)"]})]})]}),s.jsxs("div",{className:"audio-controls-grid",children:[s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{htmlFor:"primary-variable-select",className:"control-label",children:[s.jsx(Vd,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:_.variableLabel})]}),s.jsx("select",{id:"primary-variable-select",className:"control-select",value:d,onChange:m=>u(m.target.value),"aria-label":_.selectVariableAria,children:Object.values(Lt).map(m=>s.jsxs("option",{value:m.id,children:[i==="ar"?m.nameAr:m.nameEn," (",m.unitEn,")"]},m.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("div",{className:"control-label-row",children:[s.jsxs("label",{htmlFor:"audio-volume-slider",className:"control-label",children:[s.jsx(hc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:_.volume})]}),s.jsx("span",{className:"control-value-text",children:n?"0%":`${Math.round(e*100)}%`})]}),s.jsxs("div",{className:"volume-slider-row",children:[s.jsx("button",{type:"button",className:`btn-mute-sm ${n?"muted":""}`,onClick:a,"aria-label":n?_.unmute:_.mute,children:n?s.jsx(Zn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(rn,{className:"icon-sm","aria-hidden":"true"})}),s.jsx("input",{id:"audio-volume-slider",type:"range",min:"0",max:"1",step:"0.05",value:n?0:e,onChange:m=>t(parseFloat(m.target.value)),className:"volume-slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":n?0:Math.round(e*100)})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{className:"control-label",id:"instrument-label",children:[s.jsx(Yn,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:_.instrument})]}),s.jsx("div",{className:"instrument-button-group",role:"radiogroup","aria-labelledby":"instrument-label",children:f.map(m=>s.jsx("button",{type:"button",className:`btn-instrument ${r===m.id?"active":""}`,onClick:()=>o(m.id),role:"radio","aria-checked":r===m.id,children:s.jsx("span",{children:m.label})},m.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{className:"control-label",children:s.jsx("span",{children:_.musicalScale})}),s.jsxs("div",{className:"scale-toggle-wrap",children:[s.jsx("button",{type:"button",className:`btn-scale-toggle ${c?"active":""}`,onClick:()=>l(!0),"aria-pressed":c,children:s.jsx("span",{children:_.scaleOn})}),s.jsx("button",{type:"button",className:`btn-scale-toggle ${c?"":"active"}`,onClick:()=>l(!1),"aria-pressed":!c,children:s.jsx("span",{children:_.scaleOff})})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{htmlFor:"secondary-layer-select",className:"control-label",children:[s.jsx(hi,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:_.secondaryLayerLabel})]}),s.jsxs("select",{id:"secondary-layer-select",className:"control-select",value:p||"NONE",onChange:m=>h(m.target.value),children:[s.jsx("option",{value:"NONE",children:_.secondaryNone}),Object.values(Lt).filter(m=>m.id!==d).map(m=>s.jsxs("option",{value:m.id,children:[i==="ar"?m.nameAr:m.nameEn," (",m.unitEn,")"]},m.id))]})]})]}),x&&s.jsxs("div",{className:"pitch-mapping-chip",role:"status","aria-label":_.pitchMappingLabel,children:[s.jsx(Ss,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{className:"mapping-label",children:_.pitchMappingLabel}),s.jsx("code",{className:"mapping-code",children:x})]})]})}function rx({lang:i="en",statsA:e=null,statsB:t=null,locationA:n=null,locationB:a=null,primaryVariable:r="T2M",isCompareMode:o=!1,isSpeaking:c=!1,speechSupported:l=!1,onSpeakSummary:d=()=>{},onStopSpeaking:u=()=>{},summaryText:p=""}){const h=Rt[i]||Rt.en,g=Lt[r]||Lt.T2M;return i==="ar"&&(n!=null&&n.nameAr)||(n==null||n.nameEn),o&&(i==="ar"&&(a!=null&&a.nameAr)||(a==null||a.nameEn)),s.jsxs("section",{className:"card insights-card","aria-labelledby":"insights-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(ei,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"insights-heading",className:"card-title",children:h.insightsHeading}),s.jsx("p",{className:"card-sub",children:h.historicalRange})]})]}),l&&s.jsx("div",{className:"speech-action-group",children:c?s.jsxs("button",{type:"button",className:"btn-speech speaking",onClick:u,"aria-label":h.stopSpeakingBtn,children:[s.jsx(qd,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:h.speakingState})]}):s.jsxs("button",{type:"button",className:"btn-speech",onClick:d,"aria-label":h.readSummaryBtn,children:[s.jsx(rn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:h.readSummaryBtn})]})})]}),p&&s.jsx("div",{className:"summary-quote-box",role:"region","aria-label":"Climate text summary",children:s.jsxs("p",{className:"summary-quote-text",children:['"',p,'"']})}),s.jsxs("div",{className:"stats-metric-grid",children:[s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:h.changePerDecade}),s.jsxs("div",{className:"metric-value-row",children:[e&&e.changePerDecade>=0?s.jsx(pc,{className:"metric-trend-icon trend-up","aria-hidden":"true"}):s.jsx(Yd,{className:"metric-trend-icon trend-down","aria-hidden":"true"}),s.jsx("span",{className:"metric-value",children:e?`${e.changePerDecade>0?"+":""}${e.changePerDecade.toFixed(2)}`:"—"}),s.jsxs("span",{className:"metric-unit",children:[g.unitEn,"/dec"]})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.changePerDecade>0?"+":"",t.changePerDecade.toFixed(2)," ",g.unitEn,"/dec"]})]})]}),s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:h.totalTrendChange}),s.jsxs("div",{className:"metric-value-row",children:[s.jsx("span",{className:"metric-value",children:e?`${e.totalChange>0?"+":""}${e.totalChange.toFixed(2)}`:"—"}),s.jsx("span",{className:"metric-unit",children:g.unitEn})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.totalChange>0?"+":"",t.totalChange.toFixed(2)," ",g.unitEn]})]})]}),s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:h.percentChange}),s.jsx("div",{className:"metric-value-row",children:s.jsx("span",{className:"metric-value",children:e?`${e.percentChange>0?"+":""}${e.percentChange.toFixed(1)}%`:"—"})}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.percentChange>0?"+":"",t.percentChange.toFixed(1),"%"]})]})]}),s.jsxs("div",{className:"metric-box significance-box",children:[s.jsx("span",{className:"metric-label",children:h.significanceTest}),s.jsx("div",{className:"significance-badge-wrap",children:e!=null&&e.isSignificant?s.jsxs("span",{className:"badge-significant",children:[s.jsx(Cd,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:h.significant})]}):s.jsxs("span",{className:"badge-not-significant",children:[s.jsx(As,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:h.notSignificant})]})}),s.jsxs("div",{className:"p-value-line",children:[s.jsx("span",{children:h.pValueLabel.replace("{p}",e?e.pValue<.001?"< 0.001":e.pValue.toFixed(4):"—")}),s.jsxs("span",{className:"r-squared-note",children:["R² = ",e?e.rSquared.toFixed(3):"—"]})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:["p = ",t.pValue<.001?"< 0.001":t.pValue.toFixed(4)," (",t.isSignificant?"Significant":"Not Sig.",")"]})]})]})]})]})}function ox({lang:i="en",dataA:e=[],dataB:t=[],statsA:n=null,statsB:a=null,primaryVariable:r="T2M",locationA:o=null,locationB:c=null,isCompareMode:l=!1,currentYear:d=1990,showTable:u=!0,onToggleTable:p=()=>{}}){var m,M;const h=Rt[i]||Rt.en,g=Lt[r]||Lt.T2M,x=((m=e[0])==null?void 0:m.value)||0,_=((M=t[0])==null?void 0:M.value)||0,f=()=>{let y="data:text/csv;charset=utf-8,";l?(y+=`Year,${(o==null?void 0:o.nameEn)||"Loc A"} (${g.unitEn}),${(o==null?void 0:o.nameEn)||"Loc A"} Anomaly,${(c==null?void 0:c.nameEn)||"Loc B"} (${g.unitEn}),${(c==null?void 0:c.nameEn)||"Loc B"} Anomaly,Records
`,e.forEach(S=>{var q;const v=t.find(I=>I.year===S.year),N=(S.value-x).toFixed(2),O=v?v.value:"",C=v?(v.value-_).toFixed(2):"",D=(q=n==null?void 0:n.recordsMap)==null?void 0:q[S.year],F=D!=null&&D.isAllTimeMax?"Record High":D!=null&&D.isAllTimeMin?"Record Low":"";y+=`${S.year},${S.value},${N},${O},${C},${F}
`})):(y+=`Year,${(o==null?void 0:o.nameEn)||"Location"} (${g.unitEn}),Anomaly (Diff from 1990),Records
`,e.forEach(S=>{var C;const v=(S.value-x).toFixed(2),N=(C=n==null?void 0:n.recordsMap)==null?void 0:C[S.year],O=N!=null&&N.isAllTimeMax?"Record High":N!=null&&N.isAllTimeMin?"Record Low":"";y+=`${S.year},${S.value},${v},${O}
`}));const E=encodeURI(y),T=document.createElement("a");T.setAttribute("href",E),T.setAttribute("download",`earth_jukebox_${r}_${(o==null?void 0:o.id)||"data"}.csv`),document.body.appendChild(T),T.click(),document.body.removeChild(T)};return s.jsxs("section",{className:"card table-card","aria-labelledby":"table-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(ls,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"table-section-heading",className:"card-title",children:h.dataTableView}),s.jsx("p",{className:"card-sub",children:h.tableCaption})]})]}),s.jsxs("div",{className:"table-header-actions",children:[s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${u?"":"active"}`,onClick:()=>p(!1),"aria-pressed":!u,title:h.chartView,children:[s.jsx(Mo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:h.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${u?"active":""}`,onClick:()=>p(!0),"aria-pressed":u,title:h.dataTableView,children:[s.jsx(ls,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:h.dataTableView})]})]}),s.jsxs("button",{type:"button",className:"btn-download-csv",onClick:f,"aria-label":h.downloadCsv,children:[s.jsx(xr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:h.downloadCsv})]})]})]}),s.jsx("div",{className:"return-chart-banner",children:s.jsxs("button",{type:"button",className:"btn-return-chart",onClick:()=>p(!1),"aria-label":h.returnToChart,children:[i==="ar"?s.jsx(bo,{className:"icon-sm","aria-hidden":"true"}):s.jsx(Nd,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:h.returnToChart})]})}),s.jsx("div",{className:"table-responsive-container",children:s.jsxs("table",{className:"accessible-data-table","aria-label":h.tableCaption,children:[s.jsx("caption",{className:"sr-only",children:h.tableCaption}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:h.colYear}),s.jsxs("th",{scope:"col",children:[i==="ar"&&(o==null?void 0:o.nameAr)||(o==null?void 0:o.nameEn)," (",g.unitEn,")"]}),s.jsx("th",{scope:"col",children:h.colAnomaly}),l&&s.jsxs(s.Fragment,{children:[s.jsxs("th",{scope:"col",children:[i==="ar"&&(c==null?void 0:c.nameAr)||(c==null?void 0:c.nameEn)," (",g.unitEn,")"]}),s.jsxs("th",{scope:"col",children:[h.colAnomaly," (B)"]})]}),s.jsx("th",{scope:"col",children:h.colRecords})]})}),s.jsx("tbody",{children:e.map(y=>{var O;const E=y.year===d,T=y.value-x,S=l?t.find(C=>C.year===y.year):null,v=S?S.value-_:0,N=(O=n==null?void 0:n.recordsMap)==null?void 0:O[y.year];return s.jsxs("tr",{className:E?"row-active-year":"",children:[s.jsxs("th",{scope:"row",className:"cell-year",children:[y.year,E&&s.jsx("span",{className:"active-cursor-tag",children:"●"})]}),s.jsxs("td",{className:"cell-value",children:[y.value," ",g.unitEn]}),s.jsx("td",{className:`cell-anomaly ${T>=0?"pos":"neg"}`,children:T>0?`+${T.toFixed(2)}`:T.toFixed(2)}),l&&s.jsxs(s.Fragment,{children:[s.jsx("td",{className:"cell-value",children:S?`${S.value} ${g.unitEn}`:"—"}),s.jsx("td",{className:`cell-anomaly ${v>=0?"pos":"neg"}`,children:S?v>0?`+${v.toFixed(2)}`:v.toFixed(2):"—"})]}),s.jsxs("td",{className:"cell-records",children:[(N==null?void 0:N.isAllTimeMax)&&s.jsx("span",{className:"record-badge record-high",children:h.recordHigh}),(N==null?void 0:N.isAllTimeMin)&&s.jsx("span",{className:"record-badge record-low",children:h.recordLow}),(N==null?void 0:N.isRecordHigh)&&!(N!=null&&N.isAllTimeMax)&&s.jsx("span",{className:"record-badge record-running-high",children:h.runningRecordHigh})]})]},y.year)})})]})})]})}function pr(i){const e=[57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.00015808870322437947,-.00021026441082956272,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];let t=.9999999999999971;for(let a=0;a<e.length;a++)t+=e[a]/(i+a+1);const n=i+5.2421875;return .5*Math.log(2*Math.PI)+(i+.5)*Math.log(n)-n+Math.log(t)}function md(i,e,t){if(i<=0)return 0;if(i>=1)return 1;if(i>(e+1)/(e+t+2))return 1-md(1-i,t,e);const n=Math.exp(e*Math.log(i)+t*Math.log(1-i)-pr(e)-pr(t)+pr(e+t))/e,a=200,r=1e-12;let o=1,c=1-(e+t)*i/(e+1);Math.abs(c)<1e-30&&(c=1e-30),c=1/c;let l=c;for(let d=1;d<=a;d++){let u=d*(t-d)*i/((e+2*d-1)*(e+2*d));c=1+u*c,Math.abs(c)<1e-30&&(c=1e-30),o=1+u/o,Math.abs(o)<1e-30&&(o=1e-30),c=1/c,l*=o*c,u=-((e+d)*(e+t+d)*i)/((e+2*d)*(e+2*d+1)),c=1+u*c,Math.abs(c)<1e-30&&(c=1e-30),o=1+u/o,Math.abs(o)<1e-30&&(o=1e-30),c=1/c;const p=o*c;if(l*=p,Math.abs(p-1)<r)break}return n*l}function lx(i,e){if(e<=0||!isFinite(i)||isNaN(i))return 1;const t=Math.abs(i);if(t===0)return 1;const n=e/(e+t*t),a=md(n,e/2,.5);return Math.min(1,Math.max(0,a))}function ha(i){if(!i||i.length<2)return{n:(i==null?void 0:i.length)||0,slope:0,intercept:0,changePerDecade:0,percentChange:0,totalChange:0,rSquared:0,tStat:0,pValue:1,isSignificant:!1,mean:0,min:0,max:0,recordHigh:null,recordLow:null,trendline:[],recordsMap:{}};const e=i.filter(W=>W.value!==null&&!isNaN(W.value)),t=e.length;if(t<2)return ha([]);let n=0,a=0,r=1/0,o=-1/0,c=null,l=null;for(let W=0;W<t;W++){const{year:te,value:ie}=e[W];n+=te,a+=ie,ie>o&&(o=ie,c={year:te,value:ie}),ie<r&&(r=ie,l={year:te,value:ie})}const d=n/t,u=a/t;let p=0,h=0,g=0;for(let W=0;W<t;W++){const{year:te,value:ie}=e[W],Se=te-d,Ue=ie-u;p+=Se*Se,h+=Se*Ue,g+=Ue*Ue}const x=p!==0?h/p:0,_=u-x*d,f=x*10;let m=0;const M=e.map(W=>{const te=x*W.year+_,ie=W.value-te;return m+=ie*ie,{year:W.year,fitted:te}}),y=g!==0?Math.max(0,Math.min(1,1-m/g)):0,E=t-2;let T=0,S=0,v=1;if(E>0&&p>0){const W=m/E;T=Math.sqrt(W/p),T>0?(S=x/T,v=lx(S,E)):Math.abs(x)>1e-9?(S=1/0,v=0):(S=0,v=1)}const N=v<.05,O=e[0].year,C=e[t-1].year,D=x*O+_,q=x*C+_-D;let I=0;const V=Math.abs(D)>.01?Math.abs(D):Math.abs(u);V>1e-4&&(I=q/V*100);let Q=-1/0,j=1/0;const oe={};for(let W=0;W<t;W++){const{year:te,value:ie}=e[W];let Se=!1,Ue=!1;ie>Q&&(Q=ie,W>0&&(Se=!0)),ie<j&&(j=ie,W>0&&(Ue=!0)),oe[te]={isRecordHigh:Se,isRecordLow:Ue,isAllTimeMax:ie===o,isAllTimeMin:ie===r}}return{n:t,slope:x,intercept:_,changePerDecade:f,percentChange:I,totalChange:q,rSquared:y,tStat:S,pValue:v,isSignificant:N,mean:u,min:r,max:o,recordHigh:c,recordLow:l,trendline:M,recordsMap:oe}}function cx({primaryVariable:i="T2M",secondaryVariable:e=null,locationA:t=ua[0],locationB:n=ua[1],isCompareMode:a=!1}){const[r,o]=R.useState([]),[c,l]=R.useState([]),[d,u]=R.useState([]),[p,h]=R.useState(!0),[g,x]=R.useState(null),_=R.useRef(null),f=R.useCallback(async()=>{_.current&&_.current.abort();const E=new AbortController;_.current=E,h(!0),x(null);try{const T=await hr(t.lat,t.lon,i,ea,Ri,E.signal);if(E.signal.aborted)return;if(o(T.points||[]),a&&n){const S=await hr(n.lat,n.lon,i,ea,Ri,E.signal);if(E.signal.aborted)return;l(S.points||[])}else l([]);if(e&&e!=="NONE"){const S=await hr(t.lat,t.lon,e,ea,Ri,E.signal);if(E.signal.aborted)return;u(S.points||[])}else u([]);x(null)}catch(T){if(T.name==="AbortError")return;console.error("Error fetching NASA POWER data:",T),x(T.message||"Failed to load climate data from NASA POWER")}finally{E.signal.aborted||h(!1)}},[t.lat,t.lon,a?n==null?void 0:n.lat:null,a?n==null?void 0:n.lon:null,i,e,a]);R.useEffect(()=>(f(),()=>{_.current&&_.current.abort()}),[f]);const m=R.useMemo(()=>ha(r),[r]),M=R.useMemo(()=>!a||c.length===0?null:ha(c),[a,c]),y=R.useMemo(()=>{if(r.length>0)return r.map(T=>T.year);const E=[];for(let T=ea;T<=Ri;T++)E.push(T);return E},[r]);return{loading:p,error:g,dataA:r,dataB:c,secondaryDataA:d,statsA:m,statsB:M,years:y,refetch:f}}function dx({dataA:i=[],dataB:e=[],secondaryDataA:t=[],statsA:n=null,statsB:a=null,primaryVariable:r="T2M",secondaryVariable:o=null,isCompareMode:c=!1,onYearChange:l=()=>{}}){const[d,u]=R.useState(!1),[p,h]=R.useState(1990),[g,x]=R.useState(1),[_,f]=R.useState(.7),[m,M]=R.useState(!1),[y,E]=R.useState("sine"),[T,S]=R.useState(!0),[v,N]=R.useState(!0),[O,C]=R.useState(!1),[D,F]=R.useState(!1),[q,I]=R.useState(null),V=R.useRef(null),Q=R.useRef(null),j=R.useRef(p);j.current=p;const oe=R.useCallback(async()=>{const ve=await _s();return C(ve),ve},[]),{dynamicMin:W,dynamicMax:te,rawMin:ie,rawMax:Se}=R.useMemo(()=>{let ve=i.filter(je=>je.value!==null&&!isNaN(je.value)).map(je=>je.value);if(c&&e&&e.length>0){const je=e.filter(tt=>tt.value!==null&&!isNaN(tt.value)).map(tt=>tt.value);ve=ve.concat(je)}if(ve.length===0)return{dynamicMin:15,dynamicMax:35,rawMin:15,rawMax:35};const Ae=Math.min(...ve),Ge=Math.max(...ve),$e=Ge-Ae,be=$e===0?1:$e*.07;return{dynamicMin:parseFloat((Ae-be).toFixed(2)),dynamicMax:parseFloat((Ge+be).toFixed(2)),rawMin:Ae,rawMax:Ge}},[i,e,c,r]),Ue=R.useMemo(()=>{const Ae=(Lt[r]||Lt.T2M).unitEn;return`${ie.toFixed(1)}${Ae} ➔ C3 (~131 Hz) | ${Se.toFixed(1)}${Ae} ➔ C6 (~1047 Hz)`},[ie,Se,r]),X=R.useCallback(ve=>{var $e,be;if(m||_===0)return;const Ae=_,Ge=i.find(je=>je.year===ve);if(Ge&&Ge.value!==null&&!isNaN(Ge.value)){const je=Gn(Ge.value,W,te,T),tt=($e=n==null?void 0:n.recordsMap)==null?void 0:$e[ve];let Te=1;if(o&&o!=="NONE"&&t.length>0){const st=t.find(Je=>Je.year===ve);if(st&&st.value!==null&&!isNaN(st.value)){const Je=t.map(qe=>qe.value),k=Math.min(...Je),dt=Math.max(...Je),Ye=(st.value-k)/(dt-k||1);Te=.5+Math.max(0,Math.min(1,Ye))}}const it=y==="sine"||!y?r:y;zn({frequency:je,duration:.5/g,volume:Ae,instrument:it,pan:c?-.75:0,isRecordHigh:!!(tt!=null&&tt.isRecordHigh),isRecordLow:!!(tt!=null&&tt.isRecordLow),secondaryVolume:Te})}if(c&&e&&e.length>0){const je=e.find(tt=>tt.year===ve);if(je&&je.value!==null&&!isNaN(je.value)){const tt=Gn(je.value,W,te,T),Te=(be=a==null?void 0:a.recordsMap)==null?void 0:be[ve],it=y==="sine"||!y?r:y;zn({frequency:tt,duration:.5/g,volume:Ae,instrument:it,pan:.75,isRecordHigh:!!(Te!=null&&Te.isRecordHigh),isRecordLow:!!(Te!=null&&Te.isRecordLow),secondaryVolume:1})}}},[i,e,t,n,a,W,te,o,c,m,_,y,T,g]),me=R.useCallback((ve,Ae=0,Ge=100,$e=0)=>{if(m||_===0||ve===null||isNaN(ve))return;const be=Gn(ve,Ae,Ge,T);zn({frequency:be,duration:.35,volume:_*.9,instrument:y,pan:$e,isRecordHigh:!1,isRecordLow:!1})},[m,_,T,y]),ge=R.useCallback((ve,Ae=!0)=>{h(ve),l(ve,!0),Ae&&oe().then(()=>{X(ve)})},[l,X,oe]),he=R.useCallback(()=>{if(i.length===0)return;const ve=i[0].year,Ae=i[i.length-1].year,Ge=j.current<=ve?Ae:j.current-1;ge(Ge,!0)},[i,ge]),K=R.useCallback(()=>{if(i.length===0)return;const ve=i[0].year,Ae=i[i.length-1].year,Ge=j.current>=Ae?ve:j.current+1;ge(Ge,!0)},[i,ge]),Re=R.useCallback(async()=>{d?(u(!1),l(j.current,!1,!0)):(await oe(),u(!0))},[d,oe,l]),Oe=R.useCallback(()=>{M(ve=>!ve)},[]),Ee=R.useCallback(ve=>{x(Math.max(.5,Math.min(3,ve)))},[]);R.useEffect(()=>{if(!d||i.length===0){V.current&&(clearInterval(V.current),V.current=null);return}const ve=i[0].year,Ae=i[i.length-1].year,Ge=Math.round(1e3/g);return X(j.current),V.current=setInterval(()=>{let $e=j.current+1;if($e>Ae)if(v)$e=ve;else{u(!1),clearInterval(V.current);return}h($e),l($e,!1),X($e)},Ge),()=>{V.current&&clearInterval(V.current)}},[d,i,g,v,X,l]),R.useEffect(()=>{if(i.length>0){const ve=i[0].year,Ae=i[i.length-1].year;(p<ve||p>Ae)&&h(ve)}},[i]);const Ce=R.useCallback(async ve=>{if(D)return;await oe(),F(!0),I(0);const Ae=40,Ge=60;let $e=0;const be=await ve(Ae),je=be.filter(it=>it!==null&&!isNaN(it)),tt=je.length>0?Math.min(...je):0,Te=je.length>0?Math.max(...je):100;Q.current=setInterval(()=>{if($e>=Ae){clearInterval(Q.current),Q.current=null,F(!1),I(null);return}const it=$e/Ae;I(it);const st=be[$e];if(st!==null&&!isNaN(st)&&!m&&_>0){const Je=(it-.5)*1.6,k=Gn(st,tt,Te,T);zn({frequency:k,duration:.12,volume:_*.75,instrument:y,pan:Je,isRecordHigh:!1,isRecordLow:!1})}$e++},Ge)},[D,oe,m,_,T,y]);return R.useEffect(()=>()=>{Q.current&&clearInterval(Q.current)},[]),{isPlaying:d,currentYear:p,playbackSpeed:g,volume:_,isMuted:m,instrument:y,quantizeScale:T,isLooping:v,audioActive:O,dynamicMin:W,dynamicMax:te,rawMin:ie,rawMax:Se,pitchMappingText:Ue,isScanning:D,scanProgress:q,togglePlay:Re,setYear:ge,stepForward:K,stepBackward:he,setVolume:f,toggleMute:Oe,setInstrument:E,setQuantizeScale:S,setIsLooping:N,changeSpeed:Ee,unlockAudio:oe,playYearTone:X,playFramePixelTone:me,startFrameScan:Ce}}function ux({initialStageId:i="air",locationA:e,locationB:t,isCompareMode:n=!1,mapZoom:a=5,volume:r=.7,isMuted:o=!1,instrument:c="sine",quantizeScale:l=!0,unlockAudio:d=async()=>!0,onFrameChange:u=()=>{}}){const[p,h]=R.useState(i),[g,x]=R.useState($n[0].animations[0].id),[_,f]=R.useState("monthly"),[m,M]=R.useState(0),[y,E]=R.useState(!1),[T,S]=R.useState(1),[v,N]=R.useState(!0),[O,C]=R.useState(.85),[D,F]=R.useState(null),[q,I]=R.useState(!1),[V,Q]=R.useState(null),[j,oe]=R.useState({}),[W,te]=R.useState({}),[ie,Se]=R.useState(!1),[Ue,X]=R.useState(null),[me,ge]=R.useState({loading:!1,error:null,primaryMap:null,secondaryMap:null}),[he,K]=R.useState(!1),[Re,Oe]=R.useState(null),[Ee,Ce]=R.useState(0),ve=R.useRef(null),Ae=R.useRef(null),Ge=R.useRef(m);Ge.current=m;const $e=R.useMemo(()=>$n.find(G=>G.id===p)||$n[0],[p]),be=R.useMemo(()=>Xl.find(G=>G.id===g)||$e.animations[0],[g,$e]),je=R.useCallback(G=>{const Y=$n.find(P=>P.id===G);Y&&(E(!1),h(Y.id),x(Y.animations[0].id),M(0))},[]),tt=R.useCallback(G=>{const Y=Xl.find(P=>P.id===G);Y&&(E(!1),h(Y.stageId),x(Y.id),M(0))},[]),Te=R.useMemo(()=>V0(be,_),[be,_]);R.useEffect(()=>{Te.length>0&&m>=Te.length&&M(0)},[Te,m]);const it=Te[m]||Te[0]||be.availableRange.end,st=R.useCallback(()=>{Ce(G=>G+1)},[]);R.useEffect(()=>{let G=!1;if(Q(null),!be.colormapId){F(null),I(!1);return}return I(!0),hd(be).then(Y=>{G||(!Y||Y.length===0?(F(null),Q(`Unable to load NASA GIBS colormap (${be.colormapId}).`)):(F(Y),Q(null)))}).catch(Y=>{G||(F(null),Q((Y==null?void 0:Y.message)||"Failed to fetch NASA GIBS colormap."))}).finally(()=>{G||I(!1)}),()=>{G=!0}},[be,Ee]),R.useEffect(()=>{if(!be.pairedPowerParam||!e){ge({loading:!1,error:null,primaryMap:null,secondaryMap:null});return}const G=new AbortController;let Y=!1;const P=parseInt((Te[0]||"2020-01-01").slice(0,4),10),Z=Math.min(2025,parseInt((Te[Te.length-1]||"2025-01-01").slice(0,4),10)),H=Math.min(P,Z);ge(se=>({...se,loading:!0,error:null}));const de=[ql(e.lat,e.lon,be.pairedPowerParam,H,Z,G.signal)];return be.pairedPowerSecondaryParam&&de.push(ql(e.lat,e.lon,be.pairedPowerSecondaryParam,H,Z,G.signal)),Promise.all(de).then(([se,xe])=>{Y||ge({loading:!1,error:null,primaryMap:se||null,secondaryMap:xe||null})}).catch(se=>{se.name==="AbortError"||Y||ge({loading:!1,error:(se==null?void 0:se.message)||"Failed to fetch paired NASA POWER data.",primaryMap:null,secondaryMap:null})}),()=>{Y=!0,G.abort()}},[be,e,Te,Ee]),R.useEffect(()=>{if(!e||Te.length===0)return;const G=Math.min(a,be.maxNativeZoom),Y=pn(e.lat,e.lon,G),P=[];[-1,0,1,2].forEach(Z=>{const H=(m+Z+Te.length)%Te.length,de=Te[H];if(de&&(P.push(sn(be,de,G,Y.tileY,Y.tileX)),n&&t)){const se=pn(t.lat,t.lon,G);P.push(sn(be,de,G,se.tileY,se.tileX))}}),j0(P)},[m,Te,be,e,t,n,a]),R.useEffect(()=>{if(!e||Te.length===0||be.colormapId&&q)return;let G=!1;Se(!0),X(null),oe({}),te({});const Y=Math.min(4,be.maxNativeZoom);async function P(){const Z=pn(e.lat,e.lon,Y),H=n&&t?pn(t.lat,t.lon,Y):null,de={},se={};let xe=0,we=0;const ze=4;for(let le=0;le<Te.length;le+=ze){if(G)return;const Le=Te.slice(le,le+ze);await Promise.all(Le.map(async We=>{const ce=sn(be,We,Y,Z.tileY,Z.tileX),Ve=await qn(ce,Z.pixelX,Z.pixelY,D,be);if(de[We]=Ve,Ve!=null&&Ve.corsError&&xe++,Ve!=null&&Ve.missingTile&&we++,H){const nt=sn(be,We,Y,H.tileY,H.tileX),Et=await qn(nt,H.pixelX,H.pixelY,D,be);se[We]=Et}})),G||(oe({...de}),H&&te({...se}))}G||(xe>0&&xe===Te.length?X("CORS blocked reading GIBS satellite pixels from canvas."):we===Te.length&&X(`Failed to load GIBS tiles for ${be.gibsLayerId}. Check your network and click Retry.`),Se(!1))}return P().catch(Z=>{G||(X((Z==null?void 0:Z.message)||"Error sampling satellite frames."),Se(!1))}),()=>{G=!0}},[be,Te,e,t,n,D,q,Ee]);const{seriesA:Je,seriesB:k,statsA:dt,statsB:Ye,dynamicMin:qe,dynamicMax:ye,rawMin:ht,rawMax:Fe}=R.useMemo(()=>{var ze,le,Le,We;const G=Te.map((ce,Ve)=>{const nt=j[ce],Et=ce.slice(0,7).replace("-",""),on=me.primaryMap?me.primaryMap[Et]??null:null,ti=me.secondaryMap?me.secondaryMap[Et]??null:null;return{index:Ve,year:Ve,date:ce,value:(nt==null?void 0:nt.value)??null,label:(nt==null?void 0:nt.label)||"No Data",sample:nt,powerValue:on,powerValueSecondary:ti}}),Y=n?Te.map((ce,Ve)=>{const nt=W[ce];return{index:Ve,year:Ve,date:ce,value:(nt==null?void 0:nt.value)??null,label:(nt==null?void 0:nt.label)||"No Data",sample:nt}}):[],P=ha(G),Z=n?ha(Y):null;let H=G.filter(ce=>ce.value!==null&&!isNaN(ce.value)).map(ce=>ce.value);n&&(H=H.concat(Y.filter(ce=>ce.value!==null&&!isNaN(ce.value)).map(ce=>ce.value)));let de=((ze=be.valueDomain)==null?void 0:ze.min)??0,se=((le=be.valueDomain)==null?void 0:le.max)??100,xe=de,we=se;if(H.length>=2){de=Math.min(...H),se=Math.max(...H);const ce=se-de,Ve=ce===0?Math.max(.05,Math.abs(de)*.1||1):ce*.08;xe=parseFloat((de-Ve).toFixed(3)),we=parseFloat((se+Ve).toFixed(3))}else H.length===1&&(de=Math.min(H[0],((Le=be.valueDomain)==null?void 0:Le.min)??H[0]),se=Math.max(H[0],((We=be.valueDomain)==null?void 0:We.max)??H[0]),xe=de,we=se===de?de+1:se);return{seriesA:G,seriesB:Y,statsA:P,statsB:Z,dynamicMin:xe,dynamicMax:we,rawMin:de,rawMax:se}},[Te,j,W,n,be,me]),He=R.useMemo(()=>{const G=be.unitEn,Y=P=>Math.abs(P)<2?P.toFixed(3):Math.abs(P)<20?P.toFixed(2):P.toFixed(1);return`${Y(ht)} ${G} ➔ C3 (~131 Hz) | ${Y(Fe)} ${G} ➔ C6 (~1047 Hz)`},[ht,Fe,be]),w=R.useCallback(G=>{var P,Z;if(o||r===0)return;const Y=Je[G];if(Y&&Y.value!==null&&!isNaN(Y.value)){const H=Gn(Y.value,qe,ye,l),de=(P=dt==null?void 0:dt.recordsMap)==null?void 0:P[G];zn({frequency:H,duration:.45/T,volume:r,instrument:c,pan:n?-.75:0,isRecordHigh:!!(de!=null&&de.isRecordHigh),isRecordLow:!!(de!=null&&de.isRecordLow)})}if(n&&k[G]){const H=k[G];if(H.value!==null&&!isNaN(H.value)){const de=Gn(H.value,qe,ye,l),se=(Z=Ye==null?void 0:Ye.recordsMap)==null?void 0:Z[G];zn({frequency:de,duration:.45/T,volume:r,instrument:c,pan:.75,isRecordHigh:!!(se!=null&&se.isRecordHigh),isRecordLow:!!(se!=null&&se.isRecordLow)})}}},[o,r,Je,k,qe,ye,l,dt,Ye,T,c,n]),A=R.useCallback((G,Y=0)=>{if(o||r===0||G===null||isNaN(G))return;const P=Gn(G,qe,ye,l);zn({frequency:P,duration:.35,volume:r*.9,instrument:c,pan:Y,isRecordHigh:!1,isRecordLow:!1})},[o,r,qe,ye,l,c]),U=R.useCallback((G,Y=!0,P=!0)=>{if(Te.length===0)return;const Z=Math.max(0,Math.min(Te.length-1,G));M(Z),u(Z,Te[Z],Je[Z],P,!1),Y&&d().then(()=>w(Z))},[Te,Je,u,d,w]),re=R.useCallback(()=>{if(Te.length===0)return;const G=Ge.current>=Te.length-1?0:Ge.current+1;U(G,!0,!0)},[Te.length,U]),J=R.useCallback(()=>{if(Te.length===0)return;const G=Ge.current<=0?Te.length-1:Ge.current-1;U(G,!0,!0)},[Te.length,U]),ue=R.useCallback(async()=>{y?(E(!1),u(Ge.current,Te[Ge.current],Je[Ge.current],!1,!0)):(await d(),E(!0))},[y,d,u,Te,Je]);R.useEffect(()=>{if(!y||Te.length===0){ve.current&&(clearInterval(ve.current),ve.current=null);return}const G=Math.round(950/T);return w(Ge.current),ve.current=setInterval(()=>{let Y=Ge.current+1;if(Y>=Te.length)if(v)Y=0;else{E(!1),clearInterval(ve.current);return}M(Y),u(Y,Te[Y],Je[Y],!1,!1),w(Y)},G),()=>{ve.current&&clearInterval(ve.current)}},[y,Te,T,v,w,u,Je]);const pe=R.useCallback(async G=>{if(he)return;await d(),K(!0),Oe(0);const Y=40,P=60;let Z=0;const H=await G(Y),de=H.filter(we=>we!==null&&!isNaN(we)),se=de.length>0?Math.min(...de):qe,xe=de.length>0?Math.max(...de):ye;Ae.current=setInterval(()=>{if(Z>=Y){clearInterval(Ae.current),Ae.current=null,K(!1),Oe(null);return}const we=Z/Y;Oe(we);const ze=H[Z];if(ze!==null&&!isNaN(ze)&&!o&&r>0){const le=(we-.5)*1.6,Le=Gn(ze,se,xe,l);zn({frequency:Le,duration:.12,volume:r*.75,instrument:c,pan:le,isRecordHigh:!1,isRecordLow:!1})}Z++},P)},[he,d,qe,ye,o,r,l,c]);return R.useEffect(()=>()=>{Ae.current&&clearInterval(Ae.current)},[]),{selectedStageId:p,selectedStage:$e,selectedAnimationId:g,selectedAnimation:be,selectStage:je,selectAnimation:tt,cadence:_,setCadence:f,dates:Te,currentIndex:m,currentDate:it,setFrameIndex:U,isPlaying:y,togglePlay:ue,stepForward:re,stepBackward:J,playbackSpeed:T,setPlaybackSpeed:S,isLooping:v,setIsLooping:N,gibsOpacity:O,setGibsOpacity:C,colormapData:D,colormapLoading:q,samplingLoading:ie,powerData:me,samplesByDateA:j,samplesByDateB:W,seriesA:Je,seriesB:k,statsA:dt,statsB:Ye,dynamicMin:qe,dynamicMax:ye,rawMin:ht,rawMax:Fe,pitchMappingText:He,playSinglePixelValue:A,isScanning:he,scanProgress:Re,startFrameScan:pe,error:V||Ue||null,retry:st}}function hx({language:i="en",statsA:e=null,locationA:t=null,primaryVariable:n="T2M",isCompareMode:a=!1,locationB:r=null,statsB:o=null}){const[c,l]=R.useState(!1),[d,u]=R.useState(!1),p=R.useRef(null);R.useEffect(()=>{typeof window<"u"&&"speechSynthesis"in window&&u(!0)},[]);const h=R.useCallback(()=>{typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),l(!1))},[]),g=R.useCallback(()=>{if(!e||!t)return"";const _=Lt[n]||Lt.T2M,f=i==="ar"&&t.nameAr||t.nameEn,m=i==="ar"?_.nameAr:_.nameEn,M=i==="ar"?_.unitAr:_.unitEn,y=Math.abs(e.changePerDecade).toFixed(2),E=e.changePerDecade>=0?i==="ar"?"ارتفعت":"rose":i==="ar"?"انخفضت":"declined",T=e.isSignificant?i==="ar"?"وهو تغير دال إحصائياً.":"a statistically significant change.":i==="ar"?"ولكن التغير ليس دالاً إحصائياً.":"though the trend is not statistically significant.",S=e.recordHigh?i==="ar"?`سُجلت أعلى قيمة بلغت ${e.recordHigh.value} ${M} في عام ${e.recordHigh.year}.`:`The all-time record high of ${e.recordHigh.value} ${M} was reached in ${e.recordHigh.year}.`:"";if(i==="ar"){let v=`${E} ${m} في ${f} بمعدل ${y} ${M} لكل عقد منذ عام 1990، ${T} ${S}`;if(a&&o&&r){const N=r.nameAr||r.nameEn,O=Math.abs(o.changePerDecade).toFixed(2),C=o.changePerDecade>=0?"ارتفعت":"انخفضت";v+=` بينما في ${N}، ${C} بمعدل ${O} ${M} لكل عقد.`}return v}else{let v=`${m} in ${f} ${E} ${y} ${M} per decade since 1990, ${T} ${S}`;if(a&&o&&r){const N=Math.abs(o.changePerDecade).toFixed(2),O=o.changePerDecade>=0?"rose":"declined";v+=` In comparison, ${m} in ${r.nameEn} ${O} ${N} ${M} per decade.`}return v}},[i,e,t,n,a,r,o]),x=R.useCallback(()=>{if(!d||typeof window>"u")return;window.speechSynthesis.cancel();const _=g();if(!_)return;const f=new SpeechSynthesisUtterance(_);p.current=f,f.lang=i==="ar"?"ar-EG":"en-US",f.rate=.95,f.pitch=1;const m=window.speechSynthesis.getVoices();if(m&&m.length>0){const M=i==="ar"?"ar":"en",y=m.find(E=>E.lang.startsWith(M));y&&(f.voice=y)}f.onstart=()=>{l(!0)},f.onend=()=>{l(!1)},f.onerror=M=>{console.warn("Speech synthesis error:",M),l(!1)},window.speechSynthesis.speak(f)},[d,g,i]);return R.useEffect(()=>()=>{typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()},[]),{isSpeaking:c,speechSupported:d,speakSummary:x,stopSpeaking:h,summaryText:g()}}function fx({onTogglePlay:i,onStepBackward:e,onStepForward:t,onIncreaseSpeed:n,onDecreaseSpeed:a,onToggleMute:r,onToggleHelpModal:o,onCloseModal:c}){R.useEffect(()=>{const l=d=>{const u=document.activeElement;if(d.code==="Escape"){d.preventDefault(),c==null||c();return}if(u&&(u.tagName==="BUTTON"||u.tagName==="A"||u.tagName==="SELECT"||u.tagName==="TEXTAREA"||u.tagName==="SUMMARY"||u.isContentEditable||u.tagName==="INPUT"&&u.type!=="range"))return;const h=!u||u===document.body||u===document.documentElement||u.id==="main-content"||u.tagName==="INPUT"&&u.type==="range";switch(d.code){case"Space":d.preventDefault(),i==null||i();break;case"ArrowLeft":h&&(d.preventDefault(),e==null||e());break;case"ArrowRight":h&&(d.preventDefault(),t==null||t());break;case"ArrowUp":h&&(d.preventDefault(),n==null||n());break;case"ArrowDown":h&&(d.preventDefault(),a==null||a());break;case"KeyM":d.preventDefault(),r==null||r();break;case"KeyH":d.preventDefault(),o==null||o();break}};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[i,e,t,n,a,r,o,c])}function px(){const[i,e]=R.useState("en"),[t,n]=R.useState(()=>{try{const ce=localStorage.getItem("terra-tone-theme");return ce==="light"||ce==="dark"?ce:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}catch{return"dark"}}),[a,r]=R.useState(!0),[o,c]=R.useState(!1),[l,d]=R.useState(!1),[u,p]=R.useState(!1),[h,g]=R.useState(!1),[x,_]=R.useState(!1),[f,m]=R.useState("night-lights-decade"),[M,y]=R.useState(!1),[E,T]=R.useState("power"),S=R.useCallback(()=>{n(ce=>{const Ve=ce==="dark"?"light":"dark";try{localStorage.setItem("terra-tone-theme",Ve)}catch{}return Ve})},[]),v=R.useCallback(()=>{c(ce=>!ce)},[]),N=R.useCallback(()=>{d(ce=>!ce)},[]),O=R.useCallback(()=>{e(ce=>ce==="en"?"ar":"en")},[]),C=R.useCallback(()=>{r(ce=>!ce)},[]);R.useEffect(()=>{document.documentElement.lang=i,document.documentElement.dir=i==="ar"?"rtl":"ltr"},[i]),R.useEffect(()=>{const ce=o?"high-contrast":t;document.documentElement.setAttribute("data-theme",ce),document.body.setAttribute("data-theme",ce);const Ve=document.getElementById("meta-theme-color");Ve&&Ve.setAttribute("content",o?"#000000":ce==="light"?"#F8FAFC":"#050816")},[t,o]),R.useEffect(()=>{l?(document.documentElement.setAttribute("data-font-size","large"),document.body.setAttribute("data-font-size","large")):(document.documentElement.removeAttribute("data-font-size"),document.body.removeAttribute("data-font-size"))},[l]);const[D,F]=R.useState("T2M"),[q,I]=R.useState("NONE"),[V,Q]=R.useState(ua[0]),[j,oe]=R.useState(ua[1]),[W,te]=R.useState(!1),[ie,Se]=R.useState(!1),[Ue,X]=R.useState($n[0].presets[0]),[me,ge]=R.useState($n[0].presets[1]),[he,K]=R.useState(!1),[Re,Oe]=R.useState(""),Ee=Lt[D]||Lt.T2M,{loading:Ce,error:ve,dataA:Ae,dataB:Ge,secondaryDataA:$e,statsA:be,statsB:je,years:tt,refetch:Te}=cx({primaryVariable:D,secondaryVariable:q,locationA:V,locationB:j,isCompareMode:W}),it=R.useCallback((ce,Ve=!1,nt=!1)=>{const Et=Ae.find(on=>on.year===ce);if(Et){const on=i==="ar"?`سنة ${ce}، ${Ee.nameAr}: ${Et.value} ${Ee.unitAr}`:`Year ${ce}, ${Ee.nameEn}: ${Et.value} ${Ee.unitEn}`;Oe(on)}},[Ae,Ee,i]),{isPlaying:st,currentYear:Je,playbackSpeed:k,volume:dt,isMuted:Ye,instrument:qe,quantizeScale:ye,isLooping:ht,togglePlay:Fe,setYear:He,stepForward:w,stepBackward:A,setVolume:U,toggleMute:re,setInstrument:J,setQuantizeScale:ue,setIsLooping:pe,changeSpeed:ee,unlockAudio:G,playFramePixelTone:Y,startFrameScan:P,isScanning:Z,scanProgress:H,pitchMappingText:de}=dx({dataA:Ae,dataB:Ge,secondaryDataA:$e,statsA:be,statsB:je,primaryVariable:D,secondaryVariable:q,isCompareMode:W,onYearChange:it}),se=ux({initialStageId:"air",locationA:Ue,locationB:me,isCompareMode:he,volume:dt,isMuted:Ye,instrument:qe,quantizeScale:ye,unlockAudio:G}),{isSpeaking:xe,speechSupported:we,speakSummary:ze,stopSpeaking:le,summaryText:Le}=hx({language:i,statsA:be,locationA:V,primaryVariable:D,isCompareMode:W,locationB:j,statsB:je});fx({onTogglePlay:Fe,onStepBackward:A,onStepForward:w,onIncreaseSpeed:()=>ee(k===2?.5:k+.5),onToggleMute:re});const We=ce=>{const Ve=document.getElementById(ce);Ve&&Ve.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("div",{className:"terra-redesign-wrapper","data-theme":t,children:[s.jsx("div",{className:"sr-only",role:"status","aria-live":"polite",children:Re}),s.jsx(Qd,{theme:t,onToggleTheme:S,lang:i,onToggleLang:O,soundEnabled:a,onToggleSound:C,isHighContrast:o,onToggleHighContrast:v,isLargeText:l,onToggleLargeText:N,onOpenAbout:()=>g(!0),onOpenShortcuts:()=>p(!0),onOpenEICModal:()=>_(!0)}),s.jsxs("main",{id:"main-content",children:[s.jsx(b0,{lang:i,isDark:t==="dark",onExploreClick:()=>We("explore"),onHowItWorksClick:()=>We("science")}),s.jsx(M0,{lang:i}),s.jsx(L0,{lang:i,onSelectDataset:ce=>{m(ce)}}),s.jsx(U0,{lang:i,isDark:t==="dark",selectedDatasetId:f,onDatasetChange:m}),s.jsxs("div",{className:"advanced-explorer-wrapper",style:{maxWidth:"1380px",margin:"0 auto 4rem auto",padding:"0 1.5rem"},children:[s.jsxs("button",{onClick:()=>y(!M),className:"advanced-explorer-toggle-btn",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--color-bg-card)",border:"1px solid var(--color-border)",borderRadius:"14px",padding:"1.15rem 1.75rem",color:"var(--color-text-primary)",fontSize:"1rem",fontWeight:700,cursor:"pointer",boxShadow:"var(--shadow-card-elevated)",transition:"all 0.2s ease"},children:[s.jsxs("div",{style:{display:"flex",alignItem:"center",gap:"0.75rem"},children:[s.jsx(hi,{size:20,color:"var(--color-accent-primary)"}),s.jsx("span",{children:i==="ar"?"مستكشف خرائط ناسا المتقدم (NASA GIBS & Global Coordinates)":"Advanced Geospatial Satellite Map & Coordinate Picker (NASA GIBS)"})]}),M?s.jsx(bs,{size:20}):s.jsx(ys,{size:20})]}),M&&s.jsxs("div",{style:{marginTop:"1.5rem",background:"var(--color-bg-card)",borderRadius:"16px",padding:"1.5rem",border:"1px solid var(--color-border)"},children:[s.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"1.25rem"},children:[s.jsx("button",{onClick:()=>T("power"),className:`cat-pill-btn ${E==="power"?"active":""}`,children:i==="ar"?"سلاسل المناخ (NASA POWER)":"NASA POWER Climate Explorer"}),s.jsx("button",{onClick:()=>T("pollution"),className:`cat-pill-btn ${E==="pollution"?"active":""}`,children:i==="ar"?"مراحل التلوث العالمية":"Global Pollution Stages"})]}),E==="pollution"?s.jsx(tx,{pollution:se,pollutionState:se,lang:i,theme:t,locationA:Ue,onSelectLocationA:X,locationB:me,onSelectLocationB:ge,isCompareMode:he,onToggleCompareMode:K,volume:dt,onChangeVolume:U,isMuted:Ye,onToggleMute:re,instrument:qe,onChangeInstrument:J,quantizeScale:ye,onToggleQuantizeScale:ue,onAnnounce:Oe}):s.jsxs(s.Fragment,{children:[Ce&&s.jsxs("div",{className:"loading-bar-wrap",role:"status",children:[s.jsx(aa,{className:"icon-sm spin"}),s.jsx("span",{children:i==="ar"?"جاري جلب بيانات المناخ...":"Fetching NASA climate series..."})]}),ve&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ta,{className:"icon"}),s.jsx("span",{children:ve}),s.jsx("button",{type:"button",className:"btn-retry",onClick:Te,children:"Retry"})]}),s.jsxs("div",{className:"grid-two-columns",children:[s.jsx(nx,{lang:i,theme:t,locationA:V,onSelectLocationA:Q,locationB:j,onSelectLocationB:oe,isCompareMode:W,onToggleCompareMode:te,currentYear:Je,dataA:Ae,dataB:Ge,primaryVariable:D,onPlayFramePixelTone:Y,onStartFrameScan:P,isScanning:Z,scanProgress:H}),ie?s.jsx(ox,{lang:i,dataA:Ae,dataB:Ge,statsA:be,statsB:je,primaryVariable:D,locationA:V,locationB:j,isCompareMode:W,currentYear:Je,showTable:ie,onToggleTable:Se}):s.jsx(ix,{lang:i,theme:t,dataA:Ae,dataB:Ge,statsA:be,statsB:je,currentYear:Je,primaryVariable:D,locationA:V,locationB:j,isCompareMode:W,showTable:ie,onToggleTable:Se})]}),s.jsxs("div",{className:"grid-two-columns",style:{marginTop:"1rem"},children:[s.jsx(ax,{lang:i,currentYear:Je,years:tt,isPlaying:st,onTogglePlay:Fe,onStepBackward:A,onStepForward:w,onSelectYear:ce=>He(ce,!0),playbackSpeed:k,onChangeSpeed:ee,isLooping:ht,onToggleLoop:()=>pe(ce=>!ce)}),s.jsx(sx,{lang:i,volume:dt,onChangeVolume:U,isMuted:Ye,onToggleMute:re,instrument:qe,onChangeInstrument:J,quantizeScale:ye,onToggleQuantizeScale:ue,primaryVariable:D,onChangePrimaryVariable:F,secondaryVariable:q,onChangeSecondaryVariable:I,isCompareMode:W,pitchMappingText:de})]}),s.jsx(rx,{lang:i,statsA:be,statsB:je,locationA:V,locationB:j,primaryVariable:D,isCompareMode:W,isSpeaking:xe,speechSupported:we,onSpeakSummary:ze,onStopSpeaking:le,summaryText:Le})]})]})]}),s.jsx(O0,{lang:i}),s.jsx(F0,{lang:i})]}),s.jsx(G0,{isOpen:u,onClose:()=>p(!1),lang:i}),s.jsx(W0,{isOpen:h,onClose:()=>g(!1),lang:i}),s.jsx($0,{isOpen:x,onClose:()=>_(!1),lang:i,theme:t}),s.jsxs("aside",{className:"floating-a11y-pill","aria-label":"Accessibility quick controls",children:[s.jsxs("button",{onClick:v,className:`navbar-icon-btn a11y-toggle-btn contrast-btn ${o?"is-active":""}`,title:i==="ar"?o?"إلغاء التباين العالي":"تفعيل وضع التباين العالي (WCAG AAA)":o?"Disable High Contrast":"Enable High Contrast (WCAG AAA)","aria-label":"Toggle High Contrast Mode","aria-pressed":o,children:[s.jsx(gr,{size:16,className:"contrast-icon-anim"}),s.jsx("span",{className:"a11y-badge-dot"})]}),s.jsxs("button",{onClick:N,className:`navbar-icon-btn a11y-toggle-btn text-size-btn ${l?"is-active":""}`,title:i==="ar"?l?"استعادة حجم الخط العادي":"تكبير حجم الخط (نص كبير)":l?"Reset Normal Font Size":"Enlarge Font Size (Large Text)","aria-label":"Toggle Large Font Size","aria-pressed":l,children:[s.jsxs("span",{className:"text-size-icon-anim",children:[s.jsx("span",{className:"letter-base",children:"A"}),s.jsx("span",{className:"letter-plus",children:"+"})]}),s.jsx("span",{className:"a11y-badge-dot"})]})]})]})}class mx extends Kl.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Earth Jukebox runtime error:",e,t)}render(){var e;return this.state.hasError?s.jsxs("div",{role:"alert",style:{minHeight:"100vh",backgroundColor:"#070a13",color:"#f8fafc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center",gap:"1rem"},children:[s.jsx("h1",{style:{fontSize:"1.4rem",color:"#38bdf8",margin:0},children:"Earth Jukebox failed to render"}),s.jsx("p",{style:{maxWidth:"520px",color:"#cbd5e1",margin:0},children:((e=this.state.error)==null?void 0:e.message)||"Unexpected application error."}),s.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{padding:"0.6rem 1.2rem",borderRadius:"8px",border:"1px solid #38bdf8",backgroundColor:"#0f172a",color:"#f8fafc",cursor:"pointer",fontWeight:700},children:"Reload Application"})]}):this.props.children}}mr.createRoot(document.getElementById("root")).render(s.jsx(Kl.StrictMode,{children:s.jsx(mx,{children:s.jsx(px,{})})}));

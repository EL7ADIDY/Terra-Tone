import{r as R,j as s,C as co,a as uo,L as ho,P as fo,b as po,p as mo,d as go,e as xo,i as vo,f as _o,R as Zl}from"./chartjs-B4Rk94oj.js";import{r as md}from"./react-CTEZVXUg.js";import{L as Wt}from"./leaflet-BtnBn_9I.js";import{J as gd}from"./jszip-Cj3QqAs6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();var pr={},Xo=md;pr.createRoot=Xo.createRoot,pr.hydrateRoot=Xo.hydrateRoot;const xd=[48,50,52,55,57,60,62,64,67,69,72,74,76,79,81,84];function vd(i){return 440*Math.pow(2,(i-69)/12)}const ui=xd.map(vd),Is=ui[0],_d=ui[ui.length-1];function jn(i,e,t,n=!0){if(i===null||isNaN(i))return Is;const a=Math.max(0,Math.min(1,(i-e)/(t-e||1)));if(n){const r=Math.round(a*(ui.length-1));return ui[r]}else return Is*Math.pow(_d/Is,a)}let Ls=null,vi=null;function xa(){if(!Ls){const i=window.AudioContext||window.webkitAudioContext;i&&(Ls=new i)}return Ls}function ti(){const i=xa();if(!i)return null;if(!vi)try{vi=i.createAnalyser(),vi.fftSize=256,vi.smoothingTimeConstant=.8,vi.connect(i.destination)}catch{return null}return vi}async function vs(){const i=xa();if(!i)return!1;if(i.state==="suspended")try{await i.resume()}catch(e){return console.warn("AudioContext resume failed:",e),!1}return i.state==="running"}function Vn({frequency:i,duration:e=.45,volume:t=.7,instrument:n="sine",pan:a=0,isRecordHigh:r=!1,isRecordLow:o=!1,secondaryVolume:l=1}){const c=xa();if(!c||c.state!=="running")return;const d=c.currentTime,h=Math.max(.15,e*.85),m=c.createGain(),u=Math.max(0,Math.min(1,t*l)),g=ti()||c.destination;let x=null;if(c.createStereoPanner?(x=c.createStereoPanner(),x.pan.setValueAtTime(Math.max(-1,Math.min(1,a)),d),m.connect(x),x.connect(g)):m.connect(g),n==="soft_pluck"){const y=c.createOscillator();y.type="triangle",y.frequency.setValueAtTime(i,d);const p=c.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(Math.min(3e3,i*4),d),p.frequency.exponentialRampToValueAtTime(Math.max(120,i*.8),d+h),m.gain.setValueAtTime(1e-4,d),m.gain.linearRampToValueAtTime(u*.8,d+.008),m.gain.exponentialRampToValueAtTime(1e-4,d+h),y.connect(p),p.connect(m),y.start(d),y.stop(d+h+.05)}else if(n==="triangle"){const y=c.createOscillator();y.type="triangle",y.frequency.setValueAtTime(i,d);const p=c.createOscillator();p.type="sine",p.frequency.setValueAtTime(i*2,d);const f=c.createGain();f.gain.setValueAtTime(.15,d),m.gain.setValueAtTime(1e-4,d),m.gain.linearRampToValueAtTime(u*.7,d+.03),m.gain.exponentialRampToValueAtTime(1e-4,d+h),y.connect(m),p.connect(f),f.connect(m),y.start(d),p.start(d),y.stop(d+h+.05),p.stop(d+h+.05)}else{const y=c.createOscillator();y.type="sine",y.frequency.setValueAtTime(i,d),m.gain.setValueAtTime(1e-4,d),m.gain.linearRampToValueAtTime(u*.75,d+.03),m.gain.exponentialRampToValueAtTime(u*.35,d+h*.4),m.gain.exponentialRampToValueAtTime(1e-4,d+h),y.connect(m),y.start(d),y.stop(d+h+.05)}r&&Sd(c,d+.06,u,a),o&&yd(c,d+.06,u,a)}function Sd(i,e,t,n){[880,1174.66,1760].forEach((r,o)=>{const l=e+o*.07,c=i.createOscillator(),d=i.createGain();if(c.type="sine",c.frequency.setValueAtTime(r,l),d.gain.setValueAtTime(1e-4,l),d.gain.linearRampToValueAtTime(t*.35,l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+.28),i.createStereoPanner){const h=i.createStereoPanner();h.pan.setValueAtTime(n,l),d.connect(h),h.connect(i.destination)}else d.connect(i.destination);c.connect(d),c.start(l),c.stop(l+.3)})}function yd(i,e,t,n){const a=i.createOscillator(),r=i.createGain();if(a.type="triangle",a.frequency.setValueAtTime(98,e),a.frequency.exponentialRampToValueAtTime(65.41,e+.4),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(t*.45,e+.02),r.gain.exponentialRampToValueAtTime(1e-4,e+.5),i.createStereoPanner){const o=i.createStereoPanner();o.pan.setValueAtTime(n,e),r.connect(o),o.connect(i.destination)}else r.connect(i.destination);a.connect(r),a.start(e),a.stop(e+.55)}function bd({theme:i,onToggleTheme:e,soundEnabled:t=!0}){const[n,a]=R.useState(0),[r,o]=R.useState(!1),[l,c]=R.useState(!1),d=R.useRef(0),h=R.useRef(0),m=i==="dark",u=R.useCallback(()=>{if(t)try{const E=xa();if(!E||E.state!=="running")return;const _=E.createOscillator(),N=E.createGain(),T=E.currentTime;_.type="triangle",_.frequency.setValueAtTime(m?520:680,T),_.frequency.exponentialRampToValueAtTime(140,T+.04),N.gain.setValueAtTime(.08,T),N.gain.exponentialRampToValueAtTime(.001,T+.04),_.connect(N),N.connect(E.destination),_.start(T),_.stop(T+.045)}catch{}},[t,m]),g=R.useCallback(()=>{u(),e()},[u,e]),x=E=>{E.preventDefault(),o(!0),c(!1),d.current=E.clientY,h.current=0;try{E.currentTarget.setPointerCapture(E.pointerId)}catch{}},y=E=>{if(!r)return;const _=E.clientY-d.current,N=Math.max(0,Math.min(45,_));h.current=N,a(N)},p=E=>{if(!r)return;o(!1);try{E.currentTarget.releasePointerCapture(E.pointerId)}catch{}h.current>=18&&g(),c(!0),a(0),setTimeout(()=>c(!1),500)},f=E=>{E.stopPropagation(),c(!0),a(15),setTimeout(()=>{a(0),g(),setTimeout(()=>c(!1),450)},120)},S=E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),f(E))};return s.jsxs("div",{className:`hanging-lamp-container ${m?"lamp-on":"lamp-off"}`,role:"button",tabIndex:0,"aria-label":`Toggle theme: current theme is ${i}. Pull cord or click lamp to switch.`,onKeyDown:S,title:`Theme: ${m?"Cosmic Dark":"Scientific Light"} (Click or pull string to switch)`,children:[s.jsx("div",{className:"lamp-mount-wire"}),s.jsxs("div",{className:"lamp-head",onClick:f,children:[s.jsxs("svg",{className:"lamp-svg",viewBox:"0 0 48 36",width:"44",height:"33","aria-hidden":"true",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"shadeGradDark",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),s.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),s.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),s.jsxs("linearGradient",{id:"shadeGradLight",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#64748b"}),s.jsx("stop",{offset:"50%",stopColor:"#cbd5e1"}),s.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]}),s.jsxs("radialGradient",{id:"bulbGlow",cx:"50%",cy:"50%",r:"50%",children:[s.jsx("stop",{offset:"0%",stopColor:"#fffbeb"}),s.jsx("stop",{offset:"40%",stopColor:"#fde047"}),s.jsx("stop",{offset:"80%",stopColor:"#f59e0b"}),s.jsx("stop",{offset:"100%",stopColor:"transparent"})]})]}),s.jsx("rect",{x:"21",y:"2",width:"6",height:"4",rx:"1",fill:m?"#64748b":"#475569"}),s.jsx("path",{d:"M 12 16 Q 24 6 36 16 L 40 22 Q 24 24 8 22 Z",fill:m?"url(#shadeGradDark)":"url(#shadeGradLight)",stroke:m?"#38bdf8":"#94a3b8",strokeWidth:"1"}),s.jsx("circle",{cx:"24",cy:"24",r:"6",className:"lamp-bulb-element",fill:m?"url(#bulbGlow)":"#cbd5e1",stroke:m?"#fef08a":"#94a3b8",strokeWidth:"1"})]}),m&&s.jsx("div",{className:"lamp-light-cone"})]}),s.jsxs("div",{className:`lamp-pull-cord-assembly ${l?"is-springing":""}`,style:{transform:`translateY(${n}px)`,transition:r?"none":"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)"},onPointerDown:x,onPointerMove:y,onPointerUp:p,onPointerCancel:p,children:[s.jsx("div",{className:"lamp-cord-line"}),s.jsx("div",{className:`lamp-pull-bead ${r?"is-dragging":""}`,title:"Drag down or click to switch theme",children:s.jsx("div",{className:"bead-inner"})})]})]})}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kl=(...i)=>i.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ed={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=R.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:a="",children:r,iconNode:o,...l},c)=>R.createElement("svg",{ref:c,...Ed,width:e,height:e,stroke:i,strokeWidth:n?Number(t)*24/Number(e):t,className:Kl("lucide",a),...l},[...o.map(([d,h])=>R.createElement(d,h)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(i,e)=>{const t=R.forwardRef(({className:n,...a},r)=>R.createElement(Ad,{ref:r,iconNode:e,className:Kl(`lucide-${Md(i)}`,n),...a}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=Le("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=Le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=Le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Le("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=Le("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=Le("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=Le("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=Le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Le("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=Le("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Le("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Le("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Le("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=Le("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Le("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=Le("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=Le("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=Le("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=Le("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=Le("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=Le("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=Le("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=Le("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=Le("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Le("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=Le("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=Le("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Le("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=Le("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=Le("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=Le("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=Le("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=Le("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=Le("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=Le("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=Le("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=Le("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=Le("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=Le("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=Le("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=Le("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=Le("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=Le("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=Le("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=Le("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Le("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=Le("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=Le("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Le("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=Le("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Le("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=Le("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Le("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=Le("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=Le("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=Le("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=Le("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=Le("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=Le("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=Le("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=Le("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Le("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=Le("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=Le("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=Le("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=Le("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=Le("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=Le("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=Le("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=Le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=Le("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Jd({theme:i,onToggleTheme:e,lang:t,onToggleLang:n,soundEnabled:a,onToggleSound:r,onOpenAbout:o,onOpenShortcuts:l,onOpenEICModal:c}){const[d,h]=R.useState("home"),[m,u]=R.useState(!1),[g,x]=R.useState(!1),y=[{id:"home",label:t==="ar"?"الرئيسية":"Home"},{id:"science",label:t==="ar"?"العلم والمبدأ":"The Science"},{id:"explore",label:t==="ar"?"استكشاف البيانات":"Explore Data"},{id:"studio",label:t==="ar"?"استوديو الصوتيات":"Sonification Studio"},{id:"discover",label:t==="ar"?"دليل الاستماع":"Discover"},{id:"about",label:t==="ar"?"عن المشروع":"About"}];R.useEffect(()=>{const f=()=>{x(window.scrollY>20);const S=y.map(_=>document.getElementById(_.id)).filter(Boolean),E=window.scrollY+180;for(let _=S.length-1;_>=0;_--){const N=S[_];if(N.offsetTop<=E){h(N.id);break}}};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[t]);const p=f=>{u(!1);const S=document.getElementById(f);S&&S.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("header",{className:`navbar-header ${g?"is-scrolled":""}`,children:[s.jsxs("div",{className:"navbar-container",children:[s.jsxs("a",{href:"#home",onClick:f=>{f.preventDefault(),p("home")},className:"navbar-brand",children:[s.jsxs("div",{className:"brand-logo-icon",children:[s.jsx("span",{className:"logo-pulse-ring"}),s.jsx("span",{className:"logo-core"})]}),s.jsxs("div",{className:"brand-text",children:[s.jsx("span",{className:"brand-title",children:"TERRA-TONE"}),s.jsx("span",{className:"brand-tag",children:"NASA DATA SONIFICATION"})]})]}),s.jsx("nav",{className:"navbar-links","aria-label":"Main Navigation",children:y.map(f=>s.jsxs("button",{onClick:()=>p(f.id),className:`nav-link-btn ${d===f.id?"active":""}`,children:[f.label,d===f.id&&s.jsx("span",{className:"nav-active-pill"})]},f.id))}),s.jsxs("div",{className:"navbar-actions",children:[s.jsx("button",{onClick:r,className:"navbar-icon-btn",title:a?t==="ar"?"كتم الصوت":"Mute Sound":t==="ar"?"تشغيل الصوت":"Unmute Sound","aria-label":"Toggle Sound",children:a?s.jsx(cn,{size:18}):s.jsx(Jn,{size:18})}),s.jsxs("button",{onClick:n,className:"navbar-pill-btn",title:"Toggle Language (English / العربية)",children:[s.jsx(la,{size:14}),s.jsx("span",{children:t==="en"?"AR":"EN"})]}),s.jsx("div",{className:"navbar-lamp-wrapper",title:"Interactive Hanging Lamp",children:s.jsx(bd,{theme:i,onToggleTheme:e,soundEnabled:a})}),s.jsx("button",{onClick:()=>u(!m),className:"navbar-mobile-toggle","aria-label":"Toggle Navigation Menu",children:m?s.jsx(Ts,{size:22}):s.jsx(kd,{size:22})})]})]}),m&&s.jsxs("div",{className:"mobile-nav-drawer",children:[s.jsx("div",{className:"mobile-nav-links",children:y.map(f=>s.jsx("button",{onClick:()=>p(f.id),className:`mobile-nav-link ${d===f.id?"active":""}`,children:f.label},f.id))}),s.jsxs("div",{className:"mobile-nav-footer",children:[s.jsxs("button",{onClick:o,className:"mobile-nav-sublink",children:[s.jsx(ni,{size:16}),s.jsx("span",{children:t==="ar"?"عن المشروع":"About Project"})]}),s.jsxs("button",{onClick:l,className:"mobile-nav-sublink",children:[s.jsx(Cd,{size:16}),s.jsx("span",{children:t==="ar"?"اختصارات المفاتيح":"Keyboard Shortcuts"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="187",Qd=0,qo=1,eu=2,Ja=1,tu=2,ia=3,hi=0,Ht=1,Nn=2,Li=0,oa=1,vr=2,Yo=3,Zo=4,nu=5,Pi=100,iu=101,au=102,su=103,ru=104,ou=200,lu=201,cu=202,du=203,pc=204,mc=205,uu=206,hu=207,fu=208,pu=209,mu=210,gu=211,xu=212,vu=213,_u=214,_r=0,Sr=1,yr=2,da=3,br=4,Mr=5,Er=6,Ar=7,gc=0,Su=1,yu=2,Rn=0,xc=1,vc=2,_c=3,Sc=4,yc=5,bc=6,Mc=7,Ec=300,Oi=301,ua=302,Ds=303,Us=304,Tr=1e3,wn=1001,Nr=1002,Lt=1003,bu=1004,Ta=1005,$t=1006,Os=1007,Wn=1008,Yt=1009,Ac=1010,Tc=1011,ha=1012,To=1013,xn=1014,fn=1015,vn=1016,No=1017,wo=1018,Fi=1020,Nc=35902,wc=35899,Rc=1021,Cc=1022,pn=1023,Qn=1026,$n=1027,Pc=1028,Ro=1029,fi=1030,Co=1031,Po=1033,Qa=33776,es=33777,ts=33778,ns=33779,wr=35840,Rr=35841,Cr=35842,Pr=35843,Ir=36196,Lr=37492,Dr=37496,Ur=37488,Or=37489,ls=37490,Fr=37491,kr=37808,Br=37809,Gr=37810,zr=37811,jr=37812,Vr=37813,Hr=37814,Wr=37815,$r=37816,Xr=37817,qr=37818,Yr=37819,Zr=37820,Kr=37821,Jr=36492,Qr=36494,eo=36495,to=36283,no=36284,cs=36285,io=36286,Mu=3200,ao=0,Eu=1,zn="",Jt="srgb",ds="srgb-linear",us="linear",vt="srgb",Fs=7680,Au=519,Tu=512,Nu=513,wu=514,Ic=515,Ru=516,Cu=517,Lc=518,Dc=519,Pu=35044,Ko="300 es",on=2e3,fa=2001;function Iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){const i=hs("canvas");return i.style.display="block",i}const Jo={};function Qo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Uc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=Uc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function xt(...i){i=Uc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function is(...i){const e=i.join(" ");e in Jo||(Jo[e]=!0,Ze(...i))}function Du(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Uu={[_r]:_r,[yr]:Er,[br]:br,[da]:Mr,[Sr]:Sr,[Er]:yr,[Ar]:Ar,[Mr]:da};class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,so=180/Math.PI;function va(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function Bs(i,e,t){return(1-t)*i+t*e}function Fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Io(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ku(i,e){if(e.constructor===Float32Array)return i;const t=Io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Bu(i,e){if(e.constructor===Float32Array)return i;const t=Io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const jo=class jo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*a+e.x,this.y=r*a+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jo.prototype.isVector2=!0;let ft=jo;class zi{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,o,l){let c=n[a+0],d=n[a+1],h=n[a+2],m=n[a+3],u=r[o+0],g=r[o+1],x=r[o+2],y=r[o+3];if(m!==y||c!==u||d!==g||h!==x){let p=c*u+d*g+h*x+m*y;p<0&&(u=-u,g=-g,x=-x,y=-y,p=-p);let f=1-l;if(p<.9995){const S=Math.acos(p),E=Math.sin(S);f=Math.sin(f*S)/E,l=Math.sin(l*S)/E,c=c*f+u*l,d=d*f+g*l,h=h*f+x*l,m=m*f+y*l}else{c=c*f+u*l,d=d*f+g*l,h=h*f+x*l,m=m*f+y*l;const S=1/Math.sqrt(c*c+d*d+h*h+m*m);c*=S,d*=S,h*=S,m*=S}}e[t]=c,e[t+1]=d,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,a,r,o){const l=n[a],c=n[a+1],d=n[a+2],h=n[a+3],m=r[o],u=r[o+1],g=r[o+2],x=r[o+3];return e[t]=l*x+h*m+c*g-d*u,e[t+1]=c*x+h*u+d*m-l*g,e[t+2]=d*x+h*g+l*u-c*m,e[t+3]=h*x-l*m-c*u-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,d=l(n/2),h=l(a/2),m=l(r/2),u=c(n/2),g=c(a/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*m+d*g*x,this._y=d*g*m-u*h*x,this._z=d*h*x+u*g*m,this._w=d*h*m-u*g*x;break;case"YXZ":this._x=u*h*m+d*g*x,this._y=d*g*m-u*h*x,this._z=d*h*x-u*g*m,this._w=d*h*m+u*g*x;break;case"ZXY":this._x=u*h*m-d*g*x,this._y=d*g*m+u*h*x,this._z=d*h*x+u*g*m,this._w=d*h*m-u*g*x;break;case"ZYX":this._x=u*h*m-d*g*x,this._y=d*g*m+u*h*x,this._z=d*h*x-u*g*m,this._w=d*h*m+u*g*x;break;case"YZX":this._x=u*h*m+d*g*x,this._y=d*g*m+u*h*x,this._z=d*h*x-u*g*m,this._w=d*h*m-u*g*x;break;case"XZY":this._x=u*h*m-d*g*x,this._y=d*g*m-u*h*x,this._z=d*h*x+u*g*m,this._w=d*h*m+u*g*x;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],o=t[1],l=t[5],c=t[9],d=t[2],h=t[6],m=t[10],u=n+l+m;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-d)*g,this._z=(o-a)*g}else if(n>l&&n>m){const g=2*Math.sqrt(1+n-l-m);this._w=(h-c)/g,this._x=.25*g,this._y=(a+o)/g,this._z=(r+d)/g}else if(l>m){const g=2*Math.sqrt(1+l-n-m);this._w=(r-d)/g,this._x=(a+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+m-n-l);this._w=(o-a)/g,this._x=(r+d)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,o=e._w,l=t._x,c=t._y,d=t._z,h=t._w;return this._x=n*h+o*l+a*d-r*c,this._y=a*h+o*c+r*l-n*d,this._z=r*h+o*d+n*c-a*l,this._w=o*h-n*l-a*c-r*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,a=-a,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){const d=Math.acos(l),h=Math.sin(d);c=Math.sin(c*d)/h,t=Math.sin(t*d)/h,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vo=class Vo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,o=e.y,l=e.z,c=e.w,d=2*(o*a-l*n),h=2*(l*t-r*a),m=2*(r*n-o*t);return this.x=t+c*d+o*m-l*h,this.y=n+c*h+l*d-r*m,this.z=a+c*m+r*h-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=a*c-r*l,this.y=r*o-n*c,this.z=n*l-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vo.prototype.isVector3=!0;let ne=Vo;const Gs=new ne,el=new zi,Ho=class Ho{constructor(e,t,n,a,r,o,l,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,o,l,c,d)}set(e,t,n,a,r,o,l,c,d){const h=this.elements;return h[0]=e,h[1]=a,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],d=n[1],h=n[4],m=n[7],u=n[2],g=n[5],x=n[8],y=a[0],p=a[3],f=a[6],S=a[1],E=a[4],_=a[7],N=a[2],T=a[5],v=a[8];return r[0]=o*y+l*S+c*N,r[3]=o*p+l*E+c*T,r[6]=o*f+l*_+c*v,r[1]=d*y+h*S+m*N,r[4]=d*p+h*E+m*T,r[7]=d*f+h*_+m*v,r[2]=u*y+g*S+x*N,r[5]=u*p+g*E+x*T,r[8]=u*f+g*_+x*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],h=e[8];return t*o*h-t*l*d-n*r*h+n*l*c+a*r*d-a*o*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],h=e[8],m=h*o-l*d,u=l*c-h*r,g=d*r-o*c,x=t*m+n*u+a*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=m*y,e[1]=(a*d-h*n)*y,e[2]=(l*n-a*o)*y,e[3]=u*y,e[4]=(h*t-a*c)*y,e[5]=(a*r-l*t)*y,e[6]=g*y,e[7]=(n*c-d*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,o,l){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*o+d*l)+o+e,-a*d,a*c,-a*(-d*o+c*l)+l+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zs.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ho.prototype.isMatrix3=!0;let Ke=Ho;const zs=new Ke,tl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(a,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(a.r=Cn(a.r),a.g=Cn(a.g),a.b=Cn(a.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(a.r=Di(a.r),a.g=Di(a.g),a.b=Di(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===zn?us:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,o){return a.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:e,whitePoint:n,transfer:us,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const dt=Gu();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class zu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=hs("canvas")),_i.width=e.width,_i.height=e.height;const a=_i.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ju=0;class Lo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,l=a.length;o<l;o++)a[o].isDataTexture?r.push(js(a[o].image)):r.push(js(a[o]))}else r=js(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Vu=0;const Vs=new ne;class Gt extends gi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=wn,a=wn,r=$t,o=Wn,l=pn,c=Yt,d=Gt.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=va(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vs).x}get height(){return this.source.getSize(Vs).y}get depth(){return this.source.getSize(Vs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Ec;Gt.DEFAULT_ANISOTROPY=1;const Wo=class Wo{constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*a+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*a+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*a+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const c=e.elements,d=c[0],h=c[4],m=c[8],u=c[1],g=c[5],x=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(m-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+y)<.1&&Math.abs(x+p)<.1&&Math.abs(d+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(d+1)/2,_=(g+1)/2,N=(f+1)/2,T=(h+u)/4,v=(m+y)/4,b=(x+p)/4;return E>_&&E>N?E<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(E),a=T/n,r=v/n):_>N?_<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(_),n=T/a,r=b/a):N<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(N),n=v/r,a=b/r),this.set(n,a,r,t),this}let S=Math.sqrt((p-x)*(p-x)+(m-y)*(m-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(m-y)/S,this.z=(u-h)/S,this.w=Math.acos((d+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wo.prototype.isVector4=!0;let Mt=Wo;class Hu extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=new Gt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Lo(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Hu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oc extends Gt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Gt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const xs=class xs{constructor(e,t,n,a,r,o,l,c,d,h,m,u,g,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,o,l,c,d,h,m,u,g,x,y,p)}set(e,t,n,a,r,o,l,c,d,h,m,u,g,x,y,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=a,f[1]=r,f[5]=o,f[9]=l,f[13]=c,f[2]=d,f[6]=h,f[10]=m,f[14]=u,f[3]=g,f[7]=x,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/Si.setFromMatrixColumn(e,0).length(),r=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(a),d=Math.sin(a),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const u=o*h,g=o*m,x=l*h,y=l*m;t[0]=c*h,t[4]=-c*m,t[8]=d,t[1]=g+x*d,t[5]=u-y*d,t[9]=-l*c,t[2]=y-u*d,t[6]=x+g*d,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,g=c*m,x=d*h,y=d*m;t[0]=u+y*l,t[4]=x*l-g,t[8]=o*d,t[1]=o*m,t[5]=o*h,t[9]=-l,t[2]=g*l-x,t[6]=y+u*l,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,g=c*m,x=d*h,y=d*m;t[0]=u-y*l,t[4]=-o*m,t[8]=x+g*l,t[1]=g+x*l,t[5]=o*h,t[9]=y-u*l,t[2]=-o*d,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,g=o*m,x=l*h,y=l*m;t[0]=c*h,t[4]=x*d-g,t[8]=u*d+y,t[1]=c*m,t[5]=y*d+u,t[9]=g*d-x,t[2]=-d,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,g=o*d,x=l*c,y=l*d;t[0]=c*h,t[4]=y-u*m,t[8]=x*m+g,t[1]=m,t[5]=o*h,t[9]=-l*h,t[2]=-d*h,t[6]=g*m+x,t[10]=u-y*m}else if(e.order==="XZY"){const u=o*c,g=o*d,x=l*c,y=l*d;t[0]=c*h,t[4]=-m,t[8]=d*h,t[1]=u*m+y,t[5]=o*h,t[9]=g*m-x,t[2]=x*m-g,t[6]=l*h,t[10]=y*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($u,e,Xu)}lookAt(e,t,n){const a=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Un.crossVectors(n,Xt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Un.crossVectors(n,Xt)),Un.normalize(),Na.crossVectors(Xt,Un),a[0]=Un.x,a[4]=Na.x,a[8]=Xt.x,a[1]=Un.y,a[5]=Na.y,a[9]=Xt.y,a[2]=Un.z,a[6]=Na.z,a[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],d=n[12],h=n[1],m=n[5],u=n[9],g=n[13],x=n[2],y=n[6],p=n[10],f=n[14],S=n[3],E=n[7],_=n[11],N=n[15],T=a[0],v=a[4],b=a[8],L=a[12],P=a[1],U=a[5],k=a[9],$=a[13],I=a[2],G=a[6],Q=a[10],j=a[14],oe=a[3],V=a[7],te=a[11],ie=a[15];return r[0]=o*T+l*P+c*I+d*oe,r[4]=o*v+l*U+c*G+d*V,r[8]=o*b+l*k+c*Q+d*te,r[12]=o*L+l*$+c*j+d*ie,r[1]=h*T+m*P+u*I+g*oe,r[5]=h*v+m*U+u*G+g*V,r[9]=h*b+m*k+u*Q+g*te,r[13]=h*L+m*$+u*j+g*ie,r[2]=x*T+y*P+p*I+f*oe,r[6]=x*v+y*U+p*G+f*V,r[10]=x*b+y*k+p*Q+f*te,r[14]=x*L+y*$+p*j+f*ie,r[3]=S*T+E*P+_*I+N*oe,r[7]=S*v+E*U+_*G+N*V,r[11]=S*b+E*k+_*Q+N*te,r[15]=S*L+E*$+_*j+N*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],o=e[1],l=e[5],c=e[9],d=e[13],h=e[2],m=e[6],u=e[10],g=e[14],x=e[3],y=e[7],p=e[11],f=e[15],S=c*g-d*u,E=l*g-d*m,_=l*u-c*m,N=o*g-d*h,T=o*u-c*h,v=o*m-l*h;return t*(y*S-p*E+f*_)-n*(x*S-p*N+f*T)+a*(x*E-y*N+f*v)-r*(x*_-y*T+p*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10];return t*(o*h-l*d)-n*(r*h-l*c)+a*(r*d-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],h=e[8],m=e[9],u=e[10],g=e[11],x=e[12],y=e[13],p=e[14],f=e[15],S=t*l-n*o,E=t*c-a*o,_=t*d-r*o,N=n*c-a*l,T=n*d-r*l,v=a*d-r*c,b=h*y-m*x,L=h*p-u*x,P=h*f-g*x,U=m*p-u*y,k=m*f-g*y,$=u*f-g*p,I=S*$-E*k+_*U+N*P-T*L+v*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(l*$-c*k+d*U)*G,e[1]=(a*k-n*$-r*U)*G,e[2]=(y*v-p*T+f*N)*G,e[3]=(u*T-m*v-g*N)*G,e[4]=(c*P-o*$-d*L)*G,e[5]=(t*$-a*P+r*L)*G,e[6]=(p*_-x*v-f*E)*G,e[7]=(h*v-u*_+g*E)*G,e[8]=(o*k-l*P+d*b)*G,e[9]=(n*P-t*k-r*b)*G,e[10]=(x*T-y*_+f*S)*G,e[11]=(m*_-h*T-g*S)*G,e[12]=(l*L-o*U-c*b)*G,e[13]=(t*U-n*L+a*b)*G,e[14]=(y*E-x*N-p*S)*G,e[15]=(h*N-m*E+u*S)*G,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,d=r*o,h=r*l;return this.set(d*o+n,d*l-a*c,d*c+a*l,0,d*l+a*c,h*l+n,h*c-a*o,0,d*c-a*l,h*c+a*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,o){return this.set(1,n,r,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,d=r+r,h=o+o,m=l+l,u=r*d,g=r*h,x=r*m,y=o*h,p=o*m,f=l*m,S=c*d,E=c*h,_=c*m,N=n.x,T=n.y,v=n.z;return a[0]=(1-(y+f))*N,a[1]=(g+_)*N,a[2]=(x-E)*N,a[3]=0,a[4]=(g-_)*T,a[5]=(1-(u+f))*T,a[6]=(p+S)*T,a[7]=0,a[8]=(x+E)*v,a[9]=(p-S)*v,a[10]=(1-(u+y))*v,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Si.set(a[0],a[1],a[2]).length();const l=Si.set(a[4],a[5],a[6]).length(),c=Si.set(a[8],a[9],a[10]).length();r<0&&(o=-o),tn.copy(this);const d=1/o,h=1/l,m=1/c;return tn.elements[0]*=d,tn.elements[1]*=d,tn.elements[2]*=d,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=m,tn.elements[9]*=m,tn.elements[10]*=m,t.setFromRotationMatrix(tn),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,a,r,o,l=on,c=!1){const d=this.elements,h=2*r/(t-e),m=2*r/(n-a),u=(t+e)/(t-e),g=(n+a)/(n-a);let x,y;if(c)x=r/(o-r),y=o*r/(o-r);else if(l===on)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(l===fa)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=u,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,a,r,o,l=on,c=!1){const d=this.elements,h=2/(t-e),m=2/(n-a),u=-(t+e)/(t-e),g=-(n+a)/(n-a);let x,y;if(c)x=1/(o-r),y=o/(o-r);else if(l===on)x=-2/(o-r),y=-(o+r)/(o-r);else if(l===fa)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=0,d[12]=u,d[1]=0,d[5]=m,d[9]=0,d[13]=g,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xs.prototype.isMatrix4=!0;let yt=xs;const Si=new ne,tn=new yt,$u=new ne(0,0,0),Xu=new ne(1,1,1),Un=new ne,Na=new ne,Xt=new ne,il=new yt,al=new zi;class ei{constructor(e=0,t=0,n=0,a=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],o=a[4],l=a[8],c=a[1],d=a[5],h=a[9],m=a[2],u=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const sl=new ne,yi=new zi,bn=new yt,wa=new ne,Ki=new ne,Yu=new ne,Zu=new zi,rl=new ne(1,0,0),ol=new ne(0,1,0),ll=new ne(0,0,1),cl={type:"added"},Ku={type:"removed"},bi={type:"childadded",child:null},Hs={type:"childremoved",child:null};class Dt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new ne,t=new ei,n=new zi,a=new ne(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(rl,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return sl.copy(e).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rl,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ki,wa,this.up):bn.lookAt(wa,Ki,this.up),this.quaternion.setFromRotationMatrix(bn),a&&(bn.extractRotation(a.matrixWorld),yi.setFromRotationMatrix(bn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cl),bi.child=e,this.dispatchEvent(bi),bi.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ku),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cl),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(l=>({...l})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const m=c[d];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(r(e.materials,this.material[c]));a.material=l}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];a.animations.push(r(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),d=o(e.textures),h=o(e.images),m=o(e.shapes),u=o(e.skeletons),g=o(e.animations),x=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=a,n;function o(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new ne(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ra extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ju={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,o=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),f=this._getHandJoint(d,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],u=h.position.distanceTo(m.position),g=.02,x=.005;d.inputState.pinching&&u>g+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=g-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ra;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function $s(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=dt.workingColorSpace){if(e=Ou(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$s(o,r,e+1/3),this.g=$s(o,r,e),this.b=$s(o,r,e-1/3)}return dt.colorSpaceToWorking(this,a),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=a[1],l=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return dt.workingToColorSpace(Bt.copy(this),e),Math.round(ut(Bt.r*255,0,255))*65536+Math.round(ut(Bt.g*255,0,255))*256+Math.round(ut(Bt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,a=Bt.g,r=Bt.b,o=Math.max(n,a,r),l=Math.min(n,a,r);let c,d;const h=(l+o)/2;if(l===o)c=0,d=0;else{const m=o-l;switch(d=h<=.5?m/(o+l):m/(2-o-l),o){case n:c=(a-r)/m+(a<r?6:0);break;case a:c=(r-n)/m+2;break;case r:c=(n-a)/m+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Jt){dt.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,a=Bt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Ca);const n=Bs(On.h,Ca.h,t),a=Bs(On.s,Ca.s,t),r=Bs(On.l,Ca.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ht;ht.NAMES=kc;class Qu extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new ne,Mn=new ne,Xs=new ne,En=new ne,Mi=new ne,Ei=new ne,dl=new ne,qs=new ne,Ys=new ne,Zs=new ne,Ks=new Mt,Js=new Mt,Qs=new Mt;class rn{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),nn.subVectors(e,t),a.cross(nn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){nn.subVectors(a,t),Mn.subVectors(n,t),Xs.subVectors(e,t);const o=nn.dot(nn),l=nn.dot(Mn),c=nn.dot(Xs),d=Mn.dot(Mn),h=Mn.dot(Xs),m=o*d-l*l;if(m===0)return r.set(0,0,0),null;const u=1/m,g=(d*c-l*h)*u,x=(o*h-l*c)*u;return r.set(1-g-x,x,g)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,a,r,o,l,c){return this.getBarycoord(e,t,n,a,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(l,En.z),c)}static getInterpolatedAttribute(e,t,n,a,r,o){return Ks.setScalar(0),Js.setScalar(0),Qs.setScalar(0),Ks.fromBufferAttribute(e,t),Js.fromBufferAttribute(e,n),Qs.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(Ks,r.x),o.addScaledVector(Js,r.y),o.addScaledVector(Qs,r.z),o}static isFrontFacing(e,t,n,a){return nn.subVectors(n,t),Mn.subVectors(e,t),nn.cross(Mn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let o,l;Mi.subVectors(a,n),Ei.subVectors(r,n),qs.subVectors(e,n);const c=Mi.dot(qs),d=Ei.dot(qs);if(c<=0&&d<=0)return t.copy(n);Ys.subVectors(e,a);const h=Mi.dot(Ys),m=Ei.dot(Ys);if(h>=0&&m<=h)return t.copy(a);const u=c*m-h*d;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Mi,o);Zs.subVectors(e,r);const g=Mi.dot(Zs),x=Ei.dot(Zs);if(x>=0&&g<=x)return t.copy(r);const y=g*d-c*x;if(y<=0&&d>=0&&x<=0)return l=d/(d-x),t.copy(n).addScaledVector(Ei,l);const p=h*x-g*m;if(p<=0&&m-h>=0&&g-x>=0)return dl.subVectors(r,a),l=(m-h)/(m-h+(g-x)),t.copy(a).addScaledVector(dl,l);const f=1/(p+y+u);return o=y*f,l=u*f,t.copy(n).addScaledVector(Mi,o).addScaledVector(Ei,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _a{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const a=e.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Ia.subVectors(this.max,Ji),Ai.subVectors(e.a,Ji),Ti.subVectors(e.b,Ji),Ni.subVectors(e.c,Ji),Fn.subVectors(Ti,Ai),kn.subVectors(Ni,Ti),oi.subVectors(Ai,Ni);let t=[0,-Fn.z,Fn.y,0,-kn.z,kn.y,0,-oi.z,oi.y,Fn.z,0,-Fn.x,kn.z,0,-kn.x,oi.z,0,-oi.x,-Fn.y,Fn.x,0,-kn.y,kn.x,0,-oi.y,oi.x,0];return!er(t,Ai,Ti,Ni,Ia)||(t=[1,0,0,0,1,0,0,0,1],!er(t,Ai,Ti,Ni,Ia))?!1:(La.crossVectors(Fn,kn),t=[La.x,La.y,La.z],er(t,Ai,Ti,Ni,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],an=new ne,Pa=new _a,Ai=new ne,Ti=new ne,Ni=new ne,Fn=new ne,kn=new ne,oi=new ne,Ji=new ne,Ia=new ne,La=new ne,li=new ne;function er(i,e,t,n,a){for(let r=0,o=i.length-3;r<=o;r+=3){li.fromArray(i,r);const l=a.x*Math.abs(li.x)+a.y*Math.abs(li.y)+a.z*Math.abs(li.z),c=e.dot(li),d=t.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>l)return!1}return!0}const At=new ne,Da=new ft;let eh=0;class Yn extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pu,this.updateRanges=[],this.gpuType=fn,this.version=0,this._normalizationScale=e!==void 0?Io(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),a=this._normalize(a),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ku(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bu(e,this.array)}}class Bc extends Yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gc extends Yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const th=new _a,Qi=new ne,tr=new ne;class Ns{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):th.setFromPoints(e).getCenter(n);let a=0;for(let r=0,o=e.length;r<o;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Qi,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(tr)),this.expandByPoint(Qi.copy(e.center).sub(tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nh=0;const Kt=new yt,nr=new Dt,wi=new ne,qt=new _a,ea=new _a,Ct=new ne;class _n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iu(e)?Gc:Bc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return nr.lookAt(e),nr.updateMatrix(),this.applyMatrix4(nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const o=e[a];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ea.setFromBufferAttribute(l),this.morphTargetsRelative?(Ct.addVectors(qt.min,ea.min),qt.expandByPoint(Ct),Ct.addVectors(qt.max,ea.max),qt.expandByPoint(Ct)):(qt.expandByPoint(ea.min),qt.expandByPoint(ea.max))}qt.getCenter(n);let a=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],c=this.morphTargetsRelative;for(let d=0,h=l.count;d<h;d++)Ct.fromBufferAttribute(l,d),c&&(wi.fromBufferAttribute(e,d),Ct.add(wi)),a=Math.max(a,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const l=[],c=[],d=new Uint8Array(n.count);for(let L=0;L<n.count;L++)l[L]=new ne,c[L]=new ne;const h=new ne,m=new ne,u=new ne,g=new ft,x=new ft,y=new ft,p=new ne,f=new ne;function S(L,P,U){d[L]=d[P]=d[U]=1,h.fromBufferAttribute(n,L),m.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),g.fromBufferAttribute(r,L),x.fromBufferAttribute(r,P),y.fromBufferAttribute(r,U),m.sub(h),u.sub(h),x.sub(g),y.sub(g);const k=1/(x.x*y.y-y.x*x.y);isFinite(k)&&(p.copy(m).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(k),f.copy(u).multiplyScalar(x.x).addScaledVector(m,-y.x).multiplyScalar(k),l[L].add(p),l[P].add(p),l[U].add(p),c[L].add(f),c[P].add(f),c[U].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,P=E.length;L<P;++L){const U=E[L],k=U.start,$=U.count;for(let I=k,G=k+$;I<G;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new ne,N=new ne,T=new ne,v=new ne;function b(L){T.fromBufferAttribute(a,L),v.copy(T);const P=l[L];_.copy(P),_.sub(T.multiplyScalar(T.dot(P))).normalize(),N.crossVectors(v,P);const k=N.dot(c[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,k)}for(let L=0,P=n.count;L<P;++L)d[L]&&b(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);const a=new ne,r=new ne,o=new ne,l=new ne,c=new ne,d=new ne,h=new ne,m=new ne;if(e)for(let u=0,g=e.count;u<g;u+=3){const x=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,r),m.subVectors(a,r),h.cross(m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),d.fromBufferAttribute(n,p),l.add(h),c.add(h),d.add(h),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,d.x,d.y,d.z)}else for(let u=0,g=t.count;u<g;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),m.subVectors(a,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(l,c){const d=l.array,h=l.itemSize,m=l.normalized,u=new d.constructor(c.length*h);let g=0,x=0;for(let y=0,p=c.length;y<p;y++){l.isInterleavedBufferAttribute?g=c[y]*l.data.stride+l.offset:g=c[y]*h;for(let f=0;f<h;f++)u[x++]=d[g++]}return new Yn(u,h,m)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,a=this.attributes;for(const l in a){const c=a[l],d=e(c,n);t.setAttribute(l,d)}const r=this.morphAttributes;for(const l in r){const c=[],d=r[l];for(let h=0,m=d.length;h<m;h++){const u=d[h],g=e(u,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let m=0,u=d.length;m<u;m++){const g=d[m];h.push(g.toJSON(e.data))}h.length>0&&(a[c]=h,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const d in a){const h=a[d];this.setAttribute(d,h.clone(t))}const r=e.morphAttributes;for(const d in r){const h=[],m=r[d];for(let u=0,g=m.length;u<g;u++)h.push(m[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,h=o.length;d<h;d++){const m=o[d];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ir=new ne,ih=new ne,ah=new Ke;class Gn{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ir.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(ir),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(a,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ah.getNormalMatrix(e),a=this.coplanarPoint(ir).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let sh=0;class ji extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=va(),this.name="",this.type="Material",this.blending=oa,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const o=[];for(const l in r){const c=r[l];delete c.metadata,o.push(c)}return o}if(t){const r=a(e.textures),o=a(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tn=new ne,ar=new ne,Ua=new ne,Oa=new ne;class zc{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){ar.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Oa.copy(this.origin).sub(ar);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ua),l=Oa.dot(this.direction),c=-Oa.dot(Ua),d=Oa.lengthSq(),h=Math.abs(1-o*o);let m,u,g,x;if(h>0)if(m=o*c-l,u=o*l-c,x=r*h,m>=0)if(u>=-x)if(u<=x){const y=1/h;m*=y,u*=y,g=m*(m+o*u+2*l)+u*(o*m+u+2*c)+d}else u=r,m=Math.max(0,-(o*u+l)),g=-m*m+u*(u+2*c)+d;else u=-r,m=Math.max(0,-(o*u+l)),g=-m*m+u*(u+2*c)+d;else u<=-x?(m=Math.max(0,-(-o*r+l)),u=m>0?-r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+d):u<=x?(m=0,u=Math.min(Math.max(-r,-c),r),g=u*(u+2*c)+d):(m=Math.max(0,-(o*r+l)),u=m>0?r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+d);else u=o>0?-r:r,m=Math.max(0,-(o*u+l)),g=-m*m+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(ar).addScaledVector(Ua,u),g}intersectSphere(e,t){if(e.radius<0)return null;Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),a=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(a>r)return null;const o=Math.sqrt(r-a),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,o,l,c;const d=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return d>=0?(n=(e.min.x-u.x)*d,a=(e.max.x-u.x)*d):(n=(e.max.x-u.x)*d,a=(e.min.x-u.x)*d),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>a||((r>n||isNaN(n))&&(n=r),(o<a||isNaN(a))&&(a=o),m>=0?(l=(e.min.z-u.z)*m,c=(e.max.z-u.z)*m):(l=(e.max.z-u.z)*m,c=(e.min.z-u.z)*m),n>c||l>a)||((l>n||n!==n)&&(n=l),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,a,r){const o=this.origin,l=this.direction,c=l.x,d=l.y,h=l.z,m=e.x-o.x,u=e.y-o.y,g=e.z-o.z,x=t.x-o.x,y=t.y-o.y,p=t.z-o.z,f=n.x-o.x,S=n.y-o.y,E=n.z-o.z,_=Math.abs(c),N=Math.abs(d),T=Math.abs(h);let v,b,L,P,U,k,$,I,G,Q,j,oe;if(_>=N&&_>=T?(L=c,k=m,G=x,oe=f,c>=0?(v=d,b=h,P=u,U=g,$=y,I=p,Q=S,j=E):(v=h,b=d,P=g,U=u,$=p,I=y,Q=E,j=S)):N>=T?(L=d,k=u,G=y,oe=S,d>=0?(v=h,b=c,P=g,U=m,$=p,I=x,Q=E,j=f):(v=c,b=h,P=m,U=g,$=x,I=p,Q=f,j=E)):(L=h,k=g,G=p,oe=E,h>=0?(v=c,b=d,P=m,U=u,$=x,I=y,Q=f,j=S):(v=d,b=c,P=u,U=m,$=y,I=x,Q=S,j=f)),L===0)return null;const V=v/L,te=b/L,ie=1/L,ye=P-V*k,De=U-te*k,H=$-V*G,he=I-te*G,ge=Q-V*oe,ce=j-te*oe,Y=ge*he-ce*H,Ae=ye*ce-De*ge,_e=H*De-he*ye;if(a){if(Y<0||Ae<0||_e<0)return null}else if((Y<0||Ae<0||_e<0)&&(Y>0||Ae>0||_e>0))return null;const we=Y+Ae+_e;if(we===0)return null;const Ye=ie*(Y*k+Ae*G+_e*oe);return(we>0?Ye<0:Ye>0)?null:this.at(Ye/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jc extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ul=new yt,ci=new zc,Fa=new Ns,hl=new ne,ka=new ne,Ba=new ne,Ga=new ne,sr=new ne,za=new ne,fl=new ne,ja=new ne;class In extends Dt{constructor(e=new _n,t=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const l=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const l=this.morphTargetInfluences;if(r&&l){za.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=l[c],m=r[c];h!==0&&(sr.fromBufferAttribute(m,e),o?za.addScaledVector(sr,h):za.addScaledVector(sr.sub(t),h))}t.add(za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(Fa.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Fa,hl)===null||ci.origin.distanceToSquared(hl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),ci.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let a;const r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){const p=u[x],f=o[p.materialIndex],S=Math.max(p.start,g.start),E=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let _=S,N=E;_<N;_+=3){const T=l.getX(_),v=l.getX(_+1),b=l.getX(_+2);a=Va(this,f,e,n,d,h,m,T,v,b),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=x,f=y;p<f;p+=3){const S=l.getX(p),E=l.getX(p+1),_=l.getX(p+2);a=Va(this,o,e,n,d,h,m,S,E,_),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){const p=u[x],f=o[p.materialIndex],S=Math.max(p.start,g.start),E=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let _=S,N=E;_<N;_+=3){const T=_,v=_+1,b=_+2;a=Va(this,f,e,n,d,h,m,T,v,b),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let p=x,f=y;p<f;p+=3){const S=p,E=p+1,_=p+2;a=Va(this,o,e,n,d,h,m,S,E,_),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function rh(i,e,t,n,a,r,o,l){let c;if(e.side===Ht?c=n.intersectTriangle(o,r,a,!0,l):c=n.intersectTriangle(a,r,o,e.side===hi,l),c===null)return null;ja.copy(l),ja.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ja);return d<t.near||d>t.far?null:{distance:d,point:ja.clone(),object:i}}function Va(i,e,t,n,a,r,o,l,c,d){i.getVertexPosition(l,ka),i.getVertexPosition(c,Ba),i.getVertexPosition(d,Ga);const h=rh(i,e,t,n,ka,Ba,Ga,fl);if(h){const m=new ne;rn.getBarycoord(fl,ka,Ba,Ga,m),a&&(h.uv=rn.getInterpolatedAttribute(a,l,c,d,m,new ft)),r&&(h.uv1=rn.getInterpolatedAttribute(r,l,c,d,m,new ft)),o&&(h.normal=rn.getInterpolatedAttribute(o,l,c,d,m,new ne),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:c,c:d,normal:new ne,materialIndex:0};rn.getNormal(ka,Ba,Ga,u.normal),h.face=u,h.barycoord=m}return h}class oh extends Gt{constructor(e=null,t=1,n=1,a,r,o,l,c,d=Lt,h=Lt,m,u){super(null,o,l,c,d,h,a,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const di=new Ns,lh=new ft(.5,.5),Ha=new ne;class pa{constructor(e=new Gn,t=new Gn,n=new Gn,a=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,n,a,r,o]}set(e,t,n,a,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(a),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){const a=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],d=r[3],h=r[4],m=r[5],u=r[6],g=r[7],x=r[8],y=r[9],p=r[10],f=r[11],S=r[12],E=r[13],_=r[14],N=r[15];if(a[0].setComponents(d-o,g-h,f-x,N-S).normalize(),a[1].setComponents(d+o,g+h,f+x,N+S).normalize(),a[2].setComponents(d+l,g+m,f+y,N+E).normalize(),a[3].setComponents(d-l,g-m,f-y,N-E).normalize(),n)a[4].setComponents(c,u,p,_).normalize(),a[5].setComponents(d-c,g-u,f-p,N-_).normalize();else if(a[4].setComponents(d-c,g-u,f-p,N-_).normalize(),t===on)a[5].setComponents(d+c,g+u,f+p,N+_).normalize();else if(t===fa)a[5].setComponents(c,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=lh.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Ha.x=a.normal.x>0?e.max.x:e.min.x,Ha.y=a.normal.y>0?e.max.y:e.min.y,Ha.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const pl=new yt;class Do{constructor(){this.coordinateSystem=on,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let a=0;a<t.length;a++){const r=t[a];pl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[a]===void 0&&(n[a]=new pa),n[a].setFromProjectionMatrix(pl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new pa),t[a].copy(n[a]);return this._count=e._count,this}clone(){return new Do().copy(this)}}class Vc extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ml=new yt,ro=new zc,Wa=new Ns,$a=new ne;class ch extends Dt{constructor(e=new _n,t=new Vc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(a),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;ml.copy(a).invert(),ro.copy(e.ray).applyMatrix4(ml);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=n.index,m=n.attributes.position;if(d!==null){const u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=u,y=g;x<y;x++){const p=d.getX(x);$a.fromBufferAttribute(m,p),gl($a,p,c,a,e,t,this)}}else{const u=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let x=u,y=g;x<y;x++)$a.fromBufferAttribute(m,x),gl($a,x,c,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const l=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function gl(i,e,t,n,a,r,o){const l=ro.distanceSqToPoint(i);if(l<t){const c=new ne;ro.closestPointToPoint(i,c),c.applyMatrix4(n);const d=a.ray.origin.distanceTo(c);if(d<a.near||d>a.far)return;r.push({distance:d,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hc extends Gt{constructor(e=[],t=Oi,n,a,r,o,l,c,d,h){super(e,t,n,a,r,o,l,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dh extends Gt{constructor(e,t,n,a,r,o,l,c,d){super(e,t,n,a,r,o,l,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ki extends Gt{constructor(e,t,n=xn,a,r,o,l=Lt,c=Lt,d,h=Qn,m=1){if(h!==Qn&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:m};super(u,a,r,o,l,c,h,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Wc extends ki{constructor(e,t=xn,n=Oi,a,r,o=Lt,l=Lt,c,d=Qn){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,n,a,r,o,l,c,d),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $c extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sa extends _n{constructor(e=1,t=1,n=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:o};const l=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const c=[],d=[],h=[],m=[];let u=0,g=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,a,o,2),x("x","z","y",1,-1,e,n,-t,a,o,3),x("x","y","z",1,-1,e,t,n,a,r,4),x("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(m,2));function x(y,p,f,S,E,_,N,T,v,b,L){const P=_/v,U=N/b,k=_/2,$=N/2,I=T/2,G=v+1,Q=b+1;let j=0,oe=0;const V=new ne;for(let te=0;te<Q;te++){const ie=te*U-$;for(let ye=0;ye<G;ye++){const De=ye*P-k;V[y]=De*S,V[p]=ie*E,V[f]=I,d.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[f]=T>0?1:-1,h.push(V.x,V.y,V.z),m.push(ye/v),m.push(1-te/b),j+=1}}for(let te=0;te<b;te++)for(let ie=0;ie<v;ie++){const ye=u+ie+G*te,De=u+ie+G*(te+1),H=u+(ie+1)+G*(te+1),he=u+(ie+1)+G*te;c.push(ye,De,he),c.push(De,H,he),oe+=6}l.addGroup(g,oe,L),g+=oe,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ws extends _n{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(a),d=l+1,h=c+1,m=e/l,u=t/c,g=[],x=[],y=[],p=[];for(let f=0;f<h;f++){const S=f*u-o;for(let E=0;E<d;E++){const _=E*m-r;x.push(_,-S,0),y.push(0,0,1),p.push(E/l),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<l;S++){const E=S+d*f,_=S+d*(f+1),N=S+1+d*(f+1),T=S+1+d*f;g.push(E,_,T),g.push(_,N,T)}this.setIndex(g),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class fs extends _n{constructor(e=1,t=32,n=16,a=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let d=0;const h=[],m=new ne,u=new ne,g=[],x=[],y=[],p=[];for(let f=0;f<=n;f++){const S=[],E=f/n,_=o+E*l,N=e*Math.cos(_),T=Math.sqrt(e*e-N*N);let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const L=b/t,P=a+L*r;m.x=-T*Math.cos(P),m.y=N,m.z=T*Math.sin(P),x.push(m.x,m.y,m.z),u.copy(m).normalize(),y.push(u.x,u.y,u.z),p.push(L+v,1-E),S.push(d++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){const E=h[f][S+1],_=h[f][S],N=h[f+1][S],T=h[f+1][S+1];(f!==0||o>0)&&g.push(E,_,T),(f!==n-1||c<Math.PI)&&g.push(_,N,T)}this.setIndex(g),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(xl(a))a.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(xl(a[0])){const r=[];for(let o=0,l=a.length;o<l;o++)r[o]=a[o].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Bi(i[t]);for(const a in n)e[a]=n[a]}return e}function xl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const hh={clone:Bi,merge:Vt};var fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(a.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(a.value);break;case"v3":this.uniforms[n].value=new ne().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(a.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mh extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gh extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xh extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vh extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qc extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const rr=new yt,vl=new ne,_l=new ne;class _h{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(vl),_l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_l),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=a?a.z/r.x:1,l=a?a.w/r.y:1,c=a?a.x/r.x:0,d=a?a.y/r.y:0;e.coordinateSystem===fa||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),t.multiply(rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xa=new ne,qa=new zi,dn=new ne;class Yc extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,qa,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new ne,Sl=new ft,yl=new ft;class sn extends Yc{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,yl),t.subVectors(yl,Sl)}setViewOffset(e,t,n,a,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;r+=o.offsetX*a/c,t-=o.offsetY*n/d,a*=o.width/c,n*=o.height/d}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zc extends Yc{constructor(e=-1,t=1,n=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sh extends _h{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yh extends qc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bh extends qc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ri=-90,Ci=1;class oo extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new sn(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const r=new sn(Ri,Ci,e,t);r.layers=this.layers,this.add(r);const o=new sn(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const l=new sn(Ri,Ci,e,t);l.layers=this.layers,this.add(l);const c=new sn(Ri,Ci,e,t);c.layers=this.layers,this.add(c);const d=new sn(Ri,Ci,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,o,l,c]=t;for(const d of t)this.remove(d);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,c,d,h]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,u,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Mh extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function bl(i,e,t,n){const a=Eh(n);switch(t){case Rc:return i*e;case Pc:return i*e/a.components*a.byteLength;case Ro:return i*e/a.components*a.byteLength;case fi:return i*e*2/a.components*a.byteLength;case Co:return i*e*2/a.components*a.byteLength;case Cc:return i*e*3/a.components*a.byteLength;case pn:return i*e*4/a.components*a.byteLength;case Po:return i*e*4/a.components*a.byteLength;case Qa:case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rr:case Pr:return Math.max(i,16)*Math.max(e,8)/4;case wr:case Cr:return Math.max(i,8)*Math.max(e,8)/2;case Ir:case Lr:case Ur:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case ls:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Br:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jr:case Qr:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cs:case io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eh(i){switch(i){case Yt:case Ac:return{byteLength:1,components:1};case ha:case Tc:case vn:return{byteLength:2,components:1};case No:case wo:return{byteLength:2,components:4};case xn:case To:case fn:return{byteLength:4,components:1};case Nc:case wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kc(){let i=null,e=!1,t=null,n=null;function a(r,o){n=i.requestAnimationFrame(a),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ah(i){const e=new WeakMap;function t(l,c){const d=l.array,h=l.usage,m=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),l.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)g=i.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,c,d){const h=c.array,m=c.updateRanges;if(i.bindBuffer(d,l),m.length===0)i.bufferSubData(d,0,h);else{m.sort((g,x)=>g.start-x.start);let u=0;for(let g=1;g<m.length;g++){const x=m[u],y=m[g];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,m[u]=y)}m.length=u+1;for(let g=0,x=m.length;g<x;g++){const y=m[g];i.bufferSubData(d,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,c),d.version=l.version}}return{get:a,remove:r,update:o}}var Th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
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
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
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
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh=`#ifdef USE_BATCHING
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
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bh=`#ifdef USE_IRIDESCENCE
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
#endif`,Gh=`#ifdef USE_BUMPMAP
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yh=`#define PI 3.141592653589793
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
} // validated`,Zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vf=`#ifdef USE_ENVMAP
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
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
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
#endif`,Ef=`uniform sampler2D dfgLUT;
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
}`,Af=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Of=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
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
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform float backgroundBlurriness;
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Hp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,$p=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,Jp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,em=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Th,alphahash_pars_fragment:Nh,alphamap_fragment:wh,alphamap_pars_fragment:Rh,alphatest_fragment:Ch,alphatest_pars_fragment:Ph,aomap_fragment:Ih,aomap_pars_fragment:Lh,batching_pars_vertex:Dh,batching_vertex:Uh,begin_vertex:Oh,beginnormal_vertex:Fh,bsdfs:kh,iridescence_fragment:Bh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Vh,clipping_planes_vertex:Hh,color_fragment:Wh,color_pars_fragment:$h,color_pars_vertex:Xh,color_vertex:qh,common:Yh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:Kh,displacementmap_vertex:Jh,emissivemap_fragment:Qh,emissivemap_pars_fragment:ef,colorspace_fragment:tf,colorspace_pars_fragment:nf,envmap_fragment:af,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:of,envmap_physical_pars_fragment:vf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:df,fog_fragment:uf,fog_pars_fragment:hf,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:xf,lights_toon_fragment:_f,lights_toon_pars_fragment:Sf,lights_phong_fragment:yf,lights_phong_pars_fragment:bf,lights_physical_fragment:Mf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Af,lights_fragment_maps:Tf,lights_fragment_end:Nf,lightprobes_pars_fragment:wf,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:If,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Uf,map_particle_pars_fragment:Of,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:kf,morphinstance_vertex:Bf,morphcolor_vertex:Gf,morphnormal_vertex:zf,morphtarget_pars_vertex:jf,morphtarget_vertex:Vf,normal_fragment_begin:Hf,normal_fragment_maps:Wf,normal_pars_fragment:$f,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:Qf,opaque_fragment:ep,packing:tp,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:ap,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:dp,shadowmask_pars_fragment:up,skinbase_vertex:hp,skinning_pars_vertex:fp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:xp,tonemapping_fragment:vp,tonemapping_pars_fragment:_p,transmission_fragment:Sp,transmission_pars_fragment:yp,uv_pars_fragment:bp,uv_pars_vertex:Mp,uv_vertex:Ep,worldpos_vertex:Ap,background_vert:Tp,background_frag:Np,backgroundCube_vert:wp,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Ip,depth_frag:Lp,distance_vert:Dp,distance_frag:Up,equirect_vert:Op,equirect_frag:Fp,linedashed_vert:kp,linedashed_frag:Bp,meshbasic_vert:Gp,meshbasic_frag:zp,meshlambert_vert:jp,meshlambert_frag:Vp,meshmatcap_vert:Hp,meshmatcap_frag:Wp,meshnormal_vert:$p,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:Zp,meshphysical_frag:Kp,meshtoon_vert:Jp,meshtoon_frag:Qp,points_vert:em,points_frag:tm,shadow_vert:nm,shadow_frag:im,sprite_vert:am,sprite_frag:sm},Ie={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},hn={basic:{uniforms:Vt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Vt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Vt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Vt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Vt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Vt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Vt([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Vt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Vt([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Vt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Vt([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Vt([Ie.common,Ie.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Vt([Ie.lights,Ie.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};hn.physical={uniforms:Vt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ya={r:0,b:0,g:0},rm=new yt,Jc=new Ke;Jc.set(-1,0,0,0,1,0,0,0,1);function om(i,e,t,n,a,r){const o=new ht(0);let l=a===!0?0:1,c,d,h=null,m=0,u=null;function g(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const _=S.backgroundBlurriness>0;E=e.get(E,_)}return E}function x(S){let E=!1;const _=g(S);_===null?p(o,l):_&&_.isColor&&(p(_,1),E=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,E){const _=g(E);_&&_.isCubeTexture?(d===void 0&&(d=new In(new Sa(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Bi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Jc),d.material.toneMapped=dt.getTransfer(_.colorSpace)!==vt,(h!==_||m!==_.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,h=_,m=_.version,u=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new In(new ws(2,2),new pi({name:"BackgroundMaterial",uniforms:Bi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=dt.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||m!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,m=_.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(Ya,Xc(i)),t.buffers.color.setClear(Ya.r,Ya.g,Ya.b,E,r)}function f(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:y,dispose:f}}function lm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let r=a,o=!1;function l(U,k,$,I,G){let Q=!1;const j=m(U,I,$,k);r!==j&&(r=j,d(r.object)),Q=g(U,I,$,G),Q&&x(U,I,$,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,_(U,k,$,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function d(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function m(U,k,$,I){const G=I.wireframe===!0;let Q=n[k.id];Q===void 0&&(Q={},n[k.id]=Q);const j=U.isInstancedMesh===!0?U.id:0;let oe=Q[j];oe===void 0&&(oe={},Q[j]=oe);let V=oe[$.id];V===void 0&&(V={},oe[$.id]=V);let te=V[G];return te===void 0&&(te=u(c()),V[G]=te),te}function u(U){const k=[],$=[],I=[];for(let G=0;G<t;G++)k[G]=0,$[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:I,object:U,attributes:{},index:null}}function g(U,k,$,I){const G=r.attributes,Q=k.attributes;let j=0;const oe=$.getAttributes();for(const V in oe)if(oe[V].location>=0){const ie=G[V];let ye=Q[V];if(ye===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor)),ie===void 0||ie.attribute!==ye||ye&&ie.data!==ye.data)return!0;j++}return r.attributesNum!==j||r.index!==I}function x(U,k,$,I){const G={},Q=k.attributes;let j=0;const oe=$.getAttributes();for(const V in oe)if(oe[V].location>=0){let ie=Q[V];ie===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));const ye={};ye.attribute=ie,ie&&ie.data&&(ye.data=ie.data),G[V]=ye,j++}r.attributes=G,r.attributesNum=j,r.index=I}function y(){const U=r.newAttributes;for(let k=0,$=U.length;k<$;k++)U[k]=0}function p(U){f(U,0)}function f(U,k){const $=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;$[U]=1,I[U]===0&&(i.enableVertexAttribArray(U),I[U]=1),G[U]!==k&&(i.vertexAttribDivisor(U,k),G[U]=k)}function S(){const U=r.newAttributes,k=r.enabledAttributes;for(let $=0,I=k.length;$<I;$++)k[$]!==U[$]&&(i.disableVertexAttribArray($),k[$]=0)}function E(U,k,$,I,G,Q,j){j===!0?i.vertexAttribIPointer(U,k,$,G,Q):i.vertexAttribPointer(U,k,$,I,G,Q)}function _(U,k,$,I){y();const G=I.attributes,Q=$.getAttributes(),j=k.defaultAttributeValues;for(const oe in Q){const V=Q[oe];if(V.location>=0){let te=G[oe];if(te===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){const ie=te.normalized,ye=te.itemSize,De=e.get(te);if(De===void 0)continue;const H=De.buffer,he=De.type,ge=De.bytesPerElement,ce=he===i.INT||he===i.UNSIGNED_INT||te.gpuType===To;if(te.isInterleavedBufferAttribute){const Y=te.data,Ae=Y.isInterleavedBuffer===!0?Y.stride:Y.itemSize,_e=te.offset;if(Y.isInstancedInterleavedBuffer||Y.isInstancedBufferAttribute){for(let we=0;we<V.locationSize;we++)f(V.location+we,Y.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let we=0;we<V.locationSize;we++)p(V.location+we);i.bindBuffer(i.ARRAY_BUFFER,H);for(let we=0;we<V.locationSize;we++)E(V.location+we,ye/V.locationSize,he,ie,Ae*ge,(_e+ye/V.locationSize*we)*ge,ce)}else{if(te.isInstancedBufferAttribute){for(let Y=0;Y<V.locationSize;Y++)f(V.location+Y,te.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Y=0;Y<V.locationSize;Y++)p(V.location+Y);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Y=0;Y<V.locationSize;Y++)E(V.location+Y,ye/V.locationSize,he,ie,ye*ge,ye/V.locationSize*Y*ge,ce)}}else if(j!==void 0){const ie=j[oe];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(V.location,ie);break;case 3:i.vertexAttrib3fv(V.location,ie);break;case 4:i.vertexAttrib4fv(V.location,ie);break;default:i.vertexAttrib1fv(V.location,ie)}}}}S()}function N(){L();for(const U in n){const k=n[U];for(const $ in k){const I=k[$];for(const G in I){const Q=I[G];for(const j in Q)h(Q[j].object),delete Q[j];delete I[G]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;const k=n[U.id];for(const $ in k){const I=k[$];for(const G in I){const Q=I[G];for(const j in Q)h(Q[j].object),delete Q[j];delete I[G]}}delete n[U.id]}function v(U){for(const k in n){const $=n[k];for(const I in $){const G=$[I];if(G[U.id]===void 0)continue;const Q=G[U.id];for(const j in Q)h(Q[j].object),delete Q[j];delete G[U.id]}}}function b(U){for(const k in n){const $=n[k],I=U.isInstancedMesh===!0?U.id:0,G=$[I];if(G!==void 0){for(const Q in G){const j=G[Q];for(const oe in j)h(j[oe].object),delete j[oe];delete G[Q]}delete $[I],Object.keys($).length===0&&delete n[k]}}}function L(){P(),o=!0,r!==a&&(r=a,d(r.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:L,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function cm(i,e,t){let n;function a(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function l(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let u=0;for(let g=0;g<h;g++)u+=d[g];t.update(u,n,1)}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function dm(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(v){return!(v!==pn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const b=v===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Yt&&v!==fn&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=c(d);h!==d&&(Ze("WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,maxSamples:N,samples:T}}function um(i){const e=this;let t=null,n=0,a=!1,r=!1;const o=new Gn,l=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const g=m.length!==0||u||n!==0||a;return a=u,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=h(m,u,0)},this.setState=function(m,u,g){const x=m.clippingPlanes,y=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!a||x===null||x.length===0||r&&!p)r?h(null):d();else{const S=r?0:n,E=S*4;let _=f.clippingState||null;c.value=_,_=h(x,u,E,g);for(let N=0;N!==E;++N)_[N]=t[N];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,u,g,x){const y=m!==null?m.length:0;let p=null;if(y!==0){if(p=c.value,x!==!0||p===null){const f=g+y*4,S=u.matrixWorldInverse;l.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,_=g;E!==y;++E,_+=4)o.copy(m[E]).applyMatrix4(S,l),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}class Uo extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Hc(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Sa(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Li});r.uniforms.tEquirect.value=t;const o=new In(a,r),l=t.minFilter;return t.minFilter===Wn&&(t.minFilter=$t),new oo(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,a);e.setRenderTarget(r)}}const Ml=256,hm=3,fm=20,Qc=256,ed=16,pm=3,mm=new ne,gm=new ht;class ps{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oo(1,10,null),this._boxMesh=new In(new Sa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:o=256,position:l=mm}=r,c=this._renderer;this._setSize(o);const d=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,u=c.autoClearColor,g=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(gm));const p=new oo(n,a,h);return p.position.copy(l),p.update(c,e),c.autoClear=m,c.autoClearColor=u,c.autoClearDepth=g,c.autoClearStencil=x,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(d,t)),this._applyPMREM(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ml,Fu(e))}_fromTexture(e,t){e.mapping===Oi||e.mapping===ua?this._setSize(e.image.length===0?Ml:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=El(e,!1,!1),n=Math.log2(e)-hm;for(let a=0;a<=n;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=El(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const a=this._boxMesh,r=this._cubeCamera;a.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Oi||e.mapping===ua?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Al()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=xm(),this._integrationMaterial=vm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ed);for(let o=0;o<=n;o++){const l=ps.lodToRoughness(o,n);if(o>n-pm)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const c=l>0?Math.log2(t)+.5*Math.log2(6/(Qc*Math.pow(l,4)))+.5:0;a.roughness.value=l,a.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_m());const n=this._blurMaterial,a=n.uniforms,r=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=r.texture,this._renderCube(e,0,n),a.envMap.value=e.texture,this._renderCube(r,0,n)}}function El(i,e,t){return new Uo(i,{minFilter:Wn,generateMipmaps:e,type:vn,colorSpace:ds,depthBuffer:t})}function ya(i,e,t){return new pi({name:i,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:Ht,blending:Li,depthTest:!1,depthWrite:!1})}function xm(){return ya("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qc}u

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
	`)}function vm(){return ya("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ed}},`

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
	`)}function _m(){return ya("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fm}
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
	`)}function Al(){return ya("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tl(){return ya("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Sm(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,g=!1){return u==null?null:g?o(u):r(u)}function r(u){if(u&&u.isTexture){const g=u.mapping;if(g===Ds||g===Us)if(e.has(u)){const x=e.get(u).texture;return l(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const y=new Uo(x.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",d),l(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const g=u.mapping,x=g===Ds||g===Us,y=g===Oi||g===ua;if(x||y){let p=t.get(u);const f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new ps(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return x&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new ps(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function l(u,g){return g===Ds?u.mapping=Oi:g===Us&&(u.mapping=ua),u}function c(u){let g=0;const x=6;for(let y=0;y<x;y++)u[y]!==void 0&&g++;return g===x}function d(u){const g=u.target;g.removeEventListener("dispose",d);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function h(u){const g=u.target;g.removeEventListener("dispose",h);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:m}}function ym(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&is("WebGLRenderer: "+n+" extension not supported."),a}}}function bm(i,e,t,n){const a={},r=new WeakMap,o=new FinalizationRegistry(x=>delete a[x]);function l(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(const p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",l),delete a[x.id],o.unregister(x);const y=r.get(x);y&&(e.remove(y),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(x,y){return a[y.id]!==void 0||(y.addEventListener("dispose",l),a[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(x){const y=x.attributes;for(const p in y)e.update(y[p],i.ARRAY_BUFFER)}function m(x){const y=x.index,p=x.attributes.position;let f=0;if(p===void 0)return;const S=y!==null?y.array.length:p.array.length/3-1,E=p.count>=65535?Gc:Bc,_=new E(Math.ceil(S/3)*6,1),N=_.array;if(y!==null){const v=y.array;f=y.version;for(let b=0,L=0;b<S;b+=3){const P=v[b+0],U=v[b+1],k=v[b+2];N[L++]=P,N[L++]=U,N[L++]=U,N[L++]=k,N[L++]=k,N[L++]=P}}else{f=p.version;for(let v=0,b=0;v<S;v+=3){const L=v+0,P=v+1,U=v+2;N[b++]=L,N[b++]=P,N[b++]=P,N[b++]=U,N[b++]=U,N[b++]=L}}_.version=f;const T=r.get(x);T&&e.remove(T),r.set(x,_)}function u(x){const y=r.get(x);if(y){const p=x.index;p!==null&&y.version<p.version&&m(x)}else m(x);return r.get(x)}function g(){for(const x in a){const y=a[x].deref();y!==void 0&&c(y)}}return{get:d,update:h,getWireframeAttribute:u,dispose:g}}function Mm(i,e,t){let n;function a(m){n=m}let r,o;function l(m){r=m.type,o=m.bytesPerElement}function c(m,u){i.drawElements(n,u,r,m*o),t.update(u,n,1)}function d(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*o,g),t.update(u,n,g))}function h(m,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let y=0;for(let p=0;p<g;p++)y+=u[p];t.update(y,n,1)}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function Em(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:xt("WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Am(i,e,t){const n=new WeakMap,a=new Mt;function r(o,l,c){const d=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0;let u=n.get(l);if(u===void 0||u.count!==m){let L=function(){v.dispose(),n.delete(l),l.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),y===!0&&(E=3);let _=l.attributes.position.count*E,N=1;_>e.maxTextureSize&&(N=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*N*4*m),v=new Oc(T,_,N,m);v.type=fn,v.needsUpdate=!0;const b=E*4;for(let P=0;P<m;P++){const U=p[P],k=f[P],$=S[P],I=_*N*4*P;for(let G=0;G<U.count;G++){const Q=G*b;g===!0&&(a.fromBufferAttribute(U,G),T[I+Q+0]=a.x,T[I+Q+1]=a.y,T[I+Q+2]=a.z,T[I+Q+3]=0),x===!0&&(a.fromBufferAttribute(k,G),T[I+Q+4]=a.x,T[I+Q+5]=a.y,T[I+Q+6]=a.z,T[I+Q+7]=0),y===!0&&(a.fromBufferAttribute($,G),T[I+Q+8]=a.x,T[I+Q+9]=a.y,T[I+Q+10]=a.z,T[I+Q+11]=$.itemSize===4?a.w:1)}}u={count:m,texture:v,size:new ft(_,N)},n.set(l,u),l.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let y=0;y<d.length;y++)g+=d[y];const x=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Tm(i,e,t,n,a){let r=new WeakMap;function o(d){const h=a.render.frame,m=d.geometry,u=e.get(d,m);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function l(){r=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const Nm={[xc]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[Sc]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function wm(i,e,t,n,a,r){const o=new gn(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,d=null;const h=new _n;h.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const m=new mh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new In(h,m),g=new Zc(-1,1,1,-1,0,1);let x=null,y=null,p=!1,f,S=null,E=[],_=!1;this.setSize=function(N,T){o.setSize(N,T),l!==null&&l.setSize(N,T),c!==null&&c.setSize(N,T);for(let v=0;v<E.length;v++){const b=E[v];b.setSize&&b.setSize(N,T)}},this.setEffects=function(N){E=N,_=E.length>0&&E[0].isRenderPass===!0;const T=o.width,v=o.height;E.length>0&&l===null&&(l=new gn(T,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(T,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}));const b=a===!0&&E.some(L=>L.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&d===null&&(d=new ki(T,v),r===!0&&(d.format=$n,d.type=Fi)),o.dispose(),o.depthTexture=b?d:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let L=0;L<E.length;L++){const P=E[L];P.setSize&&P.setSize(T,v),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(d)}},this.begin=function(N,T){if(p||N.toneMapping===Rn&&E.length===0)return!1;if(S=T,T!==null){const v=T.width,b=T.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return _===!1&&N.setRenderTarget(o),f=N.toneMapping,N.toneMapping=Rn,!0},this.hasRenderPass=function(){return _},this.end=function(N,T){N.toneMapping=f,p=!0;let v=o,b=l;for(let L=0;L<E.length;L++){const P=E[L];P.enabled!==!1&&(P.render(N,b,v,T),P.needsSwap!==!1&&(v=b,b=b===l?c:l))}if(x!==N.outputColorSpace||y!==N.toneMapping){x=N.outputColorSpace,y=N.toneMapping,m.defines={},dt.getTransfer(x)===vt&&(m.defines.SRGB_TRANSFER="");const L=Nm[y];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=v.texture,N.setRenderTarget(S),N.render(u,g),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}const td=new Gt,nd=new ki(1,1),id=new Wc(1),ad=new Oc,sd=new Wu,rd=new Hc,Nl=[],wl=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function Vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=Nl[a];if(r===void 0&&(r=new Float32Array(a),Nl[a]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=wl[e];t===void 0&&(t=new Int32Array(e),wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Nt(t,n))return;Pl.set(n),i.uniformMatrix2fv(this.addr,!1,Pl),wt(t,n)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Nt(t,n))return;Cl.set(n),i.uniformMatrix3fv(this.addr,!1,Cl),wt(t,n)}}function Um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Nt(t,n))return;Rl.set(n),i.uniformMatrix4fv(this.addr,!1,Rl),wt(t,n)}}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Cs(i){return i.version===0&&(i.compareFunction=Dc,i.needsUpdate=!0),i}function Hm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?r=Cs(nd):r=td,t.setTexture2D(e||r,a)}function Wm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||sd,a)}function $m(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Cs(id):r=rd,t.setTextureCube(e||r,a)}function Xm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||ad,a)}function qm(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Im;case 35674:return Lm;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Om;case 35667:case 35671:return Fm;case 35668:case 35672:return km;case 35669:case 35673:return Bm;case 5125:return Gm;case 36294:return zm;case 36295:return jm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function Zm(i,e){const t=Vi(e,this.size,2);i.uniform2fv(this.addr,t)}function Km(i,e){const t=Vi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){const t=Vi(e,this.size,4);i.uniform4fv(this.addr,t)}function Qm(i,e){const t=Vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){const t=Vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){const t=Vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function ag(i,e){i.uniform3iv(this.addr,e)}function sg(i,e){i.uniform4iv(this.addr,e)}function rg(i,e){i.uniform1uiv(this.addr,e)}function og(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function dg(i,e,t){const n=this.cache,a=e.length,r=Rs(t,a);Nt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cs(nd):o=td;for(let l=0;l!==a;++l)t.setTexture2D(e[l]||o,r[l])}function ug(i,e,t){const n=this.cache,a=e.length,r=Rs(t,a);Nt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||sd,r[o])}function hg(i,e,t){const n=this.cache,a=e.length,r=Rs(t,a);Nt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Cs(id):o=rd;for(let l=0;l!==a;++l)t.setTextureCube(e[l]||o,r[l])}function fg(i,e,t){const n=this.cache,a=e.length,r=Rs(t,a);Nt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||ad,r[o])}function pg(i){switch(i){case 5126:return Ym;case 35664:return Zm;case 35665:return Km;case 35666:return Jm;case 35674:return Qm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return ag;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return fg}}class mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}}class xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const l=a[r];l.setValue(e,t[l.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function Il(i,e){i.seq.push(e),i.map[e.id]=e}function vg(i,e,t){const n=i.name,a=n.length;for(or.lastIndex=0;;){const r=or.exec(n),o=or.lastIndex;let l=r[1];const c=r[2]==="]",d=r[3];if(c&&(l=l|0),d===void 0||d==="["&&o+2===a){Il(t,d===void 0?new mg(l,i,e):new gg(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new xg(l),Il(t,m)),t=m}}}class as{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);vg(l,c,this)}const a=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(o):r.push(o);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,o=t.length;r!==o;++r){const l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const o=e[a];o.id in t&&n.push(o)}return n}}function Ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _g=37297;let Sg=0;function yg(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=a;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Dl=new Ke;function bg(i){dt._getMatrix(Dl,dt.workingColorSpace,i);const e=`mat3( ${Dl.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case us:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yg(i.getShaderSource(e),l)}else return r}function Mg(i,e){const t=bg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Eg={[xc]:"Linear",[vc]:"Reinhard",[_c]:"Cineon",[Sc]:"ACESFilmic",[bc]:"AgX",[Mc]:"Neutral",[yc]:"Custom"};function Ag(i,e){const t=Eg[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new ne;function Tg(){dt.getLuminanceCoefficients(Za);const i=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function wg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),o=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function aa(i){return i!==""}function Ol(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(Cg,Pg)}function Pg(i,e){const t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lo(t)}const Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(Ig,Lg)}function Lg(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Bl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Dg={[Ja]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function Ug(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Og={[ua]:"ENVMAP_MODE_REFRACTION"};function Fg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kg={[gc]:"ENVMAP_BLENDING_MULTIPLY",[Su]:"ENVMAP_BLENDING_MIX",[yu]:"ENVMAP_BLENDING_ADD"};function Bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kg[i.combine]||"ENVMAP_BLENDING_NONE"}function Gg(i,e,t,n){const a=i.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Ug(t),d=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Fg(t),m=Bg(t),u=Ng(t),g=wg(r),x=a.createProgram();let y,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(y=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Mg("linearToOutputTexel",t.outputColorSpace),Tg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=lo(o),o=Ol(o,t),o=Fl(o,t),l=lo(l),l=Ol(l,t),l=Fl(l,t),o=kl(o),l=kl(l),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=f+y+o,E=f+p+l,_=Ll(a,a.VERTEX_SHADER,S),N=Ll(a,a.FRAGMENT_SHADER,E);a.attachShader(x,_),a.attachShader(x,N),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){const U=a.getProgramInfoLog(x)||"",k=a.getShaderInfoLog(_)||"",$=a.getShaderInfoLog(N)||"",I=U.trim(),G=k.trim(),Q=$.trim();let j=!0,oe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,_,N);else{const V=Ul(a,_,"vertex"),te=Ul(a,N,"fragment");xt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+V+`
`+te)}else I!==""?Ze("WebGLProgram: Program Info Log:",I):(G===""||Q==="")&&(oe=!1);oe&&(P.diagnostics={runnable:j,programLog:I,vertexShader:{log:G,prefix:y},fragmentShader:{log:Q,prefix:p}})}a.deleteShader(_),a.deleteShader(N),v=new as(a,x),b=Rg(a,x)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(x,_g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=N,this}let zg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vg(e),t.set(e,n)),n}}class Vg{constructor(e){this.id=zg++,this.code=e,this.usedTimes=0}}function Hg(i){return i===fi||i===ls||i===cs}function Wg(i,e,t,n,a,r){const o=new Fc,l=new jg,c=new Set,d=[],h=new Map,m=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,b,L,P,U,k){const $=P.fog,I=U.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||G,Q),oe=u[v.type];let V=n.precision;v.precision!==null&&(V=n.getMaxPrecision(v.precision),V!==v.precision&&Ze("WebGLProgram.getParameters:",v.precision,"not supported, using",V,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=te!==void 0?te.length:0;let ye=0;I.morphAttributes.position!==void 0&&(ye=1),I.morphAttributes.normal!==void 0&&(ye=2),I.morphAttributes.color!==void 0&&(ye=3);let De,H,he,ge;if(oe){const ve=hn[oe];De=ve.vertexShader,H=ve.fragmentShader}else{De=v.vertexShader,H=v.fragmentShader;const ve=l.getVertexShaderStage(v),qe=l.getFragmentShaderStage(v);l.update(v,ve,qe),he=ve.id,ge=qe.id}const ce=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),Ae=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,we=!!v.map,Ye=!!v.matcap,me=!!j,Re=me&&j.isPMREMTexture===!0,Ve=!!v.aoMap,Xe=!!v.lightMap,Ee=!!v.bumpMap&&v.wireframe===!1,ze=!!v.normalMap,Qe=!!v.displacementMap,Te=!!v.emissiveMap,it=!!v.metalnessMap,ct=!!v.roughnessMap,at=v.anisotropy>0,F=v.clearcoat>0,rt=v.diffuseRoughness>0,et=v.dispersion>0,tt=v.retroreflectivity>0,Se=v.iridescence>0,mt=v.sheen>0,Oe=v.transmission>0,je=at&&!!v.anisotropyMap,w=F&&!!v.clearcoatMap,A=F&&!!v.clearcoatNormalMap,D=F&&!!v.clearcoatRoughnessMap,se=rt&&!!v.diffuseRoughnessMap,K=Se&&!!v.iridescenceMap,de=Se&&!!v.iridescenceThicknessMap,fe=mt&&!!v.sheenColorMap,Z=mt&&!!v.sheenRoughnessMap,B=!!v.specularMap,ee=!!v.specularColorMap,C=!!v.specularIntensityMap,J=Oe&&!!v.transmissionMap,X=Oe&&!!v.thicknessMap,le=!!v.gradientMap,re=!!v.alphaMap,pe=v.alphaTest>0,xe=!!v.alphaHash,Ne=!!v.extensions;let ue=Rn;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Fe=Re?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,He={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:H,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:V,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,instancingMorph:Ae&&U.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:we,matcap:Ye,envMap:me,envMapMode:me&&j.mapping,envMapPMREM:Re,envMapMaxLod:Re?Fe.length-1:null,envMapSize:Re?Fe[0].width:null,aoMap:Ve,lightMap:Xe,bumpMap:Ee,normalMap:ze,displacementMap:Qe,emissiveMap:Te,normalMapObjectSpace:ze&&v.normalMapType===Eu,normalMapTangentSpace:ze&&v.normalMapType===ao,packedNormalMap:ze&&v.normalMapType===ao&&Hg(v.normalMap.format),metalnessMap:it,roughnessMap:ct,anisotropy:at,anisotropyMap:je,clearcoat:F,clearcoatMap:w,clearcoatNormalMap:A,clearcoatRoughnessMap:D,diffuseRoughness:rt,diffuseRoughnessMap:se,dispersion:et,retroreflection:tt,iridescence:Se,iridescenceMap:K,iridescenceThicknessMap:de,sheen:mt,sheenColorMap:fe,sheenRoughnessMap:Z,specularMap:B,specularColorMap:ee,specularIntensityMap:C,transmission:Oe,transmissionMap:J,thicknessMap:X,gradientMap:le,opaque:v.transparent===!1&&v.blending===oa&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:pe,alphaHash:xe,combine:v.combine,mapUv:we&&g(v.map.channel),aoMapUv:Ve&&g(v.aoMap.channel),lightMapUv:Xe&&g(v.lightMap.channel),bumpMapUv:Ee&&g(v.bumpMap.channel),normalMapUv:ze&&g(v.normalMap.channel),displacementMapUv:Qe&&g(v.displacementMap.channel),emissiveMapUv:Te&&g(v.emissiveMap.channel),metalnessMapUv:it&&g(v.metalnessMap.channel),roughnessMapUv:ct&&g(v.roughnessMap.channel),anisotropyMapUv:je&&g(v.anisotropyMap.channel),clearcoatMapUv:w&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&g(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&g(v.diffuseRoughnessMap.channel),iridescenceMapUv:K&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Z&&g(v.sheenRoughnessMap.channel),specularMapUv:B&&g(v.specularMap.channel),specularColorMapUv:ee&&g(v.specularColorMap.channel),specularIntensityMapUv:C&&g(v.specularIntensityMap.channel),transmissionMapUv:J&&g(v.transmissionMap.channel),thicknessMapUv:X&&g(v.thicknessMap.channel),alphaMapUv:re&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ze||at),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(we||re),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&ze===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Y,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:Te&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function y(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)b.push(L),b.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(b,v),f(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function f(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){const b=u[v.type];let L;if(b){const P=hn[b];L=hh.clone(P.uniforms)}else L=v.uniforms;return L}function E(v,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new Gg(i,b,v,a),d.push(L),h.set(b,L)),L}function _(v){if(--v.usedTimes===0){const b=d.indexOf(v);d[b]=d[d.length-1],d.pop(),h.delete(v.cacheKey),v.destroy()}}function N(v){l.remove(v)}function T(){l.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:S,acquireProgram:E,releaseProgram:_,releaseShaderCache:N,programs:d,dispose:T}}function $g(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function a(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function Xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zl(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function o(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function l(u,g,x,y,p,f){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:g,material:x,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:f},i[e]=S):(S.id=u.id,S.object=u,S.geometry=g,S.material=x,S.materialVariant=o(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=p,S.group=f),e++,S}function c(u,g,x,y,p,f,S){S.reversedDepth===!0&&(p=-p);const E=l(u,g,x,y,p,f);x.transmission>0?n.push(E):x.transparent===!0?a.push(E):t.push(E)}function d(u,g,x,y,p,f){const S=l(u,g,x,y,p,f);x.transmission>0?n.unshift(S):x.transparent===!0?a.unshift(S):t.unshift(S)}function h(u,g){t.length>1&&t.sort(u||Xg),n.length>1&&n.sort(g||Gl),a.length>1&&a.sort(g||Gl)}function m(){for(let u=e,g=i.length;u<g;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:c,unshift:d,finish:m,sort:h}}function qg(){let i=new WeakMap;function e(n,a){const r=i.get(n);let o;return r===void 0?(o=new zl,i.set(n,[o])):a>=r.length?(o=new zl,r.push(o)):o=r[a],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new ht};break;case"SpotLight":t={position:new ne,direction:new ne,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function Zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kg=0;function Jg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qg(i){const e=new Yg,t=Zg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new ne);const a=new ne,r=new yt,o=new yt;function l(d){let h=0,m=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let g=0,x=0,y=0,p=0,f=0,S=0,E=0,_=0,N=0,T=0,v=0,b=0,L=0,P=0;d.sort(Jg);for(let k=0,$=d.length;k<$;k++){const I=d[k],G=I.color,Q=I.intensity,j=I.distance;let oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===fi?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*Q,m+=G.g*Q,u+=G.b*Q;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],Q);P++}else if(I.isSunLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[x]=ie,n.sunShadowMap[x]=oe;const ye=te.getViewportCount();for(let De=0;De<ye;De++)n.sunShadowMatrix[y+De]=te.getMatrix(De),n.sunShadowCascade[y+De]=te._cascadeData[De];y+=ye,x++}n.sun[g]=V,g++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.directionalShadow[p]=ie,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=I.shadow.matrix,N++}n.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(G).multiplyScalar(Q),V.distance=j,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[S]=V;const te=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,te.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[S]=te.matrix,I.castShadow){const ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.spotShadow[S]=ie,n.spotShadowMap[S]=oe,v++}S++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(G).multiplyScalar(Q),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=V,E++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,n.pointShadow[f]=ie,n.pointShadowMap[f]=oe,n.pointShadowMatrix[f]=I.shadow.matrix,T++}n.point[f]=V,f++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(Q),V.groundColor.copy(I.groundColor).multiplyScalar(Q),n.hemi[_]=V,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;const U=n.hash;(U.sunLength!==g||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==S||U.rectAreaLength!==E||U.hemiLength!==_||U.numSunShadows!==x||U.numDirectionalShadows!==N||U.numPointShadows!==T||U.numSpotShadows!==v||U.numSpotMaps!==b||U.numLightProbes!==P)&&(n.sun.length=g,n.directional.length=p,n.spot.length=S,n.rectArea.length=E,n.point.length=f,n.hemi.length=_,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.directionalShadowMatrix.length=N,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-L,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,U.sunLength=g,U.directionalLength=p,U.pointLength=f,U.spotLength=S,U.rectAreaLength=E,U.hemiLength=_,U.numSunShadows=x,U.numDirectionalShadows=N,U.numPointShadows=T,U.numSpotShadows=v,U.numSpotMaps=b,U.numLightProbes=P,n.version=Kg++)}function c(d,h){let m=0,u=0,g=0,x=0,y=0,p=0;const f=h.matrixWorldInverse;for(let S=0,E=d.length;S<E;S++){const _=d[S];if(_.isSunLight){const N=n.sun[m];N.direction.setFromMatrixPosition(_.matrixWorld),N.direction.transformDirection(f),m++}else if(_.isDirectionalLight){const N=n.directional[u];N.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(f),u++}else if(_.isSpotLight){const N=n.spot[x];N.position.setFromMatrixPosition(_.matrixWorld),N.position.applyMatrix4(f),N.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(f),x++}else if(_.isRectAreaLight){const N=n.rectArea[y];N.position.setFromMatrixPosition(_.matrixWorld),N.position.applyMatrix4(f),o.identity(),r.copy(_.matrixWorld),r.premultiply(f),o.extractRotation(r),N.halfWidth.set(_.width*.5,0,0),N.halfHeight.set(0,_.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){const N=n.point[g];N.position.setFromMatrixPosition(_.matrixWorld),N.position.applyMatrix4(f),g++}else if(_.isHemisphereLight){const N=n.hemi[p];N.direction.setFromMatrixPosition(_.matrixWorld),N.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:n}}function jl(i){const e=new Qg(i),t=[],n=[],a=[];function r(m){h.camera=m,t.length=0,n.length=0,a.length=0}function o(m){m.isLightProbeGrid?a.push(m):t.push(m)}function l(m){n.push(m)}function c(){e.setup(t),a.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:l}}function e0(i){let e=new WeakMap;function t(a,r=0){const o=e.get(a);let l;return o===void 0?(l=new jl(i),e.set(a,[l])):r>=o.length?(l=new jl(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`,i0=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],a0=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Vl=new yt,ta=new ne,lr=new ne;function s0(i,e,t){let n=new pa;const a=new ft,r=new ft,o=new Mt,l=new xh,c=new vh,d={},h=t.maxTextureSize,m={[hi]:Ht,[Ht]:hi,[Nn]:Nn},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const x=new _n;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new In(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let f=this.type;this.render=function(T,v,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===tu&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ja);const L=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=f!==this.type;$&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=T.length;I<G;I++){const Q=T[I],j=Q.shadow;if(j===void 0){Ze("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const oe=j.getFrameExtents();a.multiply(oe),r.copy(j.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/oe.x),a.x=r.x*oe.x,j.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/oe.y),a.y=r.y*oe.y,j.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=V,j.map===null||$===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===ia){if(Q.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new gn(a.x,a.y,{format:fi,type:vn,minFilter:$t,magFilter:$t,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new ki(a.x,a.y,fn),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=Qn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Lt,j.map.depthTexture.magFilter=Lt}else Q.isPointLight?(j.map=new Uo(a.x),j.map.depthTexture=new Wc(a.x,xn)):(j.map=new gn(a.x,a.y),j.map.depthTexture=new ki(a.x,a.y,xn)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=Qn,this.type===Ja?(j.map.depthTexture.compareFunction=V?Lc:Ic,j.map.depthTexture.minFilter=$t,j.map.depthTexture.magFilter=$t):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Lt,j.map.depthTexture.magFilter=Lt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==a.x||j.map.height!==a.y)&&j.map.setSize(a.x,a.y);const te=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Q.isPointLight!==!0&&j.updateMatrices(Q,b);const ie=j.camera.layers.mask&4294967294?j.camera.layers:b.layers;for(let ye=0;ye<te;ye++){const De=j.getCamera(ye);if(Q.isPointLight){const H=j.camera,he=j.matrix,ge=Q.distance||H.far;ge!==H.far&&(H.far=ge,H.updateProjectionMatrix()),ta.setFromMatrixPosition(Q.matrixWorld),H.position.copy(ta),lr.copy(H.position),lr.add(i0[ye]),H.up.copy(a0[ye]),H.lookAt(lr),H.updateMatrixWorld(),he.makeTranslation(-ta.x,-ta.y,-ta.z),Vl.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Vl,H.coordinateSystem,H.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,ye),i.clear();else{ye===0&&(i.setRenderTarget(j.map),i.clear());const H=j.getViewport(ye);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),k.viewport(o)}n=j.getFrustum(ye),_(v,b,De,Q,ie,this.type)}j.isPointLightShadow!==!0&&this.type===ia&&S(j,b),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,P,U)};function S(T,v){const b=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(a.x,a.y,{format:fi,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(v,null,b,u,y,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(v,null,b,g,y,null)}function E(T,v,b,L){let P=null;const U=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=b.isPointLight===!0?c:l,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const k=P.uuid,$=v.uuid;let I=d[k];I===void 0&&(I={},d[k]=I);let G=I[$];G===void 0&&(G=P.clone(),I[$]=G,v.addEventListener("dispose",N)),P=G}if(P.visible=v.visible,P.wireframe=v.wireframe,L===ia?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:m[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=i.properties.get(P);k.light=b}return P}function _(T,v,b,L,P,U){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ia)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const I=e.update(T),G=T.material;if(Array.isArray(G)){const Q=I.groups;for(let j=0,oe=Q.length;j<oe;j++){const V=Q[j],te=G[V.materialIndex];if(te&&te.visible){const ie=E(T,te,L,U);T.onBeforeShadow(i,T,v,b,I,ie,V),i.renderBufferDirect(b,null,I,ie,T,V),T.onAfterShadow(i,T,v,b,I,ie,V)}}}else if(G.visible){const Q=E(T,G,L,U);T.onBeforeShadow(i,T,v,b,I,Q,null),i.renderBufferDirect(b,null,I,Q,T,null),T.onAfterShadow(i,T,v,b,I,Q,null)}}const $=T.children;for(let I=0,G=$.length;I<G;I++)_($[I],v,b,L,P,U)}function N(T){T.target.removeEventListener("dispose",N);for(const b in d){const L=d[b],P=T.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function r0(i,e){function t(){let C=!1;const J=new Mt;let X=null;const le=new Mt(0,0,0,0);return{setMask:function(re){X!==re&&!C&&(i.colorMask(re,re,re,re),X=re)},setLocked:function(re){C=re},setClear:function(re,pe,xe,Ne,ue){ue===!0&&(re*=Ne,pe*=Ne,xe*=Ne),J.set(re,pe,xe,Ne),le.equals(J)===!1&&(i.clearColor(re,pe,xe,Ne),le.copy(J))},reset:function(){C=!1,X=null,le.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,X=null,le=null,re=null;return{setReversed:function(pe){if(J!==pe){const xe=e.get("EXT_clip_control");pe?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),J=pe;const Ne=re;re=null,this.setClear(Ne)}},getReversed:function(){return J},setTest:function(pe){pe?Y(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(pe){X!==pe&&!C&&(i.depthMask(pe),X=pe)},setFunc:function(pe){if(J&&(pe=Uu[pe]),le!==pe){switch(pe){case _r:i.depthFunc(i.NEVER);break;case Sr:i.depthFunc(i.ALWAYS);break;case yr:i.depthFunc(i.LESS);break;case da:i.depthFunc(i.LEQUAL);break;case br:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case Er:i.depthFunc(i.GREATER);break;case Ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=pe}},setLocked:function(pe){C=pe},setClear:function(pe){re!==pe&&(re=pe,J&&(pe=1-pe),i.clearDepth(pe))},reset:function(){C=!1,X=null,le=null,re=null,J=!1}}}function a(){let C=!1,J=null,X=null,le=null,re=null,pe=null,xe=null,Ne=null,ue=null;return{setTest:function(Fe){C||(Fe?Y(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Fe){J!==Fe&&!C&&(i.stencilMask(Fe),J=Fe)},setFunc:function(Fe,He,ve){(X!==Fe||le!==He||re!==ve)&&(i.stencilFunc(Fe,He,ve),X=Fe,le=He,re=ve)},setOp:function(Fe,He,ve){(pe!==Fe||xe!==He||Ne!==ve)&&(i.stencilOp(Fe,He,ve),pe=Fe,xe=He,Ne=ve)},setLocked:function(Fe){C=Fe},setClear:function(Fe){ue!==Fe&&(i.clearStencil(Fe),ue=Fe)},reset:function(){C=!1,J=null,X=null,le=null,re=null,pe=null,xe=null,Ne=null,ue=null}}}const r=new t,o=new n,l=new a;let c={};const d=new WeakMap;let h={},m={},u={},g=new WeakMap,x=[],y=null,p=!1,f=null,S=null,E=null,_=null,N=null,T=null,v=null,b=new ht(0,0,0),L=0,P=!1,U=null,k=null,$=null,I=null,G=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,oe=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=oe>=2);let te=null,ie={};const ye=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),H=new Mt().fromArray(ye),he=new Mt().fromArray(De);function ge(C,J,X,le){const re=new Uint8Array(4),pe=i.createTexture();i.bindTexture(C,pe),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<X;xe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(J+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return pe}const ce={};ce[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Y(i.DEPTH_TEST),o.setFunc(da),Ee(!1),ze(qo),Y(i.CULL_FACE),Ve(Li);function Y(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ae(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function _e(C,J){return u[C]!==J?(i.bindFramebuffer(C,J),u[C]=J,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function we(C,J){let X=x,le=!1;if(C){X=g.get(J),X===void 0&&(X=[],g.set(J,X));const re=C.textures;if(X.length!==re.length||X[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,xe=re.length;pe<xe;pe++)X[pe]=i.COLOR_ATTACHMENT0+pe;X.length=re.length,le=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,le=!0);le&&i.drawBuffers(X)}function Ye(C){return y!==C?(i.useProgram(C),y=C,!0):!1}const me={[Pi]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};me[su]=i.MIN,me[ru]=i.MAX;const Re={[ou]:i.ZERO,[lu]:i.ONE,[cu]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[fu]:i.DST_COLOR,[uu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[_u]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(C,J,X,le,re,pe,xe,Ne,ue,Fe){if(C===Li){p===!0&&(Ae(i.BLEND),p=!1);return}if(p===!1&&(Y(i.BLEND),p=!0),C!==nu){if(C!==f||Fe!==P){if((S!==Pi||N!==Pi)&&(i.blendEquation(i.FUNC_ADD),S=Pi,N=Pi),Fe)switch(C){case oa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xt("WebGLState: Invalid blending: ",C);break}else switch(C){case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yo:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",C);break}E=null,_=null,T=null,v=null,b.set(0,0,0),L=0,f=C,P=Fe}return}re=re||J,pe=pe||X,xe=xe||le,(J!==S||re!==N)&&(i.blendEquationSeparate(me[J],me[re]),S=J,N=re),(X!==E||le!==_||pe!==T||xe!==v)&&(i.blendFuncSeparate(Re[X],Re[le],Re[pe],Re[xe]),E=X,_=le,T=pe,v=xe),(Ne.equals(b)===!1||ue!==L)&&(i.blendColor(Ne.r,Ne.g,Ne.b,ue),b.copy(Ne),L=ue),f=C,P=!1}function Xe(C,J){C.side===Nn?Ae(i.CULL_FACE):Y(i.CULL_FACE);let X=C.side===Ht;J&&(X=!X),Ee(X),C.blending===oa&&C.transparent===!1?Ve(Li):Ve(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);const le=C.stencilWrite;l.setTest(le),le&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Te(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function ze(C){C!==Qd?(Y(i.CULL_FACE),C!==k&&(C===qo?i.cullFace(i.BACK):C===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),k=C}function Qe(C){C!==$&&(j&&i.lineWidth(C),$=C)}function Te(C,J,X){C?(Y(i.POLYGON_OFFSET_FILL),(I!==J||G!==X)&&(I=J,G=X,o.getReversed()&&(J=-J,X=-X),i.polygonOffset(J,X))):Ae(i.POLYGON_OFFSET_FILL)}function it(C){C?Y(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function ct(C){C===void 0&&(C=i.TEXTURE0+Q-1),te!==C&&(i.activeTexture(C),te=C)}function at(C,J,X){X===void 0&&(te===null?X=i.TEXTURE0+Q-1:X=te);let le=ie[X];le===void 0&&(le={type:void 0,texture:void 0},ie[X]=le),(le.type!==C||le.texture!==J)&&(te!==X&&(i.activeTexture(X),te=X),i.bindTexture(C,J||ce[C]),le.type=C,le.texture=J)}function F(){const C=ie[te];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(C){xt("WebGLState:",C)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(C){xt("WebGLState:",C)}}function tt(){try{i.texSubImage2D(...arguments)}catch(C){xt("WebGLState:",C)}}function Se(){try{i.texSubImage3D(...arguments)}catch(C){xt("WebGLState:",C)}}function mt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){xt("WebGLState:",C)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(C){xt("WebGLState:",C)}}function je(){try{i.texStorage2D(...arguments)}catch(C){xt("WebGLState:",C)}}function w(){try{i.texStorage3D(...arguments)}catch(C){xt("WebGLState:",C)}}function A(){try{i.texImage2D(...arguments)}catch(C){xt("WebGLState:",C)}}function D(){try{i.texImage3D(...arguments)}catch(C){xt("WebGLState:",C)}}function se(C){return m[C]!==void 0?m[C]:i.getParameter(C)}function K(C,J){m[C]!==J&&(i.pixelStorei(C,J),m[C]=J)}function de(C){H.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),H.copy(C))}function fe(C){he.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),he.copy(C))}function Z(C,J){let X=d.get(J);X===void 0&&(X=new WeakMap,d.set(J,X));let le=X.get(C);le===void 0&&(le=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,le,le),X.set(C,le))}function B(C,J,X){const re=d.get(J).get(C);c[re]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,X),c[re]=X)}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},te=null,ie={},u={},c={},g=new WeakMap,x=[],y=null,p=!1,f=null,S=null,E=null,_=null,N=null,T=null,v=null,b=new ht(0,0,0),L=0,P=!1,U=null,k=null,$=null,I=null,G=null,H.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:Y,disable:Ae,bindFramebuffer:_e,drawBuffers:we,useProgram:Ye,setBlending:Ve,setMaterial:Xe,setFlipSided:Ee,setCullFace:ze,setLineWidth:Qe,setPolygonOffset:Te,setScissorTest:it,activeTexture:ct,bindTexture:at,unbindTexture:F,compressedTexImage2D:rt,compressedTexImage3D:et,texImage2D:A,texImage3D:D,pixelStorei:K,getParameter:se,updateUBOMapping:Z,uniformBlockBinding:B,texStorage2D:je,texStorage3D:w,texSubImage2D:tt,texSubImage3D:Se,compressedTexSubImage2D:mt,compressedTexSubImage3D:Oe,scissor:de,viewport:fe,reset:ee}}function o0(i,e,t,n,a,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ft,h=new WeakMap,m=new Set;let u;const g=new WeakMap,x=new Set,y=new FinalizationRegistry(w=>x.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,A){return p?new OffscreenCanvas(w,A):hs("canvas")}function S(w,A,D){let se=1;const K=je(w);if((K.width>D||K.height>D)&&(se=D/Math.max(K.width,K.height)),se<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const de=Math.floor(se*K.width),fe=Math.floor(se*K.height);u===void 0&&(u=f(de,fe));const Z=A?f(de,fe):u;return Z.width=de,Z.height=fe,Z.getContext("2d").drawImage(w,0,0,de,fe),Ze("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+de+"x"+fe+")."),Z}else return"data"in w&&Ze("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function E(w){return w.generateMipmaps}function _(w){i.generateMipmap(w)}function N(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,A,D,se,K,de=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;se&&(fe=e.get("EXT_texture_norm16"),fe||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=A;if(A===i.RED&&(D===i.FLOAT&&(Z=i.R32F),D===i.HALF_FLOAT&&(Z=i.R16F),D===i.UNSIGNED_BYTE&&(Z=i.R8),D===i.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),D===i.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),A===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.R8UI),D===i.UNSIGNED_SHORT&&(Z=i.R16UI),D===i.UNSIGNED_INT&&(Z=i.R32UI),D===i.BYTE&&(Z=i.R8I),D===i.SHORT&&(Z=i.R16I),D===i.INT&&(Z=i.R32I)),A===i.RG&&(D===i.FLOAT&&(Z=i.RG32F),D===i.HALF_FLOAT&&(Z=i.RG16F),D===i.UNSIGNED_BYTE&&(Z=i.RG8),D===i.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),D===i.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RG8UI),D===i.UNSIGNED_SHORT&&(Z=i.RG16UI),D===i.UNSIGNED_INT&&(Z=i.RG32UI),D===i.BYTE&&(Z=i.RG8I),D===i.SHORT&&(Z=i.RG16I),D===i.INT&&(Z=i.RG32I)),A===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),D===i.UNSIGNED_INT&&(Z=i.RGB32UI),D===i.BYTE&&(Z=i.RGB8I),D===i.SHORT&&(Z=i.RGB16I),D===i.INT&&(Z=i.RGB32I)),A===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),D===i.UNSIGNED_INT&&(Z=i.RGBA32UI),D===i.BYTE&&(Z=i.RGBA8I),D===i.SHORT&&(Z=i.RGBA16I),D===i.INT&&(Z=i.RGBA32I)),A===i.RGB&&(D===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),D===i.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),A===i.RGBA){const B=de?us:dt.getTransfer(K);D===i.FLOAT&&(Z=i.RGBA32F),D===i.HALF_FLOAT&&(Z=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Z=B===vt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),D===i.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(w,A){let D;return w?A===null||A===xn||A===Fi?D=i.DEPTH24_STENCIL8:A===fn?D=i.DEPTH32F_STENCIL8:A===ha&&(D=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xn||A===Fi?D=i.DEPTH_COMPONENT24:A===fn?D=i.DEPTH_COMPONENT32F:A===ha&&(D=i.DEPTH_COMPONENT16),D}function b(w,A){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==$t?Math.log2(Math.max(A.width,A.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?A.mipmaps.length:1}function L(w){const A=new WeakRef(w);n.get(w).__ref=A,x.add(A),y.register(w,A,A)}function P(w){const A=n.get(w).__ref;A!==void 0&&(x.delete(A),y.unregister(A))}function U(w){$(w.target)}function k(w){I(w.target)}function $(w){w.removeEventListener("dispose",U),P(w),Q(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&m.delete(w)}function I(w){w.removeEventListener("dispose",k),P(w),oe(w)}function G(){for(const w of x){const A=w.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):$(A))}x.clear(),m.clear()}function Q(w){const A=n.get(w);if(A.__webglInit===void 0)return;const D=w.source,se=g.get(D);if(se){const K=se[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&j(w),Object.keys(se).length===0&&g.delete(D)}n.remove(w)}function j(w){const A=n.get(w);i.deleteTexture(A.__webglTexture);const D=w.source,se=g.get(D);delete se[A.__cacheKey],o.memory.textures--}function oe(w){const A=n.get(w);A.__depthDisposeCallback&&A.__depthDisposeCallback();const D=w.depthTexture;if(D&&D.renderTarget===w&&$(D),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(A.__webglFramebuffer[K]))for(let de=0;de<A.__webglFramebuffer[K].length;de++)i.deleteFramebuffer(A.__webglFramebuffer[K][de]);else i.deleteFramebuffer(A.__webglFramebuffer[K]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[K])}else{if(Array.isArray(A.__webglFramebuffer))for(let K=0;K<A.__webglFramebuffer.length;K++)i.deleteFramebuffer(A.__webglFramebuffer[K]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let K=0;K<A.__webglColorRenderbuffer.length;K++)A.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[K]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=w.textures;for(let K=0,de=se.length;K<de;K++){const fe=n.get(se[K]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(se[K])}n.remove(w)}let V=0;function te(){V=0}function ie(){return V}function ye(w){V=w}function De(){const w=V;return w>=a.maxTextures&&Ze("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,w}function H(w){const A=[];return A.push(w.wrapS),A.push(w.wrapT),A.push(w.wrapR||0),A.push(w.magFilter),A.push(w.minFilter),A.push(w.anisotropy),A.push(w.internalFormat),A.push(w.format),A.push(w.type),A.push(w.generateMipmaps),A.push(w.mipmapsAutoUpdate),A.push(w.premultiplyAlpha),A.push(w.flipY),A.push(w.unpackAlignment),A.push(w.colorSpace),A.join()}function he(w,A){const D=n.get(w);if(w.isVideoTexture&&mt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){const se=w.image;if(se===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(D,w,A);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+A)}function ge(w,A){const D=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){Xe(D,w,A);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+A)}function ce(w,A){const D=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){Xe(D,w,A);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+A)}function Y(w,A){const D=n.get(w);if(w.version>0&&D.__version!==w.version){Ee(D,w,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+A)}const Ae={[Tr]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},_e={[Lt]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Os]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},we={[Tu]:i.NEVER,[Dc]:i.ALWAYS,[Nu]:i.LESS,[Ic]:i.LEQUAL,[wu]:i.EQUAL,[Lc]:i.GEQUAL,[Ru]:i.GREATER,[Cu]:i.NOTEQUAL};function Ye(w,A){if(A.type===fn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===$t||A.magFilter===Os||A.magFilter===Ta||A.magFilter===Wn||A.minFilter===$t||A.minFilter===Os||A.minFilter===Ta||A.minFilter===Wn)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ae[A.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ae[A.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ae[A.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[A.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[A.minFilter]),A.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,we[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Lt||A.minFilter!==Ta&&A.minFilter!==Wn||A.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function me(w,A){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",U),L(A));const se=A.source;let K=g.get(se);K===void 0&&(K={},g.set(se,K));const de=H(A);if(de!==w.__cacheKey){K[de]===void 0&&(K[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[de].usedTimes++;const fe=K[w.__cacheKey];fe!==void 0&&(K[w.__cacheKey].usedTimes--,fe.usedTimes===0&&j(A)),w.__cacheKey=de,w.__webglTexture=K[de].texture}return D}function Re(w,A,D){return Math.floor(Math.floor(w/D)/A)}function Ve(w,A,D,se){const de=w.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,D,se,A.data);else{de.sort((C,J)=>C.start-J.start);let fe=0;for(let C=1;C<de.length;C++){const J=de[fe],X=de[C],le=J.start+J.count,re=Re(X.start,A.width,4),pe=Re(J.start,A.width,4);X.start<=le+1&&re===pe&&Re(X.start+X.count-1,A.width,4)===re?J.count=Math.max(J.count,X.start+X.count-J.start):(++fe,de[fe]=X)}de.length=fe+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),B=t.getParameter(i.UNPACK_SKIP_PIXELS),ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let C=0,J=de.length;C<J;C++){const X=de[C],le=Math.floor(X.start/4),re=Math.ceil(X.count/4),pe=le%A.width,xe=Math.floor(le/A.width),Ne=re,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe),t.texSubImage2D(i.TEXTURE_2D,0,pe,xe,Ne,ue,D,se,A.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,B),t.pixelStorei(i.UNPACK_SKIP_ROWS,ee)}}function Xe(w,A,D){let se=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=i.TEXTURE_3D);const K=me(w,A),de=A.source;t.bindTexture(se,w.__webglTexture,i.TEXTURE0+D);const fe=n.get(de);if(de.version!==fe.__version||K===!0){if(t.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ue=dt.getPrimaries(dt.workingColorSpace),Fe=A.colorSpace===zn?null:dt.getPrimaries(A.colorSpace),He=A.colorSpace===zn||ue===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let B=S(A.image,!1,a.maxTextureSize);B=Oe(A,B);const ee=r.convert(A.format,A.colorSpace),C=r.convert(A.type);let J=T(A.internalFormat,ee,C,A.normalized,A.colorSpace,A.isVideoTexture);Ye(se,A);let X;const le=A.mipmaps,re=A.isVideoTexture!==!0,pe=fe.__version===void 0||K===!0,xe=de.dataReady,Ne=b(A,B);if(A.isDepthTexture)J=v(A.format===$n,A.type),pe&&(re?t.texStorage2D(i.TEXTURE_2D,1,J,B.width,B.height):t.texImage2D(i.TEXTURE_2D,0,J,B.width,B.height,0,ee,C,null));else if(A.isDataTexture)if(le.length>0){re&&pe&&t.texStorage2D(i.TEXTURE_2D,Ne,J,le[0].width,le[0].height);for(let ue=0,Fe=le.length;ue<Fe;ue++)X=le[ue],re?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,X.width,X.height,ee,C,X.data):t.texImage2D(i.TEXTURE_2D,ue,J,X.width,X.height,0,ee,C,X.data);A.generateMipmaps=!1}else re?(pe&&t.texStorage2D(i.TEXTURE_2D,Ne,J,B.width,B.height),xe&&Ve(A,B,ee,C)):t.texImage2D(i.TEXTURE_2D,0,J,B.width,B.height,0,ee,C,B.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){re&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,J,le[0].width,le[0].height,B.depth);for(let ue=0,Fe=le.length;ue<Fe;ue++)if(X=le[ue],A.format!==pn)if(ee!==null)if(re){if(xe)if(A.layerUpdates.size>0){const He=bl(X.width,X.height,A.format,A.type);for(const ve of A.layerUpdates){const qe=X.data.subarray(ve*He/X.data.BYTES_PER_ELEMENT,(ve+1)*He/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,ve,X.width,X.height,1,ee,qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,X.width,X.height,B.depth,ee,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,J,X.width,X.height,B.depth,0,X.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,X.width,X.height,B.depth,ee,C,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,J,X.width,X.height,B.depth,0,ee,C,X.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{re&&pe&&t.texStorage2D(i.TEXTURE_2D,Ne,J,le[0].width,le[0].height);for(let ue=0,Fe=le.length;ue<Fe;ue++)X=le[ue],A.format!==pn?ee!==null?re?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,X.width,X.height,ee,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,J,X.width,X.height,0,X.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,X.width,X.height,ee,C,X.data):t.texImage2D(i.TEXTURE_2D,ue,J,X.width,X.height,0,ee,C,X.data)}else if(A.isDataArrayTexture)if(re){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,J,B.width,B.height,B.depth),xe)if(A.layerUpdates.size>0){const ue=bl(B.width,B.height,A.format,A.type);for(const Fe of A.layerUpdates){const He=B.data.subarray(Fe*ue/B.data.BYTES_PER_ELEMENT,(Fe+1)*ue/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,B.width,B.height,1,ee,C,He)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ee,C,B.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,B.width,B.height,B.depth,0,ee,C,B.data);else if(A.isData3DTexture)re?(pe&&t.texStorage3D(i.TEXTURE_3D,Ne,J,B.width,B.height,B.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ee,C,B.data)):t.texImage3D(i.TEXTURE_3D,0,J,B.width,B.height,B.depth,0,ee,C,B.data);else if(A.isFramebufferTexture){if(pe)if(re)t.texStorage2D(i.TEXTURE_2D,Ne,J,B.width,B.height);else{let ue=B.width,Fe=B.height;for(let He=0;He<Ne;He++)t.texImage2D(i.TEXTURE_2D,He,J,ue,Fe,0,ee,C,null),ue>>=1,Fe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),B.parentNode!==ue){ue.appendChild(B),m.add(A),ue.onpaint=Fe=>{const He=Fe.changedElements;for(const ve of m)He.includes(ve.image)&&(ve.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,B);else{const He=i.RGBA,ve=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,ve,qe,B)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(re&&pe){const ue=je(le[0]);t.texStorage2D(i.TEXTURE_2D,Ne,J,ue.width,ue.height)}for(let ue=0,Fe=le.length;ue<Fe;ue++)X=le[ue],re?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ee,C,X):t.texImage2D(i.TEXTURE_2D,ue,J,ee,C,X);A.generateMipmaps=!1}else if(re){if(pe){const ue=je(B);t.texStorage2D(i.TEXTURE_2D,Ne,J,ue.width,ue.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,C,B)}else t.texImage2D(i.TEXTURE_2D,0,J,ee,C,B);E(A)&&A.mipmapsAutoUpdate===!0&&_(se),fe.__version=de.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function Ee(w,A,D){if(A.image.length!==6)return;const se=me(w,A),K=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+D);const de=n.get(K);if(K.version!==de.__version||se===!0){t.activeTexture(i.TEXTURE0+D);const fe=dt.getPrimaries(dt.workingColorSpace),Z=A.colorSpace===zn?null:dt.getPrimaries(A.colorSpace),B=A.colorSpace===zn||fe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const ee=A.isCompressedTexture||A.image[0].isCompressedTexture,C=A.image[0]&&A.image[0].isDataTexture,J=[];for(let ve=0;ve<6;ve++)!ee&&!C?J[ve]=S(A.image[ve],!0,a.maxCubemapSize):J[ve]=C?A.image[ve].image:A.image[ve],J[ve]=Oe(A,J[ve]);const X=J[0],le=r.convert(A.format,A.colorSpace),re=r.convert(A.type);let pe=T(A.internalFormat,le,re,A.normalized,A.colorSpace);const xe=A.isVideoTexture!==!0,Ne=de.__version===void 0||se===!0,ue=K.dataReady;let Fe=b(A,X);Ye(i.TEXTURE_CUBE_MAP,A);let He;if(A.isDepthTexture){if(pe=v(A.format===$n,A.type),Ne)if(xe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,pe,X.width,X.height);else for(let ve=0;ve<6;ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pe,X.width,X.height,0,le,re,null)}else if(ee){xe&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,pe,X.width,X.height);for(let ve=0;ve<6;ve++){He=J[ve].mipmaps;for(let qe=0;qe<He.length;qe++){const st=He[qe];A.format!==pn?le!==null?xe?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,st.width,st.height,le,st.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,pe,st.width,st.height,0,st.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,st.width,st.height,le,re,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,pe,st.width,st.height,0,le,re,st.data)}}}else{if(He=A.mipmaps,xe&&Ne){He.length>0&&Fe++;const ve=je(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,pe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(C){xe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,J[ve].width,J[ve].height,le,re,J[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pe,J[ve].width,J[ve].height,0,le,re,J[ve].data);for(let qe=0;qe<He.length;qe++){const zt=He[qe].image[ve].image;xe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,zt.width,zt.height,le,re,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,pe,zt.width,zt.height,0,le,re,zt.data)}}else{xe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,le,re,J[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pe,le,re,J[ve]);for(let qe=0;qe<He.length;qe++){const st=He[qe];xe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,le,re,st.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,pe,le,re,st.image[ve])}}}E(A)&&A.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),de.__version=K.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function ze(w,A,D,se,K,de){const fe=r.convert(D.format,D.colorSpace),Z=r.convert(D.type),B=T(D.internalFormat,fe,Z,D.normalized,D.colorSpace),ee=n.get(A),C=n.get(D);if(C.__renderTarget=A,!ee.__hasExternalTextures){const J=Math.max(1,A.width>>de),X=Math.max(1,A.height>>de);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,de,B,J,X,A.depth,0,fe,Z,null):t.texImage2D(K,de,B,J,X,0,fe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Se(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,K,C.__webglTexture,0,tt(A)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,K,C.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(w,A,D){if(i.bindRenderbuffer(i.RENDERBUFFER,w),A.depthBuffer){const se=A.depthTexture,K=se&&se.isDepthTexture?se.type:null,de=v(A.stencilBuffer,K),fe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(A),de,A.width,A.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(A),de,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,w)}else{const se=A.textures;for(let K=0;K<se.length;K++){const de=se[K],fe=r.convert(de.format,de.colorSpace),Z=r.convert(de.type),B=T(de.internalFormat,fe,Z,de.normalized,de.colorSpace);Se(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(A),B,A.width,A.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(A),B,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,B,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(w,A,D){const se=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(A.depthTexture);K.__renderTarget=A;const de=se?A.depthTexture.image[0]:A.depthTexture.image;(!K.__webglTexture||de.width!==A.width||de.height!==A.height)&&(de.width=A.width,de.height=A.height,A.depthTexture.needsUpdate=!0),se?Y(A.depthTexture,0):he(A.depthTexture,0);const fe=K.__webglTexture,Z=tt(A),B=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,ee=A.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Qn)Se(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,B,fe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ee,B,fe,0);else if(A.depthTexture.format===$n)Se(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,B,fe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ee,B,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(w){const A=n.get(w),D=w.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==w.depthTexture){const se=w.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),se){const K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,se.removeEventListener("dispose",K)};se.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=se}if(w.depthTexture&&!A.__autoAllocateDepthBuffer)if(D)for(let se=0;se<6;se++)Te(A.__webglFramebuffer[se],w,se);else w.texture.mipmaps.length>0?Te(A.__webglFramebuffer[0],w,0):Te(A.__webglFramebuffer,w,0);else if(D){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]===void 0)A.__webglDepthbuffer[se]=i.createRenderbuffer(),Qe(A.__webglDepthbuffer[se],w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,de)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Qe(A.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(w,A,D){const se=n.get(w);A!==void 0&&ze(se.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&it(w)}function at(w){const A=w.texture,D=n.get(w),se=n.get(A);w.addEventListener("dispose",k),L(w);const K=w.textures,de=w.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=A.version,o.memory.textures++),de){D.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(A.mipmaps.length>0){D.__webglFramebuffer[Z]=[];for(let B=0;B<A.mipmaps.length;B++)D.__webglFramebuffer[Z][B]=i.createFramebuffer()}else D.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(A.mipmaps.length>0){D.__webglFramebuffer=[];for(let Z=0;Z<A.mipmaps.length;Z++)D.__webglFramebuffer[Z]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Z=0,B=K.length;Z<B;Z++){const ee=n.get(K[Z]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Se(w)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const B=K[Z];D.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[Z]);const ee=r.convert(B.format,B.colorSpace),C=r.convert(B.type),J=T(B.internalFormat,ee,C,B.normalized,B.colorSpace,w.isXRRenderTarget===!0),X=tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,D.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(D.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,A);for(let Z=0;Z<6;Z++)if(A.mipmaps.length>0)for(let B=0;B<A.mipmaps.length;B++)ze(D.__webglFramebuffer[Z][B],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,B);else ze(D.__webglFramebuffer[Z],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(A)?_(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Z=0,B=K.length;Z<B;Z++){const ee=K[Z],C=n.get(ee);let J=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),Ye(J,ee),ze(D.__webglFramebuffer,w,ee,i.COLOR_ATTACHMENT0+Z,J,0),E(ee)&&_(J)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,se.__webglTexture),Ye(Z,A),A.mipmaps.length>0)for(let B=0;B<A.mipmaps.length;B++)ze(D.__webglFramebuffer[B],w,A,i.COLOR_ATTACHMENT0,Z,B);else ze(D.__webglFramebuffer,w,A,i.COLOR_ATTACHMENT0,Z,0);E(A)?_(Z):A.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&it(w)}function F(w){const A=w.textures;for(let D=0,se=A.length;D<se;D++){const K=A[D];if(E(K)&&K.mipmapsAutoUpdate===!0){const de=N(w),fe=n.get(K).__webglTexture;t.bindTexture(de,fe),_(de),t.unbindTexture()}}}const rt=[];function et(w){if(w.samples>0){if(Se(w)===!1){const A=w.textures,D=w.width,se=w.height;let K=i.COLOR_BUFFER_BIT;const de=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(w),Z=A.length>1;if(Z)for(let ee=0;ee<A.length;ee++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ee=0;ee<A.length;ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ee]);const C=n.get(A[ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,D,se,0,0,D,se,K,i.NEAREST),c===!0&&(rt.length=0,rt.push(i.COLOR_ATTACHMENT0+ee),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&rt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ee=0;ee<A.length;ee++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ee]);const C=n.get(A[ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const A=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function tt(w){return Math.min(a.maxSamples,w.samples)}function Se(w){const A=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function mt(w){const A=o.render.frame;h.get(w)!==A&&(h.set(w,A),w.update())}function Oe(w,A){const D=w.colorSpace,se=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==ds&&D!==zn&&(dt.getTransfer(D)===vt?(se!==pn||K!==Yt)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",D)),A}function je(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=De,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=ye,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=ct,this.setupRenderTarget=at,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Se,this.dispose=G}function l0(i,e){function t(n,a=zn){let r;const o=dt.getTransfer(a);if(n===Yt)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Tc)return i.SHORT;if(n===ha)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===pn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Ro)return i.RED_INTEGER;if(n===fi)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===Qa||n===es||n===ts||n===ns)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wr||n===Rr||n===Cr||n===Pr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ir||n===Lr||n===Dr||n===Ur||n===Or||n===ls||n===Fr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ir||n===Lr)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ur)return r.COMPRESSED_R11_EAC;if(n===Or)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ls)return r.COMPRESSED_RG11_EAC;if(n===Fr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kr||n===Br||n===Gr||n===zr||n===jr||n===Vr||n===Hr||n===Wr||n===$r||n===Xr||n===qr||n===Yr||n===Zr||n===Kr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Br)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Qr||n===eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===no||n===cs||n===io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===to)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
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

}`;class u0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pi({vertexShader:c0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends gi{constructor(e,t){super();const n=this;let a=null,r=1,o=null,l="local-floor",c=1,d=null,h=null,m=null,u=null,g=null,x=null;const y=typeof XRWebGLBinding<"u",p=new u0,f={},S=t.getContextAttributes();let E=null,_=null;const N=[],T=[],v=new ft;let b=null,L=null;const P=new sn;P.viewport=new Mt;const U=new sn;U.viewport=new Mt;const k=[P,U],$=new Mh;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let he=N[H];return he===void 0&&(he=new Ws,N[H]=he),he.getTargetRaySpace()},this.getControllerGrip=function(H){let he=N[H];return he===void 0&&(he=new Ws,N[H]=he),he.getGripSpace()},this.getHand=function(H){let he=N[H];return he===void 0&&(he=new Ws,N[H]=he),he.getHandSpace()};function Q(H){const he=T.indexOf(H.inputSource);if(he===-1)return;const ge=N[he];ge!==void 0&&(ge.update(H.inputSource,H.frame,d||o),ge.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",oe);for(let H=0;H<N.length;H++){const he=T[H];he!==null&&(T[H]=null,N[H].disconnect(he))}I=null,G=null,p.reset();for(const H in f)delete f[H];if(e.setRenderTarget(E),g=null,u=null,m=null,a=null,_=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),L!==null){const H=L.camera;H.fov=L.fov,H.zoom=L.zoom,H.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){l=H,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(H){d=H},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(E=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",j),a.addEventListener("inputsourceschange",oe),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ce=null,Y=null;S.depth&&(Y=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?$n:Qn,ce=S.stencil?Fi:xn);const Ae={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Ae),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new gn(u.textureWidth,u.textureHeight,{format:pn,type:Yt,depthTexture:new ki(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new gn(g.framebufferWidth,g.framebufferHeight,{format:pn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await a.requestReferenceSpace(l),De.setContext(a),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(H){for(let he=0;he<H.removed.length;he++){const ge=H.removed[he],ce=T.indexOf(ge);ce>=0&&(T[ce]=null,N[ce].disconnect(ge))}for(let he=0;he<H.added.length;he++){const ge=H.added[he];let ce=T.indexOf(ge);if(ce===-1){for(let Ae=0;Ae<N.length;Ae++)if(Ae>=T.length){T.push(ge),ce=Ae;break}else if(T[Ae]===null){T[Ae]=ge,ce=Ae;break}if(ce===-1)break}const Y=N[ce];Y&&Y.connect(ge)}}function V(H,he){he===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(he.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;let he=H.near,ge=H.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),$.near=U.near=P.near=he,$.far=U.far=P.far=ge,(I!==$.near||G!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),I=$.near,G=$.far),$.layers.mask=H.layers.mask|6,P.layers.mask=$.layers.mask&-5,U.layers.mask=$.layers.mask&-3;const ce=H.parent,Y=$.cameras;V($,ce);for(let Ae=0;Ae<Y.length;Ae++)V(Y[Ae],ce);$.projectionMatrix.copy(P.projectionMatrix),$.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&H.isPerspectiveCamera&&(L={camera:H,fov:H.fov,zoom:H.zoom}),te(H,$,ce)};function te(H,he,ge){ge===null?H.matrix.copy(he.matrixWorld):(H.matrix.copy(ge.matrixWorld),H.matrix.invert(),H.matrix.multiply(he.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(he.projectionMatrix),H.projectionMatrixInverse.copy(he.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=so*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(H){c=H,u!==null&&(u.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(H){return f[H]};let ie=null;function ye(H,he){if(h=he.getViewerPose(d||o),x=he,h!==null){const ge=h.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let ce=!1;ge.length!==$.cameras.length&&($.cameras.length=0,ce=!0);for(let we=0;we<ge.length;we++){const Ye=ge[we];let me=null;if(g!==null)me=g.getViewport(Ye);else{const Ve=m.getViewSubImage(u,Ye);me=Ve.viewport,we===0&&(e.setRenderTargetTextures(_,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(_))}let Re=k[we];Re===void 0&&(Re=new sn,Re.layers.enable(we),Re.viewport=new Mt,k[we]=Re),Re.matrix.fromArray(Ye.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ye.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(me.x,me.y,me.width,me.height),we===0&&($.matrix.copy(Re.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ce===!0&&$.cameras.push(Re)}const Y=a.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){m=n.getBinding();const we=m.getDepthInformation(ge[0]);we&&we.isValid&&we.texture&&p.init(we,a.renderState)}if(Y&&Y.includes("camera-access")&&y){e.state.unbindTexture(),m=n.getBinding();for(let we=0;we<ge.length;we++){const Ye=ge[we].camera;if(Ye){let me=f[Ye];me||(me=new $c,f[Ye]=me);const Re=m.getCameraImage(Ye);me.sourceTexture=Re}}}}for(let ge=0;ge<N.length;ge++){const ce=T[ge],Y=N[ge];ce!==null&&Y!==void 0&&Y.update(ce,he,d||o)}ie&&ie(H,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),x=null}const De=new Kc;De.setAnimationLoop(ye),this.setAnimationLoop=function(H){ie=H},this.dispose=function(){}}}const f0=new yt,od=new Ke;od.set(-1,0,0,0,1,0,0,0,1);function p0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Xc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function a(p,f,S,E,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&g(p,f,_)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&l(p,f)):f.isPointsMaterial?c(p,f,S,E):f.isSpriteMaterial?d(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ht&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ht&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f),E=S.envMap,_=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(od),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function l(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=E*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,S){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function m0(i,e,t,n){let a={},r={};function o(S,E){const _=E.program;n.uniformBlockBinding(S,_,a[S.id])}function l(S,E){let _=a[S.id];_===void 0&&(x(S),_=c(S),a[S.id]=_,S.addEventListener("dispose",p));const N=E.program;n.updateUBOMapping(S,N);const T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function c(S){const E=i.createBuffer(),_=S.__size,N=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,_,N),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function d(S){const E=a[S.id],_=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,v=_.length;T<v;T++){const b=_[T];if(Array.isArray(b))for(let L=0,P=b.length;L<P;L++)h(b[L],T,L,N);else h(b,T,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,_,N){if(u(S,E,_,N)===!0){const T=S.__offset,v=S.value;if(Array.isArray(v)){let b=0;for(let L=0;L<v.length;L++){const P=v[L],U=y(P,!0);m(P,S.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else m(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function m(S,E,_){typeof S=="number"||typeof S=="boolean"?E[_]=S:S.isMatrix3?(E[_]=S.elements[0],E[_+1]=S.elements[1],E[_+2]=S.elements[2],E[_+3]=0,E[_+4]=S.elements[3],E[_+5]=S.elements[4],E[_+6]=S.elements[5],E[_+7]=0,E[_+8]=S.elements[6],E[_+9]=S.elements[7],E[_+10]=S.elements[8],E[_+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-_),_):S.toArray(E,_)}function u(S,E,_,N){const T=S.value,v=E+"_"+_;if(Array.isArray(T)){N[v]===void 0&&(N[v]=[]);const b=N[v];let L=!1;for(let P=0;P<T.length;P++)g(T[P],b,P)===!0&&(L=!0);return L}return g(T,N,v)}function g(S,E,_){if(E[_]===void 0)return typeof S=="number"||typeof S=="boolean"?E[_]=S:ArrayBuffer.isView(S)?E[_]=S.slice():E[_]=S.clone(),!0;{const N=E[_];if(typeof S=="number"||typeof S=="boolean"){if(N!==S)return E[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(N.equals(S)===!1)return N.copy(S),!0}}return!1}function x(S){const E=S.uniforms;let _=0;const N=16;for(let v=0,b=E.length;v<b;v++){const L=Array.isArray(E[v])?E[v]:[E[v]];for(let P=0,U=L.length;P<U;P++){const k=L[P],$=Array.isArray(k.value)?k.value:[k.value],I=Array.isArray(E[v])||Array.isArray(k.value);let G=_;for(let j=0,oe=$.length;j<oe;j++){const V=$[j],te=y(V,I),ie=_%N,ye=ie%te.boundary,De=ie+ye;_+=ye,De!==0&&N-De<te.storage&&(_+=N-De),j===0&&(G=_),_+=te.storage}const Q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Q((_-G)/Float32Array.BYTES_PER_ELEMENT),k.__offset=G}}const T=_%N;return T>0&&(_+=N-T),S.__size=_,S.__cache={},this}function y(S,E){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=16,_.storage=48):S.isMatrix4?(_.boundary=16,_.storage=64):S.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(_.boundary=16,_.storage=S.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(S){const E=S.target;E.removeEventListener("dispose",p),i.deleteBuffer(a[E.id]),delete a[E.id],delete r[E.id]}function f(){for(const S in a)i.deleteBuffer(a[S]);a={},r={}}return{bind:o,update:l,dispose:f}}const g0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function x0(){return un===null&&(un=new oh(g0,16,16,fi,vn),un.name="DFG_LUT",un.minFilter=$t,un.magFilter=$t,un.wrapS=wn,un.wrapT=wn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class v0{constructor(e={}){const{canvas:t=Lu(),context:n=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:g=Yt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const y=g,p=new Set([Po,Co,Ro]),f=new Set([Yt,xn,ha,Fi,No,wo]),S=new Uint32Array(4),E=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let N=null,T=null;const v=[],b=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1,k=null,$=null,I=null,G=null;this._outputColorSpace=Jt;let Q=0,j=0,oe=null,V=-1,te=null;const ie=new Mt,ye=new Mt;let De=null;const H=new ht(0);let he=0,ge=t.width,ce=t.height,Y=1,Ae=null,_e=null;const we=new Mt(0,0,ge,ce),Ye=new Mt(0,0,ge,ce);let me=!1;const Re=new pa,Ve=new Do;let Xe=!1,Ee=!1;const ze=new yt,Qe=new ne,Te=new Mt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function at(){return oe===null?Y:1}let F=n;function rt(M,O){return t.getContext(M,O)}let et,tt,Se,mt,Oe,je,w,A,D,se,K,de,fe,Z,B,ee,C,J,X,le,re,pe,xe;try{const M={alpha:!0,depth:a,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){const O="webgl2";if(F=rt(O,M),F===null)throw rt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(M){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),xt("WebGLRenderer: "+M.message),M}function Ne(){et=new ym(F),et.init(),re=new l0(F,et),tt=new dm(F,et,e,re),Se=new r0(F,et),tt.reversedDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),$=F.createFramebuffer(),I=F.createFramebuffer(),G=F.createFramebuffer(),mt=new Em(F),Oe=new $g,je=new o0(F,et,Se,Oe,tt,re,mt),w=new Sm(P),A=new Ah(F),pe=new lm(F,A),D=new bm(F,A,mt,pe),se=new Tm(F,D,A,pe,mt),J=new Am(F,tt,je),B=new um(Oe),K=new Wg(P,w,et,tt,pe,B),de=new p0(P,Oe),fe=new qg,Z=new e0(et),C=new om(P,w,Se,se,x,c),ee=new s0(P,se,tt),xe=new m0(F,mt,tt,Se),X=new cm(F,et,mt),le=new Mm(F,et,mt),mt.programs=K.programs,P.capabilities=tt,P.extensions=et,P.properties=Oe,P.renderLists=fe,P.shadowMap=ee,P.state=Se,P.info=mt}y!==Yt&&(L=new wm(y,t.width,t.height,l,a,r));const ue=new h0(P,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(ge,ce,!1))},this.getSize=function(M){return M.set(ge,ce)},this.setSize=function(M,O,W=!0){if(ue.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=M,ce=O,t.width=Math.floor(M*Y),t.height=Math.floor(O*Y),W===!0&&(t.style.width=M+"px",t.style.height=O+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(ge*Y,ce*Y).floor()},this.setDrawingBufferSize=function(M,O,W){ge=M,ce=O,Y=W,t.width=Math.floor(M*W),t.height=Math.floor(O*W),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(y===Yt){xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ie)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,O,W,z){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,O,W,z),Se.viewport(ie.copy(we).multiplyScalar(at()).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,O,W,z){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,O,W,z),Se.scissor(ye.copy(Ye).multiplyScalar(at()).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(M){Se.setScissorTest(me=M)},this.setOpaqueSort=function(M){Ae=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,W=!0){let z=0;if(M){let q=!1;if(oe!==null){const be=oe.texture.format;q=p.has(be)}if(q){const be=oe.texture.type,Pe=f.has(be),Me=C.getClearColor(),Ce=C.getClearAlpha(),Ge=Me.r,Je=Me.g,ot=Me.b;Pe?(S[0]=Ge,S[1]=Je,S[2]=ot,S[3]=Ce,F.clearBufferuiv(F.COLOR,0,S)):(E[0]=Ge,E[1]=Je,E[2]=ot,E[3]=Ce,F.clearBufferiv(F.COLOR,0,E))}else z|=F.COLOR_BUFFER_BIT}O&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),C.dispose(),fe.dispose(),Z.dispose(),je.dispose(),Oe.dispose(),w.dispose(),se.dispose(),D.dispose(),pe.dispose(),xe.dispose(),K.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Hi),ue.removeEventListener("sessionend",ba),Sn.stop()};function Fe(M){M.preventDefault(),Qo("WebGLRenderer: Context Lost."),U=!0}function He(){Qo("WebGLRenderer: Context Restored."),U=!1;const M=mt.autoReset,O=ee.enabled,W=ee.autoUpdate,z=ee.needsUpdate,q=ee.type;Ne(),mt.autoReset=M,ee.enabled=O,ee.autoUpdate=W,ee.needsUpdate=z,ee.type=q}function ve(M){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qe(M){const O=M.target;O.removeEventListener("dispose",qe),st(O)}function st(M){zt(M),Oe.remove(M)}function zt(M){const O=Oe.get(M).programs;O!==void 0&&(O.forEach(function(W){K.releaseProgram(W)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,W,z,q,be){O===null&&(O=it);const Pe=q.isMesh&&q.matrixWorld.determinantAffine()<0,Me=ae(M,O,W,z,q);Se.setMaterial(z,Pe);let Ce=W.index,Ge=1;if(z.wireframe===!0){if(Ce=D.getWireframeAttribute(W),Ce===void 0)return;Ge=2}const Je=W.drawRange,ot=W.attributes.position;let ke=Je.start*Ge,lt=(Je.start+Je.count)*Ge;be!==null&&(ke=Math.max(ke,be.start*Ge),lt=Math.min(lt,(be.start+be.count)*Ge)),Ce!==null?(ke=Math.max(ke,0),lt=Math.min(lt,Ce.count)):ot!=null&&(ke=Math.max(ke,0),lt=Math.min(lt,ot.count));const Et=lt-ke;if(Et<0||Et===1/0)return;pe.setup(q,z,Me,W,Ce);let St,_t=X;if(Ce!==null&&(St=A.get(Ce),_t=le,_t.setIndex(St)),q.isMesh)z.wireframe===!0?(Se.setLineWidth(z.wireframeLinewidth*at()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(q.isLine){let Ot=z.linewidth;Ot===void 0&&(Ot=1),Se.setLineWidth(Ot*at()),q.isLineSegments?_t.setMode(F.LINES):q.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else q.isPoints?_t.setMode(F.POINTS):q.isSprite&&_t.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(et.get("WEBGL_multi_draw"))_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ot=q._multiDrawStarts,Be=q._multiDrawCounts,jt=q._multiDrawCount,gt=Ce?A.get(Ce).bytesPerElement:1,si=Oe.get(z).currentProgram.getUniforms();for(let Ft=0;Ft<jt;Ft++)si.setValue(F,"_gl_DrawID",Ft),_t.render(Ot[Ft]/gt,Be[Ft])}else if(q.isInstancedMesh)_t.renderInstances(ke,Et,q.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Be=Math.min(W.instanceCount,Ot);_t.renderInstances(ke,Et,Be)}else _t.render(ke,Et)};function xi(M,O,W,z){k!==null&&M.isNodeMaterial&&k.setObject(z,M),Xe===!0&&B.setState(M,W,!1),M.transparent===!0&&M.side===Nn&&M.forceSinglePass===!1?(M.side=Ht,M.needsUpdate=!0,Ln(M,O,z),M.side=hi,M.needsUpdate=!0,Ln(M,O,z),M.side=Nn):Ln(M,O,z)}this.compile=function(M,O,W=null){W===null&&(W=M),k!==null&&k.renderStart(M,O,W),T=Z.get(W),T.init(O),b.push(T),W.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),M!==W&&M.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),Ee=this.localClippingEnabled,Xe=B.init(this.clippingPlanes,Ee),Xe===!0&&B.setGlobalState(this.clippingPlanes,O),k!==null&&ee.render(T.state.shadowsArray,W,O);const z=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){const Me=be[Pe];xi(Me,W,O,q),z.add(Me)}else xi(be,W,O,q),z.add(be)}),T=b.pop(),k!==null&&k.renderEnd(),z},this.compileAsync=function(M,O,W=null){const z=this.compile(M,O,W);return new Promise(q=>{function be(){if(z.forEach(function(Pe){const Ce=Oe.get(Pe).currentProgram;(Ce===void 0||Ce.isReady())&&z.delete(Pe)}),z.size===0){q(M);return}setTimeout(be,10)}et.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ii=null;function Ps(M){ii&&ii(M)}function Hi(){Sn.stop()}function ba(){Sn.start()}const Sn=new Kc;Sn.setAnimationLoop(Ps),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(M){ii=M,ue.setAnimationLoop(M),M===null?Sn.stop():Sn.start()},ue.addEventListener("sessionstart",Hi),ue.addEventListener("sessionend",ba),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(M,O);const W=ue.enabled===!0&&ue.isPresenting===!0,z=L!==null&&(oe===null||W)&&L.begin(P,oe);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,O,oe),T=Z.get(M,b.length),T.init(O),T.state.textureUnits=je.getTextureUnits(),b.push(T),ze.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ve.setFromArrayCamera(O):Re.setFromProjectionMatrix(ze,on,O.reversedDepth),Ee=this.localClippingEnabled,Xe=B.init(this.clippingPlanes,Ee),N=fe.get(M,v.length),N.init(),v.push(N),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){const Pe=P.xr.getDepthSensingMesh();Pe!==null&&Wi(Pe,O,-1/0,P.sortObjects)}Wi(M,O,0,P.sortObjects),N.finish(),k!==null&&k.updateLights(T.state.lightsArray),P.sortObjects===!0&&N.sort(Ae,_e),ct=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ct&&C.addToRenderList(N,M),this.info.autoReset===!0&&this.info.reset(),Xe===!0&&B.beginShadows();const q=T.state.shadowsArray;if(ee.render(q,M,O),Xe===!0&&B.endShadows(),(z&&L.hasRenderPass())===!1){const Pe=N.opaque,Me=N.transmissive;if(T.setupLights(),O.isArrayCamera){const Ce=O.cameras;if(Me.length>0)for(let Ge=0,Je=Ce.length;Ge<Je;Ge++){const ot=Ce[Ge];$i(Pe,Me,M,ot)}ct&&C.render(M);for(let Ge=0,Je=Ce.length;Ge<Je;Ge++){const ot=Ce[Ge];Ma(N,M,ot,ot.viewport)}}else Me.length>0&&$i(Pe,Me,M,O),ct&&C.render(M),Ma(N,M,O)}oe!==null&&j===0&&(je.updateMultisampleRenderTarget(oe),je.updateRenderTargetMipmap(oe)),z&&L.end(P),M.isScene===!0&&M.onAfterRender(P,M,O),pe.resetDefaultState(),V=-1,te=null,b.pop(),b.length>0?(T=b[b.length-1],je.setTextureUnits(T.state.textureUnits),Xe===!0&&B.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?N=v[v.length-1]:N=null,k!==null&&k.renderEnd()};function Wi(M,O,W,z){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){const Pe=O.isArrayCamera?Ve:Re;if(!M.frustumCulled||M.intersectsFrustum(Pe)){z&&Te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ze);const Me=se.update(M),Ce=M.material;Ce.visible&&N.push(M,Me,Ce,W,Te.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){const Pe=O.isArrayCamera?Ve:Re;if(!M.frustumCulled||M.intersectsFrustum(Pe)){const Me=se.update(M),Ce=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Te.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Te.copy(Me.boundingSphere.center)),Te.applyMatrix4(M.matrixWorld).applyMatrix4(ze)),Array.isArray(Ce)){const Ge=Me.groups;for(let Je=0,ot=Ge.length;Je<ot;Je++){const ke=Ge[Je],lt=Ce[ke.materialIndex];lt&&lt.visible&&N.push(M,Me,lt,W,Te.z,ke,O)}}else Ce.visible&&N.push(M,Me,Ce,W,Te.z,null,O)}}}const be=M.children;for(let Pe=0,Me=be.length;Pe<Me;Pe++)Wi(be[Pe],O,W,z)}function Ma(M,O,W,z){const{opaque:q,transmissive:be,transparent:Pe}=M;T.setupLightsView(W),Xe===!0&&B.setGlobalState(P.clippingPlanes,W),z&&Se.viewport(ie.copy(z)),q.length>0&&ai(q,O,W),be.length>0&&ai(be,O,W),Pe.length>0&&ai(Pe,O,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function $i(M,O,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const ke=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new gn(1,1,{generateMipmaps:!0,type:ke?vn:Yt,minFilter:Wn,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const be=T.state.transmissionRenderTarget[z.id],Pe=z.viewport||ie;be.setSize(Pe.z*P.transmissionResolutionScale,Pe.w*P.transmissionResolutionScale);const Me=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Ge=P.getActiveMipmapLevel();P.setRenderTarget(be),P.getClearColor(H),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),ct&&C.render(W);const Je=P.toneMapping;P.toneMapping=Rn;const ot=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Xe===!0&&B.setGlobalState(P.clippingPlanes,z),ai(M,W,z),je.updateMultisampleRenderTarget(be),je.updateRenderTargetMipmap(be),et.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let lt=0,Et=O.length;lt<Et;lt++){const St=O[lt],{object:_t,geometry:Ot,material:Be,group:jt}=St;if(Be.side===Nn&&_t.layers.test(z.layers)){const gt=Be.side;Be.side=Ht,Be.needsUpdate=!0,Xi(_t,W,z,Ot,Be,jt),Be.side=gt,Be.needsUpdate=!0,ke=!0}}ke===!0&&(je.updateMultisampleRenderTarget(be),je.updateRenderTargetMipmap(be))}P.setRenderTarget(Me,Ce,Ge),P.setClearColor(H,he),ot!==void 0&&(z.viewport=ot),P.toneMapping=Je}function ai(M,O,W){const z=O.isScene===!0?O.overrideMaterial:null;for(let q=0,be=M.length;q<be;q++){const Pe=M[q],{object:Me,geometry:Ce,group:Ge}=Pe;let Je=Pe.material;Je.allowOverride===!0&&z!==null&&(Je=z),Me.layers.test(W.layers)&&Xi(Me,O,W,Ce,Je,Ge)}}function Xi(M,O,W,z,q,be){k!==null&&q.isNodeMaterial&&k.setObject(M,q),M.onBeforeRender(P,O,W,z,q,be),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(P,O,W,z,M,be),q.transparent===!0&&q.side===Nn&&q.forceSinglePass===!1?(q.side=Ht,q.needsUpdate=!0,P.renderBufferDirect(W,O,z,q,M,be),q.side=hi,q.needsUpdate=!0,P.renderBufferDirect(W,O,z,q,M,be),q.side=Nn):P.renderBufferDirect(W,O,z,q,M,be),M.onAfterRender(P,O,W,z,q,be)}function qi(M){let O=0;for(const W of M)W.texture!==null&&O++;return O}function Ln(M,O,W){O.isScene!==!0&&(O=it);const z=Oe.get(M),q=T.state.lights,be=T.state.shadowsArray,Pe=q.state.version,Me=K.getParameters(M,q.state,be,O,W,T.state.lightProbeGridArray),Ce=K.getProgramCacheKey(Me);let Ge=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,z.fog=O.fog;const Je=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=w.get(M.envMap||z.environment,Je),z.envMapRotation=z.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",qe),Ge=new Map,z.programs=Ge,z.programVariants=new Map);let ot=Ge.get(Ce);if(ot!==void 0){if(z.currentProgram===ot&&z.lightsStateVersion===Pe)return Zi(M,Me),ot}else Me.uniforms=K.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,W,Me),M.onBeforeCompile(Me,P),ot=K.acquireProgram(Me,Ce),Ge.set(Ce,ot),z.uniforms=Me.uniforms;const ke=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=B.uniform),Zi(M,Me),z.needsLights=We(M),z.lightsStateVersion=Pe,z.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.sunLights.value=q.state.sun,ke.sunLightShadows.value=q.state.sunShadow,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.sunShadowMatrix.value=q.state.sunShadowMatrix,ke.sunShadowCascade.value=q.state.sunShadowCascade,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),z.numLightProbeGrids=qi(T.state.lightProbeGridArray),z.currentProgram=ot,z.uniformsList=null,ot}function Ea(M,O,W,z,q){const be=Oe.get(M),Pe=be.currentProgram.id+","+z+","+q;let Me=be.programVariants.get(Pe);return Me===void 0?(Me=Ln(M,O,W),be.programVariants.set(Pe,Me)):(be.currentProgram=Me,be.uniformsList=null,be.outputColorSpace=z,be.toneMapping=q),Me}function Yi(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=as.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Zi(M,O){const W=Oe.get(M);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function ae(M,O,W,z,q){O.isScene!==!0&&(O=it),je.resetTextureUnits();const be=O.fog,Pe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?O.environment:null,Me=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:dt.workingColorSpace,Ce=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ge=w.get(z.envMap||Pe,Ce),Je=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ot=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ke=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let St=Rn;z.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(St=P.toneMapping);const _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=_t!==void 0?_t.length:0,Be=Oe.get(z),jt=T.state.lights;if(Xe===!0&&(Ee===!0||M!==te)){const bt=M===te&&z.id===V;B.setState(z,M,bt)}let gt=!1,si=!1;z.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==jt.state.version||q.isBatchedMesh&&Be.batching===!1||!q.isBatchedMesh&&Be.batching===!0||q.isBatchedMesh&&Be.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Be.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Be.instancing===!1||!q.isInstancedMesh&&Be.instancing===!0||q.isSkinnedMesh&&Be.skinning===!1||!q.isSkinnedMesh&&Be.skinning===!0||q.isInstancedMesh&&Be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Be.instancingMorph===!1&&q.morphTexture!==null||Be.envMap!==Ge||z.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==B.numPlanes||Be.numIntersection!==B.numIntersection)||Be.vertexAlphas!==Je||Be.vertexTangents!==ot||Be.morphTargets!==ke||Be.morphNormals!==lt||Be.morphColors!==Et||Be.morphTargetsCount!==Ot||Be.numLightProbeGrids!==qi(T.state.lightProbeGridArray)?gt=!0:(Be.outputColorSpace!==Me||Be.toneMapping!==St)&&(si=!0):(gt=!0,Be.__version=z.version);let Ft=Be.currentProgram;(gt===!0||si===!0)&&(Ft=si===!0?Ea(z,O,q,Me,St):Ln(z,O,q),k&&z.isNodeMaterial&&k.onUpdateProgram(z,Ft,Be));let Aa=!1,Dn=!1,ri=!1;const pt=Ft.getUniforms(),It=Be.uniforms;if(Se.useProgram(Ft.program)&&(Aa=!0,Dn=!0,ri=!0),z.id!==V&&(V=z.id,Dn=!0),Aa||te!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(F,"projectionMatrix",M.projectionMatrix),pt.setValue(F,"viewMatrix",M.matrixWorldInverse);const Rt=pt.map.cameraPosition;Rt!==void 0&&Rt.setValue(F,Qe.setFromMatrixPosition(M.matrixWorld)),tt.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),te!==M&&(te=M,Dn=!0,ri=!0)}if(Be.needsLights&&(jt.state.sunShadowMap.length>0&&pt.setValue(F,"sunShadowMap",jt.state.sunShadowMap,je),jt.state.directionalShadowMap.length>0&&pt.setValue(F,"directionalShadowMap",jt.state.directionalShadowMap,je),jt.state.spotShadowMap.length>0&&pt.setValue(F,"spotShadowMap",jt.state.spotShadowMap,je),jt.state.pointShadowMap.length>0&&pt.setValue(F,"pointShadowMap",jt.state.pointShadowMap,je)),q.isSkinnedMesh){pt.setOptional(F,q,"bindMatrix"),pt.setOptional(F,q,"bindMatrixInverse");const bt=q.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(F,"boneTexture",bt.boneTexture,je))}q.isBatchedMesh&&(pt.setOptional(F,q,"batchingTexture"),pt.setValue(F,"batchingTexture",q._matricesTexture,je),pt.setOptional(F,q,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",q._indirectTexture,je),pt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",q._colorsTexture,je));const en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&J.update(q,W,Ft),(Dn||Be.receiveShadow!==q.receiveShadow)&&(Be.receiveShadow=q.receiveShadow,pt.setValue(F,"receiveShadow",q.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&O.environment!==null&&(It.envMapIntensity.value=O.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=x0()),Dn){if(pt.setValue(F,"toneMappingExposure",P.toneMappingExposure),Be.needsLights&&Ue(It,ri),be&&z.fog===!0&&de.refreshFogUniforms(It,be),de.refreshMaterialUniforms(It,z,Y,ce,T.state.transmissionRenderTarget[M.id]),Be.needsLights&&Be.numLightProbeGrids>0){const bt=_;let Rt=0;for(const yn of T.state.lightProbeGridArray)yn.texture!==null&&(bt.textures[Rt]=yn.texture,bt.min[Rt]=yn.boundingBox.min,bt.max[Rt]=yn.boundingBox.max,bt.resolution[Rt]=yn.resolution,Rt++);for(const yn in bt)bt[yn].length=Rt;It.probesSH.value=bt.textures,It.probesMin.value=bt.min,It.probesMax.value=bt.max,It.probesResolution.value=bt.resolution}as.upload(F,Yi(Be),It,je)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(as.upload(F,Yi(Be),It,je),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pt.setValue(F,"center",q.center),pt.setValue(F,"modelViewMatrix",q.modelViewMatrix),pt.setValue(F,"normalMatrix",q.normalMatrix),pt.setValue(F,"modelMatrix",q.matrixWorld),z.uniformsGroups!==void 0){const bt=z.uniformsGroups;for(let Rt=0,yn=bt.length;Rt<yn;Rt++){const $o=bt[Rt];xe.update($o,Ft),xe.bind($o,Ft)}}return Ft}function Ue(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function We(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(M,O,W){const z=Oe.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Oe.get(M.texture).__webglTexture=O,Oe.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const W=Oe.get(M);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,W=0){oe=M,Q=O,j=W;let z=null,q=!1,be=!1;if(M){const Me=Oe.get(M);if(Me.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(F.FRAMEBUFFER,Me.__webglFramebuffer),ie.copy(M.viewport),ye.copy(M.scissor),De=M.scissorTest,Se.viewport(ie),Se.scissor(ye),Se.setScissorTest(De),V=-1;return}else if(Me.__webglFramebuffer===void 0)je.setupRenderTarget(M);else if(Me.__hasExternalTextures)je.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Je=M.depthTexture;if(Me.__boundDepthTexture!==Je){if(Je!==null&&Oe.has(Je)&&(M.width!==Je.image.width||M.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);const Ge=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?z=Ge[O][W]:z=Ge[O],q=!0):M.samples>0&&je.useMultisampledRTT(M)===!1?z=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[W]:z=Ge,ie.copy(M.viewport),ye.copy(M.scissor),De=M.scissorTest}else ie.copy(we).multiplyScalar(Y).floor(),ye.copy(Ye).multiplyScalar(Y).floor(),De=me;if(W!==0&&(z=$),Se.bindFramebuffer(F.FRAMEBUFFER,z)&&Se.drawBuffers(M,z),Se.viewport(ie),Se.scissor(ye),Se.setScissorTest(De),q){const Me=Oe.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,W)}else if(be){const Me=O;for(let Ce=0;Ce<M.textures.length;Ce++){const Ge=Oe.get(M.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Ge.__webglTexture,W,Me)}}else if(M!==null&&W!==0){const Me=Oe.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,W)}V=-1};function $e(M){const O=Oe.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=tt.textureFormatReadable(M.format),O.__typeReadable=tt.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,W,z,q,be,Pe,Me=0){if(!(M&&M.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ce=Ce[Pe],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){Se.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const Ge=M.textures[Me],Je=Ge.format,ot=Ge.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);const ke=$e(Ge);if(ke.__formatReadable===!1){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-z&&W>=0&&W<=M.height-q&&F.readPixels(O,W,z,q,re.convert(Je),re.convert(ot),be)}finally{const Ge=oe!==null?Oe.get(oe).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(M,O,W,z,q,be,Pe,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ce=Ce[Pe],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(O>=0&&O<=M.width-z&&W>=0&&W<=M.height-q){Se.bindFramebuffer(F.FRAMEBUFFER,Ce);const Ge=M.textures[Me],Je=Ge.format,ot=Ge.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);const ke=$e(Ge);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(O,W,z,q,re.convert(Je),re.convert(ot),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Et=oe!==null?Oe.get(oe).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,Et);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Du(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(lt),F.deleteSync(St),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,W=0){const z=Math.pow(2,-W),q=Math.floor(M.image.width*z),be=Math.floor(M.image.height*z),Pe=O!==null?O.x:0,Me=O!==null?O.y:0;je.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,Pe,Me,q,be),Se.unbindTexture()},this.copyTextureToTexture=function(M,O,W=null,z=null,q=0,be=0){let Pe,Me,Ce,Ge,Je,ot,ke,lt,Et;const St=M.isCompressedTexture?M.mipmaps[be]:M.image;if(W!==null)Pe=W.max.x-W.min.x,Me=W.max.y-W.min.y,Ce=W.isBox3?W.max.z-W.min.z:1,Ge=W.min.x,Je=W.min.y,ot=W.isBox3?W.min.z:0;else{const pt=Math.pow(2,-q);Pe=Math.floor(St.width*pt),Me=Math.floor(St.height*pt),M.isDataArrayTexture?Ce=St.depth:M.isData3DTexture?Ce=Math.floor(St.depth*pt):Ce=1,Ge=0,Je=0,ot=0}z!==null?(ke=z.x,lt=z.y,Et=z.z):(ke=0,lt=0,Et=0);const _t=re.convert(O.format),Ot=re.convert(O.type);let Be;O.isData3DTexture?(je.setTexture3D(O,0),Be=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(je.setTexture2DArray(O,0),Be=F.TEXTURE_2D_ARRAY):(je.setTexture2D(O,0),Be=F.TEXTURE_2D),Se.activeTexture(F.TEXTURE0),Se.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),Se.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Se.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const jt=Se.getParameter(F.UNPACK_ROW_LENGTH),gt=Se.getParameter(F.UNPACK_IMAGE_HEIGHT),si=Se.getParameter(F.UNPACK_SKIP_PIXELS),Ft=Se.getParameter(F.UNPACK_SKIP_ROWS),Aa=Se.getParameter(F.UNPACK_SKIP_IMAGES);Se.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),Se.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),Se.pixelStorei(F.UNPACK_SKIP_PIXELS,Ge),Se.pixelStorei(F.UNPACK_SKIP_ROWS,Je),Se.pixelStorei(F.UNPACK_SKIP_IMAGES,ot);const Dn=M.isDataArrayTexture||M.isData3DTexture,ri=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const pt=Oe.get(M),It=Oe.get(O),en=Oe.get(pt.__renderTarget),bt=Oe.get(It.__renderTarget);Se.bindFramebuffer(F.READ_FRAMEBUFFER,en.__webglFramebuffer),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Rt=0;Rt<Ce;Rt++)Dn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(M).__webglTexture,q,ot+Rt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(O).__webglTexture,be,Et+Rt)),F.blitFramebuffer(Ge,Je,Ge+Pe,Je+Me,ke,lt,ke+Pe,lt+Me,F.DEPTH_BUFFER_BIT,F.NEAREST);Se.bindFramebuffer(F.READ_FRAMEBUFFER,null),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||Oe.has(M)){const pt=Oe.get(M),It=Oe.get(O);Se.bindFramebuffer(F.READ_FRAMEBUFFER,I),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,G);for(let en=0;en<Ce;en++)Dn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pt.__webglTexture,q,ot+en):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pt.__webglTexture,q),ri?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,be,Et+en):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,be),q!==0?F.blitFramebuffer(Ge,Je,Ge+Pe,Je+Me,ke,lt,ke+Pe,lt+Me,F.COLOR_BUFFER_BIT,F.NEAREST):ri?F.copyTexSubImage3D(Be,be,ke,lt,Et+en,Ge,Je,Pe,Me):F.copyTexSubImage2D(Be,be,ke,lt,Ge,Je,Pe,Me);Se.bindFramebuffer(F.READ_FRAMEBUFFER,null),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ri?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Be,be,ke,lt,Et,Pe,Me,Ce,_t,Ot,St.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Be,be,ke,lt,Et,Pe,Me,Ce,_t,St.data):F.texSubImage3D(Be,be,ke,lt,Et,Pe,Me,Ce,_t,Ot,St):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,ke,lt,Pe,Me,_t,Ot,St.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,ke,lt,St.width,St.height,_t,St.data):F.texSubImage2D(F.TEXTURE_2D,be,ke,lt,Pe,Me,_t,Ot,St);Se.pixelStorei(F.UNPACK_ROW_LENGTH,jt),Se.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),Se.pixelStorei(F.UNPACK_SKIP_PIXELS,si),Se.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),Se.pixelStorei(F.UNPACK_SKIP_IMAGES,Aa),be===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(Be),Se.unbindTexture()},this.initRenderTarget=function(M){Oe.get(M).__webglFramebuffer===void 0&&je.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?je.setTextureCube(M,0):M.isData3DTexture?je.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?je.setTexture2DArray(M,0):je.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){Q=0,j=0,oe=null,Se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function _0(){const i=document.createElement("canvas");i.width=2048,i.height=1024;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,i.height);t.addColorStop(0,"#0a1e3f"),t.addColorStop(.2,"#062d5e"),t.addColorStop(.5,"#0c386d"),t.addColorStop(.8,"#062d5e"),t.addColorStop(1,"#0a1e3f"),e.fillStyle=t,e.fillRect(0,0,i.width,i.height);const n=(r,o="#1b4332",l="#2d6a4f")=>{e.beginPath(),r.forEach(([c,d],h)=>{const m=(c+180)/360*i.width,u=(90-d)/180*i.height;h===0?e.moveTo(m,u):e.lineTo(m,u)}),e.closePath(),e.fillStyle=o,e.fill(),e.strokeStyle=l,e.lineWidth=3,e.stroke()};n([[-15,35],[-5,36],[10,37],[25,32],[35,30],[51,12],[45,0],[42,-12],[32,-28],[26,-34],[18,-34],[12,-18],[9,5],[-5,5],[-17,15],[-17,28],[-15,35]],"#2d6a4f","#40916c"),n([[-10,28],[30,28],[32,18],[15,16],[-10,20]],"#78350f","#92400e"),n([[-9,36],[-5,43],[5,48],[12,54],[25,58],[30,70],[18,70],[10,62],[3,52],[-4,48],[-9,42]],"#1e4620","#2d6a4f"),n([[32,35],[45,45],[60,55],[75,70],[110,72],[145,72],[170,64],[160,50],[140,38],[122,22],[105,10],[80,8],[70,22],[55,25],[35,30]],"#1e4620","#2d6a4f"),n([[70,24],[78,28],[88,25],[84,18],[80,8],[74,14]],"#2d6a4f","#40916c"),n([[-168,65],[-140,70],[-100,72],[-75,62],[-60,48],[-70,42],[-76,34],[-80,25],[-90,20],[-100,22],[-115,30],[-124,48],[-130,54],[-165,60]],"#1e4620","#2d6a4f"),n([[-75,12],[-60,8],[-45,-2],[-35,-6],[-38,-16],[-50,-32],[-65,-55],[-75,-48],[-72,-30],[-80,-10],[-78,5]],"#155e75","#0e7490"),n([[114,-22],[125,-15],[140,-12],[150,-22],[152,-36],[140,-38],[118,-35]],"#854d0e","#a16207"),e.fillStyle="#f8fafc",e.beginPath(),e.ellipse(i.width*.5,40,i.width*.35,60,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i.width*.5,i.height-40,i.width*.42,80,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.45)";for(let r=0;r<60;r++){const o=r*127%i.width,l=160+r*59%(i.height-320),c=35+r%45,d=10+r%15;e.beginPath(),e.ellipse(o,l,c,d,r*.2,0,Math.PI*2),e.fill()}const a=new dh(i);return a.needsUpdate=!0,a}function S0({isDark:i=!0}){const e=R.useRef(null),t=R.useRef(!1),n=R.useRef({x:0,y:0}),a=R.useRef({x:6e-4,y:.0016});return R.useEffect(()=>{const r=e.current;if(!r)return;const o=r.clientWidth||480,l=r.clientHeight||480,c=new Qu,d=new sn(45,o/l,.1,1e3);d.position.z=2.7;const h=new v0({alpha:!0,antialias:!0,powerPreference:"high-performance"});h.setSize(o,l),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(h.domElement);const m=new fs(1,64,64),u=_0(),g=new gh({map:u,roughness:.55,metalness:.05}),x=new In(m,g);x.rotation.z=.41,x.rotation.y=1.2,c.add(x);const y=new fs(1.025,48,48),p=new jc({color:3718648,transparent:!0,opacity:i?.25:.18,blending:vr,side:Ht}),f=new In(y,p);c.add(f);const S=220,E=new _n,_=new Float32Array(S*3);for(let j=0;j<S*3;j+=3)_[j]=(Math.random()-.5)*16,_[j+1]=(Math.random()-.5)*16,_[j+2]=-2-Math.random()*8;E.setAttribute("position",new Yn(_,3));const N=new Vc({color:9684477,size:.035,transparent:!0,opacity:i?.75:.35}),T=new ch(E,N);c.add(T);const v=new yh(16777215,2);v.position.set(4,2,3),c.add(v);const b=new bh(2241365,.9);c.add(b);const L=j=>{t.current=!0,n.current={x:j.clientX,y:j.clientY}},P=j=>{if(!t.current)return;const oe=j.clientX-n.current.x,V=j.clientY-n.current.y;n.current={x:j.clientX,y:j.clientY},x.rotation.y+=oe*.005,x.rotation.x+=V*.005,a.current={x:V*.001,y:oe*.002}},U=()=>{t.current=!1},k=h.domElement;k.addEventListener("pointerdown",L),window.addEventListener("pointermove",P),window.addEventListener("pointerup",U);let $;const I=()=>{$=requestAnimationFrame(I),t.current||(a.current.y=a.current.y*.95+.0012*.05,a.current.x=a.current.x*.95,x.rotation.y+=a.current.y,x.rotation.x+=a.current.x),T.rotation.y+=2e-4,h.render(c,d)};I();const G=()=>{if(!r)return;const j=r.clientWidth,oe=r.clientHeight;d.aspect=j/oe,d.updateProjectionMatrix(),h.setSize(j,oe)},Q=new ResizeObserver(G);return Q.observe(r),()=>{cancelAnimationFrame($),Q.disconnect(),k.removeEventListener("pointerdown",L),window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",U),m.dispose(),g.dispose(),u.dispose(),y.dispose(),p.dispose(),E.dispose(),N.dispose(),h.dispose(),r.contains(k)&&r.removeChild(k)}},[i]),s.jsxs("div",{className:"earth-3d-wrapper",style:{position:"relative",width:"100%",height:"100%",minHeight:"380px"},children:[s.jsx("div",{ref:e,className:"earth-3d-canvas-container",style:{width:"100%",height:"100%",cursor:"grab"},title:"Interactive 3D Earth — Click and drag to rotate"}),s.jsxs("div",{className:"earth-hint-pill",children:[s.jsx("span",{className:"hint-dot"}),s.jsx("span",{children:"Drag to rotate Earth"})]})]})}function y0({lang:i="en",isDark:e=!0,onExploreClick:t,onHowItWorksClick:n}){const a=i==="ar";return s.jsx("section",{id:"home",className:"home-hero-section",children:s.jsxs("div",{className:"home-hero-container",children:[s.jsxs("div",{className:"home-hero-content",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(ni,{size:14,className:"badge-sparkle-icon"}),s.jsx("span",{children:a?"تحدي ناسا لتطبيقات الفضاء ٢٠٢٦":"NASA Space Apps Challenge 2026"})]}),s.jsx("h1",{className:"hero-title",children:s.jsx("span",{className:"hero-title-main",children:"TERRA-TONE"})}),s.jsx("p",{className:"hero-subtitle",children:a?"استمع إلى الأرض. اكتشف ما تخبرنا به.":"Listen to the Earth. Discover what it tells us."}),s.jsx("p",{className:"hero-description",children:a?"تجربة علمية تفاعلية مستقبلية تحول القياسات الطيفية والمناخية لأقمار ناسا الصناعية إلى تجارب صوتية حسية تكشف التغيرات البيئية والتنفس الحيوي لكوكبنا.":"A futuristic interactive scientific platform translating NASA satellite observations and Earth Information Center datasets into real-time acoustic soundscapes."}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs("a",{href:"#explore",onClick:r=>{r.preventDefault(),t==null||t()},className:"hero-btn-primary",children:[s.jsx(tc,{size:18}),s.jsx("span",{children:a?"استكشف بيانات الأرض":"Explore Earth Data"}),s.jsx(So,{size:16,className:"btn-arrow-icon"})]}),s.jsxs("a",{href:"#science",onClick:r=>{r.preventDefault(),n==null||n()},className:"hero-btn-secondary",children:[s.jsx(_s,{size:18}),s.jsx("span",{children:a?"كيف يعمل الصوت البيئي":"How It Works"})]})]}),s.jsxs("div",{className:"hero-metrics-strip",children:[s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"100%"}),s.jsx("span",{className:"metric-lbl",children:a?"بيانات ناسا الأصلية":"Verified NASA Data"})]}),s.jsx("div",{className:"metric-divider"}),s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"6+"}),s.jsx("span",{className:"metric-lbl",children:a?"أبعاد مناخية":"Climate Domains"})]}),s.jsx("div",{className:"metric-divider"}),s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"24/7"}),s.jsx("span",{className:"metric-lbl",children:a?"استشعار فضائي مستمر":"Orbital Telemetry"})]})]})]}),s.jsx("div",{className:"home-hero-visual",children:s.jsx("div",{className:"earth-canvas-frame",children:s.jsx(S0,{isDark:e})})})]})})}function b0({lang:i="en"}){const[e,t]=R.useState(0),n=i==="ar",a=[{step:"01",title:n?"جمع البيانات من الفضاء":"COLLECT",subtitle:n?"استشعار الأرض عن بُعد بواسطة أقمار ناسا":"Satellite Earth Observation",icon:Hd,badge:"NASA SATELLITES & MISSIONS",description:n?"تقوم أساطيل ناسا الفضائية (MODIS, VIIRS, GEDI, OCO-2, SMAP) بمسح كوكب الأرض بشكل مستمر، لقياس درجات الحرارة، انبعاثات الكربون، الغطاء النباتي، ورطوبة التربة عبر أطياف ضوئية ورادارية متقدمة.":"NASA orbital constellations (MODIS, VIIRS, OCO-2, GEDI, and SMAP) continuously monitor planetary vital signs—measuring thermal radiance, carbon flux, aerosol density, and moisture levels.",bulletPoints:n?["تغطية عالمية بدقة عالية","قياسات طيفية متعددة الأطوال","تحديثات مستمرة عبر شبكات GIBS و POWER"]:["Continuous global orbital telemetry","Multi-spectral & radiometric measurements","Calibrated geophysical datasets (ppm, Kelvin, AOD)"]},{step:"02",title:n?"التحويل الرياضي والموسيقي":"TRANSFORM",subtitle:n?"خوارزميات تحويل القياسات الفيزيائية إلى ترددات ونغمات":"Data-to-Sound Translation",icon:Zd,badge:"SONIFICATION ALGORITHMS",description:n?"نقوم بتحويل الأرقام الخام إلى خصائص صوتية دقيقة: تتطابق قيم القياس المرتفعة مع ترددات نغمية أعلى، وتحدد كثافة الظواهر جرس الصوت وطبقاته الهارمونية، لإنتاج مقياس خماسي مريح للأذن يسهل تمييزه.":"Scientific metrics are systematically mapped into acoustic parameters: numerical intensity scales to pitch frequency (Hz), variability governs timbre and resonance, and time steps translate into tempo.",bulletPoints:n?["المقياس الخماسي لضمان انسجام النغمات","تلوين نغمي يعبر عن طبيعة كل ظاهرة","حساب الفروق المعيارية لإبراز الأنماط الشاذة"]:["Harmonic pentatonic quantization for acoustic clarity","Timbral synthesis reflecting instrument physics","Auditory cues for historical records and anomalies"]},{step:"03",title:n?"الاستماع والإدراك الحسي":"LISTEN",subtitle:n?"اكتشاف التغيرات المناخية عبر حاسة السمع":"Auditory Planetary Insight",icon:bs,badge:"COGNITIVE PERCEPTION",description:n?'تمتلك الأذن البشرية قدرة استثنائية على تمييز التغيرات الطفيفة والأنماط المعقدة في التردد والإيقاع في نفس اللحظة، مما يتيح لك "سماع" تنفس الغابات مع الفصول وارتفاع حرارة المحيطات دون الحاجة لقراءة جداول معقدة.':"The human auditory system excels at detecting subtle micro-variations and temporal polyrhythms simultaneously—allowing listeners to hear seasonal biosphere breathing and oceanic circulation instinctively.",bulletPoints:n?["إدراك الأنماط الموسمية والدورات الطبيعية","اكتشاف فوري للمؤشرات المناخية القصوى","تجربة شاملة وشاملة لذوي التحديات البصرية"]:["Intuitive recognition of seasonal rhythms","Instant auditory detection of extreme events","Accessible exploration for visually impaired researchers"]}];return s.jsxs("section",{id:"science",className:"science-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:n?"كيف يتحول كوكب الأرض إلى معزوفة":"HOW IT WORKS"}),s.jsx("h2",{className:"section-title",children:n?"العلم خلف الصوت البيئي":"The Science of Sonification"}),s.jsx("p",{className:"section-subtitle",children:n?"رحلة البيانات من مجسات الفضاء إلى الأذن البشرية في ثلاث مراحل متتالية":"How raw NASA satellite observations are transformed into meaningful, harmonic acoustic landscapes."})]}),s.jsxs("div",{className:"science-pipeline-visual",children:[s.jsx("div",{className:"pipeline-flow-line"}),s.jsx("div",{className:"pipeline-nodes-grid",children:a.map((r,o)=>{const l=r.icon,c=e===o;return s.jsxs("div",{className:`pipeline-node-card ${c?"active":""}`,onClick:()=>t(o),role:"button",tabIndex:0,onKeyDown:d=>{d.key==="Enter"&&t(o)},children:[s.jsx("div",{className:"node-step-tag",children:r.step}),s.jsx("div",{className:"node-icon-bubble",children:s.jsx(l,{size:24})}),s.jsx("h3",{className:"node-step-title",children:r.title}),s.jsx("span",{className:"node-step-sub",children:r.subtitle}),o===0&&s.jsxs("div",{className:"node-anim-preview sat-orbit-anim",children:[s.jsx("div",{className:"orbit-track"}),s.jsx("div",{className:"orbiting-sat"}),s.jsx("div",{className:"beaming-pulses"})]}),o===1&&s.jsxs("div",{className:"node-anim-preview wave-bars-anim",children:[s.jsx("span",{className:"wave-bar b1"}),s.jsx("span",{className:"wave-bar b2"}),s.jsx("span",{className:"wave-bar b3"}),s.jsx("span",{className:"wave-bar b4"}),s.jsx("span",{className:"wave-bar b5"})]}),o===2&&s.jsxs("div",{className:"node-anim-preview ripple-circle-anim",children:[s.jsx("span",{className:"sound-ripple r1"}),s.jsx("span",{className:"sound-ripple r2"}),s.jsx("span",{className:"sound-ripple r3"})]})]},r.step)})})]}),s.jsxs("div",{className:"science-detail-card",children:[s.jsxs("div",{className:"detail-card-header",children:[s.jsx("div",{className:"detail-step-badge",children:a[e].badge}),s.jsxs("h3",{className:"detail-title",children:[a[e].title," — ",a[e].subtitle]})]}),s.jsx("p",{className:"detail-description",children:a[e].description}),s.jsx("div",{className:"detail-bullets-grid",children:a[e].bulletPoints.map((r,o)=>s.jsxs("div",{className:"bullet-item",children:[s.jsx(Jl,{size:16,className:"bullet-check"}),s.jsx("span",{children:r})]},o))})]})]})}const na=[{id:"aerosols",name:"Aerosol Optical Depth (AOD & PM2.5)",nameAr:"عمق الأيروسول البصري وجودة الهواء",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA GEOS / MODIS Terra & Aqua",unit:"Optical Depth (Unitless) & μg/m³",range:"0.05 – 1.20 AOD",description:"Tracks particulate matter, dust storms, industrial smog, and wildfire smoke suspended across the atmosphere, revealing air quality variations.",descriptionAr:"رصد الجسيمات الدقيقة، العواصف الغبارية، ودخان الحرائق في الغلاف الجوي لتوضيح تباين جودة الهواء وتأثيرها التنفسي.",icon:As,color:"#38bdf8",soundProfile:"Airy flute and gentle noise breeze; higher frequencies indicate dense smog and severe pollution events.",soundProfileAr:"نغمات هوائية سلسة، ترتفع حدتها كلما زادت كثافة الجسيمات العالقة والتلوث الصناعي."},{id:"carbon",name:"Atmospheric Carbon Dioxide (CO₂)",nameAr:"ثاني أكسيد الكربون في الغلاف الجوي",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA OCO-2 / DYAMOND Simulation",unit:"Parts Per Million (ppm)",range:"390 – 425 ppm",description:"High-resolution global column measurements capturing the annual seasonal photosynthetic drawdown by Northern forests and long-term emission trends.",descriptionAr:"قياسات دقيقة لتركيز الكربون ترصد التنفس السنوي للغابات ودورات التمثيل الضوئي مع التزايد التراكمي المستمر.",icon:Ld,color:"#f97316",soundProfile:"Rich resonant warm drone with rhythmic annual undulations reflecting seasonal biospheric breathing.",soundProfileAr:"نغمات دافئة متناغمة تعكس تنفس المحيط الحيوي للأرض وامتصاص النباتات للكربون صيفاً."},{id:"ocean",name:"Sea Surface Currents & Temperature",nameAr:"تيارات وحرارة سطح المحيطات",category:"ocean",categoryName:"Ocean",categoryNameAr:"المحيطات",sensor:"NASA ECCO-2 / Perpetual Ocean",unit:"Degrees Celsius (°C) & m/s",range:"-2°C to +32°C",description:"Simulates fluid planetary thermal dynamics, Western boundary currents (Gulf Stream, Kuroshio), and immense heat conveyor transport across world oceans.",descriptionAr:"محاكاة التيارات المائية الدوارة وتيار الخليج الدافئ الذي ينقل الطاقة الحرارية من خط الاستواء نحو القطبين.",icon:Mo,color:"#06b6d4",soundProfile:"Deep aquatic marimba and sweeping liquid sub-oscillations whose tempo echoes oceanic kinetic energy.",soundProfileAr:"أصوات ماريمبا مائية عميقة مع تموجات تعكس حركة الدوامات البحرية والطاقة الحركية."},{id:"precip",name:"Atmospheric Rivers & Precipitation",nameAr:"الأنهار الجوية ومعدلات الهطول",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA GPM (Global Precipitation Measurement)",unit:"Millimeters per Hour (mm/h)",range:"0 – 85 mm/h",description:"Long plumes of dense atmospheric moisture carrying the equivalent flow of the Amazon river across skies, triggering torrential rain and vital snowpacks.",descriptionAr:"أعمدة هائلة من بخار الماء في الغلاف الجوي تعادل تدفق نهر الأمازون، تسبب هطول أمطار غزيرة وثلوج جبلية حيوية.",icon:ec,color:"#818cf8",soundProfile:"Crystalline glockenspiel droplets accelerating into rhythmic storm cascades during intense precipitation pulses.",soundProfileAr:"نغمات رنين بلورية تتسارع مع تدفق قطرات المطر وغزارة العواصف الرعدية."},{id:"nightlights",name:"Earth Night Lights & Human Energy",nameAr:"أضواء الأرض الليلية ونشاط الطاقة",category:"environment",categoryName:"Human Environment",categoryNameAr:"البيئة البشرية",sensor:"Suomi NPP VIIRS Day-Night Band",unit:"Radiance (nW/cm²·sr)",range:"0.1 – 150 nW",description:"Ten-year decadal record (2012–2023) tracking global electrification, urban growth, transit arteries, and localized energy grid disruptions.",descriptionAr:"سجل زمني لتوثيق نمو المدن وشبكات الكهرباء وتوسع النشاط البشري وانقطاعات الطاقة عبر عقد كامل.",icon:Gd,color:"#fbbf24",soundProfile:"Warm analog synthesizer pulses with rising brightness and harmonic overtone complexity in dense metropolitan centers.",soundProfileAr:"نبضات سنثسايزر دافئة تزداد سطوعاً وتعقيداً مع كثافة التجمعات الحضرية والإضاءة."},{id:"ice",name:"Cryosphere & Polar Sea Ice Extent",nameAr:"الغطاء الجليدي القطبي والبحري",category:"environment",categoryName:"Cryosphere",categoryNameAr:"البيئة الجليدية",sensor:"NASA NSIDC / SSMIS Microwave",unit:"Million Square Kilometers (M km²)",range:"3.5 – 16.0 M km²",description:"Decadal satellite microwave sensing documenting the minimum and maximum Arctic and Antarctic freeze-thaw cycles and albedo dynamics.",descriptionAr:"قياسات رادارية ميكروويفية توثق انكماش واتساع الجليد في القطبين وتأثيره على انعكاس الإشعاع الشمسي.",icon:hc,color:"#a5f3fc",soundProfile:"Chilled glass bell harmonics with descending fundamental frequencies illustrating multi-year ice loss.",soundProfileAr:"أجراس زجاجية نقية تنخفض طبقتها تدريجياً لتعكس ذوبان الجليد القديم وتراجع المساحات."}];function M0({lang:i="en",onSelectDataset:e}){const[t,n]=R.useState("all"),[a,r]=R.useState(na[0].id),o=i==="ar",l=[{id:"all",label:o?"جميع البيانات":"All Datasets"},{id:"atmosphere",label:o?"الغلاف الجوي":"Atmosphere"},{id:"ocean",label:o?"المحيطات والمياه":"Ocean"},{id:"environment",label:o?"المناخ والبيئة":"Climate & Land"}],c=t==="all"?na:na.filter(m=>m.category===t),d=na.find(m=>m.id===a)||na[0],h=m=>{e==null||e(m);const u=document.getElementById("studio");u&&u.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("section",{id:"explore",className:"explore-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:o?"كتالوج ناسا العلمي":"OBSERVATIONAL CATALOG"}),s.jsx("h2",{className:"section-title",children:o?"استكشف بيانات الأرض":"Explore Earth Data"}),s.jsx("p",{className:"section-subtitle",children:o?"مجموعات بيانات علمية موثقة من أقمار ناسا ومراكز أبحاث الغلاف الجوي والمحيطات جاهزة للاستماع":"Select a verified NASA satellite observation dataset to inspect its physical parameters and auditory profile."})]}),s.jsx("div",{className:"category-filter-bar",children:l.map(m=>s.jsx("button",{onClick:()=>n(m.id),className:`cat-pill-btn ${t===m.id?"active":""}`,children:m.label},m.id))}),s.jsx("div",{className:"datasets-grid",children:c.map(m=>{const u=m.icon,g=m.id===a;return s.jsxs("div",{className:`dataset-card ${g?"selected":""}`,onClick:()=>r(m.id),children:[s.jsxs("div",{className:"card-top-row",children:[s.jsx("div",{className:"card-icon-tag",style:{color:m.color,background:`${m.color}18`},children:s.jsx(u,{size:20})}),s.jsx("span",{className:"card-cat-badge",children:o?m.categoryNameAr:m.categoryName})]}),s.jsx("h3",{className:"card-dataset-title",children:o?m.nameAr:m.name}),s.jsx("p",{className:"card-dataset-desc",children:o?m.descriptionAr:m.description}),s.jsxs("div",{className:"card-metrics-box",children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"lbl",children:o?"المستشعر الفضائي:":"Sensor / Source:"}),s.jsx("span",{className:"val",children:m.sensor})]}),s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"lbl",children:o?"وحدة القياس:":"Measurement Range:"}),s.jsx("span",{className:"val",children:m.range})]})]}),s.jsx("div",{className:"card-actions-row",children:s.jsxs("button",{onClick:x=>{x.stopPropagation(),h(m.id)},className:"card-explore-btn",children:[s.jsx(Pn,{size:15,fill:"currentColor"}),s.jsx("span",{children:o?"تجربة في استوديو الصوت":"Explore in Studio"}),s.jsx(So,{size:14,className:"arrow-launch"})]})})]},m.id)})}),d&&s.jsxs("div",{className:"dataset-deepdive-banner",children:[s.jsx("div",{className:"deepdive-icon-col",style:{color:d.color},children:s.jsx(d.icon,{size:36})}),s.jsxs("div",{className:"deepdive-info-col",children:[s.jsx("div",{className:"deepdive-badge",children:o?"الملف الصوتي العلمي المخصص":"Scientific Sound Mapping Profile"}),s.jsx("h4",{className:"deepdive-title",children:o?d.nameAr:d.name}),s.jsx("p",{className:"deepdive-text",children:o?d.soundProfileAr:d.soundProfile})]}),s.jsx("div",{className:"deepdive-cta-col",children:s.jsxs("button",{onClick:()=>h(d.id),className:"deepdive-launch-btn",children:[s.jsx(Pn,{size:16,fill:"currentColor"}),s.jsx("span",{children:o?"افتح في الاستوديو الآن":"Load in Sonification Studio"})]})})]})]})}const E0=[{id:"all",labelEn:"All Showcases",labelAr:"جميع المعارض"},{id:"human",labelEn:"Human Impact & Urban",labelAr:"النشاط البشري والمدن"},{id:"atmosphere",labelEn:"Atmosphere & Weather",labelAr:"الغلاف الجوي والطقس"},{id:"oceans",labelEn:"Oceans & Circulation",labelAr:"المحيطات والتيارات"},{id:"polar",labelEn:"Cryosphere & Polar",labelAr:"الغطاء الجليدي والقطبان"}],Tt=[{id:"night-lights-decade",svsId:5276,category:"human",titleEn:"Change in Night Lights (2012–2023)",titleAr:"تغير أضواء الليل العالمية (2012–2023)",subtitleEn:"Decade-long global urbanization and electrification dynamics",subtitleAr:"ديناميكيات التحضر والكهرباء العالمية على مدار عقد",shortDescriptionEn:"Using NASA Black Marble nighttime lights data from VIIRS, this visualization maps a decade of human activity, urban expansion, and socioeconomic shifts from 2012 through 2023.",shortDescriptionAr:"باستخدام بيانات الرخام الأسود التابع لناسا من مستشعر VIIRS، ترصد هذه المحاكاة عقدًا من النشاط البشري والتوسع الحضري والتغيرات التنموية من 2012 حتى 2023.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat_2160p30.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat.02599_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5276/",phenomenon:"Anthropogenic Nighttime Radiance & Urban Development",phenomenonAr:"الإشعاع الليلي الاصطناعي والتطور العمراني",datasetName:"NASA Black Marble (VNP46A4 Annual Composite Suite)",dataProvider:"NASA Goddard Space Flight Center / Terrestrial Information Systems Laboratory",instrument:"VIIRS Day/Night Band (DNB) aboard Suomi-NPP & NOAA-20",primaryVariable:"Mean Calibrated Nighttime Radiance",unitEn:"nW · cm⁻² · sr⁻¹ (Nanowatts per cm² per steradian)",unitShort:"nW/(cm²·sr)",geographicCoverage:"Global (90°N – 90°S, 180°W – 180°E)",temporalCoverage:"2012 – 2023 (Annual Observation Cadence)",dataCollectionMethod:"Satellite radiometry calibrated for lunar illumination, stray light, atmospheric scattering, and cloud obscuration.",dataType:"Calibrated Satellite Observation",durationSeconds:44,dataCadence:"yearly",timePoints:[{timestamp:0,year:2012,label:"2012 Baseline"},{timestamp:3.5,year:2013,label:"2013"},{timestamp:7,year:2014,label:"2014"},{timestamp:10.5,year:2015,label:"2015"},{timestamp:14,year:2016,label:"2016"},{timestamp:17.5,year:2017,label:"2017"},{timestamp:21,year:2018,label:"2018"},{timestamp:24.5,year:2019,label:"2019"},{timestamp:28,year:2020,label:"2020 (Pandemic Dip)"},{timestamp:31.5,year:2021,label:"2021 (Recovery)"},{timestamp:35,year:2022,label:"2022"},{timestamp:38.5,year:2023,label:"2023"},{timestamp:44,year:2023,label:"Net Decade Change"}],graphConfig:{chartType:"line",yAxisLabel:"Radiance [nW · cm⁻² · sr⁻¹]",series:[{key:"globalMean",nameEn:"Global Mean Radiance",nameAr:"متوسط الإشعاع العالمي",color:"#38bdf8",fill:!0,data:[{x:"2012",y:14.21,timestamp:0},{x:"2013",y:14.54,timestamp:3.5},{x:"2014",y:15.12,timestamp:7},{x:"2015",y:15.78,timestamp:10.5},{x:"2016",y:16.39,timestamp:14},{x:"2017",y:17.15,timestamp:17.5},{x:"2018",y:17.96,timestamp:21},{x:"2019",y:18.68,timestamp:24.5},{x:"2020",y:18.19,timestamp:28},{x:"2021",y:19.42,timestamp:31.5},{x:"2022",y:20.08,timestamp:35},{x:"2023",y:20.76,timestamp:38.5}]},{key:"southAsia",nameEn:"Rapid Electrification (South Asia)",nameAr:"التوسع الكهربائي السريع (جنوب آسيا)",color:"#a855f7",fill:!1,data:[{x:"2012",y:18.4,timestamp:0},{x:"2013",y:19.3,timestamp:3.5},{x:"2014",y:21.1,timestamp:7},{x:"2015",y:23.4,timestamp:10.5},{x:"2016",y:25.8,timestamp:14},{x:"2017",y:28.3,timestamp:17.5},{x:"2018",y:31.2,timestamp:21},{x:"2019",y:33.7,timestamp:24.5},{x:"2020",y:32.1,timestamp:28},{x:"2021",y:35.6,timestamp:31.5},{x:"2022",y:37.9,timestamp:35},{x:"2023",y:40.2,timestamp:38.5}]}]}},{id:"geos-aerosols-2017",svsId:30910,category:"atmosphere",titleEn:"GEOS Aerosols: 2017 Hurricane Season",titleAr:"محاكاة الهباء الجوي GEOS: موسم أعاصير 2017",subtitleEn:"Long-range transport of sea salt, smoke, and Saharan dust",subtitleAr:"الانتقال الجوي بعيد المدى لملح البحر والدخان وغبار الصحراء",shortDescriptionEn:"NASA GEOS high-resolution simulation tracking sea salt, smoke, and dust transported across the Atlantic during the 2017 hurricane season (Hurricanes Harvey, Irma, and Maria).",shortDescriptionAr:"محاكاة فائقة الدقة لنظام GEOS تتبع جزيئات ملح البحر والدخان وغبار الصحراء المنقول عبر المحيط الأطلسي خلال موسم الأعاصير لعام 2017 (هارفي، إيرما، وماريا).",videoUrl:"https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.01000_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/30910/",phenomenon:"Atmospheric Aerosol Dispersion & Tropical Cyclone Interactions",phenomenonAr:"تشتت الهباء الجوي وتفاعلات الأعاصير المدارية",datasetName:"GEOS-5 Forward Processing (FP) Atmospheric Composition",dataProvider:"NASA Goddard Space Flight Center / Global Modeling and Assimilation Office (GMAO)",instrument:"Goddard Earth Observing System (GEOS) Earth System Model with assimilated MODIS/VIIRS AOD",primaryVariable:"Total & Speciated Aerosol Optical Depth (AOD at 550nm)",unitEn:"Dimensionless Optical Depth / Column Density (mg · m⁻²)",unitShort:"AOD (550nm)",geographicCoverage:"North Atlantic Ocean, Gulf of Mexico, North America, and Western Sahara",temporalCoverage:"July 31, 2017 – November 1, 2017 (Daily Progression)",dataCollectionMethod:"Numerical global climate model constrained with satellite optical depth assimilations.",dataType:"Assimilated Numerical Model Simulation",durationSeconds:45,dataCadence:"daily",timePoints:[{timestamp:0,date:"2017-07-31",label:"Jul 31: Baseline"},{timestamp:7,date:"2017-08-15",label:"Aug 15: Saharan Dust Outbreak"},{timestamp:12,date:"2017-08-25",label:"Aug 25: Hurricane Harvey Landfall"},{timestamp:17,date:"2017-09-06",label:"Sep 06: Hurricane Irma Peak"},{timestamp:23,date:"2017-09-20",label:"Sep 20: Hurricane Maria Landfall"},{timestamp:32,date:"2017-10-10",label:"Oct 10: PNW Wildfire Smoke Plume"},{timestamp:45,date:"2017-11-01",label:"Nov 01: Seasonal Cessation"}],graphConfig:{chartType:"line",yAxisLabel:"Aerosol Optical Depth [AOD 550nm]",series:[{key:"seaSalt",nameEn:"Sea Salt Aerosol (Vortex Spray)",nameAr:"هباء ملح البحر (رذاذ الأعاصير)",color:"#38bdf8",fill:!1,data:[{x:"Jul 31",y:.18,timestamp:0},{x:"Aug 10",y:.22,timestamp:4.8},{x:"Aug 20",y:.35,timestamp:9.7},{x:"Aug 25",y:.89,timestamp:12.1},{x:"Aug 30",y:.44,timestamp:14.5},{x:"Sep 06",y:1.34,timestamp:17.4},{x:"Sep 12",y:.62,timestamp:20.3},{x:"Sep 20",y:1.15,timestamp:23.2},{x:"Sep 28",y:.48,timestamp:27.1},{x:"Oct 10",y:.31,timestamp:32.9},{x:"Oct 22",y:.25,timestamp:38.7},{x:"Nov 01",y:.19,timestamp:45}]},{key:"smoke",nameEn:"Carbonaceous Smoke (Wildfires)",nameAr:"دخان الكربون (حرائق الغابات)",color:"#f97316",fill:!1,data:[{x:"Jul 31",y:.12,timestamp:0},{x:"Aug 10",y:.15,timestamp:4.8},{x:"Aug 20",y:.28,timestamp:9.7},{x:"Aug 25",y:.31,timestamp:12.1},{x:"Aug 30",y:.38,timestamp:14.5},{x:"Sep 06",y:.42,timestamp:17.4},{x:"Sep 12",y:.51,timestamp:20.3},{x:"Sep 20",y:.39,timestamp:23.2},{x:"Sep 28",y:.47,timestamp:27.1},{x:"Oct 10",y:.94,timestamp:32.9},{x:"Oct 22",y:.42,timestamp:38.7},{x:"Nov 01",y:.16,timestamp:45}]},{key:"dust",nameEn:"Saharan Mineral Dust",nameAr:"غبار الصحراء الكبرى",color:"#eab308",fill:!1,data:[{x:"Jul 31",y:.45,timestamp:0},{x:"Aug 10",y:.68,timestamp:4.8},{x:"Aug 20",y:.55,timestamp:9.7},{x:"Aug 25",y:.38,timestamp:12.1},{x:"Aug 30",y:.42,timestamp:14.5},{x:"Sep 06",y:.76,timestamp:17.4},{x:"Sep 12",y:.61,timestamp:20.3},{x:"Sep 20",y:.45,timestamp:23.2},{x:"Sep 28",y:.34,timestamp:27.1},{x:"Oct 10",y:.28,timestamp:32.9},{x:"Oct 22",y:.22,timestamp:38.7},{x:"Nov 01",y:.18,timestamp:45}]}]}},{id:"perpetual-ocean-2",svsId:5425,category:"oceans",titleEn:"Perpetual Ocean 2: Western Boundary Currents",titleAr:"المحيط الدائم 2: تيارات الحدود الغربية",subtitleEn:"3D circulation of the Kuroshio, Agulhas, and Gulf Stream",subtitleAr:"الدوران ثلاثي الأبعاد لتيارات كوروشيو وأغولياس وتيار الخليج",shortDescriptionEn:"Using NASA JPL ECCO-2 high-resolution ocean models, this visualization highlights heat transport and deep return flows across the world's most powerful western boundary currents.",shortDescriptionAr:"باستخدام نماذج ECCO-2 عالية الدقة من مختبر الدفع النفاث بناسا، توضح هذه المحاكاة نقل الحرارة وتدفقات العودة العميقة عبر أقوى تيارات المحيطات.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_6840x3420_768p30-d1.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_2028x1024.25000.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/3912/",phenomenon:"Western Boundary Currents & Oceanic Heat Transport",phenomenonAr:"تيارات الحدود الغربية ونقل الحرارة بالمحيطات",datasetName:"ECCO-2 (Estimating the Circulation and Climate of the Ocean, Phase II)",dataProvider:"NASA Jet Propulsion Laboratory (JPL), MIT, and UT Austin",instrument:"MIT general circulation model (MITgcm) synthesizing satellite altimetry, Argo floats, and CTD probes",primaryVariable:"Current Velocity & Temperature Profile",unitEn:"Surface Velocity (m · s⁻¹), Temperature (°C)",unitShort:"m/s & °C",geographicCoverage:"Global Oceans (Kuroshio, Agulhas Retroflection, North Atlantic Gulf Stream)",temporalCoverage:"2021 – 2023 Multi-Year High-Resolution Velocity Fields",dataCollectionMethod:"Synthesized physics-based oceanic general circulation model with 4D-Var data assimilation.",dataType:"Assimilated Ocean Circulation Model",durationSeconds:150,dataCadence:"geographic-tour",timePoints:[{timestamp:0,label:"0:00 - Global Earth Rotation"},{timestamp:35,label:"0:35 - Western Pacific & Kuroshio Current"},{timestamp:75,label:"1:15 - Indian Ocean & Agulhas Retroflection"},{timestamp:110,label:"1:50 - North Atlantic & Gulf Stream Core"},{timestamp:135,label:"2:15 - Subsurface Return Flow (<600m)"},{timestamp:150,label:"2:30 - Global Ocean Heat Redistribution"}],graphConfig:{chartType:"line",yAxisLabel:"Current Flow Velocity [m · s⁻¹]",series:[{key:"velocity",nameEn:"Current Flow Velocity (m/s)",nameAr:"سرعة تدفق التيار (م/ث)",color:"#06b6d4",fill:!0,data:[{x:"Global Orbit",y:.32,timestamp:0},{x:"W. Pacific Entry",y:.74,timestamp:20},{x:"Kuroshio Core",y:1.85,timestamp:38},{x:"Kuroshio Meander",y:1.2,timestamp:55},{x:"Agulhas Entry",y:1.45,timestamp:75},{x:"Agulhas Ring Shedding",y:1.95,timestamp:92},{x:"Florida Straits",y:2.15,timestamp:110},{x:"Gulf Stream Core",y:2.52,timestamp:122},{x:"Deep Return (<600m)",y:.42,timestamp:138},{x:"North Atlantic Drift",y:.65,timestamp:150}]},{key:"temperature",nameEn:"Core Water Temperature (°C / 10)",nameAr:"درجة حرارة مياه التيار (°م / 10)",color:"#f43f5e",fill:!1,data:[{x:"Global Orbit",y:1.6,timestamp:0},{x:"W. Pacific Entry",y:2.1,timestamp:20},{x:"Kuroshio Core",y:2.45,timestamp:38},{x:"Kuroshio Meander",y:2.2,timestamp:55},{x:"Agulhas Entry",y:2.35,timestamp:75},{x:"Agulhas Ring Shedding",y:2.15,timestamp:92},{x:"Florida Straits",y:2.75,timestamp:110},{x:"Gulf Stream Core",y:2.68,timestamp:122},{x:"Deep Return (<600m)",y:.48,timestamp:138},{x:"North Atlantic Drift",y:1.42,timestamp:150}]}]}},{id:"dyamond-co2-transport",svsId:5196,category:"atmosphere",titleEn:"DYAMOND: Atmospheric Carbon Dioxide Transport",titleAr:"مشروع DYAMOND: حركة ثاني أكسيد الكربون في الغلاف الجوي",subtitleEn:"High-resolution global simulation of CO₂ plumes from power plants and fires",subtitleAr:"محاكاة عالمية فائقة الدقة لانبعاثات CO₂ من محطات الطاقة والحرائق",shortDescriptionEn:"Supercomputer simulation from NASA GEOS showing 3D atmospheric CO₂ movement from January through March 2020, revealing the synoptic connection between urban emissions and weather systems.",shortDescriptionAr:"محاكاة حاسوبية عملاقة من نموذج NASA GEOS توضح حركة CO₂ في الغلاف الجوي من يناير حتى مارس 2020، كاشفة العلاقة بين الانبعاثات الحضرية وأنظمة الطقس.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_3-29-2023a_dyamond_co2_anim_globe_zoom_1080p30.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_12-1-2023b_dyamond_co2_anim_globe_orbit_3x3Hyperwall.00200_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5196/",phenomenon:"Atmospheric Greenhouse Gas Transport & Synoptic Weather Advection",phenomenonAr:"انتقال غازات الدفيئة في الغلاف الجوي وحركة الكتل الهوائية",datasetName:"DYAMOND Phase II GEOS Ultra-High Resolution Atmosphere Simulation",dataProvider:"NASA Goddard Space Flight Center / GMAO & Carbon Cycle Science",instrument:"GEOS Atmospheric General Circulation Model assimilating OCO-2 satellite retrievals",primaryVariable:"Atmospheric Carbon Dioxide Mixing Ratio (XCO₂)",unitEn:"Parts Per Million (ppm)",unitShort:"ppm",geographicCoverage:"Global (3km ultra-high resolution horizontal grid)",temporalCoverage:"January 1, 2020 – March 31, 2020 (Winter-Spring Synoptic Window)",dataCollectionMethod:"Atmospheric general circulation simulation resolving individual convective systems and emission plumes.",dataType:"High-Resolution Earth System Model Simulation",durationSeconds:30,dataCadence:"daily-seasonal",timePoints:[{timestamp:0,date:"2020-01-01",label:"Jan 01: Baseline Mixing Ratio"},{timestamp:6,date:"2020-01-20",label:"Jan 20: Mid-Latitude Cyclone Advection"},{timestamp:13,date:"2020-02-10",label:"Feb 10: Urban Industrial Plume Peak"},{timestamp:20,date:"2020-03-01",label:"Mar 01: Equatorial Biomass Burning"},{timestamp:26,date:"2020-03-20",label:"Mar 20: Spring Maximum Concentration"},{timestamp:30,date:"2020-03-31",label:"Mar 31: Pre-Photosynthetic Drawdown"}],graphConfig:{chartType:"line",yAxisLabel:"CO₂ Concentration [ppm]",series:[{key:"nhMidLatitude",nameEn:"Northern Hemisphere Mid-Latitudes (Industrial Plumes)",nameAr:"العروض المتوسطة بنصف الكرة الشمالي (الانبعاثات الصناعية)",color:"#ef4444",fill:!0,data:[{x:"Jan 01",y:414.2,timestamp:0},{x:"Jan 10",y:414.8,timestamp:3.3},{x:"Jan 20",y:415.6,timestamp:6.6},{x:"Feb 01",y:416.3,timestamp:10},{x:"Feb 10",y:417.1,timestamp:13.3},{x:"Feb 20",y:417.9,timestamp:16.6},{x:"Mar 01",y:418.5,timestamp:20},{x:"Mar 10",y:419.2,timestamp:23.3},{x:"Mar 20",y:419.8,timestamp:26.6},{x:"Mar 31",y:420.3,timestamp:30}]},{key:"globalMean",nameEn:"Global Background Mean (Mauna Loa Reference)",nameAr:"المتوسط المرجعي العالمي (مرصد مونا لوا)",color:"#10b981",fill:!1,data:[{x:"Jan 01",y:413.4,timestamp:0},{x:"Jan 10",y:413.7,timestamp:3.3},{x:"Jan 20",y:414.1,timestamp:6.6},{x:"Feb 01",y:414.6,timestamp:10},{x:"Feb 10",y:415,timestamp:13.3},{x:"Feb 20",y:415.4,timestamp:16.6},{x:"Mar 01",y:415.9,timestamp:20},{x:"Mar 10",y:416.3,timestamp:23.3},{x:"Mar 20",y:416.7,timestamp:26.6},{x:"Mar 31",y:417.1,timestamp:30}]}]}},{id:"atmospheric-river-3d",svsId:4960,category:"atmosphere",titleEn:"3D View of an Atmospheric River",titleAr:"رؤية ثلاثية الأبعاد للنهر الجوي",subtitleEn:"Moisture transport and heavy precipitation in the Pineapple Express",subtitleAr:"نقل الرطوبة والهطول الغزير في ظاهرة قطار الأناناس السريع",shortDescriptionEn:"Using NASA MERRA-2 reanalysis, this 3D animation visualizes an atmospheric river channeling massive tropical water vapor across the Pacific, impacting western North America with extreme precipitation.",shortDescriptionAr:"باستخدام إعادة تحليل MERRA-2 من ناسا، تجسد هذه المحاكاة ثلاثية الأبعاد نهراً جوياً ينقل بخار الماء المداري الهائل عبر المحيط الهادئ نحو الساحل الغربي لأمريكا.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_HD.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_4k.00090_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/4960/",phenomenon:"Atmospheric River Moisture Transport & Orographic Rainfall",phenomenonAr:"نقل الرطوبة عبر الأنهار الجوية والهطول التضاريسي",datasetName:"MERRA-2 (Modern-Era Retrospective analysis for Research and Applications, Version 2)",dataProvider:"NASA Global Modeling and Assimilation Office (GMAO)",instrument:"NASA Goddard Earth Observing System with assimilated sounders, radiometers, and surface stations",primaryVariable:"Integrated Water Vapor Transport (IVT) & Precipitation",unitEn:"IVT (kg · m⁻¹ · s⁻¹), Precipitation Rate (mm · hr⁻¹)",unitShort:"kg/(m·s) & mm/hr",geographicCoverage:"Eastern Pacific Ocean, Hawaii to California and Pacific Northwest",temporalCoverage:"Extreme Atmospheric River Event Progression",dataCollectionMethod:"Modern atmospheric reanalysis combining multisatellite microwave and infrared observations with numerical weather forecasting.",dataType:"Atmospheric Reanalysis Blend",durationSeconds:120,dataCadence:"event-lifecycle",timePoints:[{timestamp:0,label:"0:00 - Tropical ITCZ Moisture Convergence"},{timestamp:25,label:"0:25 - Pressure Gradient Funneling (Hawaiian Origin)"},{timestamp:50,label:"0:50 - Jet Stream Advection Across Pacific Corridor"},{timestamp:75,label:"1:15 - Coastal Landfall & Cold Front Condensation"},{timestamp:95,label:"1:35 - Orographic Lift over Coastal Mountain Ranges"},{timestamp:120,label:"2:00 - Snowpack Buildup & Hydrologic Replenishment"}],graphConfig:{chartType:"line",yAxisLabel:"Water Vapor Transport [kg · m⁻¹ · s⁻¹]",series:[{key:"ivt",nameEn:"Integrated Vapor Transport (IVT)",nameAr:"نقل بخار الماء المتكامل (IVT)",color:"#3b82f6",fill:!0,data:[{x:"Tropical Genesis",y:280,timestamp:0},{x:"Pacific Corridor",y:460,timestamp:25},{x:"Mid-Ocean Funnel",y:720,timestamp:50},{x:"Landfall Peak (Cat 4)",y:1040,timestamp:75},{x:"Mountain Interception",y:580,timestamp:95},{x:"Inland Dissipation",y:210,timestamp:120}]},{key:"rainRate",nameEn:"Coastal Precipitation Rate (mm/hr × 20)",nameAr:"معدل الهطول الساحلي (ملم/س × 20)",color:"#0284c7",fill:!1,data:[{x:"Tropical Genesis",y:40,timestamp:0},{x:"Pacific Corridor",y:80,timestamp:25},{x:"Mid-Ocean Funnel",y:160,timestamp:50},{x:"Landfall Peak (Cat 4)",y:480,timestamp:75},{x:"Mountain Interception",y:320,timestamp:95},{x:"Inland Dissipation",y:60,timestamp:120}]}]}},{id:"antarctic-sea-ice",svsId:5064,category:"polar",titleEn:"Daily Antarctic Sea Ice Extent",titleAr:"امتداد الجليد البحري اليومي في القارة القطبية الجنوبية",subtitleEn:"Annual freeze and melt cycles captured by satellite radiometry",subtitleAr:"دورات التجمد والذوبان السنوية عبر مقاييس الإشعاع الفضائية",shortDescriptionEn:"Produced by NASA Cryospheric Sciences, this high-contrast visualization follows the daily expansion and retreat of Antarctic sea ice through annual minimums and maximums.",shortDescriptionAr:"من إنتاج مختبر العلوم الجليدية بناسا، ترصد هذه المحاكاة التمدد والتقلص اليومي للجليد البحري حول القارة القطبية الجنوبية عبر فصول التجمد والذوبان.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.00001_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5064/",phenomenon:"Cryospheric Polar Ice Dynamics & Seasonal Feedback",phenomenonAr:"ديناميكيات الجليد القطبي ودورات التغذية الراجعة المناخية",datasetName:"NASA Cryospheric Sciences / NSIDC Sea Ice Index",dataProvider:"NASA Goddard Space Flight Center Cryospheric Sciences Laboratory & NSIDC",instrument:"Passive Microwave Radiometers (DMSP SSM/I-SSMIS and AMSR-2)",primaryVariable:"Daily Sea Ice Extent (areas with ≥15% ice concentration)",unitEn:"Million Square Kilometers (10⁶ km²)",unitShort:"10⁶ km²",geographicCoverage:"Southern Ocean and Antarctic Circumpolar Seas",temporalCoverage:"Daily Continuous Observation",dataCollectionMethod:"Multifrequency satellite passive microwave brightness temperature inversion.",dataType:"Direct Satellite Observation",durationSeconds:40,dataCadence:"daily-annual",timePoints:[{timestamp:0,label:"January: Mid-Summer Melt"},{timestamp:6.6,label:"February: Annual Minimum Extent (~2.2M km²)"},{timestamp:13.3,label:"April: Autumn Freeze Initiation"},{timestamp:20,label:"June: Polar Winter Expansion"},{timestamp:26.6,label:"August: Peak Growth Rate"},{timestamp:33.3,label:"September: Annual Maximum Extent (~18.5M km²)"},{timestamp:40,label:"December: Rapid Spring Retreat"}],graphConfig:{chartType:"line",yAxisLabel:"Sea Ice Extent [10⁶ km²]",series:[{key:"extent",nameEn:"Antarctic Sea Ice Extent (10⁶ km²)",nameAr:"امتداد الجليد البحري (مليون كم²)",color:"#38bdf8",fill:!0,data:[{x:"Jan",y:5.1,timestamp:0},{x:"Feb (Min)",y:2.2,timestamp:6.6},{x:"Mar",y:3.8,timestamp:10},{x:"Apr",y:7.2,timestamp:13.3},{x:"May",y:11.4,timestamp:16.6},{x:"Jun",y:14.8,timestamp:20},{x:"Jul",y:16.9,timestamp:23.3},{x:"Aug",y:17.8,timestamp:26.6},{x:"Sep (Max)",y:18.6,timestamp:33.3},{x:"Oct",y:17.2,timestamp:35.5},{x:"Nov",y:13.5,timestamp:37.8},{x:"Dec",y:8.9,timestamp:40}]},{key:"climatology",nameEn:"1981–2010 Historical Climatological Median",nameAr:"المعدل المناخي التاريخي (1981–2010)",color:"#94a3b8",fill:!1,data:[{x:"Jan",y:5.8,timestamp:0},{x:"Feb (Min)",y:2.8,timestamp:6.6},{x:"Mar",y:4.5,timestamp:10},{x:"Apr",y:8.1,timestamp:13.3},{x:"May",y:12.3,timestamp:16.6},{x:"Jun",y:15.6,timestamp:20},{x:"Jul",y:17.5,timestamp:23.3},{x:"Aug",y:18.5,timestamp:26.6},{x:"Sep (Max)",y:19.1,timestamp:33.3},{x:"Oct",y:18,timestamp:35.5},{x:"Nov",y:14.8,timestamp:37.8},{x:"Dec",y:9.8,timestamp:40}]}]}}],ld=i=>Tt.find(e=>e.id===i)||Tt[0],ms={air_aod:{resourceId:"geos-aerosols-2017",tagEn:"Direct Model Lineage",tagAr:"امتداد فيزيائي للنموذج",noteEn:"NASA GMAO GEOS Forward Processing. The MERRA-2 Aerosol Optical Depth (AOD) map above is produced by the exact same atmospheric modeling and data assimilation system (GEOS) illustrated in this original 2017 Hurricane Season transport visual.",noteAr:"معالجة الهباء الجوي بنموذج NASA GMAO GEOS. تستند طبقة MERRA-2 للعمق البصري للهباء في الخريطة أعلاه إلى نفس نظام نمذجة الغلاف الجوي واستيعاب البيانات (GEOS) الموضح في هذه المحاكاة الأصلية لموسم أعاصير 2017."},air_co:{resourceId:"dyamond-co2-transport",tagEn:"Combustion Tracer Comparison",tagAr:"مقارنة نواتج الاحتراق",noteEn:"Synoptic Advection of Carbon Plumes. While the AIRS instrument samples mid-tropospheric Carbon Monoxide (CO), this high-resolution DYAMOND GEOS simulation reveals how atmospheric circulation advects companion carbon dioxide (CO₂) plumes from fossil fuel emissions and wildfires.",noteAr:"حركة سحب الكربون مع الكتل الهوائية. بينما يرصد قمر AIRS أول أكسيد الكربون، تكشف محاكاة DYAMOND فائقة الدقة كيفية انتقال سحب ثاني أكسيد الكربون المرافقة من محطات الوقود والحرائق."},air_ozone:{resourceId:"dyamond-co2-transport",tagEn:"Atmospheric Gas Circulation",tagAr:"دوران الغازات الجوية",noteEn:"Global Atmospheric Trace Gas Dynamics. Illustrates the planetary-scale wave patterns and synoptic weather systems that steer both stratospheric ozone and tropospheric trace emissions.",noteAr:"ديناميكيات غازات الغلاف الجوي. يوضح تموجات الكتل الهوائية وأنظمة الطقس العالمية التي تتحكم في توزيع الأوزون وانبعاثات الغازات."},water_sst:{resourceId:"perpetual-ocean-2",tagEn:"Thermal Advection & Currents",tagAr:"نقل الحرارة وتيارات المحيط",noteEn:"Western Boundary Currents & Sea Surface Temperature. The MODIS Sea Surface Temperature patterns observed above are dynamically driven by the powerful oceanic thermal conveyor belts simulated in NASA JPL ECCO-2.",noteAr:"تيارات المحيطات وحرارة سطح البحر. تتطابق وتتأثر درجات حرارة سطح البحر المقاسة عبر MODIS أعلاه بنظام النقل الحراري للتيارات المائية المحاكى في نموذج ECCO-2 التابع لمختبر الدفع النفاث."},water_chlorophyll:{resourceId:"atmospheric-river-3d",tagEn:"Coastal Nutrient Influx",tagAr:"تدفق المغذيات الساحلية",noteEn:"Atmospheric River Landfall & Runoff. Extreme precipitation channeled by atmospheric rivers drives heavy river discharge into coastal basins, fueling phytoplankton blooms and sediment plumes detected by MODIS Aqua Chlorophyll-a.",noteAr:"هطول الأنهار الجوية والجريان السطحي. يؤدي الهطول الغزير للأنهار الجوية إلى تدفقات نهرية عملاقة نحو السواحل، مما يغذي ازدهار العوالق النباتية وترسبات الكلوروفيل المقاسة بقمر MODIS Aqua."},water_turbidity:{resourceId:"atmospheric-river-3d",tagEn:"Runoff Sediment & Plumes",tagAr:"عكارة المياه والسيول الساحلية",noteEn:"Hydrological Sediment Transport. Atmospheric river events induce flash flooding and severe sediment runoff directly visible as optical turbidity in true-color satellite imagery.",noteAr:"نقل الرواسب الهيدرولوجية. تتسبب الأنهار الجوية في سيول جارفة تنقل كميات هائلة من الطمي إلى المياه الساحلية، مسببة العكارة الواضحة في صور الأقمار الصناعية بالألوان الحقيقية."},soil_moisture:{resourceId:"atmospheric-river-3d",tagEn:"Precipitation Influx & Saturation",tagAr:"الهطول وتشبع رطوبة التربة",noteEn:"Atmospheric Moisture Influx to Soil. Massive moisture transport in atmospheric rivers makes landfall to deposit high-volume precipitation, directly driving SMAP surface soil moisture saturation spikes.",noteAr:"تدفق الرطوبة الجوية إلى التربة. يفرغ النهر الجوي كميات مياه ضخمة عند اصطدامه باليابسة، مما يسبب قفزات فورية في تشبع رطوبة التربة السطحية المسجلة عبر قمر SMAP."},soil_ndvi:{resourceId:"antarctic-sea-ice",tagEn:"Global Cryosphere & Biosphere Cycle",tagAr:"الدورة الحيوية والجليدية العالمية",noteEn:"Seasonal Solar & Surface Feedback. Tracks the seasonal pulsation of high-latitude ice and radiative albedo that balances regional continental vegetation greening (NDVI) and growing seasons.",noteAr:"تفاعل الإشعاع السطحي والغطاء النباتي. يوضح التذبذب الموسمي للجليد والوضاءة الإشعاعية المنظمة للمواسم الزراعية ونمو الغطاء النباتي (NDVI)."},soil_lst:{resourceId:"antarctic-sea-ice",tagEn:"Surface Radiative Equilibrium",tagAr:"التوازن الإشعاعي للسطح",noteEn:"Cryospheric Albedo & Surface Temperature. Illustrates the extreme cold thermal end-member of Earth’s surface radiation balance that governs global meridional temperature gradients.",noteAr:"وضاءة الجليد وحرارة السطح. يجسد الحد الأقصى للتبريد الإشعاعي لكوكب الأرض الذي يقود التدرج الحراري بين القطبين وخط الاستواء."},temperature:{resourceId:"night-lights-decade",tagEn:"Anthropogenic Driver & Urban Heat",tagAr:"المحرك البشري والجزر الحرارية",noteEn:"Anthropogenic Electrification & Urban Footprint. NASA Black Marble VIIRS nighttime radiance directly documents a decade of global urbanization and infrastructure expansion, providing the human footprint context behind regional temperature and climate anomalies.",noteAr:"الأثر البشري والتوسع الحضري. توثق بيانات الرخام الأسود VIIRS من ناسا عقداً كاملاً من التوسع العمراني واستهلاك الطاقة، مقدماً التفسير البشري للجزر الحرارية والاتجاهات المناخية المسجلة."}},Hl=(i,e)=>{const t=ms[e]||ms[i];if(t){const n=Tt.find(a=>a.id===t.resourceId);if(n)return n}return Tt[0]},A0=i=>i==="air"?Tt.filter(e=>e.id==="geos-aerosols-2017"||e.id==="dyamond-co2-transport"):i==="water"?Tt.filter(e=>e.id==="perpetual-ocean-2"||e.id==="atmospheric-river-3d"||e.id==="antarctic-sea-ice"):i==="soil"?Tt.filter(e=>e.id==="atmospheric-river-3d"||e.id==="antarctic-sea-ice"||e.id==="night-lights-decade"):i==="temperature"?Tt.filter(e=>e.id==="night-lights-decade"||e.id==="antarctic-sea-ice"||e.id==="dyamond-co2-transport"):Tt;class cd{constructor({onTimeUpdate:e,onPlayStateChange:t,onSpeedChange:n,onEnded:a}){this.videoElement=null,this.duration=0,this.currentTime=0,this.isPlaying=!1,this.playbackRate=1,this.isSeeking=!1,this.rafId=null,this.onTimeUpdate=e||(()=>{}),this.onPlayStateChange=t||(()=>{}),this.onSpeedChange=n||(()=>{}),this.onEnded=a||(()=>{}),this.tick=this.tick.bind(this)}attachVideo(e,t){this.videoElement=e,this.duration=t||0,this.videoElement&&(this.videoElement.playbackRate=this.playbackRate)}detachVideo(){this.pause(),this.videoElement=null,this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null)}play(){this.videoElement&&(this.videoElement.play().catch(()=>{}),this.isPlaying=!0,this.onPlayStateChange(!0),this.startRAF())}pause(){this.videoElement&&this.videoElement.pause(),this.isPlaying=!1,this.onPlayStateChange(!1),this.stopRAF()}togglePlay(){this.isPlaying?this.pause():this.play()}seek(e,t=!0){const n=Math.max(0,Math.min(e,this.duration));this.currentTime=n,this.videoElement&&(this.videoElement.currentTime=n),this.onTimeUpdate(n),t&&!this.isPlaying&&this.videoElement}setSpeed(e){this.playbackRate=e,this.videoElement&&(this.videoElement.playbackRate=e),this.onSpeedChange(e)}startRAF(){this.rafId||(this.rafId=requestAnimationFrame(this.tick))}stopRAF(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null)}tick(){if(this.videoElement&&this.isPlaying){const e=this.videoElement.currentTime;if(this.currentTime=e,this.onTimeUpdate(e),this.videoElement.ended||e>=this.duration){this.pause(),this.onEnded();return}}this.rafId=requestAnimationFrame(this.tick)}}const Zt={getInterpolatedValuesAtTime(i,e){if(!i||!i.graphConfig||!i.graphConfig.series)return{};const t=i.durationSeconds||1,n=Math.max(0,Math.min(e,t)),a={};return i.graphConfig.series.forEach(r=>{const o=r.data||[];if(o.length!==0){if(n<=o[0].timestamp){a[r.key]={currentValue:o[0].y,label:o[0].x,index:0,interpolated:!1};return}if(n>=o[o.length-1].timestamp){const l=o.length-1;a[r.key]={currentValue:o[l].y,label:o[l].x,index:l,interpolated:!1};return}for(let l=0;l<o.length-1;l++){const c=o[l],d=o[l+1];if(n>=c.timestamp&&n<=d.timestamp){const h=d.timestamp-c.timestamp,m=h>0?(n-c.timestamp)/h:0,u=c.y+m*(d.y-c.y);a[r.key]={currentValue:Number(u.toFixed(2)),label:m>.5?d.x:c.x,index:m>.5?l+1:l,interpolated:!0,p1:c,p2:d,factor:m};break}}}}),a},getCurrentMilestone(i,e){if(!i||!i.timePoints||i.timePoints.length===0)return null;let t=i.timePoints[0];for(let n=0;n<i.timePoints.length&&e>=i.timePoints[n].timestamp;n++)t=i.timePoints[n];return t},formatTime(i){if(isNaN(i)||i<0)return"00:00";const e=Math.floor(i/60),t=Math.floor(i%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}},T0=["C3","D3","E3","G3","A3","C4","D4","E4","G4","A4","C5","D5","E5","G5","A5","C6"],Oo={"night-lights-decade":{instrument:"electric_bell",nameEn:"Electric Bell Chime",nameAr:"رنين الجرس الكهربائي",conceptEn:"Urban Electrification & Radiance",conceptAr:"الإشعاع الحضري والكهرباء",iconColor:"#38bdf8"},"geos-aerosols-2017":{instrument:"aerosol_wind",nameEn:"Resonant Wind Synth",nameAr:"رياح رنينية جوية",conceptEn:"Atmospheric Smoke, Dust & Sea Salt Plumes",conceptAr:"سحب الدخان والغبار والرياح الجوية",iconColor:"#f97316"},"perpetual-ocean-2":{instrument:"ocean_flow",nameEn:"Deep Aquatic Pluck",nameAr:"نغمة مائية محيطية",conceptEn:"Ocean Boundary Currents & Heat Advection",conceptAr:"تيارات المحيط العميقة ونقل الحرارة",iconColor:"#06b6d4"},"dyamond-co2-transport":{instrument:"carbon_pulse",nameEn:"Synoptic Gas Pulse",nameAr:"نبض غازات الاحتباس الحراري",conceptEn:"Atmospheric CO₂ Advection & Weather Systems",conceptAr:"حركة ثاني أكسيد الكربون وأنظمة الطقس",iconColor:"#a855f7"},"atmospheric-river-3d":{instrument:"rain_marimba",nameEn:"Precipitation Marimba",nameAr:"ماريمبا الهطول والسيول",conceptEn:"Moisture Vapor Flux & Heavy Rainfall",conceptAr:"تدفق بخار الماء والهطول الغزير",iconColor:"#10b981"},"antarctic-sea-ice":{instrument:"ice_crystal",nameEn:"Polar Glass Crystal",nameAr:"بلورات الجليد القطبية",conceptEn:"Cryospheric Freeze-Melt & Polar Albedo",conceptAr:"تجمد وذوبان الجليد والوضاءة القطبية",iconColor:"#93c5fd"}};function Gi(i,e){var u,g;if(!i||!((g=(u=i.graphConfig)==null?void 0:u.series)!=null&&g[0]))return{percentage:50,frequency:440,noteName:"A4",minY:0,maxY:100};const n=i.graphConfig.series[0].data.map(x=>x.y),a=Math.min(...n),r=Math.max(...n),o=r-a||1,l=typeof e=="number"&&!isNaN(e)?e:a,c=Math.max(0,Math.min(100,Math.round((l-a)/o*100))),d=Math.round(c/100*(ui.length-1)),h=ui[d],m=T0[d];return{percentage:c,frequency:h,noteName:m,minY:a,maxY:r,currentValue:l}}async function Fo(i,e,t=.7){if(t<=0||!await vs())return;const a=xa();if(!a||a.state!=="running")return;const{percentage:r,frequency:o}=Gi(i,e),l=Oo[i.id]||{instrument:"electric_bell"},c=a.currentTime,d=Math.max(.01,Math.min(1,t));switch(l.instrument){case"electric_bell":Wl(a,o,d,c);break;case"aerosol_wind":N0(a,o,d,c);break;case"ocean_flow":w0(a,o,d,c);break;case"carbon_pulse":R0(a,o,d,c);break;case"rain_marimba":C0(a,o,d,c);break;case"ice_crystal":P0(a,o,d,c);break;default:Wl(a,o,d,c);break}}function Wl(i,e,t,n){const a=i.createOscillator(),r=i.createOscillator(),o=i.createGain();a.type="sine",a.frequency.setValueAtTime(e,n),r.type="sine",r.frequency.setValueAtTime(e*2.76,n),o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(t*.7,n+.01),o.gain.exponentialRampToValueAtTime(1e-4,n+.45),a.connect(o),r.connect(o),o.connect(ti()||i.destination),a.start(n),r.start(n),a.stop(n+.5),r.stop(n+.5)}function N0(i,e,t,n){const a=i.createOscillator(),r=i.createBiquadFilter(),o=i.createGain();a.type="sawtooth",a.frequency.setValueAtTime(e,n),r.type="lowpass",r.Q.setValueAtTime(3.5,n),r.frequency.setValueAtTime(Math.min(2500,e*3),n),r.frequency.exponentialRampToValueAtTime(Math.max(100,e*.8),n+.45),o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(t*.55,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+.45),a.connect(r),r.connect(o),o.connect(ti()||i.destination),a.start(n),a.stop(n+.5)}function w0(i,e,t,n){const a=i.createOscillator(),r=i.createOscillator(),o=i.createBiquadFilter(),l=i.createGain();a.type="triangle",a.frequency.setValueAtTime(e,n),r.type="sine",r.frequency.setValueAtTime(e*.5,n),o.type="lowpass",o.frequency.setValueAtTime(e*2.2,n),o.Q.setValueAtTime(2,n),l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(t*.75,n+.012),l.gain.exponentialRampToValueAtTime(1e-4,n+.55),a.connect(o),r.connect(o),o.connect(l),l.connect(ti()||i.destination),a.start(n),r.start(n),a.stop(n+.6),r.stop(n+.6)}function R0(i,e,t,n){const a=i.createOscillator(),r=i.createOscillator(),o=i.createGain();a.type="sine",a.frequency.setValueAtTime(e,n),r.type="sine",r.frequency.setValueAtTime(e*1.5,n),o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(t*.65,n+.04),o.gain.exponentialRampToValueAtTime(1e-4,n+.42),a.connect(o),r.connect(o),o.connect(ti()||i.destination),a.start(n),r.start(n),a.stop(n+.48),r.stop(n+.48)}function C0(i,e,t,n){const a=i.createOscillator(),r=i.createOscillator(),o=i.createGain();a.type="triangle",a.frequency.setValueAtTime(e,n),r.type="sine",r.frequency.setValueAtTime(e*3.8,n),o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(t*.85,n+.004),o.gain.exponentialRampToValueAtTime(1e-4,n+.32),a.connect(o),r.connect(o),o.connect(ti()||i.destination),a.start(n),r.start(n),a.stop(n+.35),r.stop(n+.1)}function P0(i,e,t,n){const a=i.createOscillator(),r=i.createOscillator(),o=i.createBiquadFilter(),l=i.createGain();a.type="sine",a.frequency.setValueAtTime(e,n),r.type="sine",r.frequency.setValueAtTime(e*2,n),o.type="highpass",o.frequency.setValueAtTime(Math.min(800,e*.8),n),l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(t*.6,n+.006),l.gain.exponentialRampToValueAtTime(1e-4,n+.5),a.connect(o),r.connect(o),o.connect(l),l.connect(ti()||i.destination),a.start(n),r.start(n),a.stop(n+.55),r.stop(n+.55)}const ko=({resource:i,currentTime:e,isPlaying:t,playbackSpeed:n,onTogglePlay:a,onVideoAttach:r,isAudioEnabled:o=!0,onToggleAudio:l=()=>{},currentToneInfo:c=null,isPlayingTone:d=!1,lang:h="en"})=>{const m=R.useRef(null),u=R.useRef(null),[g,x]=R.useState(!0),[y,p]=R.useState(!1),[f,S]=R.useState(!1);R.useEffect(()=>{m.current&&(r(m.current,i.durationSeconds),m.current.playbackRate=n),x(!0),p(!1)},[i.id,r]),R.useEffect(()=>{m.current&&(m.current.playbackRate=n)},[n]),R.useEffect(()=>{const v=()=>{S(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",v),()=>document.removeEventListener("fullscreenchange",v)},[]);const E=()=>{u.current&&(document.fullscreenElement?document.exitFullscreen().catch(()=>{}):u.current.requestFullscreen().catch(()=>{}))},_=Zt.getCurrentMilestone(i,e),N=Zt.formatTime(e),T=Zt.formatTime(i.durationSeconds);return s.jsxs("div",{ref:u,className:`eic-visual-card ${f?"fullscreen-mode":""}`,"aria-label":"NASA Scientific Visualization Player",children:[s.jsxs("div",{className:"eic-visual-header",children:[s.jsxs("div",{className:"eic-visual-title-box",children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag",children:[s.jsx(gr,{className:"icon-xs","aria-hidden":"true"}),"ORIGINAL NASA SVS"]}),s.jsxs("span",{className:"eic-id-tag",children:["ID #",i.svsId]})]}),s.jsx("h3",{className:"eic-visual-title",children:h==="ar"?i.titleAr:i.titleEn})]}),s.jsxs("div",{className:"eic-visual-header-actions",children:[s.jsxs("a",{href:i.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-icon-link",title:h==="ar"?"عرض على موقع ناسا الرسمي":"View on official NASA SVS page",children:[s.jsx(Hn,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:"NASA SVS"})]}),s.jsx("button",{type:"button",className:"eic-icon-btn",onClick:E,title:f?h==="ar"?"خروج من وضع ملء الشاشة":"Exit Fullscreen":h==="ar"?"ملء الشاشة":"Fullscreen","aria-label":f?"Exit Fullscreen":"Enter Fullscreen",children:f?s.jsx(Bd,{className:"icon-xs"}):s.jsx(Fd,{className:"icon-xs"})})]})]}),s.jsxs("div",{className:"eic-video-viewport",children:[g&&!y&&s.jsxs("div",{className:"eic-video-loading-overlay",children:[s.jsx(ca,{className:"icon spin","aria-hidden":"true"}),s.jsx("span",{children:h==="ar"?"جاري تحميل محاكاة ناسا الأصلية...":"Streaming official NASA visualization..."})]}),y&&s.jsxs("div",{className:"eic-video-error-overlay",children:[s.jsx(Es,{className:"icon error-icon","aria-hidden":"true"}),s.jsx("p",{children:h==="ar"?"تعذر بث الفيديو مباشرة من خادم ناسا (قد يتطلب اتصالاً مباشراً بدون حظر).":"Unable to stream direct video from NASA SVS server."}),s.jsx("a",{href:i.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-btn-retry",children:h==="ar"?"فتح المحاكاة في صفحة ناسا SVS":"Open in NASA SVS Portal"})]}),s.jsx("video",{ref:m,src:i.videoUrl,poster:i.previewImage,preload:"metadata",playsInline:!0,className:"eic-native-video",onLoadedData:()=>x(!1),onWaiting:()=>x(!0),onPlaying:()=>x(!1),onError:()=>{x(!1),p(!0)},onClick:a}),c&&s.jsxs("button",{type:"button",className:`eic-video-tone-pill ${d?"ping":""}`,onClick:l,title:o?h==="ar"?"انقر لكتم النغمات الصوتية":"Click to mute visual sonification":h==="ar"?"انقر لتفعيل النغمات الصوتية":"Click to enable visual sonification","aria-label":"Toggle visual sonification tone",children:[o?s.jsx(cn,{className:"icon-xxs text-cyan"}):s.jsx(Jn,{className:"icon-xxs text-rose"}),s.jsxs("span",{children:[c.percentage,"% • ",c.noteName]})]}),_&&s.jsxs("div",{className:"eic-milestone-overlay animate-fade-in",children:[s.jsx("span",{className:"eic-milestone-dot"}),s.jsx("span",{className:"eic-milestone-text",children:_.label||_.date})]}),!t&&!g&&!y&&s.jsx("button",{type:"button",className:"eic-center-play-btn",onClick:a,"aria-label":"Play NASA Visualization",children:s.jsx(Pn,{className:"icon-lg"})}),s.jsxs("div",{className:"eic-time-pill",children:[s.jsx("span",{children:N}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{children:T})]})]}),s.jsx("div",{className:"eic-visual-caption",children:s.jsx("p",{className:"eic-caption-text",children:h==="ar"?i.shortDescriptionAr:i.shortDescriptionEn})})]})};co.register(uo,ho,fo,po,mo,go,xo,vo);const Bo=({resource:i,currentTime:e,onSeek:t,lang:n="en",theme:a="dark"})=>{var y,p;const r=R.useRef(null),o=a!=="light",l=R.useMemo(()=>Zt.getInterpolatedValuesAtTime(i,e),[i,e]),c=((y=i.graphConfig)==null?void 0:y.series)||[],d=c[0],h=d?l[d.key]:null,m=R.useMemo(()=>{if(!d||!d.data)return{labels:[],datasets:[]};const f=d.data.map(E=>E.x),S=c.map(E=>({label:n==="ar"?E.nameAr:E.nameEn,data:E.data.map(_=>_.y),borderColor:E.color,backgroundColor:E.fill?`${E.color}25`:"transparent",borderWidth:2.5,pointRadius:_=>{const N=_.dataIndex,T=E.data[N];return T&&Math.abs(T.timestamp-e)<i.durationSeconds/(E.data.length*2)?7:4},pointHoverRadius:8,pointBackgroundColor:E.color,pointBorderColor:o?"#0f172a":"#ffffff",pointBorderWidth:2,tension:.35,fill:E.fill}));return{labels:f,datasets:S}},[c,d,n,e,i.durationSeconds,o]),u=R.useMemo(()=>({id:"eicVerticalCursor",afterDraw:f=>{if(!d||!d.data||d.data.length===0)return;const S=f.ctx,E=f.getDatasetMeta(0);if(!E||!E.data||E.data.length===0)return;const _=i.durationSeconds||1,N=Math.max(0,Math.min(e,_)),T=d.data,v=T[0].timestamp,L=T[T.length-1].timestamp-v||1,P=E.data[0].x,k=E.data[E.data.length-1].x-P,$=P+(N-v)/L*k,I=f.chartArea.top,G=f.chartArea.bottom;S.save(),S.beginPath(),S.strokeStyle="#38bdf8",S.lineWidth=2,S.setLineDash([4,4]),S.moveTo($,I),S.lineTo($,G),S.stroke(),S.fillStyle="#38bdf8",S.beginPath(),S.arc($,I+2,4,0,Math.PI*2),S.fill(),S.restore()}}),[d,e,i.durationSeconds]),g=f=>{const S=r.current;if(!S||!d||!d.data)return;const E=S.getElementsAtEventForMode(f,"nearest",{intersect:!1},!0);if(E.length>0){const _=E[0].index,N=d.data[_];N&&typeof N.timestamp=="number"&&t(N.timestamp)}},x=R.useMemo(()=>{var E;const f=o?"#94a3b8":"#475569",S=o?"rgba(148, 163, 184, 0.08)":"rgba(148, 163, 184, 0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:200},plugins:{legend:{display:!0,position:"top",labels:{color:f,font:{size:12,family:"sans-serif"},boxWidth:14,usePointStyle:!0}},tooltip:{backgroundColor:o?"rgba(15, 23, 42, 0.95)":"rgba(255, 255, 255, 0.95)",titleColor:o?"#f8fafc":"#0f172a",bodyColor:o?"#94a3b8":"#334155",borderColor:o?"#334155":"#cbd5e1",borderWidth:1,padding:10,callbacks:{afterBody:_=>{var b;const N=(b=_[0])==null?void 0:b.raw,T=Gi(i,N),v=T.percentage<=33?n==="ar"?"نغمة منخفضة (C3-G3)":"Low Tone (C3-G3)":T.percentage<=66?n==="ar"?"نغمة معتدلة (A3-E5)":"Mid Tone (A3-E5)":n==="ar"?"نغمة مرتفعة (G5-C6)":"High Tone (G5-C6)";return[`${n==="ar"?"النسبة والنغمة":"Intensity & Tone"}: ${T.percentage}% • ${T.noteName} (${Math.round(T.frequency)} Hz) [${v}]`,n==="ar"?"(انقر فوق أي نقطة للانتقال إلى وقتها وسماع نغمتها)":"(Click any point to jump video & audition tone)"]}}}},scales:{x:{ticks:{color:f,font:{size:11}},grid:{color:S}},y:{ticks:{color:f,font:{size:11}},grid:{color:S},title:{display:!0,text:((E=i.graphConfig)==null?void 0:E.yAxisLabel)||i.unitShort,color:f,font:{size:12,weight:"bold"}}}}}},[o,n,(p=i.graphConfig)==null?void 0:p.yAxisLabel,i.unitShort]);return s.jsxs("div",{className:"eic-graph-card","aria-label":"Scientific Graph Display",children:[s.jsxs("div",{className:"eic-graph-header",children:[s.jsxs("div",{className:"eic-graph-title-group",children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag tag-graph",children:[s.jsx(_s,{className:"icon-xs","aria-hidden":"true"}),"SYNCHRONIZED SCIENTIFIC DATA"]}),s.jsx("span",{className:"eic-id-tag",children:i.datasetName.split("(")[0]})]}),s.jsx("h3",{className:"eic-graph-title",children:i.primaryVariable})]}),h&&(()=>{const f=Gi(i,h.currentValue);return s.jsxs("div",{className:"eic-live-reading-box animate-pulse-glow",children:[s.jsx("span",{className:"eic-live-reading-label",children:n==="ar"?"القيمة المتزامنة الآن":"Active Reading"}),s.jsxs("div",{className:"eic-live-reading-val",children:[s.jsx("span",{className:"value-num",children:h.currentValue}),s.jsx("span",{className:"value-unit",children:i.unitShort})]}),s.jsxs("div",{className:"eic-graph-tone-tag",children:[s.jsx(Kn,{className:"icon-xxs"}),s.jsxs("span",{children:[f.percentage,"% • ",f.noteName," (",Math.round(f.frequency),"Hz)"]})]})]})})()]}),s.jsx("div",{className:"eic-chart-viewport",onClick:g,children:s.jsx(_o,{ref:r,data:m,options:x,plugins:[u]})}),s.jsxs("div",{className:"eic-graph-footer-hint",children:[s.jsx(Ui,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:n==="ar"?"انقر على أي نقطة بيانية في المنحنى للانتقال المباشر إلى الإطار الزمني المقابل في محاكاة ناسا.":"Click any data point along the curve to seek the NASA animation directly to that timestamp."})]})]})},Go=({resource:i,lang:e="en"})=>{const[t,n]=R.useState(!0);return s.jsxs("section",{className:"eic-info-card","aria-label":"Scientific Metadata and Source Attributions",children:[s.jsxs("div",{className:"eic-info-header",onClick:()=>n(!t),role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n(!t))},"aria-expanded":t,children:[s.jsxs("div",{className:"eic-info-header-title",children:[s.jsx(sc,{className:"icon-sm text-cyan","aria-hidden":"true"}),s.jsx("h3",{className:"eic-info-heading",children:e==="ar"?"التفاصيل العلمية والبيانات المعتمدة":"Scientific Information & NASA Attributions"}),s.jsxs("span",{className:"eic-svs-badge-sm",children:["SVS #",i.svsId]})]}),s.jsx("button",{type:"button",className:"eic-expand-btn","aria-label":t?"Collapse scientific information":"Expand scientific information",children:t?s.jsx(ys,{className:"icon-sm"}):s.jsx(Ss,{className:"icon-sm"})})]}),t&&s.jsxs("div",{className:"eic-info-content animate-fade-in",children:[s.jsxs("div",{className:"eic-metadata-grid",children:[s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(la,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الظاهرة العلمية":"Scientific Phenomenon"]}),s.jsx("p",{className:"meta-value",children:e==="ar"?i.phenomenonAr:i.phenomenon})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(bo,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"اسم مجموعة البيانات":"Dataset Name"]}),s.jsx("p",{className:"meta-value font-mono-sm",children:i.datasetName})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(mi,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الجهة الموفرة للبيانات":"Data Provider"]}),s.jsx("p",{className:"meta-value",children:i.dataProvider})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(nc,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الأداة أو النموذج الفضائي":"Instrument / Model"]}),s.jsx("p",{className:"meta-value",children:i.instrument})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(tc,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"وحدات القياس":"Measurement Units"]}),s.jsx("p",{className:"meta-value",children:i.unitEn})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(rs,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"التغطية الزمنية":"Temporal Coverage"]}),s.jsx("p",{className:"meta-value",children:i.temporalCoverage})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(la,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"التغطية الجغرافية":"Geographic Coverage"]}),s.jsx("p",{className:"meta-value",children:i.geographicCoverage})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(Jl,{className:"icon-xs text-emerald","aria-hidden":"true"}),e==="ar"?"نوع ومنهجية البيانات":"Methodology & Type"]}),s.jsx("p",{className:"meta-value",children:i.dataType})]})]}),s.jsxs("div",{className:"eic-methodology-box",children:[s.jsx("h4",{className:"methodology-title",children:e==="ar"?"منهجية الرصد والنمذجة العلمية":"Data Collection & Modeling Methodology"}),s.jsx("p",{className:"methodology-text",children:i.dataCollectionMethod})]}),s.jsxs("div",{className:"eic-info-footer-links",children:[s.jsxs("a",{href:i.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-primary-link-btn",children:[s.jsx("span",{children:e==="ar"?"صفحة المشروع الأصلية في ناسا SVS":"Official NASA SVS Project Entry"}),s.jsx(Hn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://www.nasa.gov/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"eic-secondary-link-btn",children:[s.jsx("span",{children:e==="ar"?"بوابة مركز معلومات الأرض":"NASA Earth Information Center Portal"}),s.jsx(Hn,{className:"icon-xs","aria-hidden":"true"})]})]})]})]})};function I0({isPlaying:i=!1,isDark:e=!0,accentColor:t="#38bdf8"}){const n=R.useRef(null),a=R.useRef(null),r=R.useRef(null);return R.useEffect(()=>{const o=n.current,l=a.current;if(!o||!l)return;const c=o.getContext("2d"),d=l.getContext("2d"),h=Math.min(window.devicePixelRatio||1,2),m=()=>{var p;const y=((p=o.parentElement)==null?void 0:p.clientWidth)||400;o.width=y*h,o.height=100*h,l.width=y*h,l.height=100*h};m(),window.addEventListener("resize",m);const u=new Uint8Array(256),g=new Uint8Array(128),x=()=>{r.current=requestAnimationFrame(x);const y=ti(),p=o.width,f=o.height;c.clearRect(0,0,p,f),c.strokeStyle=e?"rgba(56, 189, 248, 0.05)":"rgba(2, 132, 199, 0.06)",c.lineWidth=1*h,c.beginPath(),c.moveTo(0,f*.5),c.lineTo(p,f*.5),c.stroke(),y?y.getByteTimeDomainData(u):u.fill(128),c.beginPath(),c.lineWidth=2.5*h,c.strokeStyle=t,c.shadowBlur=i?14:4,c.shadowColor=t;const S=p/(u.length-1);let E=0;for(let L=0;L<u.length;L++){const U=u[L]/128*f/2;L===0?c.moveTo(E,U):c.lineTo(E,U),E+=S}c.stroke(),c.shadowBlur=0,d.clearRect(0,0,p,f),y?y.getByteFrequencyData(g):g.fill(0);const _=32,N=4*h,T=N*(_-1),v=Math.max(3*h,(p-T)/_),b=d.createLinearGradient(0,f,0,0);b.addColorStop(0,t),b.addColorStop(.7,"#818cf8"),b.addColorStop(1,"#c084fc");for(let L=0;L<_;L++){const P=Math.floor(L/_*(g.length*.75)),U=g[P]||0,k=i?4*h:2*h,$=Math.max(k,U/255*f*.88),I=L*(v+N),G=f-$;d.fillStyle=b,d.shadowBlur=i&&U>10?8:0,d.shadowColor=t,d.beginPath(),d.roundRect?d.roundRect(I,G,v,$,[3*h,3*h,0,0]):d.rect(I,G,v,$),d.fill()}d.shadowBlur=0};return x(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("resize",m)}},[i,e,t]),s.jsxs("div",{className:"audio-visualizer-dual-pane",children:[s.jsxs("div",{className:"vis-subcard",children:[s.jsxs("div",{className:"vis-subcard-header",children:[s.jsxs("div",{className:"vis-title-pill",children:[s.jsx("span",{className:"live-dot",style:{opacity:i?1:.4}}),s.jsx("span",{children:"REAL-TIME OSCILLOSCOPE WAVEFORM"})]}),s.jsx("span",{className:"vis-tag",children:"TIME-DOMAIN"})]}),s.jsx("div",{className:"vis-canvas-box",children:s.jsx("canvas",{ref:n,className:"vis-canvas-element"})})]}),s.jsxs("div",{className:"vis-subcard",children:[s.jsxs("div",{className:"vis-subcard-header",children:[s.jsxs("div",{className:"vis-title-pill",children:[s.jsx("span",{className:"live-dot",style:{opacity:i?1:.4}}),s.jsx("span",{children:"FFT FREQUENCY SPECTRUM ANALYZER"})]}),s.jsx("span",{className:"vis-tag",children:"32-BAND FFT"})]}),s.jsx("div",{className:"vis-canvas-box",children:s.jsx("canvas",{ref:a,className:"vis-canvas-element"})})]})]})}function L0({lang:i="en",isDark:e=!0,selectedDatasetId:t="night-lights-decade",onDatasetChange:n}){var ie,ye,De,H,he,ge;const a=i==="ar",[r,o]=R.useState(()=>({aerosols:"geos-aerosols-2017",carbon:"dyamond-co2-transport",ocean:"perpetual-ocean-2",precip:"atmospheric-river-3d",nightlights:"night-lights-decade",ice:"antarctic-sea-ice"})[t]||t||Tt[0].id),l=ld(r)||Tt[0];R.useEffect(()=>{if(t){const Y={aerosols:"geos-aerosols-2017",carbon:"dyamond-co2-transport",ocean:"perpetual-ocean-2",precip:"atmospheric-river-3d",nightlights:"night-lights-decade",ice:"antarctic-sea-ice"}[t]||t;Tt.some(Ae=>Ae.id===Y)&&Y!==r&&I(Y)}},[t]);const[c,d]=R.useState(0),[h,m]=R.useState(!1),[u,g]=R.useState(1),[x,y]=R.useState(.8),[p,f]=R.useState(!1),[S,E]=R.useState(!0),[_,N]=R.useState(!1),T=R.useRef(null),v=R.useRef(-1),b=R.useMemo(()=>Zt.getInterpolatedValuesAtTime(l,c),[l,c]),L=(ye=(ie=l.graphConfig)==null?void 0:ie.series)==null?void 0:ye[0],P=L?b[L.key]:null,U=P&&typeof P=="object"?P.currentValue!==void 0?P.currentValue:P.y:P,k=R.useMemo(()=>Gi(l,U),[l,U]),$=R.useCallback(ce=>{const Y=p?0:x;if(Y<=0)return;const Ae=Zt.getInterpolatedValuesAtTime(l,ce),_e=L?Ae[L.key]:null,we=_e&&typeof _e=="object"?_e.currentValue??_e.y:_e;we!==null&&!isNaN(we)&&Fo(l,we,Y)},[l,L,p,x]);T.current||(T.current=new cd({onTimeUpdate:ce=>{d(ce),Math.abs(ce-v.current)>=.6&&(v.current=ce,$(ce))},onPlayStateChange:ce=>m(ce),onSpeedChange:ce=>g(ce),onEnded:()=>{S&&T.current?(T.current.seek(0),T.current.play()):m(!1)}}));const I=ce=>{ce!==r&&(T.current&&(T.current.pause(),T.current.seek(0)),d(0),v.current=-1,m(!1),o(ce),n==null||n(ce))},G=R.useCallback((ce,Y)=>{T.current&&T.current.attachVideo(ce,Y)},[]),Q=async()=>{await vs(),T.current&&(T.current.togglePlay(),h||$(c))},j=ce=>{T.current&&T.current.seek(ce),d(ce),v.current=ce,$(ce)},oe=ce=>{T.current&&T.current.setSpeed(ce)},V=()=>{j(0),h&&T.current&&T.current.pause()},te=Oo[l.id]||{nameEn:"Acoustic Synthesizer",nameAr:"سنثسايزر صوتي"};return s.jsxs("section",{id:"studio",className:"studio-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:a?"المرئيات الأصلية والرسوم البيانية والصوت":"NASA VISUALS + GRAPHS + ACOUSTICS"}),s.jsx("h2",{className:"section-title",children:a?"استوديو الصوتيات والمرئيات المتزامنة":"Sonification Studio"}),s.jsx("p",{className:"section-subtitle",children:a?"مشاهدة محاكاة الحواسيب الفائقة لوكالة ناسا جنباً إلى جنب مع الرسوم البيانية العلمية والصوتيات في الوقت الفعلي":"Explore original NASA SVS supercomputer animations side-by-side with synchronized scientific graphs and genuine audio sonification."})]}),s.jsxs("div",{className:"studio-unified-card",children:[s.jsx("div",{className:"studio-datasets-pill-bar",role:"tablist","aria-label":"NASA Scientific Datasets",children:Tt.map(ce=>{var Ae,_e,we;const Y=ce.id===r;return s.jsxs("button",{role:"tab","aria-selected":Y,onClick:()=>I(ce.id),className:`studio-dataset-pill ${Y?"active":""}`,children:[s.jsx("span",{className:"pill-dot",style:{backgroundColor:((we=(_e=(Ae=ce.graphConfig)==null?void 0:Ae.series)==null?void 0:_e[0])==null?void 0:we.color)||"#38bdf8"}}),s.jsx("span",{className:"pill-name",children:a?ce.titleAr:ce.titleEn}),s.jsxs("span",{className:"pill-tag",children:["SVS #",ce.svsId]})]},ce.id)})}),s.jsxs("div",{className:"studio-side-by-side-stage",children:[s.jsx("div",{className:"studio-visual-column",children:s.jsx(ko,{resource:l,currentTime:c,isPlaying:h,playbackSpeed:u,onTogglePlay:Q,onVideoAttach:G,lang:i})}),s.jsx("div",{className:"studio-graph-column",children:s.jsx(Bo,{resource:l,currentTime:c,onSeek:j,lang:i,theme:e?"dark":"light"})})]}),s.jsxs("div",{className:"studio-master-controls-bar",children:[s.jsxs("div",{className:"master-transport-group",children:[s.jsxs("button",{onClick:Q,className:`master-play-btn ${h?"is-playing":""}`,title:h?"Pause":"Play synchronized visual, graph & sound","aria-label":h?"Pause":"Play",children:[h?s.jsx(Ms,{size:20,fill:"currentColor"}):s.jsx(Pn,{size:20,fill:"currentColor"}),s.jsx("span",{children:h?a?"إيقاف مؤقت":"Pause":a?"تشغيل الكل":"Play Sync"})]}),s.jsx("button",{onClick:V,className:"master-icon-btn",title:"Reset Timeline to Beginning","aria-label":"Reset Timeline",children:s.jsx(oc,{size:16})})]}),s.jsxs("div",{className:"master-scrubber-group",children:[s.jsxs("div",{className:"scrubber-labels-row",children:[s.jsx("span",{className:"scrubber-current-time",children:Zt.formatTime(c)}),s.jsx("span",{className:"scrubber-milestone-text",children:((De=Zt.getCurrentMilestone(l,c))==null?void 0:De.label)||(a?"تزامن علمي":"Synchronized Timeline")}),s.jsx("span",{className:"scrubber-duration-time",children:Zt.formatTime(l.durationSeconds)})]}),s.jsx("input",{type:"range",min:"0",max:l.durationSeconds,step:"0.1",value:c,onChange:ce=>j(parseFloat(ce.target.value)),className:"studio-scrubber-slider","aria-label":"Synchronized Timeline Scrubber"})]}),s.jsxs("div",{className:"master-aux-group",children:[s.jsx("div",{className:"aux-speed-pills",children:[.5,1,1.5,2].map(ce=>s.jsxs("button",{onClick:()=>oe(ce),className:`aux-speed-btn ${u===ce?"active":""}`,children:[ce,"x"]},ce))}),s.jsxs("div",{className:"aux-volume-wrapper",children:[s.jsx("button",{onClick:()=>f(!p),className:"aux-vol-btn",title:p?"Unmute":"Mute","aria-label":"Toggle Mute",children:p||x===0?s.jsx(Jn,{size:16}):s.jsx(cn,{size:16})}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:p?0:x,onChange:ce=>{y(parseFloat(ce.target.value)),p&&f(!1)},className:"aux-volume-slider","aria-label":"Master Volume"})]})]})]}),s.jsxs("div",{className:"studio-bottom-stage-grid",children:[s.jsx("div",{className:"studio-visualizer-card",children:s.jsx(I0,{isPlaying:h,isDark:e,accentColor:((ge=(he=(H=l.graphConfig)==null?void 0:H.series)==null?void 0:he[0])==null?void 0:ge.color)||"#38bdf8"})}),s.jsxs("div",{className:"studio-telemetry-hud-card",children:[s.jsxs("div",{className:"hud-card-header",children:[s.jsx("span",{className:"hud-header-eyebrow",children:a?"المؤشرات الحيوية للصوت":"LIVE ACOUSTIC TELEMETRY"}),s.jsxs("span",{className:"hud-live-tag",children:[s.jsx("span",{className:"pulse-dot"}),s.jsx("span",{children:h?"ACTIVE SYNTH":"IDLE"})]})]}),s.jsxs("div",{className:"hud-metrics-row",children:[s.jsxs("div",{className:"hud-metric-box",children:[s.jsx("span",{className:"lbl",children:a?"التردد الصوتي":"PITCH FREQUENCY"}),s.jsx("span",{className:"val highlight",children:k.frequency?`${Math.round(k.frequency)} Hz`:"---"}),s.jsx("span",{className:"sub",children:k.noteName||"Pentatonic Note"})]}),s.jsxs("div",{className:"hud-metric-box",children:[s.jsx("span",{className:"lbl",children:a?"القيمة المرصودة":"CURRENT READING"}),s.jsx("span",{className:"val cyan",children:U!==null?`${U} ${l.unitShort||""}`:"---"}),s.jsx("span",{className:"sub",children:l.unitEn||l.primaryVariable})]})]}),s.jsxs("div",{className:"hud-instrument-pill",children:[s.jsx("span",{className:"inst-lbl",children:a?"جرس الآلة الفيزيائي:":"Acoustic Timbre:"}),s.jsx("span",{className:"inst-val",children:a?te.nameAr:te.nameEn})]})]})]}),s.jsxs("div",{className:"studio-metadata-accordion",children:[s.jsxs("button",{onClick:()=>N(!_),className:"metadata-toggle-btn",children:[s.jsxs("div",{className:"toggle-left",children:[s.jsx(Ui,{size:16}),s.jsx("span",{children:a?"عرض التوثيق العلمي وبيانات ناسا المعتمدة":"View Authoritative Scientific Metadata & NASA Sources"}),s.jsxs("span",{className:"svs-tag",children:["SVS #",l.svsId]})]}),_?s.jsx(ys,{size:16}):s.jsx(Ss,{size:16})]}),_&&s.jsx("div",{className:"metadata-expanded-content",children:s.jsx(Go,{resource:l,lang:i})})]})]})]})}function D0({lang:i="en"}){const e=i==="ar",[t,n]=R.useState(0),[a,r]=R.useState(null),o=[{id:"air-contrast",title:e?"مقارنة نقاء الهواء: القطب الشمالي ضد مركز صناعي":"Air Quality: Pristine Arctic vs Industrial Hub",desc:e?"استمع إلى الفرق الصوتي بين هواء القطب النقي ذو الهباء المنخفض، مقابل الكثافة العالية للتلوث الصناعي والعواصف الغبارية.":"Contrast clean background atmosphere against extreme particulate loading from heavy industry and dust storms.",slotA:{title:e?"القطب الشمالي النقي (AOD 0.06)":"Pristine Arctic (AOD 0.06)",desc:e?"تردد خافت منخفض (C3 ~ 131 Hz) يعكس صفاء الهواء.":"Deep low frequency (C3 ~ 131 Hz) indicating clean atmospheric transparency.",resourceId:"geos-aerosols-2017",val:.06},slotB:{title:e?"مركز صناعي ملوث (AOD 0.95)":"Dense Industrial Hub (AOD 0.95)",desc:e?"تردد حاد مرتفع (C6 ~ 1047 Hz) يعكس حجب الضوء واحتجاز الملوثات.":"Soaring high frequency (C6 ~ 1047 Hz) signaling severe aerosol optical depth.",resourceId:"geos-aerosols-2017",val:.95}},{id:"co2-decade",title:e?"تراكم ثاني أكسيد الكربون: عقد من الانبعاثات":"Carbon Dioxide: 2012 Baseline vs 2023 Modern",desc:e?"لاحظ ارتفاع طبقة الصوت الإجمالية الناتجة عن تراكم أكثر من 25 جزء في المليون من غازات الاحتباس الحراري عبر عقد من الزمن.":"Notice the distinct upward pitch shift driven by 25+ ppm of atmospheric CO₂ accumulation over a decade.",slotA:{title:e?"خط الأساس لعام 2012 (393.8 ppm)":"Year 2012 Baseline (393.8 ppm)",desc:e?"نغمة قرار دافئة ومستقرة نسبياً.":"Warm foundational pitch in the lower-mid register.",resourceId:"dyamond-co2-transport",val:393.8},slotB:{title:e?"المستوى المسجل لعام 2023 (421.3 ppm)":"Year 2023 Record (421.3 ppm)",desc:e?"طبقة نغمية أكثر حدة مع رنين مضاعف يعكس الطاقة المحتبسة.":"Higher register with energized harmonics reflecting amplified radiative forcing.",resourceId:"dyamond-co2-transport",val:421.3}},{id:"ocean-thermal",title:e?"تيارات المحيط: المياه القطبية مقابل تيار الخليج الدافئ":"Ocean Thermal: Polar Waters vs Gulf Stream Current",desc:e?"استمع إلى الفرق في الطاقة الحركية ودرجة الحرارة بين المسطحات المائية القطبية الباردة والتيارات الاستوائية السريعة.":"Experience the kinetic energy and thermal variance between subpolar gyres and the roaring tropical Gulf Stream.",slotA:{title:e?"مياه القطب الباردة (1.2°C)":"Polar Subpolar Water (1.2°C)",desc:e?"نغمة بحرية عميقة وبطيئة تعكس الخمول الحراري.":"Sub-bass aquatic thud indicating near-freezing thermal inertia.",resourceId:"perpetual-ocean-2",val:1.2},slotB:{title:e?"تيار الخليج الدافئ (27.8°C)":"Warm Gulf Stream Core (27.8°C)",desc:e?"إيقاع ماريمبا سريع ومشرق يعبر عن سرعة تدفق الحرارة.":"Bright, agile aquatic resonance reflecting massive thermal convection.",resourceId:"perpetual-ocean-2",val:27.8}}],l=o[t],c=async d=>{const h=d==="A"?l.slotA:l.slotB,m=Tt.find(u=>u.id===h.resourceId)||Tt[0];await vs(),r(d),Fo(m,h.val,.85),setTimeout(()=>{r(null)},600)};return s.jsxs("section",{id:"discover",className:"discover-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:e?"دليل الإدراك والتحليل":"DECODING GUIDE"}),s.jsx("h2",{className:"section-title",children:e?"اكتشف ما تستمع إليه":"Discover What You Are Hearing"}),s.jsx("p",{className:"section-subtitle",children:e?"كيف تقرأ الأذن البشرية أنماط الكوكب المناخية؟ دليل فك شفرة الترددات والجرس الصوتي":"Unlocking the scientific meaning behind acoustics: how frequency, timbre, and cadence encode Earth observations."})]}),s.jsxs("div",{className:"mapping-principles-grid",children:[s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"01"}),s.jsx("h3",{className:"principle-title",children:e?"طبقة الصوت (التردد Hz)":"Pitch & Frequency"}),s.jsx("p",{className:"principle-text",children:e?"تتوافق شدة القياس مباشرة مع التردد: كلما ارتفعت درجات الحرارة أو زاد تركيز ثاني أكسيد الكربون أو تكاثف التلوث، ارتفعت طبقة الصوت إلى نغمات أكثر حدة.":"Direct proportional relationship: higher temperatures, thicker aerosols, or elevated ppm concentrations trigger higher acoustic frequencies in Hertz."}),s.jsx("div",{className:"principle-tag",children:"LOW VAL = BASS • HIGH VAL = TREBLE"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"02"}),s.jsx("h3",{className:"principle-title",children:e?"جرس الآلة الفيزيائي":"Acoustic Timbre"}),s.jsx("p",{className:"principle-text",children:e?"تمتلك كل ظاهرة هوية صوتية خاصة: الرياح للهباء الجوي، الماريمبا المائية للتيارات البحرية، والأجراس الزجاجية النقية لصفائح الجليد القطبي.":"Each domain possesses an acoustic identity: resonant wind for aerosols, percussive fluid drops for rainfall, and crystalline bells for polar sea ice."}),s.jsx("div",{className:"principle-tag",children:"PHYSICAL PHENOMENON TIMBRES"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"03"}),s.jsx("h3",{className:"principle-title",children:e?"الأنماط والدورات السنوية":"Seasonal Rhythms"}),s.jsx("p",{className:"principle-text",children:e?"تظهر الدورات الموسمية بوضوح: يلاحظ المستمع نغمات منخفضة في فصل الصيف مع امتصاص الغابات للكربون، ونغمات صاعدة في الشتاء مع تراجع التمثيل الضوئي.":"Annual cycles produce recognizable waves: hear the dip during Northern Hemisphere summer photosynthesis and the peak during winter dormancy."}),s.jsx("div",{className:"principle-tag",children:"BIOSPHERE BREATHING"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"04"}),s.jsx("h3",{className:"principle-title",children:e?"المؤشرات الشاذة والقصوى":"Anomalies & Disruption"}),s.jsx("p",{className:"principle-text",children:e?"القفزات النغمية الحادة غير المتوقعة تدل فوراً على حرائق غابات مفاجئة، عواصف رملية، أو انخفاض ملحوظ كالذي حدث أثناء فترات الإغلاق في 2020.":"Abrupt sonic leaps immediately signal anomalies: sudden wildfire smoke outbreaks, atmospheric river landfalls, or the noticeable 2020 pandemic dip."}),s.jsx("div",{className:"principle-tag",children:"INSTANT EAR DETECTION"})]})]}),s.jsxs("div",{className:"comparison-module-card",children:[s.jsxs("div",{className:"comp-header",children:[s.jsxs("div",{className:"comp-title-group",children:[s.jsx(Nd,{size:20,className:"comp-icon"}),s.jsx("h3",{className:"comp-title",children:e?"مختبر المقارنة السمعية التفاعلي":"Interactive Acoustic Comparison Lab"})]}),s.jsx("span",{className:"comp-badge",children:e?"مقارنة بيئية فورية":"DUAL AUDITION"})]}),s.jsx("p",{className:"comp-desc",children:e?"اختر إحدى المقارنات العلمية ثم استمع للعينتين لتختبر بنفسك كيف تبدو الظروف البيئية المختلفة في العالم الحقيقي.":"Select a scientific scenario and listen to both samples to experience how contrasting environmental states produce distinct acoustic signatures."}),s.jsx("div",{className:"comp-tabs-bar",children:o.map((d,h)=>s.jsx("button",{onClick:()=>{n(h),r(null)},className:`comp-tab-btn ${t===h?"active":""}`,children:d.title},d.id))}),s.jsxs("div",{className:"comp-slots-grid",children:[s.jsxs("div",{className:`comp-slot-card ${a==="A"?"is-sounding":""}`,children:[s.jsx("div",{className:"slot-badge slot-a",children:"SAMPLE A"}),s.jsx("h4",{className:"slot-title",children:l.slotA.title}),s.jsx("p",{className:"slot-desc",children:l.slotA.desc}),s.jsxs("button",{onClick:()=>c("A"),className:"slot-audition-btn",children:[a==="A"?s.jsx(cn,{size:18,className:"pulse-icon"}):s.jsx(Pn,{size:18,fill:"currentColor"}),s.jsx("span",{children:e?"استمع إلى العينة (أ)":"Audition Sample A"})]})]}),s.jsx("div",{className:"comp-slots-vs",children:s.jsx("span",{className:"vs-circle",children:"VS"})}),s.jsxs("div",{className:`comp-slot-card ${a==="B"?"is-sounding":""}`,children:[s.jsx("div",{className:"slot-badge slot-b",children:"SAMPLE B"}),s.jsx("h4",{className:"slot-title",children:l.slotB.title}),s.jsx("p",{className:"slot-desc",children:l.slotB.desc}),s.jsxs("button",{onClick:()=>c("B"),className:"slot-audition-btn",children:[a==="B"?s.jsx(cn,{size:18,className:"pulse-icon"}):s.jsx(Pn,{size:18,fill:"currentColor"}),s.jsx("span",{children:e?"استمع إلى العينة (ب)":"Audition Sample B"})]})]})]})]})]})}function U0({lang:i="en"}){const e=i==="ar",t=[{name:"NASA Earth Information Center (EIC)",nameAr:"مركز معلومات الأرض التابع لناسا",desc:"Interactive climate exhibits, physical visualizations, and Earth systems data.",url:"https://www.nasa.gov/earth-information-center/"},{name:"NASA Scientific Visualization Studio (SVS)",nameAr:"استوديو التصور العلمي التابع لناسا",desc:"Hyper-detailed cinematic planetary animations and scientific visual simulations.",url:"https://svs.gsfc.nasa.gov/"},{name:"NASA GIBS & Worldview",nameAr:"نظام تصفح الصور العالمية للأقمار الصناعية",desc:"Full-resolution near real-time satellite imagery layers and spectral bands.",url:"https://worldview.earthdata.nasa.gov/"},{name:"NASA POWER Project",nameAr:"مشروع التنبؤ بموارد الطاقة العالمية",desc:"Decadal solar radiation, surface meteorology, and climate time-series.",url:"https://power.larc.nasa.gov/"},{name:"NASA GMAO & GEOS Models",nameAr:"مكتب النمذجة والاستيعاب العالمي",desc:"Global atmospheric chemical transport and aerosol assimilation systems.",url:"https://gmao.gsfc.nasa.gov/"},{name:"NASA/JPL ECCO-2 Ocean Circulation",nameAr:"مشروع تقدير دوران ومناخ المحيطات",desc:"Global ocean thermal physics, eddies, currents, and sea surface anomalies.",url:"https://ecco-group.org/"}],n=[{name:"React 18",role:"Component Architecture & Reactive State"},{name:"Three.js",role:"Procedural 3D Earth, Orbit & Atmosphere Engine"},{name:"Web Audio API",role:"Dual Synthesizer, AnalyserNode & Real-time Acoustics"},{name:"Chart.js & Leaflet",role:"Scientific Time-Series & Geospatial Maps"},{name:"Vite",role:"High-Performance Modern Build Pipeline"}];return s.jsxs("section",{id:"about",className:"about-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:e?"عن المشروع والرسالة":"MISSION & BACKGROUND"}),s.jsx("h2",{className:"section-title",children:e?"مشروع تيرا-تون":"About Terra-Tone"}),s.jsx("p",{className:"section-subtitle",children:e?"مبادرة علمية تفاعلية تم تطويرها ضمن تحدي ناسا الدولي لتطبيقات الفضاء ٢٠٢٦":"Developed for the NASA International Space Apps Challenge 2026: The Earth Information Jukebox."})]}),s.jsxs("div",{className:"about-mission-card",children:[s.jsxs("div",{className:"mission-badge",children:[s.jsx(wd,{size:18}),s.jsx("span",{children:"NASA SPACE APPS CHALLENGE 2026 — THE EARTH INFORMATION JUKEBOX"})]}),s.jsx("h3",{className:"mission-title",children:e?"تحويل الأرقام الفضائية المعقدة إلى لغة يفهمها الجميع":"Bridging Scientific Data and Human Emotion through Acoustic Sonification"}),s.jsx("p",{className:"mission-text",children:e?"يهدف مشروع Terra-Tone إلى تمكين الباحثين والطلاب والمهتمين بالبيئة، بمن فيهم ذوي التحديات البصرية، من تجربة نبض كوكب الأرض وفهم مؤشراته الحيوية دون الحاجة إلى التحديق في مئات الجداول الإحصائية المعقدة. عبر دمج فيزياء الصوت بالبيانات الفضائية، تصبح التغيرات المناخية حقيقة ملموسة تُسمع بوضوح.":"Terra-Tone translates planetary observations into harmonically rich acoustic landscapes. By converting satellite telemetry into calibrated musical frequencies, it reveals planetary cycles, climate anomalies, and seasonal dynamics in a multisensory format accessible to scientists, students, and visually impaired explorers worldwide."})]}),s.jsxs("div",{className:"about-meta-grid",children:[s.jsxs("div",{className:"about-subcard",children:[s.jsxs("div",{className:"subcard-header",children:[s.jsx(bo,{size:20,className:"subcard-icon"}),s.jsx("h3",{className:"subcard-title",children:e?"مصادر وبيانات ناسا الرسمية":"Official NASA Data Providers"})]}),s.jsx("div",{className:"providers-list",children:t.map((a,r)=>s.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"provider-item",children:[s.jsxs("div",{className:"provider-info",children:[s.jsx("span",{className:"provider-name",children:e?a.nameAr:a.name}),s.jsx("span",{className:"provider-desc",children:a.desc})]}),s.jsx(Hn,{size:14,className:"provider-ext-icon"})]},r))})]}),s.jsxs("div",{className:"about-subcard",children:[s.jsxs("div",{className:"subcard-header",children:[s.jsx(nc,{size:20,className:"subcard-icon"}),s.jsx("h3",{className:"subcard-title",children:e?"البنية التقنية والمكتبات":"Technology Stack & Architecture"})]}),s.jsx("div",{className:"tech-stack-list",children:n.map((a,r)=>s.jsxs("div",{className:"tech-item",children:[s.jsx("span",{className:"tech-name",children:a.name}),s.jsx("span",{className:"tech-role",children:a.role})]},r))}),s.jsxs("div",{className:"team-acknowledgment-box",children:[s.jsxs("div",{className:"ack-header",children:[s.jsx(Yd,{size:18}),s.jsx("span",{children:e?"فريق العمل والتقدير":"Team & Acknowledgments"})]}),s.jsx("p",{className:"ack-text",children:e?"تم بناء هذا النظام بفخر بواسطة فريق Terra-Tone، مهدىً إلى علماء ناسا وجميع الباحثين الذين يكرسون جهودهم لحماية كوكبنا الأزرق الجميل.":"Built with scientific rigor by the Terra-Tone Team for NASA Space Apps Challenge 2026. Dedicated to Earth scientists and researchers worldwide working to preserve our living planet."})]})]})]}),s.jsx("footer",{className:"terra-footer",children:s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"footer-logo",children:"TERRA-TONE"}),s.jsx("span",{className:"footer-copy",children:"© 2026 NASA Space Apps Challenge Project"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"https://github.com/EL7ADIDY/Terra-Tone",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"GitHub Repository"}),s.jsx("span",{className:"footer-sep",children:"•"}),s.jsx("a",{href:"https://www.spaceappschallenge.org/2026/challenges/the-earth-information-jukebox/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"NASA Space Apps 2026"}),s.jsx("span",{className:"footer-sep",children:"•"}),s.jsx("a",{href:"https://www.nasa.gov/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Earth Information Center"})]})]})})]})}const O0=({activeResourceId:i,onSelectResource:e,lang:t="en"})=>{const[n,a]=R.useState("all"),r=Tt.filter(o=>n==="all"?!0:o.category===n);return s.jsxs("section",{className:"eic-catalog-section","aria-label":"NASA Earth Information Center Catalog",children:[s.jsxs("div",{className:"eic-catalog-header",children:[s.jsxs("div",{className:"eic-catalog-title-group",children:[s.jsxs("div",{className:"eic-badge-pill",children:[s.jsx(ni,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:"NASA EARTH INFORMATION CENTER"})]}),s.jsx("h2",{className:"eic-section-title",children:t==="ar"?"معارض مركز معلومات الأرض":"Curated Earth Science Showcases"}),s.jsx("p",{className:"eic-section-subtitle",children:t==="ar"?"استكشف المرئيات العلمية الأصلية والبيانات المعتمدة المباشرة من وكالة ناسا عبر الغلاف الجوي والمحيطات والغطاء الجليدي والمدن.":"Explore original NASA SVS scientific animations and verified datasets tracking our interconnected planet."})]}),s.jsx("div",{className:"eic-category-filter",role:"tablist","aria-label":"Showcase Categories",children:E0.map(o=>{const l=n===o.id;return s.jsx("button",{type:"button",role:"tab","aria-selected":l,className:`eic-cat-btn ${l?"active":""}`,onClick:()=>a(o.id),children:t==="ar"?o.labelAr:o.labelEn},o.id)})})]}),s.jsx("div",{className:"eic-cards-grid",children:r.map(o=>{const l=o.id===i;return s.jsxs("article",{className:`eic-card ${l?"selected":""}`,onClick:()=>e(o.id),role:"button",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),e(o.id))},"aria-current":l?"true":void 0,children:[s.jsxs("div",{className:"eic-card-media-wrap",children:[s.jsx("img",{src:o.previewImage,alt:t==="ar"?o.titleAr:o.titleEn,className:"eic-card-img",loading:"lazy",onError:c=>{c.target.style.opacity="0.4"}}),s.jsxs("span",{className:"eic-svs-badge",children:["SVS #",o.svsId]}),s.jsxs("span",{className:"eic-duration-badge",children:[s.jsx(Ql,{className:"icon-xs","aria-hidden":"true"}),o.durationSeconds,"s"]}),l&&s.jsx("div",{className:"eic-card-active-overlay",children:s.jsx("span",{className:"eic-active-text",children:t==="ar"?"المعرض النشط":"Active Showcase"})})]}),s.jsxs("div",{className:"eic-card-body",children:[s.jsxs("div",{className:"eic-card-meta-line",children:[s.jsx("span",{className:"eic-card-category-tag",children:o.dataType}),s.jsx("span",{className:"eic-card-unit-tag",children:o.unitShort})]}),s.jsx("h3",{className:"eic-card-title",children:t==="ar"?o.titleAr:o.titleEn}),s.jsx("p",{className:"eic-card-desc",children:t==="ar"?o.shortDescriptionAr:o.shortDescriptionEn}),s.jsxs("div",{className:"eic-card-footer",children:[s.jsxs("div",{className:"eic-card-source",children:[s.jsx(mi,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{className:"truncate",children:o.dataProvider.split("/")[0]})]}),s.jsxs("button",{type:"button",className:"eic-card-select-btn",onClick:c=>{c.stopPropagation(),e(o.id)},children:[s.jsx(Pd,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:l?t==="ar"?"يتم العرض":"Viewing":t==="ar"?"عرض":"Explore"})]})]})]})]},o.id)})})]})},dd=({resource:i,currentTime:e,isPlaying:t,playbackSpeed:n,isLooping:a,onTogglePlay:r,onSeek:o,onChangeSpeed:l,onToggleLoop:c,isAudioEnabled:d=!0,onToggleAudio:h,audioVolume:m=.7,onChangeVolume:u,lang:g="en"})=>{const x=R.useId(),y=i.durationSeconds||1,p=Math.min(100,Math.max(0,e/y*100)),f=_=>{const N=parseFloat(_.target.value);o(N)},S=_=>{const N=Math.max(0,Math.min(y,e+_));o(N)},E=[.5,1,1.5,2];return s.jsxs("div",{className:"eic-timeline-card","aria-label":"Shared EIC Timeline Controls",children:[s.jsx("div",{className:"eic-scrubber-row",children:s.jsxs("div",{className:"eic-scrubber-track-wrap",children:[s.jsx("input",{id:x,type:"range",min:0,max:y,step:.1,value:e,onChange:f,className:"eic-timeline-slider","aria-label":g==="ar"?"شريط التمرير الزمني المتزامن":"Synchronized Timeline Scrubber"}),s.jsx("div",{className:"eic-slider-progress-fill",style:{width:`${p}%`}}),i.timePoints&&s.jsx("div",{className:"eic-timeline-milestones","aria-hidden":"true",children:i.timePoints.map((_,N)=>{const T=_.timestamp/y*100,v=e>=_.timestamp;return s.jsx("button",{type:"button",className:`eic-milestone-tick ${v?"passed":""}`,style:{left:`${T}%`},onClick:()=>o(_.timestamp),title:_.label||_.date},N)})})]})}),s.jsxs("div",{className:"eic-timeline-controls-row",children:[s.jsxs("div",{className:"eic-timeline-actions-left",children:[s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-step",onClick:()=>S(-5),title:g==="ar"?"تراجع 5 ثوانٍ":"Step Back 5s","aria-label":"Step Back 5s",children:s.jsx(Vd,{className:"icon-sm"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-play-primary",onClick:r,title:t?g==="ar"?"إيقاف مؤقت":"Pause":g==="ar"?"تشغيل":"Play","aria-label":t?"Pause":"Play",children:t?s.jsx(Ms,{className:"icon"}):s.jsx(Pn,{className:"icon"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-step",onClick:()=>S(5),title:g==="ar"?"تقدم 5 ثوانٍ":"Step Forward 5s","aria-label":"Step Forward 5s",children:s.jsx(ac,{className:"icon-sm"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-reset",onClick:()=>o(0),title:g==="ar"?"إعادة إلى البداية":"Restart from beginning","aria-label":"Restart",children:s.jsx(oc,{className:"icon-xs"})}),s.jsxs("div",{className:"eic-timeline-time-display",children:[s.jsx("span",{className:"current",children:Zt.formatTime(e)}),s.jsx("span",{className:"sep",children:"/"}),s.jsx("span",{className:"total",children:Zt.formatTime(y)})]})]}),s.jsxs("div",{className:"eic-timeline-actions-right",children:[typeof h=="function"&&s.jsxs("button",{type:"button",className:`eic-control-btn eic-btn-sound ${d?"active":""}`,onClick:h,title:d?g==="ar"?"كتم النغمات الصوتية":"Mute visual sonification":g==="ar"?"تشغيل النغمات الصوتية":"Enable visual sonification","aria-pressed":d,children:[d?s.jsx(cn,{className:"icon-xs"}):s.jsx(Jn,{className:"icon-xs text-rose"}),s.jsx("span",{className:"btn-label",children:g==="ar"?"صوت":"Audio"})]}),s.jsxs("button",{type:"button",className:`eic-control-btn eic-btn-loop ${a?"active":""}`,onClick:c,title:g==="ar"?"تكرار مستمر":"Loop Playback","aria-pressed":a,children:[s.jsx(Eo,{className:"icon-xs"}),s.jsx("span",{className:"btn-label",children:g==="ar"?"تكرار":"Loop"})]}),s.jsxs("div",{className:"eic-speed-selector",children:[s.jsx(Dd,{className:"icon-xs text-muted","aria-hidden":"true"}),s.jsx("div",{className:"eic-speed-pills",children:E.map(_=>{const N=n===_;return s.jsxs("button",{type:"button",className:`eic-speed-pill ${N?"active":""}`,onClick:()=>l(_),"aria-pressed":N,children:[_,"x"]},_)})})]})]})]})]})},F0=({lang:i="en",theme:e="dark",initialResourceId:t="night-lights-decade"})=>{const[n,a]=R.useState(t||Tt[0].id),[r,o]=R.useState(0),[l,c]=R.useState(!1),[d,h]=R.useState(1),[m,u]=R.useState(!0),g=ld(n)||Tt[0],x=R.useRef(null);x.current||(x.current=new cd({onTimeUpdate:N=>o(N),onPlayStateChange:N=>c(N),onSpeedChange:N=>h(N),onEnded:()=>{m&&x.current?(x.current.seek(0),x.current.play()):c(!1)}}));const y=R.useCallback(N=>{N!==n&&(x.current&&(x.current.pause(),x.current.seek(0)),o(0),c(!1),a(N))},[n]),p=R.useCallback((N,T)=>{x.current&&x.current.attachVideo(N,T)},[]),f=R.useCallback(()=>{x.current&&x.current.togglePlay()},[]),S=R.useCallback(N=>{x.current&&x.current.seek(N),o(N)},[]),E=R.useCallback(N=>{x.current&&x.current.setSpeed(N)},[]),_=R.useCallback(()=>{u(N=>!N)},[]);return R.useEffect(()=>()=>{x.current&&x.current.detachVideo()},[]),s.jsxs("div",{className:`eic-experience-wrapper theme-${e}`,"aria-label":"NASA Earth Information Center Visualization Experience",children:[s.jsxs("section",{className:"eic-main-experience-grid",children:[s.jsx("div",{className:"eic-column-left",children:s.jsx(ko,{resource:g,currentTime:r,isPlaying:l,playbackSpeed:d,onTogglePlay:f,onVideoAttach:p,lang:i})}),s.jsx("div",{className:"eic-column-right",children:s.jsx(Bo,{resource:g,currentTime:r,onSeek:S,lang:i,theme:e})})]}),s.jsx("section",{className:"eic-timeline-section",children:s.jsx(dd,{resource:g,currentTime:r,isPlaying:l,playbackSpeed:d,isLooping:m,onTogglePlay:f,onSeek:S,onChangeSpeed:E,onToggleLoop:_,lang:i})}),s.jsx("section",{className:"eic-details-section",children:s.jsx(Go,{resource:g,lang:i})}),s.jsx("section",{className:"eic-selector-section",children:s.jsx(O0,{activeResourceId:n,onSelectResource:y,lang:i})})]})},Pt={en:{appTitle:"Terra-Tone",tagline:"NASA Earth Environmental Data Sonification & Visual Explorer",badgeNasa:"NASA Space Apps",skipToContent:"Skip to main content",langToggle:"العربية",themeToggle:"Toggle Theme",themeLight:"Light Mode (Eye Comfort)",themeDark:"Dark Space Mode",highContrast:"High Contrast",largeText:"Large Text",shortcutsBtn:"Shortcuts (H)",mute:"Mute",unmute:"Unmute",audioReady:"Audio Active",audioBlocked:"Click to Enable Audio",announceToggle:"Speech During Play",announceOn:"Announce: Every 5th Year",announceOff:"Announce: Manual Only",onboardingTitle:"Try This: 3 Steps to Listen to Earth",step1Title:"1. Pick a Location or GPS",step1Desc:"Click preset Egyptian cities (Zagazig, Alexandria, Cairo, Aswan), click your GPS, or tap anywhere on Earth.",step2Title:"2. Explore Satellite Frames",step2Desc:"Toggle real NASA GIBS satellite imagery: Land Surface Temp, True Color, Rainfall, or NDVI Vegetation.",step3Title:"3. Listen to the Frame",step3Desc:'Click "Sonify Point" to hear the pixel under the marker, or click "Scan the Frame" to hear an audio sweep across the map!',dismiss:"Got it",gibsSectionHeading:"NASA GIBS Satellite Frame Viewer",gibsLayerSelect:"Satellite Imagery Layer:",gibsDate:"Frame Date",gibsPlay:"Animate Frames",gibsPause:"Pause Frames",gibsOpacity:"Opacity",sonifyPixelBtn:"Sonify Point from Frame",scanFrameBtn:"Scan the Frame",scanning:"Scanning Frame...",framePixelSampled:"Sampled from Frame",luminanceNotice:"Derived from pixel luminance (RGB true color / colormap unmapped)",colormapNotice:"Derived via calibrated NASA GIBS colormap",legend:"Layer Legend",toggleLegend:"Toggle Legend",pixelValueLabel:"Pixel value at marker:",variableLabel:"Earth Variable:",selectVariableAria:"Select climate variable to visualize and sonify",secondaryLayerLabel:"Second Layer (Volume Modulation):",secondaryNone:"None (Single Variable)",pitchMappingLabel:"Dynamic Pitch Mapping:",locationPresetLabel:"Location Presets & GPS:",gpsBtn:"Detect GPS Location",gpsLoading:"Acquiring GPS...",gpsError:"GPS access denied or unavailable",returnToChart:"Back to Chart View",customLocation:"Custom Point",compareModeLabel:"Compare Two Locations",locationA:"Location A (Left Channel)",locationB:"Location B (Right Channel)",clickMapToSelect:"Click anywhere on the map to set coordinates",coordinates:"Lat: {lat}, Lon: {lon}",timelineHeading:"Timeline & Audio Playback",year:"Year",currentYearLabel:"Current Year: {year}",play:"Play",pause:"Pause",stepBack:"Previous Year (Left Arrow)",stepForward:"Next Year (Right Arrow)",speed:"Speed",loop:"Loop Playback",yearSliderAria:"Scrub timeline year",audioHeading:"Sonification Controls",volume:"Volume",instrument:"Instrument",instrumentSine:"Pure Sine",instrumentTriangle:"Warm Triangle",instrumentPluck:"Soft Pluck",musicalScale:"Pentatonic Scale",scaleOn:"Scale Snapped",scaleOff:"Continuous Pitch",spatialStereo:"Stereo Spatial Sonification",recordCueTip:"High & low record chimes enabled",chartHeading:"Historical Trend ({range})",dataSubheading:"NASA POWER Ground-Level Observations",chartAriaLabel:"Line chart depicting historical data with trendline and moving cursor",dataTableView:"Data Table",chartView:"Chart View",trendline:"Linear Trendline",recordHigh:"Record High",recordLow:"Record Low",runningRecordHigh:"New High Record",runningRecordLow:"New Low Record",insightsHeading:"Plain Language Climate Insights",changePerDecade:"Change per Decade",totalTrendChange:"Total Period Change",percentChange:"Percent Change",significanceTest:"Statistical Significance",significant:"Statistically Significant (p < 0.05)",notSignificant:"Not Statistically Significant (p ≥ 0.05)",pValueLabel:"p-value: {p}",readSummaryBtn:"Spoken Summary (TTS)",stopSpeakingBtn:"Stop Speech",speakingState:"Speaking...",historicalRange:"Baseline to Latest Observations",tableCaption:"Annual values and historical anomalies for selected location",colYear:"Year",colValue:"Value",colAnomaly:"Anomaly (Diff from baseline)",colRecords:"Records & Notes",downloadCsv:"Download CSV",aboutHeading:"About Terra-Tone",aboutMission:'Terra-Tone was built for the NASA Space Apps Challenge "The Earth Information Jukebox". It makes multi-decadal NASA Earth science data accessible to everyone, especially people who are blind, visually impaired, or neurodivergent, through real-time harmonic sonification synchronized with spatial and chart visuals.',howSonificationWorks:"How Sonification Works:",sonificationExplanation:"Data values and satellite pixel readings are mapped to pitch using a harmonious pentatonic scale (C3 to C6). In Point Mode, the pixel RGB under the map marker is extracted from the NASA GIBS satellite frame and decoded via calibrated colormaps or luminance. In Scan Mode, a sweep across 40 columns sonifies the visible geography from west to east in real time. When comparing two locations, Location A is positioned in the left stereo ear and Location B in the right stereo ear, allowing you to hear climatic divergence in stereo space. Distinct bell and chime cues alert listeners when historical records are broken.",dataCrediting:"Data Sources: NASA GIBS (Global Imagery Browse Services) WMTS API and NASA POWER API (Prediction Of Worldwide Energy Resources) via NASA Langley Research Center.",keyboardHelpHeading:"Keyboard Shortcuts",shortcutSpace:"Play / Pause timeline playback",shortcutArrowsLR:"Step backward / forward by 1 year",shortcutArrowsUD:"Increase / decrease playback speed",shortcutM:"Mute / Unmute audio",shortcutH:"Open this keyboard shortcuts dialog",shortcutClose:"Close Modal",statusAnnounce:"Year {year}, {variable}: {value} {unit}. {recordNotice}",statusCompareAnnounce:"Year {year}: {locA} is {valA} {unit}, {locB} is {valB} {unit}.",statusPlaybackStarted:"Timeline playback started at {speed}x speed.",statusPlaybackPaused:"Timeline playback paused at year {year}.",statusLocationChanged:"Location changed to {name} at latitude {lat}, longitude {lon}.",modeTemperatureTab:"Temperature & Climate (NASA POWER)",modeAirTab:"Stage 1: Air Pollution",modeWaterTab:"Stage 2: Water Pollution",modeSoilTab:"Stage 3: Soil Pollution"},ar:{appTitle:"تيرا-تون (Terra-Tone)",tagline:"تحويل البيانات البيئية وصور الأقمار الصناعية لوكالة ناسا إلى صوت وموسيقى",badgeNasa:"تحدي ناسا لتطبيقات الفضاء",skipToContent:"الانتقال إلى المحتوى الرئيسي",langToggle:"English",themeToggle:"تغيير السمة",themeLight:"الوضع النهاري المريح للعين",themeDark:"الوضع الليلي الكوني",highContrast:"تباين عالي",largeText:"خط كبير",shortcutsBtn:"اختصارات لوحة المفاتيح (H)",mute:"كتم الصوت",unmute:"تشغيل الصوت",audioReady:"الصوت نشط",audioBlocked:"اضغط لتفعيل الصوت",announceToggle:"النطق أثناء التشغيل",announceOn:"الإعلانات: كل 5 سنوات",announceOff:"الإعلانات: يدوي فقط",onboardingTitle:"جرّب هذا: 3 خطوات للاستماع إلى كوكب الأرض",step1Title:"1. اختر موقعاً أو حدد GPS",step1Desc:"انقر على مدن مصرية جاهزة (الزقازيق، الإسكندرية، القاهرة، أسوان)، أو اضغط على موقعك عبر GPS أو أي نقطة على الخريطة.",step2Title:"2. استكشف إطارات الأقمار الصناعية",step2Desc:"اختر صور أقمار ناسا الحقيقية (NASA GIBS): حرارة سطح الأرض، الألوان الطبيعية، هطول الأمطار، أو مؤشر الغطاء النباتي.",step3Title:"3. استمع إلى بيانات الإطار الفضائي",step3Desc:'اضغط "تحويل النقطة لصوت" لسماع قيمة البكسل تحت العلامة، أو "مسح الإطار" لسماع مسح صوتي مجسم للمنطقة الظاهرة كاملة!',dismiss:"فهمت ذلك",gibsSectionHeading:"عارض إطارات الأقمار الصناعية (NASA GIBS)",gibsLayerSelect:"طبقة القمر الصناعي:",gibsDate:"تاريخ الإطار الفضائي",gibsPlay:"تشغيل حركة الإطارات",gibsPause:"إيقاف حركة الإطارات",gibsOpacity:"الشفافية",sonifyPixelBtn:"تحويل النقطة من الإطار لصوت",scanFrameBtn:"مسح الإطار صوتياً",scanning:"جاري مسح الإطار...",framePixelSampled:"العينة المأخوذة من الإطار",luminanceNotice:"مستنتج من سطوع البكسل (ألوان طبيعية / بدون خريطة ألوان)",colormapNotice:"مستخرج عبر خريطة ألوان ناسا المعايرة",legend:"دليل الألوان والوحدات",toggleLegend:"إظهار/إخفاء دليل الألوان",pixelValueLabel:"قيمة البكسل عند العلامة:",variableLabel:"المتغير البيئي:",selectVariableAria:"اختر المتغير المناخي للعرض والتحويل السمعي",secondaryLayerLabel:"الطبقة الصوتية الثانية (تعديل مستوى الصوت):",secondaryNone:"بدون (متغير فردي)",pitchMappingLabel:"نطاق درجات النغمات الموسيقية:",locationPresetLabel:"المواقع الجاهزة وتحديد GPS:",gpsBtn:"تحديد موقعي عبر GPS",gpsLoading:"جاري تحديد موقعك...",gpsError:"تعذر الوصول إلى نظام GPS",returnToChart:"العودة إلى الرسم البياني",customLocation:"نقطة مخصصة",compareModeLabel:"مقارنة موقعين معاً",locationA:"الموقع أ (القناة اليسرى)",locationB:"الموقع ب (القناة اليمنى)",clickMapToSelect:"انقر على الخريطة لتحديد الإحداثيات",coordinates:"خط العرض: {lat}، خط الطول: {lon}",timelineHeading:"الخط الزمني والتشغيل الصوتي",year:"السنة",currentYearLabel:"السنة الحالية: {year}",play:"تشغيل",pause:"إيقاف مؤقت",stepBack:"السنة السابقة (السهم الأيسر)",stepForward:"السنة التالية (السهم الأيمن)",speed:"السرعة",loop:"تكرار التشغيل",yearSliderAria:"شريط التنقل عبر السنوات",audioHeading:"إعدادات التحويل الصوتي (Sonification)",volume:"مستوى الصوت",instrument:"الآلة الموسيقية",instrumentSine:"نغمة جيبية نقية (Sine)",instrumentTriangle:"مثلثية دافئة (Triangle)",instrumentPluck:"عزف أوتار ناعم (Soft Pluck)",musicalScale:"السلم الموسيقي الخماسي (Pentatonic)",scaleOn:"مطابق للسلم",scaleOff:"تردد متصل حر",spatialStereo:"توزيع صوتي مجسم (Stereo)",recordCueTip:"نغمات التنبيه للقيم القياسية مفعلة",chartHeading:"المسار التاريخي ({range})",dataSubheading:"أرصاد وكالة ناسا باور (NASA POWER) الأرضية",chartAriaLabel:"مخطط بياني يوضح البيانات التاريخية مع خط الاتجاه ومؤشر متحرك",dataTableView:"جدول البيانات",chartView:"الرسم البياني",trendline:"خط الاتجاه الخطي",recordHigh:"أعلى رقم قياسي",recordLow:"أدنى رقم قياسي",runningRecordHigh:"رقم قياسي مرتفع جديد",runningRecordLow:"رقم قياسي منخفض جديد",insightsHeading:"تحليلات المناخ بلغة واضحة",changePerDecade:"التغير لكل عقد (10 سنوات)",totalTrendChange:"إجمالي التغير خلال الفترة",percentChange:"نسبة التغير المئوية",significanceTest:"الدلالة الإحصائية",significant:"تغير دال إحصائياً (p < 0.05)",notSignificant:"تغير غير دال إحصائياً (p ≥ 0.05)",pValueLabel:"القيمة الاحتمالية p: {p}",readSummaryBtn:"قراءة الملخص صوتياً (TTS)",stopSpeakingBtn:"إيقاف القراءة",speakingState:"جاري القراءة...",historicalRange:"من خط الأساس حتى أحدث الأرصاد",tableCaption:"القيم السنوية والانحرافات التاريخية للموقع المحدد",colYear:"السنة",colValue:"القيمة",colAnomaly:"الانحراف (الفرق عن خط الأساس)",colRecords:"الأرقام القياسية والملاحظات",downloadCsv:"تنزيل ملف CSV",aboutHeading:"حول مشروع تيرا-تون (Terra-Tone)",aboutMission:'تم تصميم Terra-Tone لتحدي ناسا لتطبيقات الفضاء "صندوق معلومات الأرض"، بهدف إتاحة بيانات علوم الأرض والصور الفضائية الصادرة عن ناسا للجميع، وخخاصة المكفوفين وضعاف البصر، عبر التحويل الصوتي المتناغم والمتزامن مع الخرائط والرسوم البيانية.',howSonificationWorks:"كيف يعمل التحويل الصوتي (Sonification):",sonificationExplanation:"تُحوَّل قيم البيانات وقراءات بكسلات الأقمار الصناعية إلى طبقات نغمية باستخدام السلم الموسيقي الخماسي المتناغم (من C3 حتى C6). في نمط النقطة، يتم قراءة بكسل RGB من إطار قمر ناسا الفضائي أسفل العلامة المحددة وتحويله إلى قيمة فيزيائية باستخدام خريطة الألوان المعايرة أو السطوع. وفي نمط المسح، يتم مسح 40 عموداً عبر الخريطة للاستماع لتضاريس المنطقة المعروضة كاملة. وعند مقارنة موقعين، يُوجَّه الموقع الأول للأذن اليسرى والموقع الثاني للأذن اليمنى للاستماع للاختلافات المناخية في فضاء ستيريو مجسم.",dataCrediting:"مصادر البيانات: واجهة إطارات الأقمار الصناعية (NASA GIBS WMTS API) وواجهة ناسا باور (NASA POWER API) من مركز لانغلي للأبحاث التابع لناسا.",keyboardHelpHeading:"اختصارات لوحة المفاتيح",shortcutSpace:"تشغيل / إيقاف مؤقت للخط الزمني",shortcutArrowsLR:"الانتقال سنة للخلف / للأمام",shortcutArrowsUD:"زيادة / تقليل سرعة التشغيل",shortcutM:"كتم / تشغيل الصوت",shortcutH:"فتح نافذة اختصارات لوحة المفاتيح",shortcutClose:"إغلاق النافذة",statusAnnounce:"سنة {year}، {variable}: {value} {unit}. {recordNotice}",statusCompareAnnounce:"سنة {year}: {locA} بقيمة {valA} {unit}، و{locB} بقيمة {valB} {unit}.",statusPlaybackStarted:"بدأ تشغيل الخط الزمني بسرعة {speed}x.",statusPlaybackPaused:"تم إيقاف تشغيل الخط الزمني عند سنة {year}.",statusLocationChanged:"تم تغيير الموقع إلى {name} عند خط عرض {lat}، وخط طول {lon}.",modeTemperatureTab:"الحرارة والمناخ (NASA POWER)",modeAirTab:"المرحلة 1: تلوث الهواء",modeWaterTab:"المرحلة 2: تلوث المياه",modeSoilTab:"المرحلة 3: تلوث التربة"}};function k0({isOpen:i=!1,onClose:e=()=>{},lang:t="en"}){const n=Pt[t]||Pt.en,a=R.useRef(null),r=R.useRef(null);if(R.useEffect(()=>{var l;i&&((l=r.current)==null||l.focus())},[i]),!i)return null;const o=[{key:"Space",desc:n.shortcutSpace},{key:"← / →",desc:n.shortcutArrowsLR},{key:"↑ / ↓",desc:n.shortcutArrowsUD},{key:"M",desc:n.shortcutM},{key:"H",desc:n.shortcutH},{key:"Esc",desc:n.shortcutClose}];return s.jsx("div",{className:"modal-backdrop",onClick:e,role:"presentation",children:s.jsxs("div",{className:"modal-content",role:"dialog","aria-modal":"true","aria-labelledby":"shortcuts-modal-title",ref:a,onClick:l=>l.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-row",children:[s.jsx(Ud,{className:"icon-md","aria-hidden":"true"}),s.jsx("h2",{id:"shortcuts-modal-title",className:"modal-title",children:n.keyboardHelpHeading})]}),s.jsx("button",{ref:r,type:"button",className:"btn-modal-close",onClick:e,"aria-label":n.shortcutClose,children:s.jsx(Ts,{className:"icon","aria-hidden":"true"})})]}),s.jsx("div",{className:"modal-body",children:s.jsxs("table",{className:"shortcuts-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t==="ar"?"المفتاح":"Key"}),s.jsx("th",{scope:"col",children:t==="ar"?"الوظيفة":"Action"})]})}),s.jsx("tbody",{children:o.map((l,c)=>s.jsxs("tr",{children:[s.jsx("td",{className:"key-cell",children:s.jsx("kbd",{className:"kbd-shortcut",children:l.key})}),s.jsx("td",{className:"desc-cell",children:l.desc})]},c))})]})}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{type:"button",className:"btn-primary",onClick:e,children:n.shortcutClose})})]})})}const Xn=[{id:"MODIS_Terra_Land_Surface_Temp_Day",colormapId:"MODIS_Land_Surface_Temp",nameEn:"Land Surface Temp (Day)",nameAr:"حرارة سطح الأرض (نهاراً)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,startDate:"2000-02-24",unitEn:"°C",unitAr:"م°",isTemperature:!0,legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.svg",descriptionEn:"Daily land surface temperature from MODIS Terra, showing regional heat islands, desert heat, and seasonal thermal shifts.",descriptionAr:"درجة حرارة سطح الأرض النهارية من القمر الصناعي تيرا، توضح جزر الحرارة الحضرية وحرارة الصحراء."},{id:"MODIS_Terra_CorrectedReflectance_TrueColor",colormapId:null,nameEn:"Natural Color Imagery (True Color)",nameAr:"صور الألوان الطبيعية الحقيقية",format:"jpeg",ext:"jpeg",tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,startDate:"2000-02-24",unitEn:"Reflectance (Luminance)",unitAr:"السطوع والانعكاس",isTemperature:!1,legendUrl:null,descriptionEn:"Daily true-color optical satellite imagery from MODIS Terra showing actual atmospheric clouds, oceans, vegetation, and terrain.",descriptionAr:"صور فضائية بالألوان الحقيقية اليومية من قمر تيرا توضح السحب، الغطاء النباتي، والتضاريس."},{id:"IMERG_Precipitation_Rate",colormapId:"GPM_Precipitation_Rate",nameEn:"Precipitation Rate (IMERG)",nameAr:"معدل هطول الأمطار (IMERG)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,startDate:"2000-06-01",unitEn:"mm/hr",unitAr:"ملم/ساعة",isTemperature:!1,legendUrl:"https://gibs.earthdata.nasa.gov/legends/GPM_Precipitation_Rate_H.svg",descriptionEn:"GPM IMERG multi-satellite precipitation rate estimates depicting rainfall intensity and severe storms worldwide.",descriptionAr:"تقديرات هطول الأمطار من مهمة قياس الأمطار العالمية (GPM IMERG) لرصد شدة الأمطار والعواصف."},{id:"MODIS_Terra_NDVI_8Day",colormapId:"MODIS_NDVI",nameEn:"Vegetation Index (NDVI)",nameAr:"مؤشر الغطاء النباتي (NDVI)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,startDate:"2025-02-12",unitEn:"NDVI",unitAr:"NDVI",isTemperature:!1,legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_NDVI_H.svg",descriptionEn:"Rolling 8-day Normalized Difference Vegetation Index measuring plant chlorophyll and canopy greenness.",descriptionAr:"مؤشر الغطاء النباتي المقاس كل 8 أيام لرصد كثافة وصحة النباتات والمحاصيل الزراعية."}],cr=new Map,ss=new Map,Ka=new Map;function ln(i,e,t,n,a){const r=typeof i=="object"&&i!==null?i:Xn.find(c=>c.id===i)||Xn[0];return`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${r.gibsLayerId||r.id}/default/${e||"default"}/${r.tileMatrixSet}/${t}/${n}/${a}.${r.ext||"png"}`}function mn(i,e,t){const n=Math.pow(2,t),a=Math.max(-85.0511,Math.min(85.0511,i)),r=(e+180)/360*n,o=a*Math.PI/180,l=(1-Math.log(Math.tan(o)+1/Math.cos(o))/Math.PI)/2*n,c=(Math.floor(r)%n+n)%n,d=Math.max(0,Math.min(n-1,Math.floor(l))),h=Math.floor((r-Math.floor(r))*256),m=Math.floor((l-Math.floor(l))*256);return{tileX:c,tileY:d,pixelX:Math.max(0,Math.min(255,h)),pixelY:Math.max(0,Math.min(255,m))}}async function ud(i){const e=typeof i=="object"&&i!==null?i:Xn.find(o=>o.id===i);if(!e||!e.colormapId)return null;const t=e.colormapId;if(cr.has(t))return cr.get(t);const n=e.gibsLayerId||e.id,a=[`https://gibs.earthdata.nasa.gov/colormaps/v1.3/${t}.xml`,`https://gibs.earthdata.nasa.gov/colormaps/v1.3/${n}.xml`];let r=null;for(const o of a)try{const l=await fetch(o);if(!l.ok){r=new Error(`HTTP ${l.status}`);continue}const c=await l.text(),m=new DOMParser().parseFromString(c,"text/xml").querySelectorAll("ColorMapEntry"),u=[];if(m.forEach(g=>{const x=g.getAttribute("rgb"),y=g.getAttribute("value"),p=g.getAttribute("transparent")==="true",f=g.getAttribute("nodata")==="true";if(x&&y&&!f&&!p){const[S,E,_]=x.split(",").map(Number),v=y.replace(/[\[\(\]\)]/g,"").split(",").map(L=>L.includes("INF")?NaN:Number(L));let b=NaN;v.length===2&&!isNaN(v[0])&&!isNaN(v[1])?b=(v[0]+v[1])/2:isNaN(v[0])?v.length===2&&!isNaN(v[1])&&(b=v[1]):b=v[0],!isNaN(S)&&!isNaN(E)&&!isNaN(_)&&!isNaN(b)&&u.push({r:S,g:E,b:_,value:b})}}),u.length>0)return cr.set(t,u),u}catch(l){r=l,console.warn(`Failed fetching colormap from ${o}:`,l)}return r&&console.warn(`Colormap unavailable for ${t}:`,r),null}function B0(i,e,t,n,a){if(i===0&&e===0&&t===0)return{value:null,isLuminance:!1,label:"No Data"};if(n&&n.length>0&&!(a!=null&&a.useLuminance)){let o=1/0,l=null;for(let c=0;c<n.length;c++){const d=n[c],h=i-d.r,m=e-d.g,u=t-d.b,g=h*h+m*m+u*u;if(g<o&&(o=g,l=d.value,g===0))break}if(o<2500&&l!==null){let c=l;(a!=null&&a.isTemperature||a!=null&&a.isKelvin)&&c>100&&(c=c-273.15);const d=Math.abs(c)<2?3:Math.abs(c)<20?2:1;return{value:parseFloat(c.toFixed(d)),isLuminance:!1,label:`${c.toFixed(d)} ${(a==null?void 0:a.unitEn)||""}`.trim()}}}const r=(.299*i+.587*e+.114*t)/255;return{value:parseFloat((r*100).toFixed(1)),isLuminance:!0,label:`${(r*100).toFixed(0)}% Luminance`}}function gs(i){if(ss.has(i))return ss.get(i);const e=new Promise(t=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t({ok:!0,img:n}),n.onerror=()=>t({ok:!1,img:null}),n.src=i});return ss.set(i,e),e}function G0(i=[]){i.forEach(e=>{e&&!ss.has(e)&&gs(e)})}async function Zn(i,e,t,n,a){const r=(a==null?void 0:a.id)||(a==null?void 0:a.gibsLayerId)||"default",o=`${i}_${e}_${t}_${r}_${n?n.length:0}`;if(Ka.has(o))return Ka.get(o);const l=await gs(i);if(!l.ok||!l.img)return{value:null,isLuminance:!1,label:"Tile Missing / No Data",missingTile:!0};try{const c=document.createElement("canvas");c.width=256,c.height=256;const d=c.getContext("2d",{willReadFrequently:!0});d.drawImage(l.img,0,0);const h=d.getImageData(e,t,1,1).data,m=h[0],u=h[1],g=h[2];if(h[3]===0){const f={value:null,isLuminance:!1,label:"Empty Tile / Clouds",r:m,g:u,b:g,emptyPixel:!0};return Ka.set(o,f),f}const p={...B0(m,u,g,n,a),r:m,g:u,b:g};return Ka.set(o,p),p}catch(c){return console.warn("Canvas pixel read error (CORS or canvas issue):",c),{value:null,isLuminance:!0,label:"Sampling Unavailable",corsError:!0}}}const qn=[{id:"air",stageNumber:1,titleEn:"Stage 1: Air Pollution",titleAr:"المرحلة 1: تلوث الهواء",shortEn:"Air Pollution",shortAr:"تلوث الهواء",subtitleEn:"Atmospheric aerosols (PM2.5 proxy), total column ozone (O₃), and carbon monoxide (CO).",subtitleAr:"الهباء الجوي (كمؤشر للجسيمات الدقيقة PM2.5)، وإجمالي عمود الأوزون، وأول أكسيد الكربون.",accentColor:"#38bdf8",honestyBannerEn:null,honestyBannerAr:null,presets:[{id:"cairo",nameEn:"Cairo",nameAr:"القاهرة",lat:30.0444,lon:31.2357},{id:"delhi",nameEn:"Delhi",nameAr:"دلهي",lat:28.6139,lon:77.209},{id:"beijing",nameEn:"Beijing",nameAr:"بكين",lat:39.9042,lon:116.4074},{id:"los_angeles",nameEn:"Los Angeles",nameAr:"لوس أنجلوس",lat:34.0522,lon:-118.2437}],defaultZoom:4,animations:[{id:"air_aod",stageId:"air",gibsLayerId:"MERRA2_Aerosol_Optical_Depth_Analysis_Monthly",colormapId:"MERRA2_Aerosol_Optical_Depth_Analysis_Monthly",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MERRA2_Aerosol_Optical_Depth_Analysis_Monthly_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Aerosol Optical Depth (PM2.5 Proxy)",titleAr:"العمق البصري للهباء الجوي (مؤشر PM2.5)",provider:"NASA GMAO / MERRA-2",variableEn:"Aerosol Optical Depth (550 nm)",variableAr:"العمق البصري للهباء الجوي",unitEn:"AOD",unitAr:"AOD",isProxy:!0,proxyBadgeEn:"PM2.5 Proxy (AOD)",proxyBadgeAr:"بديل PM2.5 (هباء جوي)",availableRange:{start:"1980-01-01",end:"2026-08-01"},cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-08-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:0,max:.9},pairedPowerParam:"AOD_55",whatItIsEn:"Aerosol Optical Depth (AOD) measures how much sunlight is scattered or absorbed by airborne particles like dust, smoke, urban haze, and sulfates. Because NASA GIBS does not offer a continuously updated global surface PM2.5 time-series layer, total AOD is used here as a scientific proxy for fine particulate air pollution.",whatItIsAr:"يقيس العمق البصري للهباء الجوي (AOD) مقدار حجب الجسيمات العالقة في الهواء (كالغبار والدخان والضباب الدخاني) لأشعة الشمس. ونظراً لعدم توفر طبقة محدثة يومياً للجسيمات الدقيقة PM2.5 في GIBS، يُستخدم هذا المقياس كمؤشر علمي بديل لتلوث الجسيمات الدقيقة.",whyItMattersEn:"High aerosol concentrations reduce visibility and correlate with elevated PM2.5 exposure, which can trigger asthma, cardiovascular strain, and respiratory illness.",whyItMattersAr:"تشير القيم المرتفعة للهباء الجوي إلى زيادة تركيز الجسيمات العالقة التي تؤثر على جودة التنفس وصحة القلب والرئتين.",whatTrendShowsEn:"Seasonal spikes reveal dust storms, wildfire smoke plumes, and industrial haze peaks across cities and deserts.",whatTrendShowsAr:"تُظهر الذروات الموسمية عواصف الغبار، وأعمدة دخان الحرائق، وموجات الضباب الدخاني الحضري.",limitationEn:"Proxy metric: measures total atmospheric column aerosols (~50 km MERRA-2 grid), not ground-level PM2.5 µg/m³ directly.",limitationAr:"مؤشر بديل: يقيس الهباء الجوي في كامل العمود الجوي بدقة ~50 كم، وليس تركيز PM2.5 على مستوى التنفس مباشرة."},{id:"air_ozone",stageId:"air",gibsLayerId:"OMI_Ozone_DOAS_Total_Column",colormapId:"OMI_Ozone_DOAS_Total_Column",legendUrl:"https://gibs.earthdata.nasa.gov/legends/OMI_Ozone_DOAS_Total_Column_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Total Column Ozone (O₃)",titleAr:"إجمالي عمود الأوزون (O₃)",provider:"NASA Aura / OMI (DOAS v3)",variableEn:"Total Column Ozone",variableAr:"إجمالي عمود الأوزون",unitEn:"DU",unitAr:"وحدة دوبسون",isProxy:!1,proxyBadgeEn:"Total Column O₃",proxyBadgeAr:"عمود الأوزون الكلي",availableRange:{start:"2004-10-01",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"09",day:"15"},valueDomain:{min:200,max:450},pairedPowerParam:"TO3",whatItIsEn:"Total Column Ozone (measured in Dobson Units, DU) represents the total amount of ozone gas from Earth’s surface up to the top of the stratosphere, observed daily by NASA’s Aura OMI instrument.",whatItIsAr:"يمثل إجمالي عمود الأوزون (بوحدة دوبسون DU) الكمية الكلية لغاز الأوزون من سطح الأرض حتى أعلى الغلاف الجوي عبر قمر أورا (Aura OMI).",whyItMattersEn:"Stratospheric ozone shields life from harmful UV radiation, while excess ground-level ozone is a toxic respiratory pollutant. Tracking column changes helps monitor ozone depletion and atmospheric transport.",whyItMattersAr:"يحمي أوزون الستراتوسفير الحياة من الأشعة فوق البنفسجية، بينما يضر الأوزون السطحي بالرئتين. يساعد التتبع على مراقبة التغيرات الموسمية وثقب الأوزون.",whatTrendShowsEn:"Strong latitudinal bands and spring polar depletion cycles show how atmospheric circulation redistributes ozone around the globe.",whatTrendShowsAr:"توضح الخرائط التوزيع عبر خطوط العرض والتغيرات الموسمية في طبقة الأوزون حول العالم.",limitationEn:"Column measurement combines stratospheric (~90%) and tropospheric (~10%) ozone; daily frames may show narrow orbital gaps.",limitationAr:"يقيس العمود الكلي الأوزون الستراتوسفيري والسطحي معاً، وقد تظهر فجوات مدارية بسيطة في بعض الأيام."},{id:"air_co",stageId:"air",gibsLayerId:"AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Monthly_Day",colormapId:"AIRS_Carbon_Monoxide_Volume_Mixing_Ratio",legendUrl:"https://gibs.earthdata.nasa.gov/legends/AIRS_Carbon_Monoxide_Volume_Mixing_Ratio_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Carbon Monoxide (CO at 500 hPa)",titleAr:"أول أكسيد الكربون (CO عند 500 هكتوباسكال)",provider:"NASA JPL / Aqua AIRS (L3 Monthly)",variableEn:"Carbon Monoxide Mixing Ratio",variableAr:"نسبة مزج أول أكسيد الكربون",unitEn:"ppbv",unitAr:"جزء/مليار",isProxy:!1,proxyBadgeEn:"Combustion Tracer",proxyBadgeAr:"مؤشر الاحتراق والحرائق",availableRange:{start:"2002-09-01",end:"2026-09-01"},skipDates:["2025-05-01","2025-06-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-09-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"08",day:"01"},valueDomain:{min:40,max:250},pairedPowerParam:null,whatItIsEn:"Carbon monoxide (CO) is a colorless, toxic gas produced by incomplete burning of fossil fuels, biomass, and wildfires. Aqua AIRS tracks mid-tropospheric CO concentrations globally every month in parts per billion by volume (ppbv).",whatItIsAr:"أول أكسيد الكربون غاز سام ينتج عن الاحتراق غير الكامل للوقود الأحفوري وحرائق الغابات، ويرصده مسبار AIRS على القمر أكوا شهرياً بوحدة جزء في المليار (ppbv).",whyItMattersEn:"CO persists for weeks in the atmosphere, travelling across oceans to degrade downwind air quality and contributing to ground-level ozone formation.",whyItMattersAr:"يبقى الغاز لأسابيع في الجو وينتقل عبر القارات مسبباً تدهور جودة الهواء وتكوّن الأوزون السطحي الضار.",whatTrendShowsEn:"Plumes highlight major wildfire seasons (Amazon, Central Africa, boreal forests) and urban/industrial combustion corridors.",whatTrendShowsAr:"تُبرز الأعمدة المرتفعة مواسم حرائق الغابات الكبرى وممرات الانبعاثات الصناعية.",limitationEn:"Measured at 500 hPa (~5.5 km altitude), capturing transported plumes rather than direct street-level exhaust.",limitationAr:"يُقاس على مستوى ضغط 500 هكتوباسكال (~5.5 كم ارتفاعاً)، مما يعكس انتقال السحب الملوثة أكثر من عوادم الشوارع المباشرة."}]},{id:"water",stageNumber:2,titleEn:"Stage 2: Water Pollution",titleAr:"المرحلة 2: تلوث المياه",shortEn:"Water Pollution",shortAr:"تلوث المياه",subtitleEn:"Ocean chlorophyll-a (algal blooms), sea surface temperature stress, and coastal turbidity/ocean color.",subtitleAr:"الكلوروفيل-أ (الازدهار الطحلبي)، وحرارة سطح البحر، ولون المحيط وعكارة الرواسب الساحلية.",accentColor:"#10b981",honestyBannerEn:null,honestyBannerAr:null,presets:[{id:"nile_delta_sea",nameEn:"Nile Delta Coast",nameAr:"ساحل دلتا النيل",lat:31.65,lon:31.1},{id:"gulf_mexico",nameEn:"Gulf of Mexico",nameAr:"خليج المكسيك",lat:28.8,lon:-89.4},{id:"baltic_sea",nameEn:"Baltic Sea",nameAr:"بحر البلطيق",lat:57.5,lon:19.5},{id:"red_sea",nameEn:"Red Sea",nameAr:"البحر الأحمر",lat:24.5,lon:36.2}],defaultZoom:5,animations:[{id:"water_chlorophyll",stageId:"water",gibsLayerId:"MODIS_Aqua_L2_Chlorophyll_A",colormapId:"MODIS_Chlorophyll",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Chlorophyll_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,ext:"png",titleEn:"Chlorophyll-a (Algal Blooms)",titleAr:"الكلوروفيل-أ (الازدهار الطحلبي)",provider:"NASA OBPG / Aqua MODIS (L2)",variableEn:"Chlorophyll-a Concentration",variableAr:"تركيز الكلوروفيل-أ",unitEn:"mg/m³",unitAr:"ملغم/م³",isProxy:!1,proxyBadgeEn:"Algal Bloom Indicator",proxyBadgeAr:"مؤشر ازدهار الطحالب",availableRange:{start:"2002-07-04",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"15"},valueDomain:{min:.01,max:10},pairedPowerParam:null,whatItIsEn:"Chlorophyll-a measures the concentration of microscopic marine algae (phytoplankton) in surface ocean and coastal waters, retrieved by NASA’s Aqua MODIS sensor.",whatItIsAr:"يقيس الكلوروفيل-أ تركيز العوالق النباتية والطحالب الدقيقة في المياه السطحية للبحار والسواحل عبر القمر الصناعي أكوا (MODIS).",whyItMattersEn:"Excess fertilizer and sewage runoff trigger massive algal blooms (eutrophication). When blooms die and decay, they strip oxygen from water and create marine dead zones.",whyItMattersAr:"يؤدي تسرب الأسمدة ومياه الصرف إلى انفجار نمو الطحالب (التخثث)، وعند تحللها تستهلك الأكسجين مسببة مناطق ميتة تقتل الأسماك.",whatTrendShowsEn:"Bright green/yellow coastal hotspots near river deltas and enclosed seas reveal nutrient runoff and seasonal bloom outbreaks.",whatTrendShowsAr:"تُظهر البقع الساحلية المرتفعة عند مصبات الأنهار والبحار المغلقة تركيزات التغذية الزائدة ومواسم الازدهار الطحلبي.",limitationEn:"Optical sensor cannot see through clouds or sun glint; blank/missing coastal pixels occur on cloudy sample dates.",limitationAr:"تتأثر القياسات الضوئية بالسحب وانعكاس الشمس، وقد تظهر فراغات في الأيام الغائمة، ولا تغطي الأنهار الصغيرة."},{id:"water_sst",stageId:"water",gibsLayerId:"MODIS_Aqua_L3_SST_Thermal_4km_Day_Monthly",colormapId:"MODIS_Sea_Surface_Temperature",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Sea_Surface_Temperature_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Sea Surface Temperature (Thermal Stress)",titleAr:"درجة حرارة سطح البحر (الإجهاد الحراري)",provider:"NASA OBPG / PO.DAAC / Aqua MODIS (L3 Monthly)",variableEn:"Sea Surface Temperature",variableAr:"درجة حرارة سطح البحر",unitEn:"°C",unitAr:"م°",isProxy:!1,proxyBadgeEn:"Thermal & Hypoxia Risk",proxyBadgeAr:"الإجهاد الحراري ونقص الأكسجين",availableRange:{start:"2002-07-01",end:"2026-04-01"},skipDates:["2022-11-01","2022-12-01","2023-06-01","2023-10-01","2025-12-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-04-01",defaultYearlyRange:{startYear:2012,endYear:2025,month:"08",day:"01"},valueDomain:{min:0,max:32},pairedPowerParam:null,whatItIsEn:"Monthly 4 km Sea Surface Temperature (SST) measures the thermal energy of the top millimeter of ocean water in degrees Celsius.",whatItIsAr:"تقيس هذه الطبقة الشهرية بدقة 4 كم درجة حرارة الطبقة السطحية للمحيطات والبحار بالدرجة المئوية.",whyItMattersEn:"Warmer waters hold less dissolved oxygen, amplify thermal pollution near coastal outflows, accelerate harmful algal blooms, and trigger coral bleaching.",whyItMattersAr:"تحتفظ المياه الأكثر دفئاً بكمية أقل من الأكسجين المذاب، مما يفاقم التلوث الحراري ويسرّع ازدهار الطحالب السامة وابيضاض الشعاب المرجانية.",whatTrendShowsEn:"Warming coastal seas and summer marine heatwaves shift acoustic pitch higher during peak thermal stress months.",whatTrendShowsAr:"توضح الموجات الحرارية البحرية وارتفاع حرارة السواحل صيفاً، حيث ترتفع النغمة الصوتية مع ارتفاع الحرارة.",limitationEn:"Covers oceans and large seas (4 km grid); inland rivers and small lakes are masked out.",limitationAr:"تغطي المحيطات والبحار الكبيرة فقط بدقة 4 كم، ولا تشمل الأنهار أو البحيرات الصغيرة."},{id:"water_turbidity",stageId:"water",gibsLayerId:"MODIS_Aqua_CorrectedReflectance_TrueColor",colormapId:null,legendUrl:null,tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,ext:"jpeg",useLuminance:!0,titleEn:"Ocean Color & Coastal Turbidity Proxy",titleAr:"لون المحيط وعكارة الرواسب الساحلية",provider:"NASA LANCE / EOSDIS Aqua MODIS",variableEn:"Optical Water Reflectance (Luminance)",variableAr:"الانعكاس الضوئي الساحلي (السطوع)",unitEn:"% Luminance",unitAr:"٪ سطوع",isProxy:!0,proxyBadgeEn:"Optical Turbidity Proxy",proxyBadgeAr:"مؤشر بصري للعكارة والرواسب",availableRange:{start:"2002-07-03",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"15"},valueDomain:{min:0,max:100},pairedPowerParam:null,whatItIsEn:"True-color optical satellite imagery from Aqua MODIS reveals murky coastal sediment plumes, muddy river discharge, and green surface blooms directly in natural color. Brightness (luminance) is converted into sound because GIBS does not offer a dedicated multi-decade Kd490 turbidity colormap layer.",whatItIsAr:"صور الألوان الطبيعية الحقيقية من القمر أكوا تُظهر أعمدة الرواسب والطمي المصبوبة من الأنهار والعكارة الساحلية مباشرة، وتُحوّل درجة السطوع الضوئي إلى صوت لعدم توفر طبقة عكارة رقمية طويلة المدى في GIBS.",whyItMattersEn:"Turbid runoff carries suspended soils, microplastics, agricultural nutrients, and pollutants from watersheds into coastal fisheries.",whyItMattersAr:"تحمل أعمدة العكارة والرواسب الساحلية التربة المنجرفة والملوثات والمغذيات الزراعية من الأنهار إلى المناطق البحرية.",whatTrendShowsEn:"Brighter tan/green reflectance along coastlines and deltas produces higher audio pitches than deep clear blue ocean water.",whatTrendShowsAr:"تُنتج المياه العكرة الفاتحة عند الدلتا والسواحل نغمات أعلى مقارنة بالمياه العميقة الصافية الداكنة.",limitationEn:"Visual proxy: clouds also appear bright white and elevate luminance; inspect the map image alongside the sound.",limitationAr:"مؤشر بصري غير معاير رقمياً: السحب البيضاء ترفع السطوع أيضاً، لذا يُنصح بمقارنة النغمة مع الصورة."}]},{id:"soil",stageNumber:3,titleEn:"Stage 3: Soil Pollution (Condition Indicators)",titleAr:"المرحلة 3: تلوث التربة (مؤشرات حالة التربة)",shortEn:"Soil Indicators",shortAr:"مؤشرات التربة",subtitleEn:"Soil moisture (SMAP + POWER), vegetation health (NDVI), and land surface heat stress.",subtitleAr:"رطوبة التربة (SMAP وناسا باور)، وصحة الغطاء النباتي (NDVI)، والإجهاد الحراري لسطح الأرض.",accentColor:"#fbbf24",honestyBannerEn:"Scientific Transparency Note: NASA satellites do not directly measure chemical soil contamination (heavy metals, pesticides, or toxins). These three animations provide physical Soil Condition Indicators—moisture, vegetation vitality, and surface heat—to track land degradation and vulnerability.",honestyBannerAr:"تنويه علمي صادق: لا تقيس أقمار ناسا التلوث الكيميائي المباشر للتربة (كالمعادن الثقيلة أو المبيدات). تُظهر هذه المرحلة مؤشرات حالة التربة الفيزيائية (الرطوبة، صحة النبات، وحرارة السطح) لرصد تدهور الأراضي وإجهادها.",presets:[{id:"zagazig",nameEn:"Zagazig (Nile Delta)",nameAr:"الزقازيق (دلتا النيل)",lat:30.5877,lon:31.502},{id:"central_valley",nameEn:"Central Valley (USA)",nameAr:"الوادي الأوسط (أمريكا)",lat:36.7468,lon:-119.7726},{id:"sahel_mali",nameEn:"Sahel Belt (Mali)",nameAr:"الساحل الأفريقي (مالي)",lat:14.5,lon:-4.2},{id:"amazon_basin",nameEn:"Amazon Basin",nameAr:"حوض الأمازون",lat:-3.4653,lon:-62.2159}],defaultZoom:5,animations:[{id:"soil_moisture",stageId:"soil",gibsLayerId:"SMAP_L4_Analyzed_Surface_Soil_Moisture",colormapId:"SMAP_Analyzed_Soil_Moisture",legendUrl:"https://gibs.earthdata.nasa.gov/legends/SMAP_Analyzed_Soil_Moisture_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Surface Soil Moisture (SMAP + POWER)",titleAr:"رطوبة التربة السطحية (SMAP وناسا باور)",provider:"NASA GSFC GMAO / SMAP L4 & NASA POWER",variableEn:"Volumetric Soil Moisture",variableAr:"رطوبة التربة الحجمية",unitEn:"m³/m³",unitAr:"م³/م³",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2015-03-31",end:"2026-10-15"},skipDates:["2025-10-15","2025-11-15","2026-08-15"],cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2015,endYear:2026,month:"07",day:"15"},valueDomain:{min:.02,max:.6},pairedPowerParam:"GWETTOP",pairedPowerSecondaryParam:"GWETROOT",whatItIsEn:"SMAP Level-4 Surface Soil Moisture tracks the volume of water per volume of soil (m³/m³) in the top 5 cm globally, paired here with NASA POWER GWETTOP (surface wetness 0–5 cm) and GWETROOT (root-zone wetness 0–100 cm).",whatItIsAr:"تقيس طبقة SMAP L4 حجم المياه في أعلى 5 سم من التربة عالمياً (م³/م³)، وتقترن هنا بمعاملات ناسا باور GWETTOP (رطوبة السطح) وGWETROOT (رطوبة منطقة الجذور حتى عمق 100 سم).",whyItMattersEn:"Severe soil drying accelerates desertification and dust erosion, while waterlogging increases agricultural runoff and salinity buildup—key physical stressors on soil ecosystems.",whyItMattersAr:"يؤدي جفاف التربة الشديد إلى التصحر وتآكلها، بينما يسبب التشبع المائي المفرط تملح التربة وجرف المغذيات والملوثات.",whatTrendShowsEn:"Seasonal irrigation, monsoon wetting, and multi-year droughts shift soil moisture levels and pitch across agricultural basins.",whatTrendShowsAr:"تعكس البيانات دورات الري والمواسم المطرية وموجات الجفاف الممتدة في الأحواض الزراعية.",limitationEn:"Soil Condition Indicator only: measures water content (9 km L4 assimilation), not heavy metals, pesticides, or chemical toxicity.",limitationAr:"مؤشر حالة فيزيائية فقط: يقيس المحتوى المائي بدقة ~9 كم ولا يرصد التلوث الكيميائي أو السموم."},{id:"soil_ndvi",stageId:"soil",gibsLayerId:"MODIS_Terra_L3_NDVI_Monthly",colormapId:"MODIS_L3_NDVI",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_L3_NDVI_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,ext:"png",titleEn:"Vegetation Health Index (NDVI)",titleAr:"مؤشر صحة الغطاء النباتي (NDVI)",provider:"NASA LP DAAC / Terra MODIS (L3 Monthly)",variableEn:"Normalized Difference Vegetation Index",variableAr:"مؤشر الغطاء النباتي الطبيعي",unitEn:"NDVI",unitAr:"NDVI",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2000-03-01",end:"2026-10-01"},skipDates:["2025-04-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-10-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:.05,max:.9},pairedPowerParam:null,whatItIsEn:"NDVI (0.0 to 1.0) measures plant chlorophyll greenness and canopy density from Terra MODIS monthly composites. Healthy soils generally sustain denser, greener vegetation.",whatItIsAr:"يقيس مؤشر NDVI (من 0 إلى 1) كثافة وصحة الكلوروفيل النباتي شهرياً عبر القمر تيرا، وتدعم التربة السليمة غطاءً نباتياً أكثر خضرة وكثافة.",whyItMattersEn:"Declining NDVI can signal soil degradation, salinization, deforestation, drought stress, or land-use damage that leaves soil exposed to erosion.",whyItMattersAr:"قد يشير تراجع المؤشر إلى تدهور التربة أو تملحها أو إزالة الغابات أو الإجهاد المائي الذي يعرّض التربة للتعرية.",whatTrendShowsEn:"Green agricultural valleys and forests produce high musical pitches, while barren land or stressed crops drop to lower pitches.",whatTrendShowsAr:"تُنتج الوديان الخضراء والغابات نغمات مرتفعة، بينما تنخفض النغمات في الأراضي القاحلة أو المتدهورة.",limitationEn:"Soil Condition Indicator only: low NDVI cannot distinguish chemical soil toxicity from drought, urban paving, or seasonal harvest.",limitationAr:"مؤشر حالة فيزيائية فقط: انخفاض الغطاء النباتي لا يميز بين التلوث الكيميائي والجفاف أو مواسم الحصاد أو العمران."},{id:"soil_lst",stageId:"soil",gibsLayerId:"MODIS_Terra_L3_Land_Surface_Temp_Monthly_Day",colormapId:"MODIS_Land_Surface_Temp",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",isKelvin:!0,titleEn:"Land Surface Temperature (Soil Heat Stress)",titleAr:"حرارة سطح الأرض (الإجهاد الحراري للتربة)",provider:"NASA LP DAAC / Terra MODIS (L3 Monthly)",variableEn:"Daytime Land Surface Temperature",variableAr:"درجة حرارة سطح الأرض نهاراً",unitEn:"°C",unitAr:"م°",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2000-03-01",end:"2026-10-01"},cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-10-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:0,max:55},pairedPowerParam:"TS",whatItIsEn:"Monthly Daytime Land Surface Temperature measures how hot the bare soil, crops, or urban ground skin actually gets under sunlight (converted from Kelvin to °C), paired with NASA POWER Earth Skin Temperature (TS).",whatItIsAr:"تقيس حرارة سطح الأرض الشهرية نهاراً مدى سخونة التربة المكشوفة أو المحاصيل تحت الشمس (محوَّلة من كلفن إلى مئوية)، وتقترن بمعامل حرارة الجلد الأرضي (TS) من ناسا باور.",whyItMattersEn:"Extreme soil surface temperatures bake organic matter, accelerate moisture loss, stress soil microbes, and intensify urban and agricultural heat islands.",whyItMattersAr:"تُسرّع الحرارة السطحية المفرطة تبخر رطوبة التربة وتضر بالمادة العضوية والكائنات الدقيقة وتفاقم جزر الحرارة.",whatTrendShowsEn:"Summer heating peaks and bare-soil heat islands drive sharp upward climbs in pitch compared to irrigated or vegetated land.",whatTrendShowsAr:"تُظهر ذروات الصيف والأراضي المكشوفة ارتفاعاً واضحاً في النغمة مقارنة بالأراضي المروية والمغطاة بالنبات.",limitationEn:"Soil Condition Indicator only: reflects daytime thermal skin stress rather than chemical soil contaminants.",limitationAr:"مؤشر حالة فيزيائية فقط: يعكس الإجهاد الحراري للسطح نهاراً ولا يقيس الملوثات الكيميائية في التربة."}]}],$l=qn.flatMap(i=>i.animations);function z0(i,e="monthly"){if(!i)return[];const t=new Set(i.skipDates||[]),n=[];if(e==="yearly"){const{startYear:m,endYear:u,month:g,day:x}=i.defaultYearlyRange;for(let y=m;y<=u;y++){const p=`${y}-${g}-${x}`;p>=i.availableRange.start&&p<=i.availableRange.end&&!t.has(p)&&n.push(p)}return n}const a=i.defaultMonthlyStart.split("-").map(Number),r=i.defaultMonthlyEnd.split("-").map(Number),o=i.cadenceType==="daily_midmonth"?"15":"01";let l=a[0],c=a[1];const d=r[0],h=r[1];for(;l<d||l===d&&c<=h;){const m=c<10?`0${c}`:`${c}`,u=`${l}-${m}-${o}`;u>=i.availableRange.start&&u<=i.availableRange.end&&!t.has(u)&&n.push(u),c++,c>12&&(c=1,l++)}return n}const Ut={T2M:{id:"T2M",nameEn:"Temperature (2m)",nameAr:"درجة الحرارة (ارتفاع 2م)",unitEn:"°C",unitAr:"م°",descriptionEn:"Air temperature at 2 meters above the surface of the earth.",descriptionAr:"درجة حرارة الهواء على ارتفاع مترين فوق سطح الأرض.",color:"#f97316",format:i=>`${i.toFixed(1)}°C`},PRECTOTCORR:{id:"PRECTOTCORR",nameEn:"Precipitation",nameAr:"هطول الأمطار",unitEn:"mm/day",unitAr:"ملم/يوم",descriptionEn:"The bias-corrected average precipitation at the surface.",descriptionAr:"متوسط هطول الأمطار المصحح عند السطح.",color:"#06b6d4",format:i=>`${i.toFixed(2)} mm/day`},RH2M:{id:"RH2M",nameEn:"Relative Humidity",nameAr:"الرطوبة النسبية",unitEn:"%",unitAr:"٪",descriptionEn:"Relative humidity at 2 meters above the surface of the earth.",descriptionAr:"الرطوبة النسبية للهواء على ارتفاع مترين فوق سطح الأرض.",color:"#3b82f6",format:i=>`${i.toFixed(1)}%`},ALLSKY_SFC_SW_DWN:{id:"ALLSKY_SFC_SW_DWN",nameEn:"Solar Radiation",nameAr:"الإشعاع الشمسي",unitEn:"kW-hr/m²/day",unitAr:"ك.و.س/م²/يوم",descriptionEn:"All Sky Surface Shortwave Downward Irradiance.",descriptionAr:"الإشعاع الشمسي قصير الموجة الساقط على السطح لكل سماء.",color:"#eab308",format:i=>`${i.toFixed(2)} kW-hr/m²/day`}},ma=[{id:"zagazig",nameEn:"Zagazig",nameAr:"الزقازيق",countryEn:"Egypt",countryAr:"مصر",lat:30.5877,lon:31.502,region:"Nile Delta"},{id:"alexandria",nameEn:"Alexandria",nameAr:"الإسكندرية",countryEn:"Egypt",countryAr:"مصر",lat:31.2001,lon:29.9187,region:"Mediterranean Coast"},{id:"cairo",nameEn:"Cairo",nameAr:"القاهرة",countryEn:"Egypt",countryAr:"مصر",lat:30.0444,lon:31.2357,region:"Capital Region"},{id:"aswan",nameEn:"Aswan",nameAr:"أسوان",countryEn:"Egypt",countryAr:"مصر",lat:24.0889,lon:32.8998,region:"Upper Egypt"}],sa=1990,Ii=new Date().getFullYear()-1,dr=new Map;function j0(i,e,t,n,a){return`${Number(i).toFixed(4)}_${Number(e).toFixed(4)}_${t}_${n}_${a}`}async function ur(i,e,t,n=sa,a=Ii,r=null){var u,g;const o=j0(i,e,t,n,a);if(dr.has(o))return{points:dr.get(o),fromCache:!0};const l=parseFloat(Number(i).toFixed(4)),c=parseFloat(Number(e).toFixed(4)),d=`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=${t}&community=RE&longitude=${c}&latitude=${l}&start=${n}&end=${a}&format=JSON`,h=new AbortController,m=setTimeout(()=>h.abort(),12e3);if(r){if(r.aborted)throw clearTimeout(m),new DOMException("Aborted","AbortError");r.addEventListener("abort",()=>h.abort())}try{const x=await fetch(d,{signal:h.signal});if(clearTimeout(m),!x.ok)throw new Error(`NASA POWER API HTTP ${x.status}: ${x.statusText||"Request failed"}`);const y=await x.json(),p=(g=(u=y==null?void 0:y.properties)==null?void 0:u.parameter)==null?void 0:g[t];if(!p||Object.keys(p).length===0)throw new Error("No parameter data returned from NASA POWER for this location");const f=[];for(let S=n;S<=a;S++){const E=`${S}13`;let _=p[E];if(_==null||_<=-900){let N=0,T=0;for(let v=1;v<=12;v++){const b=`${S}${v<10?"0"+v:v}`,L=p[b];L!=null&&L>-900&&(N+=L,T++)}if(T>0)_=N/T;else continue}f.push({year:S,value:parseFloat(_.toFixed(2))})}if(f.length<2)throw new Error("Insufficient valid time series observations returned from NASA POWER");return dr.set(o,f),{points:f,fromCache:!1}}catch(x){throw clearTimeout(m),x.name==="AbortError"||console.error(`NASA POWER API request failed for (${l}, ${c}):`,x),x}}const hd={AOD_55:{id:"AOD_55",community:"AG",nameEn:"Aerosol Optical Depth (550nm)",nameAr:"العمق البصري للهباء الجوي (550 نانومتر)",unitEn:"AOD",unitAr:"بلا وحدة",format:i=>`${Number(i).toFixed(3)}`},TO3:{id:"TO3",community:"AG",nameEn:"Total Column Ozone",nameAr:"إجمالي عمود الأوزون",unitEn:"DU",unitAr:"وحدة دوبسون",format:i=>`${Number(i).toFixed(1)} DU`},GWETTOP:{id:"GWETTOP",community:"AG",nameEn:"Surface Soil Wetness (0–5 cm)",nameAr:"رطوبة التربة السطحية (0–5 سم)",unitEn:"0–1",unitAr:"0–1",format:i=>`${Number(i).toFixed(3)}`},GWETROOT:{id:"GWETROOT",community:"AG",nameEn:"Root Zone Soil Wetness (0–100 cm)",nameAr:"رطوبة منطقة الجذور (0–100 سم)",unitEn:"0–1",unitAr:"0–1",format:i=>`${Number(i).toFixed(3)}`},TS:{id:"TS",community:"AG",nameEn:"Earth Skin Temperature",nameAr:"حرارة سطح التربة (الجلد الأرضي)",unitEn:"°C",unitAr:"م°",format:i=>`${Number(i).toFixed(1)}°C`}},hr=new Map;async function Xl(i,e,t,n=2e3,a=Ii,r=null){var u,g;const o=parseFloat(Number(i).toFixed(4)),l=parseFloat(Number(e).toFixed(4)),c=`m_${o}_${l}_${t}_${n}_${a}`;if(hr.has(c))return hr.get(c);const d=`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=${t}&community=AG&longitude=${l}&latitude=${o}&start=${n}&end=${a}&format=JSON`,h=new AbortController,m=setTimeout(()=>h.abort(),12e3);if(r){if(r.aborted)throw clearTimeout(m),new DOMException("Aborted","AbortError");r.addEventListener("abort",()=>h.abort())}try{const x=await fetch(d,{signal:h.signal});if(clearTimeout(m),!x.ok)throw new Error(`NASA POWER API HTTP ${x.status}: ${x.statusText||"Request failed"}`);const y=await x.json(),p=(g=(u=y==null?void 0:y.properties)==null?void 0:u.parameter)==null?void 0:g[t];if(!p||Object.keys(p).length===0)throw new Error(`No NASA POWER data returned for ${t} at (${o}, ${l})`);const f={};return Object.entries(p).forEach(([S,E])=>{if(E!=null&&E>-900&&S.length===6){const _=S.slice(0,4),N=S.slice(4,6);N!=="13"&&(f[`${_}-${N}`]=parseFloat(Number(E).toFixed(4)))}}),hr.set(c,f),f}catch(x){throw clearTimeout(m),x.name==="AbortError"||console.error(`NASA POWER monthly request failed for ${t}:`,x),x}}function V0({isOpen:i=!1,onClose:e=()=>{},lang:t="en"}){const n=Pt[t]||Pt.en,a=R.useRef(null);return R.useEffect(()=>{var r;i&&((r=a.current)==null||r.focus())},[i]),i?s.jsx("div",{className:"modal-backdrop",onClick:e,role:"presentation",children:s.jsxs("div",{className:"modal-content modal-about",role:"dialog","aria-modal":"true","aria-labelledby":"about-modal-title",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-row",children:[s.jsx(Ui,{className:"icon-md","aria-hidden":"true"}),s.jsx("h2",{id:"about-modal-title",className:"modal-title",children:n.aboutHeading})]}),s.jsx("button",{ref:a,type:"button",className:"btn-modal-close",onClick:e,"aria-label":n.shortcutClose,children:s.jsx(Ts,{className:"icon","aria-hidden":"true"})})]}),s.jsxs("div",{className:"modal-body about-body",children:[s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx("span",{className:"section-bullet",children:"🌍"}),s.jsx("span",{children:t==="ar"?"رسالة المشروع":"Project Mission"})]}),s.jsx("p",{className:"about-text",children:n.aboutMission})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(bs,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:n.howSonificationWorks})]}),s.jsx("p",{className:"about-text",children:n.sonificationExplanation}),s.jsxs("div",{className:"pixel-method-box",children:[s.jsx("h4",{className:"method-subtitle",children:t==="ar"?"آلية تحويل بكسل القمر الصناعي إلى نغمة صوتية:":"Satellite Pixel-to-Sound Conversion Methodology:"}),s.jsxs("ol",{className:"method-steps-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"1. استخراج البكسل:":"1. Pixel Extraction:"})," ",t==="ar"?'يتم إسقاط إحداثيات الموقع (خط العرض والطول) إلى إحداثيات البلاطة الفضائية (Tile coordinates) ورسمها على عنصر Canvas مخفي باستخدام خاصية crossOrigin="anonymous".':'The geographic coordinates (lat, lon) are projected to the Web Mercator tile index (z, y, x) and pixel offset (px, py). The tile is drawn on an offscreen HTML5 canvas using crossOrigin="anonymous".']}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"2. مطابقة خريطة الألوان:":"2. Colormap Nearest-Color Lookup:"})," ",t==="ar"?"تتم قراءة قيمة RGB ومطابقتها بأقرب لون في خريطة ألوان وكالة ناسا الرسمية (NASA GIBS Colormap XML v1.3) لحساب القيمة الفيزيائية الحقيقية.":"The RGB values are matched against NASA GIBS calibrated Colormap XML v1.3 entries using Euclidean color distance in RGB space to recover the physical variable (converting Kelvin to °C where needed)."]}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"3. بديل السطوع (Luminance):":"3. Luminance Fallback:"})," ",t==="ar"?"في طبقات الألوان الحقيقية (مثل مؤشر عكارة المياه الساحلية)، يتم حساب السطوع الفيزيائي (Y = 0.299R + 0.587G + 0.114B).":"For True Color optical imagery (e.g., coastal turbidity proxy), perceived luminance (Y = 0.299R + 0.587G + 0.114B) is computed directly."]}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"4. التحويل النغمي الخماسي:":"4. Dynamic Pentatonic Normalization:"})," ",t==="ar"?"تتم معايرة القيمة ديناميكياً (القيمة الأعلى = نغمة أعلى) وتحويلها إلى السلم الخماسي (C3 إلى C6) عبر Web Audio API مع مقارنة ستيريو مجسمة ونغمات الأرقام القياسية.":"Values are dynamically normalized across the frame series (higher value = higher pitch) onto a pentatonic scale (C3 ~131 Hz to C6 ~1047 Hz) via Web Audio API, with stereo left/right compare and record chimes."]})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(mi,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"مصادر بيانات مراحل التلوث (9 طبقات موثقة من NASA GIBS)":"Pollution Stages Datasets (9 Verified NASA GIBS Layers)"})]}),qn.map(r=>s.jsxs("div",{className:"about-stage-block",children:[s.jsx("h4",{className:"about-stage-subtitle",children:t==="ar"?r.titleAr:r.titleEn}),s.jsx("ul",{className:"about-gibs-list",children:r.animations.map(o=>s.jsxs("li",{className:"gibs-list-item",children:[s.jsxs("div",{className:"gibs-item-name",children:[t==="ar"?o.titleAr:o.titleEn," ",s.jsxs("span",{className:"about-range-pill",children:["(",o.availableRange.start," → ",o.availableRange.end,")"]})]}),s.jsxs("code",{className:"gibs-item-id",children:["GIBS ID: ",o.gibsLayerId," | ",o.provider," | Unit: ",o.unitEn,o.pairedPowerParam?` | POWER: ${o.pairedPowerParam}${o.pairedPowerSecondaryParam?`, ${o.pairedPowerSecondaryParam}`:""}`:""]}),s.jsx("div",{className:"gibs-item-desc",children:t==="ar"?o.limitationAr:o.limitationEn})]},o.id))})]},r.id))]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(bo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"وضع الحرارة والمناخ (NASA POWER و GIBS)":"Temperature Mode Sources (NASA POWER & GIBS)"})]}),s.jsx("ul",{className:"about-gibs-list",children:Xn.map(r=>s.jsxs("li",{className:"gibs-list-item",children:[s.jsxs("div",{className:"gibs-item-name",children:[r.nameEn," (",r.nameAr,")"]}),s.jsxs("code",{className:"gibs-item-id",children:["Layer ID: ",r.id," | Start: ",r.startDate]}),s.jsx("div",{className:"gibs-item-desc",children:r.descriptionEn})]},r.id))}),s.jsxs("p",{className:"about-text",style:{marginTop:"0.6rem"},children:[s.jsx("strong",{children:"NASA POWER Parameters (1990–2025):"})," ",[...Object.values(Ut),...Object.values(hd)].map(r=>`${r.id} (${r.unitEn})`).join(", "),"."]}),s.jsxs("div",{className:"links-row",children:[s.jsxs("a",{href:"https://gibs.earthdata.nasa.gov/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA GIBS Earthdata Portal"}),s.jsx(Hn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://power.larc.nasa.gov/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA POWER Data Portal"}),s.jsx(Hn,{className:"icon-xs","aria-hidden":"true"})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(la,{className:"icon-sm text-cyan","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"مركز معلومات الأرض ومرصد ناسا للتصور العلمي (NASA EIC & SVS)":"NASA Earth Information Center & Scientific Visualization Studio"})]}),s.jsx("p",{className:"about-text",children:t==="ar"?"تم إثراء أقسام الموقع (الهواء، الماء، التربة، والحرارة) بمحاكيات وبيانات مركز معلومات الأرض التابع لوكالة ناسا (NASA EIC) عبر منصة SVS:":"Enriched throughout Terra-Tone tabs with NASA Earth Information Center (EIC) supercomputer visualizations and scientific data:"}),s.jsxs("ul",{className:"about-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5276 (Change in Night Lights 2012–2023):"})," NASA Black Marble VIIRS calibrated nighttime radiance tracking decadal electrification and urban expansion."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #30910 (GEOS Aerosols 2017 Hurricane Season):"})," NASA GMAO ultra-high resolution GEOS forward processing simulating long-range smoke, dust, and sea salt transport."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #3912 / #5425 (Perpetual Ocean & Western Boundary Currents):"})," NASA JPL ECCO-2 ocean circulation model resolving thermal advection and surface velocity fields."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5196 (DYAMOND Atmospheric Carbon Dioxide):"})," NASA GMAO 3km global atmospheric simulation tracking synoptic weather advection of CO₂ plumes."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #4960 (3D View of an Atmospheric River):"})," NASA MERRA-2 and GPM IMERG 3D atmospheric moisture transport driving extreme coastal rainfall and soil saturation."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5064 (Daily Antarctic Sea Ice Extent):"})," Satellite passive microwave radiometers (SSMIS & AMSR-2) recording annual freeze-thaw cryospheric pulsation."]})]}),s.jsxs("div",{className:"links-row",children:[s.jsxs("a",{href:"https://www.nasa.gov/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA Earth Information Center"}),s.jsx(Hn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://svs.gsfc.nasa.gov/gallery/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA SVS EIC Gallery"}),s.jsx(Hn,{className:"icon-xs","aria-hidden":"true"})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(Es,{className:"icon-sm text-gold","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"الحدود العلمية والمؤشرات البديلة":"Scientific Limitations, Proxies & Gaps"})]}),s.jsxs("ul",{className:"about-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"PM2.5 Proxy (AOD):"})," Total atmospheric column Aerosol Optical Depth (~50 km MERRA-2) correlates with particulate haze but is not direct breathing-height PM2.5 µg/m³."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Coastal Turbidity Proxy:"})," True-color optical reflectance brightness detects river plumes and sediment but white clouds also raise brightness."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Soil Condition Indicators (Stage 3):"})," NASA satellites do not measure heavy metals, pesticides, or chemical soil toxicity. SMAP moisture, NDVI, and LST measure physical soil stress indicators only."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Spatial Resolution & Gaps:"})," Coarse grids (4–50 km) do not resolve narrow rivers or street blocks; optical sensors (Chlorophyll-a, NDVI, True Color) can have cloud/orbital gaps on individual dates."]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(Wd,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"معايير إمكانية الوصول الشامل (Accessibility)":"Accessibility Standards"})]}),s.jsxs("ul",{className:"about-list",children:[s.jsx("li",{children:t==="ar"?"تحكم كامل عبر لوحة المفاتيح دون تعطيل أزرار النموذج":"100% Keyboard Operable with native form/button behaviors preserved"}),s.jsx("li",{children:t==="ar"?"إعلانات ذكية لقارئات الشاشة (aria-live) مع خيار التحكم بالنطق أثناء التشغيل":"Smart aria-live region with configurable speech during playback toggle"}),s.jsx("li",{children:t==="ar"?"وضع التباين العالي الفائق متوافق مع معايير WCAG AAA":"High-contrast mode compliant with WCAG AAA contrast ratios (> 7:1)"}),s.jsx("li",{children:t==="ar"?"وضع تكبير الخطوط والرموز ويدعم شاشات 360px":"Large text mode, RTL Arabic support, reduced-motion compliance, and 360px mobile layout"}),s.jsx("li",{children:t==="ar"?"جدول بيانات نصي كبديل مباشر للمخطط البياني مع تصدير CSV و JSON":"Semantic HTML data table alternative with CSV, JSON, PNG ZIP, and WebM export"})]})]})]}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{type:"button",className:"btn-primary",onClick:e,children:n.shortcutClose})})]})}):null}const H0=({isOpen:i=!1,onClose:e=()=>{},lang:t="en",theme:n="dark"})=>(R.useEffect(()=>{const a=r=>{r.key==="Escape"&&i&&e()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[i,e]),i?s.jsx("div",{className:"eic-modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"eic-modal-title",children:s.jsxs("div",{className:"eic-modal-container",children:[s.jsxs("div",{className:"eic-modal-header",children:[s.jsxs("div",{className:"eic-modal-title-box",children:[s.jsxs("div",{className:"eic-badge-pill",children:[s.jsx(ni,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:"OFFICIAL NASA SVS & EIC SHOWCASE"})]}),s.jsx("h2",{id:"eic-modal-title",className:"eic-modal-heading",children:t==="ar"?"مركز معلومات الأرض — تجربة الاستكشاف المرئي والبياني":"NASA Earth Information Center — Visual & Graph Experience"})]}),s.jsx("button",{type:"button",className:"eic-modal-close-btn",onClick:e,"aria-label":t==="ar"?"إغلاق المعرض":"Close Exhibition",title:t==="ar"?"إغلاق (Esc)":"Close (Esc)",children:s.jsx(Ts,{className:"icon-sm"})})]}),s.jsx("div",{className:"eic-modal-body",children:s.jsx(F0,{lang:t,theme:n})})]})}):null);function ql(i,e,t){const n=Math.pow(2,t),a=Math.max(-85.0511,Math.min(85.0511,i)),r=(e+180)/360*n,o=a*Math.PI/180,l=(1-Math.log(Math.tan(o)+1/Math.cos(o))/Math.PI)/2*n;return{x:r,y:l}}function W0(i,e){const t=Math.max(.5,Math.abs((i.east??40)-(i.west??20))),n=Math.round(Math.log2(360*2.5/t));return Math.max(1,Math.min(e||6,n))}function zo(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(t),1500)}async function fd(i,e,t,n={}){const a=n.width||768,r=n.height||512,o=n.opacity??.85,l=n.lang||"en",c=n.locationA||null,d=n.locationB||null,h=!!n.isCompareMode,m=n.sampleA||null,u=n.sampleB||null,g=n.targetCanvas||document.createElement("canvas");g.width=a,g.height=r;const x=g.getContext("2d");x.fillStyle="#070a13",x.fillRect(0,0,a,r);const y=t||{west:((c==null?void 0:c.lon)??31.2)-18,east:((c==null?void 0:c.lon)??31.2)+18,south:((c==null?void 0:c.lat)??30)-12,north:((c==null?void 0:c.lat)??30)+12},p=W0(y,i.maxNativeZoom),f=Math.pow(2,p),S=(y.north+y.south)/2,E=(y.east+y.west)/2,_=ql(S,E,p),N=_.x*256,T=_.y*256,v=N-a/2,b=N+a/2,L=T-r/2,P=T+r/2,U=Math.floor(v/256),k=Math.floor(b/256),$=Math.max(0,Math.floor(L/256)),I=Math.min(f-1,Math.floor(P/256)),G=[];for(let H=$;H<=I;H++)for(let he=U;he<=k;he++){const ge=(he%f+f)%f;G.push({tx:he,wrappedTx:ge,ty:H})}const Q=G.map(async({tx:H,wrappedTx:he,ty:ge})=>{const ce=`https://a.basemaps.cartocdn.com/dark_all/${p}/${he}/${ge}.png`,Y=ln(i,e,p,ge,he),[Ae,_e]=await Promise.all([gs(ce),gs(Y)]);return{tx:H,ty:ge,baseRes:Ae,gibsRes:_e}}),j=await Promise.all(Q);for(const H of j){const he=Math.round(H.tx*256-v),ge=Math.round(H.ty*256-L);H.baseRes.ok&&H.baseRes.img&&x.drawImage(H.baseRes.img,he,ge,256,256)}x.save(),x.globalAlpha=o;for(const H of j){const he=Math.round(H.tx*256-v),ge=Math.round(H.ty*256-L);H.gibsRes.ok&&H.gibsRes.img&&x.drawImage(H.gibsRes.img,he,ge,256,256)}x.restore();const oe=(H,he,ge)=>{if(!H)return;const ce=ql(H.lat,H.lon,p),Y=ce.x*256-v,Ae=ce.y*256-L;if(Y<-20||Y>a+20||Ae<-20||Ae>r+20)return;x.save(),x.strokeStyle=he,x.lineWidth=2.5,x.beginPath(),x.arc(Y,Ae,10,0,Math.PI*2),x.stroke(),x.fillStyle=he,x.beginPath(),x.arc(Y,Ae,4,0,Math.PI*2),x.fill(),x.font="bold 12px Inter, sans-serif";const _e=ge?`${ge}: ${H.nameEn}`:H.nameEn,we=x.measureText(_e).width;x.fillStyle="rgba(7, 10, 19, 0.85)",x.fillRect(Y+12,Ae-11,we+10,20),x.strokeStyle=he,x.lineWidth=1,x.strokeRect(Y+12,Ae-11,we+10,20),x.fillStyle="#f8fafc",x.fillText(_e,Y+17,Ae+3),x.restore()};oe(c,"#38bdf8",h?"A":""),h&&d&&oe(d,"#f97316","B"),x.save(),x.fillStyle="rgba(7, 10, 19, 0.86)",x.fillRect(0,0,a,44),x.fillStyle="#38bdf8",x.fillRect(0,42,a,2),x.fillStyle="#f8fafc",x.font="bold 15px Inter, sans-serif";const V=i.titleEn;x.fillText(V,14,27);const te=i.proxyBadgeEn||"";if(te){x.font="bold 11px Inter, sans-serif";const H=x.measureText(te).width+16;x.fillStyle=i.isProxy?"rgba(251, 191, 36, 0.2)":"rgba(56, 189, 248, 0.2)",x.fillRect(a-H-14,10,H,24),x.strokeStyle=i.isProxy?"#fbbf24":"#38bdf8",x.lineWidth=1,x.strokeRect(a-H-14,10,H,24),x.fillStyle=i.isProxy?"#fbbf24":"#38bdf8",x.fillText(te,a-H-6,26)}x.fillStyle="rgba(7, 10, 19, 0.88)",x.fillRect(0,r-42,a,42),x.fillStyle="#fbbf24",x.font='bold 16px "JetBrains Mono", monospace',x.fillText(`DATE: ${e}`,14,r-15);let ie="Sample: —";m&&m.value!==null&&!isNaN(m.value)&&(ie=`A: ${m.label}`),h&&u&&u.value!==null&&!isNaN(u.value)&&(ie+=`  |  B: ${u.label}`),x.fillStyle="#f8fafc",x.font='600 13px "JetBrains Mono", monospace',x.fillText(ie,210,r-15),x.fillStyle="#94a3b8",x.font="11px Inter, sans-serif";const ye="NASA EOSDIS GIBS",De=x.measureText(ye).width;return x.fillText(ye,a-De-14,r-16),x.restore(),g}async function $0(i,e,t,n={},a={},r={},o=()=>{}){if(!i||!e||e.length===0)throw new Error("No animation frames available to export.");const l=new gd,c=l.folder(`${i.id}_frames`),d=document.createElement("canvas"),h=[];for(let g=0;g<e.length;g++){const x=e[g];o({current:g+1,total:e.length,date:x});const y=n[x]||null,p=a[x]||null;await fd(i,x,t,{...r,targetCanvas:d,sampleA:y,sampleB:p});const f=await new Promise((_,N)=>{d.toBlob(T=>{T?_(T):N(new Error(`Failed to encode PNG for frame ${x}`))},"image/png")}),E=`frame_${String(g+1).padStart(3,"0")}_${x}.png`;c.file(E,f),h.push({index:g,fileName:E,date:x,valueA:(y==null?void 0:y.value)??null,labelA:(y==null?void 0:y.label)??null,valueB:r.isCompareMode?(p==null?void 0:p.value)??null:null,labelB:r.isCompareMode?(p==null?void 0:p.label)??null:null})}const m={app:"Earth Jukebox — Pollution Stages Export",animationId:i.id,stageId:i.stageId,title:i.titleEn,gibsLayerId:i.gibsLayerId,provider:i.provider,variable:i.variableEn,unit:i.unitEn,isProxy:i.isProxy,limitation:i.limitationEn,availableRange:i.availableRange,locationA:r.locationA||null,locationB:r.isCompareMode?r.locationB:null,frames:h};c.file("frames_metadata.json",JSON.stringify(m,null,2));const u=await l.generateAsync({type:"blob"});zo(u,`${i.id}_satellite_frames.zip`)}async function X0(i,e,t,n={},a={},r={},o=()=>{}){if(!i||!e||e.length===0)throw new Error("No animation frames available to record.");if(typeof MediaRecorder>"u")throw new Error("WebM video capture (MediaRecorder API) is not supported in this browser.");const c=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(p=>MediaRecorder.isTypeSupported(p))||"";if(!c)throw new Error("No supported WebM codec found in this browser.");const d=document.createElement("canvas");if(d.width=r.width||768,d.height=r.height||512,typeof d.captureStream!="function")throw new Error("Canvas captureStream() is not supported in this browser.");const h=d.captureStream(12),m=new MediaRecorder(h,{mimeType:c,videoBitsPerSecond:25e5}),u=[];m.ondataavailable=p=>{p.data&&p.data.size>0&&u.push(p.data)};const g=new Promise((p,f)=>{m.onstop=()=>{const S=new Blob(u,{type:c});p(S)},m.onerror=S=>{f((S==null?void 0:S.error)||new Error("MediaRecorder failed during capture."))}});m.start(200);const x=r.frameHoldMs||380;for(let p=0;p<e.length;p++){const f=e[p];o({current:p+1,total:e.length,date:f}),await fd(i,f,t,{...r,targetCanvas:d,sampleA:n[f]||null,sampleB:a[f]||null}),await new Promise(S=>setTimeout(S,x))}m.stop();const y=await g;zo(y,`${i.id}_timelapse.webm`)}function q0(i,e,t,n,a,r={},o={},l=null){if(!i||!e||e.length===0)throw new Error("No frame data available to export.");const c={exportedAt:new Date().toISOString(),source:"Earth Jukebox — NASA GIBS & NASA POWER",stageId:i.stageId,animationId:i.id,titleEn:i.titleEn,titleAr:i.titleAr,gibsLayerId:i.gibsLayerId,colormapId:i.colormapId,provider:i.provider,variableEn:i.variableEn,unit:i.unitEn,isProxy:i.isProxy,proxyBadge:i.proxyBadgeEn,limitationEn:i.limitationEn,availableRange:i.availableRange,locationA:t?{name:t.nameEn,lat:t.lat,lon:t.lon}:null,locationB:a&&n?{name:n.nameEn,lat:n.lat,lon:n.lon}:null,pairedPowerParam:i.pairedPowerParam||null,pairedPowerSecondaryParam:i.pairedPowerSecondaryParam||null,powerMonthlySeries:l||null,frames:e.map((h,m)=>{const u=r[h]||null,g=a&&o[h]||null;return{index:m,date:h,locationA:u?{value:u.value,label:u.label,rgb:u.r!==void 0?[u.r,u.g,u.b]:null,isLuminance:!!u.isLuminance,missingOrCloud:!!(u.missingTile||u.emptyPixel)}:null,locationB:g?{value:g.value,label:g.label,rgb:g.r!==void 0?[g.r,g.g,g.b]:null,isLuminance:!!g.isLuminance,missingOrCloud:!!(g.missingTile||g.emptyPixel)}:null}})},d=new Blob([JSON.stringify(c,null,2)],{type:"application/json"});zo(d,`${i.id}_frames_data.json`)}const Y0={electric_bell:Kd,aerosol_wind:As,ocean_flow:Mo,carbon_pulse:ni,rain_marimba:ec,ice_crystal:hc},Z0=({resource:i,currentValue:e,isAudioEnabled:t=!0,onToggleAudio:n,audioVolume:a=.7,onChangeVolume:r,onPlayTestTone:o,isPlayingTone:l=!1,lang:c="en"})=>{const d=Oo[i.id]||{instrument:"electric_bell",nameEn:"Electric Bell Chime",nameAr:"رنين الجرس الكهربائي",conceptEn:"Scientific Radiance",conceptAr:"الإشعاع العلمي",iconColor:"#38bdf8"},{percentage:h,frequency:m,noteName:u}=Gi(i,e),g=Y0[d.instrument]||Kn,x=h<=33,y=h>33&&h<=66,p=x?"Low Tone (Bass Register)":y?"Medium Tone (Mid Register)":"High Tone (Treble Register)",f=x?"نغمة منخفضة (تردد عميق)":y?"نغمة معتدلة (تردد متوسط)":"نغمة مرتفعة (تردد حاد)",S=x?"tone-register-low":y?"tone-register-mid":"tone-register-high";return s.jsxs("div",{className:`eic-sonification-bar ${l?"tone-pulse-active":""}`,"aria-label":"NASA Scientific Sonification & Tones Bar",children:[s.jsxs("div",{className:"eic-audio-instrument-col",children:[s.jsx("div",{className:"eic-instrument-icon-box",style:{borderColor:d.iconColor,color:d.iconColor},children:s.jsx(g,{className:"icon-sm","aria-hidden":"true"})}),s.jsxs("div",{className:"eic-instrument-info",children:[s.jsx("div",{className:"eic-instrument-header",children:s.jsx("span",{className:"eic-instrument-tag",children:c==="ar"?"الآلة الصوتية المخصصة للمحاكاة":"Dedicated Visual Timbre"})}),s.jsx("h4",{className:"eic-instrument-name",children:c==="ar"?d.nameAr:d.nameEn}),s.jsx("p",{className:"eic-instrument-concept",children:c==="ar"?d.conceptAr:d.conceptEn})]})]}),s.jsxs("div",{className:"eic-audio-pitch-col",children:[s.jsxs("div",{className:"eic-pitch-meta-row",children:[s.jsxs("div",{className:"eic-pitch-stat",children:[s.jsx("span",{className:"stat-label",children:c==="ar"?"النسبة المئوية للظاهرة":"Intensity Percentage"}),s.jsxs("span",{className:"stat-value highlight-num",children:[h,"%"]})]}),s.jsxs("div",{className:`eic-register-pill ${S}`,children:[s.jsx(_s,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:c==="ar"?f:p})]}),s.jsxs("div",{className:"eic-pitch-stat",children:[s.jsx("span",{className:"stat-label",children:c==="ar"?"النغمة والتردد":"Musical Note & Frequency"}),s.jsxs("span",{className:"stat-value note-badge",children:[s.jsx("strong",{children:u})," • ",Math.round(m)," Hz"]})]})]}),s.jsxs("div",{className:"eic-pitch-gauge-wrap",children:[s.jsxs("div",{className:"eic-gauge-labels",children:[s.jsx("span",{className:"label-low",children:c==="ar"?"0% نغمة منخفضة (C3)":"0% Low Tone (C3)"}),s.jsx("span",{className:"label-mid",children:c==="ar"?"50% معتدل (G4)":"50% Mid (G4)"}),s.jsx("span",{className:"label-high",children:c==="ar"?"100% نغمة مرتفعة (C6)":"100% High Tone (C6)"})]}),s.jsxs("div",{className:"eic-pitch-gauge-track",children:[s.jsx("div",{className:`eic-pitch-gauge-fill ${S}`,style:{width:`${h}%`}}),s.jsx("div",{className:`eic-pitch-gauge-thumb ${l?"ping":""}`,style:{left:`${h}%`}})]})]})]}),s.jsxs("div",{className:"eic-audio-controls-col",children:[s.jsxs("button",{type:"button",className:"btn-eic-test-tone",onClick:o,title:c==="ar"?"استمع للنغمة الحالية عند هذه النسبة المئوية":"Audition tone for current percentage","aria-label":c==="ar"?"استمع للنغمة الحالية":"Audition current tone",children:[s.jsx(Kn,{className:"icon-xs"}),s.jsx("span",{children:c==="ar"?"تجربة النغمة":"Test Tone"})]}),s.jsx("button",{type:"button",className:`btn-eic-sound-toggle ${t?"sound-active":"sound-muted"}`,onClick:n,title:t?c==="ar"?"كتم النغمات الصوتية أثناء الفيديو":"Mute visual sonification tones":c==="ar"?"تفعيل النغمات الصوتية أثناء الفيديو":"Enable visual sonification tones","aria-pressed":t,"aria-label":t?c==="ar"?"كتم الصوت":"Mute sonification":c==="ar"?"تشغيل الصوت":"Unmute sonification",children:t?s.jsx(cn,{className:"icon-sm"}):s.jsx(Jn,{className:"icon-sm"})}),s.jsxs("div",{className:"eic-volume-slider-group",children:[s.jsx("input",{type:"range",min:0,max:1,step:.05,value:t?a:0,onChange:E=>{const _=parseFloat(E.target.value);r(_),_>0&&!t&&n()},className:"eic-volume-slider","aria-label":c==="ar"?"مستوى صوت النغمات الصوتية":"Visual sonification volume"}),s.jsx("span",{className:"eic-volume-text",children:t?`${Math.round(a*100)}%`:"0%"})]})]})]})};function K0({stageId:i="air",selectedAnimation:e=null,lang:t="en",theme:n="dark"}){var he,ge,ce;const a=(e==null?void 0:e.id)||i,r=A0(i),o=Hl(i,a),[l,c]=R.useState(o.id),[d,h]=R.useState(0),[m,u]=R.useState(!1),[g,x]=R.useState(1),[y,p]=R.useState(!0),[f,S]=R.useState(!1),[E,_]=R.useState(!0),[N,T]=R.useState(.7),[v,b]=R.useState(!1),L=R.useRef(null),P=R.useRef(E),U=R.useRef(N),k=R.useRef(0),$=R.useRef(null);R.useEffect(()=>{P.current=E},[E]),R.useEffect(()=>{U.current=N},[N]),R.useEffect(()=>{const Y=Hl(i,a);Y&&Y.id!==l&&(c(Y.id),h(0),u(!1),k.current=0)},[i,a]);const I=Tt.find(Y=>Y.id===l)||o,G=ms[a]||ms[i]||null,Q=R.useMemo(()=>Zt.getInterpolatedValuesAtTime(I,d),[I,d]),j=(ge=(he=I.graphConfig)==null?void 0:he.series)==null?void 0:ge[0],oe=j?(ce=Q[j.key])==null?void 0:ce.currentValue:null,V=R.useMemo(()=>typeof oe!="number"?null:Gi(I,oe),[I,oe]),te=R.useCallback((Y,Ae=!1)=>{var me,Re,Ve,Xe;if(!P.current&&!Ae)return;const _e=Zt.getInterpolatedValuesAtTime(I,Y),we=(Ve=(Re=(me=I.graphConfig)==null?void 0:me.series)==null?void 0:Re[0])==null?void 0:Ve.key,Ye=we?(Xe=_e[we])==null?void 0:Xe.currentValue:null;typeof Ye=="number"&&(Fo(I,Ye,U.current),b(!0),$.current&&clearTimeout($.current),$.current=setTimeout(()=>{b(!1)},280))},[I]),ie=R.useCallback(Y=>{if(L.current=Y,!Y)return;const Ae=()=>{const me=Y.currentTime||0;h(me),!Y.paused&&P.current&&(Math.abs(me-k.current)>=.4||me<k.current)&&(k.current=me,te(me))},_e=()=>u(!0),we=()=>u(!1),Ye=()=>{y?(Y.currentTime=0,k.current=0,Y.play().catch(()=>{})):u(!1)};return Y.addEventListener("timeupdate",Ae),Y.addEventListener("play",_e),Y.addEventListener("pause",we),Y.addEventListener("ended",Ye),Y.playbackRate=g,()=>{Y.removeEventListener("timeupdate",Ae),Y.removeEventListener("play",_e),Y.removeEventListener("pause",we),Y.removeEventListener("ended",Ye)}},[y,g,te]),ye=R.useCallback(()=>{const Y=L.current;Y&&(Y.paused?Y.play().catch(()=>{}):Y.pause())},[]),De=R.useCallback(Y=>{h(Y),L.current&&(L.current.currentTime=Y),k.current=Y,te(Y,!0)},[te]),H=R.useCallback(Y=>{x(Y),L.current&&(L.current.playbackRate=Y)},[]);return s.jsxs("section",{className:"card eic-integrated-card","aria-labelledby":"eic-section-heading",children:[s.jsxs("div",{className:"card-header eic-card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(la,{className:"section-icon text-cyan","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag",children:[s.jsx(ni,{className:"icon-xs","aria-hidden":"true"}),"NASA EARTH INFORMATION CENTER"]}),G&&s.jsxs("span",{className:"eic-connection-pill",children:[s.jsx(Od,{className:"icon-xs","aria-hidden":"true"}),t==="ar"?G.tagAr:G.tagEn]})]}),s.jsx("h2",{id:"eic-section-heading",className:"card-title",children:t==="ar"?I.titleAr:I.titleEn}),s.jsxs("p",{className:"card-sub",children:[I.dataProvider," â€¢ SVS #",I.svsId]})]})]}),r.length>1&&s.jsx("div",{className:"eic-switcher-group",role:"tablist","aria-label":"Available EIC Showcases",children:r.map(Y=>{const Ae=Y.id===I.id;return s.jsx("button",{type:"button",role:"tab","aria-selected":Ae,className:`eic-switcher-tab ${Ae?"active":""}`,onClick:()=>{c(Y.id),h(0),u(!1),k.current=0,L.current&&(L.current.currentTime=0),te(0,!0)},children:s.jsx("span",{children:t==="ar"?Y.titleAr:Y.titleEn})},Y.id)})})]}),G&&s.jsx("div",{className:"eic-connection-banner",role:"note",children:s.jsxs("p",{className:"eic-connection-text",children:[s.jsx("strong",{children:t==="ar"?"الصلة بالبيانات المعروضة: ":"Scientific Corroboration: "}),t==="ar"?G.noteAr:G.noteEn]})}),s.jsx(Z0,{resource:I,currentValue:oe,isAudioEnabled:E,onToggleAudio:()=>_(Y=>!Y),audioVolume:N,onChangeVolume:T,onPlayTestTone:()=>te(d,!0),isPlayingTone:v,lang:t}),s.jsxs("div",{className:"eic-main-experience-grid",children:[s.jsx("div",{className:"eic-column-left",children:s.jsx(ko,{resource:I,currentTime:d,isPlaying:m,playbackSpeed:g,onTogglePlay:ye,onVideoAttach:ie,isAudioEnabled:E,onToggleAudio:()=>_(Y=>!Y),currentToneInfo:V,isPlayingTone:v,lang:t})}),s.jsx("div",{className:"eic-column-right",children:s.jsx(Bo,{resource:I,currentTime:d,onSeek:De,lang:t,theme:n})})]}),s.jsx("div",{className:"eic-integrated-timeline-wrap",children:s.jsx(dd,{resource:I,currentTime:d,isPlaying:m,playbackSpeed:g,isLooping:y,onTogglePlay:ye,onSeek:De,onChangeSpeed:H,onToggleLoop:()=>p(Y=>!Y),isAudioEnabled:E,onToggleAudio:()=>_(Y=>!Y),audioVolume:N,onChangeVolume:T,lang:t})}),s.jsx("div",{className:"eic-meta-toggle-row",children:s.jsxs("button",{type:"button",className:"btn-eic-meta-toggle",onClick:()=>S(Y=>!Y),"aria-expanded":f,children:[s.jsx(sc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:f?t==="ar"?"Ø¥Ø®Ù Ø§Ø¡ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø©":"Hide Scientific Documentation & Instrument Details":t==="ar"?"Ø¹Ø±Ø¶ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© (NASA Attribution)":"View Scientific Documentation & Instrument Details (NASA Attribution)"}),f?s.jsx(ys,{className:"icon-xs"}):s.jsx(Ss,{className:"icon-xs"})]})}),f&&s.jsx("div",{className:"eic-metadata-drawer animate-fade-in",children:s.jsx(Go,{resource:I,lang:t})})]})}co.register(uo,ho,fo,po,mo,go,xo,vo);const J0={air:As,water:Mo,soil:$d};function Q0({lang:i="en",theme:e="dark",pollution:t,locationA:n,onSelectLocationA:a,locationB:r,onSelectLocationB:o,isCompareMode:l,onToggleCompareMode:c,volume:d,onChangeVolume:h,isMuted:m,onToggleMute:u,instrument:g,onChangeInstrument:x,quantizeScale:y,onToggleQuantizeScale:p,onAnnounce:f}){var $i,ai,Xi,qi,Ln,Ea,Yi,Zi;const S=Pt[i]||Pt.en,{selectedStage:E,selectedAnimation:_,selectAnimation:N,cadence:T,setCadence:v,dates:b,currentIndex:L,currentDate:P,setFrameIndex:U,isPlaying:k,togglePlay:$,stepForward:I,stepBackward:G,playbackSpeed:Q,setPlaybackSpeed:j,isLooping:oe,setIsLooping:V,gibsOpacity:te,setGibsOpacity:ie,colormapData:ye,colormapLoading:De,samplingLoading:H,powerData:he,samplesByDateA:ge,samplesByDateB:ce,seriesA:Y,seriesB:Ae,statsA:_e,pitchMappingText:we,playSinglePixelValue:Ye,isScanning:me,scanProgress:Re,startFrameScan:Ve,error:Xe,retry:Ee}=t,[ze,Qe]=R.useState("eic"),[Te,it]=R.useState(!1),[ct,at]=R.useState(!1),[F,rt]=R.useState("A"),[et,tt]=R.useState(!1),[Se,mt]=R.useState(null),[Oe,je]=R.useState(!1),[w,A]=R.useState(null),[D,se]=R.useState(0),[K,de]=R.useState(!1),fe=typeof window<"u"&&"speechSynthesis"in window,[Z,B]=R.useState({active:null,progress:null,error:null,successMsg:null}),ee=R.useRef(null),C=R.useRef(null),J=R.useRef(null),X=R.useRef(null),le=R.useRef(null),re=R.useRef(null),pe=R.useRef(null),xe=ge[P]||w||(($i=Y[L])==null?void 0:$i.sample)||null,Ne=l&&(ce[P]||((ai=Ae[L])==null?void 0:ai.sample))||null;R.useEffect(()=>{var O,W;if(!ee.current||C.current)return;const ae=(n==null?void 0:n.lat)??((O=E.presets[0])==null?void 0:O.lat)??30.0444,Ue=(n==null?void 0:n.lon)??((W=E.presets[0])==null?void 0:W.lon)??31.2357,We=Wt.map(ee.current,{center:[ae,Ue],zoom:E.defaultZoom||4,minZoom:2,maxZoom:12,scrollWheelZoom:!0,attributionControl:!0}),$e=Wt.tileLayer(e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; CARTO &copy; OpenStreetMap",subdomains:"abcd",maxZoom:19,crossOrigin:"anonymous"}).addTo(We);J.current=$e,C.current=We;const M=setTimeout(()=>We.invalidateSize(),250);return()=>{clearTimeout(M),We.remove(),C.current=null,X.current=null,re.current=null,pe.current=null}},[]),R.useEffect(()=>{if(!ee.current)return;const ae=new ResizeObserver(()=>{C.current&&C.current.invalidateSize()});return ae.observe(ee.current),()=>ae.disconnect()},[]),R.useEffect(()=>{if(!J.current)return;const ae=e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";J.current.setUrl(ae)},[e]),R.useEffect(()=>{const ae=C.current;if(!ae||!_||!P)return;const Ue=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${_.gibsLayerId}/default/${P}/${_.tileMatrixSet}/{z}/{y}/{x}.${_.ext}`;if(se(0),X.current&&le.current===_.id){X.current.setOpacity(te),X.current.setUrl(Ue);return}X.current&&(ae.removeLayer(X.current),X.current=null);const We=Wt.tileLayer(Ue,{attribution:"NASA EOSDIS GIBS",maxNativeZoom:_.maxNativeZoom,maxZoom:12,crossOrigin:"anonymous",opacity:te,errorTileUrl:'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="rgba(15,23,42,0.45)"/><text x="50%" y="50%" fill="%2364748b" font-family="sans-serif" font-size="11" text-anchor="middle">No Satellite Data</text></svg>'});We.on("tileerror",()=>{se($e=>$e+1)}),We.addTo(ae),X.current=We,le.current=_.id},[_,P,te]),R.useEffect(()=>{const ae=C.current;if(!ae)return;const Ue=(We,$e)=>Wt.divIcon({className:"custom-leaflet-marker",html:`
        <div class="marker-pin-wrap" style="--pin-color: ${We}">
          <div class="marker-pin">
            <span class="marker-badge">${$e}</span>
          </div>
        </div>
      `,iconSize:[36,42],iconAnchor:[18,42],popupAnchor:[0,-38]});if(n){const We=[n.lat,n.lon],$e=l?"A":"●";re.current?(re.current.setLatLng(We),re.current.setIcon(Ue("#38bdf8",$e))):re.current=Wt.marker(We,{icon:Ue("#38bdf8",$e)}).addTo(ae);const M=i==="ar"&&n.nameAr||n.nameEn,O=(xe==null?void 0:xe.label)||(H?"...":"No Data");re.current.bindPopup(`
        <div style="font-family:inherit;font-size:13px;min-width:170px;">
          <div style="font-weight:800;color:#38bdf8;margin-bottom:4px;">${M} ${l?"(A)":""}</div>
          <div style="font-size:11px;color:#94a3b8;font-family:monospace;margin-bottom:4px;">${n.lat.toFixed(3)}°, ${n.lon.toFixed(3)}°</div>
          <div style="padding:4px 8px;background:rgba(56,189,248,0.15);border-radius:6px;font-weight:700;color:#f8fafc;">
            ${P}: <span style="color:#38bdf8;">${O}</span>
          </div>
        </div>
      `)}if(l&&r){const We=[r.lat,r.lon];pe.current?(pe.current.setLatLng(We),pe.current.setIcon(Ue("#f97316","B"))):pe.current=Wt.marker(We,{icon:Ue("#f97316","B")}).addTo(ae);const $e=i==="ar"&&r.nameAr||r.nameEn,M=(Ne==null?void 0:Ne.label)||(H?"...":"No Data");pe.current.bindPopup(`
        <div style="font-family:inherit;font-size:13px;min-width:170px;">
          <div style="font-weight:800;color:#f97316;margin-bottom:4px;">${$e} (B)</div>
          <div style="font-size:11px;color:#94a3b8;font-family:monospace;margin-bottom:4px;">${r.lat.toFixed(3)}°, ${r.lon.toFixed(3)}°</div>
          <div style="padding:4px 8px;background:rgba(249,115,22,0.15);border-radius:6px;font-weight:700;color:#f8fafc;">
            ${P}: <span style="color:#f97316;">${M}</span>
          </div>
        </div>
      `)}else pe.current&&(ae.removeLayer(pe.current),pe.current=null)},[n,r,l,P,xe,Ne,H,i]),R.useEffect(()=>{const ae=C.current;if(!ae)return;const Ue=We=>{const{lat:$e,lng:M}=We.latlng,O={id:`custom_${$e.toFixed(3)}_${M.toFixed(3)}`,nameEn:`Custom (${$e.toFixed(2)}°, ${M.toFixed(2)}°)`,nameAr:`نقطة (${$e.toFixed(2)}°, ${M.toFixed(2)}°)`,lat:parseFloat($e.toFixed(4)),lon:parseFloat(M.toFixed(4)),isCustom:!0};!l||F==="A"?(a(O),l&&rt("B")):(o(O),rt("A")),ae.flyTo([$e,M],ae.getZoom(),{duration:.5})};return ae.on("click",Ue),()=>ae.off("click",Ue)},[l,F,a,o]);const ue=ae=>{!l||F==="A"?(a(ae),l&&rt("B")):(o(ae),rt("A")),C.current&&C.current.flyTo([ae.lat,ae.lon],E.defaultZoom||5,{duration:.7})},Fe=()=>{if(!navigator.geolocation){mt(S.gpsError);return}tt(!0),mt(null),navigator.geolocation.getCurrentPosition(ae=>{tt(!1);const{latitude:Ue,longitude:We}=ae.coords,$e={id:"gps_device",nameEn:`GPS (${Ue.toFixed(2)}°, ${We.toFixed(2)}°)`,nameAr:`موقع GPS (${Ue.toFixed(2)}°, ${We.toFixed(2)}°)`,lat:parseFloat(Ue.toFixed(4)),lon:parseFloat(We.toFixed(4))};!l||F==="A"?a($e):o($e),C.current&&C.current.flyTo([Ue,We],6,{duration:.8})},()=>{tt(!1),mt(S.gpsError)},{enableHighAccuracy:!0,timeout:9e3,maximumAge:6e4})},He=async()=>{var ae;if(n){je(!0);try{const Ue=Math.min(((ae=C.current)==null?void 0:ae.getZoom())||4,_.maxNativeZoom),We=mn(n.lat,n.lon,Ue),$e=ln(_,P,Ue,We.tileY,We.tileX),M=await Zn($e,We.pixelX,We.pixelY,ye,_);if(A(M),(M==null?void 0:M.value)!==null&&!isNaN(M.value)&&(Ye(M.value,l?-.75:0),f==null||f(`${P}: ${M.label}`)),l&&r){const O=mn(r.lat,r.lon,Ue),W=ln(_,P,Ue,O.tileY,O.tileX),z=await Zn(W,O.pixelX,O.pixelY,ye,_);(z==null?void 0:z.value)!==null&&!isNaN(z.value)&&Ye(z.value,.75)}}finally{je(!1)}}},ve=()=>{const ae=C.current;!ae||me||Ve(async Ue=>{const We=ae.getBounds(),$e=We.getWest(),M=We.getEast(),O=(We.getSouth()+We.getNorth())/2,W=Math.min(ae.getZoom(),_.maxNativeZoom),z=[];for(let q=0;q<Ue;q++){const be=$e+(M-$e)*(q/(Ue-1)),Pe=mn(O,be,W),Me=ln(_,P,W,Pe.tileY,Pe.tileX),Ce=await Zn(Me,Pe.pixelX,Pe.pixelY,ye,_);z.push((Ce==null?void 0:Ce.value)??null)}return z})},qe=R.useMemo(()=>{const ae=Y.map(W=>W.date),Ue=Y.map(W=>W.value),We=Y.map((W,z)=>{var q,be,Pe,Me;return z===L?7:(be=(q=_e==null?void 0:_e.recordsMap)==null?void 0:q[z])!=null&&be.isAllTimeMax||(Me=(Pe=_e==null?void 0:_e.recordsMap)==null?void 0:Pe[z])!=null&&Me.isAllTimeMin?5:3}),$e=Y.map((W,z)=>{var q,be,Pe,Me;return z===L?"#ffffff":(be=(q=_e==null?void 0:_e.recordsMap)==null?void 0:q[z])!=null&&be.isAllTimeMax?"#ef4444":(Me=(Pe=_e==null?void 0:_e.recordsMap)==null?void 0:Pe[z])!=null&&Me.isAllTimeMin?"#3b82f6":"#38bdf8"}),M=[{label:`${i==="ar"&&(n==null?void 0:n.nameAr)||(n==null?void 0:n.nameEn)} (${_.unitEn})`,data:Ue,borderColor:"#38bdf8",backgroundColor:"rgba(56, 189, 248, 0.12)",borderWidth:2.5,pointRadius:We,pointBackgroundColor:$e,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,tension:.25,spanGaps:!0,fill:!0}];l&&Ae.length>0&&M.push({label:`${i==="ar"&&(r==null?void 0:r.nameAr)||(r==null?void 0:r.nameEn)} (${_.unitEn})`,data:Ae.map(W=>W.value),borderColor:"#f97316",backgroundColor:"rgba(249, 115, 22, 0.08)",borderWidth:2.5,pointRadius:Ae.map((W,z)=>z===L?7:3),pointBackgroundColor:Ae.map((W,z)=>z===L?"#ffffff":"#f97316"),tension:.25,spanGaps:!0,fill:!0});const O=Y.some(W=>W.powerValue!==null&&!isNaN(W.powerValue));if(_.pairedPowerParam&&O){const W=hd[_.pairedPowerParam];M.push({label:`NASA POWER ${_.pairedPowerParam} (${(W==null?void 0:W.unitEn)||""})`,data:Y.map(z=>z.powerValue),borderColor:"#a855f7",borderDash:[5,4],borderWidth:2,pointRadius:2,spanGaps:!0,fill:!1})}return{labels:ae,datasets:M}},[Y,Ae,L,_e,n,r,l,_,i]),st=R.useMemo(()=>({id:"pollutionCursorPlugin",afterDatasetsDraw(ae){if(!Y||Y.length===0)return;const Ue=ae.ctx,We=ae.scales.x,$e=ae.scales.y;if(!We||!$e)return;const M=We.getPixelForTick(L);isNaN(M)||(Ue.save(),Ue.beginPath(),Ue.moveTo(M,$e.top),Ue.lineTo(M,$e.bottom),Ue.lineWidth=2,Ue.strokeStyle="#ffffff",Ue.setLineDash([4,4]),Ue.stroke(),Ue.fillStyle="#38bdf8",Ue.beginPath(),Ue.arc(M,$e.top,4.5,0,Math.PI*2),Ue.fill(),Ue.restore())}}),[L,Y]),zt=R.useMemo(()=>{const ae=e==="light";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:180},plugins:{legend:{position:"top",labels:{color:ae?"#0f172a":"#e2e8f0",font:{family:i==="ar"?"Cairo, sans-serif":"Inter, sans-serif",size:12,weight:"600"}}},tooltip:{backgroundColor:ae?"#0f172a":"rgba(15, 23, 42, 0.95)",titleColor:"#38bdf8",bodyColor:"#f8fafc",borderColor:ae?"#cbd5e1":"#334155",borderWidth:1}},scales:{x:{grid:{color:ae?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.3)"},ticks:{color:ae?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:11},maxTicksLimit:10}},y:{grid:{color:ae?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.3)"},ticks:{color:ae?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:11},callback:Ue=>`${Ue}`}}}}},[i,e]),xi=()=>{const ae=["Index","Date",`${(n==null?void 0:n.nameEn)||"Location A"} (${_.unitEn})`];l&&ae.push(`${(r==null?void 0:r.nameEn)||"Location B"} (${_.unitEn})`),_.pairedPowerParam&&ae.push(`NASA POWER ${_.pairedPowerParam}`);const Ue=Y.map((W,z)=>{var be;const q=[z+1,W.date,W.value??""];return l&&q.push(((be=Ae[z])==null?void 0:be.value)??""),_.pairedPowerParam&&q.push(W.powerValue??""),q.join(",")}),We=[ae.join(","),...Ue].join(`
`),$e=new Blob([We],{type:"text/csv;charset=utf-8;"}),M=URL.createObjectURL($e),O=document.createElement("a");O.href=M,O.download=`${_.id}_series.csv`,O.click(),setTimeout(()=>URL.revokeObjectURL(M),1e3)},ii=R.useMemo(()=>{var O,W;const ae=i==="ar"?(n==null?void 0:n.nameAr)||(n==null?void 0:n.nameEn):(n==null?void 0:n.nameEn)||"this location",Ue=i==="ar"?_.whatItIsAr:_.whatItIsEn,We=i==="ar"?_.whyItMattersAr:_.whyItMattersEn,$e=i==="ar"?_.whatTrendShowsAr:_.whatTrendShowsEn;let M="";if(_e&&_e.n>=2){const z=b[(O=_e.recordHigh)==null?void 0:O.year]||"",q=b[(W=_e.recordLow)==null?void 0:W.year]||"";i==="ar"?M=`في ${ae}، بلغ المتوسط ${_e.mean.toFixed(2)} ${_.unitAr}. وسُجّلت أعلى قيمة (${_e.max}) في ${z} وأدنى قيمة (${_e.min}) في ${q}.`:M=`At ${ae}, the sampled mean is ${_e.mean.toFixed(2)} ${_.unitEn}, peaking at ${_e.max} on ${z} and dipping to ${_e.min} on ${q}.`}return`${Ue} ${We} ${$e} ${M}`},[i,n,_,_e,b]),Ps=()=>{if(!fe)return;if(K){window.speechSynthesis.cancel(),de(!1);return}window.speechSynthesis.cancel();const ae=new SpeechSynthesisUtterance(ii);ae.lang=i==="ar"?"ar-SA":"en-US",ae.rate=.98,ae.onstart=()=>de(!0),ae.onend=()=>de(!1),ae.onerror=()=>de(!1),window.speechSynthesis.speak(ae)};R.useEffect(()=>()=>{fe&&window.speechSynthesis.cancel()},[_.id,fe]);const Hi=()=>{const ae=C.current;if(ae){const Ue=ae.getBounds();return{west:Ue.getWest(),east:Ue.getEast(),south:Ue.getSouth(),north:Ue.getNorth()}}return{west:((n==null?void 0:n.lon)??31.2)-18,east:((n==null?void 0:n.lon)??31.2)+18,south:((n==null?void 0:n.lat)??30)-12,north:((n==null?void 0:n.lat)??30)+12}},ba=async()=>{B({active:"zip",progress:{current:0,total:b.length,date:""},error:null,successMsg:null});try{await $0(_,b,Hi(),ge,ce,{opacity:te,lang:i,locationA:n,locationB:r,isCompareMode:l},ae=>B(Ue=>({...Ue,progress:ae}))),B({active:null,progress:null,error:null,successMsg:i==="ar"?`تم تصدير ${b.length} إطار PNG في ملف ZIP بنجاح.`:`Downloaded ${b.length} PNG frames + metadata in ZIP.`})}catch(ae){B({active:null,progress:null,error:(ae==null?void 0:ae.message)||"ZIP export failed.",successMsg:null})}},Sn=async()=>{B({active:"webm",progress:{current:0,total:b.length,date:""},error:null,successMsg:null});try{await X0(_,b,Hi(),ge,ce,{opacity:te,lang:i,locationA:n,locationB:r,isCompareMode:l},ae=>B(Ue=>({...Ue,progress:ae}))),B({active:null,progress:null,error:null,successMsg:i==="ar"?"تم تسجيل وتنزيل فيديو WebM بنجاح.":"Recorded and downloaded WebM timelapse video."})}catch(ae){B({active:null,progress:null,error:(ae==null?void 0:ae.message)||"WebM export failed.",successMsg:null})}},Wi=()=>{try{q0(_,b,n,r,l,ge,ce,he.primaryMap),B({active:null,progress:null,error:null,successMsg:i==="ar"?"تم تنزيل ملف JSON للتواريخ والقيم.":"Downloaded frame dates & values JSON."})}catch(ae){B({active:null,progress:null,error:(ae==null?void 0:ae.message)||"JSON export failed.",successMsg:null})}},Ma=J0[E.id]||As;return s.jsxs("div",{className:"pollution-stages-workspace",children:[s.jsxs("section",{className:"card stage-selector-card","aria-labelledby":"active-stage-heading",children:[s.jsxs("div",{className:"stage-header-row",children:[s.jsxs("div",{className:"stage-title-group",children:[s.jsx("div",{className:"stage-icon-pill",style:{borderColor:E.accentColor,color:E.accentColor},children:s.jsx(Ma,{className:"icon-md","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h2",{id:"active-stage-heading",className:"card-title",children:i==="ar"?E.titleAr:E.titleEn}),s.jsx("p",{className:"card-sub",children:i==="ar"?E.subtitleAr:E.subtitleEn})]})]}),s.jsxs("div",{className:"cadence-toggle-group",role:"group","aria-label":i==="ar"?"تردد الإطارات":"Time-Lapse Cadence",children:[s.jsx("button",{type:"button",className:`btn-cadence ${T==="monthly"?"active":""}`,onClick:()=>v("monthly"),"aria-pressed":T==="monthly",children:i==="ar"?"شهري (2024–2026)":"Monthly Steps"}),s.jsx("button",{type:"button",className:`btn-cadence ${T==="yearly"?"active":""}`,onClick:()=>v("yearly"),"aria-pressed":T==="yearly",children:i==="ar"?"سنوي (متعدد السنوات)":"Yearly Steps"})]})]}),E.honestyBannerEn&&s.jsxs("div",{className:"soil-honesty-banner",role:"note",children:[s.jsx(Es,{className:"icon-sm text-gold","aria-hidden":"true"}),s.jsx("p",{children:i==="ar"?E.honestyBannerAr:E.honestyBannerEn})]}),s.jsx("div",{className:"animation-cards-grid",role:"group","aria-label":i==="ar"?"الرسوم المتحركة الثلاثة في هذه المرحلة":"3 NASA Data Animations in this Stage",children:E.animations.map((ae,Ue)=>{const We=ae.id===_.id;return s.jsxs("button",{type:"button",className:`animation-card-btn ${We?"active":""}`,onClick:()=>N(ae.id),"aria-pressed":We,children:[s.jsxs("div",{className:"anim-card-top",children:[s.jsxs("span",{className:"anim-card-num",children:["#",Ue+1]}),s.jsx("span",{className:`anim-badge ${ae.isProxy?"badge-proxy":"badge-direct"}`,children:i==="ar"?ae.proxyBadgeAr:ae.proxyBadgeEn})]}),s.jsx("h3",{className:"anim-card-title",children:i==="ar"?ae.titleAr:ae.titleEn}),s.jsxs("div",{className:"anim-card-meta",children:[s.jsx("span",{className:"anim-provider",children:ae.provider}),s.jsxs("span",{className:"anim-range",children:[ae.availableRange.start.slice(0,7)," → ",ae.availableRange.end.slice(0,7)," • ",i==="ar"?ae.unitAr:ae.unitEn]})]})]},ae.id)})})]}),(De||H||he.loading)&&s.jsxs("div",{className:"loading-bar-wrap",role:"status","aria-live":"polite",children:[s.jsx(ca,{className:"icon-sm spin","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?`جاري تحميل إطارات وألوان ناسا (${_.titleAr})...`:`Loading real NASA GIBS frames & pixel series (${_.gibsLayerId})...`})]}),Xe&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ra,{className:"icon","aria-hidden":"true"}),s.jsxs("div",{className:"error-text",children:[s.jsxs("strong",{children:[i==="ar"?"خطأ في بيانات ناسا":"NASA Data Error",": "]}),s.jsx("span",{children:Xe})]}),s.jsx("button",{type:"button",className:"btn-retry",onClick:Ee,children:i==="ar"?"إعادة المحاولة":"Retry"})]}),s.jsx("div",{className:"view-mode-switcher-bar",children:s.jsxs("div",{className:"view-mode-pill-group",role:"tablist","aria-label":i==="ar"?"طريقة العرض الأساسية":"Primary View Mode",children:[s.jsxs("button",{type:"button",role:"tab","aria-selected":ze==="eic",className:`btn-view-mode ${ze==="eic"?"active":""}`,onClick:()=>Qe("eic"),children:[s.jsx(gr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?"مركز معلومات الأرض (NASA EIC): المحاكاة والمخطط العلمي":"NASA EIC: Visual & Scientific Graph"})]}),s.jsxs("button",{type:"button",role:"tab","aria-selected":ze==="satellite",className:`btn-view-mode ${ze==="satellite"?"active":""}`,onClick:()=>{Qe("satellite"),setTimeout(()=>{C.current&&C.current.invalidateSize()},120)},children:[s.jsx(xr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?"خريطة الأقمار الصناعية وتحويل البكسل لصوت (GIBS)":"Interactive Satellite Map & Sonifier"})]})]})}),s.jsx("div",{style:{display:ze==="eic"?"block":"none"},children:s.jsx(K0,{stageId:E.id,selectedAnimation:_,lang:i,theme:e})}),s.jsxs("div",{style:{display:ze==="satellite"?"block":"none"},children:[s.jsxs("div",{className:"grid-two-columns",children:[s.jsxs("section",{className:"card map-card","aria-labelledby":"pollution-map-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(xr,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-map-heading",className:"card-title",children:i==="ar"?_.titleAr:_.titleEn}),s.jsxs("p",{className:"card-sub",children:[S.clickMapToSelect," • ",s.jsx("code",{className:"inline-layer-id",children:_.gibsLayerId})]})]})]}),s.jsx("div",{className:"compare-toggle-wrap",children:s.jsxs("label",{className:"toggle-label",htmlFor:"pollution-compare-checkbox",children:[s.jsx("input",{id:"pollution-compare-checkbox",type:"checkbox",className:"toggle-checkbox",checked:l,onChange:ae=>c(ae.target.checked)}),s.jsx("span",{className:"toggle-switch"}),s.jsx("span",{className:"toggle-text",children:S.compareModeLabel})]})})]}),s.jsxs("div",{className:"presets-bar",role:"group","aria-label":S.locationPresetLabel,children:[s.jsxs("button",{type:"button",className:`preset-pill btn-gps-locate ${et?"loading":""}`,onClick:Fe,"aria-label":S.gpsBtn,children:[et?s.jsx(ca,{className:"preset-icon spin","aria-hidden":"true"}):s.jsx(ic,{className:"preset-icon icon-gps","aria-hidden":"true"}),s.jsx("span",{children:et?S.gpsLoading:S.gpsBtn})]}),E.presets.map(ae=>{const Ue=(n==null?void 0:n.id)===ae.id,We=l&&(r==null?void 0:r.id)===ae.id,$e=i==="ar"?ae.nameAr:ae.nameEn;return s.jsxs("button",{type:"button",className:`preset-pill ${Ue?"active-a":""} ${We?"active-b":""}`,onClick:()=>ue(ae),"aria-pressed":Ue||We,children:[s.jsx(rc,{className:"preset-icon","aria-hidden":"true"}),s.jsx("span",{children:$e}),Ue&&s.jsx("span",{className:"pill-badge pill-a",children:l?"A":"●"}),We&&s.jsx("span",{className:"pill-badge pill-b",children:"B"})]},ae.id)})]}),Se&&s.jsxs("div",{className:"gps-error-alert",role:"alert",children:[s.jsx(ra,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:Se})]}),s.jsxs("div",{className:"gibs-controls-toolbar",children:[s.jsxs("div",{className:"gibs-toolbar-row",children:[s.jsxs("div",{className:"gibs-date-badge",children:[s.jsx(rs,{className:"icon-xs text-orange","aria-hidden":"true"}),s.jsxs("span",{className:"gibs-date-text",children:[S.gibsDate,": ",s.jsx("strong",{children:P})," (",L+1,"/",b.length,")"]})]}),_.legendUrl?s.jsxs("button",{type:"button",className:`btn-legend-toggle ${ct?"active":""}`,onClick:()=>at(ae=>!ae),"aria-pressed":ct,children:[s.jsx(Ui,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:S.toggleLegend})]}):s.jsx("span",{className:"gibs-no-legend-tag",children:i==="ar"?"صور ألوان طبيعية (السطوع)":"True-Color Optical Reflectance"})]}),s.jsxs("div",{className:"gibs-sonify-actions-row",children:[s.jsxs("button",{type:"button",className:`btn-sonify-frame ${Oe?"loading":""}`,onClick:He,disabled:Oe,children:[s.jsx(Kn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Oe?i==="ar"?"جاري القراءة...":"Sampling...":S.sonifyPixelBtn})]}),s.jsxs("button",{type:"button",className:`btn-scan-frame ${me?"scanning":""}`,onClick:ve,disabled:me,children:[s.jsx(lc,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:me?S.scanning:S.scanFrameBtn})]}),s.jsxs("div",{className:"opacity-slider-wrap",children:[s.jsxs("span",{className:"opacity-label",children:[S.gibsOpacity,":"]}),s.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:te,onChange:ae=>ie(parseFloat(ae.target.value)),className:"gibs-opacity-slider","aria-label":S.gibsOpacity})]})]}),xe&&s.jsxs("div",{className:"sampled-pixel-callout",role:"status",children:[s.jsxs("div",{className:"callout-header",children:[s.jsxs("span",{className:"callout-title",children:[S.framePixelSampled," (",i==="ar"&&(n==null?void 0:n.nameAr)||(n==null?void 0:n.nameEn),"):"]}),s.jsx("span",{className:"callout-val",children:xe.label}),xe.r!==void 0&&s.jsxs("span",{className:"rgb-chip",style:{backgroundColor:`rgb(${xe.r}, ${xe.g}, ${xe.b})`},children:["RGB: ",xe.r,",",xe.g,",",xe.b]})]}),s.jsx("p",{className:"callout-notice",children:xe.missingTile||xe.emptyPixel?i==="ar"?"لا تتوفر بيانات قمر صناعي لهذه النقطة في هذا التاريخ (سحب أو فجوة مدارية).":"Cloud cover or orbital swath gap at this point on this frame date.":xe.isLuminance?S.luminanceNotice:S.colormapNotice})]}),ct&&_.legendUrl&&s.jsx("div",{className:"gibs-legend-drawer",children:s.jsx("div",{className:"legend-img-wrap",children:s.jsx("img",{src:_.legendUrl,alt:`${_.titleEn} NASA GIBS Legend`,className:"gibs-legend-img"})})})]}),l&&s.jsxs("div",{className:"compare-picker-bar",role:"radiogroup","aria-label":"Select target location",children:[s.jsx("span",{className:"picker-prompt",children:i==="ar"?"تعديل الهدف بالنقر:":"Set target on click:"}),s.jsxs("button",{type:"button",className:`btn-target ${F==="A"?"selected":""}`,onClick:()=>rt("A"),"aria-checked":F==="A",role:"radio",children:[s.jsx("span",{className:"color-dot dot-a"}),s.jsx("span",{children:S.locationA})]}),s.jsxs("button",{type:"button",className:`btn-target ${F==="B"?"selected":""}`,onClick:()=>rt("B"),"aria-checked":F==="B",role:"radio",children:[s.jsx("span",{className:"color-dot dot-b"}),s.jsx("span",{children:S.locationB})]})]}),s.jsxs("div",{className:"map-wrapper-relative",children:[s.jsx("div",{ref:ee,className:"map-container",tabIndex:"0","aria-label":`NASA GIBS map for ${_.titleEn} on ${P}`,role:"region"}),me&&Re!==null&&s.jsxs("div",{className:"scan-laser-line",style:{left:`${Re*100}%`},"aria-hidden":"true",children:[s.jsx("div",{className:"laser-beam"}),s.jsx("div",{className:"laser-glow"})]})]}),s.jsxs("div",{className:"map-footer",children:[s.jsxs("div",{className:"frame-overlay-indicator",children:[s.jsxs("span",{className:"overlay-badge",style:{backgroundColor:"#0284c7"},children:[i==="ar"&&(n==null?void 0:n.nameAr)||(n==null?void 0:n.nameEn),": ",(xe==null?void 0:xe.label)||"—"]}),l&&r&&s.jsxs("span",{className:"overlay-badge badge-b",style:{backgroundColor:"#ea580c"},children:[i==="ar"&&(r==null?void 0:r.nameAr)||(r==null?void 0:r.nameEn),": ",(Ne==null?void 0:Ne.label)||"—"]})]}),D>0&&s.jsx("span",{className:"tile-gap-note",children:i==="ar"?"بعض البلاطات بدون تغطية لهذا التاريخ":"Partial orbital/cloud tile gap"})]})]}),s.jsxs("section",{className:"card chart-card","aria-labelledby":"pollution-chart-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(mi,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsxs("h2",{id:"pollution-chart-heading",className:"card-title",children:[i==="ar"?"السلسلة الزمنية لقراءات الإطار":"Frame Pixel Time Series"," (",(Xi=b[0])==null?void 0:Xi.slice(0,7)," → ",(qi=b[b.length-1])==null?void 0:qi.slice(0,7),")"]}),s.jsxs("p",{className:"card-sub",children:[_.provider," • ",i==="ar"?_.variableAr:_.variableEn]})]})]}),s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${Te?"":"active"}`,onClick:()=>it(!1),"aria-pressed":!Te,children:[s.jsx(yo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:S.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${Te?"active":""}`,onClick:()=>it(!0),"aria-pressed":Te,children:[s.jsx(os,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:S.dataTableView})]})]})]}),Te?s.jsxs("div",{className:"pollution-table-panel",children:[s.jsx("div",{className:"table-toolbar-row",children:s.jsxs("button",{type:"button",className:"btn-download-csv",onClick:xi,children:[s.jsx(mr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:S.downloadCsv})]})}),s.jsx("div",{className:"table-scroll-container",children:s.jsxs("table",{className:"accessible-data-table",children:[s.jsxs("caption",{className:"sr-only",children:[_.titleEn," values across ",b.length," dates"]}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:i==="ar"?"التاريخ":"Frame Date"}),s.jsxs("th",{scope:"col",children:[i==="ar"?"الموقع أ":"Loc A"," (",_.unitEn,")"]}),l&&s.jsx("th",{scope:"col",children:i==="ar"?"الموقع ب":"Loc B"}),_.pairedPowerParam&&s.jsxs("th",{scope:"col",children:["POWER ",_.pairedPowerParam]}),s.jsx("th",{scope:"col",children:i==="ar"?"ملاحظة":"Notes"})]})}),s.jsx("tbody",{children:Y.map((ae,Ue)=>{var M,O,W;const We=Ue===L,$e=(M=_e==null?void 0:_e.recordsMap)==null?void 0:M[Ue];return s.jsxs("tr",{className:`${We?"current-row":""} ${$e!=null&&$e.isAllTimeMax?"row-record-high":""} ${$e!=null&&$e.isAllTimeMin?"row-record-low":""}`,onClick:()=>U(Ue,!0,!0),style:{cursor:"pointer"},children:[s.jsx("td",{className:"mono-cell",children:ae.date}),s.jsx("td",{className:"mono-cell",children:ae.value!==null?ae.value:"—"}),l&&s.jsx("td",{className:"mono-cell",children:((O=Ae[Ue])==null?void 0:O.value)!==null?Ae[Ue].value:"—"}),_.pairedPowerParam&&s.jsx("td",{className:"mono-cell",children:ae.powerValue!==null?ae.powerValue:"—"}),s.jsxs("td",{children:[($e==null?void 0:$e.isAllTimeMax)&&s.jsx("span",{className:"badge-rec badge-high",children:S.recordHigh}),($e==null?void 0:$e.isAllTimeMin)&&s.jsx("span",{className:"badge-rec badge-low",children:S.recordLow}),((W=ae.sample)==null?void 0:W.emptyPixel)&&s.jsx("span",{children:i==="ar"?"فجوة/سحب":"Cloud/Gap"})]})]},ae.date)})})]})})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"chart-canvas-wrapper",role:"img","aria-label":`Line chart of sampled ${_.titleEn} values`,children:s.jsx(_o,{data:qe,options:zt,plugins:[st]})}),s.jsxs("div",{className:"chart-highlights",children:[s.jsxs("div",{className:"highlight-pill highlight-current",children:[s.jsx("span",{className:"dot dot-white"}),s.jsxs("span",{className:"label",children:[P,": ",(xe==null?void 0:xe.label)||"—"]})]}),(_e==null?void 0:_e.recordHigh)&&s.jsxs("div",{className:"highlight-pill highlight-high",children:[s.jsx("span",{className:"dot dot-red"}),s.jsxs("span",{className:"label",children:[S.recordHigh,": ",_e.recordHigh.value," ",_.unitEn," (",b[_e.recordHigh.year],")"]})]}),(_e==null?void 0:_e.recordLow)&&s.jsxs("div",{className:"highlight-pill highlight-low",children:[s.jsx("span",{className:"dot dot-blue"}),s.jsxs("span",{className:"label",children:[S.recordLow,": ",_e.recordLow.value," ",_.unitEn," (",b[_e.recordLow.year],")"]})]})]})]})]})]}),s.jsxs("div",{className:"grid-two-columns",children:[s.jsxs("section",{className:"card timeline-controls-card","aria-labelledby":"pollution-timeline-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(rs,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-timeline-heading",className:"card-title",children:S.timelineHeading}),s.jsx("p",{className:"card-sub",children:i==="ar"?`${b[0]} إلى ${b[b.length-1]} (${b.length} إطاراً)`:`${b[0]} to ${b[b.length-1]} (${b.length} frames)`})]})]}),s.jsxs("div",{className:"current-year-badge","aria-live":"off",children:[s.jsx("span",{className:"year-label",children:i==="ar"?"التاريخ":"Frame"}),s.jsx("span",{className:"year-number mono-frame-date",children:P})]})]}),s.jsxs("div",{className:"slider-container",children:[s.jsx("input",{type:"range",min:"0",max:Math.max(0,b.length-1),step:"1",value:L,onChange:ae=>U(parseInt(ae.target.value,10),!0,!0),className:"timeline-slider","aria-label":i==="ar"?"شريط تمرير الإطارات الزمنية":"Scrub animation frame date","aria-valuetext":`${P}, ${(xe==null?void 0:xe.label)||"No data"}`}),s.jsxs("div",{className:"slider-ticks",children:[s.jsx("span",{children:b[0]}),s.jsx("span",{children:b[Math.floor(b.length/2)]}),s.jsx("span",{children:b[b.length-1]})]})]}),s.jsxs("div",{className:"controls-button-bar",children:[s.jsxs("div",{className:"playback-main-btns",children:[s.jsx("button",{type:"button",className:"btn-control btn-step",onClick:G,"aria-label":S.stepBack,children:s.jsx(cc,{className:"icon","aria-hidden":"true"})}),s.jsxs("button",{type:"button",className:`btn-control btn-play ${k?"playing":""}`,onClick:$,"aria-label":k?S.pause:S.play,children:[k?s.jsx(Ms,{className:"icon-md","aria-hidden":"true"}):s.jsx(Pn,{className:"icon-md","aria-hidden":"true"}),s.jsx("span",{children:k?S.pause:S.play})]}),s.jsx("button",{type:"button",className:"btn-control btn-step",onClick:I,"aria-label":S.stepForward,children:s.jsx(dc,{className:"icon","aria-hidden":"true"})})]}),s.jsxs("div",{className:"speed-control-group",children:[s.jsxs("span",{className:"control-label",children:[S.speed,":"]}),s.jsx("div",{className:"speed-pills",role:"group","aria-label":S.speed,children:[.5,1,1.5,2].map(ae=>s.jsxs("button",{type:"button",className:`btn-speed ${Q===ae?"active":""}`,onClick:()=>j(ae),"aria-pressed":Q===ae,children:[ae,"x"]},ae))})]}),s.jsxs("button",{type:"button",className:`btn-control btn-loop ${oe?"active":""}`,onClick:()=>V(ae=>!ae),"aria-pressed":oe,children:[s.jsx(Eo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:S.loop})]})]})]}),s.jsxs("section",{className:"card audio-controls-card","aria-labelledby":"pollution-audio-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Kn,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-audio-heading",className:"card-title",children:S.audioHeading}),s.jsx("p",{className:"card-sub",children:i==="ar"?"القيمة الأعلى = نغمة أعلى • تنبيهات الأرقام القياسية مفعلة":"Higher value = higher pitch • Record high/low chimes enabled"})]})]}),l&&s.jsxs("div",{className:"stereo-badge",role:"status",children:[s.jsx(bs,{className:"icon-sm","aria-hidden":"true"}),s.jsxs("span",{children:[S.spatialStereo," (L ⟷ R)"]})]})]}),s.jsxs("div",{className:"audio-controls-grid",children:[s.jsxs("div",{className:"control-group",children:[s.jsxs("div",{className:"control-label-row",children:[s.jsxs("label",{htmlFor:"pollution-volume-slider",className:"control-label",children:[s.jsx(uc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:S.volume})]}),s.jsx("span",{className:"control-value-text",children:m?"0%":`${Math.round(d*100)}%`})]}),s.jsxs("div",{className:"volume-slider-row",children:[s.jsx("button",{type:"button",className:`btn-mute-sm ${m?"muted":""}`,onClick:u,"aria-label":m?S.unmute:S.mute,children:m?s.jsx(Jn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(cn,{className:"icon-sm","aria-hidden":"true"})}),s.jsx("input",{id:"pollution-volume-slider",type:"range",min:"0",max:"1",step:"0.05",value:m?0:d,onChange:ae=>h(parseFloat(ae.target.value)),className:"volume-slider"})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("span",{className:"control-label",children:S.instrument}),s.jsx("div",{className:"instrument-button-group",role:"radiogroup",children:[{id:"sine",label:S.instrumentSine},{id:"triangle",label:S.instrumentTriangle},{id:"soft_pluck",label:S.instrumentPluck}].map(ae=>s.jsx("button",{type:"button",className:`btn-instrument ${g===ae.id?"active":""}`,onClick:()=>x(ae.id),role:"radio","aria-checked":g===ae.id,children:ae.label},ae.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("span",{className:"control-label",children:S.musicalScale}),s.jsxs("div",{className:"scale-toggle-wrap",children:[s.jsx("button",{type:"button",className:`btn-scale-toggle ${y?"active":""}`,onClick:()=>p(!0),"aria-pressed":y,children:S.scaleOn}),s.jsx("button",{type:"button",className:`btn-scale-toggle ${y?"":"active"}`,onClick:()=>p(!1),"aria-pressed":!y,children:S.scaleOff})]})]})]}),we&&s.jsxs("div",{className:"pitch-mapping-chip",role:"status",children:[s.jsx(ni,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{className:"mapping-label",children:S.pitchMappingLabel}),s.jsx("code",{className:"mapping-code",children:we})]})]})]})]}),s.jsxs("section",{className:"card insights-panel-card","aria-labelledby":"pollution-explanation-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Ui,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-explanation-heading",className:"card-title",children:i==="ar"?"الشرح العلمي المبسط":"Plain-Language Guide & Trend Insights"}),s.jsxs("p",{className:"card-sub",children:[_.provider," • ",i==="ar"?_.proxyBadgeAr:_.proxyBadgeEn]})]})]}),fe&&s.jsxs("button",{type:"button",className:`btn-speech btn-speak-summary ${K?"speaking":""}`,onClick:Ps,"aria-pressed":K,"aria-label":K?S.stopSpeakingBtn:S.readSummaryBtn,children:[K?s.jsx(Jn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(cn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:K?S.stopSpeakingBtn:S.readSummaryBtn})]})]}),s.jsxs("div",{className:"explanation-pillars-grid",children:[s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:i==="ar"?"ما هو هذا المتغير؟":"What This Variable Is"}),s.jsx("p",{children:i==="ar"?_.whatItIsAr:_.whatItIsEn})]}),s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:i==="ar"?"لماذا يهمنا؟":"Why It Matters"}),s.jsx("p",{children:i==="ar"?_.whyItMattersAr:_.whyItMattersEn})]}),s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:i==="ar"?"ماذا يوضح الاتجاه؟":"What the Trend Shows"}),s.jsx("p",{children:i==="ar"?_.whatTrendShowsAr:_.whatTrendShowsEn})]})]}),s.jsxs("div",{className:"limitation-footnote",children:[s.jsxs("strong",{children:[i==="ar"?"الحدود العلمية:":"Data Limitation:"," "]}),s.jsx("span",{children:i==="ar"?_.limitationAr:_.limitationEn})]})]}),s.jsxs("section",{className:"card export-feature-card export-game-card","aria-labelledby":"export-feature-heading",children:[s.jsx("div",{className:"card-header",children:s.jsxs("div",{className:"card-title-group",children:[s.jsx(zd,{className:"section-icon text-gold","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"export-feature-heading",className:"card-title",children:i==="ar"?"ميزة إضافية: تصدير الوسائط والبيانات (Export Suite)":"Added Feature: Media & Data Export"}),s.jsx("p",{className:"card-sub",children:i==="ar"?"تنزيل إطارات الأقمار الصناعية الحقيقية كحزمة صور PNG متسلسلة (ZIP)، أو فيديو WebM متحرك، أو ملفات JSON للتحليل الخارجي والبحث العلمي.":"Download composite satellite frames as a PNG image sequence (ZIP), WebM timelapse video, or structured JSON time-series for external analysis and research."})]})]})}),s.jsxs("div",{className:"export-actions-row",children:[s.jsxs("button",{type:"button",className:"btn-export btn-export-zip",onClick:ba,disabled:!!Z.active||b.length===0,children:[s.jsx(mr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Z.active==="zip"?`${i==="ar"?"جاري التجهيز":"Rendering"} (${((Ln=Z.progress)==null?void 0:Ln.current)||0}/${((Ea=Z.progress)==null?void 0:Ea.total)||b.length})...`:i==="ar"?`تنزيل تسلسل صور PNG (ZIP • ${b.length} إطار)`:`Export PNG Sequence (ZIP • ${b.length} frames)`})]}),s.jsxs("button",{type:"button",className:"btn-export btn-export-webm",onClick:Sn,disabled:!!Z.active||b.length===0,children:[s.jsx(gr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Z.active==="webm"?`${i==="ar"?"جاري التسجيل":"Recording"} (${((Yi=Z.progress)==null?void 0:Yi.current)||0}/${((Zi=Z.progress)==null?void 0:Zi.total)||b.length})...`:i==="ar"?"تسجيل فيديو WebM (Canvas Capture)":"Export WebM Video (Canvas Capture)"})]}),s.jsxs("button",{type:"button",className:"btn-export btn-export-json",onClick:Wi,disabled:!!Z.active||b.length===0,children:[s.jsx(Id,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?"تنزيل التواريخ والقيم (JSON)":"Download Dates & Values (JSON)"})]})]}),Z.active&&Z.progress&&s.jsxs("div",{className:"export-progress-wrap",role:"status","aria-live":"polite",children:[s.jsx("div",{className:"export-progress-bar",children:s.jsx("div",{className:"export-progress-fill",style:{width:`${Math.round(Z.progress.current/Math.max(1,Z.progress.total)*100)}%`}})}),s.jsxs("span",{className:"export-progress-label",children:[Z.progress.date," (",Z.progress.current," / ",Z.progress.total,")"]})]}),Z.error&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ra,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Z.error})]}),Z.successMsg&&s.jsx("div",{className:"export-success-banner",role:"status",children:s.jsx("span",{children:Z.successMsg})})]})]})}function Yl(i){const e=Math.max(0,Math.min(1,i));return e<.25?"#06b6d4":e<.5?"#3b82f6":e<.75?"#eab308":"#ef4444"}function ex({lang:i="en",theme:e="dark",locationA:t,onSelectLocationA:n,locationB:a,onSelectLocationB:r,isCompareMode:o,onToggleCompareMode:l,currentYear:c,dataA:d,dataB:h,primaryVariable:m,onPlayFramePixelTone:u,onStartFrameScan:g,isScanning:x=!1,scanProgress:y=null}){var Oe,je,w,A;const p=Pt[i]||Pt.en,f=Ut[m]||Ut.T2M,S=R.useRef(null),E=R.useRef(null),_=R.useRef(null),N=R.useRef(null),T=R.useRef(null),v=R.useRef(null),b=R.useRef(null),L=R.useRef(null),[P,U]=R.useState("A"),[k,$]=R.useState(!1),[I,G]=R.useState(null),[Q,j]=R.useState(Xn[0].id),[oe,V]=R.useState(.85),[te,ie]=R.useState(!1),[ye,De]=R.useState(!1),[H,he]=R.useState(null),[ge,ce]=R.useState("07"),[Y,Ae]=R.useState("15"),_e=`${c}-${ge}-${Y}`,[we,Ye]=R.useState(!1),[me,Re]=R.useState(null),[Ve,Xe]=R.useState(null),Ee=R.useMemo(()=>Xn.find(D=>D.id===Q)||Xn[0],[Q]);R.useEffect(()=>{let D=!1;return ud(Ee.id).then(se=>{D||he(se)}),()=>{D=!0}},[Ee.id]);const ze=d==null?void 0:d.find(D=>D.year===c),Qe=(ze==null?void 0:ze.value)??25,Te=(Qe-10)/30,it=Yl(Te),ct=h==null?void 0:h.find(D=>D.year===c),at=(ct==null?void 0:ct.value)??25,F=(at-10)/30,rt=Yl(F);R.useEffect(()=>{if(!S.current||E.current)return;const D=(t==null?void 0:t.lat)||30.5877,se=(t==null?void 0:t.lon)||31.502,K=Wt.map(S.current,{center:[D,se],zoom:7,minZoom:2,maxZoom:14,scrollWheelZoom:!0,attributionControl:!0}),de=Wt.tileLayer(e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; CARTO &copy; OpenStreetMap",subdomains:"abcd",maxZoom:19}).addTo(K);_.current=de,E.current=K;const fe=setTimeout(()=>{K.invalidateSize()},250);return()=>{clearTimeout(fe),K.remove(),E.current=null}},[]),R.useEffect(()=>{if(!S.current)return;const D=new ResizeObserver(()=>{E.current&&E.current.invalidateSize()});return D.observe(S.current),()=>D.disconnect()},[]),R.useEffect(()=>{if(!_.current)return;const D=e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";_.current.setUrl(D)},[e]),R.useEffect(()=>{const D=E.current;if(!D)return;N.current&&(D.removeLayer(N.current),N.current=null);const se=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${Ee.id}/default/${_e}/${Ee.tileMatrixSet}/{z}/{y}/{x}.${Ee.ext}`,K=Wt.tileLayer(se,{attribution:"NASA EOSDIS GIBS",maxNativeZoom:Ee.maxNativeZoom,maxZoom:18,crossOrigin:"anonymous",opacity:oe,errorTileUrl:'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="rgba(15,23,42,0.6)"/><text x="50%" y="50%" fill="%2364748b" font-family="sans-serif" font-size="12" text-anchor="middle">No Satellite Data</text></svg>'});K.addTo(D),N.current=K;const de=c+1<=new Date().getFullYear()-1?c+1:c,fe=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${Ee.id}/default/${de}-${ge}-${Y}/${Ee.tileMatrixSet}/6/32/38.${Ee.ext}`,Z=new Image;return Z.src=fe,()=>{N.current&&D&&(D.removeLayer(N.current),N.current=null)}},[Ee,_e,oe]),R.useEffect(()=>{const D=E.current;if(!D)return;const se=K=>{const{lat:de,lng:fe}=K.latlng,Z={id:`custom_${de.toFixed(3)}_${fe.toFixed(3)}`,nameEn:`Custom (${de.toFixed(2)}°, ${fe.toFixed(2)}°)`,nameAr:`نقطة (${de.toFixed(2)}°, ${fe.toFixed(2)}°)`,lat:parseFloat(de.toFixed(4)),lon:parseFloat(fe.toFixed(4)),isCustom:!0};!o||P==="A"?(n(Z),o&&U("B")):(r(Z),U("A")),D.flyTo([de,fe],D.getZoom(),{duration:.6}),setTimeout(()=>{P==="B"&&v.current?v.current.openPopup():T.current&&T.current.openPopup()},350)};return D.on("click",se),()=>{D.off("click",se)}},[o,P,n,r]),R.useEffect(()=>{const D=E.current;if(!D)return;const se=(K,de)=>Wt.divIcon({className:"custom-leaflet-marker",html:`
          <div class="marker-pin-wrap" style="--pin-color: ${K}">
            <div class="marker-pin">
              <span class="marker-badge">${de}</span>
            </div>
          </div>
        `,iconSize:[36,42],iconAnchor:[18,42],popupAnchor:[0,-38]});if(t){const K=[t.lat,t.lon],de=o?"A":"●";T.current?(T.current.setLatLng(K),T.current.setIcon(se("#38bdf8",de))):T.current=Wt.marker(K,{icon:se("#38bdf8",de)}).addTo(D);const Z=`
        <div style="font-family: inherit; font-size: 13px; min-width: 170px;">
          <div style="font-weight: 800; font-size: 14px; color: #38bdf8; margin-bottom: 4px;">
            📍 ${i==="ar"&&t.nameAr||t.nameEn} ${o?"(Loc A)":""}
          </div>
          <div style="color: #94a3b8; font-size: 11px; font-family: monospace; margin-bottom: 6px;">
            ${t.lat.toFixed(4)}°, ${t.lon.toFixed(4)}°
          </div>
          <div style="padding: 4px 8px; background: rgba(56, 189, 248, 0.15); border-radius: 6px; font-weight: 700; color: #f8fafc;">
            ${p.year} ${c}: <span style="color: #38bdf8;">${f.format(Qe)}</span>
          </div>
        </div>
      `;T.current.bindPopup(Z);const B=22e3+Te*45e3;b.current?(b.current.setLatLng(K),b.current.setRadius(B),b.current.setStyle({color:it,fillColor:it})):b.current=Wt.circle(K,{radius:B,color:it,fillColor:it,fillOpacity:.35,weight:2}).addTo(D)}if(o&&a){const K=[a.lat,a.lon];v.current?(v.current.setLatLng(K),v.current.setIcon(se("#f97316","B"))):v.current=Wt.marker(K,{icon:se("#f97316","B")}).addTo(D);const fe=`
        <div style="font-family: inherit; font-size: 13px; min-width: 170px;">
          <div style="font-weight: 800; font-size: 14px; color: #f97316; margin-bottom: 4px;">
            📍 ${i==="ar"&&a.nameAr||a.nameEn} (Loc B)
          </div>
          <div style="color: #94a3b8; font-size: 11px; font-family: monospace; margin-bottom: 6px;">
            ${a.lat.toFixed(4)}°, ${a.lon.toFixed(4)}°
          </div>
          <div style="padding: 4px 8px; background: rgba(249, 115, 22, 0.15); border-radius: 6px; font-weight: 700; color: #f8fafc;">
            ${p.year} ${c}: <span style="color: #f97316;">${f.format(at)}</span>
          </div>
        </div>
      `;v.current.bindPopup(fe);const Z=22e3+F*45e3;L.current?(L.current.setLatLng(K),L.current.setRadius(Z),L.current.setStyle({color:rt,fillColor:rt})):L.current=Wt.circle(K,{radius:Z,color:rt,fillColor:rt,fillOpacity:.35,weight:2}).addTo(D)}else v.current&&(D.removeLayer(v.current),v.current=null),L.current&&(D.removeLayer(L.current),L.current=null)},[t,a,o,Te,F,it,rt,c,Qe,at,f,i,p]);const et=D=>{!o||P==="A"?(n(D),o&&U("B")):(r(D),U("A")),E.current&&(E.current.invalidateSize(),E.current.flyTo([D.lat,D.lon],8,{duration:.9})),setTimeout(()=>{P==="B"&&v.current?v.current.openPopup():T.current&&T.current.openPopup()},450)},tt=()=>{if(!navigator.geolocation){G(p.gpsError);return}$(!0),G(null),navigator.geolocation.getCurrentPosition(D=>{$(!1);const{latitude:se,longitude:K}=D.coords,de={id:"gps_device",nameEn:`GPS (${se.toFixed(2)}°, ${K.toFixed(2)}°)`,nameAr:`موقع GPS (${se.toFixed(2)}°, ${K.toFixed(2)}°)`,lat:parseFloat(se.toFixed(4)),lon:parseFloat(K.toFixed(4)),isGps:!0};!o||P==="A"?(n(de),o&&U("B")):(r(de),U("A")),E.current&&(E.current.invalidateSize(),E.current.flyTo([se,K],9,{duration:1.1})),setTimeout(()=>{T.current&&T.current.openPopup()},500)},D=>{$(!1),console.warn("Geolocation error:",D),G(p.gpsError)},{enableHighAccuracy:!0,timeout:9e3,maximumAge:6e4})},Se=async()=>{var D;if(t){Ye(!0);try{const se=Math.min(((D=E.current)==null?void 0:D.getZoom())||6,Ee.maxNativeZoom),K=mn(t.lat,t.lon,se),de=ln(Ee.id,_e,se,K.tileY,K.tileX),fe=await Zn(de,K.pixelX,K.pixelY,H,Ee);if(Re(fe),(fe==null?void 0:fe.value)!==null&&!isNaN(fe.value)){const Z=(Ee.isTemperature,0),B=Ee.isTemperature?50:1;u==null||u(fe.value,Z,B,o?-.75:0)}if(o&&a){const Z=mn(a.lat,a.lon,se),B=ln(Ee.id,_e,se,Z.tileY,Z.tileX),ee=await Zn(B,Z.pixelX,Z.pixelY,H,Ee);if(Xe(ee),(ee==null?void 0:ee.value)!==null&&!isNaN(ee.value)){const C=(Ee.isTemperature,0),J=Ee.isTemperature?50:1;u==null||u(ee.value,C,J,.75)}}}catch(se){console.error("Error sampling frame pixel:",se)}finally{Ye(!1)}}},mt=()=>{const D=E.current;!D||x||g==null||g(async se=>{const K=D.getBounds(),de=K.getWest(),fe=K.getEast(),Z=K.getSouth(),B=K.getNorth(),ee=Math.min(D.getZoom(),Ee.maxNativeZoom),C=[];for(let J=0;J<se;J++){const X=de+(fe-de)*(J/(se-1)),le=Z+(B-Z)*.5,re=mn(le,X,ee),pe=ln(Ee.id,_e,ee,re.tileY,re.tileX);try{const xe=await Zn(pe,re.pixelX,re.pixelY,H,Ee);C.push((xe==null?void 0:xe.value)??0)}catch{C.push(0)}}return C})};return s.jsxs("section",{className:"card map-card","aria-labelledby":"map-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(xr,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"map-section-heading",className:"card-title",children:p.locationPresetLabel}),s.jsx("p",{className:"card-sub",children:p.clickMapToSelect})]})]}),s.jsx("div",{className:"compare-toggle-wrap",children:s.jsxs("label",{className:"toggle-label",htmlFor:"compare-mode-checkbox",children:[s.jsx("input",{id:"compare-mode-checkbox",type:"checkbox",className:"toggle-checkbox",checked:o,onChange:D=>l(D.target.checked)}),s.jsx("span",{className:"toggle-switch"}),s.jsx("span",{className:"toggle-text",children:p.compareModeLabel})]})})]}),s.jsxs("div",{className:"presets-bar",role:"group","aria-label":p.locationPresetLabel,children:[s.jsxs("button",{type:"button",className:`preset-pill btn-gps-locate ${k?"loading":""}`,onClick:tt,"aria-label":p.gpsBtn,title:p.gpsBtn,children:[k?s.jsx(ca,{className:"preset-icon spin","aria-hidden":"true"}):s.jsx(ic,{className:"preset-icon icon-gps","aria-hidden":"true"}),s.jsx("span",{children:k?p.gpsLoading:p.gpsBtn})]}),ma.map(D=>{const se=(t==null?void 0:t.id)===D.id,K=o&&(a==null?void 0:a.id)===D.id,de=i==="ar"?D.nameAr:D.nameEn;return s.jsxs("button",{type:"button",className:`preset-pill ${se?"active-a":""} ${K?"active-b":""}`,onClick:()=>et(D),"aria-pressed":se||K,title:`Open ${de}`,children:[s.jsx(rc,{className:"preset-icon","aria-hidden":"true"}),s.jsx("span",{children:de}),se&&s.jsx("span",{className:"pill-badge pill-a",children:o?"Loc A":"Open"}),K&&s.jsx("span",{className:"pill-badge pill-b",children:"Loc B"})]},D.id)})]}),I&&s.jsxs("div",{className:"gps-error-alert",role:"alert",children:[s.jsx(ra,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:I})]}),s.jsxs("div",{className:"gibs-controls-toolbar",children:[s.jsxs("div",{className:"gibs-toolbar-row",children:[s.jsxs("div",{className:"gibs-layer-picker",children:[s.jsxs("label",{htmlFor:"gibs-layer-select",className:"gibs-label",children:[s.jsx(mi,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{children:p.gibsLayerSelect})]}),s.jsx("select",{id:"gibs-layer-select",className:"control-select gibs-select",value:Q,onChange:D=>j(D.target.value),children:Xn.map(D=>s.jsx("option",{value:D.id,children:i==="ar"?D.nameAr:D.nameEn},D.id))})]}),s.jsxs("div",{className:"gibs-date-badge",children:[s.jsx(rs,{className:"icon-xs text-orange","aria-hidden":"true"}),s.jsxs("span",{className:"gibs-date-text",children:[p.gibsDate,": ",s.jsx("strong",{children:_e})]})]}),Ee.legendUrl&&s.jsxs("button",{type:"button",className:`btn-legend-toggle ${ye?"active":""}`,onClick:()=>De(D=>!D),"aria-pressed":ye,children:[s.jsx(Ui,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:p.toggleLegend})]})]}),s.jsxs("div",{className:"gibs-sonify-actions-row",children:[s.jsxs("button",{type:"button",className:`btn-sonify-frame ${we?"loading":""}`,onClick:Se,disabled:we,"aria-label":p.sonifyPixelBtn,children:[s.jsx(Kn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:we?"Reading Pixel...":p.sonifyPixelBtn})]}),s.jsxs("button",{type:"button",className:`btn-scan-frame ${x?"scanning":""}`,onClick:mt,disabled:x,"aria-label":p.scanFrameBtn,children:[s.jsx(lc,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:x?p.scanning:p.scanFrameBtn})]}),s.jsxs("div",{className:"opacity-slider-wrap",children:[s.jsxs("span",{className:"opacity-label",children:[p.gibsOpacity,":"]}),s.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:oe,onChange:D=>V(parseFloat(D.target.value)),className:"gibs-opacity-slider","aria-label":p.gibsOpacity})]})]}),me&&s.jsxs("div",{className:"sampled-pixel-callout",role:"status",children:[s.jsxs("div",{className:"callout-header",children:[s.jsxs("span",{className:"callout-title",children:[p.framePixelSampled," (",t==null?void 0:t.nameEn,"):"]}),s.jsx("span",{className:"callout-val",children:me.label}),me.r!==void 0&&s.jsxs("span",{className:"rgb-chip",style:{backgroundColor:`rgb(${me.r}, ${me.g}, ${me.b})`},children:["RGB: ",me.r,",",me.g,",",me.b]})]}),s.jsx("p",{className:"callout-notice",children:me.isLuminance?p.luminanceNotice:p.colormapNotice})]}),ye&&Ee.legendUrl&&s.jsx("div",{className:"gibs-legend-drawer",children:s.jsx("div",{className:"legend-img-wrap",children:s.jsx("img",{src:Ee.legendUrl,alt:`${Ee.nameEn} Legend`,className:"gibs-legend-img"})})})]}),o&&s.jsxs("div",{className:"compare-picker-bar",role:"radiogroup","aria-label":"Select target location to set",children:[s.jsx("span",{className:"picker-prompt",children:i==="ar"?"تعديل الهدف بالنقر:":"Set target on click:"}),s.jsxs("button",{type:"button",className:`btn-target ${P==="A"?"selected":""}`,onClick:()=>U("A"),"aria-checked":P==="A",role:"radio",children:[s.jsx("span",{className:"color-dot dot-a"}),s.jsx("span",{children:p.locationA}),s.jsxs("span",{className:"target-coords",children:["(",(Oe=t==null?void 0:t.lat)==null?void 0:Oe.toFixed(2),"°, ",(je=t==null?void 0:t.lon)==null?void 0:je.toFixed(2),"°)"]})]}),s.jsxs("button",{type:"button",className:`btn-target ${P==="B"?"selected":""}`,onClick:()=>U("B"),"aria-checked":P==="B",role:"radio",children:[s.jsx("span",{className:"color-dot dot-b"}),s.jsx("span",{children:p.locationB}),s.jsxs("span",{className:"target-coords",children:["(",(w=a==null?void 0:a.lat)==null?void 0:w.toFixed(2),"°, ",(A=a==null?void 0:a.lon)==null?void 0:A.toFixed(2),"°)"]})]})]}),s.jsxs("div",{className:"map-wrapper-relative",children:[s.jsx("div",{ref:S,className:"map-container",tabIndex:"0","aria-label":"Interactive Leaflet map showing NASA GIBS satellite imagery frames and selected locations",role:"region"}),x&&y!==null&&s.jsxs("div",{className:"scan-laser-line",style:{left:`${y*100}%`},"aria-hidden":"true",children:[s.jsx("div",{className:"laser-beam"}),s.jsx("div",{className:"laser-glow"})]})]}),s.jsxs("div",{className:"map-footer",children:[s.jsxs("div",{className:"frame-overlay-indicator",children:[s.jsxs("span",{className:"overlay-badge",style:{backgroundColor:it},children:[t==null?void 0:t.nameEn,": ",c," ",f.format(Qe)]}),o&&a&&s.jsxs("span",{className:"overlay-badge badge-b",style:{backgroundColor:rt},children:[a==null?void 0:a.nameEn,": ",f.format(at)]})]}),s.jsxs("div",{className:"map-legend",children:[s.jsx("span",{className:"legend-gradient"}),s.jsx("span",{className:"legend-label-low",children:i==="ar"?"منخفض":"Low"}),s.jsx("span",{className:"legend-label-high",children:i==="ar"?"مرتفع":"High"})]})]})]})}co.register(uo,ho,fo,po,mo,go,xo,vo);function tx({lang:i="en",theme:e="dark",dataA:t=[],dataB:n=[],statsA:a=null,statsB:r=null,currentYear:o=1990,primaryVariable:l="T2M",locationA:c=null,locationB:d=null,isCompareMode:h=!1,showTable:m=!1,onToggleTable:u=()=>{}}){const g=Pt[i]||Pt.en,x=Ut[l]||Ut.T2M,y=R.useRef(null),p=R.useMemo(()=>t.map(v=>v.year),[t]),f=R.useMemo(()=>{if(!t||t.length===0)return{labels:[],datasets:[]};const v=p,b=t.map(k=>k.value),L=t.map(k=>{var $,I,G,Q;return k.year===o?8:(I=($=a==null?void 0:a.recordsMap)==null?void 0:$[k.year])!=null&&I.isAllTimeMax||(Q=(G=a==null?void 0:a.recordsMap)==null?void 0:G[k.year])!=null&&Q.isAllTimeMin?6:3}),P=t.map(k=>{var $,I,G,Q;return k.year===o?"#ffffff":(I=($=a==null?void 0:a.recordsMap)==null?void 0:$[k.year])!=null&&I.isAllTimeMax?"#ef4444":(Q=(G=a==null?void 0:a.recordsMap)==null?void 0:G[k.year])!=null&&Q.isAllTimeMin?"#3b82f6":"#38bdf8"}),U=[{label:`${i==="ar"&&(c==null?void 0:c.nameAr)||(c==null?void 0:c.nameEn)} (${x.unitEn})`,data:b,borderColor:"#38bdf8",backgroundColor:"rgba(56, 189, 248, 0.1)",borderWidth:2.5,pointBackgroundColor:P,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,pointRadius:L,pointHoverRadius:9,tension:.25,fill:!0}];if(a!=null&&a.trendline&&a.trendline.length>0&&U.push({label:`${g.trendline} (Loc A)`,data:a.trendline.map(k=>parseFloat(k.fitted.toFixed(2))),borderColor:"rgba(56, 189, 248, 0.65)",borderWidth:2,borderDash:[6,5],pointRadius:0,fill:!1}),h&&n&&n.length>0){const k=n.map(G=>G.value),$=n.map(G=>G.year===o?8:3),I=n.map(G=>G.year===o?"#ffffff":"#f97316");U.push({label:`${i==="ar"&&(d==null?void 0:d.nameAr)||(d==null?void 0:d.nameEn)} (${x.unitEn})`,data:k,borderColor:"#f97316",backgroundColor:"rgba(249, 115, 22, 0.08)",borderWidth:2.5,pointBackgroundColor:I,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,pointRadius:$,pointHoverRadius:9,tension:.25,fill:!0}),r!=null&&r.trendline&&r.trendline.length>0&&U.push({label:`${g.trendline} (Loc B)`,data:r.trendline.map(G=>parseFloat(G.fitted.toFixed(2))),borderColor:"rgba(249, 115, 22, 0.65)",borderWidth:2,borderDash:[6,5],pointRadius:0,fill:!1})}return{labels:v,datasets:U}},[t,n,a,r,p,o,c,d,h,x,i,g]),S=R.useMemo(()=>({id:"verticalCursorPlugin",afterDatasetsDraw(v){if(!o)return;const b=v.ctx,L=v.scales.x,P=v.scales.y,U=p.indexOf(o);if(U===-1)return;const k=L.getPixelForTick(U);b.save(),b.beginPath(),b.moveTo(k,P.top),b.lineTo(k,P.bottom),b.lineWidth=2.5,b.strokeStyle="#ffffff",b.setLineDash([4,4]),b.shadowColor="rgba(255, 255, 255, 0.8)",b.shadowBlur=8,b.stroke(),b.fillStyle="#38bdf8",b.shadowBlur=0,b.beginPath(),b.arc(k,P.top,5,0,Math.PI*2),b.fill(),b.restore()}}),[o,p]),E=R.useMemo(()=>{const v=e==="light";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:250},plugins:{legend:{position:"top",labels:{color:v?"#0f172a":"#e2e8f0",font:{family:i==="ar"?"Cairo, sans-serif":"Inter, sans-serif",size:13,weight:"600"},padding:16,usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:v?"#0f172a":"rgba(15, 23, 42, 0.95)",titleColor:"#38bdf8",bodyColor:"#f8fafc",borderColor:v?"#cbd5e1":"#334155",borderWidth:1,padding:12,displayColors:!0,callbacks:{title:b=>{var L;return`${g.year}: ${(L=b[0])==null?void 0:L.label}`},label:b=>`${b.dataset.label}: ${b.parsed.y} ${x.unitEn}`}}},scales:{x:{grid:{color:v?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.35)",borderColor:v?"rgba(148, 163, 184, 0.45)":"rgba(51, 65, 85, 0.6)"},ticks:{color:v?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:12},maxTicksLimit:14}},y:{grid:{color:v?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.35)",borderColor:v?"rgba(148, 163, 184, 0.45)":"rgba(51, 65, 85, 0.6)"},ticks:{color:v?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:12},callback:b=>`${b} ${x.unitEn}`}}}}},[i,g,x,e]),_=p[0]||1990,N=p[p.length-1]||new Date().getFullYear()-1,T=(g.chartHeading||"Historical Trend ({range})").replace("{range}",`${_} – ${N}`);return s.jsxs("section",{className:"card chart-card","aria-labelledby":"chart-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(fc,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"chart-section-heading",className:"card-title",children:T}),s.jsxs("p",{className:"card-sub",children:[g.dataSubheading," • ",i==="ar"?x.nameAr:x.nameEn]})]})]}),s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${m?"":"active"}`,onClick:()=>u(!1),"aria-pressed":!m,children:[s.jsx(yo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:g.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${m?"active":""}`,onClick:()=>u(!0),"aria-pressed":m,children:[s.jsx(os,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:g.dataTableView})]})]})]}),s.jsx("div",{className:"chart-canvas-wrapper",role:"img","aria-label":g.chartAriaLabel,children:s.jsx(_o,{ref:y,data:f,options:E,plugins:[S]})}),s.jsxs("div",{className:"chart-highlights",children:[s.jsxs("div",{className:"highlight-pill highlight-current",children:[s.jsx("span",{className:"dot dot-white"}),s.jsx("span",{className:"label",children:g.currentYearLabel.replace("{year}",o)})]}),(a==null?void 0:a.recordHigh)&&s.jsxs("div",{className:"highlight-pill highlight-high",children:[s.jsx("span",{className:"dot dot-red"}),s.jsxs("span",{className:"label",children:[g.recordHigh,": ",a.recordHigh.value," ",x.unitEn," (",a.recordHigh.year,")"]})]}),(a==null?void 0:a.recordLow)&&s.jsxs("div",{className:"highlight-pill highlight-low",children:[s.jsx("span",{className:"dot dot-blue"}),s.jsxs("span",{className:"label",children:[g.recordLow,": ",a.recordLow.value," ",x.unitEn," (",a.recordLow.year,")"]})]})]})]})}function nx({lang:i="en",currentYear:e=1990,years:t=[],isPlaying:n=!1,onTogglePlay:a=()=>{},onStepBackward:r=()=>{},onStepForward:o=()=>{},onSelectYear:l=()=>{},playbackSpeed:c=1,onChangeSpeed:d=()=>{},isLooping:h=!0,onToggleLoop:m=()=>{}}){const u=Pt[i]||Pt.en,g=t[0]||1990,x=t[t.length-1]||2023,y=[.5,1,1.5,2];return s.jsxs("section",{className:"card timeline-controls-card","aria-labelledby":"timeline-controls-heading",children:[s.jsxs("div",{className:"timeline-header",children:[s.jsxs("div",{className:"timeline-title-wrap",children:[s.jsx(Ql,{className:"section-icon","aria-hidden":"true"}),s.jsx("h2",{id:"timeline-controls-heading",className:"card-title",children:u.timelineHeading})]}),s.jsxs("div",{className:"current-year-badge","aria-live":"polite",children:[s.jsx("span",{className:"year-eyebrow",children:u.year}),s.jsx("span",{className:"year-number",children:e})]})]}),s.jsxs("div",{className:"scrub-container",children:[s.jsx("label",{htmlFor:"timeline-year-slider",className:"sr-only",children:u.yearSliderAria}),s.jsxs("div",{className:"slider-track-wrap",children:[s.jsx("input",{id:"timeline-year-slider",type:"range",min:g,max:x,step:1,value:e,onChange:p=>l(parseInt(p.target.value,10)),className:"timeline-slider","aria-valuemin":g,"aria-valuemax":x,"aria-valuenow":e,"aria-valuetext":`${u.year} ${e}`}),s.jsxs("div",{className:"slider-ticks","aria-hidden":"true",children:[s.jsx("span",{children:g}),s.jsx("span",{children:Math.round((g+x)/2)}),s.jsx("span",{children:x})]})]})]}),s.jsxs("div",{className:"controls-button-bar",children:[s.jsxs("button",{type:"button",className:"btn-control btn-step",onClick:r,"aria-label":u.stepBack,title:`${u.stepBack} (←)`,children:[s.jsx(cc,{className:"icon","aria-hidden":"true"}),s.jsx("span",{className:"btn-key-hint",children:"←"})]}),s.jsxs("button",{type:"button",className:`btn-control btn-play ${n?"is-playing":""}`,onClick:a,"aria-label":n?u.pause:u.play,title:`${n?u.pause:u.play} (Space)`,children:[n?s.jsx(Ms,{className:"icon-lg","aria-hidden":"true"}):s.jsx(Pn,{className:"icon-lg icon-play","aria-hidden":"true"}),s.jsx("span",{className:"play-label",children:n?u.pause:u.play}),s.jsx("span",{className:"btn-key-hint",children:"Space"})]}),s.jsxs("button",{type:"button",className:"btn-control btn-step",onClick:o,"aria-label":u.stepForward,title:`${u.stepForward} (→)`,children:[s.jsx(dc,{className:"icon","aria-hidden":"true"}),s.jsx("span",{className:"btn-key-hint",children:"→"})]}),s.jsxs("div",{className:"speed-group",role:"group","aria-label":u.speed,children:[s.jsxs("span",{className:"speed-label",children:[s.jsx(ac,{className:"icon-xs","aria-hidden":"true"}),s.jsxs("span",{children:[u.speed,":"]})]}),s.jsx("div",{className:"speed-buttons",children:y.map(p=>s.jsxs("button",{type:"button",className:`btn-speed ${c===p?"active":""}`,onClick:()=>d(p),"aria-pressed":c===p,children:[p,"x"]},p))})]}),s.jsxs("button",{type:"button",className:`btn-control btn-loop ${h?"active":""}`,onClick:m,"aria-pressed":h,"aria-label":u.loop,title:u.loop,children:[s.jsx(Eo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{className:"loop-label",children:u.loop})]})]})]})}function ix({lang:i="en",volume:e=.7,onChangeVolume:t=()=>{},isMuted:n=!1,onToggleMute:a=()=>{},instrument:r="sine",onChangeInstrument:o=()=>{},quantizeScale:l=!0,onToggleQuantizeScale:c=()=>{},primaryVariable:d="T2M",onChangePrimaryVariable:h=()=>{},secondaryVariable:m="NONE",onChangeSecondaryVariable:u=()=>{},isCompareMode:g=!1,pitchMappingText:x=""}){const y=Pt[i]||Pt.en,p=[{id:"sine",label:y.instrumentSine,desc:"Pure harmonic tone"},{id:"triangle",label:y.instrumentTriangle,desc:"Warm ambient flute"},{id:"soft_pluck",label:y.instrumentPluck,desc:"Acoustic harp pluck"}];return s.jsxs("section",{className:"card audio-controls-card","aria-labelledby":"audio-controls-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Kn,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"audio-controls-heading",className:"card-title",children:y.audioHeading}),s.jsx("p",{className:"card-sub",children:y.recordCueTip})]})]}),g&&s.jsxs("div",{className:"stereo-badge",role:"status",children:[s.jsx(bs,{className:"icon-sm","aria-hidden":"true"}),s.jsxs("span",{children:[y.spatialStereo," (L ⟷ R)"]})]})]}),s.jsxs("div",{className:"audio-controls-grid",children:[s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{htmlFor:"primary-variable-select",className:"control-label",children:[s.jsx(jd,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.variableLabel})]}),s.jsx("select",{id:"primary-variable-select",className:"control-select",value:d,onChange:f=>h(f.target.value),"aria-label":y.selectVariableAria,children:Object.values(Ut).map(f=>s.jsxs("option",{value:f.id,children:[i==="ar"?f.nameAr:f.nameEn," (",f.unitEn,")"]},f.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("div",{className:"control-label-row",children:[s.jsxs("label",{htmlFor:"audio-volume-slider",className:"control-label",children:[s.jsx(uc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.volume})]}),s.jsx("span",{className:"control-value-text",children:n?"0%":`${Math.round(e*100)}%`})]}),s.jsxs("div",{className:"volume-slider-row",children:[s.jsx("button",{type:"button",className:`btn-mute-sm ${n?"muted":""}`,onClick:a,"aria-label":n?y.unmute:y.mute,children:n?s.jsx(Jn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(cn,{className:"icon-sm","aria-hidden":"true"})}),s.jsx("input",{id:"audio-volume-slider",type:"range",min:"0",max:"1",step:"0.05",value:n?0:e,onChange:f=>t(parseFloat(f.target.value)),className:"volume-slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":n?0:Math.round(e*100)})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{className:"control-label",id:"instrument-label",children:[s.jsx(Kn,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.instrument})]}),s.jsx("div",{className:"instrument-button-group",role:"radiogroup","aria-labelledby":"instrument-label",children:p.map(f=>s.jsx("button",{type:"button",className:`btn-instrument ${r===f.id?"active":""}`,onClick:()=>o(f.id),role:"radio","aria-checked":r===f.id,children:s.jsx("span",{children:f.label})},f.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{className:"control-label",children:s.jsx("span",{children:y.musicalScale})}),s.jsxs("div",{className:"scale-toggle-wrap",children:[s.jsx("button",{type:"button",className:`btn-scale-toggle ${l?"active":""}`,onClick:()=>c(!0),"aria-pressed":l,children:s.jsx("span",{children:y.scaleOn})}),s.jsx("button",{type:"button",className:`btn-scale-toggle ${l?"":"active"}`,onClick:()=>c(!1),"aria-pressed":!l,children:s.jsx("span",{children:y.scaleOff})})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{htmlFor:"secondary-layer-select",className:"control-label",children:[s.jsx(mi,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.secondaryLayerLabel})]}),s.jsxs("select",{id:"secondary-layer-select",className:"control-select",value:m||"NONE",onChange:f=>u(f.target.value),children:[s.jsx("option",{value:"NONE",children:y.secondaryNone}),Object.values(Ut).filter(f=>f.id!==d).map(f=>s.jsxs("option",{value:f.id,children:[i==="ar"?f.nameAr:f.nameEn," (",f.unitEn,")"]},f.id))]})]})]}),x&&s.jsxs("div",{className:"pitch-mapping-chip",role:"status","aria-label":y.pitchMappingLabel,children:[s.jsx(_s,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{className:"mapping-label",children:y.pitchMappingLabel}),s.jsx("code",{className:"mapping-code",children:x})]})]})}function ax({lang:i="en",statsA:e=null,statsB:t=null,locationA:n=null,locationB:a=null,primaryVariable:r="T2M",isCompareMode:o=!1,isSpeaking:l=!1,speechSupported:c=!1,onSpeakSummary:d=()=>{},onStopSpeaking:h=()=>{},summaryText:m=""}){const u=Pt[i]||Pt.en,g=Ut[r]||Ut.T2M;return i==="ar"&&(n!=null&&n.nameAr)||(n==null||n.nameEn),o&&(i==="ar"&&(a!=null&&a.nameAr)||(a==null||a.nameEn)),s.jsxs("section",{className:"card insights-card","aria-labelledby":"insights-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(ni,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"insights-heading",className:"card-title",children:u.insightsHeading}),s.jsx("p",{className:"card-sub",children:u.historicalRange})]})]}),c&&s.jsx("div",{className:"speech-action-group",children:l?s.jsxs("button",{type:"button",className:"btn-speech speaking",onClick:h,"aria-label":u.stopSpeakingBtn,children:[s.jsx(Xd,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.speakingState})]}):s.jsxs("button",{type:"button",className:"btn-speech",onClick:d,"aria-label":u.readSummaryBtn,children:[s.jsx(cn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.readSummaryBtn})]})})]}),m&&s.jsx("div",{className:"summary-quote-box",role:"region","aria-label":"Climate text summary",children:s.jsxs("p",{className:"summary-quote-text",children:['"',m,'"']})}),s.jsxs("div",{className:"stats-metric-grid",children:[s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:u.changePerDecade}),s.jsxs("div",{className:"metric-value-row",children:[e&&e.changePerDecade>=0?s.jsx(fc,{className:"metric-trend-icon trend-up","aria-hidden":"true"}):s.jsx(qd,{className:"metric-trend-icon trend-down","aria-hidden":"true"}),s.jsx("span",{className:"metric-value",children:e?`${e.changePerDecade>0?"+":""}${e.changePerDecade.toFixed(2)}`:"—"}),s.jsxs("span",{className:"metric-unit",children:[g.unitEn,"/dec"]})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.changePerDecade>0?"+":"",t.changePerDecade.toFixed(2)," ",g.unitEn,"/dec"]})]})]}),s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:u.totalTrendChange}),s.jsxs("div",{className:"metric-value-row",children:[s.jsx("span",{className:"metric-value",children:e?`${e.totalChange>0?"+":""}${e.totalChange.toFixed(2)}`:"—"}),s.jsx("span",{className:"metric-unit",children:g.unitEn})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.totalChange>0?"+":"",t.totalChange.toFixed(2)," ",g.unitEn]})]})]}),s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:u.percentChange}),s.jsx("div",{className:"metric-value-row",children:s.jsx("span",{className:"metric-value",children:e?`${e.percentChange>0?"+":""}${e.percentChange.toFixed(1)}%`:"—"})}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.percentChange>0?"+":"",t.percentChange.toFixed(1),"%"]})]})]}),s.jsxs("div",{className:"metric-box significance-box",children:[s.jsx("span",{className:"metric-label",children:u.significanceTest}),s.jsx("div",{className:"significance-badge-wrap",children:e!=null&&e.isSignificant?s.jsxs("span",{className:"badge-significant",children:[s.jsx(Rd,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:u.significant})]}):s.jsxs("span",{className:"badge-not-significant",children:[s.jsx(Es,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:u.notSignificant})]})}),s.jsxs("div",{className:"p-value-line",children:[s.jsx("span",{children:u.pValueLabel.replace("{p}",e?e.pValue<.001?"< 0.001":e.pValue.toFixed(4):"—")}),s.jsxs("span",{className:"r-squared-note",children:["R² = ",e?e.rSquared.toFixed(3):"—"]})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:["p = ",t.pValue<.001?"< 0.001":t.pValue.toFixed(4)," (",t.isSignificant?"Significant":"Not Sig.",")"]})]})]})]})]})}function sx({lang:i="en",dataA:e=[],dataB:t=[],statsA:n=null,statsB:a=null,primaryVariable:r="T2M",locationA:o=null,locationB:l=null,isCompareMode:c=!1,currentYear:d=1990,showTable:h=!0,onToggleTable:m=()=>{}}){var f,S;const u=Pt[i]||Pt.en,g=Ut[r]||Ut.T2M,x=((f=e[0])==null?void 0:f.value)||0,y=((S=t[0])==null?void 0:S.value)||0,p=()=>{let E="data:text/csv;charset=utf-8,";c?(E+=`Year,${(o==null?void 0:o.nameEn)||"Loc A"} (${g.unitEn}),${(o==null?void 0:o.nameEn)||"Loc A"} Anomaly,${(l==null?void 0:l.nameEn)||"Loc B"} (${g.unitEn}),${(l==null?void 0:l.nameEn)||"Loc B"} Anomaly,Records
`,e.forEach(T=>{var $;const v=t.find(I=>I.year===T.year),b=(T.value-x).toFixed(2),L=v?v.value:"",P=v?(v.value-y).toFixed(2):"",U=($=n==null?void 0:n.recordsMap)==null?void 0:$[T.year],k=U!=null&&U.isAllTimeMax?"Record High":U!=null&&U.isAllTimeMin?"Record Low":"";E+=`${T.year},${T.value},${b},${L},${P},${k}
`})):(E+=`Year,${(o==null?void 0:o.nameEn)||"Location"} (${g.unitEn}),Anomaly (Diff from 1990),Records
`,e.forEach(T=>{var P;const v=(T.value-x).toFixed(2),b=(P=n==null?void 0:n.recordsMap)==null?void 0:P[T.year],L=b!=null&&b.isAllTimeMax?"Record High":b!=null&&b.isAllTimeMin?"Record Low":"";E+=`${T.year},${T.value},${v},${L}
`}));const _=encodeURI(E),N=document.createElement("a");N.setAttribute("href",_),N.setAttribute("download",`earth_jukebox_${r}_${(o==null?void 0:o.id)||"data"}.csv`),document.body.appendChild(N),N.click(),document.body.removeChild(N)};return s.jsxs("section",{className:"card table-card","aria-labelledby":"table-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(os,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"table-section-heading",className:"card-title",children:u.dataTableView}),s.jsx("p",{className:"card-sub",children:u.tableCaption})]})]}),s.jsxs("div",{className:"table-header-actions",children:[s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${h?"":"active"}`,onClick:()=>m(!1),"aria-pressed":!h,title:u.chartView,children:[s.jsx(yo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${h?"active":""}`,onClick:()=>m(!0),"aria-pressed":h,title:u.dataTableView,children:[s.jsx(os,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.dataTableView})]})]}),s.jsxs("button",{type:"button",className:"btn-download-csv",onClick:p,"aria-label":u.downloadCsv,children:[s.jsx(mr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.downloadCsv})]})]})]}),s.jsx("div",{className:"return-chart-banner",children:s.jsxs("button",{type:"button",className:"btn-return-chart",onClick:()=>m(!1),"aria-label":u.returnToChart,children:[i==="ar"?s.jsx(So,{className:"icon-sm","aria-hidden":"true"}):s.jsx(Td,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.returnToChart})]})}),s.jsx("div",{className:"table-responsive-container",children:s.jsxs("table",{className:"accessible-data-table","aria-label":u.tableCaption,children:[s.jsx("caption",{className:"sr-only",children:u.tableCaption}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:u.colYear}),s.jsxs("th",{scope:"col",children:[i==="ar"&&(o==null?void 0:o.nameAr)||(o==null?void 0:o.nameEn)," (",g.unitEn,")"]}),s.jsx("th",{scope:"col",children:u.colAnomaly}),c&&s.jsxs(s.Fragment,{children:[s.jsxs("th",{scope:"col",children:[i==="ar"&&(l==null?void 0:l.nameAr)||(l==null?void 0:l.nameEn)," (",g.unitEn,")"]}),s.jsxs("th",{scope:"col",children:[u.colAnomaly," (B)"]})]}),s.jsx("th",{scope:"col",children:u.colRecords})]})}),s.jsx("tbody",{children:e.map(E=>{var L;const _=E.year===d,N=E.value-x,T=c?t.find(P=>P.year===E.year):null,v=T?T.value-y:0,b=(L=n==null?void 0:n.recordsMap)==null?void 0:L[E.year];return s.jsxs("tr",{className:_?"row-active-year":"",children:[s.jsxs("th",{scope:"row",className:"cell-year",children:[E.year,_&&s.jsx("span",{className:"active-cursor-tag",children:"●"})]}),s.jsxs("td",{className:"cell-value",children:[E.value," ",g.unitEn]}),s.jsx("td",{className:`cell-anomaly ${N>=0?"pos":"neg"}`,children:N>0?`+${N.toFixed(2)}`:N.toFixed(2)}),c&&s.jsxs(s.Fragment,{children:[s.jsx("td",{className:"cell-value",children:T?`${T.value} ${g.unitEn}`:"—"}),s.jsx("td",{className:`cell-anomaly ${v>=0?"pos":"neg"}`,children:T?v>0?`+${v.toFixed(2)}`:v.toFixed(2):"—"})]}),s.jsxs("td",{className:"cell-records",children:[(b==null?void 0:b.isAllTimeMax)&&s.jsx("span",{className:"record-badge record-high",children:u.recordHigh}),(b==null?void 0:b.isAllTimeMin)&&s.jsx("span",{className:"record-badge record-low",children:u.recordLow}),(b==null?void 0:b.isRecordHigh)&&!(b!=null&&b.isAllTimeMax)&&s.jsx("span",{className:"record-badge record-running-high",children:u.runningRecordHigh})]})]},E.year)})})]})})]})}function fr(i){const e=[57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.00015808870322437947,-.00021026441082956272,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];let t=.9999999999999971;for(let a=0;a<e.length;a++)t+=e[a]/(i+a+1);const n=i+5.2421875;return .5*Math.log(2*Math.PI)+(i+.5)*Math.log(n)-n+Math.log(t)}function pd(i,e,t){if(i<=0)return 0;if(i>=1)return 1;if(i>(e+1)/(e+t+2))return 1-pd(1-i,t,e);const n=Math.exp(e*Math.log(i)+t*Math.log(1-i)-fr(e)-fr(t)+fr(e+t))/e,a=200,r=1e-12;let o=1,l=1-(e+t)*i/(e+1);Math.abs(l)<1e-30&&(l=1e-30),l=1/l;let c=l;for(let d=1;d<=a;d++){let h=d*(t-d)*i/((e+2*d-1)*(e+2*d));l=1+h*l,Math.abs(l)<1e-30&&(l=1e-30),o=1+h/o,Math.abs(o)<1e-30&&(o=1e-30),l=1/l,c*=o*l,h=-((e+d)*(e+t+d)*i)/((e+2*d)*(e+2*d+1)),l=1+h*l,Math.abs(l)<1e-30&&(l=1e-30),o=1+h/o,Math.abs(o)<1e-30&&(o=1e-30),l=1/l;const m=o*l;if(c*=m,Math.abs(m-1)<r)break}return n*c}function rx(i,e){if(e<=0||!isFinite(i)||isNaN(i))return 1;const t=Math.abs(i);if(t===0)return 1;const n=e/(e+t*t),a=pd(n,e/2,.5);return Math.min(1,Math.max(0,a))}function ga(i){if(!i||i.length<2)return{n:(i==null?void 0:i.length)||0,slope:0,intercept:0,changePerDecade:0,percentChange:0,totalChange:0,rSquared:0,tStat:0,pValue:1,isSignificant:!1,mean:0,min:0,max:0,recordHigh:null,recordLow:null,trendline:[],recordsMap:{}};const e=i.filter(V=>V.value!==null&&!isNaN(V.value)),t=e.length;if(t<2)return ga([]);let n=0,a=0,r=1/0,o=-1/0,l=null,c=null;for(let V=0;V<t;V++){const{year:te,value:ie}=e[V];n+=te,a+=ie,ie>o&&(o=ie,l={year:te,value:ie}),ie<r&&(r=ie,c={year:te,value:ie})}const d=n/t,h=a/t;let m=0,u=0,g=0;for(let V=0;V<t;V++){const{year:te,value:ie}=e[V],ye=te-d,De=ie-h;m+=ye*ye,u+=ye*De,g+=De*De}const x=m!==0?u/m:0,y=h-x*d,p=x*10;let f=0;const S=e.map(V=>{const te=x*V.year+y,ie=V.value-te;return f+=ie*ie,{year:V.year,fitted:te}}),E=g!==0?Math.max(0,Math.min(1,1-f/g)):0,_=t-2;let N=0,T=0,v=1;if(_>0&&m>0){const V=f/_;N=Math.sqrt(V/m),N>0?(T=x/N,v=rx(T,_)):Math.abs(x)>1e-9?(T=1/0,v=0):(T=0,v=1)}const b=v<.05,L=e[0].year,P=e[t-1].year,U=x*L+y,$=x*P+y-U;let I=0;const G=Math.abs(U)>.01?Math.abs(U):Math.abs(h);G>1e-4&&(I=$/G*100);let Q=-1/0,j=1/0;const oe={};for(let V=0;V<t;V++){const{year:te,value:ie}=e[V];let ye=!1,De=!1;ie>Q&&(Q=ie,V>0&&(ye=!0)),ie<j&&(j=ie,V>0&&(De=!0)),oe[te]={isRecordHigh:ye,isRecordLow:De,isAllTimeMax:ie===o,isAllTimeMin:ie===r}}return{n:t,slope:x,intercept:y,changePerDecade:p,percentChange:I,totalChange:$,rSquared:E,tStat:T,pValue:v,isSignificant:b,mean:h,min:r,max:o,recordHigh:l,recordLow:c,trendline:S,recordsMap:oe}}function ox({primaryVariable:i="T2M",secondaryVariable:e=null,locationA:t=ma[0],locationB:n=ma[1],isCompareMode:a=!1}){const[r,o]=R.useState([]),[l,c]=R.useState([]),[d,h]=R.useState([]),[m,u]=R.useState(!0),[g,x]=R.useState(null),y=R.useRef(null),p=R.useCallback(async()=>{y.current&&y.current.abort();const _=new AbortController;y.current=_,u(!0),x(null);try{const N=await ur(t.lat,t.lon,i,sa,Ii,_.signal);if(_.signal.aborted)return;if(o(N.points||[]),a&&n){const T=await ur(n.lat,n.lon,i,sa,Ii,_.signal);if(_.signal.aborted)return;c(T.points||[])}else c([]);if(e&&e!=="NONE"){const T=await ur(t.lat,t.lon,e,sa,Ii,_.signal);if(_.signal.aborted)return;h(T.points||[])}else h([]);x(null)}catch(N){if(N.name==="AbortError")return;console.error("Error fetching NASA POWER data:",N),x(N.message||"Failed to load climate data from NASA POWER")}finally{_.signal.aborted||u(!1)}},[t.lat,t.lon,a?n==null?void 0:n.lat:null,a?n==null?void 0:n.lon:null,i,e,a]);R.useEffect(()=>(p(),()=>{y.current&&y.current.abort()}),[p]);const f=R.useMemo(()=>ga(r),[r]),S=R.useMemo(()=>!a||l.length===0?null:ga(l),[a,l]),E=R.useMemo(()=>{if(r.length>0)return r.map(N=>N.year);const _=[];for(let N=sa;N<=Ii;N++)_.push(N);return _},[r]);return{loading:m,error:g,dataA:r,dataB:l,secondaryDataA:d,statsA:f,statsB:S,years:E,refetch:p}}function lx({dataA:i=[],dataB:e=[],secondaryDataA:t=[],statsA:n=null,statsB:a=null,primaryVariable:r="T2M",secondaryVariable:o=null,isCompareMode:l=!1,onYearChange:c=()=>{}}){const[d,h]=R.useState(!1),[m,u]=R.useState(1990),[g,x]=R.useState(1),[y,p]=R.useState(.7),[f,S]=R.useState(!1),[E,_]=R.useState("sine"),[N,T]=R.useState(!0),[v,b]=R.useState(!0),[L,P]=R.useState(!1),[U,k]=R.useState(!1),[$,I]=R.useState(null),G=R.useRef(null),Q=R.useRef(null),j=R.useRef(m);j.current=m;const oe=R.useCallback(async()=>{const me=await vs();return P(me),me},[]),{dynamicMin:V,dynamicMax:te,rawMin:ie,rawMax:ye}=R.useMemo(()=>{let me=i.filter(ze=>ze.value!==null&&!isNaN(ze.value)).map(ze=>ze.value);if(l&&e&&e.length>0){const ze=e.filter(Qe=>Qe.value!==null&&!isNaN(Qe.value)).map(Qe=>Qe.value);me=me.concat(ze)}if(me.length===0)return{dynamicMin:15,dynamicMax:35,rawMin:15,rawMax:35};const Re=Math.min(...me),Ve=Math.max(...me),Xe=Ve-Re,Ee=Xe===0?1:Xe*.07;return{dynamicMin:parseFloat((Re-Ee).toFixed(2)),dynamicMax:parseFloat((Ve+Ee).toFixed(2)),rawMin:Re,rawMax:Ve}},[i,e,l,r]),De=R.useMemo(()=>{const Re=(Ut[r]||Ut.T2M).unitEn;return`${ie.toFixed(1)}${Re} ➔ C3 (~131 Hz) | ${ye.toFixed(1)}${Re} ➔ C6 (~1047 Hz)`},[ie,ye,r]),H=R.useCallback(me=>{var Xe,Ee;if(f||y===0)return;const Re=y,Ve=i.find(ze=>ze.year===me);if(Ve&&Ve.value!==null&&!isNaN(Ve.value)){const ze=jn(Ve.value,V,te,N),Qe=(Xe=n==null?void 0:n.recordsMap)==null?void 0:Xe[me];let Te=1;if(o&&o!=="NONE"&&t.length>0){const it=t.find(ct=>ct.year===me);if(it&&it.value!==null&&!isNaN(it.value)){const ct=t.map(et=>et.value),at=Math.min(...ct),F=Math.max(...ct),rt=(it.value-at)/(F-at||1);Te=.5+Math.max(0,Math.min(1,rt))}}Vn({frequency:ze,duration:.5/g,volume:Re,instrument:E,pan:l?-.75:0,isRecordHigh:!!(Qe!=null&&Qe.isRecordHigh),isRecordLow:!!(Qe!=null&&Qe.isRecordLow),secondaryVolume:Te})}if(l&&e&&e.length>0){const ze=e.find(Qe=>Qe.year===me);if(ze&&ze.value!==null&&!isNaN(ze.value)){const Qe=jn(ze.value,V,te,N),Te=(Ee=a==null?void 0:a.recordsMap)==null?void 0:Ee[me];Vn({frequency:Qe,duration:.5/g,volume:Re,instrument:E,pan:.75,isRecordHigh:!!(Te!=null&&Te.isRecordHigh),isRecordLow:!!(Te!=null&&Te.isRecordLow),secondaryVolume:1})}}},[i,e,t,n,a,V,te,o,l,f,y,E,N,g]),he=R.useCallback((me,Re=0,Ve=100,Xe=0)=>{if(f||y===0||me===null||isNaN(me))return;const Ee=jn(me,Re,Ve,N);Vn({frequency:Ee,duration:.35,volume:y*.9,instrument:E,pan:Xe,isRecordHigh:!1,isRecordLow:!1})},[f,y,N,E]),ge=R.useCallback((me,Re=!0)=>{u(me),c(me,!0),Re&&oe().then(()=>{H(me)})},[c,H,oe]),ce=R.useCallback(()=>{if(i.length===0)return;const me=i[0].year,Re=i[i.length-1].year,Ve=j.current<=me?Re:j.current-1;ge(Ve,!0)},[i,ge]),Y=R.useCallback(()=>{if(i.length===0)return;const me=i[0].year,Re=i[i.length-1].year,Ve=j.current>=Re?me:j.current+1;ge(Ve,!0)},[i,ge]),Ae=R.useCallback(async()=>{d?(h(!1),c(j.current,!1,!0)):(await oe(),h(!0))},[d,oe,c]),_e=R.useCallback(()=>{S(me=>!me)},[]),we=R.useCallback(me=>{x(Math.max(.5,Math.min(3,me)))},[]);R.useEffect(()=>{if(!d||i.length===0){G.current&&(clearInterval(G.current),G.current=null);return}const me=i[0].year,Re=i[i.length-1].year,Ve=Math.round(1e3/g);return H(j.current),G.current=setInterval(()=>{let Xe=j.current+1;if(Xe>Re)if(v)Xe=me;else{h(!1),clearInterval(G.current);return}u(Xe),c(Xe,!1),H(Xe)},Ve),()=>{G.current&&clearInterval(G.current)}},[d,i,g,v,H,c]),R.useEffect(()=>{if(i.length>0){const me=i[0].year,Re=i[i.length-1].year;(m<me||m>Re)&&u(me)}},[i]);const Ye=R.useCallback(async me=>{if(U)return;await oe(),k(!0),I(0);const Re=40,Ve=60;let Xe=0;const Ee=await me(Re),ze=Ee.filter(it=>it!==null&&!isNaN(it)),Qe=ze.length>0?Math.min(...ze):0,Te=ze.length>0?Math.max(...ze):100;Q.current=setInterval(()=>{if(Xe>=Re){clearInterval(Q.current),Q.current=null,k(!1),I(null);return}const it=Xe/Re;I(it);const ct=Ee[Xe];if(ct!==null&&!isNaN(ct)&&!f&&y>0){const at=(it-.5)*1.6,F=jn(ct,Qe,Te,N);Vn({frequency:F,duration:.12,volume:y*.75,instrument:E,pan:at,isRecordHigh:!1,isRecordLow:!1})}Xe++},Ve)},[U,oe,f,y,N,E]);return R.useEffect(()=>()=>{Q.current&&clearInterval(Q.current)},[]),{isPlaying:d,currentYear:m,playbackSpeed:g,volume:y,isMuted:f,instrument:E,quantizeScale:N,isLooping:v,audioActive:L,dynamicMin:V,dynamicMax:te,rawMin:ie,rawMax:ye,pitchMappingText:De,isScanning:U,scanProgress:$,togglePlay:Ae,setYear:ge,stepForward:Y,stepBackward:ce,setVolume:p,toggleMute:_e,setInstrument:_,setQuantizeScale:T,setIsLooping:b,changeSpeed:we,unlockAudio:oe,playYearTone:H,playFramePixelTone:he,startFrameScan:Ye}}function cx({initialStageId:i="air",locationA:e,locationB:t,isCompareMode:n=!1,mapZoom:a=5,volume:r=.7,isMuted:o=!1,instrument:l="sine",quantizeScale:c=!0,unlockAudio:d=async()=>!0,onFrameChange:h=()=>{}}){const[m,u]=R.useState(i),[g,x]=R.useState(qn[0].animations[0].id),[y,p]=R.useState("monthly"),[f,S]=R.useState(0),[E,_]=R.useState(!1),[N,T]=R.useState(1),[v,b]=R.useState(!0),[L,P]=R.useState(.85),[U,k]=R.useState(null),[$,I]=R.useState(!1),[G,Q]=R.useState(null),[j,oe]=R.useState({}),[V,te]=R.useState({}),[ie,ye]=R.useState(!1),[De,H]=R.useState(null),[he,ge]=R.useState({loading:!1,error:null,primaryMap:null,secondaryMap:null}),[ce,Y]=R.useState(!1),[Ae,_e]=R.useState(null),[we,Ye]=R.useState(0),me=R.useRef(null),Re=R.useRef(null),Ve=R.useRef(f);Ve.current=f;const Xe=R.useMemo(()=>qn.find(B=>B.id===m)||qn[0],[m]),Ee=R.useMemo(()=>$l.find(B=>B.id===g)||Xe.animations[0],[g,Xe]),ze=R.useCallback(B=>{const ee=qn.find(C=>C.id===B);ee&&(_(!1),u(ee.id),x(ee.animations[0].id),S(0))},[]),Qe=R.useCallback(B=>{const ee=$l.find(C=>C.id===B);ee&&(_(!1),u(ee.stageId),x(ee.id),S(0))},[]),Te=R.useMemo(()=>z0(Ee,y),[Ee,y]);R.useEffect(()=>{Te.length>0&&f>=Te.length&&S(0)},[Te,f]);const it=Te[f]||Te[0]||Ee.availableRange.end,ct=R.useCallback(()=>{Ye(B=>B+1)},[]);R.useEffect(()=>{let B=!1;if(Q(null),!Ee.colormapId){k(null),I(!1);return}return I(!0),ud(Ee).then(ee=>{B||(!ee||ee.length===0?(k(null),Q(`Unable to load NASA GIBS colormap (${Ee.colormapId}).`)):(k(ee),Q(null)))}).catch(ee=>{B||(k(null),Q((ee==null?void 0:ee.message)||"Failed to fetch NASA GIBS colormap."))}).finally(()=>{B||I(!1)}),()=>{B=!0}},[Ee,we]),R.useEffect(()=>{if(!Ee.pairedPowerParam||!e){ge({loading:!1,error:null,primaryMap:null,secondaryMap:null});return}const B=new AbortController;let ee=!1;const C=parseInt((Te[0]||"2020-01-01").slice(0,4),10),J=Math.min(2025,parseInt((Te[Te.length-1]||"2025-01-01").slice(0,4),10)),X=Math.min(C,J);ge(re=>({...re,loading:!0,error:null}));const le=[Xl(e.lat,e.lon,Ee.pairedPowerParam,X,J,B.signal)];return Ee.pairedPowerSecondaryParam&&le.push(Xl(e.lat,e.lon,Ee.pairedPowerSecondaryParam,X,J,B.signal)),Promise.all(le).then(([re,pe])=>{ee||ge({loading:!1,error:null,primaryMap:re||null,secondaryMap:pe||null})}).catch(re=>{re.name==="AbortError"||ee||ge({loading:!1,error:(re==null?void 0:re.message)||"Failed to fetch paired NASA POWER data.",primaryMap:null,secondaryMap:null})}),()=>{ee=!0,B.abort()}},[Ee,e,Te,we]),R.useEffect(()=>{if(!e||Te.length===0)return;const B=Math.min(a,Ee.maxNativeZoom),ee=mn(e.lat,e.lon,B),C=[];[-1,0,1,2].forEach(J=>{const X=(f+J+Te.length)%Te.length,le=Te[X];if(le&&(C.push(ln(Ee,le,B,ee.tileY,ee.tileX)),n&&t)){const re=mn(t.lat,t.lon,B);C.push(ln(Ee,le,B,re.tileY,re.tileX))}}),G0(C)},[f,Te,Ee,e,t,n,a]),R.useEffect(()=>{if(!e||Te.length===0||Ee.colormapId&&$)return;let B=!1;ye(!0),H(null),oe({}),te({});const ee=Math.min(4,Ee.maxNativeZoom);async function C(){const J=mn(e.lat,e.lon,ee),X=n&&t?mn(t.lat,t.lon,ee):null,le={},re={};let pe=0,xe=0;const Ne=4;for(let ue=0;ue<Te.length;ue+=Ne){if(B)return;const Fe=Te.slice(ue,ue+Ne);await Promise.all(Fe.map(async He=>{const ve=ln(Ee,He,ee,J.tileY,J.tileX),qe=await Zn(ve,J.pixelX,J.pixelY,U,Ee);if(le[He]=qe,qe!=null&&qe.corsError&&pe++,qe!=null&&qe.missingTile&&xe++,X){const st=ln(Ee,He,ee,X.tileY,X.tileX),zt=await Zn(st,X.pixelX,X.pixelY,U,Ee);re[He]=zt}})),B||(oe({...le}),X&&te({...re}))}B||(pe>0&&pe===Te.length?H("CORS blocked reading GIBS satellite pixels from canvas."):xe===Te.length&&H(`Failed to load GIBS tiles for ${Ee.gibsLayerId}. Check your network and click Retry.`),ye(!1))}return C().catch(J=>{B||(H((J==null?void 0:J.message)||"Error sampling satellite frames."),ye(!1))}),()=>{B=!0}},[Ee,Te,e,t,n,U,$,we]);const{seriesA:at,seriesB:F,statsA:rt,statsB:et,dynamicMin:tt,dynamicMax:Se,rawMin:mt,rawMax:Oe}=R.useMemo(()=>{var Ne,ue,Fe,He;const B=Te.map((ve,qe)=>{const st=j[ve],zt=ve.slice(0,7).replace("-",""),xi=he.primaryMap?he.primaryMap[zt]??null:null,ii=he.secondaryMap?he.secondaryMap[zt]??null:null;return{index:qe,year:qe,date:ve,value:(st==null?void 0:st.value)??null,label:(st==null?void 0:st.label)||"No Data",sample:st,powerValue:xi,powerValueSecondary:ii}}),ee=n?Te.map((ve,qe)=>{const st=V[ve];return{index:qe,year:qe,date:ve,value:(st==null?void 0:st.value)??null,label:(st==null?void 0:st.label)||"No Data",sample:st}}):[],C=ga(B),J=n?ga(ee):null;let X=B.filter(ve=>ve.value!==null&&!isNaN(ve.value)).map(ve=>ve.value);n&&(X=X.concat(ee.filter(ve=>ve.value!==null&&!isNaN(ve.value)).map(ve=>ve.value)));let le=((Ne=Ee.valueDomain)==null?void 0:Ne.min)??0,re=((ue=Ee.valueDomain)==null?void 0:ue.max)??100,pe=le,xe=re;if(X.length>=2){le=Math.min(...X),re=Math.max(...X);const ve=re-le,qe=ve===0?Math.max(.05,Math.abs(le)*.1||1):ve*.08;pe=parseFloat((le-qe).toFixed(3)),xe=parseFloat((re+qe).toFixed(3))}else X.length===1&&(le=Math.min(X[0],((Fe=Ee.valueDomain)==null?void 0:Fe.min)??X[0]),re=Math.max(X[0],((He=Ee.valueDomain)==null?void 0:He.max)??X[0]),pe=le,xe=re===le?le+1:re);return{seriesA:B,seriesB:ee,statsA:C,statsB:J,dynamicMin:pe,dynamicMax:xe,rawMin:le,rawMax:re}},[Te,j,V,n,Ee,he]),je=R.useMemo(()=>{const B=Ee.unitEn,ee=C=>Math.abs(C)<2?C.toFixed(3):Math.abs(C)<20?C.toFixed(2):C.toFixed(1);return`${ee(mt)} ${B} ➔ C3 (~131 Hz) | ${ee(Oe)} ${B} ➔ C6 (~1047 Hz)`},[mt,Oe,Ee]),w=R.useCallback(B=>{var C,J;if(o||r===0)return;const ee=at[B];if(ee&&ee.value!==null&&!isNaN(ee.value)){const X=jn(ee.value,tt,Se,c),le=(C=rt==null?void 0:rt.recordsMap)==null?void 0:C[B];Vn({frequency:X,duration:.45/N,volume:r,instrument:l,pan:n?-.75:0,isRecordHigh:!!(le!=null&&le.isRecordHigh),isRecordLow:!!(le!=null&&le.isRecordLow)})}if(n&&F[B]){const X=F[B];if(X.value!==null&&!isNaN(X.value)){const le=jn(X.value,tt,Se,c),re=(J=et==null?void 0:et.recordsMap)==null?void 0:J[B];Vn({frequency:le,duration:.45/N,volume:r,instrument:l,pan:.75,isRecordHigh:!!(re!=null&&re.isRecordHigh),isRecordLow:!!(re!=null&&re.isRecordLow)})}}},[o,r,at,F,tt,Se,c,rt,et,N,l,n]),A=R.useCallback((B,ee=0)=>{if(o||r===0||B===null||isNaN(B))return;const C=jn(B,tt,Se,c);Vn({frequency:C,duration:.35,volume:r*.9,instrument:l,pan:ee,isRecordHigh:!1,isRecordLow:!1})},[o,r,tt,Se,c,l]),D=R.useCallback((B,ee=!0,C=!0)=>{if(Te.length===0)return;const J=Math.max(0,Math.min(Te.length-1,B));S(J),h(J,Te[J],at[J],C,!1),ee&&d().then(()=>w(J))},[Te,at,h,d,w]),se=R.useCallback(()=>{if(Te.length===0)return;const B=Ve.current>=Te.length-1?0:Ve.current+1;D(B,!0,!0)},[Te.length,D]),K=R.useCallback(()=>{if(Te.length===0)return;const B=Ve.current<=0?Te.length-1:Ve.current-1;D(B,!0,!0)},[Te.length,D]),de=R.useCallback(async()=>{E?(_(!1),h(Ve.current,Te[Ve.current],at[Ve.current],!1,!0)):(await d(),_(!0))},[E,d,h,Te,at]);R.useEffect(()=>{if(!E||Te.length===0){me.current&&(clearInterval(me.current),me.current=null);return}const B=Math.round(950/N);return w(Ve.current),me.current=setInterval(()=>{let ee=Ve.current+1;if(ee>=Te.length)if(v)ee=0;else{_(!1),clearInterval(me.current);return}S(ee),h(ee,Te[ee],at[ee],!1,!1),w(ee)},B),()=>{me.current&&clearInterval(me.current)}},[E,Te,N,v,w,h,at]);const fe=R.useCallback(async B=>{if(ce)return;await d(),Y(!0),_e(0);const ee=40,C=60;let J=0;const X=await B(ee),le=X.filter(xe=>xe!==null&&!isNaN(xe)),re=le.length>0?Math.min(...le):tt,pe=le.length>0?Math.max(...le):Se;Re.current=setInterval(()=>{if(J>=ee){clearInterval(Re.current),Re.current=null,Y(!1),_e(null);return}const xe=J/ee;_e(xe);const Ne=X[J];if(Ne!==null&&!isNaN(Ne)&&!o&&r>0){const ue=(xe-.5)*1.6,Fe=jn(Ne,re,pe,c);Vn({frequency:Fe,duration:.12,volume:r*.75,instrument:l,pan:ue,isRecordHigh:!1,isRecordLow:!1})}J++},C)},[ce,d,tt,Se,o,r,c,l]);return R.useEffect(()=>()=>{Re.current&&clearInterval(Re.current)},[]),{selectedStageId:m,selectedStage:Xe,selectedAnimationId:g,selectedAnimation:Ee,selectStage:ze,selectAnimation:Qe,cadence:y,setCadence:p,dates:Te,currentIndex:f,currentDate:it,setFrameIndex:D,isPlaying:E,togglePlay:de,stepForward:se,stepBackward:K,playbackSpeed:N,setPlaybackSpeed:T,isLooping:v,setIsLooping:b,gibsOpacity:L,setGibsOpacity:P,colormapData:U,colormapLoading:$,samplingLoading:ie,powerData:he,samplesByDateA:j,samplesByDateB:V,seriesA:at,seriesB:F,statsA:rt,statsB:et,dynamicMin:tt,dynamicMax:Se,rawMin:mt,rawMax:Oe,pitchMappingText:je,playSinglePixelValue:A,isScanning:ce,scanProgress:Ae,startFrameScan:fe,error:G||De||null,retry:ct}}function dx({language:i="en",statsA:e=null,locationA:t=null,primaryVariable:n="T2M",isCompareMode:a=!1,locationB:r=null,statsB:o=null}){const[l,c]=R.useState(!1),[d,h]=R.useState(!1),m=R.useRef(null);R.useEffect(()=>{typeof window<"u"&&"speechSynthesis"in window&&h(!0)},[]);const u=R.useCallback(()=>{typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),c(!1))},[]),g=R.useCallback(()=>{if(!e||!t)return"";const y=Ut[n]||Ut.T2M,p=i==="ar"&&t.nameAr||t.nameEn,f=i==="ar"?y.nameAr:y.nameEn,S=i==="ar"?y.unitAr:y.unitEn,E=Math.abs(e.changePerDecade).toFixed(2),_=e.changePerDecade>=0?i==="ar"?"ارتفعت":"rose":i==="ar"?"انخفضت":"declined",N=e.isSignificant?i==="ar"?"وهو تغير دال إحصائياً.":"a statistically significant change.":i==="ar"?"ولكن التغير ليس دالاً إحصائياً.":"though the trend is not statistically significant.",T=e.recordHigh?i==="ar"?`سُجلت أعلى قيمة بلغت ${e.recordHigh.value} ${S} في عام ${e.recordHigh.year}.`:`The all-time record high of ${e.recordHigh.value} ${S} was reached in ${e.recordHigh.year}.`:"";if(i==="ar"){let v=`${_} ${f} في ${p} بمعدل ${E} ${S} لكل عقد منذ عام 1990، ${N} ${T}`;if(a&&o&&r){const b=r.nameAr||r.nameEn,L=Math.abs(o.changePerDecade).toFixed(2),P=o.changePerDecade>=0?"ارتفعت":"انخفضت";v+=` بينما في ${b}، ${P} بمعدل ${L} ${S} لكل عقد.`}return v}else{let v=`${f} in ${p} ${_} ${E} ${S} per decade since 1990, ${N} ${T}`;if(a&&o&&r){const b=Math.abs(o.changePerDecade).toFixed(2),L=o.changePerDecade>=0?"rose":"declined";v+=` In comparison, ${f} in ${r.nameEn} ${L} ${b} ${S} per decade.`}return v}},[i,e,t,n,a,r,o]),x=R.useCallback(()=>{if(!d||typeof window>"u")return;window.speechSynthesis.cancel();const y=g();if(!y)return;const p=new SpeechSynthesisUtterance(y);m.current=p,p.lang=i==="ar"?"ar-EG":"en-US",p.rate=.95,p.pitch=1;const f=window.speechSynthesis.getVoices();if(f&&f.length>0){const S=i==="ar"?"ar":"en",E=f.find(_=>_.lang.startsWith(S));E&&(p.voice=E)}p.onstart=()=>{c(!0)},p.onend=()=>{c(!1)},p.onerror=S=>{console.warn("Speech synthesis error:",S),c(!1)},window.speechSynthesis.speak(p)},[d,g,i]);return R.useEffect(()=>()=>{typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()},[]),{isSpeaking:l,speechSupported:d,speakSummary:x,stopSpeaking:u,summaryText:g()}}function ux({onTogglePlay:i,onStepBackward:e,onStepForward:t,onIncreaseSpeed:n,onDecreaseSpeed:a,onToggleMute:r,onToggleHelpModal:o,onCloseModal:l}){R.useEffect(()=>{const c=d=>{const h=document.activeElement;if(d.code==="Escape"){d.preventDefault(),l==null||l();return}if(h&&(h.tagName==="BUTTON"||h.tagName==="A"||h.tagName==="SELECT"||h.tagName==="TEXTAREA"||h.tagName==="SUMMARY"||h.isContentEditable||h.tagName==="INPUT"&&h.type!=="range"))return;const u=!h||h===document.body||h===document.documentElement||h.id==="main-content"||h.tagName==="INPUT"&&h.type==="range";switch(d.code){case"Space":d.preventDefault(),i==null||i();break;case"ArrowLeft":u&&(d.preventDefault(),e==null||e());break;case"ArrowRight":u&&(d.preventDefault(),t==null||t());break;case"ArrowUp":u&&(d.preventDefault(),n==null||n());break;case"ArrowDown":u&&(d.preventDefault(),a==null||a());break;case"KeyM":d.preventDefault(),r==null||r();break;case"KeyH":d.preventDefault(),o==null||o();break}};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[i,e,t,n,a,r,o,l])}function hx(){const[i,e]=R.useState("en"),[t,n]=R.useState(()=>{try{const Ne=localStorage.getItem("terra-tone-theme");return Ne==="light"||Ne==="dark"?Ne:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}catch{return"dark"}}),[a,r]=R.useState(!0),[o,l]=R.useState(!1),[c,d]=R.useState(!1),[h,m]=R.useState(!1),[u,g]=R.useState(!1),[x,y]=R.useState("night-lights-decade"),[p,f]=R.useState(!1),[S,E]=R.useState("power"),_=R.useCallback(()=>{n(Ne=>{const ue=Ne==="dark"?"light":"dark";try{localStorage.setItem("terra-tone-theme",ue)}catch{}return ue})},[]),N=R.useCallback(()=>{e(Ne=>Ne==="en"?"ar":"en")},[]),T=R.useCallback(()=>{r(Ne=>!Ne)},[]);R.useEffect(()=>{document.documentElement.lang=i,document.documentElement.dir=i==="ar"?"rtl":"ltr"},[i]),R.useEffect(()=>{const Ne=o?"high-contrast":t;document.documentElement.setAttribute("data-theme",Ne),document.body.setAttribute("data-theme",Ne);const ue=document.getElementById("meta-theme-color");ue&&ue.setAttribute("content",Ne==="light"?"#F8FAFC":"#050816")},[t,o]);const[v,b]=R.useState("T2M"),[L,P]=R.useState("NONE"),[U,k]=R.useState(ma[0]),[$,I]=R.useState(ma[1]),[G,Q]=R.useState(!1),[j,oe]=R.useState(!1),[V,te]=R.useState(qn[0].presets[0]),[ie,ye]=R.useState(qn[0].presets[1]),[De,H]=R.useState(!1),[he,ge]=R.useState(""),ce=Ut[v]||Ut.T2M,{loading:Y,error:Ae,dataA:_e,dataB:we,secondaryDataA:Ye,statsA:me,statsB:Re,years:Ve,refetch:Xe}=ox({primaryVariable:v,secondaryVariable:L,locationA:U,locationB:$,isCompareMode:G}),Ee=R.useCallback((Ne,ue=!1,Fe=!1)=>{const He=_e.find(ve=>ve.year===Ne);if(He){const ve=i==="ar"?`سنة ${Ne}، ${ce.nameAr}: ${He.value} ${ce.unitAr}`:`Year ${Ne}, ${ce.nameEn}: ${He.value} ${ce.unitEn}`;ge(ve)}},[_e,ce,i]),{isPlaying:ze,currentYear:Qe,playbackSpeed:Te,volume:it,isMuted:ct,instrument:at,quantizeScale:F,isLooping:rt,togglePlay:et,setYear:tt,stepForward:Se,stepBackward:mt,setVolume:Oe,toggleMute:je,setInstrument:w,setQuantizeScale:A,setIsLooping:D,changeSpeed:se,unlockAudio:K,playFramePixelTone:de,startFrameScan:fe,isScanning:Z,scanProgress:B,pitchMappingText:ee}=lx({dataA:_e,dataB:we,secondaryDataA:Ye,statsA:me,statsB:Re,primaryVariable:v,secondaryVariable:L,isCompareMode:G,onYearChange:Ee}),C=cx({initialStageId:"air",locationA:V,locationB:ie,isCompareMode:De,volume:it,isMuted:ct,instrument:at,quantizeScale:F,unlockAudio:K}),{isSpeaking:J,speechSupported:X,speakSummary:le,stopSpeaking:re,summaryText:pe}=dx({language:i,statsA:me,locationA:U,primaryVariable:v,isCompareMode:G,locationB:$,statsB:Re});ux({onTogglePlay:et,onStepBackward:mt,onStepForward:Se,onIncreaseSpeed:()=>se(Te===2?.5:Te+.5),onToggleMute:je});const xe=Ne=>{const ue=document.getElementById(Ne);ue&&ue.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("div",{className:"terra-redesign-wrapper","data-theme":t,children:[s.jsx("div",{className:"sr-only",role:"status","aria-live":"polite",children:he}),s.jsx(Jd,{theme:t,onToggleTheme:_,lang:i,onToggleLang:N,soundEnabled:a,onToggleSound:T,onOpenAbout:()=>m(!0),onOpenShortcuts:()=>d(!0),onOpenEICModal:()=>g(!0)}),s.jsxs("main",{id:"main-content",children:[s.jsx(y0,{lang:i,isDark:t==="dark",onExploreClick:()=>xe("explore"),onHowItWorksClick:()=>xe("science")}),s.jsx(b0,{lang:i}),s.jsx(M0,{lang:i,onSelectDataset:Ne=>{y(Ne)}}),s.jsx(L0,{lang:i,isDark:t==="dark",selectedDatasetId:x,onDatasetChange:y}),s.jsxs("div",{className:"advanced-explorer-wrapper",style:{maxWidth:"1380px",margin:"0 auto 4rem auto",padding:"0 1.5rem"},children:[s.jsxs("button",{onClick:()=>f(!p),className:"advanced-explorer-toggle-btn",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--color-bg-card)",border:"1px solid var(--color-border)",borderRadius:"14px",padding:"1.15rem 1.75rem",color:"var(--color-text-primary)",fontSize:"1rem",fontWeight:700,cursor:"pointer",boxShadow:"var(--shadow-card-elevated)",transition:"all 0.2s ease"},children:[s.jsxs("div",{style:{display:"flex",alignItem:"center",gap:"0.75rem"},children:[s.jsx(mi,{size:20,color:"var(--color-accent-primary)"}),s.jsx("span",{children:i==="ar"?"مستكشف خرائط ناسا المتقدم (NASA GIBS & Global Coordinates)":"Advanced Geospatial Satellite Map & Coordinate Picker (NASA GIBS)"})]}),p?s.jsx(ys,{size:20}):s.jsx(Ss,{size:20})]}),p&&s.jsxs("div",{style:{marginTop:"1.5rem",background:"var(--color-bg-card)",borderRadius:"16px",padding:"1.5rem",border:"1px solid var(--color-border)"},children:[s.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"1.25rem"},children:[s.jsx("button",{onClick:()=>E("power"),className:`cat-pill-btn ${S==="power"?"active":""}`,children:i==="ar"?"سلاسل المناخ (NASA POWER)":"NASA POWER Climate Explorer"}),s.jsx("button",{onClick:()=>E("pollution"),className:`cat-pill-btn ${S==="pollution"?"active":""}`,children:i==="ar"?"مراحل التلوث العالمية":"Global Pollution Stages"})]}),S==="pollution"?s.jsx(Q0,{pollutionState:C,lang:i,theme:t,locationA:V,onSelectLocationA:te,locationB:ie,onSelectLocationB:ye,isCompareMode:De,onToggleCompareMode:H,volume:it,onChangeVolume:Oe,isMuted:ct,onToggleMute:je,instrument:at,onChangeInstrument:w,quantizeScale:F,onToggleQuantizeScale:A,onAnnounce:ge}):s.jsxs(s.Fragment,{children:[Y&&s.jsxs("div",{className:"loading-bar-wrap",role:"status",children:[s.jsx(ca,{className:"icon-sm spin"}),s.jsx("span",{children:i==="ar"?"جاري جلب بيانات المناخ...":"Fetching NASA climate series..."})]}),Ae&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ra,{className:"icon"}),s.jsx("span",{children:Ae}),s.jsx("button",{type:"button",className:"btn-retry",onClick:Xe,children:"Retry"})]}),s.jsxs("div",{className:"grid-two-columns",children:[s.jsx(ex,{lang:i,theme:t,locationA:U,onSelectLocationA:k,locationB:$,onSelectLocationB:I,isCompareMode:G,onToggleCompareMode:Q,currentYear:Qe,dataA:_e,dataB:we,primaryVariable:v,onPlayFramePixelTone:de,onStartFrameScan:fe,isScanning:Z,scanProgress:B}),j?s.jsx(sx,{lang:i,dataA:_e,dataB:we,statsA:me,statsB:Re,primaryVariable:v,locationA:U,locationB:$,isCompareMode:G,currentYear:Qe,showTable:j,onToggleTable:oe}):s.jsx(tx,{lang:i,theme:t,dataA:_e,dataB:we,statsA:me,statsB:Re,currentYear:Qe,primaryVariable:v,locationA:U,locationB:$,isCompareMode:G,showTable:j,onToggleTable:oe})]}),s.jsxs("div",{className:"grid-two-columns",style:{marginTop:"1rem"},children:[s.jsx(nx,{lang:i,currentYear:Qe,years:Ve,isPlaying:ze,onTogglePlay:et,onStepBackward:mt,onStepForward:Se,onSelectYear:Ne=>tt(Ne,!0),playbackSpeed:Te,onChangeSpeed:se,isLooping:rt,onToggleLoop:()=>D(Ne=>!Ne)}),s.jsx(ix,{lang:i,volume:it,onChangeVolume:Oe,isMuted:ct,onToggleMute:je,instrument:at,onChangeInstrument:w,quantizeScale:F,onToggleQuantizeScale:A,primaryVariable:v,onChangePrimaryVariable:b,secondaryVariable:L,onChangeSecondaryVariable:P,isCompareMode:G,pitchMappingText:ee})]}),s.jsx(ax,{lang:i,statsA:me,statsB:Re,locationA:U,locationB:$,primaryVariable:v,isCompareMode:G,isSpeaking:J,speechSupported:X,onSpeakSummary:le,onStopSpeaking:re,summaryText:pe})]})]})]}),s.jsx(D0,{lang:i}),s.jsx(U0,{lang:i})]}),s.jsx(k0,{isOpen:c,onClose:()=>d(!1),lang:i}),s.jsx(V0,{isOpen:h,onClose:()=>m(!1),lang:i}),s.jsx(H0,{isOpen:u,onClose:()=>g(!1),lang:i,theme:t})]})}class fx extends Zl.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Earth Jukebox runtime error:",e,t)}render(){var e;return this.state.hasError?s.jsxs("div",{role:"alert",style:{minHeight:"100vh",backgroundColor:"#070a13",color:"#f8fafc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center",gap:"1rem"},children:[s.jsx("h1",{style:{fontSize:"1.4rem",color:"#38bdf8",margin:0},children:"Earth Jukebox failed to render"}),s.jsx("p",{style:{maxWidth:"520px",color:"#cbd5e1",margin:0},children:((e=this.state.error)==null?void 0:e.message)||"Unexpected application error."}),s.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{padding:"0.6rem 1.2rem",borderRadius:"8px",border:"1px solid #38bdf8",backgroundColor:"#0f172a",color:"#f8fafc",cursor:"pointer",fontWeight:700},children:"Reload Application"})]}):this.props.children}}pr.createRoot(document.getElementById("root")).render(s.jsx(Zl.StrictMode,{children:s.jsx(fx,{children:s.jsx(hx,{})})}));

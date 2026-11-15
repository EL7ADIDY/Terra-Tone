import{r as C,j as s,C as co,a as uo,L as ho,P as fo,b as po,p as mo,d as go,e as xo,i as vo,f as _o,R as Kl}from"./chartjs-B4Rk94oj.js";import{r as gd}from"./react-CTEZVXUg.js";import{L as jt}from"./leaflet-BtnBn_9I.js";import{J as xd}from"./jszip-Cj3QqAs6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();var pr={},Xo=gd;pr.createRoot=Xo.createRoot,pr.hydrateRoot=Xo.hydrateRoot;const vd=[48,50,52,55,57,60,62,64,67,69,72,74,76,79,81,84];function _d(n){return 440*Math.pow(2,(n-69)/12)}const li=vd.map(_d),Is=li[0],Sd=li[li.length-1];function Gn(n,e,t,i=!0){if(n===null||isNaN(n))return Is;const a=Math.max(0,Math.min(1,(n-e)/(t-e||1)));if(i){const r=Math.round(a*(li.length-1));return li[r]}else return Is*Math.pow(Sd/Is,a)}let Ls=null,mi=null;function ha(){if(!Ls){const n=window.AudioContext||window.webkitAudioContext;n&&(Ls=new n)}return Ls}function Qn(){const n=ha();if(!n)return null;if(!mi)try{mi=n.createAnalyser(),mi.fftSize=256,mi.smoothingTimeConstant=.8,mi.connect(n.destination)}catch{return null}return mi}async function vs(){const n=ha();if(!n)return!1;if(n.state==="suspended")try{await n.resume()}catch(e){return console.warn("AudioContext resume failed:",e),!1}return n.state==="running"}function zn({frequency:n,duration:e=.45,volume:t=.7,instrument:i="sine",pan:a=0,isRecordHigh:r=!1,isRecordLow:o=!1,secondaryVolume:l=1}){const c=ha();if(!c||c.state!=="running")return;const d=c.currentTime,h=Math.max(.15,e*.85),m=c.createGain(),u=Math.max(0,Math.min(1,t*l)),g=Qn()||c.destination;let x=null;if(c.createStereoPanner?(x=c.createStereoPanner(),x.pan.setValueAtTime(Math.max(-1,Math.min(1,a)),d),m.connect(x),x.connect(g)):m.connect(g),i==="soft_pluck"){const y=c.createOscillator();y.type="triangle",y.frequency.setValueAtTime(n,d);const p=c.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(Math.min(3e3,n*4),d),p.frequency.exponentialRampToValueAtTime(Math.max(120,n*.8),d+h),m.gain.setValueAtTime(1e-4,d),m.gain.linearRampToValueAtTime(u*.8,d+.008),m.gain.exponentialRampToValueAtTime(1e-4,d+h),y.connect(p),p.connect(m),y.start(d),y.stop(d+h+.05)}else if(i==="triangle"){const y=c.createOscillator();y.type="triangle",y.frequency.setValueAtTime(n,d);const p=c.createOscillator();p.type="sine",p.frequency.setValueAtTime(n*2,d);const f=c.createGain();f.gain.setValueAtTime(.15,d),m.gain.setValueAtTime(1e-4,d),m.gain.linearRampToValueAtTime(u*.7,d+.03),m.gain.exponentialRampToValueAtTime(1e-4,d+h),y.connect(m),p.connect(f),f.connect(m),y.start(d),p.start(d),y.stop(d+h+.05),p.stop(d+h+.05)}else{const y=c.createOscillator();y.type="sine",y.frequency.setValueAtTime(n,d),m.gain.setValueAtTime(1e-4,d),m.gain.linearRampToValueAtTime(u*.75,d+.03),m.gain.exponentialRampToValueAtTime(u*.35,d+h*.4),m.gain.exponentialRampToValueAtTime(1e-4,d+h),y.connect(m),y.start(d),y.stop(d+h+.05)}r&&yd(c,d+.06,u,a),o&&bd(c,d+.06,u,a)}function yd(n,e,t,i){[880,1174.66,1760].forEach((r,o)=>{const l=e+o*.07,c=n.createOscillator(),d=n.createGain();if(c.type="sine",c.frequency.setValueAtTime(r,l),d.gain.setValueAtTime(1e-4,l),d.gain.linearRampToValueAtTime(t*.35,l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+.28),n.createStereoPanner){const h=n.createStereoPanner();h.pan.setValueAtTime(i,l),d.connect(h),h.connect(n.destination)}else d.connect(n.destination);c.connect(d),c.start(l),c.stop(l+.3)})}function bd(n,e,t,i){const a=n.createOscillator(),r=n.createGain();if(a.type="triangle",a.frequency.setValueAtTime(98,e),a.frequency.exponentialRampToValueAtTime(65.41,e+.4),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(t*.45,e+.02),r.gain.exponentialRampToValueAtTime(1e-4,e+.5),n.createStereoPanner){const o=n.createStereoPanner();o.pan.setValueAtTime(i,e),r.connect(o),o.connect(n.destination)}else r.connect(n.destination);a.connect(r),a.start(e),a.stop(e+.55)}function Md({theme:n,onToggleTheme:e,soundEnabled:t=!0}){const[i,a]=C.useState(0),[r,o]=C.useState(!1),[l,c]=C.useState(!1),d=C.useRef(0),h=C.useRef(0),m=n==="dark",u=C.useCallback(()=>{if(t)try{const b=ha();if(!b||b.state!=="running")return;const E=b.createOscillator(),T=b.createGain(),_=b.currentTime;E.type="triangle",E.frequency.setValueAtTime(m?520:680,_),E.frequency.exponentialRampToValueAtTime(140,_+.04),T.gain.setValueAtTime(.08,_),T.gain.exponentialRampToValueAtTime(.001,_+.04),E.connect(T),T.connect(b.destination),E.start(_),E.stop(_+.045)}catch{}},[t,m]),g=C.useCallback(()=>{u(),e()},[u,e]),x=b=>{b.preventDefault(),o(!0),c(!1),d.current=b.clientY,h.current=0;try{b.currentTarget.setPointerCapture(b.pointerId)}catch{}},y=b=>{if(!r)return;const E=b.clientY-d.current,T=Math.max(0,Math.min(45,E));h.current=T,a(T)},p=b=>{if(!r)return;o(!1);try{b.currentTarget.releasePointerCapture(b.pointerId)}catch{}h.current>=18&&g(),c(!0),a(0),setTimeout(()=>c(!1),500)},f=b=>{b.stopPropagation(),c(!0),a(15),setTimeout(()=>{a(0),g(),setTimeout(()=>c(!1),450)},120)},M=b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),f(b))};return s.jsxs("div",{className:`hanging-lamp-container ${m?"lamp-on":"lamp-off"}`,role:"button",tabIndex:0,"aria-label":`Toggle theme: current theme is ${n}. Pull cord or click lamp to switch.`,onKeyDown:M,title:`Theme: ${m?"Cosmic Dark":"Scientific Light"} (Click or pull string to switch)`,children:[s.jsx("div",{className:"lamp-mount-wire"}),s.jsxs("div",{className:"lamp-head",onClick:f,children:[s.jsxs("svg",{className:"lamp-svg",viewBox:"0 0 48 36",width:"44",height:"33","aria-hidden":"true",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"shadeGradDark",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),s.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),s.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),s.jsxs("linearGradient",{id:"shadeGradLight",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#64748b"}),s.jsx("stop",{offset:"50%",stopColor:"#cbd5e1"}),s.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]}),s.jsxs("radialGradient",{id:"bulbGlow",cx:"50%",cy:"50%",r:"50%",children:[s.jsx("stop",{offset:"0%",stopColor:"#fffbeb"}),s.jsx("stop",{offset:"40%",stopColor:"#fde047"}),s.jsx("stop",{offset:"80%",stopColor:"#f59e0b"}),s.jsx("stop",{offset:"100%",stopColor:"transparent"})]})]}),s.jsx("rect",{x:"21",y:"2",width:"6",height:"4",rx:"1",fill:m?"#64748b":"#475569"}),s.jsx("path",{d:"M 12 16 Q 24 6 36 16 L 40 22 Q 24 24 8 22 Z",fill:m?"url(#shadeGradDark)":"url(#shadeGradLight)",stroke:m?"#38bdf8":"#94a3b8",strokeWidth:"1"}),s.jsx("circle",{cx:"24",cy:"24",r:"6",className:"lamp-bulb-element",fill:m?"url(#bulbGlow)":"#cbd5e1",stroke:m?"#fef08a":"#94a3b8",strokeWidth:"1"})]}),m&&s.jsx("div",{className:"lamp-light-cone"})]}),s.jsxs("div",{className:`lamp-pull-cord-assembly ${l?"is-springing":""}`,style:{transform:`translateY(${i}px)`,transition:r?"none":"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)"},onPointerDown:x,onPointerMove:y,onPointerUp:p,onPointerCancel:p,children:[s.jsx("div",{className:"lamp-cord-line"}),s.jsx("div",{className:`lamp-pull-bead ${r?"is-dragging":""}`,title:"Drag down or click to switch theme",children:s.jsx("div",{className:"bead-inner"})})]})]})}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jl=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ad={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=C.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:a="",children:r,iconNode:o,...l},c)=>C.createElement("svg",{ref:c,...Ad,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Jl("lucide",a),...l},[...o.map(([d,h])=>C.createElement(d,h)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(n,e)=>{const t=C.forwardRef(({className:i,...a},r)=>C.createElement(Td,{ref:r,iconNode:e,className:Jl(`lucide-${Ed(n)}`,i),...a}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=Ie("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Ie("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=Ie("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=Ie("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Ie("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=Ie("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=Ie("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=Ie("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Ie("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=Ie("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Ie("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
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
 */const qo=Ie("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
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
 */const bo=Ie("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=Ie("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=Ie("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
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
 */const gr=Ie("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
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
 */const bs=Ie("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
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
 */const xr=Ie("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
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
 */const Ms=Ie("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=Ie("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
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
 */const Eo=Ie("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
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
 */const os=Ie("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
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
 */const Es=Ie("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
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
 */const As=Ie("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=Ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Ie("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Qd({theme:n,onToggleTheme:e,lang:t,onToggleLang:i,soundEnabled:a,onToggleSound:r,isHighContrast:o=!1,onToggleHighContrast:l,isLargeText:c=!1,onToggleLargeText:d,onOpenAbout:h,onOpenShortcuts:m,onOpenEICModal:u}){const[g,x]=C.useState("home"),[y,p]=C.useState(!1),[f,M]=C.useState(!1),b=[{id:"home",label:t==="ar"?"الرئيسية":"Home"},{id:"science",label:t==="ar"?"العلم والمبدأ":"The Science"},{id:"explore",label:t==="ar"?"استكشاف البيانات":"Explore Data"},{id:"studio",label:t==="ar"?"استوديو الصوتيات":"Sonification Studio"},{id:"discover",label:t==="ar"?"دليل الاستماع":"Discover"},{id:"about",label:t==="ar"?"عن المشروع":"About"}];C.useEffect(()=>{const T=()=>{M(window.scrollY>20);const _=b.map(N=>document.getElementById(N.id)).filter(Boolean),v=window.scrollY+180;for(let N=_.length-1;N>=0;N--){const O=_[N];if(O.offsetTop<=v){x(O.id);break}}};return window.addEventListener("scroll",T,{passive:!0}),T(),()=>window.removeEventListener("scroll",T)},[t]);const E=T=>{p(!1);const _=document.getElementById(T);_&&_.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("header",{className:`navbar-header ${f?"is-scrolled":""}`,children:[s.jsxs("div",{className:"navbar-container",children:[s.jsxs("a",{href:"#home",onClick:T=>{T.preventDefault(),E("home")},className:"navbar-brand",children:[s.jsxs("div",{className:"brand-logo-icon",children:[s.jsx("span",{className:"logo-pulse-ring"}),s.jsx("span",{className:"logo-core"})]}),s.jsxs("div",{className:"brand-text",children:[s.jsx("span",{className:"brand-title",children:"TERRA-TONE"}),s.jsx("span",{className:"brand-tag",children:"NASA DATA SONIFICATION"})]})]}),s.jsx("nav",{className:"navbar-links","aria-label":"Main Navigation",children:b.map(T=>s.jsxs("button",{onClick:()=>E(T.id),className:`nav-link-btn ${g===T.id?"active":""}`,children:[T.label,g===T.id&&s.jsx("span",{className:"nav-active-pill"})]},T.id))}),s.jsxs("div",{className:"navbar-actions",children:[s.jsx("button",{onClick:r,className:"navbar-icon-btn",title:a?t==="ar"?"كتم الصوت":"Mute Sound":t==="ar"?"تشغيل الصوت":"Unmute Sound","aria-label":"Toggle Sound",children:a?s.jsx(rn,{size:18}):s.jsx(Zn,{size:18})}),s.jsxs("button",{onClick:l,className:`navbar-icon-btn a11y-toggle-btn contrast-btn ${o?"is-active":""}`,title:t==="ar"?o?"إلغاء التباين العالي":"تفعيل وضع التباين العالي (WCAG AAA)":o?"Disable High Contrast":"Enable High Contrast (WCAG AAA)","aria-label":"Toggle High Contrast Mode","aria-pressed":o,children:[s.jsx(qo,{size:17,className:"contrast-icon-anim"}),s.jsx("span",{className:"a11y-badge-dot"})]}),s.jsxs("button",{onClick:d,className:`navbar-icon-btn a11y-toggle-btn text-size-btn ${c?"is-active":""}`,title:t==="ar"?c?"استعادة حجم الخط العادي":"تكبير حجم الخط (نص كبير)":c?"Reset Normal Font Size":"Enlarge Font Size (Large Text)","aria-label":"Toggle Large Font Size","aria-pressed":c,children:[s.jsxs("span",{className:"text-size-icon-anim",children:[s.jsx("span",{className:"letter-base",children:"A"}),s.jsx("span",{className:"letter-plus",children:"+"})]}),s.jsx("span",{className:"a11y-badge-dot"})]}),s.jsxs("button",{onClick:i,className:"navbar-pill-btn",title:"Toggle Language (English / العربية)",children:[s.jsx(ia,{size:14}),s.jsx("span",{children:t==="en"?"AR":"EN"})]}),s.jsx("div",{className:"navbar-lamp-wrapper",title:"Interactive Hanging Lamp",children:s.jsx(Md,{theme:n,onToggleTheme:e,soundEnabled:a})}),s.jsx("button",{onClick:()=>p(!y),className:"navbar-mobile-toggle","aria-label":"Toggle Navigation Menu",children:y?s.jsx(Ts,{size:22}):s.jsx(Bd,{size:22})})]})]}),y&&s.jsxs("div",{className:"mobile-nav-drawer",children:[s.jsx("div",{className:"mobile-nav-links",children:b.map(T=>s.jsx("button",{onClick:()=>E(T.id),className:`mobile-nav-link ${g===T.id?"active":""}`,children:T.label},T.id))}),s.jsxs("div",{className:"mobile-a11y-row",children:[s.jsxs("button",{onClick:l,className:`mobile-a11y-chip ${o?"is-active":""}`,children:[s.jsx(qo,{size:16,className:"contrast-icon-anim"}),s.jsx("span",{children:t==="ar"?"تباين عالي":"High Contrast"})]}),s.jsxs("button",{onClick:d,className:`mobile-a11y-chip ${c?"is-active":""}`,children:[s.jsx("span",{className:"text-size-icon-anim",style:{display:"inline-flex",fontSize:"0.9rem",fontWeight:800},children:"A+"}),s.jsx("span",{children:t==="ar"?"تكبير النص":"Big Text"})]})]}),s.jsxs("div",{className:"mobile-nav-footer",children:[s.jsxs("button",{onClick:h,className:"mobile-nav-sublink",children:[s.jsx(ei,{size:16}),s.jsx("span",{children:t==="ar"?"عن المشروع":"About Project"})]}),s.jsxs("button",{onClick:m,className:"mobile-nav-sublink",children:[s.jsx(Pd,{size:16}),s.jsx("span",{children:t==="ar"?"اختصارات المفاتيح":"Keyboard Shortcuts"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="187",eu=0,Yo=1,tu=2,Ja=1,nu=2,Ji=3,ci=0,zt=1,An=2,Ri=0,na=1,vr=2,Zo=3,Ko=4,iu=5,wi=100,au=101,su=102,ru=103,ou=104,lu=200,cu=201,du=202,uu=203,mc=204,gc=205,hu=206,fu=207,pu=208,mu=209,gu=210,xu=211,vu=212,_u=213,Su=214,_r=0,Sr=1,yr=2,sa=3,br=4,Mr=5,Er=6,Ar=7,xc=0,yu=1,bu=2,Nn=0,vc=1,_c=2,Sc=3,yc=4,bc=5,Mc=6,Ec=7,Ac=300,Li=301,ra=302,Ds=303,Us=304,Tr=1e3,Tn=1001,Nr=1002,Pt=1003,Mu=1004,Ta=1005,Vt=1006,Os=1007,Vn=1008,$t=1009,Tc=1010,Nc=1011,oa=1012,To=1013,gn=1014,hn=1015,xn=1016,No=1017,wo=1018,Di=1020,wc=35902,Cc=35899,Rc=1021,Pc=1022,fn=1023,Kn=1026,Hn=1027,Ic=1028,Co=1029,di=1030,Ro=1031,Po=1033,Qa=33776,es=33777,ts=33778,ns=33779,wr=35840,Cr=35841,Rr=35842,Pr=35843,Ir=36196,Lr=37492,Dr=37496,Ur=37488,Or=37489,ls=37490,Fr=37491,kr=37808,Br=37809,Gr=37810,zr=37811,jr=37812,Vr=37813,Hr=37814,Wr=37815,$r=37816,Xr=37817,qr=37818,Yr=37819,Zr=37820,Kr=37821,Jr=36492,Qr=36494,eo=36495,to=36283,no=36284,cs=36285,io=36286,Eu=3200,ao=0,Au=1,Bn="",Yt="srgb",ds="srgb-linear",us="linear",mt="srgb",Fs=7680,Tu=519,Nu=512,wu=513,Cu=514,Lc=515,Ru=516,Pu=517,Dc=518,Uc=519,Iu=35044,Jo="300 es",an=2e3,la=2001;function Lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Du(){const n=hs("canvas");return n.style.display="block",n}const Qo={};function el(...n){const e="THREE."+n.shift();console.log(e,...n)}function Oc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Oc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function pt(...n){n=Oc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function is(...n){const e=n.join(" ");e in Qo||(Qo[e]=!0,Ze(...n))}function Uu(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ou={[_r]:_r,[yr]:Er,[br]:br,[sa]:Mr,[Sr]:Sr,[Er]:yr,[Ar]:Ar,[Mr]:sa};class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,so=180/Math.PI;function fa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Fu(n,e){return(n%e+e)%e}function Bs(n,e,t){return(1-t)*n+t*e}function ku(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Io(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bu(n,e){if(e.constructor===Float32Array)return n;const t=Io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Gu(n,e){if(e.constructor===Float32Array)return n;const t=Io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const jo=class jo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*a+e.x,this.y=r*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jo.prototype.isVector2=!0;let ct=jo;class ki{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,o,l){let c=i[a+0],d=i[a+1],h=i[a+2],m=i[a+3],u=r[o+0],g=r[o+1],x=r[o+2],y=r[o+3];if(m!==y||c!==u||d!==g||h!==x){let p=c*u+d*g+h*x+m*y;p<0&&(u=-u,g=-g,x=-x,y=-y,p=-p);let f=1-l;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);f=Math.sin(f*M)/b,l=Math.sin(l*M)/b,c=c*f+u*l,d=d*f+g*l,h=h*f+x*l,m=m*f+y*l}else{c=c*f+u*l,d=d*f+g*l,h=h*f+x*l,m=m*f+y*l;const M=1/Math.sqrt(c*c+d*d+h*h+m*m);c*=M,d*=M,h*=M,m*=M}}e[t]=c,e[t+1]=d,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,r,o){const l=i[a],c=i[a+1],d=i[a+2],h=i[a+3],m=r[o],u=r[o+1],g=r[o+2],x=r[o+3];return e[t]=l*x+h*m+c*g-d*u,e[t+1]=c*x+h*u+d*m-l*g,e[t+2]=d*x+h*g+l*u-c*m,e[t+3]=h*x-l*m-c*u-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,d=l(i/2),h=l(a/2),m=l(r/2),u=c(i/2),g=c(a/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*m+d*g*x,this._y=d*g*m-u*h*x,this._z=d*h*x+u*g*m,this._w=d*h*m-u*g*x;break;case"YXZ":this._x=u*h*m+d*g*x,this._y=d*g*m-u*h*x,this._z=d*h*x-u*g*m,this._w=d*h*m+u*g*x;break;case"ZXY":this._x=u*h*m-d*g*x,this._y=d*g*m+u*h*x,this._z=d*h*x+u*g*m,this._w=d*h*m-u*g*x;break;case"ZYX":this._x=u*h*m-d*g*x,this._y=d*g*m+u*h*x,this._z=d*h*x-u*g*m,this._w=d*h*m+u*g*x;break;case"YZX":this._x=u*h*m+d*g*x,this._y=d*g*m+u*h*x,this._z=d*h*x-u*g*m,this._w=d*h*m-u*g*x;break;case"XZY":this._x=u*h*m-d*g*x,this._y=d*g*m-u*h*x,this._z=d*h*x+u*g*m,this._w=d*h*m+u*g*x;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],o=t[1],l=t[5],c=t[9],d=t[2],h=t[6],m=t[10],u=i+l+m;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-d)*g,this._z=(o-a)*g}else if(i>l&&i>m){const g=2*Math.sqrt(1+i-l-m);this._w=(h-c)/g,this._x=.25*g,this._y=(a+o)/g,this._z=(r+d)/g}else if(l>m){const g=2*Math.sqrt(1+l-i-m);this._w=(r-d)/g,this._x=(a+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+m-i-l);this._w=(o-a)/g,this._x=(r+d)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,o=e._w,l=t._x,c=t._y,d=t._z,h=t._w;return this._x=i*h+o*l+a*d-r*c,this._y=a*h+o*c+r*l-i*d,this._z=r*h+o*d+i*c-a*l,this._w=o*h-i*l-a*c-r*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,a=-a,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){const d=Math.acos(l),h=Math.sin(d);c=Math.sin(c*d)/h,t=Math.sin(t*d)/h,this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vo=class Vo{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,o=e.y,l=e.z,c=e.w,d=2*(o*a-l*i),h=2*(l*t-r*a),m=2*(r*i-o*t);return this.x=t+c*d+o*m-l*h,this.y=i+c*h+l*d-r*m,this.z=a+c*m+r*h-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=a*c-r*l,this.y=r*o-i*c,this.z=i*l-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vo.prototype.isVector3=!0;let ne=Vo;const Gs=new ne,tl=new ki,Ho=class Ho{constructor(e,t,i,a,r,o,l,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,o,l,c,d)}set(e,t,i,a,r,o,l,c,d){const h=this.elements;return h[0]=e,h[1]=a,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,o=i[0],l=i[3],c=i[6],d=i[1],h=i[4],m=i[7],u=i[2],g=i[5],x=i[8],y=a[0],p=a[3],f=a[6],M=a[1],b=a[4],E=a[7],T=a[2],_=a[5],v=a[8];return r[0]=o*y+l*M+c*T,r[3]=o*p+l*b+c*_,r[6]=o*f+l*E+c*v,r[1]=d*y+h*M+m*T,r[4]=d*p+h*b+m*_,r[7]=d*f+h*E+m*v,r[2]=u*y+g*M+x*T,r[5]=u*p+g*b+x*_,r[8]=u*f+g*E+x*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],h=e[8];return t*o*h-t*l*d-i*r*h+i*l*c+a*r*d-a*o*c}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],h=e[8],m=h*o-l*d,u=l*c-h*r,g=d*r-o*c,x=t*m+i*u+a*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=m*y,e[1]=(a*d-h*i)*y,e[2]=(l*i-a*o)*y,e[3]=u*y,e[4]=(h*t-a*c)*y,e[5]=(a*r-l*t)*y,e[6]=g*y,e[7]=(i*c-d*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,o,l){const c=Math.cos(r),d=Math.sin(r);return this.set(i*c,i*d,-i*(c*o+d*l)+o+e,-a*d,a*c,-a*(-d*o+c*l)+l+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zs.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ho.prototype.isMatrix3=!0;let Ke=Ho;const zs=new Ke,nl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){const n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(a,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(a.r=wn(a.r),a.g=wn(a.g),a.b=wn(a.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(a.r=Pi(a.r),a.g=Pi(a.g),a.b=Pi(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Bn?us:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,o){return a.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:e,whitePoint:i,transfer:us,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const rt=zu();function wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gi;class ju{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gi===void 0&&(gi=hs("canvas")),gi.width=e.width,gi.height=e.height;const a=gi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=gi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wn(t[i]/255)*255):t[i]=wn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vu=0;class Lo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=fa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,l=a.length;o<l;o++)a[o].isDataTexture?r.push(js(a[o].image)):r.push(js(a[o]))}else r=js(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Hu=0;const Vs=new ne;class kt extends fi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Tn,a=Tn,r=Vt,o=Vn,l=fn,c=$t,d=kt.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=fa(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vs).x}get height(){return this.source.getSize(Vs).y}get depth(){return this.source.getSize(Vs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ac;kt.DEFAULT_ANISOTROPY=1;const Wo=class Wo{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const c=e.elements,d=c[0],h=c[4],m=c[8],u=c[1],g=c[5],x=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(m-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+y)<.1&&Math.abs(x+p)<.1&&Math.abs(d+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,E=(g+1)/2,T=(f+1)/2,_=(h+u)/4,v=(m+y)/4,N=(x+p)/4;return b>E&&b>T?b<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(b),a=_/i,r=v/i):E>T?E<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),i=_/a,r=N/a):T<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(T),i=v/r,a=N/r),this.set(i,a,r,t),this}let M=Math.sqrt((p-x)*(p-x)+(m-y)*(m-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(m-y)/M,this.z=(u-h)/M,this.w=Math.acos((d+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wo.prototype.isVector4=!0;let St=Wo;class Wu extends fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=new kt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Lo(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Wu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fc extends kt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends kt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const xs=class xs{constructor(e,t,i,a,r,o,l,c,d,h,m,u,g,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,o,l,c,d,h,m,u,g,x,y,p)}set(e,t,i,a,r,o,l,c,d,h,m,u,g,x,y,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=a,f[1]=r,f[5]=o,f[9]=l,f[13]=c,f[2]=d,f[6]=h,f[10]=m,f[14]=u,f[3]=g,f[7]=x,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(a),d=Math.sin(a),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const u=o*h,g=o*m,x=l*h,y=l*m;t[0]=c*h,t[4]=-c*m,t[8]=d,t[1]=g+x*d,t[5]=u-y*d,t[9]=-l*c,t[2]=y-u*d,t[6]=x+g*d,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,g=c*m,x=d*h,y=d*m;t[0]=u+y*l,t[4]=x*l-g,t[8]=o*d,t[1]=o*m,t[5]=o*h,t[9]=-l,t[2]=g*l-x,t[6]=y+u*l,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,g=c*m,x=d*h,y=d*m;t[0]=u-y*l,t[4]=-o*m,t[8]=x+g*l,t[1]=g+x*l,t[5]=o*h,t[9]=y-u*l,t[2]=-o*d,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,g=o*m,x=l*h,y=l*m;t[0]=c*h,t[4]=x*d-g,t[8]=u*d+y,t[1]=c*m,t[5]=y*d+u,t[9]=g*d-x,t[2]=-d,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,g=o*d,x=l*c,y=l*d;t[0]=c*h,t[4]=y-u*m,t[8]=x*m+g,t[1]=m,t[5]=o*h,t[9]=-l*h,t[2]=-d*h,t[6]=g*m+x,t[10]=u-y*m}else if(e.order==="XZY"){const u=o*c,g=o*d,x=l*c,y=l*d;t[0]=c*h,t[4]=-m,t[8]=d*h,t[1]=u*m+y,t[5]=o*h,t[9]=g*m-x,t[2]=x*m-g,t[6]=l*h,t[10]=y*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,qu)}lookAt(e,t,i){const a=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Ln.crossVectors(i,Ht),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Ln.crossVectors(i,Ht)),Ln.normalize(),Na.crossVectors(Ht,Ln),a[0]=Ln.x,a[4]=Na.x,a[8]=Ht.x,a[1]=Ln.y,a[5]=Na.y,a[9]=Ht.y,a[2]=Ln.z,a[6]=Na.z,a[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,o=i[0],l=i[4],c=i[8],d=i[12],h=i[1],m=i[5],u=i[9],g=i[13],x=i[2],y=i[6],p=i[10],f=i[14],M=i[3],b=i[7],E=i[11],T=i[15],_=a[0],v=a[4],N=a[8],O=a[12],R=a[1],D=a[5],F=a[9],q=a[13],I=a[2],V=a[6],Q=a[10],j=a[14],oe=a[3],W=a[7],te=a[11],ie=a[15];return r[0]=o*_+l*R+c*I+d*oe,r[4]=o*v+l*D+c*V+d*W,r[8]=o*N+l*F+c*Q+d*te,r[12]=o*O+l*q+c*j+d*ie,r[1]=h*_+m*R+u*I+g*oe,r[5]=h*v+m*D+u*V+g*W,r[9]=h*N+m*F+u*Q+g*te,r[13]=h*O+m*q+u*j+g*ie,r[2]=x*_+y*R+p*I+f*oe,r[6]=x*v+y*D+p*V+f*W,r[10]=x*N+y*F+p*Q+f*te,r[14]=x*O+y*q+p*j+f*ie,r[3]=M*_+b*R+E*I+T*oe,r[7]=M*v+b*D+E*V+T*W,r[11]=M*N+b*F+E*Q+T*te,r[15]=M*O+b*q+E*j+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],o=e[1],l=e[5],c=e[9],d=e[13],h=e[2],m=e[6],u=e[10],g=e[14],x=e[3],y=e[7],p=e[11],f=e[15],M=c*g-d*u,b=l*g-d*m,E=l*u-c*m,T=o*g-d*h,_=o*u-c*h,v=o*m-l*h;return t*(y*M-p*b+f*E)-i*(x*M-p*T+f*_)+a*(x*b-y*T+f*v)-r*(x*E-y*_+p*v)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10];return t*(o*h-l*d)-i*(r*h-l*c)+a*(r*d-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],h=e[8],m=e[9],u=e[10],g=e[11],x=e[12],y=e[13],p=e[14],f=e[15],M=t*l-i*o,b=t*c-a*o,E=t*d-r*o,T=i*c-a*l,_=i*d-r*l,v=a*d-r*c,N=h*y-m*x,O=h*p-u*x,R=h*f-g*x,D=m*p-u*y,F=m*f-g*y,q=u*f-g*p,I=M*q-b*F+E*D+T*R-_*O+v*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return e[0]=(l*q-c*F+d*D)*V,e[1]=(a*F-i*q-r*D)*V,e[2]=(y*v-p*_+f*T)*V,e[3]=(u*_-m*v-g*T)*V,e[4]=(c*R-o*q-d*O)*V,e[5]=(t*q-a*R+r*O)*V,e[6]=(p*E-x*v-f*b)*V,e[7]=(h*v-u*E+g*b)*V,e[8]=(o*F-l*R+d*N)*V,e[9]=(i*R-t*F-r*N)*V,e[10]=(x*_-y*E+f*M)*V,e[11]=(m*E-h*_-g*M)*V,e[12]=(l*O-o*D-c*N)*V,e[13]=(t*D-i*O+a*N)*V,e[14]=(y*b-x*T-p*M)*V,e[15]=(h*T-m*b+u*M)*V,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,o=e.x,l=e.y,c=e.z,d=r*o,h=r*l;return this.set(d*o+i,d*l-a*c,d*c+a*l,0,d*l+a*c,h*l+i,h*c-a*o,0,d*c-a*l,h*c+a*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,o){return this.set(1,i,r,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,d=r+r,h=o+o,m=l+l,u=r*d,g=r*h,x=r*m,y=o*h,p=o*m,f=l*m,M=c*d,b=c*h,E=c*m,T=i.x,_=i.y,v=i.z;return a[0]=(1-(y+f))*T,a[1]=(g+E)*T,a[2]=(x-b)*T,a[3]=0,a[4]=(g-E)*_,a[5]=(1-(u+f))*_,a[6]=(p+M)*_,a[7]=0,a[8]=(x+b)*v,a[9]=(p-M)*v,a[10]=(1-(u+y))*v,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=xi.set(a[0],a[1],a[2]).length();const l=xi.set(a[4],a[5],a[6]).length(),c=xi.set(a[8],a[9],a[10]).length();r<0&&(o=-o),Jt.copy(this);const d=1/o,h=1/l,m=1/c;return Jt.elements[0]*=d,Jt.elements[1]*=d,Jt.elements[2]*=d,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=m,Jt.elements[9]*=m,Jt.elements[10]*=m,t.setFromRotationMatrix(Jt),i.x=o,i.y=l,i.z=c,this}makePerspective(e,t,i,a,r,o,l=an,c=!1){const d=this.elements,h=2*r/(t-e),m=2*r/(i-a),u=(t+e)/(t-e),g=(i+a)/(i-a);let x,y;if(c)x=r/(o-r),y=o*r/(o-r);else if(l===an)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(l===la)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=u,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,r,o,l=an,c=!1){const d=this.elements,h=2/(t-e),m=2/(i-a),u=-(t+e)/(t-e),g=-(i+a)/(i-a);let x,y;if(c)x=1/(o-r),y=o/(o-r);else if(l===an)x=-2/(o-r),y=-(o+r)/(o-r);else if(l===la)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=0,d[12]=u,d[1]=0,d[5]=m,d[9]=0,d[13]=g,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};xs.prototype.isMatrix4=!0;let vt=xs;const xi=new ne,Jt=new vt,Xu=new ne(0,0,0),qu=new ne(1,1,1),Ln=new ne,Na=new ne,Ht=new ne,al=new vt,sl=new ki;class Jn{constructor(e=0,t=0,i=0,a=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],o=a[4],l=a[8],c=a[1],d=a[5],h=a[9],m=a[2],u=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yu=0;const rl=new ne,vi=new ki,Sn=new vt,wa=new ne,$i=new ne,Zu=new ne,Ku=new ki,ol=new ne(1,0,0),ll=new ne(0,1,0),cl=new ne(0,0,1),dl={type:"added"},Ju={type:"removed"},_i={type:"childadded",child:null},Hs={type:"childremoved",child:null};class It extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new ne,t=new Jn,i=new ki,a=new ne(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wa.copy(e):wa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt($i,wa,this.up):Sn.lookAt(wa,$i,this.up),this.quaternion.setFromRotationMatrix(Sn),a&&(Sn.extractRotation(a.matrixWorld),vi.setFromRotationMatrix(Sn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),_i.child=e,this.dispatchEvent(_i),_i.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(l=>({...l})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const m=c[d];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(r(e.materials,this.material[c]));a.material=l}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];a.animations.push(r(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),d=o(e.textures),h=o(e.images),m=o(e.shapes),u=o(e.skeletons),g=o(e.animations),x=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),u.length>0&&(i.skeletons=u),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=a,i;function o(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new ne(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ca extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,o=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),f=this._getHandJoint(d,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],u=h.position.distanceTo(m.position),g=.02,x=.005;d.inputState.pinching&&u>g+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=g-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function $s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=rt.workingColorSpace){if(e=Fu(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$s(o,r,e+1/3),this.g=$s(o,r,e),this.b=$s(o,r,e-1/3)}return rt.colorSpaceToWorking(this,a),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=a[1],l=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Bc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return rt.workingToColorSpace(Ft.copy(this),e),Math.round(ot(Ft.r*255,0,255))*65536+Math.round(ot(Ft.g*255,0,255))*256+Math.round(ot(Ft.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,a=Ft.g,r=Ft.b,o=Math.max(i,a,r),l=Math.min(i,a,r);let c,d;const h=(l+o)/2;if(l===o)c=0,d=0;else{const m=o-l;switch(d=h<=.5?m/(o+l):m/(2-o-l),o){case i:c=(a-r)/m+(a<r?6:0);break;case a:c=(r-i)/m+2;break;case r:c=(i-a)/m+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Yt){rt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,a=Ft.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ra);const i=Bs(Dn.h,Ra.h,t),a=Bs(Dn.s,Ra.s,t),r=Bs(Dn.l,Ra.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new lt;lt.NAMES=Bc;class eh extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qt=new ne,yn=new ne,Xs=new ne,bn=new ne,Si=new ne,yi=new ne,ul=new ne,qs=new ne,Ys=new ne,Zs=new ne,Ks=new St,Js=new St,Qs=new St;class nn{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Qt.subVectors(e,t),a.cross(Qt);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){Qt.subVectors(a,t),yn.subVectors(i,t),Xs.subVectors(e,t);const o=Qt.dot(Qt),l=Qt.dot(yn),c=Qt.dot(Xs),d=yn.dot(yn),h=yn.dot(Xs),m=o*d-l*l;if(m===0)return r.set(0,0,0),null;const u=1/m,g=(d*c-l*h)*u,x=(o*h-l*c)*u;return r.set(1-g-x,x,g)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,i,a,r,o,l,c){return this.getBarycoord(e,t,i,a,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(l,bn.z),c)}static getInterpolatedAttribute(e,t,i,a,r,o){return Ks.setScalar(0),Js.setScalar(0),Qs.setScalar(0),Ks.fromBufferAttribute(e,t),Js.fromBufferAttribute(e,i),Qs.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(Ks,r.x),o.addScaledVector(Js,r.y),o.addScaledVector(Qs,r.z),o}static isFrontFacing(e,t,i,a){return Qt.subVectors(i,t),yn.subVectors(e,t),Qt.cross(yn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let o,l;Si.subVectors(a,i),yi.subVectors(r,i),qs.subVectors(e,i);const c=Si.dot(qs),d=yi.dot(qs);if(c<=0&&d<=0)return t.copy(i);Ys.subVectors(e,a);const h=Si.dot(Ys),m=yi.dot(Ys);if(h>=0&&m<=h)return t.copy(a);const u=c*m-h*d;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(i).addScaledVector(Si,o);Zs.subVectors(e,r);const g=Si.dot(Zs),x=yi.dot(Zs);if(x>=0&&g<=x)return t.copy(r);const y=g*d-c*x;if(y<=0&&d>=0&&x<=0)return l=d/(d-x),t.copy(i).addScaledVector(yi,l);const p=h*x-g*m;if(p<=0&&m-h>=0&&g-x>=0)return ul.subVectors(r,a),l=(m-h)/(m-h+(g-x)),t.copy(a).addScaledVector(ul,l);const f=1/(p+y+u);return o=y*f,l=u*f,t.copy(i).addScaledVector(Si,o).addScaledVector(yi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pa{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const a=e.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),Ia.subVectors(this.max,Xi),bi.subVectors(e.a,Xi),Mi.subVectors(e.b,Xi),Ei.subVectors(e.c,Xi),Un.subVectors(Mi,bi),On.subVectors(Ei,Mi),ai.subVectors(bi,Ei);let t=[0,-Un.z,Un.y,0,-On.z,On.y,0,-ai.z,ai.y,Un.z,0,-Un.x,On.z,0,-On.x,ai.z,0,-ai.x,-Un.y,Un.x,0,-On.y,On.x,0,-ai.y,ai.x,0];return!er(t,bi,Mi,Ei,Ia)||(t=[1,0,0,0,1,0,0,0,1],!er(t,bi,Mi,Ei,Ia))?!1:(La.crossVectors(Un,On),t=[La.x,La.y,La.z],er(t,bi,Mi,Ei,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],en=new ne,Pa=new pa,bi=new ne,Mi=new ne,Ei=new ne,Un=new ne,On=new ne,ai=new ne,Xi=new ne,Ia=new ne,La=new ne,si=new ne;function er(n,e,t,i,a){for(let r=0,o=n.length-3;r<=o;r+=3){si.fromArray(n,r);const l=a.x*Math.abs(si.x)+a.y*Math.abs(si.y)+a.z*Math.abs(si.z),c=e.dot(si),d=t.dot(si),h=i.dot(si);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>l)return!1}return!0}const bt=new ne,Da=new ct;let th=0;class Xn extends fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=hn,this.version=0,this._normalizationScale=e!==void 0?Io(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gu(e,this.array)}}class Gc extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zc extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const nh=new pa,qi=new ne,tr=new ne;class Ns{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nh.setFromPoints(e).getCenter(i);let a=0;for(let r=0,o=e.length;r<o;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(qi,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(tr)),this.expandByPoint(qi.copy(e.center).sub(tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ih=0;const qt=new vt,nr=new It,Ai=new ne,Wt=new pa,Yi=new pa,wt=new ne;class vn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?zc:Gc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return nr.lookAt(e),nr.updateMatrix(),this.applyMatrix4(nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Yi.setFromBufferAttribute(l),this.morphTargetsRelative?(wt.addVectors(Wt.min,Yi.min),Wt.expandByPoint(wt),wt.addVectors(Wt.max,Yi.max),Wt.expandByPoint(wt)):(Wt.expandByPoint(Yi.min),Wt.expandByPoint(Yi.max))}Wt.getCenter(i);let a=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],c=this.morphTargetsRelative;for(let d=0,h=l.count;d<h;d++)wt.fromBufferAttribute(l,d),c&&(Ai.fromBufferAttribute(e,d),wt.add(Ai)),a=Math.max(a,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const l=[],c=[],d=new Uint8Array(i.count);for(let O=0;O<i.count;O++)l[O]=new ne,c[O]=new ne;const h=new ne,m=new ne,u=new ne,g=new ct,x=new ct,y=new ct,p=new ne,f=new ne;function M(O,R,D){d[O]=d[R]=d[D]=1,h.fromBufferAttribute(i,O),m.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),g.fromBufferAttribute(r,O),x.fromBufferAttribute(r,R),y.fromBufferAttribute(r,D),m.sub(h),u.sub(h),x.sub(g),y.sub(g);const F=1/(x.x*y.y-y.x*x.y);isFinite(F)&&(p.copy(m).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(F),f.copy(u).multiplyScalar(x.x).addScaledVector(m,-y.x).multiplyScalar(F),l[O].add(p),l[R].add(p),l[D].add(p),c[O].add(f),c[R].add(f),c[D].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,R=b.length;O<R;++O){const D=b[O],F=D.start,q=D.count;for(let I=F,V=F+q;I<V;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new ne,T=new ne,_=new ne,v=new ne;function N(O){_.fromBufferAttribute(a,O),v.copy(_);const R=l[O];E.copy(R),E.sub(_.multiplyScalar(_.dot(R))).normalize(),T.crossVectors(v,R);const F=T.dot(c[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,R=i.count;O<R;++O)d[O]&&N(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,g=i.count;u<g;u++)i.setXYZ(u,0,0,0);const a=new ne,r=new ne,o=new ne,l=new ne,c=new ne,d=new ne,h=new ne,m=new ne;if(e)for(let u=0,g=e.count;u<g;u+=3){const x=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,r),m.subVectors(a,r),h.cross(m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,p),l.add(h),c.add(h),d.add(h),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,d.x,d.y,d.z)}else for(let u=0,g=t.count;u<g;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),m.subVectors(a,r),h.cross(m),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(l,c){const d=l.array,h=l.itemSize,m=l.normalized,u=new d.constructor(c.length*h);let g=0,x=0;for(let y=0,p=c.length;y<p;y++){l.isInterleavedBufferAttribute?g=c[y]*l.data.stride+l.offset:g=c[y]*h;for(let f=0;f<h;f++)u[x++]=d[g++]}return new Xn(u,h,m)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,a=this.attributes;for(const l in a){const c=a[l],d=e(c,i);t.setAttribute(l,d)}const r=this.morphAttributes;for(const l in r){const c=[],d=r[l];for(let h=0,m=d.length;h<m;h++){const u=d[h],g=e(u,i);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let m=0,u=d.length;m<u;m++){const g=d[m];h.push(g.toJSON(e.data))}h.length>0&&(a[c]=h,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const d in a){const h=a[d];this.setAttribute(d,h.clone(t))}const r=e.morphAttributes;for(const d in r){const h=[],m=r[d];for(let u=0,g=m.length;u<g;u++)h.push(m[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,h=o.length;d<h;d++){const m=o[d];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ir=new ne,ah=new ne,sh=new Ke;class kn{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=ir.subVectors(i,t).cross(ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(ir),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(a,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sh.getNormalMatrix(e),a=this.coplanarPoint(ir).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let rh=0;class Bi extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=na,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const o=[];for(const l in r){const c=r[l];delete c.metadata,o.push(c)}return o}if(t){const r=a(e.textures),o=a(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new kn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const En=new ne,ar=new ne,Ua=new ne,Oa=new ne;class jc{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ar.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Oa.copy(this.origin).sub(ar);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ua),l=Oa.dot(this.direction),c=-Oa.dot(Ua),d=Oa.lengthSq(),h=Math.abs(1-o*o);let m,u,g,x;if(h>0)if(m=o*c-l,u=o*l-c,x=r*h,m>=0)if(u>=-x)if(u<=x){const y=1/h;m*=y,u*=y,g=m*(m+o*u+2*l)+u*(o*m+u+2*c)+d}else u=r,m=Math.max(0,-(o*u+l)),g=-m*m+u*(u+2*c)+d;else u=-r,m=Math.max(0,-(o*u+l)),g=-m*m+u*(u+2*c)+d;else u<=-x?(m=Math.max(0,-(-o*r+l)),u=m>0?-r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+d):u<=x?(m=0,u=Math.min(Math.max(-r,-c),r),g=u*(u+2*c)+d):(m=Math.max(0,-(o*r+l)),u=m>0?r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+d);else u=o>0?-r:r,m=Math.max(0,-(o*u+l)),g=-m*m+u*(u+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(ar).addScaledVector(Ua,u),g}intersectSphere(e,t){if(e.radius<0)return null;En.subVectors(e.center,this.origin);const i=En.dot(this.direction),a=En.dot(En)-i*i,r=e.radius*e.radius;if(a>r)return null;const o=Math.sqrt(r-a),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,o,l,c;const d=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return d>=0?(i=(e.min.x-u.x)*d,a=(e.max.x-u.x)*d):(i=(e.max.x-u.x)*d,a=(e.min.x-u.x)*d),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>a||((r>i||isNaN(i))&&(i=r),(o<a||isNaN(a))&&(a=o),m>=0?(l=(e.min.z-u.z)*m,c=(e.max.z-u.z)*m):(l=(e.max.z-u.z)*m,c=(e.min.z-u.z)*m),i>c||l>a)||((l>i||i!==i)&&(i=l),(c<a||a!==a)&&(a=c),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,a,r){const o=this.origin,l=this.direction,c=l.x,d=l.y,h=l.z,m=e.x-o.x,u=e.y-o.y,g=e.z-o.z,x=t.x-o.x,y=t.y-o.y,p=t.z-o.z,f=i.x-o.x,M=i.y-o.y,b=i.z-o.z,E=Math.abs(c),T=Math.abs(d),_=Math.abs(h);let v,N,O,R,D,F,q,I,V,Q,j,oe;if(E>=T&&E>=_?(O=c,F=m,V=x,oe=f,c>=0?(v=d,N=h,R=u,D=g,q=y,I=p,Q=M,j=b):(v=h,N=d,R=g,D=u,q=p,I=y,Q=b,j=M)):T>=_?(O=d,F=u,V=y,oe=M,d>=0?(v=h,N=c,R=g,D=m,q=p,I=x,Q=b,j=f):(v=c,N=h,R=m,D=g,q=x,I=p,Q=f,j=b)):(O=h,F=g,V=p,oe=b,h>=0?(v=c,N=d,R=m,D=u,q=x,I=y,Q=f,j=M):(v=d,N=c,R=u,D=m,q=y,I=x,Q=M,j=f)),O===0)return null;const W=v/O,te=N/O,ie=1/O,Se=R-W*F,Ue=D-te*F,X=q-W*V,me=I-te*V,ge=Q-W*oe,fe=j-te*oe,J=ge*me-fe*X,Re=Se*fe-Ue*ge,Oe=X*Ue-me*Se;if(a){if(J<0||Re<0||Oe<0)return null}else if((J<0||Re<0||Oe<0)&&(J>0||Re>0||Oe>0))return null;const Ee=J+Re+Oe;if(Ee===0)return null;const Ce=ie*(J*F+Re*V+Oe*oe);return(Ee>0?Ce<0:Ce>0)?null:this.at(Ce/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vc extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hl=new vt,ri=new jc,Fa=new Ns,fl=new ne,ka=new ne,Ba=new ne,Ga=new ne,sr=new ne,za=new ne,pl=new ne,ja=new ne;class Rn extends It{constructor(e=new vn,t=new Vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const l=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const l=this.morphTargetInfluences;if(r&&l){za.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=l[c],m=r[c];h!==0&&(sr.fromBufferAttribute(m,e),o?za.addScaledVector(sr,h):za.addScaledVector(sr.sub(t),h))}t.add(za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(Fa.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Fa,fl)===null||ri.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(hl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(hl),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let a;const r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){const p=u[x],f=o[p.materialIndex],M=Math.max(p.start,g.start),b=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=M,T=b;E<T;E+=3){const _=l.getX(E),v=l.getX(E+1),N=l.getX(E+2);a=Va(this,f,e,i,d,h,m,_,v,N),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=x,f=y;p<f;p+=3){const M=l.getX(p),b=l.getX(p+1),E=l.getX(p+2);a=Va(this,o,e,i,d,h,m,M,b,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){const p=u[x],f=o[p.materialIndex],M=Math.max(p.start,g.start),b=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let E=M,T=b;E<T;E+=3){const _=E,v=E+1,N=E+2;a=Va(this,f,e,i,d,h,m,_,v,N),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let p=x,f=y;p<f;p+=3){const M=p,b=p+1,E=p+2;a=Va(this,o,e,i,d,h,m,M,b,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function oh(n,e,t,i,a,r,o,l){let c;if(e.side===zt?c=i.intersectTriangle(o,r,a,!0,l):c=i.intersectTriangle(a,r,o,e.side===ci,l),c===null)return null;ja.copy(l),ja.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(ja);return d<t.near||d>t.far?null:{distance:d,point:ja.clone(),object:n}}function Va(n,e,t,i,a,r,o,l,c,d){n.getVertexPosition(l,ka),n.getVertexPosition(c,Ba),n.getVertexPosition(d,Ga);const h=oh(n,e,t,i,ka,Ba,Ga,pl);if(h){const m=new ne;nn.getBarycoord(pl,ka,Ba,Ga,m),a&&(h.uv=nn.getInterpolatedAttribute(a,l,c,d,m,new ct)),r&&(h.uv1=nn.getInterpolatedAttribute(r,l,c,d,m,new ct)),o&&(h.normal=nn.getInterpolatedAttribute(o,l,c,d,m,new ne),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:c,c:d,normal:new ne,materialIndex:0};nn.getNormal(ka,Ba,Ga,u.normal),h.face=u,h.barycoord=m}return h}class lh extends kt{constructor(e=null,t=1,i=1,a,r,o,l,c,d=Pt,h=Pt,m,u){super(null,o,l,c,d,h,a,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oi=new Ns,ch=new ct(.5,.5),Ha=new ne;class ca{constructor(e=new kn,t=new kn,i=new kn,a=new kn,r=new kn,o=new kn){this.planes=[e,t,i,a,r,o]}set(e,t,i,a,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(a),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an,i=!1){const a=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],d=r[3],h=r[4],m=r[5],u=r[6],g=r[7],x=r[8],y=r[9],p=r[10],f=r[11],M=r[12],b=r[13],E=r[14],T=r[15];if(a[0].setComponents(d-o,g-h,f-x,T-M).normalize(),a[1].setComponents(d+o,g+h,f+x,T+M).normalize(),a[2].setComponents(d+l,g+m,f+y,T+b).normalize(),a[3].setComponents(d-l,g-m,f-y,T-b).normalize(),i)a[4].setComponents(c,u,p,E).normalize(),a[5].setComponents(d-c,g-u,f-p,T-E).normalize();else if(a[4].setComponents(d-c,g-u,f-p,T-E).normalize(),t===an)a[5].setComponents(d+c,g+u,f+p,T+E).normalize();else if(t===la)a[5].setComponents(c,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=ch.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Ha.x=a.normal.x>0?e.max.x:e.min.x,Ha.y=a.normal.y>0?e.max.y:e.min.y,Ha.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ml=new vt;class Do{constructor(){this.coordinateSystem=an,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let a=0;a<t.length;a++){const r=t[a];ml.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[a]===void 0&&(i[a]=new ca),i[a].setFromProjectionMatrix(ml,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new ca),t[a].copy(i[a]);return this._count=e._count,this}clone(){return new Do().copy(this)}}class Hc extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gl=new vt,ro=new jc,Wa=new Ns,$a=new ne;class dh extends It{constructor(e=new vn,t=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(a),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;gl.copy(a).invert(),ro.copy(e.ray).applyMatrix4(gl);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=i.index,m=i.attributes.position;if(d!==null){const u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=u,y=g;x<y;x++){const p=d.getX(x);$a.fromBufferAttribute(m,p),xl($a,p,c,a,e,t,this)}}else{const u=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let x=u,y=g;x<y;x++)$a.fromBufferAttribute(m,x),xl($a,x,c,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const l=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function xl(n,e,t,i,a,r,o){const l=ro.distanceSqToPoint(n);if(l<t){const c=new ne;ro.closestPointToPoint(n,c),c.applyMatrix4(i);const d=a.ray.origin.distanceTo(c);if(d<a.near||d>a.far)return;r.push({distance:d,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Wc extends kt{constructor(e=[],t=Li,i,a,r,o,l,c,d,h){super(e,t,i,a,r,o,l,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uh extends kt{constructor(e,t,i,a,r,o,l,c,d){super(e,t,i,a,r,o,l,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui extends kt{constructor(e,t,i=gn,a,r,o,l=Pt,c=Pt,d,h=Kn,m=1){if(h!==Kn&&h!==Hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:m};super(u,a,r,o,l,c,h,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $c extends Ui{constructor(e,t=gn,i=Li,a,r,o=Pt,l=Pt,c,d=Kn){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,i,a,r,o,l,c,d),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ma extends vn{constructor(e=1,t=1,i=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:o};const l=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const c=[],d=[],h=[],m=[];let u=0,g=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,a,o,2),x("x","z","y",1,-1,e,i,-t,a,o,3),x("x","y","z",1,-1,e,t,i,a,r,4),x("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(c),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(m,2));function x(y,p,f,M,b,E,T,_,v,N,O){const R=E/v,D=T/N,F=E/2,q=T/2,I=_/2,V=v+1,Q=N+1;let j=0,oe=0;const W=new ne;for(let te=0;te<Q;te++){const ie=te*D-q;for(let Se=0;Se<V;Se++){const Ue=Se*R-F;W[y]=Ue*M,W[p]=ie*b,W[f]=I,d.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[f]=_>0?1:-1,h.push(W.x,W.y,W.z),m.push(Se/v),m.push(1-te/N),j+=1}}for(let te=0;te<N;te++)for(let ie=0;ie<v;ie++){const Se=u+ie+V*te,Ue=u+ie+V*(te+1),X=u+(ie+1)+V*(te+1),me=u+(ie+1)+V*te;c.push(Se,Ue,me),c.push(Ue,X,me),oe+=6}l.addGroup(g,oe,O),g+=oe,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ws extends vn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,o=t/2,l=Math.floor(i),c=Math.floor(a),d=l+1,h=c+1,m=e/l,u=t/c,g=[],x=[],y=[],p=[];for(let f=0;f<h;f++){const M=f*u-o;for(let b=0;b<d;b++){const E=b*m-r;x.push(E,-M,0),y.push(0,0,1),p.push(b/l),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<l;M++){const b=M+d*f,E=M+d*(f+1),T=M+1+d*(f+1),_=M+1+d*f;g.push(b,E,_),g.push(E,T,_)}this.setIndex(g),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class fs extends vn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let d=0;const h=[],m=new ne,u=new ne,g=[],x=[],y=[],p=[];for(let f=0;f<=i;f++){const M=[],b=f/i,E=o+b*l,T=e*Math.cos(E),_=Math.sqrt(e*e-T*T);let v=0;f===0&&o===0?v=.5/t:f===i&&c===Math.PI&&(v=-.5/t);for(let N=0;N<=t;N++){const O=N/t,R=a+O*r;m.x=-_*Math.cos(R),m.y=T,m.z=_*Math.sin(R),x.push(m.x,m.y,m.z),u.copy(m).normalize(),y.push(u.x,u.y,u.z),p.push(O+v,1-b),M.push(d++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const b=h[f][M+1],E=h[f][M],T=h[f+1][M],_=h[f+1][M+1];(f!==0||o>0)&&g.push(b,E,_),(f!==i-1||c<Math.PI)&&g.push(E,T,_)}this.setIndex(g),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Oi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(vl(a))a.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(vl(a[0])){const r=[];for(let o=0,l=a.length;o<l;o++)r[o]=a[o].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Oi(n[t]);for(const a in i)e[a]=i[a]}return e}function vl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function hh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const fh={clone:Oi,merge:Gt};var ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ph,this.fragmentShader=mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new lt().setHex(a.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(a.value);break;case"v3":this.uniforms[i].value=new ne().fromArray(a.value);break;case"v4":this.uniforms[i].value=new St().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(a.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gh extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xh extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vh extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _h extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yc extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const rr=new vt,_l=new ne,Sl=new ne;class Sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=a?a.z/r.x:1,l=a?a.w/r.y:1,c=a?a.x/r.x:0,d=a?a.y/r.y:0;e.coordinateSystem===la||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),t.multiply(rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xa=new ne,qa=new ki,cn=new ne;class Zc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xa,qa,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new ne,yl=new ct,bl=new ct;class tn extends Zc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,yl,bl),t.subVectors(bl,yl)}setViewOffset(e,t,i,a,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;r+=o.offsetX*a/c,t-=o.offsetY*i/d,a*=o.width/c,i*=o.height/d}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Kc extends Zc{constructor(e=-1,t=1,i=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,o=i+e,l=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yh extends Sh{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bh extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Mh extends Yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ti=-90,Ni=1;class oo extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new tn(Ti,Ni,e,t);a.layers=this.layers,this.add(a);const r=new tn(Ti,Ni,e,t);r.layers=this.layers,this.add(r);const o=new tn(Ti,Ni,e,t);o.layers=this.layers,this.add(o);const l=new tn(Ti,Ni,e,t);l.layers=this.layers,this.add(l);const c=new tn(Ti,Ni,e,t);c.layers=this.layers,this.add(c);const d=new tn(Ti,Ni,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,o,l,c]=t;for(const d of t)this.remove(d);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,c,d,h]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,u,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Eh extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Ml(n,e,t,i){const a=Ah(i);switch(t){case Rc:return n*e;case Ic:return n*e/a.components*a.byteLength;case Co:return n*e/a.components*a.byteLength;case di:return n*e*2/a.components*a.byteLength;case Ro:return n*e*2/a.components*a.byteLength;case Pc:return n*e*3/a.components*a.byteLength;case fn:return n*e*4/a.components*a.byteLength;case Po:return n*e*4/a.components*a.byteLength;case Qa:case es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cr:case Pr:return Math.max(n,16)*Math.max(e,8)/4;case wr:case Rr:return Math.max(n,8)*Math.max(e,8)/2;case Ir:case Lr:case Ur:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dr:case ls:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Br:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jr:case Qr:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case to:case no:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cs:case io:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ah(n){switch(n){case $t:case Tc:return{byteLength:1,components:1};case oa:case Nc:case xn:return{byteLength:2,components:1};case No:case wo:return{byteLength:2,components:4};case gn:case To:case hn:return{byteLength:4,components:1};case wc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jc(){let n=null,e=!1,t=null,i=null;function a(r,o){i=n.requestAnimationFrame(a),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Th(n){const e=new WeakMap;function t(l,c){const d=l.array,h=l.usage,m=d.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,d,h),l.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)g=n.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,c,d){const h=c.array,m=c.updateRanges;if(n.bindBuffer(d,l),m.length===0)n.bufferSubData(d,0,h);else{m.sort((g,x)=>g.start-x.start);let u=0;for(let g=1;g<m.length;g++){const x=m[u],y=m[g];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,m[u]=y)}m.length=u+1;for(let g=0,x=m.length;g<x;g++){const y=m[g];n.bufferSubData(d,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:a,remove:r,update:o}}var Nh=`#ifdef USE_ALPHAHASH
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
#endif`,Ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
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
#endif`,Cf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
}`,Cp=`varying vec3 vWorldDirection;
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
}`,et={alphahash_fragment:Nh,alphahash_pars_fragment:wh,alphamap_fragment:Ch,alphamap_pars_fragment:Rh,alphatest_fragment:Ph,alphatest_pars_fragment:Ih,aomap_fragment:Lh,aomap_pars_fragment:Dh,batching_pars_vertex:Uh,batching_vertex:Oh,begin_vertex:Fh,beginnormal_vertex:kh,bsdfs:Bh,iridescence_fragment:Gh,bumpmap_pars_fragment:zh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Wh,color_fragment:$h,color_pars_fragment:Xh,color_pars_vertex:qh,color_vertex:Yh,common:Zh,defaultnormal_vertex:Kh,displacementmap_pars_vertex:Jh,displacementmap_vertex:Qh,emissivemap_fragment:ef,emissivemap_pars_fragment:tf,colorspace_fragment:nf,colorspace_pars_fragment:af,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:of,envmap_pars_vertex:lf,envmap_physical_pars_fragment:_f,envmap_vertex:cf,fog_vertex:df,fog_pars_vertex:uf,fog_fragment:hf,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:xf,lights_pars_begin:vf,lights_toon_fragment:Sf,lights_toon_pars_fragment:yf,lights_phong_fragment:bf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Af,lights_fragment_begin:Tf,lights_fragment_maps:Nf,lights_fragment_end:wf,lightprobes_pars_fragment:Cf,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:Uf,map_particle_fragment:Of,map_particle_pars_fragment:Ff,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Bf,morphinstance_vertex:Gf,morphcolor_vertex:zf,morphnormal_vertex:jf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Hf,normal_fragment_begin:Wf,normal_fragment_maps:$f,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:ep,opaque_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:ap,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:dp,shadowmap_vertex:up,shadowmask_pars_fragment:hp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:xp,specularmap_pars_fragment:vp,tonemapping_fragment:_p,tonemapping_pars_fragment:Sp,transmission_fragment:yp,transmission_pars_fragment:bp,uv_pars_fragment:Mp,uv_pars_vertex:Ep,uv_vertex:Ap,worldpos_vertex:Tp,background_vert:Np,background_frag:wp,backgroundCube_vert:Cp,backgroundCube_frag:Rp,cube_vert:Pp,cube_frag:Ip,depth_vert:Lp,depth_frag:Dp,distance_vert:Up,distance_frag:Op,equirect_vert:Fp,equirect_frag:kp,linedashed_vert:Bp,linedashed_frag:Gp,meshbasic_vert:zp,meshbasic_frag:jp,meshlambert_vert:Vp,meshlambert_frag:Hp,meshmatcap_vert:Wp,meshmatcap_frag:$p,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:Kp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:em,points_vert:tm,points_frag:nm,shadow_vert:im,shadow_frag:am,sprite_vert:sm,sprite_frag:rm},Pe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},un={basic:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Gt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Gt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Gt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Gt([Pe.points,Pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Gt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Gt([Pe.common,Pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Gt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Gt([Pe.sprite,Pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Gt([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Gt([Pe.lights,Pe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};un.physical={uniforms:Gt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ya={r:0,b:0,g:0},om=new vt,Qc=new Ke;Qc.set(-1,0,0,0,1,0,0,0,1);function lm(n,e,t,i,a,r){const o=new lt(0);let l=a===!0?0:1,c,d,h=null,m=0,u=null;function g(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const E=M.backgroundBlurriness>0;b=e.get(b,E)}return b}function x(M){let b=!1;const E=g(M);E===null?p(o,l):E&&E.isColor&&(p(E,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,b){const E=g(b);E&&E.isCubeTexture?(d===void 0&&(d=new Rn(new ma(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Oi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,_,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(b.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Qc),d.material.toneMapped=rt.getTransfer(E.colorSpace)!==mt,(h!==E||m!==E.version||u!==n.toneMapping)&&(d.material.needsUpdate=!0,h=E,m=E.version,u=n.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Rn(new ws(2,2),new ui({name:"BackgroundMaterial",uniforms:Oi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||m!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,m=E.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,b){M.getRGB(Ya,qc(n)),t.buffers.color.setClear(Ya.r,Ya.g,Ya.b,b,r)}function f(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:x,addToRenderList:y,dispose:f}}function cm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,o=!1;function l(D,F,q,I,V){let Q=!1;const j=m(D,I,q,F);r!==j&&(r=j,d(r.object)),Q=g(D,I,q,V),Q&&x(D,I,q,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,E(D,F,q,I),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function d(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function m(D,F,q,I){const V=I.wireframe===!0;let Q=i[F.id];Q===void 0&&(Q={},i[F.id]=Q);const j=D.isInstancedMesh===!0?D.id:0;let oe=Q[j];oe===void 0&&(oe={},Q[j]=oe);let W=oe[q.id];W===void 0&&(W={},oe[q.id]=W);let te=W[V];return te===void 0&&(te=u(c()),W[V]=te),te}function u(D){const F=[],q=[],I=[];for(let V=0;V<t;V++)F[V]=0,q[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:I,object:D,attributes:{},index:null}}function g(D,F,q,I){const V=r.attributes,Q=F.attributes;let j=0;const oe=q.getAttributes();for(const W in oe)if(oe[W].location>=0){const ie=V[W];let Se=Q[W];if(Se===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;j++}return r.attributesNum!==j||r.index!==I}function x(D,F,q,I){const V={},Q=F.attributes;let j=0;const oe=q.getAttributes();for(const W in oe)if(oe[W].location>=0){let ie=Q[W];ie===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),V[W]=Se,j++}r.attributes=V,r.attributesNum=j,r.index=I}function y(){const D=r.newAttributes;for(let F=0,q=D.length;F<q;F++)D[F]=0}function p(D){f(D,0)}function f(D,F){const q=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;q[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),V[D]!==F&&(n.vertexAttribDivisor(D,F),V[D]=F)}function M(){const D=r.newAttributes,F=r.enabledAttributes;for(let q=0,I=F.length;q<I;q++)F[q]!==D[q]&&(n.disableVertexAttribArray(q),F[q]=0)}function b(D,F,q,I,V,Q,j){j===!0?n.vertexAttribIPointer(D,F,q,V,Q):n.vertexAttribPointer(D,F,q,I,V,Q)}function E(D,F,q,I){y();const V=I.attributes,Q=q.getAttributes(),j=F.defaultAttributeValues;for(const oe in Q){const W=Q[oe];if(W.location>=0){let te=V[oe];if(te===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const ie=te.normalized,Se=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const X=Ue.buffer,me=Ue.type,ge=Ue.bytesPerElement,fe=me===n.INT||me===n.UNSIGNED_INT||te.gpuType===To;if(te.isInterleavedBufferAttribute){const J=te.data,Re=J.isInterleavedBuffer===!0?J.stride:J.itemSize,Oe=te.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let Ee=0;Ee<W.locationSize;Ee++)f(W.location+Ee,J.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)p(W.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,X);for(let Ee=0;Ee<W.locationSize;Ee++)b(W.location+Ee,Se/W.locationSize,me,ie,Re*ge,(Oe+Se/W.locationSize*Ee)*ge,fe)}else{if(te.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)f(W.location+J,te.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let J=0;J<W.locationSize;J++)p(W.location+J);n.bindBuffer(n.ARRAY_BUFFER,X);for(let J=0;J<W.locationSize;J++)b(W.location+J,Se/W.locationSize,me,ie,Se*ge,Se/W.locationSize*J*ge,fe)}}else if(j!==void 0){const ie=j[oe];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(W.location,ie);break;case 3:n.vertexAttrib3fv(W.location,ie);break;case 4:n.vertexAttrib4fv(W.location,ie);break;default:n.vertexAttrib1fv(W.location,ie)}}}}M()}function T(){O();for(const D in i){const F=i[D];for(const q in F){const I=F[q];for(const V in I){const Q=I[V];for(const j in Q)h(Q[j].object),delete Q[j];delete I[V]}}delete i[D]}}function _(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const q in F){const I=F[q];for(const V in I){const Q=I[V];for(const j in Q)h(Q[j].object),delete Q[j];delete I[V]}}delete i[D.id]}function v(D){for(const F in i){const q=i[F];for(const I in q){const V=q[I];if(V[D.id]===void 0)continue;const Q=V[D.id];for(const j in Q)h(Q[j].object),delete Q[j];delete V[D.id]}}}function N(D){for(const F in i){const q=i[F],I=D.isInstancedMesh===!0?D.id:0,V=q[I];if(V!==void 0){for(const Q in V){const j=V[Q];for(const oe in j)h(j[oe].object),delete j[oe];delete V[Q]}delete q[I],Object.keys(q).length===0&&delete i[F]}}}function O(){R(),o=!0,r!==a&&(r=a,d(r.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:O,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:_,releaseStatesOfObject:N,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function dm(n,e,t){let i;function a(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function l(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let u=0;for(let g=0;g<h;g++)u+=d[g];t.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function um(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(v){return!(v!==fn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const N=v===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==$t&&v!==hn&&!N&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=c(d);h!==d&&(Ze("WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),_=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,maxSamples:T,samples:_}}function hm(n){const e=this;let t=null,i=0,a=!1,r=!1;const o=new kn,l=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const g=m.length!==0||u||i!==0||a;return a=u,i=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=h(m,u,0)},this.setState=function(m,u,g){const x=m.clippingPlanes,y=m.clipIntersection,p=m.clipShadows,f=n.get(m);if(!a||x===null||x.length===0||r&&!p)r?h(null):d();else{const M=r?0:i,b=M*4;let E=f.clippingState||null;c.value=E,E=h(x,u,b,g);for(let T=0;T!==b;++T)E[T]=t[T];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,u,g,x){const y=m!==null?m.length:0;let p=null;if(y!==0){if(p=c.value,x!==!0||p===null){const f=g+y*4,M=u.matrixWorldInverse;l.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,E=g;b!==y;++b,E+=4)o.copy(m[b]).applyMatrix4(M,l),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}class Uo extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Wc(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ma(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Oi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Ri});r.uniforms.tEquirect.value=t;const o=new Rn(a,r),l=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Vt),new oo(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(r)}}const El=256,fm=3,pm=20,ed=256,td=16,mm=3,gm=new ne,xm=new lt;class ps{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oo(1,10,null),this._boxMesh=new Rn(new ma(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:o=256,position:l=gm}=r,c=this._renderer;this._setSize(o);const d=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,u=c.autoClearColor,g=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(xm));const p=new oo(i,a,h);return p.position.copy(l),p.update(c,e),c.autoClear=m,c.autoClearColor=u,c.autoClearDepth=g,c.autoClearStencil=x,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(d,t)),this._applyPMREM(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(El,ku(e))}_fromTexture(e,t){e.mapping===Li||e.mapping===ra?this._setSize(e.image.length===0?El:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Al(e,!1,!1),i=Math.log2(e)-fm;for(let a=0;a<=i;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Al(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const a=this._boxMesh,r=this._cubeCamera;a.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Li||e.mapping===ra?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vm(),this._integrationMaterial=_m());const t=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/td);for(let o=0;o<=i;o++){const l=ps.lodToRoughness(o,i);if(o>i-mm)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const c=l>0?Math.log2(t)+.5*Math.log2(6/(ed*Math.pow(l,4)))+.5:0;a.roughness.value=l,a.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sm());const i=this._blurMaterial,a=i.uniforms,r=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=r.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(r,0,i)}}function Al(n,e,t){return new Uo(n,{minFilter:Vn,generateMipmaps:e,type:xn,colorSpace:ds,depthBuffer:t})}function ga(n,e,t){return new ui({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:zt,blending:Ri,depthTest:!1,depthWrite:!1})}function vm(){return ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function _m(){return ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:td}},`

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
	`)}function Sm(){return ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function Tl(){return ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Nl(){return ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ym(n){let e=new WeakMap,t=new WeakMap,i=null;function a(u,g=!1){return u==null?null:g?o(u):r(u)}function r(u){if(u&&u.isTexture){const g=u.mapping;if(g===Ds||g===Us)if(e.has(u)){const x=e.get(u).texture;return l(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const y=new Uo(x.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",d),l(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const g=u.mapping,x=g===Ds||g===Us,y=g===Li||g===ra;if(x||y){let p=t.get(u);const f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new ps(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return x&&M&&M.height>0||y&&M&&c(M)?(i===null&&(i=new ps(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function l(u,g){return g===Ds?u.mapping=Li:g===Us&&(u.mapping=ra),u}function c(u){let g=0;const x=6;for(let y=0;y<x;y++)u[y]!==void 0&&g++;return g===x}function d(u){const g=u.target;g.removeEventListener("dispose",d);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function h(u){const g=u.target;g.removeEventListener("dispose",h);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function m(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:m}}function bm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&is("WebGLRenderer: "+i+" extension not supported."),a}}}function Mm(n,e,t,i){const a={},r=new WeakMap,o=new FinalizationRegistry(x=>delete a[x]);function l(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(const p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",l),delete a[x.id],o.unregister(x);const y=r.get(x);y&&(e.remove(y),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(x,y){return a[y.id]!==void 0||(y.addEventListener("dispose",l),a[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(x){const y=x.attributes;for(const p in y)e.update(y[p],n.ARRAY_BUFFER)}function m(x){const y=x.index,p=x.attributes.position;let f=0;if(p===void 0)return;const M=y!==null?y.array.length:p.array.length/3-1,b=p.count>=65535?zc:Gc,E=new b(Math.ceil(M/3)*6,1),T=E.array;if(y!==null){const v=y.array;f=y.version;for(let N=0,O=0;N<M;N+=3){const R=v[N+0],D=v[N+1],F=v[N+2];T[O++]=R,T[O++]=D,T[O++]=D,T[O++]=F,T[O++]=F,T[O++]=R}}else{f=p.version;for(let v=0,N=0;v<M;v+=3){const O=v+0,R=v+1,D=v+2;T[N++]=O,T[N++]=R,T[N++]=R,T[N++]=D,T[N++]=D,T[N++]=O}}E.version=f;const _=r.get(x);_&&e.remove(_),r.set(x,E)}function u(x){const y=r.get(x);if(y){const p=x.index;p!==null&&y.version<p.version&&m(x)}else m(x);return r.get(x)}function g(){for(const x in a){const y=a[x].deref();y!==void 0&&c(y)}}return{get:d,update:h,getWireframeAttribute:u,dispose:g}}function Em(n,e,t){let i;function a(m){i=m}let r,o;function l(m){r=m.type,o=m.bytesPerElement}function c(m,u){n.drawElements(i,u,r,m*o),t.update(u,i,1)}function d(m,u,g){g!==0&&(n.drawElementsInstanced(i,u,r,m*o,g),t.update(u,i,g))}function h(m,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,m,0,g);let y=0;for(let p=0;p<g;p++)y+=u[p];t.update(y,i,1)}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function Am(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Tm(n,e,t){const i=new WeakMap,a=new St;function r(o,l,c){const d=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0;let u=i.get(l);if(u===void 0||u.count!==m){let O=function(){v.dispose(),i.delete(l),l.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),y===!0&&(b=3);let E=l.attributes.position.count*b,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const _=new Float32Array(E*T*4*m),v=new Fc(_,E,T,m);v.type=hn,v.needsUpdate=!0;const N=b*4;for(let R=0;R<m;R++){const D=p[R],F=f[R],q=M[R],I=E*T*4*R;for(let V=0;V<D.count;V++){const Q=V*N;g===!0&&(a.fromBufferAttribute(D,V),_[I+Q+0]=a.x,_[I+Q+1]=a.y,_[I+Q+2]=a.z,_[I+Q+3]=0),x===!0&&(a.fromBufferAttribute(F,V),_[I+Q+4]=a.x,_[I+Q+5]=a.y,_[I+Q+6]=a.z,_[I+Q+7]=0),y===!0&&(a.fromBufferAttribute(q,V),_[I+Q+8]=a.x,_[I+Q+9]=a.y,_[I+Q+10]=a.z,_[I+Q+11]=q.itemSize===4?a.w:1)}}u={count:m,texture:v,size:new ct(E,T)},i.set(l,u),l.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let y=0;y<d.length;y++)g+=d[y];const x=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",d)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Nm(n,e,t,i,a){let r=new WeakMap;function o(d){const h=a.render.frame,m=d.geometry,u=e.get(d,m);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function l(){r=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const wm={[vc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function Cm(n,e,t,i,a,r){const o=new mn(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,d=null;const h=new vn;h.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const m=new gh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Rn(h,m),g=new Kc(-1,1,1,-1,0,1);let x=null,y=null,p=!1,f,M=null,b=[],E=!1;this.setSize=function(T,_){o.setSize(T,_),l!==null&&l.setSize(T,_),c!==null&&c.setSize(T,_);for(let v=0;v<b.length;v++){const N=b[v];N.setSize&&N.setSize(T,_)}},this.setEffects=function(T){b=T,E=b.length>0&&b[0].isRenderPass===!0;const _=o.width,v=o.height;b.length>0&&l===null&&(l=new mn(_,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}),c=new mn(_,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}));const N=a===!0&&b.some(O=>O.needsDepthTexture===!0);N!==(o.depthTexture!==null)&&(N===!0&&d===null&&(d=new Ui(_,v),r===!0&&(d.format=Hn,d.type=Di)),o.dispose(),o.depthTexture=N?d:null,o.resolveDepthBuffer=N,o.storeMultisampledDepthBuffer=N);for(let O=0;O<b.length;O++){const R=b[O];R.setSize&&R.setSize(_,v),N&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(d)}},this.begin=function(T,_){if(p||T.toneMapping===Nn&&b.length===0)return!1;if(M=_,_!==null){const v=_.width,N=_.height;(o.width!==v||o.height!==N)&&this.setSize(v,N)}return E===!1&&T.setRenderTarget(o),f=T.toneMapping,T.toneMapping=Nn,!0},this.hasRenderPass=function(){return E},this.end=function(T,_){T.toneMapping=f,p=!0;let v=o,N=l;for(let O=0;O<b.length;O++){const R=b[O];R.enabled!==!1&&(R.render(T,N,v,_),R.needsSwap!==!1&&(v=N,N=N===l?c:l))}if(x!==T.outputColorSpace||y!==T.toneMapping){x=T.outputColorSpace,y=T.toneMapping,m.defines={},rt.getTransfer(x)===mt&&(m.defines.SRGB_TRANSFER="");const O=wm[y];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=v.texture,T.setRenderTarget(M),T.render(u,g),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}const nd=new kt,id=new Ui(1,1),ad=new $c(1),sd=new Fc,rd=new $u,od=new Wc,wl=[],Cl=[],Rl=new Float32Array(16),Pl=new Float32Array(9),Il=new Float32Array(4);function Gi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=wl[a];if(r===void 0&&(r=new Float32Array(a),wl[a]=r),e!==0){i.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(r,l)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cs(n,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function Dm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,i))return;Il.set(i),n.uniformMatrix2fv(this.addr,!1,Il),Tt(t,i)}}function Um(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,i))return;Pl.set(i),n.uniformMatrix3fv(this.addr,!1,Pl),Tt(t,i)}}function Om(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,i))return;Rl.set(i),n.uniformMatrix4fv(this.addr,!1,Rl),Tt(t,i)}}function Fm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function Vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function Rs(n){return n.version===0&&(n.compareFunction=Uc,n.needsUpdate=!0),n}function Wm(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?r=Rs(id):r=nd,t.setTexture2D(e||r,a)}function $m(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||rd,a)}function Xm(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Rs(ad):r=od,t.setTextureCube(e||r,a)}function qm(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||sd,a)}function Ym(n){switch(n){case 5126:return Rm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Um;case 35676:return Om;case 5124:case 35670:return Fm;case 35667:case 35671:return km;case 35668:case 35672:return Bm;case 35669:case 35673:return Gm;case 5125:return zm;case 36294:return jm;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Zm(n,e){n.uniform1fv(this.addr,e)}function Km(n,e){const t=Gi(e,this.size,2);n.uniform2fv(this.addr,t)}function Jm(n,e){const t=Gi(e,this.size,3);n.uniform3fv(this.addr,t)}function Qm(n,e){const t=Gi(e,this.size,4);n.uniform4fv(this.addr,t)}function eg(n,e){const t=Gi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tg(n,e){const t=Gi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ng(n,e){const t=Gi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ig(n,e){n.uniform1iv(this.addr,e)}function ag(n,e){n.uniform2iv(this.addr,e)}function sg(n,e){n.uniform3iv(this.addr,e)}function rg(n,e){n.uniform4iv(this.addr,e)}function og(n,e){n.uniform1uiv(this.addr,e)}function lg(n,e){n.uniform2uiv(this.addr,e)}function cg(n,e){n.uniform3uiv(this.addr,e)}function dg(n,e){n.uniform4uiv(this.addr,e)}function ug(n,e,t){const i=this.cache,a=e.length,r=Cs(t,a);At(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Rs(id):o=nd;for(let l=0;l!==a;++l)t.setTexture2D(e[l]||o,r[l])}function hg(n,e,t){const i=this.cache,a=e.length,r=Cs(t,a);At(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||rd,r[o])}function fg(n,e,t){const i=this.cache,a=e.length,r=Cs(t,a);At(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Rs(ad):o=od;for(let l=0;l!==a;++l)t.setTextureCube(e[l]||o,r[l])}function pg(n,e,t){const i=this.cache,a=e.length,r=Cs(t,a);At(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||sd,r[o])}function mg(n){switch(n){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return ag;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}class gg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ym(t.type)}}class xg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mg(t.type)}}class vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const l=a[r];l.setValue(e,t[l.id],i)}}}const or=/(\w+)(\])?(\[|\.)?/g;function Ll(n,e){n.seq.push(e),n.map[e.id]=e}function _g(n,e,t){const i=n.name,a=i.length;for(or.lastIndex=0;;){const r=or.exec(i),o=or.lastIndex;let l=r[1];const c=r[2]==="]",d=r[3];if(c&&(l=l|0),d===void 0||d==="["&&o+2===a){Ll(t,d===void 0?new gg(l,n,e):new xg(l,n,e));break}else{let m=t.map[l];m===void 0&&(m=new vg(l),Ll(t,m)),t=m}}}class as{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);_g(l,c,this)}const a=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(o):r.push(o);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,o=t.length;r!==o;++r){const l=t[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const o=e[a];o.id in t&&i.push(o)}return i}}function Dl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Sg=37297;let yg=0;function bg(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=a;o<r;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const Ul=new Ke;function Mg(n){rt._getMatrix(Ul,rt.workingColorSpace,n);const e=`mat3( ${Ul.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case us:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ol(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bg(n.getShaderSource(e),l)}else return r}function Eg(n,e){const t=Mg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ag={[vc]:"Linear",[_c]:"Reinhard",[Sc]:"Cineon",[yc]:"ACESFilmic",[Mc]:"AgX",[Ec]:"Neutral",[bc]:"Custom"};function Tg(n,e){const t=Ag[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new ne;function Ng(){rt.getLuminanceCoefficients(Za);const n=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Cg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),o=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function Qi(n){return n!==""}function Fl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function kl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(n){return n.replace(Pg,Ig)}function Ig(n,e){const t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lo(t)}const Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(n){return n.replace(Lg,Dg)}function Dg(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Gl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ug={[Ja]:"SHADOWMAP_TYPE_PCF",[Ji]:"SHADOWMAP_TYPE_VSM"};function Og(n){return Ug[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fg={[ra]:"ENVMAP_MODE_REFRACTION"};function kg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bg={[xc]:"ENVMAP_BLENDING_MULTIPLY",[yu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Gg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[n.combine]||"ENVMAP_BLENDING_NONE"}function zg(n,e,t,i){const a=n.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Og(t),d=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=kg(t),m=Gg(t),u=wg(t),g=Cg(r),x=a.createProgram();let y,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),p.length>0&&(p+=`
`)):(y=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),p=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?et.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Eg("linearToOutputTexel",t.outputColorSpace),Ng(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=lo(o),o=Fl(o,t),o=kl(o,t),l=lo(l),l=Fl(l,t),l=kl(l,t),o=Bl(o),l=Bl(l),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=f+y+o,b=f+p+l,E=Dl(a,a.VERTEX_SHADER,M),T=Dl(a,a.FRAGMENT_SHADER,b);a.attachShader(x,E),a.attachShader(x,T),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function _(R){if(n.debug.checkShaderErrors){const D=a.getProgramInfoLog(x)||"",F=a.getShaderInfoLog(E)||"",q=a.getShaderInfoLog(T)||"",I=D.trim(),V=F.trim(),Q=q.trim();let j=!0,oe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,x,E,T);else{const W=Ol(a,E,"vertex"),te=Ol(a,T,"fragment");pt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+te)}else I!==""?Ze("WebGLProgram: Program Info Log:",I):(V===""||Q==="")&&(oe=!1);oe&&(R.diagnostics={runnable:j,programLog:I,vertexShader:{log:V,prefix:y},fragmentShader:{log:Q,prefix:p}})}a.deleteShader(E),a.deleteShader(T),v=new as(a,x),N=Rg(a,x)}let v;this.getUniforms=function(){return v===void 0&&_(this),v};let N;this.getAttributes=function(){return N===void 0&&_(this),N};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(x,Sg)),O},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}let jg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hg(e),t.set(e,i)),i}}class Hg{constructor(e){this.id=jg++,this.code=e,this.usedTimes=0}}function Wg(n){return n===di||n===ls||n===cs}function $g(n,e,t,i,a,r){const o=new kc,l=new Vg,c=new Set,d=[],h=new Map,m=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,N,O,R,D,F){const q=R.fog,I=D.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||V,Q),oe=u[v.type];let W=i.precision;v.precision!==null&&(W=i.getMaxPrecision(v.precision),W!==v.precision&&Ze("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=te!==void 0?te.length:0;let Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Ue,X,me,ge;if(oe){const ce=un[oe];Ue=ce.vertexShader,X=ce.fragmentShader}else{Ue=v.vertexShader,X=v.fragmentShader;const ce=l.getVertexShaderStage(v),Ve=l.getFragmentShaderStage(v);l.update(v,ce,Ve),me=ce.id,ge=Ve.id}const fe=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),Re=D.isInstancedMesh===!0,Oe=D.isBatchedMesh===!0,Ee=!!v.map,Ce=!!v.matcap,ve=!!j,Ae=ve&&j.isPMREMTexture===!0,Ge=!!v.aoMap,$e=!!v.lightMap,be=!!v.bumpMap&&v.wireframe===!1,je=!!v.normalMap,tt=!!v.displacementMap,Te=!!v.emissiveMap,it=!!v.metalnessMap,st=!!v.roughnessMap,Je=v.anisotropy>0,k=v.clearcoat>0,dt=v.diffuseRoughness>0,qe=v.dispersion>0,Ye=v.retroreflectivity>0,ye=v.iridescence>0,ht=v.sheen>0,Fe=v.transmission>0,He=Je&&!!v.anisotropyMap,w=k&&!!v.clearcoatMap,A=k&&!!v.clearcoatNormalMap,U=k&&!!v.clearcoatRoughnessMap,re=dt&&!!v.diffuseRoughnessMap,K=ye&&!!v.iridescenceMap,ue=ye&&!!v.iridescenceThicknessMap,pe=ht&&!!v.sheenColorMap,ee=ht&&!!v.sheenRoughnessMap,G=!!v.specularMap,Y=!!v.specularColorMap,P=!!v.specularIntensityMap,Z=Fe&&!!v.transmissionMap,H=Fe&&!!v.thicknessMap,de=!!v.gradientMap,se=!!v.alphaMap,xe=v.alphaTest>0,we=!!v.alphaHash,ze=!!v.extensions;let le=Nn;v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(le=n.toneMapping);const Le=Ae?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,We={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:X,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:Oe,batchingColor:Oe&&D._colorsTexture!==null,instancing:Re,instancingColor:Re&&D.instanceColor!==null,instancingMorph:Re&&D.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Ce,envMap:ve,envMapMode:ve&&j.mapping,envMapPMREM:Ae,envMapMaxLod:Ae?Le.length-1:null,envMapSize:Ae?Le[0].width:null,aoMap:Ge,lightMap:$e,bumpMap:be,normalMap:je,displacementMap:tt,emissiveMap:Te,normalMapObjectSpace:je&&v.normalMapType===Au,normalMapTangentSpace:je&&v.normalMapType===ao,packedNormalMap:je&&v.normalMapType===ao&&Wg(v.normalMap.format),metalnessMap:it,roughnessMap:st,anisotropy:Je,anisotropyMap:He,clearcoat:k,clearcoatMap:w,clearcoatNormalMap:A,clearcoatRoughnessMap:U,diffuseRoughness:dt,diffuseRoughnessMap:re,dispersion:qe,retroreflection:Ye,iridescence:ye,iridescenceMap:K,iridescenceThicknessMap:ue,sheen:ht,sheenColorMap:pe,sheenRoughnessMap:ee,specularMap:G,specularColorMap:Y,specularIntensityMap:P,transmission:Fe,transmissionMap:Z,thicknessMap:H,gradientMap:de,opaque:v.transparent===!1&&v.blending===na&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:xe,alphaHash:we,combine:v.combine,mapUv:Ee&&g(v.map.channel),aoMapUv:Ge&&g(v.aoMap.channel),lightMapUv:$e&&g(v.lightMap.channel),bumpMapUv:be&&g(v.bumpMap.channel),normalMapUv:je&&g(v.normalMap.channel),displacementMapUv:tt&&g(v.displacementMap.channel),emissiveMapUv:Te&&g(v.emissiveMap.channel),metalnessMapUv:it&&g(v.metalnessMap.channel),roughnessMapUv:st&&g(v.roughnessMap.channel),anisotropyMapUv:He&&g(v.anisotropyMap.channel),clearcoatMapUv:w&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&g(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&g(v.diffuseRoughnessMap.channel),iridescenceMapUv:K&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&g(v.sheenRoughnessMap.channel),specularMapUv:G&&g(v.specularMap.channel),specularColorMapUv:Y&&g(v.specularColorMap.channel),specularIntensityMapUv:P&&g(v.specularIntensityMap.channel),transmissionMapUv:Z&&g(v.transmissionMap.channel),thicknessMapUv:H&&g(v.thicknessMap.channel),alphaMapUv:se&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(je||Je),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ee||se),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&je===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:J,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:F.filter(ce=>ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:Te&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ze&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&v.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function y(v){const N=[];if(v.shaderID?N.push(v.shaderID):(N.push(v.customVertexShaderID),N.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)N.push(O),N.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(p(N,v),f(N,v),N.push(n.outputColorSpace)),N.push(v.customProgramCacheKey),N.join()}function p(v,N){v.push(N.precision),v.push(N.outputColorSpace),v.push(N.envMapMode),v.push(N.envMapPMREM),v.push(N.envMapMaxLod),v.push(N.envMapSize),v.push(N.mapUv),v.push(N.alphaMapUv),v.push(N.lightMapUv),v.push(N.aoMapUv),v.push(N.bumpMapUv),v.push(N.normalMapUv),v.push(N.displacementMapUv),v.push(N.emissiveMapUv),v.push(N.metalnessMapUv),v.push(N.roughnessMapUv),v.push(N.anisotropyMapUv),v.push(N.clearcoatMapUv),v.push(N.clearcoatNormalMapUv),v.push(N.clearcoatRoughnessMapUv),v.push(N.diffuseRoughnessMapUv),v.push(N.iridescenceMapUv),v.push(N.iridescenceThicknessMapUv),v.push(N.sheenColorMapUv),v.push(N.sheenRoughnessMapUv),v.push(N.specularMapUv),v.push(N.specularColorMapUv),v.push(N.specularIntensityMapUv),v.push(N.transmissionMapUv),v.push(N.thicknessMapUv),v.push(N.combine),v.push(N.fogExp2),v.push(N.sizeAttenuation),v.push(N.morphTargetsCount),v.push(N.numSunLights),v.push(N.numDirLights),v.push(N.numPointLights),v.push(N.numSpotLights),v.push(N.numSpotLightMaps),v.push(N.numHemiLights),v.push(N.numRectAreaLights),v.push(N.numSunLightShadows),v.push(N.numDirLightShadows),v.push(N.numPointLightShadows),v.push(N.numSpotLightShadows),v.push(N.numSpotLightShadowsWithMaps),v.push(N.numLightProbes),v.push(N.numLightProbeGrids),v.push(N.shadowMapType),v.push(N.toneMapping),v.push(N.numClippingPlanes),v.push(N.numClipIntersection),v.push(N.depthPacking)}function f(v,N){o.disableAll(),N.instancing&&o.enable(0),N.instancingColor&&o.enable(1),N.instancingMorph&&o.enable(2),N.matcap&&o.enable(3),N.envMap&&o.enable(4),N.normalMapObjectSpace&&o.enable(5),N.normalMapTangentSpace&&o.enable(6),N.clearcoat&&o.enable(7),N.iridescence&&o.enable(8),N.alphaTest&&o.enable(9),N.vertexColors&&o.enable(10),N.vertexAlphas&&o.enable(11),N.vertexUv1s&&o.enable(12),N.vertexUv2s&&o.enable(13),N.vertexUv3s&&o.enable(14),N.vertexTangents&&o.enable(15),N.anisotropy&&o.enable(16),N.alphaHash&&o.enable(17),N.batching&&o.enable(18),N.dispersion&&o.enable(19),N.retroreflection&&o.enable(24),N.diffuseRoughness&&o.enable(25),N.batchingColor&&o.enable(20),N.gradientMap&&o.enable(21),N.packedNormalMap&&o.enable(22),N.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.reversedDepthBuffer&&o.enable(4),N.skinning&&o.enable(5),N.morphTargets&&o.enable(6),N.morphNormals&&o.enable(7),N.morphColors&&o.enable(8),N.premultipliedAlpha&&o.enable(9),N.shadowMapEnabled&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.decodeVideoTextureEmissive&&o.enable(20),N.alphaToCoverage&&o.enable(21),N.numLightProbeGrids>0&&o.enable(22),N.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const N=u[v.type];let O;if(N){const R=un[N];O=fh.clone(R.uniforms)}else O=v.uniforms;return O}function b(v,N){let O=h.get(N);return O!==void 0?++O.usedTimes:(O=new zg(n,N,v,a),d.push(O),h.set(N,O)),O}function E(v){if(--v.usedTimes===0){const N=d.indexOf(v);d[N]=d[d.length-1],d.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){l.remove(v)}function _(){l.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:d,dispose:_}}function Xg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function a(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function qg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jl(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function o(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function l(u,g,x,y,p,f){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:g,material:x,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:f},n[e]=M):(M.id=u.id,M.object=u,M.geometry=g,M.material=x,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=p,M.group=f),e++,M}function c(u,g,x,y,p,f,M){M.reversedDepth===!0&&(p=-p);const b=l(u,g,x,y,p,f);x.transmission>0?i.push(b):x.transparent===!0?a.push(b):t.push(b)}function d(u,g,x,y,p,f){const M=l(u,g,x,y,p,f);x.transmission>0?i.unshift(M):x.transparent===!0?a.unshift(M):t.unshift(M)}function h(u,g){t.length>1&&t.sort(u||qg),i.length>1&&i.sort(g||zl),a.length>1&&a.sort(g||zl)}function m(){for(let u=e,g=n.length;u<g;u++){const x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:c,unshift:d,finish:m,sort:h}}function Yg(){let n=new WeakMap;function e(i,a){const r=n.get(i);let o;return r===void 0?(o=new jl,n.set(i,[o])):a>=r.length?(o=new jl,r.push(o)):o=r[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new lt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function Kg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Jg=0;function Qg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e0(n){const e=new Zg,t=Kg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ne);const a=new ne,r=new vt,o=new vt;function l(d){let h=0,m=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,x=0,y=0,p=0,f=0,M=0,b=0,E=0,T=0,_=0,v=0,N=0,O=0,R=0;d.sort(Qg);for(let F=0,q=d.length;F<q;F++){const I=d[F],V=I.color,Q=I.intensity,j=I.distance;let oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===di?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*Q,m+=V.g*Q,u+=V.b*Q;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],Q);R++}else if(I.isSunLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[x]=ie,i.sunShadowMap[x]=oe;const Se=te.getViewportCount();for(let Ue=0;Ue<Se;Ue++)i.sunShadowMatrix[y+Ue]=te.getMatrix(Ue),i.sunShadowCascade[y+Ue]=te._cascadeData[Ue];y+=Se,x++}i.sun[g]=W,g++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=W,p++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(Q),W.distance=j,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[M]=W;const te=I.shadow;if(I.map&&(i.spotLightMap[N]=I.map,N++,te.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[M]=te.matrix,I.castShadow){const ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[M]=ie,i.spotShadowMap[M]=oe,v++}M++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(V).multiplyScalar(Q),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=W,b++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const te=I.shadow,ie=t.get(I);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=oe,i.pointShadowMatrix[f]=I.shadow.matrix,_++}i.point[f]=W,f++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(Q),W.groundColor.copy(I.groundColor).multiplyScalar(Q),i.hemi[E]=W,E++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=u;const D=i.hash;(D.sunLength!==g||D.directionalLength!==p||D.pointLength!==f||D.spotLength!==M||D.rectAreaLength!==b||D.hemiLength!==E||D.numSunShadows!==x||D.numDirectionalShadows!==T||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==N||D.numLightProbes!==R)&&(i.sun.length=g,i.directional.length=p,i.spot.length=M,i.rectArea.length=b,i.point.length=f,i.hemi.length=E,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+N-O,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=R,D.sunLength=g,D.directionalLength=p,D.pointLength=f,D.spotLength=M,D.rectAreaLength=b,D.hemiLength=E,D.numSunShadows=x,D.numDirectionalShadows=T,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=N,D.numLightProbes=R,i.version=Jg++)}function c(d,h){let m=0,u=0,g=0,x=0,y=0,p=0;const f=h.matrixWorldInverse;for(let M=0,b=d.length;M<b;M++){const E=d[M];if(E.isSunLight){const T=i.sun[m];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(f),m++}else if(E.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),u++}else if(E.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),x++}else if(E.isRectAreaLight){const T=i.rectArea[y];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),o.identity(),r.copy(E.matrixWorld),r.premultiply(f),o.extractRotation(r),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const T=i.point[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),g++}else if(E.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function Vl(n){const e=new e0(n),t=[],i=[],a=[];function r(m){h.camera=m,t.length=0,i.length=0,a.length=0}function o(m){m.isLightProbeGrid?a.push(m):t.push(m)}function l(m){i.push(m)}function c(){e.setup(t),a.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:l}}function t0(n){let e=new WeakMap;function t(a,r=0){const o=e.get(a);let l;return o===void 0?(l=new Vl(n),e.set(a,[l])):r>=o.length?(l=new Vl(n),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const n0=`void main() {
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
}`,a0=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],s0=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Hl=new vt,Zi=new ne,lr=new ne;function r0(n,e,t){let i=new ca;const a=new ct,r=new ct,o=new St,l=new vh,c=new _h,d={},h=t.maxTextureSize,m={[ci]:zt,[zt]:ci,[An]:An},u=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const x=new vn;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Rn(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let f=this.type;this.render=function(_,v,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||_.length===0)return;this.type===nu&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ja);const O=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ri),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=f!==this.type;q&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=_.length;I<V;I++){const Q=_[I],j=Q.shadow;if(j===void 0){Ze("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const oe=j.getFrameExtents();a.multiply(oe),r.copy(j.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/oe.x),a.x=r.x*oe.x,j.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/oe.y),a.y=r.y*oe.y,j.mapSize.y=r.y));const W=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=W,j.map===null||q===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ji){if(Q.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new mn(a.x,a.y,{format:di,type:xn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new Ui(a.x,a.y,hn),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=Kn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Pt,j.map.depthTexture.magFilter=Pt}else Q.isPointLight?(j.map=new Uo(a.x),j.map.depthTexture=new $c(a.x,gn)):(j.map=new mn(a.x,a.y),j.map.depthTexture=new Ui(a.x,a.y,gn)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=Kn,this.type===Ja?(j.map.depthTexture.compareFunction=W?Dc:Lc,j.map.depthTexture.minFilter=Vt,j.map.depthTexture.magFilter=Vt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Pt,j.map.depthTexture.magFilter=Pt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==a.x||j.map.height!==a.y)&&j.map.setSize(a.x,a.y);const te=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Q.isPointLight!==!0&&j.updateMatrices(Q,N);const ie=j.camera.layers.mask&4294967294?j.camera.layers:N.layers;for(let Se=0;Se<te;Se++){const Ue=j.getCamera(Se);if(Q.isPointLight){const X=j.camera,me=j.matrix,ge=Q.distance||X.far;ge!==X.far&&(X.far=ge,X.updateProjectionMatrix()),Zi.setFromMatrixPosition(Q.matrixWorld),X.position.copy(Zi),lr.copy(X.position),lr.add(a0[Se]),X.up.copy(s0[Se]),X.lookAt(lr),X.updateMatrixWorld(),me.makeTranslation(-Zi.x,-Zi.y,-Zi.z),Hl.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Hl,X.coordinateSystem,X.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(j.map),n.clear());const X=j.getViewport(Se);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),F.viewport(o)}i=j.getFrustum(Se),E(v,N,Ue,Q,ie,this.type)}j.isPointLightShadow!==!0&&this.type===Ji&&M(j,N),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(O,R,D)};function M(_,v){const N=e.update(y);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,g.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),_.mapPass===null?_.mapPass=new mn(a.x,a.y,{format:di,type:xn}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),u.uniforms.shadow_pass.value=_.map.depthTexture,u.uniforms.resolution.value.set(_.map.width,_.map.height),u.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(v,null,N,u,y,null),g.uniforms.shadow_pass.value=_.mapPass.texture,g.uniforms.resolution.value.set(_.map.width,_.map.height),g.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(v,null,N,g,y,null)}function b(_,v,N,O){let R=null;const D=N.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0)R=D;else if(R=N.isPointLight===!0?c:l,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const F=R.uuid,q=v.uuid;let I=d[F];I===void 0&&(I={},d[F]=I);let V=I[q];V===void 0&&(V=R.clone(),I[q]=V,v.addEventListener("dispose",T)),R=V}if(R.visible=v.visible,R.wireframe=v.wireframe,O===Ji?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:m[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,N.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=n.properties.get(R);F.light=N}return R}function E(_,v,N,O,R,D){if(_.visible===!1)return;if(_.layers.test(R)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&D===Ji)&&(!_.frustumCulled||_.intersectsFrustum(i))){_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld);const I=e.update(_),V=_.material;if(Array.isArray(V)){const Q=I.groups;for(let j=0,oe=Q.length;j<oe;j++){const W=Q[j],te=V[W.materialIndex];if(te&&te.visible){const ie=b(_,te,O,D);_.onBeforeShadow(n,_,v,N,I,ie,W),n.renderBufferDirect(N,null,I,ie,_,W),_.onAfterShadow(n,_,v,N,I,ie,W)}}}else if(V.visible){const Q=b(_,V,O,D);_.onBeforeShadow(n,_,v,N,I,Q,null),n.renderBufferDirect(N,null,I,Q,_,null),_.onAfterShadow(n,_,v,N,I,Q,null)}}const q=_.children;for(let I=0,V=q.length;I<V;I++)E(q[I],v,N,O,R,D)}function T(_){_.target.removeEventListener("dispose",T);for(const N in d){const O=d[N],R=_.target.uuid;R in O&&(O[R].dispose(),delete O[R])}}}function o0(n,e){function t(){let P=!1;const Z=new St;let H=null;const de=new St(0,0,0,0);return{setMask:function(se){H!==se&&!P&&(n.colorMask(se,se,se,se),H=se)},setLocked:function(se){P=se},setClear:function(se,xe,we,ze,le){le===!0&&(se*=ze,xe*=ze,we*=ze),Z.set(se,xe,we,ze),de.equals(Z)===!1&&(n.clearColor(se,xe,we,ze),de.copy(Z))},reset:function(){P=!1,H=null,de.set(-1,0,0,0)}}}function i(){let P=!1,Z=!1,H=null,de=null,se=null;return{setReversed:function(xe){if(Z!==xe){const we=e.get("EXT_clip_control");xe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Z=xe;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return Z},setTest:function(xe){xe?J(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(xe){H!==xe&&!P&&(n.depthMask(xe),H=xe)},setFunc:function(xe){if(Z&&(xe=Ou[xe]),de!==xe){switch(xe){case _r:n.depthFunc(n.NEVER);break;case Sr:n.depthFunc(n.ALWAYS);break;case yr:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case br:n.depthFunc(n.EQUAL);break;case Mr:n.depthFunc(n.GEQUAL);break;case Er:n.depthFunc(n.GREATER);break;case Ar:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=xe}},setLocked:function(xe){P=xe},setClear:function(xe){se!==xe&&(se=xe,Z&&(xe=1-xe),n.clearDepth(xe))},reset:function(){P=!1,H=null,de=null,se=null,Z=!1}}}function a(){let P=!1,Z=null,H=null,de=null,se=null,xe=null,we=null,ze=null,le=null;return{setTest:function(Le){P||(Le?J(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Le){Z!==Le&&!P&&(n.stencilMask(Le),Z=Le)},setFunc:function(Le,We,ce){(H!==Le||de!==We||se!==ce)&&(n.stencilFunc(Le,We,ce),H=Le,de=We,se=ce)},setOp:function(Le,We,ce){(xe!==Le||we!==We||ze!==ce)&&(n.stencilOp(Le,We,ce),xe=Le,we=We,ze=ce)},setLocked:function(Le){P=Le},setClear:function(Le){le!==Le&&(n.clearStencil(Le),le=Le)},reset:function(){P=!1,Z=null,H=null,de=null,se=null,xe=null,we=null,ze=null,le=null}}}const r=new t,o=new i,l=new a;let c={};const d=new WeakMap;let h={},m={},u={},g=new WeakMap,x=[],y=null,p=!1,f=null,M=null,b=null,E=null,T=null,_=null,v=null,N=new lt(0,0,0),O=0,R=!1,D=null,F=null,q=null,I=null,V=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,oe=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=oe>=1):W.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=oe>=2);let te=null,ie={};const Se=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),X=new St().fromArray(Se),me=new St().fromArray(Ue);function ge(P,Z,H,de){const se=new Uint8Array(4),xe=n.createTexture();n.bindTexture(P,xe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<H;we++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(Z+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return xe}const fe={};fe[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),J(n.DEPTH_TEST),o.setFunc(sa),be(!1),je(Yo),J(n.CULL_FACE),Ge(Ri);function J(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Re(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Oe(P,Z){return u[P]!==Z?(n.bindFramebuffer(P,Z),u[P]=Z,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Z),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ee(P,Z){let H=x,de=!1;if(P){H=g.get(Z),H===void 0&&(H=[],g.set(Z,H));const se=P.textures;if(H.length!==se.length||H[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,we=se.length;xe<we;xe++)H[xe]=n.COLOR_ATTACHMENT0+xe;H.length=se.length,de=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,de=!0);de&&n.drawBuffers(H)}function Ce(P){return y!==P?(n.useProgram(P),y=P,!0):!1}const ve={[wi]:n.FUNC_ADD,[au]:n.FUNC_SUBTRACT,[su]:n.FUNC_REVERSE_SUBTRACT};ve[ru]=n.MIN,ve[ou]=n.MAX;const Ae={[lu]:n.ZERO,[cu]:n.ONE,[du]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[gu]:n.SRC_ALPHA_SATURATE,[pu]:n.DST_COLOR,[hu]:n.DST_ALPHA,[uu]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[mu]:n.ONE_MINUS_DST_COLOR,[fu]:n.ONE_MINUS_DST_ALPHA,[xu]:n.CONSTANT_COLOR,[vu]:n.ONE_MINUS_CONSTANT_COLOR,[_u]:n.CONSTANT_ALPHA,[Su]:n.ONE_MINUS_CONSTANT_ALPHA};function Ge(P,Z,H,de,se,xe,we,ze,le,Le){if(P===Ri){p===!0&&(Re(n.BLEND),p=!1);return}if(p===!1&&(J(n.BLEND),p=!0),P!==iu){if(P!==f||Le!==R){if((M!==wi||T!==wi)&&(n.blendEquation(n.FUNC_ADD),M=wi,T=wi),Le)switch(P){case na:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vr:n.blendFunc(n.ONE,n.ONE);break;case Zo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ko:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:pt("WebGLState: Invalid blending: ",P);break}else switch(P){case na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zo:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ko:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",P);break}b=null,E=null,_=null,v=null,N.set(0,0,0),O=0,f=P,R=Le}return}se=se||Z,xe=xe||H,we=we||de,(Z!==M||se!==T)&&(n.blendEquationSeparate(ve[Z],ve[se]),M=Z,T=se),(H!==b||de!==E||xe!==_||we!==v)&&(n.blendFuncSeparate(Ae[H],Ae[de],Ae[xe],Ae[we]),b=H,E=de,_=xe,v=we),(ze.equals(N)===!1||le!==O)&&(n.blendColor(ze.r,ze.g,ze.b,le),N.copy(ze),O=le),f=P,R=!1}function $e(P,Z){P.side===An?Re(n.CULL_FACE):J(n.CULL_FACE);let H=P.side===zt;Z&&(H=!H),be(H),P.blending===na&&P.transparent===!1?Ge(Ri):Ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const de=P.stencilWrite;l.setTest(de),de&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(P){D!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),D=P)}function je(P){P!==eu?(J(n.CULL_FACE),P!==F&&(P===Yo?n.cullFace(n.BACK):P===tu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),F=P}function tt(P){P!==q&&(j&&n.lineWidth(P),q=P)}function Te(P,Z,H){P?(J(n.POLYGON_OFFSET_FILL),(I!==Z||V!==H)&&(I=Z,V=H,o.getReversed()&&(Z=-Z,H=-H),n.polygonOffset(Z,H))):Re(n.POLYGON_OFFSET_FILL)}function it(P){P?J(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function st(P){P===void 0&&(P=n.TEXTURE0+Q-1),te!==P&&(n.activeTexture(P),te=P)}function Je(P,Z,H){H===void 0&&(te===null?H=n.TEXTURE0+Q-1:H=te);let de=ie[H];de===void 0&&(de={type:void 0,texture:void 0},ie[H]=de),(de.type!==P||de.texture!==Z)&&(te!==H&&(n.activeTexture(H),te=H),n.bindTexture(P,Z||fe[P]),de.type=P,de.texture=Z)}function k(){const P=ie[te];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function dt(){try{n.compressedTexImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function qe(){try{n.compressedTexImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function Ye(){try{n.texSubImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function ye(){try{n.texSubImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function ht(){try{n.compressedTexSubImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function He(){try{n.texStorage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function w(){try{n.texStorage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function A(){try{n.texImage2D(...arguments)}catch(P){pt("WebGLState:",P)}}function U(){try{n.texImage3D(...arguments)}catch(P){pt("WebGLState:",P)}}function re(P){return m[P]!==void 0?m[P]:n.getParameter(P)}function K(P,Z){m[P]!==Z&&(n.pixelStorei(P,Z),m[P]=Z)}function ue(P){X.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),X.copy(P))}function pe(P){me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),me.copy(P))}function ee(P,Z){let H=d.get(Z);H===void 0&&(H=new WeakMap,d.set(Z,H));let de=H.get(P);de===void 0&&(de=n.getUniformBlockIndex(Z,P.name),n.uniformBlockBinding(Z,de,de),H.set(P,de))}function G(P,Z,H){const se=d.get(Z).get(P);c[se]!==H&&(n.bindBufferBase(n.UNIFORM_BUFFER,se,H),c[se]=H)}function Y(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},m={},te=null,ie={},u={},c={},g=new WeakMap,x=[],y=null,p=!1,f=null,M=null,b=null,E=null,T=null,_=null,v=null,N=new lt(0,0,0),O=0,R=!1,D=null,F=null,q=null,I=null,V=null,X.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:J,disable:Re,bindFramebuffer:Oe,drawBuffers:Ee,useProgram:Ce,setBlending:Ge,setMaterial:$e,setFlipSided:be,setCullFace:je,setLineWidth:tt,setPolygonOffset:Te,setScissorTest:it,activeTexture:st,bindTexture:Je,unbindTexture:k,compressedTexImage2D:dt,compressedTexImage3D:qe,texImage2D:A,texImage3D:U,pixelStorei:K,getParameter:re,updateUBOMapping:ee,uniformBlockBinding:G,texStorage2D:He,texStorage3D:w,texSubImage2D:Ye,texSubImage3D:ye,compressedTexSubImage2D:ht,compressedTexSubImage3D:Fe,scissor:ue,viewport:pe,reset:Y}}function l0(n,e,t,i,a,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ct,h=new WeakMap,m=new Set;let u;const g=new WeakMap,x=new Set,y=new FinalizationRegistry(w=>x.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,A){return p?new OffscreenCanvas(w,A):hs("canvas")}function M(w,A,U){let re=1;const K=He(w);if((K.width>U||K.height>U)&&(re=U/Math.max(K.width,K.height)),re<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ue=Math.floor(re*K.width),pe=Math.floor(re*K.height);u===void 0&&(u=f(ue,pe));const ee=A?f(ue,pe):u;return ee.width=ue,ee.height=pe,ee.getContext("2d").drawImage(w,0,0,ue,pe),Ze("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ue+"x"+pe+")."),ee}else return"data"in w&&Ze("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function b(w){return w.generateMipmaps}function E(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(w,A,U,re,K,ue=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe;re&&(pe=e.get("EXT_texture_norm16"),pe||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=A;if(A===n.RED&&(U===n.FLOAT&&(ee=n.R32F),U===n.HALF_FLOAT&&(ee=n.R16F),U===n.UNSIGNED_BYTE&&(ee=n.R8),U===n.UNSIGNED_SHORT&&pe&&(ee=pe.R16_EXT),U===n.SHORT&&pe&&(ee=pe.R16_SNORM_EXT)),A===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.R8UI),U===n.UNSIGNED_SHORT&&(ee=n.R16UI),U===n.UNSIGNED_INT&&(ee=n.R32UI),U===n.BYTE&&(ee=n.R8I),U===n.SHORT&&(ee=n.R16I),U===n.INT&&(ee=n.R32I)),A===n.RG&&(U===n.FLOAT&&(ee=n.RG32F),U===n.HALF_FLOAT&&(ee=n.RG16F),U===n.UNSIGNED_BYTE&&(ee=n.RG8),U===n.UNSIGNED_SHORT&&pe&&(ee=pe.RG16_EXT),U===n.SHORT&&pe&&(ee=pe.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RG8UI),U===n.UNSIGNED_SHORT&&(ee=n.RG16UI),U===n.UNSIGNED_INT&&(ee=n.RG32UI),U===n.BYTE&&(ee=n.RG8I),U===n.SHORT&&(ee=n.RG16I),U===n.INT&&(ee=n.RG32I)),A===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),U===n.UNSIGNED_INT&&(ee=n.RGB32UI),U===n.BYTE&&(ee=n.RGB8I),U===n.SHORT&&(ee=n.RGB16I),U===n.INT&&(ee=n.RGB32I)),A===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),U===n.UNSIGNED_INT&&(ee=n.RGBA32UI),U===n.BYTE&&(ee=n.RGBA8I),U===n.SHORT&&(ee=n.RGBA16I),U===n.INT&&(ee=n.RGBA32I)),A===n.RGB&&(U===n.UNSIGNED_SHORT&&pe&&(ee=pe.RGB16_EXT),U===n.SHORT&&pe&&(ee=pe.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),A===n.RGBA){const G=ue?us:rt.getTransfer(K);U===n.FLOAT&&(ee=n.RGBA32F),U===n.HALF_FLOAT&&(ee=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ee=G===mt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&pe&&(ee=pe.RGBA16_EXT),U===n.SHORT&&pe&&(ee=pe.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(w,A){let U;return w?A===null||A===gn||A===Di?U=n.DEPTH24_STENCIL8:A===hn?U=n.DEPTH32F_STENCIL8:A===oa&&(U=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gn||A===Di?U=n.DEPTH_COMPONENT24:A===hn?U=n.DEPTH_COMPONENT32F:A===oa&&(U=n.DEPTH_COMPONENT16),U}function N(w,A){return b(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==Vt?Math.log2(Math.max(A.width,A.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?A.mipmaps.length:1}function O(w){const A=new WeakRef(w);i.get(w).__ref=A,x.add(A),y.register(w,A,A)}function R(w){const A=i.get(w).__ref;A!==void 0&&(x.delete(A),y.unregister(A))}function D(w){q(w.target)}function F(w){I(w.target)}function q(w){w.removeEventListener("dispose",D),R(w),Q(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&m.delete(w)}function I(w){w.removeEventListener("dispose",F),R(w),oe(w)}function V(){for(const w of x){const A=w.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):q(A))}x.clear(),m.clear()}function Q(w){const A=i.get(w);if(A.__webglInit===void 0)return;const U=w.source,re=g.get(U);if(re){const K=re[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&j(w),Object.keys(re).length===0&&g.delete(U)}i.remove(w)}function j(w){const A=i.get(w);n.deleteTexture(A.__webglTexture);const U=w.source,re=g.get(U);delete re[A.__cacheKey],o.memory.textures--}function oe(w){const A=i.get(w);A.__depthDisposeCallback&&A.__depthDisposeCallback();const U=w.depthTexture;if(U&&U.renderTarget===w&&q(U),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(A.__webglFramebuffer[K]))for(let ue=0;ue<A.__webglFramebuffer[K].length;ue++)n.deleteFramebuffer(A.__webglFramebuffer[K][ue]);else n.deleteFramebuffer(A.__webglFramebuffer[K]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[K])}else{if(Array.isArray(A.__webglFramebuffer))for(let K=0;K<A.__webglFramebuffer.length;K++)n.deleteFramebuffer(A.__webglFramebuffer[K]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let K=0;K<A.__webglColorRenderbuffer.length;K++)A.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[K]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=w.textures;for(let K=0,ue=re.length;K<ue;K++){const pe=i.get(re[K]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(re[K])}i.remove(w)}let W=0;function te(){W=0}function ie(){return W}function Se(w){W=w}function Ue(){const w=W;return w>=a.maxTextures&&Ze("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,w}function X(w){const A=[];return A.push(w.wrapS),A.push(w.wrapT),A.push(w.wrapR||0),A.push(w.magFilter),A.push(w.minFilter),A.push(w.anisotropy),A.push(w.internalFormat),A.push(w.format),A.push(w.type),A.push(w.generateMipmaps),A.push(w.mipmapsAutoUpdate),A.push(w.premultiplyAlpha),A.push(w.flipY),A.push(w.unpackAlignment),A.push(w.colorSpace),A.join()}function me(w,A){const U=i.get(w);if(w.isVideoTexture&&ht(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const re=w.image;if(re===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{$e(U,w,A);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+A)}function ge(w,A){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){$e(U,w,A);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+A)}function fe(w,A){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){$e(U,w,A);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+A)}function J(w,A){const U=i.get(w);if(w.version>0&&U.__version!==w.version){be(U,w,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+A)}const Re={[Tr]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[Nr]:n.MIRRORED_REPEAT},Oe={[Pt]:n.NEAREST,[Mu]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Os]:n.LINEAR_MIPMAP_NEAREST,[Vn]:n.LINEAR_MIPMAP_LINEAR},Ee={[Nu]:n.NEVER,[Uc]:n.ALWAYS,[wu]:n.LESS,[Lc]:n.LEQUAL,[Cu]:n.EQUAL,[Dc]:n.GEQUAL,[Ru]:n.GREATER,[Pu]:n.NOTEQUAL};function Ce(w,A){if(A.type===hn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Vt||A.magFilter===Os||A.magFilter===Ta||A.magFilter===Vn||A.minFilter===Vt||A.minFilter===Os||A.minFilter===Ta||A.minFilter===Vn)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Re[A.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Re[A.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Re[A.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Oe[A.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Oe[A.minFilter]),A.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pt||A.minFilter!==Ta&&A.minFilter!==Vn||A.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ve(w,A){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",D),O(A));const re=A.source;let K=g.get(re);K===void 0&&(K={},g.set(re,K));const ue=X(A);if(ue!==w.__cacheKey){K[ue]===void 0&&(K[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[ue].usedTimes++;const pe=K[w.__cacheKey];pe!==void 0&&(K[w.__cacheKey].usedTimes--,pe.usedTimes===0&&j(A)),w.__cacheKey=ue,w.__webglTexture=K[ue].texture}return U}function Ae(w,A,U){return Math.floor(Math.floor(w/U)/A)}function Ge(w,A,U,re){const ue=w.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,U,re,A.data);else{ue.sort((P,Z)=>P.start-Z.start);let pe=0;for(let P=1;P<ue.length;P++){const Z=ue[pe],H=ue[P],de=Z.start+Z.count,se=Ae(H.start,A.width,4),xe=Ae(Z.start,A.width,4);H.start<=de+1&&se===xe&&Ae(H.start+H.count-1,A.width,4)===se?Z.count=Math.max(Z.count,H.start+H.count-Z.start):(++pe,ue[pe]=H)}ue.length=pe+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),G=t.getParameter(n.UNPACK_SKIP_PIXELS),Y=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let P=0,Z=ue.length;P<Z;P++){const H=ue[P],de=Math.floor(H.start/4),se=Math.ceil(H.count/4),xe=de%A.width,we=Math.floor(de/A.width),ze=se,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,xe,we,ze,le,U,re,A.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,G),t.pixelStorei(n.UNPACK_SKIP_ROWS,Y)}}function $e(w,A,U){let re=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=n.TEXTURE_3D);const K=ve(w,A),ue=A.source;t.bindTexture(re,w.__webglTexture,n.TEXTURE0+U);const pe=i.get(ue);if(ue.version!==pe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const le=rt.getPrimaries(rt.workingColorSpace),Le=A.colorSpace===Bn?null:rt.getPrimaries(A.colorSpace),We=A.colorSpace===Bn||le===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let G=M(A.image,!1,a.maxTextureSize);G=Fe(A,G);const Y=r.convert(A.format,A.colorSpace),P=r.convert(A.type);let Z=_(A.internalFormat,Y,P,A.normalized,A.colorSpace,A.isVideoTexture);Ce(re,A);let H;const de=A.mipmaps,se=A.isVideoTexture!==!0,xe=pe.__version===void 0||K===!0,we=ue.dataReady,ze=N(A,G);if(A.isDepthTexture)Z=v(A.format===Hn,A.type),xe&&(se?t.texStorage2D(n.TEXTURE_2D,1,Z,G.width,G.height):t.texImage2D(n.TEXTURE_2D,0,Z,G.width,G.height,0,Y,P,null));else if(A.isDataTexture)if(de.length>0){se&&xe&&t.texStorage2D(n.TEXTURE_2D,ze,Z,de[0].width,de[0].height);for(let le=0,Le=de.length;le<Le;le++)H=de[le],se?we&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,H.width,H.height,Y,P,H.data):t.texImage2D(n.TEXTURE_2D,le,Z,H.width,H.height,0,Y,P,H.data);A.generateMipmaps=!1}else se?(xe&&t.texStorage2D(n.TEXTURE_2D,ze,Z,G.width,G.height),we&&Ge(A,G,Y,P)):t.texImage2D(n.TEXTURE_2D,0,Z,G.width,G.height,0,Y,P,G.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Z,de[0].width,de[0].height,G.depth);for(let le=0,Le=de.length;le<Le;le++)if(H=de[le],A.format!==fn)if(Y!==null)if(se){if(we)if(A.layerUpdates.size>0){const We=Ml(H.width,H.height,A.format,A.type);for(const ce of A.layerUpdates){const Ve=H.data.subarray(ce*We/H.data.BYTES_PER_ELEMENT,(ce+1)*We/H.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ce,H.width,H.height,1,Y,Ve)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,H.width,H.height,G.depth,Y,H.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Z,H.width,H.height,G.depth,0,H.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,H.width,H.height,G.depth,Y,P,H.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Z,H.width,H.height,G.depth,0,Y,P,H.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{se&&xe&&t.texStorage2D(n.TEXTURE_2D,ze,Z,de[0].width,de[0].height);for(let le=0,Le=de.length;le<Le;le++)H=de[le],A.format!==fn?Y!==null?se?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,H.width,H.height,Y,H.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Z,H.width,H.height,0,H.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?we&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,H.width,H.height,Y,P,H.data):t.texImage2D(n.TEXTURE_2D,le,Z,H.width,H.height,0,Y,P,H.data)}else if(A.isDataArrayTexture)if(se){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Z,G.width,G.height,G.depth),we)if(A.layerUpdates.size>0){const le=Ml(G.width,G.height,A.format,A.type);for(const Le of A.layerUpdates){const We=G.data.subarray(Le*le/G.data.BYTES_PER_ELEMENT,(Le+1)*le/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Le,G.width,G.height,1,Y,P,We)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Y,P,G.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Z,G.width,G.height,G.depth,0,Y,P,G.data);else if(A.isData3DTexture)se?(xe&&t.texStorage3D(n.TEXTURE_3D,ze,Z,G.width,G.height,G.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Y,P,G.data)):t.texImage3D(n.TEXTURE_3D,0,Z,G.width,G.height,G.depth,0,Y,P,G.data);else if(A.isFramebufferTexture){if(xe)if(se)t.texStorage2D(n.TEXTURE_2D,ze,Z,G.width,G.height);else{let le=G.width,Le=G.height;for(let We=0;We<ze;We++)t.texImage2D(n.TEXTURE_2D,We,Z,le,Le,0,Y,P,null),le>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),G.parentNode!==le){le.appendChild(G),m.add(A),le.onpaint=Le=>{const We=Le.changedElements;for(const ce of m)We.includes(ce.image)&&(ce.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,G);else{const We=n.RGBA,ce=n.RGBA,Ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,ce,Ve,G)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(se&&xe){const le=He(de[0]);t.texStorage2D(n.TEXTURE_2D,ze,Z,le.width,le.height)}for(let le=0,Le=de.length;le<Le;le++)H=de[le],se?we&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Y,P,H):t.texImage2D(n.TEXTURE_2D,le,Z,Y,P,H);A.generateMipmaps=!1}else if(se){if(xe){const le=He(G);t.texStorage2D(n.TEXTURE_2D,ze,Z,le.width,le.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y,P,G)}else t.texImage2D(n.TEXTURE_2D,0,Z,Y,P,G);b(A)&&A.mipmapsAutoUpdate===!0&&E(re),pe.__version=ue.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function be(w,A,U){if(A.image.length!==6)return;const re=ve(w,A),K=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+U);const ue=i.get(K);if(K.version!==ue.__version||re===!0){t.activeTexture(n.TEXTURE0+U);const pe=rt.getPrimaries(rt.workingColorSpace),ee=A.colorSpace===Bn?null:rt.getPrimaries(A.colorSpace),G=A.colorSpace===Bn||pe===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const Y=A.isCompressedTexture||A.image[0].isCompressedTexture,P=A.image[0]&&A.image[0].isDataTexture,Z=[];for(let ce=0;ce<6;ce++)!Y&&!P?Z[ce]=M(A.image[ce],!0,a.maxCubemapSize):Z[ce]=P?A.image[ce].image:A.image[ce],Z[ce]=Fe(A,Z[ce]);const H=Z[0],de=r.convert(A.format,A.colorSpace),se=r.convert(A.type);let xe=_(A.internalFormat,de,se,A.normalized,A.colorSpace);const we=A.isVideoTexture!==!0,ze=ue.__version===void 0||re===!0,le=K.dataReady;let Le=N(A,H);Ce(n.TEXTURE_CUBE_MAP,A);let We;if(A.isDepthTexture){if(xe=v(A.format===Hn,A.type),ze)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,xe,H.width,H.height);else for(let ce=0;ce<6;ce++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,xe,H.width,H.height,0,de,se,null)}else if(Y){we&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,xe,H.width,H.height);for(let ce=0;ce<6;ce++){We=Z[ce].mipmaps;for(let Ve=0;Ve<We.length;Ve++){const nt=We[Ve];A.format!==fn?de!==null?we?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,nt.width,nt.height,de,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,xe,nt.width,nt.height,0,nt.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,nt.width,nt.height,de,se,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,xe,nt.width,nt.height,0,de,se,nt.data)}}}else{if(We=A.mipmaps,we&&ze){We.length>0&&Le++;const ce=He(Z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,xe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(P){we?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Z[ce].width,Z[ce].height,de,se,Z[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,xe,Z[ce].width,Z[ce].height,0,de,se,Z[ce].data);for(let Ve=0;Ve<We.length;Ve++){const Mt=We[Ve].image[ce].image;we?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,Mt.width,Mt.height,de,se,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,xe,Mt.width,Mt.height,0,de,se,Mt.data)}}else{we?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,de,se,Z[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,xe,de,se,Z[ce]);for(let Ve=0;Ve<We.length;Ve++){const nt=We[Ve];we?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,de,se,nt.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,xe,de,se,nt.image[ce])}}}b(A)&&A.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),ue.__version=K.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function je(w,A,U,re,K,ue){const pe=r.convert(U.format,U.colorSpace),ee=r.convert(U.type),G=_(U.internalFormat,pe,ee,U.normalized,U.colorSpace),Y=i.get(A),P=i.get(U);if(P.__renderTarget=A,!Y.__hasExternalTextures){const Z=Math.max(1,A.width>>ue),H=Math.max(1,A.height>>ue);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ue,G,Z,H,A.depth,0,pe,ee,null):t.texImage2D(K,ue,G,Z,H,0,pe,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ye(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,K,P.__webglTexture,0,Ye(A)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,K,P.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(w,A,U){if(n.bindRenderbuffer(n.RENDERBUFFER,w),A.depthBuffer){const re=A.depthTexture,K=re&&re.isDepthTexture?re.type:null,ue=v(A.stencilBuffer,K),pe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(A),ue,A.width,A.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(A),ue,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ue,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,w)}else{const re=A.textures;for(let K=0;K<re.length;K++){const ue=re[K],pe=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),G=_(ue.internalFormat,pe,ee,ue.normalized,ue.colorSpace);ye(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(A),G,A.width,A.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(A),G,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,G,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(w,A,U){const re=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(A.depthTexture);K.__renderTarget=A;const ue=re?A.depthTexture.image[0]:A.depthTexture.image;(!K.__webglTexture||ue.width!==A.width||ue.height!==A.height)&&(ue.width=A.width,ue.height=A.height,A.depthTexture.needsUpdate=!0),re?J(A.depthTexture,0):me(A.depthTexture,0);const pe=K.__webglTexture,ee=Ye(A),G=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Y=A.depthTexture.format===Hn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Kn)ye(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,G,pe,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,Y,G,pe,0);else if(A.depthTexture.format===Hn)ye(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,G,pe,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,Y,G,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(w){const A=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==w.depthTexture){const re=w.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),re){const K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,re.removeEventListener("dispose",K)};re.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=re}if(w.depthTexture&&!A.__autoAllocateDepthBuffer)if(U)for(let re=0;re<6;re++)Te(A.__webglFramebuffer[re],w,re);else w.texture.mipmaps.length>0?Te(A.__webglFramebuffer[0],w,0):Te(A.__webglFramebuffer,w,0);else if(U){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]===void 0)A.__webglDepthbuffer[re]=n.createRenderbuffer(),tt(A.__webglDepthbuffer[re],w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ue)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),tt(A.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(w,A,U){const re=i.get(w);A!==void 0&&je(re.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&it(w)}function Je(w){const A=w.texture,U=i.get(w),re=i.get(A);w.addEventListener("dispose",F),O(w);const K=w.textures,ue=w.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=A.version,o.memory.textures++),ue){U.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(A.mipmaps.length>0){U.__webglFramebuffer[ee]=[];for(let G=0;G<A.mipmaps.length;G++)U.__webglFramebuffer[ee][G]=n.createFramebuffer()}else U.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(A.mipmaps.length>0){U.__webglFramebuffer=[];for(let ee=0;ee<A.mipmaps.length;ee++)U.__webglFramebuffer[ee]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ee=0,G=K.length;ee<G;ee++){const Y=i.get(K[ee]);Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ye(w)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const G=K[ee];U.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ee]);const Y=r.convert(G.format,G.colorSpace),P=r.convert(G.type),Z=_(G.internalFormat,Y,P,G.normalized,G.colorSpace,w.isXRRenderTarget===!0),H=Ye(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,H,Z,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,U.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,A);for(let ee=0;ee<6;ee++)if(A.mipmaps.length>0)for(let G=0;G<A.mipmaps.length;G++)je(U.__webglFramebuffer[ee][G],w,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,G);else je(U.__webglFramebuffer[ee],w,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);b(A)?E(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let ee=0,G=K.length;ee<G;ee++){const Y=K[ee],P=i.get(Y);let Z=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,P.__webglTexture),Ce(Z,Y),je(U.__webglFramebuffer,w,Y,n.COLOR_ATTACHMENT0+ee,Z,0),b(Y)&&E(Z)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,re.__webglTexture),Ce(ee,A),A.mipmaps.length>0)for(let G=0;G<A.mipmaps.length;G++)je(U.__webglFramebuffer[G],w,A,n.COLOR_ATTACHMENT0,ee,G);else je(U.__webglFramebuffer,w,A,n.COLOR_ATTACHMENT0,ee,0);b(A)?E(ee):A.mipmaps.length>0&&n.texParameteri(ee,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&it(w)}function k(w){const A=w.textures;for(let U=0,re=A.length;U<re;U++){const K=A[U];if(b(K)&&K.mipmapsAutoUpdate===!0){const ue=T(w),pe=i.get(K).__webglTexture;t.bindTexture(ue,pe),E(ue),t.unbindTexture()}}}const dt=[];function qe(w){if(w.samples>0){if(ye(w)===!1){const A=w.textures,U=w.width,re=w.height;let K=n.COLOR_BUFFER_BIT;const ue=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(w),ee=A.length>1;if(ee)for(let Y=0;Y<A.length;Y++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Y=0;Y<A.length;Y++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Y]);const P=i.get(A[Y]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,U,re,0,0,U,re,K,n.NEAREST),c===!0&&(dt.length=0,dt.push(n.COLOR_ATTACHMENT0+Y),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&dt.push(ue),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Y=0;Y<A.length;Y++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Y]);const P=i.get(A[Y]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const A=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ye(w){return Math.min(a.maxSamples,w.samples)}function ye(w){const A=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ht(w){const A=o.render.frame;h.get(w)!==A&&(h.set(w,A),w.update())}function Fe(w,A){const U=w.colorSpace,re=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==ds&&U!==Bn&&(rt.getTransfer(U)===mt?(re!==fn||K!==$t)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",U)),A}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=Ue,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=Se,this.setTexture2D=me,this.setTexture2DArray=ge,this.setTexture3D=fe,this.setTextureCube=J,this.rebindTextures=st,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ye,this.dispose=V}function c0(n,e){function t(i,a=Bn){let r;const o=rt.getTransfer(a);if(i===$t)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tc)return n.BYTE;if(i===Nc)return n.SHORT;if(i===oa)return n.UNSIGNED_SHORT;if(i===To)return n.INT;if(i===gn)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===Rc)return n.ALPHA;if(i===Pc)return n.RGB;if(i===fn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===Hn)return n.DEPTH_STENCIL;if(i===Ic)return n.RED;if(i===Co)return n.RED_INTEGER;if(i===di)return n.RG;if(i===Ro)return n.RG_INTEGER;if(i===Po)return n.RGBA_INTEGER;if(i===Qa||i===es||i===ts||i===ns)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wr||i===Cr||i===Rr||i===Pr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ir||i===Lr||i===Dr||i===Ur||i===Or||i===ls||i===Fr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ir||i===Lr)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ur)return r.COMPRESSED_R11_EAC;if(i===Or)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ls)return r.COMPRESSED_RG11_EAC;if(i===Fr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kr||i===Br||i===Gr||i===zr||i===jr||i===Vr||i===Hr||i===Wr||i===$r||i===Xr||i===qr||i===Yr||i===Zr||i===Kr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Br)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$r)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kr)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jr||i===Qr||i===eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jr)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===to||i===no||i===cs||i===io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===to)return r.COMPRESSED_RED_RGTC1_EXT;if(i===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const d0=`
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

}`;class h0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:d0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f0 extends fi{constructor(e,t){super();const i=this;let a=null,r=1,o=null,l="local-floor",c=1,d=null,h=null,m=null,u=null,g=null,x=null;const y=typeof XRWebGLBinding<"u",p=new h0,f={},M=t.getContextAttributes();let b=null,E=null;const T=[],_=[],v=new ct;let N=null,O=null;const R=new tn;R.viewport=new St;const D=new tn;D.viewport=new St;const F=[R,D],q=new Eh;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let me=T[X];return me===void 0&&(me=new Ws,T[X]=me),me.getTargetRaySpace()},this.getControllerGrip=function(X){let me=T[X];return me===void 0&&(me=new Ws,T[X]=me),me.getGripSpace()},this.getHand=function(X){let me=T[X];return me===void 0&&(me=new Ws,T[X]=me),me.getHandSpace()};function Q(X){const me=_.indexOf(X.inputSource);if(me===-1)return;const ge=T[me];ge!==void 0&&(ge.update(X.inputSource,X.frame,d||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",oe);for(let X=0;X<T.length;X++){const me=_[X];me!==null&&(_[X]=null,T[X].disconnect(me))}I=null,V=null,p.reset();for(const X in f)delete f[X];if(e.setRenderTarget(b),g=null,u=null,m=null,a=null,E=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(v.width,v.height,!1),O!==null){const X=O.camera;X.fov=O.fov,X.zoom=O.zoom,X.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(b=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",j),a.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,fe=null,J=null;M.depth&&(J=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?Hn:Kn,fe=M.stencil?Di:gn);const Re={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Re),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new mn(u.textureWidth,u.textureHeight,{format:fn,type:$t,depthTexture:new Ui(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new mn(g.framebufferWidth,g.framebufferHeight,{format:fn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await a.requestReferenceSpace(l),Ue.setContext(a),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(X){for(let me=0;me<X.removed.length;me++){const ge=X.removed[me],fe=_.indexOf(ge);fe>=0&&(_[fe]=null,T[fe].disconnect(ge))}for(let me=0;me<X.added.length;me++){const ge=X.added[me];let fe=_.indexOf(ge);if(fe===-1){for(let Re=0;Re<T.length;Re++)if(Re>=_.length){_.push(ge),fe=Re;break}else if(_[Re]===null){_[Re]=ge,fe=Re;break}if(fe===-1)break}const J=T[fe];J&&J.connect(ge)}}function W(X,me){me===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(me.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let me=X.near,ge=X.far;p.texture!==null&&(p.depthNear>0&&(me=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),q.near=D.near=R.near=me,q.far=D.far=R.far=ge,(I!==q.near||V!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,V=q.far),q.layers.mask=X.layers.mask|6,R.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;const fe=X.parent,J=q.cameras;W(q,fe);for(let Re=0;Re<J.length;Re++)W(J[Re],fe);q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),O===null&&X.isPerspectiveCamera&&(O={camera:X,fov:X.fov,zoom:X.zoom}),te(X,q,fe)};function te(X,me,ge){ge===null?X.matrix.copy(me.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(me.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(me.projectionMatrix),X.projectionMatrixInverse.copy(me.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=so*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(X){return f[X]};let ie=null;function Se(X,me){if(h=me.getViewerPose(d||o),x=me,h!==null){const ge=h.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let fe=!1;ge.length!==q.cameras.length&&(q.cameras.length=0,fe=!0);for(let Ee=0;Ee<ge.length;Ee++){const Ce=ge[Ee];let ve=null;if(g!==null)ve=g.getViewport(Ce);else{const Ge=m.getViewSubImage(u,Ce);ve=Ge.viewport,Ee===0&&(e.setRenderTargetTextures(E,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(E))}let Ae=F[Ee];Ae===void 0&&(Ae=new tn,Ae.layers.enable(Ee),Ae.viewport=new St,F[Ee]=Ae),Ae.matrix.fromArray(Ce.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ce.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ve.x,ve.y,ve.width,ve.height),Ee===0&&(q.matrix.copy(Ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),fe===!0&&q.cameras.push(Ae)}const J=a.enabledFeatures;if(J&&J.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){m=i.getBinding();const Ee=m.getDepthInformation(ge[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,a.renderState)}if(J&&J.includes("camera-access")&&y){e.state.unbindTexture(),m=i.getBinding();for(let Ee=0;Ee<ge.length;Ee++){const Ce=ge[Ee].camera;if(Ce){let ve=f[Ce];ve||(ve=new Xc,f[Ce]=ve);const Ae=m.getCameraImage(Ce);ve.sourceTexture=Ae}}}}for(let ge=0;ge<T.length;ge++){const fe=_[ge],J=T[ge];fe!==null&&J!==void 0&&J.update(fe,me,d||o)}ie&&ie(X,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),x=null}const Ue=new Jc;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const p0=new vt,ld=new Ke;ld.set(-1,0,0,0,1,0,0,0,1);function m0(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,qc(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function a(p,f,M,b,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&g(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&l(p,f)):f.isPointsMaterial?c(p,f,M,b):f.isSpriteMaterial?d(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===zt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===zt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,E=M.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(E)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ld),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function l(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,M){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function g0(n,e,t,i){let a={},r={};function o(M,b){const E=b.program;i.uniformBlockBinding(M,E,a[M.id])}function l(M,b){let E=a[M.id];E===void 0&&(x(M),E=c(M),a[M.id]=E,M.addEventListener("dispose",p));const T=b.program;i.updateUBOMapping(M,T);const _=e.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function c(M){const b=n.createBuffer(),E=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function d(M){const b=a[M.id],E=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,v=E.length;_<v;_++){const N=E[_];if(Array.isArray(N))for(let O=0,R=N.length;O<R;O++)h(N[O],_,O,T);else h(N,_,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,b,E,T){if(u(M,b,E,T)===!0){const _=M.__offset,v=M.value;if(Array.isArray(v)){let N=0;for(let O=0;O<v.length;O++){const R=v[O],D=y(R,!0);m(R,M.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else m(v,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function m(M,b,E){typeof M=="number"||typeof M=="boolean"?b[E]=M:M.isMatrix3?(b[E]=M.elements[0],b[E+1]=M.elements[1],b[E+2]=M.elements[2],b[E+3]=0,b[E+4]=M.elements[3],b[E+5]=M.elements[4],b[E+6]=M.elements[5],b[E+7]=0,b[E+8]=M.elements[6],b[E+9]=M.elements[7],b[E+10]=M.elements[8],b[E+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-E),E):M.toArray(b,E)}function u(M,b,E,T){const _=M.value,v=b+"_"+E;if(Array.isArray(_)){T[v]===void 0&&(T[v]=[]);const N=T[v];let O=!1;for(let R=0;R<_.length;R++)g(_[R],N,R)===!0&&(O=!0);return O}return g(_,T,v)}function g(M,b,E){if(b[E]===void 0)return typeof M=="number"||typeof M=="boolean"?b[E]=M:ArrayBuffer.isView(M)?b[E]=M.slice():b[E]=M.clone(),!0;{const T=b[E];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return b[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function x(M){const b=M.uniforms;let E=0;const T=16;for(let v=0,N=b.length;v<N;v++){const O=Array.isArray(b[v])?b[v]:[b[v]];for(let R=0,D=O.length;R<D;R++){const F=O[R],q=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(b[v])||Array.isArray(F.value);let V=E;for(let j=0,oe=q.length;j<oe;j++){const W=q[j],te=y(W,I),ie=E%T,Se=ie%te.boundary,Ue=ie+Se;E+=Se,Ue!==0&&T-Ue<te.storage&&(E+=T-Ue),j===0&&(V=E),E+=te.storage}const Q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Q((E-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}const _=E%T;return _>0&&(E+=T-_),M.__size=E,M.__cache={},this}function y(M,b){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function p(M){const b=M.target;b.removeEventListener("dispose",p),n.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function f(){for(const M in a)n.deleteBuffer(a[M]);a={},r={}}return{bind:o,update:l,dispose:f}}const x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function v0(){return dn===null&&(dn=new lh(x0,16,16,di,xn),dn.name="DFG_LUT",dn.minFilter=Vt,dn.magFilter=Vt,dn.wrapS=Tn,dn.wrapT=Tn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class _0{constructor(e={}){const{canvas:t=Du(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:g=$t}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const y=g,p=new Set([Po,Ro,Co]),f=new Set([$t,gn,oa,Di,No,wo]),M=new Uint32Array(4),b=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let T=null,_=null;const v=[],N=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,F=null,q=null,I=null,V=null;this._outputColorSpace=Yt;let Q=0,j=0,oe=null,W=-1,te=null;const ie=new St,Se=new St;let Ue=null;const X=new lt(0);let me=0,ge=t.width,fe=t.height,J=1,Re=null,Oe=null;const Ee=new St(0,0,ge,fe),Ce=new St(0,0,ge,fe);let ve=!1;const Ae=new ca,Ge=new Do;let $e=!1,be=!1;const je=new vt,tt=new ne,Te=new St,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Je(){return oe===null?J:1}let k=i;function dt(S,L){return t.getContext(S,L)}let qe,Ye,ye,ht,Fe,He,w,A,U,re,K,ue,pe,ee,G,Y,P,Z,H,de,se,xe,we;try{const S={alpha:!0,depth:a,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ce,!1),k===null){const L="webgl2";if(k=dt(L,S),k===null)throw dt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(S){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pt("WebGLRenderer: "+S.message),S}function ze(){qe=new bm(k),qe.init(),se=new c0(k,qe),Ye=new um(k,qe,e,se),ye=new o0(k,qe),Ye.reversedDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),q=k.createFramebuffer(),I=k.createFramebuffer(),V=k.createFramebuffer(),ht=new Am(k),Fe=new Xg,He=new l0(k,qe,ye,Fe,Ye,se,ht),w=new ym(R),A=new Th(k),xe=new cm(k,A),U=new Mm(k,A,ht,xe),re=new Nm(k,U,A,xe,ht),Z=new Tm(k,Ye,He),G=new hm(Fe),K=new $g(R,w,qe,Ye,xe,G),ue=new m0(R,Fe),pe=new Yg,ee=new t0(qe),P=new lm(R,w,ye,re,x,c),Y=new r0(R,re,Ye),we=new g0(k,ht,Ye,ye),H=new dm(k,qe,ht),de=new Em(k,qe,ht),ht.programs=K.programs,R.capabilities=Ye,R.extensions=qe,R.properties=Fe,R.renderLists=pe,R.shadowMap=Y,R.state=ye,R.info=ht}y!==$t&&(O=new Cm(y,t.width,t.height,l,a,r));const le=new f0(R,k);this.xr=le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(ge,fe,!1))},this.getSize=function(S){return S.set(ge,fe)},this.setSize=function(S,L,z=!0){if(le.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=S,fe=L,t.width=Math.floor(S*J),t.height=Math.floor(L*J),z===!0&&(t.style.width=S+"px",t.style.height=L+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(ge*J,fe*J).floor()},this.setDrawingBufferSize=function(S,L,z){ge=S,fe=L,J=z,t.width=Math.floor(S*z),t.height=Math.floor(L*z),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(y===$t){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,L,z,B){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,L,z,B),ye.viewport(ie.copy(Ee).multiplyScalar(Je()).round())},this.getScissor=function(S){return S.copy(Ce)},this.setScissor=function(S,L,z,B){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,L,z,B),ye.scissor(Se.copy(Ce).multiplyScalar(Je()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){ye.setScissorTest(ve=S)},this.setOpaqueSort=function(S){Re=S},this.setTransparentSort=function(S){Oe=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,z=!0){let B=0;if(S){let $=!1;if(oe!==null){const he=oe.texture.format;$=p.has(he)}if($){const he=oe.texture.type,Me=f.has(he),_e=P.getClearColor(),Ne=P.getClearAlpha(),De=_e.r,Xe=_e.g,Qe=_e.b;Me?(M[0]=De,M[1]=Xe,M[2]=Qe,M[3]=Ne,k.clearBufferuiv(k.COLOR,0,M)):(b[0]=De,b[1]=Xe,b[2]=Qe,b[3]=Ne,k.clearBufferiv(k.COLOR,0,b))}else B|=k.COLOR_BUFFER_BIT}L&&(B|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),P.dispose(),pe.dispose(),ee.dispose(),He.dispose(),Fe.dispose(),w.dispose(),re.dispose(),U.dispose(),xe.dispose(),we.dispose(),K.dispose(),le.dispose(),le.removeEventListener("sessionstart",xa),le.removeEventListener("sessionend",va),ln.stop()};function Le(S){S.preventDefault(),el("WebGLRenderer: Context Lost."),D=!0}function We(){el("WebGLRenderer: Context Restored."),D=!1;const S=ht.autoReset,L=Y.enabled,z=Y.autoUpdate,B=Y.needsUpdate,$=Y.type;ze(),ht.autoReset=S,Y.enabled=L,Y.autoUpdate=z,Y.needsUpdate=B,Y.type=$}function ce(S){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const L=S.target;L.removeEventListener("dispose",Ve),nt(L)}function nt(S){Mt(S),Fe.remove(S)}function Mt(S){const L=Fe.get(S).programs;L!==void 0&&(L.forEach(function(z){K.releaseProgram(z)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,z,B,$,he){L===null&&(L=it);const Me=$.isMesh&&$.matrixWorld.determinantAffine()<0,_e=ba(S,L,z,B,$);ye.setMaterial(B,Me);let Ne=z.index,De=1;if(B.wireframe===!0){if(Ne=U.getWireframeAttribute(z),Ne===void 0)return;De=2}const Xe=z.drawRange,Qe=z.attributes.position;let ke=Xe.start*De,at=(Xe.start+Xe.count)*De;he!==null&&(ke=Math.max(ke,he.start*De),at=Math.min(at,(he.start+he.count)*De)),Ne!==null?(ke=Math.max(ke,0),at=Math.min(at,Ne.count)):Qe!=null&&(ke=Math.max(ke,0),at=Math.min(at,Qe.count));const yt=at-ke;if(yt<0||yt===1/0)return;xe.setup($,B,_e,z,Ne);let xt,gt=H;if(Ne!==null&&(xt=A.get(Ne),gt=de,gt.setIndex(xt)),$.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*Je()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if($.isLine){let Dt=B.linewidth;Dt===void 0&&(Dt=1),ye.setLineWidth(Dt*Je()),$.isLineSegments?gt.setMode(k.LINES):$.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else $.isPoints?gt.setMode(k.POINTS):$.isSprite&&gt.setMode(k.TRIANGLES);if($.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))gt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Dt=$._multiDrawStarts,Be=$._multiDrawCounts,Bt=$._multiDrawCount,ft=Ne?A.get(Ne).bytesPerElement:1,ni=Fe.get(B).currentProgram.getUniforms();for(let Ut=0;Ut<Bt;Ut++)ni.setValue(k,"_gl_DrawID",Ut),gt.render(Dt[Ut]/ft,Be[Ut])}else if($.isInstancedMesh)gt.renderInstances(ke,yt,$.count);else if(z.isInstancedBufferGeometry){const Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Be=Math.min(z.instanceCount,Dt);gt.renderInstances(ke,yt,Be)}else gt.render(ke,yt)};function on(S,L,z,B){F!==null&&S.isNodeMaterial&&F.setObject(B,S),$e===!0&&G.setState(S,z,!1),S.transparent===!0&&S.side===An&&S.forceSinglePass===!1?(S.side=zt,S.needsUpdate=!0,Pn(S,L,B),S.side=ci,S.needsUpdate=!0,Pn(S,L,B),S.side=An):Pn(S,L,B)}this.compile=function(S,L,z=null){z===null&&(z=S),F!==null&&F.renderStart(S,L,z),_=ee.get(z),_.init(L),N.push(_),z.traverseVisible(function($){$.isLight&&$.layers.test(L.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),S!==z&&S.traverseVisible(function($){$.isLight&&$.layers.test(L.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights(),F!==null&&F.updateLights(_.state.lightsArray),be=this.localClippingEnabled,$e=G.init(this.clippingPlanes,be),$e===!0&&G.setGlobalState(this.clippingPlanes,L),F!==null&&Y.render(_.state.shadowsArray,z,L);const B=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const he=$.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const _e=he[Me];on(_e,z,L,$),B.add(_e)}else on(he,z,L,$),B.add(he)}),_=N.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(S,L,z=null){const B=this.compile(S,L,z);return new Promise($=>{function he(){if(B.forEach(function(Me){const Ne=Fe.get(Me).currentProgram;(Ne===void 0||Ne.isReady())&&B.delete(Me)}),B.size===0){$(S);return}setTimeout(he,10)}qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ti=null;function Ps(S){ti&&ti(S)}function xa(){ln.stop()}function va(){ln.start()}const ln=new Jc;ln.setAnimationLoop(Ps),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(S){ti=S,le.setAnimationLoop(S),S===null?ln.stop():ln.start()},le.addEventListener("sessionstart",xa),le.addEventListener("sessionend",va),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(S,L);const z=le.enabled===!0&&le.isPresenting===!0,B=O!==null&&(oe===null||z)&&O.begin(R,oe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(L),L=le.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,L,oe),_=ee.get(S,N.length),_.init(L),_.state.textureUnits=He.getTextureUnits(),N.push(_),je.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Ge.setFromArrayCamera(L):Ae.setFromProjectionMatrix(je,an,L.reversedDepth),be=this.localClippingEnabled,$e=G.init(this.clippingPlanes,be),T=pe.get(S,v.length),T.init(),v.push(T),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&zi(Me,L,-1/0,R.sortObjects)}zi(S,L,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(_.state.lightsArray),R.sortObjects===!0&&T.sort(Re,Oe),st=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,st&&P.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),$e===!0&&G.beginShadows();const $=_.state.shadowsArray;if(Y.render($,S,L),$e===!0&&G.endShadows(),(B&&O.hasRenderPass())===!1){const Me=T.opaque,_e=T.transmissive;if(_.setupLights(),L.isArrayCamera){const Ne=L.cameras;if(_e.length>0)for(let De=0,Xe=Ne.length;De<Xe;De++){const Qe=Ne[De];Sa(Me,_e,S,Qe)}st&&P.render(S);for(let De=0,Xe=Ne.length;De<Xe;De++){const Qe=Ne[De];_a(T,S,Qe,Qe.viewport)}}else _e.length>0&&Sa(Me,_e,S,L),st&&P.render(S),_a(T,S,L)}oe!==null&&j===0&&(He.updateMultisampleRenderTarget(oe),He.updateRenderTargetMipmap(oe)),B&&O.end(R),S.isScene===!0&&S.onAfterRender(R,S,L),xe.resetDefaultState(),W=-1,te=null,N.pop(),N.length>0?(_=N[N.length-1],He.setTextureUnits(_.state.textureUnits),$e===!0&&G.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,v.pop(),v.length>0?T=v[v.length-1]:T=null,F!==null&&F.renderEnd()};function zi(S,L,z,B){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){const Me=L.isArrayCamera?Ge:Ae;if(!S.frustumCulled||S.intersectsFrustum(Me)){B&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(je);const _e=re.update(S),Ne=S.material;Ne.visible&&T.push(S,_e,Ne,z,Te.z,null,L)}}else if(S.isMesh||S.isLine||S.isPoints){const Me=L.isArrayCamera?Ge:Ae;if(!S.frustumCulled||S.intersectsFrustum(Me)){const _e=re.update(S),Ne=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Te.copy(_e.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(je)),Array.isArray(Ne)){const De=_e.groups;for(let Xe=0,Qe=De.length;Xe<Qe;Xe++){const ke=De[Xe],at=Ne[ke.materialIndex];at&&at.visible&&T.push(S,_e,at,z,Te.z,ke,L)}}else Ne.visible&&T.push(S,_e,Ne,z,Te.z,null,L)}}}const he=S.children;for(let Me=0,_e=he.length;Me<_e;Me++)zi(he[Me],L,z,B)}function _a(S,L,z,B){const{opaque:$,transmissive:he,transparent:Me}=S;_.setupLightsView(z),$e===!0&&G.setGlobalState(R.clippingPlanes,z),B&&ye.viewport(ie.copy(B)),$.length>0&&pi($,L,z),he.length>0&&pi(he,L,z),Me.length>0&&pi(Me,L,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Sa(S,L,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[B.id]===void 0){const ke=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:ke?xn:$t,minFilter:Vn,samples:Math.max(4,Ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const he=_.state.transmissionRenderTarget[B.id],Me=B.viewport||ie;he.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const _e=R.getRenderTarget(),Ne=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(he),R.getClearColor(X),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),st&&P.render(z);const Xe=R.toneMapping;R.toneMapping=Nn;const Qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),_.setupLightsView(B),$e===!0&&G.setGlobalState(R.clippingPlanes,B),pi(S,z,B),He.updateMultisampleRenderTarget(he),He.updateRenderTargetMipmap(he),qe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let at=0,yt=L.length;at<yt;at++){const xt=L[at],{object:gt,geometry:Dt,material:Be,group:Bt}=xt;if(Be.side===An&&gt.layers.test(B.layers)){const ft=Be.side;Be.side=zt,Be.needsUpdate=!0,ji(gt,z,B,Dt,Be,Bt),Be.side=ft,Be.needsUpdate=!0,ke=!0}}ke===!0&&(He.updateMultisampleRenderTarget(he),He.updateRenderTargetMipmap(he))}R.setRenderTarget(_e,Ne,De),R.setClearColor(X,me),Qe!==void 0&&(B.viewport=Qe),R.toneMapping=Xe}function pi(S,L,z){const B=L.isScene===!0?L.overrideMaterial:null;for(let $=0,he=S.length;$<he;$++){const Me=S[$],{object:_e,geometry:Ne,group:De}=Me;let Xe=Me.material;Xe.allowOverride===!0&&B!==null&&(Xe=B),_e.layers.test(z.layers)&&ji(_e,L,z,Ne,Xe,De)}}function ji(S,L,z,B,$,he){F!==null&&$.isNodeMaterial&&F.setObject(S,$),S.onBeforeRender(R,L,z,B,$,he),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(R,L,z,B,S,he),$.transparent===!0&&$.side===An&&$.forceSinglePass===!1?($.side=zt,$.needsUpdate=!0,R.renderBufferDirect(z,L,B,$,S,he),$.side=ci,$.needsUpdate=!0,R.renderBufferDirect(z,L,B,$,S,he),$.side=An):R.renderBufferDirect(z,L,B,$,S,he),S.onAfterRender(R,L,z,B,$,he)}function Vi(S){let L=0;for(const z of S)z.texture!==null&&L++;return L}function Pn(S,L,z){L.isScene!==!0&&(L=it);const B=Fe.get(S),$=_.state.lights,he=_.state.shadowsArray,Me=$.state.version,_e=K.getParameters(S,$.state,he,L,z,_.state.lightProbeGridArray),Ne=K.getProgramCacheKey(_e);let De=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Xe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=w.get(S.envMap||B.environment,Xe),B.envMapRotation=B.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",Ve),De=new Map,B.programs=De,B.programVariants=new Map);let Qe=De.get(Ne);if(Qe!==void 0){if(B.currentProgram===Qe&&B.lightsStateVersion===Me)return Wi(S,_e),Qe}else _e.uniforms=K.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,z,_e),S.onBeforeCompile(_e,R),Qe=K.acquireProgram(_e,Ne),De.set(Ne,Qe),B.uniforms=_e.uniforms;const ke=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=G.uniform),Wi(S,_e),B.needsLights=Ea(S),B.lightsStateVersion=Me,B.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.sunLights.value=$.state.sun,ke.sunLightShadows.value=$.state.sunShadow,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.sunShadowMatrix.value=$.state.sunShadowMatrix,ke.sunShadowCascade.value=$.state.sunShadowCascade,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),B.numLightProbeGrids=Vi(_.state.lightProbeGridArray),B.currentProgram=Qe,B.uniformsList=null,Qe}function ya(S,L,z,B,$){const he=Fe.get(S),Me=he.currentProgram.id+","+B+","+$;let _e=he.programVariants.get(Me);return _e===void 0?(_e=Pn(S,L,z),he.programVariants.set(Me,_e)):(he.currentProgram=_e,he.uniformsList=null,he.outputColorSpace=B,he.toneMapping=$),_e}function Hi(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=as.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function Wi(S,L){const z=Fe.get(S);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function ba(S,L,z,B,$){L.isScene!==!0&&(L=it),He.resetTextureUnits();const he=L.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,_e=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:rt.workingColorSpace,Ne=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,De=w.get(B.envMap||Me,Ne),Xe=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Qe=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ke=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,yt=!!z.morphAttributes.color;let xt=Nn;B.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xt=R.toneMapping);const gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Dt=gt!==void 0?gt.length:0,Be=Fe.get(B),Bt=_.state.lights;if($e===!0&&(be===!0||S!==te)){const _t=S===te&&B.id===W;G.setState(B,S,_t)}let ft=!1,ni=!1;B.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Bt.state.version||$.isBatchedMesh&&Be.batching===!1||!$.isBatchedMesh&&Be.batching===!0||$.isBatchedMesh&&Be.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Be.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Be.instancingMorph===!1&&$.morphTexture!==null||Be.envMap!==De||B.fog===!0&&Be.fog!==he||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==G.numPlanes||Be.numIntersection!==G.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==Qe||Be.morphTargets!==ke||Be.morphNormals!==at||Be.morphColors!==yt||Be.morphTargetsCount!==Dt||Be.numLightProbeGrids!==Vi(_.state.lightProbeGridArray)?ft=!0:(Be.outputColorSpace!==_e||Be.toneMapping!==xt)&&(ni=!0):(ft=!0,Be.__version=B.version);let Ut=Be.currentProgram;(ft===!0||ni===!0)&&(Ut=ni===!0?ya(B,L,$,_e,xt):Pn(B,L,$),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Ut,Be));let Aa=!1,In=!1,ii=!1;const ut=Ut.getUniforms(),Rt=Be.uniforms;if(ye.useProgram(Ut.program)&&(Aa=!0,In=!0,ii=!0),B.id!==W&&(W=B.id,In=!0),Aa||te!==S){ye.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",S.projectionMatrix),ut.setValue(k,"viewMatrix",S.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(k,tt.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),te!==S&&(te=S,In=!0,ii=!0)}if(Be.needsLights&&(Bt.state.sunShadowMap.length>0&&ut.setValue(k,"sunShadowMap",Bt.state.sunShadowMap,He),Bt.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",Bt.state.directionalShadowMap,He),Bt.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",Bt.state.spotShadowMap,He),Bt.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",Bt.state.pointShadowMap,He)),$.isSkinnedMesh){ut.setOptional(k,$,"bindMatrix"),ut.setOptional(k,$,"bindMatrixInverse");const _t=$.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ut.setValue(k,"boneTexture",_t.boneTexture,He))}$.isBatchedMesh&&(ut.setOptional(k,$,"batchingTexture"),ut.setValue(k,"batchingTexture",$._matricesTexture,He),ut.setOptional(k,$,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",$._indirectTexture,He),ut.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",$._colorsTexture,He));const Kt=z.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Z.update($,z,Ut),(In||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,ut.setValue(k,"receiveShadow",$.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Rt.envMapIntensity.value=L.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=v0()),In){if(ut.setValue(k,"toneMappingExposure",R.toneMappingExposure),Be.needsLights&&Ma(Rt,ii),he&&B.fog===!0&&ue.refreshFogUniforms(Rt,he),ue.refreshMaterialUniforms(Rt,B,J,fe,_.state.transmissionRenderTarget[S.id]),Be.needsLights&&Be.numLightProbeGrids>0){const _t=E;let Nt=0;for(const _n of _.state.lightProbeGridArray)_n.texture!==null&&(_t.textures[Nt]=_n.texture,_t.min[Nt]=_n.boundingBox.min,_t.max[Nt]=_n.boundingBox.max,_t.resolution[Nt]=_n.resolution,Nt++);for(const _n in _t)_t[_n].length=Nt;Rt.probesSH.value=_t.textures,Rt.probesMin.value=_t.min,Rt.probesMax.value=_t.max,Rt.probesResolution.value=_t.resolution}as.upload(k,Hi(Be),Rt,He)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(as.upload(k,Hi(Be),Rt,He),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(k,"center",$.center),ut.setValue(k,"modelViewMatrix",$.modelViewMatrix),ut.setValue(k,"normalMatrix",$.normalMatrix),ut.setValue(k,"modelMatrix",$.matrixWorld),B.uniformsGroups!==void 0){const _t=B.uniformsGroups;for(let Nt=0,_n=_t.length;Nt<_n;Nt++){const $o=_t[Nt];we.update($o,Ut),we.bind($o,Ut)}}return Ut}function Ma(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Ea(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(S,L,z){const B=Fe.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Fe.get(S.texture).__webglTexture=L,Fe.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){const z=Fe.get(S);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,z=0){oe=S,Q=L,j=z;let B=null,$=!1,he=!1;if(S){const _e=Fe.get(S);if(_e.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),ie.copy(S.viewport),Se.copy(S.scissor),Ue=S.scissorTest,ye.viewport(ie),ye.scissor(Se),ye.setScissorTest(Ue),W=-1;return}else if(_e.__webglFramebuffer===void 0)He.setupRenderTarget(S);else if(_e.__hasExternalTextures)He.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Xe=S.depthTexture;if(_e.__boundDepthTexture!==Xe){if(Xe!==null&&Fe.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);const De=Fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[L])?B=De[L][z]:B=De[L],$=!0):S.samples>0&&He.useMultisampledRTT(S)===!1?B=Fe.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?B=De[z]:B=De,ie.copy(S.viewport),Se.copy(S.scissor),Ue=S.scissorTest}else ie.copy(Ee).multiplyScalar(J).floor(),Se.copy(Ce).multiplyScalar(J).floor(),Ue=ve;if(z!==0&&(B=q),ye.bindFramebuffer(k.FRAMEBUFFER,B)&&ye.drawBuffers(S,B),ye.viewport(ie),ye.scissor(Se),ye.setScissorTest(Ue),$){const _e=Fe.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e.__webglTexture,z)}else if(he){const _e=L;for(let Ne=0;Ne<S.textures.length;Ne++){const De=Fe.get(S.textures[Ne]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ne,De.__webglTexture,z,_e)}}else if(S!==null&&z!==0){const _e=Fe.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,z)}W=-1};function ae(S){const L=Fe.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=Ye.textureFormatReadable(S.format),L.__typeReadable=Ye.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,z,B,$,he,Me,_e=0){if(!(S&&S.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ne=Ne[Me],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){ye.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const De=S.textures[_e],Xe=De.format,Qe=De.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);const ke=ae(De);if(ke.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-B&&z>=0&&z<=S.height-$&&k.readPixels(L,z,B,$,se.convert(Xe),se.convert(Qe),he)}finally{const De=oe!==null?Fe.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,L,z,B,$,he,Me,_e=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ne=Ne[Me],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(L>=0&&L<=S.width-B&&z>=0&&z<=S.height-$){ye.bindFramebuffer(k.FRAMEBUFFER,Ne);const De=S.textures[_e],Xe=De.format,Qe=De.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);const ke=ae(De);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.bufferData(k.PIXEL_PACK_BUFFER,he.byteLength,k.STREAM_READ),k.readPixels(L,z,B,$,se.convert(Xe),se.convert(Qe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const yt=oe!==null?Fe.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(k.FRAMEBUFFER,yt);const xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Uu(k,xt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,he),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(at),k.deleteSync(xt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,z=0){const B=Math.pow(2,-z),$=Math.floor(S.image.width*B),he=Math.floor(S.image.height*B),Me=L!==null?L.x:0,_e=L!==null?L.y:0;He.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,z,0,0,Me,_e,$,he),ye.unbindTexture()},this.copyTextureToTexture=function(S,L,z=null,B=null,$=0,he=0){let Me,_e,Ne,De,Xe,Qe,ke,at,yt;const xt=S.isCompressedTexture?S.mipmaps[he]:S.image;if(z!==null)Me=z.max.x-z.min.x,_e=z.max.y-z.min.y,Ne=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Xe=z.min.y,Qe=z.isBox3?z.min.z:0;else{const ut=Math.pow(2,-$);Me=Math.floor(xt.width*ut),_e=Math.floor(xt.height*ut),S.isDataArrayTexture?Ne=xt.depth:S.isData3DTexture?Ne=Math.floor(xt.depth*ut):Ne=1,De=0,Xe=0,Qe=0}B!==null?(ke=B.x,at=B.y,yt=B.z):(ke=0,at=0,yt=0);const gt=se.convert(L.format),Dt=se.convert(L.type);let Be;L.isData3DTexture?(He.setTexture3D(L,0),Be=k.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(He.setTexture2DArray(L,0),Be=k.TEXTURE_2D_ARRAY):(He.setTexture2D(L,0),Be=k.TEXTURE_2D),ye.activeTexture(k.TEXTURE0),ye.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,L.flipY),ye.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ye.pixelStorei(k.UNPACK_ALIGNMENT,L.unpackAlignment);const Bt=ye.getParameter(k.UNPACK_ROW_LENGTH),ft=ye.getParameter(k.UNPACK_IMAGE_HEIGHT),ni=ye.getParameter(k.UNPACK_SKIP_PIXELS),Ut=ye.getParameter(k.UNPACK_SKIP_ROWS),Aa=ye.getParameter(k.UNPACK_SKIP_IMAGES);ye.pixelStorei(k.UNPACK_ROW_LENGTH,xt.width),ye.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt.height),ye.pixelStorei(k.UNPACK_SKIP_PIXELS,De),ye.pixelStorei(k.UNPACK_SKIP_ROWS,Xe),ye.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const In=S.isDataArrayTexture||S.isData3DTexture,ii=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const ut=Fe.get(S),Rt=Fe.get(L),Kt=Fe.get(ut.__renderTarget),_t=Fe.get(Rt.__renderTarget);ye.bindFramebuffer(k.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Nt=0;Nt<Ne;Nt++)In&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(S).__webglTexture,$,Qe+Nt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(L).__webglTexture,he,yt+Nt)),k.blitFramebuffer(De,Xe,De+Me,Xe+_e,ke,at,ke+Me,at+_e,k.DEPTH_BUFFER_BIT,k.NEAREST);ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||Fe.has(S)){const ut=Fe.get(S),Rt=Fe.get(L);ye.bindFramebuffer(k.READ_FRAMEBUFFER,I),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let Kt=0;Kt<Ne;Kt++)In?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ut.__webglTexture,$,Qe+Kt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ut.__webglTexture,$),ii?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rt.__webglTexture,he,yt+Kt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rt.__webglTexture,he),$!==0?k.blitFramebuffer(De,Xe,De+Me,Xe+_e,ke,at,ke+Me,at+_e,k.COLOR_BUFFER_BIT,k.NEAREST):ii?k.copyTexSubImage3D(Be,he,ke,at,yt+Kt,De,Xe,Me,_e):k.copyTexSubImage2D(Be,he,ke,at,De,Xe,Me,_e);ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ii?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(Be,he,ke,at,yt,Me,_e,Ne,gt,Dt,xt.data):L.isCompressedArrayTexture?k.compressedTexSubImage3D(Be,he,ke,at,yt,Me,_e,Ne,gt,xt.data):k.texSubImage3D(Be,he,ke,at,yt,Me,_e,Ne,gt,Dt,xt):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,he,ke,at,Me,_e,gt,Dt,xt.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,he,ke,at,xt.width,xt.height,gt,xt.data):k.texSubImage2D(k.TEXTURE_2D,he,ke,at,Me,_e,gt,Dt,xt);ye.pixelStorei(k.UNPACK_ROW_LENGTH,Bt),ye.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),ye.pixelStorei(k.UNPACK_SKIP_PIXELS,ni),ye.pixelStorei(k.UNPACK_SKIP_ROWS,Ut),ye.pixelStorei(k.UNPACK_SKIP_IMAGES,Aa),he===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&k.generateMipmap(Be),ye.unbindTexture()},this.initRenderTarget=function(S){Fe.get(S).__webglFramebuffer===void 0&&He.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?He.setTextureCube(S,0):S.isData3DTexture?He.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?He.setTexture2DArray(S,0):He.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){Q=0,j=0,oe=null,ye.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function S0(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,n.height);t.addColorStop(0,"#0a1e3f"),t.addColorStop(.2,"#062d5e"),t.addColorStop(.5,"#0c386d"),t.addColorStop(.8,"#062d5e"),t.addColorStop(1,"#0a1e3f"),e.fillStyle=t,e.fillRect(0,0,n.width,n.height);const i=(r,o="#1b4332",l="#2d6a4f")=>{e.beginPath(),r.forEach(([c,d],h)=>{const m=(c+180)/360*n.width,u=(90-d)/180*n.height;h===0?e.moveTo(m,u):e.lineTo(m,u)}),e.closePath(),e.fillStyle=o,e.fill(),e.strokeStyle=l,e.lineWidth=3,e.stroke()};i([[-15,35],[-5,36],[10,37],[25,32],[35,30],[51,12],[45,0],[42,-12],[32,-28],[26,-34],[18,-34],[12,-18],[9,5],[-5,5],[-17,15],[-17,28],[-15,35]],"#2d6a4f","#40916c"),i([[-10,28],[30,28],[32,18],[15,16],[-10,20]],"#78350f","#92400e"),i([[-9,36],[-5,43],[5,48],[12,54],[25,58],[30,70],[18,70],[10,62],[3,52],[-4,48],[-9,42]],"#1e4620","#2d6a4f"),i([[32,35],[45,45],[60,55],[75,70],[110,72],[145,72],[170,64],[160,50],[140,38],[122,22],[105,10],[80,8],[70,22],[55,25],[35,30]],"#1e4620","#2d6a4f"),i([[70,24],[78,28],[88,25],[84,18],[80,8],[74,14]],"#2d6a4f","#40916c"),i([[-168,65],[-140,70],[-100,72],[-75,62],[-60,48],[-70,42],[-76,34],[-80,25],[-90,20],[-100,22],[-115,30],[-124,48],[-130,54],[-165,60]],"#1e4620","#2d6a4f"),i([[-75,12],[-60,8],[-45,-2],[-35,-6],[-38,-16],[-50,-32],[-65,-55],[-75,-48],[-72,-30],[-80,-10],[-78,5]],"#155e75","#0e7490"),i([[114,-22],[125,-15],[140,-12],[150,-22],[152,-36],[140,-38],[118,-35]],"#854d0e","#a16207"),e.fillStyle="#f8fafc",e.beginPath(),e.ellipse(n.width*.5,40,n.width*.35,60,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(n.width*.5,n.height-40,n.width*.42,80,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.45)";for(let r=0;r<60;r++){const o=r*127%n.width,l=160+r*59%(n.height-320),c=35+r%45,d=10+r%15;e.beginPath(),e.ellipse(o,l,c,d,r*.2,0,Math.PI*2),e.fill()}const a=new uh(n);return a.needsUpdate=!0,a}function y0({isDark:n=!0}){const e=C.useRef(null),t=C.useRef(!1),i=C.useRef({x:0,y:0}),a=C.useRef({x:6e-4,y:.0016});return C.useEffect(()=>{const r=e.current;if(!r)return;const o=r.clientWidth||480,l=r.clientHeight||480,c=new eh,d=new tn(45,o/l,.1,1e3);d.position.z=2.7;const h=new _0({alpha:!0,antialias:!0,powerPreference:"high-performance"});h.setSize(o,l),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(h.domElement);const m=new fs(1,64,64),u=S0(),g=new xh({map:u,roughness:.55,metalness:.05}),x=new Rn(m,g);x.rotation.z=.41,x.rotation.y=1.2,c.add(x);const y=new fs(1.025,48,48),p=new Vc({color:3718648,transparent:!0,opacity:n?.25:.18,blending:vr,side:zt}),f=new Rn(y,p);c.add(f);const M=220,b=new vn,E=new Float32Array(M*3);for(let j=0;j<M*3;j+=3)E[j]=(Math.random()-.5)*16,E[j+1]=(Math.random()-.5)*16,E[j+2]=-2-Math.random()*8;b.setAttribute("position",new Xn(E,3));const T=new Hc({color:9684477,size:.035,transparent:!0,opacity:n?.75:.35}),_=new dh(b,T);c.add(_);const v=new bh(16777215,2);v.position.set(4,2,3),c.add(v);const N=new Mh(2241365,.9);c.add(N);const O=j=>{t.current=!0,i.current={x:j.clientX,y:j.clientY}},R=j=>{if(!t.current)return;const oe=j.clientX-i.current.x,W=j.clientY-i.current.y;i.current={x:j.clientX,y:j.clientY},x.rotation.y+=oe*.005,x.rotation.x+=W*.005,a.current={x:W*.001,y:oe*.002}},D=()=>{t.current=!1},F=h.domElement;F.addEventListener("pointerdown",O),window.addEventListener("pointermove",R),window.addEventListener("pointerup",D);let q;const I=()=>{q=requestAnimationFrame(I),t.current||(a.current.y=a.current.y*.95+.0012*.05,a.current.x=a.current.x*.95,x.rotation.y+=a.current.y,x.rotation.x+=a.current.x),_.rotation.y+=2e-4,h.render(c,d)};I();const V=()=>{if(!r)return;const j=r.clientWidth,oe=r.clientHeight;d.aspect=j/oe,d.updateProjectionMatrix(),h.setSize(j,oe)},Q=new ResizeObserver(V);return Q.observe(r),()=>{cancelAnimationFrame(q),Q.disconnect(),F.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",R),window.removeEventListener("pointerup",D),m.dispose(),g.dispose(),u.dispose(),y.dispose(),p.dispose(),b.dispose(),T.dispose(),h.dispose(),r.contains(F)&&r.removeChild(F)}},[n]),s.jsxs("div",{className:"earth-3d-wrapper",style:{position:"relative",width:"100%",height:"100%",minHeight:"380px"},children:[s.jsx("div",{ref:e,className:"earth-3d-canvas-container",style:{width:"100%",height:"100%",cursor:"grab"},title:"Interactive 3D Earth — Click and drag to rotate"}),s.jsxs("div",{className:"earth-hint-pill",children:[s.jsx("span",{className:"hint-dot"}),s.jsx("span",{children:"Drag to rotate Earth"})]})]})}function b0({lang:n="en",isDark:e=!0,onExploreClick:t,onHowItWorksClick:i}){const a=n==="ar";return s.jsx("section",{id:"home",className:"home-hero-section",children:s.jsxs("div",{className:"home-hero-container",children:[s.jsxs("div",{className:"home-hero-content",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(ei,{size:14,className:"badge-sparkle-icon"}),s.jsx("span",{children:a?"تحدي ناسا لتطبيقات الفضاء ٢٠٢٦":"NASA Space Apps Challenge 2026"})]}),s.jsx("h1",{className:"hero-title",children:s.jsx("span",{className:"hero-title-main",children:"TERRA-TONE"})}),s.jsx("p",{className:"hero-subtitle",children:a?"استمع إلى الأرض. اكتشف ما تخبرنا به.":"Listen to the Earth. Discover what it tells us."}),s.jsx("p",{className:"hero-description",children:a?"تجربة علمية تفاعلية مستقبلية تحول القياسات الطيفية والمناخية لأقمار ناسا الصناعية إلى تجارب صوتية حسية تكشف التغيرات البيئية والتنفس الحيوي لكوكبنا.":"A futuristic interactive scientific platform translating NASA satellite observations and Earth Information Center datasets into real-time acoustic soundscapes."}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs("a",{href:"#explore",onClick:r=>{r.preventDefault(),t==null||t()},className:"hero-btn-primary",children:[s.jsx(nc,{size:18}),s.jsx("span",{children:a?"استكشف بيانات الأرض":"Explore Earth Data"}),s.jsx(So,{size:16,className:"btn-arrow-icon"})]}),s.jsxs("a",{href:"#science",onClick:r=>{r.preventDefault(),i==null||i()},className:"hero-btn-secondary",children:[s.jsx(_s,{size:18}),s.jsx("span",{children:a?"كيف يعمل الصوت البيئي":"How It Works"})]})]}),s.jsxs("div",{className:"hero-metrics-strip",children:[s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"100%"}),s.jsx("span",{className:"metric-lbl",children:a?"بيانات ناسا الأصلية":"Verified NASA Data"})]}),s.jsx("div",{className:"metric-divider"}),s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"6+"}),s.jsx("span",{className:"metric-lbl",children:a?"أبعاد مناخية":"Climate Domains"})]}),s.jsx("div",{className:"metric-divider"}),s.jsxs("div",{className:"metric-item",children:[s.jsx("span",{className:"metric-val",children:"24/7"}),s.jsx("span",{className:"metric-lbl",children:a?"استشعار فضائي مستمر":"Orbital Telemetry"})]})]})]}),s.jsx("div",{className:"home-hero-visual",children:s.jsx("div",{className:"earth-canvas-frame",children:s.jsx(y0,{isDark:e})})})]})})}function M0({lang:n="en"}){const[e,t]=C.useState(0),i=n==="ar",a=[{step:"01",title:i?"جمع البيانات من الفضاء":"COLLECT",subtitle:i?"استشعار الأرض عن بُعد بواسطة أقمار ناسا":"Satellite Earth Observation",icon:Wd,badge:"NASA SATELLITES & MISSIONS",description:i?"تقوم أساطيل ناسا الفضائية (MODIS, VIIRS, GEDI, OCO-2, SMAP) بمسح كوكب الأرض بشكل مستمر، لقياس درجات الحرارة، انبعاثات الكربون، الغطاء النباتي، ورطوبة التربة عبر أطياف ضوئية ورادارية متقدمة.":"NASA orbital constellations (MODIS, VIIRS, OCO-2, GEDI, and SMAP) continuously monitor planetary vital signs—measuring thermal radiance, carbon flux, aerosol density, and moisture levels.",bulletPoints:i?["تغطية عالمية بدقة عالية","قياسات طيفية متعددة الأطوال","تحديثات مستمرة عبر شبكات GIBS و POWER"]:["Continuous global orbital telemetry","Multi-spectral & radiometric measurements","Calibrated geophysical datasets (ppm, Kelvin, AOD)"]},{step:"02",title:i?"التحويل الرياضي والموسيقي":"TRANSFORM",subtitle:i?"خوارزميات تحويل القياسات الفيزيائية إلى ترددات ونغمات":"Data-to-Sound Translation",icon:Kd,badge:"SONIFICATION ALGORITHMS",description:i?"نقوم بتحويل الأرقام الخام إلى خصائص صوتية دقيقة: تتطابق قيم القياس المرتفعة مع ترددات نغمية أعلى، وتحدد كثافة الظواهر جرس الصوت وطبقاته الهارمونية، لإنتاج مقياس خماسي مريح للأذن يسهل تمييزه.":"Scientific metrics are systematically mapped into acoustic parameters: numerical intensity scales to pitch frequency (Hz), variability governs timbre and resonance, and time steps translate into tempo.",bulletPoints:i?["المقياس الخماسي لضمان انسجام النغمات","تلوين نغمي يعبر عن طبيعة كل ظاهرة","حساب الفروق المعيارية لإبراز الأنماط الشاذة"]:["Harmonic pentatonic quantization for acoustic clarity","Timbral synthesis reflecting instrument physics","Auditory cues for historical records and anomalies"]},{step:"03",title:i?"الاستماع والإدراك الحسي":"LISTEN",subtitle:i?"اكتشاف التغيرات المناخية عبر حاسة السمع":"Auditory Planetary Insight",icon:bs,badge:"COGNITIVE PERCEPTION",description:i?'تمتلك الأذن البشرية قدرة استثنائية على تمييز التغيرات الطفيفة والأنماط المعقدة في التردد والإيقاع في نفس اللحظة، مما يتيح لك "سماع" تنفس الغابات مع الفصول وارتفاع حرارة المحيطات دون الحاجة لقراءة جداول معقدة.':"The human auditory system excels at detecting subtle micro-variations and temporal polyrhythms simultaneously—allowing listeners to hear seasonal biosphere breathing and oceanic circulation instinctively.",bulletPoints:i?["إدراك الأنماط الموسمية والدورات الطبيعية","اكتشاف فوري للمؤشرات المناخية القصوى","تجربة شاملة وشاملة لذوي التحديات البصرية"]:["Intuitive recognition of seasonal rhythms","Instant auditory detection of extreme events","Accessible exploration for visually impaired researchers"]}];return s.jsxs("section",{id:"science",className:"science-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:i?"كيف يتحول كوكب الأرض إلى معزوفة":"HOW IT WORKS"}),s.jsx("h2",{className:"section-title",children:i?"العلم خلف الصوت البيئي":"The Science of Sonification"}),s.jsx("p",{className:"section-subtitle",children:i?"رحلة البيانات من مجسات الفضاء إلى الأذن البشرية في ثلاث مراحل متتالية":"How raw NASA satellite observations are transformed into meaningful, harmonic acoustic landscapes."})]}),s.jsxs("div",{className:"science-pipeline-visual",children:[s.jsx("div",{className:"pipeline-flow-line"}),s.jsx("div",{className:"pipeline-nodes-grid",children:a.map((r,o)=>{const l=r.icon,c=e===o;return s.jsxs("div",{className:`pipeline-node-card ${c?"active":""}`,onClick:()=>t(o),role:"button",tabIndex:0,onKeyDown:d=>{d.key==="Enter"&&t(o)},children:[s.jsx("div",{className:"node-step-tag",children:r.step}),s.jsx("div",{className:"node-icon-bubble",children:s.jsx(l,{size:24})}),s.jsx("h3",{className:"node-step-title",children:r.title}),s.jsx("span",{className:"node-step-sub",children:r.subtitle}),o===0&&s.jsxs("div",{className:"node-anim-preview sat-orbit-anim",children:[s.jsx("div",{className:"orbit-track"}),s.jsx("div",{className:"orbiting-sat"}),s.jsx("div",{className:"beaming-pulses"})]}),o===1&&s.jsxs("div",{className:"node-anim-preview wave-bars-anim",children:[s.jsx("span",{className:"wave-bar b1"}),s.jsx("span",{className:"wave-bar b2"}),s.jsx("span",{className:"wave-bar b3"}),s.jsx("span",{className:"wave-bar b4"}),s.jsx("span",{className:"wave-bar b5"})]}),o===2&&s.jsxs("div",{className:"node-anim-preview ripple-circle-anim",children:[s.jsx("span",{className:"sound-ripple r1"}),s.jsx("span",{className:"sound-ripple r2"}),s.jsx("span",{className:"sound-ripple r3"})]})]},r.step)})})]}),s.jsxs("div",{className:"science-detail-card",children:[s.jsxs("div",{className:"detail-card-header",children:[s.jsx("div",{className:"detail-step-badge",children:a[e].badge}),s.jsxs("h3",{className:"detail-title",children:[a[e].title," — ",a[e].subtitle]})]}),s.jsx("p",{className:"detail-description",children:a[e].description}),s.jsx("div",{className:"detail-bullets-grid",children:a[e].bulletPoints.map((r,o)=>s.jsxs("div",{className:"bullet-item",children:[s.jsx(Ql,{size:16,className:"bullet-check"}),s.jsx("span",{children:r})]},o))})]})]})}const Ki=[{id:"aerosols",name:"Aerosol Optical Depth (AOD & PM2.5)",nameAr:"عمق الأيروسول البصري وجودة الهواء",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA GEOS / MODIS Terra & Aqua",unit:"Optical Depth (Unitless) & μg/m³",range:"0.05 – 1.20 AOD",description:"Tracks particulate matter, dust storms, industrial smog, and wildfire smoke suspended across the atmosphere, revealing air quality variations.",descriptionAr:"رصد الجسيمات الدقيقة، العواصف الغبارية، ودخان الحرائق في الغلاف الجوي لتوضيح تباين جودة الهواء وتأثيرها التنفسي.",icon:As,color:"#38bdf8",soundProfile:"Airy flute and gentle noise breeze; higher frequencies indicate dense smog and severe pollution events.",soundProfileAr:"نغمات هوائية سلسة، ترتفع حدتها كلما زادت كثافة الجسيمات العالقة والتلوث الصناعي."},{id:"carbon",name:"Atmospheric Carbon Dioxide (CO₂)",nameAr:"ثاني أكسيد الكربون في الغلاف الجوي",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA OCO-2 / DYAMOND Simulation",unit:"Parts Per Million (ppm)",range:"390 – 425 ppm",description:"High-resolution global column measurements capturing the annual seasonal photosynthetic drawdown by Northern forests and long-term emission trends.",descriptionAr:"قياسات دقيقة لتركيز الكربون ترصد التنفس السنوي للغابات ودورات التمثيل الضوئي مع التزايد التراكمي المستمر.",icon:Dd,color:"#f97316",soundProfile:"Rich resonant warm drone with rhythmic annual undulations reflecting seasonal biospheric breathing.",soundProfileAr:"نغمات دافئة متناغمة تعكس تنفس المحيط الحيوي للأرض وامتصاص النباتات للكربون صيفاً."},{id:"ocean",name:"Sea Surface Currents & Temperature",nameAr:"تيارات وحرارة سطح المحيطات",category:"ocean",categoryName:"Ocean",categoryNameAr:"المحيطات",sensor:"NASA ECCO-2 / Perpetual Ocean",unit:"Degrees Celsius (°C) & m/s",range:"-2°C to +32°C",description:"Simulates fluid planetary thermal dynamics, Western boundary currents (Gulf Stream, Kuroshio), and immense heat conveyor transport across world oceans.",descriptionAr:"محاكاة التيارات المائية الدوارة وتيار الخليج الدافئ الذي ينقل الطاقة الحرارية من خط الاستواء نحو القطبين.",icon:Mo,color:"#06b6d4",soundProfile:"Deep aquatic marimba and sweeping liquid sub-oscillations whose tempo echoes oceanic kinetic energy.",soundProfileAr:"أصوات ماريمبا مائية عميقة مع تموجات تعكس حركة الدوامات البحرية والطاقة الحركية."},{id:"precip",name:"Atmospheric Rivers & Precipitation",nameAr:"الأنهار الجوية ومعدلات الهطول",category:"atmosphere",categoryName:"Atmosphere",categoryNameAr:"الغلاف الجوي",sensor:"NASA GPM (Global Precipitation Measurement)",unit:"Millimeters per Hour (mm/h)",range:"0 – 85 mm/h",description:"Long plumes of dense atmospheric moisture carrying the equivalent flow of the Amazon river across skies, triggering torrential rain and vital snowpacks.",descriptionAr:"أعمدة هائلة من بخار الماء في الغلاف الجوي تعادل تدفق نهر الأمازون، تسبب هطول أمطار غزيرة وثلوج جبلية حيوية.",icon:tc,color:"#818cf8",soundProfile:"Crystalline glockenspiel droplets accelerating into rhythmic storm cascades during intense precipitation pulses.",soundProfileAr:"نغمات رنين بلورية تتسارع مع تدفق قطرات المطر وغزارة العواصف الرعدية."},{id:"nightlights",name:"Earth Night Lights & Human Energy",nameAr:"أضواء الأرض الليلية ونشاط الطاقة",category:"environment",categoryName:"Human Environment",categoryNameAr:"البيئة البشرية",sensor:"Suomi NPP VIIRS Day-Night Band",unit:"Radiance (nW/cm²·sr)",range:"0.1 – 150 nW",description:"Ten-year decadal record (2012–2023) tracking global electrification, urban growth, transit arteries, and localized energy grid disruptions.",descriptionAr:"سجل زمني لتوثيق نمو المدن وشبكات الكهرباء وتوسع النشاط البشري وانقطاعات الطاقة عبر عقد كامل.",icon:zd,color:"#fbbf24",soundProfile:"Warm analog synthesizer pulses with rising brightness and harmonic overtone complexity in dense metropolitan centers.",soundProfileAr:"نبضات سنثسايزر دافئة تزداد سطوعاً وتعقيداً مع كثافة التجمعات الحضرية والإضاءة."},{id:"ice",name:"Cryosphere & Polar Sea Ice Extent",nameAr:"الغطاء الجليدي القطبي والبحري",category:"environment",categoryName:"Cryosphere",categoryNameAr:"البيئة الجليدية",sensor:"NASA NSIDC / SSMIS Microwave",unit:"Million Square Kilometers (M km²)",range:"3.5 – 16.0 M km²",description:"Decadal satellite microwave sensing documenting the minimum and maximum Arctic and Antarctic freeze-thaw cycles and albedo dynamics.",descriptionAr:"قياسات رادارية ميكروويفية توثق انكماش واتساع الجليد في القطبين وتأثيره على انعكاس الإشعاع الشمسي.",icon:fc,color:"#a5f3fc",soundProfile:"Chilled glass bell harmonics with descending fundamental frequencies illustrating multi-year ice loss.",soundProfileAr:"أجراس زجاجية نقية تنخفض طبقتها تدريجياً لتعكس ذوبان الجليد القديم وتراجع المساحات."}];function E0({lang:n="en",onSelectDataset:e}){const[t,i]=C.useState("all"),[a,r]=C.useState(Ki[0].id),o=n==="ar",l=[{id:"all",label:o?"جميع البيانات":"All Datasets"},{id:"atmosphere",label:o?"الغلاف الجوي":"Atmosphere"},{id:"ocean",label:o?"المحيطات والمياه":"Ocean"},{id:"environment",label:o?"المناخ والبيئة":"Climate & Land"}],c=t==="all"?Ki:Ki.filter(m=>m.category===t),d=Ki.find(m=>m.id===a)||Ki[0],h=m=>{e==null||e(m);const u=document.getElementById("studio");u&&u.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("section",{id:"explore",className:"explore-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:o?"كتالوج ناسا العلمي":"OBSERVATIONAL CATALOG"}),s.jsx("h2",{className:"section-title",children:o?"استكشف بيانات الأرض":"Explore Earth Data"}),s.jsx("p",{className:"section-subtitle",children:o?"مجموعات بيانات علمية موثقة من أقمار ناسا ومراكز أبحاث الغلاف الجوي والمحيطات جاهزة للاستماع":"Select a verified NASA satellite observation dataset to inspect its physical parameters and auditory profile."})]}),s.jsx("div",{className:"category-filter-bar",children:l.map(m=>s.jsx("button",{onClick:()=>i(m.id),className:`cat-pill-btn ${t===m.id?"active":""}`,children:m.label},m.id))}),s.jsx("div",{className:"datasets-grid",children:c.map(m=>{const u=m.icon,g=m.id===a;return s.jsxs("div",{className:`dataset-card ${g?"selected":""}`,onClick:()=>r(m.id),children:[s.jsxs("div",{className:"card-top-row",children:[s.jsx("div",{className:"card-icon-tag",style:{color:m.color,background:`${m.color}18`},children:s.jsx(u,{size:20})}),s.jsx("span",{className:"card-cat-badge",children:o?m.categoryNameAr:m.categoryName})]}),s.jsx("h3",{className:"card-dataset-title",children:o?m.nameAr:m.name}),s.jsx("p",{className:"card-dataset-desc",children:o?m.descriptionAr:m.description}),s.jsxs("div",{className:"card-metrics-box",children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"lbl",children:o?"المستشعر الفضائي:":"Sensor / Source:"}),s.jsx("span",{className:"val",children:m.sensor})]}),s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"lbl",children:o?"وحدة القياس:":"Measurement Range:"}),s.jsx("span",{className:"val",children:m.range})]})]}),s.jsx("div",{className:"card-actions-row",children:s.jsxs("button",{onClick:x=>{x.stopPropagation(),h(m.id)},className:"card-explore-btn",children:[s.jsx(Cn,{size:15,fill:"currentColor"}),s.jsx("span",{children:o?"تجربة في استوديو الصوت":"Explore in Studio"}),s.jsx(So,{size:14,className:"arrow-launch"})]})})]},m.id)})}),d&&s.jsxs("div",{className:"dataset-deepdive-banner",children:[s.jsx("div",{className:"deepdive-icon-col",style:{color:d.color},children:s.jsx(d.icon,{size:36})}),s.jsxs("div",{className:"deepdive-info-col",children:[s.jsx("div",{className:"deepdive-badge",children:o?"الملف الصوتي العلمي المخصص":"Scientific Sound Mapping Profile"}),s.jsx("h4",{className:"deepdive-title",children:o?d.nameAr:d.name}),s.jsx("p",{className:"deepdive-text",children:o?d.soundProfileAr:d.soundProfile})]}),s.jsx("div",{className:"deepdive-cta-col",children:s.jsxs("button",{onClick:()=>h(d.id),className:"deepdive-launch-btn",children:[s.jsx(Cn,{size:16,fill:"currentColor"}),s.jsx("span",{children:o?"افتح في الاستوديو الآن":"Load in Sonification Studio"})]})})]})]})}const A0=[{id:"all",labelEn:"All Showcases",labelAr:"جميع المعارض"},{id:"human",labelEn:"Human Impact & Urban",labelAr:"النشاط البشري والمدن"},{id:"atmosphere",labelEn:"Atmosphere & Weather",labelAr:"الغلاف الجوي والطقس"},{id:"oceans",labelEn:"Oceans & Circulation",labelAr:"المحيطات والتيارات"},{id:"polar",labelEn:"Cryosphere & Polar",labelAr:"الغطاء الجليدي والقطبان"}],Et=[{id:"night-lights-decade",svsId:5276,category:"human",titleEn:"Change in Night Lights (2012–2023)",titleAr:"تغير أضواء الليل العالمية (2012–2023)",subtitleEn:"Decade-long global urbanization and electrification dynamics",subtitleAr:"ديناميكيات التحضر والكهرباء العالمية على مدار عقد",shortDescriptionEn:"Using NASA Black Marble nighttime lights data from VIIRS, this visualization maps a decade of human activity, urban expansion, and socioeconomic shifts from 2012 through 2023.",shortDescriptionAr:"باستخدام بيانات الرخام الأسود التابع لناسا من مستشعر VIIRS، ترصد هذه المحاكاة عقدًا من النشاط البشري والتوسع الحضري والتغيرات التنموية من 2012 حتى 2023.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat_2160p30.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat.02599_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5276/",phenomenon:"Anthropogenic Nighttime Radiance & Urban Development",phenomenonAr:"الإشعاع الليلي الاصطناعي والتطور العمراني",datasetName:"NASA Black Marble (VNP46A4 Annual Composite Suite)",dataProvider:"NASA Goddard Space Flight Center / Terrestrial Information Systems Laboratory",instrument:"VIIRS Day/Night Band (DNB) aboard Suomi-NPP & NOAA-20",primaryVariable:"Mean Calibrated Nighttime Radiance",unitEn:"nW · cm⁻² · sr⁻¹ (Nanowatts per cm² per steradian)",unitShort:"nW/(cm²·sr)",geographicCoverage:"Global (90°N – 90°S, 180°W – 180°E)",temporalCoverage:"2012 – 2023 (Annual Observation Cadence)",dataCollectionMethod:"Satellite radiometry calibrated for lunar illumination, stray light, atmospheric scattering, and cloud obscuration.",dataType:"Calibrated Satellite Observation",durationSeconds:44,dataCadence:"yearly",timePoints:[{timestamp:0,year:2012,label:"2012 Baseline"},{timestamp:3.5,year:2013,label:"2013"},{timestamp:7,year:2014,label:"2014"},{timestamp:10.5,year:2015,label:"2015"},{timestamp:14,year:2016,label:"2016"},{timestamp:17.5,year:2017,label:"2017"},{timestamp:21,year:2018,label:"2018"},{timestamp:24.5,year:2019,label:"2019"},{timestamp:28,year:2020,label:"2020 (Pandemic Dip)"},{timestamp:31.5,year:2021,label:"2021 (Recovery)"},{timestamp:35,year:2022,label:"2022"},{timestamp:38.5,year:2023,label:"2023"},{timestamp:44,year:2023,label:"Net Decade Change"}],graphConfig:{chartType:"line",yAxisLabel:"Radiance [nW · cm⁻² · sr⁻¹]",series:[{key:"globalMean",nameEn:"Global Mean Radiance",nameAr:"متوسط الإشعاع العالمي",color:"#38bdf8",fill:!0,data:[{x:"2012",y:14.21,timestamp:0},{x:"2013",y:14.54,timestamp:3.5},{x:"2014",y:15.12,timestamp:7},{x:"2015",y:15.78,timestamp:10.5},{x:"2016",y:16.39,timestamp:14},{x:"2017",y:17.15,timestamp:17.5},{x:"2018",y:17.96,timestamp:21},{x:"2019",y:18.68,timestamp:24.5},{x:"2020",y:18.19,timestamp:28},{x:"2021",y:19.42,timestamp:31.5},{x:"2022",y:20.08,timestamp:35},{x:"2023",y:20.76,timestamp:38.5}]},{key:"southAsia",nameEn:"Rapid Electrification (South Asia)",nameAr:"التوسع الكهربائي السريع (جنوب آسيا)",color:"#a855f7",fill:!1,data:[{x:"2012",y:18.4,timestamp:0},{x:"2013",y:19.3,timestamp:3.5},{x:"2014",y:21.1,timestamp:7},{x:"2015",y:23.4,timestamp:10.5},{x:"2016",y:25.8,timestamp:14},{x:"2017",y:28.3,timestamp:17.5},{x:"2018",y:31.2,timestamp:21},{x:"2019",y:33.7,timestamp:24.5},{x:"2020",y:32.1,timestamp:28},{x:"2021",y:35.6,timestamp:31.5},{x:"2022",y:37.9,timestamp:35},{x:"2023",y:40.2,timestamp:38.5}]}]}},{id:"geos-aerosols-2017",svsId:30910,category:"atmosphere",titleEn:"GEOS Aerosols: 2017 Hurricane Season",titleAr:"محاكاة الهباء الجوي GEOS: موسم أعاصير 2017",subtitleEn:"Long-range transport of sea salt, smoke, and Saharan dust",subtitleAr:"الانتقال الجوي بعيد المدى لملح البحر والدخان وغبار الصحراء",shortDescriptionEn:"NASA GEOS high-resolution simulation tracking sea salt, smoke, and dust transported across the Atlantic during the 2017 hurricane season (Hurricanes Harvey, Irma, and Maria).",shortDescriptionAr:"محاكاة فائقة الدقة لنظام GEOS تتبع جزيئات ملح البحر والدخان وغبار الصحراء المنقول عبر المحيط الأطلسي خلال موسم الأعاصير لعام 2017 (هارفي، إيرما، وماريا).",videoUrl:"https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.01000_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/30910/",phenomenon:"Atmospheric Aerosol Dispersion & Tropical Cyclone Interactions",phenomenonAr:"تشتت الهباء الجوي وتفاعلات الأعاصير المدارية",datasetName:"GEOS-5 Forward Processing (FP) Atmospheric Composition",dataProvider:"NASA Goddard Space Flight Center / Global Modeling and Assimilation Office (GMAO)",instrument:"Goddard Earth Observing System (GEOS) Earth System Model with assimilated MODIS/VIIRS AOD",primaryVariable:"Total & Speciated Aerosol Optical Depth (AOD at 550nm)",unitEn:"Dimensionless Optical Depth / Column Density (mg · m⁻²)",unitShort:"AOD (550nm)",geographicCoverage:"North Atlantic Ocean, Gulf of Mexico, North America, and Western Sahara",temporalCoverage:"July 31, 2017 – November 1, 2017 (Daily Progression)",dataCollectionMethod:"Numerical global climate model constrained with satellite optical depth assimilations.",dataType:"Assimilated Numerical Model Simulation",durationSeconds:45,dataCadence:"daily",timePoints:[{timestamp:0,date:"2017-07-31",label:"Jul 31: Baseline"},{timestamp:7,date:"2017-08-15",label:"Aug 15: Saharan Dust Outbreak"},{timestamp:12,date:"2017-08-25",label:"Aug 25: Hurricane Harvey Landfall"},{timestamp:17,date:"2017-09-06",label:"Sep 06: Hurricane Irma Peak"},{timestamp:23,date:"2017-09-20",label:"Sep 20: Hurricane Maria Landfall"},{timestamp:32,date:"2017-10-10",label:"Oct 10: PNW Wildfire Smoke Plume"},{timestamp:45,date:"2017-11-01",label:"Nov 01: Seasonal Cessation"}],graphConfig:{chartType:"line",yAxisLabel:"Aerosol Optical Depth [AOD 550nm]",series:[{key:"seaSalt",nameEn:"Sea Salt Aerosol (Vortex Spray)",nameAr:"هباء ملح البحر (رذاذ الأعاصير)",color:"#38bdf8",fill:!1,data:[{x:"Jul 31",y:.18,timestamp:0},{x:"Aug 10",y:.22,timestamp:4.8},{x:"Aug 20",y:.35,timestamp:9.7},{x:"Aug 25",y:.89,timestamp:12.1},{x:"Aug 30",y:.44,timestamp:14.5},{x:"Sep 06",y:1.34,timestamp:17.4},{x:"Sep 12",y:.62,timestamp:20.3},{x:"Sep 20",y:1.15,timestamp:23.2},{x:"Sep 28",y:.48,timestamp:27.1},{x:"Oct 10",y:.31,timestamp:32.9},{x:"Oct 22",y:.25,timestamp:38.7},{x:"Nov 01",y:.19,timestamp:45}]},{key:"smoke",nameEn:"Carbonaceous Smoke (Wildfires)",nameAr:"دخان الكربون (حرائق الغابات)",color:"#f97316",fill:!1,data:[{x:"Jul 31",y:.12,timestamp:0},{x:"Aug 10",y:.15,timestamp:4.8},{x:"Aug 20",y:.28,timestamp:9.7},{x:"Aug 25",y:.31,timestamp:12.1},{x:"Aug 30",y:.38,timestamp:14.5},{x:"Sep 06",y:.42,timestamp:17.4},{x:"Sep 12",y:.51,timestamp:20.3},{x:"Sep 20",y:.39,timestamp:23.2},{x:"Sep 28",y:.47,timestamp:27.1},{x:"Oct 10",y:.94,timestamp:32.9},{x:"Oct 22",y:.42,timestamp:38.7},{x:"Nov 01",y:.16,timestamp:45}]},{key:"dust",nameEn:"Saharan Mineral Dust",nameAr:"غبار الصحراء الكبرى",color:"#eab308",fill:!1,data:[{x:"Jul 31",y:.45,timestamp:0},{x:"Aug 10",y:.68,timestamp:4.8},{x:"Aug 20",y:.55,timestamp:9.7},{x:"Aug 25",y:.38,timestamp:12.1},{x:"Aug 30",y:.42,timestamp:14.5},{x:"Sep 06",y:.76,timestamp:17.4},{x:"Sep 12",y:.61,timestamp:20.3},{x:"Sep 20",y:.45,timestamp:23.2},{x:"Sep 28",y:.34,timestamp:27.1},{x:"Oct 10",y:.28,timestamp:32.9},{x:"Oct 22",y:.22,timestamp:38.7},{x:"Nov 01",y:.18,timestamp:45}]}]}},{id:"perpetual-ocean-2",svsId:5425,category:"oceans",titleEn:"Perpetual Ocean 2: Western Boundary Currents",titleAr:"المحيط الدائم 2: تيارات الحدود الغربية",subtitleEn:"3D circulation of the Kuroshio, Agulhas, and Gulf Stream",subtitleAr:"الدوران ثلاثي الأبعاد لتيارات كوروشيو وأغولياس وتيار الخليج",shortDescriptionEn:"Using NASA JPL ECCO-2 high-resolution ocean models, this visualization highlights heat transport and deep return flows across the world's most powerful western boundary currents.",shortDescriptionAr:"باستخدام نماذج ECCO-2 عالية الدقة من مختبر الدفع النفاث بناسا، توضح هذه المحاكاة نقل الحرارة وتدفقات العودة العميقة عبر أقوى تيارات المحيطات.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_6840x3420_768p30-d1.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_2028x1024.25000.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/3912/",phenomenon:"Western Boundary Currents & Oceanic Heat Transport",phenomenonAr:"تيارات الحدود الغربية ونقل الحرارة بالمحيطات",datasetName:"ECCO-2 (Estimating the Circulation and Climate of the Ocean, Phase II)",dataProvider:"NASA Jet Propulsion Laboratory (JPL), MIT, and UT Austin",instrument:"MIT general circulation model (MITgcm) synthesizing satellite altimetry, Argo floats, and CTD probes",primaryVariable:"Current Velocity & Temperature Profile",unitEn:"Surface Velocity (m · s⁻¹), Temperature (°C)",unitShort:"m/s & °C",geographicCoverage:"Global Oceans (Kuroshio, Agulhas Retroflection, North Atlantic Gulf Stream)",temporalCoverage:"2021 – 2023 Multi-Year High-Resolution Velocity Fields",dataCollectionMethod:"Synthesized physics-based oceanic general circulation model with 4D-Var data assimilation.",dataType:"Assimilated Ocean Circulation Model",durationSeconds:150,dataCadence:"geographic-tour",timePoints:[{timestamp:0,label:"0:00 - Global Earth Rotation"},{timestamp:35,label:"0:35 - Western Pacific & Kuroshio Current"},{timestamp:75,label:"1:15 - Indian Ocean & Agulhas Retroflection"},{timestamp:110,label:"1:50 - North Atlantic & Gulf Stream Core"},{timestamp:135,label:"2:15 - Subsurface Return Flow (<600m)"},{timestamp:150,label:"2:30 - Global Ocean Heat Redistribution"}],graphConfig:{chartType:"line",yAxisLabel:"Current Flow Velocity [m · s⁻¹]",series:[{key:"velocity",nameEn:"Current Flow Velocity (m/s)",nameAr:"سرعة تدفق التيار (م/ث)",color:"#06b6d4",fill:!0,data:[{x:"Global Orbit",y:.32,timestamp:0},{x:"W. Pacific Entry",y:.74,timestamp:20},{x:"Kuroshio Core",y:1.85,timestamp:38},{x:"Kuroshio Meander",y:1.2,timestamp:55},{x:"Agulhas Entry",y:1.45,timestamp:75},{x:"Agulhas Ring Shedding",y:1.95,timestamp:92},{x:"Florida Straits",y:2.15,timestamp:110},{x:"Gulf Stream Core",y:2.52,timestamp:122},{x:"Deep Return (<600m)",y:.42,timestamp:138},{x:"North Atlantic Drift",y:.65,timestamp:150}]},{key:"temperature",nameEn:"Core Water Temperature (°C / 10)",nameAr:"درجة حرارة مياه التيار (°م / 10)",color:"#f43f5e",fill:!1,data:[{x:"Global Orbit",y:1.6,timestamp:0},{x:"W. Pacific Entry",y:2.1,timestamp:20},{x:"Kuroshio Core",y:2.45,timestamp:38},{x:"Kuroshio Meander",y:2.2,timestamp:55},{x:"Agulhas Entry",y:2.35,timestamp:75},{x:"Agulhas Ring Shedding",y:2.15,timestamp:92},{x:"Florida Straits",y:2.75,timestamp:110},{x:"Gulf Stream Core",y:2.68,timestamp:122},{x:"Deep Return (<600m)",y:.48,timestamp:138},{x:"North Atlantic Drift",y:1.42,timestamp:150}]}]}},{id:"dyamond-co2-transport",svsId:5196,category:"atmosphere",titleEn:"DYAMOND: Atmospheric Carbon Dioxide Transport",titleAr:"مشروع DYAMOND: حركة ثاني أكسيد الكربون في الغلاف الجوي",subtitleEn:"High-resolution global simulation of CO₂ plumes from power plants and fires",subtitleAr:"محاكاة عالمية فائقة الدقة لانبعاثات CO₂ من محطات الطاقة والحرائق",shortDescriptionEn:"Supercomputer simulation from NASA GEOS showing 3D atmospheric CO₂ movement from January through March 2020, revealing the synoptic connection between urban emissions and weather systems.",shortDescriptionAr:"محاكاة حاسوبية عملاقة من نموذج NASA GEOS توضح حركة CO₂ في الغلاف الجوي من يناير حتى مارس 2020، كاشفة العلاقة بين الانبعاثات الحضرية وأنظمة الطقس.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_3-29-2023a_dyamond_co2_anim_globe_zoom_1080p30.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_12-1-2023b_dyamond_co2_anim_globe_orbit_3x3Hyperwall.00200_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5196/",phenomenon:"Atmospheric Greenhouse Gas Transport & Synoptic Weather Advection",phenomenonAr:"انتقال غازات الدفيئة في الغلاف الجوي وحركة الكتل الهوائية",datasetName:"DYAMOND Phase II GEOS Ultra-High Resolution Atmosphere Simulation",dataProvider:"NASA Goddard Space Flight Center / GMAO & Carbon Cycle Science",instrument:"GEOS Atmospheric General Circulation Model assimilating OCO-2 satellite retrievals",primaryVariable:"Atmospheric Carbon Dioxide Mixing Ratio (XCO₂)",unitEn:"Parts Per Million (ppm)",unitShort:"ppm",geographicCoverage:"Global (3km ultra-high resolution horizontal grid)",temporalCoverage:"January 1, 2020 – March 31, 2020 (Winter-Spring Synoptic Window)",dataCollectionMethod:"Atmospheric general circulation simulation resolving individual convective systems and emission plumes.",dataType:"High-Resolution Earth System Model Simulation",durationSeconds:30,dataCadence:"daily-seasonal",timePoints:[{timestamp:0,date:"2020-01-01",label:"Jan 01: Baseline Mixing Ratio"},{timestamp:6,date:"2020-01-20",label:"Jan 20: Mid-Latitude Cyclone Advection"},{timestamp:13,date:"2020-02-10",label:"Feb 10: Urban Industrial Plume Peak"},{timestamp:20,date:"2020-03-01",label:"Mar 01: Equatorial Biomass Burning"},{timestamp:26,date:"2020-03-20",label:"Mar 20: Spring Maximum Concentration"},{timestamp:30,date:"2020-03-31",label:"Mar 31: Pre-Photosynthetic Drawdown"}],graphConfig:{chartType:"line",yAxisLabel:"CO₂ Concentration [ppm]",series:[{key:"nhMidLatitude",nameEn:"Northern Hemisphere Mid-Latitudes (Industrial Plumes)",nameAr:"العروض المتوسطة بنصف الكرة الشمالي (الانبعاثات الصناعية)",color:"#ef4444",fill:!0,data:[{x:"Jan 01",y:414.2,timestamp:0},{x:"Jan 10",y:414.8,timestamp:3.3},{x:"Jan 20",y:415.6,timestamp:6.6},{x:"Feb 01",y:416.3,timestamp:10},{x:"Feb 10",y:417.1,timestamp:13.3},{x:"Feb 20",y:417.9,timestamp:16.6},{x:"Mar 01",y:418.5,timestamp:20},{x:"Mar 10",y:419.2,timestamp:23.3},{x:"Mar 20",y:419.8,timestamp:26.6},{x:"Mar 31",y:420.3,timestamp:30}]},{key:"globalMean",nameEn:"Global Background Mean (Mauna Loa Reference)",nameAr:"المتوسط المرجعي العالمي (مرصد مونا لوا)",color:"#10b981",fill:!1,data:[{x:"Jan 01",y:413.4,timestamp:0},{x:"Jan 10",y:413.7,timestamp:3.3},{x:"Jan 20",y:414.1,timestamp:6.6},{x:"Feb 01",y:414.6,timestamp:10},{x:"Feb 10",y:415,timestamp:13.3},{x:"Feb 20",y:415.4,timestamp:16.6},{x:"Mar 01",y:415.9,timestamp:20},{x:"Mar 10",y:416.3,timestamp:23.3},{x:"Mar 20",y:416.7,timestamp:26.6},{x:"Mar 31",y:417.1,timestamp:30}]}]}},{id:"atmospheric-river-3d",svsId:4960,category:"atmosphere",titleEn:"3D View of an Atmospheric River",titleAr:"رؤية ثلاثية الأبعاد للنهر الجوي",subtitleEn:"Moisture transport and heavy precipitation in the Pineapple Express",subtitleAr:"نقل الرطوبة والهطول الغزير في ظاهرة قطار الأناناس السريع",shortDescriptionEn:"Using NASA MERRA-2 reanalysis, this 3D animation visualizes an atmospheric river channeling massive tropical water vapor across the Pacific, impacting western North America with extreme precipitation.",shortDescriptionAr:"باستخدام إعادة تحليل MERRA-2 من ناسا، تجسد هذه المحاكاة ثلاثية الأبعاد نهراً جوياً ينقل بخار الماء المداري الهائل عبر المحيط الهادئ نحو الساحل الغربي لأمريكا.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_HD.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_4k.00090_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/4960/",phenomenon:"Atmospheric River Moisture Transport & Orographic Rainfall",phenomenonAr:"نقل الرطوبة عبر الأنهار الجوية والهطول التضاريسي",datasetName:"MERRA-2 (Modern-Era Retrospective analysis for Research and Applications, Version 2)",dataProvider:"NASA Global Modeling and Assimilation Office (GMAO)",instrument:"NASA Goddard Earth Observing System with assimilated sounders, radiometers, and surface stations",primaryVariable:"Integrated Water Vapor Transport (IVT) & Precipitation",unitEn:"IVT (kg · m⁻¹ · s⁻¹), Precipitation Rate (mm · hr⁻¹)",unitShort:"kg/(m·s) & mm/hr",geographicCoverage:"Eastern Pacific Ocean, Hawaii to California and Pacific Northwest",temporalCoverage:"Extreme Atmospheric River Event Progression",dataCollectionMethod:"Modern atmospheric reanalysis combining multisatellite microwave and infrared observations with numerical weather forecasting.",dataType:"Atmospheric Reanalysis Blend",durationSeconds:120,dataCadence:"event-lifecycle",timePoints:[{timestamp:0,label:"0:00 - Tropical ITCZ Moisture Convergence"},{timestamp:25,label:"0:25 - Pressure Gradient Funneling (Hawaiian Origin)"},{timestamp:50,label:"0:50 - Jet Stream Advection Across Pacific Corridor"},{timestamp:75,label:"1:15 - Coastal Landfall & Cold Front Condensation"},{timestamp:95,label:"1:35 - Orographic Lift over Coastal Mountain Ranges"},{timestamp:120,label:"2:00 - Snowpack Buildup & Hydrologic Replenishment"}],graphConfig:{chartType:"line",yAxisLabel:"Water Vapor Transport [kg · m⁻¹ · s⁻¹]",series:[{key:"ivt",nameEn:"Integrated Vapor Transport (IVT)",nameAr:"نقل بخار الماء المتكامل (IVT)",color:"#3b82f6",fill:!0,data:[{x:"Tropical Genesis",y:280,timestamp:0},{x:"Pacific Corridor",y:460,timestamp:25},{x:"Mid-Ocean Funnel",y:720,timestamp:50},{x:"Landfall Peak (Cat 4)",y:1040,timestamp:75},{x:"Mountain Interception",y:580,timestamp:95},{x:"Inland Dissipation",y:210,timestamp:120}]},{key:"rainRate",nameEn:"Coastal Precipitation Rate (mm/hr × 20)",nameAr:"معدل الهطول الساحلي (ملم/س × 20)",color:"#0284c7",fill:!1,data:[{x:"Tropical Genesis",y:40,timestamp:0},{x:"Pacific Corridor",y:80,timestamp:25},{x:"Mid-Ocean Funnel",y:160,timestamp:50},{x:"Landfall Peak (Cat 4)",y:480,timestamp:75},{x:"Mountain Interception",y:320,timestamp:95},{x:"Inland Dissipation",y:60,timestamp:120}]}]}},{id:"antarctic-sea-ice",svsId:5064,category:"polar",titleEn:"Daily Antarctic Sea Ice Extent",titleAr:"امتداد الجليد البحري اليومي في القارة القطبية الجنوبية",subtitleEn:"Annual freeze and melt cycles captured by satellite radiometry",subtitleAr:"دورات التجمد والذوبان السنوية عبر مقاييس الإشعاع الفضائية",shortDescriptionEn:"Produced by NASA Cryospheric Sciences, this high-contrast visualization follows the daily expansion and retreat of Antarctic sea ice through annual minimums and maximums.",shortDescriptionAr:"من إنتاج مختبر العلوم الجليدية بناسا، ترصد هذه المحاكاة التمدد والتقلص اليومي للجليد البحري حول القارة القطبية الجنوبية عبر فصول التجمد والذوبان.",videoUrl:"https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.mp4",previewImage:"https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.00001_print.jpg",sourceUrl:"https://svs.gsfc.nasa.gov/5064/",phenomenon:"Cryospheric Polar Ice Dynamics & Seasonal Feedback",phenomenonAr:"ديناميكيات الجليد القطبي ودورات التغذية الراجعة المناخية",datasetName:"NASA Cryospheric Sciences / NSIDC Sea Ice Index",dataProvider:"NASA Goddard Space Flight Center Cryospheric Sciences Laboratory & NSIDC",instrument:"Passive Microwave Radiometers (DMSP SSM/I-SSMIS and AMSR-2)",primaryVariable:"Daily Sea Ice Extent (areas with ≥15% ice concentration)",unitEn:"Million Square Kilometers (10⁶ km²)",unitShort:"10⁶ km²",geographicCoverage:"Southern Ocean and Antarctic Circumpolar Seas",temporalCoverage:"Daily Continuous Observation",dataCollectionMethod:"Multifrequency satellite passive microwave brightness temperature inversion.",dataType:"Direct Satellite Observation",durationSeconds:40,dataCadence:"daily-annual",timePoints:[{timestamp:0,label:"January: Mid-Summer Melt"},{timestamp:6.6,label:"February: Annual Minimum Extent (~2.2M km²)"},{timestamp:13.3,label:"April: Autumn Freeze Initiation"},{timestamp:20,label:"June: Polar Winter Expansion"},{timestamp:26.6,label:"August: Peak Growth Rate"},{timestamp:33.3,label:"September: Annual Maximum Extent (~18.5M km²)"},{timestamp:40,label:"December: Rapid Spring Retreat"}],graphConfig:{chartType:"line",yAxisLabel:"Sea Ice Extent [10⁶ km²]",series:[{key:"extent",nameEn:"Antarctic Sea Ice Extent (10⁶ km²)",nameAr:"امتداد الجليد البحري (مليون كم²)",color:"#38bdf8",fill:!0,data:[{x:"Jan",y:5.1,timestamp:0},{x:"Feb (Min)",y:2.2,timestamp:6.6},{x:"Mar",y:3.8,timestamp:10},{x:"Apr",y:7.2,timestamp:13.3},{x:"May",y:11.4,timestamp:16.6},{x:"Jun",y:14.8,timestamp:20},{x:"Jul",y:16.9,timestamp:23.3},{x:"Aug",y:17.8,timestamp:26.6},{x:"Sep (Max)",y:18.6,timestamp:33.3},{x:"Oct",y:17.2,timestamp:35.5},{x:"Nov",y:13.5,timestamp:37.8},{x:"Dec",y:8.9,timestamp:40}]},{key:"climatology",nameEn:"1981–2010 Historical Climatological Median",nameAr:"المعدل المناخي التاريخي (1981–2010)",color:"#94a3b8",fill:!1,data:[{x:"Jan",y:5.8,timestamp:0},{x:"Feb (Min)",y:2.8,timestamp:6.6},{x:"Mar",y:4.5,timestamp:10},{x:"Apr",y:8.1,timestamp:13.3},{x:"May",y:12.3,timestamp:16.6},{x:"Jun",y:15.6,timestamp:20},{x:"Jul",y:17.5,timestamp:23.3},{x:"Aug",y:18.5,timestamp:26.6},{x:"Sep (Max)",y:19.1,timestamp:33.3},{x:"Oct",y:18,timestamp:35.5},{x:"Nov",y:14.8,timestamp:37.8},{x:"Dec",y:9.8,timestamp:40}]}]}}],cd=n=>Et.find(e=>e.id===n)||Et[0],ms={air_aod:{resourceId:"geos-aerosols-2017",tagEn:"Direct Model Lineage",tagAr:"امتداد فيزيائي للنموذج",noteEn:"NASA GMAO GEOS Forward Processing. The MERRA-2 Aerosol Optical Depth (AOD) map above is produced by the exact same atmospheric modeling and data assimilation system (GEOS) illustrated in this original 2017 Hurricane Season transport visual.",noteAr:"معالجة الهباء الجوي بنموذج NASA GMAO GEOS. تستند طبقة MERRA-2 للعمق البصري للهباء في الخريطة أعلاه إلى نفس نظام نمذجة الغلاف الجوي واستيعاب البيانات (GEOS) الموضح في هذه المحاكاة الأصلية لموسم أعاصير 2017."},air_co:{resourceId:"dyamond-co2-transport",tagEn:"Combustion Tracer Comparison",tagAr:"مقارنة نواتج الاحتراق",noteEn:"Synoptic Advection of Carbon Plumes. While the AIRS instrument samples mid-tropospheric Carbon Monoxide (CO), this high-resolution DYAMOND GEOS simulation reveals how atmospheric circulation advects companion carbon dioxide (CO₂) plumes from fossil fuel emissions and wildfires.",noteAr:"حركة سحب الكربون مع الكتل الهوائية. بينما يرصد قمر AIRS أول أكسيد الكربون، تكشف محاكاة DYAMOND فائقة الدقة كيفية انتقال سحب ثاني أكسيد الكربون المرافقة من محطات الوقود والحرائق."},air_ozone:{resourceId:"dyamond-co2-transport",tagEn:"Atmospheric Gas Circulation",tagAr:"دوران الغازات الجوية",noteEn:"Global Atmospheric Trace Gas Dynamics. Illustrates the planetary-scale wave patterns and synoptic weather systems that steer both stratospheric ozone and tropospheric trace emissions.",noteAr:"ديناميكيات غازات الغلاف الجوي. يوضح تموجات الكتل الهوائية وأنظمة الطقس العالمية التي تتحكم في توزيع الأوزون وانبعاثات الغازات."},water_sst:{resourceId:"perpetual-ocean-2",tagEn:"Thermal Advection & Currents",tagAr:"نقل الحرارة وتيارات المحيط",noteEn:"Western Boundary Currents & Sea Surface Temperature. The MODIS Sea Surface Temperature patterns observed above are dynamically driven by the powerful oceanic thermal conveyor belts simulated in NASA JPL ECCO-2.",noteAr:"تيارات المحيطات وحرارة سطح البحر. تتطابق وتتأثر درجات حرارة سطح البحر المقاسة عبر MODIS أعلاه بنظام النقل الحراري للتيارات المائية المحاكى في نموذج ECCO-2 التابع لمختبر الدفع النفاث."},water_chlorophyll:{resourceId:"atmospheric-river-3d",tagEn:"Coastal Nutrient Influx",tagAr:"تدفق المغذيات الساحلية",noteEn:"Atmospheric River Landfall & Runoff. Extreme precipitation channeled by atmospheric rivers drives heavy river discharge into coastal basins, fueling phytoplankton blooms and sediment plumes detected by MODIS Aqua Chlorophyll-a.",noteAr:"هطول الأنهار الجوية والجريان السطحي. يؤدي الهطول الغزير للأنهار الجوية إلى تدفقات نهرية عملاقة نحو السواحل، مما يغذي ازدهار العوالق النباتية وترسبات الكلوروفيل المقاسة بقمر MODIS Aqua."},water_turbidity:{resourceId:"atmospheric-river-3d",tagEn:"Runoff Sediment & Plumes",tagAr:"عكارة المياه والسيول الساحلية",noteEn:"Hydrological Sediment Transport. Atmospheric river events induce flash flooding and severe sediment runoff directly visible as optical turbidity in true-color satellite imagery.",noteAr:"نقل الرواسب الهيدرولوجية. تتسبب الأنهار الجوية في سيول جارفة تنقل كميات هائلة من الطمي إلى المياه الساحلية، مسببة العكارة الواضحة في صور الأقمار الصناعية بالألوان الحقيقية."},soil_moisture:{resourceId:"atmospheric-river-3d",tagEn:"Precipitation Influx & Saturation",tagAr:"الهطول وتشبع رطوبة التربة",noteEn:"Atmospheric Moisture Influx to Soil. Massive moisture transport in atmospheric rivers makes landfall to deposit high-volume precipitation, directly driving SMAP surface soil moisture saturation spikes.",noteAr:"تدفق الرطوبة الجوية إلى التربة. يفرغ النهر الجوي كميات مياه ضخمة عند اصطدامه باليابسة، مما يسبب قفزات فورية في تشبع رطوبة التربة السطحية المسجلة عبر قمر SMAP."},soil_ndvi:{resourceId:"antarctic-sea-ice",tagEn:"Global Cryosphere & Biosphere Cycle",tagAr:"الدورة الحيوية والجليدية العالمية",noteEn:"Seasonal Solar & Surface Feedback. Tracks the seasonal pulsation of high-latitude ice and radiative albedo that balances regional continental vegetation greening (NDVI) and growing seasons.",noteAr:"تفاعل الإشعاع السطحي والغطاء النباتي. يوضح التذبذب الموسمي للجليد والوضاءة الإشعاعية المنظمة للمواسم الزراعية ونمو الغطاء النباتي (NDVI)."},soil_lst:{resourceId:"antarctic-sea-ice",tagEn:"Surface Radiative Equilibrium",tagAr:"التوازن الإشعاعي للسطح",noteEn:"Cryospheric Albedo & Surface Temperature. Illustrates the extreme cold thermal end-member of Earth’s surface radiation balance that governs global meridional temperature gradients.",noteAr:"وضاءة الجليد وحرارة السطح. يجسد الحد الأقصى للتبريد الإشعاعي لكوكب الأرض الذي يقود التدرج الحراري بين القطبين وخط الاستواء."},temperature:{resourceId:"night-lights-decade",tagEn:"Anthropogenic Driver & Urban Heat",tagAr:"المحرك البشري والجزر الحرارية",noteEn:"Anthropogenic Electrification & Urban Footprint. NASA Black Marble VIIRS nighttime radiance directly documents a decade of global urbanization and infrastructure expansion, providing the human footprint context behind regional temperature and climate anomalies.",noteAr:"الأثر البشري والتوسع الحضري. توثق بيانات الرخام الأسود VIIRS من ناسا عقداً كاملاً من التوسع العمراني واستهلاك الطاقة، مقدماً التفسير البشري للجزر الحرارية والاتجاهات المناخية المسجلة."}},Wl=(n,e)=>{const t=ms[e]||ms[n];if(t){const i=Et.find(a=>a.id===t.resourceId);if(i)return i}return Et[0]},T0=n=>n==="air"?Et.filter(e=>e.id==="geos-aerosols-2017"||e.id==="dyamond-co2-transport"):n==="water"?Et.filter(e=>e.id==="perpetual-ocean-2"||e.id==="atmospheric-river-3d"||e.id==="antarctic-sea-ice"):n==="soil"?Et.filter(e=>e.id==="atmospheric-river-3d"||e.id==="antarctic-sea-ice"||e.id==="night-lights-decade"):n==="temperature"?Et.filter(e=>e.id==="night-lights-decade"||e.id==="antarctic-sea-ice"||e.id==="dyamond-co2-transport"):Et;class dd{constructor({onTimeUpdate:e,onPlayStateChange:t,onSpeedChange:i,onEnded:a}){this.videoElement=null,this.duration=0,this.currentTime=0,this.isPlaying=!1,this.playbackRate=1,this.isSeeking=!1,this.rafId=null,this.onTimeUpdate=e||(()=>{}),this.onPlayStateChange=t||(()=>{}),this.onSpeedChange=i||(()=>{}),this.onEnded=a||(()=>{}),this.tick=this.tick.bind(this)}attachVideo(e,t){this.videoElement=e,this.duration=t||0,this.videoElement&&(this.videoElement.playbackRate=this.playbackRate)}detachVideo(){this.pause(),this.videoElement=null,this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null)}play(){this.videoElement&&(this.videoElement.play().catch(()=>{}),this.isPlaying=!0,this.onPlayStateChange(!0),this.startRAF())}pause(){this.videoElement&&this.videoElement.pause(),this.isPlaying=!1,this.onPlayStateChange(!1),this.stopRAF()}togglePlay(){this.isPlaying?this.pause():this.play()}seek(e,t=!0){const i=Math.max(0,Math.min(e,this.duration));this.currentTime=i,this.videoElement&&(this.videoElement.currentTime=i),this.onTimeUpdate(i),t&&!this.isPlaying&&this.videoElement}setSpeed(e){this.playbackRate=e,this.videoElement&&(this.videoElement.playbackRate=e),this.onSpeedChange(e)}startRAF(){this.rafId||(this.rafId=requestAnimationFrame(this.tick))}stopRAF(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null)}tick(){if(this.videoElement&&this.isPlaying){const e=this.videoElement.currentTime;if(this.currentTime=e,this.onTimeUpdate(e),this.videoElement.ended||e>=this.duration){this.pause(),this.onEnded();return}}this.rafId=requestAnimationFrame(this.tick)}}const Xt={getInterpolatedValuesAtTime(n,e){if(!n||!n.graphConfig||!n.graphConfig.series)return{};const t=n.durationSeconds||1,i=Math.max(0,Math.min(e,t)),a={};return n.graphConfig.series.forEach(r=>{const o=r.data||[];if(o.length!==0){if(i<=o[0].timestamp){a[r.key]={currentValue:o[0].y,label:o[0].x,index:0,interpolated:!1};return}if(i>=o[o.length-1].timestamp){const l=o.length-1;a[r.key]={currentValue:o[l].y,label:o[l].x,index:l,interpolated:!1};return}for(let l=0;l<o.length-1;l++){const c=o[l],d=o[l+1];if(i>=c.timestamp&&i<=d.timestamp){const h=d.timestamp-c.timestamp,m=h>0?(i-c.timestamp)/h:0,u=c.y+m*(d.y-c.y);a[r.key]={currentValue:Number(u.toFixed(2)),label:m>.5?d.x:c.x,index:m>.5?l+1:l,interpolated:!0,p1:c,p2:d,factor:m};break}}}}),a},getCurrentMilestone(n,e){if(!n||!n.timePoints||n.timePoints.length===0)return null;let t=n.timePoints[0];for(let i=0;i<n.timePoints.length&&e>=n.timePoints[i].timestamp;i++)t=n.timePoints[i];return t},formatTime(n){if(isNaN(n)||n<0)return"00:00";const e=Math.floor(n/60),t=Math.floor(n%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}},N0=["C3","D3","E3","G3","A3","C4","D4","E4","G4","A4","C5","D5","E5","G5","A5","C6"],Oo={"night-lights-decade":{instrument:"electric_bell",nameEn:"Electric Bell Chime",nameAr:"رنين الجرس الكهربائي",conceptEn:"Urban Electrification & Radiance",conceptAr:"الإشعاع الحضري والكهرباء",iconColor:"#38bdf8"},"geos-aerosols-2017":{instrument:"aerosol_wind",nameEn:"Resonant Wind Synth",nameAr:"رياح رنينية جوية",conceptEn:"Atmospheric Smoke, Dust & Sea Salt Plumes",conceptAr:"سحب الدخان والغبار والرياح الجوية",iconColor:"#f97316"},"perpetual-ocean-2":{instrument:"ocean_flow",nameEn:"Deep Aquatic Pluck",nameAr:"نغمة مائية محيطية",conceptEn:"Ocean Boundary Currents & Heat Advection",conceptAr:"تيارات المحيط العميقة ونقل الحرارة",iconColor:"#06b6d4"},"dyamond-co2-transport":{instrument:"carbon_pulse",nameEn:"Synoptic Gas Pulse",nameAr:"نبض غازات الاحتباس الحراري",conceptEn:"Atmospheric CO₂ Advection & Weather Systems",conceptAr:"حركة ثاني أكسيد الكربون وأنظمة الطقس",iconColor:"#a855f7"},"atmospheric-river-3d":{instrument:"rain_marimba",nameEn:"Precipitation Marimba",nameAr:"ماريمبا الهطول والسيول",conceptEn:"Moisture Vapor Flux & Heavy Rainfall",conceptAr:"تدفق بخار الماء والهطول الغزير",iconColor:"#10b981"},"antarctic-sea-ice":{instrument:"ice_crystal",nameEn:"Polar Glass Crystal",nameAr:"بلورات الجليد القطبية",conceptEn:"Cryospheric Freeze-Melt & Polar Albedo",conceptAr:"تجمد وذوبان الجليد والوضاءة القطبية",iconColor:"#93c5fd"}};function Fi(n,e){var u,g;if(!n||!((g=(u=n.graphConfig)==null?void 0:u.series)!=null&&g[0]))return{percentage:50,frequency:440,noteName:"A4",minY:0,maxY:100};const i=n.graphConfig.series[0].data.map(x=>x.y),a=Math.min(...i),r=Math.max(...i),o=r-a||1,l=typeof e=="number"&&!isNaN(e)?e:a,c=Math.max(0,Math.min(100,Math.round((l-a)/o*100))),d=Math.round(c/100*(li.length-1)),h=li[d],m=N0[d];return{percentage:c,frequency:h,noteName:m,minY:a,maxY:r,currentValue:l}}async function Fo(n,e,t=.7){if(t<=0||!await vs())return;const a=ha();if(!a||a.state!=="running")return;const{percentage:r,frequency:o}=Fi(n,e),l=Oo[n.id]||{instrument:"electric_bell"},c=a.currentTime,d=Math.max(.01,Math.min(1,t));switch(l.instrument){case"electric_bell":$l(a,o,d,c);break;case"aerosol_wind":w0(a,o,d,c);break;case"ocean_flow":C0(a,o,d,c);break;case"carbon_pulse":R0(a,o,d,c);break;case"rain_marimba":P0(a,o,d,c);break;case"ice_crystal":I0(a,o,d,c);break;default:$l(a,o,d,c);break}}function $l(n,e,t,i){const a=n.createOscillator(),r=n.createOscillator(),o=n.createGain();a.type="sine",a.frequency.setValueAtTime(e,i),r.type="sine",r.frequency.setValueAtTime(e*2.76,i),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(t*.7,i+.01),o.gain.exponentialRampToValueAtTime(1e-4,i+.45),a.connect(o),r.connect(o),o.connect(Qn()||n.destination),a.start(i),r.start(i),a.stop(i+.5),r.stop(i+.5)}function w0(n,e,t,i){const a=n.createOscillator(),r=n.createBiquadFilter(),o=n.createGain();a.type="sawtooth",a.frequency.setValueAtTime(e,i),r.type="lowpass",r.Q.setValueAtTime(3.5,i),r.frequency.setValueAtTime(Math.min(2500,e*3),i),r.frequency.exponentialRampToValueAtTime(Math.max(100,e*.8),i+.45),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(t*.55,i+.03),o.gain.exponentialRampToValueAtTime(1e-4,i+.45),a.connect(r),r.connect(o),o.connect(Qn()||n.destination),a.start(i),a.stop(i+.5)}function C0(n,e,t,i){const a=n.createOscillator(),r=n.createOscillator(),o=n.createBiquadFilter(),l=n.createGain();a.type="triangle",a.frequency.setValueAtTime(e,i),r.type="sine",r.frequency.setValueAtTime(e*.5,i),o.type="lowpass",o.frequency.setValueAtTime(e*2.2,i),o.Q.setValueAtTime(2,i),l.gain.setValueAtTime(1e-4,i),l.gain.linearRampToValueAtTime(t*.75,i+.012),l.gain.exponentialRampToValueAtTime(1e-4,i+.55),a.connect(o),r.connect(o),o.connect(l),l.connect(Qn()||n.destination),a.start(i),r.start(i),a.stop(i+.6),r.stop(i+.6)}function R0(n,e,t,i){const a=n.createOscillator(),r=n.createOscillator(),o=n.createGain();a.type="sine",a.frequency.setValueAtTime(e,i),r.type="sine",r.frequency.setValueAtTime(e*1.5,i),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(t*.65,i+.04),o.gain.exponentialRampToValueAtTime(1e-4,i+.42),a.connect(o),r.connect(o),o.connect(Qn()||n.destination),a.start(i),r.start(i),a.stop(i+.48),r.stop(i+.48)}function P0(n,e,t,i){const a=n.createOscillator(),r=n.createOscillator(),o=n.createGain();a.type="triangle",a.frequency.setValueAtTime(e,i),r.type="sine",r.frequency.setValueAtTime(e*3.8,i),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(t*.85,i+.004),o.gain.exponentialRampToValueAtTime(1e-4,i+.32),a.connect(o),r.connect(o),o.connect(Qn()||n.destination),a.start(i),r.start(i),a.stop(i+.35),r.stop(i+.1)}function I0(n,e,t,i){const a=n.createOscillator(),r=n.createOscillator(),o=n.createBiquadFilter(),l=n.createGain();a.type="sine",a.frequency.setValueAtTime(e,i),r.type="sine",r.frequency.setValueAtTime(e*2,i),o.type="highpass",o.frequency.setValueAtTime(Math.min(800,e*.8),i),l.gain.setValueAtTime(1e-4,i),l.gain.linearRampToValueAtTime(t*.6,i+.006),l.gain.exponentialRampToValueAtTime(1e-4,i+.5),a.connect(o),r.connect(o),o.connect(l),l.connect(Qn()||n.destination),a.start(i),r.start(i),a.stop(i+.55),r.stop(i+.55)}const ko=({resource:n,currentTime:e,isPlaying:t,playbackSpeed:i,onTogglePlay:a,onVideoAttach:r,isAudioEnabled:o=!0,onToggleAudio:l=()=>{},currentToneInfo:c=null,isPlayingTone:d=!1,lang:h="en"})=>{const m=C.useRef(null),u=C.useRef(null),[g,x]=C.useState(!0),[y,p]=C.useState(!1),[f,M]=C.useState(!1);C.useEffect(()=>{m.current&&(r(m.current,n.durationSeconds),m.current.playbackRate=i),x(!0),p(!1)},[n.id,r]),C.useEffect(()=>{m.current&&(m.current.playbackRate=i)},[i]),C.useEffect(()=>{const v=()=>{M(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",v),()=>document.removeEventListener("fullscreenchange",v)},[]);const b=()=>{u.current&&(document.fullscreenElement?document.exitFullscreen().catch(()=>{}):u.current.requestFullscreen().catch(()=>{}))},E=Xt.getCurrentMilestone(n,e),T=Xt.formatTime(e),_=Xt.formatTime(n.durationSeconds);return s.jsxs("div",{ref:u,className:`eic-visual-card ${f?"fullscreen-mode":""}`,"aria-label":"NASA Scientific Visualization Player",children:[s.jsxs("div",{className:"eic-visual-header",children:[s.jsxs("div",{className:"eic-visual-title-box",children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag",children:[s.jsx(gr,{className:"icon-xs","aria-hidden":"true"}),"ORIGINAL NASA SVS"]}),s.jsxs("span",{className:"eic-id-tag",children:["ID #",n.svsId]})]}),s.jsx("h3",{className:"eic-visual-title",children:h==="ar"?n.titleAr:n.titleEn})]}),s.jsxs("div",{className:"eic-visual-header-actions",children:[s.jsxs("a",{href:n.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-icon-link",title:h==="ar"?"عرض على موقع ناسا الرسمي":"View on official NASA SVS page",children:[s.jsx(jn,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:"NASA SVS"})]}),s.jsx("button",{type:"button",className:"eic-icon-btn",onClick:b,title:f?h==="ar"?"خروج من وضع ملء الشاشة":"Exit Fullscreen":h==="ar"?"ملء الشاشة":"Fullscreen","aria-label":f?"Exit Fullscreen":"Enter Fullscreen",children:f?s.jsx(Gd,{className:"icon-xs"}):s.jsx(kd,{className:"icon-xs"})})]})]}),s.jsxs("div",{className:"eic-video-viewport",children:[g&&!y&&s.jsxs("div",{className:"eic-video-loading-overlay",children:[s.jsx(aa,{className:"icon spin","aria-hidden":"true"}),s.jsx("span",{children:h==="ar"?"جاري تحميل محاكاة ناسا الأصلية...":"Streaming official NASA visualization..."})]}),y&&s.jsxs("div",{className:"eic-video-error-overlay",children:[s.jsx(Es,{className:"icon error-icon","aria-hidden":"true"}),s.jsx("p",{children:h==="ar"?"تعذر بث الفيديو مباشرة من خادم ناسا (قد يتطلب اتصالاً مباشراً بدون حظر).":"Unable to stream direct video from NASA SVS server."}),s.jsx("a",{href:n.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-btn-retry",children:h==="ar"?"فتح المحاكاة في صفحة ناسا SVS":"Open in NASA SVS Portal"})]}),s.jsx("video",{ref:m,src:n.videoUrl,poster:n.previewImage,preload:"metadata",playsInline:!0,className:"eic-native-video",onLoadedData:()=>x(!1),onWaiting:()=>x(!0),onPlaying:()=>x(!1),onError:()=>{x(!1),p(!0)},onClick:a}),c&&s.jsxs("button",{type:"button",className:`eic-video-tone-pill ${d?"ping":""}`,onClick:l,title:o?h==="ar"?"انقر لكتم النغمات الصوتية":"Click to mute visual sonification":h==="ar"?"انقر لتفعيل النغمات الصوتية":"Click to enable visual sonification","aria-label":"Toggle visual sonification tone",children:[o?s.jsx(rn,{className:"icon-xxs text-cyan"}):s.jsx(Zn,{className:"icon-xxs text-rose"}),s.jsxs("span",{children:[c.percentage,"% • ",c.noteName]})]}),E&&s.jsxs("div",{className:"eic-milestone-overlay animate-fade-in",children:[s.jsx("span",{className:"eic-milestone-dot"}),s.jsx("span",{className:"eic-milestone-text",children:E.label||E.date})]}),!t&&!g&&!y&&s.jsx("button",{type:"button",className:"eic-center-play-btn",onClick:a,"aria-label":"Play NASA Visualization",children:s.jsx(Cn,{className:"icon-lg"})}),s.jsxs("div",{className:"eic-time-pill",children:[s.jsx("span",{children:T}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{children:_})]})]}),s.jsx("div",{className:"eic-visual-caption",children:s.jsx("p",{className:"eic-caption-text",children:h==="ar"?n.shortDescriptionAr:n.shortDescriptionEn})})]})};co.register(uo,ho,fo,po,mo,go,xo,vo);const Bo=({resource:n,currentTime:e,onSeek:t,lang:i="en",theme:a="dark"})=>{var y,p;const r=C.useRef(null),o=a!=="light",l=C.useMemo(()=>Xt.getInterpolatedValuesAtTime(n,e),[n,e]),c=((y=n.graphConfig)==null?void 0:y.series)||[],d=c[0],h=d?l[d.key]:null,m=C.useMemo(()=>{if(!d||!d.data)return{labels:[],datasets:[]};const f=d.data.map(b=>b.x),M=c.map(b=>({label:i==="ar"?b.nameAr:b.nameEn,data:b.data.map(E=>E.y),borderColor:b.color,backgroundColor:b.fill?`${b.color}25`:"transparent",borderWidth:2.5,pointRadius:E=>{const T=E.dataIndex,_=b.data[T];return _&&Math.abs(_.timestamp-e)<n.durationSeconds/(b.data.length*2)?7:4},pointHoverRadius:8,pointBackgroundColor:b.color,pointBorderColor:o?"#0f172a":"#ffffff",pointBorderWidth:2,tension:.35,fill:b.fill}));return{labels:f,datasets:M}},[c,d,i,e,n.durationSeconds,o]),u=C.useMemo(()=>({id:"eicVerticalCursor",afterDraw:f=>{if(!d||!d.data||d.data.length===0)return;const M=f.ctx,b=f.getDatasetMeta(0);if(!b||!b.data||b.data.length===0)return;const E=n.durationSeconds||1,T=Math.max(0,Math.min(e,E)),_=d.data,v=_[0].timestamp,O=_[_.length-1].timestamp-v||1,R=b.data[0].x,F=b.data[b.data.length-1].x-R,q=R+(T-v)/O*F,I=f.chartArea.top,V=f.chartArea.bottom;M.save(),M.beginPath(),M.strokeStyle="#38bdf8",M.lineWidth=2,M.setLineDash([4,4]),M.moveTo(q,I),M.lineTo(q,V),M.stroke(),M.fillStyle="#38bdf8",M.beginPath(),M.arc(q,I+2,4,0,Math.PI*2),M.fill(),M.restore()}}),[d,e,n.durationSeconds]),g=f=>{const M=r.current;if(!M||!d||!d.data)return;const b=M.getElementsAtEventForMode(f,"nearest",{intersect:!1},!0);if(b.length>0){const E=b[0].index,T=d.data[E];T&&typeof T.timestamp=="number"&&t(T.timestamp)}},x=C.useMemo(()=>{var b;const f=o?"#94a3b8":"#475569",M=o?"rgba(148, 163, 184, 0.08)":"rgba(148, 163, 184, 0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:200},plugins:{legend:{display:!0,position:"top",labels:{color:f,font:{size:12,family:"sans-serif"},boxWidth:14,usePointStyle:!0}},tooltip:{backgroundColor:o?"rgba(15, 23, 42, 0.95)":"rgba(255, 255, 255, 0.95)",titleColor:o?"#f8fafc":"#0f172a",bodyColor:o?"#94a3b8":"#334155",borderColor:o?"#334155":"#cbd5e1",borderWidth:1,padding:10,callbacks:{afterBody:E=>{var N;const T=(N=E[0])==null?void 0:N.raw,_=Fi(n,T),v=_.percentage<=33?i==="ar"?"نغمة منخفضة (C3-G3)":"Low Tone (C3-G3)":_.percentage<=66?i==="ar"?"نغمة معتدلة (A3-E5)":"Mid Tone (A3-E5)":i==="ar"?"نغمة مرتفعة (G5-C6)":"High Tone (G5-C6)";return[`${i==="ar"?"النسبة والنغمة":"Intensity & Tone"}: ${_.percentage}% • ${_.noteName} (${Math.round(_.frequency)} Hz) [${v}]`,i==="ar"?"(انقر فوق أي نقطة للانتقال إلى وقتها وسماع نغمتها)":"(Click any point to jump video & audition tone)"]}}}},scales:{x:{ticks:{color:f,font:{size:11}},grid:{color:M}},y:{ticks:{color:f,font:{size:11}},grid:{color:M},title:{display:!0,text:((b=n.graphConfig)==null?void 0:b.yAxisLabel)||n.unitShort,color:f,font:{size:12,weight:"bold"}}}}}},[o,i,(p=n.graphConfig)==null?void 0:p.yAxisLabel,n.unitShort]);return s.jsxs("div",{className:"eic-graph-card","aria-label":"Scientific Graph Display",children:[s.jsxs("div",{className:"eic-graph-header",children:[s.jsxs("div",{className:"eic-graph-title-group",children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag tag-graph",children:[s.jsx(_s,{className:"icon-xs","aria-hidden":"true"}),"SYNCHRONIZED SCIENTIFIC DATA"]}),s.jsx("span",{className:"eic-id-tag",children:n.datasetName.split("(")[0]})]}),s.jsx("h3",{className:"eic-graph-title",children:n.primaryVariable})]}),h&&(()=>{const f=Fi(n,h.currentValue);return s.jsxs("div",{className:"eic-live-reading-box animate-pulse-glow",children:[s.jsx("span",{className:"eic-live-reading-label",children:i==="ar"?"القيمة المتزامنة الآن":"Active Reading"}),s.jsxs("div",{className:"eic-live-reading-val",children:[s.jsx("span",{className:"value-num",children:h.currentValue}),s.jsx("span",{className:"value-unit",children:n.unitShort})]}),s.jsxs("div",{className:"eic-graph-tone-tag",children:[s.jsx(Yn,{className:"icon-xxs"}),s.jsxs("span",{children:[f.percentage,"% • ",f.noteName," (",Math.round(f.frequency),"Hz)"]})]})]})})()]}),s.jsx("div",{className:"eic-chart-viewport",onClick:g,children:s.jsx(_o,{ref:r,data:m,options:x,plugins:[u]})}),s.jsxs("div",{className:"eic-graph-footer-hint",children:[s.jsx(Ii,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:i==="ar"?"انقر على أي نقطة بيانية في المنحنى للانتقال المباشر إلى الإطار الزمني المقابل في محاكاة ناسا.":"Click any data point along the curve to seek the NASA animation directly to that timestamp."})]})]})},Go=({resource:n,lang:e="en"})=>{const[t,i]=C.useState(!0);return s.jsxs("section",{className:"eic-info-card","aria-label":"Scientific Metadata and Source Attributions",children:[s.jsxs("div",{className:"eic-info-header",onClick:()=>i(!t),role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i(!t))},"aria-expanded":t,children:[s.jsxs("div",{className:"eic-info-header-title",children:[s.jsx(rc,{className:"icon-sm text-cyan","aria-hidden":"true"}),s.jsx("h3",{className:"eic-info-heading",children:e==="ar"?"التفاصيل العلمية والبيانات المعتمدة":"Scientific Information & NASA Attributions"}),s.jsxs("span",{className:"eic-svs-badge-sm",children:["SVS #",n.svsId]})]}),s.jsx("button",{type:"button",className:"eic-expand-btn","aria-label":t?"Collapse scientific information":"Expand scientific information",children:t?s.jsx(ys,{className:"icon-sm"}):s.jsx(Ss,{className:"icon-sm"})})]}),t&&s.jsxs("div",{className:"eic-info-content animate-fade-in",children:[s.jsxs("div",{className:"eic-metadata-grid",children:[s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(ia,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الظاهرة العلمية":"Scientific Phenomenon"]}),s.jsx("p",{className:"meta-value",children:e==="ar"?n.phenomenonAr:n.phenomenon})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(bo,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"اسم مجموعة البيانات":"Dataset Name"]}),s.jsx("p",{className:"meta-value font-mono-sm",children:n.datasetName})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(hi,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الجهة الموفرة للبيانات":"Data Provider"]}),s.jsx("p",{className:"meta-value",children:n.dataProvider})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(ic,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"الأداة أو النموذج الفضائي":"Instrument / Model"]}),s.jsx("p",{className:"meta-value",children:n.instrument})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(nc,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"وحدات القياس":"Measurement Units"]}),s.jsx("p",{className:"meta-value",children:n.unitEn})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(rs,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"التغطية الزمنية":"Temporal Coverage"]}),s.jsx("p",{className:"meta-value",children:n.temporalCoverage})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(ia,{className:"icon-xs","aria-hidden":"true"}),e==="ar"?"التغطية الجغرافية":"Geographic Coverage"]}),s.jsx("p",{className:"meta-value",children:n.geographicCoverage})]}),s.jsxs("div",{className:"eic-meta-item",children:[s.jsxs("span",{className:"meta-label",children:[s.jsx(Ql,{className:"icon-xs text-emerald","aria-hidden":"true"}),e==="ar"?"نوع ومنهجية البيانات":"Methodology & Type"]}),s.jsx("p",{className:"meta-value",children:n.dataType})]})]}),s.jsxs("div",{className:"eic-methodology-box",children:[s.jsx("h4",{className:"methodology-title",children:e==="ar"?"منهجية الرصد والنمذجة العلمية":"Data Collection & Modeling Methodology"}),s.jsx("p",{className:"methodology-text",children:n.dataCollectionMethod})]}),s.jsxs("div",{className:"eic-info-footer-links",children:[s.jsxs("a",{href:n.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"eic-primary-link-btn",children:[s.jsx("span",{children:e==="ar"?"صفحة المشروع الأصلية في ناسا SVS":"Official NASA SVS Project Entry"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://earth.gov/",target:"_blank",rel:"noopener noreferrer",className:"eic-secondary-link-btn",children:[s.jsx("span",{children:e==="ar"?"بوابة مركز معلومات الأرض":"NASA Earth Information Center Portal"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]})]})]})]})};function L0({isPlaying:n=!1,isDark:e=!0,accentColor:t="#38bdf8"}){const i=C.useRef(null),a=C.useRef(null),r=C.useRef(null);return C.useEffect(()=>{const o=i.current,l=a.current;if(!o||!l)return;const c=o.getContext("2d"),d=l.getContext("2d"),h=Math.min(window.devicePixelRatio||1,2),m=()=>{var p;const y=((p=o.parentElement)==null?void 0:p.clientWidth)||400;o.width=y*h,o.height=100*h,l.width=y*h,l.height=100*h};m(),window.addEventListener("resize",m);const u=new Uint8Array(256),g=new Uint8Array(128),x=()=>{r.current=requestAnimationFrame(x);const y=Qn(),p=o.width,f=o.height;c.clearRect(0,0,p,f),c.strokeStyle=e?"rgba(56, 189, 248, 0.05)":"rgba(2, 132, 199, 0.06)",c.lineWidth=1*h,c.beginPath(),c.moveTo(0,f*.5),c.lineTo(p,f*.5),c.stroke(),y?y.getByteTimeDomainData(u):u.fill(128),c.beginPath(),c.lineWidth=2.5*h,c.strokeStyle=t,c.shadowBlur=n?14:4,c.shadowColor=t;const M=p/(u.length-1);let b=0;for(let O=0;O<u.length;O++){const D=u[O]/128*f/2;O===0?c.moveTo(b,D):c.lineTo(b,D),b+=M}c.stroke(),c.shadowBlur=0,d.clearRect(0,0,p,f),y?y.getByteFrequencyData(g):g.fill(0);const E=32,T=4*h,_=T*(E-1),v=Math.max(3*h,(p-_)/E),N=d.createLinearGradient(0,f,0,0);N.addColorStop(0,t),N.addColorStop(.7,"#818cf8"),N.addColorStop(1,"#c084fc");for(let O=0;O<E;O++){const R=Math.floor(O/E*(g.length*.75)),D=g[R]||0,F=n?4*h:2*h,q=Math.max(F,D/255*f*.88),I=O*(v+T),V=f-q;d.fillStyle=N,d.shadowBlur=n&&D>10?8:0,d.shadowColor=t,d.beginPath(),d.roundRect?d.roundRect(I,V,v,q,[3*h,3*h,0,0]):d.rect(I,V,v,q),d.fill()}d.shadowBlur=0};return x(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("resize",m)}},[n,e,t]),s.jsxs("div",{className:"audio-visualizer-dual-pane",children:[s.jsxs("div",{className:"vis-subcard",children:[s.jsxs("div",{className:"vis-subcard-header",children:[s.jsxs("div",{className:"vis-title-pill",children:[s.jsx("span",{className:"live-dot",style:{opacity:n?1:.4}}),s.jsx("span",{children:"REAL-TIME OSCILLOSCOPE WAVEFORM"})]}),s.jsx("span",{className:"vis-tag",children:"TIME-DOMAIN"})]}),s.jsx("div",{className:"vis-canvas-box",children:s.jsx("canvas",{ref:i,className:"vis-canvas-element"})})]}),s.jsxs("div",{className:"vis-subcard",children:[s.jsxs("div",{className:"vis-subcard-header",children:[s.jsxs("div",{className:"vis-title-pill",children:[s.jsx("span",{className:"live-dot",style:{opacity:n?1:.4}}),s.jsx("span",{children:"FFT FREQUENCY SPECTRUM ANALYZER"})]}),s.jsx("span",{className:"vis-tag",children:"32-BAND FFT"})]}),s.jsx("div",{className:"vis-canvas-box",children:s.jsx("canvas",{ref:a,className:"vis-canvas-element"})})]})]})}function D0({lang:n="en",isDark:e=!0,selectedDatasetId:t="night-lights-decade",onDatasetChange:i}){var ie,Se,Ue,X,me,ge;const a=n==="ar",[r,o]=C.useState(()=>({aerosols:"geos-aerosols-2017",carbon:"dyamond-co2-transport",ocean:"perpetual-ocean-2",precip:"atmospheric-river-3d",nightlights:"night-lights-decade",ice:"antarctic-sea-ice"})[t]||t||Et[0].id),l=cd(r)||Et[0];C.useEffect(()=>{if(t){const J={aerosols:"geos-aerosols-2017",carbon:"dyamond-co2-transport",ocean:"perpetual-ocean-2",precip:"atmospheric-river-3d",nightlights:"night-lights-decade",ice:"antarctic-sea-ice"}[t]||t;Et.some(Re=>Re.id===J)&&J!==r&&I(J)}},[t]);const[c,d]=C.useState(0),[h,m]=C.useState(!1),[u,g]=C.useState(1),[x,y]=C.useState(.8),[p,f]=C.useState(!1),[M,b]=C.useState(!0),[E,T]=C.useState(!1),_=C.useRef(null),v=C.useRef(-1),N=C.useMemo(()=>Xt.getInterpolatedValuesAtTime(l,c),[l,c]),O=(Se=(ie=l.graphConfig)==null?void 0:ie.series)==null?void 0:Se[0],R=O?N[O.key]:null,D=R&&typeof R=="object"?R.currentValue!==void 0?R.currentValue:R.y:R,F=C.useMemo(()=>Fi(l,D),[l,D]),q=C.useCallback(fe=>{const J=p?0:x;if(J<=0)return;const Re=Xt.getInterpolatedValuesAtTime(l,fe),Oe=O?Re[O.key]:null,Ee=Oe&&typeof Oe=="object"?Oe.currentValue??Oe.y:Oe;Ee!==null&&!isNaN(Ee)&&Fo(l,Ee,J)},[l,O,p,x]);_.current||(_.current=new dd({onTimeUpdate:fe=>{d(fe),Math.abs(fe-v.current)>=.6&&(v.current=fe,q(fe))},onPlayStateChange:fe=>m(fe),onSpeedChange:fe=>g(fe),onEnded:()=>{M&&_.current?(_.current.seek(0),_.current.play()):m(!1)}}));const I=fe=>{fe!==r&&(_.current&&(_.current.pause(),_.current.seek(0)),d(0),v.current=-1,m(!1),o(fe),i==null||i(fe))},V=C.useCallback((fe,J)=>{_.current&&_.current.attachVideo(fe,J)},[]),Q=async()=>{await vs(),_.current&&(_.current.togglePlay(),h||q(c))},j=fe=>{_.current&&_.current.seek(fe),d(fe),v.current=fe,q(fe)},oe=fe=>{_.current&&_.current.setSpeed(fe)},W=()=>{j(0),h&&_.current&&_.current.pause()},te=Oo[l.id]||{nameEn:"Acoustic Synthesizer",nameAr:"سنثسايزر صوتي"};return s.jsxs("section",{id:"studio",className:"studio-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:a?"المرئيات الأصلية والرسوم البيانية والصوت":"NASA VISUALS + GRAPHS + ACOUSTICS"}),s.jsx("h2",{className:"section-title",children:a?"استوديو الصوتيات والمرئيات المتزامنة":"Sonification Studio"}),s.jsx("p",{className:"section-subtitle",children:a?"مشاهدة محاكاة الحواسيب الفائقة لوكالة ناسا جنباً إلى جنب مع الرسوم البيانية العلمية والصوتيات في الوقت الفعلي":"Explore original NASA SVS supercomputer animations side-by-side with synchronized scientific graphs and genuine audio sonification."})]}),s.jsxs("div",{className:"studio-unified-card",children:[s.jsx("div",{className:"studio-datasets-pill-bar",role:"tablist","aria-label":"NASA Scientific Datasets",children:Et.map(fe=>{var Re,Oe,Ee;const J=fe.id===r;return s.jsxs("button",{role:"tab","aria-selected":J,onClick:()=>I(fe.id),className:`studio-dataset-pill ${J?"active":""}`,children:[s.jsx("span",{className:"pill-dot",style:{backgroundColor:((Ee=(Oe=(Re=fe.graphConfig)==null?void 0:Re.series)==null?void 0:Oe[0])==null?void 0:Ee.color)||"#38bdf8"}}),s.jsx("span",{className:"pill-name",children:a?fe.titleAr:fe.titleEn}),s.jsxs("span",{className:"pill-tag",children:["SVS #",fe.svsId]})]},fe.id)})}),s.jsxs("div",{className:"studio-side-by-side-stage",children:[s.jsx("div",{className:"studio-visual-column",children:s.jsx(ko,{resource:l,currentTime:c,isPlaying:h,playbackSpeed:u,onTogglePlay:Q,onVideoAttach:V,lang:n})}),s.jsx("div",{className:"studio-graph-column",children:s.jsx(Bo,{resource:l,currentTime:c,onSeek:j,lang:n,theme:e?"dark":"light"})})]}),s.jsxs("div",{className:"studio-master-controls-bar",children:[s.jsxs("div",{className:"master-transport-group",children:[s.jsxs("button",{onClick:Q,className:`master-play-btn ${h?"is-playing":""}`,title:h?"Pause":"Play synchronized visual, graph & sound","aria-label":h?"Pause":"Play",children:[h?s.jsx(Ms,{size:20,fill:"currentColor"}):s.jsx(Cn,{size:20,fill:"currentColor"}),s.jsx("span",{children:h?a?"إيقاف مؤقت":"Pause":a?"تشغيل الكل":"Play Sync"})]}),s.jsx("button",{onClick:W,className:"master-icon-btn",title:"Reset Timeline to Beginning","aria-label":"Reset Timeline",children:s.jsx(lc,{size:16})})]}),s.jsxs("div",{className:"master-scrubber-group",children:[s.jsxs("div",{className:"scrubber-labels-row",children:[s.jsx("span",{className:"scrubber-current-time",children:Xt.formatTime(c)}),s.jsx("span",{className:"scrubber-milestone-text",children:((Ue=Xt.getCurrentMilestone(l,c))==null?void 0:Ue.label)||(a?"تزامن علمي":"Synchronized Timeline")}),s.jsx("span",{className:"scrubber-duration-time",children:Xt.formatTime(l.durationSeconds)})]}),s.jsx("input",{type:"range",min:"0",max:l.durationSeconds,step:"0.1",value:c,onChange:fe=>j(parseFloat(fe.target.value)),className:"studio-scrubber-slider","aria-label":"Synchronized Timeline Scrubber"})]}),s.jsxs("div",{className:"master-aux-group",children:[s.jsx("div",{className:"aux-speed-pills",children:[.5,1,1.5,2].map(fe=>s.jsxs("button",{onClick:()=>oe(fe),className:`aux-speed-btn ${u===fe?"active":""}`,children:[fe,"x"]},fe))}),s.jsxs("div",{className:"aux-volume-wrapper",children:[s.jsx("button",{onClick:()=>f(!p),className:"aux-vol-btn",title:p?"Unmute":"Mute","aria-label":"Toggle Mute",children:p||x===0?s.jsx(Zn,{size:16}):s.jsx(rn,{size:16})}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:p?0:x,onChange:fe=>{y(parseFloat(fe.target.value)),p&&f(!1)},className:"aux-volume-slider","aria-label":"Master Volume"})]})]})]}),s.jsxs("div",{className:"studio-bottom-stage-grid",children:[s.jsx("div",{className:"studio-visualizer-card",children:s.jsx(L0,{isPlaying:h,isDark:e,accentColor:((ge=(me=(X=l.graphConfig)==null?void 0:X.series)==null?void 0:me[0])==null?void 0:ge.color)||"#38bdf8"})}),s.jsxs("div",{className:"studio-telemetry-hud-card",children:[s.jsxs("div",{className:"hud-card-header",children:[s.jsx("span",{className:"hud-header-eyebrow",children:a?"المؤشرات الحيوية للصوت":"LIVE ACOUSTIC TELEMETRY"}),s.jsxs("span",{className:"hud-live-tag",children:[s.jsx("span",{className:"pulse-dot"}),s.jsx("span",{children:h?"ACTIVE SYNTH":"IDLE"})]})]}),s.jsxs("div",{className:"hud-metrics-row",children:[s.jsxs("div",{className:"hud-metric-box",children:[s.jsx("span",{className:"lbl",children:a?"التردد الصوتي":"PITCH FREQUENCY"}),s.jsx("span",{className:"val highlight",children:F.frequency?`${Math.round(F.frequency)} Hz`:"---"}),s.jsx("span",{className:"sub",children:F.noteName||"Pentatonic Note"})]}),s.jsxs("div",{className:"hud-metric-box",children:[s.jsx("span",{className:"lbl",children:a?"القيمة المرصودة":"CURRENT READING"}),s.jsx("span",{className:"val cyan",children:D!==null?`${D} ${l.unitShort||""}`:"---"}),s.jsx("span",{className:"sub",children:l.unitEn||l.primaryVariable})]})]}),s.jsxs("div",{className:"hud-instrument-pill",children:[s.jsx("span",{className:"inst-lbl",children:a?"جرس الآلة الفيزيائي:":"Acoustic Timbre:"}),s.jsx("span",{className:"inst-val",children:a?te.nameAr:te.nameEn})]})]})]}),s.jsxs("div",{className:"studio-metadata-accordion",children:[s.jsxs("button",{onClick:()=>T(!E),className:"metadata-toggle-btn",children:[s.jsxs("div",{className:"toggle-left",children:[s.jsx(Ii,{size:16}),s.jsx("span",{children:a?"عرض التوثيق العلمي وبيانات ناسا المعتمدة":"View Authoritative Scientific Metadata & NASA Sources"}),s.jsxs("span",{className:"svs-tag",children:["SVS #",l.svsId]})]}),E?s.jsx(ys,{size:16}):s.jsx(Ss,{size:16})]}),E&&s.jsx("div",{className:"metadata-expanded-content",children:s.jsx(Go,{resource:l,lang:n})})]})]})]})}function U0({lang:n="en"}){const e=n==="ar",[t,i]=C.useState(0),[a,r]=C.useState(null),o=[{id:"air-contrast",title:e?"مقارنة نقاء الهواء: القطب الشمالي ضد مركز صناعي":"Air Quality: Pristine Arctic vs Industrial Hub",desc:e?"استمع إلى الفرق الصوتي بين هواء القطب النقي ذو الهباء المنخفض، مقابل الكثافة العالية للتلوث الصناعي والعواصف الغبارية.":"Contrast clean background atmosphere against extreme particulate loading from heavy industry and dust storms.",slotA:{title:e?"القطب الشمالي النقي (AOD 0.06)":"Pristine Arctic (AOD 0.06)",desc:e?"تردد خافت منخفض (C3 ~ 131 Hz) يعكس صفاء الهواء.":"Deep low frequency (C3 ~ 131 Hz) indicating clean atmospheric transparency.",resourceId:"geos-aerosols-2017",val:.06},slotB:{title:e?"مركز صناعي ملوث (AOD 0.95)":"Dense Industrial Hub (AOD 0.95)",desc:e?"تردد حاد مرتفع (C6 ~ 1047 Hz) يعكس حجب الضوء واحتجاز الملوثات.":"Soaring high frequency (C6 ~ 1047 Hz) signaling severe aerosol optical depth.",resourceId:"geos-aerosols-2017",val:.95}},{id:"co2-decade",title:e?"تراكم ثاني أكسيد الكربون: عقد من الانبعاثات":"Carbon Dioxide: 2012 Baseline vs 2023 Modern",desc:e?"لاحظ ارتفاع طبقة الصوت الإجمالية الناتجة عن تراكم أكثر من 25 جزء في المليون من غازات الاحتباس الحراري عبر عقد من الزمن.":"Notice the distinct upward pitch shift driven by 25+ ppm of atmospheric CO₂ accumulation over a decade.",slotA:{title:e?"خط الأساس لعام 2012 (393.8 ppm)":"Year 2012 Baseline (393.8 ppm)",desc:e?"نغمة قرار دافئة ومستقرة نسبياً.":"Warm foundational pitch in the lower-mid register.",resourceId:"dyamond-co2-transport",val:393.8},slotB:{title:e?"المستوى المسجل لعام 2023 (421.3 ppm)":"Year 2023 Record (421.3 ppm)",desc:e?"طبقة نغمية أكثر حدة مع رنين مضاعف يعكس الطاقة المحتبسة.":"Higher register with energized harmonics reflecting amplified radiative forcing.",resourceId:"dyamond-co2-transport",val:421.3}},{id:"ocean-thermal",title:e?"تيارات المحيط: المياه القطبية مقابل تيار الخليج الدافئ":"Ocean Thermal: Polar Waters vs Gulf Stream Current",desc:e?"استمع إلى الفرق في الطاقة الحركية ودرجة الحرارة بين المسطحات المائية القطبية الباردة والتيارات الاستوائية السريعة.":"Experience the kinetic energy and thermal variance between subpolar gyres and the roaring tropical Gulf Stream.",slotA:{title:e?"مياه القطب الباردة (1.2°C)":"Polar Subpolar Water (1.2°C)",desc:e?"نغمة بحرية عميقة وبطيئة تعكس الخمول الحراري.":"Sub-bass aquatic thud indicating near-freezing thermal inertia.",resourceId:"perpetual-ocean-2",val:1.2},slotB:{title:e?"تيار الخليج الدافئ (27.8°C)":"Warm Gulf Stream Core (27.8°C)",desc:e?"إيقاع ماريمبا سريع ومشرق يعبر عن سرعة تدفق الحرارة.":"Bright, agile aquatic resonance reflecting massive thermal convection.",resourceId:"perpetual-ocean-2",val:27.8}}],l=o[t],c=async d=>{const h=d==="A"?l.slotA:l.slotB,m=Et.find(u=>u.id===h.resourceId)||Et[0];await vs(),r(d),Fo(m,h.val,.85),setTimeout(()=>{r(null)},600)};return s.jsxs("section",{id:"discover",className:"discover-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:e?"دليل الإدراك والتحليل":"DECODING GUIDE"}),s.jsx("h2",{className:"section-title",children:e?"اكتشف ما تستمع إليه":"Discover What You Are Hearing"}),s.jsx("p",{className:"section-subtitle",children:e?"كيف تقرأ الأذن البشرية أنماط الكوكب المناخية؟ دليل فك شفرة الترددات والجرس الصوتي":"Unlocking the scientific meaning behind acoustics: how frequency, timbre, and cadence encode Earth observations."})]}),s.jsxs("div",{className:"mapping-principles-grid",children:[s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"01"}),s.jsx("h3",{className:"principle-title",children:e?"طبقة الصوت (التردد Hz)":"Pitch & Frequency"}),s.jsx("p",{className:"principle-text",children:e?"تتوافق شدة القياس مباشرة مع التردد: كلما ارتفعت درجات الحرارة أو زاد تركيز ثاني أكسيد الكربون أو تكاثف التلوث، ارتفعت طبقة الصوت إلى نغمات أكثر حدة.":"Direct proportional relationship: higher temperatures, thicker aerosols, or elevated ppm concentrations trigger higher acoustic frequencies in Hertz."}),s.jsx("div",{className:"principle-tag",children:"LOW VAL = BASS • HIGH VAL = TREBLE"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"02"}),s.jsx("h3",{className:"principle-title",children:e?"جرس الآلة الفيزيائي":"Acoustic Timbre"}),s.jsx("p",{className:"principle-text",children:e?"تمتلك كل ظاهرة هوية صوتية خاصة: الرياح للهباء الجوي، الماريمبا المائية للتيارات البحرية، والأجراس الزجاجية النقية لصفائح الجليد القطبي.":"Each domain possesses an acoustic identity: resonant wind for aerosols, percussive fluid drops for rainfall, and crystalline bells for polar sea ice."}),s.jsx("div",{className:"principle-tag",children:"PHYSICAL PHENOMENON TIMBRES"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"03"}),s.jsx("h3",{className:"principle-title",children:e?"الأنماط والدورات السنوية":"Seasonal Rhythms"}),s.jsx("p",{className:"principle-text",children:e?"تظهر الدورات الموسمية بوضوح: يلاحظ المستمع نغمات منخفضة في فصل الصيف مع امتصاص الغابات للكربون، ونغمات صاعدة في الشتاء مع تراجع التمثيل الضوئي.":"Annual cycles produce recognizable waves: hear the dip during Northern Hemisphere summer photosynthesis and the peak during winter dormancy."}),s.jsx("div",{className:"principle-tag",children:"BIOSPHERE BREATHING"})]}),s.jsxs("div",{className:"principle-card",children:[s.jsx("div",{className:"principle-number",children:"04"}),s.jsx("h3",{className:"principle-title",children:e?"المؤشرات الشاذة والقصوى":"Anomalies & Disruption"}),s.jsx("p",{className:"principle-text",children:e?"القفزات النغمية الحادة غير المتوقعة تدل فوراً على حرائق غابات مفاجئة، عواصف رملية، أو انخفاض ملحوظ كالذي حدث أثناء فترات الإغلاق في 2020.":"Abrupt sonic leaps immediately signal anomalies: sudden wildfire smoke outbreaks, atmospheric river landfalls, or the noticeable 2020 pandemic dip."}),s.jsx("div",{className:"principle-tag",children:"INSTANT EAR DETECTION"})]})]}),s.jsxs("div",{className:"comparison-module-card",children:[s.jsxs("div",{className:"comp-header",children:[s.jsxs("div",{className:"comp-title-group",children:[s.jsx(wd,{size:20,className:"comp-icon"}),s.jsx("h3",{className:"comp-title",children:e?"مختبر المقارنة السمعية التفاعلي":"Interactive Acoustic Comparison Lab"})]}),s.jsx("span",{className:"comp-badge",children:e?"مقارنة بيئية فورية":"DUAL AUDITION"})]}),s.jsx("p",{className:"comp-desc",children:e?"اختر إحدى المقارنات العلمية ثم استمع للعينتين لتختبر بنفسك كيف تبدو الظروف البيئية المختلفة في العالم الحقيقي.":"Select a scientific scenario and listen to both samples to experience how contrasting environmental states produce distinct acoustic signatures."}),s.jsx("div",{className:"comp-tabs-bar",children:o.map((d,h)=>s.jsx("button",{onClick:()=>{i(h),r(null)},className:`comp-tab-btn ${t===h?"active":""}`,children:d.title},d.id))}),s.jsxs("div",{className:"comp-slots-grid",children:[s.jsxs("div",{className:`comp-slot-card ${a==="A"?"is-sounding":""}`,children:[s.jsx("div",{className:"slot-badge slot-a",children:"SAMPLE A"}),s.jsx("h4",{className:"slot-title",children:l.slotA.title}),s.jsx("p",{className:"slot-desc",children:l.slotA.desc}),s.jsxs("button",{onClick:()=>c("A"),className:"slot-audition-btn",children:[a==="A"?s.jsx(rn,{size:18,className:"pulse-icon"}):s.jsx(Cn,{size:18,fill:"currentColor"}),s.jsx("span",{children:e?"استمع إلى العينة (أ)":"Audition Sample A"})]})]}),s.jsx("div",{className:"comp-slots-vs",children:s.jsx("span",{className:"vs-circle",children:"VS"})}),s.jsxs("div",{className:`comp-slot-card ${a==="B"?"is-sounding":""}`,children:[s.jsx("div",{className:"slot-badge slot-b",children:"SAMPLE B"}),s.jsx("h4",{className:"slot-title",children:l.slotB.title}),s.jsx("p",{className:"slot-desc",children:l.slotB.desc}),s.jsxs("button",{onClick:()=>c("B"),className:"slot-audition-btn",children:[a==="B"?s.jsx(rn,{size:18,className:"pulse-icon"}):s.jsx(Cn,{size:18,fill:"currentColor"}),s.jsx("span",{children:e?"استمع إلى العينة (ب)":"Audition Sample B"})]})]})]})]})]})}function O0({lang:n="en"}){const e=n==="ar",t=[{name:"NASA Earth Information Center (EIC)",nameAr:"مركز معلومات الأرض التابع لناسا",desc:"Interactive climate exhibits, physical visualizations, and Earth systems data.",url:"https://earth.gov/"},{name:"NASA Scientific Visualization Studio (SVS)",nameAr:"استوديو التصور العلمي التابع لناسا",desc:"Hyper-detailed cinematic planetary animations and scientific visual simulations.",url:"https://svs.gsfc.nasa.gov/"},{name:"NASA GIBS & Worldview",nameAr:"نظام تصفح الصور العالمية للأقمار الصناعية",desc:"Full-resolution near real-time satellite imagery layers and spectral bands.",url:"https://worldview.earthdata.nasa.gov/"},{name:"NASA POWER Project",nameAr:"مشروع التنبؤ بموارد الطاقة العالمية",desc:"Decadal solar radiation, surface meteorology, and climate time-series.",url:"https://power.larc.nasa.gov/"},{name:"NASA GMAO & GEOS Models",nameAr:"مكتب النمذجة والاستيعاب العالمي",desc:"Global atmospheric chemical transport and aerosol assimilation systems.",url:"https://gmao.gsfc.nasa.gov/"},{name:"NASA/JPL ECCO-2 Ocean Circulation",nameAr:"مشروع تقدير دوران ومناخ المحيطات",desc:"Global ocean thermal physics, eddies, currents, and sea surface anomalies.",url:"https://ecco-group.org/"}],i=[{name:"React 18",role:"Component Architecture & Reactive State"},{name:"Three.js",role:"Procedural 3D Earth, Orbit & Atmosphere Engine"},{name:"Web Audio API",role:"Dual Synthesizer, AnalyserNode & Real-time Acoustics"},{name:"Chart.js & Leaflet",role:"Scientific Time-Series & Geospatial Maps"},{name:"Vite",role:"High-Performance Modern Build Pipeline"}];return s.jsxs("section",{id:"about",className:"about-section",children:[s.jsxs("div",{className:"section-header-block",children:[s.jsx("span",{className:"section-eyebrow",children:e?"عن المشروع والرسالة":"MISSION & BACKGROUND"}),s.jsx("h2",{className:"section-title",children:e?"مشروع تيرا-تون":"About Terra-Tone"}),s.jsx("p",{className:"section-subtitle",children:e?"مبادرة علمية تفاعلية تم تطويرها ضمن تحدي ناسا الدولي لتطبيقات الفضاء ٢٠٢٦":"Developed for the NASA International Space Apps Challenge 2026: The Earth Information Jukebox."})]}),s.jsxs("div",{className:"about-mission-card",children:[s.jsxs("div",{className:"mission-badge",children:[s.jsx(Cd,{size:18}),s.jsx("span",{children:"NASA SPACE APPS CHALLENGE 2026 — THE EARTH INFORMATION JUKEBOX"})]}),s.jsx("h3",{className:"mission-title",children:e?"تحويل الأرقام الفضائية المعقدة إلى لغة يفهمها الجميع":"Bridging Scientific Data and Human Emotion through Acoustic Sonification"}),s.jsx("p",{className:"mission-text",children:e?"يهدف مشروع Terra-Tone إلى تمكين الباحثين والطلاب والمهتمين بالبيئة، بمن فيهم ذوي التحديات البصرية، من تجربة نبض كوكب الأرض وفهم مؤشراته الحيوية دون الحاجة إلى التحديق في مئات الجداول الإحصائية المعقدة. عبر دمج فيزياء الصوت بالبيانات الفضائية، تصبح التغيرات المناخية حقيقة ملموسة تُسمع بوضوح.":"Terra-Tone translates planetary observations into harmonically rich acoustic landscapes. By converting satellite telemetry into calibrated musical frequencies, it reveals planetary cycles, climate anomalies, and seasonal dynamics in a multisensory format accessible to scientists, students, and visually impaired explorers worldwide."})]}),s.jsxs("div",{className:"about-meta-grid",children:[s.jsxs("div",{className:"about-subcard",children:[s.jsxs("div",{className:"subcard-header",children:[s.jsx(bo,{size:20,className:"subcard-icon"}),s.jsx("h3",{className:"subcard-title",children:e?"مصادر وبيانات ناسا الرسمية":"Official NASA Data Providers"})]}),s.jsx("div",{className:"providers-list",children:t.map((a,r)=>s.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"provider-item",children:[s.jsxs("div",{className:"provider-info",children:[s.jsx("span",{className:"provider-name",children:e?a.nameAr:a.name}),s.jsx("span",{className:"provider-desc",children:a.desc})]}),s.jsx(jn,{size:14,className:"provider-ext-icon"})]},r))})]}),s.jsxs("div",{className:"about-subcard",children:[s.jsxs("div",{className:"subcard-header",children:[s.jsx(ic,{size:20,className:"subcard-icon"}),s.jsx("h3",{className:"subcard-title",children:e?"البنية التقنية والمكتبات":"Technology Stack & Architecture"})]}),s.jsx("div",{className:"tech-stack-list",children:i.map((a,r)=>s.jsxs("div",{className:"tech-item",children:[s.jsx("span",{className:"tech-name",children:a.name}),s.jsx("span",{className:"tech-role",children:a.role})]},r))}),s.jsxs("div",{className:"team-acknowledgment-box",children:[s.jsxs("div",{className:"ack-header",children:[s.jsx(Zd,{size:18}),s.jsx("span",{children:e?"فريق العمل والتقدير":"Team & Acknowledgments"})]}),s.jsx("p",{className:"ack-text",children:e?"تم بناء هذا النظام بفخر بواسطة فريق Terra-Tone، مهدىً إلى علماء ناسا وجميع الباحثين الذين يكرسون جهودهم لحماية كوكبنا الأزرق الجميل.":"Built with scientific rigor by the Terra-Tone Team for NASA Space Apps Challenge 2026. Dedicated to Earth scientists and researchers worldwide working to preserve our living planet."})]})]})]}),s.jsx("footer",{className:"terra-footer",children:s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"footer-logo",children:"TERRA-TONE"}),s.jsx("span",{className:"footer-copy",children:"© 2026 NASA Space Apps Challenge Project"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"https://github.com/EL7ADIDY/Terra-Tone",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"GitHub Repository"}),s.jsx("span",{className:"footer-sep",children:"•"}),s.jsx("a",{href:"https://www.spaceappschallenge.org/2026/challenges/the-earth-information-jukebox/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"NASA Space Apps 2026"}),s.jsx("span",{className:"footer-sep",children:"•"}),s.jsx("a",{href:"https://earth.gov/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Earth Information Center"})]})]})})]})}const F0=({activeResourceId:n,onSelectResource:e,lang:t="en"})=>{const[i,a]=C.useState("all"),r=Et.filter(o=>i==="all"?!0:o.category===i);return s.jsxs("section",{className:"eic-catalog-section","aria-label":"NASA Earth Information Center Catalog",children:[s.jsxs("div",{className:"eic-catalog-header",children:[s.jsxs("div",{className:"eic-catalog-title-group",children:[s.jsxs("div",{className:"eic-badge-pill",children:[s.jsx(ei,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:"NASA EARTH INFORMATION CENTER"})]}),s.jsx("h2",{className:"eic-section-title",children:t==="ar"?"معارض مركز معلومات الأرض":"Curated Earth Science Showcases"}),s.jsx("p",{className:"eic-section-subtitle",children:t==="ar"?"استكشف المرئيات العلمية الأصلية والبيانات المعتمدة المباشرة من وكالة ناسا عبر الغلاف الجوي والمحيطات والغطاء الجليدي والمدن.":"Explore original NASA SVS scientific animations and verified datasets tracking our interconnected planet."})]}),s.jsx("div",{className:"eic-category-filter",role:"tablist","aria-label":"Showcase Categories",children:A0.map(o=>{const l=i===o.id;return s.jsx("button",{type:"button",role:"tab","aria-selected":l,className:`eic-cat-btn ${l?"active":""}`,onClick:()=>a(o.id),children:t==="ar"?o.labelAr:o.labelEn},o.id)})})]}),s.jsx("div",{className:"eic-cards-grid",children:r.map(o=>{const l=o.id===n;return s.jsxs("article",{className:`eic-card ${l?"selected":""}`,onClick:()=>e(o.id),role:"button",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),e(o.id))},"aria-current":l?"true":void 0,children:[s.jsxs("div",{className:"eic-card-media-wrap",children:[s.jsx("img",{src:o.previewImage,alt:t==="ar"?o.titleAr:o.titleEn,className:"eic-card-img",loading:"lazy",onError:c=>{c.target.style.opacity="0.4"}}),s.jsxs("span",{className:"eic-svs-badge",children:["SVS #",o.svsId]}),s.jsxs("span",{className:"eic-duration-badge",children:[s.jsx(ec,{className:"icon-xs","aria-hidden":"true"}),o.durationSeconds,"s"]}),l&&s.jsx("div",{className:"eic-card-active-overlay",children:s.jsx("span",{className:"eic-active-text",children:t==="ar"?"المعرض النشط":"Active Showcase"})})]}),s.jsxs("div",{className:"eic-card-body",children:[s.jsxs("div",{className:"eic-card-meta-line",children:[s.jsx("span",{className:"eic-card-category-tag",children:o.dataType}),s.jsx("span",{className:"eic-card-unit-tag",children:o.unitShort})]}),s.jsx("h3",{className:"eic-card-title",children:t==="ar"?o.titleAr:o.titleEn}),s.jsx("p",{className:"eic-card-desc",children:t==="ar"?o.shortDescriptionAr:o.shortDescriptionEn}),s.jsxs("div",{className:"eic-card-footer",children:[s.jsxs("div",{className:"eic-card-source",children:[s.jsx(hi,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{className:"truncate",children:o.dataProvider.split("/")[0]})]}),s.jsxs("button",{type:"button",className:"eic-card-select-btn",onClick:c=>{c.stopPropagation(),e(o.id)},children:[s.jsx(Id,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:l?t==="ar"?"يتم العرض":"Viewing":t==="ar"?"عرض":"Explore"})]})]})]})]},o.id)})})]})},ud=({resource:n,currentTime:e,isPlaying:t,playbackSpeed:i,isLooping:a,onTogglePlay:r,onSeek:o,onChangeSpeed:l,onToggleLoop:c,isAudioEnabled:d=!0,onToggleAudio:h,audioVolume:m=.7,onChangeVolume:u,lang:g="en"})=>{const x=C.useId(),y=n.durationSeconds||1,p=Math.min(100,Math.max(0,e/y*100)),f=E=>{const T=parseFloat(E.target.value);o(T)},M=E=>{const T=Math.max(0,Math.min(y,e+E));o(T)},b=[.5,1,1.5,2];return s.jsxs("div",{className:"eic-timeline-card","aria-label":"Shared EIC Timeline Controls",children:[s.jsx("div",{className:"eic-scrubber-row",children:s.jsxs("div",{className:"eic-scrubber-track-wrap",children:[s.jsx("input",{id:x,type:"range",min:0,max:y,step:.1,value:e,onChange:f,className:"eic-timeline-slider","aria-label":g==="ar"?"شريط التمرير الزمني المتزامن":"Synchronized Timeline Scrubber"}),s.jsx("div",{className:"eic-slider-progress-fill",style:{width:`${p}%`}}),n.timePoints&&s.jsx("div",{className:"eic-timeline-milestones","aria-hidden":"true",children:n.timePoints.map((E,T)=>{const _=E.timestamp/y*100,v=e>=E.timestamp;return s.jsx("button",{type:"button",className:`eic-milestone-tick ${v?"passed":""}`,style:{left:`${_}%`},onClick:()=>o(E.timestamp),title:E.label||E.date},T)})})]})}),s.jsxs("div",{className:"eic-timeline-controls-row",children:[s.jsxs("div",{className:"eic-timeline-actions-left",children:[s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-step",onClick:()=>M(-5),title:g==="ar"?"تراجع 5 ثوانٍ":"Step Back 5s","aria-label":"Step Back 5s",children:s.jsx(Hd,{className:"icon-sm"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-play-primary",onClick:r,title:t?g==="ar"?"إيقاف مؤقت":"Pause":g==="ar"?"تشغيل":"Play","aria-label":t?"Pause":"Play",children:t?s.jsx(Ms,{className:"icon"}):s.jsx(Cn,{className:"icon"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-step",onClick:()=>M(5),title:g==="ar"?"تقدم 5 ثوانٍ":"Step Forward 5s","aria-label":"Step Forward 5s",children:s.jsx(sc,{className:"icon-sm"})}),s.jsx("button",{type:"button",className:"eic-control-btn eic-btn-reset",onClick:()=>o(0),title:g==="ar"?"إعادة إلى البداية":"Restart from beginning","aria-label":"Restart",children:s.jsx(lc,{className:"icon-xs"})}),s.jsxs("div",{className:"eic-timeline-time-display",children:[s.jsx("span",{className:"current",children:Xt.formatTime(e)}),s.jsx("span",{className:"sep",children:"/"}),s.jsx("span",{className:"total",children:Xt.formatTime(y)})]})]}),s.jsxs("div",{className:"eic-timeline-actions-right",children:[typeof h=="function"&&s.jsxs("button",{type:"button",className:`eic-control-btn eic-btn-sound ${d?"active":""}`,onClick:h,title:d?g==="ar"?"كتم النغمات الصوتية":"Mute visual sonification":g==="ar"?"تشغيل النغمات الصوتية":"Enable visual sonification","aria-pressed":d,children:[d?s.jsx(rn,{className:"icon-xs"}):s.jsx(Zn,{className:"icon-xs text-rose"}),s.jsx("span",{className:"btn-label",children:g==="ar"?"صوت":"Audio"})]}),s.jsxs("button",{type:"button",className:`eic-control-btn eic-btn-loop ${a?"active":""}`,onClick:c,title:g==="ar"?"تكرار مستمر":"Loop Playback","aria-pressed":a,children:[s.jsx(Eo,{className:"icon-xs"}),s.jsx("span",{className:"btn-label",children:g==="ar"?"تكرار":"Loop"})]}),s.jsxs("div",{className:"eic-speed-selector",children:[s.jsx(Ud,{className:"icon-xs text-muted","aria-hidden":"true"}),s.jsx("div",{className:"eic-speed-pills",children:b.map(E=>{const T=i===E;return s.jsxs("button",{type:"button",className:`eic-speed-pill ${T?"active":""}`,onClick:()=>l(E),"aria-pressed":T,children:[E,"x"]},E)})})]})]})]})]})},k0=({lang:n="en",theme:e="dark",initialResourceId:t="night-lights-decade"})=>{const[i,a]=C.useState(t||Et[0].id),[r,o]=C.useState(0),[l,c]=C.useState(!1),[d,h]=C.useState(1),[m,u]=C.useState(!0),g=cd(i)||Et[0],x=C.useRef(null);x.current||(x.current=new dd({onTimeUpdate:T=>o(T),onPlayStateChange:T=>c(T),onSpeedChange:T=>h(T),onEnded:()=>{m&&x.current?(x.current.seek(0),x.current.play()):c(!1)}}));const y=C.useCallback(T=>{T!==i&&(x.current&&(x.current.pause(),x.current.seek(0)),o(0),c(!1),a(T))},[i]),p=C.useCallback((T,_)=>{x.current&&x.current.attachVideo(T,_)},[]),f=C.useCallback(()=>{x.current&&x.current.togglePlay()},[]),M=C.useCallback(T=>{x.current&&x.current.seek(T),o(T)},[]),b=C.useCallback(T=>{x.current&&x.current.setSpeed(T)},[]),E=C.useCallback(()=>{u(T=>!T)},[]);return C.useEffect(()=>()=>{x.current&&x.current.detachVideo()},[]),s.jsxs("div",{className:`eic-experience-wrapper theme-${e}`,"aria-label":"NASA Earth Information Center Visualization Experience",children:[s.jsxs("section",{className:"eic-main-experience-grid",children:[s.jsx("div",{className:"eic-column-left",children:s.jsx(ko,{resource:g,currentTime:r,isPlaying:l,playbackSpeed:d,onTogglePlay:f,onVideoAttach:p,lang:n})}),s.jsx("div",{className:"eic-column-right",children:s.jsx(Bo,{resource:g,currentTime:r,onSeek:M,lang:n,theme:e})})]}),s.jsx("section",{className:"eic-timeline-section",children:s.jsx(ud,{resource:g,currentTime:r,isPlaying:l,playbackSpeed:d,isLooping:m,onTogglePlay:f,onSeek:M,onChangeSpeed:b,onToggleLoop:E,lang:n})}),s.jsx("section",{className:"eic-details-section",children:s.jsx(Go,{resource:g,lang:n})}),s.jsx("section",{className:"eic-selector-section",children:s.jsx(F0,{activeResourceId:i,onSelectResource:y,lang:n})})]})},Ct={en:{appTitle:"Terra-Tone",tagline:"NASA Earth Environmental Data Sonification & Visual Explorer",badgeNasa:"NASA Space Apps",skipToContent:"Skip to main content",langToggle:"العربية",themeToggle:"Toggle Theme",themeLight:"Light Mode (Eye Comfort)",themeDark:"Dark Space Mode",highContrast:"High Contrast",largeText:"Large Text",shortcutsBtn:"Shortcuts (H)",mute:"Mute",unmute:"Unmute",audioReady:"Audio Active",audioBlocked:"Click to Enable Audio",announceToggle:"Speech During Play",announceOn:"Announce: Every 5th Year",announceOff:"Announce: Manual Only",onboardingTitle:"Try This: 3 Steps to Listen to Earth",step1Title:"1. Pick a Location or GPS",step1Desc:"Click preset Egyptian cities (Zagazig, Alexandria, Cairo, Aswan), click your GPS, or tap anywhere on Earth.",step2Title:"2. Explore Satellite Frames",step2Desc:"Toggle real NASA GIBS satellite imagery: Land Surface Temp, True Color, Rainfall, or NDVI Vegetation.",step3Title:"3. Listen to the Frame",step3Desc:'Click "Sonify Point" to hear the pixel under the marker, or click "Scan the Frame" to hear an audio sweep across the map!',dismiss:"Got it",gibsSectionHeading:"NASA GIBS Satellite Frame Viewer",gibsLayerSelect:"Satellite Imagery Layer:",gibsDate:"Frame Date",gibsPlay:"Animate Frames",gibsPause:"Pause Frames",gibsOpacity:"Opacity",sonifyPixelBtn:"Sonify Point from Frame",scanFrameBtn:"Scan the Frame",scanning:"Scanning Frame...",framePixelSampled:"Sampled from Frame",luminanceNotice:"Derived from pixel luminance (RGB true color / colormap unmapped)",colormapNotice:"Derived via calibrated NASA GIBS colormap",legend:"Layer Legend",toggleLegend:"Toggle Legend",pixelValueLabel:"Pixel value at marker:",variableLabel:"Earth Variable:",selectVariableAria:"Select climate variable to visualize and sonify",secondaryLayerLabel:"Second Layer (Volume Modulation):",secondaryNone:"None (Single Variable)",pitchMappingLabel:"Dynamic Pitch Mapping:",locationPresetLabel:"Location Presets & GPS:",gpsBtn:"Detect GPS Location",gpsLoading:"Acquiring GPS...",gpsError:"GPS access denied or unavailable",returnToChart:"Back to Chart View",customLocation:"Custom Point",compareModeLabel:"Compare Two Locations",locationA:"Location A (Left Channel)",locationB:"Location B (Right Channel)",clickMapToSelect:"Click anywhere on the map to set coordinates",coordinates:"Lat: {lat}, Lon: {lon}",timelineHeading:"Timeline & Audio Playback",year:"Year",currentYearLabel:"Current Year: {year}",play:"Play",pause:"Pause",stepBack:"Previous Year (Left Arrow)",stepForward:"Next Year (Right Arrow)",speed:"Speed",loop:"Loop Playback",yearSliderAria:"Scrub timeline year",audioHeading:"Sonification Controls",volume:"Volume",instrument:"Instrument",instrumentSine:"Pure Sine",instrumentTriangle:"Warm Triangle",instrumentPluck:"Soft Pluck",musicalScale:"Pentatonic Scale",scaleOn:"Scale Snapped",scaleOff:"Continuous Pitch",spatialStereo:"Stereo Spatial Sonification",recordCueTip:"High & low record chimes enabled",chartHeading:"Historical Trend ({range})",dataSubheading:"NASA POWER Ground-Level Observations",chartAriaLabel:"Line chart depicting historical data with trendline and moving cursor",dataTableView:"Data Table",chartView:"Chart View",trendline:"Linear Trendline",recordHigh:"Record High",recordLow:"Record Low",runningRecordHigh:"New High Record",runningRecordLow:"New Low Record",insightsHeading:"Plain Language Climate Insights",changePerDecade:"Change per Decade",totalTrendChange:"Total Period Change",percentChange:"Percent Change",significanceTest:"Statistical Significance",significant:"Statistically Significant (p < 0.05)",notSignificant:"Not Statistically Significant (p ≥ 0.05)",pValueLabel:"p-value: {p}",readSummaryBtn:"Spoken Summary (TTS)",stopSpeakingBtn:"Stop Speech",speakingState:"Speaking...",historicalRange:"Baseline to Latest Observations",tableCaption:"Annual values and historical anomalies for selected location",colYear:"Year",colValue:"Value",colAnomaly:"Anomaly (Diff from baseline)",colRecords:"Records & Notes",downloadCsv:"Download CSV",aboutHeading:"About Terra-Tone",aboutMission:'Terra-Tone was built for the NASA Space Apps Challenge "The Earth Information Jukebox". It makes multi-decadal NASA Earth science data accessible to everyone, especially people who are blind, visually impaired, or neurodivergent, through real-time harmonic sonification synchronized with spatial and chart visuals.',howSonificationWorks:"How Sonification Works:",sonificationExplanation:"Data values and satellite pixel readings are mapped to pitch using a harmonious pentatonic scale (C3 to C6). In Point Mode, the pixel RGB under the map marker is extracted from the NASA GIBS satellite frame and decoded via calibrated colormaps or luminance. In Scan Mode, a sweep across 40 columns sonifies the visible geography from west to east in real time. When comparing two locations, Location A is positioned in the left stereo ear and Location B in the right stereo ear, allowing you to hear climatic divergence in stereo space. Distinct bell and chime cues alert listeners when historical records are broken.",dataCrediting:"Data Sources: NASA GIBS (Global Imagery Browse Services) WMTS API and NASA POWER API (Prediction Of Worldwide Energy Resources) via NASA Langley Research Center.",keyboardHelpHeading:"Keyboard Shortcuts",shortcutSpace:"Play / Pause timeline playback",shortcutArrowsLR:"Step backward / forward by 1 year",shortcutArrowsUD:"Increase / decrease playback speed",shortcutM:"Mute / Unmute audio",shortcutH:"Open this keyboard shortcuts dialog",shortcutClose:"Close Modal",statusAnnounce:"Year {year}, {variable}: {value} {unit}. {recordNotice}",statusCompareAnnounce:"Year {year}: {locA} is {valA} {unit}, {locB} is {valB} {unit}.",statusPlaybackStarted:"Timeline playback started at {speed}x speed.",statusPlaybackPaused:"Timeline playback paused at year {year}.",statusLocationChanged:"Location changed to {name} at latitude {lat}, longitude {lon}.",modeTemperatureTab:"Temperature & Climate (NASA POWER)",modeAirTab:"Stage 1: Air Pollution",modeWaterTab:"Stage 2: Water Pollution",modeSoilTab:"Stage 3: Soil Pollution"},ar:{appTitle:"تيرا-تون (Terra-Tone)",tagline:"تحويل البيانات البيئية وصور الأقمار الصناعية لوكالة ناسا إلى صوت وموسيقى",badgeNasa:"تحدي ناسا لتطبيقات الفضاء",skipToContent:"الانتقال إلى المحتوى الرئيسي",langToggle:"English",themeToggle:"تغيير السمة",themeLight:"الوضع النهاري المريح للعين",themeDark:"الوضع الليلي الكوني",highContrast:"تباين عالي",largeText:"خط كبير",shortcutsBtn:"اختصارات لوحة المفاتيح (H)",mute:"كتم الصوت",unmute:"تشغيل الصوت",audioReady:"الصوت نشط",audioBlocked:"اضغط لتفعيل الصوت",announceToggle:"النطق أثناء التشغيل",announceOn:"الإعلانات: كل 5 سنوات",announceOff:"الإعلانات: يدوي فقط",onboardingTitle:"جرّب هذا: 3 خطوات للاستماع إلى كوكب الأرض",step1Title:"1. اختر موقعاً أو حدد GPS",step1Desc:"انقر على مدن مصرية جاهزة (الزقازيق، الإسكندرية، القاهرة، أسوان)، أو اضغط على موقعك عبر GPS أو أي نقطة على الخريطة.",step2Title:"2. استكشف إطارات الأقمار الصناعية",step2Desc:"اختر صور أقمار ناسا الحقيقية (NASA GIBS): حرارة سطح الأرض، الألوان الطبيعية، هطول الأمطار، أو مؤشر الغطاء النباتي.",step3Title:"3. استمع إلى بيانات الإطار الفضائي",step3Desc:'اضغط "تحويل النقطة لصوت" لسماع قيمة البكسل تحت العلامة، أو "مسح الإطار" لسماع مسح صوتي مجسم للمنطقة الظاهرة كاملة!',dismiss:"فهمت ذلك",gibsSectionHeading:"عارض إطارات الأقمار الصناعية (NASA GIBS)",gibsLayerSelect:"طبقة القمر الصناعي:",gibsDate:"تاريخ الإطار الفضائي",gibsPlay:"تشغيل حركة الإطارات",gibsPause:"إيقاف حركة الإطارات",gibsOpacity:"الشفافية",sonifyPixelBtn:"تحويل النقطة من الإطار لصوت",scanFrameBtn:"مسح الإطار صوتياً",scanning:"جاري مسح الإطار...",framePixelSampled:"العينة المأخوذة من الإطار",luminanceNotice:"مستنتج من سطوع البكسل (ألوان طبيعية / بدون خريطة ألوان)",colormapNotice:"مستخرج عبر خريطة ألوان ناسا المعايرة",legend:"دليل الألوان والوحدات",toggleLegend:"إظهار/إخفاء دليل الألوان",pixelValueLabel:"قيمة البكسل عند العلامة:",variableLabel:"المتغير البيئي:",selectVariableAria:"اختر المتغير المناخي للعرض والتحويل السمعي",secondaryLayerLabel:"الطبقة الصوتية الثانية (تعديل مستوى الصوت):",secondaryNone:"بدون (متغير فردي)",pitchMappingLabel:"نطاق درجات النغمات الموسيقية:",locationPresetLabel:"المواقع الجاهزة وتحديد GPS:",gpsBtn:"تحديد موقعي عبر GPS",gpsLoading:"جاري تحديد موقعك...",gpsError:"تعذر الوصول إلى نظام GPS",returnToChart:"العودة إلى الرسم البياني",customLocation:"نقطة مخصصة",compareModeLabel:"مقارنة موقعين معاً",locationA:"الموقع أ (القناة اليسرى)",locationB:"الموقع ب (القناة اليمنى)",clickMapToSelect:"انقر على الخريطة لتحديد الإحداثيات",coordinates:"خط العرض: {lat}، خط الطول: {lon}",timelineHeading:"الخط الزمني والتشغيل الصوتي",year:"السنة",currentYearLabel:"السنة الحالية: {year}",play:"تشغيل",pause:"إيقاف مؤقت",stepBack:"السنة السابقة (السهم الأيسر)",stepForward:"السنة التالية (السهم الأيمن)",speed:"السرعة",loop:"تكرار التشغيل",yearSliderAria:"شريط التنقل عبر السنوات",audioHeading:"إعدادات التحويل الصوتي (Sonification)",volume:"مستوى الصوت",instrument:"الآلة الموسيقية",instrumentSine:"نغمة جيبية نقية (Sine)",instrumentTriangle:"مثلثية دافئة (Triangle)",instrumentPluck:"عزف أوتار ناعم (Soft Pluck)",musicalScale:"السلم الموسيقي الخماسي (Pentatonic)",scaleOn:"مطابق للسلم",scaleOff:"تردد متصل حر",spatialStereo:"توزيع صوتي مجسم (Stereo)",recordCueTip:"نغمات التنبيه للقيم القياسية مفعلة",chartHeading:"المسار التاريخي ({range})",dataSubheading:"أرصاد وكالة ناسا باور (NASA POWER) الأرضية",chartAriaLabel:"مخطط بياني يوضح البيانات التاريخية مع خط الاتجاه ومؤشر متحرك",dataTableView:"جدول البيانات",chartView:"الرسم البياني",trendline:"خط الاتجاه الخطي",recordHigh:"أعلى رقم قياسي",recordLow:"أدنى رقم قياسي",runningRecordHigh:"رقم قياسي مرتفع جديد",runningRecordLow:"رقم قياسي منخفض جديد",insightsHeading:"تحليلات المناخ بلغة واضحة",changePerDecade:"التغير لكل عقد (10 سنوات)",totalTrendChange:"إجمالي التغير خلال الفترة",percentChange:"نسبة التغير المئوية",significanceTest:"الدلالة الإحصائية",significant:"تغير دال إحصائياً (p < 0.05)",notSignificant:"تغير غير دال إحصائياً (p ≥ 0.05)",pValueLabel:"القيمة الاحتمالية p: {p}",readSummaryBtn:"قراءة الملخص صوتياً (TTS)",stopSpeakingBtn:"إيقاف القراءة",speakingState:"جاري القراءة...",historicalRange:"من خط الأساس حتى أحدث الأرصاد",tableCaption:"القيم السنوية والانحرافات التاريخية للموقع المحدد",colYear:"السنة",colValue:"القيمة",colAnomaly:"الانحراف (الفرق عن خط الأساس)",colRecords:"الأرقام القياسية والملاحظات",downloadCsv:"تنزيل ملف CSV",aboutHeading:"حول مشروع تيرا-تون (Terra-Tone)",aboutMission:'تم تصميم Terra-Tone لتحدي ناسا لتطبيقات الفضاء "صندوق معلومات الأرض"، بهدف إتاحة بيانات علوم الأرض والصور الفضائية الصادرة عن ناسا للجميع، وخخاصة المكفوفين وضعاف البصر، عبر التحويل الصوتي المتناغم والمتزامن مع الخرائط والرسوم البيانية.',howSonificationWorks:"كيف يعمل التحويل الصوتي (Sonification):",sonificationExplanation:"تُحوَّل قيم البيانات وقراءات بكسلات الأقمار الصناعية إلى طبقات نغمية باستخدام السلم الموسيقي الخماسي المتناغم (من C3 حتى C6). في نمط النقطة، يتم قراءة بكسل RGB من إطار قمر ناسا الفضائي أسفل العلامة المحددة وتحويله إلى قيمة فيزيائية باستخدام خريطة الألوان المعايرة أو السطوع. وفي نمط المسح، يتم مسح 40 عموداً عبر الخريطة للاستماع لتضاريس المنطقة المعروضة كاملة. وعند مقارنة موقعين، يُوجَّه الموقع الأول للأذن اليسرى والموقع الثاني للأذن اليمنى للاستماع للاختلافات المناخية في فضاء ستيريو مجسم.",dataCrediting:"مصادر البيانات: واجهة إطارات الأقمار الصناعية (NASA GIBS WMTS API) وواجهة ناسا باور (NASA POWER API) من مركز لانغلي للأبحاث التابع لناسا.",keyboardHelpHeading:"اختصارات لوحة المفاتيح",shortcutSpace:"تشغيل / إيقاف مؤقت للخط الزمني",shortcutArrowsLR:"الانتقال سنة للخلف / للأمام",shortcutArrowsUD:"زيادة / تقليل سرعة التشغيل",shortcutM:"كتم / تشغيل الصوت",shortcutH:"فتح نافذة اختصارات لوحة المفاتيح",shortcutClose:"إغلاق النافذة",statusAnnounce:"سنة {year}، {variable}: {value} {unit}. {recordNotice}",statusCompareAnnounce:"سنة {year}: {locA} بقيمة {valA} {unit}، و{locB} بقيمة {valB} {unit}.",statusPlaybackStarted:"بدأ تشغيل الخط الزمني بسرعة {speed}x.",statusPlaybackPaused:"تم إيقاف تشغيل الخط الزمني عند سنة {year}.",statusLocationChanged:"تم تغيير الموقع إلى {name} عند خط عرض {lat}، وخط طول {lon}.",modeTemperatureTab:"الحرارة والمناخ (NASA POWER)",modeAirTab:"المرحلة 1: تلوث الهواء",modeWaterTab:"المرحلة 2: تلوث المياه",modeSoilTab:"المرحلة 3: تلوث التربة"}};function B0({isOpen:n=!1,onClose:e=()=>{},lang:t="en"}){const i=Ct[t]||Ct.en,a=C.useRef(null),r=C.useRef(null);if(C.useEffect(()=>{var l;n&&((l=r.current)==null||l.focus())},[n]),!n)return null;const o=[{key:"Space",desc:i.shortcutSpace},{key:"← / →",desc:i.shortcutArrowsLR},{key:"↑ / ↓",desc:i.shortcutArrowsUD},{key:"M",desc:i.shortcutM},{key:"H",desc:i.shortcutH},{key:"Esc",desc:i.shortcutClose}];return s.jsx("div",{className:"modal-backdrop",onClick:e,role:"presentation",children:s.jsxs("div",{className:"modal-content",role:"dialog","aria-modal":"true","aria-labelledby":"shortcuts-modal-title",ref:a,onClick:l=>l.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-row",children:[s.jsx(Od,{className:"icon-md","aria-hidden":"true"}),s.jsx("h2",{id:"shortcuts-modal-title",className:"modal-title",children:i.keyboardHelpHeading})]}),s.jsx("button",{ref:r,type:"button",className:"btn-modal-close",onClick:e,"aria-label":i.shortcutClose,children:s.jsx(Ts,{className:"icon","aria-hidden":"true"})})]}),s.jsx("div",{className:"modal-body",children:s.jsxs("table",{className:"shortcuts-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t==="ar"?"المفتاح":"Key"}),s.jsx("th",{scope:"col",children:t==="ar"?"الوظيفة":"Action"})]})}),s.jsx("tbody",{children:o.map((l,c)=>s.jsxs("tr",{children:[s.jsx("td",{className:"key-cell",children:s.jsx("kbd",{className:"kbd-shortcut",children:l.key})}),s.jsx("td",{className:"desc-cell",children:l.desc})]},c))})]})}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{type:"button",className:"btn-primary",onClick:e,children:i.shortcutClose})})]})})}const Wn=[{id:"MODIS_Terra_Land_Surface_Temp_Day",colormapId:"MODIS_Land_Surface_Temp",nameEn:"Land Surface Temp (Day)",nameAr:"حرارة سطح الأرض (نهاراً)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,startDate:"2000-02-24",unitEn:"°C",unitAr:"م°",isTemperature:!0,legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.svg",descriptionEn:"Daily land surface temperature from MODIS Terra, showing regional heat islands, desert heat, and seasonal thermal shifts.",descriptionAr:"درجة حرارة سطح الأرض النهارية من القمر الصناعي تيرا، توضح جزر الحرارة الحضرية وحرارة الصحراء."},{id:"MODIS_Terra_CorrectedReflectance_TrueColor",colormapId:null,nameEn:"Natural Color Imagery (True Color)",nameAr:"صور الألوان الطبيعية الحقيقية",format:"jpeg",ext:"jpeg",tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,startDate:"2000-02-24",unitEn:"Reflectance (Luminance)",unitAr:"السطوع والانعكاس",isTemperature:!1,legendUrl:null,descriptionEn:"Daily true-color optical satellite imagery from MODIS Terra showing actual atmospheric clouds, oceans, vegetation, and terrain.",descriptionAr:"صور فضائية بالألوان الحقيقية اليومية من قمر تيرا توضح السحب، الغطاء النباتي، والتضاريس."},{id:"IMERG_Precipitation_Rate",colormapId:"GPM_Precipitation_Rate",nameEn:"Precipitation Rate (IMERG)",nameAr:"معدل هطول الأمطار (IMERG)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,startDate:"2000-06-01",unitEn:"mm/hr",unitAr:"ملم/ساعة",isTemperature:!1,legendUrl:"https://gibs.earthdata.nasa.gov/legends/GPM_Precipitation_Rate_H.svg",descriptionEn:"GPM IMERG multi-satellite precipitation rate estimates depicting rainfall intensity and severe storms worldwide.",descriptionAr:"تقديرات هطول الأمطار من مهمة قياس الأمطار العالمية (GPM IMERG) لرصد شدة الأمطار والعواصف."},{id:"MODIS_Terra_NDVI_8Day",colormapId:"MODIS_NDVI",nameEn:"Vegetation Index (NDVI)",nameAr:"مؤشر الغطاء النباتي (NDVI)",format:"png",ext:"png",tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,startDate:"2025-02-12",unitEn:"NDVI",unitAr:"NDVI",isTemperature:!1,legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_NDVI_H.svg",descriptionEn:"Rolling 8-day Normalized Difference Vegetation Index measuring plant chlorophyll and canopy greenness.",descriptionAr:"مؤشر الغطاء النباتي المقاس كل 8 أيام لرصد كثافة وصحة النباتات والمحاصيل الزراعية."}],cr=new Map,ss=new Map,Ka=new Map;function sn(n,e,t,i,a){const r=typeof n=="object"&&n!==null?n:Wn.find(c=>c.id===n)||Wn[0];return`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${r.gibsLayerId||r.id}/default/${e||"default"}/${r.tileMatrixSet}/${t}/${i}/${a}.${r.ext||"png"}`}function pn(n,e,t){const i=Math.pow(2,t),a=Math.max(-85.0511,Math.min(85.0511,n)),r=(e+180)/360*i,o=a*Math.PI/180,l=(1-Math.log(Math.tan(o)+1/Math.cos(o))/Math.PI)/2*i,c=(Math.floor(r)%i+i)%i,d=Math.max(0,Math.min(i-1,Math.floor(l))),h=Math.floor((r-Math.floor(r))*256),m=Math.floor((l-Math.floor(l))*256);return{tileX:c,tileY:d,pixelX:Math.max(0,Math.min(255,h)),pixelY:Math.max(0,Math.min(255,m))}}async function hd(n){const e=typeof n=="object"&&n!==null?n:Wn.find(o=>o.id===n);if(!e||!e.colormapId)return null;const t=e.colormapId;if(cr.has(t))return cr.get(t);const i=e.gibsLayerId||e.id,a=[`https://gibs.earthdata.nasa.gov/colormaps/v1.3/${t}.xml`,`https://gibs.earthdata.nasa.gov/colormaps/v1.3/${i}.xml`];let r=null;for(const o of a)try{const l=await fetch(o);if(!l.ok){r=new Error(`HTTP ${l.status}`);continue}const c=await l.text(),m=new DOMParser().parseFromString(c,"text/xml").querySelectorAll("ColorMapEntry"),u=[];if(m.forEach(g=>{const x=g.getAttribute("rgb"),y=g.getAttribute("value"),p=g.getAttribute("transparent")==="true",f=g.getAttribute("nodata")==="true";if(x&&y&&!f&&!p){const[M,b,E]=x.split(",").map(Number),v=y.replace(/[\[\(\]\)]/g,"").split(",").map(O=>O.includes("INF")?NaN:Number(O));let N=NaN;v.length===2&&!isNaN(v[0])&&!isNaN(v[1])?N=(v[0]+v[1])/2:isNaN(v[0])?v.length===2&&!isNaN(v[1])&&(N=v[1]):N=v[0],!isNaN(M)&&!isNaN(b)&&!isNaN(E)&&!isNaN(N)&&u.push({r:M,g:b,b:E,value:N})}}),u.length>0)return cr.set(t,u),u}catch(l){r=l,console.warn(`Failed fetching colormap from ${o}:`,l)}return r&&console.warn(`Colormap unavailable for ${t}:`,r),null}function G0(n,e,t,i,a){if(n===0&&e===0&&t===0)return{value:null,isLuminance:!1,label:"No Data"};if(i&&i.length>0&&!(a!=null&&a.useLuminance)){let o=1/0,l=null;for(let c=0;c<i.length;c++){const d=i[c],h=n-d.r,m=e-d.g,u=t-d.b,g=h*h+m*m+u*u;if(g<o&&(o=g,l=d.value,g===0))break}if(o<2500&&l!==null){let c=l;(a!=null&&a.isTemperature||a!=null&&a.isKelvin)&&c>100&&(c=c-273.15);const d=Math.abs(c)<2?3:Math.abs(c)<20?2:1;return{value:parseFloat(c.toFixed(d)),isLuminance:!1,label:`${c.toFixed(d)} ${(a==null?void 0:a.unitEn)||""}`.trim()}}}const r=(.299*n+.587*e+.114*t)/255;return{value:parseFloat((r*100).toFixed(1)),isLuminance:!0,label:`${(r*100).toFixed(0)}% Luminance`}}function gs(n){if(ss.has(n))return ss.get(n);const e=new Promise(t=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>t({ok:!0,img:i}),i.onerror=()=>t({ok:!1,img:null}),i.src=n});return ss.set(n,e),e}function z0(n=[]){n.forEach(e=>{e&&!ss.has(e)&&gs(e)})}async function qn(n,e,t,i,a){const r=(a==null?void 0:a.id)||(a==null?void 0:a.gibsLayerId)||"default",o=`${n}_${e}_${t}_${r}_${i?i.length:0}`;if(Ka.has(o))return Ka.get(o);const l=await gs(n);if(!l.ok||!l.img)return{value:null,isLuminance:!1,label:"Tile Missing / No Data",missingTile:!0};try{const c=document.createElement("canvas");c.width=256,c.height=256;const d=c.getContext("2d",{willReadFrequently:!0});d.drawImage(l.img,0,0);const h=d.getImageData(e,t,1,1).data,m=h[0],u=h[1],g=h[2];if(h[3]===0){const f={value:null,isLuminance:!1,label:"Empty Tile / Clouds",r:m,g:u,b:g,emptyPixel:!0};return Ka.set(o,f),f}const p={...G0(m,u,g,i,a),r:m,g:u,b:g};return Ka.set(o,p),p}catch(c){return console.warn("Canvas pixel read error (CORS or canvas issue):",c),{value:null,isLuminance:!0,label:"Sampling Unavailable",corsError:!0}}}const $n=[{id:"air",stageNumber:1,titleEn:"Stage 1: Air Pollution",titleAr:"المرحلة 1: تلوث الهواء",shortEn:"Air Pollution",shortAr:"تلوث الهواء",subtitleEn:"Atmospheric aerosols (PM2.5 proxy), total column ozone (O₃), and carbon monoxide (CO).",subtitleAr:"الهباء الجوي (كمؤشر للجسيمات الدقيقة PM2.5)، وإجمالي عمود الأوزون، وأول أكسيد الكربون.",accentColor:"#38bdf8",honestyBannerEn:null,honestyBannerAr:null,presets:[{id:"cairo",nameEn:"Cairo",nameAr:"القاهرة",lat:30.0444,lon:31.2357},{id:"delhi",nameEn:"Delhi",nameAr:"دلهي",lat:28.6139,lon:77.209},{id:"beijing",nameEn:"Beijing",nameAr:"بكين",lat:39.9042,lon:116.4074},{id:"los_angeles",nameEn:"Los Angeles",nameAr:"لوس أنجلوس",lat:34.0522,lon:-118.2437}],defaultZoom:4,animations:[{id:"air_aod",stageId:"air",gibsLayerId:"MERRA2_Aerosol_Optical_Depth_Analysis_Monthly",colormapId:"MERRA2_Aerosol_Optical_Depth_Analysis_Monthly",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MERRA2_Aerosol_Optical_Depth_Analysis_Monthly_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Aerosol Optical Depth (PM2.5 Proxy)",titleAr:"العمق البصري للهباء الجوي (مؤشر PM2.5)",provider:"NASA GMAO / MERRA-2",variableEn:"Aerosol Optical Depth (550 nm)",variableAr:"العمق البصري للهباء الجوي",unitEn:"AOD",unitAr:"AOD",isProxy:!0,proxyBadgeEn:"PM2.5 Proxy (AOD)",proxyBadgeAr:"بديل PM2.5 (هباء جوي)",availableRange:{start:"1980-01-01",end:"2026-08-01"},cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-08-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:0,max:.9},pairedPowerParam:"AOD_55",whatItIsEn:"Aerosol Optical Depth (AOD) measures how much sunlight is scattered or absorbed by airborne particles like dust, smoke, urban haze, and sulfates. Because NASA GIBS does not offer a continuously updated global surface PM2.5 time-series layer, total AOD is used here as a scientific proxy for fine particulate air pollution.",whatItIsAr:"يقيس العمق البصري للهباء الجوي (AOD) مقدار حجب الجسيمات العالقة في الهواء (كالغبار والدخان والضباب الدخاني) لأشعة الشمس. ونظراً لعدم توفر طبقة محدثة يومياً للجسيمات الدقيقة PM2.5 في GIBS، يُستخدم هذا المقياس كمؤشر علمي بديل لتلوث الجسيمات الدقيقة.",whyItMattersEn:"High aerosol concentrations reduce visibility and correlate with elevated PM2.5 exposure, which can trigger asthma, cardiovascular strain, and respiratory illness.",whyItMattersAr:"تشير القيم المرتفعة للهباء الجوي إلى زيادة تركيز الجسيمات العالقة التي تؤثر على جودة التنفس وصحة القلب والرئتين.",whatTrendShowsEn:"Seasonal spikes reveal dust storms, wildfire smoke plumes, and industrial haze peaks across cities and deserts.",whatTrendShowsAr:"تُظهر الذروات الموسمية عواصف الغبار، وأعمدة دخان الحرائق، وموجات الضباب الدخاني الحضري.",limitationEn:"Proxy metric: measures total atmospheric column aerosols (~50 km MERRA-2 grid), not ground-level PM2.5 µg/m³ directly.",limitationAr:"مؤشر بديل: يقيس الهباء الجوي في كامل العمود الجوي بدقة ~50 كم، وليس تركيز PM2.5 على مستوى التنفس مباشرة."},{id:"air_ozone",stageId:"air",gibsLayerId:"OMI_Ozone_DOAS_Total_Column",colormapId:"OMI_Ozone_DOAS_Total_Column",legendUrl:"https://gibs.earthdata.nasa.gov/legends/OMI_Ozone_DOAS_Total_Column_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Total Column Ozone (O₃)",titleAr:"إجمالي عمود الأوزون (O₃)",provider:"NASA Aura / OMI (DOAS v3)",variableEn:"Total Column Ozone",variableAr:"إجمالي عمود الأوزون",unitEn:"DU",unitAr:"وحدة دوبسون",isProxy:!1,proxyBadgeEn:"Total Column O₃",proxyBadgeAr:"عمود الأوزون الكلي",availableRange:{start:"2004-10-01",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"09",day:"15"},valueDomain:{min:200,max:450},pairedPowerParam:"TO3",whatItIsEn:"Total Column Ozone (measured in Dobson Units, DU) represents the total amount of ozone gas from Earth’s surface up to the top of the stratosphere, observed daily by NASA’s Aura OMI instrument.",whatItIsAr:"يمثل إجمالي عمود الأوزون (بوحدة دوبسون DU) الكمية الكلية لغاز الأوزون من سطح الأرض حتى أعلى الغلاف الجوي عبر قمر أورا (Aura OMI).",whyItMattersEn:"Stratospheric ozone shields life from harmful UV radiation, while excess ground-level ozone is a toxic respiratory pollutant. Tracking column changes helps monitor ozone depletion and atmospheric transport.",whyItMattersAr:"يحمي أوزون الستراتوسفير الحياة من الأشعة فوق البنفسجية، بينما يضر الأوزون السطحي بالرئتين. يساعد التتبع على مراقبة التغيرات الموسمية وثقب الأوزون.",whatTrendShowsEn:"Strong latitudinal bands and spring polar depletion cycles show how atmospheric circulation redistributes ozone around the globe.",whatTrendShowsAr:"توضح الخرائط التوزيع عبر خطوط العرض والتغيرات الموسمية في طبقة الأوزون حول العالم.",limitationEn:"Column measurement combines stratospheric (~90%) and tropospheric (~10%) ozone; daily frames may show narrow orbital gaps.",limitationAr:"يقيس العمود الكلي الأوزون الستراتوسفيري والسطحي معاً، وقد تظهر فجوات مدارية بسيطة في بعض الأيام."},{id:"air_co",stageId:"air",gibsLayerId:"AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Monthly_Day",colormapId:"AIRS_Carbon_Monoxide_Volume_Mixing_Ratio",legendUrl:"https://gibs.earthdata.nasa.gov/legends/AIRS_Carbon_Monoxide_Volume_Mixing_Ratio_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Carbon Monoxide (CO at 500 hPa)",titleAr:"أول أكسيد الكربون (CO عند 500 هكتوباسكال)",provider:"NASA JPL / Aqua AIRS (L3 Monthly)",variableEn:"Carbon Monoxide Mixing Ratio",variableAr:"نسبة مزج أول أكسيد الكربون",unitEn:"ppbv",unitAr:"جزء/مليار",isProxy:!1,proxyBadgeEn:"Combustion Tracer",proxyBadgeAr:"مؤشر الاحتراق والحرائق",availableRange:{start:"2002-09-01",end:"2026-09-01"},skipDates:["2025-05-01","2025-06-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-09-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"08",day:"01"},valueDomain:{min:40,max:250},pairedPowerParam:null,whatItIsEn:"Carbon monoxide (CO) is a colorless, toxic gas produced by incomplete burning of fossil fuels, biomass, and wildfires. Aqua AIRS tracks mid-tropospheric CO concentrations globally every month in parts per billion by volume (ppbv).",whatItIsAr:"أول أكسيد الكربون غاز سام ينتج عن الاحتراق غير الكامل للوقود الأحفوري وحرائق الغابات، ويرصده مسبار AIRS على القمر أكوا شهرياً بوحدة جزء في المليار (ppbv).",whyItMattersEn:"CO persists for weeks in the atmosphere, travelling across oceans to degrade downwind air quality and contributing to ground-level ozone formation.",whyItMattersAr:"يبقى الغاز لأسابيع في الجو وينتقل عبر القارات مسبباً تدهور جودة الهواء وتكوّن الأوزون السطحي الضار.",whatTrendShowsEn:"Plumes highlight major wildfire seasons (Amazon, Central Africa, boreal forests) and urban/industrial combustion corridors.",whatTrendShowsAr:"تُبرز الأعمدة المرتفعة مواسم حرائق الغابات الكبرى وممرات الانبعاثات الصناعية.",limitationEn:"Measured at 500 hPa (~5.5 km altitude), capturing transported plumes rather than direct street-level exhaust.",limitationAr:"يُقاس على مستوى ضغط 500 هكتوباسكال (~5.5 كم ارتفاعاً)، مما يعكس انتقال السحب الملوثة أكثر من عوادم الشوارع المباشرة."}]},{id:"water",stageNumber:2,titleEn:"Stage 2: Water Pollution",titleAr:"المرحلة 2: تلوث المياه",shortEn:"Water Pollution",shortAr:"تلوث المياه",subtitleEn:"Ocean chlorophyll-a (algal blooms), sea surface temperature stress, and coastal turbidity/ocean color.",subtitleAr:"الكلوروفيل-أ (الازدهار الطحلبي)، وحرارة سطح البحر، ولون المحيط وعكارة الرواسب الساحلية.",accentColor:"#10b981",honestyBannerEn:null,honestyBannerAr:null,presets:[{id:"nile_delta_sea",nameEn:"Nile Delta Coast",nameAr:"ساحل دلتا النيل",lat:31.65,lon:31.1},{id:"gulf_mexico",nameEn:"Gulf of Mexico",nameAr:"خليج المكسيك",lat:28.8,lon:-89.4},{id:"baltic_sea",nameEn:"Baltic Sea",nameAr:"بحر البلطيق",lat:57.5,lon:19.5},{id:"red_sea",nameEn:"Red Sea",nameAr:"البحر الأحمر",lat:24.5,lon:36.2}],defaultZoom:5,animations:[{id:"water_chlorophyll",stageId:"water",gibsLayerId:"MODIS_Aqua_L2_Chlorophyll_A",colormapId:"MODIS_Chlorophyll",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Chlorophyll_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,ext:"png",titleEn:"Chlorophyll-a (Algal Blooms)",titleAr:"الكلوروفيل-أ (الازدهار الطحلبي)",provider:"NASA OBPG / Aqua MODIS (L2)",variableEn:"Chlorophyll-a Concentration",variableAr:"تركيز الكلوروفيل-أ",unitEn:"mg/m³",unitAr:"ملغم/م³",isProxy:!1,proxyBadgeEn:"Algal Bloom Indicator",proxyBadgeAr:"مؤشر ازدهار الطحالب",availableRange:{start:"2002-07-04",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"15"},valueDomain:{min:.01,max:10},pairedPowerParam:null,whatItIsEn:"Chlorophyll-a measures the concentration of microscopic marine algae (phytoplankton) in surface ocean and coastal waters, retrieved by NASA’s Aqua MODIS sensor.",whatItIsAr:"يقيس الكلوروفيل-أ تركيز العوالق النباتية والطحالب الدقيقة في المياه السطحية للبحار والسواحل عبر القمر الصناعي أكوا (MODIS).",whyItMattersEn:"Excess fertilizer and sewage runoff trigger massive algal blooms (eutrophication). When blooms die and decay, they strip oxygen from water and create marine dead zones.",whyItMattersAr:"يؤدي تسرب الأسمدة ومياه الصرف إلى انفجار نمو الطحالب (التخثث)، وعند تحللها تستهلك الأكسجين مسببة مناطق ميتة تقتل الأسماك.",whatTrendShowsEn:"Bright green/yellow coastal hotspots near river deltas and enclosed seas reveal nutrient runoff and seasonal bloom outbreaks.",whatTrendShowsAr:"تُظهر البقع الساحلية المرتفعة عند مصبات الأنهار والبحار المغلقة تركيزات التغذية الزائدة ومواسم الازدهار الطحلبي.",limitationEn:"Optical sensor cannot see through clouds or sun glint; blank/missing coastal pixels occur on cloudy sample dates.",limitationAr:"تتأثر القياسات الضوئية بالسحب وانعكاس الشمس، وقد تظهر فراغات في الأيام الغائمة، ولا تغطي الأنهار الصغيرة."},{id:"water_sst",stageId:"water",gibsLayerId:"MODIS_Aqua_L3_SST_Thermal_4km_Day_Monthly",colormapId:"MODIS_Sea_Surface_Temperature",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Sea_Surface_Temperature_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Sea Surface Temperature (Thermal Stress)",titleAr:"درجة حرارة سطح البحر (الإجهاد الحراري)",provider:"NASA OBPG / PO.DAAC / Aqua MODIS (L3 Monthly)",variableEn:"Sea Surface Temperature",variableAr:"درجة حرارة سطح البحر",unitEn:"°C",unitAr:"م°",isProxy:!1,proxyBadgeEn:"Thermal & Hypoxia Risk",proxyBadgeAr:"الإجهاد الحراري ونقص الأكسجين",availableRange:{start:"2002-07-01",end:"2026-04-01"},skipDates:["2022-11-01","2022-12-01","2023-06-01","2023-10-01","2025-12-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-04-01",defaultYearlyRange:{startYear:2012,endYear:2025,month:"08",day:"01"},valueDomain:{min:0,max:32},pairedPowerParam:null,whatItIsEn:"Monthly 4 km Sea Surface Temperature (SST) measures the thermal energy of the top millimeter of ocean water in degrees Celsius.",whatItIsAr:"تقيس هذه الطبقة الشهرية بدقة 4 كم درجة حرارة الطبقة السطحية للمحيطات والبحار بالدرجة المئوية.",whyItMattersEn:"Warmer waters hold less dissolved oxygen, amplify thermal pollution near coastal outflows, accelerate harmful algal blooms, and trigger coral bleaching.",whyItMattersAr:"تحتفظ المياه الأكثر دفئاً بكمية أقل من الأكسجين المذاب، مما يفاقم التلوث الحراري ويسرّع ازدهار الطحالب السامة وابيضاض الشعاب المرجانية.",whatTrendShowsEn:"Warming coastal seas and summer marine heatwaves shift acoustic pitch higher during peak thermal stress months.",whatTrendShowsAr:"توضح الموجات الحرارية البحرية وارتفاع حرارة السواحل صيفاً، حيث ترتفع النغمة الصوتية مع ارتفاع الحرارة.",limitationEn:"Covers oceans and large seas (4 km grid); inland rivers and small lakes are masked out.",limitationAr:"تغطي المحيطات والبحار الكبيرة فقط بدقة 4 كم، ولا تشمل الأنهار أو البحيرات الصغيرة."},{id:"water_turbidity",stageId:"water",gibsLayerId:"MODIS_Aqua_CorrectedReflectance_TrueColor",colormapId:null,legendUrl:null,tileMatrixSet:"GoogleMapsCompatible_Level9",maxNativeZoom:9,ext:"jpeg",useLuminance:!0,titleEn:"Ocean Color & Coastal Turbidity Proxy",titleAr:"لون المحيط وعكارة الرواسب الساحلية",provider:"NASA LANCE / EOSDIS Aqua MODIS",variableEn:"Optical Water Reflectance (Luminance)",variableAr:"الانعكاس الضوئي الساحلي (السطوع)",unitEn:"% Luminance",unitAr:"٪ سطوع",isProxy:!0,proxyBadgeEn:"Optical Turbidity Proxy",proxyBadgeAr:"مؤشر بصري للعكارة والرواسب",availableRange:{start:"2002-07-03",end:"2026-10-15"},cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"15"},valueDomain:{min:0,max:100},pairedPowerParam:null,whatItIsEn:"True-color optical satellite imagery from Aqua MODIS reveals murky coastal sediment plumes, muddy river discharge, and green surface blooms directly in natural color. Brightness (luminance) is converted into sound because GIBS does not offer a dedicated multi-decade Kd490 turbidity colormap layer.",whatItIsAr:"صور الألوان الطبيعية الحقيقية من القمر أكوا تُظهر أعمدة الرواسب والطمي المصبوبة من الأنهار والعكارة الساحلية مباشرة، وتُحوّل درجة السطوع الضوئي إلى صوت لعدم توفر طبقة عكارة رقمية طويلة المدى في GIBS.",whyItMattersEn:"Turbid runoff carries suspended soils, microplastics, agricultural nutrients, and pollutants from watersheds into coastal fisheries.",whyItMattersAr:"تحمل أعمدة العكارة والرواسب الساحلية التربة المنجرفة والملوثات والمغذيات الزراعية من الأنهار إلى المناطق البحرية.",whatTrendShowsEn:"Brighter tan/green reflectance along coastlines and deltas produces higher audio pitches than deep clear blue ocean water.",whatTrendShowsAr:"تُنتج المياه العكرة الفاتحة عند الدلتا والسواحل نغمات أعلى مقارنة بالمياه العميقة الصافية الداكنة.",limitationEn:"Visual proxy: clouds also appear bright white and elevate luminance; inspect the map image alongside the sound.",limitationAr:"مؤشر بصري غير معاير رقمياً: السحب البيضاء ترفع السطوع أيضاً، لذا يُنصح بمقارنة النغمة مع الصورة."}]},{id:"soil",stageNumber:3,titleEn:"Stage 3: Soil Pollution (Condition Indicators)",titleAr:"المرحلة 3: تلوث التربة (مؤشرات حالة التربة)",shortEn:"Soil Indicators",shortAr:"مؤشرات التربة",subtitleEn:"Soil moisture (SMAP + POWER), vegetation health (NDVI), and land surface heat stress.",subtitleAr:"رطوبة التربة (SMAP وناسا باور)، وصحة الغطاء النباتي (NDVI)، والإجهاد الحراري لسطح الأرض.",accentColor:"#fbbf24",honestyBannerEn:"Scientific Transparency Note: NASA satellites do not directly measure chemical soil contamination (heavy metals, pesticides, or toxins). These three animations provide physical Soil Condition Indicators—moisture, vegetation vitality, and surface heat—to track land degradation and vulnerability.",honestyBannerAr:"تنويه علمي صادق: لا تقيس أقمار ناسا التلوث الكيميائي المباشر للتربة (كالمعادن الثقيلة أو المبيدات). تُظهر هذه المرحلة مؤشرات حالة التربة الفيزيائية (الرطوبة، صحة النبات، وحرارة السطح) لرصد تدهور الأراضي وإجهادها.",presets:[{id:"zagazig",nameEn:"Zagazig (Nile Delta)",nameAr:"الزقازيق (دلتا النيل)",lat:30.5877,lon:31.502},{id:"central_valley",nameEn:"Central Valley (USA)",nameAr:"الوادي الأوسط (أمريكا)",lat:36.7468,lon:-119.7726},{id:"sahel_mali",nameEn:"Sahel Belt (Mali)",nameAr:"الساحل الأفريقي (مالي)",lat:14.5,lon:-4.2},{id:"amazon_basin",nameEn:"Amazon Basin",nameAr:"حوض الأمازون",lat:-3.4653,lon:-62.2159}],defaultZoom:5,animations:[{id:"soil_moisture",stageId:"soil",gibsLayerId:"SMAP_L4_Analyzed_Surface_Soil_Moisture",colormapId:"SMAP_Analyzed_Soil_Moisture",legendUrl:"https://gibs.earthdata.nasa.gov/legends/SMAP_Analyzed_Soil_Moisture_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",titleEn:"Surface Soil Moisture (SMAP + POWER)",titleAr:"رطوبة التربة السطحية (SMAP وناسا باور)",provider:"NASA GSFC GMAO / SMAP L4 & NASA POWER",variableEn:"Volumetric Soil Moisture",variableAr:"رطوبة التربة الحجمية",unitEn:"m³/m³",unitAr:"م³/م³",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2015-03-31",end:"2026-10-15"},skipDates:["2025-10-15","2025-11-15","2026-08-15"],cadenceType:"daily_midmonth",defaultMonthlyStart:"2024-01-15",defaultMonthlyEnd:"2026-10-15",defaultYearlyRange:{startYear:2015,endYear:2026,month:"07",day:"15"},valueDomain:{min:.02,max:.6},pairedPowerParam:"GWETTOP",pairedPowerSecondaryParam:"GWETROOT",whatItIsEn:"SMAP Level-4 Surface Soil Moisture tracks the volume of water per volume of soil (m³/m³) in the top 5 cm globally, paired here with NASA POWER GWETTOP (surface wetness 0–5 cm) and GWETROOT (root-zone wetness 0–100 cm).",whatItIsAr:"تقيس طبقة SMAP L4 حجم المياه في أعلى 5 سم من التربة عالمياً (م³/م³)، وتقترن هنا بمعاملات ناسا باور GWETTOP (رطوبة السطح) وGWETROOT (رطوبة منطقة الجذور حتى عمق 100 سم).",whyItMattersEn:"Severe soil drying accelerates desertification and dust erosion, while waterlogging increases agricultural runoff and salinity buildup—key physical stressors on soil ecosystems.",whyItMattersAr:"يؤدي جفاف التربة الشديد إلى التصحر وتآكلها، بينما يسبب التشبع المائي المفرط تملح التربة وجرف المغذيات والملوثات.",whatTrendShowsEn:"Seasonal irrigation, monsoon wetting, and multi-year droughts shift soil moisture levels and pitch across agricultural basins.",whatTrendShowsAr:"تعكس البيانات دورات الري والمواسم المطرية وموجات الجفاف الممتدة في الأحواض الزراعية.",limitationEn:"Soil Condition Indicator only: measures water content (9 km L4 assimilation), not heavy metals, pesticides, or chemical toxicity.",limitationAr:"مؤشر حالة فيزيائية فقط: يقيس المحتوى المائي بدقة ~9 كم ولا يرصد التلوث الكيميائي أو السموم."},{id:"soil_ndvi",stageId:"soil",gibsLayerId:"MODIS_Terra_L3_NDVI_Monthly",colormapId:"MODIS_L3_NDVI",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_L3_NDVI_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level7",maxNativeZoom:7,ext:"png",titleEn:"Vegetation Health Index (NDVI)",titleAr:"مؤشر صحة الغطاء النباتي (NDVI)",provider:"NASA LP DAAC / Terra MODIS (L3 Monthly)",variableEn:"Normalized Difference Vegetation Index",variableAr:"مؤشر الغطاء النباتي الطبيعي",unitEn:"NDVI",unitAr:"NDVI",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2000-03-01",end:"2026-10-01"},skipDates:["2025-04-01"],cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-10-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:.05,max:.9},pairedPowerParam:null,whatItIsEn:"NDVI (0.0 to 1.0) measures plant chlorophyll greenness and canopy density from Terra MODIS monthly composites. Healthy soils generally sustain denser, greener vegetation.",whatItIsAr:"يقيس مؤشر NDVI (من 0 إلى 1) كثافة وصحة الكلوروفيل النباتي شهرياً عبر القمر تيرا، وتدعم التربة السليمة غطاءً نباتياً أكثر خضرة وكثافة.",whyItMattersEn:"Declining NDVI can signal soil degradation, salinization, deforestation, drought stress, or land-use damage that leaves soil exposed to erosion.",whyItMattersAr:"قد يشير تراجع المؤشر إلى تدهور التربة أو تملحها أو إزالة الغابات أو الإجهاد المائي الذي يعرّض التربة للتعرية.",whatTrendShowsEn:"Green agricultural valleys and forests produce high musical pitches, while barren land or stressed crops drop to lower pitches.",whatTrendShowsAr:"تُنتج الوديان الخضراء والغابات نغمات مرتفعة، بينما تنخفض النغمات في الأراضي القاحلة أو المتدهورة.",limitationEn:"Soil Condition Indicator only: low NDVI cannot distinguish chemical soil toxicity from drought, urban paving, or seasonal harvest.",limitationAr:"مؤشر حالة فيزيائية فقط: انخفاض الغطاء النباتي لا يميز بين التلوث الكيميائي والجفاف أو مواسم الحصاد أو العمران."},{id:"soil_lst",stageId:"soil",gibsLayerId:"MODIS_Terra_L3_Land_Surface_Temp_Monthly_Day",colormapId:"MODIS_Land_Surface_Temp",legendUrl:"https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.svg",tileMatrixSet:"GoogleMapsCompatible_Level6",maxNativeZoom:6,ext:"png",isKelvin:!0,titleEn:"Land Surface Temperature (Soil Heat Stress)",titleAr:"حرارة سطح الأرض (الإجهاد الحراري للتربة)",provider:"NASA LP DAAC / Terra MODIS (L3 Monthly)",variableEn:"Daytime Land Surface Temperature",variableAr:"درجة حرارة سطح الأرض نهاراً",unitEn:"°C",unitAr:"م°",isProxy:!0,proxyBadgeEn:"Soil Condition Indicator",proxyBadgeAr:"مؤشر حالة التربة (غير كيميائي)",availableRange:{start:"2000-03-01",end:"2026-10-01"},cadenceType:"monthly_first",defaultMonthlyStart:"2024-01-01",defaultMonthlyEnd:"2026-10-01",defaultYearlyRange:{startYear:2012,endYear:2026,month:"07",day:"01"},valueDomain:{min:0,max:55},pairedPowerParam:"TS",whatItIsEn:"Monthly Daytime Land Surface Temperature measures how hot the bare soil, crops, or urban ground skin actually gets under sunlight (converted from Kelvin to °C), paired with NASA POWER Earth Skin Temperature (TS).",whatItIsAr:"تقيس حرارة سطح الأرض الشهرية نهاراً مدى سخونة التربة المكشوفة أو المحاصيل تحت الشمس (محوَّلة من كلفن إلى مئوية)، وتقترن بمعامل حرارة الجلد الأرضي (TS) من ناسا باور.",whyItMattersEn:"Extreme soil surface temperatures bake organic matter, accelerate moisture loss, stress soil microbes, and intensify urban and agricultural heat islands.",whyItMattersAr:"تُسرّع الحرارة السطحية المفرطة تبخر رطوبة التربة وتضر بالمادة العضوية والكائنات الدقيقة وتفاقم جزر الحرارة.",whatTrendShowsEn:"Summer heating peaks and bare-soil heat islands drive sharp upward climbs in pitch compared to irrigated or vegetated land.",whatTrendShowsAr:"تُظهر ذروات الصيف والأراضي المكشوفة ارتفاعاً واضحاً في النغمة مقارنة بالأراضي المروية والمغطاة بالنبات.",limitationEn:"Soil Condition Indicator only: reflects daytime thermal skin stress rather than chemical soil contaminants.",limitationAr:"مؤشر حالة فيزيائية فقط: يعكس الإجهاد الحراري للسطح نهاراً ولا يقيس الملوثات الكيميائية في التربة."}]}],Xl=$n.flatMap(n=>n.animations);function j0(n,e="monthly"){if(!n)return[];const t=new Set(n.skipDates||[]),i=[];if(e==="yearly"){const{startYear:m,endYear:u,month:g,day:x}=n.defaultYearlyRange;for(let y=m;y<=u;y++){const p=`${y}-${g}-${x}`;p>=n.availableRange.start&&p<=n.availableRange.end&&!t.has(p)&&i.push(p)}return i}const a=n.defaultMonthlyStart.split("-").map(Number),r=n.defaultMonthlyEnd.split("-").map(Number),o=n.cadenceType==="daily_midmonth"?"15":"01";let l=a[0],c=a[1];const d=r[0],h=r[1];for(;l<d||l===d&&c<=h;){const m=c<10?`0${c}`:`${c}`,u=`${l}-${m}-${o}`;u>=n.availableRange.start&&u<=n.availableRange.end&&!t.has(u)&&i.push(u),c++,c>12&&(c=1,l++)}return i}const Lt={T2M:{id:"T2M",nameEn:"Temperature (2m)",nameAr:"درجة الحرارة (ارتفاع 2م)",unitEn:"°C",unitAr:"م°",descriptionEn:"Air temperature at 2 meters above the surface of the earth.",descriptionAr:"درجة حرارة الهواء على ارتفاع مترين فوق سطح الأرض.",color:"#f97316",format:n=>`${n.toFixed(1)}°C`},PRECTOTCORR:{id:"PRECTOTCORR",nameEn:"Precipitation",nameAr:"هطول الأمطار",unitEn:"mm/day",unitAr:"ملم/يوم",descriptionEn:"The bias-corrected average precipitation at the surface.",descriptionAr:"متوسط هطول الأمطار المصحح عند السطح.",color:"#06b6d4",format:n=>`${n.toFixed(2)} mm/day`},RH2M:{id:"RH2M",nameEn:"Relative Humidity",nameAr:"الرطوبة النسبية",unitEn:"%",unitAr:"٪",descriptionEn:"Relative humidity at 2 meters above the surface of the earth.",descriptionAr:"الرطوبة النسبية للهواء على ارتفاع مترين فوق سطح الأرض.",color:"#3b82f6",format:n=>`${n.toFixed(1)}%`},ALLSKY_SFC_SW_DWN:{id:"ALLSKY_SFC_SW_DWN",nameEn:"Solar Radiation",nameAr:"الإشعاع الشمسي",unitEn:"kW-hr/m²/day",unitAr:"ك.و.س/م²/يوم",descriptionEn:"All Sky Surface Shortwave Downward Irradiance.",descriptionAr:"الإشعاع الشمسي قصير الموجة الساقط على السطح لكل سماء.",color:"#eab308",format:n=>`${n.toFixed(2)} kW-hr/m²/day`}},da=[{id:"zagazig",nameEn:"Zagazig",nameAr:"الزقازيق",countryEn:"Egypt",countryAr:"مصر",lat:30.5877,lon:31.502,region:"Nile Delta"},{id:"alexandria",nameEn:"Alexandria",nameAr:"الإسكندرية",countryEn:"Egypt",countryAr:"مصر",lat:31.2001,lon:29.9187,region:"Mediterranean Coast"},{id:"cairo",nameEn:"Cairo",nameAr:"القاهرة",countryEn:"Egypt",countryAr:"مصر",lat:30.0444,lon:31.2357,region:"Capital Region"},{id:"aswan",nameEn:"Aswan",nameAr:"أسوان",countryEn:"Egypt",countryAr:"مصر",lat:24.0889,lon:32.8998,region:"Upper Egypt"}],ea=1990,Ci=new Date().getFullYear()-1,dr=new Map;function V0(n,e,t,i,a){return`${Number(n).toFixed(4)}_${Number(e).toFixed(4)}_${t}_${i}_${a}`}async function ur(n,e,t,i=ea,a=Ci,r=null){var u,g;const o=V0(n,e,t,i,a);if(dr.has(o))return{points:dr.get(o),fromCache:!0};const l=parseFloat(Number(n).toFixed(4)),c=parseFloat(Number(e).toFixed(4)),d=`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=${t}&community=RE&longitude=${c}&latitude=${l}&start=${i}&end=${a}&format=JSON`,h=new AbortController,m=setTimeout(()=>h.abort(),12e3);if(r){if(r.aborted)throw clearTimeout(m),new DOMException("Aborted","AbortError");r.addEventListener("abort",()=>h.abort())}try{const x=await fetch(d,{signal:h.signal});if(clearTimeout(m),!x.ok)throw new Error(`NASA POWER API HTTP ${x.status}: ${x.statusText||"Request failed"}`);const y=await x.json(),p=(g=(u=y==null?void 0:y.properties)==null?void 0:u.parameter)==null?void 0:g[t];if(!p||Object.keys(p).length===0)throw new Error("No parameter data returned from NASA POWER for this location");const f=[];for(let M=i;M<=a;M++){const b=`${M}13`;let E=p[b];if(E==null||E<=-900){let T=0,_=0;for(let v=1;v<=12;v++){const N=`${M}${v<10?"0"+v:v}`,O=p[N];O!=null&&O>-900&&(T+=O,_++)}if(_>0)E=T/_;else continue}f.push({year:M,value:parseFloat(E.toFixed(2))})}if(f.length<2)throw new Error("Insufficient valid time series observations returned from NASA POWER");return dr.set(o,f),{points:f,fromCache:!1}}catch(x){throw clearTimeout(m),x.name==="AbortError"||console.error(`NASA POWER API request failed for (${l}, ${c}):`,x),x}}const fd={AOD_55:{id:"AOD_55",community:"AG",nameEn:"Aerosol Optical Depth (550nm)",nameAr:"العمق البصري للهباء الجوي (550 نانومتر)",unitEn:"AOD",unitAr:"بلا وحدة",format:n=>`${Number(n).toFixed(3)}`},TO3:{id:"TO3",community:"AG",nameEn:"Total Column Ozone",nameAr:"إجمالي عمود الأوزون",unitEn:"DU",unitAr:"وحدة دوبسون",format:n=>`${Number(n).toFixed(1)} DU`},GWETTOP:{id:"GWETTOP",community:"AG",nameEn:"Surface Soil Wetness (0–5 cm)",nameAr:"رطوبة التربة السطحية (0–5 سم)",unitEn:"0–1",unitAr:"0–1",format:n=>`${Number(n).toFixed(3)}`},GWETROOT:{id:"GWETROOT",community:"AG",nameEn:"Root Zone Soil Wetness (0–100 cm)",nameAr:"رطوبة منطقة الجذور (0–100 سم)",unitEn:"0–1",unitAr:"0–1",format:n=>`${Number(n).toFixed(3)}`},TS:{id:"TS",community:"AG",nameEn:"Earth Skin Temperature",nameAr:"حرارة سطح التربة (الجلد الأرضي)",unitEn:"°C",unitAr:"م°",format:n=>`${Number(n).toFixed(1)}°C`}},hr=new Map;async function ql(n,e,t,i=2e3,a=Ci,r=null){var u,g;const o=parseFloat(Number(n).toFixed(4)),l=parseFloat(Number(e).toFixed(4)),c=`m_${o}_${l}_${t}_${i}_${a}`;if(hr.has(c))return hr.get(c);const d=`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=${t}&community=AG&longitude=${l}&latitude=${o}&start=${i}&end=${a}&format=JSON`,h=new AbortController,m=setTimeout(()=>h.abort(),12e3);if(r){if(r.aborted)throw clearTimeout(m),new DOMException("Aborted","AbortError");r.addEventListener("abort",()=>h.abort())}try{const x=await fetch(d,{signal:h.signal});if(clearTimeout(m),!x.ok)throw new Error(`NASA POWER API HTTP ${x.status}: ${x.statusText||"Request failed"}`);const y=await x.json(),p=(g=(u=y==null?void 0:y.properties)==null?void 0:u.parameter)==null?void 0:g[t];if(!p||Object.keys(p).length===0)throw new Error(`No NASA POWER data returned for ${t} at (${o}, ${l})`);const f={};return Object.entries(p).forEach(([M,b])=>{if(b!=null&&b>-900&&M.length===6){const E=M.slice(0,4),T=M.slice(4,6);T!=="13"&&(f[`${E}-${T}`]=parseFloat(Number(b).toFixed(4)))}}),hr.set(c,f),f}catch(x){throw clearTimeout(m),x.name==="AbortError"||console.error(`NASA POWER monthly request failed for ${t}:`,x),x}}function H0({isOpen:n=!1,onClose:e=()=>{},lang:t="en"}){const i=Ct[t]||Ct.en,a=C.useRef(null);return C.useEffect(()=>{var r;n&&((r=a.current)==null||r.focus())},[n]),n?s.jsx("div",{className:"modal-backdrop",onClick:e,role:"presentation",children:s.jsxs("div",{className:"modal-content modal-about",role:"dialog","aria-modal":"true","aria-labelledby":"about-modal-title",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-row",children:[s.jsx(Ii,{className:"icon-md","aria-hidden":"true"}),s.jsx("h2",{id:"about-modal-title",className:"modal-title",children:i.aboutHeading})]}),s.jsx("button",{ref:a,type:"button",className:"btn-modal-close",onClick:e,"aria-label":i.shortcutClose,children:s.jsx(Ts,{className:"icon","aria-hidden":"true"})})]}),s.jsxs("div",{className:"modal-body about-body",children:[s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx("span",{className:"section-bullet",children:"🌍"}),s.jsx("span",{children:t==="ar"?"رسالة المشروع":"Project Mission"})]}),s.jsx("p",{className:"about-text",children:i.aboutMission})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(bs,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:i.howSonificationWorks})]}),s.jsx("p",{className:"about-text",children:i.sonificationExplanation}),s.jsxs("div",{className:"pixel-method-box",children:[s.jsx("h4",{className:"method-subtitle",children:t==="ar"?"آلية تحويل بكسل القمر الصناعي إلى نغمة صوتية:":"Satellite Pixel-to-Sound Conversion Methodology:"}),s.jsxs("ol",{className:"method-steps-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"1. استخراج البكسل:":"1. Pixel Extraction:"})," ",t==="ar"?'يتم إسقاط إحداثيات الموقع (خط العرض والطول) إلى إحداثيات البلاطة الفضائية (Tile coordinates) ورسمها على عنصر Canvas مخفي باستخدام خاصية crossOrigin="anonymous".':'The geographic coordinates (lat, lon) are projected to the Web Mercator tile index (z, y, x) and pixel offset (px, py). The tile is drawn on an offscreen HTML5 canvas using crossOrigin="anonymous".']}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"2. مطابقة خريطة الألوان:":"2. Colormap Nearest-Color Lookup:"})," ",t==="ar"?"تتم قراءة قيمة RGB ومطابقتها بأقرب لون في خريطة ألوان وكالة ناسا الرسمية (NASA GIBS Colormap XML v1.3) لحساب القيمة الفيزيائية الحقيقية.":"The RGB values are matched against NASA GIBS calibrated Colormap XML v1.3 entries using Euclidean color distance in RGB space to recover the physical variable (converting Kelvin to °C where needed)."]}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"3. بديل السطوع (Luminance):":"3. Luminance Fallback:"})," ",t==="ar"?"في طبقات الألوان الحقيقية (مثل مؤشر عكارة المياه الساحلية)، يتم حساب السطوع الفيزيائي (Y = 0.299R + 0.587G + 0.114B).":"For True Color optical imagery (e.g., coastal turbidity proxy), perceived luminance (Y = 0.299R + 0.587G + 0.114B) is computed directly."]}),s.jsxs("li",{children:[s.jsx("strong",{children:t==="ar"?"4. التحويل النغمي الخماسي:":"4. Dynamic Pentatonic Normalization:"})," ",t==="ar"?"تتم معايرة القيمة ديناميكياً (القيمة الأعلى = نغمة أعلى) وتحويلها إلى السلم الخماسي (C3 إلى C6) عبر Web Audio API مع مقارنة ستيريو مجسمة ونغمات الأرقام القياسية.":"Values are dynamically normalized across the frame series (higher value = higher pitch) onto a pentatonic scale (C3 ~131 Hz to C6 ~1047 Hz) via Web Audio API, with stereo left/right compare and record chimes."]})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(hi,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"مصادر بيانات مراحل التلوث (9 طبقات موثقة من NASA GIBS)":"Pollution Stages Datasets (9 Verified NASA GIBS Layers)"})]}),$n.map(r=>s.jsxs("div",{className:"about-stage-block",children:[s.jsx("h4",{className:"about-stage-subtitle",children:t==="ar"?r.titleAr:r.titleEn}),s.jsx("ul",{className:"about-gibs-list",children:r.animations.map(o=>s.jsxs("li",{className:"gibs-list-item",children:[s.jsxs("div",{className:"gibs-item-name",children:[t==="ar"?o.titleAr:o.titleEn," ",s.jsxs("span",{className:"about-range-pill",children:["(",o.availableRange.start," → ",o.availableRange.end,")"]})]}),s.jsxs("code",{className:"gibs-item-id",children:["GIBS ID: ",o.gibsLayerId," | ",o.provider," | Unit: ",o.unitEn,o.pairedPowerParam?` | POWER: ${o.pairedPowerParam}${o.pairedPowerSecondaryParam?`, ${o.pairedPowerSecondaryParam}`:""}`:""]}),s.jsx("div",{className:"gibs-item-desc",children:t==="ar"?o.limitationAr:o.limitationEn})]},o.id))})]},r.id))]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(bo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"وضع الحرارة والمناخ (NASA POWER و GIBS)":"Temperature Mode Sources (NASA POWER & GIBS)"})]}),s.jsx("ul",{className:"about-gibs-list",children:Wn.map(r=>s.jsxs("li",{className:"gibs-list-item",children:[s.jsxs("div",{className:"gibs-item-name",children:[r.nameEn," (",r.nameAr,")"]}),s.jsxs("code",{className:"gibs-item-id",children:["Layer ID: ",r.id," | Start: ",r.startDate]}),s.jsx("div",{className:"gibs-item-desc",children:r.descriptionEn})]},r.id))}),s.jsxs("p",{className:"about-text",style:{marginTop:"0.6rem"},children:[s.jsx("strong",{children:"NASA POWER Parameters (1990–2025):"})," ",[...Object.values(Lt),...Object.values(fd)].map(r=>`${r.id} (${r.unitEn})`).join(", "),"."]}),s.jsxs("div",{className:"links-row",children:[s.jsxs("a",{href:"https://gibs.earthdata.nasa.gov/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA GIBS Earthdata Portal"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://power.larc.nasa.gov/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA POWER Data Portal"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(ia,{className:"icon-sm text-cyan","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"مركز معلومات الأرض ومرصد ناسا للتصور العلمي (NASA EIC & SVS)":"NASA Earth Information Center & Scientific Visualization Studio"})]}),s.jsx("p",{className:"about-text",children:t==="ar"?"تم إثراء أقسام الموقع (الهواء، الماء، التربة، والحرارة) بمحاكيات وبيانات مركز معلومات الأرض التابع لوكالة ناسا (NASA EIC) عبر منصة SVS:":"Enriched throughout Terra-Tone tabs with NASA Earth Information Center (EIC) supercomputer visualizations and scientific data:"}),s.jsxs("ul",{className:"about-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5276 (Change in Night Lights 2012–2023):"})," NASA Black Marble VIIRS calibrated nighttime radiance tracking decadal electrification and urban expansion."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #30910 (GEOS Aerosols 2017 Hurricane Season):"})," NASA GMAO ultra-high resolution GEOS forward processing simulating long-range smoke, dust, and sea salt transport."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #3912 / #5425 (Perpetual Ocean & Western Boundary Currents):"})," NASA JPL ECCO-2 ocean circulation model resolving thermal advection and surface velocity fields."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5196 (DYAMOND Atmospheric Carbon Dioxide):"})," NASA GMAO 3km global atmospheric simulation tracking synoptic weather advection of CO₂ plumes."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #4960 (3D View of an Atmospheric River):"})," NASA MERRA-2 and GPM IMERG 3D atmospheric moisture transport driving extreme coastal rainfall and soil saturation."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"SVS #5064 (Daily Antarctic Sea Ice Extent):"})," Satellite passive microwave radiometers (SSMIS & AMSR-2) recording annual freeze-thaw cryospheric pulsation."]})]}),s.jsxs("div",{className:"links-row",children:[s.jsxs("a",{href:"https://www.nasa.gov/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA Earth Information Center"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]}),s.jsxs("a",{href:"https://svs.gsfc.nasa.gov/gallery/earth-information-center/",target:"_blank",rel:"noopener noreferrer",className:"about-link",children:[s.jsx("span",{children:"NASA SVS EIC Gallery"}),s.jsx(jn,{className:"icon-xs","aria-hidden":"true"})]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx(Es,{className:"icon-sm text-gold","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"الحدود العلمية والمؤشرات البديلة":"Scientific Limitations, Proxies & Gaps"})]}),s.jsxs("ul",{className:"about-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"PM2.5 Proxy (AOD):"})," Total atmospheric column Aerosol Optical Depth (~50 km MERRA-2) correlates with particulate haze but is not direct breathing-height PM2.5 µg/m³."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Coastal Turbidity Proxy:"})," True-color optical reflectance brightness detects river plumes and sediment but white clouds also raise brightness."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Soil Condition Indicators (Stage 3):"})," NASA satellites do not measure heavy metals, pesticides, or chemical soil toxicity. SMAP moisture, NDVI, and LST measure physical soil stress indicators only."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Spatial Resolution & Gaps:"})," Coarse grids (4–50 km) do not resolve narrow rivers or street blocks; optical sensors (Chlorophyll-a, NDVI, True Color) can have cloud/orbital gaps on individual dates."]})]})]}),s.jsxs("div",{className:"about-section",children:[s.jsxs("h3",{className:"about-section-title",children:[s.jsx($d,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:t==="ar"?"معايير إمكانية الوصول الشامل (Accessibility)":"Accessibility Standards"})]}),s.jsxs("ul",{className:"about-list",children:[s.jsx("li",{children:t==="ar"?"تحكم كامل عبر لوحة المفاتيح دون تعطيل أزرار النموذج":"100% Keyboard Operable with native form/button behaviors preserved"}),s.jsx("li",{children:t==="ar"?"إعلانات ذكية لقارئات الشاشة (aria-live) مع خيار التحكم بالنطق أثناء التشغيل":"Smart aria-live region with configurable speech during playback toggle"}),s.jsx("li",{children:t==="ar"?"وضع التباين العالي الفائق متوافق مع معايير WCAG AAA":"High-contrast mode compliant with WCAG AAA contrast ratios (> 7:1)"}),s.jsx("li",{children:t==="ar"?"وضع تكبير الخطوط والرموز ويدعم شاشات 360px":"Large text mode, RTL Arabic support, reduced-motion compliance, and 360px mobile layout"}),s.jsx("li",{children:t==="ar"?"جدول بيانات نصي كبديل مباشر للمخطط البياني مع تصدير CSV و JSON":"Semantic HTML data table alternative with CSV, JSON, PNG ZIP, and WebM export"})]})]})]}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{type:"button",className:"btn-primary",onClick:e,children:i.shortcutClose})})]})}):null}const W0=({isOpen:n=!1,onClose:e=()=>{},lang:t="en",theme:i="dark"})=>(C.useEffect(()=>{const a=r=>{r.key==="Escape"&&n&&e()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n,e]),n?s.jsx("div",{className:"eic-modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"eic-modal-title",children:s.jsxs("div",{className:"eic-modal-container",children:[s.jsxs("div",{className:"eic-modal-header",children:[s.jsxs("div",{className:"eic-modal-title-box",children:[s.jsxs("div",{className:"eic-badge-pill",children:[s.jsx(ei,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:"OFFICIAL NASA SVS & EIC SHOWCASE"})]}),s.jsx("h2",{id:"eic-modal-title",className:"eic-modal-heading",children:t==="ar"?"مركز معلومات الأرض — تجربة الاستكشاف المرئي والبياني":"NASA Earth Information Center — Visual & Graph Experience"})]}),s.jsx("button",{type:"button",className:"eic-modal-close-btn",onClick:e,"aria-label":t==="ar"?"إغلاق المعرض":"Close Exhibition",title:t==="ar"?"إغلاق (Esc)":"Close (Esc)",children:s.jsx(Ts,{className:"icon-sm"})})]}),s.jsx("div",{className:"eic-modal-body",children:s.jsx(k0,{lang:t,theme:i})})]})}):null);function Yl(n,e,t){const i=Math.pow(2,t),a=Math.max(-85.0511,Math.min(85.0511,n)),r=(e+180)/360*i,o=a*Math.PI/180,l=(1-Math.log(Math.tan(o)+1/Math.cos(o))/Math.PI)/2*i;return{x:r,y:l}}function $0(n,e){const t=Math.max(.5,Math.abs((n.east??40)-(n.west??20))),i=Math.round(Math.log2(360*2.5/t));return Math.max(1,Math.min(e||6,i))}function zo(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(t),1500)}async function pd(n,e,t,i={}){const a=i.width||768,r=i.height||512,o=i.opacity??.85,l=i.lang||"en",c=i.locationA||null,d=i.locationB||null,h=!!i.isCompareMode,m=i.sampleA||null,u=i.sampleB||null,g=i.targetCanvas||document.createElement("canvas");g.width=a,g.height=r;const x=g.getContext("2d");x.fillStyle="#070a13",x.fillRect(0,0,a,r);const y=t||{west:((c==null?void 0:c.lon)??31.2)-18,east:((c==null?void 0:c.lon)??31.2)+18,south:((c==null?void 0:c.lat)??30)-12,north:((c==null?void 0:c.lat)??30)+12},p=$0(y,n.maxNativeZoom),f=Math.pow(2,p),M=(y.north+y.south)/2,b=(y.east+y.west)/2,E=Yl(M,b,p),T=E.x*256,_=E.y*256,v=T-a/2,N=T+a/2,O=_-r/2,R=_+r/2,D=Math.floor(v/256),F=Math.floor(N/256),q=Math.max(0,Math.floor(O/256)),I=Math.min(f-1,Math.floor(R/256)),V=[];for(let X=q;X<=I;X++)for(let me=D;me<=F;me++){const ge=(me%f+f)%f;V.push({tx:me,wrappedTx:ge,ty:X})}const Q=V.map(async({tx:X,wrappedTx:me,ty:ge})=>{const fe=`https://a.basemaps.cartocdn.com/dark_all/${p}/${me}/${ge}.png`,J=sn(n,e,p,ge,me),[Re,Oe]=await Promise.all([gs(fe),gs(J)]);return{tx:X,ty:ge,baseRes:Re,gibsRes:Oe}}),j=await Promise.all(Q);for(const X of j){const me=Math.round(X.tx*256-v),ge=Math.round(X.ty*256-O);X.baseRes.ok&&X.baseRes.img&&x.drawImage(X.baseRes.img,me,ge,256,256)}x.save(),x.globalAlpha=o;for(const X of j){const me=Math.round(X.tx*256-v),ge=Math.round(X.ty*256-O);X.gibsRes.ok&&X.gibsRes.img&&x.drawImage(X.gibsRes.img,me,ge,256,256)}x.restore();const oe=(X,me,ge)=>{if(!X)return;const fe=Yl(X.lat,X.lon,p),J=fe.x*256-v,Re=fe.y*256-O;if(J<-20||J>a+20||Re<-20||Re>r+20)return;x.save(),x.strokeStyle=me,x.lineWidth=2.5,x.beginPath(),x.arc(J,Re,10,0,Math.PI*2),x.stroke(),x.fillStyle=me,x.beginPath(),x.arc(J,Re,4,0,Math.PI*2),x.fill(),x.font="bold 12px Inter, sans-serif";const Oe=ge?`${ge}: ${X.nameEn}`:X.nameEn,Ee=x.measureText(Oe).width;x.fillStyle="rgba(7, 10, 19, 0.85)",x.fillRect(J+12,Re-11,Ee+10,20),x.strokeStyle=me,x.lineWidth=1,x.strokeRect(J+12,Re-11,Ee+10,20),x.fillStyle="#f8fafc",x.fillText(Oe,J+17,Re+3),x.restore()};oe(c,"#38bdf8",h?"A":""),h&&d&&oe(d,"#f97316","B"),x.save(),x.fillStyle="rgba(7, 10, 19, 0.86)",x.fillRect(0,0,a,44),x.fillStyle="#38bdf8",x.fillRect(0,42,a,2),x.fillStyle="#f8fafc",x.font="bold 15px Inter, sans-serif";const W=n.titleEn;x.fillText(W,14,27);const te=n.proxyBadgeEn||"";if(te){x.font="bold 11px Inter, sans-serif";const X=x.measureText(te).width+16;x.fillStyle=n.isProxy?"rgba(251, 191, 36, 0.2)":"rgba(56, 189, 248, 0.2)",x.fillRect(a-X-14,10,X,24),x.strokeStyle=n.isProxy?"#fbbf24":"#38bdf8",x.lineWidth=1,x.strokeRect(a-X-14,10,X,24),x.fillStyle=n.isProxy?"#fbbf24":"#38bdf8",x.fillText(te,a-X-6,26)}x.fillStyle="rgba(7, 10, 19, 0.88)",x.fillRect(0,r-42,a,42),x.fillStyle="#fbbf24",x.font='bold 16px "JetBrains Mono", monospace',x.fillText(`DATE: ${e}`,14,r-15);let ie="Sample: —";m&&m.value!==null&&!isNaN(m.value)&&(ie=`A: ${m.label}`),h&&u&&u.value!==null&&!isNaN(u.value)&&(ie+=`  |  B: ${u.label}`),x.fillStyle="#f8fafc",x.font='600 13px "JetBrains Mono", monospace',x.fillText(ie,210,r-15),x.fillStyle="#94a3b8",x.font="11px Inter, sans-serif";const Se="NASA EOSDIS GIBS",Ue=x.measureText(Se).width;return x.fillText(Se,a-Ue-14,r-16),x.restore(),g}async function X0(n,e,t,i={},a={},r={},o=()=>{}){if(!n||!e||e.length===0)throw new Error("No animation frames available to export.");const l=new xd,c=l.folder(`${n.id}_frames`),d=document.createElement("canvas"),h=[];for(let g=0;g<e.length;g++){const x=e[g];o({current:g+1,total:e.length,date:x});const y=i[x]||null,p=a[x]||null;await pd(n,x,t,{...r,targetCanvas:d,sampleA:y,sampleB:p});const f=await new Promise((E,T)=>{d.toBlob(_=>{_?E(_):T(new Error(`Failed to encode PNG for frame ${x}`))},"image/png")}),b=`frame_${String(g+1).padStart(3,"0")}_${x}.png`;c.file(b,f),h.push({index:g,fileName:b,date:x,valueA:(y==null?void 0:y.value)??null,labelA:(y==null?void 0:y.label)??null,valueB:r.isCompareMode?(p==null?void 0:p.value)??null:null,labelB:r.isCompareMode?(p==null?void 0:p.label)??null:null})}const m={app:"Earth Jukebox — Pollution Stages Export",animationId:n.id,stageId:n.stageId,title:n.titleEn,gibsLayerId:n.gibsLayerId,provider:n.provider,variable:n.variableEn,unit:n.unitEn,isProxy:n.isProxy,limitation:n.limitationEn,availableRange:n.availableRange,locationA:r.locationA||null,locationB:r.isCompareMode?r.locationB:null,frames:h};c.file("frames_metadata.json",JSON.stringify(m,null,2));const u=await l.generateAsync({type:"blob"});zo(u,`${n.id}_satellite_frames.zip`)}async function q0(n,e,t,i={},a={},r={},o=()=>{}){if(!n||!e||e.length===0)throw new Error("No animation frames available to record.");if(typeof MediaRecorder>"u")throw new Error("WebM video capture (MediaRecorder API) is not supported in this browser.");const c=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(p=>MediaRecorder.isTypeSupported(p))||"";if(!c)throw new Error("No supported WebM codec found in this browser.");const d=document.createElement("canvas");if(d.width=r.width||768,d.height=r.height||512,typeof d.captureStream!="function")throw new Error("Canvas captureStream() is not supported in this browser.");const h=d.captureStream(12),m=new MediaRecorder(h,{mimeType:c,videoBitsPerSecond:25e5}),u=[];m.ondataavailable=p=>{p.data&&p.data.size>0&&u.push(p.data)};const g=new Promise((p,f)=>{m.onstop=()=>{const M=new Blob(u,{type:c});p(M)},m.onerror=M=>{f((M==null?void 0:M.error)||new Error("MediaRecorder failed during capture."))}});m.start(200);const x=r.frameHoldMs||380;for(let p=0;p<e.length;p++){const f=e[p];o({current:p+1,total:e.length,date:f}),await pd(n,f,t,{...r,targetCanvas:d,sampleA:i[f]||null,sampleB:a[f]||null}),await new Promise(M=>setTimeout(M,x))}m.stop();const y=await g;zo(y,`${n.id}_timelapse.webm`)}function Y0(n,e,t,i,a,r={},o={},l=null){if(!n||!e||e.length===0)throw new Error("No frame data available to export.");const c={exportedAt:new Date().toISOString(),source:"Earth Jukebox — NASA GIBS & NASA POWER",stageId:n.stageId,animationId:n.id,titleEn:n.titleEn,titleAr:n.titleAr,gibsLayerId:n.gibsLayerId,colormapId:n.colormapId,provider:n.provider,variableEn:n.variableEn,unit:n.unitEn,isProxy:n.isProxy,proxyBadge:n.proxyBadgeEn,limitationEn:n.limitationEn,availableRange:n.availableRange,locationA:t?{name:t.nameEn,lat:t.lat,lon:t.lon}:null,locationB:a&&i?{name:i.nameEn,lat:i.lat,lon:i.lon}:null,pairedPowerParam:n.pairedPowerParam||null,pairedPowerSecondaryParam:n.pairedPowerSecondaryParam||null,powerMonthlySeries:l||null,frames:e.map((h,m)=>{const u=r[h]||null,g=a&&o[h]||null;return{index:m,date:h,locationA:u?{value:u.value,label:u.label,rgb:u.r!==void 0?[u.r,u.g,u.b]:null,isLuminance:!!u.isLuminance,missingOrCloud:!!(u.missingTile||u.emptyPixel)}:null,locationB:g?{value:g.value,label:g.label,rgb:g.r!==void 0?[g.r,g.g,g.b]:null,isLuminance:!!g.isLuminance,missingOrCloud:!!(g.missingTile||g.emptyPixel)}:null}})},d=new Blob([JSON.stringify(c,null,2)],{type:"application/json"});zo(d,`${n.id}_frames_data.json`)}const Z0={electric_bell:Jd,aerosol_wind:As,ocean_flow:Mo,carbon_pulse:ei,rain_marimba:tc,ice_crystal:fc},K0=({resource:n,currentValue:e,isAudioEnabled:t=!0,onToggleAudio:i,audioVolume:a=.7,onChangeVolume:r,onPlayTestTone:o,isPlayingTone:l=!1,lang:c="en"})=>{const d=Oo[n.id]||{instrument:"electric_bell",nameEn:"Electric Bell Chime",nameAr:"رنين الجرس الكهربائي",conceptEn:"Scientific Radiance",conceptAr:"الإشعاع العلمي",iconColor:"#38bdf8"},{percentage:h,frequency:m,noteName:u}=Fi(n,e),g=Z0[d.instrument]||Yn,x=h<=33,y=h>33&&h<=66,p=x?"Low Tone (Bass Register)":y?"Medium Tone (Mid Register)":"High Tone (Treble Register)",f=x?"نغمة منخفضة (تردد عميق)":y?"نغمة معتدلة (تردد متوسط)":"نغمة مرتفعة (تردد حاد)",M=x?"tone-register-low":y?"tone-register-mid":"tone-register-high";return s.jsxs("div",{className:`eic-sonification-bar ${l?"tone-pulse-active":""}`,"aria-label":"NASA Scientific Sonification & Tones Bar",children:[s.jsxs("div",{className:"eic-audio-instrument-col",children:[s.jsx("div",{className:"eic-instrument-icon-box",style:{borderColor:d.iconColor,color:d.iconColor},children:s.jsx(g,{className:"icon-sm","aria-hidden":"true"})}),s.jsxs("div",{className:"eic-instrument-info",children:[s.jsx("div",{className:"eic-instrument-header",children:s.jsx("span",{className:"eic-instrument-tag",children:c==="ar"?"الآلة الصوتية المخصصة للمحاكاة":"Dedicated Visual Timbre"})}),s.jsx("h4",{className:"eic-instrument-name",children:c==="ar"?d.nameAr:d.nameEn}),s.jsx("p",{className:"eic-instrument-concept",children:c==="ar"?d.conceptAr:d.conceptEn})]})]}),s.jsxs("div",{className:"eic-audio-pitch-col",children:[s.jsxs("div",{className:"eic-pitch-meta-row",children:[s.jsxs("div",{className:"eic-pitch-stat",children:[s.jsx("span",{className:"stat-label",children:c==="ar"?"النسبة المئوية للظاهرة":"Intensity Percentage"}),s.jsxs("span",{className:"stat-value highlight-num",children:[h,"%"]})]}),s.jsxs("div",{className:`eic-register-pill ${M}`,children:[s.jsx(_s,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:c==="ar"?f:p})]}),s.jsxs("div",{className:"eic-pitch-stat",children:[s.jsx("span",{className:"stat-label",children:c==="ar"?"النغمة والتردد":"Musical Note & Frequency"}),s.jsxs("span",{className:"stat-value note-badge",children:[s.jsx("strong",{children:u})," • ",Math.round(m)," Hz"]})]})]}),s.jsxs("div",{className:"eic-pitch-gauge-wrap",children:[s.jsxs("div",{className:"eic-gauge-labels",children:[s.jsx("span",{className:"label-low",children:c==="ar"?"0% نغمة منخفضة (C3)":"0% Low Tone (C3)"}),s.jsx("span",{className:"label-mid",children:c==="ar"?"50% معتدل (G4)":"50% Mid (G4)"}),s.jsx("span",{className:"label-high",children:c==="ar"?"100% نغمة مرتفعة (C6)":"100% High Tone (C6)"})]}),s.jsxs("div",{className:"eic-pitch-gauge-track",children:[s.jsx("div",{className:`eic-pitch-gauge-fill ${M}`,style:{width:`${h}%`}}),s.jsx("div",{className:`eic-pitch-gauge-thumb ${l?"ping":""}`,style:{left:`${h}%`}})]})]})]}),s.jsxs("div",{className:"eic-audio-controls-col",children:[s.jsxs("button",{type:"button",className:"btn-eic-test-tone",onClick:o,title:c==="ar"?"استمع للنغمة الحالية عند هذه النسبة المئوية":"Audition tone for current percentage","aria-label":c==="ar"?"استمع للنغمة الحالية":"Audition current tone",children:[s.jsx(Yn,{className:"icon-xs"}),s.jsx("span",{children:c==="ar"?"تجربة النغمة":"Test Tone"})]}),s.jsx("button",{type:"button",className:`btn-eic-sound-toggle ${t?"sound-active":"sound-muted"}`,onClick:i,title:t?c==="ar"?"كتم النغمات الصوتية أثناء الفيديو":"Mute visual sonification tones":c==="ar"?"تفعيل النغمات الصوتية أثناء الفيديو":"Enable visual sonification tones","aria-pressed":t,"aria-label":t?c==="ar"?"كتم الصوت":"Mute sonification":c==="ar"?"تشغيل الصوت":"Unmute sonification",children:t?s.jsx(rn,{className:"icon-sm"}):s.jsx(Zn,{className:"icon-sm"})}),s.jsxs("div",{className:"eic-volume-slider-group",children:[s.jsx("input",{type:"range",min:0,max:1,step:.05,value:t?a:0,onChange:b=>{const E=parseFloat(b.target.value);r(E),E>0&&!t&&i()},className:"eic-volume-slider","aria-label":c==="ar"?"مستوى صوت النغمات الصوتية":"Visual sonification volume"}),s.jsx("span",{className:"eic-volume-text",children:t?`${Math.round(a*100)}%`:"0%"})]})]})]})};function J0({stageId:n="air",selectedAnimation:e=null,lang:t="en",theme:i="dark"}){var me,ge,fe;const a=(e==null?void 0:e.id)||n,r=T0(n),o=Wl(n,a),[l,c]=C.useState(o.id),[d,h]=C.useState(0),[m,u]=C.useState(!1),[g,x]=C.useState(1),[y,p]=C.useState(!0),[f,M]=C.useState(!1),[b,E]=C.useState(!0),[T,_]=C.useState(.7),[v,N]=C.useState(!1),O=C.useRef(null),R=C.useRef(b),D=C.useRef(T),F=C.useRef(0),q=C.useRef(null);C.useEffect(()=>{R.current=b},[b]),C.useEffect(()=>{D.current=T},[T]),C.useEffect(()=>{const J=Wl(n,a);J&&J.id!==l&&(c(J.id),h(0),u(!1),F.current=0)},[n,a]);const I=Et.find(J=>J.id===l)||o,V=ms[a]||ms[n]||null,Q=C.useMemo(()=>Xt.getInterpolatedValuesAtTime(I,d),[I,d]),j=(ge=(me=I.graphConfig)==null?void 0:me.series)==null?void 0:ge[0],oe=j?(fe=Q[j.key])==null?void 0:fe.currentValue:null,W=C.useMemo(()=>typeof oe!="number"?null:Fi(I,oe),[I,oe]),te=C.useCallback((J,Re=!1)=>{var ve,Ae,Ge,$e;if(!R.current&&!Re)return;const Oe=Xt.getInterpolatedValuesAtTime(I,J),Ee=(Ge=(Ae=(ve=I.graphConfig)==null?void 0:ve.series)==null?void 0:Ae[0])==null?void 0:Ge.key,Ce=Ee?($e=Oe[Ee])==null?void 0:$e.currentValue:null;typeof Ce=="number"&&(Fo(I,Ce,D.current),N(!0),q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{N(!1)},280))},[I]),ie=C.useCallback(J=>{if(O.current=J,!J)return;const Re=()=>{const ve=J.currentTime||0;h(ve),!J.paused&&R.current&&(Math.abs(ve-F.current)>=.4||ve<F.current)&&(F.current=ve,te(ve))},Oe=()=>u(!0),Ee=()=>u(!1),Ce=()=>{y?(J.currentTime=0,F.current=0,J.play().catch(()=>{})):u(!1)};return J.addEventListener("timeupdate",Re),J.addEventListener("play",Oe),J.addEventListener("pause",Ee),J.addEventListener("ended",Ce),J.playbackRate=g,()=>{J.removeEventListener("timeupdate",Re),J.removeEventListener("play",Oe),J.removeEventListener("pause",Ee),J.removeEventListener("ended",Ce)}},[y,g,te]),Se=C.useCallback(()=>{const J=O.current;J&&(J.paused?J.play().catch(()=>{}):J.pause())},[]),Ue=C.useCallback(J=>{h(J),O.current&&(O.current.currentTime=J),F.current=J,te(J,!0)},[te]),X=C.useCallback(J=>{x(J),O.current&&(O.current.playbackRate=J)},[]);return s.jsxs("section",{className:"card eic-integrated-card","aria-labelledby":"eic-section-heading",children:[s.jsxs("div",{className:"card-header eic-card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(ia,{className:"section-icon text-cyan","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsxs("div",{className:"eic-badge-row",children:[s.jsxs("span",{className:"eic-live-tag",children:[s.jsx(ei,{className:"icon-xs","aria-hidden":"true"}),"NASA EARTH INFORMATION CENTER"]}),V&&s.jsxs("span",{className:"eic-connection-pill",children:[s.jsx(Fd,{className:"icon-xs","aria-hidden":"true"}),t==="ar"?V.tagAr:V.tagEn]})]}),s.jsx("h2",{id:"eic-section-heading",className:"card-title",children:t==="ar"?I.titleAr:I.titleEn}),s.jsxs("p",{className:"card-sub",children:[I.dataProvider," â€¢ SVS #",I.svsId]})]})]}),r.length>1&&s.jsx("div",{className:"eic-switcher-group",role:"tablist","aria-label":"Available EIC Showcases",children:r.map(J=>{const Re=J.id===I.id;return s.jsx("button",{type:"button",role:"tab","aria-selected":Re,className:`eic-switcher-tab ${Re?"active":""}`,onClick:()=>{c(J.id),h(0),u(!1),F.current=0,O.current&&(O.current.currentTime=0),te(0,!0)},children:s.jsx("span",{children:t==="ar"?J.titleAr:J.titleEn})},J.id)})})]}),V&&s.jsx("div",{className:"eic-connection-banner",role:"note",children:s.jsxs("p",{className:"eic-connection-text",children:[s.jsx("strong",{children:t==="ar"?"الصلة بالبيانات المعروضة: ":"Scientific Corroboration: "}),t==="ar"?V.noteAr:V.noteEn]})}),s.jsx(K0,{resource:I,currentValue:oe,isAudioEnabled:b,onToggleAudio:()=>E(J=>!J),audioVolume:T,onChangeVolume:_,onPlayTestTone:()=>te(d,!0),isPlayingTone:v,lang:t}),s.jsxs("div",{className:"eic-main-experience-grid",children:[s.jsx("div",{className:"eic-column-left",children:s.jsx(ko,{resource:I,currentTime:d,isPlaying:m,playbackSpeed:g,onTogglePlay:Se,onVideoAttach:ie,isAudioEnabled:b,onToggleAudio:()=>E(J=>!J),currentToneInfo:W,isPlayingTone:v,lang:t})}),s.jsx("div",{className:"eic-column-right",children:s.jsx(Bo,{resource:I,currentTime:d,onSeek:Ue,lang:t,theme:i})})]}),s.jsx("div",{className:"eic-integrated-timeline-wrap",children:s.jsx(ud,{resource:I,currentTime:d,isPlaying:m,playbackSpeed:g,isLooping:y,onTogglePlay:Se,onSeek:Ue,onChangeSpeed:X,onToggleLoop:()=>p(J=>!J),isAudioEnabled:b,onToggleAudio:()=>E(J=>!J),audioVolume:T,onChangeVolume:_,lang:t})}),s.jsx("div",{className:"eic-meta-toggle-row",children:s.jsxs("button",{type:"button",className:"btn-eic-meta-toggle",onClick:()=>M(J=>!J),"aria-expanded":f,children:[s.jsx(rc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:f?t==="ar"?"Ø¥Ø®Ù Ø§Ø¡ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø©":"Hide Scientific Documentation & Instrument Details":t==="ar"?"Ø¹Ø±Ø¶ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© (NASA Attribution)":"View Scientific Documentation & Instrument Details (NASA Attribution)"}),f?s.jsx(ys,{className:"icon-xs"}):s.jsx(Ss,{className:"icon-xs"})]})}),f&&s.jsx("div",{className:"eic-metadata-drawer animate-fade-in",children:s.jsx(Go,{resource:I,lang:t})})]})}co.register(uo,ho,fo,po,mo,go,xo,vo);const Q0={air:As,water:Mo,soil:Xd};function ex({lang:n="en",theme:e="dark",pollution:t,pollutionState:i,locationA:a,onSelectLocationA:r,locationB:o,onSelectLocationB:l,isCompareMode:c,onToggleCompareMode:d,volume:h,onChangeVolume:m,isMuted:u,onToggleMute:g,instrument:x,onChangeInstrument:y,quantizeScale:p,onToggleQuantizeScale:f,onAnnounce:M}){var ji,Vi,Pn,ya,Hi,Wi,ba,Ma,Ea;const b=Ct[n]||Ct.en,E=t||i||{},{selectedStage:T=POLLUTION_STAGES[0],selectedAnimation:_=(ji=POLLUTION_STAGES[0])==null?void 0:ji.animations[0],selectAnimation:v,cadence:N,setCadence:O,dates:R=[],currentIndex:D=0,currentDate:F="",setFrameIndex:q,isPlaying:I=!1,togglePlay:V,stepForward:Q,stepBackward:j,playbackSpeed:oe=1,setPlaybackSpeed:W,isLooping:te=!0,setIsLooping:ie,gibsOpacity:Se=.85,setGibsOpacity:Ue,colormapData:X,colormapLoading:me=!1,samplingLoading:ge=!1,powerData:fe,samplesByDateA:J={},samplesByDateB:Re={},seriesA:Oe=[],seriesB:Ee=[],statsA:Ce=null,pitchMappingText:ve="",playSinglePixelValue:Ae,isScanning:Ge=!1,scanProgress:$e=null,startFrameScan:be,error:je=null,retry:tt}=E,[Te,it]=C.useState("eic"),[st,Je]=C.useState(!1),[k,dt]=C.useState(!1),[qe,Ye]=C.useState("A"),[ye,ht]=C.useState(!1),[Fe,He]=C.useState(null),[w,A]=C.useState(!1),[U,re]=C.useState(null),[K,ue]=C.useState(0),[pe,ee]=C.useState(!1),G=typeof window<"u"&&"speechSynthesis"in window,[Y,P]=C.useState({active:null,progress:null,error:null,successMsg:null}),Z=C.useRef(null),H=C.useRef(null),de=C.useRef(null),se=C.useRef(null),xe=C.useRef(null),we=C.useRef(null),ze=C.useRef(null),le=J[F]||U||((Vi=Oe[D])==null?void 0:Vi.sample)||null,Le=c&&(Re[F]||((Pn=Ee[D])==null?void 0:Pn.sample))||null;C.useEffect(()=>{var $,he;if(!Z.current||H.current)return;const ae=(a==null?void 0:a.lat)??(($=T.presets[0])==null?void 0:$.lat)??30.0444,S=(a==null?void 0:a.lon)??((he=T.presets[0])==null?void 0:he.lon)??31.2357,L=jt.map(Z.current,{center:[ae,S],zoom:T.defaultZoom||4,minZoom:2,maxZoom:12,scrollWheelZoom:!0,attributionControl:!0}),z=jt.tileLayer(e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; CARTO &copy; OpenStreetMap",subdomains:"abcd",maxZoom:19,crossOrigin:"anonymous"}).addTo(L);de.current=z,H.current=L;const B=setTimeout(()=>L.invalidateSize(),250);return()=>{clearTimeout(B),L.remove(),H.current=null,se.current=null,we.current=null,ze.current=null}},[]),C.useEffect(()=>{if(!Z.current)return;const ae=new ResizeObserver(()=>{H.current&&H.current.invalidateSize()});return ae.observe(Z.current),()=>ae.disconnect()},[]),C.useEffect(()=>{if(!de.current)return;const ae=e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";de.current.setUrl(ae)},[e]),C.useEffect(()=>{const ae=H.current;if(!ae||!_||!F)return;const S=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${_.gibsLayerId}/default/${F}/${_.tileMatrixSet}/{z}/{y}/{x}.${_.ext}`;if(ue(0),se.current&&xe.current===_.id){se.current.setOpacity(Se),se.current.setUrl(S);return}se.current&&(ae.removeLayer(se.current),se.current=null);const L=jt.tileLayer(S,{attribution:"NASA EOSDIS GIBS",maxNativeZoom:_.maxNativeZoom,maxZoom:12,crossOrigin:"anonymous",opacity:Se,errorTileUrl:'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="rgba(15,23,42,0.45)"/><text x="50%" y="50%" fill="%2364748b" font-family="sans-serif" font-size="11" text-anchor="middle">No Satellite Data</text></svg>'});L.on("tileerror",()=>{ue(z=>z+1)}),L.addTo(ae),se.current=L,xe.current=_.id},[_,F,Se]),C.useEffect(()=>{const ae=H.current;if(!ae)return;const S=(L,z)=>jt.divIcon({className:"custom-leaflet-marker",html:`
        <div class="marker-pin-wrap" style="--pin-color: ${L}">
          <div class="marker-pin">
            <span class="marker-badge">${z}</span>
          </div>
        </div>
      `,iconSize:[36,42],iconAnchor:[18,42],popupAnchor:[0,-38]});if(a){const L=[a.lat,a.lon],z=c?"A":"●";we.current?(we.current.setLatLng(L),we.current.setIcon(S("#38bdf8",z))):we.current=jt.marker(L,{icon:S("#38bdf8",z)}).addTo(ae);const B=n==="ar"&&a.nameAr||a.nameEn,$=(le==null?void 0:le.label)||(ge?"...":"No Data");we.current.bindPopup(`
        <div style="font-family:inherit;font-size:13px;min-width:170px;">
          <div style="font-weight:800;color:#38bdf8;margin-bottom:4px;">${B} ${c?"(A)":""}</div>
          <div style="font-size:11px;color:#94a3b8;font-family:monospace;margin-bottom:4px;">${a.lat.toFixed(3)}°, ${a.lon.toFixed(3)}°</div>
          <div style="padding:4px 8px;background:rgba(56,189,248,0.15);border-radius:6px;font-weight:700;color:#f8fafc;">
            ${F}: <span style="color:#38bdf8;">${$}</span>
          </div>
        </div>
      `)}if(c&&o){const L=[o.lat,o.lon];ze.current?(ze.current.setLatLng(L),ze.current.setIcon(S("#f97316","B"))):ze.current=jt.marker(L,{icon:S("#f97316","B")}).addTo(ae);const z=n==="ar"&&o.nameAr||o.nameEn,B=(Le==null?void 0:Le.label)||(ge?"...":"No Data");ze.current.bindPopup(`
        <div style="font-family:inherit;font-size:13px;min-width:170px;">
          <div style="font-weight:800;color:#f97316;margin-bottom:4px;">${z} (B)</div>
          <div style="font-size:11px;color:#94a3b8;font-family:monospace;margin-bottom:4px;">${o.lat.toFixed(3)}°, ${o.lon.toFixed(3)}°</div>
          <div style="padding:4px 8px;background:rgba(249,115,22,0.15);border-radius:6px;font-weight:700;color:#f8fafc;">
            ${F}: <span style="color:#f97316;">${B}</span>
          </div>
        </div>
      `)}else ze.current&&(ae.removeLayer(ze.current),ze.current=null)},[a,o,c,F,le,Le,ge,n]),C.useEffect(()=>{const ae=H.current;if(!ae)return;const S=L=>{const{lat:z,lng:B}=L.latlng,$={id:`custom_${z.toFixed(3)}_${B.toFixed(3)}`,nameEn:`Custom (${z.toFixed(2)}°, ${B.toFixed(2)}°)`,nameAr:`نقطة (${z.toFixed(2)}°, ${B.toFixed(2)}°)`,lat:parseFloat(z.toFixed(4)),lon:parseFloat(B.toFixed(4)),isCustom:!0};!c||qe==="A"?(r($),c&&Ye("B")):(l($),Ye("A")),ae.flyTo([z,B],ae.getZoom(),{duration:.5})};return ae.on("click",S),()=>ae.off("click",S)},[c,qe,r,l]);const We=ae=>{!c||qe==="A"?(r(ae),c&&Ye("B")):(l(ae),Ye("A")),H.current&&H.current.flyTo([ae.lat,ae.lon],T.defaultZoom||5,{duration:.7})},ce=()=>{if(!navigator.geolocation){He(b.gpsError);return}ht(!0),He(null),navigator.geolocation.getCurrentPosition(ae=>{ht(!1);const{latitude:S,longitude:L}=ae.coords,z={id:"gps_device",nameEn:`GPS (${S.toFixed(2)}°, ${L.toFixed(2)}°)`,nameAr:`موقع GPS (${S.toFixed(2)}°, ${L.toFixed(2)}°)`,lat:parseFloat(S.toFixed(4)),lon:parseFloat(L.toFixed(4))};!c||qe==="A"?r(z):l(z),H.current&&H.current.flyTo([S,L],6,{duration:.8})},()=>{ht(!1),He(b.gpsError)},{enableHighAccuracy:!0,timeout:9e3,maximumAge:6e4})},Ve=async()=>{var ae;if(a){A(!0);try{const S=Math.min(((ae=H.current)==null?void 0:ae.getZoom())||4,_.maxNativeZoom),L=pn(a.lat,a.lon,S),z=sn(_,F,S,L.tileY,L.tileX),B=await qn(z,L.pixelX,L.pixelY,X,_);if(re(B),(B==null?void 0:B.value)!==null&&!isNaN(B.value)&&(Ae(B.value,c?-.75:0),M==null||M(`${F}: ${B.label}`)),c&&o){const $=pn(o.lat,o.lon,S),he=sn(_,F,S,$.tileY,$.tileX),Me=await qn(he,$.pixelX,$.pixelY,X,_);(Me==null?void 0:Me.value)!==null&&!isNaN(Me.value)&&Ae(Me.value,.75)}}finally{A(!1)}}},nt=()=>{const ae=H.current;!ae||Ge||be(async S=>{const L=ae.getBounds(),z=L.getWest(),B=L.getEast(),$=(L.getSouth()+L.getNorth())/2,he=Math.min(ae.getZoom(),_.maxNativeZoom),Me=[];for(let _e=0;_e<S;_e++){const Ne=z+(B-z)*(_e/(S-1)),De=pn($,Ne,he),Xe=sn(_,F,he,De.tileY,De.tileX),Qe=await qn(Xe,De.pixelX,De.pixelY,X,_);Me.push((Qe==null?void 0:Qe.value)??null)}return Me})},Mt=C.useMemo(()=>{const ae=Oe.map(he=>he.date),S=Oe.map(he=>he.value),L=Oe.map((he,Me)=>{var _e,Ne,De,Xe;return Me===D?7:(Ne=(_e=Ce==null?void 0:Ce.recordsMap)==null?void 0:_e[Me])!=null&&Ne.isAllTimeMax||(Xe=(De=Ce==null?void 0:Ce.recordsMap)==null?void 0:De[Me])!=null&&Xe.isAllTimeMin?5:3}),z=Oe.map((he,Me)=>{var _e,Ne,De,Xe;return Me===D?"#ffffff":(Ne=(_e=Ce==null?void 0:Ce.recordsMap)==null?void 0:_e[Me])!=null&&Ne.isAllTimeMax?"#ef4444":(Xe=(De=Ce==null?void 0:Ce.recordsMap)==null?void 0:De[Me])!=null&&Xe.isAllTimeMin?"#3b82f6":"#38bdf8"}),B=[{label:`${n==="ar"&&(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn)} (${_.unitEn})`,data:S,borderColor:"#38bdf8",backgroundColor:"rgba(56, 189, 248, 0.12)",borderWidth:2.5,pointRadius:L,pointBackgroundColor:z,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,tension:.25,spanGaps:!0,fill:!0}];c&&Ee.length>0&&B.push({label:`${n==="ar"&&(o==null?void 0:o.nameAr)||(o==null?void 0:o.nameEn)} (${_.unitEn})`,data:Ee.map(he=>he.value),borderColor:"#f97316",backgroundColor:"rgba(249, 115, 22, 0.08)",borderWidth:2.5,pointRadius:Ee.map((he,Me)=>Me===D?7:3),pointBackgroundColor:Ee.map((he,Me)=>Me===D?"#ffffff":"#f97316"),tension:.25,spanGaps:!0,fill:!0});const $=Oe.some(he=>he.powerValue!==null&&!isNaN(he.powerValue));if(_.pairedPowerParam&&$){const he=fd[_.pairedPowerParam];B.push({label:`NASA POWER ${_.pairedPowerParam} (${(he==null?void 0:he.unitEn)||""})`,data:Oe.map(Me=>Me.powerValue),borderColor:"#a855f7",borderDash:[5,4],borderWidth:2,pointRadius:2,spanGaps:!0,fill:!1})}return{labels:ae,datasets:B}},[Oe,Ee,D,Ce,a,o,c,_,n]),on=C.useMemo(()=>({id:"pollutionCursorPlugin",afterDatasetsDraw(ae){if(!Oe||Oe.length===0)return;const S=ae.ctx,L=ae.scales.x,z=ae.scales.y;if(!L||!z)return;const B=L.getPixelForTick(D);isNaN(B)||(S.save(),S.beginPath(),S.moveTo(B,z.top),S.lineTo(B,z.bottom),S.lineWidth=2,S.strokeStyle="#ffffff",S.setLineDash([4,4]),S.stroke(),S.fillStyle="#38bdf8",S.beginPath(),S.arc(B,z.top,4.5,0,Math.PI*2),S.fill(),S.restore())}}),[D,Oe]),ti=C.useMemo(()=>{const ae=e==="light";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:180},plugins:{legend:{position:"top",labels:{color:ae?"#0f172a":"#e2e8f0",font:{family:n==="ar"?"Cairo, sans-serif":"Inter, sans-serif",size:12,weight:"600"}}},tooltip:{backgroundColor:ae?"#0f172a":"rgba(15, 23, 42, 0.95)",titleColor:"#38bdf8",bodyColor:"#f8fafc",borderColor:ae?"#cbd5e1":"#334155",borderWidth:1}},scales:{x:{grid:{color:ae?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.3)"},ticks:{color:ae?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:11},maxTicksLimit:10}},y:{grid:{color:ae?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.3)"},ticks:{color:ae?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:11},callback:S=>`${S}`}}}}},[n,e]),Ps=()=>{const ae=["Index","Date",`${(a==null?void 0:a.nameEn)||"Location A"} (${_.unitEn})`];c&&ae.push(`${(o==null?void 0:o.nameEn)||"Location B"} (${_.unitEn})`),_.pairedPowerParam&&ae.push(`NASA POWER ${_.pairedPowerParam}`);const S=Oe.map((he,Me)=>{var Ne;const _e=[Me+1,he.date,he.value??""];return c&&_e.push(((Ne=Ee[Me])==null?void 0:Ne.value)??""),_.pairedPowerParam&&_e.push(he.powerValue??""),_e.join(",")}),L=[ae.join(","),...S].join(`
`),z=new Blob([L],{type:"text/csv;charset=utf-8;"}),B=URL.createObjectURL(z),$=document.createElement("a");$.href=B,$.download=`${_.id}_series.csv`,$.click(),setTimeout(()=>URL.revokeObjectURL(B),1e3)},xa=C.useMemo(()=>{var $,he;const ae=n==="ar"?(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn):(a==null?void 0:a.nameEn)||"this location",S=n==="ar"?_.whatItIsAr:_.whatItIsEn,L=n==="ar"?_.whyItMattersAr:_.whyItMattersEn,z=n==="ar"?_.whatTrendShowsAr:_.whatTrendShowsEn;let B="";if(Ce&&Ce.n>=2){const Me=R[($=Ce.recordHigh)==null?void 0:$.year]||"",_e=R[(he=Ce.recordLow)==null?void 0:he.year]||"";n==="ar"?B=`في ${ae}، بلغ المتوسط ${Ce.mean.toFixed(2)} ${_.unitAr}. وسُجّلت أعلى قيمة (${Ce.max}) في ${Me} وأدنى قيمة (${Ce.min}) في ${_e}.`:B=`At ${ae}, the sampled mean is ${Ce.mean.toFixed(2)} ${_.unitEn}, peaking at ${Ce.max} on ${Me} and dipping to ${Ce.min} on ${_e}.`}return`${S} ${L} ${z} ${B}`},[n,a,_,Ce,R]),va=()=>{if(!G)return;if(pe){window.speechSynthesis.cancel(),ee(!1);return}window.speechSynthesis.cancel();const ae=new SpeechSynthesisUtterance(xa);ae.lang=n==="ar"?"ar-SA":"en-US",ae.rate=.98,ae.onstart=()=>ee(!0),ae.onend=()=>ee(!1),ae.onerror=()=>ee(!1),window.speechSynthesis.speak(ae)};C.useEffect(()=>()=>{G&&window.speechSynthesis.cancel()},[_.id,G]);const ln=()=>{const ae=H.current;if(ae){const S=ae.getBounds();return{west:S.getWest(),east:S.getEast(),south:S.getSouth(),north:S.getNorth()}}return{west:((a==null?void 0:a.lon)??31.2)-18,east:((a==null?void 0:a.lon)??31.2)+18,south:((a==null?void 0:a.lat)??30)-12,north:((a==null?void 0:a.lat)??30)+12}},zi=async()=>{P({active:"zip",progress:{current:0,total:R.length,date:""},error:null,successMsg:null});try{await X0(_,R,ln(),J,Re,{opacity:Se,lang:n,locationA:a,locationB:o,isCompareMode:c},ae=>P(S=>({...S,progress:ae}))),P({active:null,progress:null,error:null,successMsg:n==="ar"?`تم تصدير ${R.length} إطار PNG في ملف ZIP بنجاح.`:`Downloaded ${R.length} PNG frames + metadata in ZIP.`})}catch(ae){P({active:null,progress:null,error:(ae==null?void 0:ae.message)||"ZIP export failed.",successMsg:null})}},_a=async()=>{P({active:"webm",progress:{current:0,total:R.length,date:""},error:null,successMsg:null});try{await q0(_,R,ln(),J,Re,{opacity:Se,lang:n,locationA:a,locationB:o,isCompareMode:c},ae=>P(S=>({...S,progress:ae}))),P({active:null,progress:null,error:null,successMsg:n==="ar"?"تم تسجيل وتنزيل فيديو WebM بنجاح.":"Recorded and downloaded WebM timelapse video."})}catch(ae){P({active:null,progress:null,error:(ae==null?void 0:ae.message)||"WebM export failed.",successMsg:null})}},Sa=()=>{try{Y0(_,R,a,o,c,J,Re,fe.primaryMap),P({active:null,progress:null,error:null,successMsg:n==="ar"?"تم تنزيل ملف JSON للتواريخ والقيم.":"Downloaded frame dates & values JSON."})}catch(ae){P({active:null,progress:null,error:(ae==null?void 0:ae.message)||"JSON export failed.",successMsg:null})}},pi=Q0[T.id]||As;return s.jsxs("div",{className:"pollution-stages-workspace",children:[s.jsxs("section",{className:"card stage-selector-card","aria-labelledby":"active-stage-heading",children:[s.jsxs("div",{className:"stage-header-row",children:[s.jsxs("div",{className:"stage-title-group",children:[s.jsx("div",{className:"stage-icon-pill",style:{borderColor:T.accentColor,color:T.accentColor},children:s.jsx(pi,{className:"icon-md","aria-hidden":"true"})}),s.jsxs("div",{children:[s.jsx("h2",{id:"active-stage-heading",className:"card-title",children:n==="ar"?T.titleAr:T.titleEn}),s.jsx("p",{className:"card-sub",children:n==="ar"?T.subtitleAr:T.subtitleEn})]})]}),s.jsxs("div",{className:"cadence-toggle-group",role:"group","aria-label":n==="ar"?"تردد الإطارات":"Time-Lapse Cadence",children:[s.jsx("button",{type:"button",className:`btn-cadence ${N==="monthly"?"active":""}`,onClick:()=>O("monthly"),"aria-pressed":N==="monthly",children:n==="ar"?"شهري (2024–2026)":"Monthly Steps"}),s.jsx("button",{type:"button",className:`btn-cadence ${N==="yearly"?"active":""}`,onClick:()=>O("yearly"),"aria-pressed":N==="yearly",children:n==="ar"?"سنوي (متعدد السنوات)":"Yearly Steps"})]})]}),T.honestyBannerEn&&s.jsxs("div",{className:"soil-honesty-banner",role:"note",children:[s.jsx(Es,{className:"icon-sm text-gold","aria-hidden":"true"}),s.jsx("p",{children:n==="ar"?T.honestyBannerAr:T.honestyBannerEn})]}),s.jsx("div",{className:"animation-cards-grid",role:"group","aria-label":n==="ar"?"الرسوم المتحركة الثلاثة في هذه المرحلة":"3 NASA Data Animations in this Stage",children:T.animations.map((ae,S)=>{const L=ae.id===_.id;return s.jsxs("button",{type:"button",className:`animation-card-btn ${L?"active":""}`,onClick:()=>v(ae.id),"aria-pressed":L,children:[s.jsxs("div",{className:"anim-card-top",children:[s.jsxs("span",{className:"anim-card-num",children:["#",S+1]}),s.jsx("span",{className:`anim-badge ${ae.isProxy?"badge-proxy":"badge-direct"}`,children:n==="ar"?ae.proxyBadgeAr:ae.proxyBadgeEn})]}),s.jsx("h3",{className:"anim-card-title",children:n==="ar"?ae.titleAr:ae.titleEn}),s.jsxs("div",{className:"anim-card-meta",children:[s.jsx("span",{className:"anim-provider",children:ae.provider}),s.jsxs("span",{className:"anim-range",children:[ae.availableRange.start.slice(0,7)," → ",ae.availableRange.end.slice(0,7)," • ",n==="ar"?ae.unitAr:ae.unitEn]})]})]},ae.id)})})]}),(me||ge||fe.loading)&&s.jsxs("div",{className:"loading-bar-wrap",role:"status","aria-live":"polite",children:[s.jsx(aa,{className:"icon-sm spin","aria-hidden":"true"}),s.jsx("span",{children:n==="ar"?`جاري تحميل إطارات وألوان ناسا (${_.titleAr})...`:`Loading real NASA GIBS frames & pixel series (${_.gibsLayerId})...`})]}),je&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ta,{className:"icon","aria-hidden":"true"}),s.jsxs("div",{className:"error-text",children:[s.jsxs("strong",{children:[n==="ar"?"خطأ في بيانات ناسا":"NASA Data Error",": "]}),s.jsx("span",{children:je})]}),s.jsx("button",{type:"button",className:"btn-retry",onClick:tt,children:n==="ar"?"إعادة المحاولة":"Retry"})]}),s.jsx("div",{className:"view-mode-switcher-bar",children:s.jsxs("div",{className:"view-mode-pill-group",role:"tablist","aria-label":n==="ar"?"طريقة العرض الأساسية":"Primary View Mode",children:[s.jsxs("button",{type:"button",role:"tab","aria-selected":Te==="eic",className:`btn-view-mode ${Te==="eic"?"active":""}`,onClick:()=>it("eic"),children:[s.jsx(gr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:n==="ar"?"مركز معلومات الأرض (NASA EIC): المحاكاة والمخطط العلمي":"NASA EIC: Visual & Scientific Graph"})]}),s.jsxs("button",{type:"button",role:"tab","aria-selected":Te==="satellite",className:`btn-view-mode ${Te==="satellite"?"active":""}`,onClick:()=>{it("satellite"),setTimeout(()=>{H.current&&H.current.invalidateSize()},120)},children:[s.jsx(xr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:n==="ar"?"خريطة الأقمار الصناعية وتحويل البكسل لصوت (GIBS)":"Interactive Satellite Map & Sonifier"})]})]})}),s.jsx("div",{style:{display:Te==="eic"?"block":"none"},children:s.jsx(J0,{stageId:T.id,selectedAnimation:_,lang:n,theme:e})}),s.jsxs("div",{style:{display:Te==="satellite"?"block":"none"},children:[s.jsxs("div",{className:"grid-two-columns",children:[s.jsxs("section",{className:"card map-card","aria-labelledby":"pollution-map-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(xr,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-map-heading",className:"card-title",children:n==="ar"?_.titleAr:_.titleEn}),s.jsxs("p",{className:"card-sub",children:[b.clickMapToSelect," • ",s.jsx("code",{className:"inline-layer-id",children:_.gibsLayerId})]})]})]}),s.jsx("div",{className:"compare-toggle-wrap",children:s.jsxs("label",{className:"toggle-label",htmlFor:"pollution-compare-checkbox",children:[s.jsx("input",{id:"pollution-compare-checkbox",type:"checkbox",className:"toggle-checkbox",checked:c,onChange:ae=>d(ae.target.checked)}),s.jsx("span",{className:"toggle-switch"}),s.jsx("span",{className:"toggle-text",children:b.compareModeLabel})]})})]}),s.jsxs("div",{className:"presets-bar",role:"group","aria-label":b.locationPresetLabel,children:[s.jsxs("button",{type:"button",className:`preset-pill btn-gps-locate ${ye?"loading":""}`,onClick:ce,"aria-label":b.gpsBtn,children:[ye?s.jsx(aa,{className:"preset-icon spin","aria-hidden":"true"}):s.jsx(ac,{className:"preset-icon icon-gps","aria-hidden":"true"}),s.jsx("span",{children:ye?b.gpsLoading:b.gpsBtn})]}),T.presets.map(ae=>{const S=(a==null?void 0:a.id)===ae.id,L=c&&(o==null?void 0:o.id)===ae.id,z=n==="ar"?ae.nameAr:ae.nameEn;return s.jsxs("button",{type:"button",className:`preset-pill ${S?"active-a":""} ${L?"active-b":""}`,onClick:()=>We(ae),"aria-pressed":S||L,children:[s.jsx(oc,{className:"preset-icon","aria-hidden":"true"}),s.jsx("span",{children:z}),S&&s.jsx("span",{className:"pill-badge pill-a",children:c?"A":"●"}),L&&s.jsx("span",{className:"pill-badge pill-b",children:"B"})]},ae.id)})]}),Fe&&s.jsxs("div",{className:"gps-error-alert",role:"alert",children:[s.jsx(ta,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:Fe})]}),s.jsxs("div",{className:"gibs-controls-toolbar",children:[s.jsxs("div",{className:"gibs-toolbar-row",children:[s.jsxs("div",{className:"gibs-date-badge",children:[s.jsx(rs,{className:"icon-xs text-orange","aria-hidden":"true"}),s.jsxs("span",{className:"gibs-date-text",children:[b.gibsDate,": ",s.jsx("strong",{children:F})," (",D+1,"/",R.length,")"]})]}),_.legendUrl?s.jsxs("button",{type:"button",className:`btn-legend-toggle ${k?"active":""}`,onClick:()=>dt(ae=>!ae),"aria-pressed":k,children:[s.jsx(Ii,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:b.toggleLegend})]}):s.jsx("span",{className:"gibs-no-legend-tag",children:n==="ar"?"صور ألوان طبيعية (السطوع)":"True-Color Optical Reflectance"})]}),s.jsxs("div",{className:"gibs-sonify-actions-row",children:[s.jsxs("button",{type:"button",className:`btn-sonify-frame ${w?"loading":""}`,onClick:Ve,disabled:w,children:[s.jsx(Yn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:w?n==="ar"?"جاري القراءة...":"Sampling...":b.sonifyPixelBtn})]}),s.jsxs("button",{type:"button",className:`btn-scan-frame ${Ge?"scanning":""}`,onClick:nt,disabled:Ge,children:[s.jsx(cc,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Ge?b.scanning:b.scanFrameBtn})]}),s.jsxs("div",{className:"opacity-slider-wrap",children:[s.jsxs("span",{className:"opacity-label",children:[b.gibsOpacity,":"]}),s.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:Se,onChange:ae=>Ue(parseFloat(ae.target.value)),className:"gibs-opacity-slider","aria-label":b.gibsOpacity})]})]}),le&&s.jsxs("div",{className:"sampled-pixel-callout",role:"status",children:[s.jsxs("div",{className:"callout-header",children:[s.jsxs("span",{className:"callout-title",children:[b.framePixelSampled," (",n==="ar"&&(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn),"):"]}),s.jsx("span",{className:"callout-val",children:le.label}),le.r!==void 0&&s.jsxs("span",{className:"rgb-chip",style:{backgroundColor:`rgb(${le.r}, ${le.g}, ${le.b})`},children:["RGB: ",le.r,",",le.g,",",le.b]})]}),s.jsx("p",{className:"callout-notice",children:le.missingTile||le.emptyPixel?n==="ar"?"لا تتوفر بيانات قمر صناعي لهذه النقطة في هذا التاريخ (سحب أو فجوة مدارية).":"Cloud cover or orbital swath gap at this point on this frame date.":le.isLuminance?b.luminanceNotice:b.colormapNotice})]}),k&&_.legendUrl&&s.jsx("div",{className:"gibs-legend-drawer",children:s.jsx("div",{className:"legend-img-wrap",children:s.jsx("img",{src:_.legendUrl,alt:`${_.titleEn} NASA GIBS Legend`,className:"gibs-legend-img"})})})]}),c&&s.jsxs("div",{className:"compare-picker-bar",role:"radiogroup","aria-label":"Select target location",children:[s.jsx("span",{className:"picker-prompt",children:n==="ar"?"تعديل الهدف بالنقر:":"Set target on click:"}),s.jsxs("button",{type:"button",className:`btn-target ${qe==="A"?"selected":""}`,onClick:()=>Ye("A"),"aria-checked":qe==="A",role:"radio",children:[s.jsx("span",{className:"color-dot dot-a"}),s.jsx("span",{children:b.locationA})]}),s.jsxs("button",{type:"button",className:`btn-target ${qe==="B"?"selected":""}`,onClick:()=>Ye("B"),"aria-checked":qe==="B",role:"radio",children:[s.jsx("span",{className:"color-dot dot-b"}),s.jsx("span",{children:b.locationB})]})]}),s.jsxs("div",{className:"map-wrapper-relative",children:[s.jsx("div",{ref:Z,className:"map-container",tabIndex:"0","aria-label":`NASA GIBS map for ${_.titleEn} on ${F}`,role:"region"}),Ge&&$e!==null&&s.jsxs("div",{className:"scan-laser-line",style:{left:`${$e*100}%`},"aria-hidden":"true",children:[s.jsx("div",{className:"laser-beam"}),s.jsx("div",{className:"laser-glow"})]})]}),s.jsxs("div",{className:"map-footer",children:[s.jsxs("div",{className:"frame-overlay-indicator",children:[s.jsxs("span",{className:"overlay-badge",style:{backgroundColor:"#0284c7"},children:[n==="ar"&&(a==null?void 0:a.nameAr)||(a==null?void 0:a.nameEn),": ",(le==null?void 0:le.label)||"—"]}),c&&o&&s.jsxs("span",{className:"overlay-badge badge-b",style:{backgroundColor:"#ea580c"},children:[n==="ar"&&(o==null?void 0:o.nameAr)||(o==null?void 0:o.nameEn),": ",(Le==null?void 0:Le.label)||"—"]})]}),K>0&&s.jsx("span",{className:"tile-gap-note",children:n==="ar"?"بعض البلاطات بدون تغطية لهذا التاريخ":"Partial orbital/cloud tile gap"})]})]}),s.jsxs("section",{className:"card chart-card","aria-labelledby":"pollution-chart-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(hi,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsxs("h2",{id:"pollution-chart-heading",className:"card-title",children:[n==="ar"?"السلسلة الزمنية لقراءات الإطار":"Frame Pixel Time Series"," (",(ya=R[0])==null?void 0:ya.slice(0,7)," → ",(Hi=R[R.length-1])==null?void 0:Hi.slice(0,7),")"]}),s.jsxs("p",{className:"card-sub",children:[_.provider," • ",n==="ar"?_.variableAr:_.variableEn]})]})]}),s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${st?"":"active"}`,onClick:()=>Je(!1),"aria-pressed":!st,children:[s.jsx(yo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:b.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${st?"active":""}`,onClick:()=>Je(!0),"aria-pressed":st,children:[s.jsx(os,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:b.dataTableView})]})]})]}),st?s.jsxs("div",{className:"pollution-table-panel",children:[s.jsx("div",{className:"table-toolbar-row",children:s.jsxs("button",{type:"button",className:"btn-download-csv",onClick:Ps,children:[s.jsx(mr,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:b.downloadCsv})]})}),s.jsx("div",{className:"table-scroll-container",children:s.jsxs("table",{className:"accessible-data-table",children:[s.jsxs("caption",{className:"sr-only",children:[_.titleEn," values across ",R.length," dates"]}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:n==="ar"?"التاريخ":"Frame Date"}),s.jsxs("th",{scope:"col",children:[n==="ar"?"الموقع أ":"Loc A"," (",_.unitEn,")"]}),c&&s.jsx("th",{scope:"col",children:n==="ar"?"الموقع ب":"Loc B"}),_.pairedPowerParam&&s.jsxs("th",{scope:"col",children:["POWER ",_.pairedPowerParam]}),s.jsx("th",{scope:"col",children:n==="ar"?"ملاحظة":"Notes"})]})}),s.jsx("tbody",{children:Oe.map((ae,S)=>{var B,$,he;const L=S===D,z=(B=Ce==null?void 0:Ce.recordsMap)==null?void 0:B[S];return s.jsxs("tr",{className:`${L?"current-row":""} ${z!=null&&z.isAllTimeMax?"row-record-high":""} ${z!=null&&z.isAllTimeMin?"row-record-low":""}`,onClick:()=>q(S,!0,!0),style:{cursor:"pointer"},children:[s.jsx("td",{className:"mono-cell",children:ae.date}),s.jsx("td",{className:"mono-cell",children:ae.value!==null?ae.value:"—"}),c&&s.jsx("td",{className:"mono-cell",children:(($=Ee[S])==null?void 0:$.value)!==null?Ee[S].value:"—"}),_.pairedPowerParam&&s.jsx("td",{className:"mono-cell",children:ae.powerValue!==null?ae.powerValue:"—"}),s.jsxs("td",{children:[(z==null?void 0:z.isAllTimeMax)&&s.jsx("span",{className:"badge-rec badge-high",children:b.recordHigh}),(z==null?void 0:z.isAllTimeMin)&&s.jsx("span",{className:"badge-rec badge-low",children:b.recordLow}),((he=ae.sample)==null?void 0:he.emptyPixel)&&s.jsx("span",{children:n==="ar"?"فجوة/سحب":"Cloud/Gap"})]})]},ae.date)})})]})})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"chart-canvas-wrapper",role:"img","aria-label":`Line chart of sampled ${_.titleEn} values`,children:s.jsx(_o,{data:Mt,options:ti,plugins:[on]})}),s.jsxs("div",{className:"chart-highlights",children:[s.jsxs("div",{className:"highlight-pill highlight-current",children:[s.jsx("span",{className:"dot dot-white"}),s.jsxs("span",{className:"label",children:[F,": ",(le==null?void 0:le.label)||"—"]})]}),(Ce==null?void 0:Ce.recordHigh)&&s.jsxs("div",{className:"highlight-pill highlight-high",children:[s.jsx("span",{className:"dot dot-red"}),s.jsxs("span",{className:"label",children:[b.recordHigh,": ",Ce.recordHigh.value," ",_.unitEn," (",R[Ce.recordHigh.year],")"]})]}),(Ce==null?void 0:Ce.recordLow)&&s.jsxs("div",{className:"highlight-pill highlight-low",children:[s.jsx("span",{className:"dot dot-blue"}),s.jsxs("span",{className:"label",children:[b.recordLow,": ",Ce.recordLow.value," ",_.unitEn," (",R[Ce.recordLow.year],")"]})]})]})]})]})]}),s.jsxs("div",{className:"grid-two-columns",children:[s.jsxs("section",{className:"card timeline-controls-card","aria-labelledby":"pollution-timeline-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(rs,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-timeline-heading",className:"card-title",children:b.timelineHeading}),s.jsx("p",{className:"card-sub",children:n==="ar"?`${R[0]} إلى ${R[R.length-1]} (${R.length} إطاراً)`:`${R[0]} to ${R[R.length-1]} (${R.length} frames)`})]})]}),s.jsxs("div",{className:"current-year-badge","aria-live":"off",children:[s.jsx("span",{className:"year-label",children:n==="ar"?"التاريخ":"Frame"}),s.jsx("span",{className:"year-number mono-frame-date",children:F})]})]}),s.jsxs("div",{className:"slider-container",children:[s.jsx("input",{type:"range",min:"0",max:Math.max(0,R.length-1),step:"1",value:D,onChange:ae=>q(parseInt(ae.target.value,10),!0,!0),className:"timeline-slider","aria-label":n==="ar"?"شريط تمرير الإطارات الزمنية":"Scrub animation frame date","aria-valuetext":`${F}, ${(le==null?void 0:le.label)||"No data"}`}),s.jsxs("div",{className:"slider-ticks",children:[s.jsx("span",{children:R[0]}),s.jsx("span",{children:R[Math.floor(R.length/2)]}),s.jsx("span",{children:R[R.length-1]})]})]}),s.jsxs("div",{className:"controls-button-bar",children:[s.jsxs("div",{className:"playback-main-btns",children:[s.jsx("button",{type:"button",className:"btn-control btn-step",onClick:j,"aria-label":b.stepBack,children:s.jsx(dc,{className:"icon","aria-hidden":"true"})}),s.jsxs("button",{type:"button",className:`btn-control btn-play ${I?"playing":""}`,onClick:V,"aria-label":I?b.pause:b.play,children:[I?s.jsx(Ms,{className:"icon-md","aria-hidden":"true"}):s.jsx(Cn,{className:"icon-md","aria-hidden":"true"}),s.jsx("span",{children:I?b.pause:b.play})]}),s.jsx("button",{type:"button",className:"btn-control btn-step",onClick:Q,"aria-label":b.stepForward,children:s.jsx(uc,{className:"icon","aria-hidden":"true"})})]}),s.jsxs("div",{className:"speed-control-group",children:[s.jsxs("span",{className:"control-label",children:[b.speed,":"]}),s.jsx("div",{className:"speed-pills",role:"group","aria-label":b.speed,children:[.5,1,1.5,2].map(ae=>s.jsxs("button",{type:"button",className:`btn-speed ${oe===ae?"active":""}`,onClick:()=>W(ae),"aria-pressed":oe===ae,children:[ae,"x"]},ae))})]}),s.jsxs("button",{type:"button",className:`btn-control btn-loop ${te?"active":""}`,onClick:()=>ie(ae=>!ae),"aria-pressed":te,children:[s.jsx(Eo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:b.loop})]})]})]}),s.jsxs("section",{className:"card audio-controls-card","aria-labelledby":"pollution-audio-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Yn,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-audio-heading",className:"card-title",children:b.audioHeading}),s.jsx("p",{className:"card-sub",children:n==="ar"?"القيمة الأعلى = نغمة أعلى • تنبيهات الأرقام القياسية مفعلة":"Higher value = higher pitch • Record high/low chimes enabled"})]})]}),c&&s.jsxs("div",{className:"stereo-badge",role:"status",children:[s.jsx(bs,{className:"icon-sm","aria-hidden":"true"}),s.jsxs("span",{children:[b.spatialStereo," (L ⟷ R)"]})]})]}),s.jsxs("div",{className:"audio-controls-grid",children:[s.jsxs("div",{className:"control-group",children:[s.jsxs("div",{className:"control-label-row",children:[s.jsxs("label",{htmlFor:"pollution-volume-slider",className:"control-label",children:[s.jsx(hc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:b.volume})]}),s.jsx("span",{className:"control-value-text",children:u?"0%":`${Math.round(h*100)}%`})]}),s.jsxs("div",{className:"volume-slider-row",children:[s.jsx("button",{type:"button",className:`btn-mute-sm ${u?"muted":""}`,onClick:g,"aria-label":u?b.unmute:b.mute,children:u?s.jsx(Zn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(rn,{className:"icon-sm","aria-hidden":"true"})}),s.jsx("input",{id:"pollution-volume-slider",type:"range",min:"0",max:"1",step:"0.05",value:u?0:h,onChange:ae=>m(parseFloat(ae.target.value)),className:"volume-slider"})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("span",{className:"control-label",children:b.instrument}),s.jsx("div",{className:"instrument-button-group",role:"radiogroup",children:[{id:"sine",label:b.instrumentSine},{id:"triangle",label:b.instrumentTriangle},{id:"soft_pluck",label:b.instrumentPluck}].map(ae=>s.jsx("button",{type:"button",className:`btn-instrument ${x===ae.id?"active":""}`,onClick:()=>y(ae.id),role:"radio","aria-checked":x===ae.id,children:ae.label},ae.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("span",{className:"control-label",children:b.musicalScale}),s.jsxs("div",{className:"scale-toggle-wrap",children:[s.jsx("button",{type:"button",className:`btn-scale-toggle ${p?"active":""}`,onClick:()=>f(!0),"aria-pressed":p,children:b.scaleOn}),s.jsx("button",{type:"button",className:`btn-scale-toggle ${p?"":"active"}`,onClick:()=>f(!1),"aria-pressed":!p,children:b.scaleOff})]})]})]}),ve&&s.jsxs("div",{className:"pitch-mapping-chip",role:"status",children:[s.jsx(ei,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{className:"mapping-label",children:b.pitchMappingLabel}),s.jsx("code",{className:"mapping-code",children:ve})]})]})]})]}),s.jsxs("section",{className:"card insights-panel-card","aria-labelledby":"pollution-explanation-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Ii,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"pollution-explanation-heading",className:"card-title",children:n==="ar"?"الشرح العلمي المبسط":"Plain-Language Guide & Trend Insights"}),s.jsxs("p",{className:"card-sub",children:[_.provider," • ",n==="ar"?_.proxyBadgeAr:_.proxyBadgeEn]})]})]}),G&&s.jsxs("button",{type:"button",className:`btn-speech btn-speak-summary ${pe?"speaking":""}`,onClick:va,"aria-pressed":pe,"aria-label":pe?b.stopSpeakingBtn:b.readSummaryBtn,children:[pe?s.jsx(Zn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(rn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:pe?b.stopSpeakingBtn:b.readSummaryBtn})]})]}),s.jsxs("div",{className:"explanation-pillars-grid",children:[s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:n==="ar"?"ما هو هذا المتغير؟":"What This Variable Is"}),s.jsx("p",{children:n==="ar"?_.whatItIsAr:_.whatItIsEn})]}),s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:n==="ar"?"لماذا يهمنا؟":"Why It Matters"}),s.jsx("p",{children:n==="ar"?_.whyItMattersAr:_.whyItMattersEn})]}),s.jsxs("div",{className:"explanation-pillar",children:[s.jsx("h3",{children:n==="ar"?"ماذا يوضح الاتجاه؟":"What the Trend Shows"}),s.jsx("p",{children:n==="ar"?_.whatTrendShowsAr:_.whatTrendShowsEn})]})]}),s.jsxs("div",{className:"limitation-footnote",children:[s.jsxs("strong",{children:[n==="ar"?"الحدود العلمية:":"Data Limitation:"," "]}),s.jsx("span",{children:n==="ar"?_.limitationAr:_.limitationEn})]})]}),s.jsxs("section",{className:"card export-feature-card export-game-card","aria-labelledby":"export-feature-heading",children:[s.jsx("div",{className:"card-header",children:s.jsxs("div",{className:"card-title-group",children:[s.jsx(jd,{className:"section-icon text-gold","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"export-feature-heading",className:"card-title",children:n==="ar"?"ميزة إضافية: تصدير الوسائط والبيانات (Export Suite)":"Added Feature: Media & Data Export"}),s.jsx("p",{className:"card-sub",children:n==="ar"?"تنزيل إطارات الأقمار الصناعية الحقيقية كحزمة صور PNG متسلسلة (ZIP)، أو فيديو WebM متحرك، أو ملفات JSON للتحليل الخارجي والبحث العلمي.":"Download composite satellite frames as a PNG image sequence (ZIP), WebM timelapse video, or structured JSON time-series for external analysis and research."})]})]})}),s.jsxs("div",{className:"export-actions-row",children:[s.jsxs("button",{type:"button",className:"btn-export btn-export-zip",onClick:zi,disabled:!!Y.active||R.length===0,children:[s.jsx(mr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Y.active==="zip"?`${n==="ar"?"جاري التجهيز":"Rendering"} (${((Wi=Y.progress)==null?void 0:Wi.current)||0}/${((ba=Y.progress)==null?void 0:ba.total)||R.length})...`:n==="ar"?`تنزيل تسلسل صور PNG (ZIP • ${R.length} إطار)`:`Export PNG Sequence (ZIP • ${R.length} frames)`})]}),s.jsxs("button",{type:"button",className:"btn-export btn-export-webm",onClick:_a,disabled:!!Y.active||R.length===0,children:[s.jsx(gr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Y.active==="webm"?`${n==="ar"?"جاري التسجيل":"Recording"} (${((Ma=Y.progress)==null?void 0:Ma.current)||0}/${((Ea=Y.progress)==null?void 0:Ea.total)||R.length})...`:n==="ar"?"تسجيل فيديو WebM (Canvas Capture)":"Export WebM Video (Canvas Capture)"})]}),s.jsxs("button",{type:"button",className:"btn-export btn-export-json",onClick:Sa,disabled:!!Y.active||R.length===0,children:[s.jsx(Ld,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:n==="ar"?"تنزيل التواريخ والقيم (JSON)":"Download Dates & Values (JSON)"})]})]}),Y.active&&Y.progress&&s.jsxs("div",{className:"export-progress-wrap",role:"status","aria-live":"polite",children:[s.jsx("div",{className:"export-progress-bar",children:s.jsx("div",{className:"export-progress-fill",style:{width:`${Math.round(Y.progress.current/Math.max(1,Y.progress.total)*100)}%`}})}),s.jsxs("span",{className:"export-progress-label",children:[Y.progress.date," (",Y.progress.current," / ",Y.progress.total,")"]})]}),Y.error&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ta,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Y.error})]}),Y.successMsg&&s.jsx("div",{className:"export-success-banner",role:"status",children:s.jsx("span",{children:Y.successMsg})})]})]})}function Zl(n){const e=Math.max(0,Math.min(1,n));return e<.25?"#06b6d4":e<.5?"#3b82f6":e<.75?"#eab308":"#ef4444"}function tx({lang:n="en",theme:e="dark",locationA:t,onSelectLocationA:i,locationB:a,onSelectLocationB:r,isCompareMode:o,onToggleCompareMode:l,currentYear:c,dataA:d,dataB:h,primaryVariable:m,onPlayFramePixelTone:u,onStartFrameScan:g,isScanning:x=!1,scanProgress:y=null}){var Fe,He,w,A;const p=Ct[n]||Ct.en,f=Lt[m]||Lt.T2M,M=C.useRef(null),b=C.useRef(null),E=C.useRef(null),T=C.useRef(null),_=C.useRef(null),v=C.useRef(null),N=C.useRef(null),O=C.useRef(null),[R,D]=C.useState("A"),[F,q]=C.useState(!1),[I,V]=C.useState(null),[Q,j]=C.useState(Wn[0].id),[oe,W]=C.useState(.85),[te,ie]=C.useState(!1),[Se,Ue]=C.useState(!1),[X,me]=C.useState(null),[ge,fe]=C.useState("07"),[J,Re]=C.useState("15"),Oe=`${c}-${ge}-${J}`,[Ee,Ce]=C.useState(!1),[ve,Ae]=C.useState(null),[Ge,$e]=C.useState(null),be=C.useMemo(()=>Wn.find(U=>U.id===Q)||Wn[0],[Q]);C.useEffect(()=>{let U=!1;return hd(be.id).then(re=>{U||me(re)}),()=>{U=!0}},[be.id]);const je=d==null?void 0:d.find(U=>U.year===c),tt=(je==null?void 0:je.value)??25,Te=(tt-10)/30,it=Zl(Te),st=h==null?void 0:h.find(U=>U.year===c),Je=(st==null?void 0:st.value)??25,k=(Je-10)/30,dt=Zl(k);C.useEffect(()=>{if(!M.current||b.current)return;const U=(t==null?void 0:t.lat)||30.5877,re=(t==null?void 0:t.lon)||31.502,K=jt.map(M.current,{center:[U,re],zoom:7,minZoom:2,maxZoom:14,scrollWheelZoom:!0,attributionControl:!0}),ue=jt.tileLayer(e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; CARTO &copy; OpenStreetMap",subdomains:"abcd",maxZoom:19}).addTo(K);E.current=ue,b.current=K;const pe=setTimeout(()=>{K.invalidateSize()},250);return()=>{clearTimeout(pe),K.remove(),b.current=null}},[]),C.useEffect(()=>{if(!M.current)return;const U=new ResizeObserver(()=>{b.current&&b.current.invalidateSize()});return U.observe(M.current),()=>U.disconnect()},[]),C.useEffect(()=>{if(!E.current)return;const U=e==="light"?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";E.current.setUrl(U)},[e]),C.useEffect(()=>{const U=b.current;if(!U)return;T.current&&(U.removeLayer(T.current),T.current=null);const re=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${be.id}/default/${Oe}/${be.tileMatrixSet}/{z}/{y}/{x}.${be.ext}`,K=jt.tileLayer(re,{attribution:"NASA EOSDIS GIBS",maxNativeZoom:be.maxNativeZoom,maxZoom:18,crossOrigin:"anonymous",opacity:oe,errorTileUrl:'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="rgba(15,23,42,0.6)"/><text x="50%" y="50%" fill="%2364748b" font-family="sans-serif" font-size="12" text-anchor="middle">No Satellite Data</text></svg>'});K.addTo(U),T.current=K;const ue=c+1<=new Date().getFullYear()-1?c+1:c,pe=`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${be.id}/default/${ue}-${ge}-${J}/${be.tileMatrixSet}/6/32/38.${be.ext}`,ee=new Image;return ee.src=pe,()=>{T.current&&U&&(U.removeLayer(T.current),T.current=null)}},[be,Oe,oe]),C.useEffect(()=>{const U=b.current;if(!U)return;const re=K=>{const{lat:ue,lng:pe}=K.latlng,ee={id:`custom_${ue.toFixed(3)}_${pe.toFixed(3)}`,nameEn:`Custom (${ue.toFixed(2)}°, ${pe.toFixed(2)}°)`,nameAr:`نقطة (${ue.toFixed(2)}°, ${pe.toFixed(2)}°)`,lat:parseFloat(ue.toFixed(4)),lon:parseFloat(pe.toFixed(4)),isCustom:!0};!o||R==="A"?(i(ee),o&&D("B")):(r(ee),D("A")),U.flyTo([ue,pe],U.getZoom(),{duration:.6}),setTimeout(()=>{R==="B"&&v.current?v.current.openPopup():_.current&&_.current.openPopup()},350)};return U.on("click",re),()=>{U.off("click",re)}},[o,R,i,r]),C.useEffect(()=>{const U=b.current;if(!U)return;const re=(K,ue)=>jt.divIcon({className:"custom-leaflet-marker",html:`
          <div class="marker-pin-wrap" style="--pin-color: ${K}">
            <div class="marker-pin">
              <span class="marker-badge">${ue}</span>
            </div>
          </div>
        `,iconSize:[36,42],iconAnchor:[18,42],popupAnchor:[0,-38]});if(t){const K=[t.lat,t.lon],ue=o?"A":"●";_.current?(_.current.setLatLng(K),_.current.setIcon(re("#38bdf8",ue))):_.current=jt.marker(K,{icon:re("#38bdf8",ue)}).addTo(U);const ee=`
        <div style="font-family: inherit; font-size: 13px; min-width: 170px;">
          <div style="font-weight: 800; font-size: 14px; color: #38bdf8; margin-bottom: 4px;">
            📍 ${n==="ar"&&t.nameAr||t.nameEn} ${o?"(Loc A)":""}
          </div>
          <div style="color: #94a3b8; font-size: 11px; font-family: monospace; margin-bottom: 6px;">
            ${t.lat.toFixed(4)}°, ${t.lon.toFixed(4)}°
          </div>
          <div style="padding: 4px 8px; background: rgba(56, 189, 248, 0.15); border-radius: 6px; font-weight: 700; color: #f8fafc;">
            ${p.year} ${c}: <span style="color: #38bdf8;">${f.format(tt)}</span>
          </div>
        </div>
      `;_.current.bindPopup(ee);const G=22e3+Te*45e3;N.current?(N.current.setLatLng(K),N.current.setRadius(G),N.current.setStyle({color:it,fillColor:it})):N.current=jt.circle(K,{radius:G,color:it,fillColor:it,fillOpacity:.35,weight:2}).addTo(U)}if(o&&a){const K=[a.lat,a.lon];v.current?(v.current.setLatLng(K),v.current.setIcon(re("#f97316","B"))):v.current=jt.marker(K,{icon:re("#f97316","B")}).addTo(U);const pe=`
        <div style="font-family: inherit; font-size: 13px; min-width: 170px;">
          <div style="font-weight: 800; font-size: 14px; color: #f97316; margin-bottom: 4px;">
            📍 ${n==="ar"&&a.nameAr||a.nameEn} (Loc B)
          </div>
          <div style="color: #94a3b8; font-size: 11px; font-family: monospace; margin-bottom: 6px;">
            ${a.lat.toFixed(4)}°, ${a.lon.toFixed(4)}°
          </div>
          <div style="padding: 4px 8px; background: rgba(249, 115, 22, 0.15); border-radius: 6px; font-weight: 700; color: #f8fafc;">
            ${p.year} ${c}: <span style="color: #f97316;">${f.format(Je)}</span>
          </div>
        </div>
      `;v.current.bindPopup(pe);const ee=22e3+k*45e3;O.current?(O.current.setLatLng(K),O.current.setRadius(ee),O.current.setStyle({color:dt,fillColor:dt})):O.current=jt.circle(K,{radius:ee,color:dt,fillColor:dt,fillOpacity:.35,weight:2}).addTo(U)}else v.current&&(U.removeLayer(v.current),v.current=null),O.current&&(U.removeLayer(O.current),O.current=null)},[t,a,o,Te,k,it,dt,c,tt,Je,f,n,p]);const qe=U=>{!o||R==="A"?(i(U),o&&D("B")):(r(U),D("A")),b.current&&(b.current.invalidateSize(),b.current.flyTo([U.lat,U.lon],8,{duration:.9})),setTimeout(()=>{R==="B"&&v.current?v.current.openPopup():_.current&&_.current.openPopup()},450)},Ye=()=>{if(!navigator.geolocation){V(p.gpsError);return}q(!0),V(null),navigator.geolocation.getCurrentPosition(U=>{q(!1);const{latitude:re,longitude:K}=U.coords,ue={id:"gps_device",nameEn:`GPS (${re.toFixed(2)}°, ${K.toFixed(2)}°)`,nameAr:`موقع GPS (${re.toFixed(2)}°, ${K.toFixed(2)}°)`,lat:parseFloat(re.toFixed(4)),lon:parseFloat(K.toFixed(4)),isGps:!0};!o||R==="A"?(i(ue),o&&D("B")):(r(ue),D("A")),b.current&&(b.current.invalidateSize(),b.current.flyTo([re,K],9,{duration:1.1})),setTimeout(()=>{_.current&&_.current.openPopup()},500)},U=>{q(!1),console.warn("Geolocation error:",U),V(p.gpsError)},{enableHighAccuracy:!0,timeout:9e3,maximumAge:6e4})},ye=async()=>{var U;if(t){Ce(!0);try{const re=Math.min(((U=b.current)==null?void 0:U.getZoom())||6,be.maxNativeZoom),K=pn(t.lat,t.lon,re),ue=sn(be.id,Oe,re,K.tileY,K.tileX),pe=await qn(ue,K.pixelX,K.pixelY,X,be);if(Ae(pe),(pe==null?void 0:pe.value)!==null&&!isNaN(pe.value)){const ee=(be.isTemperature,0),G=be.isTemperature?50:1;u==null||u(pe.value,ee,G,o?-.75:0)}if(o&&a){const ee=pn(a.lat,a.lon,re),G=sn(be.id,Oe,re,ee.tileY,ee.tileX),Y=await qn(G,ee.pixelX,ee.pixelY,X,be);if($e(Y),(Y==null?void 0:Y.value)!==null&&!isNaN(Y.value)){const P=(be.isTemperature,0),Z=be.isTemperature?50:1;u==null||u(Y.value,P,Z,.75)}}}catch(re){console.error("Error sampling frame pixel:",re)}finally{Ce(!1)}}},ht=()=>{const U=b.current;!U||x||g==null||g(async re=>{const K=U.getBounds(),ue=K.getWest(),pe=K.getEast(),ee=K.getSouth(),G=K.getNorth(),Y=Math.min(U.getZoom(),be.maxNativeZoom),P=[];for(let Z=0;Z<re;Z++){const H=ue+(pe-ue)*(Z/(re-1)),de=ee+(G-ee)*.5,se=pn(de,H,Y),xe=sn(be.id,Oe,Y,se.tileY,se.tileX);try{const we=await qn(xe,se.pixelX,se.pixelY,X,be);P.push((we==null?void 0:we.value)??0)}catch{P.push(0)}}return P})};return s.jsxs("section",{className:"card map-card","aria-labelledby":"map-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(xr,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"map-section-heading",className:"card-title",children:p.locationPresetLabel}),s.jsx("p",{className:"card-sub",children:p.clickMapToSelect})]})]}),s.jsx("div",{className:"compare-toggle-wrap",children:s.jsxs("label",{className:"toggle-label",htmlFor:"compare-mode-checkbox",children:[s.jsx("input",{id:"compare-mode-checkbox",type:"checkbox",className:"toggle-checkbox",checked:o,onChange:U=>l(U.target.checked)}),s.jsx("span",{className:"toggle-switch"}),s.jsx("span",{className:"toggle-text",children:p.compareModeLabel})]})})]}),s.jsxs("div",{className:"presets-bar",role:"group","aria-label":p.locationPresetLabel,children:[s.jsxs("button",{type:"button",className:`preset-pill btn-gps-locate ${F?"loading":""}`,onClick:Ye,"aria-label":p.gpsBtn,title:p.gpsBtn,children:[F?s.jsx(aa,{className:"preset-icon spin","aria-hidden":"true"}):s.jsx(ac,{className:"preset-icon icon-gps","aria-hidden":"true"}),s.jsx("span",{children:F?p.gpsLoading:p.gpsBtn})]}),da.map(U=>{const re=(t==null?void 0:t.id)===U.id,K=o&&(a==null?void 0:a.id)===U.id,ue=n==="ar"?U.nameAr:U.nameEn;return s.jsxs("button",{type:"button",className:`preset-pill ${re?"active-a":""} ${K?"active-b":""}`,onClick:()=>qe(U),"aria-pressed":re||K,title:`Open ${ue}`,children:[s.jsx(oc,{className:"preset-icon","aria-hidden":"true"}),s.jsx("span",{children:ue}),re&&s.jsx("span",{className:"pill-badge pill-a",children:o?"Loc A":"Open"}),K&&s.jsx("span",{className:"pill-badge pill-b",children:"Loc B"})]},U.id)})]}),I&&s.jsxs("div",{className:"gps-error-alert",role:"alert",children:[s.jsx(ta,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:I})]}),s.jsxs("div",{className:"gibs-controls-toolbar",children:[s.jsxs("div",{className:"gibs-toolbar-row",children:[s.jsxs("div",{className:"gibs-layer-picker",children:[s.jsxs("label",{htmlFor:"gibs-layer-select",className:"gibs-label",children:[s.jsx(hi,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{children:p.gibsLayerSelect})]}),s.jsx("select",{id:"gibs-layer-select",className:"control-select gibs-select",value:Q,onChange:U=>j(U.target.value),children:Wn.map(U=>s.jsx("option",{value:U.id,children:n==="ar"?U.nameAr:U.nameEn},U.id))})]}),s.jsxs("div",{className:"gibs-date-badge",children:[s.jsx(rs,{className:"icon-xs text-orange","aria-hidden":"true"}),s.jsxs("span",{className:"gibs-date-text",children:[p.gibsDate,": ",s.jsx("strong",{children:Oe})]})]}),be.legendUrl&&s.jsxs("button",{type:"button",className:`btn-legend-toggle ${Se?"active":""}`,onClick:()=>Ue(U=>!U),"aria-pressed":Se,children:[s.jsx(Ii,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:p.toggleLegend})]})]}),s.jsxs("div",{className:"gibs-sonify-actions-row",children:[s.jsxs("button",{type:"button",className:`btn-sonify-frame ${Ee?"loading":""}`,onClick:ye,disabled:Ee,"aria-label":p.sonifyPixelBtn,children:[s.jsx(Yn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:Ee?"Reading Pixel...":p.sonifyPixelBtn})]}),s.jsxs("button",{type:"button",className:`btn-scan-frame ${x?"scanning":""}`,onClick:ht,disabled:x,"aria-label":p.scanFrameBtn,children:[s.jsx(cc,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:x?p.scanning:p.scanFrameBtn})]}),s.jsxs("div",{className:"opacity-slider-wrap",children:[s.jsxs("span",{className:"opacity-label",children:[p.gibsOpacity,":"]}),s.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:oe,onChange:U=>W(parseFloat(U.target.value)),className:"gibs-opacity-slider","aria-label":p.gibsOpacity})]})]}),ve&&s.jsxs("div",{className:"sampled-pixel-callout",role:"status",children:[s.jsxs("div",{className:"callout-header",children:[s.jsxs("span",{className:"callout-title",children:[p.framePixelSampled," (",t==null?void 0:t.nameEn,"):"]}),s.jsx("span",{className:"callout-val",children:ve.label}),ve.r!==void 0&&s.jsxs("span",{className:"rgb-chip",style:{backgroundColor:`rgb(${ve.r}, ${ve.g}, ${ve.b})`},children:["RGB: ",ve.r,",",ve.g,",",ve.b]})]}),s.jsx("p",{className:"callout-notice",children:ve.isLuminance?p.luminanceNotice:p.colormapNotice})]}),Se&&be.legendUrl&&s.jsx("div",{className:"gibs-legend-drawer",children:s.jsx("div",{className:"legend-img-wrap",children:s.jsx("img",{src:be.legendUrl,alt:`${be.nameEn} Legend`,className:"gibs-legend-img"})})})]}),o&&s.jsxs("div",{className:"compare-picker-bar",role:"radiogroup","aria-label":"Select target location to set",children:[s.jsx("span",{className:"picker-prompt",children:n==="ar"?"تعديل الهدف بالنقر:":"Set target on click:"}),s.jsxs("button",{type:"button",className:`btn-target ${R==="A"?"selected":""}`,onClick:()=>D("A"),"aria-checked":R==="A",role:"radio",children:[s.jsx("span",{className:"color-dot dot-a"}),s.jsx("span",{children:p.locationA}),s.jsxs("span",{className:"target-coords",children:["(",(Fe=t==null?void 0:t.lat)==null?void 0:Fe.toFixed(2),"°, ",(He=t==null?void 0:t.lon)==null?void 0:He.toFixed(2),"°)"]})]}),s.jsxs("button",{type:"button",className:`btn-target ${R==="B"?"selected":""}`,onClick:()=>D("B"),"aria-checked":R==="B",role:"radio",children:[s.jsx("span",{className:"color-dot dot-b"}),s.jsx("span",{children:p.locationB}),s.jsxs("span",{className:"target-coords",children:["(",(w=a==null?void 0:a.lat)==null?void 0:w.toFixed(2),"°, ",(A=a==null?void 0:a.lon)==null?void 0:A.toFixed(2),"°)"]})]})]}),s.jsxs("div",{className:"map-wrapper-relative",children:[s.jsx("div",{ref:M,className:"map-container",tabIndex:"0","aria-label":"Interactive Leaflet map showing NASA GIBS satellite imagery frames and selected locations",role:"region"}),x&&y!==null&&s.jsxs("div",{className:"scan-laser-line",style:{left:`${y*100}%`},"aria-hidden":"true",children:[s.jsx("div",{className:"laser-beam"}),s.jsx("div",{className:"laser-glow"})]})]}),s.jsxs("div",{className:"map-footer",children:[s.jsxs("div",{className:"frame-overlay-indicator",children:[s.jsxs("span",{className:"overlay-badge",style:{backgroundColor:it},children:[t==null?void 0:t.nameEn,": ",c," ",f.format(tt)]}),o&&a&&s.jsxs("span",{className:"overlay-badge badge-b",style:{backgroundColor:dt},children:[a==null?void 0:a.nameEn,": ",f.format(Je)]})]}),s.jsxs("div",{className:"map-legend",children:[s.jsx("span",{className:"legend-gradient"}),s.jsx("span",{className:"legend-label-low",children:n==="ar"?"منخفض":"Low"}),s.jsx("span",{className:"legend-label-high",children:n==="ar"?"مرتفع":"High"})]})]})]})}co.register(uo,ho,fo,po,mo,go,xo,vo);function nx({lang:n="en",theme:e="dark",dataA:t=[],dataB:i=[],statsA:a=null,statsB:r=null,currentYear:o=1990,primaryVariable:l="T2M",locationA:c=null,locationB:d=null,isCompareMode:h=!1,showTable:m=!1,onToggleTable:u=()=>{}}){const g=Ct[n]||Ct.en,x=Lt[l]||Lt.T2M,y=C.useRef(null),p=C.useMemo(()=>t.map(v=>v.year),[t]),f=C.useMemo(()=>{if(!t||t.length===0)return{labels:[],datasets:[]};const v=p,N=t.map(F=>F.value),O=t.map(F=>{var q,I,V,Q;return F.year===o?8:(I=(q=a==null?void 0:a.recordsMap)==null?void 0:q[F.year])!=null&&I.isAllTimeMax||(Q=(V=a==null?void 0:a.recordsMap)==null?void 0:V[F.year])!=null&&Q.isAllTimeMin?6:3}),R=t.map(F=>{var q,I,V,Q;return F.year===o?"#ffffff":(I=(q=a==null?void 0:a.recordsMap)==null?void 0:q[F.year])!=null&&I.isAllTimeMax?"#ef4444":(Q=(V=a==null?void 0:a.recordsMap)==null?void 0:V[F.year])!=null&&Q.isAllTimeMin?"#3b82f6":"#38bdf8"}),D=[{label:`${n==="ar"&&(c==null?void 0:c.nameAr)||(c==null?void 0:c.nameEn)} (${x.unitEn})`,data:N,borderColor:"#38bdf8",backgroundColor:"rgba(56, 189, 248, 0.1)",borderWidth:2.5,pointBackgroundColor:R,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,pointRadius:O,pointHoverRadius:9,tension:.25,fill:!0}];if(a!=null&&a.trendline&&a.trendline.length>0&&D.push({label:`${g.trendline} (Loc A)`,data:a.trendline.map(F=>parseFloat(F.fitted.toFixed(2))),borderColor:"rgba(56, 189, 248, 0.65)",borderWidth:2,borderDash:[6,5],pointRadius:0,fill:!1}),h&&i&&i.length>0){const F=i.map(V=>V.value),q=i.map(V=>V.year===o?8:3),I=i.map(V=>V.year===o?"#ffffff":"#f97316");D.push({label:`${n==="ar"&&(d==null?void 0:d.nameAr)||(d==null?void 0:d.nameEn)} (${x.unitEn})`,data:F,borderColor:"#f97316",backgroundColor:"rgba(249, 115, 22, 0.08)",borderWidth:2.5,pointBackgroundColor:I,pointBorderColor:"#0b0f19",pointBorderWidth:1.5,pointRadius:q,pointHoverRadius:9,tension:.25,fill:!0}),r!=null&&r.trendline&&r.trendline.length>0&&D.push({label:`${g.trendline} (Loc B)`,data:r.trendline.map(V=>parseFloat(V.fitted.toFixed(2))),borderColor:"rgba(249, 115, 22, 0.65)",borderWidth:2,borderDash:[6,5],pointRadius:0,fill:!1})}return{labels:v,datasets:D}},[t,i,a,r,p,o,c,d,h,x,n,g]),M=C.useMemo(()=>({id:"verticalCursorPlugin",afterDatasetsDraw(v){if(!o)return;const N=v.ctx,O=v.scales.x,R=v.scales.y,D=p.indexOf(o);if(D===-1)return;const F=O.getPixelForTick(D);N.save(),N.beginPath(),N.moveTo(F,R.top),N.lineTo(F,R.bottom),N.lineWidth=2.5,N.strokeStyle="#ffffff",N.setLineDash([4,4]),N.shadowColor="rgba(255, 255, 255, 0.8)",N.shadowBlur=8,N.stroke(),N.fillStyle="#38bdf8",N.shadowBlur=0,N.beginPath(),N.arc(F,R.top,5,0,Math.PI*2),N.fill(),N.restore()}}),[o,p]),b=C.useMemo(()=>{const v=e==="light";return{responsive:!0,maintainAspectRatio:!1,animation:{duration:250},plugins:{legend:{position:"top",labels:{color:v?"#0f172a":"#e2e8f0",font:{family:n==="ar"?"Cairo, sans-serif":"Inter, sans-serif",size:13,weight:"600"},padding:16,usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:v?"#0f172a":"rgba(15, 23, 42, 0.95)",titleColor:"#38bdf8",bodyColor:"#f8fafc",borderColor:v?"#cbd5e1":"#334155",borderWidth:1,padding:12,displayColors:!0,callbacks:{title:N=>{var O;return`${g.year}: ${(O=N[0])==null?void 0:O.label}`},label:N=>`${N.dataset.label}: ${N.parsed.y} ${x.unitEn}`}}},scales:{x:{grid:{color:v?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.35)",borderColor:v?"rgba(148, 163, 184, 0.45)":"rgba(51, 65, 85, 0.6)"},ticks:{color:v?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:12},maxTicksLimit:14}},y:{grid:{color:v?"rgba(148, 163, 184, 0.22)":"rgba(51, 65, 85, 0.35)",borderColor:v?"rgba(148, 163, 184, 0.45)":"rgba(51, 65, 85, 0.6)"},ticks:{color:v?"#475569":"#94a3b8",font:{family:"JetBrains Mono, monospace",size:12},callback:N=>`${N} ${x.unitEn}`}}}}},[n,g,x,e]),E=p[0]||1990,T=p[p.length-1]||new Date().getFullYear()-1,_=(g.chartHeading||"Historical Trend ({range})").replace("{range}",`${E} – ${T}`);return s.jsxs("section",{className:"card chart-card","aria-labelledby":"chart-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(pc,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"chart-section-heading",className:"card-title",children:_}),s.jsxs("p",{className:"card-sub",children:[g.dataSubheading," • ",n==="ar"?x.nameAr:x.nameEn]})]})]}),s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${m?"":"active"}`,onClick:()=>u(!1),"aria-pressed":!m,children:[s.jsx(yo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:g.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${m?"active":""}`,onClick:()=>u(!0),"aria-pressed":m,children:[s.jsx(os,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:g.dataTableView})]})]})]}),s.jsx("div",{className:"chart-canvas-wrapper",role:"img","aria-label":g.chartAriaLabel,children:s.jsx(_o,{ref:y,data:f,options:b,plugins:[M]})}),s.jsxs("div",{className:"chart-highlights",children:[s.jsxs("div",{className:"highlight-pill highlight-current",children:[s.jsx("span",{className:"dot dot-white"}),s.jsx("span",{className:"label",children:g.currentYearLabel.replace("{year}",o)})]}),(a==null?void 0:a.recordHigh)&&s.jsxs("div",{className:"highlight-pill highlight-high",children:[s.jsx("span",{className:"dot dot-red"}),s.jsxs("span",{className:"label",children:[g.recordHigh,": ",a.recordHigh.value," ",x.unitEn," (",a.recordHigh.year,")"]})]}),(a==null?void 0:a.recordLow)&&s.jsxs("div",{className:"highlight-pill highlight-low",children:[s.jsx("span",{className:"dot dot-blue"}),s.jsxs("span",{className:"label",children:[g.recordLow,": ",a.recordLow.value," ",x.unitEn," (",a.recordLow.year,")"]})]})]})]})}function ix({lang:n="en",currentYear:e=1990,years:t=[],isPlaying:i=!1,onTogglePlay:a=()=>{},onStepBackward:r=()=>{},onStepForward:o=()=>{},onSelectYear:l=()=>{},playbackSpeed:c=1,onChangeSpeed:d=()=>{},isLooping:h=!0,onToggleLoop:m=()=>{}}){const u=Ct[n]||Ct.en,g=t[0]||1990,x=t[t.length-1]||2023,y=[.5,1,1.5,2];return s.jsxs("section",{className:"card timeline-controls-card","aria-labelledby":"timeline-controls-heading",children:[s.jsxs("div",{className:"timeline-header",children:[s.jsxs("div",{className:"timeline-title-wrap",children:[s.jsx(ec,{className:"section-icon","aria-hidden":"true"}),s.jsx("h2",{id:"timeline-controls-heading",className:"card-title",children:u.timelineHeading})]}),s.jsxs("div",{className:"current-year-badge","aria-live":"polite",children:[s.jsx("span",{className:"year-eyebrow",children:u.year}),s.jsx("span",{className:"year-number",children:e})]})]}),s.jsxs("div",{className:"scrub-container",children:[s.jsx("label",{htmlFor:"timeline-year-slider",className:"sr-only",children:u.yearSliderAria}),s.jsxs("div",{className:"slider-track-wrap",children:[s.jsx("input",{id:"timeline-year-slider",type:"range",min:g,max:x,step:1,value:e,onChange:p=>l(parseInt(p.target.value,10)),className:"timeline-slider","aria-valuemin":g,"aria-valuemax":x,"aria-valuenow":e,"aria-valuetext":`${u.year} ${e}`}),s.jsxs("div",{className:"slider-ticks","aria-hidden":"true",children:[s.jsx("span",{children:g}),s.jsx("span",{children:Math.round((g+x)/2)}),s.jsx("span",{children:x})]})]})]}),s.jsxs("div",{className:"controls-button-bar",children:[s.jsxs("button",{type:"button",className:"btn-control btn-step",onClick:r,"aria-label":u.stepBack,title:`${u.stepBack} (←)`,children:[s.jsx(dc,{className:"icon","aria-hidden":"true"}),s.jsx("span",{className:"btn-key-hint",children:"←"})]}),s.jsxs("button",{type:"button",className:`btn-control btn-play ${i?"is-playing":""}`,onClick:a,"aria-label":i?u.pause:u.play,title:`${i?u.pause:u.play} (Space)`,children:[i?s.jsx(Ms,{className:"icon-lg","aria-hidden":"true"}):s.jsx(Cn,{className:"icon-lg icon-play","aria-hidden":"true"}),s.jsx("span",{className:"play-label",children:i?u.pause:u.play}),s.jsx("span",{className:"btn-key-hint",children:"Space"})]}),s.jsxs("button",{type:"button",className:"btn-control btn-step",onClick:o,"aria-label":u.stepForward,title:`${u.stepForward} (→)`,children:[s.jsx(uc,{className:"icon","aria-hidden":"true"}),s.jsx("span",{className:"btn-key-hint",children:"→"})]}),s.jsxs("div",{className:"speed-group",role:"group","aria-label":u.speed,children:[s.jsxs("span",{className:"speed-label",children:[s.jsx(sc,{className:"icon-xs","aria-hidden":"true"}),s.jsxs("span",{children:[u.speed,":"]})]}),s.jsx("div",{className:"speed-buttons",children:y.map(p=>s.jsxs("button",{type:"button",className:`btn-speed ${c===p?"active":""}`,onClick:()=>d(p),"aria-pressed":c===p,children:[p,"x"]},p))})]}),s.jsxs("button",{type:"button",className:`btn-control btn-loop ${h?"active":""}`,onClick:m,"aria-pressed":h,"aria-label":u.loop,title:u.loop,children:[s.jsx(Eo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{className:"loop-label",children:u.loop})]})]})]})}function ax({lang:n="en",volume:e=.7,onChangeVolume:t=()=>{},isMuted:i=!1,onToggleMute:a=()=>{},instrument:r="sine",onChangeInstrument:o=()=>{},quantizeScale:l=!0,onToggleQuantizeScale:c=()=>{},primaryVariable:d="T2M",onChangePrimaryVariable:h=()=>{},secondaryVariable:m="NONE",onChangeSecondaryVariable:u=()=>{},isCompareMode:g=!1,pitchMappingText:x=""}){const y=Ct[n]||Ct.en,p=[{id:"sine",label:y.instrumentSine,desc:"Pure harmonic tone"},{id:"triangle",label:y.instrumentTriangle,desc:"Warm ambient flute"},{id:"soft_pluck",label:y.instrumentPluck,desc:"Acoustic harp pluck"}];return s.jsxs("section",{className:"card audio-controls-card","aria-labelledby":"audio-controls-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(Yn,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"audio-controls-heading",className:"card-title",children:y.audioHeading}),s.jsx("p",{className:"card-sub",children:y.recordCueTip})]})]}),g&&s.jsxs("div",{className:"stereo-badge",role:"status",children:[s.jsx(bs,{className:"icon-sm","aria-hidden":"true"}),s.jsxs("span",{children:[y.spatialStereo," (L ⟷ R)"]})]})]}),s.jsxs("div",{className:"audio-controls-grid",children:[s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{htmlFor:"primary-variable-select",className:"control-label",children:[s.jsx(Vd,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.variableLabel})]}),s.jsx("select",{id:"primary-variable-select",className:"control-select",value:d,onChange:f=>h(f.target.value),"aria-label":y.selectVariableAria,children:Object.values(Lt).map(f=>s.jsxs("option",{value:f.id,children:[n==="ar"?f.nameAr:f.nameEn," (",f.unitEn,")"]},f.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("div",{className:"control-label-row",children:[s.jsxs("label",{htmlFor:"audio-volume-slider",className:"control-label",children:[s.jsx(hc,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.volume})]}),s.jsx("span",{className:"control-value-text",children:i?"0%":`${Math.round(e*100)}%`})]}),s.jsxs("div",{className:"volume-slider-row",children:[s.jsx("button",{type:"button",className:`btn-mute-sm ${i?"muted":""}`,onClick:a,"aria-label":i?y.unmute:y.mute,children:i?s.jsx(Zn,{className:"icon-sm","aria-hidden":"true"}):s.jsx(rn,{className:"icon-sm","aria-hidden":"true"})}),s.jsx("input",{id:"audio-volume-slider",type:"range",min:"0",max:"1",step:"0.05",value:i?0:e,onChange:f=>t(parseFloat(f.target.value)),className:"volume-slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":i?0:Math.round(e*100)})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{className:"control-label",id:"instrument-label",children:[s.jsx(Yn,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.instrument})]}),s.jsx("div",{className:"instrument-button-group",role:"radiogroup","aria-labelledby":"instrument-label",children:p.map(f=>s.jsx("button",{type:"button",className:`btn-instrument ${r===f.id?"active":""}`,onClick:()=>o(f.id),role:"radio","aria-checked":r===f.id,children:s.jsx("span",{children:f.label})},f.id))})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{className:"control-label",children:s.jsx("span",{children:y.musicalScale})}),s.jsxs("div",{className:"scale-toggle-wrap",children:[s.jsx("button",{type:"button",className:`btn-scale-toggle ${l?"active":""}`,onClick:()=>c(!0),"aria-pressed":l,children:s.jsx("span",{children:y.scaleOn})}),s.jsx("button",{type:"button",className:`btn-scale-toggle ${l?"":"active"}`,onClick:()=>c(!1),"aria-pressed":!l,children:s.jsx("span",{children:y.scaleOff})})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsxs("label",{htmlFor:"secondary-layer-select",className:"control-label",children:[s.jsx(hi,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:y.secondaryLayerLabel})]}),s.jsxs("select",{id:"secondary-layer-select",className:"control-select",value:m||"NONE",onChange:f=>u(f.target.value),children:[s.jsx("option",{value:"NONE",children:y.secondaryNone}),Object.values(Lt).filter(f=>f.id!==d).map(f=>s.jsxs("option",{value:f.id,children:[n==="ar"?f.nameAr:f.nameEn," (",f.unitEn,")"]},f.id))]})]})]}),x&&s.jsxs("div",{className:"pitch-mapping-chip",role:"status","aria-label":y.pitchMappingLabel,children:[s.jsx(_s,{className:"icon-xs text-cyan","aria-hidden":"true"}),s.jsx("span",{className:"mapping-label",children:y.pitchMappingLabel}),s.jsx("code",{className:"mapping-code",children:x})]})]})}function sx({lang:n="en",statsA:e=null,statsB:t=null,locationA:i=null,locationB:a=null,primaryVariable:r="T2M",isCompareMode:o=!1,isSpeaking:l=!1,speechSupported:c=!1,onSpeakSummary:d=()=>{},onStopSpeaking:h=()=>{},summaryText:m=""}){const u=Ct[n]||Ct.en,g=Lt[r]||Lt.T2M;return n==="ar"&&(i!=null&&i.nameAr)||(i==null||i.nameEn),o&&(n==="ar"&&(a!=null&&a.nameAr)||(a==null||a.nameEn)),s.jsxs("section",{className:"card insights-card","aria-labelledby":"insights-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(ei,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"insights-heading",className:"card-title",children:u.insightsHeading}),s.jsx("p",{className:"card-sub",children:u.historicalRange})]})]}),c&&s.jsx("div",{className:"speech-action-group",children:l?s.jsxs("button",{type:"button",className:"btn-speech speaking",onClick:h,"aria-label":u.stopSpeakingBtn,children:[s.jsx(qd,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.speakingState})]}):s.jsxs("button",{type:"button",className:"btn-speech",onClick:d,"aria-label":u.readSummaryBtn,children:[s.jsx(rn,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.readSummaryBtn})]})})]}),m&&s.jsx("div",{className:"summary-quote-box",role:"region","aria-label":"Climate text summary",children:s.jsxs("p",{className:"summary-quote-text",children:['"',m,'"']})}),s.jsxs("div",{className:"stats-metric-grid",children:[s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:u.changePerDecade}),s.jsxs("div",{className:"metric-value-row",children:[e&&e.changePerDecade>=0?s.jsx(pc,{className:"metric-trend-icon trend-up","aria-hidden":"true"}):s.jsx(Yd,{className:"metric-trend-icon trend-down","aria-hidden":"true"}),s.jsx("span",{className:"metric-value",children:e?`${e.changePerDecade>0?"+":""}${e.changePerDecade.toFixed(2)}`:"—"}),s.jsxs("span",{className:"metric-unit",children:[g.unitEn,"/dec"]})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.changePerDecade>0?"+":"",t.changePerDecade.toFixed(2)," ",g.unitEn,"/dec"]})]})]}),s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:u.totalTrendChange}),s.jsxs("div",{className:"metric-value-row",children:[s.jsx("span",{className:"metric-value",children:e?`${e.totalChange>0?"+":""}${e.totalChange.toFixed(2)}`:"—"}),s.jsx("span",{className:"metric-unit",children:g.unitEn})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.totalChange>0?"+":"",t.totalChange.toFixed(2)," ",g.unitEn]})]})]}),s.jsxs("div",{className:"metric-box",children:[s.jsx("span",{className:"metric-label",children:u.percentChange}),s.jsx("div",{className:"metric-value-row",children:s.jsx("span",{className:"metric-value",children:e?`${e.percentChange>0?"+":""}${e.percentChange.toFixed(1)}%`:"—"})}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:[t.percentChange>0?"+":"",t.percentChange.toFixed(1),"%"]})]})]}),s.jsxs("div",{className:"metric-box significance-box",children:[s.jsx("span",{className:"metric-label",children:u.significanceTest}),s.jsx("div",{className:"significance-badge-wrap",children:e!=null&&e.isSignificant?s.jsxs("span",{className:"badge-significant",children:[s.jsx(Rd,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:u.significant})]}):s.jsxs("span",{className:"badge-not-significant",children:[s.jsx(Es,{className:"icon-xs","aria-hidden":"true"}),s.jsx("span",{children:u.notSignificant})]})}),s.jsxs("div",{className:"p-value-line",children:[s.jsx("span",{children:u.pValueLabel.replace("{p}",e?e.pValue<.001?"< 0.001":e.pValue.toFixed(4):"—")}),s.jsxs("span",{className:"r-squared-note",children:["R² = ",e?e.rSquared.toFixed(3):"—"]})]}),o&&t&&s.jsxs("div",{className:"metric-sub-compare",children:[s.jsx("span",{className:"compare-loc-tag",children:"Loc B:"}),s.jsxs("span",{className:"compare-val",children:["p = ",t.pValue<.001?"< 0.001":t.pValue.toFixed(4)," (",t.isSignificant?"Significant":"Not Sig.",")"]})]})]})]})]})}function rx({lang:n="en",dataA:e=[],dataB:t=[],statsA:i=null,statsB:a=null,primaryVariable:r="T2M",locationA:o=null,locationB:l=null,isCompareMode:c=!1,currentYear:d=1990,showTable:h=!0,onToggleTable:m=()=>{}}){var f,M;const u=Ct[n]||Ct.en,g=Lt[r]||Lt.T2M,x=((f=e[0])==null?void 0:f.value)||0,y=((M=t[0])==null?void 0:M.value)||0,p=()=>{let b="data:text/csv;charset=utf-8,";c?(b+=`Year,${(o==null?void 0:o.nameEn)||"Loc A"} (${g.unitEn}),${(o==null?void 0:o.nameEn)||"Loc A"} Anomaly,${(l==null?void 0:l.nameEn)||"Loc B"} (${g.unitEn}),${(l==null?void 0:l.nameEn)||"Loc B"} Anomaly,Records
`,e.forEach(_=>{var q;const v=t.find(I=>I.year===_.year),N=(_.value-x).toFixed(2),O=v?v.value:"",R=v?(v.value-y).toFixed(2):"",D=(q=i==null?void 0:i.recordsMap)==null?void 0:q[_.year],F=D!=null&&D.isAllTimeMax?"Record High":D!=null&&D.isAllTimeMin?"Record Low":"";b+=`${_.year},${_.value},${N},${O},${R},${F}
`})):(b+=`Year,${(o==null?void 0:o.nameEn)||"Location"} (${g.unitEn}),Anomaly (Diff from 1990),Records
`,e.forEach(_=>{var R;const v=(_.value-x).toFixed(2),N=(R=i==null?void 0:i.recordsMap)==null?void 0:R[_.year],O=N!=null&&N.isAllTimeMax?"Record High":N!=null&&N.isAllTimeMin?"Record Low":"";b+=`${_.year},${_.value},${v},${O}
`}));const E=encodeURI(b),T=document.createElement("a");T.setAttribute("href",E),T.setAttribute("download",`earth_jukebox_${r}_${(o==null?void 0:o.id)||"data"}.csv`),document.body.appendChild(T),T.click(),document.body.removeChild(T)};return s.jsxs("section",{className:"card table-card","aria-labelledby":"table-section-heading",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-title-group",children:[s.jsx(os,{className:"section-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h2",{id:"table-section-heading",className:"card-title",children:u.dataTableView}),s.jsx("p",{className:"card-sub",children:u.tableCaption})]})]}),s.jsxs("div",{className:"table-header-actions",children:[s.jsxs("div",{className:"view-toggle-wrap",children:[s.jsxs("button",{type:"button",className:`btn-toggle-view ${h?"":"active"}`,onClick:()=>m(!1),"aria-pressed":!h,title:u.chartView,children:[s.jsx(yo,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.chartView})]}),s.jsxs("button",{type:"button",className:`btn-toggle-view ${h?"active":""}`,onClick:()=>m(!0),"aria-pressed":h,title:u.dataTableView,children:[s.jsx(os,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.dataTableView})]})]}),s.jsxs("button",{type:"button",className:"btn-download-csv",onClick:p,"aria-label":u.downloadCsv,children:[s.jsx(mr,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.downloadCsv})]})]})]}),s.jsx("div",{className:"return-chart-banner",children:s.jsxs("button",{type:"button",className:"btn-return-chart",onClick:()=>m(!1),"aria-label":u.returnToChart,children:[n==="ar"?s.jsx(So,{className:"icon-sm","aria-hidden":"true"}):s.jsx(Nd,{className:"icon-sm","aria-hidden":"true"}),s.jsx("span",{children:u.returnToChart})]})}),s.jsx("div",{className:"table-responsive-container",children:s.jsxs("table",{className:"accessible-data-table","aria-label":u.tableCaption,children:[s.jsx("caption",{className:"sr-only",children:u.tableCaption}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:u.colYear}),s.jsxs("th",{scope:"col",children:[n==="ar"&&(o==null?void 0:o.nameAr)||(o==null?void 0:o.nameEn)," (",g.unitEn,")"]}),s.jsx("th",{scope:"col",children:u.colAnomaly}),c&&s.jsxs(s.Fragment,{children:[s.jsxs("th",{scope:"col",children:[n==="ar"&&(l==null?void 0:l.nameAr)||(l==null?void 0:l.nameEn)," (",g.unitEn,")"]}),s.jsxs("th",{scope:"col",children:[u.colAnomaly," (B)"]})]}),s.jsx("th",{scope:"col",children:u.colRecords})]})}),s.jsx("tbody",{children:e.map(b=>{var O;const E=b.year===d,T=b.value-x,_=c?t.find(R=>R.year===b.year):null,v=_?_.value-y:0,N=(O=i==null?void 0:i.recordsMap)==null?void 0:O[b.year];return s.jsxs("tr",{className:E?"row-active-year":"",children:[s.jsxs("th",{scope:"row",className:"cell-year",children:[b.year,E&&s.jsx("span",{className:"active-cursor-tag",children:"●"})]}),s.jsxs("td",{className:"cell-value",children:[b.value," ",g.unitEn]}),s.jsx("td",{className:`cell-anomaly ${T>=0?"pos":"neg"}`,children:T>0?`+${T.toFixed(2)}`:T.toFixed(2)}),c&&s.jsxs(s.Fragment,{children:[s.jsx("td",{className:"cell-value",children:_?`${_.value} ${g.unitEn}`:"—"}),s.jsx("td",{className:`cell-anomaly ${v>=0?"pos":"neg"}`,children:_?v>0?`+${v.toFixed(2)}`:v.toFixed(2):"—"})]}),s.jsxs("td",{className:"cell-records",children:[(N==null?void 0:N.isAllTimeMax)&&s.jsx("span",{className:"record-badge record-high",children:u.recordHigh}),(N==null?void 0:N.isAllTimeMin)&&s.jsx("span",{className:"record-badge record-low",children:u.recordLow}),(N==null?void 0:N.isRecordHigh)&&!(N!=null&&N.isAllTimeMax)&&s.jsx("span",{className:"record-badge record-running-high",children:u.runningRecordHigh})]})]},b.year)})})]})})]})}function fr(n){const e=[57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.00015808870322437947,-.00021026441082956272,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];let t=.9999999999999971;for(let a=0;a<e.length;a++)t+=e[a]/(n+a+1);const i=n+5.2421875;return .5*Math.log(2*Math.PI)+(n+.5)*Math.log(i)-i+Math.log(t)}function md(n,e,t){if(n<=0)return 0;if(n>=1)return 1;if(n>(e+1)/(e+t+2))return 1-md(1-n,t,e);const i=Math.exp(e*Math.log(n)+t*Math.log(1-n)-fr(e)-fr(t)+fr(e+t))/e,a=200,r=1e-12;let o=1,l=1-(e+t)*n/(e+1);Math.abs(l)<1e-30&&(l=1e-30),l=1/l;let c=l;for(let d=1;d<=a;d++){let h=d*(t-d)*n/((e+2*d-1)*(e+2*d));l=1+h*l,Math.abs(l)<1e-30&&(l=1e-30),o=1+h/o,Math.abs(o)<1e-30&&(o=1e-30),l=1/l,c*=o*l,h=-((e+d)*(e+t+d)*n)/((e+2*d)*(e+2*d+1)),l=1+h*l,Math.abs(l)<1e-30&&(l=1e-30),o=1+h/o,Math.abs(o)<1e-30&&(o=1e-30),l=1/l;const m=o*l;if(c*=m,Math.abs(m-1)<r)break}return i*c}function ox(n,e){if(e<=0||!isFinite(n)||isNaN(n))return 1;const t=Math.abs(n);if(t===0)return 1;const i=e/(e+t*t),a=md(i,e/2,.5);return Math.min(1,Math.max(0,a))}function ua(n){if(!n||n.length<2)return{n:(n==null?void 0:n.length)||0,slope:0,intercept:0,changePerDecade:0,percentChange:0,totalChange:0,rSquared:0,tStat:0,pValue:1,isSignificant:!1,mean:0,min:0,max:0,recordHigh:null,recordLow:null,trendline:[],recordsMap:{}};const e=n.filter(W=>W.value!==null&&!isNaN(W.value)),t=e.length;if(t<2)return ua([]);let i=0,a=0,r=1/0,o=-1/0,l=null,c=null;for(let W=0;W<t;W++){const{year:te,value:ie}=e[W];i+=te,a+=ie,ie>o&&(o=ie,l={year:te,value:ie}),ie<r&&(r=ie,c={year:te,value:ie})}const d=i/t,h=a/t;let m=0,u=0,g=0;for(let W=0;W<t;W++){const{year:te,value:ie}=e[W],Se=te-d,Ue=ie-h;m+=Se*Se,u+=Se*Ue,g+=Ue*Ue}const x=m!==0?u/m:0,y=h-x*d,p=x*10;let f=0;const M=e.map(W=>{const te=x*W.year+y,ie=W.value-te;return f+=ie*ie,{year:W.year,fitted:te}}),b=g!==0?Math.max(0,Math.min(1,1-f/g)):0,E=t-2;let T=0,_=0,v=1;if(E>0&&m>0){const W=f/E;T=Math.sqrt(W/m),T>0?(_=x/T,v=ox(_,E)):Math.abs(x)>1e-9?(_=1/0,v=0):(_=0,v=1)}const N=v<.05,O=e[0].year,R=e[t-1].year,D=x*O+y,q=x*R+y-D;let I=0;const V=Math.abs(D)>.01?Math.abs(D):Math.abs(h);V>1e-4&&(I=q/V*100);let Q=-1/0,j=1/0;const oe={};for(let W=0;W<t;W++){const{year:te,value:ie}=e[W];let Se=!1,Ue=!1;ie>Q&&(Q=ie,W>0&&(Se=!0)),ie<j&&(j=ie,W>0&&(Ue=!0)),oe[te]={isRecordHigh:Se,isRecordLow:Ue,isAllTimeMax:ie===o,isAllTimeMin:ie===r}}return{n:t,slope:x,intercept:y,changePerDecade:p,percentChange:I,totalChange:q,rSquared:b,tStat:_,pValue:v,isSignificant:N,mean:h,min:r,max:o,recordHigh:l,recordLow:c,trendline:M,recordsMap:oe}}function lx({primaryVariable:n="T2M",secondaryVariable:e=null,locationA:t=da[0],locationB:i=da[1],isCompareMode:a=!1}){const[r,o]=C.useState([]),[l,c]=C.useState([]),[d,h]=C.useState([]),[m,u]=C.useState(!0),[g,x]=C.useState(null),y=C.useRef(null),p=C.useCallback(async()=>{y.current&&y.current.abort();const E=new AbortController;y.current=E,u(!0),x(null);try{const T=await ur(t.lat,t.lon,n,ea,Ci,E.signal);if(E.signal.aborted)return;if(o(T.points||[]),a&&i){const _=await ur(i.lat,i.lon,n,ea,Ci,E.signal);if(E.signal.aborted)return;c(_.points||[])}else c([]);if(e&&e!=="NONE"){const _=await ur(t.lat,t.lon,e,ea,Ci,E.signal);if(E.signal.aborted)return;h(_.points||[])}else h([]);x(null)}catch(T){if(T.name==="AbortError")return;console.error("Error fetching NASA POWER data:",T),x(T.message||"Failed to load climate data from NASA POWER")}finally{E.signal.aborted||u(!1)}},[t.lat,t.lon,a?i==null?void 0:i.lat:null,a?i==null?void 0:i.lon:null,n,e,a]);C.useEffect(()=>(p(),()=>{y.current&&y.current.abort()}),[p]);const f=C.useMemo(()=>ua(r),[r]),M=C.useMemo(()=>!a||l.length===0?null:ua(l),[a,l]),b=C.useMemo(()=>{if(r.length>0)return r.map(T=>T.year);const E=[];for(let T=ea;T<=Ci;T++)E.push(T);return E},[r]);return{loading:m,error:g,dataA:r,dataB:l,secondaryDataA:d,statsA:f,statsB:M,years:b,refetch:p}}function cx({dataA:n=[],dataB:e=[],secondaryDataA:t=[],statsA:i=null,statsB:a=null,primaryVariable:r="T2M",secondaryVariable:o=null,isCompareMode:l=!1,onYearChange:c=()=>{}}){const[d,h]=C.useState(!1),[m,u]=C.useState(1990),[g,x]=C.useState(1),[y,p]=C.useState(.7),[f,M]=C.useState(!1),[b,E]=C.useState("sine"),[T,_]=C.useState(!0),[v,N]=C.useState(!0),[O,R]=C.useState(!1),[D,F]=C.useState(!1),[q,I]=C.useState(null),V=C.useRef(null),Q=C.useRef(null),j=C.useRef(m);j.current=m;const oe=C.useCallback(async()=>{const ve=await vs();return R(ve),ve},[]),{dynamicMin:W,dynamicMax:te,rawMin:ie,rawMax:Se}=C.useMemo(()=>{let ve=n.filter(je=>je.value!==null&&!isNaN(je.value)).map(je=>je.value);if(l&&e&&e.length>0){const je=e.filter(tt=>tt.value!==null&&!isNaN(tt.value)).map(tt=>tt.value);ve=ve.concat(je)}if(ve.length===0)return{dynamicMin:15,dynamicMax:35,rawMin:15,rawMax:35};const Ae=Math.min(...ve),Ge=Math.max(...ve),$e=Ge-Ae,be=$e===0?1:$e*.07;return{dynamicMin:parseFloat((Ae-be).toFixed(2)),dynamicMax:parseFloat((Ge+be).toFixed(2)),rawMin:Ae,rawMax:Ge}},[n,e,l,r]),Ue=C.useMemo(()=>{const Ae=(Lt[r]||Lt.T2M).unitEn;return`${ie.toFixed(1)}${Ae} ➔ C3 (~131 Hz) | ${Se.toFixed(1)}${Ae} ➔ C6 (~1047 Hz)`},[ie,Se,r]),X=C.useCallback(ve=>{var $e,be;if(f||y===0)return;const Ae=y,Ge=n.find(je=>je.year===ve);if(Ge&&Ge.value!==null&&!isNaN(Ge.value)){const je=Gn(Ge.value,W,te,T),tt=($e=i==null?void 0:i.recordsMap)==null?void 0:$e[ve];let Te=1;if(o&&o!=="NONE"&&t.length>0){const it=t.find(st=>st.year===ve);if(it&&it.value!==null&&!isNaN(it.value)){const st=t.map(qe=>qe.value),Je=Math.min(...st),k=Math.max(...st),dt=(it.value-Je)/(k-Je||1);Te=.5+Math.max(0,Math.min(1,dt))}}zn({frequency:je,duration:.5/g,volume:Ae,instrument:b,pan:l?-.75:0,isRecordHigh:!!(tt!=null&&tt.isRecordHigh),isRecordLow:!!(tt!=null&&tt.isRecordLow),secondaryVolume:Te})}if(l&&e&&e.length>0){const je=e.find(tt=>tt.year===ve);if(je&&je.value!==null&&!isNaN(je.value)){const tt=Gn(je.value,W,te,T),Te=(be=a==null?void 0:a.recordsMap)==null?void 0:be[ve];zn({frequency:tt,duration:.5/g,volume:Ae,instrument:b,pan:.75,isRecordHigh:!!(Te!=null&&Te.isRecordHigh),isRecordLow:!!(Te!=null&&Te.isRecordLow),secondaryVolume:1})}}},[n,e,t,i,a,W,te,o,l,f,y,b,T,g]),me=C.useCallback((ve,Ae=0,Ge=100,$e=0)=>{if(f||y===0||ve===null||isNaN(ve))return;const be=Gn(ve,Ae,Ge,T);zn({frequency:be,duration:.35,volume:y*.9,instrument:b,pan:$e,isRecordHigh:!1,isRecordLow:!1})},[f,y,T,b]),ge=C.useCallback((ve,Ae=!0)=>{u(ve),c(ve,!0),Ae&&oe().then(()=>{X(ve)})},[c,X,oe]),fe=C.useCallback(()=>{if(n.length===0)return;const ve=n[0].year,Ae=n[n.length-1].year,Ge=j.current<=ve?Ae:j.current-1;ge(Ge,!0)},[n,ge]),J=C.useCallback(()=>{if(n.length===0)return;const ve=n[0].year,Ae=n[n.length-1].year,Ge=j.current>=Ae?ve:j.current+1;ge(Ge,!0)},[n,ge]),Re=C.useCallback(async()=>{d?(h(!1),c(j.current,!1,!0)):(await oe(),h(!0))},[d,oe,c]),Oe=C.useCallback(()=>{M(ve=>!ve)},[]),Ee=C.useCallback(ve=>{x(Math.max(.5,Math.min(3,ve)))},[]);C.useEffect(()=>{if(!d||n.length===0){V.current&&(clearInterval(V.current),V.current=null);return}const ve=n[0].year,Ae=n[n.length-1].year,Ge=Math.round(1e3/g);return X(j.current),V.current=setInterval(()=>{let $e=j.current+1;if($e>Ae)if(v)$e=ve;else{h(!1),clearInterval(V.current);return}u($e),c($e,!1),X($e)},Ge),()=>{V.current&&clearInterval(V.current)}},[d,n,g,v,X,c]),C.useEffect(()=>{if(n.length>0){const ve=n[0].year,Ae=n[n.length-1].year;(m<ve||m>Ae)&&u(ve)}},[n]);const Ce=C.useCallback(async ve=>{if(D)return;await oe(),F(!0),I(0);const Ae=40,Ge=60;let $e=0;const be=await ve(Ae),je=be.filter(it=>it!==null&&!isNaN(it)),tt=je.length>0?Math.min(...je):0,Te=je.length>0?Math.max(...je):100;Q.current=setInterval(()=>{if($e>=Ae){clearInterval(Q.current),Q.current=null,F(!1),I(null);return}const it=$e/Ae;I(it);const st=be[$e];if(st!==null&&!isNaN(st)&&!f&&y>0){const Je=(it-.5)*1.6,k=Gn(st,tt,Te,T);zn({frequency:k,duration:.12,volume:y*.75,instrument:b,pan:Je,isRecordHigh:!1,isRecordLow:!1})}$e++},Ge)},[D,oe,f,y,T,b]);return C.useEffect(()=>()=>{Q.current&&clearInterval(Q.current)},[]),{isPlaying:d,currentYear:m,playbackSpeed:g,volume:y,isMuted:f,instrument:b,quantizeScale:T,isLooping:v,audioActive:O,dynamicMin:W,dynamicMax:te,rawMin:ie,rawMax:Se,pitchMappingText:Ue,isScanning:D,scanProgress:q,togglePlay:Re,setYear:ge,stepForward:J,stepBackward:fe,setVolume:p,toggleMute:Oe,setInstrument:E,setQuantizeScale:_,setIsLooping:N,changeSpeed:Ee,unlockAudio:oe,playYearTone:X,playFramePixelTone:me,startFrameScan:Ce}}function dx({initialStageId:n="air",locationA:e,locationB:t,isCompareMode:i=!1,mapZoom:a=5,volume:r=.7,isMuted:o=!1,instrument:l="sine",quantizeScale:c=!0,unlockAudio:d=async()=>!0,onFrameChange:h=()=>{}}){const[m,u]=C.useState(n),[g,x]=C.useState($n[0].animations[0].id),[y,p]=C.useState("monthly"),[f,M]=C.useState(0),[b,E]=C.useState(!1),[T,_]=C.useState(1),[v,N]=C.useState(!0),[O,R]=C.useState(.85),[D,F]=C.useState(null),[q,I]=C.useState(!1),[V,Q]=C.useState(null),[j,oe]=C.useState({}),[W,te]=C.useState({}),[ie,Se]=C.useState(!1),[Ue,X]=C.useState(null),[me,ge]=C.useState({loading:!1,error:null,primaryMap:null,secondaryMap:null}),[fe,J]=C.useState(!1),[Re,Oe]=C.useState(null),[Ee,Ce]=C.useState(0),ve=C.useRef(null),Ae=C.useRef(null),Ge=C.useRef(f);Ge.current=f;const $e=C.useMemo(()=>$n.find(G=>G.id===m)||$n[0],[m]),be=C.useMemo(()=>Xl.find(G=>G.id===g)||$e.animations[0],[g,$e]),je=C.useCallback(G=>{const Y=$n.find(P=>P.id===G);Y&&(E(!1),u(Y.id),x(Y.animations[0].id),M(0))},[]),tt=C.useCallback(G=>{const Y=Xl.find(P=>P.id===G);Y&&(E(!1),u(Y.stageId),x(Y.id),M(0))},[]),Te=C.useMemo(()=>j0(be,y),[be,y]);C.useEffect(()=>{Te.length>0&&f>=Te.length&&M(0)},[Te,f]);const it=Te[f]||Te[0]||be.availableRange.end,st=C.useCallback(()=>{Ce(G=>G+1)},[]);C.useEffect(()=>{let G=!1;if(Q(null),!be.colormapId){F(null),I(!1);return}return I(!0),hd(be).then(Y=>{G||(!Y||Y.length===0?(F(null),Q(`Unable to load NASA GIBS colormap (${be.colormapId}).`)):(F(Y),Q(null)))}).catch(Y=>{G||(F(null),Q((Y==null?void 0:Y.message)||"Failed to fetch NASA GIBS colormap."))}).finally(()=>{G||I(!1)}),()=>{G=!0}},[be,Ee]),C.useEffect(()=>{if(!be.pairedPowerParam||!e){ge({loading:!1,error:null,primaryMap:null,secondaryMap:null});return}const G=new AbortController;let Y=!1;const P=parseInt((Te[0]||"2020-01-01").slice(0,4),10),Z=Math.min(2025,parseInt((Te[Te.length-1]||"2025-01-01").slice(0,4),10)),H=Math.min(P,Z);ge(se=>({...se,loading:!0,error:null}));const de=[ql(e.lat,e.lon,be.pairedPowerParam,H,Z,G.signal)];return be.pairedPowerSecondaryParam&&de.push(ql(e.lat,e.lon,be.pairedPowerSecondaryParam,H,Z,G.signal)),Promise.all(de).then(([se,xe])=>{Y||ge({loading:!1,error:null,primaryMap:se||null,secondaryMap:xe||null})}).catch(se=>{se.name==="AbortError"||Y||ge({loading:!1,error:(se==null?void 0:se.message)||"Failed to fetch paired NASA POWER data.",primaryMap:null,secondaryMap:null})}),()=>{Y=!0,G.abort()}},[be,e,Te,Ee]),C.useEffect(()=>{if(!e||Te.length===0)return;const G=Math.min(a,be.maxNativeZoom),Y=pn(e.lat,e.lon,G),P=[];[-1,0,1,2].forEach(Z=>{const H=(f+Z+Te.length)%Te.length,de=Te[H];if(de&&(P.push(sn(be,de,G,Y.tileY,Y.tileX)),i&&t)){const se=pn(t.lat,t.lon,G);P.push(sn(be,de,G,se.tileY,se.tileX))}}),z0(P)},[f,Te,be,e,t,i,a]),C.useEffect(()=>{if(!e||Te.length===0||be.colormapId&&q)return;let G=!1;Se(!0),X(null),oe({}),te({});const Y=Math.min(4,be.maxNativeZoom);async function P(){const Z=pn(e.lat,e.lon,Y),H=i&&t?pn(t.lat,t.lon,Y):null,de={},se={};let xe=0,we=0;const ze=4;for(let le=0;le<Te.length;le+=ze){if(G)return;const Le=Te.slice(le,le+ze);await Promise.all(Le.map(async We=>{const ce=sn(be,We,Y,Z.tileY,Z.tileX),Ve=await qn(ce,Z.pixelX,Z.pixelY,D,be);if(de[We]=Ve,Ve!=null&&Ve.corsError&&xe++,Ve!=null&&Ve.missingTile&&we++,H){const nt=sn(be,We,Y,H.tileY,H.tileX),Mt=await qn(nt,H.pixelX,H.pixelY,D,be);se[We]=Mt}})),G||(oe({...de}),H&&te({...se}))}G||(xe>0&&xe===Te.length?X("CORS blocked reading GIBS satellite pixels from canvas."):we===Te.length&&X(`Failed to load GIBS tiles for ${be.gibsLayerId}. Check your network and click Retry.`),Se(!1))}return P().catch(Z=>{G||(X((Z==null?void 0:Z.message)||"Error sampling satellite frames."),Se(!1))}),()=>{G=!0}},[be,Te,e,t,i,D,q,Ee]);const{seriesA:Je,seriesB:k,statsA:dt,statsB:qe,dynamicMin:Ye,dynamicMax:ye,rawMin:ht,rawMax:Fe}=C.useMemo(()=>{var ze,le,Le,We;const G=Te.map((ce,Ve)=>{const nt=j[ce],Mt=ce.slice(0,7).replace("-",""),on=me.primaryMap?me.primaryMap[Mt]??null:null,ti=me.secondaryMap?me.secondaryMap[Mt]??null:null;return{index:Ve,year:Ve,date:ce,value:(nt==null?void 0:nt.value)??null,label:(nt==null?void 0:nt.label)||"No Data",sample:nt,powerValue:on,powerValueSecondary:ti}}),Y=i?Te.map((ce,Ve)=>{const nt=W[ce];return{index:Ve,year:Ve,date:ce,value:(nt==null?void 0:nt.value)??null,label:(nt==null?void 0:nt.label)||"No Data",sample:nt}}):[],P=ua(G),Z=i?ua(Y):null;let H=G.filter(ce=>ce.value!==null&&!isNaN(ce.value)).map(ce=>ce.value);i&&(H=H.concat(Y.filter(ce=>ce.value!==null&&!isNaN(ce.value)).map(ce=>ce.value)));let de=((ze=be.valueDomain)==null?void 0:ze.min)??0,se=((le=be.valueDomain)==null?void 0:le.max)??100,xe=de,we=se;if(H.length>=2){de=Math.min(...H),se=Math.max(...H);const ce=se-de,Ve=ce===0?Math.max(.05,Math.abs(de)*.1||1):ce*.08;xe=parseFloat((de-Ve).toFixed(3)),we=parseFloat((se+Ve).toFixed(3))}else H.length===1&&(de=Math.min(H[0],((Le=be.valueDomain)==null?void 0:Le.min)??H[0]),se=Math.max(H[0],((We=be.valueDomain)==null?void 0:We.max)??H[0]),xe=de,we=se===de?de+1:se);return{seriesA:G,seriesB:Y,statsA:P,statsB:Z,dynamicMin:xe,dynamicMax:we,rawMin:de,rawMax:se}},[Te,j,W,i,be,me]),He=C.useMemo(()=>{const G=be.unitEn,Y=P=>Math.abs(P)<2?P.toFixed(3):Math.abs(P)<20?P.toFixed(2):P.toFixed(1);return`${Y(ht)} ${G} ➔ C3 (~131 Hz) | ${Y(Fe)} ${G} ➔ C6 (~1047 Hz)`},[ht,Fe,be]),w=C.useCallback(G=>{var P,Z;if(o||r===0)return;const Y=Je[G];if(Y&&Y.value!==null&&!isNaN(Y.value)){const H=Gn(Y.value,Ye,ye,c),de=(P=dt==null?void 0:dt.recordsMap)==null?void 0:P[G];zn({frequency:H,duration:.45/T,volume:r,instrument:l,pan:i?-.75:0,isRecordHigh:!!(de!=null&&de.isRecordHigh),isRecordLow:!!(de!=null&&de.isRecordLow)})}if(i&&k[G]){const H=k[G];if(H.value!==null&&!isNaN(H.value)){const de=Gn(H.value,Ye,ye,c),se=(Z=qe==null?void 0:qe.recordsMap)==null?void 0:Z[G];zn({frequency:de,duration:.45/T,volume:r,instrument:l,pan:.75,isRecordHigh:!!(se!=null&&se.isRecordHigh),isRecordLow:!!(se!=null&&se.isRecordLow)})}}},[o,r,Je,k,Ye,ye,c,dt,qe,T,l,i]),A=C.useCallback((G,Y=0)=>{if(o||r===0||G===null||isNaN(G))return;const P=Gn(G,Ye,ye,c);zn({frequency:P,duration:.35,volume:r*.9,instrument:l,pan:Y,isRecordHigh:!1,isRecordLow:!1})},[o,r,Ye,ye,c,l]),U=C.useCallback((G,Y=!0,P=!0)=>{if(Te.length===0)return;const Z=Math.max(0,Math.min(Te.length-1,G));M(Z),h(Z,Te[Z],Je[Z],P,!1),Y&&d().then(()=>w(Z))},[Te,Je,h,d,w]),re=C.useCallback(()=>{if(Te.length===0)return;const G=Ge.current>=Te.length-1?0:Ge.current+1;U(G,!0,!0)},[Te.length,U]),K=C.useCallback(()=>{if(Te.length===0)return;const G=Ge.current<=0?Te.length-1:Ge.current-1;U(G,!0,!0)},[Te.length,U]),ue=C.useCallback(async()=>{b?(E(!1),h(Ge.current,Te[Ge.current],Je[Ge.current],!1,!0)):(await d(),E(!0))},[b,d,h,Te,Je]);C.useEffect(()=>{if(!b||Te.length===0){ve.current&&(clearInterval(ve.current),ve.current=null);return}const G=Math.round(950/T);return w(Ge.current),ve.current=setInterval(()=>{let Y=Ge.current+1;if(Y>=Te.length)if(v)Y=0;else{E(!1),clearInterval(ve.current);return}M(Y),h(Y,Te[Y],Je[Y],!1,!1),w(Y)},G),()=>{ve.current&&clearInterval(ve.current)}},[b,Te,T,v,w,h,Je]);const pe=C.useCallback(async G=>{if(fe)return;await d(),J(!0),Oe(0);const Y=40,P=60;let Z=0;const H=await G(Y),de=H.filter(we=>we!==null&&!isNaN(we)),se=de.length>0?Math.min(...de):Ye,xe=de.length>0?Math.max(...de):ye;Ae.current=setInterval(()=>{if(Z>=Y){clearInterval(Ae.current),Ae.current=null,J(!1),Oe(null);return}const we=Z/Y;Oe(we);const ze=H[Z];if(ze!==null&&!isNaN(ze)&&!o&&r>0){const le=(we-.5)*1.6,Le=Gn(ze,se,xe,c);zn({frequency:Le,duration:.12,volume:r*.75,instrument:l,pan:le,isRecordHigh:!1,isRecordLow:!1})}Z++},P)},[fe,d,Ye,ye,o,r,c,l]);return C.useEffect(()=>()=>{Ae.current&&clearInterval(Ae.current)},[]),{selectedStageId:m,selectedStage:$e,selectedAnimationId:g,selectedAnimation:be,selectStage:je,selectAnimation:tt,cadence:y,setCadence:p,dates:Te,currentIndex:f,currentDate:it,setFrameIndex:U,isPlaying:b,togglePlay:ue,stepForward:re,stepBackward:K,playbackSpeed:T,setPlaybackSpeed:_,isLooping:v,setIsLooping:N,gibsOpacity:O,setGibsOpacity:R,colormapData:D,colormapLoading:q,samplingLoading:ie,powerData:me,samplesByDateA:j,samplesByDateB:W,seriesA:Je,seriesB:k,statsA:dt,statsB:qe,dynamicMin:Ye,dynamicMax:ye,rawMin:ht,rawMax:Fe,pitchMappingText:He,playSinglePixelValue:A,isScanning:fe,scanProgress:Re,startFrameScan:pe,error:V||Ue||null,retry:st}}function ux({language:n="en",statsA:e=null,locationA:t=null,primaryVariable:i="T2M",isCompareMode:a=!1,locationB:r=null,statsB:o=null}){const[l,c]=C.useState(!1),[d,h]=C.useState(!1),m=C.useRef(null);C.useEffect(()=>{typeof window<"u"&&"speechSynthesis"in window&&h(!0)},[]);const u=C.useCallback(()=>{typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),c(!1))},[]),g=C.useCallback(()=>{if(!e||!t)return"";const y=Lt[i]||Lt.T2M,p=n==="ar"&&t.nameAr||t.nameEn,f=n==="ar"?y.nameAr:y.nameEn,M=n==="ar"?y.unitAr:y.unitEn,b=Math.abs(e.changePerDecade).toFixed(2),E=e.changePerDecade>=0?n==="ar"?"ارتفعت":"rose":n==="ar"?"انخفضت":"declined",T=e.isSignificant?n==="ar"?"وهو تغير دال إحصائياً.":"a statistically significant change.":n==="ar"?"ولكن التغير ليس دالاً إحصائياً.":"though the trend is not statistically significant.",_=e.recordHigh?n==="ar"?`سُجلت أعلى قيمة بلغت ${e.recordHigh.value} ${M} في عام ${e.recordHigh.year}.`:`The all-time record high of ${e.recordHigh.value} ${M} was reached in ${e.recordHigh.year}.`:"";if(n==="ar"){let v=`${E} ${f} في ${p} بمعدل ${b} ${M} لكل عقد منذ عام 1990، ${T} ${_}`;if(a&&o&&r){const N=r.nameAr||r.nameEn,O=Math.abs(o.changePerDecade).toFixed(2),R=o.changePerDecade>=0?"ارتفعت":"انخفضت";v+=` بينما في ${N}، ${R} بمعدل ${O} ${M} لكل عقد.`}return v}else{let v=`${f} in ${p} ${E} ${b} ${M} per decade since 1990, ${T} ${_}`;if(a&&o&&r){const N=Math.abs(o.changePerDecade).toFixed(2),O=o.changePerDecade>=0?"rose":"declined";v+=` In comparison, ${f} in ${r.nameEn} ${O} ${N} ${M} per decade.`}return v}},[n,e,t,i,a,r,o]),x=C.useCallback(()=>{if(!d||typeof window>"u")return;window.speechSynthesis.cancel();const y=g();if(!y)return;const p=new SpeechSynthesisUtterance(y);m.current=p,p.lang=n==="ar"?"ar-EG":"en-US",p.rate=.95,p.pitch=1;const f=window.speechSynthesis.getVoices();if(f&&f.length>0){const M=n==="ar"?"ar":"en",b=f.find(E=>E.lang.startsWith(M));b&&(p.voice=b)}p.onstart=()=>{c(!0)},p.onend=()=>{c(!1)},p.onerror=M=>{console.warn("Speech synthesis error:",M),c(!1)},window.speechSynthesis.speak(p)},[d,g,n]);return C.useEffect(()=>()=>{typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()},[]),{isSpeaking:l,speechSupported:d,speakSummary:x,stopSpeaking:u,summaryText:g()}}function hx({onTogglePlay:n,onStepBackward:e,onStepForward:t,onIncreaseSpeed:i,onDecreaseSpeed:a,onToggleMute:r,onToggleHelpModal:o,onCloseModal:l}){C.useEffect(()=>{const c=d=>{const h=document.activeElement;if(d.code==="Escape"){d.preventDefault(),l==null||l();return}if(h&&(h.tagName==="BUTTON"||h.tagName==="A"||h.tagName==="SELECT"||h.tagName==="TEXTAREA"||h.tagName==="SUMMARY"||h.isContentEditable||h.tagName==="INPUT"&&h.type!=="range"))return;const u=!h||h===document.body||h===document.documentElement||h.id==="main-content"||h.tagName==="INPUT"&&h.type==="range";switch(d.code){case"Space":d.preventDefault(),n==null||n();break;case"ArrowLeft":u&&(d.preventDefault(),e==null||e());break;case"ArrowRight":u&&(d.preventDefault(),t==null||t());break;case"ArrowUp":u&&(d.preventDefault(),i==null||i());break;case"ArrowDown":u&&(d.preventDefault(),a==null||a());break;case"KeyM":d.preventDefault(),r==null||r();break;case"KeyH":d.preventDefault(),o==null||o();break}};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[n,e,t,i,a,r,o,l])}function fx(){const[n,e]=C.useState("en"),[t,i]=C.useState(()=>{try{const ce=localStorage.getItem("terra-tone-theme");return ce==="light"||ce==="dark"?ce:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}catch{return"dark"}}),[a,r]=C.useState(!0),[o,l]=C.useState(!1),[c,d]=C.useState(!1),[h,m]=C.useState(!1),[u,g]=C.useState(!1),[x,y]=C.useState(!1),[p,f]=C.useState("night-lights-decade"),[M,b]=C.useState(!1),[E,T]=C.useState("power"),_=C.useCallback(()=>{i(ce=>{const Ve=ce==="dark"?"light":"dark";try{localStorage.setItem("terra-tone-theme",Ve)}catch{}return Ve})},[]),v=C.useCallback(()=>{l(ce=>!ce)},[]),N=C.useCallback(()=>{d(ce=>!ce)},[]),O=C.useCallback(()=>{e(ce=>ce==="en"?"ar":"en")},[]),R=C.useCallback(()=>{r(ce=>!ce)},[]);C.useEffect(()=>{document.documentElement.lang=n,document.documentElement.dir=n==="ar"?"rtl":"ltr"},[n]),C.useEffect(()=>{const ce=o?"high-contrast":t;document.documentElement.setAttribute("data-theme",ce),document.body.setAttribute("data-theme",ce);const Ve=document.getElementById("meta-theme-color");Ve&&Ve.setAttribute("content",o?"#000000":ce==="light"?"#F8FAFC":"#050816")},[t,o]),C.useEffect(()=>{c?(document.documentElement.setAttribute("data-font-size","large"),document.body.setAttribute("data-font-size","large")):(document.documentElement.removeAttribute("data-font-size"),document.body.removeAttribute("data-font-size"))},[c]);const[D,F]=C.useState("T2M"),[q,I]=C.useState("NONE"),[V,Q]=C.useState(da[0]),[j,oe]=C.useState(da[1]),[W,te]=C.useState(!1),[ie,Se]=C.useState(!1),[Ue,X]=C.useState($n[0].presets[0]),[me,ge]=C.useState($n[0].presets[1]),[fe,J]=C.useState(!1),[Re,Oe]=C.useState(""),Ee=Lt[D]||Lt.T2M,{loading:Ce,error:ve,dataA:Ae,dataB:Ge,secondaryDataA:$e,statsA:be,statsB:je,years:tt,refetch:Te}=lx({primaryVariable:D,secondaryVariable:q,locationA:V,locationB:j,isCompareMode:W}),it=C.useCallback((ce,Ve=!1,nt=!1)=>{const Mt=Ae.find(on=>on.year===ce);if(Mt){const on=n==="ar"?`سنة ${ce}، ${Ee.nameAr}: ${Mt.value} ${Ee.unitAr}`:`Year ${ce}, ${Ee.nameEn}: ${Mt.value} ${Ee.unitEn}`;Oe(on)}},[Ae,Ee,n]),{isPlaying:st,currentYear:Je,playbackSpeed:k,volume:dt,isMuted:qe,instrument:Ye,quantizeScale:ye,isLooping:ht,togglePlay:Fe,setYear:He,stepForward:w,stepBackward:A,setVolume:U,toggleMute:re,setInstrument:K,setQuantizeScale:ue,setIsLooping:pe,changeSpeed:ee,unlockAudio:G,playFramePixelTone:Y,startFrameScan:P,isScanning:Z,scanProgress:H,pitchMappingText:de}=cx({dataA:Ae,dataB:Ge,secondaryDataA:$e,statsA:be,statsB:je,primaryVariable:D,secondaryVariable:q,isCompareMode:W,onYearChange:it}),se=dx({initialStageId:"air",locationA:Ue,locationB:me,isCompareMode:fe,volume:dt,isMuted:qe,instrument:Ye,quantizeScale:ye,unlockAudio:G}),{isSpeaking:xe,speechSupported:we,speakSummary:ze,stopSpeaking:le,summaryText:Le}=ux({language:n,statsA:be,locationA:V,primaryVariable:D,isCompareMode:W,locationB:j,statsB:je});hx({onTogglePlay:Fe,onStepBackward:A,onStepForward:w,onIncreaseSpeed:()=>ee(k===2?.5:k+.5),onToggleMute:re});const We=ce=>{const Ve=document.getElementById(ce);Ve&&Ve.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("div",{className:"terra-redesign-wrapper","data-theme":t,children:[s.jsx("div",{className:"sr-only",role:"status","aria-live":"polite",children:Re}),s.jsx(Qd,{theme:t,onToggleTheme:_,lang:n,onToggleLang:O,soundEnabled:a,onToggleSound:R,isHighContrast:o,onToggleHighContrast:v,isLargeText:c,onToggleLargeText:N,onOpenAbout:()=>g(!0),onOpenShortcuts:()=>m(!0),onOpenEICModal:()=>y(!0)}),s.jsxs("main",{id:"main-content",children:[s.jsx(b0,{lang:n,isDark:t==="dark",onExploreClick:()=>We("explore"),onHowItWorksClick:()=>We("science")}),s.jsx(M0,{lang:n}),s.jsx(E0,{lang:n,onSelectDataset:ce=>{f(ce)}}),s.jsx(D0,{lang:n,isDark:t==="dark",selectedDatasetId:p,onDatasetChange:f}),s.jsxs("div",{className:"advanced-explorer-wrapper",style:{maxWidth:"1380px",margin:"0 auto 4rem auto",padding:"0 1.5rem"},children:[s.jsxs("button",{onClick:()=>b(!M),className:"advanced-explorer-toggle-btn",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--color-bg-card)",border:"1px solid var(--color-border)",borderRadius:"14px",padding:"1.15rem 1.75rem",color:"var(--color-text-primary)",fontSize:"1rem",fontWeight:700,cursor:"pointer",boxShadow:"var(--shadow-card-elevated)",transition:"all 0.2s ease"},children:[s.jsxs("div",{style:{display:"flex",alignItem:"center",gap:"0.75rem"},children:[s.jsx(hi,{size:20,color:"var(--color-accent-primary)"}),s.jsx("span",{children:n==="ar"?"مستكشف خرائط ناسا المتقدم (NASA GIBS & Global Coordinates)":"Advanced Geospatial Satellite Map & Coordinate Picker (NASA GIBS)"})]}),M?s.jsx(ys,{size:20}):s.jsx(Ss,{size:20})]}),M&&s.jsxs("div",{style:{marginTop:"1.5rem",background:"var(--color-bg-card)",borderRadius:"16px",padding:"1.5rem",border:"1px solid var(--color-border)"},children:[s.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"1.25rem"},children:[s.jsx("button",{onClick:()=>T("power"),className:`cat-pill-btn ${E==="power"?"active":""}`,children:n==="ar"?"سلاسل المناخ (NASA POWER)":"NASA POWER Climate Explorer"}),s.jsx("button",{onClick:()=>T("pollution"),className:`cat-pill-btn ${E==="pollution"?"active":""}`,children:n==="ar"?"مراحل التلوث العالمية":"Global Pollution Stages"})]}),E==="pollution"?s.jsx(ex,{pollution:se,pollutionState:se,lang:n,theme:t,locationA:Ue,onSelectLocationA:X,locationB:me,onSelectLocationB:ge,isCompareMode:fe,onToggleCompareMode:J,volume:dt,onChangeVolume:U,isMuted:qe,onToggleMute:re,instrument:Ye,onChangeInstrument:K,quantizeScale:ye,onToggleQuantizeScale:ue,onAnnounce:Oe}):s.jsxs(s.Fragment,{children:[Ce&&s.jsxs("div",{className:"loading-bar-wrap",role:"status",children:[s.jsx(aa,{className:"icon-sm spin"}),s.jsx("span",{children:n==="ar"?"جاري جلب بيانات المناخ...":"Fetching NASA climate series..."})]}),ve&&s.jsxs("div",{className:"error-banner",role:"alert",children:[s.jsx(ta,{className:"icon"}),s.jsx("span",{children:ve}),s.jsx("button",{type:"button",className:"btn-retry",onClick:Te,children:"Retry"})]}),s.jsxs("div",{className:"grid-two-columns",children:[s.jsx(tx,{lang:n,theme:t,locationA:V,onSelectLocationA:Q,locationB:j,onSelectLocationB:oe,isCompareMode:W,onToggleCompareMode:te,currentYear:Je,dataA:Ae,dataB:Ge,primaryVariable:D,onPlayFramePixelTone:Y,onStartFrameScan:P,isScanning:Z,scanProgress:H}),ie?s.jsx(rx,{lang:n,dataA:Ae,dataB:Ge,statsA:be,statsB:je,primaryVariable:D,locationA:V,locationB:j,isCompareMode:W,currentYear:Je,showTable:ie,onToggleTable:Se}):s.jsx(nx,{lang:n,theme:t,dataA:Ae,dataB:Ge,statsA:be,statsB:je,currentYear:Je,primaryVariable:D,locationA:V,locationB:j,isCompareMode:W,showTable:ie,onToggleTable:Se})]}),s.jsxs("div",{className:"grid-two-columns",style:{marginTop:"1rem"},children:[s.jsx(ix,{lang:n,currentYear:Je,years:tt,isPlaying:st,onTogglePlay:Fe,onStepBackward:A,onStepForward:w,onSelectYear:ce=>He(ce,!0),playbackSpeed:k,onChangeSpeed:ee,isLooping:ht,onToggleLoop:()=>pe(ce=>!ce)}),s.jsx(ax,{lang:n,volume:dt,onChangeVolume:U,isMuted:qe,onToggleMute:re,instrument:Ye,onChangeInstrument:K,quantizeScale:ye,onToggleQuantizeScale:ue,primaryVariable:D,onChangePrimaryVariable:F,secondaryVariable:q,onChangeSecondaryVariable:I,isCompareMode:W,pitchMappingText:de})]}),s.jsx(sx,{lang:n,statsA:be,statsB:je,locationA:V,locationB:j,primaryVariable:D,isCompareMode:W,isSpeaking:xe,speechSupported:we,onSpeakSummary:ze,onStopSpeaking:le,summaryText:Le})]})]})]}),s.jsx(U0,{lang:n}),s.jsx(O0,{lang:n})]}),s.jsx(B0,{isOpen:h,onClose:()=>m(!1),lang:n}),s.jsx(H0,{isOpen:u,onClose:()=>g(!1),lang:n}),s.jsx(W0,{isOpen:x,onClose:()=>y(!1),lang:n,theme:t})]})}class px extends Kl.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Earth Jukebox runtime error:",e,t)}render(){var e;return this.state.hasError?s.jsxs("div",{role:"alert",style:{minHeight:"100vh",backgroundColor:"#070a13",color:"#f8fafc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center",gap:"1rem"},children:[s.jsx("h1",{style:{fontSize:"1.4rem",color:"#38bdf8",margin:0},children:"Earth Jukebox failed to render"}),s.jsx("p",{style:{maxWidth:"520px",color:"#cbd5e1",margin:0},children:((e=this.state.error)==null?void 0:e.message)||"Unexpected application error."}),s.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{padding:"0.6rem 1.2rem",borderRadius:"8px",border:"1px solid #38bdf8",backgroundColor:"#0f172a",color:"#f8fafc",cursor:"pointer",fontWeight:700},children:"Reload Application"})]}):this.props.children}}pr.createRoot(document.getElementById("root")).render(s.jsx(Kl.StrictMode,{children:s.jsx(px,{children:s.jsx(fx,{})})}));

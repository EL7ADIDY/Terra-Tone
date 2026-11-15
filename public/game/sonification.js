(()=>{'use strict';
// Supplied Web Sonifier core: pixel data -> Adapter -> validated instrument parameter.
const {Adapter,SonifierBase}=window.WebSonifier;
const pitch=new Adapter({param:'frequency',inputRange:[0,1],outputRange:[220,880]});
class ImageTone extends SonifierBase{
 getParamSchema(){return [{name:'frequency',type:'number',range:[220,880],default:220}]}
 init(context,output){this.context=context;this.output=output}
 onParam(){}
 strike(amplitude,speed){const ctx=this.context,osc=ctx.createOscillator(),gain=ctx.createGain(),now=ctx.currentTime;osc.frequency.value=this.getParam('frequency');gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(amplitude,now+.02);gain.gain.setValueAtTime(amplitude,now+.12/speed);gain.gain.linearRampToValueAtTime(0,now+.16/speed);osc.connect(gain).connect(this.output);osc.start();osc.stop(now+.17/speed);osc.onended=()=>{osc.disconnect();gain.disconnect()};return osc}
 destroy(){this.context=null;this.output=null}
}
let instrument;
function note(context,value,series,speed,volume){if(!instrument||instrument.context!==context){instrument?.destroy();instrument=new ImageTone();instrument.init(context,context.destination)}instrument.setParam('frequency',pitch.map((value-series.min)/(series.max-series.min)));return instrument.strike(.14*volume,speed)}
function pixelColumns(pixels,width,height,bins=48,palette=null){
 const values=[],times=[],labels=[];
 const cache=new Map();
 function reading(p){const r=pixels[p],g=pixels[p+1],b=pixels[p+2];if(!palette)return (.2126*r+.7152*g+.0722*b)/255;const key=(r<<16)|(g<<8)|b;if(cache.has(key))return cache.get(key);let best=Infinity,index=0;for(let k=0;k<palette.length;k++){const c=palette[k],d=(r-c[0])**2+(g-c[1])**2+(b-c[2])**2;if(d<best){best=d;index=k}}const value=index/(palette.length-1);cache.set(key,value);return value}
 for(let i=0;i<bins;i++){const x=Math.min(width-1,Math.floor((i+.5)*width/bins));let sum=0,n=0;
  for(let j=0;j<48;j++){const y=Math.min(height-1,Math.floor((j+.5)*height/48)),p=(y*width+x)*4;if(pixels[p+3]<128)continue;sum+=reading(p);n++}
  if(n){values.push(sum/n);times.push(i/bins*8);labels.push(String(i+1))}
 }
 return {values,times,labels,duration:8,min:0,max:1,imageScan:true,variable:palette?'Mean strip concentration':'Mean strip brightness',units:palette?'normalized reading':'normalized luminance',sonification:'pitch',sonify:true,simulated:false,mapping:palette?'Green to purple represents increasing readings and pitch (220–880 Hz), at constant volume.':'Brighter strips produce higher pitch (220–880 Hz), at constant volume.'};
}
function mount(parent,layer){
 const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(cls)e.className=cls;return e};
 const wrap=el('section',null,'air-map'),title=el('p',layer.topic+(layer.customImage?'':' · Egypt'),'badge'),viewport=el('div',null,'air-map-viewport'),canvas=el('canvas'),line=el('span',null,'map-scan-line');
 canvas.width=layer.width;canvas.height=layer.height;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',layer.customImage?'Your original image; scan brightness from left to right.':layer.topic+' forecast distribution over Egypt. Numeric city readings and sources are below.');line.hidden=true;viewport.append(canvas,line);wrap.append(title,viewport,el('p',layer.customImage?'Your original colors · brightness → pitch · no pollutant inference':`${layer.min}–${layer.max} ${layer.units} · ${layer.time} · forecast, not live monitoring`,'small muted'));
 if(layer.palette){const legend=el('div',null,'map-legend');legend.append(el('span','Lower'),el('span',null,'map-legend-bar'),el('span','Higher'));wrap.append(legend);for(const city of layer.cities){const marker=el('span',city.name,'map-place');marker.style.left=((city.longitude-layer.bounds[0])/(layer.bounds[2]-layer.bounds[0])*100)+'%';marker.style.top=((layer.bounds[3]-city.latitude)/(layer.bounds[3]-layer.bounds[1])*100)+'%';viewport.append(marker)}}
 const detail=el('details'),summary=el('summary','Map values and sources');detail.append(summary,el('p',layer.processing,'small'));
 for(const c of layer.cities)detail.append(el('p',`${c.name}: ${c.value} ${layer.units}`,'small'));
 for(const source of layer.sources){const a=el('a',source.title);a.href=source.url;a.target='_blank';a.rel='noreferrer';detail.append(a,document.createElement('br'))}
 wrap.append(detail);parent.append(wrap);
 const image=new Image();let cancelled=false;
 const ready=new Promise((resolve,reject)=>{image.onload=()=>{if(cancelled)return;try{if(layer.customImage){const w=image.naturalWidth||480,h=image.naturalHeight||420,scale=Math.min(1,640/Math.max(w,h));canvas.width=Math.max(1,Math.round(w*scale));canvas.height=Math.max(1,Math.round(h*scale))}const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0,canvas.width,canvas.height);const series=pixelColumns(ctx.getImageData(0,0,canvas.width,canvas.height).data,canvas.width,canvas.height,48,layer.palette);if(!series.values.length)throw Error('No readable pixels in this image.');resolve({series,tick:time=>{line.hidden=false;line.style.left=(Math.max(0,Math.min(1,time/series.duration))*100)+'%'},clear:()=>line.hidden=true})}catch(e){reject(e)}};image.onerror=()=>reject(Error('The map image could not load.'));image.src=layer.imageData;});
 return {ready,destroy(){cancelled=true;image.onload=null;image.onerror=null}};
}
window.TerraSonify={pixelColumns,mount,note};
})();

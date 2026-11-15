(()=>{'use strict';
const {allComplete,evidence,validateContent,paginateDialogue,levelUnlocked}=window.TerraLogic;
const $=s=>document.querySelector(s), app=$('#app'),asset=name=>'assets/'+name;
const art={clean:'scenes/4.jpg',polluted:'scenes/0.jpg',healthy:'1a552ac5-8413-4b94-82cc-317be1e1a95e.png',sick:'64d40821-7a2e-4c51-a48b-a95219aa04e4.png',menu:'360_F_760351225_w89aQAQ01gbb5bEZDWRGoXczfkCScB3v.webp'};
const scenePreloads=[0,1,2,3,4].map(index=>{const image=new Image();image.src=asset('scenes/'+index+'.jpg');return image});
let userInteracted=false;
let data,chapter,levelIndex=0,questionIndex=0,question,submitted=false,practiceTest=false,screen='',instruction='',playback=null,audioContext,screenCleanup=()=>{},screenVersion=0;
const defaults={voiceMode:'natural',guidance:true,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,instant:false,narration:.85,listening:.75,ambience:.2};
let state={completed:{},levels:{},settings:{...defaults}};
try{const saved=JSON.parse(localStorage.getItem('terra_browser_progress_v1'));if(saved&&typeof saved==='object'){if(saved.completed&&typeof saved.completed==='object')state.completed=saved.completed;if(saved.mode)state.mode=saved.mode;if(saved.previousLevels)state.previousLevels=saved.previousLevels;if(saved.legacyCompleted)state.legacyCompleted=saved.legacyCompleted;if(saved.levels&&typeof saved.levels==='object'&&!Array.isArray(saved.levels))state.levels=saved.levels;else state.legacyCompleted={...state.completed};if(saved.settings&&typeof saved.settings==='object')state.settings={...defaults,...saved.settings}}}catch{}
if(state.mode!=='sound-guardian-v1'){state.previousLevels={...state.levels};state.levels={};state.settings.guidance=true;state.mode='sound-guardian-v1'}
for(const key of ['guidance','reduced','instant'])state.settings[key]=state.settings[key]===true;
for(const key of ['narration','listening','ambience']){const value=Number(state.settings[key]);state.settings[key]=Number.isFinite(value)?Math.max(0,Math.min(1,value)):defaults[key]}
state.completed={};for(const id of ['air','water','soil']){state.levels[id]=Math.max(0,Math.min(3,Math.floor(Number(state.levels[id])||0)));if(state.levels[id]===3)state.completed[id]=true}
function save(){try{localStorage.setItem('terra_browser_progress_v1',JSON.stringify(state))}catch{$('#save-status').textContent='Progress is kept for this session. Browser storage is unavailable.'}}
function node(tag,text,parent=app,cls=''){const e=document.createElement(tag);if(text!==null)e.textContent=text;if(cls)e.className=cls;parent.append(e);return e}
function button(text,fn,parent=app,primary=false){const b=node('button',text,parent,primary?'primary':'');b.type='button';const ownerVersion=screenVersion;let lastClick=-Infinity;b.addEventListener('click',()=>{if(ownerVersion!==screenVersion)return;const now=performance.now();if(now-lastClick<140)return;lastClick=now;unlockAudio();fn()});return b}
function actions(parent=app){return node('div',null,parent,'actions')}
function terraVoice(){const voices=window.speechSynthesis?.getVoices()||[];return voices.find(v=>v.name===state.settings.voiceName)||voices.find(v=>/^en/i.test(v.lang)&&/aria|jenny|zira|samantha|victoria|karen|moira|tessa|sonia|susan|hazel|female|ava|emma|serena/i.test(v.name))||voices.find(v=>/^en/i.test(v.lang))}
function systemSpeak(text){if(!('speechSynthesis'in window))return;const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.volume=state.settings.narration;const v=terraVoice();if(v)u.voice=v;u.rate=.88;u.pitch=1.08;speechSynthesis.speak(u);return u}
function say(text,force=false){$('#spoken').textContent=text;if(!userInteracted||!(state.settings.guidance||force)||(!force&&playback?.running))return;stopSpeech();if(state.settings.voiceMode!=='system'){const natural=window.TerraNarration.speak(text,{volume:state.settings.narration});if(natural)return natural;if(!force)return}return systemSpeak(text)}
function stopSpeech(){window.TerraNarration?.stop();if('speechSynthesis'in window){speechSynthesis.cancel();speechSynthesis.resume()}}
function unlockAudio(){userInteracted=true;try{audioContext??=new (window.AudioContext||window.webkitAudioContext)();audioContext.resume()}catch{}}
function stop(){if(playback){playback.running=false;playback.stopped=true;playback=null}for(const t of tones){try{t.stop()}catch{}}tones.clear();stopSpeech()}
function page(name,title,text,background){screenCleanup();screenCleanup=()=>{};screenVersion++;window.terraVoiceControl?.cancel();dismissSettings();stop();app.replaceChildren();app.className=state.settings.reduced?'reduce screen-enter':'screen-enter';if(background){$('#world-clean').src=asset(background);$('#world-dirty').style.opacity='0';}screen=name;app.dataset.screen=name;document.body.dataset.screen=name;document.title='Terra Tone';app.setAttribute('aria-label',title==='Terra Tone'?title:title+' · Terra Tone');instruction=text;$('#chapters').hidden=['menu','learning','quit','story','opening'].includes(name);$('#menu-return').hidden=name==='menu';app.scrollTop=0;window.scrollTo?.(0,0)}
function finishScreen(first,text=instruction){first?.focus();say(text)}
let tones=new Set();
function tone(value,series,speed=1){try{if(series.imageScan){const osc=window.TerraSonify.note(audioContext,value,series,speed,state.settings.listening);tones.add(osc);const ended=osc.onended;osc.onended=()=>{ended?.();tones.delete(osc)};return}audioContext??=new (window.AudioContext||window.webkitAudioContext)();audioContext.resume();const osc=audioContext.createOscillator(),gain=audioContext.createGain(),now=audioContext.currentTime;const f=Math.max(0,Math.min(1,(value-series.min)/Math.max(.001,series.max-series.min))),amp=series.sonification==='pitch'?.14*state.settings.listening:((series.amplitudeMin??.04)+((series.amplitudeMax??.28)-(series.amplitudeMin??.04))*f)*state.settings.listening;osc.frequency.value=series.sonification==='pitch'?220+660*f:(series.frequency||440);if(series.partials&&audioContext.createPeriodicWave){const real=new Float32Array(series.partials.length+1),imag=new Float32Array([0,...series.partials]);osc.setPeriodicWave(audioContext.createPeriodicWave(real,imag,{disableNormalization:true}))}else osc.type=series.waveform||'sine';const length=(series.noteDuration||.5)/speed,attack=Math.min(.08,length*.1),release=Math.min(.35,length*.2);gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(amp,now+attack);gain.gain.setValueAtTime(amp,now+length-release);gain.gain.linearRampToValueAtTime(0,now+length);osc.connect(gain).connect(audioContext.destination);osc.start();osc.stop(now+length+.02);tones.add(osc);osc.onended=()=>{osc.disconnect();gain.disconnect();tones.delete(osc)}}catch{say('Audio playback is unavailable. You can inspect every graph value.')}}
function listen(series,onTick=()=>{},onEnd=()=>{},speed=1){stop();let next=0;const p={running:true,stopped:false,time:0,last:performance.now(),speed,series,noteIndex:-1};playback=p;onTick(0);function frame(now){if(p.stopped)return;if(p.running){p.time=Math.min(series.duration,p.time+Math.min(100,now-p.last)/1000*speed);while(next<series.values.length&&(series.times[next]??next*series.duration/Math.max(1,series.values.length))<=p.time){p.noteIndex=next;if(series.simulated!==false||series.sonify===true)tone(series.values[next],series.cueSeries?.[next]||series,speed);next++}onTick(p.time);if(p.time>=series.duration){p.running=false;onEnd();return}}p.last=now;requestAnimationFrame(frame)}requestAnimationFrame(frame)}
function setPlaybackSuspended(suspended){if(!playback)return;playback.running=!suspended;playback.last=performance.now();if(suspended)for(const t of tones){try{t.stop()}catch{}}else if(playback.series.noteDuration&&playback.noteIndex>=0){const series=playback.series,index=playback.noteIndex,cue=series.cueSeries?.[index]||series,remaining=(series.times[index]||0)+cue.noteDuration-playback.time;if(remaining>0)tone(series.values[index],{...cue,noteDuration:remaining},playback.speed)}}
function readInstructions(){const old=playback,wasRunning=old?.running;if(wasRunning)setPlaybackSuspended(true);const voice=say(instruction,true);const resume=()=>{if(old===playback&&wasRunning&&!$('#esc-dialog').open&&!$('#settings-dialog').open)setPlaybackSuspended(false)};if(voice){voice.onend=resume;voice.onerror=resume}else resume()}
function makeGraph(series,parent,highlight=-1,evidenceEnd=-1){const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 700 250');svg.classList.add('graph');svg.setAttribute('role','img');svg.setAttribute('aria-label',`${series.variable}, ${series.units}. Fixed scale ${series.min} to ${series.max}. Use Next value to inspect observations.`);parent.append(svg);function s(tag,attrs,text){const e=document.createElementNS(ns,tag);for(const[k,v]of Object.entries(attrs))e.setAttribute(k,String(v));if(text!==undefined)e.textContent=text;svg.append(e);return e}const pts=series.values.map((v,i)=>[56+i/Math.max(1,series.values.length-1)*620,210-(v-series.min)/Math.max(.001,series.max-series.min)*175]);for(let i=0;i<5;i++){const y=35+i/4*175;s('line',{x1:56,y1:y,x2:676,y2:y,stroke:'#355364'});s('text',{x:1,y:y+5},String(Math.round((series.max-(series.max-series.min)*i/4)*10)/10))}if(pts.length)s('polyline',{points:pts.map(p=>p.join(',')).join(' '),fill:'none',stroke:'#a3ebc6','stroke-width':3});pts.forEach((p,i)=>{if(highlight>=0&&i>=highlight&&i<=evidenceEnd)s('rect',{x:p[0]-12,y:28,width:24,height:190,fill:'#ffe0a033'});s('circle',{cx:p[0],cy:p[1],r:5,fill:i>=highlight&&i<=evidenceEnd?'#ffe0a0':'#a3ebc6'});s('text',{x:p[0],y:240,'text-anchor':'middle'},series.labels[i]??String(i+1))});const cursor=s('line',{x1:56,x2:56,y1:24,y2:218,stroke:'#ffe0a0','stroke-width':2,visibility:'hidden'});return t=>{if(!pts.length)return;let i=0;for(let n=0;n<pts.length;n++)if((series.times[n]??n*series.duration/pts.length)<=t)i=n;let x=pts[i][0];if(i<pts.length-1){const a=series.times[i]??i*series.duration/pts.length,b=series.times[i+1]??(i+1)*series.duration/pts.length;const f=Math.max(0,Math.min(1,(t-a)/Math.max(.001,b-a)));x+=(pts[i+1][0]-x)*f}cursor.setAttribute('visibility','visible');cursor.setAttribute('x1',x);cursor.setAttribute('x2',x)}}
function logo(parent){const wrap=node('div',null,parent,'brand-mark');wrap.append($('#brand-template').content.cloneNode(true));return wrap}
function backToMenu(){stop();chapter=null;question=null;levelIndex=0;questionIndex=0;submitted=false;practiceTest=false;start()}
function start(){
 page('menu','Terra Tone','Terra Tone. Main menu.',art.clean);
 const menu=node('section',null,app,'main-menu');logo(menu);node('h1','Terra Tone',menu);node('p','Listen. Understand. Restore.',menu,'menu-tagline');
 const choices=node('div',null,menu,'menu-items');
 const first=button('Start Game',()=>{questionIndex=0;levelIndex=0;submitted=false;practiceTest=false;chapter=null;opening()},choices,true);
 button('Settings',settings,choices);button('Tutorial',learning,choices);button('The Website',()=>{if(window.parent!==window)window.parent.postMessage({type:'terra-tone:continue'},location.origin);else location.href='https://el7adidy.github.io/Terra-Tone/site/'},choices);button('Quit',quit,choices);
 for(const [i,b]of [...choices.children].entries()){b.classList.add('menu-item');b.style.setProperty('--item',i)}
 finishScreen(first);
}
function learning(){
 page('learning','Terra Tone','Explore pollution, learn the sound mapping and practise listening.',art.clean);
 node('p','TUTORIAL',app,'eyebrow');node('h1','Listen with understanding.');
 node('p','Explore the science behind your journey, then use sound and graphs to follow a changing world.',app,'lead');
 const cards=node('div',null,app,'cards learning-cards');
 const topics=[['Air','Burning fossil fuels can release particles and gases that harm air quality.','Reduce emissions at the source, use cleaner energy where possible and follow local air-quality advice.'],['Water','Waste and runoff can change water quality and affect aquatic life.','Prevent dumping, dispose of waste responsibly and support treatment and monitoring.'],['Soil','Improperly dumped waste can contaminate soil and affect the organisms that depend on it.','Reduce waste and use appropriate collection, recycling and disposal services.']];
 for(const [i,t]of topics.entries()){const card=node('article',null,cards,'card'),img=node('img',null,card);img.src=asset(data.chapters[i].image);img.alt=t[0]+' pollution scenario';node('h2',t[0],card);node('p',t[1],card);const more=node('details',null,card);node('summary','What could help?',more);node('p',t[2],more)}
 const guide=node('section',null,app,'panel learning-guide');node('h2','How to listen',guide);node('p','Sonification represents data through sound. In this prototype, higher-pitched tones mean a larger reading within the current layer. A graph shows the same values on a fixed scale.',guide);node('p','A real variable may use a different mapping. Read its units, source and direction of concern before interpreting it. A sound alone does not prove a cause.',guide);
 imageLab(app);
 const a=actions();const first=button('Start Game',opening,a,true);button('Back to Menu',backToMenu,a);finishScreen(first);
}
function quit(){page('quit','Terra Tone','Thank you for playing Terra Tone.',art.clean);const wrap=node('section',null,app,'quit-screen');logo(wrap);node('h1','Thank you for playing Terra Tone',wrap);node('p','Every careful listener brings a little more understanding.',wrap);finishScreen(button('Back to Menu',backToMenu,wrap,true))}
function sceneTransition({name,title,from,to,duration=14,captions,done,actor=false,sequence=null}){
 const plan=window.TerraNarration.plan(duration,captions,sequence,state.settings.guidance&&state.settings.voiceMode!=='system');duration=plan.duration;if(state.settings.voiceMode!=='system')window.TerraNarration.preload(captions);page(name,title,captions[0],from);const version=screenVersion;$('#world-dirty').src=asset(to);
 const stage=node('section',null,app,'cinematic-story'),caption=node('p',captions[0],stage,'cinematic-caption');let figure;
 if(actor){figure=node('img',null,stage,'cinematic-terra');figure.src=asset(art.sick);figure.alt='Terra appears to ask for help';figure.hidden=true}
 const row=actions(stage);row.classList.add('cinematic-controls');const play=()=>{let spoken=-1,imageStep=-1;listen({values:[],times:[],duration},t=>{let phase=0;while(phase+1<plan.starts.length&&t>=plan.starts[phase+1])phase++;let blend=0,appearance;
 if(sequence){const step=Math.max(0,phase-1),last=sequence.length-2;if(imageStep!==step){imageStep=step;$('#world-clean').src=asset(sequence[step]);$('#world-dirty').src=asset(sequence[step+1]);}const fade=step===last?Math.min(plan.fade,plan.holds[phase]):plan.holds[phase];blend=phase===0?0:Math.max(0,Math.min(1,(t-plan.starts[phase])/fade));appearance=plan.starts.at(-1)+Math.min(plan.fade,plan.holds.at(-1))}else{blend=phase===0?0:phase===1?Math.max(0,Math.min(1,(t-plan.starts[1])/plan.holds[1])):1;appearance=plan.starts[2]}
 blend=blend*blend*(3-2*blend);$('#world-dirty').style.opacity=String(blend);if(figure){figure.hidden=t<appearance;figure.style.opacity=String(Math.max(0,Math.min(1,(t-appearance)/2)))}caption.textContent=captions[phase];instruction=captions[phase];if(phase!==spoken){spoken=phase;if(state.settings.guidance)say(captions[phase],true)}},()=>{if(version===screenVersion)done()})};
 button('Repeat opening',play,row);button('Continue',done,row,true);play();
}
function opening(){
 sceneTransition({name:'opening',title:'A world worth protecting',from:art.clean,to:art.polluted,duration:34,actor:true,sequence:[art.clean,'scenes/2.jpg','scenes/3.jpg','scenes/1.jpg',art.polluted],captions:data.storyCaptions,done:()=>story(data.intro,false,chapters)});
}
function chapterEntry(c){chapter=c;levelIndex=0;questionIndex=0;practiceTest=false;sceneTransition({name:'chapter-entry',title:c.title,from:art.clean,to:c.image,duration:13,captions:['A healthy world depends on clean air, water, and soil.',c.cause,'Look closely. Listen carefully. Let’s help Terra restore this part of her world.'],done:()=>story(c.intro,false,levelsScreen,c.image)})}
function story(entries,healthy,done,background){
 if(state.settings.voiceMode!=='system')window.TerraNarration.preload(entries.map(entry=>entry.text));
 let index=0,pageIndex=0,pages=[],paused=false,timer=null,full=false,resizeObserver;
 const clearTimer=()=>{clearInterval(timer);timer=null};
 function draw(){
  clearTimer();resizeObserver?.disconnect();
  page('story','Terra Tone','Terra’s story.',background||(healthy?art.clean:art.polluted));app.classList.add('story');
  const version=screenVersion,stage=node('div',null,app,'story-stage'),actor=node('img',null,stage,'terra');actor.src=asset(healthy?art.healthy:art.sick);actor.alt=healthy?'Healthy Terra':'Sick Terra';
  const content=node('div',null,stage,'story-content'),entry=entries[index];
  const bubble=node('div',null,content,'bubble'),frame=node('img',null,bubble,'dialogue-art');frame.src=asset('64828637-f7e2-4c07-bacd-f1cd0d06f9c1.png');frame.alt='';frame.width=1946;frame.height=808;const counter=node('span','',bubble,'dialogue-counter');
  const safe=data.dialogueSafeArea||{x:.11,y:.26,width:.78,height:.28};
  for(const [key,value]of Object.entries(safe))bubble.style.setProperty('--text-'+key,(value*100)+'%');
  const line=node('div','',bubble,'dialogue-text');line.tabIndex=0;line.setAttribute('aria-label','Terra’s dialogue');
  const controls=node('div',null,bubble,'dialogue-controls');
  const reveal=()=>{line.textContent=pages[pageIndex]||'';full=true;clearTimer()};
  function playText(){clearTimer();paused=false;full=state.settings.instant;const text=pages[pageIndex]||'';line.textContent=full?text:'';let chars=0;if(!full)timer=setInterval(()=>{if(screenVersion!==version){clearTimer();return}if(!paused){chars+=2;line.textContent=text.slice(0,chars);if(chars>=text.length)reveal()}},40);instruction=text;counter.textContent=`${index+1} / ${entries.length}`+(pages.length>1?` · page ${pageIndex+1}/${pages.length}`:'');say(text)}
  button('Skip',()=>{clearTimer();done()},controls).classList.add('dialogue-skip');
  button('Repeat',()=>{pageIndex=0;playText()},controls);
  const next=button('Continue',()=>{if(!full){reveal();return}if(pageIndex+1<pages.length){pageIndex++;playText();return}index++;pageIndex=0;if(index>=entries.length){clearTimer();done()}else draw()},controls,true);next.classList.add('dialogue-continue');
  
  
  function format(initial=false){if(screenVersion!==version)return;const css=getComputedStyle(line),canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');ctx.font=`${css.fontWeight} ${css.fontSize} ${css.fontFamily}`;const box=line.getBoundingClientRect();if(box.width<1||box.height<1)return;pages=paginateDialogue(entry.text,box.width-2,box.height-2,parseFloat(css.lineHeight),text=>ctx.measureText(text).width);pageIndex=Math.min(pageIndex,pages.length-1);if(initial)playText();else{clearTimer();reveal();counter.textContent=`${index+1} / ${entries.length}`+(pages.length>1?` · page ${pageIndex+1}/${pages.length}`:'')}}
  let started=false;resizeObserver=new ResizeObserver(()=>{format(!started);started=true});resizeObserver.observe(bubble);
  screenCleanup=()=>{clearTimer();resizeObserver.disconnect()};story.cancel=screenCleanup;story.isPaused=()=>paused;story.setPaused=value=>{paused=value};next.focus();
 }
 if(!entries.length){done();return}draw();
}
function imageLab(parent){
 const version=screenVersion,section=node('section',null,parent,'panel image-lab');node('h2','Turn your image into sound',section);node('p','Choose your Earth or map image. Its original colors stay intact. The scan maps brightness to pitch; it does not infer pollution readings from an uncalibrated photo.',section,'small');
 const label=node('label','Choose image',section),file=node('input',null,label);file.type='file';file.accept='image/png,image/jpeg,image/webp';const holder=node('div',null,section),row=actions(section),status=node('p','Choose an image, then scan it from left to right.',section,'small image-lab-status');let map,view;
 const play=()=>{if(view)listen(view.series,view.tick,()=>{status.textContent='Scan complete. Replay to compare.'})};
 const scan=button('Scan image',play,row,true),repeat=button('Replay image',play,row);scan.disabled=repeat.disabled=true;button('Stop sound',()=>{stop();view?.clear()},row);
 function load(imageData){map?.destroy();view=null;scan.disabled=repeat.disabled=true;holder.replaceChildren();map=window.TerraSonify.mount(holder,{topic:'Your image',customImage:true,imageData,width:480,height:420,cities:[],sources:[],processing:'Local image pixels → mean strip brightness → Web Sonifier Adapter → 220–880 Hz. Volume stays constant. The image stays on your device.'});const current=map;map.ready.then(result=>{if(version!==screenVersion||map!==current)return;view=result;scan.disabled=repeat.disabled=false;status.textContent='Ready. Scan image to hear its brightness.'}).catch(error=>{if(map===current)status.textContent=error.message})}
 file.onchange=()=>{const selected=file.files?.[0];if(!selected)return;if(!['image/png','image/jpeg','image/webp'].includes(selected.type)||selected.size>8*1024*1024){status.textContent='Choose a PNG, JPG or WebP smaller than 8 MB.';return}stop();const reader=new FileReader();reader.onload=()=>{if(version!==screenVersion)return;customMap=String(reader.result);try{localStorage.setItem('terra_tone_map',customMap)}catch{}load(customMap)};reader.onerror=()=>status.textContent='The image could not be read.';reader.readAsDataURL(selected)};
 if(customMap)load(customMap);const previous=screenCleanup;screenCleanup=()=>{previous();map?.destroy()};
 const credit=node('p','Image sound powered by the supplied Web Sonifier core. ',section,'small muted'),link=node('a','License',credit);link.href='vendor/web-sonifier-LICENSE.txt';link.target='_blank';
}
function chapters(){
 page('chapters','YOUR LISTENING JOURNEY','Choose the chapter you want to restore first. Three sound missions await in each.',art.clean);node('h1','Choose your chapter');node('p','Air, Water or Soil: choose where to begin. Complete three sound missions to restore each chapter.',app,'muted');
 const cards=node('div',null,app,'cards');let first;
 for(const c of data.chapters){const card=node('article',null,cards,'card'),img=node('img',null,card);img.src=asset(c.image);img.alt=c.title;node('p',`${state.levels[c.id]||0} / 3 missions restored`,card,'badge');node('h2',c.title,card);node('p',c.description,card,'muted');first??=null;const b=button(state.completed[c.id]?'Replay chapter':'Enter chapter',()=>chapterEntry(c),card,true);first??=b}
 const a=actions();if(allComplete(data.chapters,state.completed))button('Replay ending',ending,a);finishScreen(first);
}
function levelsScreen(){
 page('levels',chapter.title,'Choose a mission. Complete the previous mission to unlock the next.',art.clean);$('#world-dirty').src=asset(chapter.image);$('#world-dirty').style.opacity=String(1-(state.levels[chapter.id]||0)/3);node('h1',chapter.title);const cards=node('div',null,app,'cards');let first;
 for(const [i,level]of chapter.levels.entries()){const card=node('article',null,cards,'card');const unlocked=levelUnlocked(state.levels,chapter.id,i),done=(state.levels[chapter.id]||0)>i;node('p',`MISSION ${i+1} · ${done?'RESTORED':unlocked?'OPEN':'LOCKED'}`,card,'badge');node('h2',level.title,card);node('p','Compare three signals and locate the strongest pollution signal.',card,'muted');const b=button(done?'Replay mission':unlocked?'Start mission':`Finish Mission ${i} first`,()=>enterLevel(i),card,unlocked);b.disabled=!unlocked;if(unlocked&&!first)first=b}
 finishScreen(first);
}
function enterLevel(index){if(!levelUnlocked(state.levels,chapter.id,index))return;levelIndex=index;questionIndex=0;practiceTest=false;question=window.TerraMissions.create(chapter.id,index);showQuestion()}
function showQuestion(){
 submitted=false;const mission=question;page('question',chapter.title,'Listen to the three marked signals and fight the strongest one.',art.clean);$('#world-dirty').src=asset(chapter.image);$('#world-dirty').style.opacity=String(1-levelIndex/3);
 const card=node('section',null,app,'challenge-card guardian-card');node('p',`${chapter.title} · Mission ${levelIndex+1} of 3 · ${mission.title}`,card,'badge');
 const layout=node('div',null,card,'guardian-layout'),graphs=node('aside',null,layout,'panel guardian-graphs'),questionPanel=node('section',null,layout,'guardian-question');
 node('h2',mission.title,graphs);const mapHost=node('div',null,graphs),trendHost=node('div',null,graphs);node('p',`${mission.samples[0].date} · ${mission.units}`,graphs,'small muted');node('p','Circles 1–3 mark the signals on the map. The line shows global change since 2020.',graphs,'small');
 const legend=node('div',null,graphs,'map-legend');node('span','Lower',legend);const ramp=node('span',null,legend,'map-legend-bar');ramp.style.background=window.TerraMissions.legend(mission);node('span','Higher',legend);
 node('p',mission.source,graphs,'small muted');
 node('h1','Listen. Locate. Restore.',questionPanel);node('p',mission.prompt.replace('strongest pollution','strongest signal'),questionPanel,'lead');node('p',`Sound: ${mission.sound.name} · four seconds per signal. Compare clearly separated low, medium and high pitches and volumes. The instrument stays the same within this mission.`,questionPanel,'small muted');
 const tools=actions(questionPanel);const all={...mission.samples[0].series,values:mission.samples.map(sample=>sample.series.values[0]),labels:['1','2','3'],cueSeries:mission.samples.map(sample=>sample.series),times:[0,4.4,8.8],duration:13.1};
 function updateEvidence(index){mapHost.replaceChildren();trendHost.replaceChildren();window.TerraMissions.world(mapHost,mission,index);window.TerraMissions.trends(trendHost,mission)}
 const playAll=()=>{let active=-1;listen(all,time=>{const index=time<4.4?0:time<8.8?1:2;if(index!==active){active=index;updateEvidence(index)}})};
 button('Play all signals',playAll,tools,true);button('Stop sound',()=>stop(),tools);button('Replay',playAll,tools);
 const choiceRows=node('div',null,questionPanel,'mission-signal-rows'),buttons=[];
 mission.samples.forEach((sample,index)=>{const row=node('div',null,choiceRows,'mission-signal-row');button('Signal '+sample.label,()=>{updateEvidence(index);listen(sample.series)},row);const fight=button('Fight '+sample.label,()=>answer(index),row,true);fight.dataset.answer=String(index);buttons.push(fight)});
 const coach=node('section',null,questionPanel,'mission-coach'),portrait=node('img',null,coach);portrait.src=asset(art.sick);portrait.alt='Terra';const status=node('p','Terra is with you. Listen, compare, then choose a target.',coach,'mission-status');status.setAttribute('role','status');const reveal=node('div',null,questionPanel,'mission-results');reveal.hidden=true;
 const next=button('Continue',nextQuestion,questionPanel,true);next.disabled=true;const details=node('details',null,questionPanel);node('summary','About this layer',details);node('p',mission.note,details,'small');
 function answer(index){if(submitted||buttons[index].disabled)return;stop();if(index!==mission.answer){buttons[index].disabled=true;buttons[index].classList.add('wrong-target');status.textContent='Not that one. Listen again and compare the three marked signals. Try another target—Terra is with you.';say(status.textContent);return}submitted=true;buttons.forEach(button=>button.disabled=true);buttons[index].classList.add('correct-target');portrait.src=asset(art.healthy);status.textContent=mission.correctText+' '+mission.tip;status.classList.add('feedback');reveal.hidden=false;const change=mission.reference.change[mission.month];mission.samples.forEach((sample,i)=>node('p',`${sample.label}${i===index?' ✓':''} · ${sample.value.toPrecision(4)} ${mission.units} · ${change>=0?'+':''}${change.toFixed(1)}% global change vs 2020`,reveal,'small'));$('#world-dirty').style.opacity=String(1-(levelIndex+1)/3);next.disabled=false;next.focus();say(status.textContent)}
 showQuestion.answer=answer;updateEvidence(-1);finishScreen(tools.querySelector('button'));
}
function nextQuestion(){if(!submitted)return;state.levels[chapter.id]=Math.max(state.levels[chapter.id]||0,levelIndex+1);if(state.levels[chapter.id]===3)state.completed[chapter.id]=true;save();if(levelIndex<2){levelsScreen();return}if(allComplete(data.chapters,state.completed)){ending();return}story([{text:`You did it! You completed all three ${chapter.title.toLowerCase()} missions. This part of our world can breathe again. I'm proud of you.`,voice:''},{text:'Choose the next chapter you want to restore. Every careful choice brings us closer to a healthier home.',voice:''}],true,chapters)}
function ending(){story(data.ending,true,reward)}
function reward(){page('reward','A WORLD WORTH PROTECTING','All nine sound missions complete. Keep protecting our shared home.',art.clean);node('h1','You helped Terra restore her world.');node('p','Nine missions. Three chapters. A promise to care for our shared home.',app,'lead');const tips=node('section',null,app,'panel');node('h2','Take the mission into everyday life',tips);for(const tip of ['Put litter in the right bins—never in streets, rivers, or open ground.','Reduce waste, reuse what you can, and recycle responsibly.','Protect water, care for plants, and choose cleaner transport when possible.'])node('p',tip,tips);const a=actions();const first=button('Back to chapters',chapters,a,true);button('Replay story',opening,a);finishScreen(first)}
let modalCloseTimer=null,escCloseTimer=null,modalSnapshot=null,customMap='';
try{customMap=localStorage.getItem('terra_tone_map')||''}catch{}
function captureModalState(){if(modalSnapshot)return;modalSnapshot={version:screenVersion,running:!!playback?.running,frozen:screen==='story'?(story.isPaused?.()||false):false};setPlaybackSuspended(true);if(screen==='story')story.setPaused?.(true);window.TerraNarration.pause();if('speechSynthesis'in window)speechSynthesis.pause()}
function restoreModalState(){window.terraVoiceControl?.mount($('#settings-dialog').open?$('#settings-dialog'):$('#esc-dialog').open?$('#esc-dialog'):document.body);if($('#settings-dialog').open||$('#esc-dialog').open||!modalSnapshot)return;const snapshot=modalSnapshot;modalSnapshot=null;if(snapshot.version!==screenVersion)return;if(snapshot.running)setPlaybackSuspended(false);if(screen==='story')story.setPaused?.(snapshot.frozen);if(!snapshot.frozen){window.TerraNarration.resume();if('speechSynthesis'in window)speechSynthesis.resume()}}
function dismissSettings(){clearTimeout(modalCloseTimer);clearTimeout(escCloseTimer);modalCloseTimer=null;escCloseTimer=null;modalSnapshot=null;for(const id of ['#settings-dialog','#esc-dialog']){const d=$(id);if(d.open)d.close();d.classList.remove('is-open')}}
function toggleEscMenu(){window.terraVoiceControl?.cancel();const d=$('#esc-dialog');if(escCloseTimer){clearTimeout(escCloseTimer);escCloseTimer=null;d.classList.add('is-open');return}if(d.open){closeEscMenu();return}captureModalState();const body=$('#esc-body');body.replaceChildren();button('Continue',closeEscMenu,body,true);button('Settings',settings,body);button('Voice control',()=>window.terraVoiceControl.open(d),body);button('Back to Menu',backToMenu,body);d.showModal();window.terraVoiceControl?.mount(d);requestAnimationFrame(()=>{if(d.open&&!escCloseTimer)d.classList.add('is-open')})}
function closeEscMenu(){window.terraVoiceControl?.cancel();const d=$('#esc-dialog');if(!d.open||escCloseTimer)return;d.classList.remove('is-open');escCloseTimer=setTimeout(()=>{escCloseTimer=null;if(d.open)d.close()},state.settings.reduced?0:180)}
function settings(){
 window.terraVoiceControl?.cancel();
 const d=$('#settings-dialog');
 if(d.open){if(modalCloseTimer){clearTimeout(modalCloseTimer);modalCloseTimer=null;d.classList.add('is-open')}return}
 captureModalState();
 const body=$('#settings-body');body.replaceChildren();$('#settings-notice').textContent='';
 for(const[key,text]of [['guidance','Audio guidance'],['reduced','Reduced motion'],['instant','Show dialogue instantly']]){
  const label=node('label',text,body),input=node('input',null,label);input.type='checkbox';input.checked=!!state.settings[key];input.onchange=()=>{state.settings[key]=input.checked;app.classList.toggle('reduce',!!state.settings.reduced);document.body.classList.toggle('reduce',!!state.settings.reduced);if(!state.settings.guidance)stopSpeech();save()};
 }
 for(const[key,text]of [['narration','Narration'],['listening','Listening clips'],['ambience','Ambience (no track assigned)']]){
  const label=node('label',text,body),input=node('input',null,label);input.type='range';input.min=0;input.max=1;input.step=.05;input.value=state.settings[key];input.setAttribute('aria-label',text+' volume');input.oninput=()=>{state.settings[key]=Number(input.value);if(key==='narration')window.TerraNarration.setVolume(state.settings.narration);save()};
 }
 button('Voice control',()=>window.terraVoiceControl.open(d),body);
 const voiceLabel=node('label','Terra’s voice',body),voiceSelect=node('select',null,voiceLabel),naturalOption=node('option','Terra · Natural female voice',voiceSelect);naturalOption.value='natural';
 for(const voice of (window.speechSynthesis?.getVoices()||[]).filter(voice=>/^en/i.test(voice.lang))){const option=node('option','System: '+voice.name,voiceSelect);option.value=voice.name}
 voiceSelect.value=state.settings.voiceMode==='system'?state.settings.voiceName||'natural':'natural';
 const preview=()=>say('Hello. I’m Terra. Thank you for helping our shared home. Together, we can make our world brighter.',true);
 voiceSelect.onchange=()=>{state.settings.voiceMode=voiceSelect.value==='natural'?'natural':'system';if(state.settings.voiceMode==='system')state.settings.voiceName=voiceSelect.value;save();preview()};button('Hear Terra’s voice',preview,body);node('p','Natural female narration is included with the game. System voices are optional.',body,'small muted');

 const fs=button(document.fullscreenElement?'Exit Fullscreen':'Enter Fullscreen',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();fs.textContent=document.fullscreenElement?'Exit Fullscreen':'Enter Fullscreen'}catch{$('#settings-notice').textContent='Fullscreen is unavailable in this browser. You can continue in the window.'}},body);
 if(!document.fullscreenEnabled&&!document.fullscreenElement){fs.disabled=true;fs.textContent='Fullscreen unavailable'}
 const mapLabel=node('label','Practice reference map',body),file=node('input',null,mapLabel);file.type='file';file.accept='image/png,image/jpeg,image/webp';file.setAttribute('aria-label','Choose your practice map');file.onchange=()=>{
  const selected=file.files?.[0];if(!selected)return;if(!['image/png','image/jpeg','image/webp'].includes(selected.type)||selected.size>8*1024*1024){$('#settings-notice').textContent='Choose a PNG, JPG or WebP image smaller than 8 MB.';return}
  const reader=new FileReader();reader.onload=()=>{customMap=String(reader.result);try{localStorage.setItem('terra_tone_map',customMap)}catch{}$('#settings-notice').textContent='Your reference map is ready. Use Scan my reference image in Air Level 1.'};reader.onerror=()=>$('#settings-notice').textContent='The image could not be read. Please choose it again.';reader.readAsDataURL(selected);
 };
 if(customMap)button('Remove reference map',()=>{customMap='';try{localStorage.removeItem('terra_tone_map')}catch{}$('#settings-notice').textContent='The illustrative map will be used.'},body);
 d.showModal();window.terraVoiceControl?.mount(d);const openingVersion=screenVersion;requestAnimationFrame(()=>{if(d.open&&!modalCloseTimer&&screenVersion===openingVersion)d.classList.add('is-open')});
}
function closeSettings(){window.terraVoiceControl?.cancel();const d=$('#settings-dialog');if(!d.open||modalCloseTimer)return;d.classList.remove('is-open');modalCloseTimer=setTimeout(()=>{modalCloseTimer=null;if(d.open)d.close()},state.settings.reduced?0:180)}
function toggleSettings(){const d=$('#settings-dialog');if(modalCloseTimer){settings();return}if(d.open)closeSettings();else settings()}
$('#settings-dialog').addEventListener('close',restoreModalState);$('#esc-dialog').addEventListener('close',restoreModalState);$('#esc-dialog').addEventListener('cancel',event=>{event.preventDefault();closeEscMenu()});
$('#settings-dialog').addEventListener('cancel',event=>{event.preventDefault();closeSettings()});
$('#close-settings').onclick=closeSettings;$('#chapters').onclick=()=>{story.cancel?.();chapters()};$('#menu-return').onclick=toggleEscMenu;$('#brand-link').onclick=event=>{event.preventDefault();backToMenu()};
document.addEventListener('focusin',event=>{if(event.target.matches('button,a,input,summary')&&state.settings.guidance&&!playback?.running&&!window.speechSynthesis?.speaking&&!window.TerraNarration.speaking)say(event.target.getAttribute('aria-label')||event.target.textContent)});
document.addEventListener('pointerdown',()=>{userInteracted=true},{once:true});
document.addEventListener('keydown',event=>{
 userInteracted=true;
 if(event.ctrlKey||event.metaKey||event.altKey)return;
 if(event.key==='F1'){event.preventDefault();if(!event.repeat)toggleSettings();return}
 if($('#settings-dialog').open){if(event.key==='Escape'){event.preventDefault();closeSettings()}return}
 if(event.target.matches('input,textarea,select'))return;
 if(event.key==='Escape'){event.preventDefault();toggleEscMenu();return}
 if(screen==='menu'&&['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
  event.preventDefault();const list=[...app.querySelectorAll('.menu-item')],active=list.indexOf(document.activeElement),direction=['ArrowDown','ArrowRight'].includes(event.key)?1:-1;
  const next=event.key==='Home'?0:event.key==='End'?list.length-1:((active<0?(direction>0?-1:0):active)+direction+list.length)%list.length;list[next]?.focus();return;
 }
 if(event.key.toLowerCase()==='r'){event.preventDefault();readInstructions()}
 if(screen==='question'&&['a','b','c','1','2','3'].includes(event.key.toLowerCase())){event.preventDefault();showQuestion.answer?.('123'.includes(event.key)?Number(event.key)-1:['a','b','c'].indexOf(event.key.toLowerCase()))}
});
function voiceCommand(command){
 const modal=$('#settings-dialog').open?$('#settings-dialog'):$('#esc-dialog').open?$('#esc-dialog'):null;
 if(command==='menu'){if($('#settings-dialog').open)closeSettings();else toggleEscMenu();return true}
 if(command==='settings'){toggleSettings();return true}
 if(command==='stop'){stop();return true}
 const scope=modal||app,buttons=[...scope.querySelectorAll('button')].filter(b=>!b.disabled&&!b.hidden);
 const names={continue:['Continue'],skip:['Skip','Skip to Terra →','Skip sequence →'],repeat:['Repeat','Replay','Repeat opening','Replay image'],play:['Play all signals','Play values','Play sequence','Scan image'],scan:['Scan map → sound'],image:['Scan image'],start:['Start Game'],low:['Low reference'],high:['High reference'],sampleA:['Signal 1','Listen A','Sample A'],sampleB:['Signal 2','Listen B','Sample B'],sampleC:['Signal 3','Listen C'],largerA:['Sample A is larger'],largerB:['Sample B is larger']};
 let target;if(['a','b','c'].includes(command))target=buttons.find(b=>b.dataset.answer===String(['a','b','c'].indexOf(command))||b.textContent.startsWith(command.toUpperCase()+' · '));else target=buttons.find(b=>names[command]?.includes(b.textContent));
 if(!target)return false;target.click();return true;
}
window.terraVoiceControl=window.TerraVoice.init({
 beforeListen(){unlockAudio();const snapshot={version:screenVersion,playback,running:playback?.running,storyPaused:screen==='story'?story.isPaused?.():undefined};stopSpeech();if(snapshot.running)setPlaybackSuspended(true);if(screen==='story')story.setPaused?.(true);return snapshot},
 afterListen(snapshot){if(snapshot.version!==screenVersion)return;if(snapshot.storyPaused!==undefined)story.setPaused?.(snapshot.storyPaused);if(snapshot.playback===playback&&snapshot.running&&!$('#settings-dialog').open&&!$('#esc-dialog').open)setPlaybackSuspended(false)},
 isCurrent:snapshot=>snapshot.version===screenVersion,execute:voiceCommand
});
function boot(){
 try{data=window.TERRA_CONTENT;for(const c of data.chapters)c.levels=window.TERRA_LEVELS[c.id];validateContent(data);document.body.classList.toggle('reduce',!!state.settings.reduced);const view=new URLSearchParams(location.search).get('view');if(view==='learning')learning();else start();
  const intro=$('#loading-screen');intro.classList.add('loaded');setTimeout(()=>intro.remove(),state.settings.reduced?0:350);setTimeout(()=>$('#settings-hint')?.classList.add('hint-hidden'),7000);
 }catch(error){app.replaceChildren();node('h1','Terra Tone could not start');node('p',error.message);$('#loading-screen')?.remove();button('Try again',()=>location.reload())}
}
setTimeout(boot,state.settings.reduced?80:650);
})();

(()=>{'use strict';
// Pre-rendered female neural voice; word timestamps let the same recording follow responsive dialogue pages.
const lines=window.TERRA_VOICE_LINES?.entries||[],normal=text=>String(text).replace(/[‘’]/g,"'").replace(/\s+/g,' ').trim().toLowerCase();
const player=typeof Audio==='function'?new Audio():null;let current=null,timer=null;const preloads=new Map();
if(player)player.preload='auto';
function find(text){const key=normal(text);if(!key)return null;const exact=lines.find(entry=>entry.key===key);if(exact)return {entry:exact,start:0,end:exact.duration};
 for(const entry of lines){let offset=entry.key.indexOf(key);while(offset>=0){const end=offset+key.length,before=entry.key[offset-1]||'',after=entry.key[end]||'';if(!/[\p{L}\p{N}']/u.test(before)&&!/[\p{L}\p{N}']/u.test(after)){
   const words=entry.words.filter(word=>word[1]>offset&&word[0]<end);if(words.length)return {entry,start:words[0]===entry.words[0]?0:Math.max(0,words[0][2]-.025),end:words.at(-1)===entry.words.at(-1)?entry.duration:Math.min(entry.duration,words.at(-1)[3]+.045)};
  }offset=entry.key.indexOf(key,offset+1)}
 }return null;
}
function clear(){clearTimeout(timer);timer=null}
function stop(){clear();current=null;if(player)player.pause()}
function speak(text,{volume=.85}={}){const match=find(text);if(!player||!match)return null;stop();const handle={onend:null,onerror:null},session={handle,match,paused:false};current=session;
 const live=()=>current===session;
 function finish(error){if(!live())return;current=null;clear();player.pause();if(error)setTimeout(()=>handle.onerror?.(error),0);else handle.onend?.()}
 function schedule(){clear();if(!live()||session.paused||player.paused||player.readyState<2)return;const left=match.end-player.currentTime;if(left<=0){finish();return}timer=setTimeout(()=>{if(live()){if(player.currentTime>=match.end-.04)finish();else schedule()}},Math.max(10,left*1000))}
 const failed=error=>{if(!live()||session.paused||error?.name==='AbortError')return;const status=document.getElementById('save-status');if(status)status.textContent=error?.name==='NotAllowedError'?'To enable Terra’s voice, open Settings and choose Hear Terra’s voice.':'Terra’s voice could not load. Text and game controls remain available.';finish(error||new Error('Narration unavailable'))};
 player.onloadedmetadata=()=>{if(!live())return;try{player.currentTime=match.start}catch{};schedule()};player.onseeked=schedule;player.onplaying=()=>{const status=document.getElementById('save-status');if(status&&(status.textContent.startsWith('To enable Terra’s voice')||status.textContent.startsWith('Terra’s voice could not load')))status.textContent='';schedule()};player.onpause=clear;player.onwaiting=clear;player.ontimeupdate=()=>{if(live()&&player.currentTime>=match.end)finish()};player.onended=()=>finish();player.onerror=failed;
 player.volume=Math.max(0,Math.min(1,volume));player.src=match.entry.src;try{player.currentTime=match.start}catch{}try{player.play()?.catch(failed)}catch(error){failed(error)}
 session.resume=()=>{if(!live()||!session.paused)return;session.paused=false;try{player.play()?.catch(failed)}catch(error){failed(error)}};
 return handle;
}
function pause(){if(current){current.paused=true;clear();player.pause()}}
function resume(){current?.resume()}
function preload(texts){if(!player)return;for(const text of texts){const match=find(text);if(!match||preloads.has(match.entry.src))continue;const audio=new Audio();audio.preload='auto';audio.src=match.entry.src;audio.load();preloads.set(match.entry.src,audio);if(preloads.size>24){const first=preloads.keys().next().value;preloads.get(first).preload='none';preloads.delete(first)}}}
function plan(base,captions,sequence,enabled){const count=sequence?sequence.length-1:0,fade=sequence?base*.75/count:0;const holds=sequence?[base*.15,...Array(count-1).fill(fade),base-base*.15-(count-1)*fade]:[base*.23,base*.59,base*.18];
 if(enabled&&player)holds.forEach((hold,i)=>{const match=find(captions[i]);if(match)holds[i]=Math.max(hold,match.end-match.start+.35)});
 const starts=[];let duration=0;for(const hold of holds){starts.push(duration);duration+=hold}return {holds,starts,duration,fade};
}
window.TerraNarration={speak,stop,pause,resume,preload,plan,find,get available(){return !!player},get speaking(){return !!current},setVolume(value){if(player)player.volume=Math.max(0,Math.min(1,value))}};
})();

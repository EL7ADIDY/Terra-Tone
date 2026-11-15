(()=>{'use strict';
const normalize=text=>String(text).toLowerCase().normalize('NFKC').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/[\u064B-\u065Fـ]/g,'').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim().replace(/^(please |من فضلك )/,'');
const phrases={
 continue:['continue','next','كمل','اكمل','التالي','متابعة'],skip:['skip','تخطي'],repeat:['repeat','replay','كرر','اعادة'],
 play:['play','play sound','شغل','شغل الصوت'],stop:['stop sound','stop audio','وقف الصوت'],scan:['scan map','امسح الخريطة'],image:['scan image','امسح الصورة'],
 a:['fight 1','fight one','answer 1','حارب 1','حارب ١','حارب واحد','answer a','a','option a','اجابة ا','الاجابة ا'],b:['fight 2','fight two','answer 2','حارب 2','حارب ٢','حارب اتنين','answer b','answer bee','bee','b','option b','اجابة ب','الاجابة ب'],c:['fight 3','fight three','answer 3','حارب 3','حارب ٣','حارب تلاتة','answer c','answer see','c','option c','اجابة ج','الاجابة ج'],
 menu:['menu','escape','esc','القائمة'],settings:['settings','الاعدادات'],start:['start game','ابدأ اللعبة','ابدا اللعبة'],
 low:['low reference','الصوت المنخفض'],high:['high reference','الصوت المرتفع'],sampleA:['signal 1','signal one','اشارة 1','اشارة ١','اسمع واحد','sample a','listen a','العينة ا','اسمع ا'],sampleB:['signal 2','signal two','اشارة 2','اشارة ٢','اسمع اتنين','sample b','listen b','العينة ب','اسمع ب'],sampleC:['signal 3','signal three','اشارة 3','اشارة ٣','اسمع تلاتة','sample c','listen c','العينة ج','اسمع ج'],
 largerA:['sample a is larger','العينة ا اكبر'],largerB:['sample b is larger','العينة ب اكبر']
};
const lookup=new Map(Object.entries(phrases).flatMap(([key,values])=>values.map(v=>[normalize(v),key])));
function init(bridge){
 const $=id=>document.getElementById(id),panel=$('voice-panel'),toggle=$('voice-toggle'),start=$('voice-start'),stop=$('voice-stop'),status=$('voice-status'),language=$('voice-language');
 const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
 let session=null;
 const message=text=>status.textContent=text;
 const controls=active=>{start.disabled=active||!Recognition;stop.disabled=!active;language.disabled=active;start.textContent=active?'Listening…':'Listen for command'};
 function cancel(){if(!session)return;session.pending=null;session.cancelled=true;session.recognition.abort();session?.finish?.()}
 function mount(host){if(panel.parentNode!==host)host.append(panel)}
 function open(host=document.body){mount(host);panel.hidden=false;toggle.setAttribute('aria-expanded','true');start.focus()}
 function close(){cancel();panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.focus()}
 toggle.onclick=()=>{if(!panel.hidden){close();return}open()};$('voice-close').onclick=close;
 stop.onclick=()=>{cancel();message('Microphone stopped. Tap Listen for another command.')};
 start.onclick=()=>{
  if(session||!Recognition)return;
  const recognition=new Recognition(),s={recognition,snapshot:bridge.beforeListen(),pending:null,cancelled:false,error:false};session=s;
  recognition.lang=language.value||'en-US';recognition.continuous=false;recognition.interimResults=false;recognition.maxAlternatives=1;
  controls(true);message('Listening for one command…');
  const finish=()=>{if(session!==s)return;session=null;controls(false);if(s.cancelled||s.error){bridge.afterListen(s.snapshot);return;}
   if(!s.pending){bridge.afterListen(s.snapshot);message('No command heard. Tap Listen and try again.');return}
   if(!bridge.isCurrent(s.snapshot)){bridge.afterListen(s.snapshot);message('The page changed. Listen again on this screen.');return}
   const command=lookup.get(normalize(s.pending));if(!command){bridge.afterListen(s.snapshot);message(`Heard “${s.pending}”. Try Continue, Skip, Repeat, Scan map or Answer A/B/C.`);return}
   const modal=command==='menu'||command==='settings';if(modal)bridge.afterListen(s.snapshot);const ok=bridge.execute(command);if(!modal)bridge.afterListen(s.snapshot);message(`Heard “${s.pending}”. ${ok?'Command applied.':'That command is unavailable here. Complete the current step first.'}`);
  };
  recognition.onresult=event=>{for(let i=event.resultIndex||0;i<event.results.length;i++){const result=event.results[i];if(result.isFinal&&!s.pending&&!s.cancelled)s.pending=result[0].transcript}if(s.pending)recognition.stop()};
  recognition.onerror=event=>{s.error=true;const hints={'not-allowed':'Microphone permission was denied. Allow it in your browser, then tap Listen.','service-not-allowed':'Speech recognition is unavailable in this browser. Try Chrome or Edge.','audio-capture':'No microphone is available. Check the device connection.','network':'Recognition service could not connect. Check your internet connection.','no-speech':'No speech detected. Tap Listen to try again.','language-not-supported':'This recognition service does not support the selected language.'};message(hints[event.error]||'Recognition stopped. Tap Listen to try again.');finish()};
  recognition.onend=finish;s.finish=finish;
  try{recognition.start()}catch{ s.error=true;message('Could not start the microphone. Check browser support and permission.');finish() }
 };
 controls(false);if(!Recognition)message('SpeechRecognition is unsupported here. Try current Chrome or Edge. All mouse and keyboard controls still work.');
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel()});
 return {cancel,mount,open};
}
window.TerraVoice={init,normalize,command:text=>lookup.get(normalize(text))};
})();

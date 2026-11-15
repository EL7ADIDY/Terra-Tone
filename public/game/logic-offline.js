(()=>{'use strict';
function allComplete(chapters,completed){return chapters.length>0&&chapters.every(c=>completed[c.id]===true)}
function evidence(question,index){return {correct:index===question.answer,text:`Answer ${String.fromCharCode(65+question.answer)}: ${question.options[question.answer]}. ${question.explanation}`}}
function levelUnlocked(levels,id,index){return Number.isInteger(index)&&index>=0&&index<3&&(index===0||(levels[id]||0)>=index)}
function validateContent(data){if(data.chapters.length!==3)throw Error('Expected three chapters');for(const c of data.chapters){if(c.levels?.length!==3)throw Error('Expected three levels');for(const level of c.levels){if(level.questions.length!==3)throw Error('Expected three questions per level');for(const q of level.questions){if(q.options.length!==3||!Number.isInteger(q.answer)||q.answer<0||q.answer>2)throw Error('Invalid question')}if(level.questions[2].prompt!=='How can we solve this problem?')throw Error('Missing solution question')}}return true}

// Wrap using the actual font metrics, then split at complete visible lines.
function paginateDialogue(text,width,height,lineHeight,measure){
 const maxLines=Math.max(1,Math.floor(height/lineHeight)),lines=[];
 let line='';
 const push=()=>{lines.push(line);line=''};
 for(const paragraph of String(text).split('\n')){
  if(line)push();
  for(let word of paragraph.split(/\s+/).filter(Boolean)){
   if(measure(word)>width){
    if(line)push();let fragment='';
    for(const char of word){if(fragment&&measure(fragment+char)>width){lines.push(fragment);fragment=''}fragment+=char}line=fragment;continue;
   }
   const candidate=line?line+' '+word:word;
   if(line&&measure(candidate)>width)push();line=line?line+' '+word:word;
  }
  push();
 }
 if(!lines.length)lines.push('');
 const pages=[];for(let i=0;i<lines.length;i+=maxLines)pages.push(lines.slice(i,i+maxLines).join('\n'));
 return pages;
}

window.TerraLogic={allComplete,evidence,validateContent,paginateDialogue,levelUnlocked};
})();

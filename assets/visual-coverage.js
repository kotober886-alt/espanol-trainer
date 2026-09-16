(function(){
  'use strict';

  function safeArray(value){ return Array.isArray(value) ? value : []; }
  function unique(values){
    const seen={};
    return safeArray(values).filter(function(value){
      const key=String(value || '').trim().toLowerCase();
      if(!key || seen[key]) return false;
      seen[key]=true;
      return true;
    });
  }
  function stripArticles(value){
    return String(value || '').replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,'').trim();
  }
  function artKey(word){ return word.art || word.kind || word.image || word.icon || word.id; }
  function artFor(topic,word){
    const key=artKey(word);
    try {
      if(topic==='foods' && typeof window.foodArt==='function') return window.foodArt(key);
      if(topic==='clothes' && typeof window.clothingArt==='function') return window.clothingArt(key);
      if(topic==='activities' && typeof window.activityArt==='function') return window.activityArt(key);
    } catch(e){}
    return '';
  }
  function acceptedAnswers(word){
    return unique(safeArray(word.answers).concat([word.word,stripArticles(word.word)]));
  }
  function makeVisualTask(topic,word){
    const html=artFor(topic,word);
    if(!html) return null;
    const answers=acceptedAnswers(word);
    if(!answers.length) return null;
    return {
      id:'visual_'+topic+'_'+word.id,
      originalId:(topic==='foods'?'food_':topic==='clothes'?'clothes_':'activity_')+word.id+'_es',
      topic:topic,
      foodCat:word.cat || 'all',
      type:'picture-label',
      skill:'Картинка → слово',
      q:'Что изображено? Напиши по-испански.',
      pictureHint:'Посмотри на картинку и напиши название по-испански. Артикль можно не писать.',
      pictureHtml:html,
      pictureLabels:[{
        side:'left',top:50,markerX:50,markerY:50,
        reveal:word.word,
        answers:answers
      }],
      a:[word.word],
      displayAnswer:word.word,
      e:word.word+' — '+(word.tr || '')+'.'
    };
  }

  function visualVocabularyExercises(){
    const groups=[];
    try { if(typeof FOOD_WORDS!=='undefined') groups.push(['foods',FOOD_WORDS]); } catch(e){}
    try { if(typeof CLOTHING_WORDS!=='undefined') groups.push(['clothes',CLOTHING_WORDS]); } catch(e){}
    try { if(typeof ACTIVITY_WORDS!=='undefined') groups.push(['activities',ACTIVITY_WORDS]); } catch(e){}
    const result=[];
    groups.forEach(function(group){
      safeArray(group[1]).forEach(function(word){
        const task=makeVisualTask(group[0],word);
        if(task) result.push(task);
      });
    });
    return result;
  }

  var basePictureLabelExercises=null;
  try { if(typeof pictureLabelExercises==='function') basePictureLabelExercises=pictureLabelExercises; } catch(e){}
  if(basePictureLabelExercises){
    pictureLabelExercises=function(){
      const existing=basePictureLabelExercises();
      const ids={};
      existing.forEach(function(item){ ids[item.id]=true; });
      return existing.concat(visualVocabularyExercises().filter(function(item){return !ids[item.id];}));
    };
  }

  var baseSetupExercise=null;
  try { if(typeof setupExercise==='function') baseSetupExercise=setupExercise; } catch(e){}
  if(baseSetupExercise){
    setupExercise=function(item){
      if(!item || item.type!=='picture-label' || !item.pictureHtml) return baseSetupExercise(item);
      resetCard();
      els.answerInput.hidden=true;
      els.answerLabel.hidden=true;
      els.pictureWidget.hidden=false;
      els.pictureHelp.textContent=item.pictureHint || 'Посмотри на картинку и подпиши её по-испански.';
      const labels=item.pictureLabels || [];
      const fields=labels.map(function(label,i){
        return '<label class="picture-field"><span>'+(i+1)+'</span><input data-picture-input="'+i+'" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Подпись '+(i+1)+'" placeholder="По-испански"></label>';
      }).join('');
      els.pictureStage.innerHTML='<div class="picture-visual visual-single-art">'+item.pictureHtml+'</div><div class="picture-fields">'+fields+'</div>';
      els.pictureStage.querySelectorAll('[data-picture-input]').forEach(function(input){
        input.addEventListener('keydown',function(event){ if(event.key==='Enter'){ event.preventDefault(); checkAnswer(); } });
      });
      const first=els.pictureStage.querySelector('[data-picture-input]');
      if(first) first.focus();
    };
  }

  function coverageAudit(){
    const tasks=visualVocabularyExercises();
    const topics=['foods','clothes','activities'];
    const source={};
    try { source.foods=typeof FOOD_WORDS!=='undefined' ? FOOD_WORDS : []; } catch(e){ source.foods=[]; }
    try { source.clothes=typeof CLOTHING_WORDS!=='undefined' ? CLOTHING_WORDS : []; } catch(e){ source.clothes=[]; }
    try { source.activities=typeof ACTIVITY_WORDS!=='undefined' ? ACTIVITY_WORDS : []; } catch(e){ source.activities=[]; }
    const report={};
    topics.forEach(function(topic){
      const total=safeArray(source[topic]).length;
      const covered=tasks.filter(function(task){return task.topic===topic;}).length;
      report[topic]={total:total,covered:covered,percent:total ? Math.round(covered/total*100) : 0};
    });
    report.overall=(function(){
      const total=topics.reduce(function(sum,topic){return sum+report[topic].total;},0);
      const covered=topics.reduce(function(sum,topic){return sum+report[topic].covered;},0);
      return {total:total,covered:covered,percent:total ? Math.round(covered/total*100) : 0};
    })();
    return report;
  }
  window.visualCoverageAudit=coverageAudit;

  var style=document.createElement('style');
  style.textContent='\n.visual-single-art{min-height:260px;display:grid;place-items:center;padding:18px;background:#fffdf8;overflow:hidden}.visual-single-art .generated-sprite{width:min(100%,420px);aspect-ratio:1/1;background-repeat:no-repeat}.visual-single-art+.picture-fields{max-width:520px;margin-inline:auto}@media(max-width:520px){.visual-single-art{min-height:190px;padding:10px}.visual-single-art .generated-sprite{width:min(100%,300px)}}\n';
  document.head.appendChild(style);
})();

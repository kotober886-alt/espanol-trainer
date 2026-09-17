(function(){
  'use strict';

  function clean(v){ return String(v==null?'':v).trim().replace(/\s+/g,' '); }
  function norm(v){ return clean(v).toLowerCase().replace(/[¡!¿?.,;:«»“”"'’]/g,'').replace(/\s+/g,' ').trim(); }
  function indexById(list){ const out={}; (Array.isArray(list)?list:[]).forEach(function(x){ if(x&&x.id) out[x.id]=x; }); return out; }
  function firstAnswer(src){ return src && Array.isArray(src.clozeAnswers) ? clean(src.clozeAnswers[0]||'') : ''; }
  function complete(src){ return src&&src.cloze ? clean(String(src.cloze).replace('___',firstAnswer(src))) : ''; }
  function exactTranslation(src,completed){
    if(!src || !Array.isArray(src.examples) || !completed) return '';
    const target=norm(completed);
    for(let i=0;i<src.examples.length;i++){
      const p=src.examples[i];
      if(Array.isArray(p) && norm(p[0])===target) return clean(p[1]);
    }
    return '';
  }

  function sourceMaps(){
    const maps={};
    try{maps.verbs=indexById(VERB_WORDS);}catch(e){}
    try{maps.present=indexById(PRESENT_WORDS);}catch(e){}
    try{maps.questions=indexById(QUESTION_WORDS);}catch(e){}
    try{maps.constructions=indexById(CONSTRUCTION_WORDS);}catch(e){}
    try{maps.gustar=indexById(GUSTAR_WORDS);}catch(e){}
    try{maps.agreement=indexById(AGREEMENT_WORDS);}catch(e){}
    try{maps.prepositions=indexById(PREPOSITION_WORDS);}catch(e){}
    try{maps.connectors=indexById(CONNECTOR_WORDS);}catch(e){}
    try{maps.past=indexById(PAST_WORDS);}catch(e){}
    try{maps.routine=indexById(ROUTINE_WORDS);}catch(e){}
    try{maps.calendar=indexById(CALENDAR_WORDS);}catch(e){}
    try{maps.practical=indexById(PRACTICAL_WORDS);}catch(e){}
    try{maps.city=indexById(CITY_WORDS);}catch(e){}
    try{maps.foods=indexById(FOOD_WORDS);}catch(e){}
    try{maps.clothes=indexById(CLOTHING_WORDS);}catch(e){}
    try{maps.activities=indexById(ACTIVITY_WORDS);}catch(e){}
    return maps;
  }

  function resolveContextSource(item,maps){
    const id=String(item&&item.id||''); let m;
    if((m=id.match(/^study_([^_]+)_(.+)_ctx$/))) return maps[m[1]] && maps[m[1]][m[2]];
    if((m=id.match(/^food_(.+)_ctx$/))) return maps.foods && maps.foods[m[1]];
    if((m=id.match(/^clothes_(.+)_ctx$/))) return maps.clothes && maps.clothes[m[1]];
    if((m=id.match(/^activity_(.+)_ctx$/))) return maps.activities && maps.activities[m[1]];
    return null;
  }

  function sanitizeContext(item,maps){
    if(!item || !/_ctx$/.test(String(item.id||''))) return item;
    const src=resolveContextSource(item,maps);
    if(!src || !src.cloze) return item;
    const done=complete(src);
    const tr=exactTranslation(src,done);
    let label='пропущенную часть';
    if(/^food_/.test(item.id)||/^clothes_/.test(item.id)) label='пропущенное слово';
    if(/^activity_/.test(item.id)) label='пропущенное выражение';
    item.q='Вставь '+label+' в предложение: '+clean(src.cloze);
    item.e=done ? 'Правильное предложение: '+done+(tr?' — '+tr:'') : '';
    return item;
  }

  const BLOCKED_VISUAL_IDS={
    visual_foods_lentils:1,visual_foods_beans:1,visual_foods_wine:1,visual_foods_beer:1,
    visual_foods_mussels:1,visual_foods_squid:1,visual_foods_octopus:1,visual_foods_seafood:1,
    visual_activities_shopping:1,visual_activities_fish:1
  };
  const HIDE_STUDY_ART_IDS={lentils:1,beans:1,wine:1,beer:1,mussels:1,squid:1,octopus:1,seafood:1,shopping:1,fish:1};

  try{
    if(typeof allExercises==='function'){
      const baseAll=allExercises;
      allExercises=function(){
        const maps=sourceMaps();
        return baseAll().filter(function(item){ return !BLOCKED_VISUAL_IDS[String(item&&item.id||'')]; })
          .map(function(item){ return sanitizeContext(item,maps); });
      };
    }
  }catch(e){}

  try{
    if(typeof studyArt==='function'){
      const baseStudyArt=studyArt;
      studyArt=function(word){
        if(word && HIDE_STUDY_ART_IDS[word.id]) return '';
        return baseStudyArt(word);
      };
    }
  }catch(e){}

  try{
    if(typeof filteredExercises==='function'){
      const baseFiltered=filteredExercises;
      filteredExercises=function(){
        if(selectedMode!=='tests' && selectedMode!=='pictures') return baseFiltered();
        const mode=selectedMode;
        selectedMode='all';
        let items=baseFiltered();
        selectedMode=mode;
        if(mode==='pictures') return items.filter(function(x){return x&&x.type==='picture-label';});
        return items.filter(function(x){return x&&['choice','context-choice','match','category-sort'].indexOf(x.type)>=0;});
      };
    }
  }catch(e){}

  function installPicturesButton(){
    const row=document.querySelector('.focus-options');
    if(!row || row.querySelector('[data-session-mode="pictures"]')) return;
    const btn=document.createElement('button');
    btn.className='focus-option'; btn.type='button'; btn.dataset.sessionMode='pictures'; btn.textContent='Картинки';
    const audio=row.querySelector('[data-session-mode="audio"]');
    if(audio) row.insertBefore(btn,audio); else row.appendChild(btn);
    btn.addEventListener('click',function(){
      try{ selectedMode='pictures'; }catch(e){}
      row.querySelectorAll('[data-session-mode]').forEach(function(x){x.classList.toggle('active',x===btn);});
    });
  }

  try{
    if(typeof openSessionDialog==='function'){
      const baseOpen=openSessionDialog;
      openSessionDialog=function(topic){
        const wanted=selectedMode;
        if(wanted==='pictures') selectedMode='all';
        baseOpen(topic);
        if(wanted==='pictures'){
          selectedMode='pictures';
          document.querySelectorAll('[data-session-mode]').forEach(function(x){x.classList.toggle('active',x.dataset.sessionMode==='pictures');});
        }
      };
    }
  }catch(e){}

  installPicturesButton();
  document.addEventListener('DOMContentLoaded',installPicturesButton);

  const style=document.createElement('style');
  style.textContent='\n.visual-single-art{aspect-ratio:auto!important;width:min(360px,100%)!important;height:220px!important;min-height:0!important;margin:0 auto 12px!important;padding:8px!important;background:#fffdf8!important}.visual-single-art .generated-sprite{width:190px!important;max-width:72%!important;aspect-ratio:1/1!important}.visual-single-art .food-svg,.visual-single-art .precise-art{width:180px!important;max-height:190px!important}@media(max-width:520px){.visual-single-art{width:min(290px,100%)!important;height:165px!important;padding:4px!important;border-radius:16px!important}.visual-single-art .generated-sprite{width:140px!important;max-width:70%!important}.visual-single-art .food-svg,.visual-single-art .precise-art{width:135px!important;max-height:145px!important}}\n';
  document.head.appendChild(style);

  function installAnimalsCardArt(){
    try{
      if(typeof renderStudy==='function' && !renderStudy.__animalsArtFinal){
        const baseRenderStudy=renderStudy;
        const patched=function(){
          baseRenderStudy();
          try{
            if(selectedTopic==='animals'){
              const words=currentFoodWords();
              const word=words[wordIndex];
              els.studyCard.classList.remove('no-art');
              els.foodArt.style.display='grid';
              if(word && typeof animalArt==='function') els.foodArt.innerHTML=animalArt(word.art || word.id);
            }
          }catch(e){}
        };
        patched.__animalsArtFinal=true;
        renderStudy=patched;
      }
    }catch(e){}
  }

  function loadAnimalRasterFix(){
    const old=document.querySelector('script[data-animals-card-art-fix]');
    if(old) old.remove();
    const fix=document.createElement('script');
    fix.src='assets/animals-card-art-fix.js?v=20260917-individual2';
    fix.dataset.animalsCardArtFix='1';
    fix.onload=function(){
      installAnimalsCardArt();
      try{ if(selectedTopic==='animals' && foodPhase==='study') renderStudy(); }catch(e){}
    };
    document.body.appendChild(fix);
  }

  const oldAnimals=document.querySelector('script[data-animals-topic]');
  if(oldAnimals) oldAnimals.remove();
  const animalsScript=document.createElement('script');
  animalsScript.src='assets/animals-topic.js?v=20260917-final1';
  animalsScript.dataset.animalsTopic='1';
  animalsScript.onload=loadAnimalRasterFix;
  document.body.appendChild(animalsScript);

  function loadAnswerTranslations(){
    const old=document.querySelector('script[data-answer-translations]');
    if(old) old.remove();
    const script=document.createElement('script');
    script.src='assets/answer-translations.js?v=20260917-answertranslations2';
    script.dataset.answerTranslations='1';
    script.onload=function(){
      const oldRefine=document.querySelector('script[data-answer-translations-refine]');
      if(oldRefine) oldRefine.remove();
      const refine=document.createElement('script');
      refine.src='assets/answer-translations-refine.js?v=20260917-answertranslations3';
      refine.dataset.answerTranslationsRefine='1';
      document.body.appendChild(refine);
    };
    document.body.appendChild(script);
  }
  loadAnswerTranslations();

  function loadOutfitPictureCallouts(){
    const old=document.querySelector('script[data-outfit-picture-callouts]');
    if(old) old.remove();
    const script=document.createElement('script');
    script.src='assets/outfit-picture-callouts.js?v=20260917-callouts5';
    script.dataset.outfitPictureCallouts='1';
    document.body.appendChild(script);
  }
  loadOutfitPictureCallouts();
})();

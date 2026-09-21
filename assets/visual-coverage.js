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

  /*
   * Visual quality policy for clothes:
   * standalone picture tasks and outfit callouts are reserved for large,
   * clearly readable objects. Small accessories and jewellery stay in text/audio
   * practice so the learner is never asked to identify a tiny stretched sprite.
   */
  const NO_VISUAL_CLOTHING_CATEGORIES={accessories:true,jewelry:true,tryon:true};
  function clothingVisualAllowed(word){
    if(!word) return true;
    if(NO_VISUAL_CLOTHING_CATEGORIES[String(word.cat || '').toLowerCase()]) return false;
    const grammar=String(word.gender || '').toLowerCase();
    return !/глагол|действи|фраза|выражени|сочетани|конструкци/.test(grammar);
  }
  function noVisualClothingBases(){
    const result=[];
    try {
      safeArray(CLOTHING_WORDS).forEach(function(word){
        if(!clothingVisualAllowed(word)){
          const base=stripArticles(word.base || word.word || '').toLowerCase();
          if(base) result.push(base);
        }
      });
    } catch(e){}
    return unique(result);
  }
  function labelUsesSmallAccessory(label){
    const text=stripArticles(label && (label.reveal || label.answer || '')).toLowerCase();
    if(!text) return false;
    return noVisualClothingBases().some(function(base){
      return text===base || text.indexOf(base+' ')===0;
    });
  }
  function keepLargeClothingLabels(item){
    if(!item || item.topic!=='clothes' || String(item.pictureScene || '').indexOf('clothes_')!==0) return item;
    const original=safeArray(item.pictureLabels);
    if(!original.length) return item;
    const kept=[];
    original.forEach(function(label,index){
      label.outfitIndex=index;
      if(!labelUsesSmallAccessory(label)) kept.push(label);
    });
    if(!kept.length) return null;
    item.pictureLabels=kept;
    item.a=[kept.map(function(label){return label.reveal;}).join(' | ')];
    item.displayAnswer=kept.map(function(label,index){return (index+1)+'. '+label.reveal;}).join(' · ');
    item.pictureHint=String(item.pictureHint || '')
      .replace(/Назови пять отмеченных предметов/gi,'Назови отмеченные предметы')
      .replace(/пять отмеченных предметов/gi,'отмеченные предметы');
    return item;
  }

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

  /*
   * Methodical rule: a picture may support learning an action, but it must not
   * be used as a direct "picture -> word" guessing task. Actions/verbs are
   * practised through translation, matching and contextual cloze exercises.
   */
  const ACTION_VISUAL_TOPICS={
    activities:true,chores:true,verbs:true,present:true,routine:true,
    constructions:true,gustar:true,past:true
  };
  function isActionLexeme(topic,word){
    if(ACTION_VISUAL_TOPICS[String(topic || '').toLowerCase()]) return true;
    const grammar=String(word && word.gender || '').toLowerCase();
    if(/глагол|действи|выражени|сочетани|конструкци/.test(grammar)) return true;
    return false;
  }
  function makeVisualTask(topic,word){
    if(isActionLexeme(topic,word)) return null;
    if(topic==='clothes' && !clothingVisualAllowed(word)) return null;
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
      q:(topic==='activities' && word.id==='do_sport') ? 'Какое занятие изображено?' : 'Что изображено? Напиши по-испански.',
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
    // Activities are intentionally excluded: an illustration may accompany a
    // study card, but actions must never become direct picture-to-word guesses.
    const result=[];
    groups.forEach(function(group){
      safeArray(group[1]).forEach(function(word){
        const task=makeVisualTask(group[0],word);
        if(task) result.push(task);
      });
    });
    return result;
  }

  /*
   * Picture-task quality rule:
   * never ask the learner to infer an ingredient from an ambiguous patch inside
   * a finished dish. Ingredient exercises must show the dish plus separately
   * drawn, unmistakable ingredients around it.
   */
  const AMBIGUOUS_PICTURE_SCENES={food_table:true};
  function isAmbiguousPictureTask(item){
    if(!item) return false;
    const scene=String(item.pictureScene || '').toLowerCase();
    const id=String(item.id || '').toLowerCase();
    const text=[item.q,item.pictureHint,item.e].join(' ').toLowerCase();
    return !!AMBIGUOUS_PICTURE_SCENES[scene] || id.indexOf('food_table')!==-1 || text.indexOf('заметные ингредиенты')!==-1 || text.indexOf('ингредиентами внутри блюд')!==-1;
  }
  function polishDishTask(item){
    if(!item || String(item.pictureScene || '').indexOf('dish_')!==0) return item;
    const title=String(item.q || '').split(':')[0].trim() || 'Блюдо';
    item.skill='Блюдо и ингредиенты';
    item.q=title+': подпиши ингредиенты вокруг блюда.';
    item.pictureHint='Подпиши отдельно нарисованные продукты вокруг блюда по-испански. Артикль можно не писать.';
    return item;
  }

  const CLOTHING_FIGURE_SCENES={
    clothes_man:1,clothes_man_2:1,clothes_man_3:1,clothes_man_4:1,clothes_man_5:1,
    clothes_woman:1,clothes_woman_2:1,clothes_woman_3:1,clothes_woman_4:1,clothes_woman_5:1
  };
  function isClothingFigureTask(item){
    return !!(item &&
      item.topic==='clothes' &&
      item.type==='picture-label' &&
      CLOTHING_FIGURE_SCENES[String(item.pictureScene || '')]
    );
  }

  var basePictureLabelExercises=null;
  try { if(typeof pictureLabelExercises==='function') basePictureLabelExercises=pictureLabelExercises; } catch(e){}
  if(basePictureLabelExercises){
    pictureLabelExercises=function(){
      const existing=basePictureLabelExercises()
        .filter(function(item){ return !isAmbiguousPictureTask(item); })
        .map(function(item){ return isClothingFigureTask(item) ? item : keepLargeClothingLabels(item); })
        .map(polishDishTask)
        .filter(Boolean);
      const ids={};
      existing.forEach(function(item){ ids[item.id]=true; });
      return existing.concat(visualVocabularyExercises().filter(function(item){
        return item && item.topic!=='clothes' && !ids[item.id];
      }));
    };
  }

  var baseSetupExercise=null;
  try { if(typeof setupExercise==='function') baseSetupExercise=setupExercise; } catch(e){}
  if(baseSetupExercise){
    setupExercise=function(item){
      if(!item || item.type!=='picture-label') return baseSetupExercise(item);
      resetCard();
      els.answerInput.hidden=true;
      els.answerLabel.hidden=true;
      els.pictureWidget.hidden=false;
      els.pictureHelp.textContent=item.pictureHint || 'Посмотри на картинку и подпиши её по-испански.';
      const labels=item.pictureLabels || [];
      const fields=labels.map(function(label,i){
        const number=label&&label.displayNumber ? label.displayNumber : (i+1);
        return '<label class="picture-field"><span>'+number+'</span><input data-picture-input="'+i+'" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Подпись '+number+'" placeholder="По-испански"></label>';
      }).join('');
      const pictureMarkers=item.pictureNumbersEmbedded ? '' : labels.map(function(label,i){
        const number=label&&label.displayNumber ? label.displayNumber : (i+1);
        return '<span class="picture-marker" style="left:'+Number(label.markerX)+'%;top:'+Number(label.markerY)+'%" aria-hidden="true">'+number+'</span>';
      }).join('');
      const finalPicture = item.pictureHtml
        ? item.pictureHtml
        : '<img class="picture-raster" src="' +
          escapeHtml(pictureAsset(item.pictureScene)) +
          '" alt="' +
          escapeHtml(item.q) +
          '" decoding="async">';

      els.pictureStage.innerHTML =
        '<div class="picture-visual">' +
        finalPicture +
        '<div class="picture-image-error" hidden></div>' +
        pictureMarkers +
        '</div>' +
        '<div class="picture-fields">' +
        fields +
        '</div>';
      if(!item.pictureHtml && item.pictureScene && typeof bindPictureImageFallback==='function'){
        bindPictureImageFallback(els.pictureStage.querySelector('.picture-raster'),item.pictureScene);
      }
      els.pictureStage.querySelectorAll('[data-picture-input]').forEach(function(input){
        input.addEventListener('keydown',function(event){ if(event.key==='Enter'){ event.preventDefault(); checkAnswer(); } });
      });
      const first=els.pictureStage.querySelector('[data-picture-input]');
      if(first) first.focus();
    };
  }

  function coverageAudit(){
    const tasks=visualVocabularyExercises();
    const topics=['foods','clothes'];
    const source={};
    try { source.foods=typeof FOOD_WORDS!=='undefined' ? FOOD_WORDS : []; } catch(e){ source.foods=[]; }
    try { source.clothes=typeof CLOTHING_WORDS!=='undefined' ? CLOTHING_WORDS : []; } catch(e){ source.clothes=[]; }
    try { source.activities=typeof ACTIVITY_WORDS!=='undefined' ? ACTIVITY_WORDS : []; } catch(e){ source.activities=[]; }
    const report={};
    topics.forEach(function(topic){
      const all=safeArray(source[topic]);
      const eligible=all.filter(function(word){
        return !isActionLexeme(topic,word) && (topic!=='clothes' || clothingVisualAllowed(word));
      });
      const writtenOnly=all.length-eligible.length;
      const covered=tasks.filter(function(task){return task.topic===topic;}).length;
      report[topic]={total:eligible.length,covered:covered,writtenOnly:writtenOnly,percent:eligible.length ? Math.round(covered/eligible.length*100) : 0};
    });
    report.overall=(function(){
      const total=topics.reduce(function(sum,topic){return sum+report[topic].total;},0);
      const covered=topics.reduce(function(sum,topic){return sum+report[topic].covered;},0);
      const writtenOnly=topics.reduce(function(sum,topic){return sum+(report[topic].writtenOnly || 0);},0);
      return {total:total,covered:covered,writtenOnly:writtenOnly,percent:total ? Math.round(covered/total*100) : 0};
    })();
    return report;
  }
  window.visualCoverageAudit=coverageAudit;

  var style=document.createElement('style');
  style.textContent='\n.visual-single-art{min-height:260px;display:grid;place-items:center;padding:18px;background:#fffdf8;overflow:hidden}.visual-single-art .generated-sprite{width:min(100%,420px);aspect-ratio:1/1;background-repeat:no-repeat}.visual-single-art+.picture-fields{max-width:520px;margin-inline:auto}@media(max-width:520px){.visual-single-art{min-height:190px;padding:10px}.visual-single-art .generated-sprite{width:min(100%,300px)}}\n';
  document.head.appendChild(style);
})();

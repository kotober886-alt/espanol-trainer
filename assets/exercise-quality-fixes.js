(function(){
  'use strict';

  function clean(value){
    return String(value == null ? '' : value).trim().replace(/\s+/g,' ');
  }

  function normalizeSentence(value){
    return clean(value)
      .toLowerCase()
      .replace(/[¡!¿?.,;:«»“”"'’]/g,'')
      .replace(/\s+/g,' ')
      .trim();
  }

  function firstAnswer(source){
    const answers=source && Array.isArray(source.clozeAnswers) ? source.clozeAnswers : [];
    return clean(answers[0] || '');
  }

  function completedCloze(source){
    if(!source || !source.cloze) return '';
    const answer=firstAnswer(source);
    return clean(String(source.cloze).replace('___',answer));
  }

  function matchingTranslation(source,completed){
    if(!source || !Array.isArray(source.examples) || !completed) return '';
    const target=normalizeSentence(completed);
    for(let i=0;i<source.examples.length;i++){
      const pair=source.examples[i];
      if(Array.isArray(pair) && normalizeSentence(pair[0])===target) return clean(pair[1]);
    }
    return '';
  }

  function safeContextQuestion(source,label){
    const phrase=source && source.cloze ? clean(source.cloze) : '';
    if(!phrase) return 'Вставь '+label+' в предложение.';
    return 'Вставь '+label+' в предложение: '+phrase;
  }

  function safeContextExplanation(source){
    const completed=completedCloze(source);
    if(!completed) return '';
    const translation=matchingTranslation(source,completed);
    return 'Правильное предложение: '+completed+(translation ? ' — '+translation : '');
  }

  try {
    clozeQuestion=function(word,label){
      return safeContextQuestion(word,label || 'пропущенную часть');
    };
  } catch(e){}

  function indexById(list){
    const map={};
    (Array.isArray(list) ? list : []).forEach(function(item){ if(item && item.id) map[item.id]=item; });
    return map;
  }

  function patchItems(items,resolver,label){
    return (Array.isArray(items) ? items : []).map(function(item){
      if(!item || !/_ctx$/.test(String(item.id || ''))) return item;
      const source=resolver(item);
      if(!source || !source.cloze) return item;
      item.q=safeContextQuestion(source,label);
      item.e=safeContextExplanation(source);
      return item;
    });
  }

  try {
    if(typeof foundationExercises==='function'){
      const base=foundationExercises;
      foundationExercises=function(){
        const maps={};
        try { maps.verbs=indexById(VERB_WORDS); } catch(e){}
        try { maps.present=indexById(PRESENT_WORDS); } catch(e){}
        try { maps.questions=indexById(QUESTION_WORDS); } catch(e){}
        try { maps.constructions=indexById(CONSTRUCTION_WORDS); } catch(e){}
        try { maps.gustar=indexById(GUSTAR_WORDS); } catch(e){}
        try { maps.agreement=indexById(AGREEMENT_WORDS); } catch(e){}
        try { maps.prepositions=indexById(PREPOSITION_WORDS); } catch(e){}
        try { maps.connectors=indexById(CONNECTOR_WORDS); } catch(e){}
        try { maps.past=indexById(PAST_WORDS); } catch(e){}
        try { maps.routine=indexById(ROUTINE_WORDS); } catch(e){}
        try { maps.calendar=indexById(CALENDAR_WORDS); } catch(e){}
        try { maps.practical=indexById(PRACTICAL_WORDS); } catch(e){}
        try { maps.city=indexById(CITY_WORDS); } catch(e){}
        return patchItems(base(),function(item){
          const m=String(item.id || '').match(/^study_([^_]+)_(.+)_ctx$/);
          return m && maps[m[1]] ? maps[m[1]][m[2]] : null;
        },'пропущенную часть');
      };
    }
  } catch(e){}

  try {
    if(typeof foodExercises==='function'){
      const base=foodExercises;
      foodExercises=function(){
        let map={}; try { map=indexById(FOOD_WORDS); } catch(e){}
        return patchItems(base(),function(item){
          const m=String(item.id || '').match(/^food_(.+)_ctx$/);
          return m ? map[m[1]] : null;
        },'пропущенное слово');
      };
    }
  } catch(e){}

  try {
    if(typeof clothingExercises==='function'){
      const base=clothingExercises;
      clothingExercises=function(){
        let map={}; try { map=indexById(CLOTHING_WORDS); } catch(e){}
        return patchItems(base(),function(item){
          const m=String(item.id || '').match(/^clothes_(.+)_ctx$/);
          return m ? map[m[1]] : null;
        },'пропущенное слово');
      };
    }
  } catch(e){}

  try {
    if(typeof activityExercises==='function'){
      const base=activityExercises;
      activityExercises=function(){
        let map={}; try { map=indexById(ACTIVITY_WORDS); } catch(e){}
        return patchItems(base(),function(item){
          const m=String(item.id || '').match(/^activity_(.+)_ctx$/);
          return m ? map[m[1]] : null;
        },'пропущенное выражение');
      };
    }
  } catch(e){}

  function auditContextData(){
    const groups=[];
    function push(topic,list){ if(Array.isArray(list)) groups.push([topic,list]); }
    try { push('verbs',VERB_WORDS); } catch(e){}
    try { push('present',PRESENT_WORDS); } catch(e){}
    try { push('questions',QUESTION_WORDS); } catch(e){}
    try { push('constructions',CONSTRUCTION_WORDS); } catch(e){}
    try { push('gustar',GUSTAR_WORDS); } catch(e){}
    try { push('agreement',AGREEMENT_WORDS); } catch(e){}
    try { push('prepositions',PREPOSITION_WORDS); } catch(e){}
    try { push('connectors',CONNECTOR_WORDS); } catch(e){}
    try { push('past',PAST_WORDS); } catch(e){}
    try { push('routine',ROUTINE_WORDS); } catch(e){}
    try { push('calendar',CALENDAR_WORDS); } catch(e){}
    try { push('practical',PRACTICAL_WORDS); } catch(e){}
    try { push('city',CITY_WORDS); } catch(e){}
    try { push('foods',FOOD_WORDS); } catch(e){}
    try { push('clothes',CLOTHING_WORDS); } catch(e){}
    try { push('activities',ACTIVITY_WORDS); } catch(e){}
    const rows=[];
    groups.forEach(function(group){
      group[1].forEach(function(source){
        if(!source || !source.cloze) return;
        const completed=completedCloze(source);
        rows.push({
          topic:group[0],
          id:source.id,
          cloze:source.cloze,
          completed:completed,
          exactExampleTranslation:matchingTranslation(source,completed) || null
        });
      });
    });
    return {
      total:rows.length,
      exactTranslationMatches:rows.filter(function(row){return !!row.exactExampleTranslation;}).length,
      noExactTranslation:rows.filter(function(row){return !row.exactExampleTranslation;}).length,
      rows:rows
    };
  }
  window.exerciseQualityAudit=auditContextData;

  /* Make pañuelo unambiguous in both study cards and context practice. */
  try {
    if(Array.isArray(CLOTHING_WORDS)){
      const scarfLike=CLOTHING_WORDS.find(function(item){return item && item.id==='handkerchief';});
      if(scarfLike){
        scarfLike.examples=[
          ['Se pone un pañuelo de seda en el cuello.','Она надевает на шею шёлковый платок.'],
          ['El pañuelo tiene flores.','На платке цветочный узор.']
        ];
        scarfLike.cloze='Se pone un ___ de seda en el cuello.';
        scarfLike.clozeAnswers=['pañuelo'];
      }
    }
  } catch(e){}

  /* Correction tasks must clearly require the whole corrected sentence. */
  try {
    if(typeof allExercises==='function'){
      const baseAllExercises=allExercises;
      allExercises=function(){
        return baseAllExercises().map(function(item){
          if(!item || item.type!=='correct') return item;
          item.skill='Исправь и перепиши';
          item.q=String(item.q || '').replace(/^Исправь ошибку:\s*/,'Исправь ошибку и перепиши всё предложение целиком: ');
          return item;
        });
      };
    }
  } catch(e){}

  try {
    if(typeof setupExercise==='function'){
      const baseSetupExercise=setupExercise;
      setupExercise=function(item){
        baseSetupExercise(item);
        if(item && item.type==='correct'){
          try { els.answerLabel.textContent='Исправленное предложение целиком'; } catch(e){}
          try { els.answerInput.placeholder='Перепиши всё предложение полностью, уже без ошибки…'; } catch(e){}
        }
      };
    }
  } catch(e){}

  try { if(typeof renderTopics==='function') renderTopics(); } catch(e){}
})();

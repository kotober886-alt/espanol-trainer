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

  /*
   * Small accessories must be learned from explicit language, not guessed from
   * vague body-position clues. Each cloze below has one natural target in the
   * current vocabulary and its first example matches the completed sentence,
   * so the same precise wording is also used by the audio dictation.
   */
  const CLOTHING_CONTEXT_OVERRIDES={
    belt:{
      example:['Me abrocho el cinturón alrededor de la cintura.','Я застёгиваю ремень вокруг талии.'],
      cloze:'Me abrocho el ___ alrededor de la cintura.',answers:['cinturón']
    },
    scarf:{
      example:['Me enrollo la bufanda alrededor del cuello porque hace frío.','Я обматываю шарф вокруг шеи, потому что холодно.'],
      cloze:'Me enrollo la ___ alrededor del cuello porque hace frío.',answers:['bufanda']
    },
    gloves:{
      example:['Me pongo los guantes en las manos porque hace frío.','Я надеваю перчатки на руки, потому что холодно.'],
      cloze:'Me pongo los ___ en las manos porque hace frío.',answers:['guantes']
    },
    sunglasses:{
      example:['Me pongo las gafas de sol para proteger los ojos del sol.','Я надеваю солнцезащитные очки, чтобы защитить глаза от солнца.'],
      cloze:'Me pongo las ___ para proteger los ojos del sol.',answers:['gafas de sol']
    },
    umbrella:{
      example:['Abro el paraguas para no mojarme bajo la lluvia.','Я раскрываю зонт, чтобы не промокнуть под дождём.'],
      cloze:'Abro el ___ para no mojarme bajo la lluvia.',answers:['paraguas']
    },
    tie:{
      example:['Me anudo la corbata debajo del cuello de la camisa.','Я завязываю галстук под воротником рубашки.'],
      cloze:'Me anudo la ___ debajo del cuello de la camisa.',answers:['corbata']
    },
    bowtie:{
      example:['La pajarita tiene forma de lazo y se lleva con camisa.','Галстук-бабочка имеет форму банта и носится с рубашкой.'],
      cloze:'La ___ tiene forma de lazo y se lleva con camisa.',answers:['pajarita']
    },
    handkerchief:{
      example:['El pañuelo es una pieza cuadrada de seda que llevo al cuello.','Платок — это квадратный кусок шёлковой ткани, который я ношу на шее.'],
      cloze:'El ___ es una pieza cuadrada de seda que llevo al cuello.',answers:['pañuelo']
    },
    necklace:{
      example:['El collar de perlas rodea el cuello.','Жемчужное ожерелье окружает шею.'],
      cloze:'El ___ de perlas rodea el cuello.',answers:['collar']
    },
    bracelet:{
      example:['La pulsera de cuentas rodea la muñeca.','Браслет из бусин обхватывает запястье.'],
      cloze:'La ___ de cuentas rodea la muñeca.',answers:['pulsera']
    },
    ring:{
      example:['Me pongo el anillo en el dedo anular.','Я надеваю кольцо на безымянный палец.'],
      cloze:'Me pongo el ___ en el dedo anular.',answers:['anillo']
    },
    earrings:{
      example:['Me pongo los pendientes en las orejas.','Я надеваю серьги в уши.'],
      cloze:'Me pongo los ___ en las orejas.',answers:['pendientes']
    },
    watch:{
      example:['Miro la hora en mi reloj.','Я смотрю время на своих часах.'],
      cloze:'Miro la hora en mi ___.',answers:['reloj']
    },
    brooch:{
      example:['Sujeto el broche a la solapa de la chaqueta.','Я прикрепляю брошь к лацкану пиджака.'],
      cloze:'Sujeto el ___ a la solapa de la chaqueta.',answers:['broche']
    },
    chain:{
      example:['La cadena está formada por eslabones de metal.','Цепочка состоит из металлических звеньев.'],
      cloze:'La ___ está formada por eslabones de metal.',answers:['cadena']
    }
  };

  try {
    if(Array.isArray(CLOTHING_WORDS)){
      CLOTHING_WORDS.forEach(function(item){
        const patch=item && CLOTHING_CONTEXT_OVERRIDES[item.id];
        if(!patch) return;
        const rest=Array.isArray(item.examples) ? item.examples.slice(1) : [];
        item.examples=[patch.example].concat(rest);
        item.cloze=patch.cloze;
        item.clozeAnswers=patch.answers.slice();
      });
    }
  } catch(e){}

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

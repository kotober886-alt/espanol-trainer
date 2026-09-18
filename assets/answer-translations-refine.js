(function(){
  'use strict';

  function clean(v){return String(v==null?'':v).trim().replace(/\s+/g,' ');}
  function norm(v){return clean(v).toLowerCase().replace(/[¡!¿?.,;:«»“”"'’]/g,'').replace(/\s+/g,' ').trim();}
  function safe(fn){try{const v=fn();return Array.isArray(v)?v:[];}catch(e){return [];}}
  function byId(list,id){for(let i=0;i<list.length;i++)if(list[i]&&list[i].id===id)return list[i];return null;}

  function topicList(topic){
    const sources={
      verbs:function(){return VERB_WORDS;},present:function(){return PRESENT_WORDS;},questions:function(){return QUESTION_WORDS;},
      constructions:function(){return CONSTRUCTION_WORDS;},gustar:function(){return GUSTAR_WORDS;},agreement:function(){return AGREEMENT_WORDS;},
      prepositions:function(){return PREPOSITION_WORDS;},connectors:function(){return CONNECTOR_WORDS;},past:function(){return PAST_WORDS;},
      routine:function(){return ROUTINE_WORDS;},calendar:function(){return CALENDAR_WORDS;},practical:function(){return PRACTICAL_WORDS;},city:function(){return CITY_WORDS;},
      foods:function(){return FOOD_WORDS;},clothes:function(){return CLOTHING_WORDS;},activities:function(){return ACTIVITY_WORDS;},
      pronouns:function(){return PRONOUN_WORDS;},animals:function(){return window.ANIMAL_WORDS;}
    };
    const fn=sources[topic];
    return fn?safe(fn):[];
  }

  function scoped(item){
    const id=String(item&&item.id||''); let m;
    if((m=id.match(/^study_([^_]+)_(.+)_(es|ru|ctx)$/))) return {src:byId(topicList(m[1]),m[2]),mode:m[3]};
    if((m=id.match(/^food_(.+)_(es|ru|ctx)$/))) return {src:byId(safe(function(){return FOOD_WORDS;}),m[1]),mode:m[2]};
    if((m=id.match(/^clothes_(.+)_(es|ru|ctx)$/))) return {src:byId(safe(function(){return CLOTHING_WORDS;}),m[1]),mode:m[2]};
    if((m=id.match(/^activity_(.+)_(es|ru|ctx)$/))) return {src:byId(safe(function(){return ACTIVITY_WORDS;}),m[1]),mode:m[2]};
    if((m=id.match(/^animals_(.+)_(es|ru|choice|ctx)$/))) return {src:byId(safe(function(){return window.ANIMAL_WORDS;}),m[1]),mode:m[2]};
    if((m=id.match(/^visual_animals_(.+)$/))) return {src:byId(safe(function(){return window.ANIMAL_WORDS;}),m[1]),mode:'visual'};
    return null;
  }

  function complete(src,item){
    const a=clean(item&&item.a&&item.a[0]||src&&src.clozeAnswers&&src.clozeAnswers[0]||'');
    return src&&src.cloze?clean(String(src.cloze).replace('___',a)):'';
  }
  function exampleRu(src,es){
    if(!src||!Array.isArray(src.examples))return '';
    const key=norm(es);
    for(let i=0;i<src.examples.length;i++){
      const p=src.examples[i];
      if(Array.isArray(p)&&norm(p[0])===key)return clean(p[1]);
    }
    return src.examples[0]&&clean(src.examples[0][1])||clean(src.tr||'');
  }

  const COLOR_GEN={
    negro:'чёрного',negra:'чёрного',negros:'чёрного',negras:'чёрного',
    amarillo:'жёлтого',amarilla:'жёлтого',amarillos:'жёлтого',amarillas:'жёлтого',
    rojo:'красного',roja:'красного',rojos:'красного',rojas:'красного',
    azul:'синего',azules:'синего',verde:'зелёного',verdes:'зелёного',
    marrón:'коричневого',marrones:'коричневого',beige:'бежевого',
    dorado:'золотого',dorada:'золотого',dorados:'золотого',doradas:'золотого',coral:'кораллового',rosa:'розового',
    blanco:'белого',blanca:'белого',blancos:'белого',blancas:'белого',
    morado:'фиолетового',morada:'фиолетового',morados:'фиолетового',moradas:'фиолетового',violeta:'фиолетового',lila:'лилового',
    gris:'серого',grises:'серого'
  };

  function clothingPhrase(es){
    es=clean(es);
    const rows=safe(function(){return CLOTHING_WORDS;}).slice().sort(function(a,b){return clean(b&&b.word).length-clean(a&&a.word).length;});
    const ne=norm(es);
    for(let i=0;i<rows.length;i++){
      const w=rows[i]; if(!w||!w.word||!w.tr)continue;
      const nw=norm(w.word);
      if(ne!==nw&&ne.indexOf(nw+' ')!==0)continue;
      const noun=clean(w.tr).split(',')[0].trim();
      const rest=clean(es).slice(clean(w.word).length).trim();
      if(!rest)return noun;
      const colors=rest.split(/\s+y\s+|\s+/).map(function(x){return COLOR_GEN[norm(x)]||'';}).filter(Boolean);
      return colors.length?noun+' '+colors.join(' и ')+' цвета':noun;
    }
    return '';
  }

  function clothingPictureRu(item){
    const labels=Array.isArray(item&&item.pictureLabels)?item.pictureLabels:[];
    if(!labels.length)return '';
    return labels.map(function(label,i){
      const ru=clothingPhrase(label.reveal)||clean(label.reveal);
      return (i+1)+'. '+ru;
    }).join(' · ');
  }

  const previous=window.answerPairForExercise;
  function refinedPair(item){
    let pair=typeof previous==='function'?previous(item):{es:'',ru:''};
    const hit=scoped(item);
    if(hit&&hit.src){
      const src=hit.src;
      if(hit.mode==='ctx'){
        const es=complete(src,item);
        pair={es:es||clean(item.displayAnswer||item.a&&item.a[0]||''),ru:exampleRu(src,es)};
      }else{
        pair={es:clean(src.word||item.displayAnswer||item.a&&item.a[0]||pair.es),ru:clean(src.tr||src.ru&&src.ru[0]||pair.ru)};
      }
    }
    if(item&&item.type==='picture-label'&&item.topic==='clothes'){
      const labels=Array.isArray(item.pictureLabels)?item.pictureLabels:[];
      if(labels.length&&labels.every(function(label){return clean(label.translation);})) {
        pair={
          es:labels.map(function(label,i){return (i+1)+'. '+clean(label.reveal);}).join(' · '),
          ru:labels.map(function(label,i){return (i+1)+'. '+clean(label.translation);}).join(' · ')
        };
      } else {
        pair={es:clean(item.displayAnswer||item.a&&item.a[0]||pair.es),ru:clothingPictureRu(item)||pair.ru};
      }
    }
    return pair;
  }

  function paint(){
    let item=null;
    try{item=queue&&queue[index];}catch(e){}
    const box=document.getElementById('answerText');
    if(!box||!item)return;
    if(item&&item.type==='picture-label'&&item.topic==='clothes'){
      const labels=Array.isArray(item.pictureLabels)?item.pictureLabels:[];
      if(labels.length&&labels.every(function(label){return clean(label.translation);})) {
        box.innerHTML='<div class="outfit-answer-list">'+labels.map(function(label,i){
          return '<div class="outfit-answer-row">'+
            '<div class="outfit-answer-number">'+(i+1)+'.</div>'+
            '<div class="outfit-answer-copy">'+
              '<strong class="outfit-answer-es">'+escapeHtml(clean(label.reveal))+'</strong>'+
              '<span class="outfit-answer-ru">'+escapeHtml(clean(label.translation))+'</span>'+
            '</div>'+
          '</div>';
        }).join('')+'</div>';
        return;
      }
    }
    const p=refinedPair(item);
    box.innerHTML='<div class="answer-es-line"><span>Español</span><strong>'+escapeHtml(p.es||'—')+'</strong></div>'+
      '<div class="answer-ru-line"><span>Перевод</span><strong>'+escapeHtml(p.ru||'—')+'</strong></div>';
  }

  try{
    if(typeof render==='function'&&!render.__answerTranslationsRefined){
      const base=render;
      const patched=function(){base();try{paint();}catch(e){}};
      patched.__answerTranslationsV1=true;
      patched.__answerTranslationsRefined=true;
      render=patched;
    }
  }catch(e){}

  const outfitStyle=document.createElement('style');
  outfitStyle.textContent=
    '.outfit-answer-list{display:grid;gap:0;margin-top:2px}'+
    '.outfit-answer-row{display:grid;grid-template-columns:auto minmax(0,1fr);gap:9px;padding:10px 0;border-bottom:1px solid rgba(98,83,217,.12)}'+
    '.outfit-answer-row:last-child{border-bottom:0;padding-bottom:2px}'+
    '.outfit-answer-number{font-weight:900;color:#6253d9;line-height:1.45}'+
    '.outfit-answer-copy{display:grid;gap:2px;min-width:0}'+
    '.outfit-answer-es{font-size:16px;line-height:1.4;color:#241c72}'+
    '.outfit-answer-ru{font-size:14px;line-height:1.4;color:#6d6a86;font-weight:700}'+
    '@media(max-width:520px){.outfit-answer-row{gap:7px;padding:9px 0}.outfit-answer-es{font-size:15px}.outfit-answer-ru{font-size:13px}}';
  document.head.appendChild(outfitStyle);

  window.answerPairForExercise=refinedPair;
  try{paint();}catch(e){}
})();

(function(){
  'use strict';

  function clean(v){return String(v==null?'':v).trim().replace(/\s+/g,' ');}
  function norm(v){return clean(v).toLowerCase().replace(/[¡!¿?.,;:«»“”"'’]/g,'').replace(/\s+/g,' ').trim();}
  function hasRu(v){return /[А-Яа-яЁё]/.test(String(v||''));}
  function safeList(fn){try{const v=fn();return Array.isArray(v)?v:[];}catch(e){return [];}}
  function stripFinal(v){return clean(v).replace(/[.!?]+$/,'').trim();}

  const SENTENCE_RU={
    p2:'lee / usted lee — Вы читаете / Вы читаете (usted).',
    p3:'no escucháis / vosotros no escucháis / no escucháis vosotros — вы не слушаете.',
    ct9:'pequeño / pequeña — маленький / маленькая.',
    ct10:'feo / fea — некрасивый / некрасивая.',
    ct11:'caro / cara — дорогой / дорогая.',
    ct12:'sucio / sucia — грязный / грязная.',
    ct13:'ruidoso / ruidosa — шумный / шумная.',
    ct14:'desagradable — неприятный / неприятная.',
    correct_q_accent:'Где ты живёшь?',
    correct_q_spacing:'Почему ты учишь испанский?',
    correct_c_location:'Аптека находится рядом.',
    correct_c_tener:'Мне нужно работать завтра.',
    correct_g_number:'Мне нравятся книги.',
    correct_g_pronoun:'Ей нравится танцевать.',
    correct_r_person:'Я встаю в семь.',
    correct_r_vestir:'Она быстро одевается.',
    correct_pr_clock:'Сейчас три часа.',
    correct_pr_amount:'У меня много работы.',
    correct_a_gender:'Район красивый.',
    correct_a_adjective:'Я покупаю чёрные туфли.',
    correct_a_al:'Я иду на работу.',
    correct_a_del:'Я иду с работы.',
    correct_p_aux:'Сегодня я поговорила с Аной.',
    correct_p_double:'Вчера я ходила в кино.',
    correct_p_irregular:'Они приготовили ужин.',

    compare_ser_estar:'Мадрид находится в Испании.',
    compare_hay_estar:'В моём районе есть парк.',
    compare_por_para:'Этот подарок для тебя.',
    compare_porque_question:'Почему ты учишь испанский?',
    compare_muy_mucho_noun:'У меня много работы.',
    compare_muy_mucho_adj:'Это очень интересно.',
    compare_gusta_gustan:'Мне нравятся книги.',
    compare_gusta_indifference:'Мне всё равно, какой цвет.',
    compare_gusta_person:'Ана мне нравится / Ана мне симпатична.',
    compare_a_el_al:'Я иду в кино.',
    compare_past_ayer:'Вчера я ходила в кино.',

    context_choice_yo_hablar:'Каждое утро я говорю по-испански двадцать минут.',
    context_choice_ellas_vivir:'Марта и Ана живут в Мадриде с января.',
    context_choice_nos_beber:'После спортзала мы пьём много воды.',
    context_choice_jacket_article:'Вчера я купила чёрную куртку на осень.',
    context_choice_books_article:'Книги, которые лежат на столе, принадлежат Ане.',
    context_choice_shoes_agreement:'Эти кроссовки очень удобные, чтобы ходить весь день.',
    context_choice_monday_article:'В следующий понедельник я еду на работу на метро.',
    context_choice_pedro_games:'Педро нравятся стратегические видеоигры.',
    context_choice_noise_bothers:'Мне мешает уличный шум, когда я работаю.',
    context_choice_prefer_tea:'За завтраком я предпочитаю чай кофе.',
    context_choice_today_worked:'Сегодня я работала из дома.',
    context_choice_yesterday_went:'Вчера Лаура ходила в кино после работы.',
    context_choice_to_work:'Я выхожу из дома в восемь и еду на работу на метро.',
    context_choice_pharmacy_location:'Аптека находится рядом с банком, напротив парка.',
    context_choice_two_markets:'На моей улице есть два супермаркета и одна пекарня.',
    context_choice_sister_dentist:'Моя сестра — стоматолог и работает в частной клинике.',

    ser_estar_hay_capital:'Мадрид — столица Испании.',
    ser_estar_hay_pharmacy:'Аптека находится рядом с банком.',
    ser_estar_hay_parks:'В моём районе есть два больших парка.',
    ser_estar_hay_friends_home:'Мои друзья сейчас дома.',
    ser_estar_hay_students:'Мы изучаем испанский / Мы студенты, изучающие испанский.',
    ser_estar_hay_monday:'Завтра понедельник.',
    ser_estar_hay_cup_exists:'На столе есть чашка кофе.',
    ser_estar_hay_cup_location:'Чашка кофе находится на столе.',
    ser_estar_hay_shops_closed:'Магазины сейчас закрыты.',
    ser_estar_hay_quiet_area:'Этот район очень тихий и чистый.',
    ser_estar_hay_gym_where:'Где находится спортзал?',
    ser_estar_hay_no_pharmacy:'Здесь нет ни одной аптеки.',
    ser_estar_hay_tired_today:'Сегодня я устала после работы.',
    ser_estar_hay_birthday_march:'Мой день рождения в марте.',
    ser_estar_hay_concert_theater:'Концерт проходит в муниципальном театре.',
    ser_estar_hay_leather_shoes:'Эти кроссовки сделаны из кожи.',
    ser_estar_hay_from_mexico:'Ана и Луис из Мексики.',
    ser_estar_hay_food_hot:'Еда всё ещё горячая.',
    ser_estar_hay_people_office:'Сегодня в офисе много людей.',

    passage_weekday_routine:'В понедельник я встаю в семь. Потом завтракаю и пью кофе с молоком; затем иду на работу. Мой офис находится рядом с метро.',
    passage_neighborhood:'В моём районе есть аптека. Аптека находится рядом с банком. Банк закрывается в шесть, и по пятницам я хожу туда.',
    passage_shopping:'В субботу я хочу купить чёрную куртку и удобные туфли. Куртка дорогая, но туфли дешёвые.',
    passage_family_food:'По воскресеньям моя семья ест вместе. Я предпочитаю курицу, моя сестра не выносит морепродукты, а мой отец обожает десерты.',
    passage_past_today:'Вчера Ана ходила в кино с друзьями. Сегодня она работала дома, потому что устала. Завтра она собирается отдыхать.',
    passage_likes_hobbies:'Мне нравится читать, а мой парень обожает видеоигры. По субботам мы вместе играем в видеоигры, а потом встречаемся с друзьями в кафе.'
  };

  const FORM_RU={
    forms_ser_present:'soy — я являюсь · eres — ты являешься · es — он/она является · somos — мы являемся · sois — вы являетесь · son — они являются',
    forms_tener_present:'tengo — у меня есть · tienes — у тебя есть · tiene — у него/неё есть · tenemos — у нас есть · tenéis — у вас есть · tienen — у них есть',
    forms_possessives:'mi — мой/моя · tu — твой/твоя · su — его/её/Ваш · nuestro — наш · vuestro — ваш · su — их',
    forms_levantarse:'me levanto — я встаю · te levantas — ты встаёшь · se levanta — он/она встаёт · nos levantamos — мы встаём · os levantáis — вы встаёте · se levantan — они встают',
    forms_gustar_persons:'me gusta — мне нравится · te gusta — тебе нравится · le gusta — ему/ей нравится · nos gusta — нам нравится · os gusta — вам нравится · les gusta — им нравится',
    forms_haber_perfect:'he / has / ha / hemos / habéis / han — формы вспомогательного haber для Pretérito Perfecto',
    forms_hablar_indef:'hablé — я говорил(а) · hablaste — ты говорил(а) · habló — он/она говорил(а) · hablamos — мы говорили · hablasteis — вы говорили · hablaron — они говорили'
  };

  const MATCH_RU={
    match_hablar:'yo hablo — я говорю · tú hablas — ты говоришь · él/ella habla — он/она говорит · nosotros hablamos — мы говорим · vosotros habláis — вы говорите · ellos hablan — они говорят',
    match_vivir:'yo vivo — я живу · tú vives — ты живёшь · él/ella vive — он/она живёт · nosotros vivimos — мы живём · vosotros vivís — вы живёте · ellos viven — они живут',
    match_tener:'yo tengo — у меня есть · tú tienes — у тебя есть · él/ella tiene — у него/неё есть · nosotros tenemos — у нас есть · vosotros tenéis — у вас есть · ellos tienen — у них есть',
    match_ser:'yo soy — я являюсь · tú eres — ты являешься · él/ella es — он/она является · nosotros somos — мы являемся · vosotros sois — вы являетесь · ellos son — они являются',
    match_levantarse:'yo me levanto — я встаю · tú te levantas — ты встаёшь · él/ella se levanta — он/она встаёт · nosotros nos levantamos — мы встаём · vosotros os levantáis — вы встаёте · ellos se levantan — они встают',
    match_gustar:'a mí me gusta — мне нравится · a ti te gusta — тебе нравится · a él/ella le gusta — ему/ей нравится · a nosotros nos gusta — нам нравится · a vosotros os gusta — вам нравится · a ellos les gusta — им нравится',
    match_articles:'el barrio — район · la farmacia — аптека · los libros — книги · las tiendas — магазины',
    match_haber:'yo he · tú has · él/ella ha · nosotros hemos · vosotros habéis · ellos han — формы вспомогательного haber',
    match_weekdays:'lunes — понедельник · martes — вторник · miércoles — среда · jueves — четверг · viernes — пятница · sábado — суббота · domingo — воскресенье'
  };

  const COLOR={
    negro:['чёрный','чёрная','чёрные'],negra:['чёрный','чёрная','чёрные'],negros:['чёрный','чёрная','чёрные'],negras:['чёрный','чёрная','чёрные'],
    amarillo:['жёлтый','жёлтая','жёлтые'],amarilla:['жёлтый','жёлтая','жёлтые'],amarillos:['жёлтый','жёлтая','жёлтые'],amarillas:['жёлтый','жёлтая','жёлтые'],
    rojo:['красный','красная','красные'],roja:['красный','красная','красные'],rojos:['красный','красная','красные'],rojas:['красный','красная','красные'],
    azul:['синий','синяя','синие'],azules:['синий','синяя','синие'],verde:['зелёный','зелёная','зелёные'],verdes:['зелёный','зелёная','зелёные'],
    marrón:['коричневый','коричневая','коричневые'],marrones:['коричневый','коричневая','коричневые'],beige:['бежевый','бежевая','бежевые'],
    dorado:['золотой','золотая','золотые'],dorada:['золотой','золотая','золотые'],coral:['коралловый','коралловая','коралловые'],
    rosa:['розовый','розовая','розовые'],blanco:['белый','белая','белые'],blanca:['белый','белая','белые'],blancos:['белый','белая','белые'],blancas:['белый','белая','белые'],
    morado:['фиолетовый','фиолетовая','фиолетовые'],morada:['фиолетовый','фиолетовая','фиолетовые'],violeta:['фиолетовый','фиолетовая','фиолетовые'],lila:['лиловый','лиловая','лиловые'],
    gris:['серый','серая','серые'],grises:['серый','серая','серые']
  };

  function lists(){
    const out=[];
    [
      function(){return VERB_WORDS;},function(){return PRESENT_WORDS;},function(){return QUESTION_WORDS;},function(){return CONSTRUCTION_WORDS;},
      function(){return GUSTAR_WORDS;},function(){return AGREEMENT_WORDS;},function(){return PREPOSITION_WORDS;},function(){return CONNECTOR_WORDS;},
      function(){return PAST_WORDS;},function(){return ROUTINE_WORDS;},function(){return CALENDAR_WORDS;},function(){return PRACTICAL_WORDS;},function(){return CITY_WORDS;},
      function(){return FOOD_WORDS;},function(){return CLOTHING_WORDS;},function(){return ACTIVITY_WORDS;},function(){return PRONOUN_WORDS;},function(){return window.ANIMAL_WORDS;}
    ].forEach(function(fn){safeList(fn).forEach(function(w){out.push(w);});});
    return out;
  }

  function sourceMap(){
    const map={};
    lists().forEach(function(w){if(w&&w.id&&!map[w.id])map[w.id]=w;});
    return map;
  }

  function sourceFor(item){
    const id=String(item&&item.id||'');
    const by=sourceMap(); let m;
    if((m=id.match(/^study_[^_]+_(.+)_(es|ru|ctx)$/))) return by[m[1]]||null;
    if((m=id.match(/^food_(.+)_(es|ru|ctx)$/))) return by[m[1]]||null;
    if((m=id.match(/^clothes_(.+)_(es|ru|ctx)$/))) return by[m[1]]||null;
    if((m=id.match(/^activity_(.+)_(es|ru|ctx)$/))) return by[m[1]]||null;
    if((m=id.match(/^animals_(.+)_(es|ru|choice|ctx)$/))) return by[m[1]]||null;
    if((m=id.match(/^visual_animals_(.+)$/))) return by[m[1]]||null;
    if((m=id.match(/^pronoun_(.+)_(es|ru|poss|verb_\d+)$/))) return by[m[1]]||null;
    return null;
  }

  function sourceMode(item){
    const id=String(item&&item.id||'');
    const m=id.match(/_(es|ru|ctx|choice|poss|verb_\d+)$/);
    return m?m[1]:'';
  }

  function completeSource(src,item){
    if(!src||!src.cloze)return '';
    const answer=clean(item&&item.a&&item.a[0]||src.clozeAnswers&&src.clozeAnswers[0]||'');
    return clean(String(src.cloze).replace('___',answer));
  }

  function exampleTranslation(src,es){
    if(!src||!Array.isArray(src.examples))return '';
    const key=norm(es);
    for(let i=0;i<src.examples.length;i++){
      const pair=src.examples[i];
      if(Array.isArray(pair)&&norm(pair[0])===key)return clean(pair[1]);
    }
    return src.examples[0]&&clean(src.examples[0][1])||'';
  }

  function quotedRussian(q){
    const matches=[...String(q||'').matchAll(/«([^»]+)»/g)].map(function(m){return clean(m[1]);}).filter(hasRu);
    return matches.length?matches[matches.length-1]:'';
  }

  function targetFromQuestion(q){
    q=clean(q);
    let m=q.match(/Переведи на испанский[: ]+(.+?)[.!?]*$/i);
    if(m)return stripFinal(m[1]);
    m=q.match(/по переводу\s+«([^»]+)»/i); if(m&&hasRu(m[1]))return clean(m[1]);
    const quoted=quotedRussian(q); if(quoted)return quoted;
    if(/(?:Закончи диалог|Ответь:)/i.test(q)){
      const parts=q.split('—').map(clean).filter(Boolean);
      for(let i=parts.length-1;i>=0;i--)if(hasRu(parts[i]))return stripFinal(parts[i]);
    }
    return '';
  }

  function spanishFromRussianPrompt(q){
    const m=clean(q).match(/Переведи на русский:\s*(.+?)[.!?]*$/i);
    return m?clean(m[1]):'';
  }

  function completedQuestion(item){
    const q=clean(item&&item.q||'');
    const a=clean(item&&item.a&&item.a[0]||'');
    if(!a||q.indexOf('___')<0)return '';
    let sentence=q.replace(/^Впиши нужную форму ser, estar или hay:\s*/i,'').replace(/^Выбери (?:форму|предлог|естественный вариант):\s*/i,'');
    sentence=sentence.replace('___',a);
    return clean(sentence);
  }

  function pairFromExplanation(e){
    e=clean(e);
    const parts=e.split(/\s+—\s+/);
    if(parts.length>1&&hasRu(parts[parts.length-1]))return clean(parts.slice(1).join(' — '));
    return '';
  }

  function knownTranslation(es){
    const key=norm(es).replace(/^(el|la|los|las|un|una|unos|unas)\s+/,'');
    let best='';
    lists().forEach(function(w){
      const variants=[w.word,w.base].concat(w.answers||[]).filter(Boolean);
      if(variants.some(function(v){return norm(v).replace(/^(el|la|los|las|un|una|unos|unas)\s+/,'')===key;})) best=clean(w.tr||w.ru&&w.ru[0]||best);
    });
    return best;
  }

  function colorForm(token,gender){
    const arr=COLOR[norm(token)];
    if(!arr)return '';
    return arr[gender==='f'?1:gender==='pl'?2:0];
  }

  function translatePhrase(es){
    es=clean(es);
    const exact=knownTranslation(es); if(exact)return exact;
    const words=lists().slice().sort(function(a,b){return clean(b.word).length-clean(a.word).length;});
    const nk=norm(es);
    for(let i=0;i<words.length;i++){
      const w=words[i]; if(!w||!w.word||!w.tr)continue;
      const base=norm(w.word);
      if(nk===base||nk.indexOf(base+' ')===0){
        const article=(base.match(/^(el|la|los|las|un|una|unos|unas)\b/)||[])[1]||'';
        const gender=/^(la|una)$/.test(article)?'f':/^(los|las|unos|unas)$/.test(article)?'pl':'m';
        const remainder=clean(es).slice(clean(w.word).length).trim();
        if(!remainder)return clean(w.tr);
        const bits=remainder.split(/\s+y\s+|\s+/).map(function(x){return colorForm(x,gender);}).filter(Boolean);
        if(bits.length)return bits.join(' и ')+' '+clean(w.tr);
      }
    }
    return '';
  }

  function sortTranslation(item){
    const text=clean(item&&item.displayAnswer||'');
    if(!text)return '';
    return text.split(' · ').map(function(group){
      const p=group.split(':'); if(p.length<2)return group;
      const title=clean(p.shift());
      const vals=p.join(':').split(',').map(function(v){const t=translatePhrase(v);return t||clean(v);});
      return title+': '+vals.join(', ');
    }).join(' · ');
  }

  function pictureTranslation(item){
    const labels=Array.isArray(item&&item.pictureLabels)?item.pictureLabels:[];
    if(!labels.length)return '';
    return labels.map(function(label,i){
      const ru=translatePhrase(label.reveal)||knownTranslation(label.reveal)||'';
      return (i+1)+'. '+(ru||clean(label.reveal));
    }).join(' · ');
  }

  function answerPair(item){
    item=item||{};
    const id=String(item.id||'');
    const src=sourceFor(item);
    const mode=sourceMode(item);
    let es='',ru='';

    if(src){
      if(mode==='ctx'){
        es=completeSource(src,item);
        ru=exampleTranslation(src,es);
      }else if(mode==='poss'&&src.possessive){
        es=clean(item.a&&item.a[0]||src.possessive.short||'');
        ru=clean(src.possessive.meaning||targetFromQuestion(item.q)||'');
      }else if(/^verb_/.test(mode)){
        es=clean(item.a&&item.a[0]||'');
        ru='Форма для '+clean(src.word)+': '+clean(src.tr||'');
      }else{
        es=clean(src.word||item.displayAnswer||item.a&&item.a[0]||'');
        ru=clean(src.tr||src.ru&&src.ru[0]||'');
      }
    }

    if(item.type==='picture-label'&&(!src||!ru)){
      es=clean(item.displayAnswer||item.a&&item.a[0]||es);
      ru=pictureTranslation(item)||ru;
    }

    if(!es&&item.type==='cloze-passage') es=clean(item.displayAnswer||'');
    if(!es&&(item.type==='context-choice'||item.type==='ser-estar-hay'||/^compare_/.test(id))) es=completedQuestion(item)||clean(item.displayAnswer||item.a&&item.a[0]||'');
    if(!es&&/^correct_/.test(id)) es=clean(item.a&&item.a[0]||'');
    if(!es&&/^order_/.test(id)) es=clean(item.a&&item.a[0]||'');
    if(!es&&/^dialogue_/.test(id)) es=clean(item.a&&item.a[0]||'');
    if(!es&&item.type==='audio') es=clean(item.a&&item.a[0]||'');
    if(!es&&item.type==='category-sort') es=clean(item.displayAnswer||item.a&&item.a[0]||'');
    if(!es&&item.type==='match') es=clean(item.displayAnswer||item.a&&item.a[0]||'');
    if(!es&&item.type==='forms') es=clean(item.displayAnswer||item.a&&item.a[0]||'');
    if(!es){
      const fromQ=spanishFromRussianPrompt(item.q);
      if(fromQ)es=fromQ;
      else es=clean(item.displayAnswer||Array.isArray(item.a)&&item.a.join(' / ')||'');
    }

    if(!ru&&SENTENCE_RU[id])ru=SENTENCE_RU[id];
    if(!ru&&FORM_RU[id])ru=FORM_RU[id];
    if(!ru&&MATCH_RU[id])ru=MATCH_RU[id];
    if(!ru&&item.type==='category-sort')ru=sortTranslation(item);
    if(!ru&&item.type==='audio'&&hasRu(item.e))ru=clean(item.e);
    if(!ru){const target=targetFromQuestion(item.q);if(target)ru=target;}
    if(!ru&&Array.isArray(item.a)&&item.a.length&&item.a.every(hasRu))ru=item.a.map(clean).join(' / ');
    if(!ru){const pair=pairFromExplanation(item.e);if(pair)ru=pair;}
    if(!ru){const known=translatePhrase(es)||knownTranslation(es);if(known)ru=known;}
    if(!ru&&hasRu(item.e))ru=clean(item.e);
    if(!ru&&hasRu(item.q))ru='Смысл задания: '+clean(item.q);
    if(!ru)ru='Русский перевод для этого собственного задания не задан.';

    return {es:es||'—',ru:ru};
  }

  function renderAnswerTranslation(){
    let item=null;
    try{item=queue&&queue[index];}catch(e){}
    const box=document.getElementById('answerText');
    if(!box||!item)return;
    const pair=answerPair(item);
    box.innerHTML='<div class="answer-es-line"><span>Español</span><strong>'+escapeHtml(pair.es)+'</strong></div>'+
      '<div class="answer-ru-line"><span>Перевод</span><strong>'+escapeHtml(pair.ru)+'</strong></div>';
  }

  function install(){
    try{
      if(typeof render==='function'&&!render.__answerTranslationsV1){
        const base=render;
        const patched=function(){base();try{renderAnswerTranslation();}catch(e){}};
        patched.__answerTranslationsV1=true;
        render=patched;
      }
      renderAnswerTranslation();
    }catch(e){}
  }

  const style=document.createElement('style');
  style.textContent='.answer-es-line,.answer-ru-line{display:grid;gap:3px}.answer-es-line+ .answer-ru-line{margin-top:10px;padding-top:10px;border-top:1px solid rgba(98,83,217,.14)}.answer-es-line span,.answer-ru-line span{color:#6d6a86;font-size:11px;font-weight:850;text-transform:uppercase;letter-spacing:.07em}.answer-es-line strong,.answer-ru-line strong{font-size:16px;line-height:1.45}.answer-ru-line strong{color:#433a86}@media(max-width:520px){.answer-es-line strong,.answer-ru-line strong{font-size:15px}}';
  document.head.appendChild(style);

  let tries=0;
  const timer=setInterval(function(){install();if(++tries>30)clearInterval(timer);},250);
  document.addEventListener('DOMContentLoaded',install);
  window.addEventListener('load',function(){install();setTimeout(install,500);});
  window.answerPairForExercise=answerPair;
  install();
})();

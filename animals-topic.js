(function(){
'use strict';

if(window.__animalsTopicInstalled) return;
window.__animalsTopicInstalled=true;

const ASSET_VERSION='20260918-r1';
const IMG='assets/generated/study-animals-v5.webp?v='+ASSET_VERSION;
const POS={dog:[0,0],cat:[1,0],rabbit:[2,0],hamster:[3,0],mouse:[4,0],turtle:[5,0],horse:[6,0],cow:[7,0],pig:[8,0],sheep:[0,1],goat:[1,1],chicken:[2,1],lion:[3,1],tiger:[4,1],bear:[5,1],elephant:[6,1],giraffe:[7,1],monkey:[8,1],eagle:[0,2],owl:[1,2],parrot:[2,2],duck:[3,2],penguin:[4,2],flamingo:[5,2],fish:[6,2],shark:[7,2],dolphin:[8,2],whale:[0,3],octopus:[1,3],crab:[2,3],snake:[3,3],crocodile:[4,3],lizard:[5,3],frog:[6,3],salamander:[7,3],tortoise:[8,3]};

function art(k){
  const p=POS[k];
  if(!p) return '';
  const left=p[0]*100;
  const top=p[1]*100;
  return '<div class="generated-sprite generated-sprite-animals" aria-hidden="true">'+
    '<img class="generated-sprite-img" src="'+IMG+'" alt="" aria-hidden="true" loading="eager" decoding="async" '+
    'style="width:900%;height:400%;left:-'+left+'%;top:-'+top+'%;" '+
    'onerror="this.onerror=null;this.parentElement.classList.add(\'asset-missing\');this.remove();">'+
    '</div>';
}
window.animalArt=art;

const CATS=[{id:'all',title:'Все животные'},{id:'pets',title:'Домашние'},{id:'farm',title:'Ферма'},{id:'wild',title:'Дикие'},{id:'birds',title:'Птицы'},{id:'sea',title:'Морские'},{id:'reptiles',title:'Рептилии и амфибии'}];
const D=[
['dog','pets','el perro','perro','мужской род','собака','dog','El perro juega en el parque.','Собака играет в парке.','Mi perro duerme junto a la cama.','Моя собака спит рядом с кроватью.'],
['cat','pets','el gato','gato','мужской род','кот, кошка','cat','El gato duerme en el sofá.','Кот спит на диване.','La gata bebe agua.','Кошка пьёт воду.'],
['rabbit','pets','el conejo','conejo','мужской род','кролик','rabbit','El conejo come una zanahoria.','Кролик ест морковь.','El conejo tiene orejas largas.','У кролика длинные уши.'],
['hamster','pets','el hámster','hámster','мужской род','хомяк','hamster','El hámster es pequeño.','Хомяк маленький.','Mi hámster corre por la noche.','Мой хомяк бегает ночью.'],
['mouse','pets','el ratón','ratón','мужской род','мышь','mouse','El ratón es muy pequeño.','Мышь очень маленькая.','Veo un ratón cerca de la caja.','Я вижу мышь рядом с коробкой.'],
['turtle','pets','la tortuga','tortuga','женский род','черепаха','turtle','La tortuga camina despacio.','Черепаха ходит медленно.','Mi tortuga come verduras.','Моя черепаха ест овощи.'],
['horse','farm','el caballo','caballo','мужской род','лошадь','horse','El caballo corre por el campo.','Лошадь бежит по полю.','El caballo es marrón.','Лошадь коричневая.'],
['cow','farm','la vaca','vaca','женский род','корова','cow','La vaca come hierba.','Корова ест траву.','La vaca vive en la granja.','Корова живёт на ферме.'],
['pig','farm','el cerdo','cerdo','мужской род','свинья','pig','El cerdo está en la granja.','Свинья находится на ферме.','El cerdo es rosa.','Свинья розовая.'],
['sheep','farm','la oveja','oveja','женский род','овца','sheep','La oveja tiene lana blanca.','У овцы белая шерсть.','Las ovejas comen hierba.','Овцы едят траву.'],
['goat','farm','la cabra','cabra','женский род','коза','goat','La cabra sube a una roca.','Коза забирается на камень.','La cabra come hojas.','Коза ест листья.'],
['chicken','farm','la gallina','gallina','женский род','курица','chicken','La gallina pone huevos.','Курица несёт яйца.','La gallina camina por la granja.','Курица ходит по ферме.'],
['lion','wild','el león','león','мужской род','лев','lion','El león vive en África.','Лев живёт в Африке.','El león tiene una gran melena.','У льва большая грива.'],
['tiger','wild','el tigre','tigre','мужской род','тигр','tiger','El tigre tiene rayas.','У тигра есть полосы.','El tigre es un animal salvaje.','Тигр — дикое животное.'],
['bear','wild','el oso','oso','мужской род','медведь','bear','El oso vive en el bosque.','Медведь живёт в лесу.','El oso es grande.','Медведь большой.'],
['elephant','wild','el elefante','elefante','мужской род','слон','elephant','El elefante tiene una trompa larga.','У слона длинный хобот.','El elefante es muy grande.','Слон очень большой.'],
['giraffe','wild','la jirafa','jirafa','женский род','жираф','giraffe','La jirafa tiene el cuello largo.','У жирафа длинная шея.','La jirafa come hojas.','Жираф ест листья.'],
['monkey','wild','el mono','mono','мужской род','обезьяна','monkey','El mono sube al árbol.','Обезьяна залезает на дерево.','El mono come fruta.','Обезьяна ест фрукты.'],
['eagle','birds','el águila','águila','женский род · с el','орёл','eagle','El águila vuela muy alto.','Орёл летает очень высоко.','El águila tiene alas grandes.','У орла большие крылья.'],
['owl','birds','el búho','búho','мужской род','сова','owl','El búho duerme de día.','Сова спит днём.','El búho ve bien de noche.','Сова хорошо видит ночью.'],
['parrot','birds','el loro','loro','мужской род','попугай','parrot','El loro tiene plumas de colores.','У попугая разноцветные перья.','Mi loro imita palabras.','Мой попугай повторяет слова.'],
['duck','birds','el pato','pato','мужской род','утка','duck','El pato nada en el lago.','Утка плавает в озере.','El pato tiene un pico amarillo.','У утки жёлтый клюв.'],
['penguin','birds','el pingüino','pingüino','мужской род','пингвин','penguin','El pingüino vive en zonas frías.','Пингвин живёт в холодных регионах.','El pingüino nada muy bien.','Пингвин очень хорошо плавает.'],
['flamingo','birds','el flamenco','flamenco','мужской род','фламинго','flamingo','El flamenco tiene plumas rosas.','У фламинго розовые перья.','El flamenco tiene patas largas.','У фламинго длинные ноги.'],
['fish','sea','el pez','pez','мужской род','рыба (живое животное)','fish','El pez nada en el agua.','Рыба плавает в воде.','Este pez es azul.','Эта рыба синяя.'],
['shark','sea','el tiburón','tiburón','мужской род','акула','shark','El tiburón vive en el mar.','Акула живёт в море.','El tiburón tiene muchos dientes.','У акулы много зубов.'],
['dolphin','sea','el delfín','delfín','мужской род','дельфин','dolphin','El delfín salta fuera del agua.','Дельфин выпрыгивает из воды.','Los delfines son muy inteligentes.','Дельфины очень умные.'],
['whale','sea','la ballena','ballena','женский род','кит','whale','La ballena es enorme.','Кит огромный.','La ballena vive en el océano.','Кит живёт в океане.'],
['octopus','sea','el pulpo','pulpo','мужской род','осьминог','octopus','El pulpo tiene ocho brazos.','У осьминога восемь щупалец.','El pulpo vive en el mar.','Осьминог живёт в море.'],
['crab','sea','el cangrejo','cangrejo','мужской род','краб','crab','El cangrejo camina de lado.','Краб ходит боком.','El cangrejo tiene dos pinzas.','У краба две клешни.'],
['snake','reptiles','la serpiente','serpiente','женский род','змея','snake','La serpiente no tiene patas.','У змеи нет ног.','La serpiente se mueve por el suelo.','Змея ползёт по земле.'],
['crocodile','reptiles','el cocodrilo','cocodrilo','мужской род','крокодил','crocodile','El cocodrilo vive cerca del agua.','Крокодил живёт рядом с водой.','El cocodrilo tiene dientes grandes.','У крокодила большие зубы.'],
['lizard','reptiles','el lagarto','lagarto','мужской род','ящерица','lizard','El lagarto toma el sol.','Ящерица греется на солнце.','El lagarto tiene una cola larga.','У ящерицы длинный хвост.'],
['frog','reptiles','la rana','rana','женский род','лягушка','frog','La rana salta cerca del agua.','Лягушка прыгает рядом с водой.','La rana es verde.','Лягушка зелёная.'],
['salamander','reptiles','la salamandra','salamandra','женский род','саламандра','salamander','La salamandra vive en lugares húmedos.','Саламандра живёт во влажных местах.','La salamandra tiene una cola larga.','У саламандры длинный хвост.'],
['tortoise','reptiles','la tortuga terrestre','tortuga terrestre','женский род','сухопутная черепаха','tortoise','La tortuga terrestre vive en tierra.','Сухопутная черепаха живёт на земле.','La tortuga terrestre camina despacio.','Сухопутная черепаха ходит медленно.']
];
const WORDS=D.map(function(x){return{id:x[0],cat:x[1],word:x[2],base:x[3],gender:x[4],tr:x[5],ru:[x[5]],answers:[x[3],x[2]],art:x[6],examples:[[x[7],x[8]],[x[9],x[10]]],cloze:x[7].replace(x[2].replace(/^(el|la) /,''),'___').replace(x[3],'___'),clozeAnswers:[x[3]]};});
window.ANIMAL_WORDS=WORDS; window.ANIMAL_CATEGORIES=CATS;
function decoys(w){const a=WORDS.filter(x=>x.id!==w.id&&x.cat===w.cat).map(x=>x.tr);for(let i=WORDS.length-1;a.length<3&&i>=0;i--)if(WORDS[i].id!==w.id&&a.indexOf(WORDS[i].tr)<0)a.push(WORDS[i].tr);return a.slice(0,3);}
function ex(){const out=[];WORDS.forEach(function(w){
 out.push({id:'animals_'+w.id+'_es',topic:'animals',foodCat:w.cat,type:'text',skill:'Перевод на испанский',q:'Переведи на испанский: '+w.tr+'.',a:w.answers,e:w.word+' — '+w.tr+'.'});
 out.push({id:'animals_'+w.id+'_ru',topic:'animals',foodCat:w.cat,type:'text',skill:'Перевод на русский',q:'Переведи на русский: '+w.word+'.',a:w.ru,e:w.word+' — '+w.tr+'.'});
 const opts=[w.tr].concat(decoys(w)); out.push({id:'animals_'+w.id+'_choice',topic:'animals',foodCat:w.cat,type:'choice',skill:'Выбери перевод',q:'Что означает «'+w.word+'»?',options:opts,a:[w.tr],e:w.word+' — '+w.tr+'.'});
 out.push({id:'animals_'+w.id+'_ctx',topic:'animals',foodCat:w.cat,type:'text',skill:'Слово в контексте',q:'Вставь пропущенное слово: '+w.cloze,a:w.clozeAnswers,e:'Правильное предложение: '+w.examples[0][0]+' — '+w.examples[0][1]});
 out.push({id:'visual_animals_'+w.id,originalId:'animals_'+w.id+'_es',topic:'animals',foodCat:w.cat,type:'picture-label',skill:'Картинка → слово',q:'Что изображено? Напиши по-испански.',pictureHint:'Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.',pictureHtml:art(w.art),pictureLabels:[{side:'left',top:50,markerX:50,markerY:50,reveal:w.word,answers:w.answers}],a:[w.word],displayAnswer:w.word,e:w.word+' — '+w.tr+'.'});
 });
 CATS.filter(c=>c.id!=='all').forEach(function(c){const rows=WORDS.filter(w=>w.cat===c.id).slice(0,6);out.push({id:'animals_match_'+c.id,topic:'animals',foodCat:c.id,type:'match',skill:'Соедини соответствия',q:'Соедини животных с испанскими названиями.',pairs:rows.map(w=>[w.tr,w.word]),a:[rows.map(w=>w.word).join(' | ')],displayAnswer:rows.map(w=>w.tr+' — '+w.word).join(' · '),e:'Повтори названия этой группы.'});});
 return out;
}
const EX=ex(); window.animalExercises=function(){return EX.slice();};

function patchOnce(name,marker,wrap){
  try{
    const current=window[name];
    if(typeof current!=='function' || current[marker]) return;
    const patched=wrap(current);
    patched[marker]=true;
    window[name]=patched;
  }catch(e){}
}

try{
  if(typeof TOPICS!=='undefined'&&!TOPICS.some(function(t){return t.id==='animals';})){
    const i=TOPICS.findIndex(function(t){return t.id==='custom';});
    TOPICS.splice(i<0?TOPICS.length:i,0,{id:'animals',title:'Животные',icon:'🐾'});
  }
}catch(e){}

try{
  if(typeof TOPIC_GROUPS!=='undefined'){
    const g=TOPIC_GROUPS.find(function(x){return x.title==='Повседневная жизнь';});
    if(g&&g.ids.indexOf('animals')<0) g.ids.push('animals');
  }
}catch(e){}

patchOnce('allExercises','__animalsTopicV2',function(base){
  return function(){
    const baseItems=base();
    const ids=new Set((Array.isArray(baseItems)?baseItems:[]).map(function(x){return x&&x.id;}).filter(Boolean));
    const extras=EX.filter(function(x){return !ids.has(x.id);});
    return (Array.isArray(baseItems)?baseItems:[]).concat(extras);
  };
});

patchOnce('vocabularyWords','__animalsTopicV2',function(base){
  return function(){ return selectedTopic==='animals'?WORDS:base(); };
});

patchOnce('studyVocabularyWords','__animalsTopicV2',function(base){
  return function(){ return selectedTopic==='animals'?WORDS:base(); };
});

patchOnce('categoriesForTopic','__animalsTopicV2',function(base){
  return function(t){ return t==='animals'?CATS:base(t); };
});

patchOnce('studyArt','__animalsTopicV2',function(base){
  return function(w){
    if(selectedTopic==='animals'&&w){
      const html=art(w.art||w.id);
      if(html) return html;
    }
    return base(w);
  };
});

patchOnce('studyTitle','__animalsTopicV2',function(base){
  return function(){ return selectedTopic==='animals'?'Сначала познакомимся с животными':base(); };
});

patchOnce('studyIntro','__animalsTopicV2',function(base){
  return function(){ return selectedTopic==='animals'?'Учи животных по группам: домашние, ферма, дикие, птицы, морские, рептилии и амфибии. На каждой карточке есть иллюстрация и живые примеры.':base(); };
});

patchOnce('studyUnitLabel','__animalsTopicV2',function(base){
  return function(){ return selectedTopic==='animals'?'Животное':base(); };
});

patchOnce('renderStudy','__animalsTopicV2',function(base){
  return function(){
    base();
    try{
      if(selectedTopic==='animals'&&els&&els.studyCard) els.studyCard.classList.remove('no-art');
    }catch(e){}
  };
});

patchOnce('renderTopics','__animalsTopicV2',function(base){
  return function(){
    base();
    try{
      const x=document.querySelector('[data-topic="animals"] .topic-count');
      if(x) x.textContent=WORDS.length+' слов';
    }catch(e){}
  };
});

try{
  if(typeof els!=='undefined'&&els.customTopic&&!els.customTopic.querySelector('option[value="animals"]')){
    const o=document.createElement('option');
    o.value='animals';
    o.textContent='Животные';
    const custom=els.customTopic.querySelector('option[value="custom"]');
    if(custom) els.customTopic.insertBefore(o,custom);
    else els.customTopic.appendChild(o);
  }
}catch(e){}

if(!document.getElementById('animals-topic-style')){
  const st=document.createElement('style');
  st.id='animals-topic-style';
  st.textContent=
    '.generated-sprite-animals{background:#faf9f6}'+
    '.study-card:not(.no-art) .generated-sprite-animals{width:min(100%,420px);aspect-ratio:1/1}';
  document.head.appendChild(st);
}

try{
  if(typeof renderTopics==='function') renderTopics();
}catch(e){}
})();

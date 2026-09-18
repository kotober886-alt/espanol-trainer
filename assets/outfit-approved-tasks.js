(function(){
'use strict';
const scenes=['clothes_man','clothes_man_2','clothes_man_3','clothes_man_4','clothes_man_5','clothes_woman','clothes_woman_2','clothes_woman_3','clothes_woman_4','clothes_woman_5'];
const S=new Set(scenes);

function n(v){
  return String(v==null?'':v).toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}
function V(reveal,names,colors){
  names=Array.isArray(names)?names:[names];
  colors=Array.isArray(colors)?colors:[colors];
  const out=[reveal];
  for(const x of names) for(const c of colors) out.push(x+' '+c);
  return [...new Set(out.map(n))];
}
const L=(reveal,ru,names,colors)=>({reveal:reveal,translation:ru,answers:V(reveal,names,colors)});

const D={
  clothes_man:[
    L('el polo blanco','белое поло','polo','blanco'),
    L('los pantalones deportivos grises','серые спортивные брюки',['pantalones deportivos','pantalones de chándal','pantalones de chandal'],['grises','gris']),
    L('la chaqueta deportiva azul marino','тёмно-синяя спортивная куртка',['chaqueta deportiva','chaqueta'],['azul marino','azul oscuro']),
    L('la mochila negra','чёрный рюкзак','mochila',['negra','negro']),
    L('las zapatillas beige','бежевые кроссовки','zapatillas','beige')
  ],
  clothes_man_2:[
    L('el gorro negro','чёрная шапка','gorro','negro'),
    L('el jersey crema','кремовый свитер','jersey',['crema','beige']),
    L('el abrigo negro','чёрное пальто','abrigo','negro'),
    L('la bufanda gris','серый шарф','bufanda','gris'),
    L('las botas negras','чёрные ботинки',['botas','botines'],['negras','negros'])
  ],
  clothes_man_3:[
    L('la gorra beige','бежевая кепка','gorra','beige'),
    L('la camisa verde a cuadros','зелёная рубашка в клетку',['camisa','sobrecamisa'],['verde a cuadros','verde']),
    L('los vaqueros azul claro','светло-синие джинсы',['vaqueros','jeans'],['azul claro','azules claros']),
    L('las zapatillas blancas','белые кроссовки','zapatillas',['blancas','blancos'])
  ],
  clothes_man_4:[
    L('el chaleco beige','бежевый жилет','chaleco','beige'),
    L('la sudadera verde','зелёная толстовка',['sudadera','sudadera con capucha'],'verde'),
    L('los pantalones cargo marrones','коричневые брюки карго',['pantalones cargo','pantalones'],['marrones','marrón']),
    L('las zapatillas blancas y verdes','бело-зелёные кроссовки','zapatillas',['blancas y verdes','blanco y verde'])
  ],
  clothes_man_5:[
    L('la sudadera azul marino','тёмно-синяя толстовка',['sudadera','sudadera con capucha'],['azul marino','azul oscuro']),
    L('el bolsillo azul marino','тёмно-синий карман','bolsillo',['azul marino','azul oscuro']),
    L('la mochila negra','чёрный рюкзак','mochila',['negra','negro']),
    L('los vaqueros azul claro','светло-синие джинсы',['vaqueros','jeans'],['azul claro','azules claros']),
    L('las zapatillas blancas y grises','бело-серые кроссовки','zapatillas',['blancas y grises','blanco y gris'])
  ],
  clothes_woman:[
    L('el sujetador blanco','белый бюстгальтер','sujetador','blanco'),
    L('el pijama rosa a cuadros','розовая пижама в клетку','pijama',['rosa a cuadros','rosa']),
    L('las zapatillas de casa blancas','белые домашние тапочки',['zapatillas de casa','pantuflas'],['blancas','blancos'])
  ],
  clothes_woman_2:[
    L('la blusa blanca','белая блузка','blusa',['blanca','blanco']),
    L('la americana marrón a cuadros','коричневый пиджак в клетку',['americana','blazer','chaqueta'],['marrón a cuadros','marron a cuadros']),
    L('la falda marrón oscuro','тёмно-коричневая юбка','falda',['marrón oscuro','marron oscuro']),
    L('los tacones marrones','коричневые туфли на каблуке',['tacones','zapatos de tacón','zapatos de tacon'],['marrones','marrón']),
    L('el sombrero marrón','коричневая шляпа','sombrero',['marrón','marron'])
  ],
  clothes_woman_3:[
    L('la chaqueta marrón','коричневая куртка',['chaqueta','cazadora'],['marrón','marron']),
    L('el jersey crema','кремовый свитер',['jersey','jersey de cuello alto'],['crema','beige']),
    L('el vestido marrón oscuro','тёмно-коричневое платье','vestido',['marrón oscuro','marron oscuro']),
    L('el bolso negro','чёрная сумка','bolso','negro'),
    L('las botas marrones','коричневые сапоги','botas',['marrones','marrón'])
  ],
  clothes_woman_4:[
    L('las gafas de sol marrones','коричневые солнцезащитные очки','gafas de sol',['marrones','marrón']),
    L('la camiseta blanca','белая футболка','camiseta',['blanca','blanco']),
    L('la camisa azul claro','светло-голубая рубашка','camisa',['azul claro','azul clara']),
    L('los pantalones cortos beige','бежевые шорты',['pantalones cortos','shorts'],'beige'),
    L('las sandalias marrones','коричневые сандалии','sandalias',['marrones','marrón'])
  ],
  clothes_woman_5:[
    L('el cárdigan crema','кремовый кардиган',['cárdigan','cardigan'],['crema','beige']),
    L('el top blanco','белый топ','top','blanco'),
    L('el bolso marrón','коричневая сумка','bolso',['marrón','marron']),
    L('los pantalones verde oliva','оливково-зелёные брюки','pantalones',['verde oliva','verdes oliva']),
    L('las zapatillas blancas','белые кроссовки','zapatillas',['blancas','blancos'])
  ]
};

function bilingualAnswer(labels){
  return labels.map((x,i)=>(i+1)+'. '+x.reveal+'\n   '+x.translation).join('\n\n');
}
function task(s){
  const a=D[s];
  return {
    id:'approved_'+s,
    topic:'clothes',
    type:'picture-label',
    skill:'Одежда: предмет + цвет',
    q:'Подпиши каждый номер: предмет одежды и его цвет по-испански.',
    pictureHint:'Напиши предмет и цвет/цвета. Артикль можно не писать; регистр, акценты и лишние пробелы не мешают проверке.',
    pictureScene:s,
    pictureHtml:'<img class="approved-outfit-image" src="assets/picture-labels/'+s+'.webp?v=20260918-repair8" alt="Задание на одежду">',
    pictureLabels:a,
    a:[a.map(x=>x.reveal).join(' | ')],
    displayAnswer:bilingualAnswer(a),
    e:''
  };
}
try{
  if(typeof pictureLabelExercises==='function'){
    const base=pictureLabelExercises;
    pictureLabelExercises=function(){
      return base().filter(x=>!(x&&x.topic==='clothes'&&S.has(String(x.pictureScene||'')))).concat(scenes.map(task));
    };
  }
}catch(e){}

const st=document.createElement('style');
st.textContent=
  '.approved-outfit-image{display:block;width:min(100%,600px);height:auto;max-height:72vh;object-fit:contain;margin:auto}'+
  '.picture-visual:has(.approved-outfit-image){aspect-ratio:auto!important;height:auto!important}'+
  '.picture-visual:has(.approved-outfit-image) .picture-marker,.picture-visual:has(.approved-outfit-image) .outfit-callout-svg{display:none!important}'+
  '.answer-box #answerText{white-space:pre-line}'+
  '@media(max-width:520px){.approved-outfit-image{width:100%;max-height:54vh}}';
document.head.appendChild(st);

window.normalizeOutfitAnswer=n;
window.normalizePictureAnswer=n;
})();

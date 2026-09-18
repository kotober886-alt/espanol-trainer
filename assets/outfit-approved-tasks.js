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
    L('los pantalones grises','серые брюки','pantalones','grises'),
    L('la chaqueta azul','синяя куртка','chaqueta','azul'),
    L('la mochila negra','чёрный рюкзак','mochila','negra'),
    L('las zapatillas deportivas beige','бежевые кроссовки',['zapatillas deportivas','tenis'],'beige')
  ],
  clothes_man_2:[
    L('el gorro negro','чёрная шапка','gorro','negro'),
    L('el jersey beige','бежевый свитер','jersey','beige'),
    L('el abrigo negro','чёрное пальто','abrigo','negro'),
    L('la bufanda gris','серый шарф','bufanda','gris'),
    L('las botas negras','чёрные ботинки','botas','negras')
  ],
  clothes_man_3:[
    L('la gorra beige','бежевая кепка','gorra','beige'),
    L('la camisa verde','зелёная рубашка','camisa','verde'),
    L('los vaqueros azules','синие джинсы',['vaqueros','jeans'],'azules'),
    L('las zapatillas deportivas blancas','белые кроссовки',['zapatillas deportivas','tenis'],'blancas')
  ],
  clothes_man_4:[
    L('el chaleco beige','бежевый жилет','chaleco','beige'),
    L('la sudadera con capucha verde','зелёное худи',['sudadera con capucha','sudadera'],'verde'),
    L('los pantalones marrones','коричневые брюки','pantalones','marrones'),
    L('las zapatillas deportivas blancas','белые кроссовки',['zapatillas deportivas','tenis'],'blancas')
  ],
  clothes_man_5:[
    L('la sudadera con capucha azul','синее худи',['sudadera con capucha','sudadera'],'azul'),
    L('la capucha azul','синий капюшон','capucha','azul'),
    L('la mochila negra','чёрный рюкзак','mochila','negra'),
    L('los vaqueros azules','синие джинсы',['vaqueros','jeans'],'azules'),
    L('las zapatillas deportivas blancas','белые кроссовки',['zapatillas deportivas','tenis'],'blancas')
  ],
  clothes_woman:[
    L('la ropa interior blanca','белое нижнее бельё','ropa interior','blanca'),
    L('el pijama rosa','розовая пижама','pijama','rosa'),
    L('las zapatillas de casa blancas','белые домашние тапочки','zapatillas de casa','blancas')
  ],
  clothes_woman_2:[
    L('la blusa blanca','белая блузка','blusa','blanca'),
    L('la chaqueta marrón','коричневая куртка','chaqueta','marrón'),
    L('la falda marrón','коричневая юбка','falda','marrón'),
    L('los zapatos de tacón marrones','коричневые туфли на каблуке',['zapatos de tacón','tacones'],'marrones'),
    L('el sombrero marrón','коричневая шляпа','sombrero','marrón')
  ],
  clothes_woman_3:[
    L('la chaqueta marrón','коричневая куртка','chaqueta','marrón'),
    L('el jersey beige','бежевый свитер','jersey','beige'),
    L('el vestido marrón','коричневое платье','vestido','marrón'),
    L('el bolso negro','чёрная сумка','bolso','negro'),
    L('las botas marrones','коричневые сапоги','botas','marrones')
  ],
  clothes_woman_4:[
    L('las gafas de sol marrones','коричневые солнцезащитные очки','gafas de sol','marrones'),
    L('la camiseta blanca','белая футболка','camiseta','blanca'),
    L('la camisa azul','синяя рубашка','camisa','azul'),
    L('los pantalones cortos beige','бежевые шорты',['pantalones cortos','shorts'],'beige'),
    L('las sandalias marrones','коричневые сандалии','sandalias','marrones')
  ],
  clothes_woman_5:[
    L('el cárdigan beige','бежевый кардиган / кофта',['cárdigan','cardigan'],'beige'),
    L('la camiseta blanca','белая футболка','camiseta','blanca'),
    L('el bolso marrón','коричневая сумка','bolso','marrón'),
    L('los pantalones verdes','зелёные брюки','pantalones','verdes'),
    L('las zapatillas deportivas blancas','белые кроссовки',['zapatillas deportivas','tenis'],'blancas')
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
    pictureHint:'Напиши предмет и один базовый цвет. Артикль можно не писать; регистр, акценты и лишние пробелы не мешают проверке.',
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

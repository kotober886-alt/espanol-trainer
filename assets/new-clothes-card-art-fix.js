(function(){
  'use strict';

  const SRC='assets/generated/study-clothes-new-v1.webp?v=20260918-final2';
  const POS={
    hoodie:[0,0],
    vest:[1,0],
    polo:[0,1],
    cardigan:[1,1]
  };

  function newClothesArt(kind){
    const pos=POS[kind];
    if(!pos) return '';
    return '<div class="new-clothes-card-art" aria-hidden="true" style="'+
      'background-image:url(\''+SRC+'\');'+
      'background-size:200% 200%;'+
      'background-position:'+(pos[0]===0?'0%':'100%')+' '+(pos[1]===0?'0%':'100%')+';'+
      '"></div>';
  }

  const previousClothingArt=window.clothingArt;
  window.clothingArt=function(kind){
    return newClothesArt(kind) || (typeof previousClothingArt==='function' ? previousClothingArt(kind) : '');
  };

  function forceNewCardArt(){
    try{
      if(window.selectedTopic!=='clothes' || !window.els || !els.foodArt) return;
      const words=typeof currentFoodWords==='function' ? currentFoodWords() : [];
      const word=words && words[wordIndex];
      if(!word || !POS[word.art]) return;
      els.studyCard.classList.remove('no-art');
      els.foodArt.hidden=false;
      els.foodArt.style.display='grid';
      els.foodArt.innerHTML=newClothesArt(word.art);
    }catch(e){}
  }

  try{
    if(typeof renderStudy==='function' && !renderStudy.__newClothesFinalArt){
      const baseRenderStudy=renderStudy;
      const patched=function(){
        baseRenderStudy();
        forceNewCardArt();
      };
      patched.__newClothesFinalArt=true;
      renderStudy=patched;
      window.renderStudy=patched;
    }
  }catch(e){}

  const style=document.createElement('style');
  style.textContent=
    '.food-art .new-clothes-card-art{display:block;width:min(100%,380px);aspect-ratio:1/1;background-repeat:no-repeat;background-color:transparent;margin:auto;flex:0 0 auto}'+
    '@media(max-width:520px){.food-art .new-clothes-card-art{width:min(100%,280px)}}';
  document.head.appendChild(style);

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',forceNewCardArt);
  }else{
    forceNewCardArt();
  }
})();
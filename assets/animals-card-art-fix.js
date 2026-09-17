(function(){
  'use strict';
  const SRC='./assets/generated/study-animals-v5.webp?v=1';
  const FALLBACK='./assets/generated/study-animals-v5.webp?v=1';
  const POS={dog:[0,0],cat:[1,0],rabbit:[2,0],hamster:[3,0],mouse:[4,0],turtle:[5,0],horse:[6,0],cow:[7,0],pig:[8,0],sheep:[0,1],goat:[1,1],chicken:[2,1],lion:[3,1],tiger:[4,1],bear:[5,1],elephant:[6,1],giraffe:[7,1],monkey:[8,1],eagle:[0,2],owl:[1,2],parrot:[2,2],duck:[3,2],penguin:[4,2],flamingo:[5,2],fish:[6,2],shark:[7,2],dolphin:[8,2],whale:[0,3],octopus:[1,3],crab:[2,3],snake:[3,3],crocodile:[4,3],lizard:[5,3],frog:[6,3],salamander:[7,3],tortoise:[8,3]};

  function rasterAnimal(key){
    const p=POS[key];
    if(!p) return '';
    return '<div class="animal-raster-crop" aria-hidden="true"><img src="'+SRC+'" alt="" loading="eager" decoding="sync" onerror="this.onerror=null;this.src=\''+FALLBACK+'\'" style="left:-'+(p[0]*100)+'%;top:-'+(p[1]*100)+'%;"></div>';
  }
  window.animalArt=rasterAnimal;

  const style=document.createElement('style');
  style.textContent='\n.animal-raster-crop{position:relative!important;display:block!important;width:min(260px,92%)!important;height:auto!important;aspect-ratio:1/1!important;overflow:hidden!important;margin:auto!important;border-radius:18px!important;background:#fffdf8!important}.animal-raster-crop img{position:absolute!important;display:block!important;width:900%!important;height:400%!important;max-width:none!important;max-height:none!important;object-fit:fill!important;margin:0!important;padding:0!important}.food-art .animal-raster-crop{width:min(260px,92%)!important}.visual-single-art .animal-raster-crop{width:min(220px,72%)!important}@media(max-width:520px){.food-art .animal-raster-crop{width:min(210px,92%)!important}.visual-single-art .animal-raster-crop{width:min(170px,72%)!important}}\n';
  document.head.appendChild(style);

  try{
    if(typeof studyArt==='function' && !studyArt.__animalRasterFixed){
      const baseStudyArt=studyArt;
      const patchedStudyArt=function(word){
        try{ if(selectedTopic==='animals' && word) return rasterAnimal(word.art || word.id); }catch(e){}
        return baseStudyArt(word);
      };
      patchedStudyArt.__animalRasterFixed=true;
      studyArt=patchedStudyArt;
    }
  }catch(e){}

  try{
    if(typeof allExercises==='function' && !allExercises.__animalRasterFixed){
      const baseAll=allExercises;
      const patchedAll=function(){
        return baseAll().map(function(item){
          if(item && item.topic==='animals' && item.type==='picture-label'){
            const id=String(item.id||'').replace(/^visual_animals_/, '');
            if(POS[id]) item.pictureHtml=rasterAnimal(id);
          }
          return item;
        });
      };
      patchedAll.__animalRasterFixed=true;
      allExercises=patchedAll;
    }
  }catch(e){}

  try{
    if(typeof renderStudy==='function' && !renderStudy.__animalRasterFixedV2){
      const baseRender=renderStudy;
      const patchedRender=function(){
        baseRender();
        try{
          if(selectedTopic==='animals'){
            const words=currentFoodWords();
            const word=words[wordIndex];
            els.studyCard.classList.remove('no-art');
            els.foodArt.style.display='grid';
            if(word) els.foodArt.innerHTML=rasterAnimal(word.art || word.id);
          }
        }catch(e){}
      };
      patchedRender.__animalRasterFixedV2=true;
      renderStudy=patchedRender;
    }
  }catch(e){}

  try{ if(selectedTopic==='animals' && foodPhase==='study') renderStudy(); }catch(e){}
})();

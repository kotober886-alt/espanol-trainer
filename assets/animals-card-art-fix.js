(function(){
  'use strict';
  const SRC='/espanol-trainer/assets/generated/study-animals-v1.webp?v=3';
  const POS={dog:[0,0],cat:[1,0],rabbit:[2,0],hamster:[3,0],mouse:[4,0],turtle:[5,0],horse:[6,0],cow:[7,0],pig:[8,0],sheep:[0,1],goat:[1,1],chicken:[2,1],lion:[3,1],tiger:[4,1],bear:[5,1],elephant:[6,1],giraffe:[7,1],monkey:[8,1],eagle:[0,2],owl:[1,2],parrot:[2,2],duck:[3,2],penguin:[4,2],flamingo:[5,2],fish:[6,2],shark:[7,2],dolphin:[8,2],whale:[0,3],octopus:[1,3],crab:[2,3],snake:[3,3],crocodile:[4,3],lizard:[5,3],frog:[6,3],salamander:[7,3],tortoise:[8,3]};

  function rasterAnimal(key){
    const p=POS[key];
    if(!p) return '';
    return '<div class="animal-raster-crop" aria-hidden="true"><img src="'+SRC+'" alt="" loading="eager" decoding="async" style="left:-'+(p[0]*100)+'%;top:-'+(p[1]*100)+'%;"></div>';
  }
  window.animalArt=rasterAnimal;

  const style=document.createElement('style');
  style.textContent='\n.animal-raster-crop{position:relative;width:min(260px,92%);aspect-ratio:1/1;overflow:hidden;margin:auto;border-radius:18px;background:#fffdf8}.animal-raster-crop img{position:absolute!important;width:900%!important;height:400%!important;max-width:none!important;object-fit:fill!important;margin:0!important;display:block!important}.food-art .animal-raster-crop{width:min(260px,92%)}.visual-single-art .animal-raster-crop{width:min(220px,72%)}@media(max-width:520px){.food-art .animal-raster-crop{width:min(210px,92%)}.visual-single-art .animal-raster-crop{width:min(170px,72%)}}\n';
  document.head.appendChild(style);

  try{
    if(typeof allExercises==='function' && !allExercises.__animalRasterFixed){
      const baseAll=allExercises;
      const patched=function(){
        return baseAll().map(function(item){
          if(item && item.topic==='animals' && item.type==='picture-label'){
            const id=String(item.id||'').replace(/^visual_animals_/, '');
            if(POS[id]) item.pictureHtml=rasterAnimal(id);
          }
          return item;
        });
      };
      patched.__animalRasterFixed=true;
      allExercises=patched;
    }
  }catch(e){}

  try{
    if(typeof renderStudy==='function' && !renderStudy.__animalRasterFixed){
      const baseRender=renderStudy;
      const patched=function(){
        baseRender();
        try{
          if(selectedTopic==='animals'){
            const words=currentFoodWords();
            const word=words[wordIndex];
            els.studyCard.classList.remove('no-art');
            if(word) els.foodArt.innerHTML=rasterAnimal(word.art || word.id);
          }
        }catch(e){}
      };
      patched.__animalRasterFixed=true;
      renderStudy=patched;
    }
  }catch(e){}

  try{ if(selectedTopic==='animals' && foodPhase==='study') renderStudy(); }catch(e){}
})();

(function(){
  'use strict';
  const KEYS=new Set(['dog','cat','rabbit','hamster','mouse','turtle','horse','cow','pig','sheep','goat','chicken','lion','tiger','bear','elephant','giraffe','monkey','eagle','owl','parrot','duck','penguin','flamingo','fish','shark','dolphin','whale','octopus','crab','snake','crocodile','lizard','frog','salamander','tortoise']);
  function art(key){
    if(!KEYS.has(key)) return '';
    const src='assets/generated/animals/'+key+'.webp?v=20260917-individual2';
    return '<img class="approved-animal-single" src="'+src+'" alt="" loading="eager" decoding="async">';
  }
  window.animalArt=art;
  const style=document.createElement('style');
  style.textContent='.approved-animal-single{display:block!important;width:min(280px,94%)!important;height:auto!important;aspect-ratio:1/1!important;object-fit:contain!important;margin:auto!important;border-radius:18px!important;background:#fffdf8!important}.visual-single-art .approved-animal-single{width:min(230px,76%)!important}@media(max-width:520px){.approved-animal-single{width:min(215px,92%)!important}.visual-single-art .approved-animal-single{width:min(175px,74%)!important}}';
  document.head.appendChild(style);
  function install(){
    window.animalArt=art;
    try{if(typeof studyArt==='function'&&!studyArt.__approvedAnimalsV4){const b=studyArt;studyArt=function(w){try{if(selectedTopic==='animals'&&w)return art(w.art||w.id);}catch(e){}return b(w)};studyArt.__approvedAnimalsV4=true}}catch(e){}
    try{if(typeof allExercises==='function'&&!allExercises.__approvedAnimalsV4){const b=allExercises;allExercises=function(){return b().map(function(i){if(i&&i.topic==='animals'&&i.type==='picture-label'){const id=String(i.id||'').replace(/^visual_animals_/,'');if(KEYS.has(id))i.pictureHtml=art(id)}return i})};allExercises.__approvedAnimalsV4=true}}catch(e){}
    try{if(typeof renderStudy==='function'&&!renderStudy.__approvedAnimalsV4){const b=renderStudy;renderStudy=function(){b();try{if(selectedTopic==='animals'){const ws=currentFoodWords(),w=ws[wordIndex];els.studyCard.classList.remove('no-art');els.foodArt.style.display='grid';if(w)els.foodArt.innerHTML=art(w.art||w.id)}}catch(e){}};renderStudy.__approvedAnimalsV4=true}}catch(e){}
    try{if(selectedTopic==='animals'&&foodPhase==='study'&&typeof renderStudy==='function')renderStudy()}catch(e){}
    try{if(typeof render==='function'&&!render.__approvedAnimalsPictureV5){const b=render;render=function(){b();try{const item=(typeof queue!=='undefined'&&queue)?queue[index]:null;if(item&&item.topic==='animals'&&item.type==='picture-label'){const id=String(item.id||'').replace(/^visual_animals_/,'');if(KEYS.has(id)&&els&&els.pictureStage){const img=els.pictureStage.querySelector('.picture-raster');if(img){img.src='assets/generated/animals/'+id+'.webp?v=20260917-individual2';img.classList.add('approved-animal-single');img.alt='';img.loading='eager';}}}}catch(e){}};render.__approvedAnimalsPictureV5=true}}catch(e){}
  }
  let n=0,t=setInterval(function(){install();if(++n>24)clearInterval(t)},250);
  document.addEventListener('DOMContentLoaded',install);
  window.addEventListener('load',function(){install();setTimeout(install,600)});
  install();
})();

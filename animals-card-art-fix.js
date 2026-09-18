(function(){
  'use strict';

  if(window.__animalsCardArtFixInstalled) return;
  window.__animalsCardArtFixInstalled=true;

  const ASSET_VERSION='20260918-r1';
  const KEYS=new Set(['dog','cat','rabbit','hamster','mouse','turtle','horse','cow','pig','sheep','goat','chicken','lion','tiger','bear','elephant','giraffe','monkey','eagle','owl','parrot','duck','penguin','flamingo','fish','shark','dolphin','whale','octopus','crab','snake','crocodile','lizard','frog','salamander','tortoise']);

  function animalSrc(key){
    return 'assets/generated/animals/'+key+'.webp?v='+ASSET_VERSION;
  }

  function art(key){
    if(!KEYS.has(key)) return '';
    const src=animalSrc(key);
    return '<img class="approved-animal-single" src="'+src+'" alt="" aria-hidden="true" loading="eager" decoding="async" onerror="this.onerror=null;this.classList.add(\'asset-missing\');this.removeAttribute(\'src\');">';
  }

  window.animalArt=art;

  if(!document.getElementById('approved-animal-style')){
    const style=document.createElement('style');
    style.id='approved-animal-style';
    style.textContent='.approved-animal-single{display:block!important;width:min(280px,94%)!important;height:auto!important;aspect-ratio:1/1!important;object-fit:contain!important;margin:auto!important;border-radius:18px!important;background:#fffdf8!important}.approved-animal-single.asset-missing{display:grid!important;place-items:center;background:#f7f5fc!important;border:1px dashed #d8d3e8!important}.approved-animal-single.asset-missing::after{content:"🖼️";font-size:32px;opacity:.45}.visual-single-art .approved-animal-single{width:min(230px,76%)!important}@media(max-width:520px){.approved-animal-single{width:min(215px,92%)!important}.visual-single-art .approved-animal-single{width:min(175px,74%)!important}}';
    document.head.appendChild(style);
  }

  function install(){
    window.animalArt=art;

    try{
      if(typeof studyArt==='function'&&!studyArt.__approvedAnimalsV5){
        const base=studyArt;
        const patched=function(word){
          try{
            if(selectedTopic==='animals'&&word){
              const html=art(word.art||word.id);
              if(html) return html;
            }
          }catch(e){}
          return base(word);
        };
        patched.__approvedAnimalsV5=true;
        studyArt=patched;
      }
    }catch(e){}

    try{
      if(typeof allExercises==='function'&&!allExercises.__approvedAnimalsV5){
        const base=allExercises;
        const patched=function(){
          return base().map(function(item){
            if(!item || item.topic!=='animals' || item.type!=='picture-label') return item;
            const id=String(item.id||'').replace(/^visual_animals_/,'');
            if(!KEYS.has(id)) return item;
            return Object.assign({},item,{pictureHtml:art(id)});
          });
        };
        patched.__approvedAnimalsV5=true;
        allExercises=patched;
      }
    }catch(e){}

    try{
      if(typeof renderStudy==='function'&&!renderStudy.__approvedAnimalsV5){
        const base=renderStudy;
        const patched=function(){
          base();
          try{
            if(selectedTopic!=='animals') return;
            const words=currentFoodWords();
            const word=words[wordIndex];
            if(!word || !els || !els.studyCard || !els.foodArt) return;
            const html=art(word.art||word.id);
            if(!html) return;
            els.studyCard.classList.remove('no-art');
            els.foodArt.style.display='grid';
            els.foodArt.innerHTML=html;
          }catch(e){}
        };
        patched.__approvedAnimalsV5=true;
        renderStudy=patched;
      }
    }catch(e){}

    try{
      if(typeof render==='function'&&!render.__approvedAnimalsPictureV6){
        const base=render;
        const patched=function(){
          base();
          try{
            const item=(typeof queue!=='undefined'&&Array.isArray(queue))?queue[index]:null;
            if(!item || item.topic!=='animals' || item.type!=='picture-label' || !els || !els.pictureStage) return;

            const id=String(item.id||'').replace(/^visual_animals_/,'');
            if(!KEYS.has(id)) return;

            const img=els.pictureStage.querySelector('.picture-raster');
            if(!img) return;

            img.classList.add('approved-animal-single');
            img.alt='';
            img.setAttribute('aria-hidden','true');
            img.loading='eager';
            img.decoding='async';
            img.onerror=function(){
              this.onerror=null;
              this.classList.add('asset-missing');
              this.removeAttribute('src');
            };
            img.src=animalSrc(id);
          }catch(e){}
        };
        patched.__approvedAnimalsPictureV6=true;
        render=patched;
      }
    }catch(e){}

    try{
      if(selectedTopic==='animals'&&foodPhase==='study'&&typeof renderStudy==='function') renderStudy();
    }catch(e){}
  }

  function installWhenReady(){
    install();
    if(document.readyState==='loading'){
      document.addEventListener('DOMContentLoaded',install,{once:true});
    }
    window.addEventListener('load',install,{once:true});
  }

  installWhenReady();
})();

(function(){
  'use strict';

  function svg(body){
    return '<svg class="food-svg precise-art" viewBox="0 0 180 180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'+body+'</svg>';
  }

  const C={ink:'#51456d',cream:'#fff7e8',yellow:'#f4c85e',orange:'#ef9651',red:'#e76b63',pink:'#e9a7b1',green:'#7db878',mint:'#8fc7b7',blue:'#82b8da',violet:'#8b79d6',brown:'#9a684c',dark:'#62524d',white:'#fffdf8',gray:'#b8b4c3'};

  const custom={
    wine:svg('<path fill="'+C.violet+'" d="M61 30h58c0 34-8 56-29 63v31h24v13H66v-13h24V93C69 86 61 64 61 30Z"/><path fill="'+C.red+'" d="M70 49h40c-1 20-6 31-20 37-14-6-19-17-20-37Z"/>'),
    beer:svg('<path fill="'+C.yellow+'" d="M51 42h64v91c0 10-8 18-18 18H69c-10 0-18-8-18-18V42Z"/><path fill="'+C.cream+'" d="M51 38c0-9 8-16 17-16h31c9 0 16 7 16 16v12H51V38Z"/><path fill="'+C.orange+'" d="M63 58h40v73H63V58Z"/><path fill="'+C.yellow+'" d="M115 59h11c16 0 26 12 26 29s-10 30-26 30h-11v-14h10c8 0 13-6 13-16s-5-15-13-15h-10V59Z"/>'),
    juice:svg('<rect x="52" y="39" width="76" height="108" rx="12" fill="'+C.orange+'"/><rect x="61" y="50" width="58" height="25" rx="8" fill="'+C.cream+'"/><path fill="'+C.green+'" d="M103 20c10 2 18 9 21 18-12 2-23-2-29-10 1-4 4-7 8-8Z"/><rect x="84" y="24" width="6" height="33" rx="3" fill="'+C.green+'"/>'),
    lemonade:svg('<rect x="52" y="43" width="76" height="102" rx="14" fill="#f4e66c"/><circle cx="91" cy="94" r="27" fill="'+C.cream+'"/><circle cx="91" cy="94" r="20" fill="#f1d25d"/><path fill="'+C.green+'" d="M109 29c9 1 16 6 21 14-10 4-20 2-27-5 0-4 2-7 6-9Z"/>'),
    soda:svg('<rect x="64" y="31" width="52" height="120" rx="18" fill="'+C.blue+'"/><rect x="73" y="19" width="34" height="18" rx="8" fill="'+C.gray+'"/><circle cx="90" cy="91" r="18" fill="'+C.cream+'"/><circle cx="90" cy="91" r="11" fill="'+C.orange+'"/>'),
    hotchocolate:svg('<path fill="'+C.cream+'" d="M47 53h81v63c0 22-17 36-40 36s-41-14-41-36V53Z"/><path fill="'+C.brown+'" d="M57 62h61v45c0 16-12 27-30 27s-31-11-31-27V62Z"/><path fill="'+C.cream+'" d="M128 69h10c18 0 18 31 0 32h-10V88h8c6 0 7-7 0-7h-8V69Z"/><circle cx="76" cy="58" r="8" fill="'+C.white+'"/><circle cx="94" cy="56" r="9" fill="'+C.white+'"/><circle cx="110" cy="61" r="7" fill="'+C.white+'"/>'),
    mussels:svg('<path fill="'+C.dark+'" d="M45 119c0-37 19-74 45-88 27 14 46 51 46 88-24 24-67 24-91 0Z"/><path fill="'+C.violet+'" d="M58 113c3-25 15-50 32-63 18 13 30 38 33 63-18 12-47 12-65 0Z"/><path fill="'+C.cream+'" d="M71 106c5-14 12-24 19-31 8 7 15 17 20 31-12 6-27 6-39 0Z"/>'),
    squid:svg('<path fill="'+C.pink+'" d="M90 29c25 0 43 24 39 54-3 23-18 40-39 40S54 106 51 83c-4-30 14-54 39-54Z"/><path fill="'+C.pink+'" d="M57 111c-6 17-4 30 4 39 7-11 12-20 18-27-3 17 1 29 9 35 3-14 7-24 12-31 2 13 8 23 17 29 0-17 5-31 16-42-21 9-56 8-76-3Z"/><circle cx="75" cy="79" r="5" fill="'+C.ink+'"/><circle cx="105" cy="79" r="5" fill="'+C.ink+'"/>'),
    octopus:svg('<circle cx="90" cy="76" r="43" fill="'+C.violet+'"/><circle cx="76" cy="71" r="5" fill="'+C.white+'"/><circle cx="104" cy="71" r="5" fill="'+C.white+'"/><circle cx="76" cy="71" r="2" fill="'+C.ink+'"/><circle cx="104" cy="71" r="2" fill="'+C.ink+'"/><path fill="'+C.violet+'" d="M51 102c-16 11-23 29-18 46 8-10 17-18 28-23-4 14-1 25 8 34 5-13 12-22 22-28 0 13 5 24 14 31 2-15 9-27 20-36 5 8 12 15 21 20-1-22-10-38-27-47-19 13-48 14-68 3Z"/>'),
    seafood:svg('<g transform="translate(-7 0)"><path fill="'+C.pink+'" d="M41 82c13-22 42-27 58-9 12 14 7 35-10 44-16 9-36 6-46-7-8-9-9-19-2-28Z"/><path fill="'+C.dark+'" d="M101 119c0-28 15-55 36-67 20 12 35 39 35 67-18 18-53 18-71 0Z"/><circle cx="132" cy="64" r="23" fill="'+C.violet+'"/></g>'),
    muffin:svg('<path fill="'+C.orange+'" d="M56 79h68l-10 68H66L56 79Z"/><path fill="'+C.pink+'" d="M52 83c-10-21 6-40 27-36 9-18 37-15 42 5 22-1 32 23 18 38H52v-7Z"/><circle cx="82" cy="66" r="5" fill="'+C.brown+'"/><circle cx="111" cy="63" r="5" fill="'+C.brown+'"/>'),
    flan:svg('<ellipse cx="90" cy="132" rx="51" ry="13" fill="'+C.cream+'"/><path fill="'+C.yellow+'" d="M58 64h64l13 58c-20 18-70 18-90 0l13-58Z"/><ellipse cx="90" cy="64" rx="32" ry="12" fill="'+C.brown+'"/>'),
    candy:svg('<path fill="'+C.yellow+'" d="M43 69 20 55l8 35-8 35 23-14V69Zm94 0 23-14-8 35 8 35-23-14V69Z"/><rect x="42" y="61" width="96" height="58" rx="24" fill="'+C.pink+'"/>'),
    puree:svg('<ellipse cx="90" cy="124" rx="59" ry="20" fill="'+C.cream+'"/><path fill="'+C.yellow+'" d="M46 116c8-30 23-46 44-46s37 16 44 46c-17 17-70 17-88 0Z"/><circle cx="108" cy="86" r="8" fill="'+C.green+'"/>'),

    shopping:svg('<path fill="'+C.violet+'" d="M39 68h45l-7 78H46l-7-78Z"/><path fill="'+C.yellow+'" d="M95 58h47l-6 88H101l-6-88Z"/><path fill="none" d="M49 72c0-19 8-31 19-31s18 12 18 31M105 63c0-19 7-31 18-31s18 12 18 31" stroke="'+C.ink+'" stroke-width="8" stroke-linecap="round"/>'),
    fishing:svg('<path fill="'+C.blue+'" d="M28 124c23-15 51-15 74 0 23-15 50-15 74 0v27H28v-27Z"/><path fill="'+C.mint+'" d="M57 91c18-25 49-29 72-9l19-14-4 27 4 27-19-14c-23 20-54 16-72-9 8-3 12-5 19-8-7-3-12-5-19-10Z"/><circle cx="83" cy="88" r="4" fill="'+C.ink+'"/><path fill="'+C.brown+'" d="M27 26h9v102h-9z"/><path fill="none" d="M35 31c51 7 71 37 74 68" stroke="'+C.gray+'" stroke-width="5" stroke-linecap="round"/>'),
    garden:svg('<path fill="'+C.brown+'" d="M70 97h40l-8 51H78l-8-51Z"/><circle cx="73" cy="86" r="22" fill="'+C.green+'"/><circle cx="105" cy="79" r="25" fill="'+C.mint+'"/><circle cx="92" cy="58" r="22" fill="'+C.green+'"/><rect x="88" y="77" width="8" height="33" rx="4" fill="'+C.brown+'"/><path fill="'+C.yellow+'" d="M130 93h27l-5 43h-17l-5-43Z"/>'),
    train:svg('<path fill="'+C.red+'" d="M52 47h76v90H52V47Z"/><circle cx="72" cy="142" r="10" fill="'+C.dark+'"/><circle cx="108" cy="142" r="10" fill="'+C.dark+'"/><rect x="63" y="59" width="54" height="34" rx="8" fill="'+C.cream+'"/><rect x="65" y="103" width="50" height="13" rx="6" fill="'+C.yellow+'"/>'),
    online:svg('<rect x="35" y="42" width="110" height="78" rx="12" fill="'+C.blue+'"/><rect x="44" y="51" width="92" height="60" rx="8" fill="'+C.cream+'"/><path fill="'+C.violet+'" d="M64 72h52v18H64z"/><circle cx="90" cy="81" r="7" fill="'+C.yellow+'"/><rect x="78" y="120" width="24" height="13" fill="'+C.gray+'"/><rect x="62" y="133" width="56" height="9" rx="4" fill="'+C.gray+'"/>'),
    level:svg('<rect x="39" y="46" width="102" height="88" rx="18" fill="'+C.violet+'"/><path fill="'+C.cream+'" d="M62 88h20v-20h16v20h20v16H98v20H82v-20H62V88Z"/><circle cx="120" cy="76" r="8" fill="'+C.yellow+'"/><circle cx="132" cy="94" r="8" fill="'+C.pink+'"/>'),
    learn:svg('<path fill="'+C.yellow+'" d="M90 29 153 59 90 89 27 59 90 29Z"/><path fill="'+C.violet+'" d="M48 75v38c18 18 66 18 84 0V75L90 95 48 75Z"/><rect x="145" y="58" width="7" height="55" rx="3" fill="'+C.ink+'"/><circle cx="149" cy="119" r="9" fill="'+C.pink+'"/>'),

    ankleboots:svg('<path fill="'+C.brown+'" d="M49 44h47v58c18 0 34 8 40 24v18H50c-11 0-19-8-19-19 0-12 8-20 18-23V44Z"/>'),
    slippers:svg('<path fill="'+C.mint+'" d="M29 110c0-29 21-51 49-51 23 0 38 18 39 43-21 11-43 18-67 22-12 2-21-4-21-14Z"/><path fill="'+C.pink+'" d="M75 108c1-27 20-48 47-48 20 0 34 16 35 39-20 10-40 17-61 20-12 2-21-2-21-11Z"/>'),
    handkerchief:svg('<path fill="'+C.blue+'" d="M39 37h102v102H39z"/><path fill="'+C.cream+'" d="M56 54h68v68H56z"/><circle cx="90" cy="88" r="20" fill="'+C.pink+'"/>'),
    beanie:svg('<path fill="'+C.violet+'" d="M49 102c0-39 18-65 41-65s41 26 41 65H49Z"/><rect x="43" y="98" width="94" height="28" rx="12" fill="'+C.pink+'"/><circle cx="90" cy="29" r="14" fill="'+C.yellow+'"/>'),
    beret:svg('<ellipse cx="90" cy="85" rx="55" ry="34" fill="'+C.red+'"/><path fill="'+C.red+'" d="M58 89h64v28c-21 12-43 12-64 0V89Z"/><rect x="86" y="42" width="8" height="18" rx="4" fill="'+C.red+'"/>'),
    handbag:svg('<path fill="'+C.pink+'" d="M43 69h94l-8 73H51l-8-73Z"/><path fill="none" d="M65 70c0-24 11-39 25-39s25 15 25 39" stroke="'+C.ink+'" stroke-width="8" stroke-linecap="round"/>'),
    wallet:svg('<rect x="38" y="55" width="104" height="76" rx="14" fill="'+C.brown+'"/><rect x="84" y="72" width="58" height="40" rx="9" fill="'+C.orange+'"/><circle cx="96" cy="92" r="5" fill="'+C.cream+'"/>'),
    coinpurse:svg('<path fill="'+C.yellow+'" d="M49 70h82l8 58c-23 22-75 22-98 0l8-58Z"/><rect x="63" y="52" width="54" height="21" rx="9" fill="'+C.brown+'"/><circle cx="76" cy="63" r="5" fill="'+C.cream+'"/><circle cx="104" cy="63" r="5" fill="'+C.cream+'"/>'),
    suitcase:svg('<rect x="48" y="49" width="84" height="99" rx="16" fill="'+C.orange+'"/><rect x="73" y="28" width="34" height="25" rx="8" fill="'+C.brown+'"/><circle cx="65" cy="151" r="8" fill="'+C.dark+'"/><circle cx="115" cy="151" r="8" fill="'+C.dark+'"/><circle cx="77" cy="89" r="12" fill="'+C.yellow+'"/><path fill="'+C.blue+'" d="M97 69h18l-7 17 10 12-17 3-9 15-6-17-17-6 15-10 1-18 12 4Z"/>'),
    waistbag:svg('<path fill="'+C.violet+'" d="M50 78h80l8 49c-24 18-72 18-96 0l8-49Z"/><rect x="67" y="94" width="46" height="20" rx="8" fill="'+C.yellow+'"/><rect x="19" y="90" width="33" height="10" rx="5" fill="'+C.gray+'"/><rect x="128" y="90" width="33" height="10" rx="5" fill="'+C.gray+'"/>'),
    umbrella:svg('<path fill="'+C.blue+'" d="M33 86c7-34 29-56 57-56s50 22 57 56H33Z"/><path fill="none" d="M90 30v93c0 18 19 18 19 1" stroke="'+C.ink+'" stroke-width="8" stroke-linecap="round"/>'),
    heels:svg('<path fill="'+C.red+'" d="M43 98c24 0 44 6 59 18l29 23H50c-15 0-25-8-25-20 0-11 7-18 18-21Z"/><rect x="112" y="132" width="10" height="28" rx="4" fill="'+C.ink+'"/>'),
    necklace:svg('<path fill="none" d="M50 45c6 54 27 86 40 86s34-32 40-86" stroke="'+C.yellow+'" stroke-width="10" stroke-linecap="round"/><circle cx="90" cy="133" r="17" fill="'+C.pink+'"/>'),
    bracelet:svg('<circle cx="90" cy="90" r="47" fill="none" stroke="'+C.mint+'" stroke-width="17"/><circle cx="126" cy="58" r="10" fill="'+C.yellow+'"/>'),
    ring:svg('<circle cx="90" cy="101" r="34" fill="none" stroke="'+C.yellow+'" stroke-width="14"/><path fill="'+C.blue+'" d="m90 35 22 25-22 21-22-21 22-25Z"/>'),
    earrings:svg('<circle cx="63" cy="65" r="12" fill="'+C.yellow+'"/><circle cx="117" cy="65" r="12" fill="'+C.yellow+'"/><path fill="'+C.pink+'" d="M63 77c18 19 17 45 0 62-17-17-18-43 0-62Zm54 0c18 19 17 45 0 62-17-17-18-43 0-62Z"/>'),
    watch:svg('<rect x="77" y="25" width="26" height="130" rx="12" fill="'+C.violet+'"/><circle cx="90" cy="90" r="34" fill="'+C.cream+'"/><circle cx="90" cy="90" r="23" fill="'+C.blue+'"/><rect x="87" y="72" width="6" height="20" rx="3" fill="'+C.ink+'"/><rect x="90" y="87" width="16" height="6" rx="3" fill="'+C.ink+'"/>'),
    brooch:svg('<circle cx="90" cy="90" r="43" fill="'+C.pink+'"/><path fill="'+C.yellow+'" d="M90 51 101 78l29 2-22 18 7 28-25-15-25 15 7-28-22-18 29-2 11-27Z"/>'),
    chain:svg('<g fill="none" stroke="'+C.yellow+'" stroke-width="11"><ellipse cx="55" cy="91" rx="25" ry="16" transform="rotate(-25 55 91)"/><ellipse cx="90" cy="91" rx="25" ry="16" transform="rotate(25 90 91)"/><ellipse cx="125" cy="91" rx="25" ry="16" transform="rotate(-25 125 91)"/></g>')
  };

  const baseFood=window.foodArt;
  const baseClothes=window.clothingArt;
  const baseActivities=window.activityArt;
  window.foodArt=function(kind){ return custom[kind] || (baseFood ? baseFood(kind) : ''); };
  window.clothingArt=function(kind){ return custom[kind] || (baseClothes ? baseClothes(kind) : ''); };
  window.activityArt=function(kind){ return custom[kind] || (baseActivities ? baseActivities(kind) : ''); };

  function remap(list,map){
    if(!Array.isArray(list)) return;
    list.forEach(function(word){ if(map[word.id]) word.art=map[word.id]; });
  }
  try { remap(FOOD_WORDS,{mussels:'mussels',squid:'squid',octopus:'octopus',seafood:'seafood',wine:'wine',beer:'beer',juice:'juice',lemonade:'lemonade',soda:'soda',hotchocolate:'hotchocolate',muffin:'muffin',flan:'flan',candy:'candy',puree:'puree'}); } catch(e){}
  try { remap(ACTIVITY_WORDS,{shopping:'shopping',fish:'fishing',garden:'garden',train:'train',online:'online',level:'level',learn:'learn'}); } catch(e){}
  try { remap(CLOTHING_WORDS,{ankleboots:'ankleboots',slippers:'slippers',handkerchief:'handkerchief',beanie:'beanie',beret:'beret',handbag:'handbag',wallet:'wallet',coinpurse:'coinpurse',suitcase:'suitcase',waistbag:'waistbag',umbrella:'umbrella',heels:'heels',necklace:'necklace',bracelet:'bracelet',ring:'ring',earrings:'earrings',watch:'watch',brooch:'brooch',chain:'chain'}); } catch(e){}

  function syncArtVisibility(){
    try {
      if(!window.els || !els.studyCard || !els.foodArt) return;
      const has=!!String(els.foodArt.innerHTML || '').trim();
      els.studyCard.classList.toggle('no-art',!has);
      els.foodArt.hidden=!has;
    } catch(e){}
  }
  try {
    if(typeof renderStudy==='function'){
      const originalRenderStudy=renderStudy;
      renderStudy=function(){ originalRenderStudy(); syncArtVisibility(); };
    }
  } catch(e){}

  document.addEventListener('DOMContentLoaded',function(){
    syncArtVisibility();
    const target=document.getElementById('foodArt');
    if(target && window.MutationObserver){
      new MutationObserver(syncArtVisibility).observe(target,{childList:true,subtree:true,characterData:true});
    }
  });
})();

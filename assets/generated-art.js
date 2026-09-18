(function(){
  const IMG={
    clothes:"assets/generated/study-clothes-v3.webp",
    foods:"assets/generated/study-foods-v3.webp",
    activities:"assets/generated/study-activities-v3.webp",
    clothesExtra:"assets/generated/study-clothes-extra-v1.webp",
    clothesNew:"assets/generated/study-clothes-new-v1.webp",
    foodsExtra:"assets/generated/study-foods-extra-v1.webp",
    activitiesExtra:"assets/generated/study-activities-extra-v1.webp"
  };
  const MAP={
    clothes:{tshirt:[0,0],shirt:[1,0],blouse:[2,0],sweater:[3,0],hood:[4,0],jacket:[5,0],coat:[0,1],dress:[1,1],skirt:[2,1],trousers:[3,1],jeans:[4,1],shorts:[5,1],suit:[0,2],pajamas:[1,2],underwear:[2,2],socks:[3,2],shoes:[4,2],sneakers:[5,2],boots:[0,3],sandals:[1,3],scarf:[2,3],gloves:[3,3],sunglasses:[4,3],belt:[5,3],tie:[0,4],bowtie:[1,4],hat:[2,4],cap:[3,4],backpack:[5,4]},
    clothesExtra:{ankleboots:[0,0],heels:[1,0],slippers:[2,0],umbrella:[3,0],handkerchief:[4,0],necklace:[5,0],bracelet:[0,1],ring:[1,1],earrings:[2,1],watch:[3,1],brooch:[4,1],chain:[5,1],beret:[0,2],handbag:[1,2],wallet:[2,2],coinpurse:[3,2],suitcase:[4,2],waistbag:[5,2]},
    clothesNew:{hoodie:[0,0],vest:[1,0],polo:[0,1],cardigan:[1,1]},
    foods:{bread:[0,0],cheese:[1,0],egg:[2,0],milk:[3,0],rice:[4,0],pasta:[5,0],chicken:[6,0],fish:[0,1],meat:[1,1],potato:[2,1],tomato:[3,1],apple:[4,1],banana:[5,1],orange:[6,1],water:[0,2],coffee:[1,2],tea:[2,2],salt:[3,2],sugar:[4,2],bag:[5,2],bottle:[6,2],butter:[0,3],jar:[1,3],honey:[2,3],beans:[3,3],lentils:[4,3],soup:[5,3],salad:[6,3],sandwich:[0,4],pizza:[1,4],cookie:[2,4],cake:[3,4],icecream:[4,4],sausage:[5,4],shellfish:[6,4]},
    foodsExtra:{chocolate:[0,0],candy:[1,0],muffin:[2,0],flan:[0,1],juice:[1,1],soda:[2,1],wine:[0,2],beer:[1,2],puree:[2,2]},
    activities:{do_sport:[0,0],gym:[1,0],yoga:[2,0],run:[3,0],swim:[4,0],cycle:[5,0],football:[6,0],tennis:[0,1],dance:[1,1],videogames:[2,1],boardgames:[3,1],cards:[4,1],chess:[5,1],puzzles:[6,1],books:[0,2],news:[1,2],notes:[2,2],languages:[3,2],spanish:[4,2],homework:[5,2],podcast:[6,2],draw:[0,3],paint:[1,3],photos:[2,3],videos:[3,3],stories:[4,3],crafts:[5,3],guitar:[6,3],cook:[0,4],movies:[1,4],series:[2,4],music:[3,4],walk:[4,4],travel:[5,4],rest:[0,5],friends:[1,5],hike:[2,5],camp:[3,5],plants:[4,5],dog:[5,5],picnic:[6,5]},
    activitiesExtra:{train:[0,0],online:[1,0],level:[2,0],learn:[3,0],shopping:[0,1],fishing:[1,1],garden:[2,1]}
  };

  function spriteFrom(imageKey,mapKey,key,cols,rows){
    const pos=(MAP[mapKey]||{})[key];
    if(!pos) return "";
    const x=cols===1?0:(pos[0]/(cols-1))*100;
    const y=rows===1?0:(pos[1]/(rows-1))*100;
    return '<div class="generated-sprite generated-sprite-'+mapKey+'" aria-hidden="true" style="background-image:url('+IMG[imageKey]+');background-size:'+(cols*100)+'% '+(rows*100)+'%;background-position:'+x+'% '+y+'%;"></div>';
  }

  function firstSprite(options){
    for(let i=0;i<options.length;i++){
      const html=spriteFrom.apply(null,options[i]);
      if(html) return html;
    }
    return "";
  }

  window.foodArt=function(kind){
    return firstSprite([
      ["foods","foods",kind,7,5],
      ["foodsExtra","foodsExtra",kind,3,3]
    ]);
  };
  window.clothingArt=function(kind){
    const directRaster={
      hoodie:"assets/generated/clothes-new-raster/hoodie.webp?v=20260918-raster-final1",
      vest:"assets/generated/clothes-new-raster/vest.webp?v=20260918-raster-final1",
      polo:"assets/generated/clothes-new-raster/polo.webp?v=20260918-raster-final1",
      cardigan:"assets/generated/clothes-new-raster/cardigan.webp?v=20260918-raster-final1"
    };
    if(directRaster[kind]){
      return '<img class="precise-art new-clothes-raster" src="'+directRaster[kind]+'" alt="" aria-hidden="true" loading="eager" decoding="async">';
    }
    return firstSprite([
      ["clothes","clothes",kind,6,5],
      ["clothesExtra","clothesExtra",kind,6,3]
    ]);
  };
  window.activityArt=function(kind){
    return firstSprite([
      ["activities","activities",kind,7,6],
      ["activitiesExtra","activitiesExtra",kind,4,2]
    ]);
  };

  const generatedSpriteStyle=document.createElement('style');
  generatedSpriteStyle.textContent=
    '.food-art .generated-sprite{width:min(100%,360px);aspect-ratio:1/1;background-repeat:no-repeat;flex:0 0 auto}'+
    '@media(max-width:520px){.food-art .generated-sprite{width:min(100%,260px)}}';
  document.head.appendChild(generatedSpriteStyle);
})();

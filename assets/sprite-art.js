(function(){
  "use strict";

  const ASSET_VERSION = "20260918-2";
  const withVersion = (url) => `${url}?v=${ASSET_VERSION}`;

  const SPRITE_IMAGES = {
    clothes: withVersion("assets/picture-labels/study-clothes-v3.webp"),
    foods: withVersion("assets/picture-labels/study-foods-v3.webp"),
    activities: withVersion("assets/picture-labels/study-activities-v3.webp"),
    clothesExtra: withVersion("assets/picture-labels/study-clothes-extra-v1.webp"),
    clothesNew: withVersion("assets/picture-labels/study-clothes-new-v1.webp"),
    foodsExtra: withVersion("assets/picture-labels/study-foods-extra-v1.webp"),
    activitiesExtra: withVersion("assets/picture-labels/study-activities-extra-v1.webp")
  };

  const SPRITE_MAP={
    clothes:{tshirt:[0,0],shirt:[1,0],blouse:[2,0],sweater:[3,0],hood:[4,0],jacket:[5,0],coat:[0,1],dress:[1,1],skirt:[2,1],trousers:[3,1],jeans:[4,1],shorts:[5,1],suit:[0,2],pajamas:[1,2],underwear:[2,2],socks:[3,2],shoes:[4,2],sneakers:[5,2],boots:[0,3],sandals:[1,3],scarf:[2,3],gloves:[3,3],sunglasses:[4,3],belt:[5,3],tie:[0,4],bowtie:[1,4],hat:[2,4],cap:[3,4],backpack:[5,4]},
    clothesExtra:{ankleboots:[0,0],heels:[1,0],slippers:[2,0],umbrella:[3,0],handkerchief:[4,0],necklace:[5,0],bracelet:[0,1],ring:[1,1],earrings:[2,1],watch:[3,1],brooch:[4,1],chain:[5,1],beret:[0,2],handbag:[1,2],wallet:[2,2],coinpurse:[3,2],suitcase:[4,2],waistbag:[5,2]},
    clothesNew:{hoodie:[0,0],vest:[1,0],polo:[0,1],cardigan:[1,1]},
    foods:{bread:[0,0],cheese:[1,0],egg:[2,0],milk:[3,0],rice:[4,0],pasta:[5,0],chicken:[6,0],fish:[0,1],meat:[1,1],potato:[2,1],tomato:[3,1],apple:[4,1],banana:[5,1],orange:[6,1],water:[0,2],coffee:[1,2],tea:[2,2],salt:[3,2],sugar:[4,2],bag:[5,2],bottle:[6,2],butter:[0,3],jar:[1,3],honey:[2,3],beans:[3,3],lentils:[4,3],soup:[5,3],salad:[6,3],sandwich:[0,4],pizza:[1,4],cookie:[2,4],cake:[3,4],icecream:[4,4],sausage:[5,4],shellfish:[6,4]},
    foodsExtra:{chocolate:[0,0],candy:[1,0],muffin:[2,0],flan:[0,1],juice:[1,1],soda:[2,1],wine:[0,2],beer:[1,2],puree:[2,2]},
    activities:{do_sport:[0,0],gym:[1,0],yoga:[2,0],run:[3,0],swim:[4,0],cycle:[5,0],football:[6,0],tennis:[0,1],dance:[1,1],videogames:[2,1],boardgames:[3,1],cards:[4,1],chess:[5,1],puzzles:[6,1],books:[0,2],news:[1,2],notes:[2,2],languages:[3,2],spanish:[4,2],homework:[5,2],podcast:[6,2],draw:[0,3],paint:[1,3],photos:[2,3],videos:[3,3],stories:[4,3],crafts:[5,3],guitar:[6,3],cook:[0,4],movies:[1,4],series:[2,4],music:[3,4],walk:[4,4],travel:[5,4],rest:[0,5],friends:[1,5],hike:[2,5],camp:[3,5],plants:[4,5],dog:[5,5],picnic:[6,5]},
    activitiesExtra:{train:[0,0],online:[1,0],level:[2,0],learn:[3,0],shopping:[0,1],fishing:[1,1],garden:[2,1]}
  };

  function spriteFrom(imageKey,mapKey,id,cols,rows){
    const pos=(SPRITE_MAP[mapKey]||{})[id];
    const src=SPRITE_IMAGES[imageKey];
    if(!pos||!src) return "";

    // clothesExtra is intentionally rendered with a clipped <img>, not
    // background-position. This avoids percentage/subpixel sprite drift.
    if(mapKey==="clothesExtra"){
      const cellScale=101; // trim only 0.5% from each cell edge
      const left=-(pos[0]*cellScale+(cellScale-100)/2);
      const top=-(pos[1]*cellScale+(cellScale-100)/2);

      return '<div class="generated-sprite generated-sprite-clothesExtra" aria-hidden="true" '+
        'style="width:min(260px,92%);aspect-ratio:1/1;display:grid;place-items:center;">'+
        '<div class="clothes-extra-crop" style="position:relative;width:86%;height:86%;overflow:hidden;">'+
        '<img src="'+src+'" alt="" draggable="false" '+
        'style="position:absolute;display:block;max-width:none!important;max-height:none!important;'+
        'width:'+(cols*cellScale)+'%;height:'+(rows*cellScale)+'%;'+
        'left:'+left+'%;top:'+top+'%;object-fit:fill;">'+
        '</div></div>';
    }

    const x=cols===1?0:(pos[0]/(cols-1))*100;
    const y=rows===1?0:(pos[1]/(rows-1))*100;

    return '<div class="generated-sprite generated-sprite-'+mapKey+'" aria-hidden="true" '+
      'style="width:min(260px,92%);aspect-ratio:1/1;background-image:url(\''+src+'\');'+
      'background-repeat:no-repeat;background-size:'+(cols*100)+'% '+(rows*100)+'%;'+
      'background-position:'+x+'% '+y+'%;"></div>';
  }

  function firstSprite(options){
    for(let i=0;i<options.length;i++){
      const html=spriteFrom.apply(null,options[i]);
      if(html) return html;
    }
    return "";
  }

  window.foodArt=function(id){
    return firstSprite([
      ["foods","foods",id,7,5],
      ["foodsExtra","foodsExtra",id,3,3]
    ]);
  };

  window.clothingArt=function(id){
    return firstSprite([
      ["clothes","clothes",id,6,5],
      ["clothesExtra","clothesExtra",id,6,3],
      ["clothesNew","clothesNew",id,2,2]
    ]);
  };

  window.activityArt=function(id){
    return firstSprite([
      ["activities","activities",id,7,6],
      ["activitiesExtra","activitiesExtra",id,4,2]
    ]);
  };
})();

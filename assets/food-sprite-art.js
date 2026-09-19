(function(){
  "use strict";

  const ASSET_VERSION = window.__ASSET_CACHE_VERSION__ || (window.__ASSET_CACHE_VERSION__ = String(Date.now()));

  function withVersion(url){
    const value=String(url || "");
    if(!value || value.indexOf("assets/")===-1) return value;
    const hashIndex=value.indexOf("#");
    const hash=hashIndex>=0 ? value.slice(hashIndex) : "";
    const withoutHash=hashIndex>=0 ? value.slice(0,hashIndex) : value;
    const queryIndex=withoutHash.indexOf("?");
    const base=queryIndex>=0 ? withoutHash.slice(0,queryIndex) : withoutHash;
    const query=queryIndex>=0 ? withoutHash.slice(queryIndex+1) : "";
    const params=new URLSearchParams(query);
    params.set("v",ASSET_VERSION);
    return base+"?"+params.toString()+hash;
  }

  const FOOD_SPRITE_IMAGE=withVersion("assets/picture-labels/study-foods-v3.webp");
  const FOOD_EXTRA_SPRITE_IMAGE=withVersion("assets/picture-labels/study-foods-extra-v1.webp");

  // Historical 7x5 food grid. Keep this module independent from clothing sprites.
  const FOOD_SPRITE_MAP={
    bread:[0,0],cheese:[1,0],egg:[2,0],milk:[3,0],rice:[4,0],pasta:[5,0],chicken:[6,0],
    fish:[0,1],meat:[1,1],potato:[2,1],tomato:[3,1],apple:[4,1],banana:[5,1],orange:[6,1],
    water:[0,2],coffee:[1,2],tea:[2,2],salt:[3,2],sugar:[4,2],bag:[5,2],bottle:[6,2],
    butter:[0,3],jar:[1,3],honey:[2,3],beans:[3,3],lentils:[4,3],soup:[5,3],salad:[6,3],
    sandwich:[0,4],pizza:[1,4],cookie:[2,4],cake:[3,4],icecream:[4,4],sausage:[5,4],shellfish:[6,4]
  };

  const FOOD_EXTRA_MAP={
    chocolate:[0,0],candy:[1,0],muffin:[2,0],
    flan:[0,1],juice:[1,1],soda:[2,1],
    wine:[0,2],beer:[1,2],puree:[2,2]
  };

  function sprite(src,pos,cols,rows,mapKey,cellAspect){
    if(!pos||!src) return "";
    const x=cols===1?0:(pos[0]/(cols-1))*100;
    const y=rows===1?0:(pos[1]/(rows-1))*100;
    return '<div class="generated-sprite generated-sprite-'+mapKey+'" aria-hidden="true" '+
      'style="width:min(260px,92%);aspect-ratio:'+(cellAspect||1)+'/1;background-image:url(\''+src+'\');'+
      'background-repeat:no-repeat;background-size:'+(cols*100)+'% '+(rows*100)+'%;'+
      'background-position:'+x+'% '+y+'%;"></div>';
  }

  function directFoodArt(id){
    const value=String(id || "");
    if(!/^assets\/picture-labels\/foods\/[a-z0-9_-]+\.(?:png|webp)$/i.test(value)) return "";
    return '<img class="food-direct-image" src="'+withVersion(value)+'" alt="" aria-hidden="true" draggable="false" loading="eager" decoding="async" style="width:min(260px,92%);max-height:260px;aspect-ratio:1/1;object-fit:contain;display:block;margin:auto">';
  }

  window.foodArt=function(id){
    const direct=directFoodArt(id);
    if(direct) return direct;
    if(FOOD_SPRITE_MAP[id]) return sprite(FOOD_SPRITE_IMAGE,FOOD_SPRITE_MAP[id],7,5,"foods",0.9525);
    if(FOOD_EXTRA_MAP[id]) return sprite(FOOD_EXTRA_SPRITE_IMAGE,FOOD_EXTRA_MAP[id],3,3,"foodsExtra");
    return "";
  };
})();

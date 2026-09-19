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

  const SPRITE_IMAGES = {
    clothes: withVersion("assets/picture-labels/study-clothes-v3.webp"),
    activities: withVersion("assets/picture-labels/study-activities-v3.webp"),
    clothesNew: withVersion("assets/picture-labels/study-clothes-new-v1.webp"),
    activitiesExtra: withVersion("assets/picture-labels/study-activities-extra-v1.webp")
  };

  const SPRITE_MAP={
    clothes:{tshirt:[0,0],shirt:[1,0],blouse:[2,0],sweater:[3,0],hood:[4,0],jacket:[5,0],coat:[0,1],dress:[1,1],skirt:[2,1],trousers:[3,1],jeans:[4,1],shorts:[5,1],suit:[0,2],pajamas:[1,2],underwear:[2,2],socks:[3,2],shoes:[4,2],sneakers:[5,2],boots:[0,3],sandals:[1,3],scarf:[2,3],gloves:[3,3],sunglasses:[4,3],belt:[5,3],tie:[0,4],bowtie:[1,4],hat:[2,4],cap:[3,4],backpack:[5,4]},
    clothesNew:{hoodie:[0,0],vest:[1,0],polo:[0,1],cardigan:[1,1]},
    activities:{do_sport:[0,0],gym:[1,0],yoga:[2,0],run:[3,0],swim:[4,0],cycle:[5,0],football:[6,0],tennis:[0,1],dance:[1,1],videogames:[2,1],level:[2,1],boardgames:[3,1],cards:[4,1],chess:[5,1],puzzles:[6,1],books:[0,2],news:[1,2],notes:[2,2],languages:[3,2],learn:[3,2],spanish:[4,2],homework:[5,2],podcast:[6,2],draw:[0,3],paint:[1,3],photos:[2,3],videos:[3,3],stories:[4,3],crafts:[5,3],guitar:[6,3],cook:[0,4],movies:[1,4],series:[2,4],music:[3,4],walk:[4,4],travel:[5,4],rest:[0,5],friends:[1,5],hike:[2,5],camp:[3,5],plants:[4,5],dog:[5,5],picnic:[6,5]},
    activitiesExtra:{train:[0,0],online:[1,0],level:[2,0],learn:[3,0],shopping:[0,1],fishing:[1,1],garden:[2,1]}
  };


  const CLOTHING_CARD_IMAGES={
    size:"size.webp",
    fittingroom:"fittingroom.webp",
    bra:"bra.webp",
    beanie:"beanie.webp",
    zipper:"zipper.webp",
    button:"button.webp",
    try_on:"try_on.webp",
    put_on:"put_on.webp",
    take_off:"take_off.webp",
    change_clothes:"change_clothes.webp",
    fasten:"fasten.webp",
    unfasten:"unfasten.webp",
    fits_well:"fits_well.webp",
    too_big:"too_big.webp",
    too_small:"too_small.webp",
    too_tight:"too_tight.webp",
    length_fit:"length_fit.webp",
    match_with:"match_with.webp",
    on_sale:"on_sale.webp",
    another_size:"another_size.webp",
    can_try_it:"can_try_it.webp",
    where_fittingrooms:"where_fittingrooms.webp",
    take_it:"take_it.webp"
  };

  function clothingCardArt(id){
    const file=CLOTHING_CARD_IMAGES[id];
    if(!file) return "";
    return '<img class="clothes-extra-image" '+
      'src="'+withVersion('assets/picture-labels/'+file)+'" '+
      'alt="" aria-hidden="true" draggable="false">';
  }


  const CLOTHES_EXTRA_IMAGES={
    ankleboots:"ankleboots.webp",
    heels:"heels.webp",
    slippers:"slippers.webp",
    umbrella:"umbrella.webp",
    handkerchief:"handkerchief.webp",
    necklace:"necklace.webp",
    bracelet:"bracelet.webp",
    ring:"ring.webp",
    earrings:"earrings.webp",
    watch:"watch.webp",
    brooch:"brooch.webp",
    chain:"chain.webp",
    beret:"beret.webp",
    handbag:"handbag.webp",
    wallet:"wallet.webp",
    coinpurse:"coinpurse.webp",
    suitcase:"suitcase.webp",
    waistbag:"waistbag.webp"
  };

  function clothesExtraArt(id){
    const file=CLOTHES_EXTRA_IMAGES[id];
    if(!file) return "";
    return '<img class="clothes-extra-image" '+
      'src="'+withVersion('assets/picture-labels/clothes-extra/'+file)+'" '+
      'alt="" aria-hidden="true" draggable="false">';
  }

  function spriteFrom(imageKey,mapKey,id,cols,rows){
    const pos=(SPRITE_MAP[mapKey]||{})[id];
    const src=SPRITE_IMAGES[imageKey];
    if(!pos||!src) return "";

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


  window.clothingArt=function(id){
    const card=clothingCardArt(id);
    if(card) return card;

    const extra=clothesExtraArt(id);
    if(extra) return extra;

    return firstSprite([
      ["clothes","clothes",id,6,5],
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

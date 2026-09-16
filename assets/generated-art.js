(function(){
  const IMG={
    clothes:"assets/generated/study-clothes-v3.webp",
    foods:"assets/generated/study-foods-v3.webp",
    activities:"assets/generated/study-activities-v3.webp"
  };
  const MAP={
    clothes:{tshirt:[0,0],shirt:[1,0],blouse:[2,0],sweater:[3,0],hood:[4,0],jacket:[5,0],coat:[0,1],dress:[1,1],skirt:[2,1],trousers:[3,1],jeans:[4,1],shorts:[5,1],suit:[0,2],pajamas:[1,2],underwear:[2,2],socks:[3,2],shoes:[4,2],sneakers:[5,2],boots:[0,3],ankleboots:[0,3],sandals:[1,3],slippers:[1,3],scarf:[2,3],handkerchief:[2,3],gloves:[3,3],sunglasses:[4,3],belt:[5,3],tie:[0,4],bowtie:[1,4],hat:[2,4],cap:[3,4],beanie:[4,4],beret:[4,4],backpack:[5,4],handbag:[5,4],wallet:[5,4],coinpurse:[5,4],suitcase:[5,4],waistbag:[5,4],umbrella:[5,4],heels:[4,2],necklace:[2,4],bracelet:[1,4],ring:[2,4],earrings:[2,4],watch:[0,4],brooch:[2,4],chain:[2,4]},
    foods:{bread:[0,0],cheese:[1,0],egg:[2,0],milk:[3,0],rice:[4,0],pasta:[5,0],chicken:[6,0],fish:[0,1],meat:[1,1],potato:[2,1],tomato:[3,1],apple:[4,1],banana:[5,1],orange:[6,1],water:[0,2],coffee:[1,2],tea:[2,2],salt:[3,2],sugar:[4,2],bag:[5,2],bottle:[6,2],butter:[0,3],jar:[1,3],honey:[2,3],beans:[3,3],lentils:[4,3],soup:[5,3],salad:[6,3],sandwich:[0,4],pizza:[1,4],cookie:[2,4],cake:[3,4],icecream:[4,4],sausage:[5,4],shellfish:[6,4],muffin:[2,4],flan:[3,4],juice:[2,2],soda:[0,2],wine:[2,2],beer:[2,2],puree:[5,3],chocolate:[3,4],candy:[4,4]},
    activities:{do_sport:[0,0],gym:[1,0],yoga:[2,0],run:[3,0],swim:[4,0],cycle:[5,0],football:[6,0],tennis:[0,1],dance:[1,1],videogames:[2,1],boardgames:[3,1],cards:[4,1],chess:[5,1],puzzles:[6,1],books:[0,2],news:[1,2],notes:[2,2],languages:[3,2],spanish:[4,2],homework:[5,2],podcast:[6,2],draw:[0,3],paint:[1,3],photos:[2,3],videos:[3,3],stories:[4,3],crafts:[5,3],guitar:[6,3],cook:[0,4],movies:[1,4],series:[2,4],music:[3,4],walk:[4,4],travel:[5,4],shopping:[6,4],rest:[0,5],friends:[1,5],hike:[2,5],camp:[3,5],plants:[4,5],dog:[5,5],picnic:[6,5],fishing:[6,5],garden:[4,5],train:[1,0],online:[2,1],level:[2,1],learn:[4,2]}
  };

  function sprite(type,key,cols,rows){
    const pos=(MAP[type]||{})[key];
    if(!pos) return "";
    const x=cols===1?0:(pos[0]/(cols-1))*100;
    const y=rows===1?0:(pos[1]/(rows-1))*100;
    return '<div class="generated-sprite generated-sprite-'+type+'" aria-hidden="true" style="background-image:url('+IMG[type]+');background-size:'+(cols*100)+'% '+(rows*100)+'%;background-position:'+x+'% '+y+'%;"></div>';
  }

  window.foodArt=function(kind){return sprite("foods",kind,7,5)||sprite("foods","bread",7,5);};
  window.clothingArt=function(kind){return sprite("clothes",kind,6,5)||sprite("clothes","tshirt",6,5);};
  window.activityArt=function(kind){return sprite("activities",kind,7,6)||sprite("activities","books",7,6);};
})();

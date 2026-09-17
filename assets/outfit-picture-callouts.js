(function(){
  'use strict';

  const OUTFIT_SCENES=new Set([
    'clothes_woman','clothes_woman_2','clothes_woman_3','clothes_woman_4','clothes_woman_5',
    'clothes_man','clothes_man_2','clothes_man_3','clothes_man_4','clothes_man_5'
  ]);

  // Precise endpoints for layouts that need manual disambiguation.
  // Coordinates are percentages inside the picture area.
  const TARGET_OVERRIDES={
    // jacket, shirt, backpack, trousers, shoes
    clothes_man:[[38,39],[50,34],[66,31],[50,64],[50,86]],
    // cap, shirt, jeans, belt, boots
    clothes_man_2:[[50,14],[50,35],[50,66],[50,45],[50,88]],
    // hat, blouse, skirt, handbag, boots
    clothes_woman_2:[[50,14],[50,35],[58,61],[41,43],[46,86]],
    // hat, coat, trousers, scarf, shoes
    clothes_man_3:[[50,13],[67,45],[50,66],[44,27],[50,86]],
    // sunglasses, coat, trousers, scarf, ankle boots
    clothes_woman_3:[[50,16],[67,45],[50,66],[45,25],[50,86]]
  };

  // Keep labels in the white margins and arrange them so arrows do not cross.
  const POSITION_OVERRIDES={
    clothes_man:[
      {side:'left',y:39},
      {side:'right',y:34},
      {side:'right',y:20},
      {side:'left',y:64},
      {side:'right',y:86}
    ],
    clothes_man_2:[
      {side:'left',y:14},
      {side:'right',y:32},
      {side:'left',y:64},
      {side:'right',y:48},
      {side:'left',y:86}
    ],
    clothes_woman_2:[
      {side:'left',y:14},
      {side:'right',y:32},
      {side:'right',y:64},
      {side:'left',y:43},
      {side:'left',y:86}
    ],
    clothes_man_3:[
      {side:'left',y:14},
      {side:'right',y:44},
      {side:'left',y:64},
      {side:'right',y:27},
      {side:'left',y:86}
    ],
    clothes_woman_3:[
      {side:'left',y:14},
      {side:'right',y:45},
      {side:'left',y:64},
      {side:'right',y:25},
      {side:'left',y:86}
    ]
  };

  function clamp(v,min,max){ return Math.max(min,Math.min(max,v)); }
  function num(v,fallback){ const n=Number(v); return Number.isFinite(n)?n:fallback; }
  function norm(v){
    return String(v==null?'':v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[¡!¿?.,;:«»“”"'’]/g,' ').replace(/\s+/g,' ').trim();
  }

  function currentItem(){
    try{
      if(typeof queue==='undefined' || !queue || typeof index==='undefined') return null;
      return queue[index] || null;
    }catch(e){ return null; }
  }

  function semanticTarget(label,base){
    const s=norm(label && (label.reveal || label.answer || label.text || ''));
    const x=clamp(num(base&&base[0],50),12,88);

    // Distinct vertical zones stop nearby garments from sharing the same endpoint.
    if(/\b(cinturon|cinturones)\b/.test(s)) return [50,45];
    if(/\b(pantalon|pantalones|vaquero|vaqueros|jeans)\b/.test(s)) return [x,66];
    if(/\b(short|shorts|pantalones cortos)\b/.test(s)) return [x,58];
    if(/\b(falda|faldas)\b/.test(s)) return [x,61];
    if(/\b(vestido|vestidos)\b/.test(s)) return [x,54];

    if(/\b(gorra|gorras|sombrero|sombreros|gorro|gorros)\b/.test(s)) return [x,14];
    if(/\b(gafas|gafas de sol)\b/.test(s)) return [x,16];
    if(/\b(bufanda|bufandas|panuelo|panuelos|corbata|corbatas)\b/.test(s)) return [x,27];

    if(/\b(camisa|camisas|camiseta|camisetas|blusa|blusas|jersey|jerséis|sudadera|sudaderas)\b/.test(s)) return [x,35];
    if(/\b(chaqueta|chaquetas|abrigo|abrigos|cazadora|cazadoras|gabardina|gabardinas)\b/.test(s)) return [x,43];
    if(/\b(mochila|mochilas|bolso|bolsos|bolsa|bolsas)\b/.test(s)) return [x,35];

    if(/\b(calcetin|calcetines|media|medias)\b/.test(s)) return [x,81];
    if(/\b(zapato|zapatos|bota|botas|botin|botines|zapatilla|zapatillas)\b/.test(s)) return [x,88];

    if(/\b(guante|guantes)\b/.test(s)) return [x,49];
    if(/\b(reloj|pulsera)\b/.test(s)) return [x,48];

    return [x,clamp(num(base&&base[1],50),7,93)];
  }

  function targetFor(item,label,i){
    const override=TARGET_OVERRIDES[item.pictureScene];
    if(override && override[i]) return override[i];
    const base=[clamp(num(label.markerX,50),10,90),clamp(num(label.markerY,50),7,93)];
    return semanticTarget(label,base);
  }

  function labelFor(item,label,i){
    const override=POSITION_OVERRIDES[item.pictureScene];
    if(override && override[i]){
      const p=override[i];
      return {side:p.side,x:p.side==='right'?92:8,y:p.y};
    }
    const side=label && label.side==='right' ? 'right' : 'left';
    const fallback=14+i*18;
    const y=clamp(num(label && label.top,fallback),8,92);
    return {side:side,x:side==='right'?92:8,y:y};
  }

  function svgEl(name,attrs){
    const el=document.createElementNS('http://www.w3.org/2000/svg',name);
    Object.keys(attrs||{}).forEach(function(k){ el.setAttribute(k,String(attrs[k])); });
    return el;
  }

  function renderOutfitCallouts(){
    const item=currentItem();
    if(!item || item.type!=='picture-label' || item.topic!=='clothes' || !OUTFIT_SCENES.has(item.pictureScene)) return;

    const visual=document.querySelector('#pictureStage .picture-visual');
    if(!visual) return;
    const labels=Array.isArray(item.pictureLabels)?item.pictureLabels:[];
    if(!labels.length) return;

    if(item.pictureScene==='clothes_man'){
      visual.classList.remove('outfit-callout-visual');
      visual.querySelectorAll('.picture-marker,.outfit-callout-svg').forEach(function(node){ node.remove(); });
      return;
    }

    visual.classList.add('outfit-callout-visual');
    visual.querySelectorAll('.picture-marker,.outfit-callout-svg').forEach(function(node){ node.remove(); });

    const svg=svgEl('svg',{
      class:'outfit-callout-svg',
      viewBox:'0 0 1000 1200',
      preserveAspectRatio:'none',
      'aria-hidden':'true'
    });
    const defs=svgEl('defs');
    const arrow=svgEl('marker',{
      id:'outfit-arrowhead',
      viewBox:'0 0 6 6',
      refX:'5.2',refY:'3',
      markerWidth:'5',markerHeight:'5',
      orient:'auto-start-reverse',
      markerUnits:'strokeWidth'
    });
    arrow.appendChild(svgEl('path',{d:'M0,0 L6,3 L0,6 Z',fill:'currentColor'}));
    defs.appendChild(arrow);
    svg.appendChild(defs);

    labels.forEach(function(label,i){
      const pos=labelFor(item,label,i);
      const target=targetFor(item,label,i);
      const startX=(pos.side==='right'?88.5:11.5)*10;
      const startY=pos.y*12;
      const elbowX=(pos.side==='right'?78:22)*10;
      const targetX=target[0]*10;
      const targetY=target[1]*12;

      const line=svgEl('polyline',{
        points:startX+','+startY+' '+elbowX+','+startY+' '+targetX+','+targetY,
        class:'outfit-callout-line',
        'marker-end':'url(#outfit-arrowhead)'
      });
      svg.appendChild(line);

      const dot=svgEl('circle',{
        cx:targetX,cy:targetY,r:'2.2',class:'outfit-callout-target'
      });
      svg.appendChild(dot);

      const marker=document.createElement('span');
      marker.className='picture-marker outfit-callout-marker';
      marker.style.left=pos.x+'%';
      marker.style.top=pos.y+'%';
      marker.textContent=String(i+1);
      marker.setAttribute('aria-hidden','true');
      visual.appendChild(marker);
    });

    visual.insertBefore(svg,visual.querySelector('.outfit-callout-marker'));
  }

  function install(){
    try{
      if(typeof render==='function' && !render.__outfitCalloutsV5){
        const base=render;
        const patched=function(){
          base();
          try{ renderOutfitCallouts(); }catch(e){}
        };
        patched.__outfitCalloutsV5=true;
        render=patched;
      }
    }catch(e){}
    try{ renderOutfitCallouts(); }catch(e){}
  }

  const style=document.createElement('style');
  style.textContent='\n.outfit-callout-visual .picture-raster{z-index:0}.outfit-callout-svg{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;overflow:visible;color:#716b8d}.outfit-callout-line{fill:none;stroke:currentColor;stroke-width:1.45;stroke-linecap:round;stroke-linejoin:round;opacity:.9;vector-effect:non-scaling-stroke}.outfit-callout-target{fill:#716b8d;opacity:.9;vector-effect:non-scaling-stroke}.outfit-callout-marker{z-index:2!important}.outfit-callout-visual .outfit-callout-marker{box-shadow:0 3px 10px rgba(35,28,89,.22)}@media(max-width:520px){.outfit-callout-line{stroke-width:1.25}.outfit-callout-target{r:2.5}.outfit-callout-visual .outfit-callout-marker{width:24px;height:24px;font-size:10px;border-width:2px}}\n';
  document.head.appendChild(style);

  let tries=0;
  const timer=setInterval(function(){ install(); if(++tries>24) clearInterval(timer); },250);
  document.addEventListener('DOMContentLoaded',install);
  window.addEventListener('load',function(){ install(); setTimeout(install,400); });
  install();
})();

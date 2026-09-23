import { createBlitzGame, BLITZ_HIGH_SCORE_KEY } from "../blitz/blitz-game.js?v=20260923-blitz-juice20";

/**
 * Practice catalog enhancements: Blitz entry banner + lifecycle.
 */
export function createPracticeView(options={}){
  const host=options.host || document.getElementById("topicCatalog");
  const getSource=typeof options.getSource==="function" ? options.getSource : function(){return {};};
  const onReturn=typeof options.onReturn==="function" ? options.onReturn : function(){};
  let banner=null;

  function readHighScore(){
    try {
      const value=Number.parseInt(localStorage.getItem(BLITZ_HIGH_SCORE_KEY) || "0",10);
      return Number.isFinite(value) && value>0 ? value : 0;
    } catch(error){
      return 0;
    }
  }

  function updateHighScore(value){
    const score=Number.isFinite(Number(value)) ? Math.max(0,Number(value)) : readHighScore();
    if(banner){
      const node=banner.querySelector("[data-blitz-high-score]");
      if(node) node.textContent=String(score);
    }
  }

  const game=createBlitzGame({
    getSource,
    onHighScoreChange:updateHighScore,
    onExit:function(){
      updateHighScore();
      onReturn();
    }
  });

  function ensureBanner(){
    if(banner || !host) return banner;
    const desktop=window.matchMedia && window.matchMedia("(min-width: 769px)").matches;
    const titleSize=desktop ? "20px" : "18px";
    const visualWidth=desktop ? "35%" : "45%";
    const visualMaxWidth=desktop ? "260px" : "220px";
    banner=document.createElement("button");
    banner.id="blitzBanner";
    banner.className="blitz-banner";
    banner.type="button";
    banner.setAttribute("style","min-height:140px;position:relative;overflow:hidden;border-radius:20px;display:flex;align-items:center;background:linear-gradient(135deg,#f59e0b 0%,#d97706 35%,#7c3aed 80%,#5b21b6 100%);padding:16px 20px;cursor:pointer;");
    banner.innerHTML=
      '<span class="blitz-banner-content" style="max-width:60%;position:relative;z-index:2;">'+
        '<span class="blitz-banner-icon" aria-hidden="true">⚡</span>'+ 
        '<span class="blitz-banner-copy">'+
          '<strong style="font-size:'+titleSize+';line-height:1.2;">Блиц на 60 секунд</strong>'+ 
          '<span>Ответь на максимум карточек за минуту! Рекорд: <b data-blitz-high-score>0</b></span>'+ 
        '</span>'+ 
      '</span>'+ 
      '<span class="blitz-banner-visual" aria-hidden="true" style="position:absolute;right:0;top:0;bottom:0;width:'+visualWidth+';max-width:'+visualMaxWidth+';z-index:1;pointer-events:none;display:flex;align-items:center;justify-content:flex-end;">'+
        '<img src="assets/images/mascot/blitz_banner_hq.webp?v=20260923-blitz-banner-hq29" alt="" style="width:100%;height:100%;object-fit:cover;object-position:right center;-webkit-mask-image:linear-gradient(to right,transparent 0%,black 35%);image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;transform:translateZ(0);backface-visibility:hidden;mask-image:linear-gradient(to right,transparent 0%,black 35%);" onerror="this.parentElement.style.display=\'none\'">'+
      '</span>';
    banner.setAttribute("aria-label","Блиц на 60 секунд. Ответь на максимум карточек за минуту.");

    const catalogHead=host.querySelector(".catalog-head");
    if(catalogHead && catalogHead.nextSibling) host.insertBefore(banner,catalogHead.nextSibling);
    else if(catalogHead) host.appendChild(banner);
    else host.prepend(banner);

    banner.addEventListener("click",function(){game.start();});
    updateHighScore();
    return banner;
  }

  function show(){
    const node=ensureBanner();
    if(!node) return;
    updateHighScore();
    node.hidden=false;
  }

  function hide(){
    if(banner) banner.hidden=true;
  }

  function closeGame(){
    game.close();
  }

  return Object.freeze({
    show,
    hide,
    closeGame,
    startBlitz:function(){game.start();},
    updateHighScore
  });
}

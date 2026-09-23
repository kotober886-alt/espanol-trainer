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
    banner=document.createElement("button");
    banner.id="blitzBanner";
    banner.className="blitz-banner";
    banner.type="button";
    banner.innerHTML=
      '<span class="blitz-banner-content">'+
        '<span class="blitz-banner-icon" aria-hidden="true">⚡</span>'+
        '<span class="blitz-banner-copy">'+
          '<strong>Блиц на 60 секунд</strong>'+
          '<span>Ответь на максимум карточек за минуту! Рекорд: <b data-blitz-high-score>0</b></span>'+
          '<span class="blitz-banner-cta" aria-hidden="true">Играть →</span>'+
        '</span>'+
      '</span>'+
      '<span class="blitz-banner-visual" aria-hidden="true">'+
        '<img src="assets/images/mascot/blitz_banner_v2.webp?v=20260923-force-new-banner26" alt="" onerror="this.parentElement.style.display=\'none\'">'+
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

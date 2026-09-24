/**
 * Completed-session results view.
 */
export function createResultsView(deps){
  const {els,$,getState,patchState,syncSession,progress,setResultFavicon,setHeaderMascotMood,onReviewMistakes,backpackManager}=deps;

  const MASCOTS={
    happy:{file:'mascot-happy.png',emoji:'😸',start:'¡Excelente! Горжусь тобой!',pool:['¡Magnífico!','Чистый триумф!','Кошачий респект!','¡Así se hace!'],anim:'mascot-bounce'},
    awkward:{file:'mascot-awkward.png',emoji:'😅',start:'Ну... неплохо. Главное, что старался!',pool:['Улыбаемся и повторяем слова...','Бывало и хуже, правда?','Я верю в тебя (почти)!','¡Ánimo!'],anim:'mascot-wobble'},
    skeptical:{file:'mascot-skeptical.png',emoji:'🤨',start:'Серьёзно? Мы точно учили эти карточки?',pool:['Мои усы чуют лень...','Смотри в экран внимательнее.','¡Qué desastre!','Попробуй ещё раз.'],anim:'mascot-tilt'},
    furious:{file:'mascot-furious.png',emoji:'😾',start:'¡Dios mío! Ты просто тыкал наугад?!',pool:['Мои нервы на пределе!','¡Madre mía!','У кота лапки, а у тебя что?!','Катастрофа!'],anim:'mascot-shake'}
  };

  function injectStyles(){
    if(document.getElementById('result-mascot-styles'))return;
    const style=document.createElement('style');
    style.id='result-mascot-styles';
    style.textContent=`
      #finish-mascot-container{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:20px auto 10px auto;position:relative;width:100%;}
      .result-speech-bubble{position:relative;background:#fff;border-radius:16px;padding:10px 18px;font-weight:600;color:#1e293b;box-shadow:0 4px 15px rgba(0,0,0,.08);border:1px solid #e2e8f0;margin-bottom:12px;z-index:2;text-align:center;max-width:80%;}
      .result-speech-bubble::after{content:'';position:absolute;left:50%;bottom:-10px;transform:translateX(-50%);border-width:10px 10px 0;border-style:solid;border-color:#fff transparent transparent;}
      .result-mascot-img{width:140px;height:140px;object-fit:contain;cursor:pointer;user-select:none;z-index:1;display:block;}
      .result-mascot-fallback{font-size:80px;line-height:1;cursor:pointer;user-select:none;z-index:1;display:block;}
      .mascot-bounce{animation:mascot-bounce .5s}.mascot-wobble{animation:mascot-wobble .5s}.mascot-tilt{animation:mascot-tilt .5s}.mascot-shake{animation:mascot-shake .5s}
      @keyframes mascot-bounce{50%{transform:translateY(-10px)}}
      @keyframes mascot-wobble{25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}
      @keyframes mascot-tilt{50%{transform:rotate(-10deg)}}
      @keyframes mascot-shake{25%,75%{transform:translateX(-8px)}50%{transform:translateX(8px)}}
    `;
    document.head.appendChild(style);
  }

  function mascotState(p){if(p>=80)return'happy';if(p>=50)return'awkward';if(p>=25)return'skeptical';return'furious';}

  function setupMascot(state){
    injectStyles();
    const cfg=MASCOTS[state];
    const old=els.resultMascot;
    if(!old)return;
    let node=old;
    node.className='result-mascot-img';
    node.src='assets/images/mascot/'+cfg.file;
    node.alt=cfg.emoji+' Эмоциональный кот';
    node.onerror=()=>{
      const fallback=document.createElement('span');
      fallback.className='result-mascot-fallback';
      fallback.textContent=cfg.emoji;
      fallback.dataset.state=state;
      node.replaceWith(fallback);
      bindMascotClick(fallback,cfg);
    };
    node.dataset.state=state;
    bindMascotClick(node,cfg);
    const box=node.parentElement;
    if(box){box.id='finish-mascot-container';box.classList.add('result-mascot-container');let bubble=box.querySelector('.result-speech-bubble');if(!bubble){bubble=document.createElement('div');bubble.className='result-speech-bubble';box.insertBefore(bubble,node);}bubble.textContent=cfg.start;}
  }

  function bindMascotClick(node,cfg){
    const bubble=node.parentElement?.querySelector('.result-speech-bubble');
    let index=0;
    node.onclick=()=>{
      index=(index+1)%cfg.pool.length;
      if(bubble)bubble.textContent=cfg.pool[index];
      node.classList.remove(cfg.anim);void node.offsetWidth;node.classList.add(cfg.anim);
      node.addEventListener('animationend',()=>node.classList.remove(cfg.anim),{once:true});
    };
  }

  function normalizeSummary(s){return{answered:Math.max(0,Number(s?.answered)||0),correct:Math.max(0,Number(s?.correct)||0),wrong:Math.max(0,Number(s?.wrong)||0),wrongIds:Array.isArray(s?.wrongIds)?s.wrongIds:[],mistakes:Array.isArray(s?.mistakes)?s.mistakes:[]};}
  function applyHeaderMood(r){if(typeof setHeaderMascotMood==='function')setHeaderMascotMood(r.answered&&r.correct/r.answered*100>=60?'happy':'angry');}
  function showMistakeChoice(summary){const r=normalizeSummary(summary);showFinal(r);return {needsMistakeChoice:false,summary:r};}
  function completeMain(){if(getState().sessionController)syncSession();const r=normalizeSummary(getState().sessionController?getState().sessionController.getSummary():getState().sessionResults);patchState({sessionActive:false,sessionResults:r});if(backpackManager)backpackManager.checkConditions('practice',{summary:r,timestamp:Date.now()});return showFinal(r);}
  function showFinal(summary){const r=normalizeSummary(summary);patchState({sessionActive:false,sessionResults:r});els.studyView.hidden=true;els.exerciseView.hidden=true;els.emptyView.hidden=true;els.sessionResult.hidden=false;els.resultTotal.textContent=r.answered;els.resultCorrect.textContent=r.correct;els.resultWrong.textContent=r.wrong;const percent=r.answered?Math.round(r.correct/r.answered*100):0;applyHeaderMood(r);setupMascot(mascotState(percent));if(progress)progress.recordSessionResult({...r,accuracy:percent});setResultFavicon(percent,getState().streak);const repeat=$("repeatMistakesBtn");if(repeat){repeat.hidden=!r.mistakes.length;if(r.mistakes.length)repeat.textContent='Отработать ошибки ('+r.mistakes.length+')';}els.progressLabel.textContent=r.answered+' / '+r.answered;els.progressBar.style.width='100%';window.scrollTo({top:0,behavior:'smooth'});return {summary:r,accuracy:percent};}
  return Object.freeze({completeMain,showFinal,showMistakeChoice});
}

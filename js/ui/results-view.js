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
    if(document.getElementById('resultMascotCss'))return;
    const l=document.createElement('link');l.id='resultMascotCss';l.rel='stylesheet';l.href='css/result-mascot.css?v=mascot4';document.head.appendChild(l);
  }

  function mascotState(p){
    if(p>=80)return'happy';
    if(p>=50)return'awkward';
    if(p>=25)return'skeptical';
    return'furious';
  }

  function setupMascot(state,percent){
    injectStyles();
    const cfg=MASCOTS[state];
    let img=els.resultMascot;
    if(!img)return;
    img.className='result-mascot-image';
    img.src='assets/images/mascot/'+cfg.file;
    img.alt=cfg.emoji+' Эмоциональный кот: '+state;
    img.onerror=function(){img.removeAttribute('src');img.alt=cfg.emoji;img.textContent=cfg.emoji;};
    img.dataset.state=state;
    let box=img.parentElement;
    if(box)box.id='finish-mascot-container',box.classList.add('result-mascot-container');
    let bubble=box.querySelector('.result-speech-bubble');
    if(!bubble){bubble=document.createElement('div');bubble.className='result-speech-bubble';box.insertBefore(bubble,img);}
    bubble.textContent=cfg.start;
    let index=0;
    img.onclick=function(){
      index=(index+1)%cfg.pool.length;
      bubble.classList.remove('is-visible');
      bubble.textContent=cfg.pool[index];
      void bubble.offsetWidth;
      bubble.classList.add('is-visible');
      img.classList.remove(cfg.anim);
      void img.offsetWidth;
      img.classList.add(cfg.anim);
      img.addEventListener('animationend',()=>img.classList.remove(cfg.anim),{once:true});
    };
    requestAnimationFrame(()=>bubble.classList.add('is-visible'));
  }

  function normalizeSummary(s){return{answered:Math.max(0,Number(s?.answered)||0),correct:Math.max(0,Number(s?.correct)||0),wrong:Math.max(0,Number(s?.wrong)||0),wrongIds:Array.isArray(s?.wrongIds)?s.wrongIds:[],mistakes:Array.isArray(s?.mistakes)?s.mistakes:[]};}
  function applyHeaderMood(r){if(typeof setHeaderMascotMood==='function')setHeaderMascotMood(r.answered&&r.correct/r.answered*100>=60?'happy':'angry');}

  function showMistakeChoice(summary){const r=normalizeSummary(summary);showFinal(r);return {needsMistakeChoice:false,summary:r};}

  function completeMain(){
    if(getState().sessionController)syncSession();
    const r=normalizeSummary(getState().sessionController?getState().sessionController.getSummary():getState().sessionResults);
    patchState({sessionActive:false,sessionResults:r});
    if(backpackManager)backpackManager.checkConditions('practice',{summary:r,timestamp:Date.now()});
    return showFinal(r);
  }

  function showFinal(summary){
    const r=normalizeSummary(summary);patchState({sessionActive:false,sessionResults:r});
    els.studyView.hidden=true;els.exerciseView.hidden=true;els.emptyView.hidden=true;els.sessionResult.hidden=false;
    els.resultTotal.textContent=r.answered;els.resultCorrect.textContent=r.correct;els.resultWrong.textContent=r.wrong;
    const percent=r.answered?Math.round(r.correct/r.answered*100):0;
    const state=mascotState(percent);
    applyHeaderMood(r);setupMascot(state,percent);
    if(progress)progress.recordSessionResult({...r,accuracy:percent});
    setResultFavicon(percent,getState().streak);
    const repeat=$("repeatMistakesBtn");if(repeat){repeat.hidden=!r.mistakes.length;if(r.mistakes.length)repeat.textContent='Отработать ошибки ('+r.mistakes.length+')';}
    els.progressLabel.textContent=r.answered+' / '+r.answered;els.progressBar.style.width='100%';
    window.scrollTo({top:0,behavior:'smooth'});
    return {summary:r,accuracy:percent};
  }
  return Object.freeze({completeMain,showFinal,showMistakeChoice});
}

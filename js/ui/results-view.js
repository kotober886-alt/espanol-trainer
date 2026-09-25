/** Completed-session results view. */
export function createResultsView(deps){
 const {els,getState,patchState,syncSession,progress,setResultFavicon}=deps;
 const MASCOTS={
  happy:{file:'mascot-happy.png',start:'¡Excelente! Горжусь тобой!',pool:['¡Excelente! Горжусь тобой!','¡Magnífico!','Чистый триумф!','¡Así se hace!']},
  awkward:{file:'mascot-awkward.png',start:'Ну... неплохо. Главное, что старался!',pool:['Ну... неплохо. Главное, что старался!','Улыбаемся и учим дальше...','Я почти в тебя верю!','¡Ánimo!']},
  skeptical:{file:'mascot-skeptical.png',start:'Серьёзно? Мы точно учили это?',pool:['Серьёзно? Мы точно учили это?','Мои усы чуют лень...','Смотри в экран внимательнее!','Попробуй ещё раз.']},
  furious:{file:'mascot-furious.png',start:'¡Dios mío! Ты просто тыкал наугад?!',pool:['¡Dios mío! Ты просто тыкал наугад?!','Мои нервы на пределе!','¡Madre mía!','Катастрофа!','У кота лапки, а у тебя что?!']}
 };
 const ARROW='<span style="position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff;display:block"></span>';
 function state(p){return p>=80?'happy':p>=50?'awkward':p>=25?'skeptical':'furious'}
 function mountMascot(cfg){
  const previous=document.getElementById('finish-mascot-container');
  if(previous)previous.remove();
  const html=`<div id="finish-mascot-container" class="finish-mascot-container"><div id="mascot-speech-bubble" class="finish-mascot-speech">${cfg.start}${ARROW}</div><img id="mascot-interactive-img" class="finish-mascot-img" src="assets/images/mascot/${cfg.file}" alt="Кот-маскот результата"></div>`;
  const visual=els.sessionResult&&els.sessionResult.querySelector('.result-visual');
  if(visual)visual.insertAdjacentHTML('beforeend',html);
  else if(els.sessionResult)els.sessionResult.insertAdjacentHTML('afterbegin',html);
  const img=document.getElementById('mascot-interactive-img');
  const bubble=document.getElementById('mascot-speech-bubble');
  if(img&&bubble){let i=0;img.onclick=()=>{img.style.transform='scale(1.15) translateY(-6px)';setTimeout(()=>img.style.transform='scale(1)',180);i=(i+1)%cfg.pool.length;bubble.innerHTML=cfg.pool[i]+ARROW;};}
 }
 function saveCache(summary){try{localStorage.setItem('gato_last_results_cache',JSON.stringify(summary))}catch(e){}}
 function showFinal(summary){
  window.location.hash='#results';
  saveCache(summary);
  const r={answered:Number(summary?.answered)||Number(summary?.total)||0,correct:Number(summary?.correct)||Number(summary?.score)||0,wrong:Number(summary?.wrong)||0,mistakes:summary?.mistakes||summary?.errors||[]};
  patchState({sessionActive:false,sessionResults:r});
  els.studyView.hidden=true;els.exerciseView.hidden=true;els.emptyView.hidden=true;els.sessionResult.hidden=false;
  els.resultTotal.textContent=r.answered;els.resultCorrect.textContent=r.correct;els.resultWrong.textContent=r.wrong;
  if(els.resultTitle)els.resultTitle.textContent=r.wrong<=1?"Отличная работа!":"Раунд завершён!";
  const p=r.answered?Math.round(r.correct/r.answered*100):0;
  mountMascot(MASCOTS[state(p)]);
  if(progress)progress.recordSessionResult({...r,accuracy:p});
  if(setResultFavicon)setResultFavicon(p,getState().streak);
  return {summary:r};
 }
 function clearResults(){localStorage.removeItem('gato_last_results_cache');history.replaceState(null,null,window.location.pathname);}
 function completeMain(){clearResults();if(getState().sessionController)syncSession();return showFinal(getState().sessionController?.getSummary()||getState().sessionResults)}
 function showMistakeChoice(s){clearResults();return showFinal(s)}
 const restoreResults=()=>{if(window.location.hash==='#results'){const cached=localStorage.getItem('gato_last_results_cache');if(cached){try{const data=JSON.parse(cached);showFinal(data)}catch(e){}}}};
 window.addEventListener('DOMContentLoaded',()=>setTimeout(restoreResults,200));
 window.addEventListener('load',()=>setTimeout(restoreResults,400));
 return Object.freeze({completeMain,showFinal,showMistakeChoice});
}

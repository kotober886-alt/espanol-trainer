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
  if(document.getElementById('finish-mascot-container'))return;
  const html=`<div id="finish-mascot-container" style="display:flex;flex-direction:column;align-items:center;justify-content:center;margin:8px auto 0 auto !important;padding:0 !important;width:100%;user-select:none"><div id="mascot-speech-bubble" style="position:relative;background:#fff;border:1.5px solid #e2e8f0;border-radius:14px;padding:8px 18px;font-size:.95rem;font-weight:600;color:#1e293b;box-shadow:0 4px 15px rgba(0,0,0,.06);margin-bottom:12px;text-align:center;max-width:85%;display:inline-block">${cfg.start}${ARROW}</div><img id="mascot-interactive-img" src="assets/images/mascot/${cfg.file}" alt="mascot" style="width:130px;height:130px;object-fit:contain;cursor:pointer;transition:transform .15s ease"></div>`;
  const h1=[...document.querySelectorAll('h1,h2,h3')].find(x=>x.textContent.includes('Занятие готово'));
  if(h1){h1.style.setProperty('margin-top','6px','important');h1.style.setProperty('margin-bottom','8px','important');h1.style.setProperty('padding-top','0','important');h1.insertAdjacentHTML('beforebegin',html)}else if(els.sessionResult)els.sessionResult.insertAdjacentHTML('afterbegin',html);
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

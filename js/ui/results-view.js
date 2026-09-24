/** Completed-session results view. */
export function createResultsView(deps){
 const {els,getState,patchState,syncSession,progress,setResultFavicon}=deps;
 const MASCOTS={
  happy:{file:'mascot-happy.png',start:'¡Excelente! Горжусь тобой!',pool:['¡Excelente! Горжусь тобой!','¡Magnífico!','Чистый триумф!','¡Así se hace!'],anim:'mascot-bounce',emoji:'😸'},
  awkward:{file:'mascot-awkward.png',start:'Ну... неплохо. Главное, что старался!',pool:['Ну... неплохо. Главное, что старался!','Улыбаемся и учим дальше...','Я почти в тебя верю!','¡Ánimo!'],anim:'mascot-wobble',emoji:'😅'},
  skeptical:{file:'mascot-skeptical.png',start:'Серьёзно? Мы точно учили это?',pool:['Серьёзно? Мы точно учили это?','Мои усы чуют лень...','Смотри в экран внимательнее!','Попробуй ещё раз.'],anim:'mascot-tilt',emoji:'🤨'},
  furious:{file:'mascot-furious.png',start:'¡Dios mío! Ты просто тыкал наугад?!',pool:['¡Dios mío! Ты просто тыкал наугад?!','Мои нервы на пределе!','¡Madre mía!','Катастрофа!','У кота лапки, а у тебя что?!'],anim:'mascot-shake',emoji:'😾'}
 };
 const ARROW='<span style="position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff;display:block;"></span>';
 function state(p){return p>=80?'happy':p>=50?'awkward':p>=25?'skeptical':'furious'}
 function renderMascot(cfg){
  const old=els.resultMascot;
  if(!old||!old.parentNode)return;
  const parent=old.parentNode;
  const box=document.createElement('div');
  box.id='finish-mascot-container';
  box.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;margin:20px auto 14px auto;width:100%;user-select:none;';
  const bubble=document.createElement('div');
  bubble.id='mascot-speech-bubble';
  bubble.style.cssText='position:relative;background:#fff;border:1.5px solid #e2e8f0;border-radius:14px;padding:8px 18px;font-size:.95rem;font-weight:600;color:#1e293b;box-shadow:0 4px 15px rgba(0,0,0,.06);margin-bottom:12px;text-align:center;max-width:85%;display:inline-block;';
  bubble.innerHTML=cfg.start+ARROW;
  old.id='mascot-interactive-img';
  old.className='result-mascot-img';
  old.style.cssText='width:140px;height:140px;object-fit:contain;cursor:pointer;transition:transform .15s ease;';
  old.src='assets/images/mascot/'+cfg.file;
  box.appendChild(bubble);box.appendChild(old);
  parent.replaceChild(box,old);
  let index=0;
  old.onclick=()=>{
   old.style.transform='scale(1.15) translateY(-6px)';
   setTimeout(()=>old.style.transform='scale(1)',180);
   index=(index+1)%cfg.pool.length;
   bubble.innerHTML=cfg.pool[index]+ARROW;
  };
  old.onerror=()=>{old.replaceWith(Object.assign(document.createElement('span'),{className:'result-mascot-fallback',textContent:cfg.emoji}));};
 }
 function showFinal(summary){
  location.hash='results';
  try{localStorage.setItem('gato_last_results_cache',JSON.stringify({correct:summary.correct,total:summary.total??summary.answered,errors:summary.errors??summary.mistakes??[],mode:summary.mode||'practice',timestamp:Date.now()}))}catch(e){}
  const r={answered:Number(summary?.answered)||Number(summary?.total)||0,correct:Number(summary?.correct)||0,wrong:Number(summary?.wrong)||0,mistakes:summary?.mistakes||[]};
  patchState({sessionActive:false,sessionResults:r});
  els.studyView.hidden=true;els.exerciseView.hidden=true;els.emptyView.hidden=true;els.sessionResult.hidden=false;
  els.resultTotal.textContent=r.answered;els.resultCorrect.textContent=r.correct;els.resultWrong.textContent=r.wrong;
  const p=r.answered?Math.round(r.correct/r.answered*100):0;
  renderMascot(MASCOTS[state(p)]);
  if(progress)progress.recordSessionResult({...r,accuracy:p});
  if(setResultFavicon)setResultFavicon(p,getState().streak);
  return {summary:r,accuracy:p};
 }
 function clearResults(){localStorage.removeItem('gato_last_results_cache');if(location.hash==='#results')history.replaceState(null,null,' ')}
 function completeMain(){clearResults();if(getState().sessionController)syncSession();return showFinal(getState().sessionController?.getSummary()||getState().sessionResults)}
 function showMistakeChoice(s){return showFinal(s)}
 window.addEventListener('DOMContentLoaded',()=>{if(location.hash==='#results'){const c=localStorage.getItem('gato_last_results_cache');if(c)try{setTimeout(()=>showFinal(JSON.parse(c)),150)}catch(e){}}});
 return Object.freeze({completeMain,showFinal,showMistakeChoice});
}

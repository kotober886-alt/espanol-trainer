/**
 * Completed-session results view.
 */
export function createResultsView(deps){
  const {els,$,getState,patchState,syncSession,progress,ensureApproveMascot,ensureStrictMascot,
    ensureLowMascot,setResultFavicon}=deps;

  const RESULT_PHRASES = {
    triumph: ["¡Increíble!", "¡Eres un crack!", "¡Victoria!"],
    steady: ["¡Buen intento!", "¡Casi perfecto!", "¡A seguir practicando!"],
    low: ["¡Miau... concéntrate!", "¡A repasar la lección!", "¡No te rindas!"]
  };

  function resultBand(accuracy){
    if(accuracy>80) return "triumph";
    if(accuracy>=50) return "steady";
    return "low";
  }

  function resultPhrase(band,result){
    const phrases=RESULT_PHRASES[band];
    const seed=Math.max(0,Number(result.correct)||0)+Math.max(0,Number(result.wrong)||0)+Math.max(0,Number(result.answered)||0);
    return phrases[seed%phrases.length];
  }

  function showResultSpeechBubble(band,result){
    const visual=els.resultMascot.parentElement;
    if(!visual) return;

    let bubble=visual.querySelector(".result-speech-bubble");
    if(!bubble){
      bubble=document.createElement("div");
      bubble.className="result-speech-bubble";
      bubble.setAttribute("role","status");
      bubble.setAttribute("aria-live","polite");
      visual.insertBefore(bubble,els.resultMascot);
    }

    bubble.textContent=resultPhrase(band,result);
    bubble.className="result-speech-bubble is-"+band;
    void bubble.offsetWidth;
    requestAnimationFrame(function(){
      bubble.classList.add("is-visible");
    });
  }

  function finish(){
    if(getState().sessionController) syncSession();
    const state=getState();
    const summary=state.sessionController?state.sessionController.getSummary():{
      answered:Math.max(0,Number(state.sessionResults.answered)||0),
      correct:Math.max(0,Number(state.sessionResults.correct)||0),
      wrong:Math.max(0,Number(state.sessionResults.wrong)||0),
      wrongIds:(state.sessionResults.wrongIds||[]).slice()
    };
    const result={
      answered:summary.answered,correct:summary.correct,wrong:summary.wrong,
      wrongIds:(summary.wrongIds||[]).slice()
    };
    patchState({sessionActive:false,sessionResults:result});

    els.studyView.hidden=true;els.exerciseView.hidden=true;els.emptyView.hidden=true;els.sessionResult.hidden=false;
    els.resultTotal.textContent=result.answered;
    els.resultCorrect.textContent=result.correct;
    els.resultWrong.textContent=result.wrong;
    els.resultMessage.textContent=result.wrong?
      "Ошибки сохранены — их можно спокойно повторить сейчас или позже.":
      "Отлично: занятие пройдено без ошибок.";

    const accuracy=result.answered?result.correct/result.answered*100:0;
    if(progress) progress.recordSessionResult({...result,accuracy});

    const band=resultBand(accuracy);
    const mode=band==="triumph"?"approve":(band==="steady"?"strict":"low");
    showResultSpeechBubble(band,result);
    els.resultMascot.dataset.mode=mode;
    els.resultMascot.hidden=true;
    if(els.resultIcon) els.resultIcon.hidden=true;

    const show=function(loader,alt){
      els.resultMascot.alt=alt;
      loader().then(function(){
        if(els.resultMascot.dataset.mode===mode) els.resultMascot.hidden=false;
      }).catch(function(){els.resultMascot.hidden=true;});
    };
    if(mode==="approve") show(ensureApproveMascot,"Одобряющий кот-маскот");
    else if(mode==="strict") show(ensureStrictMascot,"Серьёзный кот-маскот");
    else show(ensureLowMascot,"Недовольный кот-маскот");

    setResultFavicon(accuracy,getState().streak);
    $("repeatMistakesBtn").hidden=!result.wrong;
    els.progressLabel.textContent=result.answered+" / "+result.answered;
    els.progressBar.style.width="100%";
    window.scrollTo({top:0,behavior:"smooth"});
    return {summary:result,accuracy};
  }

  return Object.freeze({finish});
}

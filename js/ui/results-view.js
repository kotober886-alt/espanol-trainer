/**
 * Completed-session results view.
 */
export function createResultsView(deps){
  const {els,$,getState,patchState,syncSession,progress,
    setResultFavicon,setHeaderMascotMood,onReviewMistakes}=deps;

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

  function normalizeSummary(summary){
    return {
      answered:Math.max(0,Number(summary && summary.answered)||0),
      correct:Math.max(0,Number(summary && summary.correct)||0),
      wrong:Math.max(0,Number(summary && summary.wrong)||0),
      wrongIds:Array.isArray(summary && summary.wrongIds)?summary.wrongIds.slice():[],
      mistakes:Array.isArray(summary && summary.mistakes)?summary.mistakes.slice():[]
    };
  }

  function ensureMistakeDialog(){
    let dialog=document.getElementById("mistakeReviewDialog");
    if(dialog) return dialog;

    dialog=document.createElement("dialog");
    dialog.id="mistakeReviewDialog";
    dialog.className="mistake-review-dialog";
    dialog.innerHTML='<div class="mistake-review-card">'+
      '<div class="mistake-review-kicker">Основная сессия завершена</div>'+
      '<h2>Тренировка завершена!</h2>'+
      '<p id="mistakeReviewText"></p>'+
      '<div class="mistake-review-actions">'+
        '<button class="btn btn-primary" id="mistakeReviewStart" type="button"></button>'+
        '<button class="btn btn-soft" id="mistakeReviewResults" type="button">Посмотреть итоги</button>'+
      '</div>'+
    '</div>';
    document.body.appendChild(dialog);
    return dialog;
  }

  function applyHeaderMood(result){
    if(typeof setHeaderMascotMood!=="function") return;
    const accuracy=result.answered?result.correct/result.answered*100:0;
    setHeaderMascotMood(accuracy>=60?"happy":"angry");
  }

  function showMistakeChoice(summary){
    const result=normalizeSummary(summary);
    applyHeaderMood(result);
    const dialog=ensureMistakeDialog();
    const count=result.mistakes.length || result.wrong;
    dialog.querySelector("#mistakeReviewText").textContent=
      "Ты ошибся в "+count+" заданиях. Хочешь разобрать ошибки?";
    dialog.querySelector("#mistakeReviewStart").textContent=
      "Отработать ошибки ("+count+")";

    const startButton=dialog.querySelector("#mistakeReviewStart");
    const resultsButton=dialog.querySelector("#mistakeReviewResults");

    startButton.onclick=function(){
      dialog.close();
      if(typeof onReviewMistakes==="function"){
        onReviewMistakes(result.mistakes,result);
      }
    };
    resultsButton.onclick=function(){
      dialog.close();
      showFinal(result);
    };

    els.studyView.hidden=true;
    els.exerciseView.hidden=true;
    els.emptyView.hidden=true;
    els.sessionResult.hidden=true;
    dialog.showModal();
  }

  function completeMain(){
    if(getState().sessionController) syncSession();
    const state=getState();
    const summary=state.sessionController?state.sessionController.getSummary():state.sessionResults;
    const result=normalizeSummary(summary);
    patchState({sessionActive:false,sessionResults:result});

    if(result.wrong>0 && result.mistakes.length){
      showMistakeChoice(result);
      return {needsMistakeChoice:true,summary:result};
    }

    return showFinal(result);
  }

  function showFinal(summary){
    const result=normalizeSummary(summary);
    patchState({sessionActive:false,sessionResults:result});

    const openDialog=document.getElementById("mistakeReviewDialog");
    if(openDialog && openDialog.open) openDialog.close();

    els.studyView.hidden=true;els.exerciseView.hidden=true;els.emptyView.hidden=true;els.sessionResult.hidden=false;
    els.resultTotal.textContent=result.answered;
    els.resultCorrect.textContent=result.correct;
    els.resultWrong.textContent=result.wrong;
    els.resultMessage.textContent=result.wrong?
      "Ошибки сохранены — их можно спокойно повторить сейчас или позже.":
      "Отлично: занятие пройдено без ошибок.";

    const accuracy=result.answered?result.correct/result.answered*100:0;
    applyHeaderMood(result);
    if(progress) progress.recordSessionResult({...result,accuracy});

    const band=resultBand(accuracy);
    showResultSpeechBubble(band,result);
    els.resultMascot.dataset.mode="victory";
    els.resultMascot.alt="Рыжий кот-победитель с секундомером";
    els.resultMascot.hidden=false;
    if(els.resultIcon) els.resultIcon.hidden=true;

    setResultFavicon(accuracy,getState().streak);
    const repeatButton=$("repeatMistakesBtn");
    repeatButton.hidden=!result.mistakes.length;
    if(result.mistakes.length) repeatButton.textContent="Отработать ошибки ("+result.mistakes.length+")";
    els.progressLabel.textContent=result.answered+" / "+result.answered;
    els.progressBar.style.width="100%";
    window.scrollTo({top:0,behavior:"smooth"});
    return {summary:result,accuracy};
  }

  return Object.freeze({completeMain,showFinal,showMistakeChoice});
}

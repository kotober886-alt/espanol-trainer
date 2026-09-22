/**
 * Fast 60-second game mode.
 * Uses only tap-friendly multiple-choice questions and generated vocabulary translations.
 */
export const BLITZ_HIGH_SCORE_KEY = "blitz_high_score";

const GAME_MS = 60000;
const ANSWER_FEEDBACK_MS = 180;

function cleanText(value){
  return String(value == null ? "" : value).trim();
}

function normalize(value){
  return cleanText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .replace(/['’‘ʼ`´]+/g,"")
    .replace(/[^a-zа-яё0-9]+/gi," ")
    .replace(/\s+/g," ")
    .trim();
}

function shuffle(list){
  const copy=list.slice();
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

function uniqueStrings(values){
  const seen=new Set();
  const result=[];
  values.forEach(function(value){
    const text=cleanText(value);
    const key=normalize(text);
    if(!text || !key || seen.has(key)) return;
    seen.add(key);
    result.push(text);
  });
  return result;
}

function isBinaryOptions(options){
  if(options.length!==2) return false;
  const pair=options.map(normalize).sort().join("|");
  return [
    ["да","нет"],
    ["yes","no"],
    ["si","no"],
    ["verdadero","falso"],
    ["true","false"],
    ["правда","ложь"]
  ].map(function(values){return values.sort().join("|");}).indexOf(pair)>=0;
}

function existingQuestion(item){
  if(!item || typeof item!=="object") return null;
  const type=cleanText(item.type || "text");
  if(["choice","context-choice","fill-choice"].indexOf(type)<0) return null;
  if(item.audio || item.audioText || item.statements || type==="audio_story_quiz") return null;

  const prompt=cleanText(item.q || item.question);
  if(!prompt || prompt.length>220) return null;

  const options=uniqueStrings(Array.isArray(item.options)?item.options:[]);
  if(options.length!==4 && !isBinaryOptions(options)) return null;

  const answers=uniqueStrings(
    Array.isArray(item.a) ? item.a :
    Array.isArray(item.answers) ? item.answers :
    [item.answer,item.correctAnswer]
  );
  const answerKeys=new Set(answers.map(normalize));
  const correct=options.find(function(option){return answerKeys.has(normalize(option));});
  if(!correct) return null;

  return {
    id:cleanText(item.id || ("quick-"+Math.random())),
    prompt,
    options:shuffle(options),
    correct,
    source:"exercise"
  };
}

function studyEntry(item,index){
  if(!item || typeof item!=="object") return null;
  const es=cleanText(item.word || item.base || (Array.isArray(item.answers)?item.answers[0]:""));
  const ru=cleanText(item.tr || item.translation || (Array.isArray(item.ru)?item.ru[0]:""));
  if(!es || !ru || es.length>64 || ru.length>72) return null;
  return {
    id:cleanText(item.id || ("word-"+index)),
    topicId:cleanText(item.topicId || item.topic || ""),
    es,
    ru
  };
}

function fourOptions(correct,candidates){
  const correctKey=normalize(correct);
  const distractors=shuffle(uniqueStrings(candidates).filter(function(value){
    return normalize(value)!==correctKey;
  })).slice(0,3);
  if(distractors.length<3) return null;
  return shuffle([correct].concat(distractors));
}

function syntheticVocabularyQuestions(items){
  const entries=items.map(studyEntry).filter(Boolean);
  const esPool=entries.map(function(item){return item.es;});
  const ruPool=entries.map(function(item){return item.ru;});
  const questions=[];

  entries.forEach(function(entry,index){
    const ruOptions=fourOptions(entry.ru,ruPool);
    if(ruOptions){
      questions.push({
        id:"vocab-ru-"+entry.topicId+"-"+entry.id+"-"+index,
        prompt:"Что значит «"+entry.es+"»?",
        options:ruOptions,
        correct:entry.ru,
        source:"vocabulary"
      });
    }

    const esOptions=fourOptions(entry.es,esPool);
    if(esOptions){
      questions.push({
        id:"vocab-es-"+entry.topicId+"-"+entry.id+"-"+index,
        prompt:"Как будет по-испански «"+entry.ru+"»?",
        options:esOptions,
        correct:entry.es,
        source:"vocabulary"
      });
    }
  });

  return questions;
}

export function buildBlitzPool(source){
  const safe=source && typeof source==="object" ? source : {};
  const exercises=Array.isArray(safe.exercises)?safe.exercises:[];
  const studyItems=Array.isArray(safe.studyItems)?safe.studyItems:[];

  const quick=exercises.map(existingQuestion).filter(Boolean);
  const vocab=syntheticVocabularyQuestions(studyItems);
  const seen=new Set();

  return shuffle(quick.concat(vocab).filter(function(question){
    const key=normalize(question.prompt)+"::"+normalize(question.correct);
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  }));
}

export function createBlitzGame(options={}){
  const getSource=typeof options.getSource==="function" ? options.getSource : function(){return {};};
  const onExit=typeof options.onExit==="function" ? options.onExit : function(){};
  const onHighScoreChange=typeof options.onHighScoreChange==="function" ? options.onHighScoreChange : function(){};

  let root=null;
  let timerId=null;
  let nextQuestionTimeout=null;
  let pool=[];
  let cursor=0;
  let running=false;
  let locked=false;
  let endAt=0;
  let score=0;
  let correctCount=0;
  let wrongCount=0;
  let combo=0;
  let maxCombo=0;

  function readHighScore(){
    try {
      const value=Number.parseInt(localStorage.getItem(BLITZ_HIGH_SCORE_KEY) || "0",10);
      return Number.isFinite(value) && value>0 ? value : 0;
    } catch(error){
      return 0;
    }
  }

  function writeHighScore(value){
    try { localStorage.setItem(BLITZ_HIGH_SCORE_KEY,String(Math.max(0,Number(value)||0))); } catch(error) {}
  }

  function clearTimers(){
    if(timerId!==null){
      clearInterval(timerId);
      timerId=null;
    }
    if(nextQuestionTimeout!==null){
      clearTimeout(nextQuestionTimeout);
      nextQuestionTimeout=null;
    }
  }

  function ensureRoot(){
    if(root) return root;
    root=document.createElement("section");
    root.id="blitzScreen";
    root.className="blitz-screen";
    root.hidden=true;
    root.setAttribute("aria-label","Блиц на 60 секунд");
    root.innerHTML=
      '<div class="blitz-shell">'+
        '<div class="blitz-topbar">'+
          '<button class="blitz-back" data-blitz-exit type="button">← К тренировкам</button>'+
          '<div class="blitz-clock" data-blitz-clock aria-live="off">00:60</div>'+
          '<div class="blitz-score-pill">Счёт <strong data-blitz-score>0</strong></div>'+
        '</div>'+
        '<div class="blitz-time-track" aria-hidden="true"><span data-blitz-time-bar></span></div>'+
        '<main class="blitz-play" data-blitz-play>'+
          '<div class="blitz-round-meta"><span data-blitz-combo>Комбо ×0</span><span>⚡ Быстрый выбор</span></div>'+
          '<div class="blitz-question-wrap">'+
            '<p class="blitz-kicker">Выбери ответ</p>'+
            '<h1 class="blitz-question" data-blitz-question></h1>'+
            '<div class="blitz-answers" data-blitz-answers></div>'+
          '</div>'+
        '</main>'+
        '<section class="blitz-game-over" data-blitz-game-over hidden>'+
          '<img class="blitz-victory" src="assets/images/mascot/victory.webp?v=20260923-blitz-mode18" alt="Рыжий кот-победитель с секундомером" onerror="this.style.display=\'none\'">'+
          '<div class="blitz-record-badge" data-blitz-record hidden>🎉 Новый рекорд!</div>'+
          '<p class="blitz-game-over-kicker">Время вышло</p>'+
          '<h2>Блиц завершён!</h2>'+
          '<div class="blitz-final-score"><strong data-blitz-final-score>0</strong><span>очков</span></div>'+
          '<div class="blitz-result-stats">'+
            '<div><strong data-blitz-correct>0</strong><span>верно</span></div>'+
            '<div><strong data-blitz-wrong>0</strong><span>ошибок</span></div>'+
            '<div><strong data-blitz-max-combo>0</strong><span>макс. комбо</span></div>'+
          '</div>'+
          '<div class="blitz-game-over-actions">'+
            '<button class="btn btn-primary" data-blitz-restart type="button">Сыграть снова</button>'+
            '<button class="btn btn-soft" data-blitz-exit type="button">К тренировкам</button>'+
          '</div>'+
        '</section>'+
        '<section class="blitz-empty" data-blitz-empty hidden>'+
          '<h2>Для блица пока нет быстрых карточек</h2>'+
          '<p>Нужны задания с четырьмя вариантами ответа или карточки Да/Нет.</p>'+
          '<button class="btn btn-soft" data-blitz-exit type="button">К тренировкам</button>'+
        '</section>'+
      '</div>';

    root.querySelectorAll("[data-blitz-exit]").forEach(function(button){
      button.addEventListener("click",exitToPractice);
    });
    root.querySelector("[data-blitz-restart]").addEventListener("click",start);
    document.body.appendChild(root);
    return root;
  }

  function nextQuestion(){
    if(!running || !pool.length) return;
    if(cursor>=pool.length){
      pool=shuffle(pool);
      cursor=0;
    }
    const question=pool[cursor++];
    const questionNode=root.querySelector("[data-blitz-question]");
    const answersNode=root.querySelector("[data-blitz-answers]");
    questionNode.textContent=question.prompt;
    answersNode.innerHTML="";
    question.options.forEach(function(option,index){
      const button=document.createElement("button");
      button.type="button";
      button.className="blitz-answer";
      button.dataset.answerIndex=String(index);
      button.textContent=option;
      button.addEventListener("click",function(){chooseAnswer(button,option,question);});
      answersNode.appendChild(button);
    });
    locked=false;
  }

  function pointsForCombo(value){
    if(value>=6) return 20;
    if(value>=3) return 15;
    return 10;
  }

  function updateHud(){
    root.querySelector("[data-blitz-score]").textContent=String(score);
    root.querySelector("[data-blitz-combo]").textContent="Комбо ×"+combo;
  }

  function chooseAnswer(button,selected,question){
    if(!running || locked) return;
    locked=true;
    const isCorrect=normalize(selected)===normalize(question.correct);
    const buttons=Array.from(root.querySelectorAll(".blitz-answer"));
    buttons.forEach(function(item){item.disabled=true;});

    if(isCorrect){
      combo+=1;
      maxCombo=Math.max(maxCombo,combo);
      correctCount+=1;
      score+=pointsForCombo(combo);
      button.classList.add("is-correct");
    }else{
      wrongCount+=1;
      combo=0;
      button.classList.add("is-wrong");
      buttons.forEach(function(item){
        if(normalize(item.textContent)===normalize(question.correct)) item.classList.add("is-correct");
      });
    }

    updateHud();
    nextQuestionTimeout=setTimeout(function(){
      nextQuestionTimeout=null;
      if(running) nextQuestion();
    },ANSWER_FEEDBACK_MS);
  }

  function updateTimer(){
    if(!running) return;
    const remaining=Math.max(0,endAt-performance.now());
    const seconds=Math.ceil(remaining/1000);
    root.querySelector("[data-blitz-clock]").textContent="00:"+String(seconds).padStart(2,"0");
    root.querySelector("[data-blitz-time-bar]").style.transform="scaleX("+(remaining/GAME_MS)+")";
    if(remaining<=0) finish();
  }

  function finish(){
    if(!running) return;
    running=false;
    locked=true;
    clearTimers();

    const previous=readHighScore();
    const newRecord=score>previous;
    const best=newRecord?score:previous;
    if(newRecord) writeHighScore(score);
    onHighScoreChange(best);

    root.querySelector("[data-blitz-play]").hidden=true;
    root.querySelector("[data-blitz-game-over]").hidden=false;
    root.querySelector("[data-blitz-empty]").hidden=true;
    root.querySelector("[data-blitz-record]").hidden=!newRecord;
    root.querySelector("[data-blitz-final-score]").textContent=String(score);
    root.querySelector("[data-blitz-correct]").textContent=String(correctCount);
    root.querySelector("[data-blitz-wrong]").textContent=String(wrongCount);
    root.querySelector("[data-blitz-max-combo]").textContent=String(maxCombo);
    root.querySelector("[data-blitz-clock]").textContent="00:00";
    root.querySelector("[data-blitz-time-bar]").style.transform="scaleX(0)";
  }

  function resetState(){
    score=0;
    correctCount=0;
    wrongCount=0;
    combo=0;
    maxCombo=0;
    cursor=0;
    locked=false;
    updateHud();
  }

  function start(){
    const screen=ensureRoot();
    clearTimers();
    pool=buildBlitzPool(getSource());
    resetState();

    screen.hidden=false;
    document.body.classList.add("blitz-active");
    screen.querySelector("[data-blitz-game-over]").hidden=true;

    if(!pool.length){
      running=false;
      screen.querySelector("[data-blitz-play]").hidden=true;
      screen.querySelector("[data-blitz-empty]").hidden=false;
      screen.querySelector("[data-blitz-clock]").textContent="00:60";
      screen.querySelector("[data-blitz-time-bar]").style.transform="scaleX(1)";
      return;
    }

    screen.querySelector("[data-blitz-empty]").hidden=true;
    screen.querySelector("[data-blitz-play]").hidden=false;
    running=true;
    endAt=performance.now()+GAME_MS;
    screen.querySelector("[data-blitz-clock]").textContent="00:60";
    screen.querySelector("[data-blitz-time-bar]").style.transform="scaleX(1)";
    nextQuestion();
    timerId=setInterval(updateTimer,100);
    updateTimer();
  }

  function close(){
    clearTimers();
    running=false;
    locked=true;
    if(root) root.hidden=true;
    document.body.classList.remove("blitz-active");
  }

  function exitToPractice(){
    close();
    onExit();
  }

  function destroy(){
    close();
    if(root){
      root.remove();
      root=null;
    }
  }

  return Object.freeze({
    start,
    close,
    destroy,
    isOpen:function(){return Boolean(root && !root.hidden);}
  });
}

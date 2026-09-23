const MASCOT_PATHS = Object.freeze({
  confident: "assets/images/mascot/cat_confident.webp",
  thinking: "assets/images/mascot/cat_thinking.webp",
  chatty: "assets/images/mascot/cat_chatty.webp",
  guilty: "assets/images/mascot/cat_guilty.webp"
});

function mascotPath(mood){
  return MASCOT_PATHS[mood] || MASCOT_PATHS.confident;
}

export function renderImposterCard(container, task, handlers = {}){
  if(!container || !task) return null;

  const onSafeGuess=typeof handlers.onSafeGuess==="function"?handlers.onSafeGuess:function(){};
  const onSolved=typeof handlers.onSolved==="function"?handlers.onSolved:function(){};
  const onNext=typeof handlers.onNext==="function"?handlers.onNext:function(){};
  let solved=false;
  const startedAt=typeof performance!=="undefined"&&performance.now?performance.now():Date.now();

  container.innerHTML=
    '<section class="imposter-card" aria-label="Спаси кота от ошибки">'+
      '<div class="imposter-mascot-wrap">'+
        '<img class="imposter-mascot" data-imposter-mascot alt="Рыжий кот">'+
      '</div>'+
      '<div class="imposter-main">'+
        '<p class="imposter-context" data-imposter-context></p>'+
        '<div class="imposter-bubble">'+
          '<div class="imposter-tokens" data-imposter-tokens></div>'+
          '<p class="imposter-hint" data-imposter-hint aria-live="polite">Нажми на слово, в котором кот ошибся.</p>'+
        '</div>'+
        '<p class="imposter-translation" data-imposter-translation></p>'+
        '<div class="imposter-explanation" data-imposter-explanation hidden>'+
          '<strong>Ой, спалился!</strong>'+
          '<p data-imposter-explanation-text></p>'+
          '<button class="imposter-next" data-imposter-next type="button">Следующее →</button>'+
        '</div>'+
      '</div>'+
    '</section>';

  const mascot=container.querySelector("[data-imposter-mascot]");
  const context=container.querySelector("[data-imposter-context]");
  const tokens=container.querySelector("[data-imposter-tokens]");
  const hint=container.querySelector("[data-imposter-hint]");
  const translation=container.querySelector("[data-imposter-translation]");
  const explanation=container.querySelector("[data-imposter-explanation]");
  const explanationText=container.querySelector("[data-imposter-explanation-text]");
  const next=container.querySelector("[data-imposter-next]");

  mascot.src=mascotPath(task.mood);
  context.textContent=task.contextTitle || "Найди ошибку в фразе кота:";
  translation.textContent=task.translation ? "Перевод: "+task.translation : "";
  translation.hidden=!task.translation;

  function setMood(mood){
    mascot.src=mascotPath(mood);
  }

  (task.tokens || []).forEach(function(token,index){
    const chip=document.createElement("button");
    chip.type="button";
    chip.className="imposter-word-chip";
    chip.textContent=token.text;
    chip.dataset.imposterIndex=String(index);

    chip.addEventListener("click",function(){
      if(solved) return;

      if(!token.isError){
        setMood("thinking");
        hint.textContent="Тут всё верно, ищи дальше!";
        chip.classList.remove("is-shaking","is-wrong-guess");
        void chip.offsetWidth;
        chip.classList.add("is-shaking","is-wrong-guess");
        window.setTimeout(function(){
          chip.classList.remove("is-shaking","is-wrong-guess");
        },450);
        onSafeGuess({task:task,token:token,index:index});
        return;
      }

      solved=true;
      setMood("guilty");
      hint.textContent="Ошибка найдена!";
      chip.classList.add("is-solved");
      chip.textContent="";

      const wrong=document.createElement("span");
      wrong.className="imposter-word-wrong";
      wrong.textContent=token.text;

      const correct=document.createElement("span");
      correct.className="imposter-word-correct";
      correct.textContent=token.correct || "";

      chip.append(wrong,correct);
      container.querySelectorAll(".imposter-word-chip").forEach(function(button){
        button.disabled=true;
      });

      explanationText.textContent=token.explanation || "Здесь спряталась ошибка.";
      explanation.hidden=false;
      const now=typeof performance!=="undefined"&&performance.now?performance.now():Date.now();
      onSolved({task:task,token:token,index:index,elapsedMs:Math.max(0,now-startedAt)});
    });

    tokens.appendChild(chip);
  });

  next.addEventListener("click",function(){onNext(task);});

  return Object.freeze({
    setMood:setMood,
    focusNext:function(){next.focus();}
  });
}

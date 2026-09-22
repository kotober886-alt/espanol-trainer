/**
 * Active trainer view and exercise widgets.
 * Owns transient drag/drop/input state and AnswerEngine integration.
 */
export function createTrainerView(deps){
  const {els,$,escapeHtml,shuffle,normalize,fold,normalizePictureAnswer,pictureAsset,
    bindPictureImageFallback,getState,patchState,isVocabularyTopic,answerEngine,progress,
    syncSession,renderStats,renderApp,onFinish,setTrainingFavicon,colorArt,safeVibrate,
    playAudioStory,getAudioRate,cycleAudioRate}=deps;

  let orderPool=[],orderState=[],matchPool=[],matchState=[],clozePool=[],clozeState=[];
  let dragSelection=null,sortState={},sortSelection=null,sortPool=[];
  let audioStoryState={};

  function resetCard(){
    orderPool=[];orderState=[];matchPool=[];matchState=[];clozePool=[];clozeState=[];
    dragSelection=null;sortState={};sortSelection=null;sortPool=[];audioStoryState={};
    const checkBtn=$("checkBtn"),showBtn=$("showBtn");
    if(checkBtn)checkBtn.disabled=false;
    if(showBtn){showBtn.hidden=false;showBtn.textContent="Посмотреть ответ";}
    els.answerInput.value="";els.answerInput.disabled=false;els.answerInput.hidden=false;
    els.answerLabel.hidden=false;els.answerLabel.textContent="Твой ответ";
    els.audioActions.hidden=true;els.choiceGrid.hidden=true;els.choiceGrid.className="choice-grid";els.choiceGrid.innerHTML="";
    els.orderWidget.hidden=true;els.orderBuilt.innerHTML="";els.orderBank.innerHTML="";
    els.matchWidget.hidden=true;els.matchList.innerHTML="";els.matchBank.innerHTML="";
    els.clozeWidget.hidden=true;els.clozePassage.innerHTML="";els.clozeBank.innerHTML="";
    els.sortWidget.hidden=true;els.sortColumns.innerHTML="";els.sortBank.innerHTML="";
    els.pictureWidget.hidden=true;els.pictureStage.innerHTML="";
    els.formGrid.hidden=true;els.formGrid.innerHTML="";
    els.feedback.textContent="";els.feedback.className="feedback";els.answerBox.classList.remove("open");
  }

  function renderOrderWidget(){
    els.orderBuilt.innerHTML=orderState.map(function(id){
      const item=orderPool.find(token=>token.id===id);
      return '<button class="word-chip" data-remove-token="'+id+'" type="button">'+escapeHtml(item?item.text:"")+'</button>';
    }).join("");
    els.orderBank.innerHTML=orderPool.map(token=>'<button class="word-chip '+(orderState.indexOf(token.id)>=0?"used":"")+
      '" data-add-token="'+token.id+'" type="button">'+escapeHtml(token.text)+'</button>').join("");
    els.orderBuilt.querySelectorAll("[data-remove-token]").forEach(btn=>btn.addEventListener("click",function(){
      orderState=orderState.filter(id=>id!==Number(btn.dataset.removeToken));renderOrderWidget();
    }));
    els.orderBank.querySelectorAll("[data-add-token]").forEach(btn=>btn.addEventListener("click",function(){
      const id=Number(btn.dataset.addToken);if(orderState.indexOf(id)<0)orderState.push(id);renderOrderWidget();
    }));
  }

  function structuredToken(pool,id){return pool.find(token=>token.id===Number(id));}
  function stateFor(kind){return kind==="match"?matchState:clozeState;}
  function renderBank(container,pool,state,kind){
    const used=state.filter(id=>id!==null&&id!==undefined);
    container.innerHTML=pool.map(function(token){
      const isUsed=used.indexOf(token.id)>=0;
      const selected=dragSelection&&dragSelection.kind===kind&&dragSelection.id===token.id;
      return '<button class="drag-token '+(isUsed?'used ':'')+(selected?'selected':'')+'" data-drag-kind="'+kind+
        '" data-drag-token="'+token.id+'" draggable="'+(!isUsed)+'" type="button">'+escapeHtml(token.text)+'</button>';
    }).join("");
    container.querySelectorAll("[data-drag-token]").forEach(function(btn){
      btn.addEventListener("click",function(){
        if(btn.classList.contains("used"))return;
        const id=Number(btn.dataset.dragToken);
        dragSelection=dragSelection&&dragSelection.kind===kind&&dragSelection.id===id?null:{kind,id};
        kind==="match"?renderMatch():renderCloze();
      });
      btn.addEventListener("dragstart",function(event){
        if(btn.classList.contains("used")){event.preventDefault();return;}
        const id=Number(btn.dataset.dragToken);dragSelection={kind,id};
        event.dataTransfer.effectAllowed="move";event.dataTransfer.setData("text/plain",kind+":"+id);
      });
    });
  }
  function assign(kind,slot,tokenId){
    const state=stateFor(kind),pool=kind==="match"?matchPool:clozePool;
    if(!structuredToken(pool,tokenId))return;
    for(let i=0;i<state.length;i++)if(state[i]===tokenId)state[i]=null;
    state[slot]=tokenId;dragSelection=null;kind==="match"?renderMatch():renderCloze();
  }
  function bindTargets(selector,kind){
    document.querySelectorAll(selector).forEach(function(target){
      const slot=Number(kind==="match"?target.dataset.matchSlot:target.dataset.clozeSlot);
      target.addEventListener("click",function(){
        const state=stateFor(kind);
        if(dragSelection&&dragSelection.kind===kind)assign(kind,slot,dragSelection.id);
        else if(state[slot]!==null){state[slot]=null;dragSelection=null;kind==="match"?renderMatch():renderCloze();}
      });
      target.addEventListener("dragover",e=>{e.preventDefault();target.classList.add("drop-hover");});
      target.addEventListener("dragleave",()=>target.classList.remove("drop-hover"));
      target.addEventListener("drop",function(e){
        e.preventDefault();target.classList.remove("drop-hover");
        const p=e.dataTransfer.getData("text/plain").split(":");if(p[0]===kind)assign(kind,slot,Number(p[1]));
      });
    });
  }
  function currentItem(){const s=getState();return s.queue[s.index]||null;}
  function renderMatch(){
    const item=currentItem();if(!item||item.type!=="match")return;
    els.matchList.innerHTML=item.pairs.map(function(pair,i){
      const token=matchState[i]===null?null:structuredToken(matchPool,matchState[i]);
      return '<div class="match-row"><div class="match-prompt">'+escapeHtml(pair[0])+'</div><button class="match-drop '+
        (token?'filled':'')+'" data-match-slot="'+i+'" type="button"><span>'+(token?escapeHtml(token.text):'Перетащи сюда')+
        '</span>'+(token?'<span aria-hidden="true">×</span>':'')+'</button></div>';
    }).join("");
    renderBank(els.matchBank,matchPool,matchState,"match");bindTargets("#matchList [data-match-slot]","match");
  }
  function renderCloze(){
    const item=currentItem();if(!item||item.type!=="cloze-passage")return;
    const pieces=String(item.template||"").split(/(\{\{\d+\}\})/g);
    els.clozePassage.innerHTML=pieces.map(function(piece){
      const m=piece.match(/^\{\{(\d+)\}\}$/);if(!m)return escapeHtml(piece);
      const slot=Number(m[1]),token=clozeState[slot]===null?null:structuredToken(clozePool,clozeState[slot]);
      return '<button class="cloze-blank '+(token?'filled':'')+'" data-cloze-slot="'+slot+'" type="button">'+
        (token?escapeHtml(token.text):'пропуск '+(slot+1))+'</button>';
    }).join("");
    renderBank(els.clozeBank,clozePool,clozeState,"cloze");bindTargets("#clozePassage [data-cloze-slot]","cloze");
  }
  function renderSort(){
    const item=currentItem();if(!item||item.type!=="category-sort")return;
    const tokenButton=(token,assigned)=>'<button class="sort-token '+(sortSelection===token.id?'selected':'')+
      '" data-sort-token="'+escapeHtml(token.id)+'" data-sort-assigned="'+(assigned?'true':'false')+
      '" draggable="true" type="button">'+escapeHtml(token.text)+'</button>';
    els.sortColumns.innerHTML=(item.sortColumns||[]).map(function(column){
      const assigned=sortPool.filter(token=>sortState[token.id]===column.id);
      return '<section class="sort-column" data-sort-column="'+escapeHtml(column.id)+'" tabindex="0"><h3>'+
        escapeHtml(column.title)+'</h3><div class="sort-column-list">'+assigned.map(t=>tokenButton(t,true)).join("")+'</div></section>';
    }).join("");
    els.sortBank.innerHTML=sortPool.filter(t=>!sortState[t.id]).map(t=>tokenButton(t,false)).join("");
    els.sortWidget.querySelectorAll("[data-sort-token]").forEach(function(btn){
      btn.addEventListener("click",function(e){
        e.stopPropagation();const id=btn.dataset.sortToken;
        if(btn.dataset.sortAssigned==="true"){sortState[id]=null;sortSelection=null;}
        else sortSelection=sortSelection===id?null:id;renderSort();
      });
      btn.addEventListener("dragstart",function(e){sortSelection=btn.dataset.sortToken;e.dataTransfer.setData("text/plain","sort:"+sortSelection);});
    });
    els.sortColumns.querySelectorAll("[data-sort-column]").forEach(function(col){
      const assignSelected=function(){if(!sortSelection)return;sortState[sortSelection]=col.dataset.sortColumn;sortSelection=null;renderSort();};
      col.addEventListener("click",assignSelected);
      col.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&sortSelection){e.preventDefault();assignSelected();}});
      col.addEventListener("dragover",e=>{e.preventDefault();col.classList.add("drop-hover");});
      col.addEventListener("dragleave",()=>col.classList.remove("drop-hover"));
      col.addEventListener("drop",function(e){e.preventDefault();col.classList.remove("drop-hover");const raw=e.dataTransfer.getData("text/plain");if(raw.indexOf("sort:")===0){sortSelection=raw.slice(5);assignSelected();}});
    });
    els.sortBank.ondragover=e=>e.preventDefault();
    els.sortBank.ondrop=function(e){e.preventDefault();const raw=e.dataTransfer.getData("text/plain");if(raw.indexOf("sort:")===0){sortState[raw.slice(5)]=null;sortSelection=null;renderSort();}};
  }

  function audioStoryKey(statement,index){
    return String(statement&&statement.id!==undefined?statement.id:index);
  }

  function audioStoryComplete(item){
    const statements=item.statements||[];
    return statements.length>0&&statements.every((statement,index)=>
      Object.prototype.hasOwnProperty.call(audioStoryState,audioStoryKey(statement,index)));
  }

  function updateAudioStorySelection(item){
    (item.statements||[]).forEach(function(statement,index){
      const key=audioStoryKey(statement,index);
      const selected=Object.prototype.hasOwnProperty.call(audioStoryState,key)?audioStoryState[key]:null;
      const card=els.choiceGrid.querySelector('[data-story-statement="'+index+'"]');
      if(!card)return;
      card.querySelectorAll("[data-story-value]").forEach(function(btn){
        const value=btn.dataset.storyValue==="true";
        const active=selected!==null&&selected===value;
        btn.classList.toggle("selected",active);
        btn.setAttribute("aria-pressed",String(active));
      });
    });
    const checkBtn=$("checkBtn");
    if(checkBtn)checkBtn.disabled=!audioStoryComplete(item);
  }

  function renderAudioStory(item){
    const statements=item.statements||[];
    const currentRate=typeof getAudioRate==="function"?getAudioRate():1;
    els.choiceGrid.hidden=false;
    els.choiceGrid.className="choice-grid audio-story-quiz";
    els.choiceGrid.innerHTML=
      '<div class="audio-story-toolbar">'+
        '<div class="audio-story-heading"><strong>'+escapeHtml(item.title||"Аудирование")+'</strong><span>Прослушай историю и отметь каждое утверждение.</span></div>'+
        '<div class="audio-story-controls audio-player">'+
          '<button class="audio-story-play audio-play" data-story-play type="button"><span aria-hidden="true">▶</span> Послушать</button>'+
          '<button class="audio-story-speed audio-speed" data-story-speed data-audio-speed type="button" aria-label="Скорость воспроизведения '+currentRate.toFixed(1)+'">'+currentRate.toFixed(1)+'×</button>'+
        '</div>'+
      '</div>'+
      '<div class="audio-story-list">'+statements.map(function(statement,index){
        return '<article class="audio-story-card" data-story-statement="'+index+'">'+
          '<p class="audio-story-statement">'+escapeHtml(statement.text||"")+'</p>'+
          '<div class="audio-story-actions" role="group" aria-label="Правда или ложь">'+
            '<button class="audio-story-choice" data-story-value="true" type="button" aria-pressed="false"><span>Правда</span><small>Verdadero</small></button>'+
            '<button class="audio-story-choice" data-story-value="false" type="button" aria-pressed="false"><span>Ложь</span><small>Falso</small></button>'+
          '</div>'+
          '<p class="audio-story-explanation" data-story-explanation hidden></p>'+
        '</article>';
      }).join("")+'</div>'+
      '<div class="audio-story-transcript-wrap" data-story-transcript-wrap hidden>'+
        '<button class="audio-story-transcript-toggle" data-story-transcript-toggle type="button" aria-expanded="false">Показать текст истории</button>'+
        '<div class="audio-story-transcript" data-story-transcript hidden>'+escapeHtml(item.audioText||item.audio||"")+'</div>'+
      '</div>';

    const playBtn=els.choiceGrid.querySelector("[data-story-play]");
    const speedBtn=els.choiceGrid.querySelector("[data-story-speed]");
    if(playBtn)playBtn.addEventListener("click",function(){
      const rate=typeof getAudioRate==="function"?getAudioRate():1;
      if(typeof playAudioStory==="function")playAudioStory(item.audioText||item.audio||"",rate,playBtn);
    });
    if(speedBtn)speedBtn.addEventListener("click",function(){
      if(typeof cycleAudioRate==="function")cycleAudioRate(speedBtn);
    });

    els.choiceGrid.querySelectorAll("[data-story-statement]").forEach(function(card){
      const index=Number(card.dataset.storyStatement),statement=statements[index];
      card.querySelectorAll("[data-story-value]").forEach(function(btn){
        btn.addEventListener("click",function(){
          if(getState().checkedCurrent)return;
          audioStoryState[audioStoryKey(statement,index)]=btn.dataset.storyValue==="true";
          updateAudioStorySelection(item);
        });
      });
    });

    const transcriptToggle=els.choiceGrid.querySelector("[data-story-transcript-toggle]");
    const transcript=els.choiceGrid.querySelector("[data-story-transcript]");
    if(transcriptToggle&&transcript)transcriptToggle.addEventListener("click",function(){
      const open=transcript.hidden;
      transcript.hidden=!open;
      transcriptToggle.setAttribute("aria-expanded",String(open));
      transcriptToggle.textContent=open?"Скрыть текст истории":"Показать текст истории";
    });
    updateAudioStorySelection(item);
  }

  function setupExercise(item){
    resetCard();patchState({checkedCurrent:false});
    const type=item.type||"text";
    if(type!=="audio_story_quiz"&&(item.audio||item.audioText))els.audioActions.hidden=false;
    if(type==="audio_story_quiz"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;
      const showBtn=$("showBtn");if(showBtn)showBtn.hidden=true;
      renderAudioStory(item);
    }else if(type==="color-prompt"){
      els.choiceGrid.hidden=false;els.choiceGrid.className="choice-grid color-prompt-grid";els.choiceGrid.innerHTML=colorArt(item.colorHex);
      els.answerLabel.textContent="Название цвета";els.answerInput.placeholder="Напиши цвет по-испански…";els.answerInput.focus();
    }else if(type==="choice"||type==="context-choice"||type==="fill-choice"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;els.choiceGrid.hidden=false;
      els.choiceGrid.innerHTML=shuffle(item.options||[]).map(option=>'<button class="choice-option" data-choice="'+escapeHtml(option)+
        '" type="button">'+escapeHtml(option)+'</button>').join("");
      els.choiceGrid.querySelectorAll("[data-choice]").forEach(btn=>btn.addEventListener("click",function(){
        els.answerInput.value=btn.dataset.choice;els.choiceGrid.querySelectorAll(".choice-option").forEach(o=>o.classList.toggle("selected",o===btn));
      }));
    }else if(type==="match"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;els.matchWidget.hidden=false;
      matchState=(item.pairs||[]).map(()=>null);matchPool=shuffle((item.pairs||[]).map((p,i)=>({id:i,text:p[1]})));renderMatch();
    }else if(type==="cloze-passage"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;els.clozeWidget.hidden=false;
      clozeState=(item.blanks||[]).map(()=>null);clozePool=shuffle((item.blanks||[]).map((a,i)=>({id:i,text:a})));renderCloze();
    }else if(type==="category-sort"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;els.sortWidget.hidden=false;sortState={};
      (item.sortTokens||[]).forEach(t=>sortState[t.id]=null);sortPool=shuffle((item.sortTokens||[]).slice());sortSelection=null;renderSort();
    }else if(type==="picture-label"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;els.pictureWidget.hidden=false;
      els.pictureHelp.textContent=item.pictureHint||"Номер на картинке соответствует полю ответа ниже.";
      const labels=item.pictureLabels||[];
      const markers=item.pictureNumbersEmbedded?"":labels.map((label,i)=>'<span class="picture-marker" style="left:'+
        Number(label.markerX)+'%;top:'+Number(label.markerY)+'%" aria-hidden="true">'+(label.displayNumber||(i+1))+'</span>').join("");
      const fields=labels.map((label,i)=>{const n=label&&label.displayNumber?label.displayNumber:i+1;return '<label class="picture-field"><span>'+
        n+'</span><input data-picture-input="'+i+'" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Подпись '+n+
        '" placeholder="По-испански"></label>';}).join("");
      const src=pictureAsset(item.pictureScene);
      const image=src?'<img class="picture-raster" src="'+escapeHtml(src)+'" alt="'+escapeHtml(item.q)+'" decoding="async" loading="eager">':"";
      els.pictureStage.innerHTML='<div class="picture-visual">'+image+'<div class="picture-image-error" hidden></div>'+markers+
        '</div><div class="picture-fields">'+fields+'</div>';
      bindPictureImageFallback(els.pictureStage.querySelector(".picture-raster"),item.pictureScene);
      els.pictureStage.querySelectorAll("[data-picture-input]").forEach(input=>input.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();checkAnswer();}}));
      const first=els.pictureStage.querySelector("[data-picture-input]");if(first)first.focus();
    }else if(type==="order"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;els.orderWidget.hidden=false;
      orderPool=shuffle((item.tokens||[]).map((token,i)=>({id:i,text:token})));renderOrderWidget();
    }else if(type==="forms"){
      els.answerInput.hidden=true;els.answerLabel.hidden=true;els.formGrid.hidden=false;
      els.formGrid.innerHTML=(item.formLabels||[]).map((label,i)=>'<div class="form-cell"><label for="formInput'+i+'">'+
        escapeHtml(label)+'</label><input id="formInput'+i+'" data-form-input="'+i+'" autocomplete="off" autocapitalize="none" spellcheck="false"></div>').join("");
      const first=els.formGrid.querySelector("input");if(first)first.focus();
    }else{
      if(type==="audio"){els.answerLabel.textContent="Что ты услышала?";els.answerInput.placeholder="Запиши предложение…";}
      else if(type==="correct"){els.answerLabel.textContent="Исправленный вариант";els.answerInput.placeholder="Напиши предложение без ошибки…";}
      else if(type==="dialogue"){els.answerLabel.textContent="Твоя реплика";els.answerInput.placeholder="Ответь по-испански…";}
      else if(type==="ser-estar-hay"){els.answerLabel.textContent="Нужная форма";els.answerInput.placeholder="Например: es, estoy, están или hay…";}
      else els.answerInput.placeholder="Напиши ответ сама…";
      els.answerInput.focus();
    }
  }

  function currentAnswer(item){
    if(item.type==="audio_story_quiz"){
      if(!audioStoryComplete(item))return "";
      return (item.statements||[]).map((statement,index)=>audioStoryState[audioStoryKey(statement,index)]?"true":"false").join(" | ");
    }
    if(item.type==="match"){if(matchState.some(v=>v===null))return "";return matchState.map(id=>{const t=structuredToken(matchPool,id);return t?t.text:"";}).join(" | ");}
    if(item.type==="cloze-passage"){if(clozeState.some(v=>v===null))return "";return clozeState.map(id=>{const t=structuredToken(clozePool,id);return t?t.text:"";}).join(" | ");}
    if(item.type==="category-sort"){if((item.sortTokens||[]).some(t=>!sortState[t.id]))return "";return item.sortTokens.map(t=>sortState[t.id]).join(" | ");}
    if(item.type==="picture-label"){const values=Array.from(els.pictureStage.querySelectorAll("[data-picture-input]")).map(i=>i.value.trim());return values.length&&values.every(Boolean)?values.join(" | "):"";}
    if(item.type==="order"){return orderState.map(id=>{const t=orderPool.find(v=>v.id===id);return t?t.text:"";}).join(" ");}
    if(item.type==="forms"){const values=Array.from(els.formGrid.querySelectorAll("[data-form-input]")).map(i=>i.value.trim());return values.some(Boolean)?values.join("|"):"";}
    return els.answerInput.value;
  }

  function markAnswers(item){
    if(item.type==="audio_story_quiz"){
      (item.statements||[]).forEach(function(statement,index){
        const key=audioStoryKey(statement,index),selected=audioStoryState[key],correct=selected===Boolean(statement.isTrue);
        const card=els.choiceGrid.querySelector('[data-story-statement="'+index+'"]');
        if(!card)return;
        card.classList.add(correct?"result-good":"result-bad");
        card.querySelectorAll("[data-story-value]").forEach(function(btn){
          const value=btn.dataset.storyValue==="true";
          btn.disabled=true;
          if(value===Boolean(statement.isTrue))btn.classList.add("result-good");
          if(value===selected&&value!==Boolean(statement.isTrue))btn.classList.add("result-bad");
        });
        const explanation=card.querySelector("[data-story-explanation]");
        if(explanation&&!correct){
          explanation.textContent=statement.explanation||"";
          explanation.hidden=!statement.explanation;
        }
      });
      const transcriptWrap=els.choiceGrid.querySelector("[data-story-transcript-wrap]");
      if(transcriptWrap)transcriptWrap.hidden=false;
      const checkBtn=$("checkBtn");if(checkBtn)checkBtn.disabled=true;
      const nextBtn=$("nextBtn");if(nextBtn)nextBtn.focus();
    }else if(item.type==="choice"||item.type==="context-choice"||item.type==="fill-choice"){
      const selected=normalize(els.answerInput.value),correct=(item.a||[]).map(normalize);
      els.choiceGrid.querySelectorAll("[data-choice]").forEach(btn=>{if(normalize(btn.dataset.choice)===selected)btn.classList.add(correct.indexOf(selected)>=0?"result-good":"result-bad");});
    }else if(item.type==="match"){
      els.matchList.querySelectorAll("[data-match-slot]").forEach(function(target){
        const slot=Number(target.dataset.matchSlot),token=structuredToken(matchPool,matchState[slot]);
        target.classList.add(token&&normalize(token.text)===normalize(item.pairs[slot][1])?"result-good":"result-bad");
      });
    }else if(item.type==="cloze-passage"){
      els.clozePassage.querySelectorAll("[data-cloze-slot]").forEach(function(target){
        const slot=Number(target.dataset.clozeSlot),token=structuredToken(clozePool,clozeState[slot]);
        target.classList.add(token&&normalize(token.text)===normalize(item.blanks[slot])?"result-good":"result-bad");
      });
    }else if(item.type==="category-sort"){
      els.sortWidget.querySelectorAll("[data-sort-token]").forEach(function(btn){
        const token=(item.sortTokens||[]).find(v=>v.id===btn.dataset.sortToken);
        if(token)btn.classList.add(sortState[token.id]===token.category?"result-good":"result-bad");
      });
    }else if(item.type==="picture-label"){
      els.pictureStage.querySelectorAll("[data-picture-input]").forEach(function(input,i){
        const label=(item.pictureLabels||[])[i];
        const exact=label&&(label.answers||[]).some(a=>normalizePictureAnswer(input.value,normalize)===normalizePictureAnswer(a,normalize));
        const near=!exact&&label&&(label.answers||[]).some(a=>normalizePictureAnswer(input.value,fold)===normalizePictureAnswer(a,fold));
        input.classList.add(exact?"result-good":(near?"result-near":"result-bad"));
      });
    }
  }

  function scheduleReview(item){
    const state=getState();
    if(state.sessionActive)return false;
    if(item.sessionReview||state.queue.some(v=>v.reviewOf===item.id))return false;
    const review={...item,id:item.id+"__review",originalId:item.originalId||item.id,reviewOf:item.id,sessionReview:true,
      skill:"Повторение · "+(item.skill||"Практика")};
    const queue=state.queue.slice();
    queue.splice(Math.min(state.index+Math.max(8,Math.floor(queue.length*.35)),queue.length),0,review);
    patchState({queue});
    els.progressLabel.textContent=(state.index+1)+" / "+queue.length;
    els.progressBar.style.width=((state.index+1)/queue.length*100)+"%";
    return true;
  }

  function renderExercise(){
    const state=getState();
    els.studyView.hidden=true;
    if(!state.queue.length){
      els.exerciseView.hidden=true;els.emptyView.hidden=false;
      const messages={
        mistakes:["Ошибок пока нет","Задания, в которых была ошибка, появятся здесь для повторения."],
        tests:["Тестов в этой теме пока нет","Выбери другую тему или режим «Все»."],
        pictures:["Картинок в этой теме пока нет","Выбери другую тему или режим «Всё»."],
        audio:["Аудиозаданий в этой теме пока нет","Выбери другую тему или режим «Всё»."]
      };
      const m=messages[state.selectedMode]||["В этой теме пока нет заданий","Добавь собственное задание или выбери другую тему."];
      els.emptyTitle.textContent=m[0];els.emptyText.textContent=m[1];return;
    }
    els.exerciseView.hidden=false;els.emptyView.hidden=true;
    els.backToWordsBtn.hidden=!isVocabularyTopic(state.selectedTopic);
    const item=state.queue[state.index];
    const mistakeRound=state.sessionRound==="mistakes";
    els.questionText.textContent=item.q;
    els.skillLabel.textContent=mistakeRound ? "Работа над ошибками" : (item.skill||"Практика");
    els.questionNumber.textContent=(mistakeRound ? "Работа над ошибками · " : "Задание ")+(state.index+1)+" из "+state.queue.length;
    els.progressLabel.textContent=(state.index+1)+" / "+state.queue.length;
    els.progressBar.style.width=((state.index+1)/state.queue.length*100)+"%";
    els.answerText.textContent=item.displayAnswer||(item.a||[]).join(" / ");
    els.explanation.textContent=item.e||"";els.explanation.hidden=!item.e;
    $("prevBtn").hidden=state.sessionActive&&state.index===0;
    setupExercise(item);
  }

  function checkAnswer(){
    let state=getState();if(!state.queue.length)return;
    const item=state.queue[state.index],value=currentAnswer(item);
    if(!value.trim()){
      const map={choice:"Сначала выбери вариант.","context-choice":"Сначала выбери вариант.","fill-choice":"Сначала выбери слово для пропуска.",match:"Сначала заполни все соответствия.",
        "cloze-passage":"Сначала заполни все пропуски в тексте.","category-sort":"Сначала распредели все слова по колонкам.",
        "picture-label":"Сначала подпиши все отмеченные предметы.",
        "audio_story_quiz":"Сначала отметь «Правда» или «Ложь» для каждого утверждения."};
      els.feedback.textContent=map[item.type]||"Сначала напиши или собери свой вариант.";els.feedback.className="feedback bad";
      if(!els.answerInput.hidden)els.answerInput.focus();return;
    }
    const result=item.type==="audio_story_quiz"
      ?(function(){
        const statements=item.statements||[];
        const correctCount=statements.reduce((count,statement,index)=>
          count+(audioStoryState[audioStoryKey(statement,index)]===Boolean(statement.isTrue)?1:0),0);
        const exact=statements.length>0&&correctCount===statements.length;
        return {
          exact,
          near:false,
          displayAnswer:correctCount+" из "+statements.length+" утверждений верно",
          feedback:exact?"Все утверждения отмечены верно.":"Верно "+correctCount+" из "+statements.length+". Посмотри пояснения к ошибкам."
        };
      })()
      :answerEngine.checkAnswer(item,value);
    const exact=result.exact,near=result.near;
    if(typeof safeVibrate==="function") safeVibrate(exact?20:[30,40,30]);
    els.answerText.textContent=result.displayAnswer;markAnswers(item);
    let scheduled=false;
    if(!state.checkedCurrent){
      if(state.sessionActive&&state.sessionController){
        const record=state.sessionController.recordResult({correct:exact,answerResult:result});
        scheduled=false;
        if(record.counted&&progress){
          const p=progress.recordAnswer({exerciseId:item.id,originalId:item.originalId||null,topic:item.topic||null,correct:exact,firstAttempt:true});
          patchState({stats:progress.getStats(),streak:p.streak});
          setTrainingFavicon(p.streak);
        }
        syncSession();
        state=getState();
        els.progressLabel.textContent=(state.index+1)+" / "+state.queue.length;
        els.progressBar.style.width=((state.index+1)/Math.max(1,state.queue.length)*100)+"%";
      }else if(progress){
        const p=progress.recordAnswer({exerciseId:item.id,originalId:item.originalId||null,topic:item.topic||null,correct:exact,firstAttempt:true});
        patchState({stats:progress.getStats(),streak:p.streak});if(!exact)scheduled=scheduleReview(item);
      }
      patchState({checkedCurrent:true});renderStats();
    }
    els.feedback.textContent=result.feedback+(exact?"":(scheduled&&!state.sessionActive?" Это задание вернётся через несколько карточек.":(near?"":" Попробуй ещё раз или открой ответ сама.")));
    els.feedback.className=exact?"feedback good":(near?"feedback near":"feedback bad");
  }

  function move(delta){
    let state=getState();if(!state.queue.length)return;
    const skipping=delta>0&&!state.checkedCurrent;
    if(skipping && typeof safeVibrate==="function") safeVibrate([30,40,30]);
    if(state.sessionActive&&state.sessionController){
      if(skipping){
        const item=state.queue[state.index],record=state.sessionController.recordResult({correct:false,skipped:true});
        if(record.counted&&progress){
          const p=progress.recordSkip({exerciseId:item.id,originalId:item.originalId||null,topic:item.topic||null,firstAttempt:true});
          patchState({stats:progress.getStats(),streak:p.streak});
        }
        syncSession();renderStats();
      }
      if(delta>0){
        const step=state.sessionController.next();syncSession();if(step.finished){onFinish();return;}
      }else if(delta<0){state.sessionController.previous();syncSession();}
      patchState({checkedCurrent:false});renderApp();return;
    }
    const next=(state.index+delta+state.queue.length)%state.queue.length;
    patchState({index:next,checkedCurrent:false});renderApp();
  }

  function selectChoiceByIndex(index){
    const state=getState();
    if(state.checkedCurrent) return false;
    const options=Array.from(els.choiceGrid.querySelectorAll(".choice-option"));
    const button=options[index];
    if(!button || button.disabled || els.choiceGrid.hidden) return false;
    button.click();
    return true;
  }

  function handleShortcut(key){
    if(/^[1-4]$/.test(key)){
      return selectChoiceByIndex(Number(key)-1);
    }
    if(key==="Enter"){
      const state=getState();
      if(state.checkedCurrent) move(1);
      else checkAnswer();
      return true;
    }
    return false;
  }

  function clearOrder(){orderState=[];renderOrderWidget();}

  return Object.freeze({renderExercise,setupExercise,currentAnswer,checkAnswer,move,clearOrder,resetCard,selectChoiceByIndex,handleShortcut});
}

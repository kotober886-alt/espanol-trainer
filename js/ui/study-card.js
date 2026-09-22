/**
 * Study-card view.
 * Owns card rendering/navigation; topic data comes from Registry callbacks.
 */
export function createStudyCardView(deps){
  const {els,$,escapeHtml,fold,getState,patchState,getStudyItems,getCategories,getTopic,
    runtimeAssetUrl,withVersion,onStartPractice}=deps;

  function currentWords(){
    const state=getState();
    let words=getStudyItems(state.selectedTopic).slice();
    if(state.foodCategory!=="all") words=words.filter(function(word){return word.cat===state.foodCategory;});
    const query=fold(state.studySearch);
    if(query){
      words=words.filter(function(word){
        return fold([word.word,word.tr,word.base].filter(Boolean).join(" ")).indexOf(query)>=0;
      });
    }
    return words;
  }

  function categoryTitle(id){
    const state=getState();
    const item=getCategories(state.selectedTopic).find(function(cat){return cat.id===id;});
    const topic=getTopic(state.selectedTopic);
    return item?item.title:(topic?topic.title:"");
  }

  function pickerLabel(item){ return item.nav||item.word||item.id; }

  function renderPicker(){
    const state=getState();
    const allWords=getStudyItems(state.selectedTopic);
    const current=currentWords()[state.wordIndex];
    const query=fold(state.studyPickerQuery);
    const categories=getCategories(state.selectedTopic);
    const categoryIds=categories.filter(c=>c.id!=="all").map(c=>c.id);
    const groups=categories.filter(c=>c.id!=="all").map(function(cat){
      return {id:cat.id,title:cat.title,items:allWords.map((item,index)=>({item,index})).filter(row=>row.item.cat===cat.id)};
    });
    const ungrouped=allWords.map((item,index)=>({item,index})).filter(row=>categoryIds.indexOf(row.item.cat)<0);
    if(ungrouped.length) groups.push({id:"other",title:"Другие",items:ungrouped});

    let visible=0;
    els.studyPickerList.innerHTML=groups.map(function(group){
      const rows=group.items.filter(function(row){
        if(!query) return true;
        return fold([pickerLabel(row.item),row.item.tr,row.item.gender].filter(Boolean).join(" ")).indexOf(query)>=0;
      });
      visible+=rows.length;
      if(!rows.length) return "";
      return '<section class="study-picker-group"><h3>'+escapeHtml(group.title)+'</h3><div class="study-picker-grid">'+
        rows.map(function(row){
          const active=current&&row.item.id===current.id;
          return '<button class="study-picker-item '+(active?'active':'')+'" data-study-index="'+row.index+
            '" type="button"><strong>'+escapeHtml(pickerLabel(row.item))+'</strong><span>'+
            escapeHtml(row.item.tr||row.item.gender||"")+'</span></button>';
        }).join("")+'</div></section>';
    }).join("");
    els.studyPickerEmpty.hidden=visible>0;
  }

  function openPicker(){
    const state=getState();
    patchState({studyPickerQuery:""});
    els.studyPickerSearch.value="";
    const topic=getTopic(state.selectedTopic);
    els.studyPickerTopic.textContent=(topic?topic.title:state.selectedTopic)+" · "+getStudyItems(state.selectedTopic).length+" карточек";
    renderPicker();
    els.studyPickerDialog.showModal();
    setTimeout(function(){els.studyPickerSearch.focus();},50);
  }

  const titles={
    verbs:"Сначала познакомимся с основными глаголами",present:"Спряжение глаголов в Presente",
    pronouns:"Сначала разберём местоимения",questions:"Сначала разберём вопросы",
    constructions:"Сначала разберём разговорные конструкции",gustar:"Сначала разберём gustar и похожие глаголы",
    agreement:"Сначала разберём артикли и согласование",past:"Сначала познакомимся с прошедшим временем",
    routine:"Сначала разберём распорядок дня",practical:"Сначала разберём время, даты, цены и количество",
    prepositions:"Сначала познакомимся с предлогами",connectors:"Сначала разберём связки и конструкции",
    calendar:"Сначала выучим календарную лексику",city:"Сначала познакомимся со словами о городе",
    home:"Сначала познакомимся с комнатами и частями дома",chores:"Сначала познакомимся с домашними делами",
    colors:"Сначала познакомимся с цветами",foods:"Сначала познакомимся с продуктами",
    clothes:"Сначала познакомимся с одеждой и аксессуарами",activities:"Сначала познакомимся с занятиями и увлечениями",
    animals:"Сначала познакомимся с животными"
  };

  function intro(topic){
    if(topic==="verbs") return "На каждой карточке сразу видны все формы глагола в Presente, перевод и живые примеры.";
    if(topic==="present") return "Все шесть форм одного глагола собраны вместе. Стрелки переключают между глаголами.";
    if(topic==="pronouns") return "Переключайся между лицами, смотри притяжательные формы, а в отдельной группе разбери me / te / le и разницу gusta / gustan.";
    if(topic==="questions") return "Смотри, о чём спрашивает слово, и сравнивай готовые вопросы с переводом.";
    if(topic==="constructions") return "Разбери схему, значение и два живых примера, затем собери собственную фразу.";
    if(topic==="gustar") return "Сравнивай оттенки отношения — от «обожаю» до «ненавижу». На каждой карточке сразу видны все формы конструкции.";
    if(topic==="agreement") return "Смотри на род и число существительного: артикль и прилагательное должны с ним согласоваться.";
    if(topic==="past") return "Сначала освой Pretérito Perfecto, затем переходи к завершённым событиям в Indefinido.";
    if(topic==="routine") return "Учи возвратные глаголы сразу с me, te, se, nos и os в бытовом контексте.";
    if(topic==="practical") return "Закрепляй готовые модели для времени, дат, цен и количества.";
    if(topic==="prepositions") return "Посмотри значение и два примера, затем выбери нужный предлог самостоятельно.";
    if(topic==="connectors") return "Выбери группу, посмотри перевод и способ употребления, а затем закрепи конструкцию без подсказок.";
    if(topic==="activities") return "Учи полезные сочетания сразу с глаголами, затем закрепляй их без подсказок.";
    if(topic==="home") return "Переключайся между комнатами, частями дома, типами жилья и предметами по комнатам.";
    if(topic==="chores") return "Смотри на действие, запоминай устойчивое выражение и закрепляй его в бытовом контексте.";
    if(topic==="colors") return "Смотри на чистую цветную плашку, запоминай испанское название и форму прилагательного.";
    if(topic==="animals") return "Учи животных по группам: домашние, ферма, дикие, птицы, морские, рептилии и амфибии.";
    return "Посмотри перевод и примеры, затем переходи к заданиям без подсказок.";
  }

  function unitLabel(state){
    const topic=state.selectedTopic;
    if(topic==="present") return "Глагол";
    if(topic==="pronouns") return "Карточка";
    if(topic==="questions") return "Вопрос";
    if(topic==="constructions") return "Конструкция";
    if(topic==="gustar") return "Модель";
    if(topic==="agreement") return "Правило";
    if(topic==="past") return "Форма";
    if(topic==="routine"||topic==="chores") return "Действие";
    if(topic==="practical") return "Модель";
    if(topic==="prepositions") return "Предлог";
    if(topic==="connectors") return "Конструкция";
    if(topic==="activities") return "Фраза";
    if(topic==="city"&&state.foodCategory==="opposites") return "Пара";
    if(topic==="home") return "Карточка";
    return "Слово";
  }

  function colorArt(hex){
    return '<div class="color-swatch" style="background-color:'+escapeHtml(hex||"#ffffff")+'" role="img" aria-label="Однотонная цветная плашка"></div>';
  }

  function imageArt(word,extraClass){
    const src=word&&word.image?word.image:"";
    if(!src) return "";
    return '<img class="food-direct-image home-card-image '+(extraClass||"")+'" src="'+runtimeAssetUrl(src,true)+
      '" alt="'+escapeHtml(word.tr||word.word||"")+'" draggable="false" loading="eager" decoding="async">';
  }

  function studyArt(word){
    const topic=getState().selectedTopic;
    if(topic==="colors") return colorArt(word.hex);
    if(topic==="home"||topic==="chores"||topic==="animals") return imageArt(word,topic==="chores"?"chore-card-image":"");
    if(topic==="foods"){
      if(word.image) return imageArt(word);
      return typeof deps.foodArt==="function"?deps.foodArt(word.art):"";
    }
    if(topic==="clothes") return typeof deps.clothingArt==="function"?deps.clothingArt(word.art||word.id):"";
    if(topic==="activities") return typeof deps.activityArt==="function"?deps.activityArt(word.art):"";
    if(topic==="city") return typeof deps.cityArt==="function"?deps.cityArt(word.id):"";
    return "";
  }

  function render(){
    let state=getState();
    const words=currentWords();
    const categories=getCategories(state.selectedTopic);
    els.wordSearch.hidden=getStudyItems(state.selectedTopic).length<20;
    els.wordSearch.placeholder=state.selectedTopic==="verbs"?"Найти глагол…":"Найти слово в теме…";

    if(!words.length){
      els.studyView.hidden=false;els.exerciseView.hidden=true;els.emptyView.hidden=true;
      els.studyCard.hidden=true;els.studyNav.hidden=true;els.studySearchEmpty.hidden=false;
      els.progressLabel.textContent="0 / 0";els.progressBar.style.width="0";
      return;
    }

    if(state.wordIndex>=words.length){
      patchState({wordIndex:0});
      state=getState();
    }
    const word=words[state.wordIndex];

    els.studyCard.hidden=false;els.studyNav.hidden=false;els.studySearchEmpty.hidden=true;
    els.studyView.hidden=false;els.exerciseView.hidden=true;els.emptyView.hidden=true;
    els.studyTitle.textContent=titles[state.selectedTopic]||"Сначала познакомимся с материалом";
    els.studyIntroText.textContent=intro(state.selectedTopic);
    const topic=getTopic(state.selectedTopic);
    els.foodFilters.setAttribute("aria-label","Категории: "+(topic?topic.title:state.selectedTopic));
    els.foodFilters.innerHTML=categories.map(function(cat){
      const allWords=getStudyItems(state.selectedTopic);
      const count=cat.id==="all"?allWords.length:allWords.filter(word=>word.cat===cat.id).length;
      return '<button class="food-filter '+(cat.id===state.foodCategory?'active':'')+'" data-food-category="'+
        escapeHtml(cat.id)+'" type="button">'+escapeHtml(cat.title)+' · '+count+'</button>';
    }).join("");
    els.foodFilters.querySelectorAll("[data-food-category]").forEach(function(btn){
      btn.addEventListener("click",function(){
        patchState({foodCategory:btn.dataset.foodCategory,wordIndex:0});
        render();
      });
    });

    const hasArt=["foods","clothes","colors","activities","city","home","chores","animals"].includes(state.selectedTopic);
    const isPronouns=state.selectedTopic==="pronouns";
    const isPresent=state.selectedTopic==="present";
    const hasTable=!!word.table;
    els.studyCard.classList.toggle("no-art",!hasArt);
    els.foodArt.hidden=false;
    els.foodArt.innerHTML=studyArt(word);
    els.foodWord.textContent=word.word;
    els.foodGender.textContent=word.gender||"";
    els.foodCategoryLabel.textContent=categoryTitle(word.cat);
    els.foodTranslation.textContent=word.tr||"";
    els.pronounTabs.hidden=!isPronouns;
    els.pronounDetails.hidden=!(isPronouns||isPresent||hasTable);
    els.examplesTitle.textContent=(isPronouns||isPresent||hasTable)?"Примеры":"В контексте";

    if(isPronouns){
      els.pronounTabs.innerHTML=words.map(function(item,i){
        const parts=String(item.nav||item.word).split(" · ");
        return '<button class="pronoun-tab '+(i===state.wordIndex?'active':'')+'" data-pronoun-index="'+i+
          '" type="button" role="tab" aria-selected="'+(i===state.wordIndex)+'"><strong>'+escapeHtml(parts[0])+
          '</strong><span>'+escapeHtml(parts[1]||item.tr||"")+'</span></button>';
      }).join("");
      els.pronounTabs.querySelectorAll("[data-pronoun-index]").forEach(function(btn){
        btn.addEventListener("click",function(){patchState({wordIndex:Number(btn.dataset.pronounIndex)});render();});
      });
    }else els.pronounTabs.innerHTML="";

    if(isPronouns&&!hasTable){
      const p=word.possessive||{};
      const note=p.note?'<div class="pronoun-note">'+escapeHtml(p.note)+'</div>':"";
      els.pronounDetails.innerHTML='<div class="pronoun-block"><div class="pronoun-kicker">Перед существительным</div>'+
        '<div class="pronoun-form">'+escapeHtml(p.short||"")+'</div><div class="pronoun-meaning">'+escapeHtml(p.meaning||"")+
        '</div><div class="pronoun-note">'+escapeHtml(p.example||"")+'</div>'+note+'</div>'+
        '<div class="pronoun-block"><div class="pronoun-kicker">Самостоятельная форма</div><div class="pronoun-form">'+
        escapeHtml(p.full||"")+'</div><div class="pronoun-meaning">'+escapeHtml(p.fullExample||"")+'</div></div>'+
        '<div class="pronoun-block conjugation"><div class="pronoun-kicker">Спряжение в Presente</div><div class="conjugation-grid">'+
        (word.conjugations||[]).map(form=>'<div class="conjugation-item"><span>'+escapeHtml(form[0])+'</span><strong>'+
        escapeHtml(form[1])+'</strong></div>').join("")+'</div></div>';
    }else if(hasTable){
      const wide=word.table.headers.length>3?" wide":"";
      els.pronounDetails.innerHTML='<div class="pronoun-block conjugation present-conjugation"><div class="pronoun-kicker">'+
        'Вся система на одной карточке</div><div class="present-table-wrap"><table class="present-table'+wide+'"><thead><tr>'+
        word.table.headers.map(h=>'<th scope="col">'+escapeHtml(h)+'</th>').join("")+'</tr></thead><tbody>'+
        word.table.rows.map(row=>'<tr>'+row.map((cell,i)=>i===0?'<th scope="row">'+escapeHtml(cell)+'</th>':
        '<td>'+escapeHtml(cell)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div></div>';
    }else if(isPresent){
      els.pronounDetails.innerHTML='<div class="pronoun-block conjugation present-conjugation"><div class="pronoun-kicker">'+
        'Все формы в Presente</div><div class="present-table-wrap"><table class="present-table"><tbody>'+
        (word.forms||[]).map(form=>'<tr><th scope="row">'+escapeHtml(form[0])+'</th><td>'+escapeHtml(form[1])+
        '</td></tr>').join("")+'</tbody></table></div></div>';
    }else els.pronounDetails.innerHTML="";

    const unit=unitLabel(state);
    els.wordCount.textContent=unit+" "+(state.wordIndex+1)+" из "+words.length;
    els.foodExamples.innerHTML=(word.examples||[]).map(example=>'<div class="example"><strong>'+
      escapeHtml(example[0])+'</strong><span>'+escapeHtml(example[1])+'</span></div>').join("");
    els.studyDots.innerHTML="";
    els.studyPickerPosition.textContent=unit+" "+(state.wordIndex+1)+" из "+words.length;
    els.studyPickerCurrent.textContent=pickerLabel(word);
    $("prevWord").disabled=state.wordIndex===0;
    els.studyDots.hidden=true;
    $("prevWord").textContent=isPronouns&&state.wordIndex>0?"← "+words[state.wordIndex-1].nav:"← Назад";
    const named=isPresent||state.selectedTopic==="verbs";
    els.nextWord.textContent=state.wordIndex===words.length-1?"Начать тренировку →":
      (isPronouns?words[state.wordIndex+1].nav+" →":(named?words[state.wordIndex+1].word+" →":"Далее →"));
    if(named&&state.wordIndex>0) $("prevWord").textContent="← "+words[state.wordIndex-1].word;
    els.progressLabel.textContent=(state.wordIndex+1)+" / "+words.length;
    els.progressBar.style.width=((state.wordIndex+1)/words.length*100)+"%";
  }

  function previous(){
    const state=getState();
    if(state.wordIndex>0){patchState({wordIndex:state.wordIndex-1});render();}
  }
  function next(){
    const state=getState();
    const words=currentWords();
    if(state.wordIndex<words.length-1){patchState({wordIndex:state.wordIndex+1});render();}
    else onStartPractice();
  }
  function selectIndex(index){
    patchState({foodCategory:"all",studySearch:"",wordIndex:Number(index)||0});
    els.wordSearch.value="";
    render();
  }

  return Object.freeze({render,currentWords,renderPicker,openPicker,previous,next,selectIndex,colorArt});
}

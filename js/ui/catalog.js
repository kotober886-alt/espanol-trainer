/**
 * Topic catalog view.
 * DOM rendering only; application state is supplied by the coordinator.
 */
export function createCatalogView(deps){
  const {els,groups,escapeHtml,normalize,getState,patchState,getTopics,getExerciseCount,
    isVocabularyTopic,writeUi,openSessionDialog,showWorkspace,buildQueue}=deps;

  const countLabels={
    verbs:"глаголов",present:"карточек",pronouns:"карточек",questions:"вопросов",
    constructions:"конструкций",gustar:"схем",agreement:"таблиц",prepositions:"слов",
    connectors:"конструкций",past:"карточек",routine:"действий",calendar:"слов",
    practical:"карточек",city:"карточек",home:"карточек",chores:"действий",
    colors:"цветов",foods:"слов",clothes:"слов",activities:"фраз",animals:"слов"
  };

  function topicCount(topic){
    const registered=deps.getRegisteredTopic(topic.id);
    if(!registered) return "0";
    return registered.studyItems.length+" "+(countLabels[topic.id]||"карточек");
  }

  function render(){
    const state=getState();
    const topics=getTopics();
    const query=normalize(state.topicSearch);
    const allowed=topics.filter(function(topic){
      if(state.catalogIntent==="learn"&&(topic.id==="all"||topic.id==="custom")) return false;
      return !query||normalize(topic.title).indexOf(query)>=0;
    });

    els.topicList.innerHTML=groups.map(function(group){
      const rows=group.ids.map(function(id){
        return allowed.find(function(topic){return topic.id===id;});
      }).filter(Boolean);
      if(!rows.length) return "";
      return '<section class="topic-group" data-topic-group="'+escapeHtml(group.title)+'"><h3 class="topic-group-title">'+
        escapeHtml(group.title)+'</h3><div class="topic-list">'+rows.map(function(topic){
          return '<button type="button" class="topic '+(state.selectedTopic===topic.id?'active':'')+'" data-topic="'+
            escapeHtml(topic.id)+'"><span class="topic-icon" aria-hidden="true">'+topic.icon+
            '</span><span class="topic-text">'+escapeHtml(topic.title)+'</span><span class="topic-count">'+
            topicCount(topic)+'</span></button>';
        }).join("")+'</div></section>';
    }).join("");

    if(state.catalogIntent==="practice"&&(!query||normalize("Все темы").indexOf(query)>=0)){
      els.topicList.insertAdjacentHTML("afterbegin",
        '<section class="topic-group"><h3 class="topic-group-title">Смешанная практика</h3><div class="topic-list">'+
        '<button type="button" class="topic '+(state.selectedTopic==="all"?'active':'')+'" data-topic="all">'+
        '<span class="topic-icon">✦</span><span class="topic-text">Все темы</span><span class="topic-count">'+
        getExerciseCount()+'</span></button></div></section>');
    }

    els.topicList.querySelectorAll("[data-topic]").forEach(function(button){
      button.addEventListener("click",function(){
        const selectedTopic=button.dataset.topic;
        const nextUi={...getState().uiSettings};
        if(selectedTopic!=="all") nextUi.lastTopic=selectedTopic;
        patchState({
          selectedTopic,
          index:0,
          wordIndex:0,
          studySearch:"",
          foodCategory:isVocabularyTopic(selectedTopic)?"all":getState().foodCategory,
          uiSettings:nextUi
        });
        els.wordSearch.value="";
        writeUi(nextUi);

        if(getState().catalogIntent==="practice"||selectedTopic==="custom"){
          openSessionDialog(selectedTopic);
        }else{
          patchState({selectedMode:"all",foodPhase:"study",sessionActive:false});
          showWorkspace();
          buildQueue(false);
        }
      });
    });
  }

  return Object.freeze({render});
}

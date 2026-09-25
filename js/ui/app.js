import { createCatalogView } from "./catalog.js";
import { createStudyCardView } from "./study-card.js?v=20260923-backpack-lock-silhouette49";
import { createTrainerView } from "./trainer-view.js?v=20260923-backpack-lock-silhouette49";
import { createResultsView } from "./results-view.js?v=20260925-results-layout-fix1";
import { createNavigation } from "./navigation.js?v=20260923-backpack-lock-silhouette49";
import { createPracticeView } from "./practice-view.js?v=20260925-photoflash-banner-scope";
import { IMPOSTER_TASKS } from "../../data/imposter-tasks.js?v=20260923-imposter31";
import { createBackpackManager } from "../backpack-manager.js?v=20260924-backpack-detail51";
import { bindPawsInteraction } from "./paws-interaction.js?v=20260924-backpack-detail51";
import { bindCatSpeechBubble } from "./cat-speech.js?v=20260923-cat-phrases44";
import { load, save } from "../core/storage.js";
  import {
    getStats,
    getExerciseStats,
    getStreak,
    getLastResult,
    getTopicStats,
    getMistakes,
    recordAnswer,
    recordSkip,
    resolveMistake,
    recordSessionResult,
    getMascotState,
    getProgressReaction
  } from "../core/progress.js?v=20260923-mistake-workout38";
  import {
    checkAnswer as checkAnswerCore,
    normalizeExact,
    normalizeNear,
    splitAnswerVariants
  } from "../core/answers.js";
  import {
    buildExercisePool,
    buildQueue as buildSessionQueue,
    createSession
  } from "../core/session.js?v=20260923-mistake-workout38";
  import {
    registerTopic,
    getTopic,
    getTopics,
    getAllExercises,
    hasTopic
  } from "../core/topic-registry.js";
  import { verbsTopic } from "../topics/verbs.js";
  import { presentTopic } from "../topics/present.js";
  import { pronounsTopic } from "../topics/pronouns.js";
  import { questionsTopic } from "../topics/questions.js";
  import { constructionsTopic } from "../topics/constructions.js";
  import { gustarTopic } from "../topics/gustar.js";
  import { agreementTopic } from "../topics/agreement.js";
  import { prepositionsTopic } from "../topics/prepositions.js";
  import { connectorsTopic } from "../topics/connectors.js";
  import { pastTopic } from "../topics/past.js";
  import { routineTopic } from "../topics/routine.js?v=20260923-highres-stories28";
  import { calendarTopic } from "../topics/calendar.js";
  import { practicalTopic } from "../topics/practical.js?v=20260923-highres-stories28";
  import { cityTopic } from "../topics/city.js?v=20260923-highres-stories28";
  import { homeTopic } from "../topics/home.js";
  import { choresTopic } from "../topics/chores.js";
  import { colorsTopic } from "../topics/colors.js";
  import { foodsTopic } from "../topics/foods.js?v=20260923-highres-stories28";
  import { clothesTopic } from "../topics/clothes.js";
  import { activitiesTopic } from "../topics/activities.js";
  import { animalsTopic } from "../topics/animals.js";
  import { mixedTopic } from "../topics/mixed.js";


    const backpackManager = createBackpackManager();
    window.BackpackManager = backpackManager;

    const TOPICS = [
      { id:"all", title:"Все темы", icon:"✦" },
      { id:"custom", title:"Свои задания", icon:"＋" }
    ];

    const DAILY_LIFE_TOPIC_IDS = ["routine","calendar","practical","city","home","chores","colors","foods","clothes","activities","animals"];

    const TOPIC_GROUPS = [
      {title:"Основа",ids:["verbs","present","pronouns","agreement"]},
      {title:"Общение",ids:["questions","constructions","connectors","gustar"]},
      {title:"Повседневная жизнь",ids:DAILY_LIFE_TOPIC_IDS},
      {title:"Следующий уровень",ids:["past","prepositions","custom"]}
    ];
    
    

    

    

    


    
    

   function pictureScene(kind) {
  return '<img class="picture-raster" src="' + pictureAsset(kind) + '" alt="Иллюстрация">';
}
   function runtimeAssetUrl(url, fresh) {
  const value=String(url || "");
  if(!value || value.indexOf("assets/")===-1) return value;
  const version=fresh ? String(Date.now()) : (window.__ASSET_CACHE_VERSION__ || (window.__ASSET_CACHE_VERSION__=String(Date.now())));
  const hashIndex=value.indexOf("#");
  const hash=hashIndex>=0 ? value.slice(hashIndex) : "";
  const withoutHash=hashIndex>=0 ? value.slice(0,hashIndex) : value;
  const queryIndex=withoutHash.indexOf("?");
  const base=queryIndex>=0 ? withoutHash.slice(0,queryIndex) : withoutHash;
  const query=queryIndex>=0 ? withoutHash.slice(queryIndex+1) : "";
  const params=new URLSearchParams(query);
  params.set("v",version);
  return base+"?"+params.toString()+hash;
}

   function withVersion(url, fresh) {
  return runtimeAssetUrl(url, !!fresh);
}

   function pictureAsset(scene, forceReload) {
      const rawScene=String(scene || "");
      if(rawScene.indexOf("animal-")===0 && window.TopicRegistryFacade){
        const animals=window.TopicRegistryFacade.getTopic("animals");
        const animalId=rawScene.slice("animal-".length);
        const word=animals && animals.studyItems.find(function(item){return item.id===animalId;});
        if(word && word.image) return runtimeAssetUrl(word.image,!!forceReload);
      }
      const safeScene=rawScene.trim().replace(/[^a-z0-9_-]/gi,"");
      if(!safeScene) return "";
      return runtimeAssetUrl("assets/picture-labels/"+safeScene+".webp",!!forceReload);
    }

    function bindPictureImageFallback(img,scene){
      if(!img) return;
      const errorBox=img.parentElement ? img.parentElement.querySelector(".picture-image-error") : null;
      let retried=false;
      function showFallback(){
        img.classList.add("is-broken");
        if(errorBox){
          errorBox.hidden=false;
          errorBox.textContent="Не удалось загрузить иллюстрацию. Остальная часть задания доступна.";
        }
      }
      function handleError(){
        if(!retried){
          retried=true;
          img.src=pictureAsset(scene,true);
          return;
        }
        showFallback();
      }
      img.addEventListener("error",handleError,{passive:true});
      img.addEventListener("load",function(){
        img.classList.remove("is-broken");
        if(errorBox) errorBox.hidden=true;
      },{passive:true});
      if(img.complete && !img.naturalWidth) handleError();
    }

    // Curated review of the recently expanded vocabulary.
    // Pairs are intentionally non-overlapping inside each task: one prompt -> one token.

    

    

    

    

    

    const STORAGE = {
  stats: "progress.stats",
  custom: "custom",
  streak: "progress.streak",
  audio: "espanol_audio_v1",
  ui: "espanol_ui_v2"
};

let stats = {};
let custom = [];
let streak = 0;

const AUDIO_RATES=[1,0.8,0.6];

function normalizeAudioRate(value){
  const numeric=Number(value);
  if(!Number.isFinite(numeric)) return 1;
  return AUDIO_RATES.reduce(function(best,rate){
    return Math.abs(rate-numeric)<Math.abs(best-numeric)?rate:best;
  },AUDIO_RATES[0]);
}

function audioRateLabel(rate){
  return normalizeAudioRate(rate).toFixed(1)+"×";
}

let audioSettings = read(STORAGE.audio, { voiceURI: "", voiceLocale: "auto", rate: 1 });
let feedbackAudioContext = null;
let mascotReactionTimer = 0;

function safeVibrate(pattern){
  try{
    if(typeof navigator==="undefined" || !("vibrate" in navigator) || typeof navigator.vibrate!=="function"){
      return false;
    }
    return navigator.vibrate(pattern);
  }catch(error){
    return false;
  }
}

function feedbackSoundsEnabled(){
  return audioSettings.feedbackSounds !== false &&
    audioSettings.soundEnabled !== false &&
    audioSettings.muted !== true;
}

function playFeedbackSound(type){
  if(!feedbackSoundsEnabled()) return;
  const AudioContextCtor=window.AudioContext || window.webkitAudioContext;
  if(!AudioContextCtor) return;

  try{
    if(!feedbackAudioContext) feedbackAudioContext=new AudioContextCtor();
    const context=feedbackAudioContext;
    if(context.state==="suspended") context.resume().catch(function(){});

    const now=context.currentTime;
    const oscillator=context.createOscillator();
    const gain=context.createGain();

    oscillator.type=type==="confused" ? "triangle" : "sine";
    const startFrequency=type==="confused" ? 245 : (type==="triumph" ? 660 : 590);
    const endFrequency=type==="confused" ? 185 : (type==="triumph" ? 900 : 720);

    oscillator.frequency.setValueAtTime(startFrequency,now);
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency,now+.075);

    gain.gain.setValueAtTime(.0001,now);
    gain.gain.exponentialRampToValueAtTime(type==="triumph" ? .045 : .032,now+.008);
    gain.gain.exponentialRampToValueAtTime(.0001,now+.095);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now+.1);
  }catch(error){}
}

function showMascotReaction(reaction){
  if(!reaction || !reaction.type) return;
  const slot=document.querySelector(".mark.mascot-slot");
  if(!slot) return;

  if(window.HeaderMascot) window.HeaderMascot.react(reaction.type,900);
  window.clearTimeout(mascotReactionTimer);

  slot.classList.remove("mascot-react-success","mascot-react-triumph","mascot-react-confused");
  void slot.offsetWidth;
  slot.classList.add("mascot-react-"+reaction.type);

  playFeedbackSound(reaction.type);

  mascotReactionTimer=window.setTimeout(function(){
    slot.classList.remove("mascot-react-success","mascot-react-triumph","mascot-react-confused");
  },900);
}

function queueMascotReaction(result){
  if(!result || !result.recorded || !result.reaction) return;
  window.setTimeout(function(){showMascotReaction(result.reaction);},170);
}

function recordAnswerWithReaction(payload){
  const result=recordAnswer(payload);
  queueMascotReaction(result);
  return result;
}

function recordSkipWithReaction(payload){
  const result=recordSkip(payload);
  queueMascotReaction(result);
  return result;
}
let uiSettings = read(STORAGE.ui, { lastTopic: "verbs", sessionSize: 10, sessionFormats: [] });
    if(!audioSettings || typeof audioSettings!=="object") audioSettings={voiceURI:"",voiceLocale:"auto",rate:1};
    audioSettings.rate=normalizeAudioRate(audioSettings.rate);
    if(!audioSettings.voiceLocale) audioSettings.voiceLocale="auto";
    let spanishVoices = [];
    const PRACTICE_FORMAT_IDS=["audio","pictures","phrase","fill","choice"];
    let selectedTopic = uiSettings.lastTopic || "verbs";
    let selectedMode = "all";
    let selectedFormats = new Set(
      Array.isArray(uiSettings.sessionFormats)
        ? uiSettings.sessionFormats.filter(function(value){return PRACTICE_FORMAT_IDS.indexOf(value)>=0;})
        : []
    );
    let queue = [];
    let index = 0;
    let checkedCurrent = false;
    let wordIndex = 0;
    let foodPhase = "study";
    let foodCategory = "all";
    let catalogIntent = "learn";
    let topicSearch = "";
    let studySearch = "";
    let studyPickerQuery = "";
    let pendingSessionTopic = selectedTopic;
    let sessionSize = Number(uiSettings.sessionSize) || 10;
    let sessionActive = false;
    let sessionController = null;
    let sessionResults = {answered:0,correct:0,wrong:0,wrongIds:[],mistakes:[]};
    let sessionRound = "main";
    let primarySessionResult = null;
    let catalogView=null;
    let studyCardView=null;
    let trainerView=null;
    let resultsView=null;
    let navigationView=null;
    let practiceView=null;
    let mistakeExerciseSnapshot=[];

    const $ = (id) => document.getElementById(id);
    const els = {
      topicList:$("topicList"), topicName:$("topicName"), progressBar:$("progressBar"), progressLabel:$("progressLabel"),
      questionText:$("questionText"), skillLabel:$("skillLabel"), questionNumber:$("questionNumber"), answerInput:$("answerInput"),
      answerLabel:$("answerLabel"), audioActions:$("audioActions"), audioPrompt:$("audioPrompt"), slowAudioPrompt:$("slowAudioPrompt"),
      audioSettings:$("audioSettings"), voiceLocaleSelect:$("voiceLocaleSelect"), voiceSelect:$("voiceSelect"), voicePreview:$("voicePreview"), voiceStatus:$("voiceStatus"),
      voiceDebug:$("voiceDebug"), voiceDebugCounts:$("voiceDebugCounts"), voiceDebugLog:$("voiceDebugLog"), voiceRefresh:$("voiceRefresh"),
      studyListen:$("studyListen"), studyAudioSpeed:$("studyAudioSpeed"), choiceGrid:$("choiceGrid"), orderWidget:$("orderWidget"),
      orderBuilt:$("orderBuilt"), orderBank:$("orderBank"), formGrid:$("formGrid"),
      matchWidget:$("matchWidget"), matchList:$("matchList"), matchBank:$("matchBank"),
      clozeWidget:$("clozeWidget"), clozePassage:$("clozePassage"), clozeBank:$("clozeBank"),
      sortWidget:$("sortWidget"), sortColumns:$("sortColumns"), sortBank:$("sortBank"),
      pictureWidget:$("pictureWidget"), pictureHelp:$("pictureHelp"), pictureStage:$("pictureStage"), imposterWidget:$("imposterWidget"),
      feedback:$("feedback"), answerBox:$("answerBox"), answerText:$("answerText"), explanation:$("explanation"),
      exerciseView:$("exerciseView"), emptyView:$("emptyView"), emptyTitle:$("emptyTitle"), emptyText:$("emptyText"),
      doneStat:$("doneStat"), rightStat:$("rightStat"), streakStat:$("streakStat"), dialog:$("addDialog"),
      customTopic:$("customTopic"), customList:$("customList"), customListWrap:$("customListWrap"), toast:$("toast"),
      studyView:$("studyView"), studyCard:$("studyCard"), foodArt:$("foodArt"), foodWord:$("foodWord"), foodGender:$("foodGender"),
      foodTranslation:$("foodTranslation"), foodExamples:$("foodExamples"), wordCount:$("wordCount"),
      foodFilters:$("foodFilters"), foodCategoryLabel:$("foodCategoryLabel"), studyTitle:$("studyTitle"), studyIntroText:$("studyIntroText"),
      studyDots:$("studyDots"), nextWord:$("nextWord"), backToWordsBtn:$("backToWordsBtn"),
      pronounTabs:$("pronounTabs"), pronounDetails:$("pronounDetails"), examplesTitle:$("examplesTitle"),
      homeView:$("homeView"), mistakesView:$("mistakesView"), mistakesEmpty:$("mistakesEmpty"),
      mistakesContent:$("mistakesContent"), mistakesCount:$("mistakesCount"), mistakesList:$("mistakesList"),
      mistakesStartBtn:$("mistakesStartBtn"), mistakesWordsBtn:$("mistakesWordsBtn"),
      trainerLayout:$("trainerLayout"), topicCatalog:$("topicCatalog"), topicSearch:$("topicSearch"),
      catalogTitle:$("catalogTitle"), catalogText:$("catalogText"), continueTopic:$("continueTopic"),
      homeDoneStat:$("homeDoneStat"), homeAccuracyStat:$("homeAccuracyStat"), homeStreakStat:$("homeStreakStat"),
      sessionDialog:$("sessionDialog"), sessionTopicLabel:$("sessionTopicLabel"), sessionAvailableCount:$("sessionAvailableCount"), sessionResult:$("sessionResult"),
      resultTitle:$("resultTitle"), resultTotal:$("resultTotal"), resultCorrect:$("resultCorrect"), resultWrong:$("resultWrong"), resultMessage:$("resultMessage"),
      resultIcon:$("resultIcon"), resultMascot:$("resultMascot"),
      learnTab:$("learnTab"), practiceTab:$("practiceTab"), topicTabs:$("topicTabs"), moreDialog:$("moreDialog"),
      wordSearch:$("wordSearch"), studySearchEmpty:$("studySearchEmpty"), studyNav:$("studyNav"),
      studyPickerBtn:$("studyPickerBtn"), studyPickerPosition:$("studyPickerPosition"), studyPickerCurrent:$("studyPickerCurrent"),
      studyPickerDialog:$("studyPickerDialog"), studyPickerSearch:$("studyPickerSearch"), studyPickerList:$("studyPickerList"),
      studyPickerEmpty:$("studyPickerEmpty"), studyPickerTopic:$("studyPickerTopic")
    };

    function read(key,fallback){ try { const value=localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch(e){ return fallback; } }
    function write(key,value){ localStorage.setItem(key,JSON.stringify(value)); }
/* TEMP STEP-3 PROGRESS BRIDGE */
window.LegacyProgressAdapter = {
  originalRead: read,
  originalWrite: write,
  keys: {
    stats: STORAGE.stats,
    custom: STORAGE.custom,
    streak: STORAGE.streak
  },
  hydrate: function (state) {
    stats = state.stats;
    custom = state.custom;
    streak = state.streak;
  },
  installIO: function (nextRead, nextWrite) {
    read = nextRead;
    write = nextWrite;
  }
};
    const RESULT_MASCOT_PARTS = [
      "assets/picture-labels/result-mascot-approve/part-01.txt",
      "assets/picture-labels/result-mascot-approve/part-02.txt",
      "assets/picture-labels/result-mascot-approve/part-03.txt",
      "assets/picture-labels/result-mascot-approve/part-04.txt",
      "assets/picture-labels/result-mascot-approve/part-05.txt",
      "assets/picture-labels/result-mascot-approve/part-06.txt"
    ];
    let resultMascotObjectUrl="";
    async function ensureResultMascot(){
      if(resultMascotObjectUrl){
        els.resultMascot.src=resultMascotObjectUrl;
        return resultMascotObjectUrl;
      }
      const chunks=await Promise.all(RESULT_MASCOT_PARTS.map(function(path){
        return fetch(path+"?v=20260920-result-approve1").then(function(response){
          if(!response.ok) throw new Error("Mascot asset part failed: "+path);
          return response.text();
        });
      }));
      const binary=atob(chunks.join("").replace(/\s+/g,""));
      const bytes=new Uint8Array(binary.length);
      for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
      resultMascotObjectUrl=URL.createObjectURL(new Blob([bytes],{type:"image/webp"}));
      els.resultMascot.src=resultMascotObjectUrl;
      return resultMascotObjectUrl;
    }

    const STRICT_RESULT_MASCOT_PARTS = [
      "assets/picture-labels/result-mascot-strict-part-01.txt",
      "assets/picture-labels/result-mascot-strict-part-02.txt",
      "assets/picture-labels/result-mascot-strict-part-03.txt",
      "assets/picture-labels/result-mascot-strict-part-04.txt",
      "assets/picture-labels/result-mascot-strict-part-05.txt",
      "assets/picture-labels/result-mascot-strict-part-06.txt",
      "assets/picture-labels/result-mascot-strict-part-07.txt",
      "assets/picture-labels/result-mascot-strict-part-08.txt"
    ];
    let strictResultMascotObjectUrl="";
    async function ensureStrictResultMascot(){
      if(strictResultMascotObjectUrl){
        els.resultMascot.src=strictResultMascotObjectUrl;
        return strictResultMascotObjectUrl;
      }
      const chunks=await Promise.all(STRICT_RESULT_MASCOT_PARTS.map(function(path){
        return fetch(path+"?v=20260920-result-strict1").then(function(response){
          if(!response.ok) throw new Error("Strict mascot asset part failed: "+path);
          return response.text();
        });
      }));
      const binary=atob(chunks.join("").replace(/\s+/g,""));
      const bytes=new Uint8Array(binary.length);
      for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
      strictResultMascotObjectUrl=URL.createObjectURL(new Blob([bytes],{type:"image/webp"}));
      els.resultMascot.src=strictResultMascotObjectUrl;
      return strictResultMascotObjectUrl;
    }

    const LOW_RESULT_MASCOT_DATA = "data:image/webp;base64,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";
    function ensureLowResultMascot(){
      els.resultMascot.src=LOW_RESULT_MASCOT_DATA;
      return Promise.resolve(LOW_RESULT_MASCOT_DATA);
    }

    const CUSTOM_AUTHORING_ACCESS = {
      queryParam:"key",
      storageKey:"espanol_custom_authoring_access_v1",
      tokenSha256:"a7421bc2fd29f4cea95dc68a3c3297753ea8940ef2466386f14f66542b46991a"
    };
    function setCustomAuthoringVisible(visible){
      ["addBtn","moreAddBtn","emptyAddBtn"].forEach(function(id){
        const node=document.getElementById(id);
        if(node) node.hidden=!visible;
      });
    }
    async function initCustomAuthoringAccess(){
      let hasAccess=false;
      try { hasAccess=localStorage.getItem(CUSTOM_AUTHORING_ACCESS.storageKey)==="1"; } catch(e) {}
      if(hasAccess) setCustomAuthoringVisible(true);

      const url=new URL(window.location.href);
      const token=url.searchParams.get(CUSTOM_AUTHORING_ACCESS.queryParam);
      if(!token) return;

      try {
        const bytes=new TextEncoder().encode(token);
        const digest=await crypto.subtle.digest("SHA-256",bytes);
        const hash=Array.from(new Uint8Array(digest)).map(function(byte){return byte.toString(16).padStart(2,"0");}).join("");
        if(hash===CUSTOM_AUTHORING_ACCESS.tokenSha256){
          try { localStorage.setItem(CUSTOM_AUTHORING_ACCESS.storageKey,"1"); } catch(e) {}
          setCustomAuthoringVisible(true);
        }
      } catch(e) {
        // Keep authoring controls hidden if token verification is unavailable or fails.
      } finally {
        url.searchParams.delete(CUSTOM_AUTHORING_ACCESS.queryParam);
        const cleanUrl=url.pathname+(url.searchParams.toString()?"?"+url.searchParams.toString():"")+url.hash;
        window.history.replaceState({},document.title,cleanUrl);
      }
    }
    initCustomAuthoringAccess();
    function allExercises(){
      const base=window.TopicRegistryFacade ? window.TopicRegistryFacade.getAllExercises() : [];
      return base.concat(IMPOSTER_TASKS,custom);
    }
    function blitzSource(){
      const topics=window.TopicRegistryFacade ? window.TopicRegistryFacade.getTopics() : [];
      const studyItems=[];
      topics.forEach(function(topic){
        if(!topic || topic.id==="__mixed" || !Array.isArray(topic.studyItems)) return;
        topic.studyItems.forEach(function(item){
          studyItems.push(Object.assign({topicId:topic.id},item));
        });
      });
      return {exercises:allExercises(),studyItems:studyItems};
    }
    function closeBlitz(){
      if(practiceView) practiceView.closeGame();
    }
    function isVocabularyTopic(){ return selectedTopic!=="all" && selectedTopic!=="custom"; }
    function vocabularyWords(){
      const topic=window.TopicRegistryFacade ? window.TopicRegistryFacade.getTopic(selectedTopic) : null;
      return topic ? topic.studyItems : [];
    }
    function studyVocabularyWords(){ return vocabularyWords(); }
    function categoriesForTopic(topicId){
      const topic=window.TopicRegistryFacade ? window.TopicRegistryFacade.getTopic(topicId) : null;
      if(!topic || !topic.studyItems.length) return [];
      const seen=new Map();
      topic.studyItems.forEach(function(item){
        const categoryId=item.cat || item.category;
        if(!categoryId || seen.has(categoryId)) return;
        const meta=item.meta || {};
        seen.set(categoryId,{
          id:categoryId,
          title:meta.categoryTitle || categoryId,
          order:Number.isFinite(Number(meta.categoryOrder)) ? Number(meta.categoryOrder) : 999
        });
      });
      const allTitle=((topic.studyItems[0] || {}).meta || {}).allCategoryTitle || "Все";
      return [{id:"all",title:allTitle}].concat(
        Array.from(seen.values())
          .sort(function(a,b){return a.order-b.order;})
          .map(function(category){return {id:category.id,title:category.title};})
      );
    }
    function vocabularyCategories(){ return categoriesForTopic(selectedTopic); }
    function topicById(id){ return TOPICS.find(function(t){return t.id===id;}) || TOPICS[0]; }
    function normalize(value){
      return String(value == null ? "" : value)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .replace(/['’‘ʼ`´]+/g,"")
        .replace(/[\p{P}\p{S}]+/gu," ")
        .replace(/\s+/g," ")
        .trim();
    }
    function fold(value){ return normalize(value); }

    function normalizePictureAnswer(value,transform){
      const articles=["el","la","los","las","un","una","unos","unas"];
      return transform(value).split(" ").filter(function(word){return word!=="y" && word!=="e" && articles.indexOf(word)<0;}).sort().join(" ");
    }
    function pictureAnswersMatch(item,transform){
      const inputs=Array.from(els.pictureStage.querySelectorAll("[data-picture-input]"));
      return inputs.length===(item.pictureLabels || []).length && inputs.every(function(input,index){
        const value=normalizePictureAnswer(input.value,transform);
        return value && (item.pictureLabels[index].answers || []).some(function(answer){return value===normalizePictureAnswer(answer,transform);});
      });
    }

    function acceptedAnswerVariants(answers){
      return (answers || []).reduce(function(result,answer){
        const raw=String(answer == null ? "" : answer).trim();
        if(!raw) return result;
        const parts=raw.split(/[,/]+/).map(function(part){return part.trim();}).filter(Boolean);
        if(parts.length>1) result.push.apply(result,parts);
        else result.push(raw);
        return result;
      },[]);
    }

    function matchesAccepted(value,answers,transform){
      const input=transform(value);
      if(!input) return false;
      const expected=Array.from(new Set(acceptedAnswerVariants(answers).map(function(answer){return transform(answer);}).filter(Boolean)));
      if(expected.indexOf(input)>=0) return true;

      const inputWords=input.split(" ");
      const variants=expected.map(function(answer){return {key:answer,words:answer.split(" ")};});
      const memo=new Map();

      function walk(position,used){
        if(position===inputWords.length) return used.size>1;
        const state=position+"|"+Array.from(used).sort().join(",");
        if(memo.has(state)) return memo.get(state);
        for(let i=0;i<variants.length;i++){
          const variant=variants[i];
          if(used.has(variant.key) || position+variant.words.length>inputWords.length) continue;
          let fits=true;
          for(let j=0;j<variant.words.length;j++){
            if(inputWords[position+j]!==variant.words[j]){fits=false;break;}
          }
          if(!fits) continue;
          const nextUsed=new Set(used);
          nextUsed.add(variant.key);
          if(walk(position+variant.words.length,nextUsed)){
            memo.set(state,true);
            return true;
          }
        }
        memo.set(state,false);
        return false;
      }

      return walk(0,new Set());
    }
    function escapeHtml(value){
      return String(value).replace(/[&<>"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch];});
    }
    function shuffle(items){
      const copy=items.slice();
      for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const temp=copy[i];copy[i]=copy[j];copy[j]=temp;}
      return copy;
    }
    function exerciseConcept(item){
      let id=String(item.originalId || item.reviewOf || item.id || "").replace(/__review$/,"");
      id=id.replace(/^(choice|audio)_/,"").replace(/^study_/,"");
      const aliases={foods:"food",clothes:"clothes",colors:"color",activities:"activity",pronouns:"pronoun"};
      const prefix=(aliases[item.topic] || item.topic)+"_";
      if(id.indexOf(item.topic+"_")===0) id=id.slice(item.topic.length+1);
      if(id.indexOf(prefix)===0) id=id.slice(prefix.length);
      id=id.replace(/_(es|ru|ctx|poss|verb_\d+)$/," ");
      return item.topic+":"+id.trim();
    }
    function exerciseDirection(item){
      const q=String(item.q || "").toLowerCase();
      if(q.indexOf("на русский")>=0 || q.indexOf("узнай")>=0) return "to-ru";
      if(q.indexOf("на испанский")>=0 || q.indexOf("вспомни")>=0) return "to-es";
      return item.type || "text";
    }
    function diverseShuffle(items,limit){
      const pool=shuffle(items);
      const result=[];
      const target=Math.min(Number(limit) || pool.length,pool.length);
      while(pool.length && result.length<target){
        const recent=result.slice(-9);
        const recentConcepts=recent.map(exerciseConcept);
        const recentQuestions=recent.slice(-12).map(function(x){return normalize(x.q);});
        const recentTypes=recent.slice(-2).map(function(x){return x.type || "text";});
        const recentTopics=recent.slice(-2).map(function(x){return x.topic;});
        const previous=result[result.length-1];
        let bestScore=-Infinity;
        let candidates=[];
        pool.forEach(function(item,i){
          let score=Math.random()*8;
          const concept=exerciseConcept(item);
          const conceptDistance=recentConcepts.lastIndexOf(concept);
          if(conceptDistance<0) score+=130; else score+=conceptDistance*12;
          if(recentQuestions.indexOf(normalize(item.q))<0) score+=80; else score-=180;
          if(recentTypes.indexOf(item.type || "text")<0) score+=24;
          if(selectedTopic==="all" && recentTopics.indexOf(item.topic)<0) score+=22;
          if(!previous || exerciseDirection(previous)!==exerciseDirection(item)) score+=18;
          if(score>bestScore+0.01){bestScore=score;candidates=[i];}
          else if(Math.abs(score-bestScore)<0.01) candidates.push(i);
        });
        const chosen=candidates[Math.floor(Math.random()*candidates.length)];
        result.push(pool.splice(chosen,1)[0]);
      }
      return result;
    }
    function selectedFormatList(){
      return Array.from(selectedFormats);
    }

    function exerciseMatchesPracticeFormat(item,format){
      const type=String((item&&item.type)||"");
      if(format==="audio") return type==="audio"||type==="audio_story_quiz"||Boolean(item&&item.audio)||Boolean(item&&item.audioText);
      if(format==="pictures") return type==="picture-label"||type==="color-prompt"||Boolean(item&&item.pictureScene)||Boolean(item&&Array.isArray(item.pictureLabels)&&item.pictureLabels.length);
      if(format==="phrase") return type==="order";
      if(format==="fill") return type==="fill-choice"||type==="cloze"||type==="cloze-passage"||type==="ser-estar-hay";
      if(format==="choice") return type==="choice"||type==="context-choice"||type==="spot_the_imposter";
      return false;
    }

    function filteredExercises(){
      if(window.TrainerSession){
        return window.TrainerSession.buildExercisePool({
          topicId:selectedTopic,
          mode:selectedMode,
          formats:selectedMode==="all"?selectedFormatList():[],
          categoryId:isVocabularyTopic() ? foodCategory : "all",
          customExercises:custom,
          legacyExercises:allExercises(),
          stats:stats
        });
      }

      let items=allExercises().filter(function(x){ return selectedTopic==="all" ? true : x.topic===selectedTopic; });
      if(isVocabularyTopic() && foodCategory!=="all") items=items.filter(function(x){return x.foodCat===foodCategory;});
      if(selectedMode==="mistakes"){
        items=items.filter(function(x){ const row=stats[x.id] || stats[x.originalId]; return row && row.wrong>0 && row.activeError!==false; });
      } else if(selectedMode==="all"&&selectedFormats.size){
        items=items.filter(function(item){
          return selectedFormatList().some(function(format){return exerciseMatchesPracticeFormat(item,format);});
        });
      }
      return items;
    }

    function syncSessionProjection(){
      if(!sessionController) return;
      const state=sessionController.getState();
      const summary=state.summary;
      queue=state.queue;
      index=state.index;
      sessionResults={
        answered:summary.answered,
        correct:summary.correct,
        wrong:summary.wrong,
        wrongIds:summary.wrongIds.slice(),
        mistakes:Array.isArray(summary.mistakes)?summary.mistakes.slice():[]
      };
    }

    function buildQueue(keepIndex){
      if(sessionActive && sessionController){
        syncSessionProjection();
        render();
        return;
      }

      const items=filteredExercises();

      if(keepIndex){
        queue=items;
      } else if(window.TrainerSession){
        queue=window.TrainerSession.buildQueue(items,{
          size:items.length,
          topicId:selectedTopic
        });
      } else {
        queue=diverseShuffle(items,items.length);
      }

      if(!keepIndex || index>=queue.length) index=0;
      render();
    }


    function renderTopics(){ return catalogView.render(); }
    function renderStats(){
      const values=Object.values(stats);
      const done=values.reduce(function(sum,x){return sum+(x.tries||0);},0);
      const right=values.reduce(function(sum,x){return sum+(x.correct||0);},0);
      els.doneStat.textContent=done;
      els.rightStat.textContent=right;
      els.streakStat.textContent=streak;
      const homeAccuracy=done ? Math.round(right/done*100) : 0;
      els.homeDoneStat.textContent=String(done);
      els.homeAccuracyStat.textContent=homeAccuracy+"%";
      els.homeStreakStat.textContent=streak+" дн.";
      const last=topicById(uiSettings.lastTopic || "verbs");
      els.continueTopic.textContent="Вернуться к: "+last.title;
      const continueCard=$("continueBtn");
      if(continueCard) continueCard.setAttribute("aria-label","Продолжить тему: "+last.title);
      if(navigationView) navigationView.setBadge("mistakes",collectMistakeExercises().length);
    }
    function setNav(active){
      return navigationView ? navigationView.setActive(active) : active;
    }

    function currentSectionNav(){
      if(els.mistakesView && !els.mistakesView.hidden) return "mistakes";
      if(!els.homeView.hidden) return "home";
      if(els.trainerLayout.classList.contains("catalog-view")){
        return catalogIntent==="learn" ? "words" : "practice";
      }
      return foodPhase==="study" ? "words" : (selectedMode==="mistakes" ? "mistakes" : "practice");
    }
    function resetHeaderMascot(){
      if(window.HeaderMascot) window.HeaderMascot.resetToIdle();
    }
    function setHeaderMascotMood(mood){
      if(window.HeaderMascot) window.HeaderMascot.setMood(mood);
    }

    function showHome(){
      closeBlitz();
      if(practiceView) practiceView.hide();
      resetHeaderMascot();
      sessionActive=false;
      if(sessionController) sessionController.stop();
      sessionController=null;
      if(window.DynamicFavicon) window.DynamicFavicon.setTime();
      els.homeView.hidden=false;
      els.mistakesView.hidden=true;
      els.trainerLayout.hidden=true;
      els.sessionResult.hidden=true;
      setNav("home");
      renderStats();
      window.scrollTo({top:0,behavior:"smooth"});
    }
    function showCatalog(intent){
      closeBlitz();
      resetHeaderMascot();
      if(window.DynamicFavicon) window.DynamicFavicon.setTime();
      catalogIntent=intent || "learn";
      topicSearch=""; els.topicSearch.value="";
      els.homeView.hidden=true;
      els.mistakesView.hidden=true;
      els.trainerLayout.hidden=false;
      els.trainerLayout.classList.add("catalog-view");
      els.catalogTitle.textContent=catalogIntent==="learn" ? "Что будем учить?" : "Что будем тренировать?";
      els.catalogText.textContent=catalogIntent==="learn"
        ? "Выбери тему — сначала откроются карточки со словами, переводом и примерами."
        : "Выбери тему, длину занятия и при желании тип заданий.";
      setNav(catalogIntent==="learn" ? "learn" : "practice");
      renderTopics(); renderStats();
      if(practiceView){
        if(catalogIntent==="practice") practiceView.show();
        else practiceView.hide();
      }
      window.scrollTo({top:0,behavior:"smooth"});
    }
    function showWorkspace(){
      closeBlitz();
      if(practiceView) practiceView.hide();
      if(!sessionActive) resetHeaderMascot();
      if(window.DynamicFavicon){
        if(sessionActive) window.DynamicFavicon.setTraining(streak);
        else window.DynamicFavicon.setTime();
      }
      els.homeView.hidden=true;
      els.mistakesView.hidden=true;
      els.trainerLayout.hidden=false;
      els.trainerLayout.classList.remove("catalog-view");
      els.sessionResult.hidden=true;
      setNav(foodPhase==="study" ? "learn" : (selectedMode==="mistakes" ? "mistakes" : "practice"));
      window.scrollTo({top:0,behavior:"smooth"});
    }
    function mistakeExerciseKey(item){
      return String((item && (item.originalId || item.reviewOf || item.id)) || "");
    }

    function collectMistakeExercises(){
      const exercises=allExercises();
      const byId=new Map();
      exercises.forEach(function(item){
        [item.id,item.originalId].filter(Boolean).forEach(function(id){
          if(!byId.has(String(id))) byId.set(String(id),item);
        });
      });

      const rows=getMistakes({exercises});
      const combined=[];
      const seen=new Set();

      rows.forEach(function(row){
        const item=byId.get(String(row.id));
        if(!item) return;
        const key=mistakeExerciseKey(item);
        if(!key || seen.has(key)) return;
        seen.add(key);
        combined.push(item);
      });

      (sessionResults.mistakes || []).forEach(function(item){
        const key=mistakeExerciseKey(item);
        if(!key || seen.has(key)) return;
        seen.add(key);
        combined.push(item);
      });

      return combined;
    }

    function mistakeStudyItem(item){
      const topic=registeredTopic(item.topic);
      if(!topic || !Array.isArray(topic.studyItems)) return null;

      const concept=exerciseConcept(item).split(":").slice(1).join(":");
      let study=topic.studyItems.find(function(word){return String(word.id)===concept;});
      if(study) return study;

      const answers=(item.a || []).map(normalize);
      study=topic.studyItems.find(function(word){
        const values=[word.word,word.base].concat(word.answers || []).filter(Boolean).map(normalize);
        return values.some(function(value){return answers.indexOf(value)>=0;});
      });
      return study || null;
    }

    function cleanPromptTail(value){
      return String(value || "")
        .replace(/^[^:]+:\s*/,"")
        .replace(/[.?！!]+$/,"")
        .trim();
    }

    function mistakeDisplay(item){
      const study=mistakeStudyItem(item);
      if(study){
        return {
          es:String(study.word || study.base || (study.answers || [])[0] || item.q || ""),
          ru:String(study.tr || (study.ru || [])[0] || item.skill || "")
        };
      }

      const q=String(item.q || "");
      const answer=String((item.a || [])[0] || item.displayAnswer || "");
      if(/на испанск|испанский вариант/i.test(q)){
        return {es:answer,ru:cleanPromptTail(q)};
      }
      if(/на русск/i.test(q)){
        return {es:cleanPromptTail(q),ru:answer};
      }

      const explanation=String(item.e || "");
      const pair=explanation.match(/^([^—\n]+?)\s+—\s+([^\n]+?)(?:\.|$)/);
      if(pair) return {es:pair[1].trim(),ru:pair[2].trim()};

      const answerHasCyrillic=/[А-Яа-яЁё]/.test(answer);
      const questionHasCyrillic=/[А-Яа-яЁё]/.test(q);
      if(!answerHasCyrillic && questionHasCyrillic) return {es:answer,ru:q};
      if(answerHasCyrillic && !questionHasCyrillic) return {es:q,ru:answer};
      return {es:answer || q,ru:item.skill || topicById(item.topic).title};
    }

    function mistakeCountLabel(count){
      const n=Math.max(0,Number(count)||0);
      const mod10=n%10,mod100=n%100;
      const word=mod10===1&&mod100!==11?"ошибка":(mod10>=2&&mod10<=4&&(mod100<12||mod100>14)?"ошибки":"ошибок");
      return n+" "+word;
    }

    function renderMistakesView(){
      mistakeExerciseSnapshot=collectMistakeExercises();
      const count=mistakeExerciseSnapshot.length;
      const empty=count===0;
      if(backpackManager){
        backpackManager.checkConditions("error-list",{count:count});
      }

      els.mistakesEmpty.hidden=!empty;
      els.mistakesContent.hidden=empty;
      els.mistakesCount.hidden=empty;
      els.mistakesCount.textContent=mistakeCountLabel(count);
      els.mistakesStartBtn.textContent=count ? "Отработать все ошибки ("+count+")" : "Отработать все ошибки";
      els.mistakesStartBtn.disabled=empty;
      if(navigationView) navigationView.setBadge("mistakes",count);

      els.mistakesList.innerHTML=mistakeExerciseSnapshot.map(function(item,index){
        const display=mistakeDisplay(item);
        const topic=topicById(item.topic);
        return '<article class="mistake-item">'+
          '<div class="mistake-index">'+(index+1)+'</div>'+
          '<div class="mistake-copy"><strong lang="es">'+escapeHtml(display.es)+'</strong><span>'+escapeHtml(display.ru)+'</span></div>'+
          '<div class="mistake-actions">'+
            '<span class="mistake-topic">'+escapeHtml(topic.title)+'</span>'+
            '<button class="btn btn-soft mistake-repeat" data-mistake-repeat="'+index+'" type="button">Отработать</button>'+
          '</div>'+
        '</article>';
      }).join("");
    }

    function showMistakes(){
      closeBlitz();
      if(practiceView) practiceView.hide();
      sessionActive=false;
      if(sessionController) sessionController.stop();
      sessionController=null;
      if(window.DynamicFavicon) window.DynamicFavicon.setTime();

      els.homeView.hidden=true;
      els.trainerLayout.hidden=true;
      els.sessionResult.hidden=true;
      els.mistakesView.hidden=false;

      renderMistakesView();
      setNav("mistakes");
      window.scrollTo({top:0,behavior:"smooth"});
    }

    function startMistakeItems(items){
      const queueItems=Array.isArray(items)?items.filter(Boolean):[];
      if(!queueItems.length){
        showMistakes();
        return;
      }

      selectedTopic="all";
      selectedMode="mistakes";
      foodPhase="practice";
      sessionActive=true;
      sessionRound="main";
      if(backpackManager){
        backpackManager.checkConditions("error-session-start",{timestamp:Date.now()});
      }
      primarySessionResult=null;
      checkedCurrent=false;
      sessionSize=queueItems.length;

      sessionController=window.TrainerSession.createSession({
        topicId:"all",
        mode:"mistakes",
        size:queueItems.length,
        pool:queueItems
      });

      syncSessionProjection();
      showWorkspace();
      render();
    }

    function startSavedMistakes(){
      startMistakeItems(mistakeExerciseSnapshot.slice());
    }

    function startSingleMistake(index){
      const item=mistakeExerciseSnapshot[Number(index)];
      if(item) startMistakeItems([item]);
    }

    function practicePoolForDialog(){
      return buildExercisePool({
        topicId:pendingSessionTopic || selectedTopic,
        mode:"all",
        formats:selectedFormatList(),
        categoryId:(pendingSessionTopic===selectedTopic&&isVocabularyTopic()) ? foodCategory : "all",
        customExercises:custom,
        legacyExercises:allExercises(),
        stats:stats
      });
    }

    function updatePracticeFilterUi(){
      const allActive=selectedFormats.size===0;
      document.querySelectorAll("[data-session-format]").forEach(function(btn){
        const format=btn.dataset.sessionFormat;
        const active=format==="all"?allActive:selectedFormats.has(format);
        btn.classList.toggle("is-active",active);
        btn.setAttribute("aria-pressed",String(active));
      });
      const available=practicePoolForDialog().length;
      if(els.sessionAvailableCount){
        els.sessionAvailableCount.textContent="Доступно заданий: "+available;
        els.sessionAvailableCount.classList.toggle("is-empty",available===0);
      }
      const startButton=$("startSessionBtn");
      if(startButton) startButton.disabled=available===0;
      return available;
    }

    function openSessionDialog(topic){
      pendingSessionTopic=topic || selectedTopic;
      selectedMode="all";
      els.sessionTopicLabel.textContent=topicById(pendingSessionTopic).title;
      document.querySelectorAll("[data-session-size]").forEach(function(btn){btn.classList.toggle("active",Number(btn.dataset.sessionSize)===sessionSize);});
      updatePracticeFilterUi();
      els.sessionDialog.showModal();
    }
    function startTrainingSession(topic,size,formats){
      resetHeaderMascot();
      if(!window.TrainerSession){
        throw new Error("TrainerSession is not initialized.");
      }

      selectedTopic=topic || pendingSessionTopic || "all";
      sessionSize=Number(size || sessionSize) || 10;
      selectedMode="all";
      if(Array.isArray(formats)){
        selectedFormats=new Set(formats.filter(function(value){return PRACTICE_FORMAT_IDS.indexOf(value)>=0;}));
      }
      foodPhase="practice";
      sessionActive=true;
      sessionRound="main";
      primarySessionResult=null;
      checkedCurrent=false;

      sessionController=window.TrainerSession.createSession({
        topicId:selectedTopic,
        mode:selectedMode,
        formats:selectedFormatList(),
        categoryId:isVocabularyTopic() ? foodCategory : "all",
        size:sessionSize,
        customExercises:custom,
        legacyExercises:allExercises(),
        stats:stats
      });

      syncSessionProjection();

      uiSettings.sessionSize=sessionSize;
      uiSettings.sessionFormats=selectedFormatList();
      if(selectedTopic!=="all") uiSettings.lastTopic=selectedTopic;
      write(STORAGE.ui,uiSettings);

      showWorkspace();
      render();
    }

    function startSession(topic,size,formats){
      return startTrainingSession(topic,size,formats);
    }

    function startMistakeReview(mistakes,primarySummary){
      resetHeaderMascot();
      if(!window.TrainerSession || !Array.isArray(mistakes) || !mistakes.length){
        return resultsView.showFinal(primarySummary);
      }

      primarySessionResult={
        answered:Number(primarySummary.answered)||0,
        correct:Number(primarySummary.correct)||0,
        wrong:Number(primarySummary.wrong)||0,
        wrongIds:(primarySummary.wrongIds||[]).slice(),
        mistakes:(primarySummary.mistakes||[]).slice()
      };

      sessionRound="mistakes";
      sessionActive=true;
      checkedCurrent=false;
      foodPhase="practice";
      if(backpackManager){
        backpackManager.checkConditions("error-session-start",{timestamp:Date.now()});
      }

      sessionController=window.TrainerSession.createSession({
        topicId:selectedTopic,
        mode:"mistake-review",
        size:mistakes.length,
        pool:mistakes
      });

      syncSessionProjection();
      showWorkspace();
      render();
    }

    function finishSession(){
      if(sessionRound==="mistakes"){
        if(sessionController) syncSessionProjection();
        const original=primarySessionResult || sessionResults;
        sessionActive=false;
        sessionRound="main";
        primarySessionResult=null;
        return resultsView.showFinal(original);
      }
      return resultsView.completeMain();
    }

    function runResultTestFromUrl(){
      const params=new URLSearchParams(window.location.search);
      if(!params.has("resultTest")) return;

      let hasAdminAccess=false;
      try { hasAdminAccess=localStorage.getItem(CUSTOM_AUTHORING_ACCESS.storageKey)==="1"; } catch(e) {}
      if(!hasAdminAccess) return;

      const raw=params.get("resultTest");
      const percent=Number(raw);
      if(!Number.isFinite(percent) || percent<0 || percent>100) return;

      const normalized=Math.round(percent);
      const total=100;
      const correct=Math.max(0,Math.min(total,normalized));
      const wrong=total-correct;

      queue=Array.from({length:total},function(_,i){return {id:"result_test_"+i};});
      sessionResults={answered:total,correct:correct,wrong:wrong,wrongIds:[]};
      sessionActive=false;
      foodPhase="practice";
      selectedMode="all";
      showWorkspace();
      resultsView.showFinal(sessionResults);
      els.resultMessage.textContent="Тестовый экран результата: "+normalized+"% правильных ответов.";
    }
    const SPANISH_LOCALES = [
      {id:"es-ES",label:"Испания"},
      {id:"es-MX",label:"Мексика"},
      {id:"es-US",label:"США"},
      {id:"es-AR",label:"Аргентина"},
      {id:"es-CO",label:"Колумбия"},
      {id:"es-CL",label:"Чили"},
      {id:"es-PE",label:"Перу"}
    ];

    const IOS_FEATURED_VOICES = [
      {keys:["jorge","хорхе"],label:"Хорхе"},
      {keys:["marisol","марисоль"],label:"Марисоль"},
      {keys:["isabela","isabella","изабелла"],label:"Изабелла"},
      {keys:["paulina","паулина"],label:"Паулина"}
    ];

    function featuredIOSVoice(voice){
      const haystack=(String(voice.name||"")+" "+String(voice.voiceURI||"")+" "+String(voice.lang||"")).toLowerCase();
      return IOS_FEATURED_VOICES.find(function(item){
        return item.keys.some(function(key){return haystack.indexOf(key)>=0;});
      }) || null;
    }

    function isSpanishVoice(voice){
      const lang=normalizedVoiceLang(voice);
      return /^es(?:-|$)/i.test(lang) || !!featuredIOSVoice(voice);
    }

    function voiceDebugLine(voice,index){
      return (index+1)+". "+(voice.name||"(без имени)")+
        " | lang="+(normalizedVoiceLang(voice)||"—")+
        " | uri="+(voice.voiceURI||"—")+
        " | local="+String(voice.localService)+
        " | default="+String(voice.default);
    }

    function renderVoiceDebug(allVoices){
      if(!els.voiceDebugLog || !els.voiceDebugCounts) return;
      const all=Array.from(allVoices || []);
      const spanish=all.filter(isSpanishVoice);
      const featured=spanish.filter(function(voice){return !!featuredIOSVoice(voice);});
      const foundLabels=IOS_FEATURED_VOICES.map(function(item){
        const matches=featured.filter(function(voice){
          const match=featuredIOSVoice(voice);
          return match && match.label===item.label;
        });
        return item.label+": "+(matches.length ? "виден Safari ("+matches.map(function(v){return normalizedVoiceLang(v)||"?";}).join(", ")+")" : "НЕ виден Safari");
      });
      els.voiceDebugCounts.innerHTML=
        "<b>getVoices(): "+all.length+"</b> · испанских: "+spanish.length+" · нужных iOS: "+featured.length+"/4<br>"+
        foundLabels.join(" · ");
      els.voiceDebugLog.textContent=all.length ? all.map(voiceDebugLine).join("\n") : "getVoices() вернул пустой массив.";
      try{
        console.groupCollapsed("[TTS] speechSynthesis.getVoices() · "+all.length);
        console.table(all.map(function(v){return {name:v.name,lang:v.lang,voiceURI:v.voiceURI,localService:v.localService,default:v.default};}));
        console.log("[TTS] Spanish voices",spanish);
        console.log("[TTS] Featured iOS voices",featured);
        console.groupEnd();
      }catch(err){}
    }

    function normalizedVoiceLang(voice){
      return String((voice && voice.lang) || "").replace("_","-");
    }

    function voiceScore(voice,preferredLocale){
      const label=(voice.name+" "+voice.voiceURI).toLowerCase();
      const lang=normalizedVoiceLang(voice).toLowerCase();
      const preferred=String(preferredLocale || "").toLowerCase();
      let score=0;
      if(/natural|neural|premium|enhanced|online/.test(label)) score+=140;
      if(/google|microsoft|apple|siri/.test(label)) score+=45;
      if(/españ|spanish|español/.test(label)) score+=12;
      if(preferred && lang===preferred) score+=90;
      else if(preferred && lang.slice(0,2)===preferred.slice(0,2)) score+=20;
      if(lang==="es-es") score+=12;
      if(voice.default) score+=6;
      return score;
    }

    function voiceLocaleLabel(lang){
      const normalized=String(lang || "").replace("_","-");
      const found=SPANISH_LOCALES.find(function(item){return item.id.toLowerCase()===normalized.toLowerCase();});
      return found ? found.label+" · "+normalized : "Другие варианты · "+(normalized || "es");
    }

    function preferredVoiceLocale(){
      return audioSettings.voiceLocale && audioSettings.voiceLocale!=="auto" ? audioSettings.voiceLocale : "";
    }

    function refreshVoices(){
      if(!("speechSynthesis" in window)){
        els.voiceLocaleSelect.disabled=true;
        els.voiceSelect.disabled=true;
        els.voicePreview.disabled=true;
        els.voiceStatus.textContent="В этом браузере озвучивание недоступно.";
        return;
      }
      const preferred=preferredVoiceLocale();
      const allVoices=window.speechSynthesis.getVoices();
      renderVoiceDebug(allVoices);
      spanishVoices=allVoices.filter(isSpanishVoice).sort(function(a,b){
        return voiceScore(b,preferred)-voiceScore(a,preferred) || normalizedVoiceLang(a).localeCompare(normalizedVoiceLang(b)) || a.name.localeCompare(b.name);
      });

      els.voiceLocaleSelect.value=audioSettings.voiceLocale || "auto";
      if(!els.voiceLocaleSelect.value) els.voiceLocaleSelect.value="auto";

      const previous=audioSettings.voiceURI || "";
      els.voiceSelect.innerHTML="";
      els.voiceSelect.appendChild(new Option(preferred ? "Автоматически: лучший для "+voiceLocaleLabel(preferred).split(" · ")[0] : "Автоматически: лучший доступный",""));

      const groups={};
      const featuredGroup=document.createElement("optgroup");
      featuredGroup.label="Установленные голоса iOS";
      const featuredUris=new Set();
      IOS_FEATURED_VOICES.forEach(function(featured){
        const matches=spanishVoices.filter(function(voice){
          const match=featuredIOSVoice(voice);
          return match && match.label===featured.label;
        });
        matches.forEach(function(voice){
          const lang=normalizedVoiceLang(voice) || "es";
          const quality=/premium|enhanced|higher quality|high quality|improved|mejorad|alta calidad|natural/i.test(voice.name+" "+voice.voiceURI) ? " · улучшенный" : "";
          featuredGroup.appendChild(new Option(featured.label+" · "+lang+quality,voice.voiceURI));
          featuredUris.add(voice.voiceURI);
        });
      });
      if(featuredGroup.children.length) els.voiceSelect.appendChild(featuredGroup);

      spanishVoices.forEach(function(voice){
        if(featuredUris.has(voice.voiceURI)) return;
        const lang=normalizedVoiceLang(voice) || "es";
        const key=lang.toLowerCase();
        if(!groups[key]){
          const group=document.createElement("optgroup");
          group.label=voiceLocaleLabel(lang);
          groups[key]=group;
          els.voiceSelect.appendChild(group);
        }
        const quality=/natural|neural|premium|enhanced|online/i.test(voice.name+" "+voice.voiceURI) ? " · HQ" : "";
        groups[key].appendChild(new Option(voice.name+" · "+lang+quality,voice.voiceURI));
      });

      if(previous && spanishVoices.some(function(voice){return voice.voiceURI===previous;})) els.voiceSelect.value=previous;
      else {
        els.voiceSelect.value="";
        if(previous) audioSettings.voiceURI="";
      }

      els.voiceLocaleSelect.disabled=false;
      if(!spanishVoices.length){
        els.voiceSelect.innerHTML="";
        const unavailable=new Option("Safari не передал испанские голоса","");
        unavailable.disabled=true;
        unavailable.selected=true;
        els.voiceSelect.appendChild(unavailable);
      }
      els.voiceSelect.disabled=!spanishVoices.length;
      els.voicePreview.disabled=!spanishVoices.length && !preferred;

      const chosen=selectedSpanishVoice();
      const locale=chosen ? normalizedVoiceLang(chosen) : (preferred || "es-ES");
      const installedFeatured=spanishVoices.filter(function(voice){return !!featuredIOSVoice(voice);});
      if(chosen){
        const chosenFeatured=featuredIOSVoice(chosen);
        els.voiceStatus.textContent=audioSettings.voiceURI
          ? "Выбран: "+(chosenFeatured ? chosenFeatured.label : chosen.name)+" · "+locale+". Настройка сохранена."
          : "Автовыбор: "+(chosenFeatured ? chosenFeatured.label : chosen.name)+" · "+locale+". Доступно системных iOS-голосов из списка: "+installedFeatured.length+" из 4.";
      } else if(preferred){
        els.voiceStatus.textContent="Safari не передал доступный испанский голос для "+voiceLocaleLabel(preferred)+". Озвучка попробует системный fallback по локали "+preferred+". Открой «Диагностика голосов Safari», чтобы увидеть фактический getVoices().";
      } else if(!spanishVoices.length){
        els.voiceStatus.textContent="Safari сейчас не отдаёт ни одного испанского голоса через Web Speech API. Скачанные в iOS улучшенные голоса нельзя выбрать на сайте, пока браузер не показывает их в getVoices().";
      } else {
        els.voiceStatus.textContent="Safari передал "+spanishVoices.length+" испанских голосов. Выбери нужный в списке.";
      }
      write(STORAGE.audio,audioSettings);
    }

    function selectedSpanishVoice(){
      if(audioSettings.voiceURI){
        const saved=spanishVoices.find(function(voice){return voice.voiceURI===audioSettings.voiceURI;});
        if(saved) return saved;
      }
      const preferred=preferredVoiceLocale().toLowerCase();
      if(preferred){
        const exact=spanishVoices.filter(function(voice){return normalizedVoiceLang(voice).toLowerCase()===preferred;});
        if(exact.length) return exact.sort(function(a,b){return voiceScore(b,preferred)-voiceScore(a,preferred);})[0];
      }
      return spanishVoices[0] || null;
    }

    function setAudioRate(rate){
      audioSettings.rate=normalizeAudioRate(rate);
      write(STORAGE.audio,audioSettings);
      updateSpeedButtons();
      return audioSettings.rate;
    }

    function cycleAudioRate(){
      const current=normalizeAudioRate(audioSettings.rate);
      const index=AUDIO_RATES.indexOf(current);
      return setAudioRate(AUDIO_RATES[(index+1)%AUDIO_RATES.length]);
    }

    function updateSpeedButtons(){
      audioSettings.rate=normalizeAudioRate(audioSettings.rate);
      document.querySelectorAll("[data-audio-rate]").forEach(function(btn){
        const active=Math.abs(Number(btn.dataset.audioRate)-audioSettings.rate)<.01;
        btn.classList.toggle("active",active);
        btn.setAttribute("aria-pressed",String(active));
      });
      document.querySelectorAll("[data-audio-speed]").forEach(function(btn){
        btn.textContent=audioRateLabel(audioSettings.rate);
        btn.setAttribute("aria-label","Скорость воспроизведения "+audioSettings.rate.toFixed(1)+". Нажми, чтобы изменить.");
      });
    }

    function setSpeakingState(active,source){
      const controls=[els.audioPrompt,els.studyListen,els.voicePreview];
      controls.forEach(function(btn){
        if(btn) btn.classList.toggle("speaking",active && btn===source);
      });
      if(source&&controls.indexOf(source)<0&&source.classList)source.classList.toggle("speaking",active);
    }

    function speakText(text,rate,source){
      if(!text) return;
      if(!("speechSynthesis" in window)){
        els.feedback.textContent="В этом браузере озвучивание недоступно.";
        els.feedback.className="feedback bad";
        return;
      }
      if(!spanishVoices.length) refreshVoices();
      window.speechSynthesis.cancel();
      const utterance=new SpeechSynthesisUtterance(text);
      const voice=selectedSpanishVoice();
      const preferred=preferredVoiceLocale();
      if(voice){
        utterance.voice=voice;
        utterance.lang=normalizedVoiceLang(voice) || preferred || "es-ES";
      } else {
        utterance.lang=preferred || "es-ES";
      }
      utterance.rate=normalizeAudioRate(rate===undefined||rate===null?audioSettings.rate:rate);
      utterance.pitch=1;
      utterance.volume=1;
      utterance.onstart=function(){setSpeakingState(true,source);};
      utterance.onend=utterance.onerror=function(){setSpeakingState(false,source);};
      window.speechSynthesis.speak(utterance);
    }

    function speakCurrent(rate,source){
      const item=queue[index];
      const text=item&&(item.audio||item.audioText);
      if(!text) return;
      if(backpackManager){
        backpackManager.checkConditions("audio",{
          itemId:String(item.id||""),
          isWordCard:false,
          timestamp:Date.now()
        });
      }
      speakText(text,rate,source);
    }

    function speakStudy(){
      const words=studyCardView.currentWords();
      const word=words[wordIndex];
      if(!word) return;
      if(backpackManager){
        backpackManager.checkConditions("audio",{
          wordId:String(word.id||word.word||wordIndex),
          topicId:selectedTopic,
          isWordCard:true,
          timestamp:Date.now()
        });
      }
      const parts=[word.word+"."].concat((word.examples || []).map(function(example){return example[0];}));
      speakText(parts.join(" "),audioSettings.rate,els.studyListen);
    }
    function render(){
      if(sessionActive && window.DynamicFavicon) window.DynamicFavicon.setTraining(streak);
      if(els.trainerLayout.classList.contains("catalog-view")) renderTopics();
      renderStats();
      els.topicName.textContent=topicById(selectedTopic).title;
      els.sessionResult.hidden=true;
      const canStudy=isVocabularyTopic();
      els.topicTabs.hidden=selectedTopic==="all" || selectedTopic==="custom";
      els.learnTab.disabled=!canStudy;
      els.learnTab.classList.toggle("active",canStudy && foodPhase==="study");
      els.practiceTab.classList.toggle("active",foodPhase!=="study");
      if(canStudy && selectedMode==="all" && foodPhase==="study"){
        studyCardView.render();
        return;
      }
      trainerView.renderExercise();
    }
    function checkAnswer(){ return trainerView.checkAnswer(); }
    function move(delta){ return trainerView.move(delta); }
    function openDialog(){
      els.dialog.showModal();
      renderCustomList();
      setTimeout(function(){$("customQuestion").focus();},50);
    }
    function renderCustomList(){
      els.customListWrap.hidden=!custom.length;
      els.customList.innerHTML=custom.map(function(item){
        return '<div class="custom-row"><span>'+escapeHtml(item.q)+'</span><button type="button" data-delete="'+item.id+'">Удалить</button></div>';
      }).join("");
      els.customList.querySelectorAll("[data-delete]").forEach(function(btn){
        btn.addEventListener("click",function(){
          custom=custom.filter(function(x){return x.id!==btn.dataset.delete;});
          write(STORAGE.custom,custom); renderCustomList(); buildQueue(true); toast("Задание удалено");
        });
      });
    }
    function toast(message){
      els.toast.textContent=message; els.toast.classList.add("show");
      setTimeout(function(){els.toast.classList.remove("show");},1800);
    }

    function getUiState(){
      return {
        stats,custom,streak,uiSettings,selectedTopic,selectedMode,selectedFormats:selectedFormatList(),queue,index,checkedCurrent,wordIndex,
        foodPhase,foodCategory,catalogIntent,topicSearch,studySearch,studyPickerQuery,pendingSessionTopic,
        sessionSize,sessionActive,sessionController,sessionResults,sessionRound,primarySessionResult
      };
    }
    function patchUiState(patch){
      if("stats" in patch) stats=patch.stats;
      if("custom" in patch) custom=patch.custom;
      if("streak" in patch) streak=patch.streak;
      if("uiSettings" in patch) uiSettings=patch.uiSettings;
      if("selectedTopic" in patch) selectedTopic=patch.selectedTopic;
      if("selectedMode" in patch) selectedMode=patch.selectedMode;
      if("selectedFormats" in patch&&Array.isArray(patch.selectedFormats)){
        selectedFormats=new Set(patch.selectedFormats.filter(function(value){return PRACTICE_FORMAT_IDS.indexOf(value)>=0;}));
      }
      if("queue" in patch) queue=patch.queue;
      if("index" in patch) index=patch.index;
      if("checkedCurrent" in patch) checkedCurrent=patch.checkedCurrent;
      if("wordIndex" in patch) wordIndex=patch.wordIndex;
      if("foodPhase" in patch) foodPhase=patch.foodPhase;
      if("foodCategory" in patch) foodCategory=patch.foodCategory;
      if("catalogIntent" in patch) catalogIntent=patch.catalogIntent;
      if("topicSearch" in patch) topicSearch=patch.topicSearch;
      if("studySearch" in patch) studySearch=patch.studySearch;
      if("studyPickerQuery" in patch) studyPickerQuery=patch.studyPickerQuery;
      if("pendingSessionTopic" in patch) pendingSessionTopic=patch.pendingSessionTopic;
      if("sessionSize" in patch) sessionSize=patch.sessionSize;
      if("sessionActive" in patch) sessionActive=patch.sessionActive;
      if("sessionController" in patch) sessionController=patch.sessionController;
      if("sessionResults" in patch) sessionResults=patch.sessionResults;
      if("sessionRound" in patch) sessionRound=patch.sessionRound;
      if("primarySessionResult" in patch) primarySessionResult=patch.primarySessionResult;
    }
    function registeredTopic(id){ return window.TopicRegistryFacade ? window.TopicRegistryFacade.getTopic(id) : null; }
    function initializeViews(){
      catalogView=createCatalogView({
        els,groups:TOPIC_GROUPS,escapeHtml,normalize,getState:getUiState,patchState:patchUiState,
        getTopics:function(){return TOPICS;},getRegisteredTopic:registeredTopic,
        getExerciseCount:function(){return allExercises().length;},
        isVocabularyTopic:function(id){return id!=="all"&&id!=="custom";},
        writeUi:function(value){write(STORAGE.ui,value);},openSessionDialog,showWorkspace,buildQueue
      });
      studyCardView=createStudyCardView({
        els,$,escapeHtml,fold,getState:getUiState,patchState:patchUiState,
        getStudyItems:function(id){const t=registeredTopic(id);return t?t.studyItems:[];},
        getCategories:categoriesForTopic,getTopic:registeredTopic,runtimeAssetUrl,withVersion,
        foodArt:function(id){return typeof window.foodArt==="function"?window.foodArt(id):"";},
        clothingArt:function(id){return typeof window.clothingArt==="function"?window.clothingArt(id):"";},
        activityArt:function(id){return typeof window.activityArt==="function"?window.activityArt(id):"";},
        cityArt:function(id){return typeof window.cityArt==="function"?window.cityArt(id):"";},
        onStartPractice:startFoodPractice,
        onStudyAction:speakStudy,
        onWordViewed:function(data){backpackManager.checkConditions("study",data);},
        safeVibrate
      });
      trainerView=createTrainerView({
        els,$,escapeHtml,shuffle,normalize,fold,normalizePictureAnswer,pictureAsset,bindPictureImageFallback,
        getState:getUiState,patchState:patchUiState,
        isVocabularyTopic:function(id){return id!=="all"&&id!=="custom";},
        answerEngine:window.AnswerEngine,progress:window.TrainerProgress,
        syncSession:syncSessionProjection,renderStats,renderApp:render,onFinish:finishSession,
        setTrainingFavicon:function(value){if(window.DynamicFavicon)window.DynamicFavicon.setTraining(value);},
        colorArt:function(hex){return studyCardView.colorArt(hex);},
        safeVibrate,
        playAudioStory:function(text,rate,source){
          if(backpackManager){
            backpackManager.checkConditions("audio",{
              itemId:"audio_story",
              isWordCard:false,
              timestamp:Date.now()
            });
          }
          speakText(text,rate,source);
        },
        getAudioRate:function(){return audioSettings.rate;},
        cycleAudioRate:cycleAudioRate,
        backpackManager:backpackManager
      });
      resultsView=createResultsView({
        els,$,getState:getUiState,patchState:patchUiState,syncSession:syncSessionProjection,
        progress:window.TrainerProgress,ensureApproveMascot:ensureResultMascot,
        ensureStrictMascot:ensureStrictResultMascot,ensureLowMascot:ensureLowResultMascot,
        setResultFavicon:function(accuracy,currentStreak){if(window.DynamicFavicon)window.DynamicFavicon.setResult(accuracy,currentStreak);},
        setHeaderMascotMood:setHeaderMascotMood,
        onReviewMistakes:startMistakeReview,
        backpackManager:backpackManager
      });
      practiceView=createPracticeView({
        host:$("topicCatalog"),
        getSource:blitzSource,
        onReturn:function(){showCatalog("practice");},
        onBlitzComplete:function(result){backpackManager.checkConditions("blitz",result);}
      });
      navigationView=createNavigation({
        $,
        onHome:showHome,
        onWords:function(){showCatalog("learn");},
        onPractice:function(){showCatalog("practice");},
        onMistakes:showMistakes,
        onMore:function(){els.moreDialog.showModal();},
        onNavigate:function(section,meta){
          backpackManager.checkConditions("navigation",{
            section:section,
            timestamp:meta&&meta.timestamp?meta.timestamp:Date.now()
          });
        }
      });
      navigationView.bind();
    }

    function startFoodPractice(){
      openSessionDialog(selectedTopic);
    }

    function shortcutTargetIsEditable(target){
      if(!target || !target.closest) return false;
      return Boolean(target.closest('input,textarea,[contenteditable="true"],[contenteditable=""]'));
    }

    function shortcutHasOpenDialog(){
      return Boolean(document.querySelector("dialog[open]"));
    }

    function handleGlobalShortcut(event){
      if(event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
      if(shortcutTargetIsEditable(event.target) || shortcutHasOpenDialog()) return;

      // Let focused native controls keep their standard Enter/Space behavior,
      // except choice options: Enter there means "Проверить".
      if((event.key==="Enter" || event.key===" ") && event.target && event.target.closest){
        const nativeControl=event.target.closest("button,a,select");
        const answerOption=event.target.closest(".choice-option,.audio-story-choice");
        if(nativeControl && !(event.key==="Enter" && answerOption)) return;
      }

      if(els.trainerLayout.hidden || els.trainerLayout.classList.contains("catalog-view")) return;

      if(!els.studyView.hidden && foodPhase==="study" && selectedMode==="all"){
        const studyKey=event.key===" " ? "Space" : event.key;
        if(studyCardView && studyCardView.handleShortcut(studyKey)){
          event.preventDefault();
        }
        return;
      }

      if(!els.exerciseView.hidden){
        if(trainerView && trainerView.handleShortcut(event.key)){
          event.preventDefault();
        }
      }
    }

    document.addEventListener("keydown",handleGlobalShortcut);
    $("startFoodPractice").addEventListener("click",startFoodPractice);
    $("prevWord").addEventListener("click",function(){studyCardView.previous();});
    els.nextWord.addEventListener("click",function(){studyCardView.next();});
    els.backToWordsBtn.addEventListener("click",function(){sessionActive=false;if(sessionController)sessionController.stop();sessionController=null;selectedMode="all";foodPhase="study";wordIndex=0;showWorkspace();render();});
    $("checkBtn").addEventListener("click",function(){
      if(!$("checkBtn").disabled) checkAnswer();
    });
    els.audioPrompt.addEventListener("click",function(){speakCurrent(audioSettings.rate,els.audioPrompt);});
    els.slowAudioPrompt.addEventListener("click",function(){cycleAudioRate();});
    els.studyListen.addEventListener("click",speakStudy);
    els.studyAudioSpeed.addEventListener("click",function(){cycleAudioRate();});
    els.voicePreview.addEventListener("click",function(){
      speakText("Hola. Hoy practicamos español con calma y claridad.",audioSettings.rate,els.voicePreview);
    });
    els.voiceRefresh.addEventListener("click",function(){
      refreshVoices();
    });
    els.voiceDebug.addEventListener("toggle",function(){
      if(els.voiceDebug.open) refreshVoices();
    });
    els.voiceLocaleSelect.addEventListener("change",function(){
      audioSettings.voiceLocale=els.voiceLocaleSelect.value || "auto";
      audioSettings.voiceURI="";
      write(STORAGE.audio,audioSettings);
      refreshVoices();
      speakText("Hola. Esta es una prueba del español seleccionado.",audioSettings.rate,els.voicePreview);
    });
    els.voiceSelect.addEventListener("change",function(){
      audioSettings.voiceURI=els.voiceSelect.value;
      const chosen=selectedSpanishVoice();
      if(chosen && normalizedVoiceLang(chosen)) audioSettings.voiceLocale=normalizedVoiceLang(chosen);
      write(STORAGE.audio,audioSettings);
      refreshVoices();
      if(chosen) speakText("Hola. Este es el sonido de la voz seleccionada.",audioSettings.rate,els.voicePreview);
    });
    document.querySelectorAll("[data-audio-rate]").forEach(function(btn){
      btn.addEventListener("click",function(){
        setAudioRate(Number(btn.dataset.audioRate));
        speakText("Escucha esta frase con atención.",audioSettings.rate,btn);
      });
    });
    els.audioSettings.addEventListener("toggle",function(){if(els.audioSettings.open) refreshVoices();});
    $("clearOrder").addEventListener("click",function(){trainerView.clearOrder();});
    els.formGrid.addEventListener("keydown",function(e){
      if(e.key==="Enter"){
        e.preventDefault();
        if(!$("checkBtn").disabled) checkAnswer();
      }
    });
    $("nextBtn").addEventListener("click",function(){move(1);});
    $("skipBtn").addEventListener("click",function(){trainerView.skipCurrent();});
    $("prevBtn").addEventListener("click",function(){move(-1);});
    $("showBtn").addEventListener("click",function(){trainerView.skipCurrent();});
    $("addBtn").addEventListener("click",openDialog);
    $("emptyAddBtn").addEventListener("click",openDialog);
    $("closeDialog").addEventListener("click",function(){els.dialog.close();});
    els.dialog.addEventListener("click",function(e){ if(e.target===els.dialog) els.dialog.close(); });
    els.answerInput.addEventListener("keydown",function(e){
      if(e.key==="Enter"){
        e.preventDefault();
        if(!$("checkBtn").disabled) checkAnswer();
      }
    });
    $("todayBtn").addEventListener("click",function(){selectedMode="all";selectedFormats.clear();startSession("all",10,[]);});
    $("learnWordsBtn").addEventListener("click",function(){showCatalog("learn");});
    $("continueBtn").addEventListener("click",function(){selectedMode="all";openSessionDialog(uiSettings.lastTopic || "verbs");});
    $("chooseTopicBtn").addEventListener("click",function(){showCatalog("practice");});
    els.moreDialog.addEventListener("close",function(){
      setNav(currentSectionNav());
    });
    $("moreAddBtn").addEventListener("click",function(){els.moreDialog.close();openDialog();});
    els.mistakesStartBtn.addEventListener("click",startSavedMistakes);
    els.mistakesList.addEventListener("click",function(event){
      const button=event.target.closest("[data-mistake-repeat]");
      if(!button) return;
      startSingleMistake(button.dataset.mistakeRepeat);
    });
    els.mistakesWordsBtn.addEventListener("click",function(){showCatalog("learn");});
    els.topicSearch.addEventListener("input",function(){topicSearch=els.topicSearch.value;renderTopics();});
    els.wordSearch.addEventListener("input",function(){studySearch=els.wordSearch.value;wordIndex=0;studyCardView.render();});
    els.studyPickerBtn.addEventListener("click",function(){studyCardView.openPicker();});
    els.studyPickerSearch.addEventListener("input",function(){studyPickerQuery=els.studyPickerSearch.value;studyCardView.renderPicker();});
    els.studyPickerList.addEventListener("click",function(event){
      const btn=event.target.closest("[data-study-index]");
      if(!btn) return;
      els.studyPickerDialog.close();
      studyCardView.selectIndex(Number(btn.dataset.studyIndex));
      window.scrollTo({top:0,behavior:"smooth"});
    });
    els.learnTab.addEventListener("click",function(){
      if(!isVocabularyTopic()) return;
      sessionActive=false; selectedMode="all"; foodPhase="study"; wordIndex=0; showWorkspace(); render();
    });
    els.practiceTab.addEventListener("click",function(){selectedMode="all";openSessionDialog(selectedTopic);});
    document.querySelectorAll("[data-session-size]").forEach(function(btn){
      btn.addEventListener("click",function(){
        sessionSize=Number(btn.dataset.sessionSize);
        document.querySelectorAll("[data-session-size]").forEach(function(x){x.classList.toggle("active",x===btn);});
      });
    });
    document.querySelectorAll("[data-session-format]").forEach(function(btn){
      btn.addEventListener("click",function(){
        const format=btn.dataset.sessionFormat;
        if(format==="all"){
          selectedFormats.clear();
        }else if(selectedFormats.has(format)){
          selectedFormats.delete(format);
        }else{
          selectedFormats.add(format);
        }
        updatePracticeFilterUi();
      });
    });
    $("startSessionBtn").addEventListener("click",function(){
      if(updatePracticeFilterUi()===0) return;
      els.sessionDialog.close();
      startSession(pendingSessionTopic,sessionSize,selectedFormatList());
    });
    $("resultHomeBtn").addEventListener("click",showHome);
    $("repeatMistakesBtn").addEventListener("click",function(){
      const mistakes=(sessionResults.mistakes||[]).slice();
      if(mistakes.length) startMistakeReview(mistakes,sessionResults);
    });
    $("addForm").addEventListener("submit",function(e){
      e.preventDefault();
      const q=$("customQuestion").value.trim();
      const answers=$("customAnswers").value.split(/\n+/).map(function(x){return x.trim();}).filter(Boolean);
      if(!q || !answers.length) return;
      custom.push({
        id:"custom_"+Date.now(), topic:els.customTopic.value, skill:"Своё задание",
        q:q, a:answers, e:$("customExplanation").value.trim()
      });
      write(STORAGE.custom,custom);
      $("addForm").reset();
      els.customTopic.value="custom";
      renderCustomList(); buildQueue(true); toast("Задание добавлено");
    });

    function initializeApp(){
      if(initializeApp.done) return;
      initializeApp.done=true;
      if(!catalogView) initializeViews();
      bindPawsInteraction({ backpackManager: backpackManager, safeVibrate: safeVibrate });
      bindCatSpeechBubble();
      els.customTopic.innerHTML=TOPICS.filter(function(t){return t.id!=="all";}).map(function(t){
        return '<option value="'+t.id+'">'+t.title+'</option>';
      }).join("");
      els.customTopic.value="custom";
      updateSpeedButtons();
      refreshVoices();
      if("speechSynthesis" in window){
        window.speechSynthesis.onvoiceschanged=refreshVoices;
        if(window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener("voiceschanged",refreshVoices);
      }
      setTimeout(refreshVoices,300);
      setTimeout(refreshVoices,1200);
      setTimeout(refreshVoices,2500);
      setTimeout(refreshVoices,5000);
      renderStats();
      renderTopics();
      showHome();
    }
  

  const applicationTopics = [
    verbsTopic,
    presentTopic,
    pronounsTopic,
    questionsTopic,
    constructionsTopic,
    gustarTopic,
    agreementTopic,
    prepositionsTopic,
    connectorsTopic,
    pastTopic,
    routineTopic,
    calendarTopic,
    practicalTopic,
    cityTopic,
    homeTopic,
    choresTopic,
    colorsTopic,
    foodsTopic,
    clothesTopic,
    activitiesTopic,
    animalsTopic,
    mixedTopic
  ];

  applicationTopics.forEach(function (topic) {
    if (!hasTopic(topic.id)) registerTopic(topic);
  });

  window.TopicRegistryFacade = Object.freeze({
    getTopic,
    getTopics,
    getAllExercises
  });

  const catalogTopics=getTopics().filter(function(topic){
    return topic.id!=="__mixed";
  });

  TOPICS.splice(
    0,
    TOPICS.length,
    {id:"all",title:"Все темы",icon:"✦"},
    ...catalogTopics.map(function(topic){
      return {id:topic.id,title:topic.title,icon:topic.icon};
    }),
    {id:"custom",title:"Свои задания",icon:"＋"}
  );

  const adapter = window.LegacyProgressAdapter;
  if (!adapter) throw new Error("LegacyProgressAdapter is missing.");

  const state = load();

  adapter.hydrate({
    stats: { ...state.progress.stats },
    custom: state.custom.slice(),
    streak: state.progress.streak
  });

  function bridgeRead(key, fallback) {
    const current = load();
    if (key === adapter.keys.stats) return { ...current.progress.stats };
    if (key === adapter.keys.custom) return current.custom.slice();
    if (key === adapter.keys.streak) return current.progress.streak;
    return adapter.originalRead(key, fallback);
  }

  function bridgeWrite(key, value) {
    if (
      key !== adapter.keys.stats &&
      key !== adapter.keys.custom &&
      key !== adapter.keys.streak
    ) {
      adapter.originalWrite(key, value);
      return;
    }

    const current = load();
    if (key === adapter.keys.stats) {
      current.progress.stats = value && typeof value === "object" && !Array.isArray(value) ? { ...value } : {};
    }
    if (key === adapter.keys.custom) {
      current.custom = Array.isArray(value) ? value.slice() : [];
    }
    if (key === adapter.keys.streak) {
      current.progress.streak = Math.max(0, Number(value) || 0);
    }
    save(current);
  }

  adapter.installIO(bridgeRead, bridgeWrite);

  window.TrainerProgress = Object.freeze({
    getStats,
    getExerciseStats,
    getStreak,
    getLastResult,
    getTopicStats,
    getMistakes,
    recordAnswer: recordAnswerWithReaction,
    recordSkip: recordSkipWithReaction,
    resolveMistake,
    recordSessionResult,
    getMascotState,
    getProgressReaction
  });

  window.AnswerEngine = Object.freeze({
    checkAnswer: checkAnswerCore,
    normalizeExact,
    normalizeNear,
    splitAnswerVariants
  });

  window.TrainerSession = Object.freeze({
    buildExercisePool,
    buildQueue: buildSessionQueue,
    createSession
  });

  function updateHeaderMascot(context, accuracy = null, currentStreak = null) {
    if (typeof window.setHeaderMascot !== "function") return;
    window.setHeaderMascot(
      getMascotState({
        context,
        accuracy,
        streak: currentStreak
      })
    );
  }

  if (window.DynamicFavicon) {
    const favicon = window.DynamicFavicon;
    const originalSetTime = favicon.setTime.bind(favicon);
    const originalSetTraining = favicon.setTraining.bind(favicon);
    const originalSetResult = favicon.setResult.bind(favicon);

    favicon.setTime = function () {
      originalSetTime();
      updateHeaderMascot("time");
    };

    favicon.setTraining = function (currentStreak) {
      originalSetTraining(currentStreak);
      updateHeaderMascot("training", null, currentStreak);
    };

    favicon.setResult = function (accuracy, currentStreak) {
      originalSetResult(accuracy, currentStreak);
      updateHeaderMascot("result", accuracy, currentStreak);
    };
  }

  initializeApp();
  runResultTestFromUrl();

(function(){
  "use strict";

  const mascot=document.getElementById("brandMascot");
  if(!mascot) return;

  const ASSET_VERSION="20260922-mascot-priority5";
  const STATES={
    morning:{
      src:"assets/picture-labels/mascot-morning-coffee.webp?v="+ASSET_VERSION,
      alt:"Утренний сонный кот с кофе",
      title:"Утренний кот с кофе · 06:00–09:00"
    },
    day:{
      src:"assets/picture-labels/mascot-day-focused.webp?v="+ASSET_VERSION,
      alt:"Занятой кот за работой",
      title:"Рабочий кот · 09:00–17:00"
    },
    evening:{
      src:"assets/picture-labels/mascot-evening-tired.webp?v="+ASSET_VERSION,
      alt:"Уставший вечерний кот",
      title:"Уставший кот · 17:00–22:00"
    },
    night:{
      src:"assets/picture-labels/mascot-night-sleeping.webp?v="+ASSET_VERSION,
      alt:"Спящий ночной кот",
      title:"Спящий кот · 22:00–06:00"
    },
    success:{
      src:"assets/picture-labels/mascot-success-streak.webp?v="+ASSET_VERSION,
      alt:"Довольный счастливый кот",
      title:"Отличный результат!"
    },
    low:{
      src:"assets/picture-labels/mascot-low-result.webp?v="+ASSET_VERSION,
      alt:"Расстроенный кот после сложной тренировки",
      title:"Есть ошибки — стоит немного повторить"
    }
  };

  let sessionMood=null;
  let reactionMood=null;
  let reactionTimer=0;
  let clockTimer=0;
  let paintToken=0;

  function normalizeMood(value){
    const mood=String(value||"").toLowerCase();
    if(["success","happy","triumph","approve","good"].includes(mood)) return "success";
    if(["low","angry","fail","failed","confused","strict","bad"].includes(mood)) return "low";
    if(["morning","day","evening","night"].includes(mood)) return mood;
    return null;
  }

  function idleStateForHour(hour){
    const h=Number(hour);
    if(h>=6 && h<9) return "morning";
    if(h>=9 && h<17) return "day";
    if(h>=17 && h<22) return "evening";
    return "night";
  }

  function idleState(){
    return idleStateForHour(new Date().getHours());
  }

  function resolvedState(){
    return reactionMood || sessionMood || idleState();
  }

  function paint(state){
    const config=STATES[state];
    if(!config) return;
    const token=++paintToken;
    mascot.style.opacity="0";
    window.setTimeout(function(){
      if(token!==paintToken) return;
      mascot.src=config.src;
      mascot.alt=config.alt;
      mascot.title=config.title;
      mascot.dataset.mascotState=state;
      mascot.className="brand-mascot state-"+state;
      mascot.style.opacity="1";
    },150);
  }

  function render(){
    paint(resolvedState());
  }

  function setMood(mood){
    const normalized=normalizeMood(mood);
    if(!normalized || ["morning","day","evening","night"].includes(normalized)) return false;
    sessionMood=normalized;
    render();
    return true;
  }

  function setSessionResult(value){
    if(typeof value==="number" && Number.isFinite(value)){
      return setMood(value>=60?"happy":"angry");
    }
    return setMood(value);
  }

  function clearReaction(){
    if(reactionTimer){
      window.clearTimeout(reactionTimer);
      reactionTimer=0;
    }
    reactionMood=null;
  }

  function react(mood,duration){
    const normalized=normalizeMood(mood);
    if(!normalized) return false;
    clearReaction();
    reactionMood=normalized;
    render();
    reactionTimer=window.setTimeout(function(){
      reactionTimer=0;
      reactionMood=null;
      render();
    },Math.max(250,Number(duration)||900));
    return true;
  }

  function resetToIdle(){
    clearReaction();
    sessionMood=null;
    render();
  }

  function refreshTime(){
    if(!sessionMood && !reactionMood) render();
  }

  function scheduleNextHour(){
    if(clockTimer) window.clearTimeout(clockTimer);
    const now=new Date();
    const next=new Date(now);
    next.setHours(now.getHours()+1,0,0,50);
    clockTimer=window.setTimeout(function(){
      refreshTime();
      scheduleNextHour();
    },Math.max(1000,next.getTime()-now.getTime()));
  }

  window.HeaderMascot=Object.freeze({
    setMood,
    setSessionResult,
    react,
    resetToIdle,
    refreshTime,
    getState:function(){
      return {
        displayed:resolvedState(),
        sessionMood,
        reactionMood,
        idle:idleState()
      };
    }
  });

  window.setHeaderMascot=function(mood){
    return setMood(mood);
  };

  document.addEventListener("visibilitychange",function(){
    if(!document.hidden) refreshTime();
  });
  window.addEventListener("pageshow",refreshTime);

  render();
  scheduleNextHour();
})();

(function (global) {
  "use strict";

  const SIZE = 64;
  const SUCCESS_STREAK = 3;
  const ASSET_VERSION = "20260921-mascot-favicons1";
  const STATE_ASSETS = {
    morning:"assets/picture-labels/mascot-morning-coffee.webp",
    day:"assets/picture-labels/mascot-day-focused.webp",
    evening:"assets/picture-labels/mascot-evening-tired.webp",
    night:"assets/picture-labels/mascot-night-sleeping.webp",
    success:"assets/picture-labels/mascot-success-streak.webp",
    low:"assets/picture-labels/mascot-low-result.webp"
  };

  const iconLinks = Array.from(document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]'));
  const defaults = iconLinks.map(function (link) {
    return {
      link:link,
      href:link.getAttribute("href") || "",
      type:link.getAttribute("type"),
      sizes:link.getAttribute("sizes")
    };
  });

  const imageCache = {};
  let context = {kind:"time",streak:0,accuracy:null};
  let requestedState = "";
  let stateToken = 0;

  function getLinks() {
    if (iconLinks.length) return iconLinks;
    const link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
    iconLinks.push(link);
    defaults.push({link:link,href:"",type:null,sizes:null});
    return iconLinks;
  }

  function restoreDefault() {
    defaults.forEach(function (item) {
      if (item.href) item.link.setAttribute("href", item.href);
      else item.link.removeAttribute("href");
      if (item.type) item.link.setAttribute("type", item.type);
      else item.link.removeAttribute("type");
      if (item.sizes) item.link.setAttribute("sizes", item.sizes);
      else item.link.removeAttribute("sizes");
    });
  }

  function usePng(dataUrl) {
    getLinks().forEach(function (link) {
      link.setAttribute("href", dataUrl);
      link.setAttribute("type", "image/png");
      link.setAttribute("sizes", SIZE + "x" + SIZE);
    });
  }

  function timeState(date) {
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 21) return "day";
    if (hour >= 21) return "evening";
    return "night";
  }

  function resolvedState() {
    if (context.kind === "result" && Number(context.accuracy) < 60) return "low";
    if ((context.kind === "training" || context.kind === "result") && Number(context.streak) >= SUCCESS_STREAK) return "success";
    return timeState(new Date());
  }

  function versioned(path) {
    return path + (path.indexOf("?") >= 0 ? "&" : "?") + "v=" + encodeURIComponent(ASSET_VERSION);
  }

  function loadStateImage(state) {
    if (imageCache[state]) return imageCache[state];
    imageCache[state] = new Promise(function (resolve, reject) {
      const image = new Image();
      image.onload = function () { resolve(image); };
      image.onerror = function () { reject(new Error("Favicon mascot failed to load: " + state)); };
      image.src = versioned(STATE_ASSETS[state]);
    });
    return imageCache[state];
  }

  function imageToPng(image) {
    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.drawImage(image, 0, 0, SIZE, SIZE);
    return canvas.toDataURL("image/png");
  }

  function refresh() {
    const state = resolvedState();
    if (state === requestedState) return;
    requestedState = state;
    stateToken += 1;
    const token = stateToken;
    loadStateImage(state)
      .then(function (image) {
        if (token !== stateToken || state !== requestedState) return;
        const icon = imageToPng(image);
        if (icon) usePng(icon);
      })
      .catch(function () {
        if (token === stateToken) restoreDefault();
      });
  }

  const api = {
    setTime:function () {
      context = {kind:"time",streak:0,accuracy:null};
      refresh();
    },
    setDefault:function () {
      this.setTime();
    },
    setTraining:function (streak) {
      context = {kind:"training",streak:Number(streak) || 0,accuracy:null};
      refresh();
    },
    setResult:function (accuracy, streak) {
      context = {kind:"result",streak:Number(streak) || 0,accuracy:Number(accuracy) || 0};
      refresh();
    },
    getState:function () {
      return resolvedState();
    }
  };

  global.DynamicFavicon = api;
  refresh();
  global.setInterval(refresh, 60000);
  global.addEventListener("focus", refresh);
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) refresh();
  });
})(window);

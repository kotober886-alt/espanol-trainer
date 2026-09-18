(function(){
  'use strict';

  if(window.__outfitPictureCalloutsLoaderInstalled) return;
  window.__outfitPictureCalloutsLoaderInstalled=true;

  const SRC='assets/outfit-approved-tasks.js?v=20260918-r1';
  const ATTR='approvedOutfitTasks';

  function load(){
    if(document.querySelector('script[data-'+ATTR.replace(/[A-Z]/g,function(m){return '-'+m.toLowerCase();})+']')) return;

    const script=document.createElement('script');
    script.src=SRC;
    script.dataset.approvedOutfitTasks='1';
    script.async=false;
    script.onerror=function(){
      this.remove();
      window.__outfitPictureCalloutsLoaderInstalled=false;
    };
    (document.body||document.head||document.documentElement).appendChild(script);
  }

  if(document.body){
    load();
  }else if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',load,{once:true});
  }else{
    load();
  }
})();

(function(){
  'use strict';
  // Approved outfit rasters already contain their own numbered arrows.
  // Load the rebuilt exercises that ask for item + colour.
  var old=document.querySelector('script[data-approved-outfit-tasks]');
  if(old) old.remove();
  var script=document.createElement('script');
  script.src='assets/outfit-approved-tasks.js?v=20260917-approved10';
  script.dataset.approvedOutfitTasks='1';
  document.body.appendChild(script);
})();

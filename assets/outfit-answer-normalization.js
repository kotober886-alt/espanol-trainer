(function(){
'use strict';
function norm(v){
  return String(v==null?'':v)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}
window.normalizePictureAnswer=norm;
window.normalizeOutfitAnswer=norm;
})();
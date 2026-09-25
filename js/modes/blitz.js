(function(){
  "use strict";
  const COUNTS=[10,15,20], TIMES={flash:3000,spelling:5000,meaning:4000}, ARTICLE=/^(el|la|los|las|un|una|unos|unas)\s+/i;
  const FALLBACK_WORDS=[
    {id:"fallback_agua",word:"el agua",translation:"вода"},
    {id:"fallback_casa",word:"la casa",translation:"дом"},
    {id:"fallback_gato",word:"el gato",translation:"кот"},
    {id:"fallback_perro",word:"el perro",translation:"собака"},
    {id:"fallback_pan",word:"el pan",translation:"хлеб"},
    {id:"fallback_leche",word:"la leche",translation:"молоко"},
    {id:"fallback_queso",word:"el queso",translation:"сыр"},
    {id:"fallback_mesa",word:"la mesa",translation:"стол"},
    {id:"fallback_silla",word:"la silla",translation:"стул"},
    {id:"fallback_puerta",word:"la puerta",translation:"дверь"},
    {id:"fallback_ventana",word:"la ventana",translation:"окно"},
    {id:"fallback_libro",word:"el libro",translation:"книга"},
    {id:"fallback_calle",word:"la calle",translation:"улица"},
    {id:"fallback_coche",word:"el coche",translation:"машина"},
    {id:"fallback_comida",word:"la comida",translation:"еда"},
    {id:"fallback_cafe",word:"el café",translation:"кофе"},
    {id:"fallback_escuela",word:"la escuela",translation:"школа"},
    {id:"fallback_trabajo",word:"el trabajo",translation:"работа"},
    {id:"fallback_tiempo",word:"el tiempo",translation:"время"},
    {id:"fallback_familia",word:"la familia",translation:"семья"}
  ];
  let chooser,game,banner,session,current,phaseTimer=0,transitionTimer=0,lastCount=10;
  const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const key=v=>String(v||"").trim().toLowerCase().replace(/\s+/g," ");
  function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function wordItem(x,topicId,i){
    if(!x||typeof x!=="object")return null;
    const word=String(x.word||x.term||x.es||x.spain||x.base||"").trim();
    const ru=Array.isArray(x.ru)?x.ru[0]:x.ru;
    const translation=String(x.translation||x.tr||ru||x.meaning||x.russian||"").trim();
    const details=String(x.transcription||x.details||x.note||"").trim();
    return word&&translation?{
      id:String(x.id||topicId+"_"+i),
      topicId:String(topicId||x.topicId||x.topic||""),
      word,
      translation,
      details
    }:null;
  }
  function flattenSource(source,target,topicId){
    if(!source)return;
    if(Array.isArray(source)){
      source.forEach((item,index)=>{
        if(item&&typeof item==="object"&&(Array.isArray(item.studyItems)||Array.isArray(item.words)||Array.isArray(item.vocabulary))){
          const nested=item.studyItems||item.words||item.vocabulary;
          flattenSource(nested,target,item.id||item.topicId||topicId||"");
        }else target.push(Object.assign({topicId:topicId||""},item||{}));
      });
      return;
    }
    if(typeof source.getTopics==="function"){
      try{flattenSource(source.getTopics(),target,topicId);}catch(error){console.warn("[Photoflash] getTopics() failed",error);}
      return;
    }
    if(Array.isArray(source.topics)){flattenSource(source.topics,target,topicId);return;}
    if(Array.isArray(source.studyItems)||Array.isArray(source.words)||Array.isArray(source.vocabulary)){
      flattenSource(source.studyItems||source.words||source.vocabulary,target,source.id||source.topicId||topicId||"");
      return;
    }
    if(typeof source==="object")target.push(Object.assign({topicId:topicId||""},source));
  }
  function collectRawPool(){
    const raw=[];
    const sources=[
      window.TopicRegistryFacade,
      window.TopicRegistry,
      window.WORDS,
      window.VOCABULARY,
      window.topics,
      window.TOPICS
    ];
    sources.forEach(source=>flattenSource(source,raw,""));
    return raw;
  }
  function normalizePool(pool){
    const raw=Array.isArray(pool)?pool:collectRawPool();
    const out=[],seen=new Set();
    raw.forEach((x,i)=>{
      const w=wordItem(x,x&&x.topicId,i);
      if(!w)return;
      const k=key(w.word)+"|"+key(w.translation);
      if(seen.has(k))return;
      seen.add(k);
      out.push(w);
    });
    return out;
  }
  function fallbackPool(){return normalizePool(FALLBACK_WORDS);}
  function pickWords(pool,count){const src=normalizePool(pool);return shuffle(src).slice(0,Math.min(count,src.length));}
  function splitArticle(word){const m=String(word).match(ARTICLE);return m?{p:m[0],c:String(word).slice(m[0].length)}:{p:"",c:String(word)};}
  function replaceAt(s,i,n,r){return s.slice(0,i)+r+s.slice(i+n);}
  function mutations(word){
    const {p,c}=splitArticle(word);
    const out=[];
    const originalKey=key(word);
    const add=function(nextCore){
      const core=String(nextCore||"").trim();
      if(!core)return;
      const value=p+core;
      if(key(value)===originalKey||out.some(item=>key(item)===key(value)))return;
      out.push(value);
    };
    const chars=Array.from(c);
    const lower=c.toLowerCase();

    [["b","v"],["v","b"],["c","s"],["c","z"],["s","c"],["s","z"],["z","s"],["z","c"]].forEach(([from,to])=>{
      const pos=lower.indexOf(from);
      if(pos>=0)add(replaceAt(c,pos,1,to));
    });

    [["rr","r"],["ll","l"],["cc","c"]].forEach(([from,to])=>{
      const pos=lower.indexOf(from);
      if(pos>=0)add(replaceAt(c,pos,from.length,to));
    });
    [["r","rr"],["l","ll"],["c","cc"]].forEach(([from,to])=>{
      const pos=lower.indexOf(from);
      if(pos>=0&&lower.slice(pos,pos+2)!==to)add(replaceAt(c,pos,1,to));
    });

    const accentMap={a:"á",e:"é",i:"í",o:"ó",u:"ú","á":"a","é":"e","í":"i","ó":"o","ú":"u"};
    chars.forEach((ch,index)=>{
      const lowerChar=ch.toLowerCase();
      if(accentMap[lowerChar]){
        const replacement=ch===lowerChar?accentMap[lowerChar]:accentMap[lowerChar].toUpperCase();
        add(replaceAt(c,index,ch.length,replacement));
      }
    });

    if(lower.startsWith("h"))add(c.slice(1));
    else add("h"+c);
    for(let index=1;index<chars.length;index++){
      if(chars[index].toLowerCase()==="h"){
        const copy=chars.slice();
        copy.splice(index,1);
        add(copy.join(""));
        break;
      }
    }

    for(let index=0;index<chars.length-1&&out.length<3;index++){
      if(chars[index]!==chars[index+1]){
        const copy=chars.slice();
        [copy[index],copy[index+1]]=[copy[index+1],copy[index]];
        add(copy.join(""));
      }
    }

    const vowels=["a","e","i","o","u"];
    for(let index=0;index<chars.length&&out.length<3;index++){
      const current=chars[index].toLowerCase();
      if(vowels.includes(current)){
        vowels.forEach(vowel=>{
          if(out.length>=3||vowel===current)return;
          const replacement=chars[index]===current?vowel:vowel.toUpperCase();
          add(replaceAt(c,index,chars[index].length,replacement));
        });
      }
    }

    let seed=0;
    while(out.length<3&&seed<12){
      if(chars.length>1){
        const index=seed%(chars.length-1);
        const copy=chars.slice();
        const next=(index+1)%copy.length;
        [copy[index],copy[next]]=[copy[next],copy[index]];
        add(copy.join(""));
      }
      if(out.length<3)add((seed%2===0?"h":"")+c+(seed%3===0?"a":"e"));
      seed++;
    }
    return shuffle(out).slice(0,3);
  }
  function spellingOptions(item){
    const distractors=mutations(item.word);
    while(distractors.length<3){
      const {p,c}=splitArticle(item.word);
      const suffix=["a","e","o"][distractors.length]||"a";
      const candidate=p+(c+suffix);
      if(!distractors.some(value=>key(value)===key(candidate))&&key(candidate)!==key(item.word))distractors.push(candidate);
      else distractors.push(p+"h"+c+suffix);
    }
    return shuffle([item.word].concat(distractors.slice(0,3)));
  }
  function meaningOptions(item){
    const seen=new Set([key(item.translation)]);
    const distractors=[];
    const candidates=(session&&Array.isArray(session.source)?session.source:[]).concat(fallbackPool());
    shuffle(candidates).forEach(candidate=>{
      if(distractors.length>=3||!candidate)return;
      const translation=String(candidate.translation||candidate.tr||(Array.isArray(candidate.ru)?candidate.ru[0]:candidate.ru)||"").trim();
      const candidateKey=key(translation);
      if(!candidateKey||seen.has(candidateKey))return;
      seen.add(candidateKey);
      distractors.push(translation);
    });
    return shuffle([item.translation].concat(distractors.slice(0,3)));
  }
  function clearTimers(){clearTimeout(phaseTimer);clearTimeout(transitionTimer);phaseTimer=transitionTimer=0;}
  function timer(ms,cb){clearTimeout(phaseTimer);phaseTimer=setTimeout(cb,ms);const f=game.querySelector("[data-pf-timer]");if(!f)return;f.style.transition="none";f.style.width="100%";requestAnimationFrame(()=>requestAnimationFrame(()=>{f.style.transition="width "+ms+"ms linear";f.style.width="0%";}));}
  function lock(v){document.documentElement.classList.toggle("photoflash-open",v);document.body.classList.toggle("photoflash-open",v);}
  function meta(label){const d=session.completed.size,t=session.total,m=game.querySelector("[data-pf-meta]"),o=game.querySelector("[data-pf-overall]");if(m)m.textContent="Освоено "+d+" из "+t+" · "+label;if(o)o.style.width=(t?d/t*100:0)+"%";}
  function frame(inner,phase,label){game.innerHTML='<div class="pf-card" data-phase="'+phase+'"><header class="pf-head"><div><b>⚡ Фотовспышка</b><span data-pf-meta></span></div><button data-pf-close aria-label="Закрыть">×</button></header><div class="pf-overall"><i data-pf-overall></i></div><div class="pf-timer"><i data-pf-timer></i></div><main class="pf-stage">'+inner+'</main></div>';meta(label);}
  function flash(){frame('<div class="pf-flash"><em>Вспышка · 3 сек</em><h2 lang="es">'+esc(current.item.word)+'</h2><p>'+esc(current.item.translation)+'</p><button class="pf-primary" data-pf-ready>Готов</button></div>',"flash","Вспышка");timer(TIMES.flash,spelling);}
  function spelling(){clearTimers();const opts=spellingOptions(current.item);frame('<div class="pf-question"><em>Орфография · 5 сек</em><h2>Как пишется?</h2><p>'+esc(current.item.translation)+'</p><div class="pf-options">'+opts.map(x=>'<button data-pf-spelling="'+esc(x)+'" lang="es">'+esc(x)+'</button>').join("")+'</div><div class="pf-feedback" data-pf-feedback></div></div>',"spelling","Орфография");timer(TIMES.spelling,()=>resolveSpelling(null,true));}
  function resolveSpelling(choice,timeout){if(current.spellingResolved)return;current.spellingResolved=true;clearTimeout(phaseTimer);const ok=!timeout&&choice===current.item.word;if(!ok){current.failed=true;session.errors++;}game.querySelectorAll("[data-pf-spelling]").forEach(b=>{b.disabled=true;if(b.dataset.pfSpelling===current.item.word)b.classList.add("good");if(!ok&&choice&&b.dataset.pfSpelling===choice)b.classList.add("bad");});const f=game.querySelector("[data-pf-feedback]");f.textContent=ok?"Верно!":(timeout?"Время! ":"")+"Правильно: "+current.item.word;f.className="pf-feedback "+(ok?"ok":"no");transitionTimer=setTimeout(meaning,ok?330:600);}
  function meaning(){clearTimers();const opts=meaningOptions(current.item);frame('<div class="pf-question"><em>Смысл · 4 сек</em><h2>Какой перевод?</h2><strong lang="es">'+esc(current.item.word)+'</strong><div class="pf-options">'+opts.map(x=>'<button data-pf-meaning="'+esc(x)+'">'+esc(x)+'</button>').join("")+'</div><div class="pf-feedback" data-pf-feedback></div></div>',"meaning","Смысл");timer(TIMES.meaning,()=>resolveMeaning(null,true));}
  function resolveMeaning(choice,timeout){if(current.meaningResolved)return;current.meaningResolved=true;clearTimeout(phaseTimer);const ok=!timeout&&choice===current.item.translation;if(!ok){current.failed=true;session.errors++;}game.querySelectorAll("[data-pf-meaning]").forEach(b=>{b.disabled=true;if(b.dataset.pfMeaning===current.item.translation)b.classList.add("good");if(!ok&&choice&&b.dataset.pfMeaning===choice)b.classList.add("bad");});const f=game.querySelector("[data-pf-feedback]");f.textContent=ok?"Верно!":(timeout?"Время! ":"")+"Правильно: "+current.item.translation;f.className="pf-feedback "+(ok?"ok":"no");transitionTimer=setTimeout(finishAttempt,ok?330:600);}
  function finishAttempt(){clearTimers();session.attempts++;if(current.failed){session.retries++;session.queue.splice(Math.min(2,session.queue.length),0,{item:current.item,failed:false,spellingResolved:false,meaningResolved:false});}else session.completed.add(current.item.id+"|"+current.item.word);current=null;next();}
  function next(){
    if(!session||!Array.isArray(session.queue)){
      console.error("[Photoflash] Queue is unavailable!");
      return;
    }
    if(!session.queue.length){
      if(session.attempts===0&&session.completed.size===0){
        console.error("[Photoflash] Words pool is empty!");
        alert("Не удалось загрузить слова для спринта. Проверьте выбор темы.");
        close();
        return;
      }
      return results();
    }
    current=session.queue.shift();
    current.failed=false;
    current.spellingResolved=current.meaningResolved=false;
    flash();
  }
  function results(){clearTimers();const secs=Math.max(1,Math.round((Date.now()-session.startedAt)/1000));frame('<div class="pf-results"><div>📸</div><em>Спринт завершён</em><h2>'+session.total+' слов — чисто!</h2><p>Все слова сданы без ошибок в финальной попытке.</p><section><span><b>'+session.total+'</b>слов</span><span><b>'+session.retries+'</b>повторов</span><span><b>'+session.errors+'</b>ошибок / таймаутов</span><span><b>'+secs+'с</b>время</span></section><footer><button class="pf-secondary" data-pf-exit>К словам</button><button class="pf-primary" data-pf-restart>Ещё раз</button></footer></div>',"results","Готово");const t=game.querySelector("[data-pf-timer]"),o=game.querySelector("[data-pf-overall]");if(t)t.style.width="100%";if(o)o.style.width="100%";window.dispatchEvent(new CustomEvent("photoflash:finish",{detail:{count:session.total,retries:session.retries,errors:session.errors,seconds:secs}}));}
  function close(){clearTimers();current=session=null;game.hidden=true;lock(false);syncBanner();window.dispatchEvent(new CustomEvent("photoflash:close"));}
  function start(count,pool){
    if(Array.isArray(count)){pool=count;count=lastCount;}
    count=COUNTS.includes(Number(count))?Number(count):10;
    let source=normalizePool(pool);
    if(!source.length){
      console.warn("[Photoflash] TopicRegistry is not ready; using fallback vocabulary.");
      source=fallbackPool();
    }
    const picked=pickWords(source,count);
    const queue=picked.map(item=>({item,failed:false,spellingResolved:false,meaningResolved:false}));
    if(!queue||queue.length===0){
      console.error("[Photoflash] Words pool is empty!");
      alert("Не удалось загрузить слова для спринта. Проверьте выбор темы.");
      return false;
    }
    lastCount=queue.length;
    if(chooser.open)chooser.close();
    session={source,total:queue.length,queue,completed:new Set(),attempts:0,retries:0,errors:0,startedAt:Date.now()};
    game.hidden=false;
    lock(true);
    syncBanner();
    window.dispatchEvent(new CustomEvent("photoflash:start",{detail:{count:queue.length}}));
    next();
    return true;
  }
  function openChooser(){chooser.querySelectorAll("[data-pf-count]").forEach(b=>b.classList.toggle("active",Number(b.dataset.pfCount)===lastCount));chooser.querySelector("[data-pf-selected]").value=String(COUNTS.includes(lastCount)?lastCount:10);chooser.showModal();}
  function styles(){if(document.getElementById("pfStyles"))return;const s=document.createElement("style");s.id="pfStyles";s.textContent=[
    '.photoflash-open{overflow:hidden!important}.photoflash-banner{grid-column:1/-1;position:relative;overflow:visible;display:block;min-height:156px;padding:22px 210px 22px 26px;border:1px solid rgba(255,255,255,.95);border-radius:26px;background:linear-gradient(135deg,#3d348b 0%,#6c5ce7 55%,#ff7675 85%,#f0932b 100%);color:#fff;box-shadow:0 18px 45px rgba(35,28,89,.18);cursor:pointer}.photoflash-banner[hidden]{display:none!important}.photoflash-banner-copy{position:relative;min-width:0;z-index:2}.photoflash-badge,.pf-card em{display:inline-flex;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,.16);font-size:12px;font-weight:850;font-style:normal}.photoflash-banner h2{margin:0;font-size:clamp(25px,3.3vw,38px);letter-spacing:-.04em}.photoflash-banner p{max-width:690px;margin:8px 0 16px;color:rgba(255,255,255,.88);font-size:14px}.photoflash-banner-cta{min-height:43px;padding:10px 15px;border:0;border-radius:13px;background:#ffd447;color:#292044;font-weight:900}.photoflash-banner-art{position:absolute;right:20px;bottom:-10px;width:180px;height:180px;display:flex;align-items:flex-end;justify-content:center;z-index:1;pointer-events:none}.photoflash-banner-art img{display:block;height:180px;max-height:180px;width:auto;object-fit:contain;filter:drop-shadow(0 10px 20px rgba(0,0,0,.25))}',
    '.pf-dialog{width:min(520px,calc(100vw - 28px));border:0;border-radius:24px;padding:0;color:#17153b;box-shadow:0 28px 80px rgba(23,21,59,.28)}.pf-dialog::backdrop{background:rgba(20,17,46,.54);backdrop-filter:blur(5px)}.pf-dialog>div{padding:24px}.pf-dialog header{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;margin:0}.pf-dialog h2{margin:3px 0 4px;font-size:27px}.pf-dialog p{margin:0;color:#6d6a86}.pf-close,.pf-head>button{width:42px;height:42px;border:0;border-radius:12px;background:#f2f0f8;color:#514b68;font-size:27px}.pf-counts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0 18px}.pf-counts button{min-height:74px;border:2px solid #e5e1ef;border-radius:16px;background:#fff;font-weight:850}.pf-counts button b{display:block;font-size:25px}.pf-counts button span{display:block;color:#7a748f;font-size:11px}.pf-counts button.active{border-color:#6253d9;background:#f1efff;color:#4b3dbe}.pf-actions{display:flex;justify-content:flex-end}',
    '.pf-game{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:18px;background:radial-gradient(circle at 20% 10%,rgba(255,212,71,.23),transparent 25rem),linear-gradient(145deg,#f7f5fc,#efebff)}.pf-game[hidden]{display:none!important}.pf-card{width:min(760px,100%);min-height:min(650px,calc(100vh - 36px));display:flex;flex-direction:column;overflow:hidden;border-radius:30px;background:#fff;box-shadow:0 24px 75px rgba(35,28,89,.17)}.pf-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:18px 20px 14px;margin:0}.pf-head b{display:block;color:#6253d9;font-size:12px;text-transform:uppercase;letter-spacing:.09em}.pf-head span{display:block;color:#77718d;font-size:12px;font-weight:750}.pf-overall{height:6px;margin:0 20px 10px;overflow:hidden;border-radius:999px;background:#eeeaf7}.pf-overall i{display:block;width:0;height:100%;background:linear-gradient(90deg,#6253d9,#ff786c);transition:width .3s}.pf-timer{height:8px;overflow:hidden;background:#f0edf7}.pf-timer i{display:block;width:100%;height:100%;background:linear-gradient(90deg,#ffd447,#ff786c)}.pf-stage{flex:1;display:grid;place-items:center;padding:clamp(28px,6vw,60px);text-align:center}.pf-stage em{background:#f1efff;color:#5a4cc8}.pf-primary,.pf-secondary{min-height:48px;padding:12px 18px;border-radius:14px;font-weight:900}.pf-primary{border:0;background:#6253d9;color:#fff}.pf-secondary{border:1px solid #e2deec;background:#fff;color:#514b68}',
    '.pf-flash h2{margin:20px 0 8px;font-size:clamp(46px,8vw,82px);line-height:1;letter-spacing:-.055em}.pf-flash p{margin:0 0 26px;color:#6d6a86;font-size:clamp(21px,3vw,30px);font-weight:750}.pf-question{width:min(620px,100%)}.pf-question h2{margin:16px 0 7px;font-size:clamp(30px,5vw,46px);letter-spacing:-.04em}.pf-question>p{margin:0 0 22px;color:#77718d;font-size:17px;font-weight:700}.pf-question>strong{display:block;margin:8px 0 24px;color:#4a4088;font-size:clamp(28px,4.5vw,42px)}.pf-options{display:grid;grid-template-columns:1fr 1fr;gap:10px}.pf-options button{min-height:64px;padding:13px 15px;border:2px solid #e6e2ef;border-radius:16px;background:#fff;color:#17153b;font-weight:850;overflow-wrap:anywhere}.pf-options button.good{border-color:#62bd92;background:#eaf8f1;color:#176d4e}.pf-options button.bad{border-color:#e88f9b;background:#fff0f2;color:#a53643}.pf-options button:disabled{opacity:1}.pf-feedback{min-height:28px;margin-top:16px;font-weight:850}.pf-feedback.ok{color:#187052}.pf-feedback.no{color:#a53643}.pf-results>div:first-child{font-size:58px}.pf-results h2{margin:14px 0 6px;font-size:clamp(30px,5vw,46px)}.pf-results>p{color:#6d6a86}.pf-results section{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin:20px 0}.pf-results section span{padding:13px 8px;border-radius:14px;background:#f7f5fc;color:#77718d;font-size:11px;font-weight:750}.pf-results section b{display:block;color:#17153b;font-size:22px}.pf-results footer{display:flex;justify-content:center;gap:10px;margin-top:24px}',
    '@media(max-width:720px){.photoflash-banner{min-height:154px;padding:18px 170px 18px 18px}.photoflash-banner-art{right:12px;bottom:-8px;width:160px;height:160px}.photoflash-banner-art img{height:160px;max-height:160px}.pf-game{padding:0}.pf-card{min-height:100vh;border-radius:0}.pf-stage{padding:28px 18px 34px}.pf-results section{grid-template-columns:repeat(2,1fr)}}@media(max-width:460px){.photoflash-banner{min-height:176px;padding:18px 118px 18px 18px}.photoflash-banner-art{right:4px;bottom:-8px;width:132px;height:150px}.photoflash-banner-art img{height:150px;max-height:150px}.photoflash-banner p{font-size:13px}.pf-dialog>div{padding:20px}}'
  ].join("");document.head.appendChild(s);}
  function ui(){banner=document.getElementById("photoflashBanner");chooser=document.createElement("dialog");chooser.className="pf-dialog";chooser.innerHTML='<div><header><div><b>⚡ Новый режим</b><h2>Фотовспышка</h2><p>Сколько слов взять в этот спринт?</p></div><button class="pf-close" data-pf-dialog-close aria-label="Закрыть">×</button></header><div class="pf-counts">'+COUNTS.map(n=>'<button type="button" data-pf-count="'+n+'"><b>'+n+'</b><span>слов</span></button>').join("")+'</div><input type="hidden" data-pf-selected value="10"><div class="pf-actions"><button class="pf-primary" data-pf-go>Поехали!</button></div></div>';document.body.appendChild(chooser);game=document.createElement("section");game.className="pf-game";game.hidden=true;document.body.appendChild(game);}
  function bind(){if(banner){banner.addEventListener("click",openChooser);banner.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openChooser();}});}chooser.addEventListener("click",e=>{const c=e.target.closest("[data-pf-count]");if(c){chooser.querySelector("[data-pf-selected]").value=c.dataset.pfCount;chooser.querySelectorAll("[data-pf-count]").forEach(b=>b.classList.toggle("active",b===c));return;}if(e.target.closest("[data-pf-dialog-close]"))return chooser.close();if(e.target.closest("[data-pf-go]"))start(Number(chooser.querySelector("[data-pf-selected]").value));});game.addEventListener("click",e=>{if(e.target.closest("[data-pf-close],[data-pf-exit]"))return close();if(e.target.closest("[data-pf-ready]"))return spelling();const s=e.target.closest("[data-pf-spelling]");if(s)return resolveSpelling(s.dataset.pfSpelling,false);const m=e.target.closest("[data-pf-meaning]");if(m)return resolveMeaning(m.dataset.pfMeaning,false);if(e.target.closest("[data-pf-restart]"))start(lastCount);});window.addEventListener("photoflash:start-request",e=>start(e.detail&&e.detail.count,e.detail&&e.detail.pool));}
  function wordsActive(){const d=document.getElementById("headerNavWords"),m=document.getElementById("navWords"),l=document.getElementById("trainerLayout");return !!l&&!l.hidden&&((d&&d.classList.contains("is-active"))||(m&&m.classList.contains("active")));}
  function syncBanner(){if(banner)banner.hidden=!wordsActive()||!!(game&&!game.hidden);}
  function observe(){const nodes=[document.getElementById("headerNavWords"),document.getElementById("navWords"),document.getElementById("trainerLayout")].filter(Boolean),o=new MutationObserver(syncBanner);nodes.forEach(n=>o.observe(n,{attributes:true,attributeFilter:["class","hidden"]}));["headerNavWords","headerNavHome","headerNavPractice","headerNavMistakes","navWords","navHome","navPractice","navMistakes","learnWordsBtn","chooseTopicBtn","mistakesWordsBtn"].forEach(id=>{const n=document.getElementById(id);if(n)n.addEventListener("click",()=>setTimeout(syncBanner,0));});}
  function init(){styles();ui();bind();observe();syncBanner();}
  window.startPhotoflash=start;window.PhotoflashBlitz=Object.freeze({version:"20260925-photoflash-four-options",start,close,collectPool:()=>normalizePool(),normalizePool,pickWords});
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
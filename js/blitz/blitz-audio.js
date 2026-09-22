/**
 * Tiny Web Audio sound kit for Blitz mode.
 * No external audio files: every cue is synthesized on demand.
 */
export const BLITZ_SOUND_KEY = "blitz_sound_enabled";

let audioContext=null;

export function isBlitzSoundEnabled(){
  try {
    return localStorage.getItem(BLITZ_SOUND_KEY)!=="0";
  } catch(error){
    return true;
  }
}

export function setBlitzSoundEnabled(enabled){
  const value=Boolean(enabled);
  try { localStorage.setItem(BLITZ_SOUND_KEY,value?"1":"0"); } catch(error) {}
  if(value) primeBlitzAudio();
  return value;
}

function context(){
  if(typeof window==="undefined") return null;
  const AudioCtx=window.AudioContext || window.webkitAudioContext;
  if(!AudioCtx) return null;
  if(!audioContext) audioContext=new AudioCtx();
  if(audioContext.state==="suspended"){
    const resume=audioContext.resume();
    if(resume && typeof resume.catch==="function") resume.catch(function(){});
  }
  return audioContext;
}

export function primeBlitzAudio(){
  if(!isBlitzSoundEnabled()) return null;
  return context();
}

function tone(frequency,delay,duration,volume,type,finishFrequency){
  if(!isBlitzSoundEnabled()) return;
  const ctx=context();
  if(!ctx) return;

  const start=ctx.currentTime+Math.max(0,delay||0);
  const end=start+Math.max(.02,duration||.08);
  const oscillator=ctx.createOscillator();
  const gain=ctx.createGain();

  oscillator.type=type || "sine";
  oscillator.frequency.setValueAtTime(frequency,start);
  if(finishFrequency){
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20,finishFrequency),end);
  }

  gain.gain.setValueAtTime(.0001,start);
  gain.gain.exponentialRampToValueAtTime(Math.max(.001,volume||.05),start+.006);
  gain.gain.exponentialRampToValueAtTime(.0001,end);

  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(end+.01);
}

export function playSuccessSound(){
  // Bright major third: short enough to feel like a crisp arcade "ding".
  tone(784,0,.065,.075,"sine");
  tone(988,.038,.062,.06,"sine");
}

export function playErrorSound(){
  // Soft low thud: deliberately quiet and non-punishing.
  tone(170,0,.145,.055,"triangle",125);
}

export function playTickSound(){
  // Fast downward pitch makes a compact wooden timer click.
  tone(720,0,.038,.045,"triangle",210);
}

export function playFinishSound(){
  // Small fanfare: rising triad, then a warm final chord.
  tone(523,0,.14,.055,"triangle");
  tone(659,.075,.14,.05,"triangle");
  tone(784,.15,.18,.05,"triangle");
  tone(523,.25,.28,.042,"sine");
  tone(659,.25,.28,.04,"sine");
  tone(784,.25,.28,.038,"sine");
}

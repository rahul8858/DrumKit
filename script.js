function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
window.addEventListener('keydown',function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//stop from them running together
    audio.currentTime=0;//rewind
    // key.classList.add('playing');
    audio.play();
});
/*function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys=document.querySelectorAll('key');
keys.forEach(key => addEventListener("transitionend",removeTransition));*/
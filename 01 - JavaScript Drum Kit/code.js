const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);

function playSound(e){
    // const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const key = document.querySelector('div[data-key="'+e.keyCode+'"]');
    const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
    if(!audio){
        return
    }
    // console.log(key);
    // console.log(audio);

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
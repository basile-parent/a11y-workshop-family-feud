let isSoundActive = true;
function playSound(audioId) {
    if (!isSoundActive) {
        return;
    }
    let audioElement = document.getElementById(audioId);
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
}

function toggleSoundEffect() {
    isSoundActive = !isSoundActive;
    document.getElementById("stop-sounds").innerText = isSoundActive ? "Arrêter les sons" : "Activer les sons";
    document.getElementById("stop-sounds").setAttribute("aria-pressed" ,isSoundActive + "");
}
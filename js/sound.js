function playSound(audioId) {
    let audioElement = document.getElementById(audioId);
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
}
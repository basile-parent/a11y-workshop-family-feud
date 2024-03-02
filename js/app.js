const STOP_ANIMATION_CLASSNAME = "no-animation";

function toggleAnimation() {
    const bodyElement = document.querySelector("body");
    const stopButton = document.getElementById("stop-animations");

    bodyElement.classList.toggle(STOP_ANIMATION_CLASSNAME);

    if (bodyElement.classList.contains(STOP_ANIMATION_CLASSNAME)) {
        stopButton.innerText = "Relancer les animations";
    } else {
        stopButton.innerText = "Arrêter les animations";
    }

}

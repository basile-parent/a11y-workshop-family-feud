const STOP_ANIMATION_CLASSNAME = "no-animation";

function toggleAnimation() {
    const bodyElement = document.querySelector("body");
    const stopButton = document.getElementById("stop-animations");

    bodyElement.classList.toggle(STOP_ANIMATION_CLASSNAME);

    if (bodyElement.classList.contains(STOP_ANIMATION_CLASSNAME)) {
        stopButton.innerText = "Relancer les animations";
        stopButton.setAttribute("aria-pressed" ,"false");
    } else {
        stopButton.innerText = "Arrêter les animations";
        stopButton.setAttribute("aria-pressed" ,"true");
    }
}

function goToContent() {
    document.getElementById("board").focus()
}

const keyboardNumberMapping = {
    "&": 1,
    "é": 2,
    "\"": 3,
    "'": 4,
    "(": 5,
    "-": 6,
    "è": 7,
    "_": 8,
    "ç": 9,
    "à": 0,
}
window.addEventListener("keydown", (e) => {
    const keyboardKey = e.key?.toLowerCase();
    if (!keyboardKey) {
        return;
    }
    if (keyboardKey?.toLowerCase() === "x") {
        addError()
        return;
    }
    const answerBoxIndex = keyboardNumberMapping[keyboardKey] || keyboardKey
    if (!isNaN(answerBoxIndex)) {
        flipCard(answerBoxIndex)
        return;
    }
})
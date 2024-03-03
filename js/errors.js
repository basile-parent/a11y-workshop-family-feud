let errorCount = 0;
let timeoutRef = null;
const HIDDEN_CLASSNAME = "hidden";
function addError() {
    if (timeoutRef) {
        clearTimeout(timeoutRef);
        timeoutRef = null;
    }

    errorCount++;
    const wrapperElement = document.getElementById("errors-wrapper");
    wrapperElement.innerHTML += renderError();

    wrapperElement.classList.remove(HIDDEN_CLASSNAME);

    playSound("wrong-answer-sound");

    document.getElementById("errors-live").innerText = `Vous avez fait ${ errorCount } erreur${ errorCount > 1 ? "s" : ""}`;

    timeoutRef = setTimeout(() => {
        console.log("timeout")
        wrapperElement.classList.add(HIDDEN_CLASSNAME);
        timeoutRef = null;
    }, 2000)
}

function renderError() {
    return `<div class="error-box">X</div>`
}
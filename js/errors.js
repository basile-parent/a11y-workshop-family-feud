let errorCount = 0;
let timeoutRef = null;
const HIDDEN_CLASSNAME = "hidden";
function addError() {
    if (timeoutRef) {
        clearTimeout(timeoutRef);
        timeoutRef = null;
    }

    errorCount++;
    document.getElementById("errors-wrapper").innerHTML += renderError();

    const dialogElement = document.getElementById("errors-dialog")
    dialogElement.classList.remove(HIDDEN_CLASSNAME);

    playSound("wrong-answer-sound");

    document.getElementById("errors-live").innerText = `Vous avez fait ${ errorCount } erreur${ errorCount > 1 ? "s" : ""}`;

    timeoutRef = setTimeout(() => {
        dialogElement.classList.add(HIDDEN_CLASSNAME);
        timeoutRef = null;
    }, 3000)
}

function renderError() {
    return `<div class="error-box">X</div>`
}
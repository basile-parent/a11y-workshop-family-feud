const MAX_ANSWERS = 8
const ANSWERS = [
    "Texte 1",
    "Texte 2",
    "Texte 3",
    "Texte 4",
    "Texte 5",
    "Texte 6",
    "Texte 7",
    "Texte 8",
]
const REVEAL_CSS_CLASS = "revealed"

function initButtons() {
    const board = document.getElementById("board")
    for (let i = 0; i < MAX_ANSWERS; i++) {
        if (!ANSWERS[i]) {
            break;
        }

        const index = i + 1
        board.innerHTML += AnswerBox(index, ANSWERS[i])
    }
}

const AnswerBox = (index, answer) => `
    <li class="item">
        <div id="flip-card-${index}" class="flip-card">
          <div class="flip-card-inner">
            <button class="flip-card-front" 
                    onClick="flipCard(${index})" 
                    aria-label="Réponse ${index}"
                    aria-hidden="false"
                    aria-pressed="false"
                    >
                <span>${index}</span>
            </button>
            <button class="flip-card-back" 
                    onClick="flipCard(${index})" 
                    aria-hidden="true" 
                    aria-pressed="true"
                    disabled="disabled"
            >
              ${answer}
            </button>
          </div>
        </div>
    </li>
`

const flipCard = (index) => {
    document.getElementById(`flip-card-${index}`).classList.toggle(REVEAL_CSS_CLASS);

    const isFlipped = document.getElementById(`flip-card-${index}`).classList.contains(REVEAL_CSS_CLASS);

    const frontElement = document.querySelector(`#flip-card-${index} .flip-card-front`);
    const backElement = document.querySelector(`#flip-card-${index} .flip-card-back`);
    frontElement.setAttribute("aria-pressed", isFlipped + "");
    frontElement.setAttribute("aria-hidden", isFlipped + "");
    backElement.setAttribute("aria-hidden", !isFlipped + "");

    if (isFlipped) {
        playSound("correct-answer-sound");
        backElement.removeAttribute("disabled");
        backElement.focus();
        frontElement.setAttribute("disabled", "disabled");
    } else {
        frontElement.removeAttribute("disabled");
        frontElement.focus();
        backElement.setAttribute("disabled", "disabled");
    }
}

initButtons()
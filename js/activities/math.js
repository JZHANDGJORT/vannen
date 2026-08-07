let currentMathProblem = null;


function startMathActivity() {

    addMessage(
        "Jag hjälper gärna till! ➕ Vad vill du räkna på idag?",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="startPlusActivity()">
            ➕ Plus
        </button>

        <button onclick="startMinusActivity()">
            ➖ Minus
        </button>

        <button onclick="startMultiplyActivity()">
            ✖️ Gånger
        </button>

        <button onclick="startDivideActivity()">
            ➗ Dela
        </button>

        <button onclick="startMathPuzzleActivity()">
            🧠 Mattekluring
        </button>

        <button onclick="startEverydayMathActivity()">
            🌿 Matte i vardagen
        </button>

        <button onclick="startHomeworkActivity()">
            📝 Jag har en läxa
        </button>

        <button onclick="showMainMenu()">
            🦦 Inte idag
        </button>

    `;

}

function continueMathActivity(type) {

    if (type === "plus") {

        startPlusActivity();

        return;

    }


    if (type === "minus") {

        startMinusActivity();

        return;

    }


    if (type === "multiply") {

        startMultiplyActivity();

        return;

    }


    if (type === "divide") {

        startDivideActivity();

        return;

    }


    if (type === "puzzle") {

        startMathPuzzleActivity();

        return;

    }


    if (type === "everyday") {

        startEverydayMathActivity();

        return;

    }


    if (type === "homework") {

        startHomeworkActivity();

        return;

    }

}

function startPlusActivity() {

    const problems = [

        {
            question: "Vad blir 3 + 2?",
            answer: 5,
            explanation:
                "Vi börjar med 3 och lägger till 2 till. Då får vi 4, 5. Svaret är 5! 🌟"
        },

        {
            question: "Vad blir 7 + 4?",
            answer: 11,
            explanation:
                "7 + 4 betyder att vi börjar på 7 och räknar fyra steg framåt: 8, 9, 10, 11. Svaret är 11! 🌟"
        },

        {
            question: "Vad blir 6 + 8?",
            answer: 14,
            explanation:
                "6 + 8 blir 14. Vi kan tänka 6 och lägga till 8 steg framåt. Bra jobbat! 🌿"
        },

        {
            question: "Vad blir 12 + 5?",
            answer: 17,
            explanation:
                "12 + 5 blir 17. Vi lägger ihop båda talen och får svaret 17! 💚"
        }

    ];


    const problem =
        problems[
            Math.floor(
                Math.random() * problems.length
            )
        ];


    currentMathProblem = problem;

    currentActivity = {

    type: "plus",

    badgeType: "rakna",

    completed:

        "Bra jobbat! ➕ Du löste en pluskluring tillsammans med mig.",

    skipped:

        "Det gör inget. Vi kan prova igen en annan gång. 💚"

};



    addMessage(
        "➕ " + problem.question,
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="solveMathProblem()">
            🤔 Jag tror jag vet svaret!
        </button>

        <button onclick="helpMathProblem()">
            🌿 Jag behöver hjälp
        </button>

    `;

}


function solveMathProblem() {

    addMessage(
        "Vad tror du svaret blir? 😊",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="showMathAnswer()">
            ✨ Visa svaret
        </button>

    `;

}

function helpMathProblem() {

    addMessage(
        currentMathProblem.explanation,
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="simpleActivityDone()">
            ✅ Jag klarade det!
        </button>

    `;

}

function showMathAnswer() {

    addMessage(
        "Svaret är " + currentMathProblem.answer + "! 🌟 Bra kämpat!",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>

        <button onclick="startPlusActivity()">
            ➕ En till!
        </button>

    `;

}

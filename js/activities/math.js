let currentMathProblem = null;


function startMathActivity() {

    const mathActivities = [

        {
            type: "plus",
            message:
                "➕ Vad roligt! Ska vi räkna tillsammans en stund? Jag har en liten plusutmaning till dig."
        },

        {
            type: "minus",
            message:
                "➖ Jag har en liten minuskluring! Ska vi lösa den tillsammans?"
        },

        {
            type: "multiply",
            message:
                "✖️ Nu blir det lite klurigare! Ska vi träna på gånger tillsammans?"
        },

        {
            type: "divide",
            message:
                "➗ Jag har en liten delningskluring. Ska vi försöka tillsammans?"
        },

        {
            type: "puzzle",
            message:
                "🧠 Jag har en liten mattegåta! Vill du prova?"
        },

        {
            type: "everyday",
            message:
                "🌿 Ska vi upptäcka matte runt omkring oss? Jag har en liten vardagsutmaning."
        },

        {
            type: "homework",
            message:
                "📝 Har du en läxa som känns svår? Jag kan hjälpa dig att komma igång."
        }

    ];


    const activity =
        mathActivities[
            Math.floor(
                Math.random() * mathActivities.length
            )
        ];


    addMessage(
        activity.message,
        "otis"
    );


    currentActivity = {
        type: activity.type
    };


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="continueMathActivity('${activity.type}')">
            💚 Ja, det gör vi!
        </button>

        <button onclick="startMathActivity()">
            ✨ En annan idé
        </button>

        <button onclick="showActivity()">
            ⬅️ Tillbaka
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


    addMessage(
        "➕ " + problem.question,
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="solveMathProblem()">
            ✅ Jag kan svaret!
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

        <button onclick="showMathAnswer(true)">
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

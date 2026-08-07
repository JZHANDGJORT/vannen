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



function startPlusActivity() {

    const problem = generatePlusProblem();


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

function generatePlusProblem() {

    let number1 =
        Math.floor(Math.random() * 21);

    let number2 =
        Math.floor(Math.random() * 21);


    // Undvik att få 0 + 0
    while (number1 === 0 && number2 === 0) {

        number1 =
            Math.floor(Math.random() * 21);

        number2 =
            Math.floor(Math.random() * 21);

    }


    return {

        question:
            `Vad blir ${number1} + ${number2}?`,

        answer:
            number1 + number2,

        explanation:
            `${number1} + ${number2} blir ${number1 + number2}. Vi räknar ihop båda talen och får svaret ${number1 + number2}! 🌟`

    };

}

function startMinusActivity() {

    const problem = generateMinusProblem();


    currentMathProblem = problem;


    currentActivity = {

        type: "minus",

        badgeType: "rakna",

        completed:
            "Bra jobbat! ➖ Du löste en minuskluring tillsammans med mig.",

        skipped:
            "Det gör inget. Vi kan prova igen en annan gång. 💚"

    };


    addMessage(
        "➖ " + problem.question,
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

function generateMinusProblem() {

    let number1 =
        Math.floor(Math.random() * 21);

    let number2 =
        Math.floor(Math.random() * 21);


    // Se till att svaret inte blir negativt
    if (number2 > number1) {

        let temp = number1;
        number1 = number2;
        number2 = temp;

    }


    return {

        question:
            `Vad blir ${number1} - ${number2}?`,

        answer:
            number1 - number2,

        explanation:
            `${number1} - ${number2} betyder att vi tar bort ${number2} från ${number1}. Då får vi ${number1 - number2}! 🌟`

    };

}

function startDivideActivity() {

    const problem = generateDivideProblem();


    currentMathProblem = problem;


    currentActivity = {

        type: "divide",

        badgeType: "rakna",

        completed:
            "Bra jobbat! ➗ Du löste en delakluring tillsammans med mig.",

        skipped:
            "Det gör inget. Vi kan prova igen en annan gång. 💚"

    };


    addMessage(
        "➗ " + problem.question,
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

function generateDivideProblem() {

    const answer =
        Math.floor(Math.random() * 10) + 1;

    const divisor =
        Math.floor(Math.random() * 10) + 1;

    const number =
        answer * divisor;


    return {

        question:
            `Vad blir ${number} delat med ${divisor}?`,

        answer:
            answer,

        explanation:
            `${number} delat med ${divisor} betyder att vi delar ${number} i ${divisor} lika stora delar. Då får vi ${answer} i varje del! 🌟`

    };

}

function startMultiplyActivity() {

    const problem = generateMultiplyProblem();


    currentMathProblem = problem;


    currentActivity = {

        type: "multiply",

        badgeType: "rakna",

        completed:
            "Bra jobbat! ✖️ Du löste en gångkluring tillsammans med mig.",

        skipped:
            "Det gör inget. Vi kan prova igen en annan gång. 💚"

    };


    addMessage(
        "✖️ " + problem.question,
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

function generateMultiplyProblem() {

    const number1 =
        Math.floor(Math.random() * 10) + 1;

    const number2 =
        Math.floor(Math.random() * 10) + 1;


    return {

        question:
            `Vad blir ${number1} gånger ${number2}?`,

        answer:
            number1 * number2,

        explanation:
            `${number1} gånger ${number2} betyder ${number1} grupper med ${number2} i varje grupp. Om vi räknar alla tillsammans blir det ${number1 * number2}! 🌟`

    };

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
        ✅ Vi gjorde det!
    </button>

    <button onclick="startSameMathActivity()">
        ➕ En till!
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

        <button onclick="startSameMathActivity()">
            ➕ En till!
        </button>

    `;

}

function startSameMathActivity() {

    if (currentActivity.type === "plus") {
        startPlusActivity();
    }

    else if (currentActivity.type === "minus") {
        startMinusActivity();
    }

    else if (currentActivity.type === "multiply") {
        startMultiplyActivity();
    }

    else if (currentActivity.type === "divide") {
        startDivideActivity();
    }

    else if (currentActivity.type === "mathPuzzle") {
        startMathPuzzleActivity();
    }

    else if (currentActivity.type === "everydayMath") {
        startEverydayMathActivity();
    }

    else if (currentActivity.type === "homework") {
        startHomeworkActivity();
    }

}

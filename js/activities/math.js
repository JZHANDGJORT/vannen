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

function startMathPuzzleActivity() {

    const problem = generateMathPuzzle();

    currentMathProblem = problem;

    currentActivity = {

        type: "mathPuzzle",

        badgeType: "rakna",

        completed:
            "Bra jobbat! 🧠 Du klurade tillsammans med mig.",

        skipped:
            "Det gör inget. Vi kan klura en annan gång. 💚"

    };

    addMessage(
        "🧠 " + problem.question,
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

function generateMathPuzzle() {

    const puzzles = [

        {
            question:
                "Otis har 3 stenar. Han hittar 4 stenar till. Hur många stenar har han nu?",

            answer:
                7,

            explanation:
                "Otis hade 3 stenar och hittade 4 till. 3 + 4 blir 7. 🪨🌟"
        },


        {
            question:
                "Otis har 8 blåbär. Han äter 3 av dem. Hur många blåbär har han kvar?",

            answer:
                5,

            explanation:
                "Otis hade 8 blåbär och åt 3. 8 - 3 blir 5. 🫐🌟"
        },


        {
            question:
                "Otis hittar 2 högar med 4 stenar i varje hög. Hur många stenar har han tillsammans?",

            answer:
                8,

            explanation:
                "Det finns 2 högar med 4 stenar i varje. 4 + 4 blir 8. 🪨🌟"
        },


        {
            question:
                "Otis har 10 äpplen och vill dela dem lika mellan 2 kompisar. Hur många äpplen får varje kompis?",

            answer:
                5,

            explanation:
                "10 äpplen delat på 2 blir 5. Varje kompis får 5 äpplen. 🍎🌟"
        },


        {
            question:
                "Otis har 5 stenar. Han hittar 5 till. Sedan ger han 2 stenar till en kompis. Hur många stenar har Otis kvar?",

            answer:
                8,

            explanation:
                "Först får Otis 5 + 5, alltså 10 stenar. Sedan ger han bort 2. 10 - 2 blir 8. 🪨🌟"
        },


        {
            question:
                "Det sitter 4 fåglar i ett träd. 3 fåglar till flyger dit. Hur många fåglar sitter i trädet då?",

            answer:
                7,

            explanation:
                "Det satt 4 fåglar där och 3 till flög dit. 4 + 3 blir 7. 🐦🌟"
        }

    ];


    return puzzles[
        Math.floor(
            Math.random() * puzzles.length
        )
    ];

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

    else if (currentActivity.type === "homework") {
        startHomeworkActivity();
    }

}

function startHomeworkActivity() {

    currentActivity = {

        type: "homework",

        badgeType: "rakne",

        completed:
            "Bra jobbat! Du tog dig tid att jobba med din läxa idag. 🌟",

        skipped:
            "Det är helt okej. Ibland hinner man inte idag. Vi kan prova igen en annan gång. 💚"

    };


    addMessage(
        "Klart jag kan sitta här med dig! 🦦 Du behöver inte göra läxan ensam. Vi tar en sak i taget. 💚",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>

        <button onclick="simpleActivitySkipped()">
            🕐 Vi hann inte idag
        </button>

    `;

}


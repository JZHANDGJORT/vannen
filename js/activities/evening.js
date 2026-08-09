// ========================================
// KVÄLL MED OTIS 🌙
// ========================================
// ----------------------------------------
// Frågor
// ----------------------------------------
const eveningQuestions = [
    {
        id: "good",
        question:
            "Vad gjorde du bra idag? 🌟",
        response:
            "Det låter fint. 💚"
    },
    {
        id: "happy",
        question:
            "Var det något idag som gjorde dig glad? 💚",
        response:
            "Vad mysigt att höra. 💚"
    },
    {
        id: "tried",
        question:
            "Var det något som var svårt idag, " +
            "men som du försökte med ändå? 🌿",
        response:
            "Det är fint att du försökte, även när det var svårt. 💚"
    },
    {
        id: "help",
        question:
            "Är det något du skulle vilja ha hjälp med " +
            "eller prata med någon om? 🤝",
        response:
            "Det är bra att berätta när man behöver hjälp. 💚"
    },
    {
        id: "tomorrow",
        question:
            "Finns det något du ser fram emot imorgon? 🌙",
        response:
            "Det låter som något fint att ta med sig till imorgon. 💚"
    }
];
// ----------------------------------------
// Starta Kväll med Otis
// ----------------------------------------
function startEveningWithOtis() {
    currentEveningQuestion = 0;
    addMessage(
        "Ska vi ta en liten stund tillsammans " +
        "innan dagen är slut? 💚",
        "otis"
    );
    const actions =
        document.getElementById("actions");
    if (!actions) return;
    actions.innerHTML = `
        <button onclick="showEveningQuestion()">
            🌙 Ja, en liten stund
        </button>
        <button onclick="showActivity()">
            ⬅️ Inte just nu
        </button>
    `;
}
// ----------------------------------------
// Visa nästa fråga
// ----------------------------------------
function showEveningQuestion() {
    const actions =
        document.getElementById("actions");
    if (!actions) return;
    const current =
        eveningQuestions[currentEveningQuestion];
    if (!current) {
        finishEveningWithOtis();
        return;
    }
    addMessage(
        current.question,
        "otis"
    );
    actions.innerHTML = `
        <!--
            Tillfällig knapp medan vi bygger
            röstfunktionen.
        -->
        <button onclick="simulateEveningAnswer()">
            🎙️ Jag svarar
        </button>
        <button onclick="finishEveningWithOtis()">
            🌙 Säg godnatt
        </button>
    `;
}
// ----------------------------------------
// Tillfälligt svar
// ----------------------------------------
//
// Denna funktion använder vi bara under
// utvecklingen tills vi kopplar på riktig
// röstinmatning.
// ----------------------------------------
function simulateEveningAnswer() {
    const current =
        eveningQuestions[currentEveningQuestion];
    if (!current) {
        finishEveningWithOtis();
        return;
    }
    addMessage(
        "Tack för att du berättade. 💚",
        "otis"
    );
    const actions =
        document.getElementById("actions");
    if (!actions) return;
    // ----------------------------------------
    // Efter sista frågan
    // ----------------------------------------
    if (
        currentEveningQuestion ===
        eveningQuestions.length - 1
    ) {
        setTimeout(() => {
            finishEveningWithOtis();
        }, 800);
        return;
    }
    // ----------------------------------------
    // Efter övriga frågor
    // ----------------------------------------
    actions.innerHTML = `
        <button onclick="continueEveningConversation()">
            💬 Prata mer
        </button>
        <button onclick="finishEveningWithOtis()">
            🌙 Säg godnatt
        </button>
    `;
}
// ----------------------------------------
// Fortsätt samtalet
// ----------------------------------------
function continueEveningConversation() {
    currentEveningQuestion++;
    showEveningQuestion();
}
// ----------------------------------------
// Godnatt
// ----------------------------------------
function finishEveningWithOtis() {
    const actions =
        document.getElementById("actions");
    if (!actions) return;
    addMessage(
        "Tack för att du ville prata med mig ikväll. 💚 " +
        "Nu får dagen vila. " +
        "Sov gott, så ses vi en annan dag. 🌙",
        "otis"
    );
    actions.innerHTML = `
        <button onclick="showActivity()">
            🦦 Tillbaka till Otis
        </button>
    `;
}

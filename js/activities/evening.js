// ========================================
// KVÄLL MED OTIS 🌙
// ========================================
let currentEveningQuestion = 0;
// ----------------------------------------
// Frågor
// ----------------------------------------
const eveningQuestions = [
    "Vad gjorde du bra idag? 🌟",
    "Var det något idag som gjorde dig glad? 💚",
    "Var det något som var svårt idag, " +
    "men som du försökte med ändå? 🌿",
    "Är det något du skulle vilja ha hjälp med " +
    "eller prata med någon om? 🤝",
    "Finns det något du ser fram emot imorgon? 🌙"
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
// Visa fråga
// ----------------------------------------
function showEveningQuestion() {
    const actions =
        document.getElementById("actions");
    if (!actions) return;
    const question =
        eveningQuestions[currentEveningQuestion];
    if (!question) {
        finishEveningWithOtis();
        return;
    }
    addMessage(
        question,
        "otis"
    );
    // ----------------------------------------
    // Sista frågan
    // ----------------------------------------
    if (
        currentEveningQuestion ===
        eveningQuestions.length - 1
    ) {
        actions.innerHTML = `
            <button onclick="finishEveningWithOtis()">
                🌙 Säg godnatt
            </button>
        `;
        return;
    }
    // ----------------------------------------
    // Övriga frågor
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
// Nästa fråga
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

// ========================================
// VISA KVÄLL MED OTIS MELLAN 18–03
// ========================================

function updateEveningButton() {

    const button =
        document.getElementById("evening-button");

    if (!button) return;


    const hour = new Date().getHours();


    // Kväll: 18:00–23:59
    // Natt: 00:00–02:59

    const isEvening =
        hour >= 4 || hour < 3;


    button.style.display =
        isEvening ? "block" : "none";
}


// Kontrollera direkt när sidan laddas

updateEveningButton();


// Kontrollera igen varje minut

setInterval(
    updateEveningButton,
    60 * 1000
);

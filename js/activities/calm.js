// ========================================
// VARVA NER – Lugna övningar
// ========================================

function guidedCalmActivity(type) {

    const actions = document.getElementById("actions");

    if (!actions) return;


    // ----------------------------------------
    // Andas lugnt
    // ----------------------------------------

    if (type === "breathe") {

        addMessage(
            "Lägg gärna en hand på magen. 🌿 Nu tar vi tre lugna andetag tillsammans.",
            "otis"
        );

        actions.innerHTML = `

            <button onclick="calmBreathStep(1)">
                🌬️ Jag är redo
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;
    }

}

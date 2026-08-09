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
        // Första meddelandet
        addMessage(
            "Vi provar en lugn andningsövning. 🌿",
            "otis"
        );
        // Inga knappar ännu
        actions.innerHTML = "";
        // Andra meddelandet efter en kort stund
        setTimeout(() => {
            addMessage(
                "Lägg gärna en hand på magen. " +
                "Andas långsamt in och sedan långsamt ut. " +
                "Gör det tre gånger i din egen takt. " +
                "När du är klar trycker du på knappen.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('breathe')">
                    🌬️ Jag är klar
                </button>
                <button onclick="showActivity()">
                    ⬅️ Tillbaka
                </button>
            `;
        }, 3000);
        return;
    }
}

// ========================================
// Avsluta lugn övning
// ========================================

function finishCalmActivity(type) {

    const actions = document.getElementById("actions");

    if (!actions) return;


    if (type === "breathe") {

        addMessage(
            "Bra. 💚 Sitt gärna kvar en liten stund om du vill. " +
            "Du behöver inte skynda vidare.",
            "otis"
        );

        actions.innerHTML = `

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;
    }

}

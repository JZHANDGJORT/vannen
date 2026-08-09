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
            "Ska vi prova några lugna andetag? 🌿",
            "otis"
        );
        actions.innerHTML = "";
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
    // ----------------------------------------
    // Fem saker du ser
    // ----------------------------------------
    if (type === "senses") {
        addMessage(
            "Ska vi stanna upp och titta omkring en stund? 👀",
            "otis"
        );
        actions.innerHTML = "";
        setTimeout(() => {
            addMessage(
                "Titta runt omkring dig. " +
                "Hitta fem saker du kan se. " +
                "Du behöver inte säga dem högt. " +
                "Ta bara en liten stund och lägg märke till dem.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('senses')">
                    👀 Jag är klar
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
    // ----------------------------------------
    // Andas lugnt – avslutning
    // ----------------------------------------
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
    // ----------------------------------------
    // Fem saker du ser – avslutning
    // ----------------------------------------
    if (type === "senses") {
        addMessage(
            "Fint. 💚 Ibland kan det hjälpa att bara stanna upp " +
            "och lägga märke till det som finns runt omkring oss.",
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

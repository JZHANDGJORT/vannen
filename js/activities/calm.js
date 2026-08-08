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

// ----------------------------------------
// Andningsövning
// ----------------------------------------

function calmBreathStep(step) {

    const actions = document.getElementById("actions");

    if (!actions) return;


    if (step === 1) {

        addMessage(
            "Andas långsamt in genom näsan... 🌿",
            "otis"
        );

        actions.innerHTML = `

            <button onclick="calmBreathStep(2)">
                🌬️ Jag är klar
            </button>

        `;

        return;
    }


    if (step === 2) {

        addMessage(
            "Och andas långsamt ut... 💚",
            "otis"
        );

        actions.innerHTML = `

            <button onclick="calmBreathStep(3)">
                🌿 Nästa andetag
            </button>

        `;

        return;
    }


    if (step === 3) {

        addMessage(
            "Fint. Nu tar vi ett till. Andas lugnt in... 🌿",
            "otis"
        );

        actions.innerHTML = `

            <button onclick="calmBreathStep(4)">
                🌬️ Jag är klar
            </button>

        `;

        return;
    }


    if (step === 4) {

        addMessage(
            "Och andas långsamt ut... Släpp gärna ner axlarna lite. 💚",
            "otis"
        );

        actions.innerHTML = `

            <button onclick="calmBreathStep(5)">
                🌿 Sista andetaget
            </button>

        `;

        return;
    }


    if (step === 5) {

        addMessage(
            "Andas in... 🌿",
            "otis"
        );

        actions.innerHTML = `

            <button onclick="calmBreathStep(6)">
                🌬️ Och ut
            </button>

        `;

        return;
    }


    if (step === 6) {

        addMessage(
            "Och andas ut... 💚 Bra. Vi behöver inte skynda vidare.",
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

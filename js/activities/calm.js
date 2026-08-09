// ========================================
// VARVA NER – Lugna övningar
// ========================================
function guidedCalmActivity(type) {
    const actions = document.getElementById("actions");
    if (!actions) return;
    // ----------------------------------------
    // 🌬️ Lugna andetag
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
    // 👀 Fem saker du ser
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
    // ----------------------------------------
    // 👂 Lyssna en stund
    // ----------------------------------------
    if (type === "listen") {
        addMessage(
            "Ska vi lyssna en liten stund? 👂",
            "otis"
        );
        actions.innerHTML = "";
        setTimeout(() => {
            addMessage(
                "Sitt alldeles stilla en liten stund. " +
                "Lyssna efter ljuden omkring dig. " +
                "Kanske hör du något nära, något långt borta " +
                "eller något du inte brukar lägga märke till.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('listen')">
                    👂 Jag är klar
                </button>
                <button onclick="showActivity()">
                    ⬅️ Tillbaka
                </button>
            `;
        }, 3000);
        return;
    }
    // ----------------------------------------
    // 🤲 Känn efter
    // ----------------------------------------
    if (type === "body") {
        addMessage(
            "Ska vi känna efter hur kroppen känns just nu? 🤲",
            "otis"
        );
        actions.innerHTML = "";
        setTimeout(() => {
            addMessage(
                "Känn efter hur du sitter eller står. " +
                "Känn fötterna mot golvet och händerna mot något. " +
                "Du behöver inte ändra något. " +
                "Bara lägg märke till hur det känns.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('body')">
                    🤲 Jag är klar
                </button>
                <button onclick="showActivity()">
                    ⬅️ Tillbaka
                </button>
            `;
        }, 3000);
        return;
    }
    // ----------------------------------------
    // 🐢 Gör något långsamt
    // ----------------------------------------
    if (type === "slow") {
        addMessage(
            "Ska vi prova att göra något lite långsammare? 🐢",
            "otis"
        );
        actions.innerHTML = "";
        setTimeout(() => {
            addMessage(
                "Välj något du brukar göra just nu. " +
                "Kanske ta en klunk vatten, resa dig upp " +
                "eller gå några steg. " +
                "Gör det lite långsammare än vanligt och lägg märke till vad du gör.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('slow')">
                    🐢 Jag är klar
                </button>
                <button onclick="showActivity()">
                    ⬅️ Tillbaka
                </button>
            `;
        }, 3000);
        return;
    }
    // ----------------------------------------
    // 🌊 Tänk på en lugn plats
    // ----------------------------------------
    if (type === "place") {
        addMessage(
            "Ska vi tänka på en plats där du tycker om att vara? 🌊",
            "otis"
        );
        actions.innerHTML = "";
        setTimeout(() => {
            addMessage(
                "Blunda om det känns bra. " +
                "Föreställ dig en plats där du känner dig lugn eller trygg. " +
                "Det kan vara en riktig plats eller en plats du hittar på själv. " +
                "Stanna där i tanken en liten stund.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('place')">
                    🌊 Jag är klar
                </button>
                <button onclick="showActivity()">
                    ⬅️ Tillbaka
                </button>
            `;
        }, 3000);
        return;
    }
    // ----------------------------------------
    // ☁️ Låt tankarna vila
    // ----------------------------------------
    if (type === "thoughts") {
        addMessage(
            "Ska vi låta tankarna vila en liten stund? ☁️",
            "otis"
        );
        actions.innerHTML = "";
        setTimeout(() => {
            addMessage(
                "Sätt dig bekvämt och låt tankarna komma och gå. " +
                "Du behöver inte lösa något just nu. " +
                "Om en tanke dyker upp kan du bara låta den passera " +
                "och sedan återvända till stunden du är i.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('thoughts')">
                    ☁️ Jag är klar
                </button>
                <button onclick="showActivity()">
                    ⬅️ Tillbaka
                </button>
            `;
        }, 3000);
        return;
    }
    // ----------------------------------------
    // 💚 Bara vara en stund
    // ----------------------------------------
    if (type === "pause") {
        addMessage(
            "Ibland behöver man inte göra någonting alls. 💚",
            "otis"
        );
        actions.innerHTML = "";
        setTimeout(() => {
            addMessage(
                "Sitt eller ligg bekvämt en liten stund. " +
                "Du behöver inte tänka på något särskilt " +
                "eller göra något på ett särskilt sätt. " +
                "Du kan bara vara här en stund.",
                "otis"
            );
            actions.innerHTML = `
                <button onclick="finishCalmActivity('pause')">
                    💚 Jag är klar
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
    const endings = {
        breathe:
            "Bra. 💚 Sitt gärna kvar en liten stund om du vill. " +
            "Du behöver inte skynda vidare.",
        senses:
            "Fint. 💚 Ibland kan det hjälpa att bara stanna upp " +
            "och lägga märke till det som finns runt omkring oss.",
        listen:
            "Fint. 💚 Ibland kan det vara skönt att bara lyssna " +
            "en stund utan att behöva göra något.",
        body:
            "Bra. 💚 Ibland kan det räcka att bara lägga märke till " +
            "hur kroppen känns.",
        slow:
            "Fint. 💚 Ibland kan det vara skönt att sakta ner " +
            "och göra en sak i taget.",
        place:
            "Fint. 💚 Du kan alltid återvända till den lugna platsen " +
            "i dina tankar när du behöver en liten paus.",
        thoughts:
            "Bra. 💚 Alla tankar behöver inte få vår uppmärksamhet " +
            "just nu.",
        pause:
            "Fint. 💚 Ibland är det precis det man behöver – " +
            "en liten stund utan krav."
    };
    if (!endings[type]) return;
    addMessage(
        endings[type],
        "otis"
    );
    actions.innerHTML = `
        <button onclick="showActivity()">
            ⬅️ Tillbaka
        </button>
    `;
}

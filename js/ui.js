let otisAudioContext = null;
let currentActivity = null;

function updateActionLayout() {

    const actions =
        document.getElementById("actions");


    const count =
        actions.querySelectorAll("button").length;


    if (count === 4) {

        actions.style.gridTemplateColumns =
            "repeat(2, 1fr)";

    } else {

        actions.style.gridTemplateColumns =
            "repeat(3, 1fr)";

    }

}

function showMainMenu() {

    const actions =
        document.getElementById("actions");

    actions.classList.remove("activity-menu");
    
    actions.innerHTML = `

    <button id="present-person-button" class="action-button company">
        <span class="action-icon">❤️</span>
        <span>Sällskap</span>
    </button>

    <button id="activity-button" class="action-button explore">
        <span class="action-icon">🌱</span>
        <span>Hitta på något</span>
    </button>

    <button id="dialog-button" class="action-button talk">
        <span class="action-icon">💬</span>
        <span>Prata med Otis</span>
    </button>

`;


    document
        .getElementById("activity-button")
        .addEventListener(
            "click",
            showActivity
        );


    document
        .getElementById("dialog-button")
        .addEventListener(
            "click",
            showDialog
        );

    document
        .getElementById("present-person-button")
        .addEventListener(
            "click",
            showPresentPerson
        );

}

function showSettings() {

    const actions =
        document.getElementById("actions");

    actions.innerHTML = `

        <button onclick="showFriends()">
            👥 Mina vänner
        </button>

        <button onclick="changeName()">
            ✏️ Mitt namn
        </button>

        <button onclick="exportOtisMemory()">

            💾 Spara Otis minne

        </button>

        <button onclick="importOtisMemory()">

            📂 Hämta Otis minne

        </button>

        <button onclick="resetMemoryQuestion()">
            🌊 Återställ minne
        </button>

        <button onclick="showMainMenu()">
            ❌ Tillbaka
        </button>

    `;

}

function showFriends() {

    const actions =
        document.getElementById("actions");


    let html = ``;


    // Ägaren

    if (otisMemory.owner) {

        html += `

            <button onclick="showFriendInfo('owner')">

                🌿 ${otisMemory.owner.name}

                <br>

                <small>Min huvudvän</small>

            </button>

        `;

    }


    // Övriga personer

    otisMemory.friends.forEach((person, index) => {

        let info = "";


        if (person.type === "child") {

    info = person.age
        ? `${person.age} år`
        : "Barn";

} else if (person.type === "adult") {

    info = person.role || "Vuxen";

}


        html += `

            <button onclick="showFriendInfo(${index})">

                ${person.type === "child" ? "🧒" : "👤"}

                ${person.name}

                <br>

                <small>${info}</small>

            </button>

        `;

    });


    html += `

        <button onclick="showSettings()">
            ⬅️ Tillbaka
        </button>

    `;


    actions.innerHTML = html;

}

function resetMemoryQuestion() {

    const actions =
        document.getElementById("actions");


    addMessage(
        "Är du säker? 🌊 Jag kommer att glömma det jag lärt mig om dig, men jag skulle gärna vilja lära känna dig igen. 💚",
        "otis"
    );


    actions.innerHTML = `

        <button onclick="resetMemory()">
            🌱 Ja, börja om
        </button>

        <button onclick="showMainMenu()">
            🦦 Nej, fortsätt som vanligt
        </button>

    `;

}

function showBackpack() {

    const actions =
        document.getElementById("actions");

    actions.innerHTML = `

        <button>
            📸 Våra minnen
        </button>

        <button>
           ⭐ Våra äventyr
        </button>

        <button>
            🪨 Mina skatter
        </button>

        <button onclick="showMainMenu()">
            🦦 Tillbaka
        </button>

    `;

}

function askOpenBackpack() {

    addMessage(
        "Vad är det där?",
        "user"
    );


    addMessage(
        "Åh, det här är min ryggsäck! Jag brukar ta med mig små saker från mina äventyr. Vill du öppna den?",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="openOtisBackpack()">
            🎒 Ja, öppna den!
        </button>

        <button onclick="showMainMenu()">
            🌿 Inte just nu
        </button>

    `;

}

function showBackpackChoice() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="openOtisBackpack()">
            🎒 Ja, öppna den!
        </button>

        <button onclick="showMainMenu()">
            🦦 Inte just nu
        </button>

    `;

}

function openOtisBackpack() {

    addMessage(
        "Åh, vad roligt! Jag blir alltid glad när jag får visa vad jag har där i. 💚",
        "otis"
    );

    laughCharacter();

    setTimeout(() => {

        openBackpackRoom();

    }, 1500);

}

function showActivity() {

    addMessage(
        "Vad roligt! 💚 Är det något speciellt du behöver göra idag eller ska vi hitta på något tillsammans?",
        "otis"
    );


    const actions =
        document.getElementById("actions");

    actions.classList.add("activity-menu");


    actions.innerHTML = `

        <button onclick="suggestActivity()">
            🌿 Hitta på något
        </button>

        <button onclick="showDiscover()">
            🍃 Upptäcka
        </button>

        <button onclick="chooseActivityNeed('read')">
            📚 Läsa
        </button>

        <button onclick="startMathActivity()">
          ➕ Räkna
        </button>

        <button onclick="chooseActivityNeed('create')">
            🎨 Skapa
        </button>

        <button onclick="chooseActivityNeed('calm')">
            🧘 Varva ner
        </button>

        <button onclick="chooseActivityNeed('tidy')">
            🧹 Röja lite
        </button>

        <button onclick="showMainMenu()">
            ⬅️ Tillbaka
        </button>

    `;

}

function chooseActivityNeed(type) {

    const actions =
        document.getElementById("actions");

    actions.classList.remove("activity-menu");

    if (type === "read") {

        addMessage(
            "Vad mysigt! 📚 Har du en bok som vi kan läsa tillsammans?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="chooseReadTimer()">
                📖 Ja, jag har en bok
            </button>

            <button onclick="readOtisStory()">
                📚 Läs om Otis äventyr
            </button>

            <button onclick="simpleActivity('later')">
                🌿 Jag väljer senare
            </button>

            <button onclick="showMainMenu()">
                🦦 Inte idag
            </button>

        `;

        return;

    }


    if (type === "math") {

    addMessage(
        "Jag hjälper gärna till! ➕ Vad vill du göra?",
        "otis"
    );


    actions.innerHTML = `

        <button onclick="startHomeworkActivity()">
            📝 Jag har en läxa
        </button>

        <button onclick="startMathActivity()">
            🔢 Jag vill räkna tillsammans
        </button>

        <button onclick="showMainMenu()">
            🦦 Inte idag
        </button>

    `;

    return;

}


    if (type === "create") {

        addMessage(
            "Vad roligt! 🎨 Jag tycker om att skapa saker tillsammans.",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="simpleActivity('paint')">
                🎨 Måla
            </button>

            <button onclick="simpleActivity('build')">
                🧱 Bygga något
            </button>

            <button onclick="simpleActivity('craft')">
                ✂️ Pyssla
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;

    }


    if (type === "calm") {

        addMessage(
            "Då tar vi det lite lugnt tillsammans. 🌊",
            "otis"
        );


        actions.innerHTML = `

    <button onclick="simpleActivity('breathe')">
        🌬️ Lugna andetag
    </button>

    <button onclick="simpleActivity('senses')">
        👀 Fem saker du ser
    </button>

    <button onclick="simpleActivity('listen')">
        👂 Lyssna en stund
    </button>

    <button onclick="simpleActivity('body')">
        🤲 Känn efter
    </button>

    <button onclick="simpleActivity('slow')">
        🐢 Gör något långsamt
    </button>

    <button onclick="simpleActivity('place')">
        🌊 Tänk på en lugn plats
    </button>

    <button onclick="simpleActivity('thoughts')">
        ☁️ Låt tankarna vila
    </button>

    <button onclick="simpleActivity('pause')">
        💚 Bara vara en stund
    </button>

    <button onclick="showActivity()">
        ⬅️ Tillbaka
    </button>

`;

        return;

    }


    if (type === "tidy") {

        addMessage(
            "En liten hjälteinsats! 🦦 Ska vi göra fint tillsammans?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="simpleActivity('five')">
                ⭐ Plocka undan fem saker
            </button>

            <button onclick="simpleActivity('tidy10')">
                ⏱️ Plocka undan i 10 minuter
            </button>

            <button onclick="simpleActivity('room')">
                🏡 Göra fint i ett rum
            </button>

            <button onclick="simpleActivity('box')">
                📦 Gå igenom en låda eller ett skåp
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;

    }

}

function suggestActivity() {

    const activityTypes = [
    "discover",
    "read",
    "math",
    "create",
    "calm",
    "tidy"
];


    const randomType =
        activityTypes[
            Math.floor(
                Math.random() * activityTypes.length
            )
        ];


    const actions =
        document.getElementById("actions");

actions.classList.remove("activity-menu");
    
    if (randomType === "discover") {

    addMessage(
        "Jag har en upptäckaridé! 🍃 Ska vi lära oss något nytt tillsammans?",
        "otis"
    );


    actions.innerHTML = `

        <button onclick="showDiscover()">
            💚 Ja, det gör vi!
        </button>

        <button onclick="suggestActivity()">
            ✨ En annan idé
        </button>

        <button onclick="showActivity()">
            ⬅️ Tillbaka
        </button>

    `;

    return;

}

    if (randomType === "read") {

        addMessage(
            "Hmm... 📚 Jag tycker att vi ska läsa en stund tillsammans! Vad tror du om det?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="chooseActivityNeed('read')">
                💚 Ja, det gör vi!
            </button>

            <button onclick="suggestActivity()">
                ✨ En annan idé
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;
    }


    if (randomType === "math") {

        addMessage(
            "Jag har en idé! ➕ Vad sägs om att räkna på något en liten stund?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="chooseActivityNeed('math')">
                💚 Ja, det gör vi!
            </button>

            <button onclick="suggestActivity()">
                ✨ En annan idé
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;
    }


    if (randomType === "create") {

        addMessage(
            "Vad sägs om att skapa något? 🎨 Jag tror att det skulle vara roligt!",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="startCreateActivity()">
                💚 Ja, det gör vi!
            </button>

            <button onclick="suggestActivity()">
                ✨ En annan idé
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;
    }


    if (randomType === "calm") {

        addMessage(
            "Jag tycker att vi ska ta det lite lugnt tillsammans. 🌊",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="simpleActivity('breathe')">
                💚 Ja, det gör vi!
            </button>

            <button onclick="suggestActivity()">
                ✨ En annan idé
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;
    }


    if (randomType === "tidy") {

        addMessage(
            "Hmm... 🧹 Ska vi göra en liten hjälteinsats och få undan några saker?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="simpleActivity('five')">
                💚 Ja, det gör vi!
            </button>

            <button onclick="suggestActivity()">
                ✨ En annan idé
            </button>

            <button onclick="showActivity()">
                ⬅️ Tillbaka
            </button>

        `;

        return;
    }

}

function startCreateActivity() {

    const createActivities = [
        {
            type: "paint",
            message:
                "Vad roligt! 🎨 Ska vi måla något tillsammans? Kanske något vi tycker om eller något vi hittar på?"
        },

        {
            type: "build",
            message:
                "Vad roligt! 🧱 Ska vi bygga något tillsammans? Kanske en liten koja, ett hus eller något helt eget?"
        },

        {
            type: "craft",
            message:
                "Vad roligt! ✂️ Ska vi pyssla med något? Vi kan använda papper, färger eller något annat vi hittar hemma."
        }
    ];


    const activity =
        createActivities[
            Math.floor(
                Math.random() * createActivities.length
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

        <button onclick="continueCreateActivity('${activity.type}')">
            💚 Ja, det gör vi!
        </button>

        <button onclick="startCreateActivity()">
            ✨ En annan idé
        </button>

        <button onclick="showActivity()">
            ⬅️ Tillbaka
        </button>

    `;

}

function continueCreateActivity(type) {


    if (type === "paint") {

        simpleActivity("paint");

        return;

    }


    if (type === "build") {

        startBuildActivity();

        return;

    }


    if (type === "craft") {

        startCraftActivity();

        return;

    }

}

function startBuildActivity() {


    const buildMaterials = [
        "lego",
        "duplo",
        "blocks",
        "fort",
        "clay",
        "nature",
        "cardboard",
        "fabric",
        "recycle",
        "mixed"
    ];


    const material =
        buildMaterials[
            Math.floor(
                Math.random() * buildMaterials.length
            )
        ];


    addMessage(
        "Vad roligt! 🧱 Jag fick en idé om något vi kan bygga tillsammans.",
        "otis"
    );


    chooseBuildMaterial(material);

}

function startCraftActivity() {


    const craftMaterials = [
        "beads",
        "beadplate",
        "paper",
        "yarn"
    ];


    const material =
        craftMaterials[
            Math.floor(
                Math.random() * craftMaterials.length
            )
        ];


    addMessage(
        "Vad roligt! ✂️ Jag fick en idé om något vi kan pyssla tillsammans.",
        "otis"
    );


    chooseCraft(material);

}

function simpleActivity(type) {
    const messages = {
        read:
        "Vad mysigt! 📚 Läs för mig en stund, jag finns här och lyssnar.",
        later:
        "Det går bra. Jag finns kvar här när du är redo. Så kan vi läsa lite senare när du har hittat något mysigt att läsa tillsammans. 💚",
        homework:
        "Jag sitter bredvid dig och hejar på. Du klarar det! 🌿",
        challenge:
        "Okej! Vad blir 2 + 3? ➕",
        paint:
        "Vad roligt! 🎨 Vet du redan vad du vill måla eller vill du ha en liten idé?",
        build:
        "Vad roligt! 🧱 Vad vill du bygga med idag?",
        craft:
        "Vad roligt! ✂️ Vad vill du pyssla med idag.",
        five:
        "Fem saker räcker! Ett litet steg kan göra stor skillnad. ⭐",
        tidy10:
        "Bra idé! 🌿 Vi tar 10 minuter tillsammans och ser hur mycket vi hinner.",
        room:
        "Det här är ett större uppdrag. 🏡 Vi gör fint i ett rum tillsammans.",
        box:
        "Ett riktigt hjälteuppdrag! 📦 Vi går igenom en låda eller ett skåp och gör det lättare att hitta saker."
    };
    // ----------------------------------------
    // Lugna övningar
    // ----------------------------------------
    if (
    type === "breathe" ||
    type === "senses" ||
    type === "listen" ||
    type === "body" ||
    type === "slow" ||
    type === "place" ||
    type === "thoughts" ||
    type === "pause"
) {
    guidedCalmActivity(type);
    return;
}
    // ----------------------------------------
    // Vanligt aktivitetsmeddelande
    // ----------------------------------------
    addMessage(
        messages[type],
        "otis"
    );
    // ----------------------------------------
    // Måla
    // ----------------------------------------
    if (type === "paint") {
        const actions =
            document.getElementById("actions");
        actions.innerHTML = `
            <button onclick="paintIdea(false)">
                🎨 Jag vet redan
            </button>
            <button onclick="paintIdea(true)">
                ✨ Ge mig en idé
            </button>
            <button onclick="chooseActivityNeed('create')">
                ⬅️ Tillbaka
            </button>
        `;
        return;
    }
    // ----------------------------------------
    // Bygga
    // ----------------------------------------
    if (type === "build") {
        const actions =
            document.getElementById("actions");
        actions.innerHTML = `
            <button onclick="chooseBuildMaterial('lego')">
                🧱 Lego
            </button>
            <button onclick="chooseBuildMaterial('duplo')">
                🧸 Duplo
            </button>
            <button onclick="chooseBuildMaterial('blocks')">
                🪵 Klossar
            </button>
            <button onclick="chooseBuildMaterial('fort')">
                🏕️ Kuddar & filtar
            </button>
            <button onclick="chooseBuildMaterial('clay')">
                🪨 Lera
            </button>
            <button onclick="chooseBuildMaterial('other')">
                ✨ Något annat
            </button>
            <button onclick="chooseActivityNeed('create')">
                ⬅️ Tillbaka
            </button>
        `;
        return;
    }
    // ----------------------------------------
    // Pyssla
    // ----------------------------------------
    if (type === "craft") {
        const actions =
            document.getElementById("actions");
        actions.innerHTML = `
            <button onclick="chooseCraft('beads')">
                📿 Pärlor
            </button>
            <button onclick="chooseCraft('beadplate')">
                🟦 Pärlplatta
            </button>
            <button onclick="chooseCraft('paper')">
                📄 Papper
            </button>
            <button onclick="chooseCraft('yarn')">
                🧶 Garn
            </button>
            <button onclick="chooseActivityNeed('create')">
                ⬅️ Tillbaka
            </button>
        `;
        return;
    }
    // ----------------------------------------
    // 10 minuter
    // ----------------------------------------
    if (type === "tidy10") {
        startOtisTimer("tidy10");
        return;
    }
    // ----------------------------------------
    // Aktivitet
    // ----------------------------------------
    currentActivity = {
        type: type,
        difficulty:
            type === "five" ? "lätt" :
            type === "tidy10" ? "mellan" :
            type === "room" ? "utmaning" :
            type === "box" ? "utmaning" :
            "vanlig",
        completed:
            "Vad fint gjort! 💚 Jag tyckte om att få göra det här tillsammans med dig.",
        skipped:
            "Det gör inget. Vi kan prova en annan gång. 🌿"
    };
    const actions =
        document.getElementById("actions");
    actions.innerHTML = `
        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>
        <button onclick="simpleActivitySkipped()">
            🌿 Vi hann inte idag
        </button>
    `;
}

function simpleActivityDone() {

    addMessage(
        currentActivity.completed,
        "otis"
    );


    saveCompletedActivity(
        currentActivity
    );


    if (currentActivity.type === "read") {

        addBadgeProgress("lasar");

    }
    

    if (currentActivity.type === "upptackar") {

        addBadgeProgress("upptackar");

    }

    if (currentActivity.badgeType) {

    addBadgeProgress(
        currentActivity.badgeType
    );

}


    currentActivity = null;

    showMainMenu();

}


function simpleActivitySkipped() {

    saveSkippedActivity(
        currentActivity
    );

    addMessage(
        currentActivity.skipped,
        "otis"
    );

    currentActivity = null;

    showMainMenu();

}

function showDiscover() {

    addMessage(
        "Vad roligt! 🌿 Jag älskar att upptäcka nya saker. Vad vill du upptäcka idag?",
        "otis"
    );


    const actions =
        document.getElementById("actions");

    actions.classList.remove("activity-menu");

    actions.innerHTML = `

        <button onclick="showWorldDiscover()">
            🌍 Upptäcka världen
        </button>

        <button onclick="showBodyDiscover()">
            💚 Upptäcka kroppen
        </button>

        <button onclick="readOtisFactBook()">
        📚 Upptäcka kunskap
        </button>

        <button onclick="showActivity()">
            ⬅️ Tillbaka
        </button>

    `;

}

function showWorldDiscover() {

    addMessage(
        "Då ger vi oss ut på ett litet äventyr! 🌍 Vad skulle du vilja upptäcka idag?",
        "otis"
    );

    const actions =
        document.getElementById("actions");

actions.classList.remove("activity-menu");
    
    actions.innerHTML = `

        <button onclick="discoverWorld('nature')">
            🌳 Naturen
        </button>

        <button onclick="discoverWorld('place')">
            🗺️ En ny plats
        </button>

        <button onclick="discoverWorld('details')">
            🔍 Titta noga
        </button>

        <button onclick="showDiscover()">
            ⬅️ Tillbaka
        </button>

    `;

}

function discoverWorld(type) {

    const ideas = {

        nature: [

            "🌿 Hitta ett löv du tycker är extra fint.",

            "🐦 Lyssna efter tre olika fågelläten.",

            "🪨 Hitta en sten som känns speciell."

        ],

        place: [

            "🚶 Gå en väg du aldrig gått förut.",

            "🏡 Titta efter ett hus du aldrig lagt märke till.",

            "🌉 Hitta en plats du vill komma tillbaka till."

        ],

        details: [

            "👀 Hitta fem saker som har samma färg.",

            "🦋 Leta efter något riktigt litet.",

            "☁️ Titta upp och beskriv molnen."

        ]

    };

    addMessage(
        ideas[type][
            Math.floor(Math.random() * ideas[type].length)
        ],
        "otis"
    );

    currentActivity = {

        type: "upptackar",

        completed:
            "Vilket spännande äventyr! 🌍 Jag hoppas att du hittade något du aldrig sett förut.",

        skipped:
            "Det gör inget. Vi kan ge oss ut på upptäcktsfärd en annan dag. 🌿"

    };

    document.getElementById("actions").innerHTML = `

        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>

        <button onclick="simpleActivitySkipped()">
            🌿 Vi hann inte idag
        </button>

    `;

}

function showBodyDiscover() {

    addMessage(
        "Kroppen är fantastisk. 💚 Ska vi upptäcka vad den kan göra idag?",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="discoverBody('movement')">
            🚶 Rör på kroppen
        </button>

        <button onclick="discoverBody('stretch')">
            🙆 Sträck på kroppen
        </button>

        <button onclick="discoverBody('listen')">
            👂 Lyssna på kroppen
        </button>

        <button onclick="showDiscover()">
            ⬅️ Tillbaka
        </button>

    `;

}

function discoverBody(activity) {

    const ideas = {

        movement: [

            "🚶 Ta en liten promenad och känn hur fötterna rör sig när du går.",

            "🦵 Gör 10 knäböj. Känn hur benen arbetar när du böjer och sträcker dem.",

            "👣 Ställ dig på tå 10 gånger. Hur känns det i fötterna och benen?",

            "🦩 Stå på ett ben så länge du kan. Hur länge kan kroppen hålla balansen?",

            "🐸 Hoppa som en groda 5 gånger. Känn hur hela kroppen får följa med.",

            "🙆 Sträck armarna upp och ner 10 gånger. Kan du göra det långsamt?",

            "🔄 Snurra runt tre gånger och stanna sedan helt stilla. Känns det annorlunda i kroppen?"
        ],


        stretch: [

            "🙆 Ställ dig upp och sträck båda armarna så högt du kan, som om du försöker nå ända upp till himlen.",

            "🦶 Sätt dig ner och sträck benen framför dig. Sträck dig försiktigt mot tårna och känn hur det känns.",

            "🙆 Sträck ena armen långt över huvudet och sedan den andra. Kan du känna skillnaden mellan sidorna?",

            "💚 Sträck båda armarna långt fram framför dig. Gör dig sedan så lång du kan.",

            "🌿 Rulla axlarna långsamt bakåt några gånger. Känns axlarna annorlunda efteråt?",

            "↔️ Sträck dig försiktigt åt ena sidan och sedan åt den andra. Vilken sida känns längst?"
        ],


        listen: [

            "💚 Sitt eller stå alldeles stilla en liten stund. Hur känns kroppen just nu?",

            "❤️ Lägg handen på bröstet. Kan du känna hur hjärtat slår?",

            "🌬️ Lägg en hand på magen. Kan du känna hur magen rör sig när du andas?",

            "👂 Blunda en liten stund. Vilket är det första ljudet du hör?",

            "🌡️ Känn efter. Känns kroppen varm eller kall just nu?",

            "💚 Känner du dig pigg, trött eller kanske något mitt emellan?",

            "👣 Känn dina fötter mot golvet. Kan du känna var fötterna har kontakt med marken?",

            "✋ Spänn händerna hårt en liten stund och släpp sedan. Kändes det någon skillnad?"
        ]

    };


    const choices =
        ideas[activity];


    const message =
        choices[
            Math.floor(
                Math.random() * choices.length
            )
        ];


    addMessage(
        message,
        "otis"
    );


    currentActivity = {

        type: "upptackar",

        completed:
        "Vad spännande! 🌿 Nu har vi upptäckt något nytt tillsammans.",

        skipped:
        "Det gör inget. Vi kan upptäcka mer en annan dag. 💚"

    };


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>

        <button onclick="simpleActivitySkipped()">
            🌿 Vi hann inte idag
        </button>

    `;

}



function startOtisTimer(type = "tidy10") {
    if (!otisAudioContext) {
        otisAudioContext =
            new (window.AudioContext || window.webkitAudioContext)();
    }
    if (otisAudioContext.state === "suspended") {
        otisAudioContext.resume();
    }
    currentActivity = {
        type: type,
        badgeType:
            type === "read"
                ? "lasar"
                : null,
        completed:
            type === "read"
                ? "Bra jobbat! 📚 Vi läste tillsammans i 10 minuter. 🌟"
                : "Wow! ⭐ Tio minuter gick fort. Jag är stolt över oss!",
        skipped:
            "Det gör inget. Vi kan prova en annan gång. 🌿"
    };
    const actions =
        document.getElementById("actions");
    const timer =
        document.getElementById("activity-timer");
    const timerTime =
        document.getElementById("timer-time");
    timer.classList.remove("activity-hidden");
    timerTime.textContent = "10:00";
    let seconds = 600;
    actions.innerHTML = `
        <button onclick="finishOtisTimer()">
            🌿 Jag är klar
        </button>
        <button onclick="simpleActivitySkipped()">
            🌱 Vi hann inte idag
        </button>
    `;
    window.otisTimer =
        setInterval(() => {
            seconds--;
            const minutes =
                Math.floor(seconds / 60);
            const remaining =
                seconds % 60;
            timerTime.textContent =
                `${minutes}:${remaining < 10 ? "0" : ""}${remaining}`;
            if (seconds <= 0) {
                clearInterval(window.otisTimer);
                timer.classList.add("activity-hidden");
                playOtisTimerSound();
                simpleActivityDone();
            }
        }, 1000);
}

function finishOtisTimer() {

    clearInterval(window.otisTimer);

    document
    .getElementById("activity-timer")
    .classList.add("activity-hidden");

    addMessage(
        currentActivity.completed,
        "otis"
    );


    currentActivity = null;


    showMainMenu();

}

function playOtisTimerSound() {

    if (!otisAudioContext) return;

    const audioContext =
        otisAudioContext;

    const now =
        audioContext.currentTime;

    function playTone(frequency, startTime, duration) {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type = "sine";

        oscillator.frequency.value =
            frequency;

        gain.gain.setValueAtTime(
            0,
            startTime
        );

        gain.gain.linearRampToValueAtTime(
            0.18,
            startTime + 0.03
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            startTime + duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
    }


    // Mjukt pling – pling
    playTone(880, now, 0.45);
    playTone(1174.66, now + 0.32, 0.6);

}

function chooseReadTimer() {

    addMessage(
        "Vad mysigt! 📚 Vill du att jag tar tiden åt dig?",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="startOtisTimer('read')">
            ⏱️ Ja, 10 minuter
        </button>

        <button onclick="simpleActivity('read')">
            📖 Nej, jag läser utan timer
        </button>

        <button onclick="chooseActivityNeed('read')">
            ⬅️ Tillbaka
        </button>

    `;

}

function chooseActivityPlace(place) {


    const list =
        freeActivities[place];


    currentActivity =
        list[
            Math.floor(
                Math.random() * list.length
            )
        ];


    addMessage(
        currentActivity.greeting,
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="beginActivity()">
💚 Ja, det gör vi!
</button>

<button onclick="chooseActivityPlace('${place}')">
✨ En annan idé
</button>

<button onclick="showMainMenu()">
🌿 Inte just nu
</button>

    `;

}

function beginActivity() {


    addMessage(
        currentActivity.start,
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="activityDone()">
            ✅ Vi gjorde det!
        </button>


        <button onclick="activityNotDone()">
            🌿 Vi hann inte idag
        </button>

    `;

}

function activityDone() {


    addMessage(
        currentActivity.completed,
        "otis"
    );


    saveCompletedActivity(
        currentActivity
    );


    currentActivity = null;


    showMainMenu();

}

function activityNotDone() {


    const messages = [

        "Det gör inget. Ibland räcker det att vi försökte. Vi kan prova en annan gång. 💚",

        "Det gör inget. Jag tyckte det var mysigt att få följa med en stund. 🌊",

        "Vi hann inte idag, men vi kan alltid prova igen en annan gång. 🌿"

    ];


    const message =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];


    addMessage(
        message,
        "otis"
    );


    currentActivity = null;


    showMainMenu();

}


function activitySkipped() {
document
    .getElementById("activity-timer")
    .classList.add("activity-hidden");
    
    saveSkippedActivity(
        currentActivity
    );

    currentActivity = null;


    addMessage(
        "Det är helt okej. Ibland passar det inte just nu. Vi kan prova en annan gång. 💚",
        "otis"
    );


    showMainMenu();

}

function showDialog() {

    const messages = [

        "Hej igen! 💚 Vad mysigt att du kom förbi en stund. Hur känns det idag?",

        "Hej! 🌿 Jag är glad att se dig. Hur har din dag varit?",

        "Vad fint att du kom hit en stund. 🌊 Hur känns det idag?",

        "Hej! 💚 Vill du berätta lite om hur du har det just nu?"

    ];


    const message =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];


    addMessage(
        message,
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="dialogAnswer('bra')">
            😊 Jag mår bra
        </button>

        <button onclick="dialogAnswer('daligt')">
            💚 Det känns lite jobbigt
        </button>

        <button onclick="dialogAnswer('vetinte')">
            🤔 Jag vet inte riktigt
        </button>

    `;

}

function dialogAnswer(answer) {

    const actions =
        document.getElementById("actions");


    if (answer === "bra") {

        const messages = [

            "Vad fint att höra! 💚 Jag blir glad när du mår bra.",

            "Åh vad mysigt! 🌿 Jag tycker om att höra att du har en bra dag.",

            "Vad härligt att höra. 🌊 Det låter som en fin stund just nu."

        ];


        const message =
            messages[
                Math.floor(
                    Math.random() * messages.length
                )
            ];


        addMessage(
            message,
            "otis"
        );


        setTimeout(() => {

            actions.innerHTML = `

                <button onclick="showDialogMoreHappy()">
                    💚 Berätta lite mer
                </button>

                <button onclick="otisChoice('lugnt')">
                    🌿 Bara vara med Otis
                </button>

                <button onclick="otisChoice('aktivitet')">
                    🌱 Hitta på något
                </button>

            `;

        }, 1200);

    }



    if (answer === "daligt") {

        addMessage(
            "Jag är ledsen att höra att det känns jobbigt. 💚 Ibland kan det hjälpa att prata med någon man tycker om och litar på. Jag kan också stanna här och lyssna en stund.",
            "otis"
        );


        setTimeout(() => {

            actions.innerHTML = `

                <button onclick="showDialogMore()">
                    💚 Berätta lite mer
                </button>

                <button onclick="otisChoice('lugnt')">
                    🌿 Bara vara med Otis
                </button>

                <button onclick="otisChoice('aktivitet')">
                    🌱 Hitta på något
                </button>

            `;

        }, 1500);

    }



    if (answer === "vetinte") {

        addMessage(
            "Det är helt okej att inte veta. 💚 Ibland behöver man bara stanna upp en stund och känna efter.",
            "otis"
        );


        setTimeout(() => {

            actions.innerHTML = `

                <button onclick="showDialogMore()">
                    💚 Berätta lite mer
                </button>

                <button onclick="otisChoice('lugnt')">
                    🌿 Bara vara med Otis
                </button>

                <button onclick="otisChoice('aktivitet')">
                    🌱 Hitta på något
                </button>

            `;

        }, 1500);

    }

}

function showDialogMore() {

    const messages = [

        "Jag lyssnar. 💚 Du behöver inte hitta rätt ord direkt. Berätta bara det som känns okej.",

        "Det är ingen fara om det är svårt att förklara. 🌿 Jag finns här en stund.",

        "Ibland hjälper det att sätta ord på det som känns. 💚 Jag lyssnar gärna."

    ];


    const message =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];


    addMessage(
        message,
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="showDialogMoreQuestion()">
            💚 Jag vill berätta
        </button>

        <button onclick="otisChoice('lugnt')">
            🌿 Bara vara med Otis
        </button>

        <button onclick="otisChoice('aktivitet')">
            🌱 Hitta på något
        </button>

    `;

}

function showDialogMoreHappy() {

    const messages = [

        "Vad gör dig extra glad idag? 💚",

        "Åh, berätta lite mer. Vad har gjort dagen så fin? 🌿",

        "Jag tycker om att höra om fina stunder. Vad har hänt idag? ☀️"

    ];


    addMessage(
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ],
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="happyMoreChoice('tell')">
            😊 Jag vill berätta
        </button>


        <button onclick="otisChoice('lugnt')">
            💚 Bara vara med Otis
        </button>


        <button onclick="otisChoice('aktivitet')">
            🌱 Hitta på något
        </button>

    `;

}


function happyMoreChoice(choice) {

    if (choice === "tell") {

        addMessage(
            "Vad fint. 💚 Jag lyssnar gärna. Berätta det du vill dela med mig.",
            "otis"
        );


        const actions =
            document.getElementById("actions");


        actions.innerHTML = `

            <button onclick="happyMoreContinue()">
                🌿 Tillbaka till Otis
            </button>


            <button onclick="otisChoice('lugnt')">
                💚 Bara vara med Otis
            </button>

        `;

    }

}

function happyMoreContinue() {

    addMessage(
        "Tack för att du berättade för mig. 💚 Det låter som en fin stund. Jag hoppas att resten av dagen fortsätter lika bra.",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="otisChoice('lugnt')">
            🌿 Bara vara med Otis
        </button>


        <button onclick="otisChoice('aktivitet')">
            🌱 Hitta på något
        </button>

    `;

}

function showDialogMoreQuestion() {

    addMessage(
        "Jag lyssnar. 💚 Du behöver inte säga allt på en gång. Berätta bara det du vill dela med mig.",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="dialogMoreChoice()">
            🌿 Tillbaka till Otis
        </button>

    `;

}

function dialogMoreChoice() {

    addMessage(
        "Tack för att du berättade för mig. 💚 Det kan kännas skönt att få dela sina tankar med någon som lyssnar.",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="otisChoice('lugnt')">
            🌿 Bara vara med Otis
        </button>

        <button onclick="otisChoice('aktivitet')">
            🌱 Hitta på något
        </button>

    `;

}

function otisChoice(choice) {


    if (choice === "lugnt") {

        addMessage(
            "Då gör vi det. 💚 Man behöver inte alltid prata eller göra något. Jag finns här med dig en stund.",
            "otis"
        );


        const actions =
            document.getElementById("actions");


        actions.innerHTML = `

            <button onclick="showMainMenu()">
                🦦 Tillbaka när du vill
            </button>

        `;

    }



    if (choice === "aktivitet") {

        addMessage(
            "Vad roligt! 🌿 Då hittar vi på något tillsammans. Vad är du sugen på?",
            "otis"
        );


        showActivity();

    }

}

function showStory() {

    const storyList =
    stories[currentFriend.id];


    const story =
        storyList[
            Math.floor(
                Math.random() * storyList.length
            )
        ];


    addMessage(
        story.text,
        "otis"
    );


    showMainMenu();

}



function showSupport() {

    const supportMessages = [

        "Jag är glad att du kom hit en stund. Du behöver inte alltid göra något. Ibland räcker det att bara stanna upp.",

        "Kom ihåg att du också behöver omtanke. Jag hoppas att du kan vara lite snäll mot dig själv idag.",

        "Om dagen känns stor kan vi ta den i små bitar tillsammans."

    ];


    const message =
        supportMessages[
            Math.floor(
                Math.random() * supportMessages.length
            )
        ];


    addMessage(
        message,
        "otis"
    );


    showMainMenu();

}

function showAboutFriend() {

    addMessage(
        `Vad roligt att du vill veta lite mer om mig. 💚\n\n${currentFriend.about}`,
        currentFriend.id
    );

}

function showFriendInfo(person) {

    const actions =
        document.getElementById("actions");


    if (person === "owner") {

        actions.innerHTML = `

            <p>
                🌿 ${otisMemory.owner.name}
            </p>

            <p>
                Min huvudvän 💚
            </p>

            <button onclick="showFriends()">
                ⬅️ Tillbaka
            </button>

        `;

        return;

    }


    const friend =
        otisMemory.friends[person];


    if (!friend) return;


    actions.innerHTML = `

        <p>
            ${friend.type === "child" ? "🧒" : "👤"}
            ${friend.name}
        </p>

        <p>
            ${friend.type === "child"
                ? (friend.age ? `${friend.age} år` : "Barn")
                : friend.role || ""
            }
        </p>


        <button onclick="showFriends()">
            ⬅️ Tillbaka
        </button>

    `;

}

/*
   Otis ryggsäck
*/

const backpack = document.getElementById("backpack");

if (backpack) {

    backpack.addEventListener("click", () => {

        addMessage(
            "Vad är det där?",
            "user"
        );


        setTimeout(() => {

            addMessage(
    "Åh, det här är min ryggsäck! Jag brukar ta med mig små saker från mina äventyr. Vill du öppna den?",
    "otis"
);

showBackpackChoice();

        }, 800);

    });

}

/*
   Aktivitetsmenyn
*/

const actionsContainer =
    document.getElementById("actions");

if (actionsContainer) {

    actionsContainer.addEventListener("click", (event) => {

        const button = event.target.closest("button");

        if (!button) return;

        const text = button.textContent.trim();

        if (text) {
            addMessage(text, "user");
        }

    }, true);


    const observer =
        new MutationObserver(() => {

            updateActionLayout();

        });


    observer.observe(
        actionsContainer,
        {
            childList: true
        }
    );

}

function paintIdea(randomIdea) {
    if (randomIdea) {
        const ideas = [
            "🎨 Måla något som gör dig glad. ☀️",
            "🦦 Rita ditt favoritdjur.",
            "🌸 Måla en blomma som du själv hittar på.",
            "🌈 Måla en bild med dina favoritfärger.",
            "🌳 Rita ett träd som ser ut precis som du vill.",
            "🏴‍☠️ Rita en skattkarta till en hemlig plats.",
            "🌊 Måla hur du tror att det ser ut under vattenytan.",
            "✨ Rita ett helt nytt djur som ingen har sett förut.",
            "😊 Rita någon som får dig att le.",
            "🏡 Rita ett hus där Otis skulle vilja bo.",
            "🌲 Måla en mysig plats där du skulle vilja vara.",
            "☁️ Rita vad du tror finns bakom molnen.",
            "🪄 Måla en magisk värld där allt är möjligt.",
            "🐾 Rita spår från ett djur och hitta på vart det är på väg.",
            "🌙 Måla hur du tror att Otis värld ser ut på natten.",
            "🎈 Rita något som kan flyga, men som egentligen inte kan flyga.",
            "🍓 Måla din alldeles egna fantasifrukt.",
            "🏞️ Rita en plats där Otis och du skulle kunna ha ett äventyr.",
            "💭 Rita något du skulle vilja hitta om du gick på upptäcktsfärd.",
            "⭐ Måla en bild som du tycker känns lugn och mysig."
        ];

        addMessage(
            ideas[Math.floor(Math.random() * ideas.length)],
            "otis"
        );

    } else {

        addMessage(
            "Vad spännande! 💚 Jag ser fram emot att höra om vad du målade sen.",
            "otis"
        );

    }

    currentActivity = {
        type: "paint",
        badgeType: "skapar",
        completed: "Vilken fin skapelse! 🎨 Jag hoppas att du hade roligt.",
        skipped: "Det gör inget. Vi kan måla en annan dag. 💚"
    };

    const actions =
        document.getElementById("actions");

    actions.innerHTML = `

        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>

        <button onclick="simpleActivitySkipped()">
            🌿 Vi hann inte idag
        </button>

    `;

}

function chooseBuildMaterial(material) {
    const ideas = {
        lego: [
            "🧱 Bygg ett hus av LEGO där Otis kan bo.",
            "🚗 Bygg ett LEGO-fordon som kan ta dig och Otis på äventyr.",
            "🏰 Bygg ett LEGO-slott med torn och hemliga rum.",
            "🌉 Bygg en LEGO-bro som Otis kan gå över.",
            "🦦 Bygg en LEGO-kompis till Otis.",
            "🏝️ Bygg en egen liten värld av LEGO.",
            "🚀 Bygg en LEGO-maskin som kan ta Otis till en hemlig plats.",
            "🐾 Bygg ett hem av LEGO åt ett djur.",
            "🌲 Bygg en liten LEGO-skog där Otis kan utforska.",
            "✨ Bygg något helt eget av LEGO som Otis aldrig har sett förut."
        ],
        duplo: [
            "🏠 Bygg ett mysigt hem av DUPLO där Otis kan bo.",
            "🦦 Bygg en plats av DUPLO där ett djur kan trivas.",
            "🌳 Bygg en liten naturvärld av DUPLO.",
            "🚜 Bygg ett DUPLO-fordon som kan åka på äventyr.",
            "🏥 Bygg en plats av DUPLO där någon kan få hjälp.",
            "🏰 Bygg en spännande plats av DUPLO som Otis kan upptäcka.",
            "🌊 Bygg en DUPLO-värld vid vattnet där Otis kan leka.",
            "🐾 Bygg ett litet djurhem av DUPLO.",
            "🌈 Bygg en färgglad värld av DUPLO där du bestämmer vad som finns.",
            "✨ Bygg något helt eget av DUPLO och bestäm själv vad det ska bli."
        ],
        blocks: [
            "🏰 Bygg ett torn av klossar som är så högt du kan.",
            "🌉 Bygg en bro av klossar över ett låtsasvatten.",
            "🏡 Bygg ett eget litet hus av klossar.",
            "🗼 Bygg ett torn av klossar som nästan når molnen.",
            "🦉 Bygg ett hem av klossar åt ett djur.",
            "🌊 Bygg något av klossar som passar vid Otis vatten.",
            "🌲 Bygg en liten skog av klossar med egna platser att upptäcka.",
            "🦦 Bygg en trygg viloplats av klossar där Otis kan vila.",
            "🚂 Bygg ett fordon av klossar som kan ta sig genom din värld.",
            "✨ Bygg något helt eget av klossar och bestäm själv vad det ska vara."
        ],
        fort: [
            "🏕️ Bygg en mysig koja av filtar och kuddar där du och Otis kan vila.",
            "✨ Bygg en hemlig koja av filtar och kuddar för ett litet äventyr.",
            "📚 Bygg en mysig läshörna av filtar och kuddar.",
            "🌧️ Bygg en koja av filtar och kuddar där man kan mysa när det regnar.",
            "🦦 Bygg en liten koja av filtar och kuddar där Otis kan hälsa på.",
            "🌿 Bygg en gömd koja av filtar och kuddar som blir er hemliga plats.",
            "🔦 Bygg en hemlig koja av filtar och kuddar där ni kan berätta historier.",
            "🌙 Bygg en mysig nattkoja av filtar och kuddar där Otis kan sova.",
            "🗺️ Bygg en äventyrskoja av filtar och kuddar som blir er hemliga bas.",
            "💚 Bygg den mysigaste kojan du kan med filtar och kuddar."
        ],
        clay: [
            "🪨 Forma ett djur av lera.",
            "🌿 Skapa en liten skatt av lera till Otis.",
            "🦦 Forma något av lera som kan bo i Otis värld.",
            "🍄 Skapa en liten figur av lera som du hittar på själv.",
            "💚 Forma ett hjärta eller en liten gåva av lera.",
            "🏡 Bygg en liten värld av lera.",
            "🐾 Forma ett litet djur av lera och hitta på vad det heter.",
            "🌸 Skapa en fantasiblomma av lera.",
            "🪨 Forma en magisk sten av lera som Otis kan hitta.",
            "✨ Skapa något helt eget av lera och bestäm själv vad det blir."
        ],
        other: "showOtherBuildMaterials",
        nature: [
            "🌿 Bygg något av saker du hittar i naturen.",
            "🍂 Skapa ett konstverk av löv, pinnar och annat du hittar i naturen.",
            "🪵 Bygg en liten viloplats åt Otis av naturmaterial.",
            "🌸 Skapa en bild eller figur av löv, pinnar och andra naturmaterial.",
            "🐾 Gör ett mönster på marken med löv, pinnar och andra saker du hittar i naturen.",
            "✨ Hitta några naturmaterial och skapa något helt eget."
        ],
        cardboard: [
            "📦 Bygg något av en kartong.",
            "✂️ Skapa något av papper och kartong.",
            "🏠 Bygg ett litet hus av kartong.",
            "🚗 Bygg ett fordon av kartong och papper.",
            "🦦 Bygg ett litet hem åt Otis av kartong.",
            "✨ Förvandla en kartong till något helt annat."
        ],
        fabric: [
            "🧶 Skapa något mjukt av tyg eller garn.",
            "🏕️ Bygg en mysig plats med tyg och garn.",
            "🦦 Gör en liten filt eller sovplats åt Otis av tyg.",
            "🎨 Skapa ett mönster med olika tyger eller garn.",
            "🪡 Skapa något du kan använda eller leka med av tyg eller garn.",
            "✨ Blanda tyg och garn och skapa något helt eget."
        ],
        recycle: [
            "♻️ Förvandla något gammalt till något nytt.",
            "✨ Bygg något av saker som annars skulle slängas.",
            "📦 Förvandla en gammal förpackning till något roligt.",
            "🚗 Bygg ett fordon av saker du annars skulle slänga.",
            "🏠 Skapa ett litet hus av gamla förpackningar och andra saker.",
            "🦦 Bygg något av gamla saker som Otis skulle kunna använda."
        ],
        mixed: [
            "🌈 Blanda olika material och skapa något helt eget.",
            "🦦 Bygg något av flera olika material som Otis aldrig har sett förut.",
            "✨ Använd minst tre olika material och skapa något nytt.",
            "🏡 Skapa en liten värld med flera olika material.",
            "🎨 Blanda material, färger och former och se vad det blir.",
            "🪄 Skapa något magiskt genom att kombinera olika material."
        ]
    };


    const list = ideas[material];


if (list === "showOtherBuildMaterials") {

    showOtherBuildMaterials();

    return;

}


addMessage(
    list[Math.floor(Math.random() * list.length)],
    "otis"
);


    currentActivity = {

        type: "build",
        badgeType: "skapar",
        completed:
        "Vilket fint bygge! 🧱 Jag hoppas att du hade roligt.",

        skipped:
        "Det gör inget. Vi kan bygga en annan gång. 💚"

    };


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>

        <button onclick="simpleActivitySkipped()">
            🌿 Vi hann inte idag
        </button>

    `;

}

function showOtherBuildMaterials() {

addMessage(
    "Vad spännande! Ibland kan de bästa idéerna komma från saker man redan har hemma. 💚",
    "otis"
);
    
    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="chooseBuildMaterial('nature')">
            🌿 Naturmaterial
        </button>

        <button onclick="chooseBuildMaterial('cardboard')">
            📦 Kartong & papper
        </button>

        <button onclick="chooseBuildMaterial('fabric')">
            🧶 Tyger & garn
        </button>

        <button onclick="chooseBuildMaterial('recycle')">
            ♻️ Återbruk
        </button>

        <button onclick="chooseBuildMaterial('mixed')">
            ✨ Blandat
        </button>

        <button onclick="simpleActivity('build')">
    ⬅️ Tillbaka
</button>

    `;

}

function chooseCraft(material) {
    const ideas = {
        beads: [
            "📿 Gör ett armband av pärlor i dina favoritfärger.",
            "🦋 Skapa en liten figur av pärlor.",
            "🌈 Gör ett färgglatt mönster med pärlor.",
            "💚 Gör ett hjärta av pärlor.",
            "🌸 Skapa en blomma av pärlor.",
            "🦦 Gör något av pärlor som Otis skulle tycka om.",
            "⭐ Skapa en stjärna av pärlor.",
            "🐾 Gör ett litet djur av pärlor.",
            "🎨 Blanda olika färger av pärlor och skapa något helt eget.",
            "🎁 Gör en liten gåva av pärlor till någon du tycker om.",
            "✨ Skapa något av pärlor som du aldrig har gjort förut.",
            "💎 Gör ett färgglatt pärlsmycke som bara finns i din fantasi."
        ],
        beadplate: [
            "🟦 Gör ett djur på pärlplattan.",
            "❤️ Gör ett hjärta på pärlplattan.",
            "🌈 Skapa ett färgglatt mönster på pärlplattan.",
            "🌸 Gör en blomma på pärlplattan.",
            "🦋 Skapa en fjäril på pärlplattan.",
            "⭐ Gör en stjärna på pärlplattan.",
            "🦦 Gör en bild av Otis på pärlplattan.",
            "🐾 Skapa ett eget djur på pärlplattan.",
            "🏠 Gör ett litet hus på pärlplattan.",
            "🌳 Skapa ett träd eller en liten skog på pärlplattan.",
            "🌙 Gör en bild av natten på pärlplattan.",
            "✨ Hitta på ett helt eget mönster på pärlplattan."
        ],
        paper: [
            "📄 Gör ett kort av papper till någon du tycker om.",
            "🦋 Vik eller klipp en fjäril av papper.",
            "🌸 Klipp eller rita en blomma på papper.",
            "🦦 Gör en liten Otis-figur av papper.",
            "🏠 Skapa ett litet hus av papper.",
            "🐾 Gör ett djur av papper.",
            "🌈 Skapa ett färgglatt konstverk av papper.",
            "✉️ Gör ett eget brev eller kort av papper.",
            "🎭 Skapa en enkel figur eller mask av papper.",
            "🌳 Gör ett träd av papper och fyll det med löv.",
            "⭐ Klipp eller rita stjärnor av papper och skapa en liten värld.",
            "✨ Använd papper och skapa något helt eget."
        ],
        yarn: [
            "🧶 Skapa något mjukt av garn.",
            "🌈 Gör ett färgglatt mönster med garn.",
            "💚 Skapa ett litet hjärta av garn.",
            "🌸 Gör en enkel blomma av garn.",
            "🦦 Skapa något av garn som Otis skulle kunna använda.",
            "🐾 Gör en liten figur av garn.",
            "🎨 Blanda olika färger av garn och skapa något eget.",
            "⭐ Skapa en stjärna eller annan form av garn.",
            "🎁 Gör en liten gåva av garn till någon du tycker om.",
            "🪢 Testa att göra något genom att fläta eller knyta garn.",
            "✨ Använd garn på ett sätt du inte har provat förut.",
            "🌿 Skapa något som påminner om naturen med hjälp av garn."
        ]
    };
    const list = ideas[material];
    // Slumpa fram ett enda pysselförslag
    addMessage(
        list[Math.floor(Math.random() * list.length)],
        "otis"
    );
    // Spara aktiviteten
    currentActivity = {
        type: "craft",
        badgeType: "skapar",
        completed:
        "Vad fint du skapade! ✂️ Jag tycker om att pyssla tillsammans med dig.",
        skipped:
        "Det gör inget. Vi kan pyssla en annan dag. 💚"
    };
    // Visa knapparna
    const actions =
        document.getElementById("actions");
    actions.innerHTML = `
        <button onclick="simpleActivityDone()">
            ✅ Vi gjorde det!
        </button>
        <button onclick="simpleActivitySkipped()">
            🌿 Vi hann inte idag
        </button>
    `;
}

/*
   Kom ihåg dagens vy
*/

function saveCurrentView(view) {

    localStorage.setItem(
        "otisCurrentView",
        view
    );

}

function getCurrentView() {

    return (
        localStorage.getItem("otisCurrentView")
        || "friend"
    );

}

/*
   Ryggsäcksvy
*/

function openBackpackRoom(updateUrl = true) {

    saveCurrentView("backpack");

    updateAllBadges();

    if (updateUrl && currentFriend) {

        history.replaceState(
            null,
            "",
            `?id=${currentFriend.id}#backpack`
        );

    }

    document
        .getElementById("friend-view")
        .style.display = "none";

    document
        .getElementById("backpack-view")
        .style.display = "block";

}

function closeBackpackRoom() {

    saveCurrentView("friend");

    history.replaceState(
        null,
        "",
        `?id=${currentFriend.id}`
    );

    document
        .getElementById("backpack-view")
        .style.display = "none";

    document
        .getElementById("friend-view")
        .style.display = "block";


    showMainMenu();

}




function restoreCurrentView() {
    const hash = window.location.hash;
    if (hash === "#backpack") {
        document.getElementById("friend-view").style.display = "none";
        document.getElementById("backpack-view").style.display = "block";
        document.getElementById("storybook").style.display = "none";
        document.getElementById("factbook").style.display = "none";
        document.getElementById("recipebook").style.display = "none";
        document.getElementById("photoalbum").style.display = "none";
        updateAllBadges();
    }
    else if (hash === "#book") {
        currentBookType = "book";
        currentBookData = bookData;
        document.getElementById("friend-view").style.display = "none";
        document.getElementById("backpack-view").style.display = "none";
        document.getElementById("storybook").style.display = "block";
        document.getElementById("factbook").style.display = "none";
        document.getElementById("recipebook").style.display = "none";
        document.getElementById("photoalbum").style.display = "none";
        currentBookPage =
            Number(
                localStorage.getItem("book-page")
            ) || 0;
        updateBookPage();
    }
    else if (hash === "#factbook") {
        currentBookType = "factbook";
        currentBookData = factBookData;
        document.getElementById("friend-view").style.display = "none";
        document.getElementById("backpack-view").style.display = "none";
        document.getElementById("storybook").style.display = "none";
        document.getElementById("factbook").style.display = "block";
        document.getElementById("recipebook").style.display = "none";
        document.getElementById("photoalbum").style.display = "none";
        currentBookPage =
            Number(
                localStorage.getItem("factbook-page")
            ) || 0;
        updateBookPage();
    }
    else if (hash === "#recipebook") {
        currentBookType = "recipebook";
        currentBookData = recipeBookData;
        document.getElementById("friend-view").style.display = "none";
        document.getElementById("backpack-view").style.display = "none";
        document.getElementById("storybook").style.display = "none";
        document.getElementById("factbook").style.display = "none";
        document.getElementById("recipebook").style.display = "block";
        document.getElementById("photoalbum").style.display = "none";
        currentBookPage =
            Number(
                localStorage.getItem("recipebook-page")
            ) || 0;
        updateBookPage();
    }
    else if (hash === "#photoalbum") {
        currentBookType = "photoalbum";
        currentBookData = photoAlbumData;
        document.getElementById("friend-view").style.display = "none";
        document.getElementById("backpack-view").style.display = "none";
        document.getElementById("storybook").style.display = "none";
        document.getElementById("factbook").style.display = "none";
        document.getElementById("recipebook").style.display = "none";
        document.getElementById("photoalbum").style.display = "block";
        currentBookPage =
            Number(
                localStorage.getItem("photoalbum-page")
            ) || 0;
        updateBookPage();
    }
    else {
        document.getElementById("friend-view").style.display = "block";
        document.getElementById("backpack-view").style.display = "none";
        document.getElementById("storybook").style.display = "none";
        document.getElementById("factbook").style.display = "none";
        document.getElementById("recipebook").style.display = "none";
        document.getElementById("photoalbum").style.display = "none";
    }
}

/*
   HEJ DÅ OTIS
*/

function showGoodbye() {

    addMessage(
        "Ska någon gå hem nu? 💚",
        "otis"
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = "";

if (otisMemory.companionToday) {

    actions.innerHTML += `

        <button onclick="goodbyePerson('both')">
            🦦 Vi går båda
        </button>

    `;

}


    if (otisMemory.owner) {

        actions.innerHTML += `

            <button onclick="goodbyePerson('owner')">
                🌿 ${otisMemory.owner.name} går
            </button>

        `;

    }


    if (otisMemory.companionToday) {

        actions.innerHTML += `

            <button onclick="goodbyePerson('companion')">
                🌿 ${otisMemory.companionToday.name} går
            </button>

        `;

    }

actions.innerHTML += `

    <button onclick="showMainMenu()">
        ⬅️ Tillbaka
    </button>

`;
    
}

function goodbyePerson(person) {


    if (person === "both") {

        addMessage(
            "Då säger jag hej då för idag. 💚 Tack för den här stunden, jag hoppas vi ses snart igen!",
            "otis"
        );


        setTimeout(() => {

            otisLeaves();

        }, 1500);

        setTimeout(() => {

    resetOtisView();

}, 12000);

        return;

    }


    let name = "";


    if (person === "owner") {

    name = otisMemory.owner.name;

    if (!otisMemory.companionToday) {

        addMessage(
            `Hejdå ${name}! 💚 Tack för den här stunden, jag hoppas vi ses snart igen!`,
            "otis"
        );

        setTimeout(() => {

            otisLeaves();

        }, 1500);

        setTimeout(() => {

    resetOtisView();

}, 12000);

        return;

    }

}


    if (person === "companion") {

        name = otisMemory.companionToday.name;

    }


    addMessage(
        `Hejdå ${name}! 💚 Tack för att jag fick vara med en stund. Vi ses snart igen.`,
        "otis"
    );


    setTimeout(() => {

        showMainMenu();

    }, 2000);

}

function otisLeaves() {

    const stone =
        document.getElementById("friend-stone");

    const otis =
        document.getElementById("friend-character");

    const face =
        document.getElementById("friend-character-face");


    if (!stone || !otis || !face) return;


    stone.style.opacity = "1";

    otis.style.opacity = "0";

    face.style.opacity = "0";
    face.src = "";

}

function resetOtisView() {

    const stone =
        document.getElementById("friend-stone");

    const otis =
        document.getElementById("friend-character");

    const face =
        document.getElementById("friend-character-face");


    if (!stone || !otis || !face) return;


    stone.style.opacity = "0";

    otis.style.opacity = "1";

    face.style.opacity = "0";
    face.src = "";


    showMainMenu();

}

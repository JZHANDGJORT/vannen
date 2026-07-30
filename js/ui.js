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

        <button onclick="addFriend()">
            ➕ Presentera någon
        </button>

        <button onclick="changeName()">
            ✏️ Mitt namn
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


    actions.innerHTML = `

        <button onclick="chooseActivityNeed('free')">
            🌿 Hitta på något
        </button>

        <button onclick="chooseActivityNeed('read')">
            📚 Läsa
        </button>

        <button onclick="chooseActivityNeed('math')">
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


    if (type === "free") {

        addMessage(
            "Vad mysigt! 🌊 Vill du göra något inne eller ge dig ut på ett litet äventyr?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="chooseActivityPlace('indoor')">
                🏡 Inne
            </button>

            <button onclick="chooseActivityPlace('outdoor')">
                🌳 Ute
            </button>

            <button onclick="showActivity()">
            ⬅️ Tillbaka
            </button>

        `;

        return;

    }


    if (type === "read") {

        addMessage(
            "Vad mysigt! 📚 Har du en bok som vi kan läsa tillsammans?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="simpleActivity('read')">
                📖 Ja, jag har en bok
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
            "Jag hjälper gärna till! ➕ Har du något du vill räkna på?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="simpleActivity('homework')">
                📝 Jag har en läxa
            </button>

            <button onclick="simpleActivity('challenge')">
                🔢 Ge mig en liten utmaning
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
                🌿 Andas en stund
            </button>

            <button onclick="simpleActivity('pause')">
                💚 Bara vara
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
        "Vad roligt! ✂️ Vad vill du pyssla med idag?",   

        breathe:
        "Vi tar tre lugna andetag tillsammans. 🌊",

        pause:
        "Ibland behöver man bara vara en stund. Jag stannar här. 💚",

        five:
        "Fem saker räcker! Ett litet steg kan göra stor skillnad. ⭐",

        tidy10:
        "Bra idé! 🌿 Vi tar 10 minuter tillsammans och ser hur mycket vi hinner.",

         room:
         "Det här är ett större uppdrag. 🏡 Vi gör fint i ett rum tillsammans.",

         box:
         "Ett riktigt hjälteuppdrag! 📦 Vi går igenom en låda eller ett skåp och gör det lättare att hitta saker."
    };


    addMessage(
    messages[type],
    "otis"
);

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

        <button onclick="chooseActivityNeed(type)">
        ⬅️ Tillbaka
        </button>



    `;

    return;

}

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

        <button onclick="chooseActivityNeed(type)">
        ⬅️ Tillbaka
        </button>

    `;

    return;

}

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

        <button onclick="chooseActivityNeed(type)">
        ⬅️ Tillbaka
        </button>

    `;

    return;

}

    if (type === "tidy10") {

    startOtisTimer();

    return;

}

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

function startOtisTimer() {

    currentActivity = {
        type: "tidy10",
        completed:
            "Wow! ⭐ Tio minuter gick fort. Jag är stolt över oss!",
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

                addMessage(
                    "Wow! ⭐ Tio minuter gick fort. Jag är stolt över oss!",
                    "otis"
                );


                showMainMenu();

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

    addMessage(
        "Hej! 🌊 Jag är glad att du kom förbi en stund. Hur känns det idag?",
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

        addMessage(
            "Vad fint att höra! 💚 Jag blir glad när du har en bra dag.",
            "otis"
        );


        setTimeout(() => {

            actions.innerHTML = `

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

            "🌸 Måla en vacker blomma.",

            "🌈 Måla med regnbågens alla färger.",

            "🌳 Rita ditt drömträd.",

            "🏴‍☠️ Rita en skattkarta till en hemlig plats.",

            "🌊 Måla hur du tror att havets botten ser ut.",

            "✨ Hitta på ett helt nytt djur.",

            "😊 Rita någon som får dig att le.",

            "🏡 Rita ett hus där Otis skulle vilja bo."

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
    "🧱 Bygg ett hus där Otis kan bo.",
    "🚗 Bygg ett fordon som kan åka på äventyr.",
    "🏰 Bygg ett slott med torn.",
    "🌉 Bygg en bro som Otis kan gå över.",
    "🦦 Bygg en kompis till Otis.",
    "🏝️ Bygg en egen liten värld."
],

duplo: [
    "🏠 Bygg ett mysigt hem.",
    "🦦 Bygg en plats där ett djur kan trivas.",
    "🌳 Bygg en liten värld med natur.",
    "🚜 Bygg ett fordon för äventyr.",
    "🏥 Bygg något där någon kan få hjälp.",
    "🏰 Bygg en spännande plats att upptäcka."
],

blocks: [
    "🏰 Bygg det högsta tornet du kan.",
    "🌉 Bygg en bro över ett låtsasvatten.",
    "🏡 Bygg ett eget litet hus.",
    "🗼 Bygg ett torn som når molnen.",
    "🦉 Bygg ett hem åt ett djur.",
    "🌊 Bygg något som passar vid Otis vatten."
],

fort: [
    "🏕️ Bygg en mysig koja där du och Otis kan vila.",
    "✨ Gör en hemlig plats för äventyr.",
    "📚 Bygg en läshörna.",
    "🌧️ Bygg en plats där man kan mysa när det regnar.",
    "🦦 Gör en koja där Otis kan hälsa på.",
    "🌿 Bygg en gömd plats i naturen."
],

clay: [
    "🪨 Forma ett djur.",
    "🌿 Skapa en liten skatt till Otis.",
    "🦦 Gör något som kan bo i Otis värld.",
    "🍄 Skapa en liten figur från naturen.",
    "💚 Gör ett hjärta eller en gåva.",
    "🏡 Bygg en liten värld i lera."
],
     other: "showOtherBuildMaterials",

nature: [

    "🌿 Bygg något av saker du hittar i naturen.",

    "🍂 Skapa ett konstverk av löv och pinnar."

],

cardboard: [

    "📦 Bygg något av en kartong.",

    "✂️ Skapa något med papper och kartong."

],

fabric: [

    "🧶 Skapa något mjukt med tyg eller garn.",

    "🏕️ Bygg en mysig plats med olika tyger."

],

recycle: [

    "♻️ Förvandla något gammalt till något nytt.",

    "✨ Bygg något av saker som annars skulle slängas."

],

mixed: [

    "🌈 Blanda olika material och skapa något helt eget.",

    "🦦 Bygg något som Otis aldrig har sett förut."

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

        beads:
        "📿 Vi kan göra ett fint armband, en figur eller något helt eget av pärlor.",

        beadplate:
        "🟦 Vi kan göra ett djur, ett hjärta eller hitta på ett eget mönster.",

        paper:
        "📄 Vi kan göra ett kort, en pappersfigur eller något fint att ge bort.",

        yarn:
        "🧶 Vi kan skapa något mjukt och färgglatt av garn."

    };


    addMessage(
        ideas[material],
        "otis"
    );


    currentActivity = {

        type: "craft",

        completed:
        "Vad fint du skapade! ✂️ Jag tycker om att pyssla tillsammans med dig.",

        skipped:
        "Det gör inget. Vi kan pyssla en annan dag. 💚"

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

    if (getCurrentView() === "backpack") {

        document.getElementById("friend-view").style.display = "none";
        document.getElementById("backpack-view").style.display = "block";

    } else {

        document.getElementById("friend-view").style.display = "block";
        document.getElementById("backpack-view").style.display = "none";

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


    if (!stone || !otis) return;


    stone.style.opacity = "1";

    otis.style.opacity = "0";

}

function resetOtisView() {

    const stone =
        document.getElementById("friend-stone");

    const otis =
        document.getElementById("friend-character");


    if (!stone || !otis) return;


    stone.style.opacity = "0";

    otis.style.opacity = "1";


    showMainMenu();

}

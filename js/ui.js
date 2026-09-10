





























function showOtisTimer(endTime) {

    const actions =
        document.getElementById("actions");

    const timer =
        document.getElementById("activity-timer");

    const timerTime =
        document.getElementById("timer-time");

    if (!actions || !timer || !timerTime) return;

    timer.classList.remove("activity-hidden");

    actions.innerHTML = `
        <button onclick="finishOtisTimer()">
            🌿 Jag är klar
        </button>

        <button onclick="simpleActivitySkipped()">
            🌱 Vi hann inte idag
        </button>
    `;

    updateOtisTimer(endTime);

    window.otisTimer =
        setInterval(() => {
            updateOtisTimer(endTime);
        }, 1000);

}


function updateOtisTimer(endTime) {

    const timer =
        document.getElementById("activity-timer");

    const timerTime =
        document.getElementById("timer-time");

    if (!timer || !timerTime) return;

    const remaining =
        Math.max(
            0,
            Math.ceil(
                (endTime - Date.now()) / 1000
            )
        );

    const minutes =
        Math.floor(remaining / 60);

    const seconds =
        remaining % 60;

    timerTime.textContent =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remaining <= 0) {

        clearInterval(window.otisTimer);

        window.otisTimer = null;

        localStorage.removeItem(
            "otis-active-timer"
        );

        timer.classList.add(
            "activity-hidden"
        );

        playOtisTimerSound();

        simpleActivityDone();
    }

}


function finishOtisTimer() {

    clearInterval(window.otisTimer);

    window.otisTimer = null;

    localStorage.removeItem(
        "otis-active-timer"
    );

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

function restoreOtisTimer() {

    const savedTimer =
        localStorage.getItem(
            "otis-active-timer"
        );

    if (!savedTimer) return;

    let data;

    try {

        data =
            JSON.parse(savedTimer);

    } catch (error) {

        localStorage.removeItem(
            "otis-active-timer"
        );

        return;
    }

    currentActivity = {
        type: data.type,
        badgeType:
            data.type === "read"
                ? "lasar"
                : null,
        completed:
            data.type === "read"
                ? "Bra jobbat! 📚 Vi läste tillsammans i 10 minuter. 🌟"
                : "Wow! ⭐ Tio minuter gick fort. Jag är stolt över oss!",
        skipped:
            "Det gör inget. Vi kan prova en annan gång. 🌿"
    };

    // Timern har redan gått ut
    if (data.endTime <= Date.now()) {

        showOtisTimer(data.endTime);

        updateOtisTimer(data.endTime);

        return;
    }

    // Timern pågår fortfarande
    showOtisTimer(data.endTime);

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
                🐾 Tillbaka när du vill
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
        document.getElementById("discoverbook").style.display = "none";
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
        document.getElementById("discoverbook").style.display = "none";
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
        document.getElementById("discoverbook").style.display = "none";
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
        document.getElementById("discoverbook").style.display = "none";
        document.getElementById("photoalbum").style.display = "none";

        currentBookPage =
            Number(
                localStorage.getItem("recipebook-page")
            ) || 0;

        updateBookPage();
    }

    else if (hash === "#discoverbook") {
        currentBookType = "discoverbook";
        currentBookData = discoverBookData;
        document.getElementById("friend-view").style.display = "none";
        document.getElementById("backpack-view").style.display = "none";
        document.getElementById("storybook").style.display = "none";
        document.getElementById("factbook").style.display = "none";
        document.getElementById("recipebook").style.display = "none";
        document.getElementById("discoverbook").style.display = "block";
        document.getElementById("photoalbum").style.display = "none";

        currentBookPage =
            Number(
                localStorage.getItem("discoverbook-page")
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
        document.getElementById("discoverbook").style.display = "none";
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
        document.getElementById("discoverbook").style.display = "none";
        document.getElementById("photoalbum").style.display = "none";
    }
}

/*
   HEJ DÅ VÄNNEN
*/

function showGoodbye() {

    addMessage(
        "Ska någon gå hem nu? 💚",
        currentFriend.id
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = "";


    if (friendMemory.companionToday) {

        actions.innerHTML += `

            <button onclick="goodbyePerson('both')">
                🐾 Vi går båda
            </button>

        `;

    }


    if (friendMemory.owner) {

        actions.innerHTML += `

            <button onclick="goodbyePerson('owner')">
                🌿 ${friendMemory.owner.name} går
            </button>

        `;

    }


    if (friendMemory.companionToday) {

        actions.innerHTML += `

            <button onclick="goodbyePerson('companion')">
                🌿 ${friendMemory.companionToday.name} går
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


    const friendId =
        currentFriend.id;


    const friendName =
        currentFriend.name;


    if (person === "both") {

        addMessage(
            `Då säger jag hej då för idag. 💚 Tack för den här stunden, jag hoppas vi ses snart igen!`,
            friendId
        );


        setTimeout(() => {

            friendLeaves();

        }, 1500);


        setTimeout(() => {

            resetFriendView();

        }, 12000);


        return;

    }


    let name = "";


    if (person === "owner") {

        name =
            friendMemory.owner.name;


        if (!friendMemory.companionToday) {

            addMessage(
                `Hejdå ${name}! 💚 Tack för den här stunden, jag hoppas vi ses snart igen!`,
                friendId
            );


            setTimeout(() => {

                friendLeaves();

            }, 1500);


            setTimeout(() => {

                resetFriendView();

            }, 12000);


            return;

        }

    }


    if (person === "companion") {

        name =
            friendMemory.companionToday.name;

    }


    addMessage(
        `Hejdå ${name}! 💚 Tack för att jag fick vara med en stund. Vi ses snart igen.`,
        friendId
    );


    setTimeout(() => {

        showMainMenu();

    }, 2000);

}


function friendLeaves() {

    const stone =
        document.getElementById("friend-stone");

    const friend =
        document.getElementById("friend-character");

    const face =
        document.getElementById("friend-character-face");


    if (!friend || !face) return;


    if (stone) {

        stone.style.opacity =
            "1";

    }


    friend.style.opacity =
        "0";

    face.style.opacity =
        "0";

    face.src =
        "";

}



function resetFriendView() {

    const stone =
        document.getElementById("friend-stone");

    const friend =
        document.getElementById("friend-character");

    const face =
        document.getElementById("friend-character-face");


    if (!friend || !face) return;


    if (stone) {

        stone.style.opacity =
            "0";

    }


    friend.style.opacity =
        "1";

    face.style.opacity =
        "0";

    face.src =
        "";


    showMainMenu();

}

/* ========================================
   KOMPAKT LAYOUT
   Lås läget vid sidans start
======================================== */

(function () {

    if (window.innerHeight <= 679) {

        document.documentElement.classList.add("compact-height");

        requestAnimationFrame(function () {

            const world = document.getElementById("friend-world");
            const actions = document.getElementById("actions");
            const chat = document.getElementById("chat");
            const timer = document.getElementById("activity-timer");

            /*
               Lås världens höjd utifrån hur den
               såg ut när sidan startade.
            */

            if (world) {
                world.style.height =
                    getComputedStyle(world).height;
            }

            if (actions) {
                actions.style.transform =
                    getComputedStyle(actions).transform;
            }

            if (chat) {
                chat.style.marginTop =
                    getComputedStyle(chat).marginTop;
            }

            if (timer) {
                timer.style.transform =
                    getComputedStyle(timer).transform;
            }

        });

    }

})();

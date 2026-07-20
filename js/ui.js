let currentActivity = null;
function showMainMenu() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button id="activity-button">
            🌱 Hitta på något tillsammans
        </button>

        <button id="dialog-button">
            💬 Prata en stund
        </button>

        <button id="story-button">
            📖 Berätta något
        </button>

        <button id="support-button">
            ❤️ Kan du peppa mig lite?
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
        .getElementById("story-button")
        .addEventListener(
            "click",
            showStory
        );


    document
        .getElementById("support-button")
        .addEventListener(
            "click",
            showSupport
        );

}



function showActivityMenu() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button id="done-button">
            ✅ Jag gjorde det
        </button>

        <button id="skip-button">
            ⏭ Hoppa över
        </button>

        <button id="dialog-button">
            💬 Prata lite
        </button>

    `;


    document
        .getElementById("done-button")
        .addEventListener(
            "click",
            activityDone
        );


    document
        .getElementById("skip-button")
        .addEventListener(
            "click",
            activitySkipped
        );


    document
        .getElementById("dialog-button")
        .addEventListener(
            "click",
            showDialog
        );

}



function showActivity() {

    const savedActivity =
        getCurrentActivity();


    if (
        hasActivityToday()
        &&
        savedActivity
    ) {

        currentActivity =
            savedActivity;


        addMessage(
            currentActivity.text,
            "otis"
        );


        showActivityMenu();

        return;

    }



    const activityList =
    activities[currentFriend.id];


    currentActivity =
        activityList[
            Math.floor(
                Math.random() * activityList.length
            )
        ];


    saveCurrentActivity(
        currentActivity
    );


    addMessage(
        currentActivity.text,
        "otis"
    );


    showActivityMenu();

}



function activityDone() {

    clearCurrentActivity();

    saveCompletedActivity(
        currentActivity
    );


    addMessage(
        "Vad fint att du gjorde det tillsammans med mig. 🌱",
        "otis"
    );


    showMainMenu();

}



function activitySkipped() {

    clearCurrentActivity();

    saveSkippedActivity(
        currentActivity
    );


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

        <button onclick="dialogAnswer('glad')">
            😊 Jag mår bra
        </button>

        <button onclick="dialogAnswer('jobbigt')">
            💚 Det har varit lite jobbigt
        </button>

        <button onclick="dialogAnswer('vetinte')">
            🤔 Jag vet inte riktigt
        </button>

    `;

}

function dialogAnswer(answer) {


    const actions =
        document.getElementById("actions");


    if (answer === "glad") {

        addMessage(
            "Vad fint att höra! 🌱 Jag blir glad när du berättar det. Vad var det bästa med din dag?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="dialogFollowUp('roligt')">
                🌞 Något roligt hände
            </button>

            <button onclick="dialogFollowUp('mysigt')">
                🦦 Jag gjorde något mysigt
            </button>

            <button onclick="dialogFollowUp('vetinte')">
                🤔 Jag vet inte riktigt
            </button>

        `;

    }



    if (answer === "jobbigt") {

        addMessage(
            "Då kan vi ta det lite lugnt tillsammans. 💚 Vill du berätta mer eller göra något som känns lite lättare?",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="dialogFollowUp('beratta')">
                💬 Berätta mer
            </button>

            <button onclick="dialogFollowUp('lugnt')">
                🌿 Göra något lugnt
            </button>

            <button onclick="dialogFollowUp('roligt')">
                🦦 Tänka på något roligt
            </button>

        `;

    }



    if (answer === "vetinte") {

        addMessage(
            "Det är helt okej. Ibland är det svårt att veta. Vi kan bara vara här en stund tillsammans. 💚",
            "otis"
        );


        actions.innerHTML = `

            <button onclick="dialogFollowUp('prata')">
                💬 Prata lite mer
            </button>

            <button onclick="dialogFollowUp('aktivitet')">
                🌱 Hitta på något
            </button>

            <button onclick="dialogFollowUp('lugn')">
                🌊 Bara vara en stund
            </button>

        `;

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

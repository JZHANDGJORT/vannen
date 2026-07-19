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
        activities[otis.id];


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

    const dialogList =
        dialogs[otis.id];


    const dialog =
        dialogList[
            Math.floor(
                Math.random() * dialogList.length
            )
        ];


    addMessage(
        dialog.otis,
        "otis"
    );


    showMainMenu();

}



function showStory() {

    const storyList =
        stories[otis.id];


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

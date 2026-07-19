function renderActions() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button id="activity-button" onclick="alert('Knappen fungerar!')">
    🌱 Göra något tillsammans
</button>
        <button id="dialog-button">
            💬 Prata en stund
        </button>

        <button id="story-button">
            📖 Berätta något
        </button>

        <button id="support-button">
            ❤️ Jag behöver lite pepp
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



function showActivity() {

    alert("Aktivitet fungerar!");

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
        dialog.structured === true
            ? dialog.structured
            : dialog.otis,
        "otis"
    );

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

}

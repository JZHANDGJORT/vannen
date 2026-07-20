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

    const userMessages = {

        glad: "Jag mår bra 😊",

        jobbigt: "Det har varit lite jobbigt 💚",

        vetinte: "Jag vet inte riktigt 🤔"

    };

    addMessage(

        userMessages[answer],

        "user"

    );

    const actions =
        document.getElementById("actions");


    if (answer === "glad") {

    const dialog =
        dialogs[currentFriend.id][0];


    const option =
        dialog.options.find(
            o => o.user === userMessages.glad
        );


    addMessage(
        option.reply,
        "otis"
    );


    actions.innerHTML = "";


    option.next.forEach(choice => {

        const button =
            document.createElement("button");


        button.textContent =
            choice.text;


        button.onclick = () => {

            addMessage(
                choice.user,
                "user"
            );


            addMessage(
                choice.reply,
                "otis"
            );

            showConversationMenu();

        };


        actions.appendChild(button);

    });

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

function dialogFollowUp(choice) {

const followUpMessages = {
    roligt: "Något roligt hände 🌞",
    mysigt: "Jag gjorde något mysigt 🦦",
    beratta: "Jag vill berätta mer 💬",
    lugnt: "Jag vill göra något lugnt 🌿",
    aktivitet: "Jag vill hitta på något 🌱",
    lugn: "Jag vill bara vara en stund 🌊",
    prata: "Jag vill prata lite mer 💚",
    vetinte: "Jag vet inte riktigt 🤔"
};


addMessage(
    followUpMessages[choice],
    "user"
);
    
    if (choice === "roligt") {

        addMessage(
            "Vad härligt! 🌱 Jag tycker om att höra om små fina saker. Små stunder kan göra en hel dag bättre.",
            "otis"
        );

    }


    if (choice === "mysigt") {

        addMessage(
            "Det låter mysigt. 🦦 Jag gillar när man tar sig tid att göra något som känns bra.",
            "otis"
        );

    }


    if (choice === "beratta") {

        addMessage(
            "Jag lyssnar. 💚 Berätta om du vill, jag stannar här en stund.",
            "otis"
        );

    }


    if (choice === "lugnt" || choice === "lugn") {

        addMessage(
            "Då gör vi något lugnt tillsammans. 🌊 Vi kan ta en liten paus och bara vara här en stund.",
            "otis"
        );

    }


    if (choice === "aktivitet") {

        addMessage(
            "Jag har en idé! 🌿 Ska vi hitta på något litet tillsammans?",
            "otis"
        );

    }


    if (choice === "prata") {

        addMessage(
            "Jag lyssnar gärna. Vad tänker du på?",
            "otis"
        );

    }


    if (choice === "vetinte") {

        addMessage(
            "Det är okej. Ibland behöver man inte ha ett svar direkt. 💚",
            "otis"
        );

    }


addMessage(
    "Vill du fortsätta prata en stund eller ska vi hitta på något annat? 🌊",
    "otis"
);


const actions =
    document.getElementById("actions");


actions.innerHTML = `

    <button onclick="continueDialog()">
    💬 Prata lite till
</button>

    <button onclick="showActivity()">
        🌱 Hitta på något
    </button>

    <button onclick="showMainMenu()">
        🦦 Tillbaka till menyn
    </button>

`;

}

function continueDialog() {

    addMessage(
        "Jag lyssnar gärna. Vill du berätta lite mer? 💚",
        "otis"
    );

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="showMainMenu()">
            🌱 Göra något annat
        </button>

        <button onclick="showActivity()">
            🦦 Hitta på något tillsammans
        </button>

    `;

}

function showConversationMenu() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="continueDialog()">
            💬 Prata lite till
        </button>

        <button onclick="showActivity()">
            🌱 Hitta på något tillsammans
        </button>

        <button onclick="showMainMenu()">
            🦦 Tillbaka till menyn
        </button>

    `;

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

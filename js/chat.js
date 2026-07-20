function addMessage(text, sender) {

    const messages =
        document.getElementById("messages");


    const message =
        document.createElement("div");


    message.classList.add(
        "message",
        sender
    );


    message.textContent =
        text;


    messages.appendChild(message);


    scrollToBottom();

}



function scrollToBottom() {

    const chat =
        document.getElementById("chat");


    chat.scrollTop =
        chat.scrollHeight;

}

// 🦦 Första mötet med Otis

function startOnboarding() {

    addMessage(
        onboarding.firstMeeting.greeting,
        "otis"
    );


    showNameInput();

}

function showNameInput() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <input 
            id="name-input"
            placeholder="Skriv ditt namn"
        >

        <button id="save-name-button">
            Fortsätt 💚
        </button>

    `;


    document
        .getElementById("save-name-button")
        .addEventListener(
            "click",
            saveName
        );

}

function saveName() {

    const input =
        document.getElementById("name-input");


    const name =
        input.value.trim();


    if (!name) return;


    otisMemory.owner = {

        name: name

    };


    saveMemory();


    addMessage(
    `Vad fint att träffa dig, ${name}. 💚 Jag tror att alla vänskaper blir lite finare när man lär känna varandra. Jag vill gärna veta lite mer om vem jag får lära känna.`,
    "otis"
);


showRelationChoice();

}

function showRelationChoice() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

    <button onclick="chooseRelation('alone')">
        🌿 Det är jag
    </button>


    <button onclick="chooseRelation('others')">
        🧒 Jag har någon med mig
    </button>


    <button onclick="chooseRelation('other')">
        👥 Jag vill presentera någon annan
    </button>

`;

}

function chooseRelation(choice) {


    if (choice === "alone") {

        addMessage(
            "Vad fint. Då börjar vårt äventyr här, bara du och jag. 🌊",
            "otis"
        );


        showMainMenu();

    }



    if (choice === "others") {

        addMessage(
            "Vad roligt! Jag tycker om att få lära känna fler små personer som betyder mycket för dig. Vem vill du att jag ska få träffa?",
            "otis"
        );


        showPersonInput();

    }

}

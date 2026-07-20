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

    <button onclick="chooseRelation('self')">
        🌿 Det är jag
    </button>


    <button onclick="chooseRelation('child')">
        🧒 Jag har någon med mig
    </button>


    <button onclick="chooseRelation('person')">
        👥 Jag vill presentera någon annan
    </button>

`;

}

function chooseRelation(choice) {


    if (choice === "self") {

        addMessage(
            "Vad fint. Då börjar vårt äventyr här, bara du och jag. 🌊",
            "otis"
        );


        showMainMenu();

    }



    if (choice === "child") {

        addMessage(
            "Vad roligt! Jag tycker om att få lära känna fler små personer som betyder mycket för dig. Vem vill du att jag ska få träffa?",
            "otis"
        );


        showPersonInput("child");

    }

if (choice === "person") {
    addMessage(
        "Vad fint. Vem vill du att jag ska få lära känna? 💚",
        "otis"
    );

    showPersonInput("person");
}
    
}

function showPersonInput(type) {

    const actions =
        document.getElementById("actions");


    if (type === "child") {

        actions.innerHTML = `

            <input 
                id="person-name-input"
                placeholder="Vad heter barnet?"
            >

            <input 
                id="person-age-input"
                placeholder="Hur gammal är personen?"
            >

            <button onclick="savePerson('child')">
                Fortsätt 💚
            </button>

        `;

    }


    if (type === "person") {

        actions.innerHTML = `

            <input 
                id="person-name-input"
                placeholder="Vad heter personen?"
            >

            <input 
                id="person-role-input"
                placeholder="Vem är personen för dig?"
            >

            <button onclick="savePerson('person')">
                Fortsätt 💚
            </button>

        `;

    }

}

let currentPerson = null;

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

function savePerson(type) {

    const name =
        document
        .getElementById("person-name-input")
        .value
        .trim();


    if (!name) return;


    const person = {

        name: name,

        type: type

    };


    if (type === "child") {

        person.age =
    document
    .getElementById("person-age-input")
    .value
    .trim()
    .replace("år", "")
    .trim();

    }


    if (type === "person") {

        person.role =
            document
            .getElementById("person-role-input")
            .value
            .trim();

    }


    otisMemory.friends.push(person);

    saveMemory();


    addMessage(
        `Vad roligt att få lära känna ${name}. 💚 Jag ser fram emot att skapa fina stunder tillsammans.`,
        "otis"
    );


    showMainMenu();

}

function showPresentPerson() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <p>
            👋 Vem är med dig idag? 💚
        </p>

    `;


    otisMemory.friends.forEach((person, index) => {

        actions.innerHTML += `

            <button onclick="selectCurrentPerson(${index})">

                ${person.type === "child" ? "🧒" : "👤"}
                ${person.name}

            </button>

        `;

    });


    actions.innerHTML += `

    <button onclick="showNewPersonInput()">
        ➕ Någon ny
    </button>

    <button onclick="showMainMenu()">
        ⬅️ Tillbaka
    </button>

`;

}

function selectCurrentPerson(index) {

    const person =
        otisMemory.friends[index];


    if (!person) return;


    currentPerson = person;


    addMessage(
        `Vad roligt att ${person.name} är med idag. 💚 Jag blir glad att få träffa ${person.name} igen.`,
        "otis"
    );


    showMainMenu();

}

function showNewPersonInput() {

    const actions =
        document.getElementById("actions");


    addMessage(
        "Vad roligt att få träffa någon ny! 💚 Vad heter personen?",
        "otis"
    );


    actions.innerHTML = `

        <input
            id="new-person-name-input"
            placeholder="Skriv namnet"
        >

        <button onclick="continueNewPerson()">
            Fortsätt 💚
        </button>

    `;

}

function continueNewPerson() {

    const input =
        document.getElementById("new-person-name-input");


    const name =
        input.value.trim();


    if (!name) return;


    currentPerson = {

        name: name,

    };


    askPersonType();

}

function askPersonType() {

    const actions =
        document.getElementById("actions");


    addMessage(
        `${currentPerson.name} verkar vara ett fint namn. 💚 Är ${currentPerson.name} ett barn eller en vuxen?`,
        "otis"
    );


    actions.innerHTML = `

        <button onclick="choosePersonType('child')">
            🧒 Barn
        </button>

        <button onclick="choosePersonType('adult')">
            👤 Vuxen
        </button>

    `;

}

function askRememberPerson() {

    const actions =
        document.getElementById("actions");


    addMessage(
        `Vad fint att få lära känna ${currentPerson.name}. 💚 Vill du att jag ska komma ihåg ${currentPerson.name} till nästa gång vi ses?`,
        "otis"
    );


    actions.innerHTML = `

        <button onclick="rememberCurrentPerson()">
            💚 Ja, kom ihåg personen
        </button>


        <button onclick="forgetCurrentPerson()">
            🌿 Nej, bara idag
        </button>

    `;

}

function rememberCurrentPerson() {

    // Kontrollera att vi inte redan har två sparade vänner

    if (otisMemory.friends.length >= 2) {

        addMessage(
            "Jag kommer ihåg två fina personer redan. Men jag blir gärna glad att träffa någon ny när vi ses. 💚",
            "otis"
        );

        showMainMenu();

        return;

    }


    otisMemory.friends.push({

        name:
            currentPerson.name,

        type:
            "person"

    });


    saveMemory();


    addMessage(
        `Vad fint. Jag kommer ihåg ${currentPerson.name} till nästa gång vi ses. 💚`,
        "otis"
    );


    showMainMenu();

}

function forgetCurrentPerson() {

    addMessage(
        `Vad roligt att få träffa ${currentPerson.name} idag. Jag sparar det här som en fin stund tillsammans. 🌿`,
        "otis"
    );


    showMainMenu();

}

// 🦦 När Otis redan känner dig

function showMemoryGreeting() {

    const name =
        otisMemory.owner.name;


    const messages =
        memoryGreetings[currentFriend.id];


    const randomMessage =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];


    addMessage(
        randomMessage.text.replace("{name}", name),
        "otis"
    );

}

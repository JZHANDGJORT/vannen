let currentPerson = null;

function addMessage(text, sender) {

    if (
    sender === "otis01" ||
    sender === "bosse01" ||
    sender === "dokka01"
) {

        const bubble =
            document.getElementById("friend-bubble");

        if (bubble) {

            bubble.textContent =
                text;

            bubble.style.display =
                "block";

        }

        checkOtisMood(text);

    }


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

// 🦦 Första mötet med Vännen

function startOnboarding() {

    addMessage(
        onboarding.firstMeeting.greeting,
        currentFriend.id
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
    friendMemory.owner = {
        name: name,
        since: new Date().toISOString()
    };
    saveMemory();
    addMessage(
        `Vad fint att träffa dig, ${name}. 💚 Jag tror att alla vänskaper blir lite finare när man lär känna varandra. Jag vill gärna veta lite mer om vem jag får lära känna.`,
        currentFriend.id
    );
    showRelationChoice();
}

function changeName() {

    const actions =
        document.getElementById("actions");


    const currentName =
        friendMemory.owner?.name || "";


    addMessage(
        "Vad vill du att jag ska kalla dig? 💚",
        currentFriend.id
    );


    actions.innerHTML = `

        <input
            id="change-name-input"
            value="${currentName}"
            placeholder="Skriv ditt namn"
        >

        <button onclick="saveChangedName()">
            Spara 💚
        </button>

        <button onclick="showMainMenu()">
            ⬅️ Tillbaka
        </button>

    `;

}


function saveChangedName() {

    const input =
        document.getElementById("change-name-input");


    const name =
        input.value.trim();


    if (!name) return;


    friendMemory.owner.name =
        name;


    saveMemory();


    addMessage(
        `Så fint. Då vet jag att jag ska kalla dig ${name}. 💚`,
        currentFriend.id
    );


    showMainMenu();

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
            currentFriend.id
        );


        showMainMenu();

    }



    if (choice === "child") {

        addMessage(
            "Vad roligt! Jag tycker om att få lära känna fler små personer som betyder mycket för dig. Vem vill du att jag ska få träffa?",
            currentFriend.id
        );


        showPersonInput("child");

    }

if (choice === "person") {
    addMessage(
        "Vad fint. Vem vill du att jag ska få lära känna? 💚",
        currentFriend.id
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


    friendMemory.friends.push(person);

    saveMemory();


    addMessage(
        `Vad roligt att få lära känna ${name}. 💚 Jag ser fram emot att skapa fina stunder tillsammans.`,
        currentFriend.id
    );


    showMainMenu();

}


function showPresentPerson() {
    const actions =
        document.getElementById("actions");
    actions.innerHTML = "";
    addMessage(
        "Vem är med dig idag? Du kan välja upp till två personer. 💚",
        currentFriend.id
    );
    const selected =
        friendMemory.companionsToday || [];
    friendMemory.friends.forEach((person, index) => {
        const alreadySelected =
            selected.some(
                companion =>
                    companion.personId === person.id
            );
        const button =
            document.createElement("button");
        button.textContent =
            `${person.type === "child" ? "🧒" : "👤"} ${person.name}`;
        button.onclick =
            () => selectCurrentPerson(index);
        if (alreadySelected) {
            button.textContent +=
                " ✓";
        }
        actions.appendChild(button);
    });
    const newButton =
        document.createElement("button");
    newButton.textContent =
        "➕ Någon ny";
    newButton.onclick =
        showNewPersonInput;
    actions.appendChild(newButton);
    if (selected.length > 0) {
        const doneButton =
            document.createElement("button");
        doneButton.textContent =
            "✓ Klart";
        doneButton.onclick =
            showMainMenu;
        actions.appendChild(doneButton);
    }
    const backButton =
        document.createElement("button");
    backButton.textContent =
        "⬅️ Tillbaka";
    backButton.onclick =
        showMainMenu;
    actions.appendChild(backButton);
}
function selectCurrentPerson(index) {
    const person =
        friendMemory.friends[index];
    if (!person) return;
    const selected =
        friendMemory.companionsToday || [];
    const existingIndex =
        selected.findIndex(
            companion =>
                companion.personId === person.id
        );
    // Om personen redan är vald
    // tas personen bort
    if (existingIndex !== -1) {
        selected.splice(
            existingIndex,
            1
        );
        friendMemory.companionsToday =
            selected;
        saveMemory();
        showPresentPerson();
        return;
    }
    // Max två personer
    if (selected.length >= 2) {
        addMessage(
            "Du kan ha med dig högst två personer samtidigt. 💚",
            currentFriend.id
        );
        return;
    }
    selected.push({
        personId:
            person.id,
        name:
            person.name,
        type:
            person.type,
        age:
            person.age || null,
        role:
            person.role || null,
        date:
            new Date().toISOString().split("T")[0]
    });
    friendMemory.companionsToday =
        selected;
    saveMemory();
    showPresentPerson();
}
function forgetCurrentPerson() {
    if (!currentPerson) return;
    const selected =
        friendMemory.companionsToday || [];
    if (selected.length >= 2) {
        addMessage(
            "Du kan ha med dig högst två personer samtidigt. 💚",
            currentFriend.id
        );
        showPresentPerson();
        return;
    }
    selected.push({
        name:
            currentPerson.name,
        type:
            currentPerson.type,
        age:
            currentPerson.age || null,
        role:
            currentPerson.role || null,
        date:
            new Date().toISOString().split("T")[0]
    });
    friendMemory.companionsToday =
        selected;
    saveMemory();
    addMessage(
        `Vad roligt att få träffa ${currentPerson.name} idag. Jag blir glad att vi fick ses. 🌿`,
        currentFriend.id
    );
    showPresentPerson();
}
function showMemoryGreeting() {
    const name =
        friendMemory.owner.name;
    const today =
        new Date().toISOString().split("T")[0];
    const companions =
        (
            friendMemory.companionsToday || []
        ).filter(
            companion =>
                companion.date === today
        );
    if (companions.length > 0) {
        const companionNames =
            companions.map(
                companion =>
                    companion.name
            );
        let companionText;
        if (companionNames.length === 1) {
            companionText =
                companionNames[0];
        } else {
            companionText =
                companionNames.slice(0, -1).join(", ")
                + " och "
                + companionNames[companionNames.length - 1];
        }
        addMessage(
            `Hej ${name}! 💚 Vad fint att du är här igen. Och hej ${companionText}! Jag blev glad att ni följde med idag.`,
            currentFriend.id
        );
        return;
    }
    const messages =
        memoryGreetings[currentFriend.id];
    if (!messages || messages.length === 0) {
        addMessage(
            `Hej ${name}! 💚 Vad fint att du är här igen.`,
            currentFriend.id
        );
        return;
    }
    const randomMessage =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];
    addMessage(
        randomMessage.text.replace("{name}", name),
        currentFriend.id
    );
}

function showNewPersonInput() {

    const actions =
        document.getElementById("actions");


    addMessage(
        "Vad roligt att få träffa någon ny! 💚 Vad heter personen?",
        currentFriend.id
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
        `${currentPerson.name} var ett fint namn. 💚 Är ${currentPerson.name} ett barn eller en vuxen?`,
        currentFriend.id
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

function choosePersonType(type) {

    currentPerson.type = type;


    if (type === "child") {

        askChildAge();

    } else {

        askAdultRelation();

    }

}

function askChildAge() {

    const actions =
        document.getElementById("actions");


    addMessage(
        `Hur gammal är ${currentPerson.name}? 🧒`,
        currentFriend.id
    );


    actions.innerHTML = `

        <input
            id="child-age-input"
            placeholder="Ålder"
        >

        <button onclick="saveChildAge()">
            Fortsätt 💚
        </button>

    `;

}

function saveChildAge() {

    currentPerson.age =
        document
        .getElementById("child-age-input")
        .value
        .trim()
        .replace("år", "")
        .trim();


    askRememberPerson();

}

function askAdultRelation() {

    const actions =
        document.getElementById("actions");


    addMessage(
        `Vem är ${currentPerson.name} för dig? 💚`,
        currentFriend.id
    );


    actions.innerHTML = `

        <input
            id="adult-role-input"
            placeholder="Till exempel syster, morfar eller kompis"
        >

        <button onclick="saveAdultRelation()">
            Fortsätt 💚
        </button>

    `;

}

function saveAdultRelation() {

    currentPerson.role =
        document
        .getElementById("adult-role-input")
        .value
        .trim();


    askRememberPerson();

}


function askRememberPerson() {

    const actions =
        document.getElementById("actions");


    addMessage(
        `Vad fint att få lära känna ${currentPerson.name}. 💚 Vill du att jag ska komma ihåg ${currentPerson.name} till nästa gång vi ses?`,
        currentFriend.id
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

    if (friendMemory.friends.length >= 2) {

        addMessage(
            "Jag kommer redan ihåg två personer åt dig. 💚 Jag träffar gärna nya ändå, även om jag inte sparar dem.",
            currentFriend.id
        );

        showMainMenu();

        return;

    }

    friendMemory.friends.push(currentPerson);

    saveMemory();

    addMessage(
        `Vad fint. Jag kommer ihåg ${currentPerson.name} till nästa gång vi ses. 💚`,
        currentFriend.id
    );

    showMainMenu();

}


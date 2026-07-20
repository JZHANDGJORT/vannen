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
    `Vad fint att träffa dig, ${name}. 💚 Jag tror att alla vänskaper blir lite finare när man lär känna varandra. Vill du berätta lite mer om vem som håller mig sällskap?`,
    "otis"
);


showRelationChoice();

}

function showRelationChoice() {

    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="chooseRelation('alone')">
            🌱 Jag och Otis är kompisar
        </button>


        <button onclick="chooseRelation('others')">
            🦦 Jag vill att Otis ska få träffa fler
        </button>

    `;

}


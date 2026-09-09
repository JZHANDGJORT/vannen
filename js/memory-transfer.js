/*
  VÄNNEN – MINNESÖVERFÖRING
  Exportera och importera aktuell väns minne
*/


// ========================================
// AKTUELL VÄN
// ========================================

function getTransferFriend() {

    if (
        typeof currentFriend !== "undefined" &&
        currentFriend
    ) {

        return currentFriend;

    }


    const page =
        window.location.pathname
            .split("/")
            .pop();


    if (page === "bosse.html") {

        return bosse;

    }


    return otis;

}



// ========================================
// EXPORTERA MINNE
// ========================================

function exportOtisMemory() {

    const friend =
        getTransferFriend();


    const badges =
        getBadges();


    const friendData = {

        version: 1,

        friendId:
            friend.id,

        memory:
            friendMemory,

        badges:
            badges

    };


    const json =
        JSON.stringify(
            friendData,
            null,
            2
        );


    const blob =
        new Blob(
            [json],
            {
                type: "application/json"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href =
        url;


    link.download =
        `${friend.name.toLowerCase()}-minne.json`;


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);


    addMessage(
        `Ditt ${friend.name}-minne är sparat. 💚 Du kan nu flytta filen till din nya telefon eller platta.`,
        friend.id
    );

}



// ========================================
// HÄMTA MINNE
// ========================================

function importOtisMemory() {

    const friend =
        getTransferFriend();


    addMessage(
        `Vill du hämta ett sparat ${friend.name}-minne? 💚 Det minne som finns på den här enheten kommer att bytas ut mot det sparade minnet.`,
        friend.id
    );


    const actions =
        document.getElementById("actions");


    actions.innerHTML = `

        <button onclick="confirmImportOtisMemory()">
            📥 Ja, hämta minnet
        </button>


        <button onclick="showSettings()">
            ⬅️ Nej, gå tillbaka
        </button>

    `;

}



// ========================================
// BEKRÄFTA HÄMTNING
// ========================================

function confirmImportOtisMemory() {

    const input =
        document.createElement("input");


    input.type =
        "file";


    input.accept =
        ".json,application/json";


    input.addEventListener(
        "change",
        handleMemoryFile
    );


    input.click();

}



// ========================================
// LÄS MINNESFILEN
// ========================================

function handleMemoryFile(event) {

    const file =
        event.target.files[0];


    if (!file) return;


    const reader =
        new FileReader();


    reader.onload =
        function () {

            try {

                const importedData =
                    JSON.parse(
                        reader.result
                    );


                const friend =
                    getTransferFriend();


                // Kontrollera att filen
                // innehåller rätt typ av data

                if (
                    !importedData ||
                    !importedData.memory ||
                    !importedData.badges
                ) {

                    throw new Error(
                        "Ogiltig minnesfil"
                    );

                }


                // Kontrollera att minnet
                // tillhör aktuell vän

                if (
                    importedData.friendId &&
                    importedData.friendId !== friend.id
                ) {

                    throw new Error(
                        "Fel vän"
                    );

                }


                // Lägg tillbaka minnet

                friendMemory =
                    importedData.memory;


                saveMemory();


                // Lägg tillbaka märken

                saveBadges(
                    importedData.badges
                );


                // Uppdatera märkena på skärmen

                updateAllBadges();


                addMessage(
                    `Vad fint! 💚 Jag har fått tillbaka mitt minne.`,
                    friend.id
                );


                showMainMenu();


            } catch (error) {

                console.error(
                    "Kunde inte läsa minnet:",
                    error
                );


                const friend =
                    getTransferFriend();


                addMessage(
                    `Hmm... jag kunde inte läsa den filen. 🌿 Kontrollera att det är en ${friend.name}-minnesfil.`,
                    friend.id
                );

            }

        };


    reader.readAsText(file);

}

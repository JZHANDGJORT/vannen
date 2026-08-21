/*
  OTIS – MINNESÖVERFÖRING
  Exportera och importera Otis minne
*/


// ========================================
// EXPORTERA OTIS MINNE
// ========================================

function exportOtisMemory() {

    const badges =
        getBadges();


    const otisData = {

        version: 1,

        memory:
            otisMemory,

        badges:
            badges

    };


    const json =
        JSON.stringify(
            otisData,
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
        "otis-minne.json";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);


    addMessage(
        "Ditt Otis-minne är sparat. 💚 Du kan nu flytta filen till din nya telefon eller platta.",
        "otis"
    );

}


// ========================================
// IMPORTERA OTIS MINNE
// ========================================

function importOtisMemory() {

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


                // Kontrollera att filen
                // verkligen innehåller Otis-data

                if (
                    !importedData ||
                    !importedData.memory ||
                    !importedData.badges
                ) {

                    throw new Error(
                        "Ogiltig Otis-fil"
                    );

                }


                // Lägg tillbaka Otis minne

                otisMemory =
                    importedData.memory;


                saveMemory();


                // Lägg tillbaka märken

                saveBadges(
                    importedData.badges
                );


                // Uppdatera märkena på skärmen

                updateAllBadges();


                addMessage(
                    "Vad fint! 💚 Jag har fått tillbaka mitt minne.",
                    "otis"
                );


                showMainMenu();


            } catch (error) {

                console.error(
                    "Kunde inte läsa Otis-minnet:",
                    error
                );


                addMessage(
                    "Hmm... jag kunde inte läsa den filen. 🌿 Kontrollera att det är en Otis-minnesfil.",
                    "otis"
                );

            }

        };


    reader.readAsText(file);

}

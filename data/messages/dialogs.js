const dialogs = {

    otis01: [

     {
    id: "day",

    otis:
        "Hej! 🌊 Jag är glad att du kom förbi en stund. Hur känns det idag?",

    options: [

        {
            text: "😊 Jag mår bra",

            user:
                "Jag mår bra 😊",

            reply:
                "Vad fint att höra! 🌱 Jag blir glad när du berättar det. Vad var det bästa med din dag?",

            next: [

                {
                    text: "🌞 Något roligt hände",

                    user:
                        "Något roligt hände 🌞",

                    reply:
                        "Vad härligt! Små fina stunder kan göra en hel dag bättre."
                },

                {
                    text: "🦦 Jag gjorde något mysigt",

                    user:
                        "Jag gjorde något mysigt 🦦",

                    reply:
                        "Det låter verkligen mysigt. Jag tycker om sådana stunder."
                },

                {
                    text: "🤔 Jag vet inte riktigt",

                    user:
                        "Jag vet inte riktigt 🤔",

                    reply:
                        "Det gör inget. Ibland behöver man inte ha ett svar direkt."
                }

            ]

        }

    ]

}

        {
            id: "small-things",
            otis:
                "Jag gillar små saker. En fin sten, en solstråle eller ljudet av vatten. Är det något litet som gjort dig glad idag?",

            options: [
                {
                    text: "Ja, något litet.",
                    reply:
                        "Jag tycker om sådana stunder. De är som små skatter man kan spara."
                },
                {
                    text: "Nej, inte än.",
                    reply:
                        "Då kanske vi kan hålla utkik efter en liten fin stund tillsammans."
                }
            ]
        },


        {
            id: "rest",
            otis:
                "Jag tror att många glömmer att vila ibland. Har du fått en lugn stund idag?",

            options: [
                {
                    text: "Ja.",
                    reply:
                        "Vad skönt. Jag tycker om när man låter sig själv stanna upp en stund."
                },
                {
                    text: "Nej.",
                    reply:
                        "Då hoppas jag att vi kan hitta en liten lugn stund tillsammans."
                }
            ]
        },


        {
            id: "stones",
            otis:
                "Jag hittade en sten idag som var alldeles slät. Jag undrar vad den har varit med om innan jag hittade den.",

            options: [
                {
                    text: "Jag gillar också stenar.",
                    reply:
                        "Då måste vi nästan leta efter fina stenar tillsammans någon gång."
                },
                {
                    text: "Berätta mer.",
                    reply:
                        "Den var rund och mjuk. Precis en sådan sten som man vill hålla i handen."
                }
            ]
        },


        {
            id: "water",
            otis:
                "Om jag fick välja en perfekt stund skulle jag nog flyta runt på vattnet och känna solen värma pälsen.",

            options: [
                {
                    text: "Det låter mysigt.",
                    reply:
                        "Ja. Jag tror att ibland behöver man inte göra något särskilt för att ha det bra."
                },
                {
                    text: "Jag hade valt något annat.",
                    reply:
                        "Vad spännande! Alla har sin egen perfekta plats."
                }
            ]
        },


        {
            id: "question",
            otis:
                "Får jag fråga en sak? Vad tycker du om att göra när du bara vill må bra?",

            options: [
                {
                    text: "Vila.",
                    reply:
                        "Vila är viktigt. Även små stunder räknas."
                },
                {
                    text: "Göra något kreativt.",
                    reply:
                        "Det tycker jag låter fint. Att skapa något är lite som att hitta en ny liten skatt."
                },
                {
                    text: "Vara med någon jag tycker om.",
                    reply:
                        "Det är bland det finaste som finns."
                }
            ]
        }


    ]

};

const dialogs = {

    otis01: [

        {
            id: "welcome",

            otis:
                "Hej! 🌊 Jag är glad att du kom förbi en stund. Hur känns det idag?",

            options: [

                {
                    text: "😊 Jag mår bra",

                    user:
                        "Jag mår bra 😊",

                    reply:
                        "Vad fint att höra! 💚 Jag blir glad när du berättar det.",

                    next: "continue"
                },


                {
                    text: "😔 Jag mår inte så bra",

                    user:
                        "Jag mår inte så bra 😔",

                    reply:
                        "Tack för att du berättar det för mig. 💚 Ibland känns vissa dagar lite tyngre. Jag finns här med dig en stund. Om något känns jobbigt kan det också vara skönt att prata med någon man litar på.",

                    next: "continue"
                },


                {
                    text: "🤔 Jag vet inte riktigt",

                    user:
                        "Jag vet inte riktigt 🤔",

                    reply:
                        "Det är helt okej. Ibland är det svårt att veta precis hur man känner. Vi kan bara vara här en stund.",

                    next: "continue"
                }

            ]

        },


        {
            id: "continue",

            otis:
                "Jag tycker om att få vara här med dig. 💚 Vill du bara ta det lugnt tillsammans en stund eller vill du hitta på något?",


            options: [

                {

                    text:
                        "🌿 Bara ta det lugnt",

                    user:
                        "Jag vill bara ta det lugnt.",

                    reply:
                        "Det gör vi. 💚 Du behöver inte prata så mycket. Jag finns här med dig.",

                    action:
                        "rest"

                },


                {

                    text:
                        "✨ Hitta på något",

                    user:
                        "Jag vill göra något.",

                    reply:
                        "Vad roligt! 🦦 Då hittar vi på något tillsammans. Vad är du sugen på?",

                    action:
                        "activities"

                }

            ]

        }

    ]

};

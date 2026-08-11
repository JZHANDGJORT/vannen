/*
  Book Data
*/
const bookData = {
    id: "book",
    title: "Otis Sagobok",
    pages: [
        // Sida 0 - innehållsförteckning
{
    image: "",

    background:
    "images/Otis/otis-backpack-item-sagobok-openl.PNG",

    backgroundClass:
    "background-left",

    title: "",

    text:
`
<p onclick="goToChapter(1)">
Kapitel 1<br>
<span>Otis och den magiska stenen</span>
</p>

<p onclick="goToChapter(2)">
Kapitel 2<br>
<span>När Otis mötte Bosse</span>
</p>
`,

    imageClass: ""
},
        // =========================
        // KAPITEL 1
        // =========================
        // Sida 1 - Kapitel 1
        {
            image:
            "images/Otis/storybook/chapter01/page01.JPEG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title:
`
<span class="chapter-number">
Kapitel 1
</span>
<br>
<span class="chapter-name">
Otis och den magiska stenen
</span>
`,
            text:
`
<p>Långt inne bland träden, där skogen mötte det glittrande vattnet, bodde en liten utter som hette Otis.</p>
<p>Otis var nyfiken på nästan allt.</p>
`,
            imageClass:
            "chapter-image",

            textClass:
            "chapter-text",

            titleClass:
            "chapter-title"
        },
        // Sida 2
        {
            image:
            "images/Otis/storybook/chapter01/page02.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text:
`
<p>En morgon när solen precis hade börjat värma marken gick Otis ner till stranden.</p>
<p>Plask!</p>
<p>Han hoppade i vattnet och simmade en liten stund. Efteråt satte han sig på en varm sten för att vila.</p>
<p>Då såg han något som låg bland sanden.</p>
`,
            imageClass:
            "story-image-left",
            textClass:
            "story-text-left"
        },
        // Sida 3
        {
            image:
            "images/Otis/storybook/chapter01/page03.JPEG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text:
`
<p>En liten svart sten.</p>
<p>Den var oval och alldeles len.</p>
<p>– Vilken fin sten, sa Otis.</p>
<p>Han vände och vred på den. Den glänste lite i solen, som om den hade en egen liten hemlighet.</p>
<p>Otis bestämde sig för att ta med stenen hem.</p>
`,
            imageClass:
            "story-image-right",
            textClass:
            "story-text-right"
        },
        // Sida 4
        {
            image:
            "images/Otis/storybook/chapter01/page04.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text:
`
<p>Han lade den i sin ryggsäck och gick tillbaka genom skogen.</p>
<p>Senare samma dag hände något tråkigt.</p>
<p>Otis hade byggt en liten koja av pinnar, men när vinden blåste försvann hela kojan.</p>
<p>– Åh nej, suckade Otis.</p>
`,
            imageClass:
            "story-image-left",
            textClass:
            "story-text-left"
        },
        // Sida 5
        {
            image:
            "images/Otis/storybook/chapter01/page05.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text:
`
<p>Då kom han ihåg stenen.</p>
<p>Han tog fram den ur ryggsäcken och höll den i sin tass.</p>
<p>Stenen var kall och len.</p>
<p>Efter en liten stund kändes det bättre.</p>
<p>– Tack, lilla sten, sa Otis.</p>
`,
            imageClass:
            "story-image-right",
            textClass:
            "story-text-right"
        },
        // Sida 6
        {
            image:
            "images/Otis/storybook/chapter01/page06.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text:
`
<p>Nästa dag tog Otis med sig stenen när han gav sig ut på äventyr.</p>
<p>Han visade den sitt favoritträd.</p>
<p>Han visade den platsen där de små fiskarna brukade simma.</p>
<p>Han visade den de vackraste blommorna vid stigen.</p>
`,
            imageClass:
            "story-image-left",
            textClass:
            "story-text-left"
        },
        // Sida 7
        {
            image:
            "images/Otis/storybook/chapter01/page07.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text:
`
<p>Och sedan dess fick stenen följa med på alla hans äventyr.</p>
<p>För Otis hade upptäckt något viktigt:</p>
<p>Ibland kan en liten sak kännas väldigt stor.</p>
`,
            imageClass:
            "story-image-right",
            textClass:
            "story-text-right"
        },


      
        // =========================
        // KAPITEL 2
        // =========================
        // Sida 8 - Kapitel 2
        {
            image:
            "images/Otis/storybook/chapter02/page01.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title:
`
<span class="chapter-number">
Kapitel 2
</span>
<br>
<span class="chapter-name">
När Otis mötte Bosse
</span>
`,
            text:
`
<p>Otis tyckte om att ge sig ut på upptäcktsfärd.</p>
<p>Den här dagen hade han simmat en bit längs sjön och sedan klättrat upp på stranden.</p>
<p>Solen silade mellan träden och det prasslade mjukt i löven när han gick.</p>
`,
            imageClass:
            "chapter-image-left",

            textClass:
            "chapter-text-left",

            titleClass:
            "chapter-title-left"
        },
        // Sida 9
        {
            image:
            "images/Otis/storybook/chapter02/page02.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text:
`
<p>På marken framför honom låg en pinne.</p>
<p>Otis stannade.</p>
<p>Den var lagom lång, lite krokig och hade en liten gren som stack ut på ena sidan.</p>
<p>Otis tog upp den.</p>
`,
            imageClass:
            "story-image-right",
            textClass:
            "story-text-right"
        },
        // Sida 10
        {
            image:
            "images/Otis/storybook/chapter02/page03.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text:
`
<p>Han bar den en bit.</p>
<p>Sedan släppte han den och petade på den med tassen.</p>
<p>Pinnen rullade över marken.</p>
<p>Otis sprang efter.</p>
<p>Han petade till den igen.</p>
<p>Det var en ganska rolig pinne.</p>
`,
            imageClass:
            "story-image-left",
            textClass:
            "story-text-left"
        },
        // Sida 11
        {
            image:
            "images/Otis/storybook/chapter02/page04.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text:
`
<p>Plötsligt hörde han något.</p>
<p><em>Prassel, prassel.</em></p>
<p>Otis stannade och tittade mot en buske.</p>
<p>Något rörde sig där inne.</p>
<p>”Hallå?” sa Otis försiktigt.</p>
`,
            imageClass:
            "story-image-right",
            textClass:
            "story-text-right"
        },
        // Sida 12
        {
            image:
            "images/Otis/storybook/chapter02/page05.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text:
`
<p>Ur busken kom en liten grävling.</p>
<p>”Oj!” sa grävlingen och stannade.</p>
<p>Otis blinkade.</p>
<p>”Hej.”</p>
<p>”Hej”, sa grävlingen.</p>
<p>De tittade på varandra en stund.</p>
<p>”Jag heter Otis”, sa Otis.</p>
<p>”Jag heter Bosse.”</p>
`,
            imageClass:
            "story-image-left",
            textClass:
            "story-text-left"
        },
        // Sida 13
        {
            image:
            "images/Otis/storybook/chapter02/page06.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text:
`
<p>Bosse tittade på Otis. Sedan tittade han på sjön. Sedan på Otis igen.</p>
<p>”Vad gör du här?”</p>
<p>”Jag upptäcker”, svarade Otis.</p>
<p>Bosse log.</p>
<p>”Det gör jag också.”</p>
<p>Då fick Bosse syn på pinnen.</p>
<p>”Vad är det där?”</p>
<p>Otis tittade ner.</p>
<p>”En pinne.”</p>
`,
            imageClass:
            "story-image-right",
            textClass:
            "story-text-right"
        },
        // Sida 14
        {
            image:
            "images/Otis/storybook/chapter02/page07.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text:
`
<p>”Vad kan man göra med den?”</p>
<p>Otis tänkte efter.</p>
<p>Sedan tog han pinnen i munnen och sprang iväg.</p>
<p>Bosse blev först alldeles stilla.</p>
<p>Sedan sprang han efter.</p>
<p>Otis sprang mellan träden med pinnen dinglande i munnen.</p>
<p>Bosse var hack i häl.</p>
`,
            imageClass:
            "story-image-left",
            textClass:
            "story-text-left"
        },
        // Sida 15
        {
            image:
            "images/Otis/storybook/chapter02/page08.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text:
`
<p>De sprang runt en stor sten och ner mot stranden.</p>
<p>Till slut släppte Otis pinnen.</p>
<p>Bosse kastade sig efter den.</p>
<p>Otis skrattade.</p>
<p>”Den där pinnen var visst roligare än jag trodde!”</p>
<p>Bosse höll upp pinnen.</p>
<p>”Jag tror att den är vår nu.”</p>
<p>Otis log.</p>
<p>”Ja.”</p>
`,
            imageClass:
            "story-image-right",
            textClass:
            "story-text-right"
        },
        // Sida 16
        {
            image:
            "images/Otis/storybook/chapter02/page09.PNG",
            background:
            "images/Otis/otis-backpack-item-sagobok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text:
`
<p>De blev kvar vid stranden en lång stund den dagen.</p>
<p>De pratade.</p>
<p>De lekte.</p>
<p>Och de upptäckte nya saker tillsammans.</p>
<p>När Otis till slut gick hem tänkte han på hur konstigt det var.</p>
<p>Han hade gått ut för att hitta något nytt.</p>
<p>Och i stället hade han hittat någon ny.</p>
<p>Bosse.</p>
<p>En ny vän.</p>
`,
            imageClass:
            "story-image-left",
            textClass:
            "story-text-left"
        }
    ]
};

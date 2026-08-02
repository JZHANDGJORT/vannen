/*
  Otis Sagobok
*/

let currentStoryPage = 0;


const storyPages = [

    // Sida 0 - innehållsförteckning
    {
        image: "",

        background:
        "images/Otis/otis-backpack-item-sagobok-openl.PNG",

        backgroundClass:
        "background-left",
      
        title: "",

        text: "",

        imageClass: ""
    },


    // Sida 1 - Kapitel 1
    {
        image:
        "images/Otis/storybook/chapter01/page01.JPEG",

        background:
        "images/Otis/otis-backpack-item-sagobok-openr.PNG",

        backgroundClass:
        "background-right",

        pageType:
        "chapter-start",
      
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
Långt inne bland träden, där skogen mötte det glittrande vattnet, bodde en liten utter som hette Otis.<br><br>

Otis var nyfiken på nästan allt.
`,

        imageClass:
        "story-illustration"
    },


    // Sida 2
    {
        image:
        "images/Otis/storybook/chapter01/page02.PNG",

        background:
        "images/Otis/otis-backpack-item-sagobok-openl.PNG",

        backgroundClass:
        "background-left",

        pageType:
        "story-page",
      
        title: "",

        text:
`
En morgon när solen precis hade börjat värma marken gick Otis ner till stranden.<br><br>

Plask!<br><br>

Han hoppade i vattnet och simmade en liten stund. Efteråt satte han sig på en varm sten för att vila.<br><br>

Då såg han något som låg bland sanden.
`,

        imageClass:
        "story-illustration"
    },


    // Sida 3
    {
        image:
        "images/Otis/storybook/chapter01/page03.JPEG",

        background:
        "images/Otis/otis-backpack-item-sagobok-openr.PNG",

        backgroundClass:
        "background-right",

        pageType:
        "story-page",
      
        title: "",

        text:
`
En liten svart sten.<br><br>

Den var oval och alldeles len.<br><br>

– Vilken fin sten, sa Otis.<br><br>

Han vände och vred på den. Den glänste lite i solen, som om den hade en egen liten hemlighet.<br><br>

Otis bestämde sig för att ta med stenen hem.
`,

        imageClass:
        "story-illustration"
    },


    // Sida 4
    {
        image:
        "images/Otis/storybook/chapter01/page04.PNG",

        background:
        "images/Otis/otis-backpack-item-sagobok-openl.PNG",

        backgroundClass:
        "background-left",

        pageType:
        "story-page",
      
        title: "",

        text:
`
Han lade den i sin ryggsäck och gick tillbaka genom skogen.<br><br>

Senare samma dag hände något tråkigt.<br><br>

Otis hade byggt en liten koja av pinnar, men när vinden blåste försvann hela kojan.<br><br>

– Åh nej, suckade Otis.
`,

        imageClass:
        "story-illustration"
    },


    // Sida 5
    {
        image:
        "images/Otis/storybook/chapter01/page05.PNG",

        background:
        "images/Otis/otis-backpack-item-sagobok-openr.PNG",

        backgroundClass:
        "background-right",

        pageType:
        "story-page",
      
        title: "",

        text:
`
Då kom han ihåg stenen.<br><br>

Han tog fram den ur ryggsäcken och höll den i sin tass.<br><br>

Stenen var kall och len.<br><br>

Efter en liten stund kändes det bättre.<br><br>

– Tack, lilla sten, sa Otis.
`,

        imageClass:
        "story-illustration"
    },


    // Sida 6
    {
        image:
        "images/Otis/storybook/chapter01/page06.PNG",

        background:
        "images/Otis/otis-backpack-item-sagobok-openl.PNG",

        backgroundClass:
        "background-left",

        pageType:
        "story-page",

      
        title: "",

        text:
`
Nästa dag tog Otis med sig stenen när han gav sig ut på äventyr.<br><br>

Han visade den sitt favoritträd.<br><br>

Han visade den platsen där de små fiskarna brukade simma.<br><br>

Han visade den de vackraste blommorna vid stigen.<br><br>

Och sedan dess fick stenen följa med på alla hans äventyr.<br><br>

För Otis hade upptäckt något viktigt:<br><br>

Ibland kan en liten sak kännas väldigt stor.
`,

        imageClass:
        "story-illustration"
    }

];


function openStoryBook() {

    saveCurrentView("storybook");


    if (currentFriend) {

        history.replaceState(
            null,
            "",
            `?id=${currentFriend.id}#storybook`
        );

    }


    currentStoryPage = 0;


    localStorage.setItem(
        "storybook-page",
        0
    );


    updateStoryPage();


    document
        .getElementById("backpack-view")
        .style.display = "none";


    document
        .getElementById("storybook")
        .style.display = "block";

}





function updateStoryPage() {


    const page =
        document.getElementById("storybook-page");


    const background =
        document.getElementById("storybook-background");


    const title =
        document.getElementById("storybook-title");


    const text =
        document.getElementById("storybook-text");


    const content =
        document.getElementById("storybook-content");



    const story =
        storyPages[currentStoryPage];



   // Uppdatera bokbakgrund

background.src =
    story.background;

background.className =
    story.backgroundClass;



    // Uppdatera illustration

    page.src =
        story.image;


    page.className =
        story.imageClass;



    if (!story.image) {

        page.src = "";

        page.style.display = "none";

    } 

    else {

        page.style.display = "block";

    }



    // Kapitelrubrik

    if (story.title) {

        title.style.display = "block";

        title.innerHTML =
            story.title;

    }

    else {

        title.style.display = "none";

    }



    // Visa innehållsförteckning eller text

    if (currentStoryPage === 0) {


        content.style.display =
            "block";


        text.style.display =
            "none";


    } 
    
    else {


        content.style.display =
            "none";


        text.style.display =
            "block";


        text.innerHTML =
            story.text;

    }




    // Pilar

    document
        .getElementById("storybook-prev")
        .style.display =
            currentStoryPage === 0
                ? "none"
                : "block";



    document
        .getElementById("storybook-next")
        .style.display =
            currentStoryPage === storyPages.length - 1
                ? "none"
                : "block";

}





function changeStoryPage(direction) {


    currentStoryPage += direction;


    localStorage.setItem(
        "storybook-page",
        currentStoryPage
    );


    updateStoryPage();

}





function closeStoryBook() {


    saveCurrentView("backpack");


    if (currentFriend) {

        history.replaceState(
            null,
            "",
            `?id=${currentFriend.id}#backpack`
        );

    }



    document
        .getElementById("storybook")
        .style.display = "none";



    document
        .getElementById("backpack-view")
        .style.display = "block";

}





function goToChapter(chapter) {


    if (chapter === 1) {


        currentStoryPage = 1;


        localStorage.setItem(
            "storybook-page",
            1
        );


        updateStoryPage();

    }

}





function showComingSoon() {


    alert(
        "Det här kapitlet kommer snart 🌿"
    );

}

/*
  Otis Sagobok
*/

let storyReadingMode =
    localStorage.getItem("storyReadingMode") === "true";

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
        "chapter-text"
      
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
        "story-text-left",
      
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
        "story-text-right",
      
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
        "story-text-left",
      
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
        "story-text-right",
      
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
        "story-text-left",
      
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
        "story-text-right",
      
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


    document
    .getElementById("backpack-view")
    .style.display = "none";


document
    .getElementById("storybook")
    .style.display = "block";


updateStoryPage();

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

    text.className =
        story.textClass;



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


// Läsknapp

document
    .getElementById("storybook-read")
    .style.display =
        storyReadingMode
            ? "block"
            : "none";

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

// Aktivitet - Läsning till Läsarmärke

function readOtisStory() {

    storyReadingMode = true;

  localStorage.setItem(
    "storyReadingMode",
    "true"
);

    addMessage(
        "Åh vad roligt! 💚 Då läser vi om ett av mina äventyr tillsammans. När ni har läst en stund kan ni trycka på '📚 Vi har läst en stund'.",
        "otis"
    );


    openStoryBook();

}

function storyReadingDone() {

    addBadgeProgress("lasar");

    storyReadingMode = false;

    localStorage.setItem(
        "storyReadingMode",
        "false"
    );

    addMessage(
        "Vad mysigt att läsa tillsammans! 📚 Jag är glad att du ville följa med på mitt äventyr. 💚",
        "otis"
    );

    updateStoryPage();

}

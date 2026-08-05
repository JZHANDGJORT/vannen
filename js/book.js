/*
  Book
*/


let currentBookPage = 0;



function openBook() {

    saveCurrentView("storybook");


    if (currentFriend) {

        history.replaceState(
            null,
            "",
            `?id=${currentFriend.id}#storybook`
        );

    }


    currentBookPage = 0;


    localStorage.setItem(
        "storybook-page",
        0
    );


    document
        .getElementById("friend-view")
        .style.display = "none";


    document
        .getElementById("backpack-view")
        .style.display = "none";


    document
        .getElementById("storybook")
        .style.display = "block";


    updateBookPage();

}




function updateBookPage() {


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
    storyBookData.pages[currentStoryPage];



    background.src =
        story.background;


    background.className =
        story.backgroundClass;



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



    if (story.title) {

        title.style.display = "block";

        title.innerHTML =
            story.title;

    }

    else {

        title.style.display = "none";

    }



    if (currentBookPage === 0) {


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




    document
        .getElementById("storybook-prev")
        .style.display =
            currentBookPage === 0
                ? "none"
                : "block";



    document
        .getElementById("storybook-next")
        .style.display =
            currentBookPage === storyBookData.pages.length - 1
                ? "none"
                : "block";



    document
    .getElementById("storybook-read")
    .style.display =
        bookReadingMode && currentBookPage > 0
            ? "block"
            : "none";


}




function changeBookPage(direction) {


    currentBookPage += direction;


    localStorage.setItem(
        "storybook-page",
        currentBookPage
    );


    updateBookPage();

}

function goToChapter(chapter) {

    if (chapter === 1) {

        currentBookPage = 1;

        localStorage.setItem(
            "storybook-page",
            1
        );

        updateBookPage();

    }

}



function closeBook() {


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



    updateAllBadges();

}

// Aktivitet - Läsning till Läsarmärke

let bookReadingMode =
    localStorage.getItem("storyReadingMode") === "true";


function readOtisStory() {

    bookReadingMode = true;

    localStorage.setItem(
        "storyReadingMode",
        "true"
    );

    addMessage(
        "Åh vad roligt! 💚 Då läser vi om ett av mina äventyr tillsammans. När ni har läst en stund kan ni trycka på '📚 Vi har läst en stund'.",
        "otis"
    );

    openBook();

}


function bookReadingDone() {

    addBadgeProgress("lasar");

    bookReadingMode = false;

    localStorage.setItem(
        "storyReadingMode",
        "false"
    );

    addMessage(
        "Vad mysigt att läsa tillsammans! 📚 Jag är glad att du ville följa med på mitt äventyr. 💚",
        "otis"
    );

    updateBookPage();

}

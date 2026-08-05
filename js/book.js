/*
  Book
*/


let currentBookPage = 0;



function openBook() {

    saveCurrentView("book");


    if (currentFriend) {

        history.replaceState(
            null,
            "",
            `?id=${currentFriend.id}#book`
        );

    }


    currentBookPage = 0;


    localStorage.setItem(
        "book-page",
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
    storyBookData.pages[currentBookPage];



    background.src =
        book.background;


    background.className =
        book.backgroundClass;



    page.src =
        book.image;


    page.className =
        book.imageClass;


    text.className =
        book.textClass;



    if (!book.image) {

        page.src = "";

        page.style.display = "none";

    }

    else {

        page.style.display = "block";

    }



    if (book.title) {

        title.style.display = "block";

        title.innerHTML =
           book.title;

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
            book.text;

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
            currentBookPage === BookData.pages.length - 1
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
        "book-page",
        currentBookPage
    );


    updateBookPage();

}

function goToChapter(chapter) {

    if (chapter === 1) {

        currentBookPage = 1;

        localStorage.setItem(
            "book-page",
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
    localStorage.getItem("bookReadingMode") === "true";


function readOtisStory() {

    bookReadingMode = true;

    localStorage.setItem(
        "bookReadingMode",
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
        "bookReadingMode",
        "false"
    );

    addMessage(
        "Vad mysigt att läsa tillsammans! 📚 Jag är glad att du ville följa med på mitt äventyr. 💚",
        "otis"
    );

    updateBookPage();

}

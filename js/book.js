/*
  Book Engine
*/


let currentBookType = null;

let currentBookPage = 0;

let currentBookData = null;

let bookReadingMode =
    localStorage.getItem("bookReadingMode") === "true";

let factBookDiscoverMode =
    localStorage.getItem("factBookDiscoverMode") === "true";



function openBook(type) {

    currentBookType = type;

    currentBookData =
        type === "book"
            ? bookData
            : factBookData;


    if (!currentBookData) {
        console.error("Ingen bokdata hittades:", type);
        return;
    }


    saveCurrentView(type);


    if (currentFriend) {

        history.replaceState(
            null,
            "",
            `?id=${currentFriend.id}#${type}`
        );

    }


// Starta alltid på innehållsförteckningen
currentBookPage = 0;

localStorage.setItem(
    `${type}-page`,
    0
);


    document.getElementById("friend-view").style.display = "none";
    document.getElementById("backpack-view").style.display = "none";


    document.getElementById("storybook").style.display =
        type === "book"
            ? "block"
            : "none";


    document.getElementById("factbook").style.display =
        type === "factbook"
            ? "block"
            : "none";


    updateBookPage();

}

function updateBookPage() {


    if (!currentBookData) return;



    const prefix =
        currentBookType === "book"
            ? "storybook"
            : "factbook";



    const page =
        document.getElementById(
            `${prefix}-page`
        );


    const background =
        document.getElementById(
            `${prefix}-background`
        );


    const title =
        document.getElementById(
            `${prefix}-title`
        );


    const text =
        document.getElementById(
            `${prefix}-text`
        );


    const content =
        document.getElementById(
            `${prefix}-content`
        );



    const story =
    currentBookData.pages[currentBookPage];

if (!story) {
    console.error("Sidan hittades inte:", currentBookPage);
    return;
}


    background.src =
        story.background;


    background.className =
        story.backgroundClass;



    page.src =
        story.image || "";


    page.className =
        story.imageClass || "";



    text.className =
        story.textClass || "";





    if (!story.image) {

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
        .getElementById(`${prefix}-prev`)
        .style.display =
            currentBookPage === 0
                ? "none"
                : "block";




    document
        .getElementById(`${prefix}-next`)
        .style.display =
            currentBookPage === currentBookData.pages.length - 1
                ? "none"
                : "block";





    const readButton =
        document.getElementById(
            `${prefix}-read`
        );


    if (readButton) {

        const activityMode =
    currentBookType === "book"
        ? bookReadingMode
        : factBookDiscoverMode;

readButton.style.display =
    activityMode &&
    currentBookPage > 0
        ? "block"
        : "none";

    }


}









function changeBookPage(direction) {


    currentBookPage += direction;


    localStorage.setItem(
    `${currentBookType}-page`,
    currentBookPage
);


    updateBookPage();

}


function changeFactPage(direction) {
    changeBookPage(direction);
}


function goToChapter(chapter) {


    if (chapter === 1) {


        currentBookPage = 1;


        localStorage.setItem(
            `${currentBookType}-page`,
            1
        );


        updateBookPage();

    }

}









function goToFactChapter(chapter) {


    goToChapter(chapter);

}

function goToBookPage(page) {

    currentBookPage = page;

    localStorage.setItem(
        `${currentBookType}-page`,
        currentBookPage
    );

    updateBookPage();

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
    .getElementById("factbook")
    .style.display = "none";



    document
        .getElementById("backpack-view")
        .style.display = "block";



    updateAllBadges();

}









function closeFactBook() {


    closeBook();

}









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



    openBook("book");

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

function factBookReadingDone() {

    addBadgeProgress("upptackar");

    factBookDiscoverMode = false;

    localStorage.setItem(
        "factBookDiscoverMode",
        "false"
    );

    addMessage(
        "Vad spännande det var att upptäcka något nytt tillsammans! 🌿",
        "otis"
    );

    updateBookPage();

}

function readOtisFactBook() {

    factBookDiscoverMode = true;

    localStorage.setItem(
        "factBookDiscoverMode",
        "true"
    );

    openBook("factbook");

    addMessage(
        "Vad roligt! 🌿 Då upptäcker vi något spännande tillsammans. När ni har bläddrat en stund kan ni trycka på '🔍 Vi har upptäckt något nytt'.",
        "otis"
    );

}

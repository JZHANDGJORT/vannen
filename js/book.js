/*
  Book Engine
*/


let currentBookType = null;

let currentBookPage = 0;

let currentBookData = null;

let bookReadingMode =
    localStorage.getItem("bookReadingMode") === "true";





function openBook(type) {


    currentBookType = type;


    if (type === "book") {

        currentBookData = bookData;

    }


    else if (type === "factbook") {

        currentBookData = factBookData;

    }


    else {

        console.error("Okänd bok:", type);

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



    currentBookPage = 0;


    localStorage.setItem(
        `${type}-page`,
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
        .style.display =
            type === "book"
                ? "block"
                : "none";



    document
        .getElementById("factbook")
        .style.display =
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

        readButton.style.display =
            bookReadingMode &&
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

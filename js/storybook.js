/*
  Otis Sagobok
*/

let currentStoryPage = 0;


const storyPages = [

    "images/Otis/otis-backpack-item-sagobok-openl.PNG",

    "images/Otis/otis-backpack-item-sagobok-openr.PNG"

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


    page.src =
        storyPages[currentStoryPage];


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

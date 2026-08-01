/*
  Otis Sagobok
*/

let currentStoryPage = 0;


const storyPages = [

    "images/Otis/otis-backpack-item-sagobok-openl.PNG",

    "images/Otis/otis-backpack-item-sagobok-openr.PNG"

];


function openStoryBook() {

    localStorage.setItem(
        "vannen-view",
        "storybook"
    );

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

    localStorage.setItem(
        "vannen-view",
        "backpack"
    );


    document
        .getElementById("storybook")
        .style.display = "none";


    document
        .getElementById("backpack-view")
        .style.display = "block";


    currentStoryPage = 0;

    updateStoryPage();

}

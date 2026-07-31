/*
  Otis Sagobok
*/

let currentStoryPage = 0;


const storyPages = [

    "images/Otis/otis-backpack-item-sagobok-openl.PNG",

    "images/Otis/otis-backpack-item-sagobok-openr.PNG"

];


function openStoryBook() {

    currentStoryPage = 0;

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

    updateStoryPage();

}


function closeStoryBook() {

    document
        .getElementById("storybook")
        .style.display = "none";


    document
        .getElementById("backpack-view")
        .style.display = "block";

}

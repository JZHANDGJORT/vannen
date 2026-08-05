/*
  Book
*/


let currentStoryPage = 0;



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
        .getElementById("friend-view")
        .style.display = "none";


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



    document
        .getElementById("storybook-read")
        .style.display =
            "none";


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



    updateAllBadges();

}

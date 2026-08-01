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
Långt inne bland träden, där skogen mötte det glittrande vattnet, bodde en liten utter som hette Otis.
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

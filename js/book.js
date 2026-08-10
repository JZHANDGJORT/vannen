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



/*
  ÖPPNA BOK
*/

function openBook(type) {

    currentBookType = type;


    currentBookData =
        type === "book"
            ? bookData
            : type === "factbook"
                ? factBookData
                : type === "recipebook"
                    ? recipeBookData
                    : type === "photoalbum"
                        ? photoAlbumData
                        : null;


    if (!currentBookData) {

        console.error(
            "Ingen bokdata hittades:",
            type
        );

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


    /*
      Alla böcker börjar på sida 0.

      Sagobok, faktabok och receptbok
      har innehållsförteckning på sida 0.

      Fotoalbumet har ingen innehållsförteckning
      och visar därför sitt första fotoalbum-
      uppslag direkt.
    */

    currentBookPage = 0;


    localStorage.setItem(
        `${type}-page`,
        0
    );


    /*
      Visa rätt vy
    */

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


    document
        .getElementById("recipebook")
        .style.display =
            type === "recipebook"
                ? "block"
                : "none";


    document
        .getElementById("photoalbum")
        .style.display =
            type === "photoalbum"
                ? "block"
                : "none";


    updateBookPage();

}



/*
  UPPDATERA AKTUELL SIDA
*/

function updateBookPage() {

    if (!currentBookData) return;


    /*
      Bestäm vilken HTML-vy som används
    */

    const prefix =
        currentBookType === "book"
            ? "storybook"
            : currentBookType === "factbook"
                ? "factbook"
                : currentBookType === "recipebook"
                    ? "recipebook"
                    : "photoalbum";


    /*
      Hämta aktuell sida
    */

    const story =
        currentBookData.pages[currentBookPage];


    if (!story) {

        console.error(
            "Sidan hittades inte:",
            currentBookPage
        );

        return;
    }



    /*
      FOTOALBUM
    */

    if (currentBookType === "photoalbum") {

        updatePhotoAlbumPage(story);


        /*
          Fotoalbumets bakgrund
        */

        const background =
            document.getElementById(
                "photoalbum-background"
            );


        if (background) {

            background.src =
                story.background;

            background.className =
                story.backgroundClass || "";

        }


    }



    /*
      VANLIGA BÖCKER
    */

    else {

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


        const page =
            document.getElementById(
                `${prefix}-page`
            );


        /*
          Bakgrund
        */

        if (background) {

            background.src =
                story.background;

            background.className =
                story.backgroundClass || "";

        }


        /*
          Sidbild
        */

        if (page) {

            page.src =
                story.image || "";


            page.className =
                story.imageClass || "";


            if (!story.image) {

                page.style.display =
                    "none";

            }

            else {

                page.style.display =
                    "block";

            }

        }


        /*
          Titel
        */

        if (title) {

            if (story.title) {

                title.style.display =
                    "block";

                title.innerHTML =
                    story.title;

            }

            else {

                title.style.display =
                    "none";

                title.innerHTML =
                    "";

            }

        }


        /*
          Innehållsförteckning / text
        */

        if (content && text) {

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
                    story.text || "";

                text.className =
                    story.textClass || "";

            }

        }

    }



    /*
      BLÄDDRINGSPILAR
    */

    const prevButton =
        document.getElementById(
            `${prefix}-prev`
        );


    const nextButton =
        document.getElementById(
            `${prefix}-next`
        );


    if (prevButton) {

        prevButton.style.display =
            currentBookPage === 0
                ? "none"
                : "block";

    }


    if (nextButton) {

        nextButton.style.display =
            currentBookPage ===
            currentBookData.pages.length - 1
                ? "none"
                : "block";

    }



    /*
      LÄS-/UPPTÄCK-KNAPP
    */

    const readButton =
        document.getElementById(
            `${prefix}-read`
        );


    if (readButton) {

        const activityMode =
            currentBookType === "book"
                ? bookReadingMode
                : currentBookType === "factbook"
                    ? factBookDiscoverMode
                    : false;


        readButton.style.display =
            activityMode &&
            currentBookPage > 0
                ? "block"
                : "none";

    }

}



/*
  FOTOALBUMETS FOTON
*/

function updatePhotoAlbumPage(story) {

    const photos =
        story.photos || [];


    for (
        let i = 1;
        i <= 3;
        i++
    ) {

        const photo =
            document.getElementById(
                `photoalbum-photo-${i}`
            );


        if (!photo) {

            console.error(
                `Fotoalbum: kunde inte hitta photoalbum-photo-${i}`
            );

            continue;
        }


        const photoData =
            photos[i - 1];


        /*
          Om inget foto finns
        */

        if (!photoData) {

            photo.style.display =
                "none";

            photo.removeAttribute(
                "src"
            );

            continue;

        }


        /*
          Ladda bilden
        */

        photo.src =
            photoData.image;


        /*
          Lägg på positioneringsklassen
        */

        photo.className =
            photoData.class ||
            "photoalbum-photo";


        photo.style.display =
            "block";

    }

}



/*
  BLÄDDRA
*/

function changeBookPage(direction) {

    currentBookPage += direction;


    /*
      Hindra att man bläddrar
      utanför boken
    */

    if (currentBookPage < 0) {

        currentBookPage = 0;

    }


    if (
        currentBookPage >=
        currentBookData.pages.length
    ) {

        currentBookPage =
            currentBookData.pages.length - 1;

    }


    localStorage.setItem(
        `${currentBookType}-page`,
        currentBookPage
    );


    updateBookPage();

}



/*
  FAKTABOK
*/

function changeFactPage(direction) {

    changeBookPage(direction);

}



/*
  SAGOBOK – KAPITEL
*/

function goToChapter

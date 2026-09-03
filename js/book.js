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
            : type === "factbook"
                ? factBookData
                : type === "recipebook"
                    ? recipeBookData
                    : type === "discoverbook"
                        ? discoverBookData
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
      Sagobok, faktabok, receptbok
      och upptäckarbok börjar på
      innehållsförteckningen.

      Fotoalbumet har ingen
      innehållsförteckning och börjar
      därför direkt på första fotosidan.
    */

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

    document
        .getElementById("recipebook")
        .style.display =
            type === "recipebook"
                ? "block"
                : "none";

    document
        .getElementById("discoverbook")
        .style.display =
            type === "discoverbook"
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


function updateBookPage() {

    if (!currentBookData) return;

    const prefix =
        currentBookType === "book"
            ? "storybook"
            : currentBookType === "factbook"
                ? "factbook"
                : currentBookType === "recipebook"
                    ? "recipebook"
                    : currentBookType === "discoverbook"
                        ? "discoverbook"
                        : "photoalbum";

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

        console.error(
            "Sidan hittades inte:",
            currentBookPage
        );

        return;
    }

    /*
      Bakgrund
    */

    background.src =
        story.background;

    background.className =
        story.backgroundClass;


    /*
      FOTOALBUM
    */

    if (currentBookType === "photoalbum") {

        updatePhotoAlbumPage(story);
    }


    /*
      Vanliga böcker
    */

    else {

        const page =
            document.getElementById(
                `${prefix}-page`
            );

        page.src =
            story.image || "";

        page.className =
            story.imageClass || "";

        text.className =
            story.textClass || "";

        if (!story.image) {

            page.style.display =
                "none";

        } else {

            page.style.display =
                "block";
        }


        if (story.title) {

            title.style.display =
                "block";

            title.innerHTML =
                story.title;

            title.className =
                story.titleClass || "";

        } else {

            title.style.display =
                "none";

            title.className =
                "";
        }


        /*
          Innehållsförteckning
        */

        if (currentBookPage === 0) {

            content.style.display =
                "block";

            text.style.display =
                "none";

        } else {

            content.style.display =
                "none";

            text.style.display =
                "block";

            text.innerHTML =
                story.text;
        }
    }


    /*
      Bläddringspilar
    */

    document
        .getElementById(
            `${prefix}-prev`
        )
        .style.display =
            currentBookPage === 0
                ? "none"
                : "block";

    document
        .getElementById(
            `${prefix}-next`
        )
        .style.display =
            currentBookPage ===
            currentBookData.pages.length - 1
                ? "none"
                : "block";


    /*
      Läs-/upptäck-knapp
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
  Fotoalbumets sidor
*/

function updatePhotoAlbumPage(story) {

    const background =
        document.getElementById(
            "photoalbum-background"
        );

    const container =
        document.getElementById(
            "photoalbum-photos"
        );

    if (!background || !container) {
        return;
    }


    /*
      Byt bakgrund
    */

    background.src =
        story.background;

    background.className =
        story.backgroundClass || "";


    /*
      Töm tidigare foton
    */

    container.innerHTML = "";


    /*
      Lägg in fotona
    */

    const photos =
        story.photos || [];

    photos.forEach(
        (photoData, index) => {

            /*
              Behållare för hela Polaroiden
            */

            const photo =
                document.createElement(
                    "div"
                );

            photo.className =
                photoData.class ||
                "photoalbum-photo";


            /*
              Själva fotografiet
            */

            const image =
                document.createElement(
                    "img"
                );

            image.src =
                photoData.image;

            image.alt =
                "Foto " +
                (index + 1);

            image.className =
                "photoalbum-photo-image";


            /*
              Text längst ned på Polaroiden
            */

            const caption =
                document.createElement(
                    "div"
                );

            caption.className =
                "photoalbum-photo-caption";

            caption.textContent =
                photoData.caption || "";


            /*
              Lägg bild + text
              i Polaroiden
            */

            photo.appendChild(
                image
            );

            photo.appendChild(
                caption
            );


            /*
              Lägg Polaroiden
              på albumsidan
            */

            container.appendChild(
                photo
            );
        }
    );
}


function changeBookPage(direction) {

    currentBookPage += direction;

    /*
      Hindra att man bläddrar
      utanför bokens sidor.
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


function changeFactPage(direction) {

    changeBookPage(direction);
}


function goToChapter(chapter) {

    if (chapter === 1) {

        currentBookPage = 1;
    }

    if (chapter === 2) {

        currentBookPage = 8;
    }

    localStorage.setItem(
        `${currentBookType}-page`,
        currentBookPage
    );

    updateBookPage();
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
        .getElementById("recipebook")
        .style.display = "none";

    document
        .getElementById("discoverbook")
        .style.display = "none";

    document
        .getElementById("photoalbum")
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

    addBadgeProgress(
        "upptackar"
    );

    factBookDiscoverMode =
        false;

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

    factBookDiscoverMode =
        true;

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

const BADGE_STORAGE_PREFIX = "badges";


// ========================================
// AKTUELL VÄN
// ========================================

function getBadgeStorageKey() {

    if (
        typeof currentFriend !== "undefined" &&
        currentFriend
    ) {

        return `${currentFriend.id}-badges`;

    }


    const page =
        window.location.pathname
            .split("/")
            .pop();


    if (page === "otis.html") {

        return "otis01-badges";

    }


    if (page === "bosse.html") {

        return "bosse01-badges";

    }


    return "otis01-badges";

}



// ========================================
// HÄMTA MÄRKEN
// ========================================

function getBadges() {

    return JSON.parse(

        localStorage.getItem(
            getBadgeStorageKey()
        )

    ) || {

        lasar: 0,
        rakne: 0,
        skapar: 0,
        upptackar: 0

    };

}



// ========================================
// SPARA MÄRKEN
// ========================================

function saveBadges(badges) {

    localStorage.setItem(

        getBadgeStorageKey(),

        JSON.stringify(badges)

    );

}



// ========================================
// FÄRG PÅ MÄRKE
// ========================================

function getBadgeColor(count) {

    if (count >= 50) {

        return "brun";

    }


    if (count >= 20) {

        return "rod";

    }


    if (count >= 10) {

        return "bla";

    }


    if (count >= 1) {

        return "gron";

    }


    return "gra";

}



// ========================================
// UPPDATERA ETT MÄRKE
// ========================================

function updateBadge(type) {

    const badges =
        getBadges();


    const color =
        getBadgeColor(
            badges[type]
        );


    const image =
        document.getElementById(
            type + "-badge"
        );


    if (!image) return;


    image.src =
        `images/Vannen/backpack/badge/otis-backpack-item-marke-${type}${color}.PNG`;

}
// ========================================
// LÄGG TILL MÄRKESPOÄNG
// ========================================

function addBadgeProgress(type) {

    const badges =
        getBadges();


    badges[type]++;


    saveBadges(
        badges
    );


    updateBadge(
        type
    );

}



// ========================================
// UPPDATERA ALLA MÄRKEN
// ========================================

function updateAllBadges() {

    updateBadge("lasar");

    updateBadge("rakne");

    updateBadge("skapar");

    updateBadge("upptackar");

}

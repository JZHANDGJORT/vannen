const BADGE_STORAGE_KEY = "otis-badges";


function getBadges() {

    return JSON.parse(
        localStorage.getItem(BADGE_STORAGE_KEY)
    ) || {
        lasar: 0,
        rakne: 0
    };

}



function saveBadges(badges) {

    localStorage.setItem(
        BADGE_STORAGE_KEY,
        JSON.stringify(badges)
    );

}



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



function updateBadge(type) {

    const badges = getBadges();

    const color = getBadgeColor(
        badges[type]
    );


    const image =
        document.getElementById(
            type + "-badge"
        );


    if (image) {

        image.src =
        `images/Otis/badge/otis-backpack-item-marke-${type}${color}.PNG`;

    }

}



function addBadgeProgress(type) {

    const badges = getBadges();

    badges[type]++;

    saveBadges(badges);

    updateBadge(type);

}

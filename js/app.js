let currentFriend = null;
document.addEventListener("DOMContentLoaded", () => {

    startApp();

});



function startApp() {


    const params =
        new URLSearchParams(
            window.location.search
        );


    const friendId =
        params.get("id");

    

    // Visa startsida

    if (!friendId) {


        showHomeView();

        renderFriends();

        return;

    }





    // Hitta vän

    const friend =
        friends.find(
            f => f.id === friendId
        );



    // Om vän saknas

    if (!friend) {

        showHomeView();

        renderFriends();

        return;

    }





// Visa vänsida

showFriendView();

startFriend(friend);



}    

function showHomeView() {


    document
        .getElementById("home-view")
        .style.display = "block";


    document
        .getElementById("friend-view")
        .style.display = "none";


    document.body.className = "home";
    
}







function showFriendView() {


    document
        .getElementById("home-view")
        .style.display = "none";


    document
        .getElementById("friend-view")
        .style.display = "block";


    document.body.className = "friend";
    
}

function startFriend(friend) {

    currentFriend = friend;


    const theme =
        themes[friend.home.theme];

    applyTheme(theme);

    renderFriend(friend);


    const aboutButton =
        document.getElementById("about-button");

    if (aboutButton) {

        aboutButton.onclick =
            showSettings;

    }


    const goodbyeButton =
        document.getElementById("goodbye-button");

    if (goodbyeButton) {

        goodbyeButton.onclick =
            showGoodbye;

    }


    const backpack =
        document.getElementById("backpack");

    if (backpack) {

        backpack.onclick =
            askOpenBackpack;

    }


    loadMemory();


    restoreCurrentView();

    if (
        window.location.hash === "#backpack" ||
        window.location.hash === "#book"
    ) {

        return;

    }


    if (!otisMemory.owner) {

        startOnboarding();

    } else {

        showMemoryGreeting();

        showMainMenu();

    }


    startCharacterBlinking();

}




function applyTheme(theme) {

    if (!document.body.classList.contains("friend")) {
        return;
    }


    document.documentElement.style.setProperty(
        "--text-color",
        theme.colors.text
    );


    document.documentElement.style.setProperty(
        "--background-color",
        theme.colors.background
    );


    if (theme.colors.accent) {

        document.documentElement.style.setProperty(
            "--accent-color",
            theme.colors.accent
        );

    }

}






function renderFriend(friend) {


    const nameElement =
        document.getElementById("friend-name");


    if(nameElement){

        nameElement.textContent =
            friend.name;

    }




    const worldElement =
    document.getElementById("friend-world");

if (worldElement) {

    worldElement.src =
        friend.worldImage;

}

const characterElement =
    document.getElementById("friend-character");

if (characterElement) {

    characterElement.src =
        friend.characterImage;

    characterElement.alt =
        friend.name;

}

const faceElement =
    document.getElementById("friend-character-face");

if (faceElement) {

    faceElement.src = "";
    faceElement.alt = friend.name;
    faceElement.style.opacity = "0";

}


    const subtitleElement =
        document.getElementById("friend-subtitle");


    if (subtitleElement) {

        subtitleElement.textContent =
            friend.subtitle;

    }
    

}


function showGreeting(friend) {



    const messages =
        greetings[friend.id];



    const randomMessage =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];



    addMessage(
        randomMessage.text,
        friend.id
    );


}

function setPageMode(mode) {

    document.body.className = mode;

}

function blinkCharacter() {

    const face =
        document.getElementById("friend-character-face");

    const otis =
        document.getElementById("friend-character");

    if (!face || !otis || !currentFriend) return;

    // Blinka inte om Otis är osynlig
    if (otis.style.opacity === "0") return;

    const blinkImage =
        currentFriend.characterBlinkImage;

    if (!blinkImage) return;

    face.src = blinkImage;
    face.style.opacity = "1";

    setTimeout(() => {

        face.style.opacity = "0";
        face.src = "";

    }, 250);

}

function smileCharacter(duration = 1500) {

    const face =
        document.getElementById("friend-character-face");

    if (!face) return;

    face.src = "images/Otis/otis-stone-smile-character.PNG";
    face.style.opacity = "1";

    clearTimeout(window.smileTimeout);

    window.smileTimeout = setTimeout(() => {

        face.style.opacity = "0";
        face.src = "";

    }, duration);

}

function laughCharacter(duration = 2000) {

    const face =
        document.getElementById("friend-character-face");

    if (!face) return;


    face.src =
        "images/Otis/otis-stone-laugh-character.PNG";

    face.style.opacity = "1";


    clearTimeout(window.laughTimeout);


    window.laughTimeout = setTimeout(() => {

        face.style.opacity = "0";
        face.src = "";

    }, duration);

}

function checkOtisMood(text) {

    const lowerText = text.toLowerCase();

    const happyWords = [
        "Vad roligt",
        "Vad fint",
        "Härligt",
        "Wow",
        "⭐",
        "🎉",
        "😊",
        "❤️",
        "💚"
    ];

    const seriousWords = [
        "ledsen",
        "jobbigt",
        "svårt",
        "orolig",
        "rädd",
        "ensam",
        "saknar",
        "gråter"
    ];

    const isHappy =
        happyWords.some(word => lowerText.includes(word.toLowerCase()));

    const isSerious =
        seriousWords.some(word => lowerText.includes(word));

    let smileChance = 0.3;

    if (isHappy) {
        smileChance = 0.8;
    }

    if (isSerious) {
        smileChance = 0;
    }

    if (Math.random() < smileChance) {
        smileCharacter();
    }

}

function startCharacterBlinking() {

    function blinkLoop() {

        blinkCharacter();

        const nextBlink =
            Math.random() * 7000 + 4000;

        setTimeout(
            blinkLoop,
            nextBlink
        );

    }

    blinkLoop();

}

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

setPageMode("home");
    
}







function showFriendView() {


    document
        .getElementById("home-view")
        .style.display = "none";


    document
        .getElementById("friend-view")
        .style.display = "block";

setPageMode("friend");
    
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

const backpack =
    document.getElementById("backpack");

if (backpack) {

    backpack.onclick =
        showBackpack;

}
    
    loadMemory();


if (!otisMemory.owner) {

    startOnboarding();

} else {

    showMemoryGreeting();

    showMainMenu();

}

startOtisBlinking();
    
}








function applyTheme(theme) {

    document.body.style.backgroundColor =
        theme.colors.background;

    document.body.style.color =
        theme.colors.text;


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




    const subtitleElement =
        document.getElementById("friend-subtitle");


    if (subtitleElement) {

        subtitleElement.textContent =
            friend.subtitle;

    }
    

}


const characterElement =
    document.getElementById("friend-character");


if (characterElement) {

    characterElement.src =
        friend.characterImage;

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

function otisBlink() {

    const image =
        document.getElementById("friend-character");


    if (!image) return;


    const normalImage =
        currentFriend.characterImage;


    const blinkImage =
        "images/Otis/otis-stone-blink-character.PNG";


    image.src = blinkImage;


    setTimeout(() => {

        image.src = normalImage;

    }, 250);

}

function startOtisBlinking() {

    setInterval(() => {

        const random =
            Math.random();


        if (random < 0.3) {

            otisBlink();

        }

    }, 4000);

}

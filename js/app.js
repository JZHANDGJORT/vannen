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
    document.getElementById("about-friend-button");

if (aboutButton) {

    aboutButton.onclick =
        showAboutFriend;

}

const settingsButton =
    document.getElementById("settings-button");

if (settingsButton) {

    settingsButton.onclick =
        showSettings;

}

const backpackButton =
    document.getElementById("backpack-button");

if (backpackButton) {

    backpackButton.onclick =
        showBackpack;

}
    
    loadMemory();


if (!otisMemory.owner) {

    startOnboarding();

} else {

    showMemoryGreeting();

    showMainMenu();

}

}








function applyTheme(theme) {


    document.body.style.backgroundColor =
        theme.colors.background;


    document.body.style.color =
        theme.colors.text;


}








function renderFriend(friend) {


    const imageElement =
    document.getElementById("friend-image");


if(imageElement){

    imageElement.src =
        friend.worldImage;


    imageElement.alt =
        friend.name;

}





    const imageElement =
        document.getElementById("friend-image");



    if(imageElement){

        imageElement.src =
            friend.image;


        imageElement.alt =
            friend.name;

    }

    const subtitleElement =
    document.getElementById("friend-subtitle");

if (subtitleElement) {

    subtitleElement.textContent =
        friend.subtitle;

}
    
const aboutButton =
    document.getElementById("about-friend-button");

if (aboutButton) {

    aboutButton.textContent =
        `Om ${friend.name} ♡`;

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

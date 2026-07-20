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



    const theme =
        themes[friend.home.theme];



    applyTheme(theme);



    renderFriend(friend);



    showGreeting(friend);



    showMainMenu();


}








function applyTheme(theme) {


    document.body.style.backgroundColor =
        theme.colors.background;


    document.body.style.color =
        theme.colors.text;


}








function renderFriend(friend) {


    const nameElement =
        document.getElementById("friend-name");



    if(nameElement){

        nameElement.textContent =
            friend.name;
    const introElement =
        document.getElementById("friend-introduction");


    if(introElement){

        introElement.textContent =
            friend.introduction;

    }
    }






    const imageElement =
        document.getElementById("friend-image");



    if(imageElement){

        imageElement.src =
            friend.image;


        imageElement.alt =
            friend.name;

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

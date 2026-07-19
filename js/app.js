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



    // Ingen specifik vän vald
    if (!friendId) {

        renderFriends();

        return;

    }



    // Hitta vald vän
    const friend =
        friends.find(
            f => f.id === friendId
        );



    // Om vän inte finns
    if (!friend) {

        renderFriends();

        return;

    }



    // Starta vännen

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


    if (nameElement) {

        nameElement.textContent =
            friend.name;

    }



    const imageElement =
        document.getElementById("friend-image");


    if (imageElement) {

        imageElement.src =
            friend.image;


        imageElement.alt =
            friend.name;

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

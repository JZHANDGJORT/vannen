document.addEventListener("DOMContentLoaded", () => {

    startApp();

});


function startApp() {

    // Hämta aktiv vän
    const friend = otis;


    // Hämta vänners värld
    const theme = themes[friend.home.theme];


    // Sätt tema
    applyTheme(theme);


    // Visa profil
    renderFriend(friend);


    // Visa första hälsning
    showGreeting(friend);


    // Visa val
    renderActions();

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

    nameElement.textContent =
        friend.name;


    const imageElement =
        document.getElementById("friend-image");


    imageElement.alt =
        friend.name;

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
        "otis"
    );

}



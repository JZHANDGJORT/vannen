function addMessage(text, sender) {

    const messages =
        document.getElementById("messages");


    const message =
        document.createElement("div");


    message.classList.add(
        "message",
        sender
    );


    message.textContent =
        text;


    messages.appendChild(message);


    scrollToBottom();

}



function scrollToBottom() {

    const chat =
        document.getElementById("chat");


    chat.scrollTop =
        chat.scrollHeight;

}

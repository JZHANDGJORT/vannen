function renderFriends() {
    const guideContainer =
        document.getElementById(
            "friend-guide-container"
        );
    const friendsContainer =
        document.getElementById(
            "friends-list"
        );
    if (
        !guideContainer ||
        !friendsContainer
    ) return;
    guideContainer.innerHTML = "";
    friendsContainer.innerHTML = "";
    /*
       Vännen – informationskort
    */
    const guideCard =
        document.createElement("div");
    guideCard.classList.add(
        "project-card"
    );
    guideCard.id =
        "friend-guide-card";
    guideCard.innerHTML = `
    <div class="gallery-wrapper">
        <div class="gallery">
            <img
                src="images/Vannen/vannen-concept.PNG"
                alt="Vad är Vännen?"
            >
        </div>
    </div>
    <a href="instr.html">
        Läs mer om Vännen →
    </a>
`;
    guideContainer.appendChild(
        guideCard
    );
    /*
       Vanliga vänkort
    */
    friends.forEach(friend => {
        const card =
            document.createElement("div");
        card.classList.add(
            "project-card"
        );
        card.innerHTML = `
            <img
                src="${friend.image}"
                alt="${friend.name}"
            >
            <h3>
                ${friend.name}
            </h3>
            <p>
                ${friend.cardText}
            </p>
            <a href="${friend.id === "otis01" ? "otis.html" : "bosse.html"}">
                Möt ${friend.name} →
            </a>
        `;
        friendsContainer.appendChild(
            card
        );
    });
}

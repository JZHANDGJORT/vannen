function renderFriends() {

    const container =
        document.getElementById("friends-list");


    if (!container) return;


    container.innerHTML = "";


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

            <a href="?id=${friend.id}">
                Möt ${friend.name} →
            </a>

        `;


        container.appendChild(card);


    });

}

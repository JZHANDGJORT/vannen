function renderFriends() {


    const container =
        document.getElementById("friends-list");



    container.innerHTML = `


        <div class="project-card">


            <img 
                src="${otis.image}" 
                alt="${otis.name}"
            >



            <div class="project-text">


                <h3>
                    ${otis.name}
                </h3>



                <p>
                    ${otis.cardText}
                </p>



                <a href="?id=${otis.id}">
                    Möt ${otis.name} →
                </a>



            </div>


        </div>


    `;


}

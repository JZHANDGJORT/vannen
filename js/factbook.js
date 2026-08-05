/*
  Otis Faktabok
*/


const factBookData = {

    id: "factbook",

    title: "Otis Faktabok",


    pages: [

        // Sida 0 - Innehållsförteckning
        {
            image: "",

            background:
            "images/Otis/otis-backpack-item-faktabok-openl.PNG",

            backgroundClass:
            "background-left",

            title: "",

            text: "",

            imageClass: ""
        },


        // Sida 1 - Fakta 1
        {
            image:
            "images/Otis/storybook/chapter01/page01.JPEG",

            background:
            "images/Otis/otis-backpack-item-faktabok-openr.PNG",

            backgroundClass:
            "background-right",

            title:
`
<span class="chapter-number">
Fakta 1
</span>
<br>

<span class="chapter-name">
Uttrar
</span>
`,

            text:

`
<p>Visste du att uttrar älskar att simma?</p>

<p>Deras tjocka päls hjälper dem att hålla sig varma även när vattnet är kallt.</p>

<p>Många uttrar har också en favoritsten som de använder när de ska knacka sönder musslor och snäckor.</p>

<p>Precis som Otis tycker riktiga uttrar om att samla fina stenar.</p>
`,

            imageClass:
            "chapter-image",

            textClass:
            "chapter-text"

        }

    ]

};

function openFactBook() {

    addMessage(
        "📚 Här kan vi upptäcka spännande fakta tillsammans!",
        "otis"
    );

}

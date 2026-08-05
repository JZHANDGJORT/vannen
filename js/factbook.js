/*
  Otis Faktabok
*/


const factBookData = {

    id: "factbook",

    title: "Otis Faktabok",


    pages: [

        // Sida 0 - innehållsförteckning
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


        // Sida 1 - Kapitel 1
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
Kapitel 1
</span>
<br>

<span class="chapter-name">
Otis och den magiska stenen
</span>
`,

            text:

`
<p>Långt inne bland träden, där skogen mötte det glittrande vattnet, bodde en liten utter som hette Otis.</p>

<p>Otis var nyfiken på nästan allt.</p>
`,

            imageClass:
            "chapter-image",

            textClass:
            "chapter-text"
          
        }


    ]

};

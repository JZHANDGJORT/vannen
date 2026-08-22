/*
  Otis Receptbok
*/
const recipeBookData = {
    id: "recipebook",
    title: "Otis Receptbok",
    pages: [
        // Sida 0 - Innehållsförteckning
        {
            image: "",
            background:
            "images/Otis/otis-backpack-item-receptbok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text: "",
            imageClass: "",
            textClass: ""
        },
        // Sida 1 - Kryddmuffins
        {
            image:
            "images/Otis/recipebook/otis-recept-kryddmuffins.PNG",
            background:
            "images/Otis/otis-backpack-item-receptbok-openr.PNG",
            backgroundClass:
            "background-right",
            title: "",
            text: "",
            imageClass:
            "recipe-image-right",
            textClass:
            "recipe-text-right"
        },
        // Sida 2 - Pannkaksbröd
        {
            image:
            "images/Otis/recipebook/otis-recept-pannkaksbrod.PNG",
            background:
            "images/Otis/otis-backpack-item-receptbok-openl.PNG",
            backgroundClass:
            "background-left",
            title: "",
            text: "",
            imageClass:
            "recipe-image-left",
            textClass:
            "recipe-text-left"
        },

              // Sida 3 - Ananas och mangoglass
        {
            image:
            "images/Otis/recipebook/otis-recept-ananas-mangoglass.PNG",

            background:
            "images/Otis/otis-backpack-item-receptbok-openr.PNG",

            backgroundClass:
            "background-right",

            title: "",

            text:
`
<h2>Ananas- och mangoglass</h2>

<h3>Ingredienser</h3>

<p>
250 g fryst mango<br>
250 g fryst ananas<br>
250 ml kokosmjölk eller kokosgrädde
</p>

<h3>Gör så här</h3>

<p>
1. Häll alla ingredienserna i en bunke och mixa slät.
</p>

<p>
2. Häll upp glassen i glassformar eller matlåda.
</p>

<p>
3. Ställ in glassen i frysen och låt stelna.
Låt tina något innan servering.
</p>

<p>
<strong>Tips!</strong> Testa gärna med annan valfri frukt eller bär. 🍓
</p>
`,

            imageClass:
            "recipe-image-right",

            textClass:
            "recipe-text-right"
        }
    ]
};

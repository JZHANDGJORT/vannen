let otisMemory = {

    owner: null,

    friends: [],

    companionToday: null,

    settings: {
        memoryEnabled: true
    }

};


// Hämta minne från enheten

function loadMemory() {

    const saved =
        localStorage.getItem("otis-memory");


    if (saved) {

        const oldMemory =
            JSON.parse(saved);


        otisMemory = {

            ...otisMemory,

            ...oldMemory,

            settings: {

                ...otisMemory.settings,

                ...oldMemory.settings

            }

        };

    }

}



// Spara minne

function saveMemory() {

    localStorage.setItem(
        "otis-memory",
        JSON.stringify(otisMemory)
    );

}



// Skapa första personen

function createPerson(person) {

    const newPerson = {

        id:
            Date.now().toString(),

        name:
            person.name,

        role:
            person.role || "friend",

        age:
            person.age || null,

        interests:
            person.interests || [],

        notes:
            []

    };


    otisMemory.friends.push(
        newPerson
    );


    saveMemory();


    return newPerson;

}



// Hitta person

function getPerson(id) {

    return otisMemory.friends.find(
        person =>
            person.id === id
    );

}



// Lägg till något Otis minns

function addMemory(personId, memory) {


    const person =
        getPerson(personId);


    if (!person) return;


    person.notes.push({

        text:
            memory,

        date:
            new Date().toISOString()

    });


    saveMemory();

}

function resetMemory() {

    localStorage.removeItem(
        "otis-memory"
    );


    otisMemory = {

        owner: null,

        friends: [],

        companionToday: null,

        settings: {
            memoryEnabled: true
        }

    };


    location.reload();

}

loadMemory();

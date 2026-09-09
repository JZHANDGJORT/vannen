let otisMemory = {

    owner: null,

    friends: [],

    companionToday: null,

    settings: {
        memoryEnabled: true
    }

};


let bosseMemory = {

    owner: null,

    friends: [],

    companionToday: null,

    settings: {
        memoryEnabled: true
    }

};


// Hämta minne från enheten

function loadMemory() {

    const savedOtis =
        localStorage.getItem("otis-memory");


    if (savedOtis) {

        const oldMemory =
            JSON.parse(savedOtis);


        otisMemory = {

            ...otisMemory,

            ...oldMemory,

            settings: {

                ...otisMemory.settings,

                ...oldMemory.settings

            }

        };

    }


    const savedBosse =
        localStorage.getItem("bosse-memory");


    if (savedBosse) {

        const oldMemory =
            JSON.parse(savedBosse);


        bosseMemory = {

            ...bosseMemory,

            ...oldMemory,

            settings: {

                ...bosseMemory.settings,

                ...oldMemory.settings

            }

        };

    }

}


function clearOldCompanion(memory) {

    if (!memory.companionToday) return;


    const today =
        new Date().toISOString().split("T")[0];


    if (memory.companionToday.date !== today) {

        memory.companionToday = null;

        return true;

    }


    return false;

}


// Spara Otis minne

function saveMemory() {

    localStorage.setItem(
        "otis-memory",
        JSON.stringify(otisMemory)
    );

}


// Spara Bosse minne

function saveBosseMemory() {

    localStorage.setItem(
        "bosse-memory",
        JSON.stringify(bosseMemory)
    );

}


// Skapa första personen för Otis

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


// Skapa första personen för Bosse

function createBossePerson(person) {

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


    bosseMemory.friends.push(
        newPerson
    );


    saveBosseMemory();


    return newPerson;

}


// Hitta person hos Otis

function getPerson(id) {

    return otisMemory.friends.find(
        person =>
            person.id === id
    );

}


// Hitta person hos Bosse

function getBossePerson(id) {

    return bosseMemory.friends.find(
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


// Lägg till något Bosse minns

function addBosseMemory(personId, memory) {

    const person =
        getBossePerson(personId);


    if (!person) return;


    person.notes.push({

        text:
            memory,

        date:
            new Date().toISOString()

    });


    saveBosseMemory();

}


// Återställ minnen

function resetMemory() {

    localStorage.removeItem(
        "otis-memory"
    );

    localStorage.removeItem(
        "bosse-memory"
    );

    localStorage.removeItem(
        "otis-badges"
    );


    otisMemory = {

        owner: null,

        friends: [],

        companionToday: null,

        settings: {
            memoryEnabled: true
        }

    };


    bosseMemory = {

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


if (clearOldCompanion(otisMemory)) {

    saveMemory();

}


if (clearOldCompanion(bosseMemory)) {

    saveBosseMemory();

}

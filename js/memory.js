let friendMemory = {

    owner: null,

    friends: [],

    companionToday: null,

    settings: {
        memoryEnabled: true
    }

};


// ========================================
// AKTUELL VÄN
// ========================================

function getCurrentFriendId() {

    if (
        typeof currentFriend !== "undefined" &&
        currentFriend
    ) {

        return currentFriend.id;

    }


    const page =
        window.location.pathname
            .split("/")
            .pop();


    if (page === "otis.html") {

        return "otis01";

    }


    if (page === "bosse.html") {

        return "bosse01";

    }


    return "otis01";

}



// ========================================
// STORAGE-NYCKEL
// ========================================

function getMemoryStorageKey() {

    return getCurrentFriendId() + "-memory";

}



// ========================================
// HÄMTA MINNE FRÅN ENHETEN
// ========================================

function loadMemory() {

    const storageKey =
        getMemoryStorageKey();


    const saved =
        localStorage.getItem(storageKey);


    if (saved) {

        const oldMemory =
            JSON.parse(saved);


        friendMemory = {

            ...friendMemory,

            ...oldMemory,

            settings: {

                ...friendMemory.settings,

                ...oldMemory.settings

            }

        };

    }

}



// ========================================
// RENSAR GAMMAL COMPANION
// ========================================

function clearOldCompanion() {

    if (!friendMemory.companionToday) return;


    const today =
        new Date().toISOString().split("T")[0];


    if (
        friendMemory.companionToday.date !== today
    ) {

        friendMemory.companionToday = null;

        saveMemory();

    }

}



// ========================================
// SPARA MINNE
// ========================================

function saveMemory() {

    localStorage.setItem(

        getMemoryStorageKey(),

        JSON.stringify(friendMemory)

    );

}



// ========================================
// SKAPA FÖRSTA PERSONEN
// ========================================

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


    friendMemory.friends.push(
        newPerson
    );


    saveMemory();


    return newPerson;

}



// ========================================
// HITTA PERSON
// ========================================

function getPerson(id) {

    return friendMemory.friends.find(

        person =>
            person.id === id

    );

}



// ========================================
// LÄGG TILL NÅGOT VÄNNEN MINNS
// ========================================

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



// ========================================
// ÅTERSTÄLL MINNE
// ========================================

function resetMemory() {

    localStorage.removeItem(
        getMemoryStorageKey()
    );


    friendMemory = {

        owner: null,

        friends: [],

        companionToday: null,

        settings: {
            memoryEnabled: true
        }

    };


    location.reload();

}

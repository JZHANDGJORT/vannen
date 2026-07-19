function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}



function loadData(key) {

    const data =
        localStorage.getItem(key);


    if (!data) {
        return null;
    }


    return JSON.parse(data);

}



function saveMessage(message) {

    const history =
        loadData("vannen-history") || [];


    history.push(message);


    saveData(
        "vannen-history",
        history
    );

}



function getMessageHistory() {

    return (
        loadData("vannen-history") || []
    );

}



function saveActivity(activity) {

    const activitiesDone =
        loadData("vannen-activities") || [];


    activitiesDone.push(activity);


    saveData(
        "vannen-activities",
        activitiesDone
    );

}



function getCompletedActivities() {

    return (
        loadData("vannen-activities") || []
    );

}



function clearMemory() {

    localStorage.removeItem(
        "vannen-history"
    );


    localStorage.removeItem(
        "vannen-activities"
    );

}

function saveCompletedActivity(activity) {

    if (!activity) return;


    const history =
        getActivityHistory();


    history.push({

        text: activity.text,

        date: new Date().toISOString(),

        status: "completed"

    });


    localStorage.setItem(
        "vannen-history",
        JSON.stringify(history)
    );

}



function saveSkippedActivity(activity) {

    if (!activity) return;


    const history =
        getActivityHistory();


    history.push({

        text: activity.text,

        date: new Date().toISOString(),

        status: "skipped"

    });


    localStorage.setItem(
        "vannen-history",
        JSON.stringify(history)
    );

}



function getActivityHistory() {

    const history =
        localStorage.getItem(
            "vannen-history"
        );


    if (!history) {

        return [];

    }


    return JSON.parse(history);

}

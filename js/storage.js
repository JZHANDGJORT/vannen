function saveCompletedActivity(activity) {

    const history =
        getCompletedActivities();


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

    const history =
        getCompletedActivities();


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



function getCompletedActivities() {

    const history =
        localStorage.getItem(
            "vannen-history"
        );


    if (!history) {

        return [];

    }


    return JSON.parse(history);

}

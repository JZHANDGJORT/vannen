function saveCurrentActivity(activity) {

    if (!activity) return;


    localStorage.setItem(
        "vannen-current-activity",
        JSON.stringify({

            text: activity.text,

            date: new Date().toISOString()

        })
    );

}



function getCurrentActivity() {

    const activity =
        localStorage.getItem(
            "vannen-current-activity"
        );


    if (!activity) {

        return null;

    }


    return JSON.parse(activity);

}



function hasActivityToday() {

    const activity =
        getCurrentActivity();


    if (!activity) {

        return false;

    }


    const savedDate =
        new Date(activity.date);


    const today =
        new Date();


    return (
        savedDate.getFullYear() === today.getFullYear()
        &&
        savedDate.getMonth() === today.getMonth()
        &&
        savedDate.getDate() === today.getDate()
    );

}



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
function clearCurrentActivity() {

    localStorage.removeItem(
        "vannen-current-activity"
    );

}

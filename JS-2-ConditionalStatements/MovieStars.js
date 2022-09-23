function MovieStars(params) {

    let budget = Number(params[0]);

    let i = 1;

    while (budget > 0 && params[i] !== "ACTION") {
        if (params[i].length > 15) {
            budget -= 0.20 * budget;
            i++;
        } else {
            budget -= Number(params[i + 1]);
            i += 2;
        }

        
    }

    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(-budget).toFixed(2)} leva for our actors.`);
    }

}



MovieStars
    (["90000",
        "Christian Bale",
        "70000.50",
        "Leonard DiCaprio",
        "Kevin Spacey",
        "24000.99"
    ]);
MovieStars
(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])
;
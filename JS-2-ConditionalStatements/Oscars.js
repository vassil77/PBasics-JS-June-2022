function Oscars(params) {

    let actor = params[0];
    let points = Number(params[1]);
    let numJudges = Number(params[2]);

    for (let i = 3; i <= 2 * numJudges + 1; i += 2) {
        let length = params[i].length;
        let unitPoints = Number(params[i + 1]);
        unitPoints = unitPoints * length / 2;
        points += unitPoints;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            i = 2 * numJudges + 2;
        }

    }

    if (points <= 1250.5) {


        console.log(`Sorry, ${actor} you need ${(1250.5-points).toFixed(1)} more!`);
    }

}



Oscars
    (["Zahari Baharov",
        "205",
        "4",
        "Johnny Depp",
        "45",
        "Will Smith",
        "29",
        "Jet Lee",
        "10",
        "Matthew Mcconaughey",
        "39"
    ]);
Oscars
    (["Sandra Bullock",
        "340",
        "5",
        "Robert De Niro",
        "50",
        "Julia Roberts",
        "40.5",
        "Daniel Day-Lewis",
        "39.4",
        "Nicolas Cage",
        "29.9",
        "Stoyanka Mutafova",
        "33"
    ]);
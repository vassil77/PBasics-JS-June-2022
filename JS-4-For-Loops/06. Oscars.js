function Oscars(params) {

    let actor = params[0];
    let totalPoints = Number(params[1]);
    let n = Number(params[2]);

    for (let i = 0; i < 2*n; i+=2) {
        let currentPoints = (params[i + 3].length) * (Number(params[i + 4])) / 2;
        totalPoints += currentPoints;
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }

    }
    let diff = Math.abs(totalPoints - 1250.5);

    if (totalPoints <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
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



console.log(`-----------------`);
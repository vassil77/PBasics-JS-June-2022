function TennisRanklist(params) {

    let tours = Number(params[0]);
    let startPoints = Number(params[1]);

    let finalPoints = startPoints;

    let index = 2;
    let winCounter=0;

    for (let i = 1; i <= tours; i++) {
        switch (params[index]) {
            case "W":
                finalPoints += 2000;
                winCounter++;
                break;
            case "F":
                finalPoints += 1200;
                break;
            case "SF":
                finalPoints += 720;
                break;


        }
        index++;
    }

    console.log(`Final points: ${finalPoints}`);

    let avgPoints = Math.floor((finalPoints - startPoints) / tours);
    console.log(`Average points: ${avgPoints}`);

    let percent=winCounter/tours*100;
    console.log(`${percent.toFixed(2)}%`);



}

TennisRanklist
    (["5",
        "1400",
        "F",
        "SF",
        "W",
        "W",
        "SF"
    ]);
console.log(`-----------------`);
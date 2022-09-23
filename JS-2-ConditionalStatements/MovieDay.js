function MovieDay(params) {

    let shootingTime = Number(params[0]);
    let sceenNum = Number(params[1]);
    let unitTimeSceen = Number(params[2]);

    let totalTime = 0.15 * shootingTime + sceenNum * unitTimeSceen;
    let restTime = Math.abs(totalTime - shootingTime);
    restTime = Math.round(restTime);

    if (totalTime < shootingTime) {
        console.log(`You managed to finish the movie on time! You have ${restTime} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${restTime} minutes.`);
    }



}

MovieDay
    (["120",
        "10",
        "11"
    ]);
    MovieDay
    (["60",
"15",
"3"]);
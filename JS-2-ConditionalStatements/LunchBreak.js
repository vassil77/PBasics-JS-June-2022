function LunchbreakL(params) {

    let serial = params[0];
    let episode = parseInt(params[1]);
    let breakL = parseInt(params[2]);

    let lunchTime = breakL / 8;
    let relaxTime = breakL / 4;

    let diffTime = breakL - lunchTime - relaxTime;

    if (diffTime >= episode) {
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(diffTime-episode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(episode-diffTime
            )} more minutes.`);

    }

}

LunchbreakL
    (["Game of Thrones",
        "60",
        "96"
    ]);
LunchbreakL
    (["Teen Wolf",
        "48",
        "60"
    ]);
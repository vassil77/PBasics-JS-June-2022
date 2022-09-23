function lunchBreak(input) {
    let nameOfSeries = input[0];
    let EpisodeLast = parseInt(input[1]);
    let breakLast = parseInt(input[2]);

    let lunchTime = breakLast / 8;
    let restTime = breakLast / 4;
    let lastTime = breakLast - lunchTime - restTime;
    let leftTime = EpisodeLast - lastTime;

    leftTime = Math.abs(leftTime);
    leftTime = Math.ceil(leftTime);


    if (lastTime >= EpisodeLast) {
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${leftTime} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${leftTime} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);

lunchBreak
    (["Game of Thrones",
        "60",
        "96"
    ])

;
lunchBreak
    (["Teen Wolf",
        "48",
        "60"
    ]);
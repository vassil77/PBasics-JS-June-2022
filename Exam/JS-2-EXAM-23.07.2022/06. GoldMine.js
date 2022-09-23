function GoldMine(params) {

    let i = 0;
    let locations = Number(params[i++]);


    for (let j = 1; j <= locations; j++) {
        let expDaily = Number(params[i++]);
        let days = Number(params[i++]);
        let sumGold = 0;

        for (let k = 1; k <= days; k++) {
            sumGold += Number(params[i++]);
        }

        let avgDaily = sumGold / days;

        if (avgDaily >= expDaily) {
            console.log(`Good job! Average gold per day: ${avgDaily.toFixed(2)}.`);
        } else {
            console.log(`You need ${Math.abs(avgDaily-expDaily).toFixed(2)} gold.`);
        }


    }





}

GoldMine


(["1",
"5",
"3",
"10",
"1",
"3"])


;



//console.log(`-----------------`);
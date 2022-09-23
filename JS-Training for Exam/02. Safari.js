function Safari(params) {

    let budget = Number(params[0]);
    let fuel = Number(params[1]);
    let day = params[2];

    let cost = fuel * 2.10 + 100;

    switch (day) {
        case "Saturday":
            cost *= (1 - 0.10);
            break;
        case "Sunday":
            cost *= (1 - 0.20);
            break;

    }

    let diff = Math.abs(budget - cost);

    if (budget >= cost) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);

    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }


}

Safari

(["120",
"30",
"Saturday"])



;



//console.log(`-----------------`);
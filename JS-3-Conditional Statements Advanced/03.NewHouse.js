function NewHouse(params) {

    let type = params[0];
    let flowersNum = Number(params[1]);
    let budget = Number(params[2]);

    let neededMoney = 0;

    switch (type) {
        case "Roses":
            neededMoney = 5 * flowersNum;
            break;
        case "Dahlias":
            neededMoney = 3.80 * flowersNum;
            break;
        case "Tulips":
            neededMoney = 2.80 * flowersNum;
            break;
        case "Narcissus":
            neededMoney = 3 * flowersNum;
            break;
        case "Gladiolus":
            neededMoney = 2.50 * flowersNum;
            break;


    }

    if (flowersNum > 80 && type === "Roses") {
        neededMoney *= 0.90;
    }

    if (flowersNum > 90 && type === "Dahlias") {
        neededMoney *= 0.85;
    }

    if (flowersNum > 80 && type === "Tulips") {
        neededMoney *= 0.85;
    }

    if (flowersNum < 120 && type === "Narcissus") {
        neededMoney *= 1.15;
    }

    if (flowersNum < 80 && type === "Gladiolus") {
        neededMoney *= 1.20;
    }

    diff=Math.abs(neededMoney-budget);

    if (budget>=neededMoney) {
        console.log(`Hey, you have a great garden with ${flowersNum} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }




}


NewHouse
    (["Roses",
        "55",
        "250"
    ]);
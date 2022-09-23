function FishingBoat(params) {

    let budget = Number(params[0]);
    let season = params[1];
    let numFishers = Number(params[2]);

    let price = 0;
    let disKoeff = 1;
    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
            price = 4200;
            break;
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (numFishers <= 6) {
        disKoeff *= (1 - 0.10);
    } else if (numFishers <= 11) {
        disKoeff *= (1 - 0.15);
    } else {
        disKoeff *= (1 - 0.25);
    }
    if (numFishers % 2 === 0 && season !== "Autumn") {
        disKoeff *= (1 - 0.05);
    }

    price *= disKoeff;
    let restMoney = Math.abs(budget - price);


    if (budget >= price) {
console.log(`Yes! You have ${restMoney.toFixed(2)} leva left.`);
    } else {
console.log(`Not enough money! You need ${restMoney.toFixed(2)} leva.`);
    }

}

FishingBoat
    (["3000",
        "Summer",
        "11"
    ])

;
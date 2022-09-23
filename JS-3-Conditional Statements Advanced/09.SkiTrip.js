function SkiTrip(params) {
    let days = Number(params[0]);
    let type = params[1];
    let valuation = params[2];

    let nights = days - 1;

    let price = 0;
    switch (type) {
        case "room for one person":
            price = 18 * nights;
            break;
        case "apartment":
            price = 25 * nights;
            if (days < 10) {
                price *= 0.7;
            } else if (10 <= days && days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.5;
            }
            break;
        case "president apartment":
            price = 35 * nights;
            if (days < 10) {
                price *= 0.9;
            } else if (10 <= days && days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.8;
            }

            break;
    }

    if (valuation==="positive") {
        price*=1.25;
    }
    if (valuation==="negative") {
        price*=0.90;
    }

    console.log(price.toFixed(2));



}

SkiTrip
    (["14",
        "apartment",
        "positive"
    ]);
function Series(params) {

    let budget = Number(params[0]);
    let numSerials = Number(params[1]);

    let price = 0;
    for (let i = 2; i <= 2 * numSerials; i += 2) {
        let serial = params[i];
        let unitPrice = Number(params[i + 1]);

        if (serial === "Thrones") {
            unitPrice -= 0.50 * unitPrice;
        } else if (serial === "Lucifer") {
            unitPrice -= 0.40 * unitPrice;
        } else if (serial === "Protector") {
            unitPrice -= 0.30 * unitPrice;
        } else if (serial === "TotalDrama") {
            unitPrice -= 0.20 * unitPrice;
        } else if (serial === "Area") {
            unitPrice -= 0.10 * unitPrice;
        }

        price += unitPrice;

    }

    let restMoney = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`You bought all the series and left with ${restMoney.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${restMoney.toFixed(2)} lv. more to buy the series!`);

    }

}


Series
    (["25",
        "6",
        "Teen Wolf",
        "8",
        "Protector",
        "5",
        "TotalDrama",
        "5",
        "Area",
        "4",
        "Thrones",
        "5",
        "Lucifer",
        "9"
    ]);
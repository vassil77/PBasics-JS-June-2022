function MobileOperator(params) {

    let term = params[0];
    let type = params[1];
    let mobile = params[2];
    let months = Number(params[3]);

    const matrix = [
        [9.98, 18.99, 25.98, 35.99],
        [8.58, 17.09, 23.59, 31.79]
    ];

    let i = 0;
    let j = 0;

    switch (term) {
        case "one":
            i = 0;
            break;
        case "two":
            i = 1;
            break;
    }

    switch (type) {
        case "Small":
            j = 0;
            break;
        case "Middle":
            j = 1;
            break;
        case "Large":
            j = 2;
            break;
        case "ExtraLarge":
            j = 3;
            break;


    }

    let unitPrice = matrix[i][j];

    if (mobile === "yes") {
        if (unitPrice <= 10) {
            unitPrice += 5.50;
        } else if (unitPrice <= 30) {
            unitPrice += 4.35;
        } else {
            unitPrice += 3.85;
        }
    }

    let totalPrice = unitPrice * months;

    if (term === "two") {
        totalPrice *= (1 - 3.75 / 100);
    }




    console.log(`${totalPrice.toFixed(2)} lv.`);
}

MobileOperator

    (["two",
        "Large",
        "no",
        "10"
    ])



;



//console.log(`-----------------`);
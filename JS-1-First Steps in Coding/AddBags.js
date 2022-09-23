function AddBags(input) {
    let priceOver20 = Number(input[0]);
    let kgBag = Number(input[1]);
    let daysLeft = Number(input[2]);
    let countBags = Number(input[3]);

    if (kgBag < 10) {
        mainTax = 0.2 * priceOver20;
    } else if (kgBag >= 10 && kgBag <= 20) {
        mainTax = 0.5 * priceOver20;

    } else {
        mainTax = priceOver20;
    }



    if (daysLeft > 30) {
        addTax = 0.1 * mainTax;
    } else if (daysLeft >= 7 && daysLeft <= 30) {
        addTax = 0.15 * mainTax;
    } else {
        addTax = 0.4 * mainTax;

    }



    let finalPrice = (countBags * (mainTax + addTax)).toFixed(2);
    console.log(`The total price of bags is: ${finalPrice} lv. `);

}


AddBags
    (["30",
        "18",
        "15",
        "2"
    ]);
AddBags
    (["25.50",
        "5",
        "36",
        "6"
    ]);
AddBags
    (["63.80",
        "23",
        "3",
        "1"
    ]);
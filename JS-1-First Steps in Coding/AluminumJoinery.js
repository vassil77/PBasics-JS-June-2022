function AluminumJoinery(input) {
    let countJoinery = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    if (countJoinery < 10) {
        console.log("Invalid order");
    } else {
        // 90X130
        if (type === "90X130") {
            if (countJoinery <= 30) {
                unitPrice = 110;
            } else if (countJoinery > 30 && countJoinery <= 60) {
                unitPrice = 110 * (1-0.05);
            } else {
                unitPrice = 110 * (1-0.08);
            }
        }



        // 100x150
        if (type === "100X150") {
            if (countJoinery <= 40) {
                unitPrice = 140;
            } else if (countJoinery > 40 && countJoinery <= 80) {
                unitPrice = 140 * (1-0.06);
            } else {
                unitPrice = 140 * (1-0.10);
            }
        }

        // 130X180
        if (type === "130X180") {
            if (countJoinery <= 20) {
                unitPrice = 190;
            } else if (countJoinery > 20 && countJoinery <= 50) {
                unitPrice = 190 * (1-0.07);
            } else {
                unitPrice = 190 * (1-0.12);
            }
        }
        // 200x300
        if (type === "200X300") {
            if (countJoinery <= 25) {
                unitPrice = 250;
            } else if (countJoinery > 25 && countJoinery <= 50) {
                unitPrice = 250 * (1-0.09);
            } else {
                unitPrice = 250 * (1-0.14);
            }
        }
        //delivery tax
        if (delivery === "With delivery") {
            deliveryTax = 60;
        } else if (delivery === "Without delivery") {
            deliveryTax = 0;
        }

        let Price = countJoinery * unitPrice + deliveryTax;

        //total discount
        if (countJoinery > 99) {
            totalDiscount = -0.04 * Price;
        } else {
            totalDiscount = 0;
        }

        let finalPrice = (Price + totalDiscount).toFixed(2);

        console.log(`${finalPrice} BGN`);


    }
}


AluminumJoinery
    (["40",
        "90X130",
        "Without delivery"
    ]);
AluminumJoinery
    (["105",
        "100X150",
        "With delivery"
    ]);
AluminumJoinery
    (["2",
        "130X180",
        "With delivery"
    ]);
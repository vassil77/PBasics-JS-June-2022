function GodzillavsKong(params) {

    let budget = Number(params[0]);
    let persons = Number(params[1]);
    let unitPriceClothes = Number(params[2]);

    let setPrice = 0.10 * budget;
    let clothesPrice = persons * unitPriceClothes;

    if (persons > 150) {
        clothesPrice -= 0.10 * clothesPrice;
    }

    let totalPrice = setPrice + clothesPrice;

    if (totalPrice > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalPrice-budget).toFixed(2)} leva more.`);

    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(-totalPrice+budget).toFixed(2)} leva left.`);

    }

}

GodzillavsKong
    (["20000",
        "120",
        "55.5"
    ])

;
GodzillavsKong
    (["15437.62",
        "186",
        "57.99"
    ]);
GodzillavsKong
    (["9587.88",
        "222",
        "55.68"
    ]);
function Cinema(params) {
    let type = params[0];
    let r = Number(params[1]);
    let c = Number(params[2]);

    let income = 0;

    if (type === "Premiere") {
        income = 12 * r * c;
    } else if (type === "Normal") {
        income = 7.50 * r * c;
    } else if (type === "Discount") {
        income = 5 * r * c;
    }
    console.log(`${income.toFixed(2)} leva`);



}


Cinema
    (["Premiere",
        "10",
        "12"
    ]);
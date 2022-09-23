function EasterBake(params) {
    let i = 0;
    let cakes = Number(params[i++]);

    let maxSugar = 0;
    let maxFlour = 0;

    let totalSugar = 0;
    let totalFlour = 0;

    for (let j = 0; j < cakes; j++) {
        let currentSugar = Number(params[i++]);
        let currentFlour = Number(params[i++]);

        totalSugar += currentSugar;
        totalFlour += currentFlour;

        if (currentSugar > maxSugar) {
            maxSugar = currentSugar;
        }

        if (currentFlour > maxFlour) {
            maxFlour = currentFlour;
        }
    }

    let packSugar=Math.ceil(totalSugar/950);
    let packFlour=Math.ceil(totalFlour/750);

    console.log(`Sugar: ${packSugar}`);
    console.log(`Flour: ${packFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

EasterBake

(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

;




//console.log(`-----------------`);
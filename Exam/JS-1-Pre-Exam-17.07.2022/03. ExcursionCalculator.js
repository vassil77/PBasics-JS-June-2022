function ExcursionCalculator(params) {

    let persons = Number(params[0]);
    let season = params[1];

    let unitPrice = 0;
    let coeff = 1;

    if (persons <= 5) {
        switch (season) {
            case "spring":
                unitPrice = 50;
                break;
            case "summer":
                unitPrice = 48.50;
                coeff *= (1 - 0.15);
                break;
            case "autumn":
                unitPrice = 60;
                break;
            case "winter":
                unitPrice = 86;
                coeff *= (1 + 0.08);

                break;

        }
    } else {
        switch (season) {
            case "spring":
                unitPrice = 48;
                break;
            case "summer":
                unitPrice = 45;
                coeff *= (1 - 0.15);
                break;
            case "autumn":
                unitPrice = 49.5;
                break;
            case "winter":
                unitPrice = 85;
                coeff *= (1 + 0.08);

                break;

        }

    }

    let totalPrice=coeff*unitPrice*persons;
console.log(`${totalPrice.toFixed(2)} leva.`);


}

ExcursionCalculator

(["20",
"winter"])


;




//console.log(`-----------------`);
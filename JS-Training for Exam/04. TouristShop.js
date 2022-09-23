function TouristShop(params) {

    let i = 0;
    let budget = Number(params[i++]);

    let command = params[i++];
    let totalPrice = 0;
    let restMoney = budget;
    let numProducts = 0;
    let currentPrice = 0;
    let isEnough = true;


    while (command !== "Stop") {
        numProducts++;

        if (numProducts % 3 === 0) {
            currentPrice = 0.50 * Number(params[i++]);
        } else {
            currentPrice = Number(params[i++]);
        }

        if (currentPrice > restMoney) {
            console.log("You don't have enough money!");
            let diff = Math.abs(currentPrice - restMoney);
            console.log(`You need ${diff.toFixed(2)} leva!`);
            isEnough = false;
            break;
        }

        totalPrice += currentPrice;
        restMoney -= currentPrice;

        command = params[i++];
    }

    if (isEnough) {
        console.log(`You bought ${numProducts} products for ${totalPrice.toFixed(2)} leva.`);
    }


}

TouristShop

    (["54",
        "Thermal underwear",
        "24",
        "Sunscreen",
        "45"
    ])


;



//console.log(`-----------------`);
function EnergyBooster(input) {

    let fruit = input[0];
    let set = input[1];
    let countSets = Number(input[2]);
    let typeFruits = ["Watermelon", "Mango", "Pineapple", "Raspberry"];
    const set2 = [56, 36.66, 42.10, 20];
    const set5 = [28.7, 19.6, 24.8, 15.2];

    if (set == "small") {
        numInSet = 2;
        unitPrice = set2.map(myFunction);
    } else if (set == "big") {
         numInSet = 5;
         unitPrice = set5.map(myFunction);
    }
    
    function myFunction(num) {
        return num * numInSet;
    }


    for (i = 0; i <= 3; i++) {
        if (fruit == typeFruits[i]) {
            idFruit = i;
        }
    }

    let price = countSets * unitPrice[idFruit];



    let discount = 0;
    if (price >= 400 && price <= 1000) {
        discount = 0.15 * price;
    } else if (price > 1000) {
        discount = 0.5 * price;
    }

    let totalPrice = (price - discount).toFixed(2);
    console.log(`${totalPrice} lv.`);
}


EnergyBooster
    (["Watermelon",
        "big",
        "4"
    ]);
    EnergyBooster(["Pineapple",
    "small",
    "1"]);
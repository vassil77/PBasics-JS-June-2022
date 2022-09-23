function FitnessCard(input) {

    let startSum = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    const typeSport = ["Gym", "Boxing", "Yoga", "Zumba", "Dances", "Pilates"];
    const male = [42, 41, 45, 34, 51, 39];
    const female = [35, 37, 42, 31, 53, 37];

    for (i = 0; i <= 5; i++) {
        if (sport === typeSport[i]) {
            id = i;
        }
    }

    if (sex === "m") {
        price = male[id];
    }else if(sex==="f"){
        price=female[id];
    }

    if (age <= 19) {
         discountCoeff = 1 - 0.20;
    } else {
         discountCoeff = 1;
    }

    let finalPrice=price*discountCoeff;

    if(startSum>=finalPrice){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else {
        let moneyLack=(finalPrice-startSum).toFixed(2);
        console.log(`You don't have enough money! You need $${moneyLack} more.`);

    }


}

FitnessCard((["50",
        "m",
        "23",
        "Gym"
    ])

);
FitnessCard(["20",
"f",
"15",
"Yoga"]);
FitnessCard  (["10",
"m",
"50",
"Pilates"]); 
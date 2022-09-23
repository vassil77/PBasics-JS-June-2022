function ExcursionSale(params) {

    let i = 0;
    let seaExc = Number(params[i++]);
    let mountainExc = Number(params[i++]);
    let command = params[i++];

    let seaCounter = 1;
    let mountainCounter = 1;
    let profit = 0;



    while (command != "Stop") {

        if (command === "sea" && seaCounter <= seaExc) {
            profit += 680;
            seaCounter++;
        }

        if (command === "mountain" && mountainCounter <= mountainExc) {
            profit += 499;
            mountainCounter++;
        }


        if (seaCounter>seaExc&& mountainCounter>mountainExc) {
            console.log(` Good job! Everything is sold.`);
            break;
        }

        command = params[i++];

    }
console.log(`Profit: ${profit} leva.`);










}

ExcursionSale

(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])


;



//console.log(`-----------------`);
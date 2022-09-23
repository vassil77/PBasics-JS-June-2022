function f2(params) {
    let index = 0;
    let numClients = params[0];
    let currentBill = 0;
    let totalBill = 0;
    let numProducts = 0;


    for (let i = 0; i < numClients; i++) {
        let command = params[index++];
        while (index <= params.length) {
            switch (command) {
                case "basket":
                    currentBill += 1.50;
                    numProducts++;
                    break;
                case "wreath":
                    currentBill += 3.80;
                    numProducts++;
                    break;
                case "chocolate bunny":
                    currentBill += 7;
                    numProducts++;
                    break;
                case "Finish":
                    if (numProducts % 2 === 0) {
                        currentBill *= 0.80;
                    }
                    console.log(`You purchased ${numProducts} items for ${currentBill} leva.`);
                    currentBill = 0;
                    numProducts = 0;


                    break;

            }
            command = params[index++];
        }


    }




}

f2 (["2","basket","wreath",
        "chocolate bunny",
        "Finish",
        "wreath",
        "chocolate bunny",
        "Finish"
    ]);






//console.log(`-----------------`);
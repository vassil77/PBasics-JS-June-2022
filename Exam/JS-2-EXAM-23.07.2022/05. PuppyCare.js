function PuppyCare(params) {

    let i = 0;
    let boughtFood = 1000 * Number(params[i++]);

    let command = params[i++];
    let eatenFood = 0;

    while (command !== "Adopted") {
        eatenFood += Number(command);

        command = params[i++];
    }

    let diff = Math.abs(eatenFood - boughtFood);

    if (boughtFood >= eatenFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }

}


PuppyCare

    (["2",
        "999",
        "456",
        "999",
        "999",
        "123",
        "456",
        "Adopted"
    ])


;



//console.log(`-----------------`);
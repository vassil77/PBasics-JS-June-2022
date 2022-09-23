function BeerAndChips(params) {

    let name = params[0];
    let budget = Number(params[1]);
    let numBeer = Number(params[2]);
    let chipsNum = Number(params[3]);

    let costBeer = 1.20 * numBeer;
    let unitChips = 0.45 * costBeer;
    let costChips = Math.ceil(unitChips * chipsNum);

    let totalCost = costBeer + costChips;
    let diff = Math.abs(totalCost - budget);

    if (budget >= totalCost) {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    }



}

BeerAndChips

    (["Valentin",
        "5",
        "2",
        "4"
    ])




;


//console.log(`-----------------`);
function MiningRig(params) {

    let priceVideo = Number(params[0]);
    let priceCable = Number(params[1]);
    let unitPriceEl = Number(params[2]);
    let dailyProfit = Number(params[3]);

    let totalSpent = 13 * (priceVideo + priceCable) + 1000;
    let days = Math.ceil(totalSpent / 13 / (dailyProfit - unitPriceEl));

    console.log(totalSpent);
    console.log(days);




}


MiningRig

(["800",
"10",
"0.32",
"6.4"])



;


//console.log(`-----------------`);
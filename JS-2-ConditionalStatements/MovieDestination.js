function MovieDestination(params) {

    let budget = Number(params[0]);
    let destination = params[1];
    let season = params[2];
    let days = Number(params[3]);

    let index = 0;
    let coeffDiscount=1;
    if (destination === "Dubai") {
        index = 0;
        coeffDiscount=1-0.30;
    } else if (destination === "Sofia") {
        index = 1;
        coeffDiscount=1+0.25;
    } else if (destination === "London") {
        index = 2;
    }

    const winter = [45000, 17000, 24000];
    const summer = [40000, 12500, 20250];

    let unitPrice = 0;
    if (season === "Winter") {
        unitPrice = winter[index];
    } else if (season === "Summer") {
        unitPrice = summer[index];
    }

    let price=unitPrice*days*coeffDiscount;
    let restmoney=Math.abs(price-budget);

    if (price<=budget) {
        console.log(`The budget for the movie is enough! We have ${restmoney.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${restmoney.toFixed(2)} leva more!`);
  
    }
}


MovieDestination
    (["400000",
        "Sofia",
        "Winter",
        "20"
    ]);
MovieDestination
(["1000000",
"Dubai",
"Summer",
"5"])
;
MovieDestination
(["200000",
"London",
"Summer",
"7"])
;
function ComputerFirm(params) {

    let n = Number(params[0]);
    let totalSales = 0;
    let totalRating = 0;

    for (let i = 1; i <= n; i++) {
        let current = Number(params[i]);
        let currentRating = current % 10;
        let currentSales = 0;
        let possibleSales = Math.floor(current / 10);

        switch (currentRating) {
            case 2:
                currentSales = 0.00 * possibleSales;

                break;
            case 3:
                currentSales = 0.50 * possibleSales;
                break;
            case 4:
                currentSales = 0.70 * possibleSales;
                break;
            case 5:
                currentSales = 0.85 * possibleSales;
                break;
            case 6:
                currentSales = 1.00 * possibleSales;
                break;
        }
        totalSales += currentSales;
        totalRating += currentRating;


    }

    console.log(totalSales.toFixed(2));

    let avgRating=totalRating/n;

    console.log(avgRating.toFixed(2));



}

ComputerFirm

(["2",
"204",
"206"])


;




//console.log(`-----------------`);
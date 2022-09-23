function CinemaVoucher(params) {

    let i = 0;
    let startValue = Number(params[i++]);

    let rest = startValue;
    let numTickets = 0;
    let numOthers = 0;

    let purchase = params[i++];
    let currentPrice = 0;

    while (purchase !== "End" && rest > 0) {

        if (purchase.length > 8) {
            currentPrice = purchase.charCodeAt(0) + purchase.charCodeAt(1);
            if (currentPrice <= rest) {
                numTickets++;
                rest -= currentPrice;
            } else {
                break;
            }
        } else {
            currentPrice = purchase.charCodeAt(0);
            if (currentPrice <= rest) {
                numOthers++;
                rest -= currentPrice;
            } else {
                break;
            }



        }


        purchase = params[i++];
    }

    console.log(numTickets);
    console.log(numOthers);


}


CinemaVoucher


(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"])


;





//console.log(`-----------------`);
function MovieProfit(params) {
    
    let movie=params[0];
    let days=Number(params[1]);
    let ticketNum=Number(params[2]);
    let priceTicket=Number(params[3]);
    let percentCinema=Number(params[4]);

    let profit=days*ticketNum*priceTicket*(1-percentCinema/100);

    console.log(`The profit from the movie ${movie} is ${profit.toFixed(2)} lv.`);


}


MovieProfit
(["The Programmer",
"20",
"500",
"7.50",
"7"]);
MovieProfit
(["Python Basics",
"40",
"34785",
"10.45",
"14"]);
MovieProfit
(["The Jungle",
"22",
"20500",
"9.37",
"30"]);

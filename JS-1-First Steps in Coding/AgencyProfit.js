function AgencyProfit(input) {
    let nameA = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let priceAdult = Number(input[3]);
    let tax = Number(input[4]);

    let priceKids=(1-0.7)*priceAdult;
    let totalPrice=adultTickets*(priceAdult+tax)+kidsTickets*(priceKids+tax);
    let profit=(0.2*totalPrice).toFixed(2);



    console.log(`The profit of your agency from ${nameA} tickets is ${profit} lv.`);

}
AgencyProfit([
    "WhizzAir",
    15,
    5,
    120,
    40
]);
AgencyProfit([
    "Ryan",
    60,
    23,
    158.96,
    39.12
]);
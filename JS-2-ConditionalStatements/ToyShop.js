function ToyShop(params) {
    
    let priceExc=Number(params[0]);
    let puzzlesNum=Number(params[1]);
    let dollNum=Number(params[2]);
    let bearNum=Number(params[3]);
    let minNum=Number(params[4]);
    let truckNum=Number(params[5]);

    let profit=puzzlesNum*2.6+dollNum*3+bearNum*4.1+minNum*8.2+truckNum*2;
    let toys=puzzlesNum+dollNum+bearNum+minNum+truckNum;

    if (toys>=50) {
        profit=profit*(1-0.25);
    }

    profit=profit*(1-0.1);

    if (profit>=priceExc) {
        console.log(`Yes! ${(profit-priceExc).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceExc-profit).toFixed(2)} lv needed.`);
   
    }





}

ToyShop
(["40.8",
"20",
"25",
"30",
"50",
"10"])
;

ToyShop
(["320",
"8",
"2",
"5",
"5",
"1"])
;

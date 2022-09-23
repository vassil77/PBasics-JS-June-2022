function CleverLily(params) {

    let Nyears = Number(params[0]);
    let washingPrice = Number(params[1]);
    let toyPrice = Number(params[2]);

    let toys = 0;
    let money = 0;
    let currentMoney = 0;

    for (let i = 0; i < Nyears; i++) {
        if ((i + 3) % 2 === 0) {
            currentMoney += 10;
            money += currentMoney - 1;
        } else {
            toys++;
        }
    }

    money+=toys*toyPrice;
    let diff=Math.abs(money-washingPrice);

    if (money>=washingPrice) {
       console.log(`Yes! ${diff.toFixed(2)}`); 
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }








}


CleverLily
    (["10",
        "170.00",
        "6"
    ]);




console.log(`-----------------`);
CleverLily
(["21",
"1570.98",
"3"]);
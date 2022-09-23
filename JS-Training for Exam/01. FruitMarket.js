function FruitMarket(params) {

    let i = 0;
    let unitStr = Number(params[i++]);
    let banana = Number(params[i++]);
    let orange = Number(params[i++]);
    let mulberry = Number(params[i++]);
    let str = Number(params[i++]);

    let unitMulberry = 0.5 * unitStr;
    let unitOrange = (1 - 0.40) * unitMulberry;
    let unitBanana = (1 - 0.80) * unitMulberry;

    let money = str * unitStr + banana * unitBanana + orange * unitOrange + mulberry * unitMulberry;

    console.log(money.toFixed(2));

}

FruitMarket
    ([
        63.5,
        3.57,
        6.35,
        8.15,
        2.5
    ])




;



//console.log(`-----------------`);
function Shopping(params) {
    
    let budget=Number(params[0]);
    let videoN=Number(params[1]);
    let porcessorM=Number(params[2]);
    let ramP=Number(params[3]);

    let unitVideo=250;
    let unitProc=0.35*unitVideo*videoN;
    let unitRam=0.10*unitVideo*videoN;

    let totalPrice=unitVideo*videoN+unitProc*porcessorM+unitRam*ramP;

    if (videoN>porcessorM) {
        totalPrice-=0.15*totalPrice;
    }

    let diff=Math.abs(totalPrice-budget);

    if (totalPrice<=budget) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
 
    }






}

Shopping
(["900",
"2",
"1",
"3"])
;
Shopping
(["920.45",
"3",
"1",
"1"]);

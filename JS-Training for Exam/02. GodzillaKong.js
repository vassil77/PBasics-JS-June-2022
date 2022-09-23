function GodzillaKong(params) {

    let budget=Number(params[0]);
    let mutes=Number(params[1]);
    let unitPrice=Number(params[2]);

    let dekor=0.10*budget;
    let clothes=mutes*unitPrice;

    if (mutes>150) {
        clothes*=(1-0.10);
    }

    let totalExp=dekor+clothes;

    let diff=Math.abs(budget-totalExp);

    if (totalExp>budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Action!" );
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }


}

GodzillaKong

(["15437.62",
"186",
"57.99"])



;



//console.log(`-----------------`);





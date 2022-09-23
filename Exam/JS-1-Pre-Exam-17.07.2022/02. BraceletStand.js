function BraceletStand(params) {
    let i=0;
    let dailyMoney=Number(params[i++]);
    let salesMoneyDaily=Number(params[i++]);
    let expensesTotal=Number(params[i++]);
    let giftPrice=Number(params[i++]);

    let totalMoney=5*dailyMoney+5*salesMoneyDaily-expensesTotal;
    let delta=Math.abs(totalMoney-giftPrice);

    if (totalMoney>=giftPrice) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${delta.toFixed(2)} BGN.`);
    }


}

BraceletStand

(["5.12",
"32.05",
"15",
"150"])


;



//console.log(`-----------------`);





function Excursion(params) {
    
    let groupNum=Number(params[0]);
    let nights=Number(params[1]);
    let cardsT=Number(params[2]);
    let ticketsM=Number(params[3]);

    let totalSum=groupNum*(nights*20+cardsT*1.60+ticketsM*6)*1.25;
    console.log(totalSum.toFixed(2));




}

Excursion

(["131",
"9",
"33",
"46"])


;




//console.log(`-----------------`);





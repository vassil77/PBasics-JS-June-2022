function OscarsCeremony(params) {
    
    let rent=Number(params[0]);

    let statuePrice=(1-0.30)*rent;
    let cateringPrice=(1-0.15)*statuePrice;
    let soundPrice=(0.50)*cateringPrice;
    let totalSpent=rent+statuePrice+cateringPrice+soundPrice;

    console.log(totalSpent.toFixed(2));


}


OscarsCeremony

(["3500"])


;


//console.log(`-----------------`);





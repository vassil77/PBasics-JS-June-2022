function TennisEquipment(params) {
    
    let unitRocket=Number(params[0]);
    let nRockets=parseInt(params[1]);
    let mPairs=parseInt(params[2]);

    let unitMpairs=unitRocket/6;
    let totalPrice=(nRockets*unitRocket+mPairs*unitMpairs)*1.20;

    let priceDj=Math.floor(totalPrice/8);
    let priceSponsors=Math.ceil(totalPrice*7/8);

    console.log(`Price to be paid by Djokovic ${priceDj}`);
    console.log(`Price to be paid by sponsors ${priceSponsors}`);



}


TennisEquipment
([850,
4,
2])
;

TennisEquipment ([


386,
7,
4])
;
function VegetableMarket(input) {
    let priceVegs = Number(input[0]);
    let priceFruit = Number(input[1]);
    let kgVegs = Number(input[2]);
    let kgFruit = Number(input[3]);

    let totalEuro=(priceVegs*kgVegs+priceFruit*kgFruit)/1.94;



    console.log(totalEuro.toFixed(2));

}
VegetableMarket([
    0.194,
    19.4,
    10,
    10,
]);
VegetableMarket([
    1.5,
    2.5,
    10,
    10
    
]);
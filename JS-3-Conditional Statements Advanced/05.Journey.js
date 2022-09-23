function Journey(params) {

    let budget = Number(params[0]);
    let season = params[1];

    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`);
        if (season === "summer") {
            price = 0.30 * budget;
            console.log(`Camp - ${price.toFixed(2)}`);
        } else if (season === "winter") {
            price = 0.70 * budget;
            console.log(`Hotel - ${price.toFixed(2)}`);
        }

    } else if (budget <= 1000) {
        console.log(`Somewhere in Balkans`);
        if (season === "summer") {
            price = 0.40 * budget;
            console.log(`Camp - ${price.toFixed(2)}`);
        } else if (season === "winter") {
            price = 0.80 * budget;
            console.log(`Hotel - ${price.toFixed(2)}`);
        }
    } else {
        console.log(`Somewhere in Europe`);
        price = 0.90 * budget;
        console.log(`Hotel - ${price.toFixed(2)}`);

    }





}


Journey
(["1500", "summer"])

;
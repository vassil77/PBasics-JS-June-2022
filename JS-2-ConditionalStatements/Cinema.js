function Cinema(params) {

    let capacity = Number(params[0]);

    let currentViewrs = 0;
    let i = 1;
    let discount = 0;
    let possibleViewrs = 0;


    while (possibleViewrs <= capacity && params[i] !== "Movie time!") {
        currentViewrs += Number(params[i]);
        possibleViewrs = currentViewrs + Number(params[i + 1]);

        if (params[i] % 3 === 0) {
            discount += 5;
        }

        if (params[i + 1] === "Movie time!") {
            console.log(`There are ${capacity-currentViewrs} seats left in the cinema.`);
        } else if (possibleViewrs > capacity) {
            console.log(`The cinema is full.`);
        }

        i++;

    }
    let income = currentViewrs * 5 - discount;

    console.log(`Cinema income - ${income} lv.`);
}


Cinema([
    50,
    15,
    10,
    10,
    15,
    5,
]);
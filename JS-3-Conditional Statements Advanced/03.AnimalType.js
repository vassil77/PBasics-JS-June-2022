function AnimalType(params) {
    let animal = params[0];

    switch (animal) {
        case "dog":
            console.log(`mammal`);
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log(`reptile`);break;
        default:
            console.log(`unknown`);
            break;
    }



}

AnimalType
(["dog"])
;
AnimalType
(["snake"]);
AnimalType
(["cat"]);

function basketballEquipment(input) {
    let taxYear = Number(input[0]);

    let keds = taxYear * (1 - 0.4);
    let outfit = keds * (1 - 0.2);
    let ball = outfit / 4;
    let accessories = ball / 5;

    let totalP = taxYear+keds + outfit + ball + accessories;

    console.log(totalP);

}
basketballEquipment(
    ["365 "]
);
basketballEquipment(
    ["550 "]
);
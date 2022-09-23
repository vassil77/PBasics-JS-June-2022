function CatWalking(input) {

    let minWalk = Number(input[0]);
    let countWalk = Number(input[1]);
    let caloriesAccepted = Number(input[2]);

    let burnedCalories = 5 * minWalk * countWalk;

    if (burnedCalories >= 0.5*caloriesAccepted) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }

}

CatWalking(["30",
    "3",
    "600"
]);
CatWalking(["15",
    "2",
    "500"
]);
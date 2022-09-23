function BirthdayParty(input) {

    let hallRent = Number(input);

    let cake = 0.2 * hallRent;
    let drinks=(1-0.45)*cake;
    let animator=hallRent/3;

    let budget=hallRent+cake+drinks+animator;

    console.log(budget);

}

BirthdayParty(
    2250
);
BirthdayParty([
    3720
]);
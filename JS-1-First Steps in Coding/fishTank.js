function fishTank(input) {
    let lDm = Number(input[0]) / 10;
    let wDm = Number(input[1]) / 10;
    let hDm = Number(input[2]) / 10;
    let percent = Number(input[3]) / 100;

    let waterL=lDm*wDm*hDm*(1-percent);



    console.log(waterL);

}
fishTank(
    ["85 ",
    "75 ",
    "47 ",
    "17 "]
);
fishTank(
    ["105 ",
    "77 ",
    "89 ",
    "18.5 "]
);
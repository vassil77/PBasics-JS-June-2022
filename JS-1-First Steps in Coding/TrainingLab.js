function TrainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let upperRows = Math.floor(((h - 1) / 2) / 0.7);
    let downRows = Math.floor((h - upperRows * 0.7 - 1) / 0.7);
    let columns = Math.floor(w / 1.2);

    let totalWorkplaces = columns * (upperRows + downRows) - 3;


    console.log(totalWorkplaces);

}
TrainingLab([
    15, 8.9
]);
TrainingLab([
    8.4, 5.2
]);
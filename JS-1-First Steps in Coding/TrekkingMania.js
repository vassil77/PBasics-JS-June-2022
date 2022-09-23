function TrekkingMania(input) {

    let numGroups = parseInt(input[0]);

    let totalClimbers = 0;
    for (i = 1; i <= numGroups; i++) {
        totalClimbers += parseInt(input[i]);
    }
    let musala = 0;
    let monblan = 0;
    let Kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (i = 1; i <= numGroups; i++) {
        if (parseInt(input[i]) <= 5) {
            musala += parseInt(input[i]);
        } else if (parseInt(input[i]) <= 12) {
            monblan += parseInt(input[i]);
        } else if (parseInt(input[i]) <= 25) {
            Kilimandjaro += parseInt(input[i]);
        } else if (parseInt(input[i]) <= 40) {
            k2 += parseInt(input[i]);
        } else if (parseInt(input[i]) >= 41) {
            everest += parseInt(input[i]);
        }
    }

    console.log(`${(musala/totalClimbers*100).toFixed(2)}%`);
    console.log(`${(monblan/totalClimbers*100).toFixed(2)}%`);
    console.log(`${(Kilimandjaro/totalClimbers*100).toFixed(2)}%`);
    console.log(`${(k2/totalClimbers*100).toFixed(2)}%`);
    console.log(`${(everest/totalClimbers*100).toFixed(2)}%`);

}

TrekkingMania(
    (["10",
        "10",
        "5",
        "1",
        "100",
        "12",
        "26",
        "17",
        "37",
        "40",
        "78"
    ])
);
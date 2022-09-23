function TrekkingMania(params) {
    let nGroups = params[0];

    let musala = 0;
    let monblan = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;
    let total=0;

    for (let i = 0; i < nGroups; i++) {
        let currentGroup = Number(params[i + 1]);
        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (6 <= currentGroup && currentGroup <= 12) {
            monblan += currentGroup;
        } else if (13 <= currentGroup && currentGroup <= 25) {
            kilim += currentGroup;
        } else if (26 <= currentGroup && currentGroup <= 40) {
            k2 += currentGroup;
        } else if (41 <= currentGroup) {
            everest += currentGroup;
        }
        total+=currentGroup;

    }

    console.log(`${(musala/total*100).toFixed(2)}%`);
    console.log(`${(monblan/total*100).toFixed(2)}%`);
    console.log(`${(kilim/total*100).toFixed(2)}%`);
    console.log(`${(k2/total*100).toFixed(2)}%`);
    console.log(`${(everest/total*100).toFixed(2)}%`);





}

TrekkingMania
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
    ]);


console.log(`-----------------`);




console.log(`-----------------`);



console.log(`-----------------`);
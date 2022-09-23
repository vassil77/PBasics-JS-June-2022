function Moving(params) {

    let w = Number(params[0]);
    let l = Number(params[1]);
    let h = Number(params[2]);

    let freeVolume = w * l * h;

    let index = 3;
    let currentBoxes = params[3];

    while (currentBoxes !== "Done" && index < params.length) {

        numberBoxes = Number(currentBoxes);
        freeVolume -= numberBoxes;
        index++;
        currentBoxes = params[index];


    }

    if (freeVolume > 0) {
        console.log(`${freeVolume} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${-freeVolume} Cubic meters more.`);
    }





}

Moving
    (["10",
        "1",
        "2",
        "4",
        "6",
        "Done"
    ]);



console.log(`-----------------`);
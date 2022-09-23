function MaxNumber(params) {

    let i = 0;
    let command = params[i++];

    let max = Number(command);

    while (command !== "Stop") {
        let currentNumber = Number(command);

        if (currentNumber >= max) {
            max = currentNumber;
        }

        command = params[i++];
    }

    console.log(max);




}

MaxNumber
    (["999",
        "Stop"
    ]);


console.log(`-----------------`);
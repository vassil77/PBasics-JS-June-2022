function MinNumber(params) {

    let i = 0;
    let command = params[i++];

    let min = Number(command);

    while (command !== "Stop") {
        let currentNumber=Number(command);
        if (currentNumber <= min) {
            min = command;
        }


        command = params[i++];


    }

    console.log(min);



}

MinNumber
(["-10",
"20",
"-30",
"Stop"]);


console.log(`-----------------`);
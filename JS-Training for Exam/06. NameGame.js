function NameGame(params) {
    let i = 0;
    let command = params[i++];

    let winner ="";
    let winPoints = 0;

    while (command !== "Stop") {
        let pointsPlayer = 0;
        for (let j = 0; j < command.length; j++) {
            let currentPoints = Number(params[i++]);
            if (command.charCodeAt(j) === currentPoints) {
                pointsPlayer += 10;
            } else {
                pointsPlayer += 2;
            }
        }

        if (pointsPlayer>=winPoints) {
            winner=command;
            winPoints=pointsPlayer;
        }
        command = params[i++];
    }

console.log(`The winner is ${winner} with ${winPoints} points!`);
}


NameGame


(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])



;


//console.log(`-----------------`);
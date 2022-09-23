function Cake(params) {
    let w = Number(params[0]);
    let l = Number(params[1]);

    let cakeNum = w * l;
    let takenPieces = 0;

    let command = params[2];
    let index = 3;

    while (command !== "STOP" && index <= params.length) {
        takenPieces += Number(command);

        command = params[index];
        index++;
    }

    let diff = Math.abs(cakeNum - takenPieces);



    if (takenPieces > cakeNum) {
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }else {
        console.log(`${diff} pieces are left.`);
    }
}

Cake
(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);




console.log(`-----------------`);
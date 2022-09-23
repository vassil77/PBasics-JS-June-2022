function AccountBalance(params) {

    let totalSum = 0;
    let command = params[0];
    let i = 1;

    while (command !== "NoMoreMoney") {
        if (Number(command) < 0) {
            console.log(`Invalid operation!`);
            break;
        } else {
            console.log(`Increase: ${Number(command).toFixed(2)}`);
            totalSum += Number(command);
        }

        command=params[i++];
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);





}

AccountBalance
(["120",
"45.55",
"-150"])
;



console.log(`-----------------`);
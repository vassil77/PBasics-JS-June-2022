function OperationsBetweenNumbers(params) {

    let N1 = Number(params[0]);
    let N2 = Number(params[1]);
    let operator = params[2];

    let result = 0;

    switch (operator) {
        case "+":
            result = N1 + N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
            }
            break;
        case "-":
            result = N1 - N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
            }
            break;

        case "*":
            result = N1 * N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
            }
            break;
        case "/":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {

                result = N1 / N2;
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
            }

            break;


        case "%":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {

            result = N1 % N2;
            console.log(`${N1} % ${N2} = ${result}`);
            }

            break;
    }



}


OperationsBetweenNumbers
    (["10",
        "0",
        "%"
    ]);
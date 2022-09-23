function Walking(params) {

    let steps = 0;
    let command = params[0];
    let i = 1;

    while (command !== "Going home" && i <= params.length) {
        steps += Number(command);

        command = params[i++];

    }

    if (command === "Going home") {
        steps += Number(params[i]);
    }

    let diff = Math.abs(steps - 10000);

    if (steps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
console.log(`${diff} more steps to reach goal.`);
    }





}

Walking
(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

;


console.log(`--------------------------------------------`);
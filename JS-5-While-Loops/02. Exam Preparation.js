function ExamPreparation(params) {

    let lowMarks = Number(params[0]);
    let command = params[1];
    let i = 2;

    let counterLowMarks = 0;
    let numMarks=0;
    let sumMarks=0;

    while (command !== "Enough" && i <= params.length) {
        let currentMark=Number(params[i]);
        sumMarks+=currentMark;
        numMarks++;

        if (currentMark<=4) {
            counterLowMarks++;
        }

        if (counterLowMarks===lowMarks) {
            console.log(`You need a break, ${lowMarks} poor grades.`);
            break;
        }

        command=params[i+1];
        i+=2;


    }

    let avg=sumMarks/numMarks;
    let lastTask=params[i-3];
    if (command === "Enough") {
        console.log(`Average score: ${avg.toFixed(2)}`);
console.log(`Number of problems: ${numMarks}`);
console.log(`Last problem: ${lastTask}`);

    }



}

ExamPreparation
(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);

console.log(`-----------------`);


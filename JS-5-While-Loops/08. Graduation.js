function Graduation(params) {

    i = 0;
    let name = params[i++];

    let sum = 0;
    let gradeCounter = 0;
    let badGradeCounter = 0;


    while (i < params.length) {
        let currentGrade = Number(params[i]);
        sum += currentGrade;
        if (currentGrade < 4) {
            badGradeCounter++;
        }
        if (badGradeCounter === 2) {
            console.log(`${name} has been excluded at ${gradeCounter} grade`);
            break;
        }
        gradeCounter++;

        i++;
    }

    let avg=sum/gradeCounter;
    if (badGradeCounter < 2) {
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }




}

Graduation
(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);



//console.log(`-----------------`);
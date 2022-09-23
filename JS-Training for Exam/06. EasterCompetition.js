function EasterCompetition(params) {

    let i = 0;
    let cakeNum = Number(params[i++]);
    
    let maxGrade=0;
    let winner="";
    
    for (let j = 1; j <= cakeNum; j++) {
        
        let baker = params[i++];
        let command = params[i++];
        
        let sumGrade=0;

        while (command !== "Stop") {
            let currentGrade=Number(command);
            sumGrade+=currentGrade;
            command = params[i++];
        }

        if (sumGrade>maxGrade) {
            maxGrade=sumGrade;
            winner=baker;
        }

        console.log(`${baker} has ${sumGrade} points.`);

        if (winner===baker) {
            console.log(`${baker} is the new number 1!`);
        }

        


    }

    console.log(`${winner} won competition with ${maxGrade} points!`);



}

EasterCompetition

(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])


;



//console.log(`-----------------`);
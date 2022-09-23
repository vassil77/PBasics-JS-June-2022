function ReadText(params) {
    
    let command=params[0];
    let i=1;


    while (command!=="Stop") {
        console.log(command);

        command=params[i++];
    }




}

ReadText
(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
;


console.log(`-----------------`);





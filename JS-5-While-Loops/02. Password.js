function Password(params) {
    
    let name=params[0];
    let pass=params[1];

    let command=params[2];
    let i=3;

    while (command!==pass) {
        
        command=params[i++];
       
    }

    if (command===pass) {
        console.log(`Welcome ${name}!`);
    }


}
Password
(["Gosho",
"secret",
"secret"])
;


console.log(`-----------------`);





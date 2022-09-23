function ChangeBureau(input) {

    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let commision = Number(input[2]);

    
    
    let result=(bitcoin*1168+yuan*0.15*1.76)/1.95*(1-commision/100);




    console.log(result.toFixed(2));

}

ChangeBureau(["1",
"5",
"5"]);
ChangeBureau(["20",
"5678",
"2.4"]);
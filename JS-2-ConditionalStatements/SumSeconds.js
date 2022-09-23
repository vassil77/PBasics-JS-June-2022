function SumSeconds(params) {

    let t1 = Number(params[0]);
    let t2 = Number(params[1]);
    let t3 = Number(params[2]);

    let totalTime = t1 + t2 + t3;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime - minutes * 60;

    if (seconds<=9) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);

    }


}

SumSeconds
    (["35",
        "45",
        "44"
    ]);
    SumSeconds
    (["22", "7", 
    "34"])
;
  SumSeconds
  (["50",
"50",
"49"])
;
SumSeconds
(["14", "12",
"10"]);


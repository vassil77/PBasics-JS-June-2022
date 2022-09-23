function WorldSwimmingRecord(params) {

    let record = Number(params[0]);
    let distance = Number(params[1]);
    let secFor1m=Number(params[2]);

    let time=secFor1m*distance;
    let delay=Math.floor(distance/15)*12.5;
    time+=delay;
    
    if (time<record) {
        console.log(` Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time-record).toFixed(2)} seconds slower.`);
  
    }

}

WorldSwimmingRecord
    (["10464",
        "1500",
        "20"
    ]);
WorldSwimmingRecord
(["55555.67",
"3017",
"5.03"])
;
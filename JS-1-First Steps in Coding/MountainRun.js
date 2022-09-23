function MountainRun(input) {

    let recordSec = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeFor1m = Number(input[2]);

    let timesDelay = Math.floor(distanceMeters / 50);
    let timeGeorge=distanceMeters*timeFor1m+timesDelay*30;

    if(timeGeorge<recordSec){
        timeGeorge=timeGeorge.toFixed(2);
        console.log(` Yes! The new record is ${timeGeorge} seconds.`);
    }else{
       let diffrence=(timeGeorge-recordSec).toFixed(2);
        console.log(`No! He was ${diffrence} seconds slower.`);
  
    }
}


MountainRun
    (["10164",
        "1400",
        "25"
    ]);
MountainRun
    (["5554.36",
        "1340",
        "3.23"
    ]);
MountainRun
    (["1377",
        "389",
        "3"
    ]);
function SpeedInfo(params) {

    let speed = Number(params);

    if (speed <= 10) {
        console.log(`slow`);
    } else if (speed > 10 && speed <= 50) {
        console.log(`average`);
    } else if (speed > 50 && speed <= 150) {
        console.log(`fast`);
    } else if (speed > 150 && speed <= 1000) {
        console.log(`ultra fast`);
    } else {
        console.log(`extremely fast`);
    }



}

SpeedInfo
    (["8"]);

SpeedInfo
    (["49.5"]);

SpeedInfo
    (["126"]);
SpeedInfo
    (["160"]);
SpeedInfo
    (["3500"]);
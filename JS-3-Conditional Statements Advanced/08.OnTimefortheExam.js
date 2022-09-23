function OnTimefortheExam(params) {
    let examHour = Number(params[0]);
    let minuteExam = Number(params[1]);
    let arriveHour = Number(params[2]);
    let minuteArrive = Number(params[3]);

    let timeExam = examHour * 60 + minuteExam;
    let timeArrive = arriveHour * 60 + minuteArrive;

    let diffTime = timeExam - timeArrive;

    if (diffTime < 0) {
        console.log(`Late`);
    } else if (0 <= diffTime && diffTime <= 30) {
        console.log(`On time`);
    } else {
        console.log(`Early`);
    }

    if (1 <= diffTime && diffTime < 60) {
        console.log(`${diffTime} minutes before the start`);
    } else if (60 <= diffTime) {
        if (diffTime % 60 > 9) {
            console.log(`${Math.floor(diffTime/60)}:${diffTime%60} hours before the start`);
        } else {
            console.log(`${Math.floor(diffTime/60)}:0${diffTime%60} hours before the start`);
        }
    }

    if (-1 >= diffTime && diffTime > -60) {
        console.log(`${-diffTime} minutes after the start`);
    } else if (-60 >= diffTime) {
        if ((-diffTime) % 60 > 9) {
            console.log(`${Math.floor(-diffTime/60)}:${-diffTime%60} hours after the start`);
        } else {
            console.log(`${Math.floor(-diffTime/60)}:0${-diffTime%60} hours after the start`);
        }
    }


}

OnTimefortheExam
    (["16",
        "00",
        "15",
        "00"
    ]);
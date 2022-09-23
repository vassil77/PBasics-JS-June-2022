function TournamentChristmas(input) {

    let days = Number(input[0]);

    let totalRaisedMoney = 0;
    let totalWinBallance=0;
    let imax = -2;

    for (j = 1; j <= days; j++) {
        i = imax+3;
        dailyMoney = 0;
        winsDailyBallance = 0;
        while (input[i] !== "Finish") {
            if (input[i + 1] === "win") {
                dailyMoney += 20;
                winsDailyBallance += 1;
            } else {
                winsDailyBallance -= 1;
            }

            imax = i;
            i += 2;
        }
        if (winsDailyBallance > 0) {
            dailyMoney = 1.1 * dailyMoney;
            totalWinBallance+=1;
        }else{
            totalWinBallance-=1;
        }

        totalRaisedMoney += dailyMoney;



    }
    if(totalWinBallance>0){
        totalRaisedMoney=(1.2*totalRaisedMoney).toFixed(2);
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    }

}
TournamentChristmas 
(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);

    TournamentChristmas
    (["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"]);
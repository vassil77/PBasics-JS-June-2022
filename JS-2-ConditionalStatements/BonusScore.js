function BonusScore(params) {

    let points = Number(params);

    let bonusPoints = 0;

    if (points <= 100) {
        bonusPoints = 5;
    } else if (points > 100 && points < 1000) {
        bonusPoints = 0.2 * points;
    } else {
        bonusPoints = 0.1 * points;
    }

    if (points % 2 === 0) {
        bonusPoints += 1;
    }

    if ((points / 5) % 2 === 1) {
        bonusPoints += 2;
    }

    let totalPoints = points + bonusPoints;

    console.log(bonusPoints);
    console.log(totalPoints);





}

BonusScore
    (["20"]);
BonusScore
(["175"])
;
BonusScore
(["2703"])
;

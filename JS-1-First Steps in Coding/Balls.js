function Balls(input) {

    let N = parseInt(input[0]);

    let totalPoints = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let other = 0;
    let black = 0;

    for (i = 1; i <= N; i++) {
        let currentBall = input[i];
        if (currentBall === "red") {
            totalPoints += 5;
            red += 1;
        } else if (currentBall === "orange") {
            totalPoints += 10;
            orange += 1;
        } else if (currentBall === "yellow") {
            totalPoints += 15;
            yellow += 1;
        } else if (currentBall === "white") {
            totalPoints += 20;
            white += 1;
        } else if (currentBall === "black") {
            totalPoints = Math.floor(0.5 * totalPoints);
            black += 1;
        } else {
            other += 1;
        }

    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);

}
Balls
    (["3",
    "white",
    "black",
    "pink"]);

Balls
(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
;
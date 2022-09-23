function Coins(params) {
    let rest = 100 * Number(params[0]);

    let coins = 0;
    const table = [200, 100, 50, 20, 10, 5, 2, 1];

    for (let i = 0; i < 8; i++) {
        let currentCoins = Math.floor(rest / table[i]);
        rest -= currentCoins * table[i];
        coins += currentCoins;
    }

    console.log(coins);



}

Coins
    (["2.76"]);



console.log(`-----------------`);
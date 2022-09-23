function GiftsfromSanta(params) {

    let N = Number(params[0]);
    let M = Number(params[1]);
    let S = Number(params[2]);

    let i = M;
    let result = "";

    while (i >= N) {
        if (((i % 2) === 0) && ((i % 3) === 0)) {
            if (i === S) {
                break;
            }
            result += `${i} `;

        }

        i--;
    }



    console.log(result);
}

GiftsfromSanta

    (["20",
        "1000",
        "36"
    ])




;



//console.log(`-----------------`);
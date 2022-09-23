function MovieTickets(params) {

    let a1 = parseInt(params[0]);
    let a2 = parseInt(params[1]);
    let n = parseInt(params[2]);

    const s4 = [];
    let i = 0;
    let a = a1;
    while (a <= (a2 - 1)) {
        if (a % 2 === 1) {
            s4[i] = a;
            a += 2;
        } else {
            a++;
        }
        i++;
    }

    for (let j = 0; j <= i; j++) {
        for (let s2 = 1; s2 < n; s2++) {
            for (let s3 = 1; s3 < Math.floor(n / 2); s3++) {
                if ((s2 + s3 + s4[j]) % 2 === 1) {
                    let s1 = String.fromCharCode(s4[j]);
                    console.log(`${s1}-${s2}${s3}${s4[j]}`);
                }
            }
        }
    }
}


MovieTickets
    (["76",
        "78",
        "7"
    ]);
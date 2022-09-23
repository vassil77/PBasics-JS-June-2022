function Histogram(params) {
    let n = Number(params[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < n; i++) {
        if (Number(params[i + 1]) < 200) {
            p1++;
        } else if (200 <= Number(params[i + 1]) && Number(params[i + 1]) <= 399) {
            p2++;
        } else if (400 <= Number(params[i + 1]) && Number(params[i + 1]) <= 599) {
            p3++;
        } else if (600 <= Number(params[i + 1]) && Number(params[i + 1]) <= 799) {
            p4++;
        } else if (800 <= Number(params[i + 1])) {
            p5++;
        }

    }

    console.log(`${(p1/n*100).toFixed(2)}%`);
    console.log(`${(p2/n*100).toFixed(2)}%`);
    console.log(`${(p3/n*100).toFixed(2)}%`);
    console.log(`${(p4/n*100).toFixed(2)}%`);
    console.log(`${(p5/n*100).toFixed(2)}%`);






}

Histogram
    (["9",
        "367",
        "99",
        "200",
        "799",
        "999",
        "333",
        "555",
        "111",
        "9"
    ]);


console.log(`-----------------`);
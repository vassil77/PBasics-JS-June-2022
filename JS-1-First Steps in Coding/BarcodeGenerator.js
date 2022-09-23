function BarcodeGenerator(input) {
    let startNumber = input[0];
    let endNumber = input[1];

    let startFig1000 = parseInt(startNumber.charAt(0));
    startFig1000 += ((startFig1000 + 1) % 2);
    let endFig1000 = parseInt(endNumber.charAt(0));
    endFig1000 -= ((endFig1000 + 1) % 2);
    let iend1000 = (endFig1000 - startFig1000) / 2;

    let startFig100 = parseInt(startNumber.charAt(1));
    startFig100 += ((startFig100 + 1) % 2);
    let endFig100 = parseInt(endNumber.charAt(1));
    endFig100 -= ((endFig100 + 1) % 2);
    let iend100 = (endFig100 - startFig100) / 2;


    let startFig10 = parseInt(startNumber.charAt(2));
    startFig10 += ((startFig10 + 1) % 2);
    let endFig10 = parseInt(endNumber.charAt(2));
    endFig10 -= ((endFig10 + 1) % 2);
    let iend10 = (endFig10 - startFig10) / 2;

    let startFig1 = parseInt(startNumber.charAt(3));
    startFig1 += ((startFig1 + 1) % 2);
    let endFig1 = parseInt(endNumber.charAt(3));
    endFig1 -= ((endFig1 + 1) % 2);
    let iend1 = (endFig1 - startFig1) / 2;

    let out = "";

    for (i = 0; i <= iend1000; i++) {
        for (j = 0; j <= iend100; j++) {
            for (k = 0; k <= iend10; k++) {
                for (l = 0; l <= iend1; l++) {
                    out += `${startFig1000+i*2}${startFig100+j*2}${startFig10+k*2}${startFig1 + l*2} `;
                }
            }
        }
    }
    out =out.trim();

    console.log(`${out}`);



}
BarcodeGenerator
    (["2345",
        "6789"
    ]);
BarcodeGenerator
    (["3256",
        "6579"
    ]);
BarcodeGenerator
    (["1365",
        "5877"
    ]);
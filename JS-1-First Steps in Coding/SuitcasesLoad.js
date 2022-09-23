function SuitcasesLoad(input) {

    let capacity = Number(input[0]);

    let leftSpace = capacity;
    let i = 1;
    let extraLossCoeff = 1;
    while (input[i] != "End" && extraLossCoeff * input[i] < leftSpace) {
        if (i % 3 == 0) {
            leftSpace -= (1.1 * input[i]);
        } else {
            leftSpace -= input[i];
        }

        i += 1;
        extraLossCoeff = 1.1 - (Math.ceil((i % 3) / 10)) / 10;

    }

    if (input[i] == "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }

    console.log(`Statistic: ${i-1} suitcases loaded.`);
}


SuitcasesLoad
    (["550",
        "100",
        "252",
        "72",
        "End"
    ]);
SuitcasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"
]);
SuitcasesLoad(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"
]);
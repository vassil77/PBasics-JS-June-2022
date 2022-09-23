function CarePuppy(input) {

    let boughtKg = Number(input[0]);

    let eatenGrams = 0;
    i = 1;
    while (input[i] != "Adopted") {
        eatenGrams += Number(input[i]);
        i += 1;
    }

    if (boughtKg * 1000 >= eatenGrams) {
        console.log(`Food is enough! Leftovers: ${boughtKg*1000-eatenGrams} grams.`);
    } else {
        console.log(`Food is not enough. You need ${eatenGrams-boughtKg*1000} grams more.`);

    }
}

CarePuppy(
    (["4",
        "130",
        "345",
        "400",
        "180",
        "230",
        "120",
        "Adopted"
    ])
);
CarePuppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"
]);
CarePuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
]);
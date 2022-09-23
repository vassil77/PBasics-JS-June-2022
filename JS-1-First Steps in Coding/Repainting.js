function repainting(input) {
    let nylonM2 = Number(input[0]);
    let paintL = Number(input[1]);
    let diluentL = Number(input[2]);
    let hoursWork = Number(input[3]);

    let sumMaterials = (nylonM2 + 2) * 1.5 + paintL * 14.5 * 1.1 + diluentL * 5 + 0.40;
    let sumWork = sumMaterials * 0.3 * hoursWork;
    let totalCosts = sumMaterials + sumWork;



    console.log(totalCosts);

}



repainting(
    ["10 ",
        "11 ",
        "4 ",
        "8 "
    ]
);
repainting(
    ["5 ",
    "10 ",
    "10 ",
    "1 "]
);
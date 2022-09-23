function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discountPercent = Number(input[3]);

    let money=(pens*5.8+markers*7.2+detergent*1.2)*(1-discountPercent/100);
    console.log(money);

}



suppliesForSchool(
    ["2 ",
    "3 ",
    "4 ",
    "25 "]
);
suppliesForSchool(
    ["4 ",
    "2 ",
    "5 ",
    "13 "]
);


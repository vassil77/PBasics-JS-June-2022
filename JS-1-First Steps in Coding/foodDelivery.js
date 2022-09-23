function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let veges = Number(input[2]);

    let bill=(chicken*10.35+fish*12.4+veges*8.15)*1.2+2.5;
    
    console.log(bill);

}
foodDelivery(
    ["2 ",
    "4 ",
    "3 "]
);
foodDelivery(
    ["9 ",
    "2 ",
    "6 "]
);
function greeninng(input) {
    let meters2=input[0];
    let price=meters2*7.61;
    let discount=0.18*price;
    let finalPrice=price-discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);



}

greeninng(["550"]);
greeninng(["150"]);

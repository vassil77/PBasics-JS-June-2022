function HousePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let greenL=(2*x*x-1.2*2+2*(x*y-1.5*1.5))/3.4;
    let redL=(2*x*y+2*x*h/2)/4.3;

    console.log(greenL.toFixed(2));
    console.log(redL.toFixed(2));

}
HousePainting([
    6,
    10,
    5.2
]);
HousePainting([
    10.25,
    15.45,
    8.88
]);
function Fishland(input) {
    let skumriaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);

    let palamudPrice = 1.6 * skumriaPrice;
    let safridPrice = 1.8 * cacaPrice;

    let bill = palamudPrice * kgPalamud + safridPrice * kgSafrid + 7.5 * kgMidi;


    console.log(bill.toFixed(2));

}
Fishland([
    6.90,
    4.20,
    1.5,
    2.5,
    1
]);
Fishland([
    5.55,
    3.57,
    4.3,
    3.6,
    7
]);
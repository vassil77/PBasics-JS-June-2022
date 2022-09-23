function FilmPremiere(params) {

    let movie = params[0];
    let set = params[1];
    let ticketNum = Number(params[2]);

    const movieSet = ["John Wick", "Star Wars", "Jumanji"];
    let colIndex = movieSet.indexOf(movie);

    const drink = [12, 18, 9];
    const popcorn = [15, 25, 11];
    const menu = [19, 30, 14];

    let unitPrice = 0;
    if (set === "Drink") {
        unitPrice = drink[colIndex];
    } else if (set === "Popcorn") {
        unitPrice = popcorn[colIndex];
    } else if (set === "Menu") {
        unitPrice = menu[colIndex];
    }

    let bill = ticketNum * unitPrice;

    if (movie === "Star Wars" && ticketNum >= 4) {
        bill -= 0.30 * bill;
    }

    if (movie === "Jumanji" && ticketNum === 2) {
        bill -= 0.15 * bill;
    }

    console.log(`Your bill is ${bill.toFixed(2)} leva.`);




}


FilmPremiere
    (["John Wick",
        "Drink",
        "6"
    ]);
    FilmPremiere
    (["Star Wars",
"Popcorn",
"4"]);
FilmPremiere
(["Jumanji",
"Menu",
"2"]);
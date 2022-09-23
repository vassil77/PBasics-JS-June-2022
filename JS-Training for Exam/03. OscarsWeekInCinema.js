function OscarsWeekInCinema(params) {

    let movie = params[0];
    let type = params[1];
    let tickets = Number(params[2]);


    let i = 0;
    let j = 0;

    const matrix = [
        [7.50, 10.50, 13.50],
        [7.35, 9.45, 12.75],
        [8.15, 10.25, 13.25],
        [8.75, 11.55, 13.95]
    ];

    switch (movie) {
        case "A Star Is Born":
            i = 0;
            break;
        case "Bohemian Rhapsody":
            i = 1;
            break;
        case "Green Book":
            i = 2;
            break;
        case "The Favourite":
            i = 3;
            break;
    }

    switch (type) {
        case "normal":
            j = 0;
            break;
        case "luxury":
            j = 1;
            break;
        case "ultra luxury":
            j = 2;
            break;
    }

    let unitPrice = matrix[i][j];

    let income = unitPrice * tickets;

    console.log(`${movie} -> ${income.toFixed(2)} lv.`);
}

OscarsWeekInCinema

    (["Green Book",
        "normal",
        "63"
    ])


;



//console.log(`-----------------`);
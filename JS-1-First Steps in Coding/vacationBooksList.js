function vacationBooksList(input) {
    let bookPages = Number(input[0]);
    let hourPages = Number(input[1]);
    let days = Number(input[2]);

    let dailyHours=bookPages/hourPages/days;

    console.log(dailyHours);

}


vacationBooksList(
    ["212 ",
    "20 ",
    "2 "]
);
vacationBooksList(
    ["432 ",
    "15 ",
    "4 "]
);


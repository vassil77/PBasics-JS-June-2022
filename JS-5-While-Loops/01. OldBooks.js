function OldBooks(params) {

    let bookAni = params[0];
    let currentBook = params[1];
    let i = 2;
    let numBooks = 0;

    while (currentBook !== "No More Books" && currentBook !== bookAni && i <= params.length) {
        numBooks++;

        currentBook = params[i++];
    }


    if (currentBook !== bookAni) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${numBooks} books.`);
    } else {
        console.log(`You checked ${numBooks} books and found it.`);
    }





}

OldBooks
(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
;


console.log(`-----------------`);
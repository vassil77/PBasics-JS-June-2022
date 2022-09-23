function CinemaTickets(params) {

    let i = 0;
    let movie = params[i++];
    let total = 0;
    let student = 0;
    let standard = 0;
    let kid = 0;


    while (movie !== "Finish") {
        let capacity = Number(params[i++]);
        let seatsTaken = 0;
        let type = params[i++];


        while (type !== "End" && seatsTaken <= capacity) {
            seatsTaken++;
            total++;
            switch (type) {
                case "student":
                    student++;
                    break;
                case "standard":
                    standard++;
                    break;
                case "kid":
                    kid++;
                    break;
            }

            if (seatsTaken === capacity) {
                break;
            }


            type = params[i++];
        }

        console.log(`${movie} - ${(seatsTaken/capacity*100).toFixed(2)}% full.`);



        movie = params[i++];
    }

    console.log(`Total tickets: ${total}`);
    console.log(`${(student/total*100).toFixed(2)}% student tickets.`);
    console.log(`${(standard/total*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid/total*100).toFixed(2)}% kids tickets.`);


}

CinemaTickets

    (["The Matrix",
        "20",
        "student",
        "standard",
        "kid",
        "kid",
        "student",
        "student",
        "standard",
        "student",
        "End",
        "The Green Mile",
        "17",
        "student",
        "standard",
        "standard",
        "student",
        "standard",
        "student",
        "End",
        "Amadeus",
        "3",
        "standard",
        "standard",
        "standard",
        "Finish"
    ])




;



//console.log(`-----------------`);
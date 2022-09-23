function MovieRatings(params) {

    let n = Number(params[0]);

    let movieMax = params[1];
    let movieMin = params[1];
    let maxRating = Number(params[2]);
    let minRating = maxRating;
    let totalRating = 0;


    for (let i = 1; i <= 2 * n; i += 2) {
        let currentMovie = params[i];
        let currentRating = Number(params[i + 1]);
        totalRating += currentRating;

        if (currentRating > maxRating) {
            maxRating = currentRating;
            movieMax = currentMovie;
        }

        if (currentRating < minRating) {
            minRating = currentRating;
            movieMin = currentMovie;
        }
    }
    let avgRating = totalRating / n;

    console.log(`${movieMax} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${movieMin} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);


}

MovieRatings

    (["3",
        "Interstellar",
        "8.5",
        "Dangal",
        "8.3",
        "Green Book",
        "8.2"
    ])



;



//console.log(`-----------------`);
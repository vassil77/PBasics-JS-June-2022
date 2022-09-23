function FavoriteMovie(params) {
    let lengthI = 0;
    const ASCII = [];
    let i = 0;
    while (params[i] !== "STOP" && i <= 6) {
        lengthI = params[i].length;
        ASCII[i] = 0;
        let capitalLetters = 0;
        let smallLetters = 0;
        for (j = 0; j < lengthI; j++) {

            ASCII[i] += params[i].charCodeAt(j);

            letterJ = params[i].charAt(j);
            if (letterJ !== " ") {
                if (Number(letterJ) != letterJ) {
                    if (letterJ.toUpperCase() === letterJ) {
                        capitalLetters += 1;
                    } else {
                        smallLetters += 1;
                    }
                }
            }

        }
        ASCII[i] = ASCII[i] - smallLetters * 2 * lengthI - capitalLetters * lengthI;
        i++;
    }

    if (i >= 7) {
        console.log(`The limit is reached.`);
    }

    let maxASCII = ASCII[0];
    let kMax = 0;
    for (k = 1; k < i; k++) {
        if (ASCII[k] >= maxASCII) {
            maxASCII = ASCII[k];
            kMax = k;
        }

    }


    console.log(`The best movie for you is ${params[kMax]} with ${maxASCII} ASCII sum.`);

}



FavoriteMovie(["The maze",
    "School story 2",
    "Shrek 2",
    "Ice age",
    "STOP"
]);
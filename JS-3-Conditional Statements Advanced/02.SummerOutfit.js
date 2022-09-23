function SummerOutfit(params) {

    let temp = Number(params[0]);
    let time = params[1];

    if (10 <= temp && temp <= 18) {
        switch (time) {
            case "Morning":
                console.log(`It's ${temp} degrees, get your Sweatshirt and Sneakers.`);
                break;
            case "Afternoon":
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);

                break;
            case "Evening":
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);

                break;


        }

    } else if (18 < temp && temp <= 24) {
        switch (time) {
            case "Morning":
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
                break;
            case "Afternoon":
                console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);

                break;
            case "Evening":
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);

                break;
        }

    } else {
        switch (time) {
            case "Morning":
                console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
                break;
            case "Afternoon":
                console.log(`It's ${temp} degrees, get your Swim Suit and Barefoot.`);

                break;
            case "Evening":
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);

                break;
        }

    }


}

SummerOutfit
    (["16",
        "Morning"
    ]);
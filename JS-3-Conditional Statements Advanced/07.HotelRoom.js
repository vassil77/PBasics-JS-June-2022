function HotelRoom(params) {

    let month = params[0];
    let nights = Number(params[1]);

  

    switch (month) {
        case "May":
        case "October":
            priceStudio = 50*nights;
            priceApart = 65*nights;

            if (nights > 14) {
                priceStudio *= (1 - 0.30);
            } else if (nights > 7) {
                priceStudio *= (1 - 0.05);
            }
            break;
        case "June":
        case "September":
            priceStudio = 75.20*nights;
            priceApart = 68.70*nights;

            if (nights > 14) {
                priceStudio *= (1 - 0.20);
            }
            break;

        case "July":
        case "August":
            priceStudio = 76*nights;
            priceApart = 77*nights;

            break;
    }

    if (nights > 14) {
        priceApart *= (1 - 0.10);
    }

    console.log(`Apartment: ${priceApart.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}


HotelRoom
    (["May", "1"
    ]);
  

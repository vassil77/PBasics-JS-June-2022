function FootballSouvenirs(params) {

    let team = params[0];
    let type = params[1];
    let numSouvenirs = Number(params[2]);

    let unitPrice = 0;
    let isFound=true;

    switch (team) {
        case "Argentina":
            switch (type) {
                case "flags": unitPrice=3.25; break;
                case "caps": unitPrice=7.20; break;
                case "posters": unitPrice=5.10; break;
                case "stickers": unitPrice=1.25; break;

                default:
                    console.log(`Invalid stock!`);
                    isFound=false;
                    break;
            }
            break;

            case "Brazil":
                switch (type) {
                    case "flags": unitPrice=4.20; break;
                    case "caps": unitPrice=8.50; break;
                    case "posters": unitPrice=5.35; break;
                    case "stickers": unitPrice=1.20; break;
    
                    default:
                        console.log(`Invalid stock!`);
                        isFound=false;

                        break;
                }
                break;

                case "Croatia":
                switch (type) {
                    case "flags": unitPrice=2.75; break;
                    case "caps": unitPrice=6.90; break;
                    case "posters": unitPrice=4.95; break;
                    case "stickers": unitPrice=1.10; break;
    
                    default:
                        console.log(`Invalid stock!`);
                        isFound=false;

                        break;
                }
                break;

                case "Denmark":
                    switch (type) {
                        case "flags": unitPrice=3.10; break;
                        case "caps": unitPrice=6.50; break;
                        case "posters": unitPrice=4.80; break;
                        case "stickers": unitPrice=0.90; break;
        
                        default:
                            console.log(`Invalid stock!`);
                            isFound=false;

                            break;
                    }
                    break;




        default:
            console.log(`Invalid country!`);
            isFound=false;

            break;
    }


    if (isFound) {

        let totalSum=unitPrice*numSouvenirs;
        console.log(`Pepi bought ${numSouvenirs} ${type} of ${team} for ${totalSum.toFixed(2)} lv.`);
    }



}

FootballSouvenirs


(["USA",
"caps",
"18"])


;




//console.log(`-----------------`);
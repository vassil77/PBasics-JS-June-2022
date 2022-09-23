function TradeCommissions(params) {

    let city = params[0];
    let sales = Number(params[1]);

    let error = sales < 0;
    let level0 = 0 <= sales && sales <= 500;
    let level500 = 500 < sales && sales <= 1000;
    let level1000 = 1000 < sales && sales <= 10000;
    let level10000 = 10000 < sales;

    switch (city) {
        case "Sofia":
            switch (error) {
                case true:
                    console.log(`error`);
                    break;
            }

            switch (level0) {
                case true:
                    console.log((0.05 * sales).toFixed(2));
                    break;
            }

            switch (level500) {
                case true:
                    console.log((0.07 * sales).toFixed(2));
                    break;
            }

            switch (level1000) {
                case true:
                    console.log((0.08 * sales).toFixed(2));
                    break;
            }

            switch (level10000) {
                case true:
                    console.log((0.12 * sales).toFixed(2));
                    break;
            }
            break;
        case "Varna":
            switch (error) {
                case true:
                    console.log(`error`);
                    break;
            }

            switch (level0) {
                case true:
                    console.log((0.045 * sales).toFixed(2));
                    break;
            }

            switch (level500) {
                case true:
                    console.log((0.075 * sales).toFixed(2));
                    break;
            }

            switch (level1000) {
                case true:
                    console.log((0.10 * sales).toFixed(2));
                    break;
            }

            switch (level10000) {
                case true:
                    console.log((0.13 * sales).toFixed(2));
                    break;
            }
            break;
        case "Plovdiv":
            switch (error) {
                case true:
                    console.log(`error`);
                    break;
            }

            switch (level0) {
                case true:
                    console.log((0.055 * sales).toFixed(2));
                    break;
            }

            switch (level500) {
                case true:
                    console.log((0.08 * sales).toFixed(2));
                    break;
            }

            switch (level1000) {
                case true:
                    console.log((0.12 * sales).toFixed(2));
                    break;
            }

            switch (level10000) {
                case true:
                    console.log((0.145 * sales).toFixed(2));
                    break;
            }
            break;

        default:
            console.log(`error`);
            break;
    }
}

TradeCommissions
    (["Sofia",
        "1500"
    ]);
function EasterEggs(params) {

    let eggs = Number(params[0]);

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let max = 0;
    let maxColor = "";

    for (let i = 1; i <= eggs; i++) {
        let color = params[i];
        switch (color) {
            case "red":
                red++;
                if (red > max) {
                    max = red;
                    maxColor = color;
                }
                break;
            case "orange":
                orange++;
                if (orange > max) {
                    max = orange;
                    maxColor = color;

                }
                break;
            case "blue":
                blue++;
                if (blue > max) {
                    max = blue;
                    maxColor = color;

                }
                break;
            case "green":
                green++;
                if (green > max) {
                    max = green;
                    maxColor = color;

                }
                break;


        }

    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${max} -> ${maxColor}`);

}

EasterEggs

(["4",
"blue",
"red",
"blue",
"orange"]) 



;




//console.log(`-----------------`);
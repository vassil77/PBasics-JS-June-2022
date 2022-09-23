function AreaofFigures(params) {
    let figure = params[0];

    if (figure === "square") {
        let a = parseFloat(params[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let a = parseFloat(params[1]);
        let b = parseFloat(params[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let r = parseFloat(params[1]);
        let area = Math.PI * r * r;
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        let a = parseFloat(params[1]);
        let ha = parseFloat(params[2]);
        let area = a * ha / 2;
        console.log(area.toFixed(3));
    }


}




AreaofFigures
    (["square", "5"]);
    AreaofFigures
    (["rectangle",
"7",
"2.5"]);
AreaofFigures
(["circle",
"6"]);
AreaofFigures
(["triangle",
"4.5",
"20"]);

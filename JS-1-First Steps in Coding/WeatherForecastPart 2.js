function WeatherForecastPart2(input) {
    let deg = Number(input[0]);

    if (deg >= 26 && deg <= 35) {
        console.log("Hot");

    } else if (deg >= 20.1 && deg <= 25.9) {
        console.log("Warm");

    } else if (deg >= 15 && deg <= 20) {
        console.log("Mild");
    } else if (deg >= 12 && deg <= 14.9) {
        console.log("Cool");
    } else if (deg >= 5 && deg <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }


}
WeatherForecastPart2([
    16.5
]);
WeatherForecastPart2([
    8
]);
WeatherForecastPart2([
    22.4
]);
WeatherForecastPart2([
    26
]);
WeatherForecastPart2([
    0
]);
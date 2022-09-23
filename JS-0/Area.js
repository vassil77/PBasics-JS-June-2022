function calculateCircleAreaAndPerimeter([arg1]) {
    let r = parseInt(arg1); 
    console.log("Area = " + (Math.PI * r * r).toFixed(4)); 
    console.log("Perimeter = " + (2 * Math.PI * r).toFixed(4)); 
}
calculateCircleAreaAndPerimeter([5])
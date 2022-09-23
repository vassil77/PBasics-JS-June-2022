function calculateCircleAreaAndPerimeter([arg1]) {
    let r = parseFloat(arg1); 
    console.log((Math.PI * r * r).toFixed(4)); 
    console.log((2 * Math.PI * r).toFixed(4)); 
}

calculateCircleAreaAndPerimeter([5])
var calculator = require("./calculator.js"),
    colors = require("colors");

function displayResult(result){
    if (result < 0)
        console.log(result.toString().red);
    else
        console.log(result.toString().green);
}
displayResult(calculator.add(100,200));
displayResult(calculator.subtract(100,200));
displayResult(calculator.multiply(100,200));
displayResult(calculator.divide(100,200));

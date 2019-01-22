// forecast temprature is 293 Kelvin;
const kelvin = 0;
const celsius = kelvin - 273; // convert Kelvin to Celsius by subtracting 273;
let fahrenheit = celsius * (9/5) + 32; //convert Celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit); // round the fahrehheit;
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
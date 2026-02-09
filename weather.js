//You are analyzing daily temperatures recorded by a weather app.
//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];


// filter() temperatures above 35
const hotDays = temperatures.filter(temp => temp > 35);
console.log("Hot days (above 35):", hotDays);   
// map() to convert all temperatures from Celsius → Fahrenheit
const toFahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", toFahrenheit);       
// reduce() to calculate average temperature
const totalTemp = temperatures.reduce((acc, temp) => acc + temp, 0);
const avgTemp = totalTemp / temperatures.length;
console.log("Average temperature:", avgTemp);   
//findIndex() of temperature 28
const index28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of temperature 28:", index28);
   

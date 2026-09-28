/*
Name: Juan Garcia
Date: September 26, 2026

Program Description:
This program converts between metric and imperial units for
weight, distance, and temperature. It uses a higher-order JavaScript function to create conversion functions. Users can convert single value or a whole array of values.

Inputs:
A value or array of values and the units to convert from and to.

Processing:
The appropriate mathematical conversion formula is applied
to the input value or values.

Outputs:
The converted value or array of converted values.
*/


// Higher-order conversion function
function createConverter(fromUnit, toUnit) {
    return (value) => {

        // If the value is an array, convert every value
        if (Array.isArray(value)) {
            return value.map(number => createConverter(fromUnit, toUnit)(number));
        }

        // Weight conversions
        if (fromUnit === "kg" && toUnit === "lb") {
            return value * 2.20462;
        }

        if (fromUnit === "lb" && toUnit === "kg") {
            return value / 2.20462;
        }

        // Distance conversions
        if (fromUnit === "km" && toUnit === "mi") {
            return value * 0.621371;
        }

        if (fromUnit === "mi" && toUnit === "km") {
            return value / 0.621371;
        }

        // Temperature conversions
        if (fromUnit === "C" && toUnit === "F") {
            return (value * 9 / 5) + 32;
        }

        if (fromUnit === "F" && toUnit === "C") {
            return (value - 32) * 5 / 9;
        }

        return value;
    };
}

// Test conversions
const kgToLb = createConverter("kg", "lb");
const lbToKg = createConverter("lb", "kg");

const kmToMi = createConverter("km", "mi");
const miToKm = createConverter("mi", "km");

const cToF = createConverter("C", "F");
const fToC = createConverter("F", "C");

console.log(kgToLb(10));
console.log(lbToKg(10));

console.log(kmToMi(10));
console.log(miToKm(10));

console.log(cToF(0));
console.log(fToC(32));

console.log(kgToLb([10, 20, 30]));


// Weight conversion
document.getElementById("weightConvert").addEventListener("click", () => {

    const value = Number(document.getElementById("weightValue").value);
    const fromUnit = document.getElementById("weightFrom").value;
    const toUnit = document.getElementById("weightTo").value;

    const converter = createConverter(fromUnit, toUnit);
    const result = converter(value);

    document.getElementById("weightResult").textContent = result;
});


// Weight array conversion
document.getElementById("weightArrayConvert").addEventListener("click", () => {

    const input = document.getElementById("weightArray").value;

    const values = input.split(",").map(value => Number(value.trim()));

    const fromUnit = document.getElementById("weightFrom").value;
    const toUnit = document.getElementById("weightTo").value;

    const converter = createConverter(fromUnit, toUnit);
    const result = converter(values);

    document.getElementById("weightArrayResult").textContent = result.join(", ");
});


// Distance conversion
document.getElementById("distanceConvert").addEventListener("click", () => {

    const value = Number(document.getElementById("distanceValue").value);
    const fromUnit = document.getElementById("distanceFrom").value;
    const toUnit = document.getElementById("distanceTo").value;

    const converter = createConverter(fromUnit, toUnit);
    const result = converter(value);

    document.getElementById("distanceResult").textContent = result;
});


// Temperature conversion
document.getElementById("temperatureConvert").addEventListener("click", () => {

    const value = Number(document.getElementById("temperatureValue").value);
    const fromUnit = document.getElementById("temperatureFrom").value;
    const toUnit = document.getElementById("temperatureTo").value;

    const converter = createConverter(fromUnit, toUnit);
    const result = converter(value);

    document.getElementById("temperatureResult").textContent = result;
});

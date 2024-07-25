// (0 °C × 9/5) + 32 = 32 °F celcius to fahrenheit
// 0 °C + 273,15 = 273,15 K celcius to Kelvin
// (0 °F − 32) × 5/9 = -17,78 °C fahrenheit to celcius



let result = document.querySelector(".result")
let number = document.querySelector("#number")
let celciusToFahrenheit = document.querySelector("#celciusToFahrenheit")
let celciusToKelvin = document.querySelector("#celciusToKelvin")
let fahrenheitToCelcius = document.querySelector("#fahrenheitToCelcius")
let fahrenheitToKelvin = document.querySelector("#fahrenheitToKelvin")
let kelvinToCelcius = document.querySelector("#kelvinToCelcius")
let kelvinToFahrenheit = document.querySelector("#kelvinToFahrenheit")


function cToF() {
    if (isNaN(celciusToFahrenheit)){
        if (celciusToFahrenheit.checked) {
            result.textContent = ((parseInt(number.value) * 9/5) + 32).toFixed() + "°F"
            return result
        }
    }
}

function cToK() {
    if (isNaN(celciusToKelvin)){
        if (celciusToKelvin.checked) {
            result.textContent = (parseInt(number.value) + 273.15).toFixed() + "K"
            return result
        }
    }
}

function fToC() {
    if (isNaN(fahrenheitToCelcius)){
        if (fahrenheitToCelcius.checked) {
            result.textContent = ((parseInt(number.value) - 32) * 5/9).toFixed() + "°C"
            return result
        }
    }
}

// (0 °F − 32) × 5/9 + 273,15 = 255,372 K fahrenheit to Kelvin
function fToK() {
    if (isNaN(fahrenheitToKelvin)){
        if (fahrenheitToKelvin.checked) {
            result.textContent = ((parseInt(number.value) - 32) * 5/9 + 273.15).toFixed() + "K"
            return result
        }
    }
}

// 0 K − 273,15 = -273,1 °C Kelvin to celcius
function kToC() {
    if (isNaN(kelvinToCelcius)){
        if (kelvinToCelcius.checked) {
            result.textContent = (parseInt(number.value) - 273.15).toFixed() + "°C"
            return result
        }
    }
}

// (0 K − 273,15) × 9/5 + 32 = -459,7 °F Kelvin to fahrenheit
function kToF() {
    if (isNaN(kelvinToFahrenheit)){
        if (kelvinToFahrenheit.checked) {
            result.textContent = ((parseInt(number.value) - 273.15) * 9/5 + 32).toFixed() + "°F"
            return result
        }
    }
}
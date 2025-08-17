/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")

convertBtn.addEventListener("click", function() {
    const inputValue = parseFloat(numberInput.value) || 0
    
    // Length conversions (1 meter = 3.281 feet)
    const metersToFeet = (inputValue * 3.281).toFixed(3)
    const feetToMeters = (inputValue / 3.281).toFixed(3)
    
    // Volume conversions (1 liter = 0.264 gallon)
    const litersToGallons = (inputValue * 0.264).toFixed(3)
    const gallonsToLiters = (inputValue / 0.264).toFixed(3)
    
    // Mass conversions (1 kilogram = 2.204 pound)
    const kilosToPounds = (inputValue * 2.204).toFixed(3)
    const poundsToKilos = (inputValue / 2.204).toFixed(3)
    
    // Get all the result elements
    const resultElements = document.querySelectorAll(".result-el")
    
    // Update each result using template strings
    resultElements[0].innerHTML = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`
    resultElements[1].innerHTML = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`
    resultElements[2].innerHTML = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`
})


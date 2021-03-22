// need button that clears the text box and enters new pass code
// elements 3 checkboxes that decide if the password has numbers, symbols and uppercase letters (lower case letters will be defualt)
// creat slider or number input for length of pass at least 8 characters but no more then 128
// text box to write in length of the password
// box that displays the password at meets the inputted critia 

const rangeSlider = document.getElementById("rangeSlider")
const sliderLength = document.getElementById("sliderLength")
const uppercaseElement = document.getElementById("uppercase")
const numbersElement = document.getElementById("numbers")
const symbolsElement = document.getElementById("symbols")
const form = document.getElementById("passGenform")
const passwordDisplay = document.getElementById("password")

const LOWERCASE_CHAR_CODES = arrayFromLowToHeigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHeigh(65, 90)
const NUMBERS_CHAR_CODES = arrayFromLowToHeigh(48, 57)

const SYMBOLS_CHAR_CODES = arrayFromLowToHeigh(33, 47).concat(
  arrayFromLowToHeigh(58, 64)
).concat(
  arrayFromLowToHeigh(91, 96)
).concat(
  arrayFromLowToHeigh(123, 126)
)


rangeSlider.addEventListener("input", syncCharacterAmount)
sliderLength.addEventListener("input", syncCharacterAmount)

form.addEventListener("submit", e => {
  e.preventDefault()
  const characterAmount = sliderLength.value
  const uppercase = uppercaseElement.checked
  const numbers = numbersElement.checked
  const symbols = symbolsElement.checked
  const password = generatePassword(characterAmount, uppercase, numbers, symbols)
  passwordDisplay.innerText = password
})

function syncCharacterAmount(e) {
  const value = e.target.value 
  rangeSlider.value = value
  sliderLength.value = value
}

function generatePassword(characterAmount, uppercase, numbers, symbols){
  let charCodes = LOWERCASE_CHAR_CODES
  if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (numbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
  if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

  for (let i = 0; i < characterAmount; i++){
    const characterCode = charCodes[Math.floor(math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHeigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// need button that clears the text box and enters new pass code
// prompts user if the password should have numbers, symbols and uppercase letters (lower case letters will be defualt)
// create slider or number input for length of pass at least 8 characters but no more then 128 (try a prompt that sayd what youve chosen)
// box that displays the password at meets the inputted critia 

// ✓(maybetick) click generate button                  - add function for generatebtn
//prompt alert appears prompts for uppercase letters   }
//prompt alert for numbers                             - https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
//prompt alert for symbols                             }
//create a function that randomises based on user promts 
//apply user choices and generate random password with user chosen prompts into the empty text field - element.textContent/ .innerText

//if not random if number letter or symbol is not in passphrase regenerate 
//if passcode dose not contain upper lower number and symobol redo 
//try get copy button to work. LAST

//my slider
// var sliderRange = document.getElementById('rangeSlider')
// var sliderNumber = document.getElementsById('sliderLength')
// sliderNumber.innerHTML = sliderRange.value;
// sliderRange.oninput = function(){
//   sliderNumber.innerHTML = this.value;
// }


// const for ascii arrays (since value dosnt need to change)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
    ).concat(
        arrayFromLowToHigh(91, 96)
          ).concat(
              arrayFromLowToHigh(123, 126))

console.log(UPPERCASE_CHAR_CODES, LOWERCASE_CHAR_CODES, NUMBER_CHAR_CODES, SYMBOL_CHAR_CODES) 
// // Assignment Code
let generateBtn = document.querySelector("#generate");
// // Write password to the #password input
function writePassword() {
  let password = generatePassword()
  let passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
  let charCodes = [];
  let length = parseInt(rangeSlider.value)
  console.log(length)

  window.alert("You have chosen a password length of " + length)
  window.alert("Please select what characters your passphrase will generate.✍");
  if (window.confirm("Uppercase? 🤷‍♂️")){
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    console.log(charCodes)
  }

  if (window.confirm("Lowercase? 🤷‍♂️")){
    charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    console.log(charCodes)
  }
    
  if (window.confirm("Numbers? 🤷‍♂️")){
    charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    console.log(charCodes)
  }

  if (window.confirm("Symbols? 🤷‍♂️")){
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    console.log(charCodes)
  }
  let passwordResult = ""
  for (let i = 0; i < length; i++){
    let item = charCodes[Math.floor(Math.random() * charCodes.length)];
    item = String.fromCharCode(item)
    passwordResult += item
    console.log(passwordResult)
  }
  return passwordResult
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//copy button
// function copyFunction() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   copyText.setSelectionRange(0, 99999)
//   document.execCommand("copy");
//   alert("COPIED PASSPHRASE" + copyText.value)
// }
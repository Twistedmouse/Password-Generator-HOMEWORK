// need button that clears the text box and enters new pass code
// prompts that decide if the password has numbers, symbols and uppercase letters (lower case letters will be defualt)
// creat slider or number input for length of pass at least 8 characters but no more then 128 (try a prompt that sayd what youve chosen)
// box that displays the password at meets the inputted critia 

//click generate button 
//prompt alert appears prompts for uppercase letters
//prompt alert for numbers
//prompt alert for symbols 
//apply user choices and generate password into the empty text field 

//try get copy button to work. LAST

//const for my slider come back to add sliper later 
// const sliderRange = document.getElementById('sliderLength')
// const sliderNumber = document.getElementById('sliderNumberInput')
var uppercase;
var numbers;
var symbols;

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

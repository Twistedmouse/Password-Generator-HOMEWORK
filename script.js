// need button that clears the text box and enters new pass code
// elements 3 checkboxes that decide if the password has numbers, symbols and uppercase letters (lower case letters will be defualt)
// creat slider or number input for length of pass at least 8 characters but no more then 128
// text box to write in length of the password
// box that displays the password at meets the inputted critia 



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

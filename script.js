// need button that clears the text box and enters new pass code
// prompts user if the password should have numbers, symbols and uppercase letters (lower case letters will be defualt)
// create slider or number input for length of pass at least 8 characters but no more then 128 (try a prompt that sayd what youve chosen)
// box that displays the password at meets the inputted critia 

//click generate button                                - add function for generatebtn
//prompt alert appears prompts for uppercase letters   }
//prompt alert for numbers                             - https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
//prompt alert for symbols                             }
//apply user choices and generate random password with user chosen prompts into the empty text field - element.textContent/ .innerText

//if not random if number letter or symbol is not in passphrase regenerate 
//try get copy button to work. LAST


//const for my slider come back to add sliper later 
// const sliderRange = document.getElementById('sliderLength')
// const sliderNumber = document.getElementById('sliderNumberInput')

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

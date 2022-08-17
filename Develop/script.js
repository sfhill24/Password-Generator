// Assignment Code

//1. Prompt the user for the password criteria: DONE
//a. Password length 8 < 128: DONE
//b. Lowercase, uppercase, numbers, special characters
//2. Validate the input
//3. Generate password based on criteria
//4. Display the generated password



var generateBtn = document.querySelector("#generate");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["@", "#", "$", "%", "&", "?"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableCharacters = [];

function generatePassword() {
  //var characterLength prompt
  var charLengthInput = window.prompt("How many characters would you like your password to contain?");

  while (charLengthInput < 8 || charLengthInput > 128) {
    window.prompt("Password must contain at least 8 characters and no more than 128 characters.");

    charLengthInput = window.prompt("How many characters would you like your password to contain?");
  }

  //var hasNumbers prompt
  var hasNumbers = window.prompt("Do you want your password to include numbers?")
  if (hasNumbers == "") {

    availableCharacters.push(hasNumbers);
  }


  //var hasUpper prompt
  var hasUpper = window.prompt("Do you want your password to include uppercase letters?")
  if (hasUpper == "") {

    availableCharacters.push(hasUpper);
  }

  //var hasLower prompt
  var hasLower = window.prompt("Do you want your password to include lowercase letters?")
  if (hasLower == "") {

    availableCharacters.push(hasLower);
  }
  
  //var hasSymbols prompt
  var hasSymbols = window.prompt("Do you want your password to include symbols?")
  if (hasSymbols == "") {

    availableCharacters.push(hasSymbols);
  }


 // var generatePassword =

  //.4 Display generated password
  //return "password";

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

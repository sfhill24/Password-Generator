var generateBtn = document.querySelector("#generate");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["@", "#", "$", "%", "&", "?", "+", "!", ":", "/"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableCharacters = [];

function generatePassword() {
  //Prompt user for password length
  var charLengthInput = window.prompt("How many characters would you like your password to contain?");
  while (charLengthInput < 8 || charLengthInput > 128) {
    window.prompt("Password must contain at least 8 characters and no more than 128 characters.");

    charLengthInput = window.prompt("How many characters would you like your password to contain?");
  }

  //Confirm user input for password character types
  var hasNumbers = confirm("Do you want your password to include numbers?");
  var hasLower = confirm("Do you want your password to include lowercase letters?");
  var hasUpper = confirm("Do you want your password to include uppercase letters?");
  var hasSymbols = confirm("Do you want your password to include symbols?");

  //Alert user to select at least one character type
  if(hasNumbers == false && hasLower == false && hasUpper == false && hasSymbols == false)
  {
    window.alert("At least one character type must be selected.")
    return;
  }

//If statements to add user input for character types into an array
  if (hasNumbers) {
    for (var i = 0; i < numbers.length; i++) {
      availableCharacters.push(numbers[i]);
    }
  }

  if (hasLower) {
    for (var i = 0; i < lowerCase.length; i++) {
      availableCharacters.push(lowerCase[i]);
    }
  }

  if (hasUpper) {
    for (var i = 0; i < upperCase.length; i++) {
      availableCharacters.push(upperCase[i]);
    }
  }

  if (hasSymbols) {
    for (var i = 0; i < symbols.length; i++) {
      availableCharacters.push(symbols[i]);
    }
  }

  var generatedPassword = "";

  //Randomly loop through array of avaliable characters to get password 
  for (var i = 0; i < charLengthInput; i++) {
    var randomCharacter = Math.floor(Math.random() * availableCharacters.length);
    generatedPassword = generatedPassword + availableCharacters[randomCharacter];
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

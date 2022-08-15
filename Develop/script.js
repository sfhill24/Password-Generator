// Assignment Code

//1. Prompt the user for the password criteria
//a. Password length 8 < 128
//b. Lowercase, uppercase, numbers, special characters
//2. Validate the input
//3. Generate password based on criteria
//4. Display the generated password



var generateBtn = document.querySelector("#generate");
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symblols = ["@", "#", "$", "%", "&", "?"];










function generatePassword() {
  //var characterLength = prompt()

  var charLengthInput = window.prompt("How many characters would you like your password to contain?");

  while  (charLengthInput < 8 || charLengthInput > 128) {
    window.prompt("Password must contain at least 8 characters and no more than 128 characters.");

    window.prompt("How many characters would you like your password to contain?");
  }

  //.4 Display generated password
  return "Generated password will go here";

}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

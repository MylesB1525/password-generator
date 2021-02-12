// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLower = 'abcdefghijklmnopqrstuvwxyz';
var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num = '1234567890';
var sym = "!#$%&'*+,-./:;<=>?@^_`|~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// On Click Event for generateBtn
generateBtn.addEventListener("click", writePassword);

// Promps for password parameters.
  function generatePassword() {
    var confirmLowercase = (confirm("Would you like lowercase letters in your password?"));
    var confirmUppercase = (confirm("Would you like uppercase letters in your password?"));
    var confirmSpecialChar = (confirm("Would you like special characters in your password?"));
    var confirmNumeric = (confirm("Would you like numbers in your password?"));
    var confirmLength = (prompt("How many characters would you like your password to contain?"));

//Alert for appropriate length
      while(confirmLength <=7 || confirmLength>=129) {
        alert("Password must be between 8-128 characters in length. Please enter a value between 8 and 128.");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
      }

// Alert for correct parameter requirements.
      while(confirmLowercase === false && confirmUppercase === false && confirmSpecialChar === false && confirmNumeric === false) {
        alert("You must choose at least one parameter.");
        var confirmLowercase = (confirm("Would you like lowercase letters in your password?"));
        var confirmUppercase = (confirm("Would you like uppercase letters in your password?"));
        var confirmSpecialChar = (confirm("Would you like special characters in your password?"));
        var confirmNumeric = (confirm("Would you like numbers in your password?"));
      }
      
//Input variable values.
    var charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var charUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charSpecialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/","=", "?", "@", "^",];
    var charNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var passwordArray = [];

// String to be filled from arrays.
    if (confirmLowercase) {
     passwordArray.push(...charLowercase);
    }
      if (confirmUppercase) {
      passwordArray.push(...charUppercase);
    }
      if (confirmSpecialChar) {
      passwordArray.push(...charSpecialChar);
      }
      if (confirmNumeric) {
      passwordArray.push(...charNumeric);
    }
    var randomPassword = [];
    for (let i = 0; i <= confirmLength; i++){
      var randomNum = Math.floor(Math.random()* passwordArray.length);
        randomPassword.push(passwordArray[randomNum]);
    }       

    return randomPassword.join("");
  }
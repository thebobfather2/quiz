// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordLength = 0;
  var passwordType = {
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialCharacters: false
  };
  var passwordCharacters = "";
  var passwordResults = "";

  // Criteria Prompts Function
  var generatePassword = function () {

    // Set length of password
    passwordLength = window.prompt("How long would you like your password to be? (Must be between 8 to 128 characters.)");
    passwordLength = parseInt(passwordLength);

    // Check if input is a number between 8-128
    if (!passwordLength) {
      window.alert("Oops! The response you've entered is invalid. Please Try Again.");
      return
    }
    else if (passwordLength > 128 || passwordLength < 8) {
      window.alert("Please enter a number between 8-128.")
      return
    }
    // Select character types (lowercase, uppercase, numberic, and/or special charactrs)
    var passwordCriterea = window.prompt("Using 1 for lowercase, 2 for uppercase, 3 for numeric, and 4 for special characters, please select your password criteria. NOTE: To select multiple critera, do NOT use spaces and list the criteria identifiers in order from least to greatest. For example, lowercase, uppercase, and special character would be entered as 124");
    passwordCriterea = parseInt(passwordCriterea);

    // Switch statement in dot notation
    switch (passwordCriterea) {
      case 1:
        passwordType.lowercase = true;
        break;
      case 2:
        passwordType.uppercase = true;
        break;
      case 3: 
        passwordType.numeric = true;
        break;
      case 4:
        passwordType.specialCharacters = true;
        break;
      case 12:
        passwordType.lowercase = true;
        passwordType.uppercase = true;
        break;
      case 13:
        passwordType.lowercase = true;
        passwordType.numeric = true;
        break;
      case 14:
        passwordType.lowercase = true;
        passwordType.specialCharacters = true;
        break;
      case 23:
        passwordType.uppercase = true;
        passwordType.numeric = true;
        break;
      case 24:
        passwordType.uppercase = true;
        passwordType.specialCharacters = true;
        break;
      case 34: 
        passwordType.numeric = true;
        passwordType.specialCharacters = true;
        break;
      case 123:
        passwordType.lowercase = true;
        passwordType.uppercase = true;
        passwordType.numeric = true;
        break;
      case 124:
        passwordType.lowercase = true;
        passwordType.uppercase = true;
        passwordType.specialCharacters = true;
        break;
      case 134:
        passwordType.lowercase = true;
        passwordType.numeric = true;
        passwordType.specialCharacters = true;
        break;
      case 234:
        passwordType.uppercase = true;
        passwordType.numeric = true;
        passwordType.specialCharacters = true;
        break;
      case 1234:
        passwordType.lowercase = true;
        passwordType.uppercase = true;
        passwordType.numeric = true;
        passwordType.specialCharacters = true;
        break;
      default:
        window.alert("Invalid entry, please carefully read the instructions to select your criteria.")
        break;
    };
    
    // Add possible Character Types
    if (passwordType.lowercase) {
      passwordCharacters = "abcdefghijklmnopqrstuvwxyz";
    };
    if (passwordType.uppercase) {
      passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    if (passwordType.numeric) {
      passwordCharacters = passwordCharacters + "0123456789";
    };
    if (passwordType.specialCharacters) {
      passwordCharacters = passwordCharacters + "!@#$%^&*?~";
    };

    // Variable to receive the length of the passwordCharacters
    var passwordCharacterLength = passwordCharacters.length;

    // Randomly generate password
    function makePassword () {
      for (var i = 0; i < passwordLength; i++) {
        passwordResults += passwordCharacters.charAt(Math.random() * (passwordCharacterLength - 1) + 1);
      };
      return passwordResults;
    }
    // Alert Message
    window.alert("Generating Your Password...")
    return makePassword();
  };

  // Write password to the #password input
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

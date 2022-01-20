// Assignment Code
var generateBtn = document.querySelector("#generate");

// ! This generatePassword function was created to define what is in the 'password variable within the writePassword function
function generatePassword() {

  // used prompt bc I'm looking for more than one answer (number between 8 - 128)
  var length = prompt ('Between 8 and 128, how many characters would you like your password to have?');
  
  // used while loop because there will be a specified condition (length < 8 || length > 128) that will remain true
  while (length < 8 || length > 128) {
    alert('invalid length');
    length = prompt ('Between 8 and 128, how many characters would you like your password to have?');
  }

  // used confirm window object because the answer I would be looking for two answers (T or F, i.e., a boolean)
  var lowerCase = confirm ('Press "OK" if you would like to include lowercase characters?');
  var upperCase = confirm ('Press "OK" if you would like to include uppercase characters?');
  var integer = confirm ('Press "OK" if you would like to include numbers?');
  var specialC = confirm ('Press "OK" if you would like to include special characters?');

  // tested within the console
  console.log('add lowercase', lowerCase);
  console.log('add uppercase', upperCase);
  console.log('add number', integer);
  console.log('add special character', specialC);

// defined variables that will hold defined characters within the string
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var integerChars = "0123456789";
  var specialCChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // charset is dependent on user's answers to prompts and confirms
  var charset = "";

  // if variables lowerCase, upperCase, integer, and specialC are true...
  // i.e., the user opts in or opts out of the confirm window objects...
  // ... then Charcters will be used or not used to generate password
  if (lowerCase) {
    charset = charset + lowerCaseChars;
  } 

  if (upperCase) {
    charset = charset + upperCaseChars;
  }

  if (integer) {
    charset = charset + integerChars;
  }

  if (specialC) {
    charset = charset + specialCChars;
  }

  // tested charset
  console.log(charset);

  // created variable password to be defined by user's input
  var password = "";

  // created a loop to generate password in console
  for (var i = 0; i < length; i++) {
    var randomNum = Math.floor(Math.random() * charset.length);
    var randomChar = charset.charAt(randomNum);
    password = password + randomChar; //refer to if statements
  }
  // returned password to display within textbox
  return password
}


// Write password to the #password input
// ! In the function writePassword...
    // ! The generatePassword function is stored into the 'password' vaiable...
    // ! The document.querySelector, which calls the HTML id "password" nested within the "card", is stored in the 'passwordText' variable
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // ! passwordText takes the value from my generated password..
  passwordText.value = password;

} //! ... and the writePassword fuction displays the password onto the screen

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ! when the user clicks the generateBtn, it will call the writePassword function

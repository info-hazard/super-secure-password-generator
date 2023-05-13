// Assignment Code
// Setting variables
var enter;
var confirmedNumber;
var confirmedSpecial;
var confirmedUppercase;
var confirmedLowercase;

// Defining all characters to be used for password generation
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

blank = [];

var choices;

// Preparing variables that control conversion to Uppercase 
var Uppercase = function (x) {
  return x.toUpperCase();
};

lettersU = letters.map(Uppercase);

var get = document.querySelector("#generate");

// Generate Password
function generatePassword() {
// User input prompt
   enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

   if (!enter) {
      alert("Please enter a value");
   } else if (enter < 8 || enter > 128) {
    // Error Message if not between 8 and 128
      enter = parseInt(prompt("ERROR: Please choose between 8 and 128"));

    } else {
    confirmedNumber = confirm("Would you like numbers?");
    confirmedSpecial = confirm("Will this contain special characters?");
    confirmedUppercase = confirm("Will this contain Uppercase letters?");
    confirmedLowercase = confirm("Will this contain Lowercase letters?");
    };

    //Logic Insertion for every configuration of characters (John Raab and Preston Vongvilay helped me with this)
    if (!confirmedSpecial && !confirmedNumber && !confirmedUppercase && !confirmedLowercase) {
      choices = alert("Please choose a valid value");
    }
    else if (confirmedSpecial && confirmedNumber && confirmedUppercase && confirmedLowercase) {

      choices = special.concat(numbers, letters, lettersU);
    }
    else if (confirmedSpecial && confirmedNumber && confirmedUppercase) {
      choices = special.concat(numbers, lettersU);
    }
    else if (confirmedSpecial && confirmedNumber && confirmedLowercase) {
      choices = special.concat(numbers, letters);
    }
    else if (confirmedSpecial && confirmedLowercase && confirmedUppercase) {
      choices = special.concat(letters, lettersU);
    }
    else if (confirmedNumber && confirmedLowercase && confirmedUppercase) {
      choices = numbers.concat(letters, lettersU);
    }
    else if (confirmedSpecial && confirmedNumber) {
      choices = special.concat(numbers);
    } 
    else if (confirmedSpecial && confirmedLowercase) {
      choices = special.concat(letters);
    } 
    else if (confirmedSpecial && confirmedUppercase) {
      choices = special.concat(lettersU);
    }
    else if (confirmedLowercase && confirmedNumber) {
      choices = letters.concat(numbers);
    } 
    else if (confirmedLowercase && confirmedUppercase) {
      choices = letters.concat(lettersU);
    } 
    else if (confirmedNumber && confirmedUppercase) {
      choices = numbers.concat(lettersU);
    }
    else if (confirmedSpecial) {
      choices = special;
    }
    else if (confirmedNumber) {
      choices = numbers;
    }
    else if (confirmedLowercase) {
      choices = letters;
    }
    else if (confirmedUppercase) {
      choices = lettersU;
    };

    var password = [];

    // using Math function to choose characters (check README for link to source code)
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
//User Input Retrieval
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}


// Reference #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

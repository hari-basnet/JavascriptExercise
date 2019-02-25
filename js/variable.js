//creating different variables and storing values to them
var firstName = "Hari";
var lastName = "Basnet";
var maritalStatus = "in a relationship";
var countryOfOrigin = "Nepal";
var age = 26;

//declaring variables in the single line
var frstName = "hari",
  lstName = "Basnet",
  marialStatus = "in a relationship",
  countryOrigin = "Nepal",
  age = 26;

var myAge = 25,
  yourAge = 30;

//I want the first character to be uppecase

frstName = frstName.charAt(0).toUpperCase() + frstName.slice(1);

//this function calculates the sum of all the multiples of 3 or 5 below 1000
function calculateSumOfNumber(num) {
  var sum = 0;
  for (i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

//calling out all the variables to the console
console.log(`My name is ${firstName} ${lastName}`);
console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);
console.log(
  `My name is ${frstName} ${lstName}. I am ${marialStatus}. I came to Finland from ${countryOrigin}. I am ${age} years old.`
);
console.log(calculateSumOfNumber(1000));

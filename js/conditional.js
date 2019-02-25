/* Get user input using prompt(“Enter your age:”). 
If user is 18 or older , 
give feedback:You are old enough to drive 
but if not 18 give feedback 
to wait for the years 
he supposed to wait for. */
var myAge = 28;
var yourAge = prompt("Enter your age");
/* var drivingAge = prompt("Enter your age: ");
 */

/* var remainingYears = Math.abs(18 - drivingAge);
if (drivingAge >= 18) {
  alert(
    `You are old enough to drive. you have been driving for ${remainingYears} years.`
  );
} else {
  alert(`Wait for ${remainingYears} years to drive.`);
} */

if (yourAge > myAge) {
  alert(`You are ${yourAge - myAge} years older than me. `);
} else if (yourAge < myAge) {
  alert(`You are ${myAge - yourAge} years younger than me. `);
} else {
  prompt(`Hey we are same age.`);
}

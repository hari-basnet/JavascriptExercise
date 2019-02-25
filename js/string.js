var company = "Integrify Acadaaemy";

//Print the string  on the browser console using console.log()
console.log(company);

//Print the length of the string  on the browser console using console.log()
console.log(company.length);

//Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());

//Change all the string to small letters using toLowerCase() method
console.log(company.toLowerCase());

//Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.slice(0, 9));
console.log(company.substr(0, 9)); //cannot take negative values
console.log(company.substring(0, 9));

//Check if the string contains a word Academy using includes() method
console.log(company.includes("Academy")); //case sensitive

//Split the string into array using split() method
console.log(company.split(""));
console.log(company.split(" ")); //splits where there is space

//“Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.
var companies = "Facebook, Google, Microsoft, Apple,IBM, Oracle, Amazon";
console.log(companies.split(", ")); //split not only separate but also removes the charat()

//Change Integrify Academy  to Microsoft Academy using replace() method.
console.log(company.replace("Integrify Academy", "Microsoft Academy"));

//What is the index of A in ‘Integrify Academy’ string use charAt() method.
console.log(company.indexOf("A"));
console.log(company.charAt(10));
console.log(company.charCodeAt(1));

//Use lastIndexOf to determine the position of the last occurrence of e in Integrify Academy
console.log(company.lastIndexOf("e"));

//Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g “  Integrify Academy   ”.
console.log(company.trim());

//Use startsWith() method with the string Integrify Academy make the result true
console.log(company.startsWith("Integrify Academy"));

//Use endsWith() method with the string Integrify Academy make the result true
console.log(company.endsWith("Integrify Academy"));

//Use  match() method to find all the a’s in Integrify Academy
console.log(company.match("a")); //question

//Use concat() and merge ‘Integrify’ and ‘Academy’ to a single string, ‘Integrify Academy’
var newCompanyOne = "Integrify",
  newCompanyTwo = " Academy";
console.log(newCompanyOne.concat(newCompanyTwo)); //question

//Use repeat() method to print Integrify Academy 5 times
console.log(company.repeat(5));

var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "iBM",
  "Oracle",
  "Amazon"
];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print out each company
for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
console.log("======================");
//Change every company to uppercase and print them out
var newArray = [];
for (var i = 0; i < itCompanies.length; i++) {
  itCompanies[i].toUpperCase();
  newArray.push(itCompanies[i]);
}
console.log(newArray);

//Print the array like a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies.splice(6, 0, "and");
console.log(itCompanies);

//Sort the array using sort() method
console.log(itCompanies.sort());

//Reverse the array using reverse() method
//console.log(itCompanies.reverse());


//Use find method to check if a company exist in the itCompanies array.
//console.log(itCompanies.find("Facebook"));

//remove the last company from the array 

//itCompanies.pop();

for(var i = 0; i<itCompanies.length; i++){
  
  itCompanies[i]= itCompanies[i].toUpperCase();
  //console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies);

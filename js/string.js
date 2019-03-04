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


//Use substr to slice out the phase because because because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

let sentence = 'You cannot end a sentence with because because because is a conjunction';

let firstPosition = sentence.indexOf('because');
let lastPosition = sentence.lastIndexOf('because')+ 'because'.length + 1;


console.log(sentence.substring(firstPosition,lastPosition));
console.log(sentence.lastIndexOf('because') + 'because'.length + 1);


//29//Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const incomes = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.split(' ');
const numbers = [];
for (let i = 0; i < incomes.length; i++) {

  if(parseFloat(incomes[i])){
    numbers.push(parseFloat(incomes[i]));
  }  
}
console.log(numbers);
console.log(numbers.length);
var annualIncome = 0;
for(let i = 0; i < numbers.length; i++){

  if(numbers[i] === 5000){
    annualIncome += numbers[i] * 12;
  }else if(numbers[i] === 10000){
    annualIncome += 10000;
  }else if (numbers[i] === 15000){
    annualIncome += numbers[i] * 12;
  }else{
    
    annualIncome += numbers[i];
    
  }
}

console.log(annualIncome);

const sentences = 

'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const pattern = /\d+/g;

const amounts = sentences.match(pattern);

console.log(amounts);

let hashes = " ";
for(let i = 0; i < 7; i++){
  console.log(hashes += "#");
}


//Use search to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

const myString = 'You cannot end a sentence with because because because is a conjunction';

console.log(myString.search(/[Bb]ecause/g));

function songDecoder(song){

  const pattern = /WUB/g;
  const wubFinder = song.split(pattern);44
  return wubFinder;

}

console.log(songDecoder("WUBKDKDWUBDKKDKWUBKDKDKDKWUB"));
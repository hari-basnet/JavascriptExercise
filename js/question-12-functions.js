//Declare a function fullName and it print out your full name.
function showFullName(){
    return console.log("Hari Basnet");
}

showFullName();


//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full name.
function fullName (firstName, lastName){
    
    console.log(`${firstName} ${lastName}`);
}

fullName("Hari","Basnet");

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers (first, second){
    var sum = first + second;
    return sum;
}

console.log(addNumbers (4,3));

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
var moviesToWatch = [
    "Avatar",
    "Avengers: Endgame",
    "Captain Marvel",
    "DUmbo",
    "Hellboy",
    "Hotel Mumbai",
    "The Mustang",
];

var actressIWantToDate =[
    "Jennifer Lawrence",
    "Charlize Theron",
    "Scarlett Johansson",
    "Natalie Portman",
    "Mila Kunis",
    "Emma Watson",
    "Jennifer Aniston",
    "Megan Fox",
    "Amy Adams",
    "Emilia Clarke"
];

actressIWantToDate.push("Elmita Baidhya");
//actressIWantToDate.pop();
console.log(actressIWantToDate);

function printArray(arr){
    for(var i = 0; i < arr.length; i++){

        console.log(arr[i]);
    }

}

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array(dont’ use method).
function printArrayReverse(array){
    var reversedArray = [];
    for(var i = array.length-1; i>0; i--){

        reversedArray.push(array[i]); 
        //console.log(array[i]);
        //newarray[i] = array[arr.length-i-1];
    }
    return reversedArray;

}
console.log(printArrayReverse(moviesToWatch));
//Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array. 
function printArrayCapital(arr){
    var capitalizedArray = [];
    for(var i = 0; i < arr.length; i++){
        capitalizedArray[i] = arr[i].toUpperCase();
        //console.log(arr[i].toUpperCase());
    }
    return capitalizedArray;
}

//Declare a function name removeItem. It returns array after removing an item
function removeItem (arrayToRemove){
    var removedArray = arrayToRemove.slice();
    /* for(var i = 0; i < arrayToRemove.length; i++){
       if (arrayToRemove[i].includes("Captain Marvel")){

       }
    } */
    removedArray.splice(arrayToRemove.length-1,1);
    return removedArray;
}
////////////////////////////////////////////////////////////////////////
//Declare a function name addItem. It returns array after adding an item
function addItem (arrayToAdd){
   var newArrayItem = arrayToAdd.slice(); 
   newArrayItem.push("GORETO");
    return newArrayItem;
}

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number){
    var sum = 0;
    for(var i = 0; i <= number; i++){
        sum += i;
    }
    return sum;
}

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range.
function sumOfOdds (number){
    var sum = 0;
    for (var i = 0; i <= number; i++){
        if (i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that range.
function sumOfEven (number){
    var sum = 0;
    for (var i = 0; i <= number; i++){
        if (i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}

//Declare a function name. It takes a number parameter and it counts number of evens and odds in the number.
function numOfOddsAndEven(number){
    var evenCounter = 0;
    var oddCounter = 0;
    for (var i = 0; i <= number; i++){
        if(i % 2 === 0){
            evenCounter++;
        }else{
            oddCounter++;
        }
    }
    return `There are ${evenCounter} even numbers and ${oddCounter} odd numbers. `;
}

//Declare a function name randomHexaNumberGenerator. When this function is called it generates  a random hexadecimal  number.
function randomHexaNumberGenerator(){
    //return Math.random() * 16;
    return `#${Math.random().toString(16).substring(2, 10) /* + Math.random().toString(36).substring(2, 15) */}`;
}

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator (){

    return `7 character ID: ${Math.random().toString(16).substring(2, 9)}`;
}

/* Modify question number n . Declare a function name userIdGeneratedByUser. 
It doesn’t take any parameter but it takes two inputs using prompt(). 
One of the input is the number of characters and the second input 
is the number of ids which are supposed to be generated.  */
function userIdGeneratedByUser(){
    var numberOfIds = prompt("number of Ids to create");
    var numerOfCharacters = prompt("Enter the number of characters: ");
    var createdID = [];
    for (var i = 0; i < numberOfIds; i ++){
    createdID.push(Math.random().toString(36).substring(2, numerOfCharacters));
 }
 return createdID;
}

//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator (){
    var r = Math.random() * 245;
     r = Math.floor(r);
     var g = Math.random() * 255;
     g = Math.floor(g);
     var b = Math.random() * 255;
     b = Math.floor(b);

    
    return `rgb(${r},${g},${b})`;
}

//Call your function shaffleArray, it takes an array as a parameter and it returns a shuffled array
function shaffleArray(array){
    //my array.length is 7
   
    for(var i = 0; i < array.length; i++){
        var k = Math.floor(Math.random() * (array.length - i));
        var tempArray = array[i];
        array[i] = array[k];
        array[k] = tempArray;
        return array; 
    }
    
}

//Call your function factorial, it takes a whole number as a 
//parameter and it return a factorial of the number

function printFactorial(number){
    var factorial = 1;
    for (i = number; i > 0; i-- ){
        factorial = factorial * i; 
        
    }
    return factorial;

}

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not.
function isEmpty(checkString){

    if (checkString === null || checkString === undefined){
        console.log("The string is Empty");
    }else{
        console.log("The string is not Empty");
        
    }
}

//Call your function sum, it takes any number of arguments and it returns the sum
function sum (numberArray){
    var total = 0;
    for (var i = 0; i<numberArray.length; i++){
        total = total + numberArray[i];

    }
    return total;
}

//Write a function name displayDateTime and it display in this format: 28/08/2018 04:08
function displayDateTime(){
    var myDate = new Date();

    var dd = myDate.getDate();
    var mm = myDate.getMonth() + 1;
    var yyyy = myDate.getFullYear();
    var myTime = myDate.getTime();
    var hrs = myDate.getHours();
    var min = myDate.getMinutes();

    if (dd<10){
        dd = "0" + dd;
    }

    if (mm <10){
        mm = "0" + mm;
    }

    var setDate = `The date is ${dd}/${mm}/${yyyy} ${hrs}:${min} `;
    
    return setDate;
}

// here match method takes regular expression REGEX 
function findArrayElement (array){
   // var foundItem = [ ];

    for (var i = 0; i < array.length; i++){
        var searchItem = array[i].match(/o/gi)!= null && array[i].match(/o/gi).length;
        //console.log(typeof searchItem);
        
        if (searchItem >= 1 ){
            console.log(array[i]);
            //foundItem.push(array[i]);
        }
    }
    //return foundItem;
}

function addItemT (arrayToAdd){
    
    arrayToAdd = arrayToAdd.push("GORETO");
    return arrayToAdd;
 }
 
 console.log(addItemT(moviesToWatch));
 
console.log(moviesToWatch);
console.log(findArrayElement(actressIWantToDate));

console.log(displayDateTime());
console.log(displayDateTime());
// All the consoles 
console.log(removeItem(moviesToWatch));

console.log(printArrayCapital(moviesToWatch));
//removeItem(actressIWantToDate);
//printArrayCapital(moviesTOWatch);
console.log("=============================");
printArray(moviesToWatch);
console.log("=============================");
printArrayReverse(moviesToWatch);
console.log("=============================");
console.log(addItem(moviesToWatch));
console.log("=============================");
console.log(sumOfNumbers(100));
console.log(sumOfOdds(100));
console.log(sumOfEven(100));
console.log("=============================");
console.log(numOfOddsAndEven(10));
console.log("=============================");
console.log(randomHexaNumberGenerator());
console.log("=============================");
console.log(userIdGenerator());
console.log("=============================");
//console.log(userIdGeneratedByUser());
console.log(rgbColorGenerator());
console.log("=============================");
console.log(shaffleArray(moviesToWatch));
console.log("=============================");
console.log(printFactorial(8));
console.log("=============================");
isEmpty(moviesToWatch);

console.log(sum([10,10,10,10,10,10,10,10,10,10,23]));


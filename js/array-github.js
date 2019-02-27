//declare an empty array 
const emptyArray = [];

console.log(emptyArray);

//declare an array with more than 5 number of items
const favouriteCars = [
    'Toyota CHR',
    'Honda Civic',
    'Volvo v-40',
    'Tesla Model-S',
    'Toyota Prius',
    'land Cruiser'
];

console.log(Math.floor(favouriteCars.length)/2);
//Find the length of your array
console.log(favouriteCars.length);

// Get first item, the middle item and the last item of the array 
const firstItem = favouriteCars.slice(0,1);
console.log(firstItem);

//printing our the middle item is pain in the asss 
var middleItemEven = favouriteCars.slice(
                Math.floor((favouriteCars.length -1) / 2),
                Math.ceil((favouriteCars.length +1) / 2));

var middleItemOdd = favouriteCars.slice(
    Math.floor(favouriteCars.length)/2,
    Math.floor(favouriteCars.length)/2 + 1);

if (favouriteCars.length % 2 === 0){
    console.log(middleItemEven);
}else{
    console.log(middleItemOdd);
}

//Declare an array called mixedDataTypes,put different 
//data types and in your array and 
//the array size should be greater than 5

const mixedDataTypes = [1, "one", true, undefined, null, 222];

//Sort the array using sort() method
console.log(favouriteCars.sort());

//Slice out the last 3 companies from the array

let slicedOutArray = favouriteCars.slice(favouriteCars.length -3);
console.log(slicedOutArray);

console.log(favouriteCars);
//Slice out the middle IT company or companies from the array

let middleItem = favouriteCars.slice(Math.floor(favouriteCars.length / 2 -1) , Math.floor(favouriteCars.length/ 2 + 1));

console.log(middleItem);


// remove all items 
favouriteCars.length =0;
console.log(favouriteCars);
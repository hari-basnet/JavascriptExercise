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
    //'Land Cruiser'
];

console.log(Math.floor(favouriteCars.length)/2);
//Find the length of your array
console.log(favouriteCars.length);

// Get first item, the middle item and the last item of the array 


//var firstItem = favouriteCars[0];
//var middleItem = favouriteCars[4];
// console.log(firstItem);
// console.log(favouriteCars[0]);

// var firstItem =  favouriteCars.splice(0,1);
// console.log(firstItem);
console.log(Math.ceil((favouriteCars.length + 1)/2));


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


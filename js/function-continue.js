//An area of a rectangle is calculated as follows: area = lenght x width.
//Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    var area = length * width;
    return area;
}

console.log(`Area of triangle is `, areaOfRectangle(100, 100));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width). 
//Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, breadth) {
    var perimeter = 2 * (length + breadth);
    return perimeter;

}

console.log(`Perimeter: `, perimeterOfRectangle(23, 32));

//A volume of a rectangular prism is calculated as follows: volume = lenght x width x height. 
//Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, breadth, height) {
    var volume = length * breadth * height;
    return volume;
}

console.log("Volume: ", volumeOfRectPrism(12, 1, 2));

//Area of a circle is calculated as follows: area = π x r x r. 
//Write a function which calculates areaOfCircle

function areaOfCircle(radii) {

    var area = Math.PI * radii * radii;
    return area;
}

console.log(areaOfCircle(2) + " m2");

//Circumference of a circle is calculated as follows: circumference = 2πr. 
//Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
    var circumference = Math.PI * 2 * radius;
    return circumference;
}

console.log("Circumference: ", circumOfCircle(4));

//Density of a substance is calculated as follows:density= mass/volume. 
//Write a function which calculates density.

function calculateDensity(mass, volume) {
    var density = mass / volume;
    return density;
}

console.log(calculateDensity(22, 44));

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
//Write a fucntion which calculates a speed of a moving object, speed.

//Weight of a substance is calculated as follows: weight = mass x gravity. 
//Write a function which calculates weight.

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
//Write a function which converst oC to oF convertCelciusToFahrenheit.

//Body mass index(BMI) is calculated as follows: 
//bmi = weight in Kg / (height x height) in m2. 
//Write a function which calculates bmi. 
//BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obsese based the information given below.
//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more

function calculateBMI(weight, height) {

    var bmi = weight / (height * height);

    if (bmi >= 18.5 && bmi <= 24.9) {
        return ("Normal Weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
        return ("OverWeight");
    } else if (bmi > 30) {
        return ("Obese");
    } else {
        return ("Eat some");
    }

}
console.log(calculateBMI(54, 1.51));

//Linear equation is calculated as follows: ax + b = c. 
//Write a function which calculates value of a linear equation, solvLinEquation.
function solvlinEquation(a, b, c) {

    // ax + b = c
    //simplifying this equation we get 
    // x = (c -b)/a

    var x = (c - b) / a;
    return x;
}

console.log(solvlinEquation(4, 2, 80));

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
//Write a function which calculates value or values of a quadratic equation, solvQuadEquation.

function solvQuadEquation(a, b, c) {
    //the solution for quadratic equation is 
    // x = (-b +- sqrt(bsquare -4ac)/2a
    //quadratic equation always have to value of x so we create two solutions 

    var x1 = (-1 * b + Math.sqrt(Math.abs(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
    var x2 = (-1 * b - Math.sqrt(Math.abs(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);

    return "The solution is " + x1 + "," + x2;
}
console.log(solvQuadEquation(1, 1, 10));

//https://www.mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/ 
//Write a function called average, it takes an array parameter and returns the average the items. 
//Check if all the array items are number types. 
//If not give return reasonable feedback.

const numberArray = [1, 2, 44, 56, 22, 34];
function average(array) {
    var avg;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            console.log("is not a number ");
        }
        sum = sum + array[i];
    }
    avg = Math.round(sum / array.length);
    //console.log('is a number ');
    //console.log(avg);
    return avg;
}
console.log("The average is ", average(numberArray));


//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
//If the array length is less than five it return 'item not found'.

function modifyArray(array) {

    
    if (array.length < 5) {
        return "item not found";
    }
    if(array.length >= 5){
        array[4] = array[4].toUpperCase();
    }
    return array;

}
console.log(modifyArray(["Avocado", "Tomato", "Potato","Mango","Jalebi"]));

//Write a function called checkSeason, it takes a month parameter 
//and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    let season;   
    if(month.match(/[Dd]ecember/g) || month.match(/[Jj]anuary/) || month.match(/[Ff]ebruary/)){
        season = "Winter";
    }else if(month.match(/[Mm]arch/) || month.match(/[Aa]pril/g) || month.match(/[Mm]ay/)){
        season = "Spring";
    }else if(month.match(/[Jj]une/) || month.match(/[Jj]uly/g) || month.match(/[Aa]ugust/)){
        season = "Summer";
    }else if(month.match(/[Ss]eptember/) || month.match(/[Oo]ctober/g) || month.match(/[Nn]ovember/)){
        season = "Autumn";
    }else{
        return "there is no such Month";
    }
    return season;
}
console.log(checkSeason("August"));

//another way of finding the season is switch 

function chckSeason (month){

    switch (month){
        case 12 :
        case 1 :
        case 2 :
        console.log("Winter");
        break;
        case 3 :
        case 4 :
        case 5 :
        console.log("Spring");
        break;
        case 6 :
        case 7 :
        case 8 :
        console.log("Summer");
        break;
        case 9 :
        case 10 :
        case 11 :
        console.log("Fall");
        break;

        default:
        console.log(alert("we only have twelve months"));
    }
}

chckSeason(3);

//(42) Write a function called *isPrime, which checks if a number is prime number.

function isPrime(number){

    for (let i = 2; i < number; i ++ ){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

console.log("checkPrime?", isPrime(0));

// (45) Write a functions which checks if all items are unique in the array.

const newArray = ["A", "B", "C", "D", "E", "A"];
function checkUniqueItem (array){

    for (let i = 0; i < array.length; i++){

        if (array.indexOf(array[i]) !== -1){
            return true;

        }
    }
    return false;

}
console.log("check for Unique items: ", checkUniqueItem(newArray));

function hasDuplicates(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}

console.log("check for Unique items: ", hasDuplicates(newArray));


// (PRACTICE)


function reverseTheArray (array){

    let reversedNew = [];
    for (let i = array.length - 1; i >= 0; i--){

        reversedNew.push(array[i]);
        
    }
    return reversedNew;

}

console.log(reverseTheArray(newArray));


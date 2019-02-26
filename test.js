// var firstName = 'Hari';
//         var lastName = 'Basnet';
//         var age = 200;
//         var country = 'Helsinki';
//         var fullName = firstName + ' ' + lastName;
//         var personInfo = 'Hi, I am ' +fullName+ '. ' + 'I am ' +age+ ' years old. ' + 'I live in ' +country+ '.';
//         var personInformation = `I am ${fullName}. I am ${age} years old. I live in ${country}. `;
//         var isRaining = false;
//         var weather = 'normal';

//        /*  if(weather === 'rainy'){
//             console.log('its raining and you need a raincoat');
//         } else if (weather === 'sunny'){
//             console.log('Yo you need a hat');
            
//         }else{
//             console.log('Just Go out');
//         } */

//         for (var i=1; i<=10; i++){
//             console.log(`2 * ${i} = ${2 * i}`);
//         }

//         function multiplyTwoNumbers(numOne, numTwo){
//             var product = numOne * numTwo;   
//             return product;
//         }

//         var shoppingCart = ["Milk", "soyaDrink", "egg", "bread", "chicken"];

//         console.log(0);
//         console.log(shoppingCart[0]);
//         console.log(shoppingCart.indexOf('Milk'));
        
//         console.log(multiplyTwoNumbers(233, 344));

//         for (let i=shoppingCart.length -1; i>0; i--){

//             console.log(`I want to buy ${shoppingCart[i]}`);
            
//         }

//         console.log(firstName +' '+ lastName);
//         console.log(fullName);
//         console.log(personInfo);
//         console.log(personInformation);

//         var PI = Math.PI;

//         console.log(PI);
//         //The Math.ceil() function returns the smallest integer greater than or equal to a given number.
//         console.log(Math.ceil(PI));
        
        
//         function areaOfCircle(radius){

//             area = Math.PI * radius**2;
//             return area.toFixed(2); //to fixed is used to accept decimal 
//         }

//         console.log(areaOfCircle(10));

//         console.log(Number('4'));

//         console.log(Math.random() * 11);

//         //pure function has variable inside the function 
//         // impure function takes variable from the global scope

//         function rgbColorGenerator (){
//             let red = Math.floor(Math.random() * 256);
//             let green = Math.floor(Math.random() * 256);
//             let blue = Math.floor(Math.random() * 256);

//             return (`rgb(${red},${green},${blue})`);

//         }
//         console.log(rgbColorGenerator());

//         // var is function scope and let has block scope
//         // if you create a var x and reassign later whereever in the function 
//         // then the later variable will be stored 
//         // but in let example it will only stay in one block
//         // we cannot reassign let
//         //
//         function varTestOne(){
//             var x = 4;
//             console.log(x);
//             if(true){
//                 var x = 2;
//                 console.log(x);
//             }

//             console.log(x);
//         }

//         varTestOne();
//         ///////////////////////////////////////////////
//         function varTest(){
//             let x = 1;
//             console.log(x);
//             if(true){
//                 let x = 2;
//                 console.log(x);
//             }

//             console.log(x);
//         }
//         varTest();
//         console.log("===================================");
        
//         // for loopt is fucking disgrace if i dont understand 
//         // use const whenever you are declaring array and object

//         for (var i = 0; i < 5; i++){
//             console.log(i);
//         }
//         console.log("===================================");
//         console.log(i);

//         //using const is very secure way of programming 

//         const BODY_TEMPERATURE = 37;
//         const GRAVITY = 9.8;
//         const countries = ["Nepal", "Finland", "Sweden", "Denmark"];  

//         // array methods push, pop, shift, unshift
//         const numbers = [1,2,3,4,5] ;

//         numbers.push(9);
//         console.log(numbers);

//         let newArr = []; 
//         for (let i = 0; i < 10; i++) {

//             const randomNumber = Math.floor(Math.random() * 10);
//             newArr.push(randomNumber);
            
//         }
//         console.log(newArr);


function nameOfFunction (){

    firstName = "Hari";
    lastName = "Basnet";
    return firstName, lastName;
    //console.log(firstName + " " + lastName);
    //return ("I am a function");
}


const fullName = function (firstName, lastName){

    return firstName + " " + lastName;    
};

console.log(nameOfFunction());

//arrow functions

const fullNameThree =  (firstName, lastName) => {

    return firstName + " " + lastName;    
};

// shorter way 
const fullNameFour = (firstName, lastName) =>  firstName + lastName;

const areaOfCircleTwo = radius => Math.PI * radius * radius;

console.log(areaOfCircleTwo(7));

console.log(fullNameFour("hari", "Basnet"));


//object 

const student ={
    firstName : "Hari",
    lastName : "Basnet",
    age : 200,
    job : "reading",

    skills : ["HTML", "CSS", "Javascript", "React", "Redux"],
    isMarried : true,
    getPersonInfo : function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(student);
console.log(student.getPersonInfo());


const rectangle = {
    length : 100,
    width : 20,
    getAreaOfRectangle : function (){
        return this.length * this.width;
    },

    getPerimeterOfRect : function (){

        return 2 * (this.length + this.width);

    }
};

console.log(rectangle.getAreaOfRectangle());
console.log(rectangle.getPerimeterOfRect());


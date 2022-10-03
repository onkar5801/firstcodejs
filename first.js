

let root1,root2;

let a = prompt("Enter the first nmber");
let b = prompt("ENter the second number");
let c = prompt("ENter third number");

let discriminant = b*b-4*a*c;
if(discriminant>0){
    root1 = (-b + Math.sqrt(discriminant))/(2*a);
    root2 = (-b + Math.sqrt(discriminant))/(2*a);
    console.log("roots of qudratic eqn are"+ root1 +"and"+root2);
}
else if(discriminant==0){
    root1=root2=-b/(2*a);
    console.log("roots of qudratic eqn are"+ root1 +"and"+root2);
}
else{
    let realPart = (-b/(2*a)).toFixed(2);
    let imagPart =(Math.sqrt(-discriminant)/(2*a)).toFixed(2);
    console.log("roots of qudratic eqn are"+ realPart +"and"+imagPart);
}

//------------- swaping using distructing assignment----------

// let a = prompt("Enter the first value");
// let b = prompt("ENter the second value");

// [a,b]=[b,a];
// console.log("The value of a after swap"+" "+a);
// console.log("THe value of b after swaping"+" "+b);


// -----------------swaping 2 numbers---------------------
// let a = prompt("Enter the first variable");
// let b = prompt("Enter the second variable");

// let temp;

// temp = a;
// a = b;
// b = temp;
// console.log("Value of a  after swaping" +" "+ a);
// console.log("Value of b after swap" +" "+ b);


//-------------------area of triangle when all sides known----
// const side1 = parseInt(prompt('ENter Side 1'));
// const side2 =parseInt(prompt('Enter Side 2'));
// const side3 =parseInt(prompt('Enter side 3'));

// const s = (side1+side2+side3)/2;

// const areaValue = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

// console.log("The Area Of Triangle Is :"+ areaValue);

//-------------------area of triangle-------------
// const baseValue = prompt('Enter The Base Value');
// const heightValue = prompt('ENter height value');

// const areaValue =(baseValue * heightValue) / 2;

// console.log("The Area Of Triangle is : "+areaValue);

//------------------square root of different numbars---------
// const number1 =  2.25;
// const number2 = -4;
// const number3 = "byee";

// const result1 = Math.sqrt(number1);
// const result2 = Math.sqrt(number2);
// const result3 = Math.sqrt(number3);

// console.log("The square root of "+number1+ " is " + result1);
// console.log("The square root of "+number2+ " is " + result2);
// console.log("The square root of "+number3+ " is " + result3);

//---------------------square root ----------------------
// const number = prompt('Enter Number :');
// const result = Math.sqrt(number);
// console.log("the square root of "+number+ "is :"+ result);

//--------------------sum of numbers----------------------
// const num1 = parseInt(prompt('Enter The Number'));
// const num2 = parseInt(prompt('Enter The Number'));
// const sum = num1 + num2 ;
// console.log( 'The sum of ${num1} and ${num2} is ${sum}');

// function divideByHalf(sum){
//     console.log(Math.floor(sum/2));
// }
// function multiplyBy2(sum){
//     console.log(sum*2);

// }
// function operationOnSum(num1,num2,operation){
//     var sum = num1 + num2;
//     operation(sum);
// }
// operationOnSum(3,3,divideByHalf);
// operationOnSum(5,5,multiplyBy2);
//-------------------------------------------------------
// function Person(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;

// }
// var person1 = new Person("Vivek",76,"male");
// console.log(person1);

// var person2 = new Person("Courtney",34,"female");
// console.log(person2);
// SOMR BASIC QUESTIONS FOR PRACTISE 

// let a = 2;
// let b= 3;

// console.log(`sum of the numbers is ${a+b}`);

const prompt = require("prompt-sync")();

// let name = prompt("Enter your good name: ")

// console.log(`Hi! ${name}
// Have a Nice day `);

//accpet number 3 method

// by 3 veriable

// let a = 12;
// let b = 10;
// let temp ;

// temp = a;
// a= b;
// b= temp;

// console.log(`${a},${b}`);


// destructing 
//  [a,b]=[b,a]

//  console.log(`${a},${b}`);

// by itself

// a = a+b;
// b=a-b;
// a=a-b;

// console.log(`${a},${b}`);

//compound interest calculation

let p = prompt("enter principle amount: ");
let r = prompt("enter interrest rate: ");
let n = prompt("no. of times interest: ");
let t = prompt("no. of year: ");

let a = p*(1+(r/n))^(n*t);

let ci = a-p;

console.log(`Compound interest is : {ci}`);
const prompt = require('prompt-sync')();

// This will ask the user how much Person 1 paid, and turn it into a Number data type.
let person1 = Number(prompt("How much did Person 1 Pay? "));

// This will ask the user how much Person 2 paid, and turn it into a Number data type.
let person2 = Number(prompt("How much did Person 2 Pay? "));

// This will ask the user how much Person 3 paid, and turn it into a Number data type.
let person3 = Number(prompt("How much did Person 3 Pay? "));

// let totalBill equal Person 1 plus Person 2 
let totalBill = person1 + person2 + person3;

// this is just to show me what the TotalBill is
console.log("The Total Bill is: ");
console.log(totalBill);

// let evenSplit equals totalBill divided by 3.
let evenSplit = totalBill / 3;

console.log("An Even Split Is: ");
console.log(evenSplit);

let person1Owes = evenSplit - person1;
let person2Owes = evenSplit - person2;
let person3owes = evenSplit - person3;

// this tells us know the final result
console.log("So Person 1 Owes " + person1Owes + ", Person 2 Owes " + person2Owes + " and Person 3 Owes " + person3owes);
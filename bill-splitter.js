const prompt = require('prompt-sync')();

// This will ask the user how much Person 1 paid, and turn it into a Number data type.
let person1 = Number(prompt("How much did Person 1 Pay? "));

// This will ask the user how much Person 2 paid, and turn it into a Number data type.
let person2 = Number(prompt("How much did Person 2 Pay? "));

// let totalBill equal Person 1 plus Person 2 
let totalBill = person1 + person2;

// this is just to show me what the TotalBill is
console.log("According to your inputs, the Total Bill was: ");
console.log(totalBill);

// let evenSplit equals totalBill divided by 2
let evenSplit = totalBill / 2;

console.log("So an Even Split would be: ");
console.log(evenSplit);

let person1Owes = evenSplit - person1;
let person2Owes = evenSplit - person2;

// this tells us know the final result
console.log("Person 1 Owes " + person1Owes + " and Person 2 Owes " + person2Owes);

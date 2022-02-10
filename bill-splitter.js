const prompt = require('prompt-sync')();

// This will ask the user how much Person 1 paid, and turn it into a Number data type.
let person1 = Number(prompt("Person 1 Paid This Much: "));

// This will ask the user how much Person 1 paid, and turn it into a Number data type.
let person2 = Number(prompt("Person 2 Paid This Much: "));

// let totalBill equal Person 1 plus Person 2 
let totalBill = person1 + person2;

// this is just to show me what the TotalBill is
console.log("The Total Bill is: ");
console.log(totalBill);

// let evenSplit equals totalBill divided by 2
let evenSplit = totalBill / 2;

console.log("An Even Split Is: ");
console.log(evenSplit);

let person1Owes = evenSplit - person1;
let person2Owes = evenSplit - person2;

// this tells us know the final result
console.log("Person1 Owes" + person1Owes + "and person2 owes" + person2Owes);

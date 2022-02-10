const prompt = require("prompt-sync")();

let correctcode = Number(prompt("Enter Code to Unlock Box"));

if (correctcode === 3210){
    console.log("UNLOCK BOX")
} else {
    console.log("BOX REMAINS LOCKED");
}
/*

A function is generally a named section of 
code that can be "called" by name, and the code inside it will be run each time.



 */



//there is a lot of built in functions 


//general ones that you call when needed
let person = prompt("Please enter your name", "John Doe");

//  alert is one
alert(person);
// so is console.log
console.log(person);









// Function
function printAmount() {
	console.log(amount);
}

//
let amount = 99.99;

//call function
printAmount(); // "99.99"

amount = amount * 2;

//call it once more
printAmount(); // "199.98"


// can be sent arguments

function logMessage(messageToLog) {
	//note that whatever is sent gets the name you out in the arguments
	console.log(messageToLog);
}

let aMessage = "hello there";

logMessage(aMessage);

// function with three arguments
// the sum of the arguments
function getSum(x, y, z) {
	console.log(x + y + z);
}

// what you send dont have to be a variable
getSum(1, 34, 55);


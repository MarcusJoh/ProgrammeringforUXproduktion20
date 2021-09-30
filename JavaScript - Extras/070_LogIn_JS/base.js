//lets try and use it all to do something

// A bacis login function will do

let passSave = "admin";

let passWord = prompt("Enter password please");

//lets make it all lower case
passWord = passWord.toLowerCase();
// test upper case without it

//function to check the password
function checkPass(pass) {
	if (pass == passSave) {
		return true;
	} else {

		return false;
	}

}

// check if the pass is right

if (checkPass(passWord)) {

	console.log("you are in");
	passMessage("you are in");
} else {

	console.log("ACCESS DENIED");
	passMessage("ACCESS DENIED");

}
/*

//a better version of the code above is
let messsage = "";
if (checkPass(passWord)){
messsage="you are in";

}else {

messsage="ACCESS DENIED";

}

console.log(messsage);
passMessage(messsage);
 */
 
 
 
 
 
 
 
 
 
// console is a bit boring so lets make it show up a bit more
//
function passMessage(passStatus) {

	// the document is the html from where this code started in
	document.write(passStatus);

}


// and at last just to be dumb lets go to another page if the pass was right
// also if you use the same code more then once, think about why its not a function
if (checkPass(passWord)) {
window.location.href = "https://lmgtfy.app/?q=access+denied";

}else {
	
	// or if this the pass was wrong, lets reload the whole thing
	location.reload();
}
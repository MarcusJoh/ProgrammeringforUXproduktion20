function postChat() {
	// create a P tag to become the post
	let userPost = document.createElement("P");
	// Get the "userInput" from the form
	let userContent = document.getElementById("userInput").value;

	//set the userInput as content
	let userText = document.createTextNode(userContent);

	// add that text to the P tag
	userPost.appendChild(userText);
	// give the P tag a class
	userPost.classList.add("userPost");

	// get the chatWindow and add the Post to it
	document.getElementById("chatWindow").appendChild(userPost);

	// you can call a function with a timer
	// this calls the function after 4 sec.


	setTimeout(botAnswer, 4000);
	// this calls the function every 4 sec.
	//setInterval(botAnswer, 4000);
}

function botAnswer() {
	//calls the fetchData function here
	fetchData();
}

// this API has lorem ipsum text, but with meat and puns
const fetchUrl = "https://baconipsum.com/api/?type=meat-and-filler";

function fetchData() {
	fetch(fetchUrl).then(response => response.json()).then(data => useTheData(data));

}

// This is just a normal function that has an argument
function useTheData(data) {
	// lets print the data we just sent here.
	console.log(data);
	// this is how it looks
	/*
	(5) ["Cow laboris short ribs nulla in.  Ham flank cillum…in swine doner rump prosciutto aute jowl biltong.", "Consequat pork belly occaecat, ground round landja…oident landjaeger nulla voluptate rump consequat.", "Chislic tenderloin biltong swine chuck laboris sed…ami aliqua ut.  Eiusmod ut tri-tip ut landjaeger.", "Et dolore t-bone, sed excepteur prosciutto sirloin…ge reprehenderit ea drumstick biltong sint doner.", "Turkey pig et ut pork ipsum enim turducken incidid…capicola officia voluptate burgdoggen duis minim."]
	0: "Cow laboris short ribs nulla in.  Ham flank cillum pork loin leberkas.  Meatloaf hamburger ball tip doner, t-bone pancetta est biltong aute qui flank.  Tenderloin swine doner rump prosciutto aute jowl biltong."
	1: "Consequat pork belly occaecat, ground round landjaeger sunt consectetur turkey ham hock do turducken laborum buffalo.  Qui swine corned beef, leberkas incididunt in est alcatra tenderloin fatback ut cupim ham hock.  Ut tenderloin turducken pork chop, aute sunt jerky beef ribs.  Ut alcatra eiusmod ribeye nisi, shank ham strip steak.  Spare ribs pig shank tail.  Jerky tail chicken sirloin salami voluptate enim aute sunt ut in corned beef.  Proident landjaeger nulla voluptate rump consequat."
	2: "Chislic tenderloin biltong swine chuck laboris sed excepteur.  Laborum porchetta bacon flank, capicola beef ribs nisi tri-tip et strip steak ipsum andouille jowl shank kielbasa.  Leberkas cupidatat hamburger aliqua burgdoggen brisket ex tenderloin dolor venison.  Pork chop alcatra cupim ex frankfurter id ad porchetta quis tri-tip.  Cupim landjaeger et, sint anim boudin cupidatat dolore ullamco veniam ground round adipisicing salami aliqua ut.  Eiusmod ut tri-tip ut landjaeger."
	3: "Et dolore t-bone, sed excepteur prosciutto sirloin labore veniam chuck consectetur beef.  Burgdoggen pancetta id aliqua.  Ex shoulder short ribs elit veniam ham hock.  Officia short ribs laborum picanha chislic cow filet mignon magna sausage leberkas pork belly ullamco.  Beef turkey burgdoggen bacon dolor short ribs non dolore tri-tip.  Velit cow cupidatat proident.  Ut pork spare ribs, turkey sausage reprehenderit ea drumstick biltong sint doner."
	4: "Turkey pig et ut pork ipsum enim turducken incididunt.  Sausage pork chop chuck proident ham aliquip bacon exercitation nostrud burgdoggen meatloaf ut commodo pariatur.  Tenderloin est ad jowl, kielbasa ut tongue in brisket velit sed deserunt ball tip qui.  Fugiat sirloin cow dolore.  Hamburger consectetur veniam ham ea biltong bacon rump corned beef aliqua elit.  Do sed lorem turducken ea reprehenderit ball tip.  Cillum irure porchetta meatloaf, laboris laborum capicola officia voluptate burgdoggen duis minim."
	length: 5
	__proto__: Array(0)

	 */

	// its an Array so lets try and get one of then out
	console.log(data[0]);

	//going to be lazy and just use one of them

	//pretty much the same code as the first bot had

	// create a P tag to become the post
	let botPost = document.createElement("P");

	//but now we use the data instead
	let randomText = data[0];

	//set the text as content
	let botText = document.createTextNode(randomText);
	// add that text to the P tag
	botPost.appendChild(botText);
	// give the P tag a class for the bot
	botPost.classList.add("botPost");

	// get the chatWindow and add the Post to it
	document.getElementById("chatWindow").appendChild(botPost);

}

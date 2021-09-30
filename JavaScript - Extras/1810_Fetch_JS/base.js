
// URLs to APIs
const fetchDogUrl = "https://random.dog/woof.json";
const fetchCatUrl = "https://aws.random.cat/meow";
const fetchFoxUrl = "https://randomfox.ca/floof/";



//
//DOG

// while we can use the onclick in the button to call a function
// we can also make an event by getting the tag we can and adding an event to it
// this can be done on pretty much any html tag
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

document.getElementById("dogFetcher").addEventListener("click", function() {
	
	/* fetch is a way to get data from outside the current code and site
	It has a few steps:
	1- fetch("http://example.com/") < this is where the Url goes
	
	2- .then(response => response.json()) < from the Url we get a response, but its not an easy to use format yet, so we convert it into a JSON format.
			-JSON stands for JavaScript Object Notation, so its a format that is meant to be easy to handle 
			-To read more on JSON https://www.w3schools.com/whatis/whatis_json.asp
	
	3- .then(data => useTheDogData(data) < with the data as JSON, we create a variable with the name "data" and call function to send the variable into 

	*/
	fetch(fetchDogUrl).then(response => response.json()).then(data => useTheDogData(data));
});
// you can read more about it here
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch



// This is just a normal function that has an argument 
function useTheDogData(data) {
	// lets print the data we just sent here.
	console.log(data);
	// this is how it looks
	//{fileSizeBytes: 57171, url: "https://random.dog/b8acf898-dc54-4ff3-973b-a0e00e567b8c.jpg"}
	
	// fileSizeBytes is nice to know, nothing we care about 
	// url is what we care about.
	
	// the best thing with JSON in JS, is to get a value out of the JSON you just have to know its name
	// so if we wanted the fileSizeBytes all we need to write is data.fileSizeBytes, and we have it.

	// so lets get that url
	let imgUrl = data.url;
	// print it to make sure its the right thing
	console.log(imgUrl);
	
	// now get a good spot for it and add a src into the html tag. 
	document.getElementById("imgPlace").src = imgUrl;
}

//
//CAT

document.getElementById("catFetcher").addEventListener("click", function() {
	//same thing as before, but with cats now
	fetch(fetchCatUrl).then(response => response.json()).then(data => useTheCatData(data));
});

function useTheCatData(data) {
	// lets print the data we just sent here.
	console.log(data);
	// this is how it looks
	// {file: "https://purr.objects-us-east-1.dream.io/i/WbaUU.jpg"}
	
	// not url this time, its called file here, so lets use it
	let imgUrl = data.file;
	// and print it to make sure
	console.log(imgUrl);
	// into the tag it goes
	document.getElementById("imgPlace").src = imgUrl;
}

//
//FOX

document.getElementById("foxFetcher").addEventListener("click", function() {
	//same thing as before, but with foxes now
	fetch(fetchFoxUrl).then(response => response.json()).then(data => useTheFoxData(data));
});

function useTheFoxData(data) {
	// lets print the data we just sent here.
	console.log(data);
	// this is how it looks
	// {image: "https://randomfox.ca/images/33.jpg", link: "https://randomfox.ca/?i=33"}
	// link can be nice to add, but its not what we need
	
	
	// image is what we want this time, so get it.
	let imgUrl = data.image;
	
	// and print it, just in case..
	console.log(imgUrl);
	
	document.getElementById("imgPlace").src = imgUrl;
}
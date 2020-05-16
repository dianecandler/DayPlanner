// utilizing JQuery - could have defined buttons here but elected to put in HTML for increased stability
$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready

	// Global variable
	var works = false;

	// get times from https://momentjs.com/  CHECK LINKS ARE PRESENT IN HTML
	var now = moment().format('MMMM Do YYYY'); // May 16th, 2020

	// found this https://github.com/gabepettus/DayPlanner/blob/master/script.js

	// test iF non-standard hours - H for 24 hr, h for 12 hr in Moment, using nowH24 or 12 to determine - NEED TEXT BOX SELECTOR?
	// let defines varible only inside the function
	let nowH24 = moment().format('H');
	let nowH12 = moment().format('h');

	// define what is "past" or after hours using "works" variable
	if (works) {
		nowH24 = 13; //available for both 24 hour or 12 hr - nice to have support for either 24 or 12 hr clock
		nowH12 = 1;
	}

	let dateHeading = $('.jumbotron');
	dateHeading.text(now);

	// using font awesome icon https://fontawesome.com/license - NOT MINE
	// change description here - none - NOT MINE - DON'T NEED SINCE MY BUTTONS ARE IN HTML for stability
	// const saveIcon = './images/save-regular.svg'; //this is an image for his save button - add image of my own and test

	// Get stored requests, meetings, input from localStorage
	// Parsing the JSON string to an object - Saving string into an object to store local
	let storedText = JSON.parse(localStorage.getItem('storedPlans'));

	if (works) {
		console.log(storedText);
	}

	// If meetings, input retrieved from localStorage, update the array to match
	if (storedText !== null) {
		planTextArr = storedText;
	}
	else {
		// this should only occur on first time the app is loaded in the browser - used to show as a sample
		planTextArr = new Array(9);
		planTextArr[4] = 'Meet Kelly at Pesky Rabbit';
	}

	if (works) {
		console.log('full array of planned text', planTextArr);
	}
	// still working to add from local working on code file here!!!!
}); //end JQuery here

// moment.locale(); // en
// moment().format('dddd'); // day of the week
// moment().format('MMMM Do YYYY, h:mm:ss a'); // May 16th 2020, 12:59:42 pm
// moment().format('LT'); //1:03pm
// moment().format('MMM Do YY');

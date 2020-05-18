// utilizing JQuery - could have defined buttons here but elected to put in HTML for increased stability
$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready

	// Global variable
	const works = false;
	moment.locale(); // en
	//US local format from https://momentjs.com/
	var now = moment().format('LLLL'); // Monday, May 18, 2020, 12:20:40 am
	console.log(now);

	// test if non-standard hours - H for 24 hr, h for 12 hr in Moment, using nowH24 or 12 to determine - NEED TEXT BOX SELECTOR?
	// 'let' defines varible only inside the function -  DELETE? colors work without this
	let nowH24 = moment().format('H');
	let nowH12 = moment().format('h');

	// define what is "past" or after hours using "works" variable
	if (works) {
		nowH24 = 13;
		nowH12 = 1;
	}
	// Heading date
	let dateHeading = $('#dateAtTop');
	dateHeading.text(now);

	// make variables for time and date
	//make variables for the current date and time
	var rnn = new Date();
	var currentHour = rnn.getHours(); //16>militarytime

	//change the description box color based on time - use 18 military time
	for (var i = 8; i < 18; i++) {
		if (i < currentHour) {
			document.getElementById(i.toString()).classList.add('past');
		}
		else if (i === currentHour) {
			document.getElementById(i.toString()).classList.add('present');
		}
		else if (i > currentHour) {
			document.getElementById(i.toString()).classList.add('future');
		}
		console.log([ currentHour ]);
		//get items stored in local storage
		var s = i.toString();
		{
			document.getElementById(s).value = localStorage.getItem(s);
			console.log([ s ]);
		}
	}

	//function to store text (Console says savetext is not defined)
	function savetext (i) {
		var myText = document.getElementById(i.toString()).value;
		localStorage.setItem(i.toString(), myText);
		console.log([ myText ]);
	}
	// WORKS ABOVE but NO STORAGE

	// Get stored requests, meetings, input from localStorage
	// const works = true; //using this breaks colors
	// Parsing the JSON string to an object - Saving string into an object to store local
	let storedPlans = JSON.parse(localStorage.getItem('storedPlans'));
	if (works) {
		console.log(storedPlans);
	};

	// saves to local storage
	// conclick function to listen for user clicks on plan area
	//   $(document).on('click','i', function(event) {
	//     event.preventDefault();

	//     if (works) { console.log('click pta before '+ planTextArr); }

	//     let $index = $(this).attr('save-id');

	//     let inputId = '#input-'+$index;
	//     let $value = $(inputId).val();

	//     planTextArr[$index] = $value;

	//     if (test) { console.log('value ', $value); }
	//     if (test) { console.log('index ', $index); }
	//     if (test) { console.log('click pta after '+ planTextArr); }  //plainTextArr call pta

		// 	// If plans were retrieved from localStorage, update the plan array to it
	// 	if (storedPlans !== null) {
	// 		pTextArr = storedPlans;
	// 	}
	// 	else {
	// 		// this should only occur on first time the app is loaded in the browser
	// 		// helpfully remind user that lunch is important
	// 		pTextArr = new Array(9);
	// 		pTextArr[4] = 'Meet Kelly Gill';
	// 	}

	// 	if (works) {
	// 		console.log('Got to Pesky Rabbit', pTextArr);
	// 	}

	// 	// set variable referencing planner element
	// 	let planner = $('.col-2 hour'); //changed to "col-2 hour" - NOT SURE, chnged $plannerDiv to planner
	// 	// clear existing elements
	// 	planner.empty();

	// 	if (works) {
	// 		console.log('current time', nowHour12);
	// 	}
});

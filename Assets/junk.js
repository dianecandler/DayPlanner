// help from https://github.com/gabepettus/DayPlanner/blob/master/index.html

// utilizing JQuery - could have defined buttons here but elected to put in HTML for increased stability
$(document).ready(function () {
	console.log( 'ready!' ); //-- inside document function to test JQuery ready

	// Global variable
	const works = false;

// get times from https://momentjs.com/  CHECK LINKS ARE PRESENT IN HTML
	const now = moment().format('MMMM Do YYYY'); // May 16th, 2020


	// test iF non-standard hours - H for 24 hr, h for 12 hr in Moment, using nowH24 or 12 to determine - NEED TEXT BOX SELECTOR?
	// 'let' defines varible only inside the function
	let nowH24 = moment().format('H');
	let nowH12 = moment().format('h');

	// define what is "past" or after hours using "works" variable
	if (works) {
		nowH24 = 13; //available for both 24 hour or 12 hr - nice to have support for either 24 or 12 hr clock
		nowH12 = 1;
	}

	let dateHeading = $('#dateAtTop');
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

	// set variable referencing planner element
	let $plannerDiv = $('#plannerContainer');
	// clear existing elements
	$plannerDiv.empty();

	if (works) {
		console.log('current time', nowH12);
	}

	// build calendar by row for fix set of hours - this time by hour or what I did in HTML to line 145
	for (let hour = 8; hour <= 17; hour++) {
		// index for array use offset from hour
		let index = hour - 9;

		// build row components
		let $rowDiv = $('<div>');//this line storing jq div into varible
		$('<div>').addClass('row');
		$('<div>').addClass('plannerRow');
		$('<div>').attr('hour-index', hour);

		// Start building Time box portion of row
		let $col2TimeDiv = $('<div>');
		$col2TimeDiv.addClass('col-md-2');

		// create timeBox element (contains time)
		const $timeBoxSpn = $('<span>');
		// can use this to get value
		$timeBoxSpn.attr('class', 'timeBox');

		// format hours for display
		let displayHour = 0;
		let ampm = '';
		if (hour > 12) {
			displayHour = hour - 12;
			ampm = 'pm';
		}
		else {
			displayHour = hour;
			ampm = 'am';
		}

		// populate timeBox with time
		$timeBoxSpn.text(`${displayHour} ${ampm}`);

		// insert into col inset into timebox
		$rowDiv.append($col2TimeDiv);
		$col2TimeDiv.append($timeBoxSpn);
		// STOP building Time box portion of row

		// START building input portion of row
		// build row components
		let $dailyPlanSpn = $('<input>');

		$dailyPlanSpn.attr('id', `input-${index}`);
		$dailyPlanSpn.attr('hour-index', index);
		$dailyPlanSpn.attr('type', 'text');
		$dailyPlanSpn.attr('class', 'dailyPlan');

		// access index from data array for hour
		$dailyPlanSpn.val(planTextArr[index]);

		// create col to control width
		let $col9IptDiv = $('<div>');
		$col9IptDiv.addClass('col-md-9');

		// add col width and row component to row
		$rowDiv.append($col9IptDiv);
		$col9IptDiv.append($dailyPlanSpn);
		// STOP building Time box portion of row

		// START building save portion of row
		let $col1SaveDiv = $('<div>');
		$col1SaveDiv.addClass('col-md-1');

		let $saveBtn = $('<i>');
		$saveBtn.attr('id', `saveid-${index}`);
		$saveBtn.attr('save-id', index);
		$saveBtn.attr('class', 'far fa-save saveIcon');

		// add col width and row component to row
		$rowDiv.append($col1SaveDiv);
		$col1SaveDiv.append($saveBtn);
		// STOP building save portion of row

		// set row color based on time
		updateRowColor($rowDiv, hour);

		// add row to planner container
		$plannerDiv.append($rowDiv);
	}

	// function to update row color - used the $ to indicate using JQuery for solution
	function updateRowColor ($hourRow, hour) {
		if (works) {
			console.log('rowColor ', nowH24, hour);
		}

		if (hour < nowH24) {
			// $hourRow.css('')
			if (works) {
				console.log('lessThan');
			}
			$hourRow.css('background-color', 'lightblue');
		}
		else if (hour > nowHour24) {
			if (works) {
				console.log('greaterthan');
			}
			$hourRow.css('background-color', 'lightgreen');
		}
		else {
			if (works) {
				console.log('eqaul');
			}
			$hourRow.css('background-color', 'tomato');
		}
	}

	// saves to local storage
	// conclick function to listen for user clicks on plan area
	$(document).on('click', 'i', function (event) {
		event.preventDefault();

		if (works) {
			console.log('click pta before ' + planTextArr);
		}

		let $index = $(this).attr('save-id');

		let inputId = '#input-' + $index;
		let $value = $(inputId).val();

		planTextArr[$index] = $value;

		// if (works) {
		// 	console.log('value ', $value);
		// }
		// if (works) {
		// 	console.log('index ', $index);
		// }
		// if (works) {
		// 	console.log('click pta after ' + planTextArr);
		}

		// remove shawdow pulse class (targeting save button and storing into local storage moving from value into string)
// for some reason the $ in next line is causing problems so commenting next 2 lines
		// $(`#saveid-${$index}`).removeClass('shadowPulse');
		// localStorage.setItem('storedPlans', JSON.stringify(planTextArr));
	// });
	);

	// function to color save button on CHANGE INPUT
	$(document).on('change', 'input', function (event) {
		event.preventDefault(); //this calls function to change input and prevents browser from default
		if (works) {
			console.log('onChange');
		}
		if (works) {
			console.log('id', $(this).attr('hour-index'));
		}

		// neeed to check for save button
		let i = $(this).attr('hour-index');

		// add shawdow pulse class
		$(`#saveid-${i}`).addClass('shadowPulse');
	})
}


//function to store text - use "saveText(i) and push to storedText"
// function saveText(i) {
//     var storedText = document.getElementById(i.toString()).value;
//     localStorage.setItem(i.toString(), storedText);
// }

// 	if (works) {
// 		console.log(storedText);
// 	}

// If meetings, input retrieved from localStorage, update the array to match
// if (storedText !== null) {
// 	planTextArr = storedText;
// }
// else {
// this should only occur on first time the app is loaded in the browser - used to show as a sample
// 		planTextArr = new Array(9);
// 		planTextArr[4] = 'Meet Kelly at Pesky Rabbit';
// 	}

// 	if (works) {
// 		console.log('full array of planned text', planTextArr);
// 	}

// 	// set variable referencing planner element
// 	let $plannerDiv = $('#plannerContainer');
// 	// clear existing elements
// 	$plannerDiv.empty();

// 	if (works) {
// 		console.log('current time', nowH12);
// 	}

// 	// build calendar by row for fix set of hours - this time by hour or what I did in HTML to line 145
// 	for (let hour = 8; hour <= 17; hour++) {
// 		// index for array use offset from hour
// 		let index = hour - 9;

// 		// build row components
// 		let $rowDiv = $('<div>');//this line storing jq div into varible
// 		$('<div>').addClass('row');
// 		$('<div>').addClass('plannerRow');
// 		$('<div>').attr('hour-index', hour);

// 		// Start building Time box portion of row
// 		let $col2TimeDiv = $('<div>');
// 		$col2TimeDiv.addClass('col-md-2');

// 		// create timeBox element (contains time)
// 		const $timeBoxSpn = $('<span>');
// 		// can use this to get value
// 		$timeBoxSpn.attr('class', 'timeBox');

// 		// format hours for display
// 		let displayHour = 0;
// 		let ampm = '';
// 		if (hour > 12) {
// 			displayHour = hour - 12;
// 			ampm = 'pm';
// 		}
// 		else {
// 			displayHour = hour;
// 			ampm = 'am';
// 		}

// 		// populate timeBox with time
// 		$timeBoxSpn.text(`${displayHour} ${ampm}`);

// 		// insert into col inset into timebox
// 		$rowDiv.append($col2TimeDiv);
// 		$col2TimeDiv.append($timeBoxSpn);
// 		// STOP building Time box portion of row

// 		// START building input portion of row
// 		// build row components
// 		let $dailyPlanSpn = $('<input>');

// 		$dailyPlanSpn.attr('id', `input-${index}`);
// 		$dailyPlanSpn.attr('hour-index', index);
// 		$dailyPlanSpn.attr('type', 'text');
// 		$dailyPlanSpn.attr('class', 'dailyPlan');

// 		// access index from data array for hour
// 		$dailyPlanSpn.val(planTextArr[index]);

// 		// create col to control width
// 		let $col9IptDiv = $('<div>');
// 		$col9IptDiv.addClass('col-md-9');

// 		// add col width and row component to row
// 		$rowDiv.append($col9IptDiv);
// 		$col9IptDiv.append($dailyPlanSpn);
// 		// STOP building Time box portion of row

// 		// START building save portion of row
// 		let $col1SaveDiv = $('<div>');
// 		$col1SaveDiv.addClass('col-md-1');

// 		let $saveBtn = $('<i>');
// 		$saveBtn.attr('id', `saveid-${index}`);
// 		$saveBtn.attr('save-id', index);
// 		$saveBtn.attr('class', 'far fa-save saveIcon');

// 		// add col width and row component to row
// 		$rowDiv.append($col1SaveDiv);
// 		$col1SaveDiv.append($saveBtn);
// 		// STOP building save portion of row

// 		// set row color based on time
// 		updateRowColor($rowDiv, hour);

// 		// add row to planner container
// 		$plannerDiv.append($rowDiv);
// 	}

// 	// function to update row color - used the $ to indicate using JQuery for solution
// 	function updateRowColor ($hourRow, hour) {
// 		if (works) {
// 			console.log('rowColor ', nowH24, hour);
// 		}

// 		if (hour < nowH24) {
// 			// $hourRow.css('')
// 			if (works) {
// 				console.log('lessThan');
// 			}
// 			$hourRow.css('background-color', 'lightblue');
// 		}
// 		else if (hour > nowHour24) {
// 			if (works) {
// 				console.log('greaterthan');
// 			}
// 			$hourRow.css('background-color', 'lightgreen');
// 		}
// 		else {
// 			if (works) {
// 				console.log('eqaul');
// 			}
// 			$hourRow.css('background-color', 'tomato');
// 		}
// 	}

// 	// saves to local storage
// 	// conclick function to listen for user clicks on plan area
// 	$(document).on('click', 'i', function (event) {
// 		event.preventDefault();

// 		if (works) {
// 			console.log('click pta before ' + planTextArr);
// 		}

// 		let $index = $(this).attr('save-id');

// 		let inputId = '#input-' + $index;
// 		let $value = $(inputId).val();

// 		planTextArr[$index] = $value;

// 		// if (works) {
// 		// 	console.log('value ', $value);
// 		// }
// 		// if (works) {
// 		// 	console.log('index ', $index);
// 		// }
// 		// if (works) {
// 		// 	console.log('click pta after ' + planTextArr);
// 		}

// 		// remove shawdow pulse class (targeting save button and storing into local storage moving from value into string)
// // for some reason the $ in next line is causing problems so commenting next 2 lines
// 		// $(`#saveid-${$index}`).removeClass('shadowPulse');
// 		// localStorage.setItem('storedPlans', JSON.stringify(planTextArr));
// 	// });
// 	);

// 	// function to color save button on CHANGE INPUT
// 	$(document).on('change', 'input', function (event) {
// 		event.preventDefault(); //this calls function to change input and prevents browser from default
// 		if (works) {
// 			console.log('onChange');
// 		}
// 		if (works) {
// 			console.log('id', $(this).attr('hour-index'));
// 		}

// 		// neeed to check for save button
// 		let i = $(this).attr('hour-index');

// 		// add shawdow pulse class
// 		$(`#saveid-${i}`).addClass('shadowPulse')
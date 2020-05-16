// utilizing JQuery

// confirm document is ready JQuery, below is short hand for the following:
// $( document ).ready(function() {
//     console.log( 'ready!' );
//   });
$(function () {
	console.log('ready!');
});

$(document).ready(function () {
	//run JQuery once HTML loaded
mmoment("#currentDay").format('dddd', +', ','MMMM Do YYYY, h:mm:ss a'
	// $('#currentDay'); //.? for date/time in top of page
	// event listeners examples
	// 	$('#remaining-time').hide();
	// 	$('#start').on('click', quiz.startGame);
	// 	$(document).on('click', '.option', quiz.checkAnswers);

	// moment.locale(); // en
	// moment().format('dddd'); // day of the week
	// moment().format('MMMM Do YYYY, h:mm:ss a'); // May 16th 2020, 12:59:42 pm
	// moment().format('LT'); //1:03pm
	// moment().format('MMM Do YY');
	// define months here
}); //end JQuery here

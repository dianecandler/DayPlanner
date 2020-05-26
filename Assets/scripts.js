$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready
	// utilizing JQuery - could have defined buttons here but elected to put in HTML for increased stability

	var works = false;
	var now = moment().format('LLLL'); // Monday, May 18, 2020, 12:20:40 am
	console.log(now);

	let nowH24 = moment().format('H'); //text if non-standard hours; H for 24 hr, h for 12 hr in Moment
	let nowH12 = moment().format('h');
	if (works) {
		//define what is "past" or after hours using "works" variable
		nowH24 = 13;
		nowH12 = 1;
	}

	// add heading date
	let dateHeading = $('#dateAtTop');
	dateHeading.text(now);

	var rnn = new Date(); //create varibles for the current date and time
	var currentHour = rnn.getHours(); //16>militarytime

	//change the description box color based on time - Present, Past Future
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
	}

	//get items stored in local storage
	var s = i.toString(currentHour);
	{
		$('.saveBtn').click(function () {
			// alert('The paragraph was clicked.'); //alert to check function
			var h8 = document.getElementById('8').value;
			localStorage.setItem('text8', h8);
			var h9 = document.getElementById('9').value;
			localStorage.setItem('text9', h9);
			var h10 = document.getElementById('10').value;
			localStorage.setItem('text10', h10);
			var h11 = document.getElementById('11').value;
			localStorage.setItem('text11', h11);
			var h12 = document.getElementById('12').value;
			localStorage.setItem('text12', h12);
			var h13 = document.getElementById('13').value;
			localStorage.setItem('text13', h13);
			var h14 = document.getElementById('14').value;
			localStorage.setItem('text14', h14);
			var h15 = document.getElementById('15').value;
			localStorage.setItem('text15', h15);
			var h16 = document.getElementById('16').value;
			localStorage.setItem('text16', h16);
			var h17 = document.getElementById('17').value;
			localStorage.setItem('text17', h17);
			console.log(h17);
		});
	}

	// displaying persistent local storage on the page

	var s8 = localStorage.getItem('text8');
	document.getElementById('8').value = s8;
	var s9 = localStorage.getItem('text9');
	document.getElementById('9').value = s9;
	var s10 = localStorage.getItem('text10');
	document.getElementById('10').value = s10;
	var s11 = localStorage.getItem('text11');
	document.getElementById('11').value = s11;
	var s12 = localStorage.getItem('text12');
	document.getElementById('12').value = s12;
	var s13 = localStorage.getItem('text13');
	document.getElementById('13').value = s13;
	var s14 = localStorage.getItem('text14');
	document.getElementById('14').value = s14;
	var s15 = localStorage.getItem('text15');
	document.getElementById('15').value = s15;
	var s16 = localStorage.getItem('text16');
	document.getElementById('16').value = s16;
	var s17 = localStorage.getItem('text17');
	document.getElementById('17').value = s17;

	// Create a clear data button - nice to have
});

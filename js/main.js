// JS by Mike Biehl, 2020
// test change
//initialize function called when the script loads
function initialize(){
	cities();
}; //this creates a new function named ' initialize' that is nested with the 'cities' function

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

function addColumns(cityPop){

    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>'); //corrected misspelling of 'append' method
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium'; //'citySize' was not in camelcase

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td.>' + citySize + '</td>'); //added end sign to correct opening tag for td and added parentheses to 'this' syntax
    	};
    });
};
// ^deleted unnecessary parentheses

function clickMe(){ // changed syntax to camelcase
	alert('Hey, you clicked me!');
}; // moved this outside of the add events function

function addEvents(){

	$('table').mouseover(function(){ //deleted unnecessary hashtag in front of table

		var color = "rgb(";
// variable created named color
		for (var i = 0; i < 3; i++){

			var random = Math.round(Math.random() * 255); //changed 'math' to 'Math'
// random method to randomly multiply a number by 255 to input into the rgb scale
			color += random;

			if (i < 2){
				color += ",";
// the if function here operates until the 3 number rgb color is fully stocked
			} else {
				color += ")";
		};
// it ends when i is equal to three, then the color variable is closed with a parentheses
		$(this).css('color', color);
	};
// the this function is used to add the new randomized rgb color to the table with css a styling method

// clickMe function sends a default browser alert when table is clicked
	console.log("on");


});
$('table').on('click', clickMe);
// moved outside of the mouseover function to prevent loop, but within the addEvents function
}; // << 1. added end parentheses to a list, 2. Added closing curly brackets to the addEvents function

//call the initialize function when the document has loaded
$(document).ready(initialize);

// beginning of Activity 3 Code

function jsAjax(){
    // Step 1: Create the request
    var ajaxRequest = new XMLHttpRequest();

    //Step 2: Create an event handler to send received data to a callback function
    ajaxRequest.onreadystatechange = function(){
        if (ajaxRequest.readyState == 4){
            callback(ajaxRequest.response);
        };
    };

    //Step 3: Open the server connection
    ajaxRequest.open('GET', 'data/MegaCities.geojson', true);

    //Step 4: Set the response data type
    ajaxRequest.responseType = "json";

    //Step 5: Send the request
    ajaxRequest.send();
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(JSON.stringify(response));
};

// BEGINNING of week 2 assignment
function debugCallback(response){
	//console.log(response)
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(response));// changed "mydata" to 'response' since mydata is undefined still, and also a local variable
};

function debugAjax(){

	var mydata;

	$.ajax("../data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){ //success is an argument saying to not execute the rest of the code until the ajax request is fulfilled
			mydata = response;
			//console.log(mydata)
			debugCallback(mydata);//moved this function call inside of variable parameters because "mydata" can only be locally referenced
		}
	});
	// console.log(JSON.stringify(mydata))
	// console.log(mydata)
	// $(mydiv).append('<br>GeoJSON data:</br>' + JSON.stringify(mydata));
	// $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
	// ^^ these are just test lines to indicate when mydata is an undefined json object that cannot be printed
};
debugAjax();

















// hiip (these are test comments)
// hiii

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

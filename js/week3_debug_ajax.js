function debugCallback(response){

	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){

	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			mydata = response;
			console.log(mydata)
		}
	});
	debugCallback(mydata); //moved this function call outside of variable parameters so that data can be received first

	$(mydiv).append('<br>GeoJSON data:</br>' + JSON.stringify(mydata));
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
	//^moved this line back into the function so it can use the mydata variable
};

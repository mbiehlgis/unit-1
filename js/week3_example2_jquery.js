//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: callback
    });
};

//define callback function
function callback(response, status, jqXHRobject){
    //tasks using the data go here
    console.log(response);
};

$(document).ready(jQueryAjax);


// Example 2.6: jQuery AJAX alias methods that could be used in main.js
//jQuery.get() method...Example 2.5 line 3
$.get("data/MegaCities.geojson", callback, "json");

//jQuery.getJSON() method...Example 2.5 line 3
$.getJSON("data/MegaCities.geojson", callback);

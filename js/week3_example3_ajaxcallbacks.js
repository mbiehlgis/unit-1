//an AJAX function
function jQueryAjax(){
    var mydata = $.ajax("data/MegaCities.geojson", {
        dataType: "json"
    });
    return mydata;
};

var mydata = jQueryAjax();

console.log(mydata); //the jQuery XMLHttpRequest object
//^^ Running this will only display the full XMLHttpRequest object, not the JSON data
//^^ the response.json property holds our data, however...

// logging responseJSON directly doesnt work either
console.log(mydata.responseJSON);
// the open() method is still contained in this shortcut, which means

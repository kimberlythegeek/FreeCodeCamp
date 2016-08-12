var api_url = "http://api.openweathermap.org/data/2.5/weather";
var key1 = "cc6c04231d28a4b46874430579930f03";
var key2 = "79d177f71b0c4ac22658f36fcfeee67a";
var key3 = "439e66a85f6226dd18c2e58f01d30e8c";
var city = "Oxford,MS";
var units = "imperial";
var unit_type = "Fahrenheit";
var position = {
  "coords":{"longitude":-89.52,"latitude":34.37}
};
var myURL = api_url + "?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + key3 + "&units=" + units;

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocalWeather);
  } else {
    alert("geolocation not supported");
}

function getLocalWeather(current){
  position = current;
  myURL = api_url + "?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + key3 + "&units=" + units;
  showWeather(myURL);
}

function showWeather(myURL){
  $.ajax({
    url : myURL,
    dataType : "jsonp",
    success : function(json) {
      $("#city").html(json.name + ", " + json.sys.country);
      $("#temp").html(json.main.temp + "&deg; " + unit_type);
      $("#description").html(json.weather[0].main + '<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png">');
    }
  });
}

$(document).ready(function(){

  showWeather(myURL);

  $(".locate").on("click", function(){
    getLocation();
  });

  $('.dropdown-toggle').dropdown();

  $("#imperial").on("click", function() {
    units = "imperial";
    unit_type = "Fahrenheit";

    $(".btn-text").text($(this).text());
    $(".btn-text").val($(this).text());

    var myURL = api_url + "?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + key3 + "&units=" + units;
    showWeather(myURL);
  });
  $("#metric").on("click", function() {
    units = "metric";
    unit_type = "Celsius";

    $(".btn-text").text($(this).text());
    $(".btn-text").val($(this).text());

    var myURL = api_url + "?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + key3 + "&units=" + units;
    showWeather(myURL);
  });
  $("#standard").on("click", function() {
    units = "";
    unit_type = "Kelvin";

    $(".btn-text").text($(this).text());
    $(".btn-text").val($(this).text());

    var myURL = api_url + "?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + key3 + "&units=" + units;
    showWeather(myURL);
  });
});

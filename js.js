var placeToGoArr = [];

//app will pick a random restaurants from an array of restaurants
var restaurants = ["chinese", "japaneses", "burgers", "sandwiches"];

function pickRestaurant() {
    placeToGoArr = [];
    var placeToGo = restaurants[Math.floor(Math.random() * restaurants.length)];
    placeToGoArr.push(placeToGo);
    document.getElementById("placeToGo").innerHTML = "Place to go: " + placeToGoArr;
};

function result() {
    var placeValue = document.getElementById("txtInput").value;
       console.log("The place=" + (placeValue));
       restaurants.push(placeValue);
       console.log(restaurants);
 }
//Button 
document.getElementById("clickMe").onclick = function () { pickRestaurant(); };

//add restaurants

//remove restaurants

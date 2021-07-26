var placeToGoArr = [];
//app will pick a random restaurants from an array of restaurants
var restaurants = ["chinese", "japaneses", "burgers", "sandwiches"];

function pickRestaurant() {
    var placeToGo = restaurants[Math.floor(Math.random() * restaurants.length)];
    placeToGoArr.push(placeToGo);
console.log(placeToGo);
console.log(placeToGoArr);

};

function addRestaurant() {

};

pickRestaurant();

//populate index with html 
document.getElementById("placeToGo").innerHTML = "Place to go: " + placeToGoArr;
//add restaurants
//remove restaurants

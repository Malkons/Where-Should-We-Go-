var placeToGoArr = [];

//app will pick a random restaurants from an array of restaurants
var restaurants = ["chinese", "japaneses", "burgers", "sandwiches"];

function pickRestaurant() {
    placeToGoArr = [];
    var placeToGo = restaurants[Math.floor(Math.random() * restaurants.length)];
    placeToGoArr.push(placeToGo);
    document.getElementById("placeToGo").innerHTML = "Place to go: " + placeToGoArr;
    console.log(placeToGo);
    console.log(placeToGoArr);
};



//pickRestaurant();

//populate index with html 
document.getElementById("clickMe").onclick = function () { pickRestaurant(); };



//add restaurants
//remove restaurants

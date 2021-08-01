var placeToGoArr = [];

var restaurants = ["chinese", "japaneses", "burgers", "sandwiches"];
///////////////////////////////////////////////FUNCTIONS/////////////////////////////////////////////////////
//Pick a restaurant at random 
function pickRestaurant() {
    placeToGoArr = [];
    var placeToGo = restaurants[Math.floor(Math.random() * restaurants.length)];
    placeToGoArr.push(placeToGo);
    document.getElementById("placeToGo").innerHTML = "Place to go: " + placeToGoArr;
};

//add restaurants
function addRestaurant() {
    var placeValue = document.getElementById("txtInput").value;
    console.log("The place=" + (placeValue));
    restaurants.push(placeValue);
    showRestaurants();
    console.log(restaurants);
};

//Print restaurant array to the DOM
function showRestaurants() {
    var results = "";
    restaurants.forEach(function (item) {
        results += "<li>" + item + " " + "<input type='button' onclick='deleteRestaurant()' value='Delete' /></li>"
    });
    document.getElementById("restaurantList").innerHTML = results;
};

//remove restaurants
function deleteRestaurant() {
    
};
showRestaurants();


///////////////////////////////////////////////BUTTONS/////////////////////////////////////////////////////
//clickme Button tied to the pickrestaurant function
document.getElementById("clickMe").onclick = function () { pickRestaurant(); };





var placeToGoArr = [];
var list = document.getElementById("restaurantList");
var lastid = 0;

var restaurants = ["chinese", "japaneses", "burgers", "sandwiches"];
///////////////////////////////////////////////FUNCTIONS/////////////////////////////////////////////////////
//Pick a restaurant at random 
function pickRestaurant() {
    placeToGoArr = [];
    var placeToGo = restaurants[Math.floor(Math.random() * restaurants.length)];
    placeToGoArr.push(placeToGo);
    document.getElementById("pickedPlaceToGo").innerHTML = "Place to go: " + placeToGoArr;
};

function preLoadPlaces() {
    var placeToGo = restaurants
    for (var i = 0; i < 4; i++) {
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(placeToGo[i]));
        entry.setAttribute("id", "item" + lastid);
        entry.setAttribute("data-name", placeToGo[i]);
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("delete"));
        deleteButton.setAttribute('onClick', 'deletePlace("' + 'item' + lastid + '")');
        entry.appendChild(deleteButton);
        lastid += 1;
        list.appendChild(entry);
    };
};

function populateListOfPlaces() {
    var placeToGo = document.getElementById("placeToGo").value;
    restaurants.push(placeToGo);
    console.log(restaurants);
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(placeToGo));
    entry.setAttribute("id", "item" + lastid);
    entry.setAttribute("data-name", placeToGo);
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("delete"));
    deleteButton.setAttribute('onClick', 'deletePlace("' + 'item' + lastid + '")');
    entry.appendChild(deleteButton);
    lastid += 1;
    list.appendChild(entry);
};

function deletePlace(itemid) {
    var item = document.getElementById(itemid);
    console.log(itemid);
    list.removeChild(item);
    console.log("what is " + item.dataset.name);
    var place = item.dataset.name;
    console.log(place);
    restaurants = restaurants.filter(e => e !== place);
    console.log(restaurants);
};

function getPlaces() {
    var places = [];
    for (var i = 0; i < list.children.length; i++) {
        places.push(list.children[i].getAttribute("data-name"));//get previously set attribute and add to array
    }
    return places;
};

preLoadPlaces();
//add restaurants
// function addRestaurant() {
//     var placeValue = document.getElementById("txtInput").value;
//     console.log("The place=" + (placeValue));
//     restaurants.push(placeValue);
//     showRestaurants();
//     console.log(restaurants);
// };

// //Print restaurant array to the DOM
// function showRestaurants() {
//     var results = "";
//     restaurants.forEach(function (item) {
//         results += "<li>" + item + " " + "<input type='button' onclick='deleteRestaurant( " + item + " )' value='Delete' /></li>"
//     });
//     document.getElementById("restaurantList").innerHTML = results;
// };

// //remove restaurants
// function deleteRestaurant() {

// };
// showRestaurants();


///////////////////////////////////////////////BUTTONS/////////////////////////////////////////////////////
//clickme Button tied to the pickrestaurant function
//document.getElementById("clickMe").onclick = function () { pickRestaurant(); };





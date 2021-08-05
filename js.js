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
    list.removeChild(item);
    var place = item.dataset.name;
    console.log(place);
    restaurants = restaurants.filter(e => e !== place);
    console.log(restaurants);
};

preLoadPlaces();






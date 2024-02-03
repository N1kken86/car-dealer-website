// for navigation tab switching on individual vehicle page
// reference: w3schools
function openTab(tab) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}

// constructor class for a vehicle
class vehicle {
    constructor(condition, make, model, year) {
        this.condition = condition;
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// store the last visited vehicle information in localStorage
function updateLastVehicle(condition, make, model, year) {
    localStorage.setItem("condition", condition);
    localStorage.setItem("make", make);
    localStorage.setItem("model", model);
    localStorage.setItem("year", year);
}

// initiate variables for vehicle
var condition = localStorage.getItem("condition");
var make = localStorage.getItem("make");
var model = localStorage.getItem("model");
var year = localStorage.getItem("year");
var lastVehicle = new vehicle(condition, make, model, year);

// fill the data on Quote Page
function popData() {
    if (lastVehicle.condition == "used") {
        document.getElementById("used").selected = true;
    }

    document.getElementById(lastVehicle.make).selected = true;

    document.getElementById("model").value = lastVehicle.model;

    document.getElementById("year").value = lastVehicle.year;

    // clear localStorage memory
    localStorage.removeItem("condition");
    localStorage.removeItem("make");
    localStorage.removeItem("model");
    localStorage.removeItem("year");
}
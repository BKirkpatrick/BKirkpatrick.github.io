var today = new Date();
var thisHour = today.getHours();

//document.body.style.backgroundColor = "rgb(60, 25, 120)";

if (thisHour < 4) {
    document.body.style.backgroundColor = "rgb(10, 10, 70)";
} else if (thisHour < 10) {
    document.body.style.backgroundColor = "rgb(25, 25, 100)";
} else if (thisHour < 13) {
    document.body.style.backgroundColor = "rgb(55, 55, 205)";
} else if (thisHour < 17) {
    document.body.style.backgroundColor = "rgb(60, 40, 145)";
} else if (thisHour < 20) {
    document.body.style.backgroundColor = "rgb(40, 25, 95)";
} else {
    document.body.style.backgroundColor = "rgb(10, 10, 70)";
}


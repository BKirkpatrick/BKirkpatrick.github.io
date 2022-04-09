var today = new Date();
var thisHour = today.getHours();
var thisMin = today.getMinutes();
var thisSec = today.getSeconds();
var greeting;

greeting = '<h3>' + 'The time is ' + thisHour + ':' + thisMin + ':' + thisSec + '</h3>'

document.write(greeting);

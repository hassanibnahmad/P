let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(() => {
let timeNow = new Date();

hrs.innerHTML = (timeNow.getHours() < 10 ? "0" : "") + timeNow.getHours();
min.innerHTML = (timeNow.getMinutes() < 10 ? "0" : "") + timeNow.getMinutes();
sec.innerHTML = (timeNow.getSeconds() < 10 ? "0" : "") + timeNow.getSeconds();

}, 1000)


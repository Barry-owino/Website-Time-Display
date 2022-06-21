const time = document.getElementById("current-time");

let d = new Date();
time.innerHTML = d.toLocaleTimeString();
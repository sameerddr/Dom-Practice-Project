var clock = setInterval(clockTiming, 1000);

function clockTiming() {

    var date = new Date();
    var sameer = date.toLocaleTimeString();
    document.getElementById("showclock").innerHTML = sameer;
}
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    buscaMasProxima(myArrayParadas,position.coords.latitude,position.coords.longitude);
}




function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<p>' + arr[i].name + ' coords: ' +
        arr[i].serveis + '</p><br>';
    }
    document.getElementById("id01").innerHTML = out;
}


function getDistance(p1, p2) {
  var dLat = Math.abs(p2.lat - p1.lat);
  var dLong = Math.abs(p2.lng - p1.lng);
  var a = Math.sqrt(dLat * dLat  + dLong * dLong) ;
  return a; // returns the distance in meter
};
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

function buscaMasProxima(arr,cordX,cordY) {
   
    var p1 = {name:"Mypos", lat:cordX, lng:cordY};
    var p2 = {name:"Default", lat:50, lng:50};
    
    var out,supp = "";
    var i;
    var parprox=[0,0,supp];
    var difpos=getDistance(p1,p2);

    for(i = 0; i < arr.length; i++) {
         
        p2.name=arr[i].name;
        p2.lat=arr[i].latitut;
        p2.lng=arr[i].longitud;
        var difposanalitzada=getDistance(p1,p2);

                if(difposanalitzada<=difpos){
                    
                    parprox[0]=arr[i].latitut;
                    parprox[1]=arr[i].longitud;
                    parprox[2]=arr[i].name;
                    //alert("Nombre: "+arr[i].name+" difpos "+difpos+" difposanalaitzada "+difposanalitzada);
                    difpos=difposanalitzada;
                }
        }
        
        out='La parada más proxima es: '+parprox[2]+'<br> Y esta a una distancia de: '+difpos+'<br> Aperoximadamente: '+difpos*100000+' metros';
    
    document.getElementById("id01").innerHTML = out;
    
}
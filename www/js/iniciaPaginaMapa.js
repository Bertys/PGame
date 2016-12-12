var latiPropia; 
var longiPropia;
                     
function iniciaPaginaMapa(){
   
    var onSuccess = function(position) {

            /*alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');*/
    latiPropia=position.coords.latitude;
    longiPropia=position.coords.longitude;
    initMapMeu(latiPropia,longiPropia);
    };


        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }


    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

////////////////////////////////////////////////////////////////////////
function matrand(){
var matnum=Math.floor(Math.random() * 6) + 1;
return matnum;
}
var icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAC9FBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7FRQ7AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAbroAAG66AdbesRcAAAAHdElNRQfgCx4LKx6drI90AAAAPElEQVQoz2NgIBv8RgaYMkg0cXqQ2PSRIcFt1JVBCiGiZUi3B0nuAkbcYQ8CZAHc8XMHTeYdA64gJQUAAPmDp1MGEJ1OAAAAAElFTkSuQmCC';

var myMap;

function initMapMeu(latitud,longitud) {
    

    $('#mapcanvas').css('height', $('.ons-page-inner:last').height() + 250);
  // Define a div tag with id="map_canvas"
var mapDiv = document.getElementById("mapcanvas");
  // Initialize the map plugin
myMap = plugin.google.maps.Map.getMap(mapDiv);
  // You have to wait the MAP_READY event.
  myMap.on(plugin.google.maps.event.MAP_READY, onMapInitMeu);
    // Wait until the map is ready status.
  myMap.addEventListener(plugin.google.maps.event.MAP_READY, onMapReadyMeu); 
}
/*$("#clearBtn").click(function() {
  myMap.clear();
  myMap.off();
  myMap.trigger("test");
});*/
var arrAux=[];
var aux, name, k, auxlat, auxlong;
var winner;
/*$("#mesProxima").click(function() {
nombreArxivoLinia=myArrayParadasz1;
winner=getDistance(nombreArxivoLinia[0]['latitut'],nombreArxivoLinia[0]['longitud']);
    
        for (k = 0; k<nombreArxivoLinia.length; k++) {
        aux=getDistance(nombreArxivoLinia[k]['latitut'],nombreArxivoLinia[k]['longitud']);

            if(aux<=winner){
        auxlat=nombreArxivoLinia[k]['latitut'];
        auxlong=nombreArxivoLinia[k]['longitud'];
        name=nombreArxivoLinia[k]['name'];
        winner=winner*100000;
        myMap.animateCamera({
                  target: {
                    lat: nombreArxivoLinia[0]['latitut'],
                    lng: nombreArxivoLinia[0]['longitud']
                  },
                  zoom: 14
                });
                
            }
        }
    var currentPos= new plugin.google.maps.LatLng(auxlat,auxlong);
                myMap.addMarker({
                  'position': currentPos,
                  'title': name,
                    'snippet': "Parada més propera!"
                }, function(marker) {
                  marker.showInfoWindow();
                });


    document.getElementById("result").innerHTML='La parada més propera és: '+name+' i està a '+winner+'m de distàcia.';
});*/
function getDistance(lati, longi) {
  var dLat = Math.abs(lati - latiPropia);
  var dLong = Math.abs(longi - longiPropia);
  var a = Math.sqrt(dLat * dLat  + dLong * dLong) ;
  return a; // returns the distance in meter
}
function onMapInitMeu(map) {
// Move to the position with animation
document.getElementById("pageMain").style.backgroundColor = "none";
map.setBackgroundColor("#0b5f7c");
  map.animateCamera({
  target: {
    lat: latiPropia,
    lng: longiPropia
  },
  zoom: 15
}, function() {
      var currentPos= new plugin.google.maps.LatLng(latiPropia,longiPropia);
      map.addMarker({
      'position': currentPos,
      'title': "Estas aquí!"
    }, function(marker) {

      marker.showInfoWindow();

    });

      });
}

function cargaRutaRand(arrIni){
    nombreArxivoLinia=arrIni;
        var arrMeva=[];
        for (var k = 0; k<nombreArxivoLinia.length; k++) {
          //alert("entra for ");
          
          var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[k]['latitut'],nombreArxivoLinia[k]['longitud']);
            arrMeva[k]=currentPos;
        }
}
/*const GORYOKAKU_POINTS = [
      new plugin.google.maps.LatLng(41.79883, 140.75675),
      new plugin.google.maps.LatLng(41.799240000000005, 140.75875000000002),
      new plugin.google.maps.LatLng(41.797650000000004, 140.75905),
      new plugin.google.maps.LatLng(41.79637, 140.76018000000002),
      new plugin.google.maps.LatLng(41.79567, 140.75845),
      new plugin.google.maps.LatLng(41.794470000000004, 140.75714000000002),
      new plugin.google.maps.LatLng(41.795010000000005, 140.75611),
      new plugin.google.maps.LatLng(41.79477000000001, 140.75484),
      new plugin.google.maps.LatLng(41.79576, 140.75475),
      new plugin.google.maps.LatLng(41.796150000000004, 140.75364000000002),
      new plugin.google.maps.LatLng(41.79744, 140.75454000000002),
      new plugin.google.maps.LatLng(41.79909000000001, 140.75465),
      new plugin.google.maps.LatLng(41.79883, 140.75673)
    ];
function myStopFunction() {
    clearInterval(myVar);
}*/




function onMapReadyMeu(map){
   
    var arrMeu=[];
    
  /*  var dmonth = new Date(month);
    var dday = new Date(day);
    var dhours = new Date(hours);
    var dminutes = new Date(minutes);
    //var mitiempo = dday.toLocaleTimeString()+'/'+dmonth.toLocaleTimeString()+' '+dhours.toLocaleTimeString()+':'+dminutes.toLocaleTimeString();
    alert(dminutes);*/
    var d = new Date();
    var mitiempo = d.toLocaleTimeString();
    var i,j,k;
    if (paradaOrigen<paradaFinal) {
        

        for(i=paradaOrigen; i<=paradaFinal; i++) {

            var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[i]['latitut'],nombreArxivoLinia[i]['longitud']);
            map.addMarker({
                position: currentPos,
                icon:icon,
                map: map,
                title: [nombreArxivoLinia[i]['name']].join("\n"),
                'snippet': ["Proper tren: "].join(mitiempo)
            }, function(marker) {
              marker.showInfoWindow();
            });
                //arrMeu[i]=currentPos;
    } 

    }else if(paradaOrigen>paradaFinal){

        for(j=paradaOrigen; j>=paradaFinal; j--) {

            var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[j]['latitut'],nombreArxivoLinia[j]['longitud']);
            map.addMarker({
                position: currentPos,
                icon:icon,
                map: map,
                title: [nombreArxivoLinia[j]['name']].join("\n"),
                'snippet': ["Proper tren: "].join(mitiempo)
            }, function(marker) {
              marker.showInfoWindow();
            });
                //arrMeu[i]=currentPos;
        }
    }else{
        var varaux='R1:'+matrand()+'min, '+(matrand()+5)+'min, '+(matrand()+5)+'min';
        varaux+='\n';
        varaux+='S5 '+matrand()+'min, '+(matrand()+10)+'min, '+(matrand()+20)+'min';
        varaux+='\n';
        varaux+='S55 '+matrand()+'min, '+(matrand()+10)+'min, '+(matrand()+20)+'min';
        nombreArxivoLinia=myArrayParadasz1;
        for (k = 0; k<nombreArxivoLinia.length; k++) {
          //alert("entra for ");
          
            var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[k]['latitut'],nombreArxivoLinia[k]['longitud']);
            map.addMarker({
                position: currentPos,
                icon:icon,
                map: map,
                title: [nombreArxivoLinia[k]['name']].join("\n"),
                'snippet': varaux
            }, function(marker) {
              marker.showInfoWindow();
            
            });
                //arrMeu[i]=currentPos;
            
        }
        map.animateCamera({
                  target: {
                    lat: nombreArxivoLinia[0]['latitut'],
                    lng: nombreArxivoLinia[0]['longitud']
                  },
                  zoom: 12
                }); 
    }
}
        /*map.addPolygon({
          'points': GORYOKAKU_POINTS,
          'strokeColor' : '#AA00FF',
          'strokeWidth': 5,
          'fillColor' : '#880000'
        }, function(polygon) {
          map.animateCamera({
            'target': polygon.getPoints()
          });
        });*/
/*map.animateCamera({
  target: {
    lat: nombreArxivoLinia[0]['latitut'],
    lng: nombreArxivoLinia[0]['longitud']
  },
  zoom: 10
});*/
function iniciaPaginaRuta() {
    
    //alert('linia: '+linia+'sublinia: '+sublinia+'paradaOrigen: '+paradaOrigen+'paradaFinal: '+paradaFinal);

    //alert(paradaOrigen+' '+paradaFinal);
    
    var outas = "";
    var i,j;
    if (paradaOrigen<paradaFinal) {
        

        for(i=paradaOrigen; i<=paradaFinal; i++) {
        outas += nombreArxivoLinia[i].name + '</br>';
        } 
    }else if(paradaOrigen>paradaFinal){

        for(j=paradaOrigen; j>=paradaFinal; j--) {

        outas += nombreArxivoLinia[j].name + '</br>';
        }
    }else{
        outas +='La parada de inicio es igual a la parada de destino.';
    }
    document.getElementById("rutaParadas").innerHTML = outas;
}

////////////////////////////////////////////////////////////////////////

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

var icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADlSURBVDhPrZFBDsIwDARDn8AZbvT/D+LIGb4AbKQNU8chFWKkyom9WTtNeb65ny71y4j5mW4pf+BxXsvxdq3rZqiECoTCET7j+POEMrAJmx50b05ikcimY51YO5yQZjbJmilSO73yyGw06cZQInfUOh7yJNZlNMNvIjahKaPQunsUQZGwmYmmpLuyRVkD5iKuba5Msu4k08t0+soZ0YyTd4Yq+suIee8V1Whht8yEOWnjdHFfJ9ShaGahImteR71QbskKNFHkno0yun/owzxI8xnpK7P7HhPSDGXCacQeM2k+A5TyAv9a7u0qyPyGAAAAAElFTkSuQmCC';//base64


var myMap;
var latPropia; 
var longPropia;
function initMapMeu(latitud,longitud) {
    
    latPropia=latitud; 
    longPropia=longitud;
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
$("#clearBtn").click(function() {
  myMap.clear();
  myMap.off();
  myMap.trigger("test");
});


function onMapInitMeu(map) {
// Move to the position with animation
  map.animateCamera({
  target: {
    lat: latPropia,
    lng: longPropia
  },
  zoom: 15
}, function() {
      
      });
}
const GORYOKAKU_POINTS = [
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
function onMapReadyMeu(map){
   
    var arrMeu=[];

    var i,j;
    if (paradaOrigen<paradaFinal) {
        

        for(i=paradaOrigen; i<=paradaFinal; i++) {

            var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[i]['latitut'],nombreArxivoLinia[i]['longitud']);
            map.addMarker({
                position: currentPos,
                icon:icon,
                map: map,
                title: nombreArxivoLinia[i]['name']
            }, function(marker) {

              marker.showInfoWindow();

            });

                arrMeu[i]=currentPos;


                map.addPolygon({
          'points': GORYOKAKU_POINTS,
          'strokeColor' : '#AA00FF',
          'strokeWidth': 5,
          'fillColor' : '#880000'
        }, function(polygon) {
          map.animateCamera({
            'target': polygon.getPoints()
          });
        });

    } 
    }else if(paradaOrigen>paradaFinal){

        for(j=paradaOrigen; j>=paradaFinal; j--) {

            var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[j]['latitut'],nombreArxivoLinia[j]['longitud']);
            map.addMarker({
            position: currentPos,
            icon:icon,
            map: map,
            title: nombreArxivoLinia[i]['name']
            }, function(marker) {

              marker.showInfoWindow();

            });
        }
    }else{
        nombreArxivoLinia=myArrayParadasz1;
        for (var k = 0; k<nombreArxivoLinia.length; k++) {
          //alert("entra for ");
          if(nombreArxivoLinia[k].icon==1){
              var currentIcon=icon;
          }else if(nombreArxivoLinia[k].icon==2){
              var currentIcon=icon;
          } 
          var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[k]['latitut'],nombreArxivoLinia[k]['longitud']);
          map.addMarker({
            position: currentPos,
            icon:icon,
            map: map,
            title: nombreArxivoLinia[K]['name']
    }, function(marker) {

      marker.showInfoWindow();

    });
        }
    }
}
function iniciaPaginaRuta() {
    
    //alert('linia: '+linia+'sublinia: '+sublinia+'paradaOrigen: '+paradaOrigen+'paradaFinal: '+paradaFinal);

    //alert(paradaOrigen+' '+paradaFinal);
    
    var outas = "";
    var foutas ="";
    var i,j;
    if (paradaOrigen<paradaFinal) {
        
        outas += '<div>'+nombreArxivoLinia[paradaOrigen].name + '</div></br>';
        outas += '<div>'+nombreArxivoLinia[paradaFinal].name + '</div>';
         
    }else if(paradaOrigen>paradaFinal){

        outas += '<div>'+nombreArxivoLinia[paradaOrigen].name + '</div></br>';
        outas += '<div>'+nombreArxivoLinia[paradaFinal].name + '</div>';
    }else{
        outas +='Error obteniendo la ruta.';
    }
    document.getElementById("rutaParadas").innerHTML = outas;
    
    document.getElementById("paradaOrigen").innerHTML = '<div>Parada actual: '+nombreArxivoLinia[paradaOrigen].name + '</div>';
    
    if(nombreArxivoLinia[paradaOrigen].name=="Pl. Catalunya"){
       foutas += '<img src="img/plcat.jpg" alt="Pl. Cat" height="300" width="300">';
       document.getElementById("foto").innerHTML = foutas;
       }else {
        foutas += 'No hay imagen para esta parada.';
       document.getElementById("foto").innerHTML = foutas;
       }
    
    
    
    
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
$("#clearBtn").click(function() {
  myMap.clear();
  myMap.off();
  myMap.trigger("test");
});


function onMapInitMeu(map) {
// Move to the position with animation
document.getElementById("pageMain").style.backgroundColor = "none";
map.setBackgroundColor("powderblue");
  map.animateCamera({
  target: {
    lat: latiPropia,
    lng: longiPropia
  },
  zoom: 15
}, function() {
      
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
    ];*/
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
          
          var currentPos= new plugin.google.maps.LatLng(nombreArxivoLinia[k]['latitut'],nombreArxivoLinia[k]['longitud']);
          map.addMarker({
            position: currentPos,
            icon:icon,
            map: map,
            title: nombreArxivoLinia[k]['name']
    }, function(marker) {
    });
        }
/*map.animateCamera({
  target: {
    lat: nombreArxivoLinia[0]['latitut'],
    lng: nombreArxivoLinia[0]['longitud']
  },
  zoom: 10
});*/
}
}
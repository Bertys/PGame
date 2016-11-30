var arrParadas = [];

function mospar(myArr){
    
    for (var i = 0; i<myArr.length; i++) {
          //alert("entra for ");
    
          var currentPos= (myArrayParadass55[i]['latitut'],myArrayParadass55[i]['longitud']);
          
        }
}

var latBcn=41.4024337; 
var longBcn=2.175109;

var iconVell ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADlSURBVDhPrZFBDsIwDARDn8AZbvT/D+LIGb4AbKQNU8chFWKkyom9WTtNeb65ny71y4j5mW4pf+BxXsvxdq3rZqiECoTCET7j+POEMrAJmx50b05ikcimY51YO5yQZjbJmilSO73yyGw06cZQInfUOh7yJNZlNMNvIjahKaPQunsUQZGwmYmmpLuyRVkD5iKuba5Msu4k08t0+soZ0YyTd4Yq+suIee8V1Whht8yEOWnjdHFfJ9ShaGahImteR71QbskKNFHkno0yun/owzxI8xnpK7P7HhPSDGXCacQeM2k+A5TyAv9a7u0qyPyGAAAAAElFTkSuQmCC';//base64


var myMap;
var latPropia; 
var longPropia;
function initMap(latitud,longitud) {
    
    latPropia=latitud; 
    longPropia=longitud;
    $('#mapcanvas').css('height', $('.ons-page-inner:last').height() + 250);
  // Define a div tag with id="map_canvas"
var mapDiv = document.getElementById("mapcanvas");
  // Initialize the map plugin
myMap = plugin.google.maps.Map.getMap(mapDiv);
  // You have to wait the MAP_READY event.
  myMap.on(plugin.google.maps.event.MAP_READY, onMapInit);
    // Wait until the map is ready status.
  myMap.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady); 
}
$("#clearBtn").click(function() {
  myMap.clear();
  myMap.off();
  myMap.trigger("test");
});
function onMapReady(map){
}
function onMapReadys55(map){
    
    for (var i = 0; i<myArrayParadass55.length; i++) {
          //alert("entra for ");
          if(myArrayParadass55[i].icon==1){
              var currentIcon=icon;
          }else if(myArrayParadass55[i].icon==2){
              var currentIcon=icon;
          } 
          var currentPos= new plugin.google.maps.LatLng(myArrayParadass55[i]['latitut'],myArrayParadass55[i]['longitud']);
          map.addMarker({
            position: currentPos,
            icon:currentIcon,
            map: map
          });
        }
}

function onMapReadys00(map){
   
      for (var i = 0; i<myArrayParadass00.length; i++) {
          //alert("entra for ");
          if(myArrayParadass00[i].icon==1){
              var currentIcon=icon;
          }else if(myArrayParadass00[i].icon==2){
              var currentIcon=icon2;
          } 
          var currentPos= new plugin.google.maps.LatLng(myArrayParadass00[i]['latitut'],myArrayParadass00[i]['longitud']);
          map.addMarker({
            position: currentPos,
            icon:currentIcon,
            map: map
          });
        }
}

function onMapInit(map) {
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
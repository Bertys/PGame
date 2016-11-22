var latBcn=41.4024337; 
var longBcn=2.175109;
var latLng = new plugin.google.maps.LatLng(latBcn,longBcn); 

var map;
function initMap(){
  var div = document.getElementById("mapcanvas");

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}
function onMapReady() {
  var button = document.getElementById("b33");
  button.addEventListener("click", onBtnClicked);
}

function onBtnClicked() {

  // Move to the position with animation
  map.animateCamera({
  target: {
    lat: 41.4024337,
    lng: 2.175109
  },
  zoom: 15
}, function() {

    // Add a maker
    map.addMarker({
      position: {lat: 37.422359, lng: -122.084344},
      title: "Welecome to \n" +
             "Cordova GoogleMaps plugin for iOS and Android",
      snippet: "This plugin is awesome!",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {

      // Show the info window
      marker.showInfoWindow();

      // Catch the click event
      marker.on(plugin.google.maps.event.INFO_CLICK, function() {

        // To do something...
        alert("Hello world!");

      });
    });
  });
}
/*map.animateCamera({
    target: latLng,
    zoom: 17,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }*/
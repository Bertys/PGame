var latBcn=41.4024337; 
var longBcn=2.175109;
function initMap(){
$('#mapcanvas').css('height', $('.ons-page-inner:last').height() + 250);
//$('#mapcanvas').css('width', 100%);
//$('#mapcanvas').css('height', 100%);
  // Define a div tag with id="map_canvas"
  var mapDiv = document.getElementById("mapcanvas");

  // Initialize the map plugin
  var map = plugin.google.maps.Map.getMap(mapDiv);

  // You have to wait the MAP_READY event.
  map.on(plugin.google.maps.event.MAP_READY, onMapInit);
    // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady); 
    
}

function onMapInit(map) {
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
      position: {lat: 41.385712, lng: 2.169515},
      title: "Esto es un Tren",
      snippet: "This plugin is awesome!",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {

      // Show the info window
      marker.showInfoWindow();

      // Catch the click event
      marker.on(plugin.google.maps.event.INFO_CLICK, function() {

        // To do something...
        alert("Falta tanto para que salga");

      });
    });
  
  }); 
 
}
function onMapReady() {
  var button = document.getElementById("b33");
  //button.addEventListener("click", onBtnClicked);
button.addEventListener("click", poligono);
}
function poligono() {
  var mapDiv = document.getElementById("mapcanvas");
  var map = plugin.google.maps.Map.getMap(mapDiv);

  map.addEventListener(plugin.google.maps.event.MAP_READY, function() {

    const PARADAS_LINAS55 = [
      new plugin.google.maps.LatLng(41.385712,2.169515),
      new plugin.google.maps.LatLng(41.392617,2.158535),
      new plugin.google.maps.LatLng(41.399842,2.152415),
      new plugin.google.maps.LatLng(41.401189,2.146858),
      new plugin.google.maps.LatLng(41.398892,2.142999),
      new plugin.google.maps.LatLng(41.397868,2.135714),
      new plugin.google.maps.LatLng(41.397851,2.130509),
      new plugin.google.maps.LatLng(41.398725,2.125581),
      new plugin.google.maps.LatLng(41.44492,2.073011),
      new plugin.google.maps.LatLng(41.457892,2.068219),
      new plugin.google.maps.LatLng(41.467929,2.078448),
      new plugin.google.maps.LatLng(41.481248,2.072928),
      new plugin.google.maps.LatLng(41.490322,2.077076),
      new plugin.google.maps.LatLng(41.500977,2.090386),
      new plugin.google.maps.LatLng(41.502814,2.102739),
      new plugin.google.maps.LatLng(41.530274,2.089174),
      new plugin.google.maps.LatLng(41.542848,2.10122),
      new plugin.google.maps.LatLng(41.545389,2.109767),
    
        new plugin.google.maps.LatLng(41.542848,2.10122),
        new plugin.google.maps.LatLng(41.530274,2.089174),
        new plugin.google.maps.LatLng(41.502814,2.102739),
        new plugin.google.maps.LatLng(41.500977,2.090386),
        new plugin.google.maps.LatLng(41.490322,2.077076),
        new plugin.google.maps.LatLng(41.481248,2.072928),
        new plugin.google.maps.LatLng(41.467929,2.078448),
        new plugin.google.maps.LatLng(41.457892,2.068219),
        new plugin.google.maps.LatLng(41.44492,2.073011),
        new plugin.google.maps.LatLng(41.398725,2.125581),
        new plugin.google.maps.LatLng(41.397851,2.130509),
        new plugin.google.maps.LatLng(41.397868,2.135714),
        new plugin.google.maps.LatLng(41.398892,2.142999),
        new plugin.google.maps.LatLng(41.401189,2.146858),
        new plugin.google.maps.LatLng(41.399842,2.152415),
        new plugin.google.maps.LatLng(41.392617,2.158535),
      new plugin.google.maps.LatLng(41.385712,2.169515)
    ];
    map.addPolygon({
      'points': PARADAS_LINAS55,
      'strokeColor' : '#AA00FF',
      'strokeWidth': 5,
      'fillColor' : '#880000'
    }, function(polygon) {
      map.animateCamera({
        'target': polygon.getPoints()
      });
    });

  });
}
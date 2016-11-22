var apikey1="AIzaSyCJGnqOlGPCI9Eudvn-G3xmOBBxijRFgLE";//projecte sigueAltren Api1 NOVAAAAAAWEB
var apikey3="AIzaSyCOoWRux0uuTpcyxj-B4Y_4ECEJP7LCu4E";//projecte sigueAltren Api2 NOVAAAAAAWEB
var apikey2="AIzaSyC5s74_AK1O9FSErM4hmZgMLaXEEeWJTzI";//projecte geolocalization
var apikey4="AIzaSyBSt1MSd7uCuRUf4p6Q4X-aRAAqvCMBc9M";//projecte geolocalization Bona

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("b1").addEventListener("click", function(){
    //alert("Entrando en b2");
    var cordx=0;
    var cordy=0;
    cordx=document.getElementById("CoordX").value;
    cordy=document.getElementById("CoordY").value;
    buscaMasProxima(myArrayParadas,cordx,cordy);
    //NOTOCAR VA BIEN;
});

document.getElementById("b3").addEventListener("click", function(){
    //NOTOCAR VA BIEN // en ello;
    initMap();
});
document.getElementById("b5").addEventListener("click", function(){
    //NOTOCAR VA BIEN;
    getLocation();
});


function initMap11(){
$('#mapcanvas').css('height', $('.ons-page-inner:last').height() + 250);
//$('#mapcanvas').css('width', 100%);
//$('#mapcanvas').css('height', 100%);
  // Define a div tag with id="map_canvas"
  var mapDiv = document.getElementById("mapcanvas");

  // Initialize the map plugin
  var map = plugin.google.maps.Map.getMap(mapDiv);

  // You have to wait the MAP_READY event.
  map.on(plugin.google.maps.event.MAP_READY, onMapInit);
}

function onMapInit(map) {
}
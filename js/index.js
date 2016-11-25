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
    initMap();
    }
};

app.initialize();



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById("b1").addEventListener("click", function(){
  window.location.href='#one';
  jQuery( "#one" ).on( "pageload", buscaParadasbyLinia(myArrayParadass55));
});

document.getElementById("b2").addEventListener("click", function(){
  window.location.href='#two';
  jQuery( "#two" ).on( "pageload", buscaParadasbyLinia());
});
document.getElementById("b3").addEventListener("click", function(){
  window.location.href='#three';
  jQuery( "#three" ).on( "pageload", buscaParadasbyLinia(myArrayParadass00));
});
/*document.getElementById("bs55").addEventListener("click", function(){
    //Uncaught ReferenceError: initMap11 is not defined //
    onMapReadys55(myMap);
});
document.getElementById("bs00").addEventListener("click", function(){
    //Uncaught ReferenceError: initMap11 is not defined //
    onMapReadys00(myMap);
});
document.getElementById("b333").addEventListener("click", function(){
    //Uncaught ReferenceError: initMap11 is not defined //
    initMap();
});
document.getElementById("b5").addEventListener("click", function(){
    //NOTOCAR VA BIEN;
    getLocation();
});

document.getElementById("mospar").addEventListener("click", function(){
    //NOTOCAR VA BIEN;
    cargaParadas();
});*/
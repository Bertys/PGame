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
        //error raro, Uncaught TypeError: Cannot read property 'querySelector' of null
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
    //Uncaught ReferenceError: initMap11 is not defined //
    initMap();
});
document.getElementById("b5").addEventListener("click", function(){
    //NOTOCAR VA BIEN;
    getLocation();
});

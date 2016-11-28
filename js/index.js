var apikey1="AIzaSyCJGnqOlGPCI9Eudvn-G3xmOBBxijRFgLE";//projecte sigueAltren Api1 NOVAAAAAAWEB
var apikey3="AIzaSyCOoWRux0uuTpcyxj-B4Y_4ECEJP7LCu4E";//projecte sigueAltren Api2 NOVAAAAAAWEB
var apikey2="AIzaSyC5s74_AK1O9FSErM4hmZgMLaXEEeWJTzI";//projecte geolocalization
var apikey4="AIzaSyBSt1MSd7uCuRUf4p6Q4X-aRAAqvCMBc9M";//projecte geolocalization Bona
var apikey5="AIzaSyCutizQZgP-G2p5xfRkt0t0pSTddkZM9Uw";//for 10s


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
    }
};

app.initialize();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


function hideAll(){
$( "#formselectsublinia1" ).hide();
$( "#formselectsublinia2" ).hide();
$( "#formselectsublinia3" ).hide();
$( "#formparadaOrigen" ).hide();
$( "#formparadaFinal" ).hide();
$( "#b1" ).hide();  
}

$( "#formselectsublinia1" ).hide();
$( "#formselectsublinia2" ).hide();
$( "#formselectsublinia3" ).hide();
$( "#formparadaOrigen" ).hide();
$( "#formparadaFinal" ).hide();
$( "#b1" ).hide();
//getData('data');

var linia;
var sublinia;
var paradaOrigen;
var paradaFinal;
var nombreArxivoLinia;
//$( "#formparadaOrigen" ).show();
document.getElementById("selectlinia").addEventListener("change", function(){
hideAll();
    linia=document.getElementById("selectlinia").value;

    switch(linia) {
    case "BCNVALL":
        $( "#formselectsublinia1" ).show();
        break;
    case "LLOBANO":
        $( "#formselectsublinia2" ).show();
        break;
    case "LLEPOB":
        $( "#formparadaOrigen" ).show();
        $( "#formparadaFinal" ).show();
        myFunction(myArrayParadass00,'paradaOrigen');
        myFunction(myArrayParadass00,'paradaFinal');
        sublinia=linia;
        break; 
}

});
document.getElementById("selectsublinia1").addEventListener("change", function(){

    sublinia=document.getElementById("selectsublinia1").value;

    switch(sublinia) {
    case "L6":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadasl6,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadasl6,'paradaFinal');
        nombreArxivoLinia=myArrayParadasl6;
        break;
    case "L7":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadasl7,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadasl7,'paradaFinal');
            nombreArxivoLinia=myArrayParadasl7;
        break;
    case "L12":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S1":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S2":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S5":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S55":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "L8":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S33":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S4":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S8":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R5":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R50":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R6":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R60":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;      
}
});
document.getElementById("selectsublinia2").addEventListener("change", function(){

    sublinia=document.getElementById("selectsublinia2").value;
    
    switch(sublinia) {
    case "L6":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadasl6,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadasl6,'paradaFinal');
        nombreArxivoLinia=myArrayParadasl6;
        break;
    case "L7":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadasl7,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadasl7,'paradaFinal');
            nombreArxivoLinia=myArrayParadasl7;
        break;
    case "L12":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S1":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S2":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S5":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S55":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "L8":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S33":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S4":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "S8":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R5":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R50":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R6":
    $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;
    case "R60":
            $( "#formparadaOrigen" ).show();
    myFunction(myArrayParadass55,'paradaOrigen');
    $( "#formparadaFinal" ).show();
    myFunction(myArrayParadass55,'paradaFinal');
            nombreArxivoLinia=myArrayParadass55;
        break;      
}

});


document.getElementById("paradaOrigen").addEventListener("change", function(){
  
    paradaOrigen=document.getElementById("paradaOrigen").value;
    paradaOrigen=Number(paradaOrigen);

});

document.getElementById("paradaFinal").addEventListener("change", function(){
  
    paradaFinal=document.getElementById("paradaFinal").value;
    paradaFinal=Number(paradaFinal);
    $( "#b1" ).show();
});
document.getElementById("b1").addEventListener("click", function(){
  window.location.href='#ruta';
  jQuery( "#ruta" ).on( "pageload", muestraRuta());
});


function myFunction(arr,id) {
    var out = '<option>Selecciona la Parada...</option>';
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<option value="'+(i+1)+'">' + arr[i].name + '</option>';
    }
    
    document.getElementById(id).innerHTML = out;
}

function muestraRuta() {
    
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

var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("data").innerHTML = t;
    document.getElementById("data1").innerHTML = t;
    document.getElementById("data2").innerHTML = t;
    document.getElementById("data3").innerHTML = t;
    document.getElementById("data4").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
}

document.getElementById("b2").addEventListener("click", function(){
  //window.location.href='#mapa';
    $.mobile.navigate( "#mapa" );
  jQuery( "#mapa" ).on( "pageload", iniciaPaginaMapa());
});


//window.location.href='#principal';
//$("body").pagecontainer("change", "target", { options });

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
initMap(latiPropia,longiPropia);
};
    

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }


navigator.geolocation.getCurrentPosition(onSuccess, onError);
//initMap(position.coords.latitude,position.coords.longitude);
//initMap(latiPropia,longiPropia);
}



/*document.getElementById("b1").addEventListener("click", function(){
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
});*/
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
/*$( ".target" ).change(function() {
  alert( "Handler for .change() called." );
});*/
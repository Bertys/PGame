var apikey1="AIzaSyCJGnqOlGPCI9Eudvn-G3xmOBBxijRFgLE";//projecte sigueAltren Api1 NOVAAAAAAWEB
var apikey3="AIzaSyCOoWRux0uuTpcyxj-B4Y_4ECEJP7LCu4E";//projecte sigueAltren Api2 NOVAAAAAAWEB
var apikey2="AIzaSyC5s74_AK1O9FSErM4hmZgMLaXEEeWJTzI";//projecte geolocalization
var apikey4="AIzaSyBSt1MSd7uCuRUf4p6Q4X-aRAAqvCMBc9M";//projecte geolocalization Bona
var apikey5="AIzaSyCutizQZgP-G2p5xfRkt0t0pSTddkZM9Uw";//for 10s


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        iniciaPaginaMapa();
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

function ScaleContentToDevice(){
                scroll(0, 0);
                var content = $.mobile.getScreenHeight() - $(".ui-header").outerHeight() - $(".ui-footer").outerHeight() - $(".ui-content").outerHeight() + $(".ui-content").height();
                $(".ui-content").height(content);
}
        
$(document).on( "pagecontainershow", function(){
        ScaleContentToDevice();        
});
        
$(window).on("resize orientationchange", function(){
        ScaleContentToDevice();
});


function hideAll(){
$( "#formselectsublinia1" ).hide();
$( "#formselectsublinia2" ).hide();
$( "#formselectsublinia3" ).hide();
$( "#formparadaOrigen" ).hide();
$( "#formparadaFinal" ).hide();
$( "#b1" ).hide();  
}


var sublinia;
var paradaOrigen=0;
var paradaFinal=0;
var nombreArxivoLinia;


document.getElementById("selectsublinia").addEventListener("change", function(){

    sublinia=document.getElementById("selectsublinia").value;

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
    case "S00":
    $( "#formparadaOrigen" ).show();
        $( "#formparadaFinal" ).show();
        myFunction(myArrayParadass00,'paradaOrigen');
        myFunction(myArrayParadass00,'paradaFinal');
        nombreArxivoLinia=myArrayParadass00; 
        break;  
}
});


function goToMap(){
    $.mobile.navigate( "#mapa" );
    jQuery( "#mapa" ).on( "pageload", iniciaPaginaMapa());
}
function goToRute(){
    $.mobile.navigate( "#iniciaRuta" );
    jQuery( "#iniciaRuta" ).on( "pageload", iniciaPaginaRuta());
}
function goToFavs(){
    $.mobile.navigate( "#favoritos" );
    jQuery( "#favoritos" ).on( "pageload", iniciaPaginaFavoritos());
    
}


document.getElementById("paradaOrigen").addEventListener("change", function(){
    paradaOrigen=document.getElementById("paradaOrigen").value;
    paradaOrigen=Number(paradaOrigen);

});
document.getElementById("paradaFinal").addEventListener("change", function(){
    paradaFinal=document.getElementById("paradaFinal").value;
    paradaFinal=Number(paradaFinal);
    cargaRuta();
});
function cargaRuta(){
    window.location.href='#onRuta';
    jQuery( "#onRuta" ).on( "pageload", iniciaPaginaRuta());
}


function myFunction(arr,id) {
    var out = '<option>Selecciona la Parada...</option>';
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<option value="'+i+'">' + arr[i].name + '</option>';
    }
    
    document.getElementById(id).innerHTML = out;
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


//window.location.href='#principal';
//$("body").pagecontainer("change", "target", { options });


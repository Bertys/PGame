function iniciaPaginaRuta() {
    
    //alert('linia: '+linia+'sublinia: '+sublinia+'paradaOrigen: '+paradaOrigen+'paradaFinal: '+paradaFinal);

    //alert(paradaOrigen+' '+paradaFinal);
    
    var outas = "";
    var foutas ="";
    var i,j;
    if (paradaOrigen<paradaFinal) {
        
        outas += '<div>'+nombreArxivoLinia[paradaOrigen]['name'] + '-----';
        outas += nombreArxivoLinia[paradaFinal]['name'] + '</div></br>';
         
    }else if(paradaOrigen>paradaFinal){

        outas += '<div>'+nombreArxivoLinia[paradaOrigen]['name'] + '-----';
        outas += nombreArxivoLinia[paradaFinal]['name'] + '</div></br>';
    }else{
        outas +='Error obteniendo la ruta.';
    }
    document.getElementById("rutaParadas").innerHTML = outas;
    
    document.getElementById("paradaOrigin").innerHTML = '</br>Parada actual: '+nombreArxivoLinia[paradaOrigen]['name']+'</br>';
    
    
var arrFotosPlCat=['img/plcat.jpg','img/plcat2.jpg','img/plcat3.jpg','img/plcat4.jpg','img/plcat5.jpg','img/plcat6.jpg'];
var arrFotosPlEsp=['img/plesp.jpg','img/plesp2.jpg','img/plesp3.jpg','img/plesp4.jpg','img/plesp5.jpg','img/plesp6.jpg'];  
    
foutas = '<img id="fotoParada" src="'+arrFotosPlCat[0]+'" alt="Pl. Cat">';
document.getElementById("foto").innerHTML = foutas;    

    
    $("#navParadas").unbind().click(function() {
     var mySource=document.getElementById("navParadas").src;

        
        switch(mySource) {
    case 'file:///android_asset/www/img/FueraDeRuta.png':
        document.getElementById("navParadas").src="img/RutaPlay.png";
        break;
    case 'file:///android_asset/www/img/RutaPlay.png':
        document.getElementById("navParadas").src="img/RutaPause.png";
        //motor();
        break;
    case 'file:///android_asset/www/img/RutaPause.png':
        document.getElementById("navParadas").src="img/RutaPlay.png";
        myStopFunction()
        break; 
        }

        
 });   
var inu =0;  
$("#mesFotos").unbind().click(function() {
    if(inu<=5){
foutas = '<img id="fotoParada" src="'+arrFotosPlCat[inu]+'" alt="Pl. Cat">';
document.getElementById("foto").innerHTML = foutas;
    inu++;
    }
    if(inu==5){
        inu =0; 
        }
});
$("#mesInfo").unbind().click(function() {
foutas = "<div></br></br><p>La plaça de Catalunya és la més cèntrica i gran de les places de Barcelona. Constitueix el punt d'unió entre el nucli antic de la ciutat i l'Eixample. D'aquí parteixen importants vies de la ciutat com la Rambla, el passeig de Gràcia, la rambla de Catalunya, les rondes de la Universitat i de Sant Pere i el carrer Pelai, igual com l'avinguda del Portal de l'Àngel, la gran artèria comercial de la ciutat, i antiga porta de les muralles.</p></div>";
document.getElementById("foto").innerHTML = foutas;
});
    
var myVarMeu;
    
    function motor(){
    var myVar = setInterval(function(){ 
        var inu =0;
        var aux=paradaOrigen+inu;
        
    document.getElementById("paradaOrigin").innerHTML = '</br>Parada actual: '+nombreArxivoLinia[aux]['name']+'</br>';
    foutas = '<img id="fotoParada" src="'+arrFotosPlCat[inu]+'" alt="Pl. Cat">';
    document.getElementById("foto").innerHTML = foutas;
    inu=inu+1;
    }, 3000);
    myVarMeu=myVar;
  }
    function myStopFunction() {
    clearInterval(myVar);
}
}

////////////////////////////////////////////////////////////////////////

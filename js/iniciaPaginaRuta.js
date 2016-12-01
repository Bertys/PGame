function iniciaPaginaRuta() {
    
    //alert('linia: '+linia+'sublinia: '+sublinia+'paradaOrigen: '+paradaOrigen+'paradaFinal: '+paradaFinal);

    //alert(paradaOrigen+' '+paradaFinal);
    
    var outas = "";
    var foutas ="";
    var i,j;
    if (paradaOrigen<paradaFinal) {
        
        outas += '<div>'+nombreArxivoLinia[paradaOrigen]['name'] + '</div></br>';
        outas += '<div>'+nombreArxivoLinia[paradaFinal]['name'] + '</div>';
         
    }else if(paradaOrigen>paradaFinal){

        outas += '<div>'+nombreArxivoLinia[paradaOrigen]['name'] + '</div></br>';
        outas += '<div>'+nombreArxivoLinia[paradaFinal]['name'] + '</div>';
    }else{
        outas +='Error obteniendo la ruta.';
    }
    document.getElementById("rutaParadas").innerHTML = outas;
    
    document.getElementById("paradaOrigin").innerHTML = 'Parada actual: '+nombreArxivoLinia[paradaOrigen]['name'];
    
    if(nombreArxivoLinia[paradaOrigen].name=="Pl. Catalunya"){
       foutas += '<img id="fotoParada" src="img/plcat.jpg" alt="Pl. Cat">';
       document.getElementById("foto").innerHTML = foutas;
       }else {
        //foutas += 'No hay imagen para esta parada.';
           foutas += '<img id="fotoParada" src="img/plcat2.jpg" alt="Pl. Cat">';
       document.getElementById("foto").innerHTML = foutas;
       }
    
 if(winner<=1000){
    $("#navParadas").click(function() {
     var mySource=document.getElementById("navParadas").src;
  if(mySource=='file:///android_asset/www/img/FueraDeRuta.png'){
      
    document.getElementById("navParadas").src="img/RutaPlay.png";

    }else if(mySource=='file:///android_asset/www/img/RutaPlay.png'){
 
        document.getElementById("navParadas").src="img/RutaPause.png";

        motor();
 }else if(mySource=='file:///android_asset/www/img/RutaPause.png'){
 
     document.getElementById("navParadas").src="img/RutaPlay.png";

 }else{
     document.getElementById("navParadas").innerHTML="error cargando el navegador";
 } 
 });   
    
   } 
    
    function motor(){
    setInterval(function(){ 
        var i;
    document.getElementById("paradaOrigin").innerHTML = '<div>Parada actual: '+nombreArxivoLinia[paradaOrigen+i]['name'] + '</div>';
    foutas = '<img id="fotoParada" src="img/plcat3.jpg" alt="Pl. Cat">';
    document.getElementById("foto").innerHTML = foutas;
        i++;
    }, 10000);
    
  }  
}

////////////////////////////////////////////////////////////////////////

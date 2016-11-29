function buscaParadasbyLinia() {
   
   var arrParadas = [];
    
    for (var i = 0; i<myArrayParadass55.length; i++) {
          arrParadas[i]= myArrayParadass55[i]['name'];
    }
    
    var out ="";

    for(var j = 0; j < myArrayParadass55.length; j++) {
        
        out += '<div data-role="controlgroup">';
        out += '<a href="" data-role="button">'+arrParadas[j]+'</a><br>';
        out += '</div>';
    }
    document.getElementById("id01").innerHTML = out;
}
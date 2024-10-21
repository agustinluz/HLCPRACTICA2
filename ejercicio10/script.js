function aumentarLetra(){
    var par=document.getElementById("par");
    if (!par.style.fontSize) {
        par.style.fontSize = "16px";  
    }
    var tam=parseFloat(par.style.fontSize);
    var nuevoTam=parseFloat(tam)+1;
    par.style.fontSize=nuevoTam+"px";
}

function disminuirLetra(){
    var par=document.getElementById("par");
    if (!par.style.fontSize) {
        par.style.fontSize = "16px";  
    }
    //Si hubiera declarado el forntSize desde el css debería usar
    //tamañoActual = window.getComputedStyle(par).getPropertyValue('font-size');
    var tam=parseFloat(par.style.fontSize);
    var nuevoTam=parseFloat(tam)-1;
    par.style.fontSize=nuevoTam+"px";
}
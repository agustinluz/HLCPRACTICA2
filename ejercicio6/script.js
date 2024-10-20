window.onload = function() {
    document.getElementById('ciudad').textContent="Sevilla";
    document.getElementById('gastos').textContent="3€";
    var dia = new Date().getDate(); 
    var mes=new Date().getMonth()+1;
    var anio=new Date().getFullYear();
    var fecha=dia+"/"+mes+"/"+anio;
    document.getElementById('fecha').textContent=fecha;

};

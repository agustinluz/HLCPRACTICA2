window.onload = function() {
    document.getElementById('ciudad').textContent=prompt("Introduce la ciudad:");
    document.getElementById('gastos').textContent=prompt("Introduce los gastos:");
    
    var fecha=new Date();
    var dia= prompt("Introduce el dia");
    var mes= prompt("Introduce el mes");
    var anio= prompt("Introduce el año");

    if(isNaN(dia) || isNaN(mes) || isNaN(anio)){
        alert("Debe introducir solo numeros");
        return;
    }else {
        fecha.setDate(dia);
        fecha.setMonth(mes-1);
        fecha.setFullYear(anio);
        var fechaFort=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();


        document.getElementById('fecha').textContent=fechaFort;
    }
    


};

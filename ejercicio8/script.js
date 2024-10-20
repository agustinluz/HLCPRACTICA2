window.onload = function () {
    var ciudades_Gratis = ['sevilla', 'madrid', 'valencia', 'barcelona'];
    var ciudades_Gastos = ['cantabria', 'pontevedra', 'toledo', 'segovia'];

    var ciudad = prompt("Introduce la ciudad:");
    if (ciudades_Gratis.includes(ciudad.toLowerCase())) {
        document.getElementById("ciudad").innerHTML = ciudad;
        document.getElementById('gastos').textContent = "0€, los gastos son gratuitos";
        var dia = new Date().getDate();
        var mes = new Date().getMonth() + 1;
        var anio = new Date().getFullYear();
        var fecha = dia + "/" + mes + "/" + anio;
        document.getElementById('fecha').textContent = fecha;
    } else if (ciudades_Gastos.includes(ciudad.toLowerCase())) {
        document.getElementById("ciudad").innerHTML = ciudad;
        document.getElementById('gastos').textContent=prompt("Introduce los gastos:");
        var dia = new Date().getDate();
        var mes = new Date().getMonth() + 1;
        var anio = new Date().getFullYear();
        var fecha = dia + "/" + mes + "/" + anio;
        document.getElementById('fecha').textContent = fecha;
    } else {
        document.getElementById("ciudad").innerHTML = ciudad;
        document.getElementById('gastos').textContent = "La ciudad introducida no está disponible";
        document.getElementById('fecha').textContent = "";
    }
};
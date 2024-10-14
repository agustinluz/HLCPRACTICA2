function cadenas() {
    this.cad = prompt("Escribe una cadena");
    var sinEspacio= cad.replaceAll(' ','');
    var cambia= cad.replaceAll('a','u');
    var lista= cad.split("");

    console.log(sinEspacio);
    console.log(cambia);
    console.log(lista);
}

console.log(cadenas());
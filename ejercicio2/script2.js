function correo(){
    var nombre=prompt("Escribte tu nombre");
    var apell=prompt("Escribe tu primer apellido");
    var anio=prompt("Escribe tu año de nacimiento");
    var correo=nombre.substring(0,2)+ apell+ anio.substring(2);
    var cont=nombre.toUpperCase().substring(0,3)+ apell.substring(0,1)+nombre.length+"_"+apell.substring(apell.length-1);

    alert("Tu correo es: " + correo.toLowerCase() + "\nTu contraseña es: " + cont);

}

console.log(correo());
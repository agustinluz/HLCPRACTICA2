function agregarPro(){
    var nombre=prompt("Introduzca el nombre del producto a añadir");
    var lista=document.getElementById("listaProd")
    var Ele=document.createElement("li");
    Ele.textContent=nombre;
    lista.appendChild(Ele);
}
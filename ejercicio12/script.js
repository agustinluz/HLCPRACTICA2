function agregarPro(){
    var nombre=prompt("Introduzca el nombre del producto a añadir");
    var lista=document.getElementById("listaProd")
    var Ele=document.createElement("li");
    Ele.textContent=nombre;
    lista.appendChild(Ele);
    var botonComprado=document.createElement("button");
    botonComprado.textContent="SI";
    botonComprado.addEventListener("click",function(){
        Ele.style.color="green";
        Ele.style.fontStyle="italic";
    });
    var botonNoComprado=document.createElement("button");
    botonComprado.textContent="NO";
    botonComprado.addEventListener("click",function(){
        Ele.style.color="red";
        Ele.style.fontWeight="bold";
    });
}
function agregarPro(){
    var nombre=prompt("Introduzca el nombre del producto a añadir");
    var lista=document.getElementById("listaProd")
    var Ele=document.createElement("li");
    Ele.textContent=nombre;

    var botonComprado=document.createElement("button");
    botonComprado.textContent="SÍ";
    botonComprado.addEventListener("click",function(){
        Ele.style.color="green";
        Ele.style.fontStyle="italic";
    });

    var botonNoComprado=document.createElement("button");
    botonNoComprado.textContent="NO";
    botonNoComprado.addEventListener("click",function(){
        Ele.style.color="red";
        Ele.style.fontWeight="bold";
        Ele.style.fontStyle="normal";
    });

   
    lista.appendChild(Ele);
    lista.appendChild(botonComprado);
    lista.appendChild(botonNoComprado);

}
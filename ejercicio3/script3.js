window.onload = function() {
    var titulo = document.title
    console.log("El titulo es: "+titulo.toUpperCase());
  
    document.getElementById('nombre').value = "Agustin"; 
    document.getElementById('apellido').value = "Luz"; 
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var saludo = document.getElementById('saludo');
    saludo.textContent = `Hola ${nombre} ${apellido}.`;
  
    var parrafo = document.createElement('p');
    parrafo.textContent = "¿Qué tal estás?";
    saludo.parentNode.insertBefore(parrafo, saludo.nextSibling);
  
    var apellido = document.querySelector('label[for="apellido"]');
    apellido.textContent = "Apellidos:";
};

    

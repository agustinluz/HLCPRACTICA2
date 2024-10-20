function mostrar() {
    const parrafo2 = document.getElementById("parrafo2");
    const parrafo3 = document.getElementById("parrafo3");
    const span = document.getElementById("mostrar");

    if (parrafo2.style.display === "none" ) {
        parrafo2.style.display = "block";
        parrafo3.style.display = "block";
        span.textContent = "Mostrar menos...";
    } else {
        parrafo2.style.display = "none";
        parrafo2.style.display = "none";
        span.textContent = "Mostrar más...";
    }
}
const productos = [{ id: 1, nombre: 'Patata', precio: 1, imagen: 'patata.png'},
{ id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla.png' },
{ id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin.png' },
{ id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas.png' }];

function mostrarProductos() {
    var contenedor = document.getElementById('productos');

    productos.forEach(producto => {
        var divProducto = document.createElement('div');
        divProducto.className = 'producto';

        var nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;

        var precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio} €`;

        var imagen = document.createElement('img');
        imagen.src = `img/${producto.imagen}`;
        imagen.alt = producto.nombre;
        imagen.width = 300;

        var botonDisponible = document.createElement('button');
        botonDisponible.textContent = 'Disponible';
        botonDisponible.className = 'disabled'; 

        botonDisponible.addEventListener('click', function () {
            if (botonDisponible.classList.contains('disabled')) {

                botonDisponible.classList.remove('disabled');
                botonDisponible.classList.add('enabled');

            } else {
                botonDisponible.classList.remove('enabled');
                botonDisponible.classList.add('disabled');
            }
        });

        divProducto.appendChild(nombre);
        divProducto.appendChild(precio);
        divProducto.appendChild(imagen);
        divProducto.appendChild(botonDisponible);

        contenedor.appendChild(divProducto);
    });
}
mostrarProductos();


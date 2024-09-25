// Inicio  para el carrito de compras
let carrito = [];

// Función para mostrar el menú principal
function mostrarMenu() {
    // Muestra las opciones disponibles en un cuadro de diálogo y devuelve la opción seleccionada como un entero
    return parseInt(prompt(`
        Elige una opción:
        1.- Agregar producto al carrito
        2.- Ver carrito
        3.- Salir
    `));
}

// Arreglo de productos 
const productos = [
    { id: 1, nombre: 'Chaqueta', precio: 1600 },
    { id: 2, nombre: 'Tenis', precio: 1100 },
    { id: 3, nombre: 'Mochila', precio: 700 },
    { id: 4, nombre: 'Sombrero', precio: 250 },
    { id: 5, nombre: 'Gorra', precio: 180 },
    { id: 6, nombre: 'Camiseta', precio: 300 },
    { id: 7, nombre: 'Lentes de sol', precio: 500 },
    { id: 8, nombre: 'Overol', precio: 950 },
    { id: 9, nombre: 'Pantalones', precio: 800 },
    { id: 10, nombre: 'Zapatos', precio: 1200 },
    { id: 11, nombre: 'Reloj', precio: 2500 },
    { id: 12, nombre: 'Bufanda', precio: 150 }
];

// Función para agregar un producto al carrito
const agregarProducto = () => {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} ($${producto.precio})\n`;
    });
    let opcionProducto = parseInt(prompt(`${mensaje}Ingresa el número del producto que deseas agregar:`));
    if (opcionProducto > 0 && opcionProducto <= productos.length) {
        carrito.push(productos[opcionProducto - 1]);
        alert(`Producto "${productos[opcionProducto - 1].nombre}" agregado al carrito.`);
        imprimirCarritoYTotal();
    } else {
        alert("Opción no válida.");
    }
}

// Función para ver los productos en el carrito y mostrar el total
const verCarrito = () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Productos en tu carrito:\n";
        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}.- ${producto.nombre} ($${producto.precio})\n`;
        });
        const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
        
        mensaje += `\nTotal de la compra: $${total}`;

        alert(mensaje);
    }
};


// Función para imprimir el contenido del carrito y el total en la consola
const imprimirCarritoYTotal = () => {
    console.log("Contenido del carrito:");
    carrito.forEach((producto, index) => {
        console.log(`${index + 1}.- ${producto.nombre} ($${producto.precio})`);
    });
    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
    console.log(`Total actual: $${total}`);
}

// Función para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                verCarrito();
                break;
            case 3:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
        }
    }
    alert("Programa Finalizado.");
}

// Iniciar el programa
iniciarPrograma();
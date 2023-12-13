const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio: 600 },
    { nombre: 'Monitor de 28 pulgadas', precio: 700 },
    { nombre: 'Monitor de 29 pulgadas', precio: 800 },
    { nombre: 'Monitor de 30 pulgadas', precio: 900 },
    { nombre: 'Monitor de 31 pulgadas', precio: 1000 },
    { nombre: 'Monitor de 32 pulgadas', precio: 2000 },

]

// For Loop
for(let i=0; i<carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
});
const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio: 600 },
    { nombre: 'Monitor de 28 pulgadas', precio: 700 },
    { nombre: 'Monitor de 29 pulgadas', precio: 800 },
    { nombre: 'Monitor de 30 pulgadas', precio: 900 },
    { nombre: 'Monitor de 31 pulgadas', precio: 1000 },
    { nombre: 'Monitor de 32 pulgadas', precio: 2000 },
]

// carrito.forEach( function(producto){
//     console.log(`${producto.nombre} - Precio: ${producto.precio}`)
// });

const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log('nuevoArreglo: ',nuevoArreglo);
console.log('nuevoArreglo2: ', nuevoArreglo2);
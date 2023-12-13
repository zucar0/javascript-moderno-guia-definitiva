const carrito =[];

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio:800
}

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: 'Teclado',
    precio: 500
}

carrito.unshift(producto3);
console.table(carrito);

// Eliminar último elemento del carrito
// carrito.pop();

// // Eliminar primer elemento del carrito
// carrito.shift();

console.table(carrito);

const resultado = [...carrito]
console.table(resultado);
console.log('Splice: ')
resultado.splice(1,1);
console.table(resultado);
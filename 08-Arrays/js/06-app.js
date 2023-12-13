const carrito =[];
// Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio:800
}
const producto3 = {
    nombre: 'Teclado',
    precio: 500
}

let resultado;
resultado = [...carrito,producto]
// Esta es la forma de agregar otro producto 
resultado = [...resultado, producto2]
// La forma o posición en que se agrega depende directamente de colocar el producto al principio o al final
resultado = [producto3, ...resultado];

console.table(resultado);
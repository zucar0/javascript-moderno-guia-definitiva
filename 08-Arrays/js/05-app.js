//Método PUSH
// const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre'];
// meses.push('Octubre');
// console.table(meses);

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

// .push agrega elemento al final del arreglo
carrito.push(producto2);
carrito.push(producto);

// .unshift agrega al principio del arreglo
const producto3 = {
    nombre: 'Teclado',
    precio: 500
}

carrito.unshift(producto3);
console.table(carrito);
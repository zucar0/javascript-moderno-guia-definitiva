/* Object literal: Al ver una variable con asignación hacia unas llaves es un indicativo de un objeto
   Cada uno de los valores va a ser una propiedad o una llave del objeto */
   const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    imagen: "imagen.jpg"
}

// Asignación antes de ECMAScript 6
// const nombreAntes = producto.nombre;
// console.log('producto.nombreAntes: ', nombre);

// Object destructuring (Sacar de una estructura)
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
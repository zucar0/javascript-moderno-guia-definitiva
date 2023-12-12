/* Object literal: Al ver una variable con asignación hacia unas llaves es un indicativo de un objeto
   Cada uno de los valores va a ser una propiedad o una llave del objeto */
   const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true  
}

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);
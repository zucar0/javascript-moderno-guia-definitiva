const nombre = "Monitor de 20 pulgadas";
const precio = 300;
const disponible = true;

// Un objeto agrupar todo en una sola variable...

/* Object literal: Al ver una variable con asignación hacia unas llaves es un indicativo de un objeto
   Cada uno de los valores va a ser una propiedad o una llave del objeto */
const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true  
}

// Se envía el objeto a la consola
console.log(producto);
// Acceso a la propiedad por medio del punto
console.log(producto.nombre);

//Acceso a la propiedad por medio de corchetes.
console.log('producto[\'nombre\']: ', producto['nombre']);
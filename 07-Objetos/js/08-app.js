"use strict";
// use strict indica que se va a evaluar el código de forma estricta para no permitir malas prácticas

/* El modo estricto va a exigir habilitar ciertas reglas en JavaScript
Un ejemplo es la declaración de variables. Sin el modo estricto JAvaScript las declara por ti
*/


   const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

 /* Object methods */
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log('producto: ', producto);
console.log(Object.isFrozen(producto));
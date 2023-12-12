"use strict";
// use strict indica que se va a evaluar el código de forma estricta para no permitir malas prácticas

   const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

 /* Object methods */
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log('producto seal: ', producto);
console.log('Object.isSealed(producto): ', Object.isSealed(producto));
const producto ="Monitor de 55 pulgadas";

console.log(producto);
// Remplazar texto
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo '));

// Método Slice
// Va a cortar el string en un rango de inicio y fin
console.log(producto.slice(0,10));
//Va a cortar desde el inicio hasta que llegue a la posición 8
console.log(producto.slice(8));

//Si el primer número es mayor al segundo no va a hacer nada
console.log(producto.slice(82,1));

// substring (alternativa a slice)
console.log(producto.substring(0,10));
//Si el primer parámetro es mayor al segundo lo acomoda invirtiéndolo
console.log(producto.substring(2,1));

// Ejemplo para colocar la primera letra de un nombre (Tipo Google)
const usuario = "Josimar";
console.log ('substring: ',usuario.substring(0,1));
console.log('charAt: ',usuario.charAt(0));


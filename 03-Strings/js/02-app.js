const producto = 'Monitor de 20 pulgadas';
console.log(producto);

// .length es de los pocos métodos que no utilizan paréntesis
console.log("Length:" + producto.length);

console.log("IndexOf: " + producto.indexOf('20'));

// Indica si identificó o no el string
console.log("Includes: " + producto.includes('Tablet'));

console.log("Includes Monitor: " + producto.includes("Monitor"));
console.log("Includes monitor: " + producto.includes('monitor'));

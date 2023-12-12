// En versiones anteriores se utilizaba la palabra reservada VAR
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variables se pueden reasignar
producto = 'Monitor de 19 pulgadas'
console.log(producto);

//JavaScript es un lenguaje de tipo dinámico, no se especifica tipo de dato
producto = 20;
console.log(producto);

//Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;
console.log(disponible);
disponible = false;
console.log(disponible);

//Inicialización de múltiples variables
var categoria = 'Computadoras', 
    marca = "Chevrolet",
    calificacion = 10;

// REGLAS
// No se puede inicializar con un número.
var 99dias;
var dias99;

// Sí se pueden inicializar con guión bajo
var 01_;
var _01;

var _usuario;
var __usuario;

// CamelCase: Es la forma más tradicional de hacerlo.
var nombreProducto;

// Snake o Underscore: Por el uso del guión bajo
var nombre_producto_categoria_precio;

//PascalCase: Cuando una variable siempre inicia con una letra mayúscula. 
var Producto;
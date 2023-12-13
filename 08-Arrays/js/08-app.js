const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    imagen: "imagen.jpg"
}



// Object destructuring (Sacar de una estructura)
const { nombre } = producto;
console.log(nombre);

// Destructuring de Arreglos
const numeros = [10,20,30,40,50];
// const [primero, segundo, tercer] = numeros;
// const[, , , , quinto] = numeros;

// Sintaxis para que los últimos elementos estén en su propio arreglo. 
const [ primero, segundo, ...tercero] = numeros;

console.log(tercero);
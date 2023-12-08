const producto = 'Monitor de 20 pulgadas';
// Método Repeat
const texto = ' en Promoción '.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`)

//Método SPLIT para dividir un string por palabras o por algo en específico
const actividad ="Estoy aprendiendo JavaScript moderno"
console.log(actividad.split(" "));

// Separando un string por comas
const hobbies = "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));

// Ejemplo de hashtags de Twitter
const tweet = "Aprendiendo JavaScript #JSModerno";
console.log('Split: ', tweet.split('#'));
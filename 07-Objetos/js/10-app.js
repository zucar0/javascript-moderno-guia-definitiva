const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto)
console.log(medidas)

// El .assing va a unir los objetos y los va a asignar a resultado.
const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas }

console.log("********************* \n Resultado: ")
console.log(resultado);
console.log("********************* \n Resultado 2: ")
console.log(resultado2);

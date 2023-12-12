/* Object literal: Al ver una variable con asignación hacia unas llaves es un indicativo de un objeto
   Cada uno de los valores va a ser una propiedad o una llave del objeto */
   const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    imagen: "imagen.jpg",
    informacion: {
        medidas: { 
            peso: '1Kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const { nombre, informacion, informacion: { fabricacion } } = producto;
console.log('nombre: ',nombre);
console.log('informacion:  ',informacion);
console.log('fabricacion: ',fabricacion);
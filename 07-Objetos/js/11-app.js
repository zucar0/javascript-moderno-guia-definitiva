// const this; 
const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

const producto2 = { 
    nombre: "Tabet Android",
    precio: 2400,
    disponible: false,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
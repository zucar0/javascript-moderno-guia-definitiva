const persona = "        Antonio Enríquez      ";
const persona2 = "        Josimar Antonio Enríquez Alvarado     ";

console.log(persona);
console.log('lenght',persona.length);


// Eliminar espacios en blanco
console.log('trimstart' , persona.trimStart() );
console.log('trimend' , persona.trimEnd() );

// Eliminar espacios al inicio
console.log(producto2.trimStart());

// Eliminar espacios al final
console.log(producto2.trimEnd());

// Eliminar espacio al inicio y al final
console.log('trimstart().trimend(): ',producto2.trimStart().trimEnd());

// El método anterior al uso del trimstart y trimend
console.log('trim',producto2.trim);
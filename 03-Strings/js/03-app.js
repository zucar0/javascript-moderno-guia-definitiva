const persona = "Antonio Enríquez ";
const edad = '30 años';

// Método concat
console.log(persona.concat(edad));

// Concatenación estándar
console.log("El colaborador " + persona + " tiene " + edad );
console.log("El colaborador " , persona , " tiene " , edad );


// BACKTICK: Las variables se agregan con la sintaxis de llaves y lo demás sigue siendo una cadena de texto
console.log(`La persona ${persona} cumplió ${edad}`);

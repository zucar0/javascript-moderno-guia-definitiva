// const puntaje = 1000;
// const puntaje2 = "1000";

// console.log(typeof puntaje);
// console.log(typeof puntaje2);

// // != diferente, == igual a 
// // if(puntaje == 1000){ 
// //     console.log('sí es igual...')
// // }

// if(puntaje === 1000){ // != diferente, == igual a 
//     console.log('sí es igual...');
// }else{
//     console.log('no es igual...');
// }

function hash(x){ 
    seed = 79;
    diccionario="abefimnoprsuv";
    for(i=0; i < x.length; i++){
        seed = (seed * 13 + diccionario.indexOf(x[i]));
    }
    console.log(seed);
    return seed;
}
hash("hola mundo");
hash("reto hash ");
hash("retosisu");
hash("string x!");
hash("diccionario");
hash("abefimnoprsuv");
hash("abefimnopr");
hash("seed 79   ");
hash("fimnoprsuv");
hash("hash seed ");
hash("retoseed79");
hash(" afinamos ");
hash("sabuesos  ");
hash("efimeros  ");
hash("prusianos");
hash("romanos   ");
hash("inspiramos");
hash("aminorar  ");
hash("imponernos");
hash("prosesar  ");
hash("feminismos");
hash("buenisimos");

hash("pisamos   ")
hash("permisos  ");
hash("persuasivo");
hash("persuasiva");
hash("perseverar");
//abefimnoprsuv
console.log("abefimnoprsuv".indexOf("a"));
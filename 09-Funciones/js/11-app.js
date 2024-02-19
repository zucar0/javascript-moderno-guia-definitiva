// Función tradicional
// const aprendiendo = function(tecnologia){
//     console.log(`Aprendiendo ${tecnologia}`);
// }
// aprendiendo('JavaScript');
const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript','Node.Js');

// Arrow Function 
const aprendiendo2 = (tecnologia, tecnologia2)=>`Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('JavaScript','Node.Js'));
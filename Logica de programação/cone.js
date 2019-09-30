let readline = require ('readline-sync');

let raio = readline.question("Raio do cone: ");
let altura = readline.question("Altura do cone: ");

console.log("O volume do cone é :" + (Math.PI*Math.pow(raio,2)*altura)/3);
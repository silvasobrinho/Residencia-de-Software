let entrada = require('readline-sync');

let numero = entrada.question("Digite um numero: ");

if (numero > 0){
    console.log("O numero é maior de 0");
}else if(numero <0){
    console.log("o numero é menor que zero");
}else{ console.log("O numero é zero")}
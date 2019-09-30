var readline = require('readline-sync');
let mes = Number(readline.question("entre com um mes: "));
//let mes = 2;
switch(mes){
    case 1:
        console.log('Janeiro');
        break;
    case 2 :
        console.log("Fevereiro");
        break;
    case 3: 
        console.log("Março");
        break;
    default:
        console.log("não é Janeiro, Fevereiro ou Março.");
}
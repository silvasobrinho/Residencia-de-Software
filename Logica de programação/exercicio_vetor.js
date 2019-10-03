var entrada = require("readline-sync");
var memoria=[];
var maior = 0;
var num;

for (let i = 0 ;i<10 ;i++){
num = Number(entrada.question("Digite um inteiro para a comparação: "))
memoria.push(num);

memoria[i]>maior? maior=memoria[i]:memoria[i];
//if(memoria[i]>maior){
//    maior=memoria[i];
//}

}
//for(let i = 0; i<10; i++){
  //  memoria[i]>maior? maior=memoria[i]:memoria[i];
    
   // }
    console.log("O maior numero é: "+ maior);
    
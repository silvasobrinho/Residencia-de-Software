/* ---------------------


let num = 2;
let num2 = 5;
//chamda da função
res= funcao_soma(num,num2);
console.log("valor da soma é: ",res);
//corpo da funcao
function funcao_soma(a,b){
    let soma;
    soma = a+b;
    return soma;
}
*/

//parametro default:
// se nenhum valor for passado na chamda da função
// enão parametro recebe o valor padrão(default)

/*
function oi_para(nome = 'Fulano'){
    console.log('oi', nome);
}

//chamada passando argumento
oi_para('Turma Serratec');
//Chamada sem passar argumento
oi_para();
*/
/* ----------- função sendo atribuida numa variavel
let soma_um = function(num =0){
    return num +1;
}


console.log('Retorno da Função: ',soma_um(8));

//atribuiu uma copia da função em "soma_um" para "outra"
const outra = soma_um;

console.log("Retorno da função : ",outra(100));*/

//Função de atribuição de variavel
//------- ARROW function mais compacta "exclussivo java script"----
const soma = function(num1, num2){
    return num1+num2;
};

//Função seta 
const soma_seta = (num1, num2) => {
    return num1+num2;
};

//Função seta com "return" implicito
const soma_seta_impicito = (num1, num2) => num1+num2;

console.log("Retorno da Função: ", soma(3,3));
console.log("Retorno da Função: ", soma_seta(7,7));
console.log("Retorno da função: ", soma_seta_impicito(11,11));

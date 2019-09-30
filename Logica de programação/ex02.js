let entrada = require('readline-sync');

let temp = Number(entrada.question("Entre com a temperatura em Graus Celsius: "));

let opc = entrada.question("Digite f para Fahreheit e K para Kevin: ");
if(opc === 'F' || opc ==='f'){
    console.log("A temperatura em Fahreit : " + ((temp*9/5)+32));
}else if (opc === 'K' || opc ==='k'){
    console.log("A temperatura em Kelvin : "+ (temp+273.15));
}

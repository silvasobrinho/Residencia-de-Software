let num =1;
console.log("tipo da variável: ",typeof num);
let dateobj = new Date(); //nome de classe sempre maiusculo
console.log("Tipo de variavel: " , typeof dataobj);
let pessoa = {nome: "Fulano"};
console.log("tipo de variavel: ", typeof pessoa);

let t = Number ("texto")//texto para numero

console.log(t);

console.log("texto" == true);
console.log(num == true);
console.log(num == false);
console.log(t == "texto");
console.log(pessoa == pessoa);
console.log(pessoa === dateobj);
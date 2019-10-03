/*
let telefones = new Array();// Cria vetor vazio sem especificar tamanho
telefones[0] = 22442333;

let notas = new Array(3); // cria vetor vazio tamanho 3
notas[0] = 7.8;
notas[1] = 6.3;
notas[2] = 8.7;

let alunos = [];// cria vetor constante vazio sem especificar tamanho
alunos[0] = "Fulano";
alunos[1] = "Beltranho";
alunos[2] = "Ciclano";

let fim_de_semana = ["Sabado", "Domingo"] // cria o vetor ja com dois elementos

//descobrir o tamanho do vetor, quantidade de elementos, posicoes

console.log("Tamanho de telefones: ", telefones.length);
console.log("Tamanho de notas: ", notas.length);
console.log("Tamanho de alunos: ", alunos.length);
console.log("Tamanho de fim_de_semana: ",fim_de_semana.length);

for(let i=0;i<3;i++){
    console.log("nome: ",alunos[i]);
    console.log("Notas: ",notas[i]);
}
*/



/*
let notas = new Array(7,8,6.3,8.7);// crie e inicializa vetor notas
let alunos = ["Fulano", "Beltrano", "Ciclano"];//cria e inicializa nomes
notas[1]=6.5;

for(let i=0;i<alunos.length;i++){
    console.log("Nome: "+alunos[i]+" Nota: "+notas[i]);
    }

    let soma = 0;
    let i = 0;
    while(i<notas.length){
        soma +=notas[i];
        i++
    }

    let media = (soma/notas.length);

    console.log("A media das notas é: "+ media.toFixed(2)); // toFixed -- vai configurar a quantidade de numeros significativos
    */

/*
   let notas = new Array(7,8,6.3,8.7);// crie e inicializa vetor notas
   let alunos = ["Fulano", "Beltrano", "Ciclano"];//cria e inicializa nomes

   notas[notas.length-1]= 10;// adicionando valor na ultima posição do vetor
   alunos.push("José"); // Adicionando valor na Última posição do vetor
   notas.unshift(1.9,9.7); //Adicionando valores as primeiras posições do vetor
   alunos.unshift("João","Maria");//Adicionado valores bas primeiras posiçoes do vetor

   notas[0]= 3.3; // modifica valor da posição "0" para 3.3

   for (let i = 0; i< alunos.length ; i++){
       console.log("Nome: "+alunos[i]+ " Nota: "+ notas[i]);
   }
*/

/***Estruturas de dados de vetor --- Removendo elementos no Vetor */

let notas = new Array (1.1, 7.9, 6.3, 8.7, 5.1, 7.7, 9.93);
let alunos = ["João", "Fulano", "Beltrano", "Ciclano", "José", "Maria", "Fernando"];

console.log(alunos);
console.log(notas);
console.log("Tamanho do vetor Notas: ", notas.length);
console.log("Tamanho do vetor de Alunos: ", alunos.length);

ultima_nota = notas.pop();//9.93
ultimo_aluno = alunos.pop();
console.log("Último aluno: "+ ultimo_aluno + "| Ultima Nota: "+ ultima_nota);

primeira_nota = notas.shift();
primeiro_aluno = alunos.shift();
console.log("Primeiro aluno: "+primeiro_aluno+" | Primeira Nota: "+ primeira_nota);


console.log("Tamanho do vetor Notas: ", notas.length);
console.log("Tamanho do vetor Alunos ", alunos.length);

//Remover apenas 1 elemento na posição 2

nota_removida = notas.splice(2,1);//8.7
aluno_removido = alunos.splice(2,1);//Ciclano
console.log("Nota removida: ", nota_removida);
console.log("Aluno removido: ",aluno_removido);

console.log(alunos);
console.log(notas);

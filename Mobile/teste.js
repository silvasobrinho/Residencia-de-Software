/* let pessoas = [
    {nome: "João", idade: 23},
    {nome: "Pedro", idade: 17},
    {nome: "Maria", idade: 20},
    {nome: "Maria", idade: 15},
];

let pessoasMenores = [];

pessoas.forEach(pessoa => {
    if(pessoa.idade < 18){
        pessoasMenores.push(pessoa)
    }
});

console.log(pessoasMenores)


const novomenor = pessoas.filter( function(pessoa){
    return pessoa.idade < 18;
}).map( pessoa => {
    if(pessoa.idade <18){
    return pessoa.nome +" É menor de Idade eoow"
    }
})

console.log(novomenor)
 */
/* 
const outronovomenor =  novomenor.map( pessoa => {
    if(pessoa.idade <18){
    return pessoa.nome +" É menor de Idade eoow"
    }
})

console.log(outronovomenor) */


let pessoas = [
    { nome: "João", idade: 23, autorizado: false },
    { nome: "Pedro", idade: 17, autorizado: false },
    { nome: "Maria", idade: 20, autorizado: false },
    { nome: "Joana", idade: 15, autorizado: false }
  ];
 
  function preencheAutorizacao(pessoas) {

       pessoas.map(pessoa =>{
        if(pessoa.idade > 18){
          
        pessoa.autorizado = true;
        
        }
    })
    return pessoas;
  }


  let pessoas2 = preencheAutorizacao(pessoas);
  console.log(pessoas2);
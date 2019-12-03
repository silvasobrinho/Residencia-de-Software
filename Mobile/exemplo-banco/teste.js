const Conta = require("./Conta");

let contaPedro = new Conta();
contaPedro.depositar(1000);
console.log("Antes da transferencia")
console.log("Pedro: ",contaPedro.saldo)
let contaJoao = new Conta();
contaJoao.depositar(500);
console.log("joão: ",contaJoao.saldo)
//contaPedro.transferir valor -> contaJoao
contaPedro.transferir(contaJoao,10)

console.log("depois da transferencia")
console.log("joão: ",contaJoao.saldo)
console.log("Pedro: ", contaPedro.saldo)
/*  const resultado = conta.sacar(200); */
/* if (resultado) {
  console.log("Minha conta agora tem: " + resultado);
} else {
  console.log("Saldo indisponivel");
} */

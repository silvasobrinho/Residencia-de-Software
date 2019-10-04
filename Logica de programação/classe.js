//Definição da Classe
class Conta{
    constructor(){ // construtor da classe
        this.nome_titular = null;
        this.numero_conta = null;
        this.saldo = 0;
    }
};

minhaConta = new Conta(); //\cria um objeto da classe Conta
minhaConta.nome_titular = "Giovane da Silva";
console.log(minhaConta);

outraConta = new Conta(); // Cria um objeto da classeConta
outraConta.nome_titular = "Giovane Sobrinho";
console.log(outraConta);
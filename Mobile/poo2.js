class Conta {
    constructor(nome, saldo, data){
        this.nome = nome;
        this.saldo = saldo;
        this.dataAbertura = data;
    }
deposito(dindin){
this.saldo += dindin;
console.log("depositado, Total é de: ", this.saldo);
}

saque(dindin){
    if(this.saldo >= dindin){
        this.saldo-= dindin;
        console.log("Sacou: "+ dindin);
        console.log("Seu saldo é ", this.saldo);
    }
    console.log("Não tem saldo suficiente para sacar.")
}

pegarDados(){
    console.log("nome "+ this.nome +" saldo: "+ this.saldo+ " Data da abertura da Conta: "+ this.dataAbertura)
}

}

class ContaPessoaFisica extends Conta{
    constructor(nome, saldo, data,cpf){
        super(nome, saldo, data);
        this.cpf = cpf;
    }
}

class ContaPessoaJuridica extends Conta{
    constructor(nome, saldo, data, cnpj){
        super(nome, saldo, data)
        this.cnpj = cnpj;
    }
}

let conta01 = new ContaPessoaFisica ("Giovane", 15 , "15-03-2017", 111111111545)

console.log(conta01.nome);
console.log(conta01)
console.log("==========================")
conta01.deposito(5)
console.log(conta01)
console.log("==========================")
conta01.saque(99)
conta01.saque(9)
console.log("==========================")
conta01.pegarDados();
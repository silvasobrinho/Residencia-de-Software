class Conta {
  constructor() {
    this.saldo = 0;
    this.agencia;
    this.numero;
    this.tipo;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo = this.saldo - valor;
      return this.saldo;
    }
    return false;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo = this.saldo + valor;
    }
    return this.saldo;
  }

  transferir(destino, qtd){
    if(this.saldo >= qtd && destino){
      this.saldo -= qtd;
      destino.saldo += qtd;
    }
  }
  //transferir() {}

  //extrato () {}
}

module.exports = Conta;

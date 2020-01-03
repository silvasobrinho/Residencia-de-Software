class ProdutoController {
  constructor() {
    this._produtos = [];
  }

  async listarProdutos() {
    return this._produtos;
  }

  async addProduto(produto) {
    this._produtos.push(produto);
  }
}

module.exports = ProdutoController;

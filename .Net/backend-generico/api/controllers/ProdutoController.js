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

  async deleteProduto(item) {
    let posicao = this._produtos
      .map(indice => {
        return indice.produto;
      })
      .indexOf(item);
    this._produtos.splice(posicao, 1);
  }
}

module.exports = ProdutoController;

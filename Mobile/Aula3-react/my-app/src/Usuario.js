import React, { Component } from "react";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = {  pessoas: ["Maria", "Pedro", "Joana"] };

    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    this.remover = this.remover.bind(this);
    this.guardovalor = this.guardovalor.bind(this);
  }


  cadastrarUsuario(evento) {
    evento.preventDefault();

    //para não escrever quando o cmapo esta vazio 
    if (evento.target[0].value) {
      this.setState({
        pessoas: this.state.pessoas.concat([evento.target[0].value])
        
      })
    }
  }

  remover(evento) {
    evento.preventDefault();
    let pessoas = this.state.pessoas;
    let pessoaEditar = this.state.inputValue;
    let acheiIndex = pessoas.findIndex(x => x === pessoaEditar);
    //removo do vetor
    this.state.pessoas.splice(acheiIndex, 1);
    //se não existir não retira
    if (acheiIndex !== -1) {
      this.setState({
        pessoas: this.state.pessoas

      })
    }

  }

  guardovalor(evento) {
    this.setState({
      inputValue: evento.target.value
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.cadastrarUsuario}>
          <input type="text" value={this.state.value} onChange={this.guardovalor} />
          <input type="submit" />
          <button onClick={this.remover}>Remover</button>
        </form>
        <ul>
          {this.state.pessoas.map((nome, index) => (
            <li key={index}>{nome}</li>

          ))}

        </ul>
      </>
    );
  }
}
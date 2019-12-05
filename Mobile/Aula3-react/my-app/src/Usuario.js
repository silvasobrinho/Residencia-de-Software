import React, { Component } from "react";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state =  { "pessoas": [
                              {"nome": "maria",
                              "email": "maria@maria",
                              "telefone": "24745649874" },
                              {"nome": "Pedro",
                              "email": "Pedro@pedroca@maria",
                              "telefone": "2198744984" },
                              {"nome": "Joana",
                              "email": "Joana@joaninhavoa",
                              "telefone": "1132165468" }
                              ]
                                }  
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
          <label>Nome</label>
          <input type="text" value={this.state.value} onChange={this.guardovalor} />
          <label>Email</label>
          <input type="email" value={this.state.value} onChange={this.guardovalor} />
          <label>Telefone</label>
          <input type="tel" value={this.state.value} onChange={this.guardovalor} />
          <input type="submit" />
          <button onClick={this.remover}>Remover</button>
        </form>

        <table>
        <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            </tr>
            <tr>
          {this.state.pessoas.forEach((element) => {
            element.forEach(elemento => {
           <td> {elemento} </td>
            })
          })
        }
            

         

        </tr>
        </table>
      </>
    );
  }
}
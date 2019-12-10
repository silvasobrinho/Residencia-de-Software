import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      telefone: "",
      pessoas: []
    }

    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    this.excluir = this.excluir.bind(this);
  }

  excluir(event) {
    event.preventDefault();
    this.state.pessoas.splice(event.target.id, 1);
    this.setState({
      pessoas: this.state.pessoas
    })
  }


  cadastrarUsuario(evento) {
    evento.preventDefault();
    this.setState({ pessoas: [...this.state.pessoas, [this.state.nome, this.state.telefone, this.state.email]] })

  }

  render() {
    return (
      <>
        <form onSubmit={this.cadastrarUsuario}>
          <label>Nome</label>
          <input className="col-md-5 form-control" type="text" onInput={(val) => { this.setState({ nome: val.target.value }) }} />
          <label>Email</label>
          <input className="col-md-5 form-control" type="email" onInput={(val) => { this.setState({ email: val.target.value }) }} />
          <label>Telefone</label>
          <input className="col-md-5 form-control" type="tel" onInput={(val) => { this.setState({ telefone: val.target.value }) }} />
          <input type="submit" />

        </form>

        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
            </tr>


            {this.state.pessoas.map((pessoa, index) => (

              <tr key={index * 10}>
                <td>{pessoa[0]}</td>
                <td>{pessoa[1]}</td>
                <td>{pessoa[2]}</td>
                <td><button key={index} id={index} onClick={this.excluir}>Excluir</button></td>
              </tr>

            )
            )}
          </tbody>

        </table>
      </>
    );
  }
}

const style = {
  input: {
    paddingLeft: 10
  },
  h1: {
    fontSize: 100
  },
  h1Color: {
    color: "blue"
  }
};

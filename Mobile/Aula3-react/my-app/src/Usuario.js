import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = { nome: "", pessoas: ["Maria", "Pedro", "Joana"] };
    console.log(this.state.pessoas)
  }

  render() {
    return (
      <>
        <form onSubmit={this.cadastrarUsuario}>
          <input  type="text"  placeholder="Nome" />
          <input type="submit" />
        </form>
        <ul>
          {this.state.pessoas.map(nome => (
            <li>{nome}</li>
            
          ))}
           
        </ul>
      </>
    );
  }

  cadastrarUsuario(evento) {
    evento.preventDefault();
  
    console.log(evento.target[0].value);
    
    console.log(this)
   //this.state.pessoas.push(evento.target[0].value);
  }
}
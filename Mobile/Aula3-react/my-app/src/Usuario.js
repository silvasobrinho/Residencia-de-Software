import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = { nome: "", pessoas: ["Maria", "Pedro", "Joana"] };
      
    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
  }


  cadastrarUsuario(evento) {
    evento.preventDefault();
    //tem que setar o state cabaço, assim não vai
   /*  this.state.pessoas.push(evento.target[0].value); */

   this.setState({
     pessoas: this.state.pessoas.concat([evento.target[0].value])
   })
  
    
  }

  render() {
    return (
      <>
        <form onSubmit={this.cadastrarUsuario}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
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
  
  
}
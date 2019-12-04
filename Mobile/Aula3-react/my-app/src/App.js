import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



//não tem o default tem que usar desconstruido na chamada e fazer a chamada

//Componentes de Classe
export class CadastroUsuario extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <form onSubmit={this.cadastrarUsuario}>
        <input type="text" placeholder="Nome" />
        <input type="submit" />
      </form>
    );
  }
  cadastrarUsuario(evento){
    evento.preventDefault();
    console.log(evento.target.value)
  }
}

export class ListagemUsuario extends Component {
  constructor(){
    super()
    this.state = { pessoas: ["João","Pedro","Giovane","Maiana","Rosa","Bananinha"]}
  }
  
  
  render() {
    return (
      <ul>
        {this.state.pessoas.map(nome => <li>{nome}</li>)}
        
      </ul>
    );
  }
}


//Componentes de classe e componentes funcionais são os dois tipos de componentes que existem
//componentes de classe

// toda classe tem que extender de component
/* class App extends Component{  
  //metodo responsavel para renderizar as coisas  na tela  
  render(){
      return (
      <div>
      <p> Olá, Olá</p>        
      </div>
      );
    }
} */

// Componentes funcionais

/* export default function App(){
  
    return (
    <div>
    <p> Olá, Olá, Olê</p>        
    </div>
    );
  } */

//se emportar na funcção não precisa no final, manter o nome da classe e da função no export
/* export default App;
 */
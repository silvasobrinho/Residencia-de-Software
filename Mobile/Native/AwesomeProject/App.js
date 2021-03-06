/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TextInput, Button} from 'react-native';
import InserirDados from './components/InseirDados';
import Listar from './components/Listar'; 
import { Navigation } from 'react-native-navigation';
import TelaInicial from './telas/TelaInicial';
import TelaListar from './telas/TelaListar';
import TelaCadastro from './telas/TelaCadastro';

Navigation.registerComponent('TelaInicial', ()=> TelaInicial)
Navigation.registerComponent('TelaListar', ()=> TelaListar)
Navigation.registerComponent('TelaCadastro', ()=> TelaCadastro)

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
      root: {
        stack:{
          id: 'AppStack',
          children: [
            {
                component:{
              name: 'TelaInicial',
                  options: {
                      topBar:{
                        title: {
                           text: 'App de cadastro' 
                        }
                      }
                  }
        }
      },
    ]
  }
}
    })
})

type Props = {};

export default class App extends Component<Props>{

  constructor(props){

    super(props)
    this.state={
      text: "",
      pessoas: [] 
    }

    this.inserirPessoa = this.inserirPessoa.bind(this)
    this.inputMudando = this.inputMudando.bind(this)

  }

  renderItem(obj){
    
    return(
      <Text style={styles.item}>{obj.item.nome}</Text>
    )
  }

  inserirPessoa(){
    let newPessoa = {
      key: this.state.pessoas.length.toString(),
      nome: this.state.text,
      //done: false
    }

    let pessoas = this.state.pessoas;
    pessoas.push(newPessoa)
    this.setState({pessoas})

    let text = ""
    this.setState({text})
    this.setState.text = "";

  }
//muda o estado da text para ser usando dewntro do componente
  inputMudando(text){    
    this.setState({text})
  }
  
goToScreen = (NomeDaTela) => {
          Navigation.push(this.props.componentId,{
            component: {
                nome: NomeDaTela
            }
          })

}
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },

  lista: {
    marginTop:25
  },

  item:{
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#E4EBEE',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center'
  },

  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },

  
  input:{
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 3,
    padding: 5,
    margin: 5,
    flex: 1
  }
});

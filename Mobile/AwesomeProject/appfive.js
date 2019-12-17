import React from 'react';
import { Button, View,ScrollView, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import axios from 'axios';
import api from './api'

class HomeScreen extends React.Component {
  constructor(props){

    super(props)
    this.state={
      text:'',
      pessoas:  [],
      quantidade: '',
      preco: '' 
      }
      this.inserirPessoa = this.inserirPessoa.bind(this)
      this.deletaritem = this.deletaritem.bind(this)
    }

    deletaritem(pos){

      // bugado pois nao estou conseguindo mandar o state toda hora que muda, permanece o que eu enviei na rota a nao ser que scroola a tela ai atualiza

     let pessoa = this.state.pessoas;
      pessoa.splice(pos, 1);
      this.setState.pessoas = pessoa;

      
      this.props.navigation.navigate('Listagem', {
        text: this.state.text,
        pessoas: this.state.pessoas, 
        quantidade: this.qtd,
        preco: this.preco,
        deletaritem: this.deletaritem})
    }
    inserirPessoa(pessoa, qtd, preco){
      let newPessoa = {
        key: this.state.pessoas.length.toString(),
        nome: pessoa,
        quantidade: qtd,
        preco: preco
        //done: false
      }
  
      let pessoas = this.state.pessoas;
      pessoas.push(newPessoa)
      this.setState({pessoas})
  
      let text = ""
      this.setState({text})
      console.log(this.state.pessoas)
     
   
     
    }



  render() {
    return (
      <View >
        <View style={{  alignItems: 'center' }}>
        <Text>App de Cadastro</Text>
        </View>
        <View>
        <Button
          title="Cadastrar" 
          onPress={() => {
            this.props.navigation.navigate('CadastrarS', {
             text: this.state.text,
             pessoas: this.state.pessoas,
             inserirPessoa: this.inserirPessoa.bind(this)
            });
          }}
        />
        </View>

        <View>
         <Button
          title="Listar" 
          onPress={                            
            () => {
            this.props.navigation.navigate('Listagem', {
              text: this.state.text,
              pessoas: this.state.pessoas, 
              quantidade: this.qtd,
              preco: this.preco,
              deletaritem: this.deletaritem             
            });
          } }
        />
        </View>
      </View>
    );
  }
}

class CadastrarScreen extends React.Component {

    constructor(props){

        super(props)
        this.state={
          qtd: '',
          preco: '',
          nome: '',
         
        }      
        this.enviarInfos = this.enviarInfos.bind(this)
          }
    
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);



    
    return {
      title: navigation.getParam('otherParam', 'Cadastro'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  enviarInfos(){
    api.post('/cadastrar', {
        nome: this.state.nome,
        preco: this.state.preco,
        quantidade: this.state.qtd
      })
      .then(function (response) {
        this.setState({nome: ''}),
        this.setState({preco: ''}),
        this.setState({quantidade: ''})
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  render() {
 
/* alert(this.props.navigation.getParam('text')) */
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cadastre seu produto</Text>
        <View style={styles.inputView}>
          <TextInput placeholder="Insira seu nome" style={styles.input} onChangeText={(nome)=>{this.setState({nome})}}  value={this.state.nome}  />
          <TextInput placeholder="Insira a quantidade" style={styles.input} onChangeText={(qtd)=>{this.setState({qtd})}}  value={this.state.qtd}  />
          <TextInput placeholder="Insira o preço" style={styles.input} onChangeText={(preco)=>{this.setState({preco})}}  value={this.state.preco}  />
           <Button onPress={this.enviarInfos} title="Inserir"/>

        </View>
         <Button
          title="Voltar"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class ListagemScreen extends React.Component {
  constructor(props){

    super(props)
    this.state={
      listagem: []
    
    }
    this.renderItem = this.renderItem.bind(this)
  }
        
    renderItem(obj){
        api.get('/listar')
          .then(function (response) {
            /* this.setState({listagem: response.}), */
            
           console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });


        return(
          <ScrollView>
     <View>     
    <Text style={styles.item}> Produto: {obj.item.nome}      Quantidade: {obj.item.quantidade}      Preço: {obj.item.preco}{console.log(obj)}
    
    </Text><Button title="Deletar" onPress={()=>{this.props.navigation.state.params.deletaritem(obj.index)}}/></View>
    </ScrollView>
        )
      }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        
      console.log(navigationOptions);
     

     
      return {
        title: navigation.getParam('otherParam', 'Lista de Cadastros'),
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Lista de produtos Cadastrados</Text>
              <FlatList style={styles.lista} data={this.state.pessoas} renderItem={(this.renderItem)} extraData={this.state.pessoas}/> 

          <Button
            title="Voltar"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    CadastrarS: CadastrarScreen,
    Listagem: ListagemScreen 
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


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
      fontSize: 18,
      marginBottom: 5,
      marginRight: 10,
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

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

import React from 'react';
import { Button, Image, View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Navigation } from 'react-native-navigation';
import TelaInicial from './telas/TelaInicial';
import TelaListar from './telas/TelaListar';
import TelaCadastro from './telas/TelaCadastro';

type Props = {};
var pessoasUAU ;

class HomeScreen extends React.Component {

    

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>App de Cadastro</Text>
        <Button
          title="Cadastrar"
          onPress={() => {
            this.props.navigation.navigate('CadastrarS', {
             
            });
          }}
        />
         <Button
          title="Listar"
          onPress={() => {
            this.props.navigation.navigate('Listagem', {
             
            });
          }}
        />
      </View>
    );
  }
}

class CadastrarScreen extends React.Component {

    constructor(props){

        super(props)
        this.state={
          text: "",
          pessoas: [] 
        }
    
        this.inserirPessoa = this.inserirPessoa.bind(this)
        this.inputMudando = this.inputMudando.bind(this)
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
        console.log(this.state.pessoas)
        pessoasUAU = this.state.pessoas
        console.log("UAAAAAU" , pessoasUAU)
      }

      inputMudando(text){    
        this.setState({text})
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

  render() {
 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela de Cadastro</Text>
        <View style={styles.inputView}>
        <InserirDados estilo={this.styles} valor={this.state.text} inputMudando={this.inputMudando} inserirPessoa={this.inserirPessoa}/>

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
          text: "",
          pessoas: []
        }
    }
        
    renderItem(obj){
        
        return(
          <Text style={styles.item}>{obj.item.nome}</Text>
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
          <Text>Tela de Listagem</Text>
         
          <Listar pessoas={this.state.pessoas} renderItem={this.renderItem}  />
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

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

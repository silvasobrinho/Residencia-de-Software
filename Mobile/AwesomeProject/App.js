import React from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class HomeScreen extends React.Component {
  constructor(props){

    super(props)
    this.state={
      text: "",
      pessoas: [] 
    }

    this.inserirPessoa = this.inserirPessoa.bind(this)

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
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>App de Cadastro</Text>
        <Button
          title="Cadastrar"
          onPress={() => {
            /* Botão cadastrar na home */
            this.props.navigation.navigate('CadastrarScreen', {
             
            });
          }}
        />
         <Button
          title="Listar"
          onPress={() => {
            /* 2. Botão listar na home */
            this.props.navigation.navigate('ListarScreen', {
            
            });
          }}
        />
      </View>
    );
  }
}

class CadastrarScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cadastrar</Text>
        <TextInput placeholder="Insira seu nome" style={styles.input} onChangeText={(text)=>{this.setState({text})}} value={this.state.text} />
        <Button onPress={this.inserirPessoa} title="Inserir"/>
        
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        
      </View>
    );
  }
}

class ListarScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Listagem</Text>
        <FlatList style={styles.lista} data={this.state.pessoas} renderItem={this.renderItem} extraData={this.state}/>    
               
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Cadastrar: CadastrarScreen,
    Listar: ListarScreen

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

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

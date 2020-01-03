import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import api from '../api/config/api'

class HomeActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {produtos: []};
  }
  static navigationOptions = {
    title: 'Sistema de cadastro de produtos',
    headerStyle: {
      backgroundColor: '#6b3466',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  clear = () => {
    let aux = [];
    this.setState({produtos: aux});
     return aux;
  };
  cadastrarUsuario = (produto, valor, quantidade) => {
    let aux = {produto, valor, quantidade};
    let array = this.state.produtos;
    array.push(aux);
    this.setState({produtos: array});
    console.log('Cadastrado: ', this.state.produtos);
    api.post('/cadastrar', {
      produto: produto,
      valor: valor,
      quantidade: quantidade,
      })
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });

      
  }
  
  deletarItem = name => {
    let aux = this.state.produtos;
    let array = aux.filter(produto => name !== produto.produto);
    this.setState({produtos: array});
    console.log('Delete: ', array);
    api.delete('/deletar/:produto');
    return array;
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Lista de Compras</Text>
        <Button
          title="Inserir Item"
          onPress={() => {
            this.props.navigation.navigate('Product', {
              adicionar: this.cadastrarUsuario,
            });
          }}
        />
        <Button
          title=" Exibir Lista "
          onPress={() => {
            this.props.navigation.navigate('Show', {
              lista: this.state.produtos,
              deletar: this.deletarItem,
              clear: this.clear,
            });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 0.4,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 35,
    fontWeight: 'bold',
  },
});
export default HomeActivity;

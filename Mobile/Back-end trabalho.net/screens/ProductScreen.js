import React, {Component} from 'react';
import {TextInput, StyleSheet, Alert, View, Button} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {produto: '', valor: '', quantidade: '', produtos: []};
  }
  static navigationOptions = {
    title: 'Adicione um item',
    
    headerStyle: {
      backgroundColor: '#346b5a',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.produto}
          placeholder="Escreva o nome do produto:"
          onChangeText={text => this.setState({produto: text})}
        />
        <TextInputMask
          style={styles.textInput}
          placeholder="Escreva o seu valor:"
          type={'money'}
          value={this.state.valor}
          onChangeText={text => {
            this.setState({
              valor: text,
            });
          }}
        />
        <TextInputMask
          style={styles.textInputLast}
          type={'only-numbers'}
          value={this.state.quantidade}
          placeholder="Escreva a quantidade:"
          onChangeText={text => {
            this.setState({
              quantidade: text,
            });
          }}
        />
        <Button
          title="Cadastrar Item"
          color="#346b5a"
          onPress={() => {
            this.props.navigation.getParam('adicionar')(
              this.state.produto,
              this.state.valor,
              this.state.quantidade,
            );
            this.setState({produto: '', valor: '', quantidade: ''});
            Alert.alert('Sucesso!', 'Seu produto foi cadastrado.');
          }}
        />
        
         <Button
          title="Voltar"
          color="#346b5a"
          onPress={() => this.props.navigation.goBack()}
        />
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height: 60,
    marginTop: 1,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  textInputLast: {
    height: 60,
    marginBottom: 10,
    marginTop: 1,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  container: {
    padding: 50,
  },
});

export default Item;

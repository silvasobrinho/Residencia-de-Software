import React from 'react';
import {Text, StyleSheet, FlatList, View, Button} from 'react-native';
import api from '../api/config/api'

class ShowActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lista: []};
  }
  static navigationOptions = {
    title: 'Lista dos produtos cadastrados',
    headerStyle: {
      backgroundColor: '#346b5a',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  showElements = () => {
    api.get('/listar')
      .then(response => {
        this.setState({lista: response.data});
        console.log(this.state.lista)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  };
  componentDidMount() {
    this.showElements();
  }
  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.lista}
          renderItem={({item, index}) => (
            <View style={styles.container}>
              <Text style={styles.item}>{item.produto}</Text>
              <Text style={styles.item}>{item.valor}</Text>
              <Text style={styles.item}>{item.quantidade}</Text>
              <Button
                type="delete"
                color="#360a18"
                title="Excluir"
                onPress={() => {
                  this.setState({
                    lista: this.props.navigation.getParam('deletar')(
                      item.produto,
                    ),
                  });
                }}
              />
            </View>
          )}
        />
        <View style={styles.buttonContainer}>
          <Button
            type="delete"
            color="#346b5a"
            title="  Recarregar  "
            onPress={() => {
              this.setState({
                lista: this.props.navigation.getParam('clear')(),
              });
              this.componentDidMount();
            }}
          />
          
         <Button
          title="Voltar"
          color="#346b5a"
          onPress={() => this.props.navigation.goBack()}
        />
      
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  container: {
    marginTop: 2,
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonContainer: {

    paddingTop: 15,
    paddingRight: 24,
    borderRadius: 100,
  },
});
export default ShowActivity;

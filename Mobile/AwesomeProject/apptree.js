import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";

class InserirDados extends Component {

      render(){
        return (

            <View style={styles.inputView} >
                
             <TextInput placeholder="Insira seu nome"  style={styles.input}  onChangeText={ (text) => {props.inputMudando(text)} } value={props.text} />
             <Button onPress={props.inserirPessoa} title="Inserir"/>
            </View>


        );
      }
    
}

export default InserirDados;

const styles = StyleSheet.create({
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
    })
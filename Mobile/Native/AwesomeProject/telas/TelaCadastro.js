import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";
import InserirDados from '../components/InseirDados';



class TelaCadastro extends Component{
        render(){
            return (
                <InserirDados estilo={this.styles} valor={this.state.text} inputMudando={this.inputMudando} inserirPessoa={this.inserirPessoa}/>
            );
        }
}
export default TelaCadastro;
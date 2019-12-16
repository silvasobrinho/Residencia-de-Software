import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";
import Listar from '../components/Listar';



class TelaListar extends Component{
        render(){
            return (
                <Listar pessoas={this.state.pessoas} renderItem={this.renderItem}  />
            );
        }
}
export default TelaListar;
import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList
} from "react-native";

const InserirDados = (props) => {

 
        return (
        
                      
            <FlatList style={styles.lista} data={props.pessoas}  renderItem={props.renderItem} extraData={this.state}   />      
            

        );
    
}

export default InserirDados;

const styles = StyleSheet.create({
 
      lista: {
        marginTop:25
      },
    })
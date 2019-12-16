import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";
import Listar from '../components/Listar';



class TelaInicial extends Component{
       
    goToScreen = (NomeDaTela) => {
        Navigation.push(this.props.componentId,{
          component: {
              nome: NomeDaTela
          }
        })

}


    render(){
            return (
                <view>
         <Button title="Cadastrar" onPress={()=>this.goToScreen('Cadastrar')}/>
          
         <Button title="Listar" onPress={()=>this.goToScreen('Listar')}/>
         </view>
            );
        }
}
export default TelaInicial;
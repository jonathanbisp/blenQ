import React, { Component } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';

export default class telaInicial extends Component{
    
    static navigationOptions ={ 
        title: "Início",
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        headerStyle: {
            backgroundColor: "#8B4513"
         },
        headerTintColor: "#fff"
    };
    
    
    render(){
        StatusBar.setBackgroundColor('#8B4513');
        StatusBar.setBarStyle("light-content");
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize:50}}>Tela Inicial</Text>
                <View style={{margin:40}}>
                    <Button
                        title="Ir para Tela Secundaria"
                        onPress = {() => this.props.navigation.navigate('Secundaria', {name:'Jonathan',age:18})}
                />
                </View>
            </View>
        );}
}

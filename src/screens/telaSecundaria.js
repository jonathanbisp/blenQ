import React, { Component } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';

export default class telaSecundaria extends Component{
    
    static navigationOptions ={ 
        title: "Secundaria",
        headerTitleStyle: { 
            //textAlign:"center", 
            //flex:1
            fontWeight: 'bold'
        },
        headerStyle: {
            backgroundColor: "#8B4513"
         },
        headerTintColor: "#fff"
    };
    
    
    render(){

        const name = this.props.navigation.getParam('name','Anônimo');
        const age = this.props.navigation.getParam('age', 'Não determinado');
        StatusBar.setBackgroundColor('#8B4513');
        StatusBar.setBarStyle("light-content");
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize:50}}>Tela Secundaria</Text>
                <Text style={{fontSize:25}}>Nome: {JSON.stringify(name)}</Text>
                <Text style={{fontSize:25}}>Idade: {JSON.stringify(age)}</Text>
                <View style={{margin:40}}>
                    <Button
                        title="Ir para Tela Terciaria"
                        onPress = {() => this.props.navigation.navigate('Terciaria')}
                />
                </View>
            </View>
        );}
}

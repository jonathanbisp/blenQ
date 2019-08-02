import React, { Component } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';

export default class telaTerciaria extends Component{
    
    static navigationOptions ={ 
        title: "Terciaria",
        headerTitleStyle: { 
            fontWeight: 'bold',
            //textAlign:"center", 
            //flex:1 
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
                <Text style={{fontSize:50}}>Tela Terciaria</Text>
                <View style={{margin:40}}>
                    <Button
                        title="Ir para Tela Inicial"
                        onPress = {() => this.props.navigation.navigate('Inicial')}
                />
                </View>
            </View>
        );
    }
}
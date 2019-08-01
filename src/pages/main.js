import React, { Component } from 'react';
import{ View, Text, StatusBar } from 'react-native';

export default class Main extends Component{
    static navigationOptions ={  
        title: "Início",
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1,
        },
        headerStyle: {
            backgroundColor:"#000"
        },
        headerTintColor: "#FFF",
    };
    
    
    
    render(){
        StatusBar.setBarStyle("light-content");
        StatusBar.setBackgroundColor("#000")
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:50}}>Tela Inicial</Text>
            </View>
        )}
}
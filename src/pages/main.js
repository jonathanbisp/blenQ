import React, { Component } from 'react';
import{ View, Text } from 'react-native';

export default class Main extends Component{
    static navigationOptions ={  
        title: "JSHunt",
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },   
    };

    render(){
        return(
            <View>
                <Text>Página Main</Text>
            </View>
        )}
}
import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {telaInicial, telaSecundaria, telaTerciaria} from './src/screens'

const AppNavigator = createStackNavigator ({

    Inicial:{
        screen: telaInicial
    },
    Secundaria:{
        screen: telaSecundaria
    },
    Terciaria:{
        screen: telaTerciaria
    }},
    {
        initialRouteName: 'Inicial'
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
    render(){
        return <AppContainer/>;
    }
}
import React, { Component } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class telaInicial extends Component{
    
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
                        onPress = {() => this.props.navigation.navigate('Secundaria')}
                />
                </View>
            </View>
        );
    }
}
class telaSecundaria extends Component{
    
    static navigationOptions ={ 
        title: "Secundaria",
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
                <Text style={{fontSize:50}}>Tela Secundaria</Text>
                <View style={{margin:40}}>
                    <Button
                        title="Ir para Tela Terciaria"
                        onPress = {() => this.props.navigation.navigate('Terciaria')}
                />
                </View>
            </View>
        );
    }
}
class telaTerciaria extends Component{
    
    static navigationOptions ={ 
        title: "Terciaria",
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
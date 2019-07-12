import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { db } from './ConnectFirebase';

import MainNavigators from './navigation/MainNavigators';
import ForgetPassScreen from './screens/ForgetPass';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';



const login = createStackNavigator({
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    ForgetPass: { screen: ForgetPassScreen }
},
    {
        navigationOptions: ({ header: null })
    })

const main = createStackNavigator({
    Main: {
        screen: MainNavigators,
        navigationOptions: ({ navigation }) => ({ header: null })
    }
},
    {
        navigationOptions: ({ header: null })
    }
)

const myApp = createStackNavigator({
    loginStack: { screen: login },
    loading: { screen: LoadingScreen },
    mainStack: { screen: main }
},
    {
        initialRouteName: 'loginStack'
    })

export default createAppContainer(myApp);

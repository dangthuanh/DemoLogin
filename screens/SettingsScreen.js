import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class SettingScreen extends Component{
    static navigationOptions = {
        header: null
    };
    render(){
        return(
            <View>
                <Text>SettingScreen</Text>
            </View>
        )
    }
}
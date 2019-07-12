import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class NotificationScreen extends Component{
    static navigationOptions = {
        header: null
    };
    render(){
        return(
            <View>
                <Text>NotificationScreen</Text>
            </View>
        )
    }
}
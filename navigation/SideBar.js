import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import * as firebase from 'firebase';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { DrawerItems } from 'react-navigation';

export default class SideBar extends Component {

    onLogoutPress = () => {
        try {
            firebase.auth().signOut();
            this.props.navigation.navigate('loginStack')
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <View>
                <View style={styles.avatar}>
                    <Image
                        style={styles.avatarImage}
                        source={require('../assets/images/avatar.png')}
                    />
                    <Text style={styles.avatarText}>Hello ...</Text>
                </View>

                <View>
                    <DrawerItems {...this.props} />
                </View>

                <TouchableOpacity
                    style={styles.logout}
                    onPress={() => this.onLogoutPress()}
                >
                    <Text style={styles.logoutText}>Log Out</Text>
                    <Ionicons
                        name='ios-log-out'
                        size={28}
                        color='rgba(0, 0, 0, 0.5)'
                        style={styles.logoutIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    avatar: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'red'
    },
    avatarText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5
    },
    logout: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    logoutIcon: {
        position: 'absolute',
        top: 10,
        left: 18
    },
    logoutText: {
        marginLeft: '26%',
        fontWeight: 'bold'
    }
});
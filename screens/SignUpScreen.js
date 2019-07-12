import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import { db } from '../ConnectFirebase';

const bgImage = require('../assets/images/bgsignup.jpg');
const { width: WIDTH } = Dimensions.get('window');

export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            showPass: true,
            press: false,
        }
    }

    handleSignUp = () => {
        db
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }


    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        }
        else {
            this.setState({ showPass: true, press: false })
        }
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ScrollView style={{ marginTop: '30%' }}>
                        <View>
                            <Text style={styles.textTitle}>Sign Up</Text>

                            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>

                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Email'
                                keyboardType='email-address'
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'

                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                            />
                            <Ionicons name='md-mail'
                                size={28}
                                color='rgba(255, 255, 255, 0.7)'
                                style={styles.inputIcon}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Password'
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'

                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                            />
                            <Ionicons name='md-lock'
                                size={28}
                                color='rgba(255, 255, 255, 0.7)'
                                style={styles.inputIcon}
                            />
                            <TouchableOpacity
                                style={styles.btnEye}
                                onPress={() => this.showPass()}
                            >
                                <Ionicons name={this.state.press == false ? 'md-eye' : 'md-eye-off'}
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                />
                            </TouchableOpacity>
                        </View>

                        {/* <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Email'
                                keyboardType='email-address'
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                            <Ionicons name='md-mail'
                                size={28}
                                color='rgba(255, 255, 255, 0.7)'
                                style={styles.inputIcon}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Mobile phone'
                                keyboardType='phone-pad'
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                            <Ionicons name='md-phone-portrait'
                                size={28}
                                color='rgba(255, 255, 255, 0.7)'
                                style={styles.inputIcon}
                            />
                        </View> */}

                        <View style={styles.textButton}>
                            <TouchableOpacity
                                style={styles.text_ok}
                                onPress={this.handleSignUp}
                            >
                                <Text style={style = styles.text}>OK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.text_cancel}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Text style={styles.text}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '5%',
    },
    inputContainer: {
        marginTop: '5%'
    },
    textInput: {
        width: WIDTH - 55,
        height: 50,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'rgba(255, 255, 255, 0.9)',
        paddingLeft: 55
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 20
    },
    btnEye: {
        position: 'absolute',
        top: 12,
        right: 25,
    },

    textButton: {
        width: WIDTH - 55,
        height: 50,
        marginTop: '5%',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
    },
    text_ok: {
        marginRight: '5%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 154, 205, 0.5)',
    },
    text_cancel: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 139, 69, 0.57)',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});
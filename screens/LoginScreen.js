import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import * as firebase from 'firebase';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

const bgImage = require('../assets/images/background.jpg');
const logo = require('../assets/images/logo.png');
const { width: WIDTH } = Dimensions.get('window');


export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            loadding: false,
            showPass: true,
            press: false
        }
    }

    onLoginPress = () => {
        this.setState({ errorMessage: '', loadding: true })

        const { email, password } = this.state;

        if (email.length === 0 || password.length === 0) {
            this.setState({ errorMessage: 'Email and password is required!', loadding: false });
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState({ errorMessage: '', loadding: false });
                    this.props.navigation.navigate('mainStack');
                })
                .catch(() => {
                    this.setState({ errorMessage: 'Email or password is incorrect!', loadding: false });
                })
        }

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
                <KeyboardAvoidingView behavior="position" enabled>

                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.textLogo}>DEMO APP</Text>
                    </View>

                    <Text style={{ color: 'red', fontSize: 16 }}>{this.state.errorMessage}</Text>

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

                    <TouchableOpacity
                        style={styles.btnLogin}
                        // onPress={() => this.onLoginPress()}
                        onPress = {() => {this.props.navigation.navigate('mainStack')}}
                    >
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.textSignUp}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('ForgetPass') }}
                        >
                            <Text style={styles.text_forgetpass}>Forget Pasword?</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}> Or </Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('SignUp') }}
                        >
                            <Text style={styles.text_signup}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: '15%',
    },
    logo: {
        width: 120,
        height: 120,
    },
    textLogo: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '5%'
    },
    textInput: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'rgba(255, 255, 255, 0.9)',
        paddingLeft: 55
    },
    inputContainer: {
        marginTop: '5%'
    },
    inputIcon: {
        position: 'absolute',
        top: 7,
        left: 20
    },
    btnEye: {
        position: 'absolute',
        top: 7,
        right: 25,
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#009ACD',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    textLogin: {
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5
    },
    textSignUp: {
        width: '90%',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    text_forgetpass: {
        fontWeight: 'bold', fontSize: 16, color: '#104E8B', textAlign: 'left'
    },
    text_signup: {
        fontWeight: 'bold', fontSize: 16, color: '#006600', textAlign: 'right'
    }
});
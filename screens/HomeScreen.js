
import React, { Component } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['#4ECDC4', '#556270']}
          style={styles.linearGradient}
        />

        <Text style={{ fontSize: 23 }}>Home Screen </Text>
        <Button
          title='Go to Chat Screen'
          onPress={() => { this.props.navigation.navigate('Chat') }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
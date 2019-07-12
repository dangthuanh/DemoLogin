
import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['#4ECDC4', '#556270']}
          style={styles.linearGradient}
        />

        <Text style={{ fontSize: 23 }}>History Screen </Text>

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
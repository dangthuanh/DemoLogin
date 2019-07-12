import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const { width: WIDTH } = Dimensions.get('window');

export default class ProfileScreen extends Component {

  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['#4ECDC4', '#556270']}
          style={styles.linearGradient}
        />

        <View style={styles.viewImage}>
          <Image
            style={styles.profileImage}
            source={require('../assets/images/spring.jpg')}

          />
          <Text style={styles.name}>THU ANH</Text>
          <Text style={styles.info}>IR - Tech</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btnIcon}>
            <View style={styles.icon}>
              <Ionicons
                name='ios-leaf'
                size={30}
                color='rgba(255, 255, 255, 0.7)'
              />
            </View>
            <Text style={styles.textIcon}>Update Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnIcon}>
            <View style={styles.icon}>
              <Ionicons
                name='ios-people'
                size={30}
                color='rgba(255, 255, 255, 0.7)'
              />
            </View>
            <Text style={styles.textIcon}>Connect</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnIcon}>
            <View style={styles.icon}>
              <Ionicons
                name='ios-images'
                size={30}
                color='rgba(255, 255, 255, 0.7)'
              />
            </View>
            <Text style={styles.textIcon}>Library</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnIcon}>
            <View style={styles.icon}>
              <Ionicons
                name='ios-keypad'
                size={30}
                color='rgba(255, 255, 255, 0.7)'
              />
            </View>
            <Text style={styles.textIcon}>Another</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name='ios-paper-plane'
              size={30}
              color='rgba(255, 255, 255, 0.7)'
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Post</Text>
            <Ionicons
              name='ios-arrow-dropright'
              size={30}
              color='rgba(255, 255, 255, 0.7)'
              style={styles.btnGo}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name='ios-options'
              size={30}
              color='rgba(255, 255, 255, 0.7)'
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Change Password</Text>
            <Ionicons
              name='ios-arrow-dropright'
              size={30}
              color='rgba(255, 255, 255, 0.7)'
              style={styles.btnGo}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name='ios-information-circle'
              size={30}
              color='rgba(255, 255, 255, 0.7)'
              style={styles.listIcon}
            />
            <Text style={styles.listText}>About Us</Text>
            <Ionicons
              name='ios-arrow-dropright'
              size={30}
              color='rgba(255, 255, 255, 0.7)'
              style={styles.btnGo}
            />
          </TouchableOpacity>

        </View>
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
  viewImage: {
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  name: {
    fontSize: 20,
    paddingTop: 10,
    color: 'white'
  },
  info: {
    fontSize: 18,
    color: '#c0c0c0'
  },
  btnIcon: {
    width: 70,
    height: 70,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    marginBottom: 5
  },
  icon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,

  },
  textIcon: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 16,
    color: '#eeeeee'
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  listItem: {
    width: WIDTH - 35,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderBottomColor: '#c0c0c0',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },
  listIcon: {
    position: 'absolute',
    top: 7,
  },
  listText: {
    paddingLeft: 55,
    paddingTop: 7,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18
  },
  btnGo: {
    position: 'absolute',
    top: 7,
    right: 5,
  }
});
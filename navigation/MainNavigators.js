import { Ionicons } from '@expo/vector-icons';

import React from 'react';

import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import HeaderButton from '../components/HeaderButtonNavigation';
import ChatScreen from '../screens/ChatScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import LikeScreen from '../screens/LikeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingsScreen';
import SupportScreen from '../screens/SupportScreen';

import SideBar from './SideBar';

const Home = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: 'black',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});

const Chat = createStackNavigator({
    Chat: {
        screen: ChatScreen,
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});

const Like = createStackNavigator({
    Like: {
        screen: LikeScreen,
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});

const History = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});

const Account = createStackNavigator({
    Account: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});


const Setting = createStackNavigator({
    Setting: {
        screen: SettingScreen,
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        }),
    },
});

const Support = createStackNavigator({
    Support: {
        screen: SupportScreen,
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        }),
    },
});


const tabNav = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            gesturesEnabled: false,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-home'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Chat: {
        screen: Chat,
        navigationOptions: () => ({
            gesturesEnabled: false,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-chatboxes'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Like: {
        screen: Like,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-heart'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    History: {
        screen: History,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-list-box'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Account: {
        screen: Account,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-person'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
},
    {
        gesturesEnabled: false,
        // swipeEnabled: false,
        tabBarOptions: {
            style: {
                backgroundColor: '#556270',
            },
            activeTintColor: 'rgba(255, 255, 255, 0.9)',
            inactiveTintColor: '#008B8B',
            showLabel: false,
        }
    })


const stackNavigation = createStackNavigator({
    Tabs: tabNav
},
    {
        headerMode: 'none',
    });



const drawerNavigation = createDrawerNavigator({
    Home: {
        screen: stackNavigation,
        navigationOptions: () => ({
            drawerIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-home'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Setting: {
        screen: Setting,
        navigationOptions: () => ({
            drawerIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-settings'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Support: {
        screen: Support,
        navigationOptions: () => ({
            drawerIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-help-circle'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
}, {
        contentComponent: SideBar
    });

export default createAppContainer(drawerNavigation);
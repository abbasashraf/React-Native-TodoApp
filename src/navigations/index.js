import {
  createStackNavigator,
  addNavigationHelpers,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'
import {
  Login,
  Add,
  Feed,
  Profile
} from "../containers"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import React, { Component } from 'react'
import { View } from 'react-native'
import { Colors } from '../theme'


const Tabs = createAppContainer(createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Ionicons style={{ alignSelf: 'flex-end' }} name='ios-list-box' size={20} color={tintColor} />
        },
      },
    },
    Add: {
      screen: Add,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialCommunityIcons style={{ alignSelf: 'center' }} name='plus' size={25} color={tintColor} />;
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Entypo style={{ alignSelf: 'flex-start' }} name='user' size={20} color={tintColor} />;
        },
      },
    }
  }, {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.secondary,
      inactiveTintColor: Colors.gray,
      style: {
        backgroundColor: Colors.white
      }
    },
  }
))

Tabs.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null,
  // headerLeft: null,
  // headerStyle: { backgroundColor: Colors.secondary },
  // headerTitleStyle: { color: 'red' },
  // headerTintColor: 'red',
  // headerForceInset: { vertical: 'never' },
};

export const AppNavigator = new createStackNavigator({
  Login: { screen: Login },
  Tabs: { screen: Tabs }
}, {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null, // this will hide the header
      headerMode: 'none'
    },
  })

export const App = createAppContainer(AppNavigator);
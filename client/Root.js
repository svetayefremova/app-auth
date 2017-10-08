import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabView  } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

import Colors from './constants/colors';

const AppTabs = TabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name={"smile-o"} size={30} color={tintColor} />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name={"sign-out"} size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.icon,
    inactiveTintColor: Colors.icon,
    activeBackgroundColor: Colors.tintUnderlay,
    inactiveBackgroundColor: Colors.tintColor,
    showLabel: false,
  }
});

const RouteConfig = {
  Home: { screen: Home },
  Login: { screen: Login },
  Signup: { screen: Signup },
  AppTabs: { screen: AppTabs }
};

export default StackNavigator(RouteConfig, { initialRouteName: 'Home' });
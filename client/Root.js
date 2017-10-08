import React, { Component } from 'react';
import { StackNavigator, TabNavigator  } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { graphql } from 'react-apollo';
import currentUserQuery from './queries/CurrentUser';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Main from './screens/Main';
import Settings from './screens/Settings';

import Colors from './constants/colors';

const Tabs = TabNavigator({
  Main: {
    screen: Main,
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

const AppNavigation = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Dashboard: {
    screen: Tabs,
    navigationOptions: () => ({
      headerLeft: null
    }),
  }
});

class Root extends Component {
  render() {
    const { loading, user } = this.props.data;
    if (loading) {
      return <ActivityIndicator large />;
    }

    if (!user) {
      return <AppNavigation />;
    }

    return <Tabs />;
  }
}

export default graphql(currentUserQuery)(Root);
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';

const RouteConfig = {
  Home: { screen: Home },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Dashboard: { screen: Dashboard }
};

export default StackNavigator(RouteConfig)
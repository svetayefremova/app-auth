import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Layout from '../components/Layout';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return(
      <Layout><Text>Settings</Text></Layout>
    )
  }
}

export default Settings;
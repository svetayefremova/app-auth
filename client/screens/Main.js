import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Layout from '../components/Layout';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    return(
      <Layout center><Text>Main</Text></Layout>
    )
  }
}

export default Main;
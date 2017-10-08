import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';

import Layout from '../components/Layout';
import Styles from '../constants/styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Layout center>
        <Text style={Styles.title}>{"Welcome".toUpperCase()}</Text>
        <Button title={"Login".toUpperCase()} onPress={() => navigate('Login')} buttonStyle={Styles.button} raised />
        <Button title={"Signup".toUpperCase()} onPress={() => navigate('Signup')} buttonStyle={Styles.button} raised />
      </Layout>
    )
  }
}

export default Home;

import React, { Component } from 'react';
import { Button } from 'react-native-elements';

import Layout from '../components/Layout';
import Colors from '../constants/colors';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Layout center>
        <Button title="Login" onPress={() => navigate('Login')} buttonStyle={styles.button} raised />
        <Button title="Signup" onPress={() => navigate('Signup')} buttonStyle={styles.button} raised />
      </Layout>
    )
  }
}

export default Home;

const styles = {
  button: {
    backgroundColor: Colors.tintColor,
    marginVertical: 10,
    width: 200,
  }
};
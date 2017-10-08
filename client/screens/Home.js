import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { graphql } from 'react-apollo';
import logoutMutation from '../mutations/Logout';
import currentUserQuery from '../queries/CurrentUser';

import Layout from '../components/Layout';
import Colors from '../constants/colors';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  onLogout = () => {
    this.props.mutate({
      refetchQueries: [{ query: currentUserQuery }]
    });
  };

  render() {
    console.log('USER HOME', this.props.data.user);
    const { navigate } = this.props.navigation;

    return (
      <Layout center>
        <Button title="Login" onPress={() => navigate('Login')} buttonStyle={styles.button} raised />
        <Button title="Signup" onPress={() => navigate('Signup')} buttonStyle={styles.button} raised />
        <Button title="Logout" onPress={this.onLogout} buttonStyle={styles.button} raised />
      </Layout>
    )
  }
}

export default graphql(logoutMutation)(
  graphql(currentUserQuery)(Home)
);

const styles = {
  button: {
    backgroundColor: Colors.tintColor,
    marginVertical: 10,
    width: 200,
  }
};
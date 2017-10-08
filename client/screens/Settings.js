import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { graphql } from 'react-apollo';
import logoutMutation from '../mutations/Logout';
import currentUserQuery from '../queries/CurrentUser';

import Layout from '../components/Layout';
import Styles from '../constants/styles';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  onLogout = () => {
    this.props.mutate({
      refetchQueries: [{ query: currentUserQuery }]
    });
  };

  render() {
    return(
      <Layout center>
        <Button onPress={this.onLogout} title={"Sign out".toUpperCase()} buttonStyle={Styles.button} raised>Logout</Button>
      </Layout>
    )
  }
}

export default graphql(logoutMutation)(
  graphql(currentUserQuery)(Settings)
);
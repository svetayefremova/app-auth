import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import signupMutation from '../mutations/Signup';
import currentUserQuery from '../queries/CurrentUser';

import Layout from '../components/Layout';
import AuthForm from '../components/AuthForm';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] }
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      this.props.navigation.navigate('Dashboard');
    }
  }

  onSubmitForm = ({ email, password }) => {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: currentUserQuery }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  };

  render() {
    return(
      <Layout center>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmitForm}
        />
      </Layout>
    )
  }
}

export default graphql(currentUserQuery)(
  graphql(signupMutation)(Signup)
);
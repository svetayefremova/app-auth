import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider }  from 'react-apollo';
import Root from './client/Root';

class App extends Component {
  createClient() {
    return new ApolloClient({
      dataIdFromObject: o => o.id
    });
  }

  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <Root />
      </ApolloProvider>
    );
  }
}

export default App;

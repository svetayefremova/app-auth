import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider }  from 'react-apollo';
import Root from './client/Root';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

class App extends Component {
  createClient() {
    return new ApolloClient({
      networkInterface,
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

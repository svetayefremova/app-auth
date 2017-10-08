import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

import Styles from '../constants/styles';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit = () =>  {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FormLabel>Email</FormLabel>
        <FormInput containerStyle={Styles.input} onChangeText={email => this.setState({email})} />
        <FormLabel>Password</FormLabel>
        <FormInput containerStyle={Styles.input} onChangeText={password => this.setState({password})} />

        {
          this.props.errors.map(error => (
            <FormValidationMessage key={error}>
              {error}
            </FormValidationMessage>
          ))
        }

        <Button
          title={"Submit".toUpperCase()}
          onPress={this.onSubmit}
          buttonStyle={[Styles.button, { marginTop: 48 }]}
        />
      </View>
    )
  }
}

export default AuthForm;
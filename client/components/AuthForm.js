import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import Colors from '../constants/colors';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'test@test.com',
      password: 'test'
    }
  }

  onSubmit = () =>  {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <View style={styles.form}>
        <FormLabel>Email</FormLabel>
        <FormInput containerStyle={styles.input} onChangeText={email => this.setState({email})} />
        <FormLabel>Password</FormLabel>
        <FormInput containerStyle={styles.input} onChangeText={password => this.setState({password})} />

        {
          this.props.errors.map(error => (
            <FormValidationMessage key={error}>
              {error}
            </FormValidationMessage>
          ))
        }

        <Button
          title="Submit"
          onPress={this.onSubmit}
          buttonStyle={styles.button}
        />
      </View>
    )
  }
}

export default AuthForm;

const styles = {
  form: {
    alignItems: 'center',
  },
  input: {
    width: 300,
  },
  button: {
    backgroundColor: Colors.tintColor,
    marginVertical: 10,
    width: 200,
  }
};
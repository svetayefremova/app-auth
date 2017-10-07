import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/colors';

export default (props) => {
  return (
    <View style={[styles.layout, props.center && styles.center]}>
      { props.children }
    </View>
  )
};

const styles = {
  layout: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
};
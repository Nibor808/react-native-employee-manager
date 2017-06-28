import React from 'react';
import { View, Text } from 'react-native';

const ErrorView = ({ error }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{ error ? error : '' }</Text>
    </View>
  )
};

const styles = {
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  }
}

export { ErrorView };
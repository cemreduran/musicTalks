import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, onChangeText, value, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      <View style={styles.underline} />
    </View>
  );
};

export default Input;

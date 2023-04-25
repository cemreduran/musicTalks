import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../components/Button';

import styles from './Login.style';

import Input from '../../components/Input';

function Login({navigation}) {
  function goToSign() {
    navigation.navigate('SignPage');
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>musicTalks</Text>
      <Input placeholder="Please enter your e-mail.." />
      <Input placeholder="Please enter your password.." />
      <View style={styles.buttons_container}>
        <Button text="Login" onPress={null} />
        <Button text="Sign Up" onPress={goToSign} />
      </View>
    </SafeAreaView>
  );
}

export default Login;

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../components/Button';
import {Formik} from 'formik';

import styles from './Login.style';

import Input from '../../components/Input';

function Login({navigation}) {
  function goToSign() {
    navigation.navigate('SignPage');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text_music}>music</Text>
        <Text style={styles.text_talks}>Talks</Text>
      </View>
      <Formik>
        <>
          <Input placeholder="Please enter your e-mail.." />
          <Input placeholder="Please enter your password.." />
          <View style={styles.buttons_container}>
            <Button text="Login" onPress={null} />
            <Button text="Sign Up" onPress={goToSign} />
          </View>
        </>
      </Formik>
    </SafeAreaView>
  );
}

export default Login;

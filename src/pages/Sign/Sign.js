import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../components/Button';

import styles from './Sign.style';

import Input from '../../components/Input';

function Sign({navigation}) {
  function goToLogin() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text_music}>music</Text>
        <Text style={styles.text_talks}>Talks</Text>
      </View>
      <Input placeholder="Please enter your e-mail.." />
      <Input placeholder="Please enter your password.." />
      <Input placeholder="Please enter your password again.." />
      <View style={styles.buttons_container}>
        <Button text="Sign Up" onPress={null} />
        <Button text="Back" onPress={goToLogin} />
      </View>
    </SafeAreaView>
  );
}

export default Sign;

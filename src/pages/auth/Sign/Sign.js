import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Sign.style';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Button from '../../../components/Buttons/TextButton';
import Input from '../../../components/Input';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function Sign({navigation}) {
  function goToLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu!',
        type: 'success',
      });
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text_music}>music</Text>
        <Text style={styles.text_talks}>Talks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onChangeText={handleChange('usermail')}
              placeholder="Please enter your e-mail.."
            />
            <Input
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Please enter your password.."
            />
            <Input
              value={values.repassword}
              onChangeText={handleChange('repassword')}
              placeholder="Please enter your password again.."
            />
            <View style={styles.buttons_container}>
              <Button text="Sign Up" onPress={handleSubmit} />
              <Button text="Back" onPress={goToLogin} />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Sign;

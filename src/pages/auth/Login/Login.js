import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Login.style';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Button from '../../../components/Buttons/TextButton';
import Input from '../../../components/Input';

const initialFormValues = {
  usermail: '',
  password: '',
};

function Login({navigation}) {
  function goToSign() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      navigation.navigate('RoomListPage');
    } catch (error) {
      console.log(error);
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
            <View style={styles.buttons_container}>
              <Button text="Login" onPress={handleSubmit} />
              <Button text="Sign Up" onPress={goToSign} />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.style';

import Button from '../../components/Button';
import Input from '../../components/Input';

const initialFormValues = {
  usermail: '',
  password: '',
};

function Login({navigation}) {
  function goToSign() {
    navigation.navigate('SignPage');
  }

  function handleLoginForm(formValues) {
    console.log(formValues);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text_music}>music</Text>
        <Text style={styles.text_talks}>Talks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleLoginForm}>
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

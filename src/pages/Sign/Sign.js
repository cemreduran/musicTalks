import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';

import styles from './Sign.style';

import Button from '../../components/Button';
import Input from '../../components/Input';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function Sign({navigation}) {
  function goToLogin() {
    navigation.goBack();
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

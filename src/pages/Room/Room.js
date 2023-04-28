import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/Buttons/Button';

function Room({navigation}) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <Text>here is choosen ROOM</Text>
      <TouchableOpacity onPress={goBack}>
        <Text>geridön</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Room;

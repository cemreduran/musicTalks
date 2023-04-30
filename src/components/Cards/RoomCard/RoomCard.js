import React from 'react';
import {TouchableOpacity, Text, ImageBackground, View} from 'react-native';

import styles from './RoomCard.style';

const RoomCard = ({room_name, onPress}) => {
  const background_image = null;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="contain"
        source={background_image}>
        <View style={styles.text_container}>
          <Text>{room_name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RoomCard;

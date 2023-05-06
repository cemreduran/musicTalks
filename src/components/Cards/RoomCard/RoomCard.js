import React from 'react';
import {TouchableOpacity, Text, ImageBackground, View} from 'react-native';

import styles from './RoomCard.style';

const RoomCard = ({room_name, onPress, background_image}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{flex: 1, borderRadius: 20}}>
        <ImageBackground
          style={{flex: 1}}
          resizeMode="cover"
          source={{uri: background_image}}>
          <View style={styles.text_container}>
            <Text>{room_name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;

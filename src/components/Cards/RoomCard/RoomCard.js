import React from 'react';
import {TouchableOpacity, Text, ImageBackground, View} from 'react-native';

import styles from './RoomCard.style';

const RoomCard = ({room_name, onPress}) => {
  const background_image =
    'https://i.gazeteduvar.com.tr/2/1280/720/storage/files/images/2021/09/17/metallica-dbji_cover.jpg.webp';

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        style={{flex: 1, borderRadius: 20}}
        resizeMode="cover"
        source={{uri: background_image}}>
        <View style={styles.text_container}>
          <Text>{room_name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RoomCard;

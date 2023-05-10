import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './RoomListHeader.style';

import IconButton from '../../buttons/IconButton';

const RoomListHeader = ({
  leftButtonOnPress,
  rightButtonOnPress,
  rightButtonIcon,
  leftButtonIcon,
}) => {
  return (
    <View style={styles.container}>
      <IconButton onPress={leftButtonOnPress} icon={leftButtonIcon} />
      {/* <View style={styles.text_container}>
        <Text style={styles.text_music}>music</Text>
        <Text style={styles.text_talks}>Talks</Text>
      </View> */}
      <View style={styles.text_container}>
        <Image source={require('../../../Image/logo.png')} />
      </View>
      <IconButton onPress={rightButtonOnPress} icon={rightButtonIcon} />
    </View>
  );
};

export default RoomListHeader;

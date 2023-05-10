import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './RoomHeader.style';

import FloatingButton from '../../buttons/IconButton';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import IconButton from '../../buttons/IconButton';

const Header = ({
  roomData,
  writeOnPress,
  goBackPress,
  writeIcon,
  goBackIcon,
}) => {
  const formattedDate = formatDistance(
    parseISO(roomData.createdDate),
    new Date(),
    {
      addSuffix: true,
      locale: tr,
    },
  );
  return (
    <View style={styles.container}>
      <IconButton onPress={goBackPress} icon={goBackIcon} />
      <View style={styles.text_container}>
        <Text style={styles.room_name}>{roomData.roomName}</Text>
        <Text>CreatedBy : {roomData.createdBy}</Text>
        <Text>CreatedTime : ({formattedDate})</Text>
      </View>
      <IconButton onPress={writeOnPress} icon={writeIcon} />
    </View>
  );
};

export default Header;

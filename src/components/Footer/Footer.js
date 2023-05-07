import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Footer.style';

import FloatingButton from '../Buttons/IconButton';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import IconButton from '../Buttons/IconButton';

const Footer = ({
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
        <Text>({formattedDate})</Text>
      </View>
      <IconButton onPress={writeOnPress} icon={writeIcon} />
    </View>
  );
};

export default Footer;

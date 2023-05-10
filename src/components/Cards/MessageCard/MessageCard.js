import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({styleCurrentUser, messageData, Like}) => {
  const formattedDate = formatDistance(parseISO(messageData.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View
      style={
        styleCurrentUser
          ? styles.outer_container_current_user
          : styles.outer_container
      }>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Text style={styles.user}>{messageData.username}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.title}>{messageData.message}</Text>

        {/* <View style={styles.footer}>
          <TouchableOpacity style={styles.like_container} onPress={Like}>
            {!!messageData.like && (
              <View style={styles.like_count_container}>
                <Text style={styles.like_count_text}>{messageData.like}</Text>
              </View>
            )}
            <Icon name={'hand-clap'} size={20} />
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default MessageCard;

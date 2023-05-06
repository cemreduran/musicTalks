/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Room.style';

import parseContentData from '../../utils/parseContentData';
import FloatingButton from '../../components/Buttons/FloatingButton/FloatingButton';
import WriteMessageModal from '../../components/modal/WriteMessageModal';
import MessageCard from '../../components/Cards/MessageCard';

function Room({navigation, route}) {
  const roomData = route.params;
  const [inputModalVisible, setInputModelVisible] = useState(false);
  const [messagecontent, setMessagecontent] = useState([]);

  useEffect(() => {
    database()
      .ref(`rooms/${roomData.id}/messages`)
      .on('value', snapshot => {
        const contentData = snapshot.val();

        if (!contentData) {
          return;
        }

        const parsedData = parseContentData(contentData);
        setMessagecontent(parsedData);
      });
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  function sendMessage(message) {
    const userMail = auth().currentUser.email;

    const sendData = {
      message: message,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    handleInputToggle();

    return database().ref(`rooms/${roomData.id}/messages`).push(sendData);
  }

  function handleInputToggle() {
    setInputModelVisible(!inputModalVisible);
  }

  const onlineUserName = auth().currentUser.email.split('@')[0];

  function renderMessages({item}) {
    return (
      <MessageCard
        styleOnlineUser={item.username !== onlineUserName}
        messageData={item}
        onPress={null}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>here is choosen room : {roomData.roomName}</Text>
      <TouchableOpacity onPress={goBack} style={{backgroundColor: 'red'}}>
        <Text>geridön</Text>
      </TouchableOpacity>
      <View style={styles.flatList_container}>
        <FlatList
          style={styles.flatList}
          data={messagecontent}
          renderItem={renderMessages}
        />
      </View>
      <View style={styles.footer}>
        <FloatingButton icon="pen" onPress={handleInputToggle} />
      </View>
      <WriteMessageModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={sendMessage}
      />
    </SafeAreaView>
  );
}

export default Room;

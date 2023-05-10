/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, ImageBackground} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Room.style';

import parseContentData from '../../utils/parseContentData';
import RoomHeader from '../../components/headers/RoomHeader/RoomHeader';
import WriteMessageModal from '../../components/modal/WriteMessageModal';
import MessageCard from '../../components/cards/MessageCard';

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

  const currentUserName = auth().currentUser.email.split('@')[0];

  function renderMessages({item}) {
    return (
      <MessageCard
        styleCurrentUser={item.username !== currentUserName}
        messageData={item}
        onPress={null}
      />
    );
  }

  const backgroundImage = !roomData.image
    ? require('../../Image/logo_230x230.png')
    : {uri: roomData.image};

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        blurRadius={0}
        resizeMode={roomData.image ? 'repeat' : 'contain'}
        style={styles.background_image}>
        <RoomHeader
          roomData={roomData}
          writeOnPress={handleInputToggle}
          writeIcon="pen"
          goBackPress={goBack}
          goBackIcon="keyboard-backspace"
        />
        <FlatList
          inverted
          style={styles.flatList}
          data={messagecontent}
          renderItem={renderMessages}
          // ListFooterComponent={<View style={{padding: 35}} />}
        />
        <WriteMessageModal
          visible={inputModalVisible}
          onClose={handleInputToggle}
          onSend={sendMessage}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Room;

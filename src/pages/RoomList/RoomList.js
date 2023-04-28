import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import RoomCard from '../../components/Cards/RoomCard';
import FloatingButton from '../../components/Buttons/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import parseContentData from '../../utils/parseContentData';

function RoomList({navigation}) {
  const [inputModalVisible, setInputModelVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        if (!contentData) {
          return;
        }

        const parsedData = parseContentData(contentData);
        setContentList(parsedData);
        console.log(contentList);
      });
  }, []);

  function createAuthRoom(roomName, image_URL, first_message) {
    const userMail = auth().currentUser.email;

    const sendData = {
      roomName: roomName,
      image: image_URL,
      message: first_message,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    handleInputToggle();
    goToRoom();

    return database().ref(`rooms/${roomName}`).push(sendData);
  }

  function goToRoom() {
    navigation.navigate('RoomPage');
  }

  function handleInputToggle() {
    setInputModelVisible(!inputModalVisible);
  }

  const renderContent = ({item}) => {
    return <RoomCard room_name={item.id} onPress={goToRoom} />;
  };

  return (
    <SafeAreaView>
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <Text>hello to ROOM LİST</Text>
      <FlatList numColumns={2} data={contentList} renderItem={renderContent} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={createAuthRoom}
      />
    </SafeAreaView>
  );
}

export default RoomList;

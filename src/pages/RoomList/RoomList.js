import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import RoomCard from '../../components/Cards/RoomCard';
import FloatingButton from '../../components/Buttons/FloatingButton/FloatingButton';
import CreateRoomModal from '../../components/modal/CreateRoomModal/CreateRoomModal';
import parseContentData from '../../utils/parseContentData';

function RoomList({navigation}) {
  const [inputModalVisible, setInputModelVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    database()
      .ref('rooms')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        if (!contentData) {
          return;
        }

        const parsedData = parseContentData(contentData);
        setRoomList(parsedData);
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

    showMessage({
      message: `${roomName} odası Oluşturuldu`,
      type: 'success',
    });

    goToRoom();
    return database().ref(`rooms/${roomName}`).push(sendData);
  }

  function goToRoom(roomName) {
    navigation.navigate('RoomPage', {roomName});
  }

  function handleInputToggle() {
    setInputModelVisible(!inputModalVisible);
  }

  const renderContent = ({item}) => {
    return <RoomCard room_name={item.id} onPress={() => goToRoom(item.id)} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>hello to ROOM LİST</Text>
      <FlatList numColumns={2} data={roomList} renderItem={renderContent} />
      <FloatingButton icon="hammer" onPress={handleInputToggle} />
      <CreateRoomModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={createAuthRoom}
      />
    </SafeAreaView>
  );
}

export default RoomList;

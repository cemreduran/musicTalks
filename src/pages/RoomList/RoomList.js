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
  console.log(roomList.id);

  function createAuthRoom(roomName, image_URL) {
    const userMail = auth().currentUser.email;

    const sendData = {
      image: image_URL,
      createdBy: userMail.split('@')[0],
      createdDate: new Date().toISOString(),
      roomName: roomName,
    };

    handleInputToggle();

    showMessage({
      message: `${roomName} odası Oluşturuldu`,
      type: 'success',
    });

    return database().ref('rooms/').push(sendData);
    // database().ref(`rooms/${roomName}/${image_URL}`).push(sendData.image)
  }

  function goToRoom(roomData) {
    navigation.navigate('RoomPage', roomData);
  }

  function handleInputToggle() {
    setInputModelVisible(!inputModalVisible);
  }

  const renderContent = ({item}) => {
    return (
      <RoomCard
        background_image={item.image}
        room_name={item.roomName}
        onPress={() => goToRoom(item)}
      />
    );
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

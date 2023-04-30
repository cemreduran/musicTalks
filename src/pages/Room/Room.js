import React, {useState, useEffect} from 'react';

import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';

import parseContentData from '../../utils/parseContentData';
import FloatingButton from '../../components/Buttons/FloatingButton/FloatingButton';
import WriteMessageModal from '../../components/modal/WriteMessageModal';
import MessageCard from '../../components/Cards/MessageCard';

function Room({navigation, route}) {
  const {roomName} = route.params;
  const [inputModalVisible, setInputModelVisible] = useState(false);
  const [messagecontent, setMessagecontent] = useState([]);

  useEffect(() => {
    database()
      .ref(`rooms/${roomName}`)
      .on('value', snapshot => {
        const contentData = snapshot.val();

        if (!contentData) {
          return;
        }

        const parsedData = parseContentData(contentData);
        setMessagecontent(parsedData);
      });
    console.log(messagecontent);
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  function handleInputToggle() {
    setInputModelVisible(!inputModalVisible);
  }

  function renderMessages({item}) {
    return <MessageCard message={item} onPress={null} />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>here is choosen room : {roomName}</Text>
      <TouchableOpacity onPress={goBack} style={{backgroundColor: 'red'}}>
        <Text>geridön</Text>
      </TouchableOpacity>
      <FlatList data={messagecontent} renderItem={renderMessages} />
      <FloatingButton icon="pen" onPress={handleInputToggle} />
      <WriteMessageModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={null}
      />
    </SafeAreaView>
  );
}

export default Room;

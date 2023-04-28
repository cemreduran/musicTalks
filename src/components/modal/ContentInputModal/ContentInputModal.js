import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Modal from 'react-native-modal';

import styles from './ContentInputModal.style';

import FloatingButton from '../../Buttons/FloatingButton';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [room_name, setRoomName] = useState(null);
  const [image_URL, setImageURL] = useState(null);
  const [first_message, setFirst_message] = useState(null);

  function handleSend() {
    if (!room_name) {
      return;
    }
    onSend(room_name, image_URL, first_message);
    setRoomName(null);
    setImageURL(null);
    setFirst_message(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <Text>ODA EKLE</Text>
          <TextInput
            placeholder="Oda ismi (zorunlu)"
            onChangeText={setRoomName}
          />
          <TextInput
            placeholder="İstersen resim ekleyebilirsin (URL)"
            onChangeText={setImageURL}
          />
          <TextInput
            placeholder="İlk mesajı sen yaz!"
            onChangeText={setFirst_message}
          />
        </View>
        <FloatingButton icon="plus" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;

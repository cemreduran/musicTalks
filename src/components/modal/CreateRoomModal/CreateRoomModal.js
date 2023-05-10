import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Modal from 'react-native-modal';

import styles from './CreateRoomModal.style';

import FloatingButton from '../../buttons/IconButton';

const CreateRoomModal = ({visible, onClose, onSend}) => {
  const [room_name, setRoomName] = useState(null);
  const [image_URL, setImageURL] = useState(null);

  function handleSend() {
    if (!room_name) {
      return;
    }
    onSend(room_name, image_URL);
    setRoomName(null);
    setImageURL(null);
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
        </View>
        <FloatingButton icon="plus" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default CreateRoomModal;

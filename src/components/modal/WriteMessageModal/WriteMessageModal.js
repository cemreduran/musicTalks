import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Modal from 'react-native-modal';

import styles from './WriteMessageModal.style';

import FloatingButton from '../../Buttons/IconButton';

const WriteMessageModal = ({visible, onClose, onSend}) => {
  const [message, setMessage] = useState(null);

  function handleSend() {
    if (!message) {
      return;
    }
    onSend(message);
    setMessage(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      animationIn={'slideInUp'}
      animationInTiming={500}
      animationOut={message ? 'slideOutDown' : 'zoomOutUp'}
      animationOutTiming={message ? 500 : 1500}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Mesajı yaz!"
            onChangeText={setMessage}
            multiline
          />
        </View>
        <FloatingButton icon="plus" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default WriteMessageModal;

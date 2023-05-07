import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './IconButton.style';

const IconButton = ({onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={icon} color="white" size={30} />
    </TouchableOpacity>
  );
};

export default IconButton;

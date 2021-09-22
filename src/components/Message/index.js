import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

export const Message = ({id, content}) => {
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
};

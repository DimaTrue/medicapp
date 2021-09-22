import React from 'react';
import {View, Text} from 'react-native';

import {StrConstants} from '../../constants';
import {styles} from './styles';

export const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>{StrConstants.noContentCalendar}</Text>
    </View>
  );
};

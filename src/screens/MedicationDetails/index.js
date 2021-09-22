import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const MedicationDetails = ({route, navigation}) => {
  const {name, time} = route.params;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{time}</Text>
    </View>
  );
};

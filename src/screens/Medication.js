import React from 'react';
import {Button} from 'react-native';

import {StrConstants} from '../constants';

export const Medication = ({navigation}) => {
  return (
    <Button
      title={StrConstants.medication}
      onPress={() => navigation.navigate(StrConstants.medicationDetails)}
    />
  );
};

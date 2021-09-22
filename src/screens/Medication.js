import React from 'react';
import {Button} from 'react-native';

export const Medication = ({navigation}) => {
  return (
    <Button
      title="Medication"
      onPress={() => navigation.navigate('MedicationDetails')}
    />
  );
};

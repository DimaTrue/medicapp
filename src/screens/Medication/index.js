import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {StrConstants} from '../../constants';
import {medications} from '../../fake_data';
import {MedicationComponent} from '../../components';
import {styles} from './styles';

export const Medication = ({navigation}) => {
  const navigateToMedicationDetails = medication =>
    navigation.navigate(StrConstants.medicationDetails, {...medication});

  const keyExtractor = medication => medication.id;

  const renderItem = ({item}) => {
    return (
      <MedicationComponent
        {...item}
        onPress={() => navigateToMedicationDetails(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.medicationHeader}>
        <Text style={styles.medicationHeaderText}>
          {StrConstants.medication}
        </Text>
      </View>
      {medications?.length ? (
        <FlatList
          data={medications || []}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  );
};

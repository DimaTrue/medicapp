import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

export const MedicationComponent = ({name, time, isChecked, onPress}) => {
  const [isCheckedItem, setIsCheckedItem] = useState(isChecked);

  const iconName = isCheckedItem ? 'check-box' : 'check-box-outline-blank';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.medicationButton} onPress={onPress}>
        <View style={styles.medicationBlock}>
          <Text style={styles.timeText}>{time}</Text>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Icon
          name={iconName}
          size={30}
          onPress={() => setIsCheckedItem(!isCheckedItem)}
        />
      </View>
    </View>
  );
};

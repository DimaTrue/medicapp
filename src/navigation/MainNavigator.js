import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MedicationDetails} from '../screens/MedicationDetails';
import {TabNavigator} from './TabNavigator';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MedicationDetails" component={MedicationDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

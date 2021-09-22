import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MedicationDetails} from '../screens';
import {TabNavigator} from './TabNavigator';
import {StrConstants} from '../constants';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name={StrConstants.tabNavigator}
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={StrConstants.medicationDetails}
          component={MedicationDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

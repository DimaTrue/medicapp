import * as React from 'react';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard} from '../screens/Dashboard';
import {Medication} from '../screens/Medication';
import {Calendar} from '../screens/Calendar';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <Button onPress={() => console.log('menu pressed')} title="Menu" />
        ),
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Medication" component={Medication} />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
};

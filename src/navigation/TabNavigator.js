import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Calendar, Dashboard, Medication} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StrConstants, Colors} from '../constants';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === StrConstants.dashboard) {
            iconName = 'home';
          }
          if (route.name === StrConstants.medication) {
            iconName = 'tablets';
          }
          if (route.name === StrConstants.calendar) {
            iconName = 'calendar';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.gray,
        headerLeft: () => (
          <Icon name="bars" size={16} color={Colors.gray} onPress={() => {}} />
        ),
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen name={StrConstants.dashboard} component={Dashboard} />
      <Tab.Screen name={StrConstants.medication} component={Medication} />
      <Tab.Screen name={StrConstants.calendar} component={Calendar} />
    </Tab.Navigator>
  );
};

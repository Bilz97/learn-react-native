import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  StationListScreen,
  WinScreen,
  SavingsScreen,
  MyCarScreen,
} from '../Screens';

type TabParamList = {
  Home: {};
  StationList: {};
  Win: {};
  Savings: {};
  MyCar: {};
};
const Tab = createBottomTabNavigator<TabParamList>();

export function BottomNavigationTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="StationList" component={StationListScreen} />
        <Tab.Screen name="Win" component={WinScreen} />
        <Tab.Screen name="Savings" component={SavingsScreen} />
        <Tab.Screen name="MyCar" component={MyCarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

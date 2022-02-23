import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  StationListScreen,
  WinScreen,
  SavingsScreen,
  MyCarStackNavigator,
} from '..';

export type MainBottomTabParamList = {
  Home: {};
  StationList: {};
  Win: {};
  Savings: {};
  MyCar: {};
};
const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
export function MainBottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="StationList" component={StationListScreen} />
      <BottomTab.Screen name="Win" component={WinScreen} />
      <BottomTab.Screen name="Savings" component={SavingsScreen} />
      <BottomTab.Screen name="MyCar" component={MyCarStackNavigator} />
    </BottomTab.Navigator>
  );
}

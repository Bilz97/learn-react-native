import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DrivesScreen} from './Drives';
import {VehiclesScreen} from './Vehicles';

export type MyCarStackNavigatorParamList = {
  Root: {};
};
const Stack = createNativeStackNavigator<MyCarStackNavigatorParamList>();
export function MyCarStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitle: 'My Car',
      })}>
      <Stack.Screen name="Root" component={MyCarTopTabNavigator} />
    </Stack.Navigator>
  );
}

export type MyCarTopTabParamList = {
  Drives: {};
  Vehicles: {};
};
const TopTab = createMaterialTopTabNavigator<MyCarTopTabParamList>();
function MyCarTopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Drives" component={DrivesScreen} />
      <TopTab.Screen name="Vehicles" component={VehiclesScreen} />
    </TopTab.Navigator>
  );
}

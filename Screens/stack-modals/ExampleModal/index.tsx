import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExampleModalRootScreenParamList, ExampleModalRootScreen} from './Root';
import {
  ExampleModalDetailsScreenParamList,
  ExampleModalDetailsScreen,
} from './Details';

export type ExampleModalStackNavigatorParamList = {
  Root: ExampleModalRootScreenParamList;
  Details: ExampleModalDetailsScreenParamList;
};
const Stack = createNativeStackNavigator<ExampleModalStackNavigatorParamList>();
export function ExampleModalStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={ExampleModalRootScreen} />
      <Stack.Screen name="Details" component={ExampleModalDetailsScreen} />
    </Stack.Navigator>
  );
}

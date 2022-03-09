import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import {MainBottomTabNavigator} from '../../Screens/MainBottomTab';
import {ExampleModalStackNavigator} from '../../Screens/stack-modals/ExampleModal';
import {
  TripDetailsParamList,
  TripDetailsScreen,
} from '../../Screens/MainBottomTab/MyCar/Drives/TripDetails';

export type RootStackNavigatorParamList = {
  MainBottomTab: {};
  ExampleModal: {};
  TripDetails: TripDetailsParamList;
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackNavigatorParamList>;
const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();
export function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardOverlayEnabled: true,
        presentation: 'modal',
        ...TransitionPresets.ModalPresentationIOS,
      })}>
      <Stack.Screen name="MainBottomTab" component={MainBottomTabNavigator} />
      <Stack.Screen
        name="ExampleModal"
        component={ExampleModalStackNavigator}
      />
      <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
    </Stack.Navigator>
  );
}

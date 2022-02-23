import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import {MainBottomTabNavigator} from '../MainBottomTabNavigator';
import {
  ExampleModalScreenParamList,
  ExampleModalScreen,
} from '../../Screens/stack-modals/ExampleModal';

export type RootStackNavigatorParamList = {
  MainBottomTab: {};
  ExampleModal: ExampleModalScreenParamList;
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackNavigatorParamList>;
const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();
export function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitle: "Bilal's Test App",
        cardOverlayEnabled: true,
        presentation: 'modal',
        ...TransitionPresets.ModalPresentationIOS,
      })}>
      <Stack.Screen name="MainBottomTab" component={MainBottomTabNavigator} />
      <Stack.Screen name="ExampleModal" component={ExampleModalScreen} />
    </Stack.Navigator>
  );
}

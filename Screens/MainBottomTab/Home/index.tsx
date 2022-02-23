import React from 'react';
import {Text, View} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {QuickTestButton} from '../../../Components/widgets';

export type HomeScreenStackNavigatorParamList = {
  Root: {};
};
export type HomeScreenStackNavigationProp =
  NativeStackNavigationProp<HomeScreenStackNavigatorParamList>;
const Stack = createNativeStackNavigator<HomeScreenStackNavigatorParamList>();
export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitle: 'Home',
      })}>
      <Stack.Screen name="Root" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  const homeStackNavigation = useNavigation<HomeScreenStackNavigationProp>();

  React.useLayoutEffect(() => {
    homeStackNavigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <QuickTestButton
          title={'Drawer'}
          bordered
          onPress={() => {
            homeStackNavigation.dispatch(DrawerActions.openDrawer);
          }}
        />
      ),
    });
  }, [homeStackNavigation]);

  return (
    <View style={styles.baseView}>
      <Text>Home</Text>
    </View>
  );
}

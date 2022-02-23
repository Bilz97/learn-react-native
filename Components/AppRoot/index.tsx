import * as React from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from '../RootStackNavigator';
import {styles} from './style';

export function RootComponent() {
  return (
    <NavigationContainer>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView style={styles.safeAreaView}>
          <RootStackNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

import * as React from 'react';
import {LogBox} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from '../RootStackNavigator';
import {styles} from './style';

// App - AppRoot - RootStackNavigator

export function RootComponent() {
  LogBox.ignoreAllLogs();

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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// API:
// https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/

import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

export function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

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

  // const DATA = [
  //   {
  //     title: "charger 1",
  //     data: ["address 1", "address 2", "address 3"]
  //   },
  //   {
  //     title: "Charger 2",
  //     data: ["address 1", "address 2", "address 3"]
  //   },
  //   {
  //     title: "Charger 3",
  //     data: ["address 1", "address 2", "address 3"]
  //   },
  // ];
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

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

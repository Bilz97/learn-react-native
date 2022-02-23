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
import {ScrollView} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

export function HomeScreen() {
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
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
    </ScrollView>
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

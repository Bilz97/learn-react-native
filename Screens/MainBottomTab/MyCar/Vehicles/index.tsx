import React from 'react';
import {View} from 'react-native';
import {QuickTestLabel} from '../../../../Components/widgets';
import {styles} from './style';

export function VehiclesScreen() {
  return (
    <View style={styles.baseView}>
      <QuickTestLabel title={'Vehicles'} />
    </View>
  );
}

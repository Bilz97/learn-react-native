import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../../Components/RootStackNavigator';
import {QuickTestButton, QuickTestLabel} from '../../../../Components/widgets';
import {styles} from './style';

export function DrivesScreen() {
  const rootStackNavigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.baseView}>
      <QuickTestLabel title={'My Car'} />
      <QuickTestButton
        title={'Show Trip Details'}
        bordered
        onPress={() => {
          rootStackNavigation.navigate('TripDetails', {
            data: '<Trips Details Data>',
          });
        }}
      />
    </View>
  );
}

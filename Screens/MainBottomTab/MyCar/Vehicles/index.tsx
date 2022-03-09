import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../../Components/RootStackNavigator';
import {QuickTestButton, QuickTestLabel} from '../../../../Components/widgets';
import {styles} from './style';

export function VehiclesScreen() {
  const rootStackNavigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.baseView}>
      <QuickTestLabel title={'Vehicles'} />
      <QuickTestButton
        title={'Show Stack Modal'}
        bordered
        onPress={() => {
          rootStackNavigation.navigate('ExampleModal', {});
        }}
      />
    </View>
  );
}

import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackNavigatorParamList,
  RootStackNavigationProp,
} from '../../../Components/RootStackNavigator';
import {QuickTestButton, QuickTestLabel} from '../../../Components/widgets';
import {styles} from './style';

export type MyCarScreenParamList = {
  text?: string;
};
type MyCarScreenProps = NativeStackScreenProps<
  RootStackNavigatorParamList,
  'ExampleModal'
>;
export function MyCarScreen({}: MyCarScreenProps) {
  const rootStackNavigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.baseView}>
      <QuickTestLabel title={'My Car'} />
      <QuickTestButton
        title={'Show Stack Modal'}
        bordered
        onPress={() => {
          console.log('*** "Show Stack Modal" being pressed');
          rootStackNavigation.navigate('ExampleModal', {text: 'From "My Car"'});
        }}
      />
    </View>
  );
}

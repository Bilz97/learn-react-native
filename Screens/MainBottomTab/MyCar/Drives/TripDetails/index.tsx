import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackNavigatorParamList,
  RootStackNavigationProp,
} from '../../../../../Components/RootStackNavigator';
import {
  QuickTestLabel,
  QuickTestButton,
} from '../../../../../Components/widgets';
import {styles} from './style';

export type TripDetailsParamList = {
  data?: string;
};
type TripDetailsSreenProps = NativeStackScreenProps<
  RootStackNavigatorParamList,
  'TripDetails'
>;
export function TripDetailsScreen({route: {params}}: TripDetailsSreenProps) {
  const rootStackNavigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.baseView}>
      <QuickTestLabel title={params.data || '<params.data is undefined>'} />
      <QuickTestButton
        title={'Go Back'}
        bordered
        onPress={() => {
          rootStackNavigation.goBack();
        }}
      />
    </View>
  );
}

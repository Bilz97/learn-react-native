import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackNavigatorParamList} from '../../../Components/RootStackNavigator';
import {QuickTestButton, QuickTestLabel} from '../../../Components/widgets';
import {styles} from './style';

export type ExampleModalScreenParamList = {
  text?: string;
};
type ExampleModalSreenProps = NativeStackScreenProps<
  RootStackNavigatorParamList,
  'ExampleModal'
>;
export function ExampleModalScreen({
  navigation,
  route,
}: ExampleModalSreenProps) {
  return (
    <View style={styles.baseView}>
      <QuickTestLabel title={route.params.text || ''} />
      <QuickTestButton
        title="Dismiss"
        bordered
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

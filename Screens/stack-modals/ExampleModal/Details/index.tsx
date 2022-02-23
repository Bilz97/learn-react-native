import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {QuickTestButton, QuickTestLabel} from '../../../../Components/widgets';
import {ExampleModalStackNavigatorParamList} from '..';
import {styles} from './style';

export type ExampleModalDetailsScreenParamList = {
  text?: string;
};
type ExampleModalDetailsSreenProps = NativeStackScreenProps<
  ExampleModalStackNavigatorParamList,
  'Details'
>;
export function ExampleModalDetailsScreen({
  navigation, // ExampleModalStackNavigator
  route: {params},
}: ExampleModalDetailsSreenProps) {
  return (
    <View style={styles.baseView}>
      <QuickTestLabel title={params.text || ''} />
      <QuickTestButton
        title="Go Back"
        bordered
        onPress={() => {
          navigation.goBack(); // ExampleModalStackNavigator
        }}
      />
    </View>
  );
}

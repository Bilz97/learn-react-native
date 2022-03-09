import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {QuickTestButton} from '../../../../Components/widgets';
import {RootStackNavigationProp} from '../../../../Components/RootStackNavigator';
import {ExampleModalStackNavigatorParamList} from '..';
import {styles} from './style';

export type ExampleModalRootScreenParamList = {
  text?: string;
};
type ExampleModalRootSreenProps = NativeStackScreenProps<
  ExampleModalStackNavigatorParamList,
  'Root'
>;
export function ExampleModalRootScreen({
  navigation,
}: ExampleModalRootSreenProps) {
  const rootStackNavigation = useNavigation<RootStackNavigationProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Example Modal',
    });
  }, [navigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton
        title="Details"
        bordered
        onPress={() => {
          navigation.navigate('Details', {text: 'Data from ExampleModalRoot'});
        }}
      />
      <QuickTestButton
        title="Dismiss"
        bordered
        onPress={() => {
          rootStackNavigation.goBack();
        }}
      />
    </View>
  );
}

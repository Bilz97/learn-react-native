import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  baseView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', // along primary axis
    alignItems: 'center', // along secondary axis
  },
  sectionSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: '#808080',
  },
  itemSeparator: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#C0C0C0',
  },
});

import {StyleSheet} from 'react-native';

const color = {
  iOSButton: {
    lightTheme: '#007AFF',
    darkTheme: '#0A84FF',
  },
};

export const styles = StyleSheet.create({
  iOSButtonColorEnabled: {
    color: color.iOSButton.lightTheme,
  },
  iOSButtonColorDisabled: {
    color: `${color.iOSButton.lightTheme}40`,
  },
  quickTestButton: {
    marginHorizontal: 4,
    marginVertical: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  quickTestWidgetBorder: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  quickTestLabel: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
});

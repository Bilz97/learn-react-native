import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './style';

export type QuickTestButtonProps = {
  title: string;
  onPress: () => void;
  bordered?: boolean;
  disabled?: boolean;
};
export const QuickTestButton = (props: QuickTestButtonProps) => {
  return (
    <Pressable
      style={[
        styles.quickTestButton,
        props.bordered ? styles.quickTestWidgetBorder : {},
      ]}
      disabled={!!props.disabled}
      onPress={props.onPress}>
      <Text
        style={
          props.disabled
            ? styles.iOSButtonColorDisabled
            : styles.iOSButtonColorEnabled
        }>
        {props.title}
      </Text>
    </Pressable>
  );
};

export type QuickTestLabelProps = {
  title: string;
  bordered?: boolean;
  textColor?: string;
  backgroundColor?: string;
};
export const QuickTestLabel = (props: QuickTestLabelProps) => {
  return (
    <Text
      style={[
        styles.quickTestLabel,
        props.bordered ? styles.quickTestWidgetBorder : {},
        props.textColor ? {color: props.textColor} : {},
        props.backgroundColor ? {backgroundColor: props.backgroundColor} : {},
      ]}>
      {props.title}
    </Text>
  );
};

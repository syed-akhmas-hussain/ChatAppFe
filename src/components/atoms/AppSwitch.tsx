import React, { forwardRef } from 'react';
import {
  ColorValue,
  StyleSheet,
  Switch,
  SwitchProps,
  View,
} from 'react-native';

import { Colors } from '@/theme';
import { AppText } from './AppText';

export interface AppSwitchProps extends SwitchProps {
  thumbColor?: ColorValue;
  sideText?: string;
  trackColor?: {
    true?: ColorValue;
    false?: ColorValue;
  };
}
export const AppSwitch = forwardRef<Switch, AppSwitchProps>(
  (
    {
      thumbColor,
      trackColor,
      disabled,
      value,
      onValueChange,
      sideText = 'Switch',
      ...props
    },
    ref,
  ) => {
    const resolvedTrackColor = {
      false: disabled ? Colors.gray.c200 : Colors.gray.c300,

      true: disabled ? Colors.primary.c200 : Colors.primary.c500,

      ...trackColor,
    };

    const resolvedThumbColor =
      thumbColor ?? (disabled ? Colors.gray.c100 : Colors.common.white);
    return (
      <View style={styles.container}>
        <AppText.Body>{sideText}</AppText.Body>
        <Switch
          ref={ref}
          value={value}
          onValueChange={onValueChange}
          {...props}
          disabled={disabled}
          thumbColor={resolvedThumbColor}
          trackColor={resolvedTrackColor}
        />
      </View>
    );
  },
);
AppSwitch.displayName = 'AppSwitch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

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
      false: disabled ? Colors.gray : Colors.gray,

      true: disabled ? Colors.primary : Colors.primary,

      ...trackColor,
    };

    const resolvedThumbColor =
      thumbColor ?? (disabled ? Colors.gray : Colors.surface);
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

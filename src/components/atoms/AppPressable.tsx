import { Colors } from '@/theme';
import { isIos } from '@/utils/utils';
import React, { forwardRef } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

export type AppPressableProps = PressableProps & {
  pressedOpacity?: number;
  containerStyle?: StyleProp<ViewStyle>;
};

export const AppPressable = forwardRef<View, AppPressableProps>(
  (
    { pressedOpacity = 0.8, style, android_ripple, containerStyle, ...props },
    ref,
  ) => {
    const Component = (
      <Pressable
        ref={ref}
        {...props}
        android_ripple={
          android_ripple ?? {
            color: Colors.gray.c300,
          }
        }
        style={state => {
          const pressedStyle =
            isIos && state.pressed ? { opacity: pressedOpacity } : undefined;

          if (typeof style === 'function') {
            return [style(state), pressedStyle];
          }

          return [style, pressedStyle];
        }}
      />
    );
    return containerStyle ? (
      <View style={containerStyle}>{Component}</View>
    ) : (
      Component
    );
  },
);

AppPressable.displayName = 'AppPressable';

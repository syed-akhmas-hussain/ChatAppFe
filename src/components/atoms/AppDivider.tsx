import { Colors, moderateScale, scale, verticalScale } from '@/theme';
import { AppColor } from '@/types/colors';
import { forwardRef } from 'react';
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface AppDividerProps extends ViewProps {
  orientation?: 'horizontal' | 'vertical';
  length?: DimensionValue;
  thickness?: number;
  color?: AppColor;
  inset?: number;
  style?: StyleProp<ViewStyle>;
}
export const AppDivider = forwardRef<View, AppDividerProps>(
  (
    {
      orientation = 'horizontal',
      length = '100%',
      thickness = StyleSheet.hairlineWidth * 2,
      color = Colors.semantic.border,
      inset = 0,
      style,
      ...props
    },
    ref,
  ) => {
    const isHorizontal = orientation === 'horizontal';
    const resolvedInsets = moderateScale(inset);
    const resolvedThickness = moderateScale(thickness);
    const resolvedLength =
      typeof length === 'number'
        ? isHorizontal
          ? scale(length)
          : verticalScale(length)
        : length;
    const dividerStyle: ViewStyle = isHorizontal
      ? {
          width: resolvedLength,
          height: resolvedThickness,
          marginLeft: resolvedInsets,
          backgroundColor: color,
        }
      : {
          width: resolvedThickness,
          height: resolvedLength,
          marginTop: resolvedInsets,
          backgroundColor: color,
        };
    return <View ref={ref} {...props} style={[dividerStyle, style]} />;
  },
);
AppDivider.displayName = 'AppDivider';

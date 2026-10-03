import { Colors, moderateScale, scale, Sizes, verticalScale } from '@/theme';
import { AppColor } from '@/types/colors';
import { forwardRef } from 'react';
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { AppText } from './AppText';
import { AppPressableProps } from './AppPressable';

interface AppDividerProps extends ViewProps {
  orientation?: 'horizontal' | 'vertical';
  length?: DimensionValue;
  thickness?: number;
  color?: AppColor;
  inset?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text?: string;
  onPress?: AppPressableProps['onPress'];
}
export const AppDivider = forwardRef<View, AppDividerProps>(
  (
    {
      orientation = 'horizontal',
      length = '100%',
      thickness = StyleSheet.hairlineWidth * 2,
      color = Colors.border.default,
      inset = 0,
      style,
      textStyle,
      text,
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

    if (isHorizontal && text) {
      return (
        <View
          ref={ref}
          {...props}
          style={[
            styles.horizontalWithText,
            { width: resolvedLength, marginLeft: resolvedInsets },
            style,
          ]}
        >
          <View
            style={[
              styles.line,
              {
                height: resolvedThickness,
                backgroundColor: color,
              },
            ]}
          />

          <AppText.Caption style={textStyle}>{text}</AppText.Caption>

          <View
            style={[
              styles.line,
              {
                height: resolvedThickness,
                backgroundColor: color,
              },
            ]}
          />
        </View>
      );
    }

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

    return (
      <View ref={ref} {...props} style={[dividerStyle, style]}>
        {text && <AppText.Caption style={textStyle}>{text}</AppText.Caption>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  horizontalWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(Sizes.xs),
  },
  line: {
    flex: 1,
  },
});
AppDivider.displayName = 'AppDivider';

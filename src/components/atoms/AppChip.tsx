import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { AppPressable, AppPressableProps } from './AppPressable';
import { IconName } from '@/assets/Icons/svg';
import { forwardRef } from 'react';
import { Colors, moderateScale, scale, Sizes, verticalScale } from '@/theme';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';

export const ChipVariant = {
  Solid: 'solid',
  Soft: 'soft',
  Outline: 'outline',
} as const;

export type ChipVariant = (typeof ChipVariant)[keyof typeof ChipVariant];

export interface AppChipProps extends Omit<AppPressableProps, 'children'> {
  label: string;
  variant?: ChipVariant;
  leftIcon?: IconName;
  rightIcon?: IconName;
  selected?: boolean;
  textStyle?: StyleProp<TextStyle>;
}
export const AppChip = forwardRef<View, AppChipProps>(
  (
    {
      label,
      variant = 'solid',
      selected = false,
      disabled = false,
      leftIcon,
      rightIcon,
      textStyle,
      style,
      ...props
    },
    ref,
  ) => {
    const containerDynamicStyles: ViewStyle = {};
    let textColor;
    switch (variant) {
      case ChipVariant.Solid:
        containerDynamicStyles.backgroundColor = selected
          ? Colors.primary.c600
          : Colors.primary.c500;
        break;
      case ChipVariant.Soft:
        containerDynamicStyles.backgroundColor = selected
          ? Colors.primary.c100
          : Colors.gray.c200;
        textColor = Colors.primary.c700;
        break;
      case ChipVariant.Outline:
        containerDynamicStyles.borderColor = Colors.primary.c500;
        containerDynamicStyles.backgroundColor = 'transparent';
        textColor = Colors.primary.c700;
        break;
      default:
        break;
    }

    if (disabled) {
      containerDynamicStyles.backgroundColor = Colors.gray.c200;
      textColor = Colors.gray.c400;
      containerDynamicStyles.borderColor = Colors.gray.c200;
    }

    return (
      <AppPressable
        ref={ref}
        {...props}
        style={state =>
          typeof style === 'function'
            ? [styles.container, containerDynamicStyles, style(state)]
            : [styles.container, containerDynamicStyles, style]
        }
        containerStyle={styles.wrapper}
      >
        <View style={styles.content}>
          {leftIcon && (
            <AppIcon name={leftIcon} size={moderateScale(Sizes.sm)} />
          )}
          <AppText.Label numberOfLines={1} style={[textStyle]}>
            {label}
          </AppText.Label>
          {rightIcon && (
            <AppIcon name={rightIcon} size={moderateScale(Sizes.sm)} />
          )}
        </View>
      </AppPressable>
    );
  },
);
AppChip.displayName = 'AppChip';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(Sizes.md),
    paddingVertical: verticalScale(Sizes.xs),
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(Sizes.xs),
  },

  wrapper: {
    borderRadius: 999,
    overflow: 'hidden',
  },
});

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
import {
  Colors,
  moderateScale,
  Radius,
  scale,
  Sizes,
  verticalScale,
} from '@/theme';
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
          ? Colors.primary
          : Colors.primary;
        break;
      case ChipVariant.Soft:
        containerDynamicStyles.backgroundColor = selected
          ? Colors.primary
          : Colors.gray;
        textColor = Colors.primary;
        break;
      case ChipVariant.Outline:
        containerDynamicStyles.borderColor = Colors.primary;
        containerDynamicStyles.backgroundColor = 'transparent';
        textColor = Colors.primary;
        break;
      default:
        break;
    }

    if (disabled) {
      containerDynamicStyles.backgroundColor = Colors.gray;
      textColor = Colors.gray;
      containerDynamicStyles.borderColor = Colors.gray;
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
    borderRadius: Radius.full,
    borderWidth: StyleSheet.hairlineWidth,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(Sizes.xs),
  },

  wrapper: {
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
});

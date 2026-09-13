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
  label: string | number;
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
      variant = ChipVariant.Soft,
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
    let textColor: string = Colors.chip.inactive.text;
    let iconColor: string = Colors.chip.inactive.text;

    switch (variant) {
      case ChipVariant.Solid:
        containerDynamicStyles.backgroundColor = selected
          ? Colors.chip.active.background
          : Colors.chip.inactive.background;

        containerDynamicStyles.borderColor = 'transparent';

        textColor = selected
          ? Colors.chip.active.text
          : Colors.chip.inactive.text;

        iconColor = textColor;
        break;

      case ChipVariant.Soft:
        containerDynamicStyles.backgroundColor = selected
          ? Colors.chip.active.background
          : Colors.chip.inactive.background;

        containerDynamicStyles.borderColor = 'transparent';

        textColor = selected
          ? Colors.chip.active.text
          : Colors.chip.inactive.text;

        iconColor = textColor;
        break;

      case ChipVariant.Outline:
        containerDynamicStyles.backgroundColor = Colors.chip.outline.background;

        containerDynamicStyles.borderColor = selected
          ? Colors.chip.active.border
          : Colors.chip.outline.border;

        textColor = selected
          ? Colors.chip.active.text
          : Colors.chip.outline.text;

        iconColor = textColor;
        break;
    }

    if (disabled) {
      containerDynamicStyles.backgroundColor = Colors.chip.disabled.background;

      containerDynamicStyles.borderColor = Colors.chip.disabled.border;

      textColor = Colors.chip.disabled.text;
      iconColor = Colors.chip.disabled.text;
    }

    return (
      <AppPressable
        ref={ref}
        {...props}
        disabled={disabled}
        style={state =>
          typeof style === 'function'
            ? [styles.container, containerDynamicStyles, style(state)]
            : [styles.container, containerDynamicStyles, style]
        }
        containerStyle={styles.wrapper}
      >
        <View style={styles.content}>
          {leftIcon && (
            <AppIcon
              name={leftIcon}
              size={moderateScale(Sizes.sm)}
              color={iconColor}
            />
          )}

          <AppText.Label
            numberOfLines={1}
            style={[styles.label, { color: textColor }, textStyle]}
          >
            {label}
          </AppText.Label>

          {rightIcon && (
            <AppIcon
              name={rightIcon}
              size={moderateScale(Sizes.sm)}
              color={iconColor}
            />
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
    justifyContent: 'center',

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

  label: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    fontWeight: '500',
  },

  wrapper: {
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
});

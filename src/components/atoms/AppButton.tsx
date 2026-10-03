import { forwardRef, ReactNode } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';

import { AppPressable, AppPressableProps } from './AppPressable';
import { Radius, scale, Sizes, verticalScale } from '@/theme';
import { AppIcon, AppText } from '.';
import { Button, ButtonVariant } from '@/theme';
type LeftIconProps = {
  leftIcon: ReactNode;
  rightIcon?: never;
};

type RightIconProps = {
  rightIcon: ReactNode;
  leftIcon?: never;
};

type NoIconProps = {
  leftIcon?: never;
  rightIcon?: never;
};

export type ButtonIconProps = LeftIconProps | RightIconProps | NoIconProps;
export type AppButtonProps = Omit<AppPressableProps, 'children'> &
  ButtonIconProps & {
    title: string;

    variant?: ButtonVariant;

    loading?: boolean;
    success?: boolean;
    error?: boolean;

    textStyle?: StyleProp<TextStyle>;
  };

export const AppButton = forwardRef<View, AppButtonProps>(
  (
    {
      title,
      variant = 'primary',

      leftIcon,
      rightIcon,

      loading = false,
      success = false,
      error = false,

      disabled = false,

      style,
      textStyle,

      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const isDisableInteraction = success || error || disabled || loading;

    const colors = isDisabled ? Button.disabled : Button.variants[variant];

    const spinnerColor =
      variant === 'primary' || variant === 'secondary'
        ? Button.spinner.light
        : Button.spinner.dark;
    return (
      <AppPressable
        ref={ref}
        {...props}
        disabled={isDisableInteraction || isDisabled}
        containerStyle={styles.wrapper}
        style={state => {
          const baseStyle = [
            styles.container,
            {
              backgroundColor: colors.background,
              borderColor: colors.border,
            },
          ];

          return typeof style === 'function'
            ? [...baseStyle, style(state)]
            : [...baseStyle, style];
        }}
      >
        <View style={styles.content}>
          {leftIcon}

          <AppText.Label
            style={[
              styles.text,
              {
                color: colors.foreground,
              },
              textStyle,
            ]}
          >
            {title}
          </AppText.Label>

          {rightIcon}
          {loading ? (
            <ActivityIndicator color={spinnerColor} />
          ) : success ? (
            <AppText.Label
              style={[
                styles.text,
                {
                  color: Button.success.color,
                },
                textStyle,
              ]}
            >
              <AppIcon name={'CircleCheck'} size={Sizes.xl} color={'green'} />
            </AppText.Label>
          ) : error ? (
            <AppText.Label
              style={[
                styles.text,
                {
                  color: Button.error.color,
                },
                textStyle,
              ]}
            >
              <AppIcon name={'X'} size={Sizes.xl} color={'red'} />
            </AppText.Label>
          ) : null}
        </View>
      </AppPressable>
    );
  },
);

AppButton.displayName = 'AppButton';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: Radius.md,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: scale(Sizes.md),
    paddingVertical: verticalScale(Sizes.sm),

    borderRadius: Radius.md,
    borderWidth: StyleSheet.hairlineWidth,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: scale(Sizes.sm),
  },

  text: {
    textAlign: 'center',
  },
});

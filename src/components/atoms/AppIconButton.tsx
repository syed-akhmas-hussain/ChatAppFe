import { Colors, moderateScale, Radius, Sizes } from '@/theme';
import { View, ViewStyle } from 'react-native';
import { forwardRef } from 'react';
import { IconName } from '@/assets/Icons/svg';
import { AppPressable, AppPressableProps } from './AppPressable';
import { AppIcon } from './AppIcon';

export interface AppIconButtonProps extends AppPressableProps {
  iconName?: IconName;
  iconSize?: number;
  iconColor?: string;
  iconShape?: 'square' | 'circle';
  borderless?: boolean;
  equalToButton?: boolean;
}
export const AppIconButton = forwardRef<View, AppIconButtonProps>(
  (
    {
      iconName = 'X',
      iconSize = moderateScale(Sizes.lg),
      iconColor = Colors.icon,
      iconShape = 'square',
      borderless = false,
      equalToButton = false,
      ...props
    },
    ref,
  ) => {
    const buttonSize = equalToButton
      ? moderateScale(Sizes._6xl)
      : moderateScale(Sizes._2xl);
    return (
      <AppPressable
        ref={ref}
        {...props}
        hitSlop={props?.hitSlop ?? Sizes.sm}
        style={state => {
          const baseStyle: ViewStyle = {
            width: buttonSize,
            height: buttonSize,
            alignItems: 'center',
            justifyContent: 'center',

            ...(!borderless && {
              borderWidth: 1,
              borderColor: Colors.border.default,
              borderRadius: iconShape === 'circle' ? buttonSize / 2 : Radius.xs,
            }),

            overflow: 'hidden',
          };
          return typeof props?.style === 'function'
            ? [props.style(state), baseStyle]
            : [baseStyle, props.style];
        }}
      >
        <AppIcon name={iconName} size={iconSize} color={iconColor} />
      </AppPressable>
    );
  },
);
AppIconButton.displayName = 'AppIconButton';

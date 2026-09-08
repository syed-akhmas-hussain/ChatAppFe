import { Colors, moderateScale, Sizes } from '@/theme';
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
}
export const AppIconButton = forwardRef<View, AppIconButtonProps>(
  (
    {
      iconName = 'X',
      iconSize = moderateScale(Sizes.lg),
      iconColor = Colors.common.black,
      iconShape = 'square',
      borderless = false,
      ...props
    },
    ref,
  ) => {
    return (
      <AppPressable
        ref={ref}
        {...props}
        hitSlop={props?.hitSlop ?? Sizes.sm}
        style={state => {
          const baseStyle: ViewStyle = {
            ...(!borderless && {
              borderWidth: 1,
              borderColor: Colors.semantic.border,
              borderRadius:
                iconShape === 'circle'
                  ? moderateScale(iconSize / 2)
                  : moderateScale(Sizes._2xs),
            }),
            overflow: 'hidden',
          };
          return typeof props?.style === 'function'
            ? [props.style(state), baseStyle]
            : [props.style, baseStyle];
        }}
      >
        <AppIcon name={iconName} size={iconSize} color={iconColor} />
      </AppPressable>
    );
  },
);
AppIconButton.displayName = 'AppIconButton';

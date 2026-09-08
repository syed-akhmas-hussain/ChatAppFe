import { Colors, moderateScale, Sizes } from '@/theme';
import { forwardRef, ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { AppText } from './AppText';
import { AppColor } from '@/types/colors';

export const BadgeVariant = {
  Solid: 'solid',
  Soft: 'soft',
  Outline: 'outline',
} as const;

export type BadgeVariant = (typeof BadgeVariant)[keyof typeof BadgeVariant];

export interface AppBadgeProps extends ViewProps {
  children?: ReactNode;
  dot?: boolean;
  max?: number;
  size?: number;
  color?: AppColor;
  textColor?: AppColor;
  variant?: BadgeVariant;
  style?: StyleProp<ViewStyle>;
}
export const AppBadge = forwardRef<View, AppBadgeProps>(
  (
    {
      children,
      dot = false,
      max = 99,
      size = Sizes._2xl,
      color = Colors.gray,
      textColor = Colors.gray,
      variant = 'solid',
      style,
      ...props
    },
    ref,
  ) => {
    const resolvedSize = moderateScale(size);
    const containerStyle: ViewStyle = {
      minWidth: resolvedSize,
      height: resolvedSize,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: resolvedSize / 2,
      paddingHorizontal: dot ? 0 : moderateScale(Sizes.xs),
    };
    switch (variant) {
      case BadgeVariant.Outline:
        containerStyle.borderWidth = StyleSheet.hairlineWidth;
        containerStyle.borderColor = color;
        break;
      case BadgeVariant.Soft:
        containerStyle.backgroundColor = `${String(color)}20`;
        break;
      default:
        containerStyle.backgroundColor = color;
        break;
    }
    let content = null;
    if (!dot && children) {
      if (typeof children === 'number')
        content = children > max ? `${max}+` : children;
      else content = children;
    }
    return (
      <View ref={ref} {...props} style={[containerStyle, style]}>
        {!dot && (
          <AppText.Body
            numberOfLines={1}
            style={{
              color: variant === BadgeVariant.Outline ? color : textColor,
            }}
          >
            {content}
          </AppText.Body>
        )}
      </View>
    );
  },
);
AppBadge.displayName = 'AppBadge';

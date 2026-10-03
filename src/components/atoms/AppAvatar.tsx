import { forwardRef } from 'react';
import { AppImage, AppImageProps } from './AppImage';
import { Colors, moderateScale, Sizes, ZIndex } from '@/theme';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { AvatarPlaceholder } from '@/assets/Icons/images';
import { AppIconButton } from './AppIconButton';
import { IconName } from '@/assets/Icons/svg';
import { AppBadge } from './AppBadge';
export type AppAvatarProps = AppImageProps & {
  size?: number | Extract<keyof typeof Sizes, 'sm' | 'md' | 'lg' | 'xl'>;
  conatinerStyles?: StyleProp<ViewStyle>;
} & (
    | {
        topRightIconName?: IconName;
        bottomRightIconName?: IconName;
        toprightOnPress?: () => void;
        bottomRightOnPress?: () => void;
        badge?: never;
      }
    | {
        topRightIconName?: never;
        bottomRightIconName?: never;
        toprightOnPress?: never;
        bottomRightOnPress?: never;
        badge?: Element;
      }
  );
export const AppAvatar = forwardRef<Image, AppAvatarProps>(
  (
    {
      size = moderateScale(Sizes._4xl * 3),
      topRightIconName,
      bottomRightIconName,
      toprightOnPress,
      bottomRightOnPress,
      badge,
      conatinerStyles,
      ...props
    },
    ref,
  ) => {
    const resolvedSize =
      typeof size === 'number'
        ? moderateScale(size)
        : moderateScale(Sizes[size]);

    return (
      <View style={[styles.avatarContainer, conatinerStyles]}>
        <AppImage
          ref={ref}
          {...props}
          style={[{ width: resolvedSize, height: resolvedSize }, props.style]}
          radius={resolvedSize / 2}
          fallbackSource={AvatarPlaceholder}
          resizeMode={props.source ? 'cover' : 'contain'}
        />
        {topRightIconName && (
          <AppIconButton
            iconName={topRightIconName}
            iconShape="circle"
            style={[styles.topRightIcon, styles.commonStyles]}
            onPress={toprightOnPress}
          />
        )}
        {bottomRightIconName && (
          <AppIconButton
            iconName={bottomRightIconName}
            iconShape="circle"
            style={[styles.bottomRightIcon, styles.commonStyles]}
            onPress={bottomRightOnPress}
          />
        )}
        {badge && (
          <AppBadge
            dot
            color={Colors.status.success}
            size={Sizes.sm}
            style={[styles.bottomRightIcon, styles.commonStyles]}
          />
        )}
      </View>
    );
  },
);
AppAvatar.displayName = 'AppAvatar';
const styles = StyleSheet.create({
  avatarContainer: {
    position: 'relative',
    alignSelf: 'center',
  },
  commonStyles: {
    position: 'absolute',
    right: moderateScale(Sizes._2xs),
  },
  topRightIcon: {
    top: moderateScale(0),
    zIndex: ZIndex.floatingIcon,
  },
  bottomRightIcon: {
    bottom: moderateScale(0),
    zIndex: ZIndex.dropdown,
  },
});

import { forwardRef } from 'react';
import { AppImage, AppImageProps } from './AppImage';
import { moderateScale, Sizes, ZIndex } from '@/theme';
import { Image, StyleSheet, View } from 'react-native';
import { AvatarPlaceholder } from '@/assets/Icons/images';
import { AppIconButton } from './AppIconButton';
import { IconName } from '@/assets/Icons/svg';
export interface AppAvatarProps extends AppImageProps {
  size?: number | Extract<keyof typeof Sizes, 'sm' | 'md' | 'lg' | 'xl'>;
  topRightIconName?: IconName;
  bottomRightIconName?: IconName;
  toprightOnPress?: () => void;
  bottomRightOnPress?: () => void;
}
export const AppAvatar = forwardRef<Image, AppAvatarProps>(
  (
    {
      size = moderateScale(Sizes._4xl * 3),
      topRightIconName,
      bottomRightIconName,
      toprightOnPress,
      bottomRightOnPress,
      ...props
    },
    ref,
  ) => {
    const resolvedSize =
      typeof size === 'number'
        ? moderateScale(size)
        : moderateScale(Sizes[size]);

    return (
      <View style={styles.avatarContainer}>
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

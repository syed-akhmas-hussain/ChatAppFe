import React, { forwardRef, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { type BaseToastProps } from 'react-native-toast-message';
import { AppPressable, type AppPressableProps } from './AppPressable';
import { ToastTypes } from '@/configs';
import { Colors, moderateScale, scale, Sizes, verticalScale } from '@/theme';
import { BlurView } from '@react-native-community/blur';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';

export type AppToastProps = Pick<
  BaseToastProps,
  | 'text1'
  | 'text2'
  | 'text1Style'
  | 'text2Style'
  | 'text1NumberOfLines'
  | 'text2NumberOfLines'
> & {
  leftIcon?: ReactNode;
  rigtIcon?: ReactNode;
  toastType?: ToastTypes;
} & Omit<AppPressableProps, 'containerStyle'>;
export const AppToast = forwardRef<View, AppToastProps>(
  (
    {
      text1,
      text2,
      text1Style,
      text2Style,
      text1NumberOfLines = 1,
      text2NumberOfLines = 2,
      toastType = ToastTypes.SUCCESS,
      pressedOpacity,
      onPress,
      style,
    },
    ref,
  ) => {
    const resolvedToast = (() => {
      switch (toastType) {
        case ToastTypes.SUCCESS:
          return {
            color: Colors.status.success,
            heading: text1 ?? ToastTypes.SUCCESS,
            body: text2 ?? ToastTypes.SUCCESS,
            icon: <AppIcon name="CircleCheck" size={moderateScale(Sizes.xl)} />,
          };
        case ToastTypes.ERROR:
          return {
            color: Colors.status.error,
            heading: text1 ?? ToastTypes.ERROR,
            body: text2 ?? ToastTypes.ERROR,
            icon: <AppIcon name="Error" size={moderateScale(Sizes.xl)} />,
          };
        case ToastTypes.WARNING:
          return {
            color: Colors.status.warning,
            heading: text1 ?? ToastTypes.WARNING,
            body: text2 ?? ToastTypes.WARNING,
            icon: <AppIcon name="Warning" size={moderateScale(Sizes.xl)} />,
          };
        default:
          return {
            color: Colors.primary,
            heading: text1 ?? ToastTypes.INFO,
            body: text2 ?? ToastTypes.INFO,
            icon: <AppIcon name="Info" size={moderateScale(Sizes.xl)} />,
          };
      }
    })();
    return (
      <AppPressable
        ref={ref}
        pressedOpacity={pressedOpacity}
        disabled={!onPress}
        containerStyle={styles.wrapper}
        style={state =>
          typeof style === 'function'
            ? [styles.container, style(state)]
            : [styles.container, style]
        }
      >
        <View
          style={[
            styles.glassContainer,
            {
              borderColor: `${resolvedToast.color}30`,
            },
          ]}
        >
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="dark"
            blurAmount={20}
          />

          <View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: `${resolvedToast.color}80`,
              },
            ]}
          />
          {resolvedToast.icon}
          <View style={styles.content}>
            <AppText.Title
              style={text1Style}
              numberOfLines={text1NumberOfLines}
            >
              {resolvedToast.heading}
            </AppText.Title>
            <AppText.Body style={text2Style} numberOfLines={text2NumberOfLines}>
              {resolvedToast.body}
            </AppText.Body>
          </View>
        </View>
      </AppPressable>
    );
  },
);
AppToast.displayName = 'Apptoast';
const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    maxWidth: scale(400),
    overflow: 'hidden',
  },

  container: {
    width: '100%',
  },

  glassContainer: {
    minHeight: scale(Sizes._7xl * 1.25),
    width: '100%',
    borderRadius: scale(Sizes._2xl),
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(Sizes.md),
  },

  content: {
    paddingHorizontal: scale(Sizes.sm),
    paddingVertical: verticalScale(Sizes.xs),
  },
});

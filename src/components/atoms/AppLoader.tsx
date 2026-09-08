import { Colors, moderateScale, Sizes } from '@/theme';
import { AppColor } from '@/types/colors';
import { forwardRef, ReactNode } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';
export interface AppLoaderProps
  extends Omit<ActivityIndicatorProps, 'color' | 'size'> {
  size?: number;
  color?: AppColor;
  centered?: boolean;
  children?: ReactNode;
}
export const AppLoader = forwardRef<ActivityIndicator, AppLoaderProps>(
  (
    {
      size = Sizes.md,
      color = Colors.border.default,
      centered,
      children,
      ...props
    },
    ref,
  ) => {
    const loader = children ?? (
      <ActivityIndicator
        ref={ref}
        {...props}
        size={moderateScale(size)}
        color={color}
        style={props.style}
      />
    );
    return !centered ? loader : <View style={styles.center}>{loader}</View>;
  },
);
AppLoader.displayName = 'AppLoader';
const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

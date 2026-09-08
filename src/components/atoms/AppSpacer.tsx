import { scale, verticalScale } from '@/theme';
import { forwardRef } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

type FixedSpacerProps = {
  size: number;
  flex?: never;
};
type FlexSpacerProps = {
  size?: never;
  flex: number;
};
export type AppSpacerProps = {
  horizontal?: boolean;
} & (FixedSpacerProps | FlexSpacerProps) &
  ViewProps;
export const AppSpacer = forwardRef<View, AppSpacerProps>(
  ({ horizontal = false, ...props }, ref) => {
    if ('flex' in props) return <View ref={ref} style={{ flex: props.flex }} />;
    const styles: ViewStyle = horizontal
      ? { width: scale(props?.size) }
      : { height: verticalScale(props?.size) };
    return <View ref={ref} {...props} style={styles} />;
  },
);
AppSpacer.displayName = 'AppSpacer';

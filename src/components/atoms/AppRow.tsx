import { scale, Sizes } from '@/theme';
import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

type AppRowProps = {
  children: ReactNode;
  gap?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  rowStyle?: StyleProp<ViewStyle>;
} & ViewProps;
export const AppRow = ({
  children,
  gap = 12,
  justifyContent,
  rowStyle,
  ...rest
}: AppRowProps) => {
  return (
    <View
      {...rest}
      style={[
        styles.row,
        !justifyContent ? { gap: scale(gap) } : { justifyContent },
        rowStyle,
      ]}
    >
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(Sizes.sm),
  },
});

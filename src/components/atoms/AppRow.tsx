import { scale, Sizes } from '@/theme';
import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

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
};
export const AppRow = ({
  children,
  gap = 12,
  justifyContent,
  rowStyle,
}: AppRowProps) => {
  return (
    <View
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
    gap: scale(Sizes.sm),
  },
});

import { scale, Sizes } from '@/theme';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type AppRowProps = {
  children: ReactNode;
  gap?: number;
};
export const AppRow = ({ children, gap = 12 }: AppRowProps) => {
  return <View style={[styles.row, { gap: scale(gap) }]}>{children}</View>;
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: scale(Sizes.sm),
  },
});

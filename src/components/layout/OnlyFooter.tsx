import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { isIos } from '@/utils/utils';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  KeyboardAvoidingView,
  KeyboardStickyView,
} from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultProps } from './Default';

export type OnlyFooterProps = DefaultProps & {
  footer: ReactNode;
};

export const OnlyFooter = ({
  children,
  contentContainerStyle,
  containerStyle,
  footer,
  edges = ['top', 'bottom'],
}: OnlyFooterProps) => {
  const behavior = isIos ? 'padding' : 'height';
  return (
    <SafeAreaView
      style={[styles.contentContainer, styles.flex1, containerStyle]}
      edges={edges}
    >
      <KeyboardAvoidingView behavior={behavior} style={styles.flex1}>
        <View
          style={[styles.contentContainer, styles.flex1, contentContainerStyle]}
        >
          {children}
        </View>
        <KeyboardStickyView>{footer}</KeyboardStickyView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },

  contentContainer: {
    gap: verticalScale(Sizes.lg),
    backgroundColor: Colors.background,
    paddingHorizontal: moderateScale(Sizes._2xs),
    //if u add padding , then it will effect other screens
  },
});

import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';
import { isIos } from '@/utils/utils';

export type DefaultProps = {
  children: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  edges?: Edges;
};

export const Default = ({
  containerStyle,
  contentContainerStyle,
  children,
  edges = ['top', 'bottom'],
}: DefaultProps) => {
  const behavior = isIos ? 'padding' : 'height';
  return (
    <SafeAreaView
      style={[styles.contentContainer, styles.flex1, containerStyle]}
      edges={edges}
    >
      <KeyboardAvoidingView behavior={behavior} style={styles.flex1}>
        <View style={[styles.contentContainer, contentContainerStyle]}>
          {children}
        </View>
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

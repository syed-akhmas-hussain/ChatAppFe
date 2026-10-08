import { KEYBOARD_CONFIG } from '@/configs';
import { useScroll } from '@/hooks/useScroll';
import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultProps } from './Default';

export type ScrollableContentProps = DefaultProps & {
  gap?: number;
  paddingTop?: number;
};

export const ScrollableContent = ({
  children,
  contentContainerStyle,
  gap,
  paddingTop = verticalScale(Sizes._2xs),
  containerStyle,
  edges = ['top', 'bottom'],
}: ScrollableContentProps) => {
  const { scrollRef, contentRef } = useScroll();
  return (
    <SafeAreaView
      style={[
        styles.contentContainer,
        styles.flex1,
        containerStyle,
        styles.overflow,
      ]}
      edges={edges}
    >
      <KeyboardAwareScrollView
        ref={scrollRef}
        style={[styles.flex1, contentContainerStyle]}
        bottomOffset={KEYBOARD_CONFIG.bottomOffset}
        extraKeyboardSpace={KEYBOARD_CONFIG.extraKeyboardSpace}
      >
        <View
          ref={contentRef}
          style={[
            styles.contentContainer,
            gap !== undefined && { gap: verticalScale(gap) },
            {
              paddingTop: verticalScale(paddingTop),
            },
          ]}
        >
          {children}
        </View>
      </KeyboardAwareScrollView>
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
  overflow: {
    overflow: 'hidden',
  },
});

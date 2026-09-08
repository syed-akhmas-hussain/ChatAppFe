import { KEYBOARD_CONFIG } from '@/configs';
import { ScrollProvider, useScroll } from '@/hooks/useScroll';
import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { isIos } from '@/utils/utils';
import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import {
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
  KeyboardChatScrollView,
  KeyboardStickyView,
} from 'react-native-keyboard-controller';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

type AppScreenVariants =
  | {
      scrollable: true;
      isChat?: never;
      footer?: never;
    }
  | {
      scrollable?: never;
      isChat: true;
      footer?: never;
    }
  | {
      scrollable?: never;
      isChat?: never;
      footer: ReactNode;
    }
  | {
      scrollable?: false;
      isChat?: false;
      footer?: false;
    };
export type ScrollableContentProps = {
  children: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};
export type AppScreen = AppScreenVariants & {
  containerStyle?: StyleProp<ViewStyle>;
} & ScrollableContentProps;
export const ScrolllableContent = ({
  children,
  contentContainerStyle,
}: ScrollableContentProps) => {
  const { scrollRef, contentRef } = useScroll();
  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      style={styles.scrollContainer}
      bottomOffset={KEYBOARD_CONFIG.bottomOffset}
      extraKeyboardSpace={KEYBOARD_CONFIG.extraKeyboardSpace}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
    >
      <View
        ref={contentRef}
        style={[styles.contentContainer, contentContainerStyle]}
      >
        {children}
      </View>
    </KeyboardAwareScrollView>
  );
};
export const AppScreen = ({
  children,
  containerStyle,
  contentContainerStyle,
  scrollable = true,
  isChat,
  footer,
}: AppScreen) => {
  const edges: Edge[] = ['top', 'bottom'];
  const behavior = isIos ? 'padding' : 'height';
  if (scrollable) {
    return (
      <SafeAreaView style={[styles.container, containerStyle]} edges={edges}>
        <ScrollProvider>
          <ScrolllableContent
            children={children}
            contentContainerStyle={contentContainerStyle}
          />
        </ScrollProvider>
      </SafeAreaView>
    );
  }

  if (isChat) {
    return (
      <SafeAreaView style={[styles.container, containerStyle]} edges={edges}>
        <KeyboardChatScrollView
          style={styles.scrollContainer}
          contentContainerStyle={[
            styles.contentContainer,
            contentContainerStyle,
          ]}
        >
          {children}
        </KeyboardChatScrollView>
      </SafeAreaView>
    );
  }

  if (footer) {
    return (
      <SafeAreaView style={[styles.container, containerStyle]} edges={edges}>
        <KeyboardAvoidingView
          behavior={behavior}
          style={styles.keyboardContainer}
        >
          <View style={[styles.contentContainer, contentContainerStyle]}>
            {children}
          </View>

          <KeyboardStickyView>{footer}</KeyboardStickyView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, containerStyle]} edges={edges}>
      <KeyboardAvoidingView
        behavior={behavior}
        style={styles.keyboardContainer}
      >
        <View style={[styles.contentContainer, contentContainerStyle]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(Sizes.md),
    backgroundColor: Colors.background,
  },

  keyboardContainer: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
    gap: verticalScale(Sizes.lg),
  },
});

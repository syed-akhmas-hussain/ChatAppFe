import { KEYBOARD_CONFIG } from '@/configs';
import { ScrollProvider, useScroll } from '@/hooks/useScroll';
import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { isIos } from '@/utils/utils';
import React, { ReactNode, Ref } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
  KeyboardChatScrollView,
  KeyboardStickyView,
} from 'react-native-keyboard-controller';
import { SharedValue } from 'react-native-reanimated';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

type AppScreenVariants =
  | {
      scrollable: true;
      isChat?: never;
      footer?: never;
      messageBox?: never;
      extraContentPadding?: never;
      onEndVisible?: never;
      ref?: never;
      onContentSizeChange?: never;
    }
  | {
      scrollable?: never;
      isChat: true;
      footer?: never;
      messageBox: ReactNode;
      extraContentPadding?: SharedValue<number> | undefined;
      onEndVisible?: (visible: boolean) => void;
      ref?: Ref<ScrollView> | undefined;
      onContentSizeChange?:
        | ((contentWidth: number, contentHeight: number) => void)
        | undefined;
    }
  | {
      scrollable?: never;
      isChat?: never;
      messageBox?: never;
      footer: ReactNode;
      extraContentPadding?: never;
      onEndVisible?: never;
      ref?: never;
      onContentSizeChange?: never;
    }
  | {
      scrollable?: false;
      isChat?: false;
      footer?: false;
      messageBox?: false;
      extraContentPadding?: never;
      onEndVisible?: never;
      ref?: never;
      onContentSizeChange?: never;
    };
export type ScrollableContentProps = {
  children: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  gap?: number;
  paddingTop?: number;
};
export type AppScreen = AppScreenVariants & {
  containerStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
} & ScrollableContentProps;
export const ScrolllableContent = ({
  children,
  contentContainerStyle,
  gap,
  paddingTop = verticalScale(Sizes._2xs),
}: ScrollableContentProps) => {
  const { scrollRef, contentRef } = useScroll();
  return (
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
  );
};
export const AppScreen = ({
  children,
  containerStyle,
  contentContainerStyle,
  scrollable,
  isChat,
  footer,
  edges = ['top', 'bottom'],
  gap,
  paddingTop = verticalScale(Sizes._2xs),
  messageBox,
  extraContentPadding,
  onEndVisible,
  ref,
  onContentSizeChange,
}: AppScreen) => {
  const behavior = isIos ? 'padding' : 'height';
  if (scrollable) {
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
        <ScrollProvider>
          <ScrolllableContent
            children={children}
            contentContainerStyle={containerStyle}
            gap={gap}
            paddingTop={paddingTop}
          />
        </ScrollProvider>
      </SafeAreaView>
    );
  }

  if (isChat) {
    return (
      <SafeAreaView
        style={[
          styles.flex1,
          containerStyle,
          {
            backgroundColor: Colors.background,
          },
        ]}
        edges={edges}
      >
        <KeyboardChatScrollView
          ref={ref}
          onContentSizeChange={onContentSizeChange}
          extraContentPadding={extraContentPadding}
          onEndVisible={onEndVisible}
          contentContainerStyle={[
            styles.contentContainer,
            contentContainerStyle,
            {
              paddingVertical: verticalScale(paddingTop),
            },
          ]}
        >
          {children}
        </KeyboardChatScrollView>
        <KeyboardStickyView
          style={{
            paddingHorizontal: moderateScale(Sizes._2xs),
          }}
        >
          {messageBox}
        </KeyboardStickyView>
      </SafeAreaView>
    );
  }

  if (footer) {
    return (
      <SafeAreaView
        style={[styles.contentContainer, styles.flex1, containerStyle]}
        edges={edges}
      >
        <KeyboardAvoidingView behavior={behavior} style={styles.flex1}>
          <View
            style={[
              styles.contentContainer,
              styles.flex1,
              contentContainerStyle,
            ]}
          >
            {children}
          </View>
          <KeyboardStickyView>{footer}</KeyboardStickyView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

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
  overflow: {
    overflow: 'hidden',
  },
});
